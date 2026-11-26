import { BestInstituteTemplate } from '@/components/local-seo/BestInstituteTemplate';
import InauguralOffer from '@/components/local-seo/InauguralOffer';
import { DATA } from './_data';

export default function OnlineCoachingSingaporePage() {
  return <BestInstituteTemplate data={DATA} offer={<InauguralOffer place='Singapore' />} />;
}
