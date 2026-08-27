import type { Metadata } from 'next';
import { ProgramJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'NEET Coaching — Grade 11-12 PCB & Droppers | BuzzyBrains Academy',
  description:
    'Complete medical entrance preparation in Physics, Chemistry & Biology with NCERT at the core, mentored by expert faculty.',
  alternates: { canonical: 'https://buzzybrainsacademy.com/12th-board-pcb' },
  openGraph: {
    title: 'NEET Coaching — Grade 11-12 PCB & Droppers',
    description:
      'IITian Mentorship. Complete medical entrance preparation in Physics, Chemistry & Biology with NCERT at the core, mentored by expert faculty.',
    url: 'https://buzzybrainsacademy.com/12th-board-pcb',
    siteName: 'BuzzyBrains Academy',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'NEET Coaching - BuzzyBrains Academy',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEET Coaching — Grade 11-12 PCB & Droppers',
    description: 'IITian Mentorship. Complete medical entrance preparation in Physics, Chemistry & Biology with NCERT at the core, mentored by expert faculty.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function TwelfthBoardPcbLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="NEET Coaching (Grade 11-12 PCB & Droppers)"
        description="Complete NEET medical entrance preparation for Grades 11-12 and droppers, with NCERT at the core. Line-by-line NCERT mastery, high-yield revision systems and NEET-pattern mock tests with expert faculty."
        path="/12th-board-pcb"
      />
      {children}
    </>
  );
}
