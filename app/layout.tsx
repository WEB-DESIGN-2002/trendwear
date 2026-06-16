import type {Metadata} from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TrendWear | Discover Trending Fashion & AI Outfit Lookbook',
  description: 'Explore the latest fashion trends curation, curated premium clothing, shoes, watches and accessories with Amazon links and design your own styles with our AI Outfit Lookbook generator.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-neutral-50 text-neutral-900 font-sans antialiased min-h-screen selection:bg-neutral-900 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
