import type { Metadata } from 'next';
import { ArticleJsonLd, FaqJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'CA Foundation Coaching Pune | Class 12 Commerce Students | BuzzyBrains Academy',
  description:
    'What CA Foundation actually covers, when a Class 12 Commerce student should register, and how BuzzyBrains Academy structures CA Foundation coaching alongside board preparation in Pune.',
  keywords: 'CA Foundation coaching Pune, CA Foundation classes Pune, CA Foundation for Class 12 students, CA Foundation Accounting coaching Pune',
  alternates: { canonical: 'https://buzzybrainsacademy.com/ca-foundation-coaching-pune' },
  openGraph: {
    title: 'CA Foundation Coaching Pune | BuzzyBrains Academy',
    description: 'What CA Foundation covers, when to register, and how BuzzyBrains Academy structures CA Foundation coaching alongside board preparation.',
    url: 'https://buzzybrainsacademy.com/ca-foundation-coaching-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'article',
  },
};

export default function CaFoundationPillarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleJsonLd
        headline="CA Foundation Coaching Pune"
        description="What CA Foundation covers, when to register, and how BuzzyBrains Academy structures CA Foundation coaching alongside board preparation in Pune."
        path="/ca-foundation-coaching-pune"
        datePublished="2026-07-12"
        breadcrumbName="CA Foundation Coaching Pune"
      />
      <FaqJsonLd
        items={[
          {
            question: 'When can a student register for CA Foundation?',
            answer: 'Students can register for CA Foundation with ICAI while still in Class 12, and are eligible to appear for the exam after completing their Class 12 board exams.',
          },
          {
            question: 'What does the CA Foundation syllabus cover?',
            answer: 'Four papers: Accounting, Business Laws, Quantitative Aptitude, and Business Economics — a more rigorous, exam-focused extension of Class 11-12 Commerce fundamentals.',
          },
          {
            question: 'Can CA Foundation prep run alongside Class 12 board preparation?',
            answer: 'Yes — Accounting and Business Economics overlap significantly with the board syllabus. The parts that need dedicated extra time are Business Laws and Quantitative Aptitude, which go beyond what boards cover.',
          },
        ]}
      />
      {children}
    </>
  );
}
