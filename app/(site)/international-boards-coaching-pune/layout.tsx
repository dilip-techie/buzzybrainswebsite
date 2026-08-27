import type { Metadata } from 'next';
import { ArticleJsonLd, FaqJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'International Boards & SAT Coaching Pune | BuzzyBrains Academy',
  description:
    'A guide to IGCSE, IB, AP and Digital SAT coaching in Pune, and how BuzzyBrains Academy structures its International Boards and SAT programs.',
  keywords: 'IGCSE coaching Pune, IB coaching Pune, AP coaching Pune, SAT coaching Pune, international board tuition Pune',
  alternates: { canonical: 'https://buzzybrainsacademy.com/international-boards-coaching-pune' },
  openGraph: {
    title: 'International Boards & SAT Coaching Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. A guide to IGCSE, IB, AP and Digital SAT coaching in Pune.',
    url: 'https://buzzybrainsacademy.com/international-boards-coaching-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'International Boards & SAT Coaching Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. A guide to IGCSE, IB, AP and Digital SAT coaching in Pune.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function InternationalPillarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleJsonLd
        headline="International Boards & SAT Coaching Pune"
        description="A guide to IGCSE, IB, AP and Digital SAT coaching in Pune."
        path="/international-boards-coaching-pune"
        datePublished="2026-07-12"
        breadcrumbName="International Boards & SAT Coaching Pune"
      />
      <FaqJsonLd
        items={[
          {
            question: 'How is IGCSE/IB/AP coaching different from CBSE/ICSE coaching?',
            answer: 'International boards emphasize application and critical thinking over recall, use different assessment formats (Internal Assessments, coursework, structured/free-response questions), and often require more independent research skills — coaching needs to be built around those differences, not just the same syllabus taught differently.',
          },
          {
            question: 'When should SAT preparation start?',
            answer: 'Most students preparing for the Digital SAT get the best results starting focused prep about 6-9 months before their target test date, after their core Grade 10-11 English and Maths fundamentals are solid.',
          },
          {
            question: 'Can a student switch from CBSE to IGCSE or IB mid-way?',
            answer: 'It’s possible but easier before Class 9 — after that, the curriculum and assessment style diverge enough that a switch needs deliberate bridging support rather than a straight transfer.',
          },
        ]}
      />
      {children}
    </>
  );
}
