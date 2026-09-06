import type { Metadata } from 'next';
import { BestInstituteJsonLd } from '@/components/local-seo/BestInstituteJsonLd';
import { DATA } from './_data';

export const metadata: Metadata = {
  title: 'Best IGCSE & IB Coaching Institute in Pune | BuzzyBrains Academy',
  description:
    'Looking for the best IGCSE or IB coaching institute in Pune? BuzzyBrains Academy teaches across CBSE, ICSE, Cambridge, IGCSE and IB, batches capped at 12.',
  keywords:
    'best IGCSE institute in Pune, best IB institute in Pune, IGCSE coaching Pune, IB coaching Pune, Cambridge coaching Pune, international boards coaching Hadapsar',
  alternates: { canonical: 'https://buzzybrainsacademy.com/best-igcse-ib-institute-in-pune' },
  openGraph: {
    title: 'Best IGCSE & IB Coaching Institute in Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. Cambridge IGCSE and IB Diploma coaching from mentors who teach across CBSE, ICSE, IGCSE, IB and AP. Batches capped at 12.',
    url: 'https://buzzybrainsacademy.com/best-igcse-ib-institute-in-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [{ url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg', width: 1200, height: 630, alt: 'Best IGCSE & IB Coaching Institute in Pune - BuzzyBrains Academy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best IGCSE & IB Coaching Institute in Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. Cambridge IGCSE and IB Diploma coaching from mentors who teach across CBSE, ICSE, IGCSE, IB and AP. Batches capped at 12.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function BestIgcseIbInstituteInPuneLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BestInstituteJsonLd
        path="/best-igcse-ib-institute-in-pune"
        breadcrumbName="Best IGCSE & IB Coaching Institute in Pune"
        description="BuzzyBrains Academy runs Cambridge IGCSE and IB Diploma coaching in Amanora, Hadapsar, Pune, from mentors who teach across CBSE, ICSE, IGCSE, IB and AP. Batches capped at 12 students."
        faqs={DATA.faqs}
      />
      {children}
    </>
  );
}
