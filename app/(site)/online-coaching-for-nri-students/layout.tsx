import type { Metadata } from 'next';
import JsonLd, { BreadcrumbJsonLd, FaqJsonLd, PersonJsonLd } from '@/app/components/JsonLd';
import { buildLanguageAlternates } from '@/lib/seo/hreflang';
import { DATA } from './_data';

const SITE_URL = 'https://buzzybrainsacademy.com';
const PATH = '/online-coaching-for-nri-students';

export const metadata: Metadata = {
  title: 'Online Coaching for NRI Students — IIT-JEE, NEET, Olympiads & CBSE/ICSE | BuzzyBrains Academy',
  description:
    'Live, faculty-led online coaching for NRI and international Indian students — IIT-JEE, NEET, Maths & Science Olympiads, CBSE/ICSE and IGCSE/IB. Same IIT/IIM/PhD faculty as our Pune campus, sessions recorded for every time zone.',
  keywords:
    'online coaching for NRI students, IIT JEE coaching for NRI, NEET coaching for NRI, online tuition for Indian students abroad, CBSE coaching USA, ICSE coaching UK, Indian curriculum coaching Singapore, olympiad coaching for NRI, online tuition Dubai Indian students, online tuition Australia Indian students',
  alternates: {
    canonical: `${SITE_URL}${PATH}`,
    languages: buildLanguageAlternates(`${SITE_URL}${PATH}`),
  },
  openGraph: {
    title: 'Online Coaching for NRI Students — IIT-JEE, NEET, Olympiads & CBSE/ICSE',
    description:
      'Live, faculty-led online coaching for NRI and international Indian students, from the same IIT/IIM/PhD faculty who teach at BuzzyBrains Academy, Pune. Sessions recorded for every time zone.',
    url: `${SITE_URL}${PATH}`,
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [{ url: `${SITE_URL}/images/buzzybrains_social.jpg`, width: 1200, height: 630, alt: 'Online Coaching for NRI Students — BuzzyBrains Academy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Coaching for NRI Students — IIT-JEE, NEET, Olympiads & CBSE/ICSE',
    description:
      'Live, faculty-led online coaching for NRI and international Indian students. Same IIT/IIM/PhD faculty as our Pune campus, sessions recorded for every time zone.',
    images: [`${SITE_URL}/images/buzzybrains_social.jpg`],
  },
};

export default function NriCoachingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd name="Online Coaching for NRI Students" path={PATH} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Online tutoring for NRI and international Indian students',
          name: 'BuzzyBrains Academy — Online Coaching for NRI & International Students',
          description: DATA.whatIsAnswer,
          url: `${SITE_URL}${PATH}`,
          provider: {
            '@type': 'EducationalOrganization',
            name: 'BuzzyBrains Academy',
            url: SITE_URL,
          },
          areaServed: [
            { '@type': 'Country', name: 'United States' },
            { '@type': 'Country', name: 'United Kingdom' },
            { '@type': 'Country', name: 'Singapore' },
            { '@type': 'Country', name: 'United Arab Emirates' },
            { '@type': 'Country', name: 'Australia' },
            { '@type': 'Country', name: 'Canada' },
            { '@type': 'Country', name: 'India' },
          ],
          availableChannel: {
            '@type': 'ServiceChannel',
            serviceUrl: `${SITE_URL}${PATH}`,
            serviceType: 'Online',
          },
        }}
      />
      <PersonJsonLd
        name="Dilip Sah"
        jobTitle="Founder & Mathematics Mentor, BuzzyBrains Academy"
        description="Founder of BuzzyBrains Academy. IIT Kanpur alumnus (JEE All India Rank 400), IIM Ahmedabad alumnus, with 25+ years of technology leadership experience before founding the academy in 2021."
        alumniOf={['IIT Kanpur', 'IIM Ahmedabad']}
        path={PATH}
      />
      <FaqJsonLd items={DATA.faqs} />
      {children}
    </>
  );
}
