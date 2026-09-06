import type { Metadata } from 'next';
import { BestInstituteJsonLd } from '@/components/local-seo/BestInstituteJsonLd';
import { DATA } from './_data';

export const metadata: Metadata = {
  title: 'Best AMC 8 & AMC 10 Coaching Institute in Pune | BuzzyBrains Academy',
  description:
    'Looking for the best AMC coaching institute in Pune? BuzzyBrains Academy coaches AMC 8, AMC 10, AMC 12, AIME and USAMO, led by a mentor coaching this pipeline since 2010.',
  keywords:
    'best AMC coaching institute in Pune, AMC 8 coaching Pune, AMC 10 coaching Pune, AMC 12 coaching Pune, AIME coaching Pune, USAMO coaching Pune, American Mathematics Competition Pune',
  alternates: { canonical: 'https://buzzybrainsacademy.com/best-amc-coaching-institute-in-pune' },
  openGraph: {
    title: 'Best AMC 8 & AMC 10 Coaching Institute in Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. AMC 8, AMC 10, AMC 12, AIME and USAMO coaching from a mentor coaching this pipeline since 2010. Batches capped at 12.',
    url: 'https://buzzybrainsacademy.com/best-amc-coaching-institute-in-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [{ url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg', width: 1200, height: 630, alt: 'Best AMC Coaching Institute in Pune - BuzzyBrains Academy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best AMC 8 & AMC 10 Coaching Institute in Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. AMC 8, AMC 10, AMC 12, AIME and USAMO coaching from a mentor coaching this pipeline since 2010. Batches capped at 12.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function BestAmcCoachingInstituteInPuneLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BestInstituteJsonLd
        path="/best-amc-coaching-institute-in-pune"
        breadcrumbName="Best AMC Coaching Institute in Pune"
        description="BuzzyBrains Academy coaches AMC 8, AMC 10, AMC 12, AIME and USAMO in Amanora, Hadapsar, Pune, led by a mentor coaching this pipeline since 2010. Batches capped at 12 students."
        faqs={DATA.faqs}
      />
      {children}
    </>
  );
}
