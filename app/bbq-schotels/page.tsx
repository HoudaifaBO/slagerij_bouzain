import Image from 'next/image';

const items = [
  ['BBQ-bereidingen', 'Brochettes, merguez, grillworsten en steaks.', '/images/bbq.png'],
  ['Gemarineerd vlees', 'Klaar voor grill of pan, smaakvol en vers bereid.', '/images/gemarineerd.png'],
  ['Familieschotels', 'Royale schotels voor gezinnen en kleine groepen.', '/images/schotels.png'],
  ['Feestschotels', 'Verzorgde bereidingen voor speciale momenten.', '/images/feestschotels.png'],
];

export default function BBQ() {
  return (
    <>
      <section className="pageHero visualPageHero">
        <Image src="/images/bbq.png" alt="BBQ en grillassortiment" fill priority sizes="100vw" />
        <div className="heroShade" />
        <div className="pageHeroContent">
          <span className="eyebrow">Voor grill & tafel</span>
          <h1>BBQ & Schotels</h1>
          <p>Van gemarineerde klassiekers tot complete schotels voor familie en feest.</p>
        </div>
      </section>
      <section className="section">
        <div className="grid two">
          {items.map(([t, d, i]) => (
            <article className="featureCard" key={t}>
              <div className="featureImage"><Image src={i} alt={t} fill sizes="50vw" /></div>
              <div>
                <h2>{t}</h2>
                <p>{d}</p>
                <span className="muted">Prijzen en beschikbaarheid kunnen later via MongoDB worden beheerd.</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
