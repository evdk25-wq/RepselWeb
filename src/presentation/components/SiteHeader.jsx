import { REPOSITORY_URL } from '../../infrastructure/links/repselLinks.js';

export default function SiteHeader({ copy, locale, onLocaleChange }) {
  return (
    <header className="navbar bg-base-100 shadow-sm site-header">
      <div className="navbar-start">
        <a className="wordmark" href="#accueil" aria-label="Repsel, accueil">
          <img src="/assets/BigLogo.png" alt="Repsel, éditeur Markdown open source" />
        </a>
      </div>
      <nav className="navbar-center site-nav" aria-label={copy.navigationLabel}>
        {copy.navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
        <a className="github-link" href={REPOSITORY_URL} target="_blank" rel="noreferrer">
          <svg aria-hidden="true" className="github-mark" viewBox="0 0 16 16">
            <path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38l-.01-1.49c-2.23.48-2.7-.95-2.7-.95-.36-.92-.89-1.17-.89-1.17-.73-.5.06-.49.06-.49.8.06 1.22.82 1.22.82.71 1.21 1.87.86 2.33.66.07-.52.28-.86.51-1.06-1.78-.2-3.65-.89-3.65-3.96 0-.88.31-1.6.82-2.16-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.65 7.65 0 0 1 8 3.84c.68 0 1.36.09 2 .27 1.53-1.03 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.16 0 3.08-1.87 3.76-3.66 3.96.29.25.54.74.54 1.5l-.01 2.19c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
          </svg>
          <span>GitHub</span>
        </a>
      </nav>
      <div className="navbar-end header-actions">
        <label className="language-switch">
          <span aria-hidden="true">FR</span>
          <input
            aria-label={copy.languageLabel}
            aria-checked={locale === 'en'}
            checked={locale === 'en'}
            className="toggle toggle-primary"
            onChange={(event) => onLocaleChange(event.target.checked ? 'en' : 'fr')}
            role="switch"
            type="checkbox"
          />
          <span aria-hidden="true">EN</span>
        </label>
      </div>
    </header>
  );
}
