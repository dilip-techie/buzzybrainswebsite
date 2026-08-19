import type { Metadata } from 'next';
import { ProgramJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'IIT-JEE Coaching for PCM & Droppers | BuzzyBrains Academy',
  description:
    'Deep conceptual IIT-JEE coaching in Physics, Chemistry & Maths for Grades 11-12 and droppers. Concept-first teaching and JEE Main + Advanced test series.',
  alternates: { canonical: 'https://buzzybrainsacademy.com/12th-board-pcm' },
  openGraph: {
    title: 'IIT-JEE Coaching — Grade 11-12 PCM & Droppers',
    description:
      'Rigorous, concept-first IIT-JEE preparation in Physics, Chemistry & Maths, mentored by IIT alumni faculty.',
    url: 'https://buzzybrainsacademy.com/12th-board-pcm',
    siteName: 'BuzzyBrains Academy',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'IIT-JEE Coaching - BuzzyBrains Academy',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IIT-JEE Coaching — Grade 11-12 PCM & Droppers',
    description: 'Rigorous, concept-first IIT-JEE preparation in Physics, Chemistry & Maths, mentored by IIT alumni faculty.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function TwelfthBoardPcmLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="IIT-JEE Coaching (Grade 11-12 PCM & Droppers)"
        description="Deep conceptual IIT-JEE coaching in Physics, Chemistry & Maths for Grades 11-12 and droppers. Concept-first teaching, advanced problem solving and JEE Main + Advanced test series with IITian faculty."
        path="/12th-board-pcm"
      />
      {children}
    </>
  );
}
