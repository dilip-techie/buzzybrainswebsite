import { BestInstituteTemplate } from '@/components/local-seo/BestInstituteTemplate';
import InauguralOffer from '@/components/local-seo/InauguralOffer';
import InternationalPricing from '@/components/local-seo/InternationalPricing';
import { DATA } from './_data';

export default function OnlineCoachingCanadaPage() {
  return <BestInstituteTemplate data={DATA} heroImage={{ src: '/images/international/hero-canada.webp', alt: 'World map showing live online one-to-one classes from Pune, India to students in Canada', width: 1600, height: 720 }} pricing={<InternationalPricing />} offer={<InauguralOffer place='Canada' />} />;
}
