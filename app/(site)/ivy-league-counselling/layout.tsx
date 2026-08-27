import type { Metadata } from 'next';
import { ProgramJsonLd, FaqJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Ivy League & Top US University Counselling | BuzzyBrains Academy',
  description:
    'Grade 9–12 counselling for Ivy League and top US applications — course strategy, SAT/AP planning and a multi-year roadmap. Honest, no guarantees.',
  keywords:
    'Ivy League counselling, US university admissions, Ivy League application help, SAT AP academic profile, US college counselling India, Ivy League coaching Pune, top university application roadmap',
  alternates: { canonical: 'https://buzzybrainsacademy.com/ivy-league-counselling' },
  openGraph: {
    title: 'Ivy League & Top US University Counselling',
    description: 'IITian Mentorship. Grade 9–12 academic profile building for Ivy League and top US university applications — course strategy, SAT/AP scores, honest guidance.',
    url: 'https://buzzybrainsacademy.com/ivy-league-counselling',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'Ivy League Counselling - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ivy League & Top US University Counselling',
    description: 'IITian Mentorship. Grade 9–12 academic profile building for Ivy League and top US university applications — course strategy, SAT/AP scores, honest guidance.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function IvyLeagueCounsellingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="Ivy League & Top US University Counselling"
        description="Grade 9-12 academic counselling for Ivy League and top US university applications, covering course strategy, SAT/AP score planning and a multi-year academic roadmap."
        path="/ivy-league-counselling"
      />
      <FaqJsonLd
        items={[
          {
            question: 'Does this program guarantee Ivy League admission?',
            answer: 'No program can guarantee admission to any Ivy League or top US university — these decisions are holistic and made by each university\'s own admissions committee. We focus honestly on the academic components we can genuinely help build: course strategy, SAT/AP scores and a disciplined multi-year roadmap.',
          },
          {
            question: 'Do you help with essays and extracurricular activities?',
            answer: 'No — this program is scoped to academics: course selection, standardized testing (SAT/AP) and grade-by-grade planning. For essay editing and extracurricular strategy, we recommend working with your school counsellor or a dedicated admissions consultant alongside this program.',
          },
          {
            question: 'When should a student start Ivy League counselling?',
            answer: 'Ideally in grade 9 or 10, so course selection and testing strategy can be planned across all four years rather than compressed into senior year. Students starting later can still benefit from a focused, accelerated roadmap.',
          },
          {
            question: 'How does this connect to your SAT and AP programs?',
            answer: 'Standardized testing strategy in this program is directly coordinated with our dedicated SAT and AP coaching programs, so score targets, test dates and subject choices are planned as one coherent roadmap rather than separately.',
          },
          {
            question: 'Are sessions online or in person?',
            answer: 'Both. We run live online sessions for students across India and elsewhere, and in-person sessions at our Amanora, Pune centre.',
          },
          {
            question: 'How many students are in a batch?',
            answer: 'Batches are capped at a maximum of 12 students so every family gets an individually reviewed academic roadmap, not generic advice.',
          },
        ]}
      />
      {children}
    </>
  );
}
