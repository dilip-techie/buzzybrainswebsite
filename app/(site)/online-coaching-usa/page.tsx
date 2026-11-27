import { BestInstituteTemplate } from '@/components/local-seo/BestInstituteTemplate';
import InauguralOffer from '@/components/local-seo/InauguralOffer';
import InternationalPricing from '@/components/local-seo/InternationalPricing';
import { DATA } from './_data';

export default function OnlineCoachingUsaPage() {
  return <BestInstituteTemplate data={DATA} heroImage={{ src: '/images/international/visual-usa.webp', alt: 'World map showing live online one-to-one classes from Pune, India to students in the USA', width: 1200, height: 900 }} pricing={<InternationalPricing />} offer={<InauguralOffer place='the USA' />} />;
}
