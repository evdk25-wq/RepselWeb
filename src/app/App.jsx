import { useEffect, useState } from 'react';
import LandingPage from '../presentation/pages/LandingPage.jsx';
import { getLandingCopy } from '../application/locale/getLandingCopy.js';

export default function App() {
  const [locale, setLocale] = useState('fr');
  const copy = getLandingCopy(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = copy.pageTitle;
  }, [copy.pageTitle, locale]);

  return <LandingPage locale={locale} onLocaleChange={setLocale} />;
}
