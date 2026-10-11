import type { Metadata } from 'next';
import { BreadcrumbJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { BATCH_FAQS } from './_data';

const URL = 'https://buzzybrainsacademy.com/upcoming-ongoing-batches';

export const metadata: Metadata = {
  title: 'Upcoming & Ongoing Batches | BuzzyBrains Academy',
  description:
    'See BuzzyBrains Academy batches open for enrollment: online AS Level, A Level and Further Maths, online SAT, and offline Foundation batches for Grades 7, 8 and 9 in Pune.',
  keywords:
    'upcoming batches, ongoing batches, AS Level maths online, A Level maths online, Further Maths online, Further Mechanics, Further Probability and Statistics, SAT online coaching, Foundation batch Grade 7 8 9 Pune',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Upcoming & Ongoing Batches | BuzzyBrains Academy',
    description: 'Online A Level, Further Maths and SAT batches, plus offline Foundation batches for Grades 7–9 in Pune.',
    url: URL,
    siteName: 'BuzzyBrains Academy',
    images: [{ url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upcoming & Ongoing Batches | BuzzyBrains Academy',
    description: 'Online A Level, Further Maths and SAT batches, plus offline Foundation batches for Grades 7–9 in Pune.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function BatchesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd name="Upcoming & Ongoing Batches" path="/upcoming-ongoing-batches" />
      <FaqJsonLd items={BATCH_FAQS} />
      {children}
    </>
  );
}
