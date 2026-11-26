import { BestInstituteTemplate } from '@/components/local-seo/BestInstituteTemplate';
import InauguralOffer from '@/components/local-seo/InauguralOffer';
import { DATA } from './_data';

export default function OnlineCoachingCanadaPage() {
  return <BestInstituteTemplate data={DATA} offer={<InauguralOffer place='Canada' />} />;
}
