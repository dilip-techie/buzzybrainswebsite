import type { Metadata } from 'next';
import { BreadcrumbJsonLd, FaqJsonLd, WebApplicationJsonLd } from '../../components/JsonLd';

const TITLE = 'Free Mock Test Schedule Planner for JEE & NEET | Mentored by IITian | BuzzyBrains Academy';
const DESCRIPTION =
  'Enter your JEE or NEET exam date and get a phased mock-test calendar — diagnostic, core, intensive, taper — instead of a vague "take lots of mocks" plan. Mentored by IITian faculty, no signup required.';
const URL = 'https://buzzybrainsacademy.com/mock-test-planner';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'mock test schedule, JEE mock test planner, NEET mock test planner, how many mock tests, mock test calendar, mentored by IITian',
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
        alt: 'Free Mock Test Schedule Planner - BuzzyBrains Academy',
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
    question: 'How does the Mock Test Planner decide my phases?',
    answer:
      "It splits your remaining weeks into four phases proportionally -- roughly 15% diagnostic, 50% core building, 25% intensive, and 10% taper -- following the same phased structure as a realistic testing timeline, scaled to however much time you actually have left rather than assuming a fixed 6-12 month runway.",
  },
  {
    question: 'What if my exam is very close?',
    answer: "With under 4 weeks left, a phased plan doesn't have room to work -- the tool will tell you to skip straight to 1-2 lighter mocks for rhythm and spend the rest of your remaining time on revision, not new testing.",
  },
  {
    question: 'Is the mock count this tool gives me exact?',
    answer: "No -- it's a reasonable starting structure, not a rigid target. What actually improves your score is reviewing each mock properly and acting on the error log, not hitting an exact number of attempts.",
  },
];

export default function MockTestPlannerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd name="Mock Test Schedule Planner" path="/mock-test-planner" />
      <WebApplicationJsonLd name="Mock Test Schedule Planner" description={DESCRIPTION} path="/mock-test-planner" />
      <FaqJsonLd items={FAQS} />
      {children}
    </>
  );
}
