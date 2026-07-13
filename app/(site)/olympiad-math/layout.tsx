import type { Metadata } from 'next';
import { ProgramJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Olympiad Mathematics Program | BuzzyBrains Academy',
  description: 'IITian Mentorship. Gateway to Top IITs and AIIMS. Elite mathematics training focused on olympiad problem solving, logical reasoning, and deep conceptual foundations. IIT Kanpur mentored program for grades 6-12.',
  keywords: 'olympiad mathematics, INMO, RMO, IOQM, AMC, IMO, advanced mathematics, problem solving',
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
  }
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
        description="Elite mathematics training focused on olympiad problem solving, logical reasoning, and deep conceptual foundations. IIT Kanpur mentored program for grades 6-12."
        path="/olympiad-math"
      />
      {children}
    </>
  );
}
