import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { nmtcFaqs } from '@/lib/olympiad/data';

export const metadata: Metadata = {
  title: 'NMTC Coaching in Pune | Primary to Senior Level (Class 5–12) | BuzzyBrains Academy',
  description:
    'Dedicated NMTC coaching in Pune across all five AMTI levels — Primary, Sub-Junior, Junior, Inter and Senior. IIT-alumni mentors, batches capped at 12, individual Part B review. Book a free demo class.',
  keywords: 'NMTC coaching Pune, NMTC classes, AMTI NMTC, National Mathematics Talent Contest, NMTC Part B, NMTC preparation',
  alternates: { canonical: 'https://buzzybrainsacademy.com/nmtc-coaching-pune' },
  openGraph: {
    title: 'NMTC Coaching in Pune | BuzzyBrains Academy',
    description: 'Dedicated NMTC coaching across all five AMTI levels — IIT-alumni mentors, batches capped at 12, individual Part B review.',
    url: 'https://buzzybrainsacademy.com/nmtc-coaching-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'NMTC Coaching in Pune - BuzzyBrains Academy',
      },
    ],
  },
};

export default function NmtcCoachingPuneLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="NMTC Coaching"
        description="Dedicated NMTC (National Mathematics Talent Contest) coaching across all five AMTI levels — Primary, Sub-Junior, Junior, Inter and Senior."
        path="/nmtc-coaching-pune"
      />
      <FaqJsonLd items={nmtcFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
      {children}
    </>
  );
}
