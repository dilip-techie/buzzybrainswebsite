import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'BuzzyBrains Commerce Tuitions | Class 11-12 Commerce Coaching Pune | IGCSE & IB | BuzzyBrains Academy',
  description:
    'IITian Mentorship. Gateway to Top IITs and AIIMS. Commerce coaching in Pune for Class 11-12 CBSE, ICSE, State Board, IGCSE and IB Diploma students — Accountancy, Economics, Business Studies, Applied Maths and more, plus CUET, CA Foundation, IPMAT, NPAT and SET preparation support. Small batches, max 10 students.',
  keywords:
    'Commerce coaching Pune, Commerce classes Pune, Class 11 Commerce coaching, Class 12 Commerce coaching, Accountancy classes Pune, Economics tuition Pune, Business Studies tuition Pune, Applied Maths coaching Pune, CUET commerce coaching, CA Foundation coaching Pune, IPMAT preparation Pune, IGCSE Business Studies tuition Pune, IGCSE Economics coaching Pune, IB Business Management tuition Pune, IB Economics coaching Pune, IB Diploma Commerce coaching Pune',
  alternates: { canonical: 'https://buzzybrainsacademy.com/commerce-tuitions' },
  openGraph: {
    title: 'BuzzyBrains Commerce Tuitions | BuzzyBrains Academy',
    description: 'Class 11-12 Commerce coaching in Pune — CBSE, ICSE, State Board, IGCSE and IB Diploma — Accountancy, Economics, Business Studies, Applied Maths, plus CUET, CA Foundation, IPMAT, NPAT and SET prep support.',
    url: 'https://buzzybrainsacademy.com/commerce-tuitions',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'BuzzyBrains Commerce Tuitions',
      },
    ],
  },
};

export default function CommerceTuitionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="BuzzyBrains Commerce Tuitions"
        description="Class 11-12 Commerce coaching in Pune covering Accountancy, Economics, Business Studies, Applied and Core Maths, Statistics, Informatics Practices, English and Entrepreneurship, for CBSE, ICSE, State Board, IGCSE and IB Diploma students, plus CUET, CA Foundation, IPMAT, NPAT and SET preparation support."
        path="/commerce-tuitions"
      />
      <FaqJsonLd
        items={[
          {
            question: 'Which boards does BuzzyBrains Commerce Tuitions cover?',
            answer: 'CBSE, ICSE, State Board, IGCSE (Cambridge) and IB Diploma Commerce students in Class 11 and 12 are all covered, with subject teaching adapted to each board\'s syllabus and assessment pattern.',
          },
          {
            question: 'Do you teach IGCSE and IB Diploma Commerce subjects?',
            answer: 'Yes — we teach IGCSE Business Studies, Economics and Accounting, as well as IB Business Management, Economics and Accounting & Finance at HL/SL, including support with IB Internal Assessments.',
          },
          {
            question: 'Do you help with CUET, CA Foundation, IPMAT, NPAT or SET preparation?',
            answer: 'Yes — alongside core board-subject coaching, we provide structured preparation support for CUET, CA Foundation, IPMAT, NPAT and SET, tailored to each exam\'s pattern and your child\'s board-exam timeline.',
          },
          {
            question: 'What is the batch size for Commerce Tuitions?',
            answer: 'Every Commerce batch is capped at a maximum of 10 students, so every student gets individual attention on subjects like Accountancy and Applied Maths that reward close doubt-resolution.',
          },
          {
            question: 'Can a student strengthen only Accounts or only Applied Maths without joining the full program?',
            answer: 'Yes — subject-wise enrollment is available for students who want focused help in one area, such as Accountancy or Applied Maths, rather than the complete Commerce program.',
          },
        ]}
      />
      {children}
    </>
  );
}
