import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { CBSE_TEST_SERIES_FAQS } from '@/lib/test-series/faqs';

export const metadata: Metadata = {
  title: 'CBSE Board Test Series 2027 | Grade 10 & 12 Mock Papers',
  description:
    'CBSE Board Test Series for Grade 10 & 12 — 8 full-length papers per subject set to the exact CBSE SQP blueprint, examiner-style evaluation and marked scorecards within 72 hours.',
  keywords:
    'CBSE test series, CBSE board exam mock papers, CBSE Class 10 test series Pune, CBSE Class 12 test series Pune, CBSE SQP practice papers, CBSE PCM test series, CBSE PCB test series, CBSE Commerce test series',
  alternates: { canonical: 'https://buzzybrainsacademy.com/cbse-board-test-series' },
  openGraph: {
    title: 'CBSE Board Test Series 2027 | Grade 10 & 12 Mock Papers',
    description:
      'IITian Mentorship. Full-length CBSE board-pattern papers, examiner-style evaluation and a marked scorecard within 72 hours. By BuzzyBrains Academy, Pune.',
    url: 'https://buzzybrainsacademy.com/cbse-board-test-series',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'CBSE Board Test Series - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CBSE Board Test Series 2027 | Grade 10 & 12 Mock Papers',
    description: 'IITian Mentorship. Full-length CBSE board-pattern papers, examiner-style evaluation and a marked scorecard within 72 hours. By BuzzyBrains Academy, Pune.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function CbseTestSeriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="CBSE Board Test Series (Grade 10 & 12)"
        description="A 12-week, 8-paper CBSE board-pattern test series with examiner-style manual evaluation and a topic-wise scorecard returned within 72 hours."
        path="/cbse-board-test-series"
      />
      <FaqJsonLd items={CBSE_TEST_SERIES_FAQS.map((f) => ({ question: f.q, answer: f.a }))} />
      {children}
    </>
  );
}
