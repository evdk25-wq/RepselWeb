import DownloadLink from './DownloadLink.jsx';

export default function DownloadSection({ copy }) {
  const { download } = copy;

  return (
    <section className="download-section page-section" id="telechargement">
      <div>
        <h2>{download.title}</h2>
        <p>{download.description}</p>
      </div>
      <DownloadLink>{download.action}</DownloadLink>
    </section>
  );
}
