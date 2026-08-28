import type { Metadata } from 'next';
import { BreadcrumbJsonLd } from '../../components/JsonLd';

const TITLE = 'Free Tools & Calculators for JEE, NEET & Board Exams | BuzzyBrains Academy';
const DESCRIPTION =
  'Free, honest calculators and planners for JEE and NEET aspirants — rank predictors, score calculators, study timetables and mock-test planners. No signup required.';
const URL = 'https://buzzybrainsacademy.com/resource-centre';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: 'JEE NEET free tools, NEET rank predictor, JEE percentile calculator, study timetable generator, mock test planner, board exam study planner',
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
        alt: 'Free Tools & Calculators - BuzzyBrains Academy',
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

export default function ResourceCentreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd name="Resource Centre" path="/resource-centre" />
      {children}
    </>
  );
}
