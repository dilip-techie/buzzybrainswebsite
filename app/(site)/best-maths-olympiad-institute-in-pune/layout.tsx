import type { Metadata } from 'next';
import { BestInstituteJsonLd } from '@/components/local-seo/BestInstituteJsonLd';
import { DATA } from './_data';

export const metadata: Metadata = {
  title: 'Best Maths Olympiad Institute in Pune | BuzzyBrains Academy',
  description:
    'Looking for the best maths olympiad institute in Pune? BuzzyBrains Academy coaches SOF IMO, IOQM, NMTC and AMC under one faculty team, batches capped at 12.',
  keywords:
    'best maths olympiad institute in Pune, maths olympiad coaching Pune, olympiad maths classes Pune, SOF IMO IOQM NMTC AMC coaching Pune',
  alternates: { canonical: 'https://buzzybrainsacademy.com/best-maths-olympiad-institute-in-pune' },
  openGraph: {
    title: 'Best Maths Olympiad Institute in Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. SOF IMO, IOQM, NMTC and AMC coaching under one Mathematics faculty team. Batches capped at 12.',
    url: 'https://buzzybrainsacademy.com/best-maths-olympiad-institute-in-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [{ url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg', width: 1200, height: 630, alt: 'Best Maths Olympiad Institute in Pune - BuzzyBrains Academy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Maths Olympiad Institute in Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. SOF IMO, IOQM, NMTC and AMC coaching under one Mathematics faculty team. Batches capped at 12.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function BestMathsOlympiadInstituteInPuneLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BestInstituteJsonLd
        path="/best-maths-olympiad-institute-in-pune"
        breadcrumbName="Best Maths Olympiad Institute in Pune"
        description="BuzzyBrains Academy coaches SOF IMO, IOQM, NMTC and AMC in Amanora, Hadapsar, Pune, under one Mathematics faculty team. Batches capped at 12 students."
        faqs={DATA.faqs}
      />
      {children}
    </>
  );
}
