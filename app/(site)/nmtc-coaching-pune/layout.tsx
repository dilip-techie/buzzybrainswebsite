import type { Metadata } from 'next';
import { geistMono } from '@/app/fonts';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { nmtcFaqs } from '@/lib/olympiad/data';

export const metadata: Metadata = {
  title: 'NMTC Coaching in Pune | BuzzyBrains Academy',
  description:
    'Dedicated NMTC coaching in Pune across all five AMTI levels — Primary, Sub-Junior, Junior, Inter and Senior. IIT-alumni mentors, batches capped at 12.',
  keywords: 'NMTC coaching Pune, NMTC classes, AMTI NMTC, National Mathematics Talent Contest, NMTC Part B, NMTC preparation',
  alternates: { canonical: 'https://buzzybrainsacademy.com/nmtc-coaching-pune' },
  openGraph: {
    title: 'NMTC Coaching in Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. Dedicated NMTC coaching across all five AMTI levels — IIT-alumni mentors, batches capped at 12, individual Part B review.',
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
  twitter: {
    card: 'summary_large_image',
    title: 'NMTC Coaching in Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. Dedicated NMTC coaching across all five AMTI levels — IIT-alumni mentors, batches capped at 12, individual Part B review.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function NmtcCoachingPuneLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={geistMono.variable}>
      <ProgramJsonLd
        type="Course"
        name="NMTC Coaching"
        description="Dedicated NMTC (National Mathematics Talent Contest) coaching across all five AMTI levels — Primary, Sub-Junior, Junior, Inter and Senior."
        path="/nmtc-coaching-pune"
      />
      <FaqJsonLd items={nmtcFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
      {children}
    </div>
  );
}
