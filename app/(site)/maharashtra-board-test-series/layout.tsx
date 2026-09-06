import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { MAHARASHTRA_TEST_SERIES_FAQS } from '@/lib/test-series/faqs';

export const metadata: Metadata = {
  title: 'Maharashtra Board Test Series 2027 | SSC & HSC Mock Papers',
  description:
    'Maharashtra State Board (SSC & HSC) Test Series — full-length papers set to the exact MSBSHSE blueprint, including split Algebra/Geometry and Science-I/Science-II papers, marked within 72 hours.',
  keywords:
    'Maharashtra board test series, SSC test series, HSC test series, MSBSHSE mock papers, SSC Algebra Geometry test series, HSC PCM PCB Commerce test series Pune',
  alternates: { canonical: 'https://buzzybrainsacademy.com/maharashtra-board-test-series' },
  openGraph: {
    title: 'Maharashtra Board Test Series 2027 | SSC & HSC Mock Papers',
    description:
      'IITian Mentorship. Full-length Maharashtra State Board (MSBSHSE) pattern papers, examiner-style evaluation and a marked scorecard within 72 hours. By BuzzyBrains Academy, Pune.',
    url: 'https://buzzybrainsacademy.com/maharashtra-board-test-series',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'Maharashtra Board Test Series - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maharashtra Board Test Series 2027 | SSC & HSC Mock Papers',
    description: 'IITian Mentorship. Full-length Maharashtra State Board (MSBSHSE) pattern papers, examiner-style evaluation and a marked scorecard within 72 hours. By BuzzyBrains Academy, Pune.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function MaharashtraTestSeriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="Maharashtra Board Test Series (SSC & HSC)"
        description="A 12-week, 8-paper Maharashtra State Board (MSBSHSE) pattern test series with examiner-style manual evaluation and a topic-wise scorecard returned within 72 hours."
        path="/maharashtra-board-test-series"
      />
      <FaqJsonLd items={MAHARASHTRA_TEST_SERIES_FAQS.map((f) => ({ question: f.q, answer: f.a }))} />
      {children}
    </>
  );
}
