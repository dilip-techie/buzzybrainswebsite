import type { Metadata } from 'next';
import { BestInstituteJsonLd } from '@/components/local-seo/BestInstituteJsonLd';
import { DATA } from './_data';

export const metadata: Metadata = {
  title: 'Best NMTC Institute in Pune | BuzzyBrains Academy',
  description:
    'Looking for the best NMTC institute in Pune? BuzzyBrains Academy coaches all five NMTC levels, with dedicated Stage 2 proof-writing practice, batches capped at 12.',
  keywords:
    'best NMTC institute in Pune, NMTC coaching Pune, NMTC classes Pune, NMTC coaching Hadapsar, NMTC coaching Amanora, AMTI olympiad coaching Pune',
  alternates: { canonical: 'https://buzzybrainsacademy.com/best-nmtc-institute-in-pune' },
  openGraph: {
    title: 'Best NMTC Institute in Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. NMTC coaching across all five levels, with dedicated Stage 2 written-solution practice. Batches capped at 12.',
    url: 'https://buzzybrainsacademy.com/best-nmtc-institute-in-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [{ url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg', width: 1200, height: 630, alt: 'Best NMTC Institute in Pune - BuzzyBrains Academy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best NMTC Institute in Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. NMTC coaching across all five levels, with dedicated Stage 2 written-solution practice. Batches capped at 12.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function BestNmtcInstituteInPuneLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BestInstituteJsonLd
        path="/best-nmtc-institute-in-pune"
        breadcrumbName="Best NMTC Institute in Pune"
        description="BuzzyBrains Academy coaches all five NMTC levels in Amanora, Hadapsar, Pune, with dedicated Stage 2 written-solution practice. Batches capped at 12 students."
        faqs={DATA.faqs}
      />
      {children}
    </>
  );
}
