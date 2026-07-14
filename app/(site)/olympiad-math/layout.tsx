import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Maths Excellence Program | Olympiad Mathematics | BuzzyBrains Academy',
  description: 'IITian Mentorship. Gateway to Top IITs and AIIMS. Elite mathematics training with a grade-wise roadmap from Grade 4 foundations to IOQM, RMO, INMO, AMC and IMO. Batches capped at 12, mentored by Dilip Sah (IIT Kanpur, IIM Ahmedabad).',
  keywords: 'olympiad mathematics, maths excellence program, INMO, RMO, IOQM, AMC, AIME, IMO, advanced mathematics, problem solving',
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
      <FaqJsonLd
        items={[
          {
            question: 'What grade or age should my child start olympiad math?',
            answer: 'We take students from Grade 4 onward. Earlier grades focus on number sense and logic puzzles; formal proof-based olympiad training typically ramps up from Grade 7. A short diagnostic tells us where your child actually stands.',
          },
          {
            question: 'Is this different from regular school or board maths tuition?',
            answer: 'Yes. Board maths rewards applying known methods correctly. Olympiad maths rewards constructing an original argument for a problem you have never seen before. We teach proof-writing and problem-solving technique on top of the concepts your child already has.',
          },
          {
            question: 'My child has never done olympiad-style problems before. Can they still join?',
            answer: 'Yes — most students start exactly here. The Grades 7-9 Pre-Olympiad track is designed for students making their first serious attempt at competition mathematics.',
          },
          {
            question: 'Which competitions does this program prepare for?',
            answer: 'India: IOQM, PRMO, RMO, INMO, SOF IMO. International: AMC 8/10/12, AIME, USAJMO, IMO. UK: JMC, IMC, SMC, BMO. Plus Kangaroo Math and other global contests, mapped to the right grade band.',
          },
          {
            question: 'How big are the batches?',
            answer: 'Every batch is capped at 12 students, so the mentor can review each student’s written solutions individually rather than just grading final answers.',
          },
          {
            question: 'Is this available online, offline, or both?',
            answer: 'Both. Classes run online (live, interactive sessions) and offline at our Pune centers.',
          },
        ]}
      />
      {children}
    </>
  );
}
