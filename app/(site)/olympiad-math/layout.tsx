import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { mathsOlympiadFaqs } from '@/lib/olympiad/data';

export const metadata: Metadata = {
  title: 'Maths Excellence Program | BuzzyBrains Academy',
  description: 'Elite mathematics training with a grade-wise roadmap from Grade 4 foundations to IOQM, RMO, INMO, AMC and IMO. Batches capped at 12.',
  keywords: 'olympiad mathematics, maths excellence program, INMO, RMO, IOQM, AMC, AIME, IMO, SOF IMO, NMTC, Math Kangaroo, advanced mathematics, problem solving',
  alternates: { canonical: 'https://buzzybrainsacademy.com/olympiad-math' },
  openGraph: {
    title: 'Build Mathematical Thinking Early - BuzzyBrains Academy Olympiad Math',
    description: 'Advanced mathematics program with IITian mentorship focused on olympiad preparation and mathematical excellence.',
    url: 'https://buzzybrainsacademy.com/olympiad-math',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/Maths Excellence Program.png',
        width: 1200,
        height: 630,
        alt: 'Maths Excellence Program - BuzzyBrains Academy'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Build Mathematical Thinking Early - BuzzyBrains Academy Olympiad Math',
    description: 'Advanced mathematics program with IITian mentorship focused on olympiad preparation and mathematical excellence.',
    images: ['https://buzzybrainsacademy.com/images/Maths Excellence Program.png'],
  },
};

export default function OlympiadMathLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="Olympiad Mathematics Program"
        description="Structured competition-maths coaching across SOF IMO, IOQM, NMTC, AMC 8/10 and Math Kangaroo — IIT-alumni mentored, batches capped at 12, for Grades 1-12."
        path="/olympiad-math"
      />
      <FaqJsonLd items={mathsOlympiadFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
      {children}
    </>
  );
}
