import { buildCountryMetadata, CountryJsonLd, type CountryPageConfig } from '@/lib/seo/country-page';
import { DATA } from './_data';

const CONFIG: CountryPageConfig = {
  path: '/online-coaching-australia',
  country: 'Australia',
  breadcrumb: 'Online Coaching in Australia',
  title: 'Online Maths Olympiad & SAT Coaching in Australia | BuzzyBrains',
  description:
    'Live online Australian Maths Competition, AMC, UKMT, IB, SAT and AP coaching for students in Australia by IIT/IIM-alumni faculty. Inaugural 20% off.',
  keywords:
    'Australian Mathematics Competition coaching, maths olympiad tutoring Australia, HSC maths tutoring online, VCE maths tutoring online, IB tutoring Australia, SAT tutoring Australia, AMC 10 preparation Australia, UKMT preparation',
  ogImage: '/images/international/og-australia.png',
  ogTitle: 'Online Maths Olympiad, IB, SAT & AP Coaching in Australia',
  ogDescription:
    'Live online Australian Mathematics Competition, AMC, UKMT, olympiad, IB, SAT and AP coaching for students in Australia from IIT/IIM-alumni faculty. One-to-one classes. Inaugural 20% off.',
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
