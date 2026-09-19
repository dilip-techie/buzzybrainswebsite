import type { Metadata } from 'next';
import { ProgramJsonLd } from '../../components/JsonLd';
import { buildLanguageAlternates } from '@/lib/seo/hreflang';

export const metadata: Metadata = {
  title: '10th CBSE Maths & Science Crash Course 2026-27 | BuzzyBrains Academy',
  description:
    'An 8-week weightage-first sprint in Maths & Science for CBSE Class 10, led by Dilip Sir (IIT Kanpur) with Biology by Dr. Todkar, finishing ahead of the Feb-March 2027 board exams — with support carried through to the optional May re-exam. 12 students per batch.',
  keywords:
    'CBSE class 10 crash course Pune, 10th CBSE maths science crash course, CBSE board exam 2027 preparation, class 10 CBSE last minute revision Pune, CBSE class 10 science tuition Pune, 10th CBSE maths tutor Pune, CBSE class 10 May improvement exam',
  alternates: {
    canonical: 'https://buzzybrainsacademy.com/10th-cbse-crash-course-pune',
    languages: buildLanguageAlternates('https://buzzybrainsacademy.com/10th-cbse-crash-course-pune'),
  },
  openGraph: {
    title: '10th CBSE Maths & Science Crash Course — 2026-27',
    description:
      'A focused pre-board sprint for CBSE Class 10 Maths & Science: high-weightage chapter triage, board-pattern mocks and NCERT-line accuracy, led by Dilip Sir (IIT Kanpur) with Biology by Dr. Todkar.',
    url: 'https://buzzybrainsacademy.com/10th-cbse-crash-course-pune',
    siteName: 'BuzzyBrains Academy',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: '10th CBSE Maths & Science Crash Course - BuzzyBrains Academy',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '10th CBSE Maths & Science Crash Course — 2026-27',
    description: 'A focused pre-board sprint for CBSE Class 10 Maths & Science, led by Dilip Sir (IIT Kanpur) with Biology by Dr. Todkar. 12 students per batch.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function TenthCbseCrashCourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="10th CBSE Maths & Science Crash Course"
        description="An 8-week weightage-first sprint for CBSE Class 10 Maths & Science, finishing ahead of the Feb-March 2027 board exams, with support carried through to the optional May re-exam. High-weightage chapter triage, board-pattern mock papers and NCERT-line accuracy, led by Dilip Sir (IIT Kanpur) with Biology by Dr. Todkar, in small batches of 12."
        path="/10th-cbse-crash-course-pune"
      />
      {children}
    </>
  );
}
