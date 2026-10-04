import Image from 'next/image';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/lib/content';

export default function Assortiment() {
  return (
    <>
      <section className="pageHero visualPageHero">
        <Image src="/images/rundvlees.png" alt="Premium rundvlees" fill priority sizes="100vw" />
        <div className="heroShade" />
        <div className="pageHeroContent">
          <span className="eyebrow">Slagerij Bouzian</span>
          <h1>Ons assortiment</h1>
          <p>Een overzichtelijke selectie van vers vlees, BBQ-bereidingen en schotels.</p>
        </div>
      </section>
      <section className="section">
        <div className="grid two">{categories.map((c) => <CategoryCard key={c.slug} {...c} />)}</div>
      </section>
    </>
  );
}
