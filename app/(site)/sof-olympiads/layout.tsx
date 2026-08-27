import type { Metadata } from 'next';
import { geistMono } from '@/app/fonts';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { sofOlympiadFaqs } from '@/lib/olympiad/data';

export const metadata: Metadata = {
  title: 'Multi-Subject Olympiad Coaching in Pune | BuzzyBrains Academy',
  description:
    'Structured olympiad coaching for Grades 3-10 across Maths, Science, English, Commerce, Physics, Chemistry and more. Batches capped at 12.',
  keywords: 'SOF olympiad coaching Pune, IMO NSO IEO IGKO coaching, olympiad classes Pune grades 3-10, NSEJS coaching, science olympiad Pune, commerce olympiad, financial literacy olympiad',
  alternates: { canonical: 'https://buzzybrainsacademy.com/sof-olympiads' },
  openGraph: {
    title: 'Multi-Subject Olympiad Coaching in Pune | Grades 3–10',
    description: 'IITian Mentorship. Structured olympiad coaching across Maths, Science, English, GK, Commerce, Financial Literacy, Economics, Physics, Chemistry and NSEJS for Grades 3-10. Batches capped at 12.',
    url: 'https://buzzybrainsacademy.com/sof-olympiads',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'Multi-Subject Olympiad Coaching - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-Subject Olympiad Coaching in Pune | Grades 3–10',
    description: 'IITian Mentorship. Structured olympiad coaching across Maths, Science, English, GK, Commerce, Financial Literacy, Economics, Physics, Chemistry and NSEJS for Grades 3-10. Batches capped at 12.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function SofOlympiadsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={geistMono.variable}>
      <ProgramJsonLd
        type="Course"
        name="Olympiad Programs (Grades 3-10)"
        description="Structured olympiad coaching for Grades 3-10 across Maths, Science, English, General Knowledge, Commerce, Financial Literacy, Economics, Physics, Chemistry and NSEJS."
        path="/sof-olympiads"
      />
      <FaqJsonLd items={sofOlympiadFaqs.map((f) => ({ question: f.q, answer: f.a }))} />
      {children}
    </div>
  );
}
