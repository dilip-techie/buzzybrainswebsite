import { buildCountryMetadata, CountryJsonLd, type CountryPageConfig } from '@/lib/seo/country-page';
import { DATA } from './_data';

const CONFIG: CountryPageConfig = {
  path: '/online-coaching-canada',
  country: 'Canada',
  breadcrumb: 'Online Coaching in Canada',
  title: 'Online IB, AP & Maths Olympiad Coaching in Canada | BuzzyBrains',
  description:
    'Live online IB, AP, SAT, AMC, UKMT and olympiad coaching for students in Canada from IIT/IIM-alumni faculty. One-to-one classes. Inaugural 20% off.',
  keywords:
    'online math tutoring Canada, IB tutoring Canada, AP tutoring Canada, math olympiad coaching Canada, Euclid Fermat Pascal preparation, SAT coaching Canada, AMC preparation Canada, UKMT preparation',
  ogImage: '/images/international/og-canada.png',
  ogTitle: 'Online Maths, Science, IB, AP & Olympiad Coaching in Canada',
  ogDescription:
    'Live online IB, AP, SAT, AMC, UKMT and olympiad coaching for students in Canada from IIT/IIM-alumni faculty. One-to-one classes. Inaugural 20% off.',
};

export const metadata = buildCountryMetadata(CONFIG);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CountryJsonLd config={CONFIG} data={DATA} />
      {children}
    </>
  );
}
