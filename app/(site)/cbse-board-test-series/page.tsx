import '@/app/tailwind.css';

import { testSeriesFontVars } from '@/lib/test-series/fonts';
import { CBSE_TEST_SERIES_FAQS } from '@/lib/test-series/faqs';
import DiscountPopup from '@/components/test-series/DiscountPopup';
import Hero from '@/components/test-series/Hero';
import WhySection from '@/components/test-series/WhySection';
import StructureSection from '@/components/test-series/StructureSection';
import SubjectsSection from '@/components/test-series/SubjectsSection';
import ScorecardSection from '@/components/test-series/ScorecardSection';
import ResultsSection from '@/components/test-series/ResultsSection';
import PricingSection from '@/components/test-series/PricingSection';
import FaqSection from '@/components/test-series/FaqSection';
import FinalCta from '@/components/test-series/FinalCta';
import { heroContent, whyFeatures, structureStages, subjectGrades, pricingGroups, addons } from './_data';

export default function CbseTestSeriesPage() {
  return (
    <main className={`ts-page ${testSeriesFontVars}`}>
      <DiscountPopup />
      <Hero {...heroContent} />
      <WhySection features={whyFeatures} />
      <StructureSection stages={structureStages} />
      <SubjectsSection
        title="CBSE Class 10 & 12. One paper standard."
        grades={subjectGrades}
      />
      <ScorecardSection />
      <ResultsSection />
      <PricingSection
        groups={pricingGroups}
        addons={addons}
        baseTagline="Confident everywhere except one paper? Cover just that CBSE subject."
      />
      <FaqSection faqs={CBSE_TEST_SERIES_FAQS} />
      <FinalCta />
    </main>
  );
}
