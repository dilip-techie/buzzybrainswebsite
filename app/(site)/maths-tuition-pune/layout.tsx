import type { Metadata } from 'next';
import { ArticleJsonLd, FaqJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Maths Tuition Pune | BuzzyBrains Academy',
  description:
    'How to choose maths tuition in Pune — 1-on-1 vs small batch, and how BuzzyBrains Academy structures maths tuition for Grades 6-12.',
  keywords: 'maths tuition Pune, maths tutor Pune, maths classes Pune, best maths tuition Pune',
  alternates: { canonical: 'https://buzzybrainsacademy.com/maths-tuition-pune' },
  openGraph: {
    title: 'Maths Tuition Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. How to choose maths tuition in Pune, and how BuzzyBrains Academy structures its maths tuition options.',
    url: 'https://buzzybrainsacademy.com/maths-tuition-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maths Tuition Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. How to choose maths tuition in Pune, and how BuzzyBrains Academy structures its maths tuition options.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function MathsTuitionPillarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleJsonLd
        headline="Maths Tuition Pune"
        description="How to choose maths tuition in Pune, and how BuzzyBrains Academy structures its maths tuition options."
        path="/maths-tuition-pune"
        datePublished="2026-07-12"
        breadcrumbName="Maths Tuition Pune"
      />
      <FaqJsonLd
        items={[
          {
            question: 'Should I choose 1-on-1 maths tuition or a small batch?',
            answer: 'If a student is significantly behind or ahead of their grade level, or needs a custom pace, 1-on-1 is usually more effective. If the gap is smaller, a small batch (max 12 at BuzzyBrains Academy) offers similar attention with the added benefit of peer problem-solving.',
          },
          {
            question: 'My child says they "aren\'t a maths person" — does tuition actually help?',
            answer: 'In most cases, this is a confidence gap built from an earlier unresolved conceptual gap, not a fixed trait. Concept-first tuition that finds and fixes the original gap — rather than just drilling more of the current chapter — usually resolves this within a term.',
          },
          {
            question: 'Is maths tuition useful even if my child isn’t targeting JEE or NEET?',
            answer: 'Yes — strong maths ability supports board-exam performance, Applied Maths and Statistics for commerce students, and general logical reasoning used across every other subject.',
          },
        ]}
      />
      {children}
    </>
  );
}
