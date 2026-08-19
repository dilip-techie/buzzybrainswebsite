import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { sofExamFaqs } from '@/lib/olympiad/data';

export const metadata: Metadata = {
  title: 'SOF Exam Coaching Pune | IMO, NSO & More | BuzzyBrains Academy',
  description:
    'Dedicated coaching for all six SOF (Science Olympiad Foundation) exams — IMO, NSO, IEO, NCO, IGKO and ISSO — for Grades 1-12 in Pune. Batches capped at 12.',
  keywords: 'SOF olympiad coaching Pune, SOF IMO coaching, NSO coaching Pune, IEO coaching, NCO cyber olympiad coaching, IGKO coaching, ISSO social studies olympiad, Science Olympiad Foundation classes Pune',
  alternates: { canonical: 'https://buzzybrainsacademy.com/sof-imo-coaching-pune' },
  openGraph: {
    title: 'SOF Exam Coaching Pune | IMO, NSO, IEO, NCO, IGKO & ISSO',
    description: 'Dedicated coaching for all six SOF exams — IMO, NSO, IEO, NCO, IGKO and ISSO — for Grades 1-12. Batches capped at 12.',
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
  twitter: {
    card: 'summary_large_image',
    title: 'SOF Exam Coaching Pune | IMO, NSO, IEO, NCO, IGKO & ISSO',
    description: 'Dedicated coaching for all six SOF exams — IMO, NSO, IEO, NCO, IGKO and ISSO — for Grades 1-12. Batches capped at 12.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function SofImoCoachingPuneLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="SOF Olympiad Coaching (IMO, NSO, IEO, NCO, IGKO, ISSO)"
        description="Dedicated coaching for all six Science Olympiad Foundation exams — IMO, NSO, IEO, NCO, IGKO and ISSO — for Grades 1-12."
        path="/sof-imo-coaching-pune"
      />
      <FaqJsonLd items={sofExamFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
      {children}
    </>
  );
}
