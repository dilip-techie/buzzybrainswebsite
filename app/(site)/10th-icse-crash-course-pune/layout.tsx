import type { Metadata } from 'next';
import { ProgramJsonLd } from '../../components/JsonLd';
import { buildLanguageAlternates } from '@/lib/seo/hreflang';

export const metadata: Metadata = {
  title: '10th ICSE Crash Course — Maths, Physics, Chemistry & Biology | BuzzyBrains Academy',
  description:
    'An 8-week weightage-first sprint across all four ICSE Class 10 science/maths papers — Maths, Physics, Chemistry & Biology — finishing ahead of the Feb-March 2027 board exams. Named faculty per subject, 12 students per batch.',
  keywords:
    'ICSE class 10 crash course Pune, 10th ICSE physics chemistry biology maths crash course, ICSE board exam 2027 preparation, ICSE class 10 tuition Pune, 10th ICSE science tutor Pune, ICSE class 10 last minute revision, ICSE board exam Feb March 2027',
  alternates: {
    canonical: 'https://buzzybrainsacademy.com/10th-icse-crash-course-pune',
    languages: buildLanguageAlternates('https://buzzybrainsacademy.com/10th-icse-crash-course-pune'),
  },
  openGraph: {
    title: '10th ICSE Crash Course — Maths, Physics, Chemistry & Biology',
    description:
      'A focused pre-board sprint across all four ICSE Class 10 papers: high-weightage chapter triage, board-pattern mocks, led by Dilip Sir (IIT Kanpur) with Biology by Dr. Todkar.',
    url: 'https://buzzybrainsacademy.com/10th-icse-crash-course-pune',
    siteName: 'BuzzyBrains Academy',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: '10th ICSE Crash Course - BuzzyBrains Academy',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '10th ICSE Crash Course — Maths, Physics, Chemistry & Biology',
    description: 'A focused pre-board sprint across all four ICSE Class 10 papers, led by Dilip Sir (IIT Kanpur) with Biology by Dr. Todkar. 12 students per batch.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function TenthIcseCrashCourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="10th ICSE Crash Course (Maths, Physics, Chemistry & Biology)"
        description="An 8-week weightage-first sprint across all four ICSE Class 10 papers — Mathematics, Physics, Chemistry and Biology — finishing ahead of the Feb-March 2027 board exams. High-weightage chapter triage and board-pattern mock papers, led by Dilip Sir (IIT Kanpur) with Biology by Dr. Todkar, in small batches of 12."
        path="/10th-icse-crash-course-pune"
      />
      {children}
    </>
  );
}
