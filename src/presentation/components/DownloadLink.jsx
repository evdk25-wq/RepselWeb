import { DEB_DOWNLOAD_URL } from '../../infrastructure/links/repselLinks.js';

export default function DownloadLink({ children, className = '' }) {
  return (
    <a className={`btn btn-primary download-link ${className}`} href={DEB_DOWNLOAD_URL}>
      {children}
    </a>
  );
}
