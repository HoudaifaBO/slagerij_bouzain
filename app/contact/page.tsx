import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { hours } from '@/lib/content';

export default function Contact() {
  return (
    <>
      <section className="pageHero visualPageHero">
        <Image src="/images/winkel.png" alt="Slagerij Bouzian winkel" fill priority sizes="100vw" />
        <div className="heroShade" />
        <div className="pageHeroContent">
          <span className="eyebrow">Contact</span>
          <h1>Kom langs in Hoboken</h1>
          <p>Bel ons, bekijk de openingsuren of plan rechtstreeks uw route.</p>
        </div>
      </section>

      <section className="section contactGrid">
        <div>
          <span className="eyebrow dark">Onze gegevens</span>
          <h2>Slagerij Bouzian</h2>
          <p>Weerstandlaan 46<br />2660 Hoboken, België</p>
          <p>
            <a className="textLink" href="tel:+32487258128">0487 25 81 28</a><br />
            <a className="textLink" href="mailto:jassin_bouzian@hotmail.com">jassin_bouzian@hotmail.com</a>
          </p>
          <div id="uren" className="hours">
            <h3>Openingsuren</h3>
            {hours.map(([d, h]) => <div key={d}><span>{d}</span><b>{h}</b></div>)}
          </div>
        </div>
        <ContactForm />
      </section>

      <section className="mapWrap">
        <iframe
          title="Google Maps Slagerij Bouzian"
          src="https://www.google.com/maps?q=Weerstandlaan%2046%2C%202660%20Hoboken%2C%20Belgi%C3%AB&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
