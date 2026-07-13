import type { Metadata } from 'next';
import { ArticleJsonLd, FaqJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'NEET Coaching Pune | Small Batches, NCERT-First Teaching | BuzzyBrains Academy',
  description:
    'IITian Mentorship. Gateway to Top IITs and AIIMS. How to evaluate NEET coaching in Pune, why NCERT depth matters more than extra reference books, and how BuzzyBrains Academy structures NEET prep for Grades 11-12 and droppers.',
  keywords: 'NEET coaching Pune, NEET coaching institute Pune, best NEET coaching Pune, NEET Biology coaching',
  alternates: { canonical: 'https://buzzybrainsacademy.com/neet-coaching-pune' },
  openGraph: {
    title: 'NEET Coaching Pune | BuzzyBrains Academy',
    description: 'A complete guide to choosing NEET coaching in Pune, and how BuzzyBrains Academy structures its NEET program.',
    url: 'https://buzzybrainsacademy.com/neet-coaching-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'article',
  },
};

export default function NeetPillarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleJsonLd
        headline="NEET Coaching Pune"
        description="A complete guide to choosing NEET coaching in Pune, and how BuzzyBrains Academy structures its NEET program."
        path="/neet-coaching-pune"
        datePublished="2026-07-12"
        breadcrumbName="NEET Coaching Pune"
      />
      <FaqJsonLd
        items={[
          {
            question: 'Why does NCERT matter so much for NEET?',
            answer: 'NEET Biology in particular draws heavily and directly from NCERT phrasing — students who master NCERT line-by-line consistently outperform those who rely only on reference books that reframe the same content differently.',
          },
          {
            question: 'Can NEET and board exam preparation happen together?',
            answer: 'Yes, and it should — a well-structured NEET program builds board-exam clarity and NEET-level depth from the same NCERT foundation, rather than treating them as two separate syllabi.',
          },
          {
            question: 'Is a dropper year worth it for NEET?',
            answer: 'For students who fell short by a correctable margin — weak in one subject, or let down by exam-day time management — a focused dropper year with small-batch mentoring often closes that gap. It’s a bigger commitment and should be a considered decision, not a default.',
          },
        ]}
      />
      {children}
    </>
  );
}
