export default function FeaturesSection({ copy }) {
  return (
    <section className="features-section page-section" id="fonctionnalites">
      <div className="section-heading">
        <h2>{copy.featuresHeading}</h2>
        <p>{copy.featuresLead}</p>
      </div>
      <div className="feature-list">
        {copy.featureGroups.map((group) => (
          <article className="feature-row" key={group.title}>
            <h3>{group.title}</h3>
            <ul className="feature-points">
              {group.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
