import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { sofOlympiadFaqs } from '@/lib/olympiad/data';

export const metadata: Metadata = {
  title: 'SOF Olympiads Coaching Pune | Maths, Science, English & More (Grades 3–10) | BuzzyBrains Academy',
  description:
    'Structured olympiad coaching for Grades 3-10 across Maths, Science, English, General Knowledge, Commerce, Financial Literacy, Economics, Physics, Chemistry and NSEJS. Batches capped at 12. Book a free demo class.',
  keywords: 'SOF olympiad coaching Pune, IMO NSO IEO IGKO coaching, olympiad classes Pune grades 3-10, NSEJS coaching, science olympiad Pune, commerce olympiad, financial literacy olympiad',
  alternates: { canonical: 'https://buzzybrainsacademy.com/sof-olympiads' },
  openGraph: {
    title: 'SOF Olympiads Coaching Pune | Grades 3–10 | BuzzyBrains Academy',
    description: 'Structured olympiad coaching across Maths, Science, English, GK, Commerce, Financial Literacy, Economics, Physics, Chemistry and NSEJS for Grades 3-10. Batches capped at 12.',
    url: 'https://buzzybrainsacademy.com/sof-olympiads',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'SOF Olympiads Coaching - BuzzyBrains Academy',
      },
    ],
  },
};

export default function SofOlympiadsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="Olympiad Programs (Grades 3-10)"
        description="Structured olympiad coaching for Grades 3-10 across Maths, Science, English, General Knowledge, Commerce, Financial Literacy, Economics, Physics, Chemistry and NSEJS."
        path="/sof-olympiads"
      />
      <FaqJsonLd items={sofOlympiadFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
      {children}
    </>
  );
}
