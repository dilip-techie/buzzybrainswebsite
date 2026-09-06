import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { IB_TEST_SERIES_FAQS } from '@/lib/test-series/faqs';

export const metadata: Metadata = {
  title: 'IB Test Series 2027 | DP Mock Exams, IA & EE Review',
  description:
    'IB Diploma Programme mock exam series — full-length Paper 1/2/3 papers marked against IB\'s own criterion-based grade descriptors (1-7 scale), plus Internal Assessment and Extended Essay review.',
  keywords:
    'IB test series, IB mock exams, IB DP mock papers, IB Internal Assessment review, IB Extended Essay review, IB TOK essay feedback, IB Diploma Programme Pune',
  alternates: { canonical: 'https://buzzybrainsacademy.com/ib-test-series' },
  openGraph: {
    title: 'IB Test Series 2027 | DP Mock Exams, IA & EE Review',
    description:
      'IITian Mentorship. Full-length IB DP mock exams, criterion-based marking and IA/EE/TOK review. By BuzzyBrains Academy, Pune.',
    url: 'https://buzzybrainsacademy.com/ib-test-series',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'IB Test Series - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IB Test Series 2027 | DP Mock Exams, IA & EE Review',
    description: 'IITian Mentorship. Full-length IB DP mock exams, criterion-based marking and IA/EE/TOK review. By BuzzyBrains Academy, Pune.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function IbTestSeriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="IB Diploma Programme Test Series"
        description="A 12-week, 8-sitting IB DP mock exam series marked against IB's own criterion-based grade descriptors, with optional IA, EE and TOK review."
        path="/ib-test-series"
      />
      <FaqJsonLd items={IB_TEST_SERIES_FAQS.map((f) => ({ question: f.q, answer: f.a }))} />
      {children}
    </>
  );
}
