import type { Metadata } from 'next';
import { BreadcrumbJsonLd, FaqJsonLd, WebApplicationJsonLd } from '../../components/JsonLd';

const TITLE = 'Free Study Timetable Generator for JEE & NEET | Mentored by IITian | BuzzyBrains Academy';
const DESCRIPTION =
  'Mark your coaching and heavy school days, get a realistic weekly JEE/NEET study timetable built around subject rotation, a weekly mock day and real rest — mentored by IITian faculty, no signup required.';
const URL = 'https://buzzybrainsacademy.com/study-timetable-generator';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'study timetable generator, JEE study plan, NEET study plan, weekly study schedule, JEE NEET timetable maker, mentored by IITian',
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: `IITian Mentorship. ${DESCRIPTION}`,
    url: URL,
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'Free Study Timetable Generator - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: `IITian Mentorship. ${DESCRIPTION}`,
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

const FAQS = [
  {
    question: 'How does the Study Timetable Generator decide my weekly plan?',
    answer:
      "It anchors your coaching/heavy school days as fixed (light revision only), then rotates your exam's subjects across your genuinely free days for deep-focus blocks, reserves your second-to-last free day for a weekly mock test or full revision, and keeps your last free day as real rest rather than more content.",
  },
  {
    question: 'What if I have coaching every single day?',
    answer: "The tool will flag it — even one genuinely free day matters for a sustainable weekly rhythm. Try marking at least one day as free, even if it means a shorter coaching session that day.",
  },
  {
    question: 'Does this timetable account for board exam revision too?',
    answer: "Not directly — it's built around JEE/NEET subject rotation specifically. Board-pattern revision needs its own dedicated time, especially closer to board exam dates.",
  },
];

export default function StudyTimetableGeneratorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd name="Study Timetable Generator" path="/study-timetable-generator" />
      <WebApplicationJsonLd name="Study Timetable Generator" description={DESCRIPTION} path="/study-timetable-generator" />
      <FaqJsonLd items={FAQS} />
      {children}
    </>
  );
}
