import type { Metadata } from 'next';
import { ProgramJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Olympiad Coaching — Math, Physics, Chemistry, Biology & Coding | BuzzyBrains Academy',
  description:
    'Elite olympiad training across Mathematics, Physics, Chemistry, Biology and Coding. IMO, AMC, IOQM, NSEP, NSEC, NSEB, NSO, IOI and more — mentored by IIT/IIM alumni faculty.',
  keywords:
    'olympiad coaching, IMO, AMC 8 10 12, IOQM, RMO, INMO, NSEP, IPhO, NSEC, IChO, NSEB, IBO, NSO, IJSO, IOI, ZIO, INOI, Kangaroo Math, SOF, science olympiad, coding olympiad',
  alternates: { canonical: 'https://buzzybrainsacademy.com/olympiads' },
  openGraph: {
    title: 'Olympiad Coaching — Every Subject, Every Prominent Competition',
    description:
      'From Math to Coding — structured olympiad training for IMO, AMC, IOQM, NSEP, NSEC, NSEB, NSO, IOI and more, led by IIT/IIM alumni.',
    url: 'https://buzzybrainsacademy.com/olympiads',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'Olympiad Program - BuzzyBrains Academy',
      },
    ],
  },
};

export default function OlympiadsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="Olympiad Coaching"
        description="Elite olympiad training across Mathematics, Physics, Chemistry, Biology and Coding. IMO, AMC, IOQM, NSEP, NSEC, NSEB, NSO, IOI and more — mentored by IIT/IIM alumni faculty."
        path="/olympiads"
      />
      {children}
    </>
  );
}
