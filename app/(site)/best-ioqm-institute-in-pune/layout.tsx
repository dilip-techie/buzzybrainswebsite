import type { Metadata } from 'next';
import { BestInstituteJsonLd } from '@/components/local-seo/BestInstituteJsonLd';
import { DATA } from './_data';

export const metadata: Metadata = {
  title: 'Best IOQM Institute in Pune | BuzzyBrains Academy',
  description:
    'Looking for the best IOQM institute in Pune? BuzzyBrains Academy runs dedicated IOQM coaching led by a mentor coaching this exact pipeline since 2010, batches capped at 12.',
  keywords:
    'best IOQM institute in Pune, IOQM coaching Pune, IOQM classes Pune, IOQM coaching Hadapsar, IOQM coaching Amanora, RMO INMO coaching Pune, olympiad maths institute Pune',
  alternates: { canonical: 'https://buzzybrainsacademy.com/best-ioqm-institute-in-pune' },
  openGraph: {
    title: 'Best IOQM Institute in Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. Dedicated IOQM coaching in Pune, led by a mentor coaching this exact pipeline since 2010. Batches capped at 12.',
    url: 'https://buzzybrainsacademy.com/best-ioqm-institute-in-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [{ url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg', width: 1200, height: 630, alt: 'Best IOQM Institute in Pune - BuzzyBrains Academy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best IOQM Institute in Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. Dedicated IOQM coaching in Pune, led by a mentor coaching this exact pipeline since 2010. Batches capped at 12.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function BestIoqmInstituteInPuneLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BestInstituteJsonLd
        path="/best-ioqm-institute-in-pune"
        breadcrumbName="Best IOQM Institute in Pune"
        description="BuzzyBrains Academy runs dedicated IOQM coaching in Amanora, Hadapsar, Pune, led by a mentor coaching the IOQM to INMO pipeline since 2010. Batches capped at 12 students."
        faqs={DATA.faqs}
      />
      {children}
    </>
  );
}
