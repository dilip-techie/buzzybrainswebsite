import type { Metadata } from 'next';
import { geistMono } from '@/app/fonts';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { NSE_EXAMS, buildNseMetadata } from '@/lib/olympiad/nse';

const exam = NSE_EXAMS.nsep;

export const metadata: Metadata = buildNseMetadata(exam);

export default function NSEPCoachingPuneLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={geistMono.variable}>
      <ProgramJsonLd
        type="Course"
        name={`${exam.code} Coaching (${exam.subject} Olympiad)`}
        description={exam.metaDescription}
        path={exam.path}
      />
      <FaqJsonLd items={exam.faqs.map((f) => ({ question: f.q, answer: f.a }))} />
      {children}
    </div>
  );
}
