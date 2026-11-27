import { buildCountryMetadata, CountryJsonLd, type CountryPageConfig } from '@/lib/seo/country-page';
import { DATA } from './_data';

const CONFIG: CountryPageConfig = {
  path: '/online-coaching-usa',
  country: 'United States',
  breadcrumb: 'Online Coaching in the USA',
  title: 'Online SAT, AP & AMC Coaching in the USA | BuzzyBrains',
  description:
    'Live online SAT, AP, AMC, IB/IGCSE and olympiad coaching for US students from IIT/IIM-alumni faculty. One-to-one classes. Inaugural 20% off.',
  keywords:
    'online SAT coaching USA, AP tutoring online, AMC 8 coaching, AMC 10 AMC 12 preparation, AIME preparation online, math olympiad coaching USA, IB tutoring online, IGCSE tutoring online, UKMT preparation',
  ogTitle: 'Online SAT, AP, AMC & Olympiad Coaching in the USA',
  ogDescription:
    'Live online SAT, AP, AMC, IB/IGCSE, UKMT and olympiad coaching for students in the USA from IIT/IIM-alumni faculty. One-to-one classes. Inaugural 20% off.',
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
