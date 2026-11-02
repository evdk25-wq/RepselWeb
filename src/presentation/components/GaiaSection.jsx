import { GAIA_SUPPORT_URL } from '../../infrastructure/links/repselLinks.js';

export default function GaiaSection({ copy }) {
  const { gaia } = copy;

  return (
    <section className="gaia-section" aria-labelledby="gaia-heading">
      <img className="gaia-logo" src="/assets/gaia-logo-transparent.png" alt="GAIA, Voice of the Voiceless" />
      <div className="gaia-copy">
        <p className="gaia-label">{gaia.label}</p>
        <h2 id="gaia-heading">{gaia.title}</h2>
        <p>{gaia.description}</p>
      </div>
      <a className="btn btn-outline gaia-link" href={GAIA_SUPPORT_URL} target="_blank" rel="noreferrer">
        {gaia.action}
      </a>
    </section>
  );
}
