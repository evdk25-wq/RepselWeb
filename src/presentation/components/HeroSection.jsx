import DownloadLink from './DownloadLink.jsx';
import EditorDemo from './EditorDemo.jsx';

export default function HeroSection({ copy, downloads, locale }) {
  const { hero } = copy;

  return (
    <section className="hero-section" id="accueil">
      <div className="hero-copy">
        <div className="hero-copy-content">
          <h1>{hero.title}</h1>
          <p className="hero-description">{hero.description}</p>
          <div className="hero-action">
            <DownloadLink
              downloads={downloads}
              downloadCountLabel={copy.download.downloadCountLabel}
              locale={locale}
            >
              {hero.action}
            </DownloadLink>
            <span>{hero.note}</span>
          </div>
        </div>
      </div>
      <EditorDemo copy={copy} />
    </section>
  );
}
