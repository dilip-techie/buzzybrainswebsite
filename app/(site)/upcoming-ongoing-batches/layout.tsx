import type { Metadata } from 'next';
import { BreadcrumbJsonLd, FaqJsonLd } from '../../components/JsonLd';
import JsonLd, { PersonJsonLd } from '../../components/JsonLd';
import { BATCHES, BATCH_FAQS, INSTRUCTOR } from './_data';

const SITE = 'https://buzzybrainsacademy.com';
const URL = `${SITE}/upcoming-ongoing-batches`;

const instructorLd = {
  '@type': 'Person',
  name: INSTRUCTOR.name,
  jobTitle: INSTRUCTOR.role,
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'IIT Kanpur' },
  url: `${SITE}/faculty`,
};
const providerLd = { '@type': 'EducationalOrganization', name: 'BuzzyBrains Academy', url: SITE };

export const metadata: Metadata = {
  title: 'Upcoming & Ongoing Batches: A Level, SAT, Foundation | BuzzyBrains',
  description:
    'Enrolling now: online AS/A Level & Further Maths, SAT, Physics Olympiad F=ma, IOQM 2027, AMC 8 and AMC 10, plus offline Foundation for Grades 7-9 in Pune. Led by Dilip Sah (IIT Kanpur). Free demo class.',
  keywords:
    'upcoming batches, ongoing batches, AS Level maths online, A Level maths online, Further Maths online, Further Mechanics, Further Probability and Statistics, SAT online coaching, F=ma physics olympiad coaching, IOQM 2027 batch, AMC 8 coaching, AMC 10 coaching, Foundation batch Grade 7 8 9 Pune',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Upcoming & Ongoing Batches | BuzzyBrains Academy',
    description: 'Online A Level, Further Maths, SAT, F=ma, IOQM 2027, AMC 8 and AMC 10 batches, plus offline Foundation for Grades 7–9 in Pune.',
    url: URL,
    siteName: 'BuzzyBrains Academy',
    images: [{ url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Upcoming & Ongoing Batches | BuzzyBrains Academy',
    description: 'Online A Level, Further Maths, SAT, F=ma, IOQM 2027, AMC 8 and AMC 10 batches, plus offline Foundation for Grades 7–9 in Pune.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function BatchesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd name="Upcoming & Ongoing Batches" path="/upcoming-ongoing-batches" />
      <FaqJsonLd items={BATCH_FAQS} />
      <PersonJsonLd
        name={INSTRUCTOR.name}
        jobTitle={INSTRUCTOR.role}
        description="Founder of BuzzyBrains Academy. B.Tech from IIT Kanpur, JEE Rank 400. Teaches Mathematics and Physics across Foundation, A Level, SAT, Olympiad and JEE programs."
        alumniOf={['IIT Kanpur']}
        path="/faculty"
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Upcoming & Ongoing Batches',
          url: URL,
          description: metadata.description,
          isPartOf: { '@type': 'WebSite', name: 'BuzzyBrains Academy', url: SITE },
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: BATCHES.length,
            itemListElement: BATCHES.map((b, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              item: {
                '@type': 'Course',
                name: b.name,
                description: b.summary,
                url: `${SITE}${b.href}`,
                provider: providerLd,
                hasCourseInstance: {
                  '@type': 'CourseInstance',
                  courseMode: b.mode === 'Online' ? 'online' : 'onsite',
                  instructor: instructorLd,
                  ...(b.mode === 'Offline'
                    ? { location: { '@type': 'Place', name: 'BuzzyBrains Academy, Pune', address: { '@type': 'PostalAddress', addressLocality: 'Hadapsar, Pune', addressRegion: 'Maharashtra', addressCountry: 'IN' } } }
                    : {}),
                },
              },
            })),
          },
        }}
      />
      {children}
    </>
  );
}
