import Link from 'next/link';
import Image from 'next/image';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/lib/content';

export default function Home() {
  return (
    <>
      <section className="hero homeHero">
        <Image src="/images/hero-steak.png" alt="Premium steak" fill priority sizes="100vw" />
        <div className="heroShade" />
        <div className="heroContent">
          <span className="eyebrow">Kwaliteit · Vakmanschap · Vertrouwen</span>
          <h1>Slagerij Bouzian</h1>
          <p>Uw vertrouwde slagerij in het hart van Hoboken.</p>
          <div className="heroButtons">
            <Link className="goldButton" href="/assortiment">Bekijk ons assortiment</Link>
            <Link className="ghostButton" href="/contact">Bezoek onze winkel</Link>
          </div>
        </div>
      </section>

      <section className="usp">
        <div><b>Premium kwaliteit</b><span>Zorgvuldig geselecteerd</span></div>
        <div><b>Dagelijks vers</b><span>Vers bereid in onze zaak</span></div>
        <div><b>Sinds 2001</b><span>Vertrouwd in Hoboken</span></div>
        <div><b>4,7/5</b><span>Klantbeoordeling</span></div>
      </section>

      <section className="section">
        <div className="sectionHead">
          <span className="eyebrow dark">Selectie</span>
          <h2>Een assortiment met aandacht gekozen</h2>
          <p>Enkele van onze vaste categorieën. Ontdek het volledige aanbod op de assortimentpagina.</p>
        </div>
        <div className="grid three">{categories.slice(0, 3).map((c) => <CategoryCard key={c.slug} {...c} />)}</div>
        <div className="center"><Link className="textLink" href="/assortiment">Bekijk volledig assortiment →</Link></div>
      </section>

      <section className="split section darkSection">
        <div className="splitImage"><Image src="/images/vakmanschap.png" alt="Vakmanschap en premium vlees" fill sizes="50vw" /></div>
        <div className="splitText">
          <span className="eyebrow">Ons verhaal</span>
          <h2>Een familiezaak met passie voor kwaliteit</h2>
          <p>Slagerij Bouzian is al meer dan 20 jaar een vaste waarde in Hoboken. Vakmanschap, service en kwaliteit staan centraal.</p>
          <Link className="goldButton" href="/over-ons">Lees ons verhaal</Link>
        </div>
      </section>

      <section className="section showcaseSection">
        <div className="showcaseText">
          <span className="eyebrow dark">Bezoek onze winkel</span>
          <h2>Een verzorgde zaak, een vertrouwd adres</h2>
          <p>Kom langs voor ons volledige assortiment, persoonlijk advies en verse bereidingen.</p>
          <Link className="ghostButton lightGhost" href="/contact">Bekijk locatie & openingsuren</Link>
        </div>
        <div className="showcaseImage"><Image src="/images/winkel.png" alt="Luxe interieur van Slagerij Bouzian" fill sizes="55vw" /></div>
      </section>
    </>
  );
}
