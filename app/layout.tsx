import type { Metadata } from 'next';
import { Geist_Mono, Manrope, Inter } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://buzzybrainsacademy.com'),
  title: 'BuzzyBrains Academy — Best IIT JEE, NEET & Olympiad Coaching in Pune | Foundation Classes',
  description:
    'Premium IIT JEE, NEET, Olympiad & Foundation coaching in Pune. IITian faculty, batches of max 12 students, AI-powered learning & 25+ years of excellence. Book a free demo class today.',
  keywords: [
    'IIT JEE Coaching Pune',
    'NEET Coaching Pune',
    'Olympiad Classes Pune',
    'Foundation Coaching Pune',
    'Best Coaching Institute Pune',
    'IIT Foundation Classes',
    'Maths Coaching Pune',
    'Science Coaching Pune',
  ],
  alternates: { canonical: 'https://buzzybrainsacademy.com' },
  openGraph: {
    title: 'BuzzyBrains Academy — Learn Smarter. Dream Bigger. Achieve More.',
    description:
      'Elite coaching for IIT-JEE, NEET, Olympiads & Foundation (Grades 6–10) in Pune. IITian faculty, max 12 students per batch, AI-powered learning.',
    url: 'https://buzzybrainsacademy.com',
    type: 'website',
    locale: 'en_IN',
    siteName: 'BuzzyBrains Academy',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BuzzyBrains Academy - Premium coaching for JEE, NEET and Olympiads',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuzzyBrains Academy — Premium Coaching in Pune',
    description: 'IIT-JEE • NEET • Olympiads • Foundation. Where curiosity meets technology and academic excellence.',
    images: ['https://buzzybrainsacademy.com/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
