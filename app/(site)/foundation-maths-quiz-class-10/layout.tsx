import type { Metadata } from 'next';
import { BreadcrumbJsonLd, FaqJsonLd, WebApplicationJsonLd } from '../../components/JsonLd';

const TITLE = 'Free Class 10 Foundation Maths Quiz | Mentored by IITian | BuzzyBrains Academy';
const DESCRIPTION =
  'A free, 10-question Class 10 Maths quiz covering quadratic equations, trigonometry, coordinate geometry and circles, with instant scoring and explanations for every answer — mentored by IITian faculty, no signup required.';
const URL = 'https://buzzybrainsacademy.com/foundation-maths-quiz-class-10';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'class 10 maths quiz, class 10 maths practice questions, foundation maths quiz, class 10 maths test, mentored by IITian',
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
        alt: 'Free Class 10 Foundation Maths Quiz - BuzzyBrains Academy',
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
    question: 'Is this Class 10 Maths quiz an accurate readiness test?',
    answer: "It's a quick, 10-question pulse check across quadratic equations, trigonometry, coordinate geometry and circles — useful for a directional sense of where you stand, but not a substitute for a full diagnostic with a mentor.",
  },
  {
    question: 'How many questions are in the Class 10 Maths quiz?',
    answer: '10 questions at Class 10 level, each with an explanation shown after you submit.',
  },
  {
    question: 'Why does the quiz ask for my name and email?',
    answer: "So we can show you your score and, if relevant, follow up with guidance for Class 10 Maths. We don't share this with anyone else.",
  },
];

export default function FoundationMathsQuizClass10Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd name="Class 10 Foundation Maths Quiz" path="/foundation-maths-quiz-class-10" />
      <WebApplicationJsonLd name="Class 10 Foundation Maths Quiz" description={DESCRIPTION} path="/foundation-maths-quiz-class-10" />
      <FaqJsonLd items={FAQS} />
      {children}
    </>
  );
}
