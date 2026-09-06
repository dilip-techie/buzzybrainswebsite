import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { IGCSE_TEST_SERIES_FAQS } from '@/lib/test-series/faqs';

export const metadata: Metadata = {
  title: 'IGCSE Cambridge Board Test Series 2027 | Mock Exams & Grade Prediction',
  description:
    'Cambridge (and Edexcel) IGCSE mock exam series — full-length papers matched to your exact component structure, examiner-style marking and a scorecard with A*-G/9-1 grade-boundary comparison within 72 hours.',
  keywords:
    'IGCSE test series, Cambridge IGCSE mock exams, IGCSE Physics Chemistry Biology test series, Edexcel International GCSE test series, IGCSE grade prediction Pune, IGCSE mock exam marking',
  alternates: { canonical: 'https://buzzybrainsacademy.com/igcse-cambridge-test-series' },
  openGraph: {
    title: 'IGCSE Cambridge Board Test Series 2027 | Mock Exams & Grade Prediction',
    description:
      'IITian Mentorship. Full-length Cambridge/Edexcel IGCSE mock exams, examiner-style component marking and a marked scorecard within 72 hours. By BuzzyBrains Academy, Pune.',
    url: 'https://buzzybrainsacademy.com/igcse-cambridge-test-series',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'IGCSE Cambridge Board Test Series - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IGCSE Cambridge Board Test Series 2027 | Mock Exams & Grade Prediction',
    description: 'IITian Mentorship. Full-length Cambridge/Edexcel IGCSE mock exams, examiner-style component marking and a marked scorecard within 72 hours. By BuzzyBrains Academy, Pune.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function IgcseTestSeriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="IGCSE Cambridge Board Test Series"
        description="A 12-week, 8-sitting Cambridge/Edexcel IGCSE mock exam series with examiner-style component marking and a topic-wise scorecard returned within 72 hours."
        path="/igcse-cambridge-test-series"
      />
      <FaqJsonLd items={IGCSE_TEST_SERIES_FAQS.map((f) => ({ question: f.q, answer: f.a }))} />
      {children}
    </>
  );
}
