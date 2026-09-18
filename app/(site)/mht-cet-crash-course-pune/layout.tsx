import type { Metadata } from 'next';
import { ProgramJsonLd } from '../../components/JsonLd';
import { buildLanguageAlternates } from '@/lib/seo/hreflang';

export const metadata: Metadata = {
  title: 'MHT CET Crash Course (Session 1, Dec 15 Window) | BuzzyBrains Academy',
  description:
    'A focused sprint batch for MHT CET 2027 Session 1 (Dec 15, 2026 - Jan 15, 2027), led by Dilip Sir (IIT Kanpur). High-weightage PCM/PCB revision, CET-pattern mocks and best-of-two strategy — 12 students per batch.',
  alternates: {
    canonical: 'https://buzzybrainsacademy.com/mht-cet-crash-course-pune',
    languages: buildLanguageAlternates('https://buzzybrainsacademy.com/mht-cet-crash-course-pune'),
  },
  openGraph: {
    title: 'MHT CET Crash Course — Session 1 Sprint Batch',
    description:
      'A concentrated pre-Session 1 sprint for MHT CET 2027: high-weightage chapter triage, timed CET-pattern mocks and best-of-two attempt strategy, mentored by IIT alumni faculty.',
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
    title: 'MHT CET Crash Course — Session 1 Sprint Batch',
    description: 'A concentrated pre-Session 1 sprint for MHT CET 2027, mentored by IIT alumni faculty. 12 students per batch.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function MhtCetCrashCourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="MHT CET Crash Course (Session 1 Sprint Batch)"
        description="A focused final-sprint program for MHT CET 2027 Session 1 (Dec 15, 2026 - Jan 15, 2027): high-weightage chapter triage across PCM/PCB, timed CET-pattern mock tests, and best-of-two attempt strategy, mentored by IIT alumni faculty in small batches of 12."
        path="/mht-cet-crash-course-pune"
      />
      {children}
    </>
  );
}
