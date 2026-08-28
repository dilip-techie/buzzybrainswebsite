import type { Metadata } from 'next';
import { BreadcrumbJsonLd, FaqJsonLd } from '../../components/JsonLd';

const TITLE = 'Free JEE Quick Quiz — 10 Physics, Chemistry & Maths Questions | BuzzyBrains Academy';
const DESCRIPTION =
  'A free, 10-question JEE Main-level quiz across Physics, Chemistry and Maths, with instant scoring and explanations for every answer. No signup required.';
const URL = 'https://buzzybrainsacademy.com/jee-quiz';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'JEE quiz, JEE Main practice questions, JEE physics quiz, JEE chemistry quiz, JEE maths quiz, free JEE test',
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
        alt: 'Free JEE Quick Quiz - BuzzyBrains Academy',
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
    question: 'Is this JEE quiz an accurate readiness test?',
    answer: "It's a quick, 10-question pulse check across Physics, Chemistry and Maths — useful for a directional sense of where you stand, but not a substitute for a full timed mock test or a real diagnostic with a mentor.",
  },
  {
    question: 'How many questions are in the JEE quiz?',
    answer: '10 questions — a mix of Physics, Chemistry and Maths at JEE Main level, each with an explanation shown after you submit.',
  },
  {
    question: 'Can I retake the quiz?',
    answer: 'Yes — the "Retake Quiz" button on the results screen resets it instantly, with no limit on attempts.',
  },
];

export default function JeeQuizLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd name="JEE Quick Quiz" path="/jee-quiz" />
      <FaqJsonLd items={FAQS} />
      {children}
    </>
  );
}
