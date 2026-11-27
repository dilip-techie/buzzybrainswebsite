import { buildCountryMetadata, CountryJsonLd, type CountryPageConfig } from '@/lib/seo/country-page';
import { DATA } from './_data';

const CONFIG: CountryPageConfig = {
  path: '/online-coaching-singapore',
  country: 'Singapore',
  breadcrumb: 'Online Coaching in Singapore',
  title: 'Online Maths Olympiad & IB Coaching in Singapore | BuzzyBrains',
  description:
    'Live online SASMO, SMO, AMC, UKMT, IB, IGCSE and SAT coaching for students in Singapore from IIT/IIM-alumni faculty. Inaugural 20% off.',
  keywords:
    'SASMO coaching Singapore, Singapore Mathematical Olympiad coaching, math olympiad tuition Singapore, IB tuition Singapore, IGCSE tuition Singapore, SAT tutoring Singapore, AMC preparation Singapore, UKMT preparation',
  ogTitle: 'Online Maths Olympiad, IB, IGCSE & SAT Coaching in Singapore',
  ogDescription:
    'Live online SASMO, SMO, AMC, UKMT, IB, IGCSE and SAT coaching for students in Singapore from IIT/IIM-alumni faculty. One-to-one classes. Inaugural 20% off.',
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
