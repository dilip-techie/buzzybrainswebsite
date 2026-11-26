import type { Metadata } from 'next';
import JsonLd, { BreadcrumbJsonLd, FaqJsonLd, PersonJsonLd } from '@/app/components/JsonLd';
import { buildLanguageAlternates } from '@/lib/seo/hreflang';
import type { BestInstituteData } from '@/components/local-seo/BestInstituteTemplate';

const SITE_URL = 'https://buzzybrainsacademy.com';

export interface CountryPageConfig {
  path: string;
  /** Country name as used in schema.org areaServed, e.g. "United States". */
  country: string;
  /** Short label for breadcrumbs, e.g. "Online Coaching in the USA". */
  breadcrumb: string;
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
}

export function buildCountryMetadata(c: CountryPageConfig): Metadata {
  const url = `${SITE_URL}${c.path}`;
  const image = { url: `${SITE_URL}/images/buzzybrains_social.jpg`, width: 1200, height: 630, alt: c.ogTitle };
  return {
    title: c.title,
    description: c.description,
    keywords: c.keywords,
    alternates: { canonical: url, languages: buildLanguageAlternates(url) },
    openGraph: {
      title: c.ogTitle,
      description: c.ogDescription,
      url,
      siteName: 'BuzzyBrains Academy',
      type: 'website',
      images: [image],
    },
    twitter: { card: 'summary_large_image', title: c.ogTitle, description: c.ogDescription, images: [image.url] },
  };
}

/** Breadcrumb, Service, Person (founder) and FAQ structured data for a country page. */
export function CountryJsonLd({ config, data }: { config: CountryPageConfig; data: BestInstituteData }) {
  const url = `${SITE_URL}${config.path}`;
  return (
    <>
      <BreadcrumbJsonLd name={config.breadcrumb} path={config.path} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Live online tutoring and exam preparation',
          name: `BuzzyBrains Academy — ${config.breadcrumb}`,
          description: data.whatIsAnswer,
          url,
          provider: { '@type': 'EducationalOrganization', name: 'BuzzyBrains Academy', url: SITE_URL },
          areaServed: [{ '@type': 'Country', name: config.country }],
          availableChannel: { '@type': 'ServiceChannel', serviceUrl: url, serviceType: 'Online' },
        }}
      />
      <PersonJsonLd
        name="Dilip Sah"
        jobTitle="Founder & Mathematics Mentor, BuzzyBrains Academy"
        description="Founder of BuzzyBrains Academy. IIT Kanpur alumnus (JEE All India Rank 400), IIM Ahmedabad alumnus, with 25+ years of technology leadership experience before founding the academy in 2021."
        alumniOf={['IIT Kanpur', 'IIM Ahmedabad']}
        path={config.path}
      />
      <FaqJsonLd items={data.faqs} />
    </>
  );
}
