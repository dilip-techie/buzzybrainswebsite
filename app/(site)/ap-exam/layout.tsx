import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'AP Exam Coaching — Aim for a Score of 5 | BuzzyBrains Academy',
  description:
    'AP Calculus, Physics, Chemistry, Statistics and Computer Science A — small batches, FRQ-first training and full mocks. Online and at our Pune centre.',
  keywords:
    'AP exam coaching, AP Calculus AB BC, AP Physics 1, AP Physics C, AP Chemistry, AP Statistics, AP Computer Science A, AP score 5, College Board exam prep, AP exam coaching Pune, AP tutoring online',
  alternates: { canonical: 'https://buzzybrainsacademy.com/ap-exam' },
  openGraph: {
    title: 'AP Exam Coaching — Aim for the 5',
    description:
      'IITian Mentorship. Advanced Placement coaching by an IIT Kanpur graduate. AP Calculus, Physics, Chemistry, Statistics & Computer Science A. Small batches, FRQ-first practice, full-length mocks.',
    url: 'https://buzzybrainsacademy.com/ap-exam',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'AP Exam Coaching - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AP Exam Coaching — Aim for the 5',
    description: 'IITian Mentorship. Advanced Placement coaching by an IIT Kanpur graduate. AP Calculus, Physics, Chemistry, Statistics & Computer Science A. Small batches, FRQ-first practice, full-length mocks.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function ApExamLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="AP Exam Coaching"
        description="Advanced Placement coaching covering AP Calculus AB/BC, Physics 1 & C, Chemistry, Statistics and Computer Science A, with FRQ-first training, full-length mocks and score tracking — mentored by an IIT Kanpur graduate."
        path="/ap-exam"
      />
      <FaqJsonLd
        items={[
          {
            question: 'Who are AP courses for?',
            answer: 'Advanced Placement courses are college-level courses for high-school students, administered by the College Board. Strong AP scores (typically 4 or 5) strengthen US college applications and can earn college credit or advanced standing at many universities worldwide.',
          },
          {
            question: 'When are AP exams held, and when should we start?',
            answer: 'AP exams are held in the first two weeks of May each year. For comfortable, high-score preparation we recommend starting by August–September of the preceding year; accelerated tracks are available for later starters.',
          },
          {
            question: 'Are classes online or in person?',
            answer: 'Both. We run live online classes for students across India, the US and elsewhere, and in-person sessions at our Amanora, Pune centre. All online sessions are recorded for revision.',
          },
          {
            question: 'Do you offer one-on-one classes, or only batches?',
            answer: 'Both formats are available. Choose fully personalized 1-on-1 mentoring for a fully customized pace, or join a small batch (capped at 12 students) for a more collaborative, structured schedule.',
          },
          {
            question: 'Do you help with exam registration?',
            answer: 'Yes — we guide families through College Board registration, choosing an authorised test centre, and key deadlines so nothing is missed.',
          },
          {
            question: 'How is progress reported to parents?',
            answer: 'Parents receive regular progress updates after unit tests and mock exams, including score-band tracking against the target and specific areas being worked on.',
          },
          {
            question: 'Can my child take more than one AP exam in the same year?',
            answer: 'Yes — our Multi-AP Bundles coordinate a shared weekly planner and mock-exam calendar across subjects, so workload stays balanced and no exam is under-prepared.',
          },
        ]}
      />
      {children}
    </>
  );
}
