import NseExamPage from '@/components/olympiad/NseExamPage';
import { NSE_EXAMS } from '@/lib/olympiad/nse';

export default function NSECCoachingPunePage() {
  return <NseExamPage exam={NSE_EXAMS.nsec} />;
}
