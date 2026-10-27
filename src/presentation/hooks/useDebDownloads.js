
import { useEffect, useState } from 'react';

const RELEASES_URL =
  'https://api.github.com/repos/evdk25-wq/Repsel/releases?per_page=100';
const RELEASES_PATH = '/repos/evdk25-wq/Repsel/releases';
const CACHE_DURATION_MS = 15 * 60 * 1000;

let cachedResult = null;
let pendingRequest = null;

function getNextPageUrl(linkHeader) {
  const nextLink = linkHeader?.match(/<([^>]+)>;\s*rel="next"/);
  if (!nextLink) return null;

  const nextUrl = new URL(nextLink[1]);
  if (
    nextUrl.origin !== 'https://api.github.com' ||
    nextUrl.pathname !== RELEASES_PATH
  ) {
    throw new Error('GitHub API returned an invalid releases page link');
  }

  return nextUrl.href;
}

async function fetchDebDownloads() {
  let pageUrl = RELEASES_URL;
  let releaseCount = 0;
  let total = 0;
  const visitedPages = new Set();

  while (pageUrl) {
    if (visitedPages.has(pageUrl)) {
      throw new Error('GitHub API returned a repeated releases page link');
    }

    visitedPages.add(pageUrl);
    const response = await fetch(pageUrl);

    if (!response.ok) {
      throw new Error(`GitHub API request failed with status ${response.status}`);
    }

    const releases = await response.json();
    if (!Array.isArray(releases)) {
      throw new Error('GitHub API returned an invalid releases response');
    }

    releaseCount += releases.length;
    for (const release of releases) {
      if (!release || !Array.isArray(release.assets)) {
        throw new Error('GitHub API returned an invalid release');
      }

      for (const asset of release.assets) {
        if (typeof asset?.name !== 'string' || !asset.name.toLowerCase().endsWith('.deb')) {
          continue;
        }

        if (!Number.isSafeInteger(asset.download_count) || asset.download_count < 0) {
          throw new Error('GitHub API returned an invalid .deb download count');
        }

        total += asset.download_count;
        if (!Number.isSafeInteger(total)) {
          throw new Error('GitHub API returned an out-of-range download total');
        }
      }
    }

    pageUrl = getNextPageUrl(response.headers.get('Link'));
  }

  return releaseCount > 0 ? total : null;
}

function getDebDownloads() {
  if (cachedResult && Date.now() - cachedResult.cachedAt < CACHE_DURATION_MS) {
    return Promise.resolve(cachedResult.downloads);
  }

  if (!pendingRequest) {
    pendingRequest = fetchDebDownloads()
      .then((downloads) => {
        cachedResult = { downloads, cachedAt: Date.now() };
        return downloads;
      })
      .finally(() => {
        pendingRequest = null;
      });
  }

  return pendingRequest;
}

export default function useDebDownloads() {
  const [downloads, setDownloads] = useState(null);

  useEffect(() => {
    let active = true;

    getDebDownloads()
      .then((total) => {
        if (active) setDownloads(total);
      })
      .catch((error) => {
        console.error('Unable to load Repsel download count:', error);
      });

    return () => {
      active = false;
    };
  }, []);

  return downloads;
}
