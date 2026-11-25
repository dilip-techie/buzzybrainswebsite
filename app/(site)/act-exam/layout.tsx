import type { Metadata } from 'next';
import { ProgramJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'ACT Exam Prep & Coaching for US Admissions | BuzzyBrains Academy',
  description:
    'Structured ACT preparation for students applying to US universities: English, Math, Reading and optional Science, with timed practice, error analysis and small batches mentored by IIT/IIM alumni faculty in Pune.',
  keywords:
    'ACT coaching, ACT exam prep, ACT coaching Pune, ACT classes for Indian students, ACT Math, ACT English, ACT Reading, ACT vs SAT, US college admissions test prep',
  alternates: { canonical: 'https://buzzybrainsacademy.com/act-exam' },
  openGraph: {
    title: 'ACT Exam Prep & Coaching — BuzzyBrains Academy',
    description: 'Structured ACT preparation with section-wise mastery, timed practice and small batches, mentored by IIT/IIM alumni faculty.',
    url: 'https://buzzybrainsacademy.com/act-exam',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'ACT Exam Prep - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ACT Exam Prep & Coaching — BuzzyBrains Academy',
    description: 'Structured ACT preparation with section-wise mastery, timed practice and small batches.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function ActExamLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="ACT Exam Prep"
        description="Structured ACT preparation covering English, Math, Reading and the optional Science section, with timed practice, error analysis and small batches mentored by IIT/IIM alumni faculty."
        path="/act-exam"
      />
      {children}
    </>
  );
}
