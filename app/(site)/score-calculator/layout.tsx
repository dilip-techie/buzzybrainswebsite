import type { Metadata } from 'next';
import { BreadcrumbJsonLd, FaqJsonLd, WebApplicationJsonLd } from '../../components/JsonLd';

const TITLE = 'Free NEET & JEE Main Score Calculator | Mentored by IITian | BuzzyBrains Academy';
const DESCRIPTION =
  'Enter your correct, incorrect and unattempted counts and get your exact NEET or JEE Main score using the real official marking scheme — instant, no signup, mentored by IITian faculty.';
const URL = 'https://buzzybrainsacademy.com/score-calculator';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'NEET score calculator, JEE Main score calculator, NEET marking scheme calculator, JEE Main marks calculator, negative marking calculator, mentored by IITian',
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
        alt: 'Free NEET & JEE Main Score Calculator - BuzzyBrains Academy',
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
    question: 'What is the NEET marking scheme?',
    answer: '+4 for each correct answer, -1 for each incorrect answer, and 0 for unattempted questions, out of a maximum of 720.',
  },
  {
    question: 'What is the JEE Main marking scheme?',
    answer: 'MCQs score +4 for a correct answer and -1 for an incorrect one. Numerical-value questions score +4 for a correct answer but typically have no negative marking for an incorrect one — always confirm the current year\'s exact rules on the official NTA information bulletin.',
  },
  {
    question: 'Does this calculator predict my rank or percentile?',
    answer: "No — it only computes your raw score from the marking scheme. For a banded read on what that score typically converts to, use our NEET & JEE Main Rank Predictor.",
  },
];

export default function ScoreCalculatorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd name="NEET & JEE Main Score Calculator" path="/score-calculator" />
      <WebApplicationJsonLd name="NEET & JEE Main Score Calculator" description={DESCRIPTION} path="/score-calculator" />
      <FaqJsonLd items={FAQS} />
      {children}
    </>
  );
}
