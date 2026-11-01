import type { Metadata } from 'next';
import { ProgramJsonLd } from '@/app/components/JsonLd';

const URL = 'https://buzzybrainsacademy.com/cbse-class-10-maths-science';

export const metadata: Metadata = {
  title: 'CBSE Class 10 Maths & Science Coaching in Pune | BuzzyBrains Academy',
  description:
    'CBSE Class 10 Maths & Science board-exam program in Pune: top faculty, exam-focused study material, regular tests with analysis and smart classrooms. Batches capped at 12. Book a free demo class.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'CBSE Class 10 Maths & Science Program | BuzzyBrains Academy',
    description:
      'Top faculty, exam-focused study material, regular tests and smart classrooms for CBSE Class 10. Book a free demo class.',
    url: URL,
    siteName: 'BuzzyBrains Academy',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'CBSE Class 10 Maths & Science Program - BuzzyBrains Academy',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CBSE Class 10 Maths & Science Program | BuzzyBrains Academy',
    description: 'Top faculty, study material, regular tests and smart classrooms for CBSE Class 10. Book a free demo.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function CbseClass10LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="CBSE Class 10 Maths & Science Program"
        description="CBSE Class 10 Maths and Science board-exam program with top faculty, exam-focused study material, regular tests with analysis and smart classrooms, in batches capped at 12 students."
        path="/cbse-class-10-maths-science"
      />
      {children}
    </>
  );
}
