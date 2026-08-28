import type { Metadata } from 'next';
import { BreadcrumbJsonLd, FaqJsonLd } from '../../components/JsonLd';

const TITLE = 'Free NEET Quick Quiz — 10 Physics, Chemistry & Biology Questions | BuzzyBrains Academy';
const DESCRIPTION =
  'A free, 10-question NEET-level quiz across Physics, Chemistry and Biology, with instant scoring and explanations for every answer. No signup required.';
const URL = 'https://buzzybrainsacademy.com/neet-quiz';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'NEET quiz, NEET practice questions, NEET biology quiz, NEET physics quiz, NEET chemistry quiz, free NEET test',
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
        alt: 'Free NEET Quick Quiz - BuzzyBrains Academy',
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
    question: 'Is this NEET quiz an accurate readiness test?',
    answer: "It's a quick, 10-question pulse check across Physics, Chemistry and Biology — useful for a directional sense of where you stand, but not a substitute for a full timed mock test or a real diagnostic with a mentor.",
  },
  {
    question: 'How many questions are in the NEET quiz?',
    answer: '10 questions — a mix of Physics, Chemistry and Biology at NEET level, each with an explanation shown after you submit.',
  },
  {
    question: 'Can I retake the quiz?',
    answer: 'Yes — the "Retake Quiz" button on the results screen resets it instantly, with no limit on attempts.',
  },
];

export default function NeetQuizLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd name="NEET Quick Quiz" path="/neet-quiz" />
      <FaqJsonLd items={FAQS} />
      {children}
    </>
  );
}
