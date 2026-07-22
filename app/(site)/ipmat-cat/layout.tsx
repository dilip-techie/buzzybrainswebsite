import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'IPMAT & CAT Coaching — India\'s Top B-School Entrances | BuzzyBrains Academy',
  description:
    'Structured IPMAT and CAT preparation — Quantitative Ability, Verbal Ability, Data Interpretation & Logical Reasoning — with track-specific strategy, full-length mocks and small batches capped at 12 students.',
  keywords:
    'IPMAT coaching, IPMAT exam prep, CAT coaching, CAT exam prep, IIM Indore IPMAT, IIM Rohtak IPMAT, CAT VARC DILR QA, IPMAT coaching Pune, CAT coaching Pune, MBA entrance coaching',
  alternates: { canonical: 'https://buzzybrainsacademy.com/ipmat-cat' },
  openGraph: {
    title: 'IPMAT & CAT Coaching — India\'s Top B-School Entrances',
    description: 'Structured, track-specific IPMAT and CAT preparation with section-wise mastery and full-length mocks, mentored in small batches.',
    url: 'https://buzzybrainsacademy.com/ipmat-cat',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'IPMAT & CAT Coaching - BuzzyBrains Academy',
      },
    ],
  },
};

export default function IpmatCatLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="IPMAT & CAT Coaching"
        description="Structured IPMAT and CAT preparation covering Quantitative Ability, Verbal Ability, Data Interpretation and Logical Reasoning, with track-specific training, full-length mocks and percentile tracking."
        path="/ipmat-cat"
      />
      <FaqJsonLd
        items={[
          {
            question: 'What is the difference between IPMAT and CAT?',
            answer: 'IPMAT is taken right after Class 12 for admission to 5-year integrated BBA+MBA programmes at IIMs like Indore and Rohtak; CAT is taken after a bachelor\'s degree for admission to 2-year MBA/PGP programmes at the IIMs and other top B-schools.',
          },
          {
            question: 'What does the IPMAT exam cover?',
            answer: 'IPMAT generally tests Quantitative Ability and Verbal Ability, followed by a Written Ability Test (WAT) and Personal Interview for shortlisted candidates — the exact pattern varies by IIM and year, so it should be confirmed from that IIM\'s official notification.',
          },
          {
            question: 'What does the CAT exam cover?',
            answer: 'CAT tests Verbal Ability & Reading Comprehension (VARC), Data Interpretation & Logical Reasoning (DILR), and Quantitative Ability (QA), through a mix of MCQ and Type-In-The-Answer (TITA) questions under sectional time limits.',
          },
          {
            question: 'Can a Class 12 student prepare for both IPMAT and CAT together?',
            answer: 'Not meaningfully at the same time — IPMAT is relevant right after Class 12, while CAT is taken years later after a bachelor\'s degree. Most students focus on IPMAT first, and revisit CAT-specific preparation closer to graduation.',
          },
          {
            question: 'Are classes online or in person?',
            answer: 'Both. We run live online classes for students across India, and in-person sessions at our Amanora, Pune centre. All online sessions are recorded for revision.',
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
