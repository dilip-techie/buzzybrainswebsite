import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { ICSE_TEST_SERIES_FAQS } from '@/lib/test-series/faqs';

export const metadata: Metadata = {
  title: 'ICSE & ISC Board Test Series 2027 | Grade 10 & 12 Mock Papers',
  description:
    'ICSE (Grade 10) & ISC (Grade 12) Test Series — full-length papers set to the exact CISCE blueprint, including separate Physics, Chemistry & Biology papers, marked within 72 hours.',
  keywords:
    'ICSE test series, ISC test series, ICSE board exam mock papers, ICSE Class 10 test series Pune, ISC Class 12 test series Pune, CISCE specimen papers, ICSE Physics Chemistry Biology test series',
  alternates: { canonical: 'https://buzzybrainsacademy.com/icse-board-test-series' },
  openGraph: {
    title: 'ICSE & ISC Board Test Series 2027 | Grade 10 & 12 Mock Papers',
    description:
      'IITian Mentorship. Full-length ICSE/ISC (CISCE) board-pattern papers, examiner-style evaluation and a marked scorecard within 72 hours. By BuzzyBrains Academy, Pune.',
    url: 'https://buzzybrainsacademy.com/icse-board-test-series',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'ICSE & ISC Board Test Series - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICSE & ISC Board Test Series 2027 | Grade 10 & 12 Mock Papers',
    description: 'IITian Mentorship. Full-length ICSE/ISC (CISCE) board-pattern papers, examiner-style evaluation and a marked scorecard within 72 hours. By BuzzyBrains Academy, Pune.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function IcseTestSeriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="ICSE & ISC Board Test Series (Grade 10 & 12)"
        description="A 12-week, 8-paper ICSE/ISC (CISCE) board-pattern test series with examiner-style manual evaluation and a topic-wise scorecard returned within 72 hours."
        path="/icse-board-test-series"
      />
      <FaqJsonLd items={ICSE_TEST_SERIES_FAQS.map((f) => ({ question: f.q, answer: f.a }))} />
      {children}
    </>
  );
}
