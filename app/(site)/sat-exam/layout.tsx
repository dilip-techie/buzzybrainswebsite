import type { Metadata } from 'next';
import { ProgramJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'SAT Exam Prep — Score 1400+ on the Digital SAT | BuzzyBrains Academy',
  description:
    'IITian Mentorship. Gateway to Top IITs and AIIMS. Structured Digital SAT preparation covering Reading & Writing and Math, with adaptive-format strategy, timed full-length mocks and score tracking — mentored by IIT/IIM alumni faculty.',
  keywords:
    'SAT exam prep, digital SAT, SAT coaching Pune, SAT Reading Writing, SAT Math, SAT score 1400, SAT score 1500, SAT full length mock tests, SAT coaching for Indian students',
  alternates: { canonical: 'https://buzzybrainsacademy.com/sat-exam' },
  openGraph: {
    title: 'SAT Exam Prep — Score 1400+ on the Digital SAT',
    description: 'Structured Digital SAT preparation with section-wise mastery, adaptive-format strategy and full-length mocks.',
    url: 'https://buzzybrainsacademy.com/sat-exam',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'SAT Exam Prep - BuzzyBrains Academy',
      },
    ],
  },
};

export default function SatExamLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="SAT Exam Prep"
        description="Structured Digital SAT preparation covering Reading & Writing and Math, with adaptive-format strategy, timed full-length mocks and score tracking — mentored by IIT/IIM alumni faculty."
        path="/sat-exam"
      />
      {children}
    </>
  );
}
