import type { Metadata } from 'next';
import { geistMono } from '@/app/fonts';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { physicsOlympiadFaqs } from '@/lib/olympiad/data';

export const metadata: Metadata = {
  title: 'Physics Olympiad Coaching in Pune | IOQP, F=ma, BPhO',
  description:
    'Physics Olympiad coaching in Pune — India\'s IOQP (NSEP+INPhO) pathway to IPhO, plus F=ma/USAPhO, BPhO, APhO and EuPhO. IIT-alumni mentors, batches of 12.',
  keywords: 'physics olympiad coaching, NSEP INPhO preparation, Indian Physics Olympiad classes Pune, F=ma exam preparation India, IPhO coaching, physics olympiad syllabus India, IOQP coaching Pune, USAPhO coaching India, British Physics Olympiad coaching, Asian Physics Olympiad, European Physics Olympiad',
  alternates: { canonical: 'https://buzzybrainsacademy.com/physics-olympiad-coaching-pune' },
  openGraph: {
    title: 'Physics Olympiad Coaching in Pune | IOQP, F=ma, BPhO, APhO, EuPhO',
    description: 'India\'s IOQP (NSEP+INPhO) pathway to IPhO, plus F=ma/USAPhO, BPhO, APhO and EuPhO — mechanics-first, IIT-alumni mentored, batches capped at 12.',
    url: 'https://buzzybrainsacademy.com/physics-olympiad-coaching-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'Physics Olympiad Coaching in Pune - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Physics Olympiad Coaching in Pune | IOQP, F=ma, BPhO, APhO, EuPhO',
    description: 'India\'s IOQP (NSEP+INPhO) pathway to IPhO, plus F=ma/USAPhO, BPhO, APhO and EuPhO — mechanics-first, IIT-alumni mentored.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function PhysicsOlympiadCoachingPuneLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={geistMono.variable}>
      <ProgramJsonLd
        type="Course"
        name="Physics Olympiad Coaching (IOQP, F=ma, BPhO, APhO, EuPhO)"
        description="Physics olympiad coaching covering India's IOQP (NSEP+INPhO) pathway to IPhO, plus F=ma/USAPhO, the British Physics Olympiad, the Asian Physics Olympiad and the European Physics Olympiad."
        path="/physics-olympiad-coaching-pune"
      />
      <FaqJsonLd items={physicsOlympiadFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
      {children}
    </div>
  );
}
