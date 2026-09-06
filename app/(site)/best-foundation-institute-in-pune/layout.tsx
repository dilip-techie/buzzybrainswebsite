import type { Metadata } from 'next';
import { BestInstituteJsonLd } from '@/components/local-seo/BestInstituteJsonLd';
import { DATA } from './_data';

export const metadata: Metadata = {
  title: 'Best Foundation Coaching Institute in Pune | BuzzyBrains Academy',
  description:
    'Looking for the best Foundation coaching institute in Pune for Grades 6-10? BuzzyBrains Academy catches conceptual gaps early with batches capped at 12.',
  keywords:
    'best foundation coaching institute in Pune, foundation classes Pune, Grade 6 to 10 coaching Pune, foundation coaching Hadapsar, foundation coaching Amanora',
  alternates: { canonical: 'https://buzzybrainsacademy.com/best-foundation-institute-in-pune' },
  openGraph: {
    title: 'Best Foundation Coaching Institute in Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. Foundation coaching for Grades 6-10, catching conceptual gaps early. Batches capped at 12.',
    url: 'https://buzzybrainsacademy.com/best-foundation-institute-in-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [{ url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg', width: 1200, height: 630, alt: 'Best Foundation Coaching Institute in Pune - BuzzyBrains Academy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Foundation Coaching Institute in Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. Foundation coaching for Grades 6-10, catching conceptual gaps early. Batches capped at 12.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function BestFoundationInstituteInPuneLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BestInstituteJsonLd
        path="/best-foundation-institute-in-pune"
        breadcrumbName="Best Foundation Coaching Institute in Pune"
        description="BuzzyBrains Academy runs Foundation coaching for Grades 6-10 in Amanora, Hadapsar, Pune, catching conceptual gaps early. Batches capped at 12 students."
        faqs={DATA.faqs}
      />
      {children}
    </>
  );
}
