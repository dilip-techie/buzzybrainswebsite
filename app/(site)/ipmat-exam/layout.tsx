import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'IPMAT Coaching — 5-Year Integrated Programme in Management | BuzzyBrains Academy',
  description:
    'Structured IPMAT preparation — Quantitative Ability, Verbal Ability and dedicated WAT-PI coaching — for Class 12 students targeting the 5-year integrated BBA+MBA programme at IIMs. Small batches capped at 12 students.',
  keywords:
    'IPMAT coaching, IPMAT exam prep, IIM Indore IPMAT, IIM Rohtak IPMAT, Integrated Program in Management, IPMAT quantitative ability, IPMAT verbal ability, IPMAT WAT PI, IPMAT coaching Pune',
  alternates: { canonical: 'https://buzzybrainsacademy.com/ipmat-exam' },
  openGraph: {
    title: 'IPMAT Coaching — 5-Year Integrated Programme in Management',
    description: 'Structured IPMAT preparation with section-wise mastery, full-length mocks and dedicated WAT-PI coaching, mentored in small batches.',
    url: 'https://buzzybrainsacademy.com/ipmat-exam',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'IPMAT Coaching - BuzzyBrains Academy',
      },
    ],
  },
};

export default function IpmatExamLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="IPMAT Coaching"
        description="Structured IPMAT preparation covering Quantitative Ability and Verbal Ability, with dedicated Written Ability Test and Personal Interview coaching, full-length mocks and percentile tracking."
        path="/ipmat-exam"
      />
      <FaqJsonLd
        items={[
          {
            question: 'What is IPMAT?',
            answer: 'IPMAT (Integrated Program in Management Aptitude Test) is the entrance exam for 5-year integrated BBA+MBA programmes at IIMs such as Indore and Rohtak, taken right after Class 12.',
          },
          {
            question: 'What does the IPMAT exam cover?',
            answer: 'IPMAT generally tests Quantitative Ability and Verbal Ability, followed by a Written Ability Test (WAT) and Personal Interview for shortlisted candidates — the exact pattern varies by IIM and year, so it should be confirmed from that IIM\'s official notification.',
          },
          {
            question: 'Is IPMAT the same exam at every IIM?',
            answer: 'No — different IIMs conduct their own separate IPMAT with different section structures, so preparation should be matched to a student\'s specific target IIM.',
          },
          {
            question: 'When should IPMAT preparation start?',
            answer: 'For comfortable preparation we recommend starting in Class 11, giving 12-18 months to build quantitative fundamentals, reading habits and WAT-PI communication skills before the exam. Accelerated tracks are available for later starters.',
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
