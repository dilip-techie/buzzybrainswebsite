import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { faqs } from '@/lib/olympiad/data';

export const metadata: Metadata = {
  title: 'IOQM, AMC 8 & AMC 10 Coaching in Pune | BuzzyBrains Academy',
  description:
    'Premium IOQM, AMC 8 and AMC 10 math olympiad coaching in Pune for Grades 6-12. IIT-alumni mentors, batches capped at 12, weekly timed mock papers in the real exam format. Book a free demo class.',
  keywords: 'IOQM coaching Pune, AMC 8 coaching Pune, AMC 10 coaching Pune, math olympiad classes Pune, IOQM classes, AMC coaching India, olympiad coaching institute Pune',
  alternates: { canonical: 'https://buzzybrainsacademy.com/ioqm-amc-coaching-pune' },
  openGraph: {
    title: 'IOQM, AMC 8 & AMC 10 Coaching in Pune | BuzzyBrains Academy',
    description: 'Elite IOQM, AMC 8 and AMC 10 olympiad coaching in Pune. IIT-alumni mentors, batches capped at 12, weekly timed mocks in the real exam format.',
    url: 'https://buzzybrainsacademy.com/ioqm-amc-coaching-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'IOQM, AMC 8 & AMC 10 Coaching in Pune - BuzzyBrains Academy',
      },
    ],
  },
};

export default function IoqmAmcLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="IOQM, AMC 8 & AMC 10 Olympiad Coaching"
        description="Premium IOQM, AMC 8 and AMC 10 olympiad coaching for Grades 6-12, taught by IIT-alumni mentors in small batches with weekly timed mock papers."
        path="/ioqm-amc-coaching-pune"
      />
      <FaqJsonLd items={faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      {children}
    </>
  );
}
