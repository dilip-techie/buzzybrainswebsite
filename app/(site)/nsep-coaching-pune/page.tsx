import NseExamPage from '@/components/olympiad/NseExamPage';
import { NSE_EXAMS } from '@/lib/olympiad/nse';

export default function NSEPCoachingPunePage() {
  return <NseExamPage exam={NSE_EXAMS.nsep} />;
}
