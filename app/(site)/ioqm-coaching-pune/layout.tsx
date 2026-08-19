import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { ioqmFaqs } from '@/lib/olympiad/data';

export const metadata: Metadata = {
  title: 'IOQM Coaching in Pune | BuzzyBrains Academy',
  description:
    'Dedicated IOQM coaching in Pune for Grades 8-12. IIT-alumni mentors, batches capped at 12, weekly timed mock papers, and a structured path to INMO.',
  keywords: 'IOQM coaching Pune, IOQM classes, Indian Olympiad Qualifier in Mathematics, IOQM syllabus, INMO pathway, IOQM preparation',
  alternates: { canonical: 'https://buzzybrainsacademy.com/ioqm-coaching-pune' },
  openGraph: {
    title: 'IOQM Coaching in Pune | BuzzyBrains Academy',
    description: 'Dedicated IOQM coaching for Grades 8-12 — IIT-alumni mentors, batches capped at 12, weekly timed mocks, and a structured path to INMO.',
    url: 'https://buzzybrainsacademy.com/ioqm-coaching-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'IOQM Coaching in Pune - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IOQM Coaching in Pune | BuzzyBrains Academy',
    description: 'Dedicated IOQM coaching for Grades 8-12 — IIT-alumni mentors, batches capped at 12, weekly timed mocks, and a structured path to INMO.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function IoqmCoachingPuneLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="IOQM Coaching"
        description="Dedicated IOQM (Indian Olympiad Qualifier in Mathematics) coaching for Grades 8-12, taught by IIT-alumni mentors in small batches with weekly timed mock papers."
        path="/ioqm-coaching-pune"
      />
      <FaqJsonLd items={ioqmFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
      {children}
    </>
  );
}
