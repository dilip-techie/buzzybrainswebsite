import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { amcFaqs } from '@/lib/olympiad/data';

export const metadata: Metadata = {
  title: 'AMC 8 & AMC 10 Coaching in Pune | BuzzyBrains Academy',
  description:
    'Dedicated AMC 8 and AMC 10 coaching in Pune for Grades 6-10. IIT-alumni mentors, batches capped at 12, real scoring strategy, and a structured path to AIME.',
  keywords: 'AMC 8 coaching Pune, AMC 10 coaching Pune, American Mathematics Competition classes, AMC preparation India, AIME coaching',
  alternates: { canonical: 'https://buzzybrainsacademy.com/amc-8-10-coaching-pune' },
  openGraph: {
    title: 'AMC 8 & AMC 10 Coaching in Pune | BuzzyBrains Academy',
    description: 'Dedicated AMC 8 and AMC 10 coaching for Grades 6-10 — IIT-alumni mentors, batches capped at 12, a structured path to AIME.',
    url: 'https://buzzybrainsacademy.com/amc-8-10-coaching-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'AMC 8 & AMC 10 Coaching in Pune - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMC 8 & AMC 10 Coaching in Pune | BuzzyBrains Academy',
    description: 'Dedicated AMC 8 and AMC 10 coaching for Grades 6-10 — IIT-alumni mentors, batches capped at 12, a structured path to AIME.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function Amc810CoachingPuneLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="AMC 8 & AMC 10 Coaching"
        description="Dedicated AMC 8 and AMC 10 (American Mathematics Competition) coaching for Grades 6-10, with a structured path to AIME."
        path="/amc-8-10-coaching-pune"
      />
      <FaqJsonLd items={amcFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
      {children}
    </>
  );
}
