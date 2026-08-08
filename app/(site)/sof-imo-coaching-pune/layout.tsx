import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { sofExamFaqs } from '@/lib/olympiad/data';

export const metadata: Metadata = {
  title: 'SOF Olympiad Coaching Pune | IMO, NSO, IEO & IGKO (Grades 1–12) | BuzzyBrains Academy',
  description:
    'Dedicated coaching for all four SOF (Science Olympiad Foundation) exams — IMO, NSO, IEO and IGKO — for Grades 1-12 in Pune. Batches capped at 12. Book a free demo class.',
  keywords: 'SOF olympiad coaching Pune, SOF IMO coaching, NSO coaching Pune, IEO coaching, IGKO coaching, Science Olympiad Foundation classes Pune',
  alternates: { canonical: 'https://buzzybrainsacademy.com/sof-imo-coaching-pune' },
  openGraph: {
    title: 'SOF Olympiad Coaching Pune | IMO, NSO, IEO & IGKO | BuzzyBrains Academy',
    description: 'Dedicated coaching for all four SOF exams — IMO, NSO, IEO and IGKO — for Grades 1-12. Batches capped at 12.',
    url: 'https://buzzybrainsacademy.com/sof-imo-coaching-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'SOF Olympiad Coaching Pune - BuzzyBrains Academy',
      },
    ],
  },
};

export default function SofImoCoachingPuneLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="SOF Olympiad Coaching (IMO, NSO, IEO, IGKO)"
        description="Dedicated coaching for all four Science Olympiad Foundation exams — IMO, NSO, IEO and IGKO — for Grades 1-12."
        path="/sof-imo-coaching-pune"
      />
      <FaqJsonLd items={sofExamFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
      {children}
    </>
  );
}
