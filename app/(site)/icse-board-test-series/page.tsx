import '@/app/tailwind.css';

import { testSeriesFontVars } from '@/lib/test-series/fonts';
import { ICSE_TEST_SERIES_FAQS } from '@/lib/test-series/faqs';
import DiscountPopup from '@/components/test-series/DiscountPopup';
import Hero from '@/components/test-series/Hero';
import WhySection from '@/components/test-series/WhySection';
import StructureSection from '@/components/test-series/StructureSection';
import SubjectsSection from '@/components/test-series/SubjectsSection';
import ScorecardSection from '@/components/test-series/ScorecardSection';
import ResultsShowcase from '@/components/test-series/ResultsShowcase';
import PricingSection from '@/components/test-series/PricingSection';
import FaqSection from '@/components/test-series/FaqSection';
import FinalCta from '@/components/test-series/FinalCta';
import { heroContent, heroStats, scorerGroups, whyFeatures, structureStages, subjectGrades, pricingGroups, addons } from './_data';

export default function IcseTestSeriesPage() {
  return (
    <main className={`ts-page ${testSeriesFontVars}`}>
      <DiscountPopup />
      <Hero {...heroContent} stats={heroStats} />
      <ResultsShowcase groups={scorerGroups} />
      <WhySection features={whyFeatures} />
      <StructureSection stages={structureStages} />
      <SubjectsSection
        title="ICSE & ISC. Every paper, exactly as examined."
        grades={subjectGrades}
      />
      <ScorecardSection paperLabel="Paper 05 · Mathematics · ICSE X" />
      <PricingSection
        groups={pricingGroups}
        addons={addons}
        baseTagline="Confident everywhere except one paper? Cover just that ICSE or ISC subject."
      />
      <FaqSection faqs={ICSE_TEST_SERIES_FAQS} />
      <FinalCta />
    </main>
  );
}
