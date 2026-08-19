import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'CLAT Coaching — Law Entrance Exam Prep | BuzzyBrains Academy',
  description:
    'Structured CLAT preparation covering English, Current Affairs, Legal & Logical Reasoning and Quant — passage-first practice, full mocks, batches capped at 12.',
  keywords:
    'CLAT coaching, CLAT exam prep, Common Law Admission Test, CLAT legal reasoning, CLAT logical reasoning, National Law University entrance, CLAT coaching Pune, CLAT mock tests',
  alternates: { canonical: 'https://buzzybrainsacademy.com/clat-exam' },
  openGraph: {
    title: 'CLAT Coaching — National Law Entrance Exam Prep',
    description: 'Structured, passage-first CLAT preparation with section-wise mastery and full-length mocks, mentored in small batches.',
    url: 'https://buzzybrainsacademy.com/clat-exam',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'CLAT Coaching - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CLAT Coaching — National Law Entrance Exam Prep',
    description: 'Structured, passage-first CLAT preparation with section-wise mastery and full-length mocks, mentored in small batches.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function ClatExamLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="CLAT Coaching"
        description="Structured CLAT preparation covering English Language, Current Affairs, Legal Reasoning, Logical Reasoning and Quantitative Techniques, with passage-first training, full-length mocks and rank tracking."
        path="/clat-exam"
      />
      <FaqJsonLd
        items={[
          {
            question: 'What is CLAT and who is it for?',
            answer: 'CLAT (Common Law Admission Test) is India\'s national entrance exam for admission to 5-year integrated law programs (BA LLB and similar) at 20+ National Law Universities. It is typically taken by students after Class 12.',
          },
          {
            question: 'What does the CLAT exam pattern look like?',
            answer: 'CLAT has 120 questions across five sections — English Language, Current Affairs including GK, Legal Reasoning, Logical Reasoning, and Quantitative Techniques — to be completed in 2 hours. Every question, including quantitative ones, is set in a passage-based format.',
          },
          {
            question: 'Do students need a legal background to start CLAT prep?',
            answer: 'No prior legal knowledge is required. Legal Reasoning tests how well a student can apply a given legal principle to a new fact situation, which is a reading and reasoning skill we build from scratch.',
          },
          {
            question: 'When should CLAT preparation start?',
            answer: 'For comfortable, high-rank preparation we recommend starting in Class 11, giving 12–18 months to build reading speed, reasoning accuracy and a current-affairs habit before the exam. Accelerated tracks are available for later starters.',
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
