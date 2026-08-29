import type { Metadata } from 'next';
import { BreadcrumbJsonLd, FaqJsonLd, WebApplicationJsonLd } from '../../components/JsonLd';

const TITLE = 'Free Class 8 Foundation Maths Quiz | Mentored by IITian | BuzzyBrains Academy';
const DESCRIPTION =
  'A free, 10-question Class 8 Maths quiz covering linear equations, squares/cubes, factorization and proportion, with instant scoring and explanations for every answer — mentored by IITian faculty, no signup required.';
const URL = 'https://buzzybrainsacademy.com/foundation-maths-quiz-class-8';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'class 8 maths quiz, class 8 maths practice questions, foundation maths quiz, class 8 maths test, mentored by IITian',
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: `IITian Mentorship. ${DESCRIPTION}`,
    url: URL,
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Class 8 Foundation Maths Quiz - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: `IITian Mentorship. ${DESCRIPTION}`,
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

const FAQS = [
  {
    question: 'Is this Class 8 Maths quiz an accurate readiness test?',
    answer: "It's a quick, 10-question pulse check across linear equations, squares/cubes, factorization and proportion — useful for a directional sense of where you stand, but not a substitute for a full diagnostic with a mentor.",
  },
  {
    question: 'How many questions are in the Class 8 Maths quiz?',
    answer: '10 questions at Class 8 level, each with an explanation shown after you submit.',
  },
  {
    question: 'Why does the quiz ask for my name and email?',
    answer: "So we can show you your score and, if relevant, follow up with guidance for Class 8 Maths. We don't share this with anyone else.",
  },
];

export default function FoundationMathsQuizClass8Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd name="Class 8 Foundation Maths Quiz" path="/foundation-maths-quiz-class-8" />
      <WebApplicationJsonLd name="Class 8 Foundation Maths Quiz" description={DESCRIPTION} path="/foundation-maths-quiz-class-8" />
      <FaqJsonLd items={FAQS} />
      {children}
    </>
  );
}
