import type { Metadata } from 'next';
import { ArticleJsonLd, FaqJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Foundation Classes Pune (Grades 6-10) | BuzzyBrains Academy',
  description:
    'Why starting foundation-level coaching early matters, and how BuzzyBrains Academy structures its Foundation program.',
  keywords: 'foundation classes Pune, foundation coaching Pune, grade 6 7 8 9 10 coaching Pune, NTSE coaching Pune',
  alternates: { canonical: 'https://buzzybrainsacademy.com/foundation-classes-pune' },
  openGraph: {
    title: 'Foundation Classes Pune (Grades 6-10) | BuzzyBrains Academy',
    description: 'IITian Mentorship. Why starting foundation-level coaching early matters, and how BuzzyBrains Academy structures its Foundation program.',
    url: 'https://buzzybrainsacademy.com/foundation-classes-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundation Classes Pune (Grades 6-10) | BuzzyBrains Academy',
    description: 'IITian Mentorship. Why starting foundation-level coaching early matters, and how BuzzyBrains Academy structures its Foundation program.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function FoundationPillarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleJsonLd
        headline="Foundation Classes Pune (Grades 6-10)"
        description="Why starting foundation-level coaching early matters, and how BuzzyBrains Academy structures its Foundation program."
        path="/foundation-classes-pune"
        datePublished="2026-07-12"
        breadcrumbName="Foundation Classes Pune"
      />
      <FaqJsonLd
        items={[
          {
            question: 'What age or grade should foundation classes start at?',
            answer: 'Grade 6 is a common and effective starting point, since it’s early enough to build genuine conceptual habits before board-exam pressure begins in Grade 9-10, without rushing a younger child into exam-style coaching too early.',
          },
          {
            question: 'Is foundation coaching only useful for students planning JEE/NEET?',
            answer: 'No — strong conceptual foundations in Maths and Science pay off in board exam performance, NTSE and olympiad eligibility, and general academic confidence, regardless of which competitive exam path a student eventually chooses.',
          },
          {
            question: 'How is foundation coaching different from school tuition?',
            answer: 'School tuition typically reinforces what was taught in class. Foundation coaching goes further — building problem-solving ability and exposing students to competitive-exam-style thinking years before they need it.',
          },
        ]}
      />
      {children}
    </>
  );
}
