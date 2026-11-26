import '@/app/tailwind.css';

import { testSeriesFontVars } from '@/lib/test-series/fonts';
import DiscountPopup from '@/components/test-series/DiscountPopup';
import Hero from '@/components/test-series/Hero';
import WhySection from '@/components/test-series/WhySection';
import AlsoIncluded from '@/components/test-series/AlsoIncluded';
import StructureSection from '@/components/test-series/StructureSection';
import SubjectsSection from '@/components/test-series/SubjectsSection';
import ScorecardSection from '@/components/test-series/ScorecardSection';
import ResultsShowcase from '@/components/test-series/ResultsShowcase';
import PricingSection from '@/components/test-series/PricingSection';
import FaqSection from '@/components/test-series/FaqSection';
import FinalCta from '@/components/test-series/FinalCta';
import { hubGroups, hubHeroStats } from './_results';

export default function TestSeriesPage() {
  return (
    <main className={`ts-page ${testSeriesFontVars}`}>
      <DiscountPopup />
      <Hero stats={hubHeroStats} />
      <ResultsShowcase
        eyebrow="RESULTS 2026 · ALL BOARDS"
        title="Proven across CBSE, ICSE, Maharashtra Board, IGCSE and IB."
        subtitle="The best results from students who trained on the BuzzyBrains test series — switch tabs to see every board."
        groups={hubGroups}
      />
      <WhySection />
      <AlsoIncluded />
      <StructureSection />
      <SubjectsSection />
      <ScorecardSection />
      <PricingSection />
      <FaqSection />
      <FinalCta />
    </main>
  );
}
