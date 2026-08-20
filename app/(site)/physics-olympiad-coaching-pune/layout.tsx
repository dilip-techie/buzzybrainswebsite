import type { Metadata } from 'next';
import { geistMono } from '@/app/fonts';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { physicsOlympiadFaqs } from '@/lib/olympiad/data';

export const metadata: Metadata = {
  title: 'Physics Olympiad Coaching in Pune | NSEP, INPhO, F=ma, BPhO | BuzzyBrains Academy',
  description:
    'Physics olympiad coaching in Pune covering India\'s NSEP → INPhO → IPhO pipeline plus F=ma/USAPhO, the British Physics Olympiad, PhysicsBowl and the Online Physics Olympiad. IIT-alumni mentors, batches capped at 12.',
  keywords: 'physics olympiad coaching Pune, NSEP coaching, INPhO coaching, IPhO India, F=ma exam coaching, USAPhO coaching, British Physics Olympiad coaching, BPhO India, PhysicsBowl coaching, Online Physics Olympiad, physics olympiad classes Pune',
  alternates: { canonical: 'https://buzzybrainsacademy.com/physics-olympiad-coaching-pune' },
  openGraph: {
    title: 'Physics Olympiad Coaching in Pune | 5 Olympiads, One Program',
    description: 'India\'s NSEP → INPhO → IPhO pipeline plus F=ma/USAPhO, BPhO, PhysicsBowl and the Online Physics Olympiad — mechanics-first, IIT-alumni mentored, batches capped at 12.',
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
    title: 'Physics Olympiad Coaching in Pune | 5 Olympiads, One Program',
    description: 'India\'s NSEP → INPhO → IPhO pipeline plus F=ma/USAPhO, BPhO, PhysicsBowl and the Online Physics Olympiad — mechanics-first, IIT-alumni mentored.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function PhysicsOlympiadCoachingPuneLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={geistMono.variable}>
      <ProgramJsonLd
        type="Course"
        name="Physics Olympiad Coaching (NSEP, INPhO, F=ma, BPhO, PhysicsBowl, OPhO)"
        description="Physics olympiad coaching covering India's NSEP-to-IPhO pipeline plus F=ma/USAPhO, the British Physics Olympiad, PhysicsBowl and the Online Physics Olympiad."
        path="/physics-olympiad-coaching-pune"
      />
      <FaqJsonLd items={physicsOlympiadFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
      {children}
    </div>
  );
}
