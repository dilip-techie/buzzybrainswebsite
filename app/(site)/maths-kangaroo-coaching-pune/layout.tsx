import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { kangarooFaqs } from '@/lib/olympiad/data';

export const metadata: Metadata = {
  title: 'Math Kangaroo Coaching in Pune | All 6 Levels, Grades 1–12 | BuzzyBrains Academy',
  description:
    'Dedicated Math Kangaroo coaching in Pune across all six levels — Pre-Ecolier to Student. IIT-alumni mentors, batches capped at 12. Book a free demo class.',
  keywords: 'Math Kangaroo coaching Pune, Math Kangaroo classes, Math Kangaroo levels, Math Kangaroo preparation India',
  alternates: { canonical: 'https://buzzybrainsacademy.com/maths-kangaroo-coaching-pune' },
  openGraph: {
    title: 'Math Kangaroo Coaching in Pune | BuzzyBrains Academy',
    description: 'Dedicated Math Kangaroo coaching across all six levels — Pre-Ecolier to Student. IIT-alumni mentors, batches capped at 12.',
    url: 'https://buzzybrainsacademy.com/maths-kangaroo-coaching-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'Math Kangaroo Coaching in Pune - BuzzyBrains Academy',
      },
    ],
  },
};

export default function MathsKangarooCoachingPuneLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="Math Kangaroo Coaching"
        description="Dedicated Math Kangaroo coaching across all six levels — Pre-Ecolier, Ecolier, Benjamin, Cadet, Junior and Student — for Grades 1-12."
        path="/maths-kangaroo-coaching-pune"
      />
      <FaqJsonLd items={kangarooFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
      {children}
    </>
  );
}
