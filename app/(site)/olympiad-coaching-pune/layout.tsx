import type { Metadata } from 'next';
import { ArticleJsonLd, FaqJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: "Olympiad Coaching in Pune: A Parent's Guide | BuzzyBrains Academy",
  description:
    'A guide to olympiad coaching in Pune — how the subjects connect, and how BuzzyBrains Academy structures olympiad prep.',
  keywords: 'olympiad coaching Pune, olympiad classes Pune, IOQM coaching Pune, science olympiad coaching Pune',
  alternates: { canonical: 'https://buzzybrainsacademy.com/olympiad-coaching-pune' },
  openGraph: {
    title: "Olympiad Coaching in Pune: A Parent's Guide",
    description: 'IITian Mentorship. A guide to olympiad coaching in Pune across Math, Physics, Chemistry, Biology and Coding.',
    url: 'https://buzzybrainsacademy.com/olympiad-coaching-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Olympiad Coaching in Pune: A Parent's Guide",
    description: 'IITian Mentorship. A guide to olympiad coaching in Pune across Math, Physics, Chemistry, Biology and Coding.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function OlympiadPillarLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ArticleJsonLd
        headline="Olympiad Coaching in Pune: A Parent's Guide"
        description="A guide to olympiad coaching in Pune across Math, Physics, Chemistry, Biology and Coding."
        path="/olympiad-coaching-pune"
        datePublished="2026-07-12"
        breadcrumbName="Olympiad Coaching Pune"
      />
      <FaqJsonLd
        items={[
          {
            question: 'Which olympiad should my child start with?',
            answer: 'For most students, IOQM (Maths) or NSO (general Science, junior level) are the natural entry points — both have a clear preparation path and feed into more advanced national and international olympiads.',
          },
          {
            question: 'Do olympiads help with JEE/NEET preparation too?',
            answer: 'Yes — olympiad-style problem-solving builds exactly the deep, flexible reasoning that JEE Advanced and NEET’s harder questions reward, so olympiad prep and competitive-exam prep reinforce each other rather than competing for time.',
          },
          {
            question: 'Is olympiad coaching only for exceptionally gifted students?',
            answer: 'No — it rewards trained, structured problem-solving more than raw natural talent. Students with a solid foundation who put in consistent, well-structured olympiad practice regularly outperform naturally quick students who prepare only briefly before the exam.',
          },
        ]}
      />
      {children}
    </>
  );
}
