import '@/app/tailwind.css';

import { testSeriesFontVars } from '@/lib/test-series/fonts';
import { MAHARASHTRA_TEST_SERIES_FAQS } from '@/lib/test-series/faqs';
import DiscountPopup from '@/components/test-series/DiscountPopup';
import Hero from '@/components/test-series/Hero';
import TopResultsBanner from '@/components/test-series/TopResultsBanner';
import WhySection from '@/components/test-series/WhySection';
import AlsoIncluded from '@/components/test-series/AlsoIncluded';
import StructureSection from '@/components/test-series/StructureSection';
import SubjectsSection from '@/components/test-series/SubjectsSection';
import ScorecardSection from '@/components/test-series/ScorecardSection';
import ResultsShowcase from '@/components/test-series/ResultsShowcase';
import PricingSection from '@/components/test-series/PricingSection';
import FaqSection from '@/components/test-series/FaqSection';
import FinalCta from '@/components/test-series/FinalCta';
import { heroContent, heroStats, scorerGroups, whyFeatures, structureStages, subjectGrades, pricingGroups, addons } from './_data';

export default function MaharashtraTestSeriesPage() {
  return (
    <main className={`ts-page ${testSeriesFontVars}`}>
      <DiscountPopup />
      <TopResultsBanner highlight={`Our students scored up to ${heroStats[0].value} in Maharashtra SSC & HSC Boards`} />
      <Hero {...heroContent} stats={heroStats} />
      <ResultsShowcase
        title="What our Maharashtra Board students say."
        subtitle="Maharashtra HSC students who trained on the BuzzyBrains test series — in their own words."
        groups={scorerGroups}
      />
      <WhySection features={whyFeatures} />
      <AlsoIncluded />
      <StructureSection stages={structureStages} />
      <SubjectsSection
        title="Maharashtra State Board. Every split paper, matched exactly."
        grades={subjectGrades}
        footerNote="Class 12 (HSC) subjects above cover the PCM, PCB and Commerce stream packs, with English available as an add-on — see pricing below, or ask us on WhatsApp for your exact subject list."
      />
      <ScorecardSection paperLabel="Paper 05 · Algebra · SSC X" />
      <PricingSection
        groups={pricingGroups}
        addons={addons}
        baseTagline="Confident everywhere except one paper? Cover just that SSC or HSC subject."
      />
      <FaqSection faqs={MAHARASHTRA_TEST_SERIES_FAQS} />
      <FinalCta />
    </main>
  );
}
