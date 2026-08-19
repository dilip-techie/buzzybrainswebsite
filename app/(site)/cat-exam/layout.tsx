import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'CAT Coaching — India\'s Top MBA Exam | BuzzyBrains Academy',
  description:
    'Structured CAT preparation — VARC, DILR and Quantitative Ability — with sectional-time-native mocks and small batches capped at 12.',
  keywords:
    'CAT coaching, CAT exam prep, Common Admission Test, CAT VARC DILR QA, CAT DILR strategy, CAT quantitative ability, MBA entrance coaching, CAT coaching Pune, IIM entrance exam',
  alternates: { canonical: 'https://buzzybrainsacademy.com/cat-exam' },
  openGraph: {
    title: 'CAT Coaching — India\'s Top MBA Entrance Exam',
    description: 'Structured, sectional-time-native CAT preparation with section-wise mastery and full-length mocks, mentored in small batches.',
    url: 'https://buzzybrainsacademy.com/cat-exam',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'CAT Coaching - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CAT Coaching — India\'s Top MBA Entrance Exam',
    description: 'Structured, sectional-time-native CAT preparation with section-wise mastery and full-length mocks, mentored in small batches.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function CatExamLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="CAT Coaching"
        description="Structured CAT preparation covering VARC, DILR and Quantitative Ability, with sectional-time-native mocks, DILR set-selection training and percentile tracking."
        path="/cat-exam"
      />
      <FaqJsonLd
        items={[
          {
            question: 'What is CAT?',
            answer: 'CAT (Common Admission Test) is the entrance exam for 2-year MBA/PGP programmes at the IIMs and other top B-schools, taken after a bachelor\'s degree.',
          },
          {
            question: 'What does the CAT exam cover?',
            answer: 'CAT tests Verbal Ability & Reading Comprehension (VARC), Data Interpretation & Logical Reasoning (DILR), and Quantitative Ability (QA), through a mix of MCQ and Type-In-The-Answer (TITA) questions under sectional time limits.',
          },
          {
            question: 'Can I use a calculator in CAT?',
            answer: 'No — CAT does not permit calculators, so quantitative preparation focuses on genuine mental and written calculation speed.',
          },
          {
            question: 'Does a good CAT percentile guarantee MBA admission?',
            answer: 'No — most B-schools use CAT percentile as one stage in a multi-stage process that typically also includes a Written Ability Test and/or Group Discussion and Personal Interview.',
          },
          {
            question: 'Are classes online or in person?',
            answer: 'Both. We run live online classes for students and working professionals across India, and in-person sessions at our Amanora, Pune centre. All online sessions are recorded for revision.',
          },
          {
            question: 'How many students are in a batch?',
            answer: 'Batches are capped at a maximum of 12 students so every student gets individual, section-wise feedback on their mocks.',
          },
        ]}
      />
      {children}
    </>
  );
}
