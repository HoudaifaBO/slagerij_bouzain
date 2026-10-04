import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '600', '700'],
});

const sans = Manrope({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: { default: 'Slagerij Bouzian Hoboken', template: '%s | Slagerij Bouzian' },
  description: 'Slagerij Bouzian in Hoboken. Premium vlees, BBQ-bereidingen en schotels. Vakmanschap sinds 2001.',
  keywords: ['Slagerij Bouzian Hoboken', 'Slager Hoboken', 'BBQ vlees Hoboken', 'Slagerij Antwerpen'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={`${display.variable} ${sans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
