import { DEB_DOWNLOAD_URL } from '../../infrastructure/links/repselLinks.js';

export default function DownloadLink({
  children,
  className = '',
  downloads,
  downloadCountLabel,
  locale,
}) {
  return (
    <div className="download-action">
      <a className={`btn btn-primary download-link ${className}`} href={DEB_DOWNLOAD_URL}>
        {children}
      </a>
      {downloads !== null && downloads !== undefined && (
        <span className="download-count" role="status" aria-live="polite">
          {new Intl.NumberFormat(locale).format(downloads)} {downloadCountLabel}
        </span>
      )}
    </div>
  );
}
