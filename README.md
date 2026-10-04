# Slagerij Bouzian — Premium Next.js website

Professionele meerpagina website voor Slagerij Bouzian in Hoboken.

## Pagina's
- Home
- Assortiment
- BBQ & Schotels
- Over ons
- Contact

## Starten
```bash
npm install
npm run dev
```
Open daarna `http://localhost:3000`.

## Productiebuild
```bash
npm run build
npm run start
```

## MongoDB Atlas
1. Maak een MongoDB Atlas-cluster aan.
2. Maak een database user aan.
3. Voeg je IP/netwerktoegang toe.
4. Kopieer `.env.example` naar `.env.local`.
5. Vul in:
```env
MONGODB_URI=jouw_mongodb_connection_string
MONGODB_DB=slagerij_bouzian
```

De contactroute staat op `POST /api/contact` en bewaart `naam`, `telefoon`, `email`, `bericht` en `createdAt`.

## Vercel
1. Push deze map naar GitHub/GitLab of importeer ze rechtstreeks in Vercel.
2. Voeg `MONGODB_URI` en `MONGODB_DB` toe onder Environment Variables.
3. Deploy.

## Foto's
Alle gebruikte websitefoto's staan in `public/images` en zijn afzonderlijke high-resolution beelden. Er worden geen foto's met personen gebruikt.

## Typografie
De site gebruikt Cormorant Garamond voor luxe/editorial titels en Manrope voor leesbare UI-tekst via `next/font/google`.
