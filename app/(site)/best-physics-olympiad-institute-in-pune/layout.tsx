import type { Metadata } from 'next';
import { BestInstituteJsonLd } from '@/components/local-seo/BestInstituteJsonLd';
import { DATA } from './_data';

export const metadata: Metadata = {
  title: 'Best Physics Olympiad Institute in Pune | BuzzyBrains Academy',
  description:
    "Looking for the best Physics Olympiad institute in Pune? BuzzyBrains Academy covers India's IOQP pipeline (NSEP, INPhO) and international tracks, batches capped at 12.",
  keywords:
    'best physics olympiad institute in Pune, physics olympiad coaching Pune, NSEP coaching Pune, INPhO coaching Pune, IPhO coaching Pune, physics olympiad Hadapsar',
  alternates: { canonical: 'https://buzzybrainsacademy.com/best-physics-olympiad-institute-in-pune' },
  openGraph: {
    title: 'Best Physics Olympiad Institute in Pune | BuzzyBrains Academy',
    description: "IITian Mentorship. Physics Olympiad coaching covering India's IOQP pipeline (NSEP, INPhO) and international tracks. Batches capped at 12.",
    url: 'https://buzzybrainsacademy.com/best-physics-olympiad-institute-in-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [{ url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg', width: 1200, height: 630, alt: 'Best Physics Olympiad Institute in Pune - BuzzyBrains Academy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Physics Olympiad Institute in Pune | BuzzyBrains Academy',
    description: "IITian Mentorship. Physics Olympiad coaching covering India's IOQP pipeline (NSEP, INPhO) and international tracks. Batches capped at 12.",
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function BestPhysicsOlympiadInstituteInPuneLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BestInstituteJsonLd
        path="/best-physics-olympiad-institute-in-pune"
        breadcrumbName="Best Physics Olympiad Institute in Pune"
        description="BuzzyBrains Academy runs Physics Olympiad coaching in Amanora, Hadapsar, Pune, covering India's IOQP pipeline and international tracks. Batches capped at 12 students."
        faqs={DATA.faqs}
      />
      {children}
    </>
  );
}
