import type { Metadata } from 'next';
import { BreadcrumbJsonLd, FaqJsonLd, WebApplicationJsonLd } from '../../components/JsonLd';

const TITLE = 'Free NEET & JEE Main Rank + College Predictor | Mentored by IITian | BuzzyBrains Academy';
const DESCRIPTION =
  'Enter your expected NEET score or JEE Main percentile and get an honest, banded read on what it typically converts to — no fake precise cutoffs, just the real pattern from recent years, mentored by IITian faculty.';
const URL = 'https://buzzybrainsacademy.com/neet-jee-rank-predictor';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'NEET rank predictor, JEE Main percentile predictor, NEET score to college, JEE Main percentile to NIT, NEET college predictor, JEE rank calculator, mentored by IITian',
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
        alt: 'Free NEET & JEE Main Rank + College Predictor - BuzzyBrains Academy',
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
    question: 'How accurate is this rank predictor?',
    answer:
      "It's a directional estimate based on the general pattern from recent years, not an official or guaranteed number — actual cutoffs shift every year by category, state and applicant pool. Always confirm with official JoSAA/CSAB (JEE) or MCC/state counselling (NEET) data before making a final decision.",
  },
  {
    question: 'Why does this tool give a band instead of an exact rank?',
    answer:
      "Because an exact score-to-rank mapping doesn't exist until the year's official results and normalization are published. A band is the honest version of what any predictor can actually tell you before that — precise-sounding numbers before then are guesses dressed up as data.",
  },
  {
    question: 'Does this account for category (SC/ST/OBC/EWS) reservation?',
    answer:
      'No — this tool shows the general-category pattern only. Reservation categories shift effective cutoffs substantially, so treat this as a starting reference point, not a category-specific prediction.',
  },
];

export default function RankPredictorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd name="NEET & JEE Main Rank Predictor" path="/neet-jee-rank-predictor" />
      <WebApplicationJsonLd name="NEET & JEE Main Rank + College Predictor" description={DESCRIPTION} path="/neet-jee-rank-predictor" />
      <FaqJsonLd items={FAQS} />
      {children}
    </>
  );
}
