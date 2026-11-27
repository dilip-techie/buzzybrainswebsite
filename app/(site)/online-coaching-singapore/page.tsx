import { BestInstituteTemplate } from '@/components/local-seo/BestInstituteTemplate';
import InauguralOffer from '@/components/local-seo/InauguralOffer';
import InternationalPricing from '@/components/local-seo/InternationalPricing';
import { DATA } from './_data';

export default function OnlineCoachingSingaporePage() {
  return <BestInstituteTemplate data={DATA} pricing={<InternationalPricing />} offer={<InauguralOffer place='Singapore' />} />;
}
