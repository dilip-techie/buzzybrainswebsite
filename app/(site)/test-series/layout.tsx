import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { TEST_SERIES_FAQS } from '@/lib/test-series/faqs';

export const metadata: Metadata = {
  title: 'Board Exam Test Series 2027 | CBSE & ICSE | BuzzyBrains Academy',
  description:
    'Weighted mock test series for CBSE & ICSE Grade 10 & 12 boards — examiner-style evaluation and subject-wise scorecards, marked and returned within 72 hours.',
  keywords:
    'CBSE test series, ICSE test series, board exam mock papers, Grade 10 test series Pune, Grade 12 test series Pune, board exam evaluation, exam paper checking Pune',
  alternates: { canonical: 'https://buzzybrainsacademy.com/test-series' },
  openGraph: {
    title: 'Board Exam Test Series 2027 | CBSE & ICSE Grade 10 & 12',
    description:
      'IITian Mentorship. Full-length CBSE/ICSE board-pattern papers, examiner-style evaluation and a marked scorecard within 72 hours. By BuzzyBrains Academy, Pune.',
    url: 'https://buzzybrainsacademy.com/test-series',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'Board Exam Test Series - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Board Exam Test Series 2027 | CBSE & ICSE Grade 10 & 12',
    description: 'IITian Mentorship. Full-length CBSE/ICSE board-pattern papers, examiner-style evaluation and a marked scorecard within 72 hours. By BuzzyBrains Academy, Pune.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function TestSeriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="Board Exam Test Series (CBSE & ICSE, Grade 10 & 12)"
        description="A 12-week, 8-paper CBSE/ICSE board-pattern test series with examiner-style manual evaluation and a topic-wise scorecard returned within 72 hours."
        path="/test-series"
      />
      <FaqJsonLd items={TEST_SERIES_FAQS.map((f) => ({ question: f.q, answer: f.a }))} />
      {children}
    </>
  );
}
