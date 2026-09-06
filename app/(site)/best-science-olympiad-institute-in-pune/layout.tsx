import type { Metadata } from 'next';
import { BestInstituteJsonLd } from '@/components/local-seo/BestInstituteJsonLd';
import { DATA } from './_data';

export const metadata: Metadata = {
  title: 'Best Science Olympiad Coaching Institute in Pune | BuzzyBrains Academy',
  description:
    'Looking for the best science olympiad institute in Pune? BuzzyBrains Academy covers SOF NSO, NSEJS and Homi Bhabha with subject-specific PhD faculty, batches capped at 12.',
  keywords:
    'best science olympiad institute in Pune, science olympiad coaching Pune, NSO coaching Pune, NSEJS coaching Pune, Homi Bhabha coaching Pune, science olympiad Hadapsar',
  alternates: { canonical: 'https://buzzybrainsacademy.com/best-science-olympiad-institute-in-pune' },
  openGraph: {
    title: 'Best Science Olympiad Coaching Institute in Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. Science Olympiad coaching across SOF NSO, NSEJS and Homi Bhabha, with subject-specific PhD faculty. Batches capped at 12.',
    url: 'https://buzzybrainsacademy.com/best-science-olympiad-institute-in-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [{ url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg', width: 1200, height: 630, alt: 'Best Science Olympiad Coaching Institute in Pune - BuzzyBrains Academy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Science Olympiad Coaching Institute in Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. Science Olympiad coaching across SOF NSO, NSEJS and Homi Bhabha, with subject-specific PhD faculty. Batches capped at 12.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function BestScienceOlympiadInstituteInPuneLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BestInstituteJsonLd
        path="/best-science-olympiad-institute-in-pune"
        breadcrumbName="Best Science Olympiad Coaching Institute in Pune"
        description="BuzzyBrains Academy runs Science Olympiad coaching in Amanora, Hadapsar, Pune, covering SOF NSO, NSEJS and Homi Bhabha with subject-specific PhD faculty. Batches capped at 12 students."
        faqs={DATA.faqs}
      />
      {children}
    </>
  );
}
