import type { Metadata } from 'next';
import { ProgramJsonLd } from '../../components/JsonLd';
import { buildLanguageAlternates } from '@/lib/seo/hreflang';

export const metadata: Metadata = {
  title: '12th CBSE PCMB Crash Course 2026-27 | BuzzyBrains Academy',
  description:
    'An 8-week weightage-first sprint in Physics, Chemistry, Maths & Biology for CBSE Class 12 (PCM & PCB), led by Dilip Sir (IIT Kanpur) with Biology by Dr. Todkar, finishing ahead of the Feb-March 2027 board exams. 12 students per batch.',
  keywords:
    'CBSE class 12 crash course Pune, 12th CBSE PCMB crash course, class 12 CBSE board exam 2027 preparation, class 12 physics chemistry maths biology crash course Pune, CBSE 12th board exam last minute revision, 12th CBSE PCM PCB tuition Pune',
  alternates: {
    canonical: 'https://buzzybrainsacademy.com/12th-cbse-crash-course-pune',
    languages: buildLanguageAlternates('https://buzzybrainsacademy.com/12th-cbse-crash-course-pune'),
  },
  openGraph: {
    title: '12th CBSE PCMB Crash Course — 2026-27',
    description:
      'A focused pre-board sprint for CBSE Class 12 PCM and PCB: high-weightage chapter triage, board-pattern mocks, led by Dilip Sir (IIT Kanpur) with Biology by Dr. Todkar.',
    url: 'https://buzzybrainsacademy.com/12th-cbse-crash-course-pune',
    siteName: 'BuzzyBrains Academy',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: '12th CBSE PCMB Crash Course - BuzzyBrains Academy',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '12th CBSE PCMB Crash Course — 2026-27',
    description: 'A focused pre-board sprint for CBSE Class 12 PCM and PCB, led by Dilip Sir (IIT Kanpur) with Biology by Dr. Todkar. 12 students per batch.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function TwelfthCbseCrashCourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="12th CBSE PCMB Crash Course"
        description="An 8-week weightage-first sprint for CBSE Class 12 Physics, Chemistry, Mathematics and Biology (PCM & PCB), finishing ahead of the Feb-March 2027 board exams. High-weightage chapter triage and board-pattern mock papers, led by Dilip Sir (IIT Kanpur) with Biology by Dr. Todkar, in small batches of 12."
        path="/12th-cbse-crash-course-pune"
      />
      {children}
    </>
  );
}
