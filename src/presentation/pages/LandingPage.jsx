import DownloadSection from '../components/DownloadSection.jsx';
import FeaturesSection from '../components/FeaturesSection.jsx';
import HeroSection from '../components/HeroSection.jsx';
import SiteFooter from '../components/SiteFooter.jsx';
import SiteHeader from '../components/SiteHeader.jsx';
import { getLandingCopy } from '../../application/locale/getLandingCopy.js';

export default function LandingPage({ locale, onLocaleChange }) {
  const copy = getLandingCopy(locale);

  return (
    <div className="site-shell">
      <SiteHeader copy={copy} locale={locale} onLocaleChange={onLocaleChange} />
      <main>
        <HeroSection copy={copy} />
        <FeaturesSection copy={copy} />
        <DownloadSection copy={copy} />
      </main>
      <SiteFooter />
    </div>
  );
}
