import { BestInstituteTemplate } from '@/components/local-seo/BestInstituteTemplate';
import InauguralOffer from '@/components/local-seo/InauguralOffer';
import InternationalPricing from '@/components/local-seo/InternationalPricing';
import { DATA } from './_data';

export default function OnlineCoachingSingaporePage() {
  return <BestInstituteTemplate data={DATA} heroImage={{ src: '/images/international/hero-singapore.webp', alt: 'World map showing live online one-to-one classes from Pune, India to students in Singapore', width: 1600, height: 720 }} pricing={<InternationalPricing />} offer={<InauguralOffer place='Singapore' />} />;
}
