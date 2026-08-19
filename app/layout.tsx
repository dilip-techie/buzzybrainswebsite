import type { Metadata } from 'next';
import Script from 'next/script';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Manrope, Inter } from 'next/font/google';
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

export const metadata: Metadata = {
  metadataBase: new URL('https://buzzybrainsacademy.com'),
  title: 'BuzzyBrains Academy | IIT JEE, NEET & Olympiad Coaching in Pune',
  description:
    'IITian Mentorship. Gateway to Top IITs and AIIMS. Premium IIT-JEE, NEET, Olympiad & Foundation coaching in Pune — batches capped at 12. Book a free demo.',
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
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
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
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
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
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9SGR78TX74"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9SGR78TX74');
            `,
          }}
        />
        <noscript>
          <style>{'.reveal{opacity:1!important;transform:none!important}'}</style>
        </noscript>
      </head>
      <body className={`${manrope.variable} ${inter.variable} antialiased`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
