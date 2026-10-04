import Image from 'next/image';

export default function Over() {
  return (
    <>
      <section className="storyHero">
        <Image src="/images/vakmanschap.png" alt="Ambachtelijk premium vlees zonder personen" fill priority sizes="100vw" />
        <div className="heroShade" />
        <div>
          <span className="eyebrow">Een vertrouwde naam in Hoboken</span>
          <h1>Vakmanschap sinds 2001</h1>
        </div>
      </section>

      <section className="section story">
        <div>
          <span className="eyebrow dark">Geschiedenis</span>
          <h2>Gebouwd op kwaliteit en vertrouwen</h2>
          <p>Slagerij Bouzian staat sinds 2001 voor een persoonlijke aanpak, degelijke producten en service waarop klanten kunnen rekenen.</p>
        </div>
        <div>
          <h3>Kwaliteit</h3>
          <p>We kiezen bewust voor een verzorgd aanbod en besteden aandacht aan versheid, presentatie en bereiding.</p>
          <h3>Persoonlijke service</h3>
          <p>We denken graag mee over hoeveelheden, bereidingen en keuzes voor dagelijks gebruik of speciale momenten.</p>
          <h3>Lokale klanten</h3>
          <p>Hoboken is onze thuisbasis. Veel klanten kennen ons al jaren en komen terug voor vertrouwen en herkenbare service.</p>
        </div>
      </section>

      <section className="split section darkSection reverseOnDesktop">
        <div className="splitText">
          <span className="eyebrow">Onze zaak</span>
          <h2>Rust, kwaliteit en een verzorgd assortiment</h2>
          <p>Onze winkel is ontworpen om producten helder en verzorgd te presenteren, met aandacht voor service en een aangename winkelervaring.</p>
        </div>
        <div className="splitImage"><Image src="/images/winkel.png" alt="Interieur van een premium slagerij" fill sizes="50vw" /></div>
      </section>
    </>
  );
}
