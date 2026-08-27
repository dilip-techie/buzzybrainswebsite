import type { Metadata } from 'next';
import JsonLd, { LocalBusinessJsonLd, PersonJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { FAQS, PROGRAM_TABLE } from './_data';

export const metadata: Metadata = {
  title: 'Best Coaching Institute in Hadapsar, Pune | BuzzyBrains Academy',
  description:
    'Premium coaching in Hadapsar, Pune for Grades 4-12 — Foundation, Olympiads, IIT-JEE, NEET, Commerce, IGCSE, IB, AP and Coding & AI. Max 12 students per batch.',
  keywords:
    'best coaching institute in Pune, best coaching institute in Hadapsar, coaching classes Hadapsar Pune, IIT JEE coaching Hadapsar, NEET coaching Hadapsar, Foundation classes Hadapsar Pune, coaching institute Amanora, coaching classes Magarpatta, coaching institute Kharadi, Dilip Sah IIT Kanpur, BuzzyBrains Academy reviews, small batch coaching Pune',
  alternates: { canonical: 'https://buzzybrainsacademy.com/best-coaching-institute-pune' },
  openGraph: {
    title: 'Best Coaching Institute in Hadapsar, Pune | BuzzyBrains Academy',
    description:
      'IITian Mentorship. Premium coaching for Grades 4-12 in Hadapsar, Pune — Foundation, Olympiads, IIT-JEE, NEET, Commerce, IGCSE, IB, AP, SAT and Coding & AI. IITian-led, max 12 students per batch.',
    url: 'https://buzzybrainsacademy.com/best-coaching-institute-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'BuzzyBrains Academy — Best Coaching Institute in Hadapsar, Pune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Coaching Institute in Hadapsar, Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. Premium coaching for Grades 4-12 in Hadapsar, Pune — Foundation, Olympiads, IIT-JEE, NEET, Commerce, IGCSE, IB, AP, SAT and Coding & AI. IITian-led, max 12 students per batch.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function BestCoachingInstituteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocalBusinessJsonLd
        name="BuzzyBrains Academy"
        description="Premium coaching institute in Hadapsar, Pune for Grades 4-12 — Foundation, Maths Excellence, Olympiads, IIT-JEE, NEET, Commerce, IGCSE, IB, AP, SAT and Code Ninja (Coding & AI). Founded by Dilip Sah, IIT Kanpur and IIM Ahmedabad alumnus. Maximum 12 students per batch."
        path="/best-coaching-institute-pune"
        streetAddress="201, Pallazo, Nr. Wisdom World School, Amanora"
        areaServed={['Hadapsar', 'Amanora', 'Magarpatta', 'Kharadi', 'Mundhwa', 'Wanowrie', 'Fatima Nagar', 'NIBM', 'Kondhwa', 'Manjri', 'Fursungi', 'Pune']}
        breadcrumbName="Best Coaching Institute in Pune"
      />
      <PersonJsonLd
        name="Dilip Sah"
        jobTitle="Founder & Mathematics Mentor, BuzzyBrains Academy"
        description="Founder of BuzzyBrains Academy. IIT Kanpur alumnus (JEE All India Rank 400), IIM Ahmedabad alumnus, with 25+ years of technology leadership experience before founding the academy in 2021."
        alumniOf={['IIT Kanpur', 'IIM Ahmedabad']}
        path="/best-coaching-institute-pune"
      />
      <FaqJsonLd items={FAQS} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Programs offered by BuzzyBrains Academy',
          itemListElement: PROGRAM_TABLE.map((p, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
              '@type': 'Course',
              name: p.program,
              description: `${p.focus} — for ${p.grades}.`,
              provider: { '@type': 'EducationalOrganization', name: 'BuzzyBrains Academy' },
              url: `https://buzzybrainsacademy.com${p.href}`,
            },
          })),
        }}
      />
      {children}
    </>
  );
}
