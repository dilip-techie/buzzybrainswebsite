import type { Metadata } from 'next';
import { ArticleJsonLd, FaqJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'IIT JEE Coaching Pune | BuzzyBrains Academy',
  description:
    'Everything Pune parents ask before choosing IIT-JEE coaching — batch sizes, faculty, and Main vs Advanced strategy for Grades 11-12 and droppers.',
  keywords: 'IIT JEE coaching Pune, JEE coaching institute Pune, best JEE coaching Pune, JEE Main Advanced coaching',
  alternates: { canonical: 'https://buzzybrainsacademy.com/iit-jee-coaching-pune' },
  openGraph: {
    title: 'IIT JEE Coaching Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. A complete guide to choosing IIT-JEE coaching in Pune, and how BuzzyBrains Academy structures its JEE program.',
    url: 'https://buzzybrainsacademy.com/iit-jee-coaching-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IIT JEE Coaching Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. A complete guide to choosing IIT-JEE coaching in Pune, and how BuzzyBrains Academy structures its JEE program.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function IitJeePillarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleJsonLd
        headline="IIT JEE Coaching Pune"
        description="A complete guide to choosing IIT-JEE coaching in Pune, and how BuzzyBrains Academy structures its JEE program."
        path="/iit-jee-coaching-pune"
        datePublished="2026-07-12"
        breadcrumbName="IIT JEE Coaching Pune"
      />
      <FaqJsonLd
        items={[
          {
            question: 'What makes JEE coaching in Pune different from self-study?',
            answer: 'Structured JEE coaching gives you a sequenced syllabus, timed practice under real exam conditions, and faculty who can spot conceptual gaps early — the three things self-study almost always underdelivers on, especially for JEE Advanced-style multi-concept problems.',
          },
          {
            question: 'What batch size should I look for in JEE coaching?',
            answer: 'Below 15 students per batch is where individual doubt-resolution and mentor familiarity with each student’s weak areas actually becomes possible. BuzzyBrains Academy caps every batch at 12.',
          },
          {
            question: 'When should my child start JEE coaching?',
            answer: 'Most strong performers start structured foundation work in Grade 9-10 and move into full JEE-focused coaching from Grade 11, giving a genuine two-year runway before Grade 12 boards and JEE overlap.',
          },
        ]}
      />
      {children}
    </>
  );
}
