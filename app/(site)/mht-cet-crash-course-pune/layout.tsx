import type { Metadata } from 'next';
import { ProgramJsonLd } from '../../components/JsonLd';
import { buildLanguageAlternates } from '@/lib/seo/hreflang';

export const metadata: Metadata = {
  title: 'MHT CET Crash Course 2026-27 (Both Attempts, Till May) | BuzzyBrains Academy',
  description:
    'An 8-week sprint into MHT CET 2027 Session 1 (Dec 15, 2026 - Jan 15, 2027), led by Dilip Sir (IIT Kanpur), with support carried through the Session 2 attempt in April and results in May. High-weightage PCM/PCB revision, CET-pattern mocks — 12 students per batch.',
  keywords:
    'MHT CET crash course Pune, MHT CET 2027 preparation, MHT CET Session 1 Session 2 batch, MHT CET December session coaching, MHT CET last minute preparation Pune, MHT CET PCM PCB crash course, MHT CET best of two attempts, MHT CET coaching near Amanora Pune',
  alternates: {
    canonical: 'https://buzzybrainsacademy.com/mht-cet-crash-course-pune',
    languages: buildLanguageAlternates('https://buzzybrainsacademy.com/mht-cet-crash-course-pune'),
  },
  openGraph: {
    title: 'MHT CET Crash Course — Both Attempts, Till May',
    description:
      'An 8-week sprint into MHT CET 2027 Session 1, carried through the April Session 2 attempt and results in May: high-weightage chapter triage, timed CET-pattern mocks and attempt strategy, mentored by IIT alumni faculty.',
    url: 'https://buzzybrainsacademy.com/mht-cet-crash-course-pune',
    siteName: 'BuzzyBrains Academy',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'MHT CET Crash Course - BuzzyBrains Academy',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MHT CET Crash Course — Both Attempts, Till May',
    description: 'An 8-week sprint into MHT CET 2027 Session 1, carried through Session 2 and results in May, mentored by IIT alumni faculty. 12 students per batch.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function MhtCetCrashCourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="MHT CET Crash Course (Both Attempts, Till May)"
        description="A final-sprint program for MHT CET 2027: an 8-week weightage-first sprint into Session 1 (Dec 15, 2026 - Jan 15, 2027), with support carried through the Session 2 attempt in April 2027 and results in May — high-weightage chapter triage across PCM/PCB, timed CET-pattern mock tests, and attempt strategy, mentored by IIT alumni faculty in small batches of 12."
        path="/mht-cet-crash-course-pune"
      />
      {children}
    </>
  );
}
