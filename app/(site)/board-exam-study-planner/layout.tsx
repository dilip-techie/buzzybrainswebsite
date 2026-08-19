import type { Metadata } from 'next';
import { BreadcrumbJsonLd } from '../../components/JsonLd';

const TITLE = 'Free Board Exam Study Planner | CBSE, ICSE, SSC | BuzzyBrains Academy';
const DESCRIPTION =
  'A free, printable month-by-month study planner for Class 10 (CBSE, ICSE, SSC) and Class 12 (CBSE, HSC) board exams, with a final-week revision checklist.';
const URL = 'https://buzzybrainsacademy.com/board-exam-study-planner';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'board exam study planner, CBSE study planner, ICSE study planner, SSC study planner, class 10 study plan, class 12 study plan, board exam revision checklist',
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Board Exam Study Planner - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function BoardExamStudyPlannerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd name="Board Exam Study Planner" path="/board-exam-study-planner" />
      {children}
    </>
  );
}
