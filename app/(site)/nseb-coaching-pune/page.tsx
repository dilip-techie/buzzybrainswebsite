import NseExamPage from '@/components/olympiad/NseExamPage';
import { NSE_EXAMS } from '@/lib/olympiad/nse';

export default function NSEBCoachingPunePage() {
  return <NseExamPage exam={NSE_EXAMS.nseb} />;
}
