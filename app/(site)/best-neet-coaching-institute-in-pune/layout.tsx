import type { Metadata } from 'next';
import { BestInstituteJsonLd } from '@/components/local-seo/BestInstituteJsonLd';
import { DATA } from './_data';

export const metadata: Metadata = {
  title: 'Best NEET Coaching Institute in Pune | BuzzyBrains Academy',
  description:
    'Looking for the best NEET coaching institute in Pune? BuzzyBrains Academy teaches Biology, Physics and Chemistry with specialist faculty, batches capped at 12.',
  keywords:
    'best NEET coaching institute in Pune, NEET coaching Pune, NEET classes Pune, NEET Biology coaching Pune, NEET coaching Hadapsar, NEET coaching Amanora',
  alternates: { canonical: 'https://buzzybrainsacademy.com/best-neet-coaching-institute-in-pune' },
  openGraph: {
    title: 'Best NEET Coaching Institute in Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. NEET Biology, Physics and Chemistry taught by specialist faculty, including a practicing General Physician. Batches capped at 12.',
    url: 'https://buzzybrainsacademy.com/best-neet-coaching-institute-in-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [{ url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg', width: 1200, height: 630, alt: 'Best NEET Coaching Institute in Pune - BuzzyBrains Academy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best NEET Coaching Institute in Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. NEET Biology, Physics and Chemistry taught by specialist faculty, including a practicing General Physician. Batches capped at 12.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function BestNeetCoachingInstituteInPuneLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BestInstituteJsonLd
        path="/best-neet-coaching-institute-in-pune"
        breadcrumbName="Best NEET Coaching Institute in Pune"
        description="BuzzyBrains Academy runs NEET coaching in Amanora, Hadapsar, Pune, with Biology, Physics and Chemistry taught by specialist faculty. Batches capped at 12 students."
        faqs={DATA.faqs}
      />
      {children}
    </>
  );
}
