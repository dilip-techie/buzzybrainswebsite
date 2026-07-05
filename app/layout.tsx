import type { Metadata } from 'next';
import Script from 'next/script';
import { Geist_Mono, Manrope, Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
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
    'Premium IIT JEE, NEET, Olympiad & Foundation coaching in Pune. IITian faculty, batches of max 15 students, AI-powered learning & 25+ years of excellence. Book a free demo class today.',
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
      'Elite coaching for IIT-JEE, NEET, Olympiads & Foundation (Grades 6–10) in Pune. IITian faculty, max 15 students per batch, AI-powered learning.',
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

const themeInitScript = `
(function(){
  try {
    var stored = localStorage.getItem('bb-theme');
    var theme = (stored === 'light' || stored === 'dark')
      ? stored
      : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
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
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: 'BuzzyBrains Academy',
              description:
                'Premium coaching institute in Pune for IIT-JEE, NEET, Olympiads, NTSE and Foundation courses (Grades 6–10) with IITian faculty and AI-powered learning.',
              url: 'https://buzzybrainsacademy.com',
              logo: 'https://buzzybrainsacademy.com/images/og-image.jpg',
              telephone: '+91-98505-70525',
              email: 'hello@buzzybrainsacademy.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Pune',
                addressRegion: 'Maharashtra',
                addressCountry: 'IN',
              },
              openingHours: 'Mo-Sa 09:00-20:00',
              sameAs: [
                'https://www.facebook.com/profile.php?id=61590943110329',
                'https://www.youtube.com/@BuzzyBrainsAcademy',
              ],
            }),
          }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is the batch size at BuzzyBrains Academy?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Every batch is capped at a maximum of 10 students, ensuring personalized attention and mentoring for each child.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Which programs does BuzzyBrains Academy offer in Pune?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We offer Foundation coaching for Grades 6–10, IIT-JEE preparation, NEET preparation, and Olympiad training for IMO, NSO, IOQM, PRMO and NMTC.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Who teaches at BuzzyBrains Academy?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our faculty includes IIT alumni and industry experts with 25+ years of teaching experience, focused on conceptual, visual and AI-powered learning.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I book a free demo class?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You can book a free demo class through the form on our website, by calling us, or by messaging us on WhatsApp.',
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${manrope.variable} ${inter.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
