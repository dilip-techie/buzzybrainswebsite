import type { Metadata } from 'next';
import { ArticleJsonLd, FaqJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'CUET Commerce Coaching Pune | Accountancy, Economics, Business Studies | BuzzyBrains Academy',
  description:
    'IITian Mentorship. Gateway to Top IITs and AIIMS. How to prepare for the CUET Commerce domain papers alongside Class 12 board exams — what the exam tests, how it differs from board prep, and how BuzzyBrains Academy structures CUET Commerce coaching in Pune.',
  keywords: 'CUET Commerce coaching Pune, CUET Commerce classes Pune, CUET Accountancy coaching, CUET Economics coaching Pune, CUET Business Studies coaching',
  alternates: { canonical: 'https://buzzybrainsacademy.com/cuet-commerce-coaching-pune' },
  openGraph: {
    title: 'CUET Commerce Coaching Pune | BuzzyBrains Academy',
    description: 'How to prepare for CUET Commerce domain papers alongside board exams, and how BuzzyBrains Academy structures CUET Commerce coaching.',
    url: 'https://buzzybrainsacademy.com/cuet-commerce-coaching-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'article',
  },
};

export default function CuetCommercePillarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleJsonLd
        headline="CUET Commerce Coaching Pune"
        description="How to prepare for CUET Commerce domain papers alongside board exams, and how BuzzyBrains Academy structures CUET Commerce coaching in Pune."
        path="/cuet-commerce-coaching-pune"
        datePublished="2026-07-12"
        breadcrumbName="CUET Commerce Coaching Pune"
      />
      <FaqJsonLd
        items={[
          {
            question: 'Do I need separate coaching for CUET Commerce and my board exams?',
            answer: 'Not entirely separate — both draw on the same NCERT Accountancy, Economics and Business Studies syllabus. What you need alongside board-style teaching is dedicated timed MCQ practice, since CUET tests the same concepts in a faster, objective format.',
          },
          {
            question: 'Which Commerce subjects does CUET test?',
            answer: 'Accountancy, Business Studies, and Economics/Business Economics are each tested as separate CUET domain papers, alongside the compulsory Languages and General Test sections most students also attempt.',
          },
          {
            question: 'When should CUET-specific preparation start?',
            answer: 'Ideally alongside Class 12 board preparation, chapter by chapter — not as a separate track started only after boards are done. This keeps CUET-style MCQ practice synced with concepts while they are still fresh.',
          },
        ]}
      />
      {children}
    </>
  );
}
