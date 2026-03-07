import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Olympiad Mathematics Program | BuzzyBrains Academy',
  description: 'Elite mathematics training focused on olympiad problem solving, logical reasoning, and deep conceptual foundations. IIT Kanpur mentored program for grades 6-12.',
  keywords: 'olympiad mathematics, INMO, RMO, IOQM, AMC, IMO, advanced mathematics, problem solving',
  openGraph: {
    title: 'Build Mathematical Thinking Early - BuzzyBrains Olympiad Math',
    description: 'Advanced mathematics program with IITian mentorship focused on olympiad preparation and mathematical excellence.',
    type: 'website',
  }
};

export default function OlympiadMathLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
