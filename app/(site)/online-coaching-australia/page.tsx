import { BestInstituteTemplate } from '@/components/local-seo/BestInstituteTemplate';
import InauguralOffer from '@/components/local-seo/InauguralOffer';
import InternationalPricing from '@/components/local-seo/InternationalPricing';
import { DATA } from './_data';

export default function OnlineCoachingAustraliaPage() {
  return <BestInstituteTemplate data={DATA} pricing={<InternationalPricing />} offer={<InauguralOffer place='Australia' />} />;
}
