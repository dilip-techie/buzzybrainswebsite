import '@/app/tailwind.css';

import { testSeriesFontVars } from '@/lib/test-series/fonts';
import { MAHARASHTRA_TEST_SERIES_FAQS } from '@/lib/test-series/faqs';
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

export default function MaharashtraTestSeriesPage() {
  return (
    <main className={`ts-page ${testSeriesFontVars}`}>
      <DiscountPopup />
      <Hero {...heroContent} />
      <WhySection features={whyFeatures} />
      <StructureSection stages={structureStages} />
      <SubjectsSection
        title="Maharashtra State Board. Every split paper, matched exactly."
        grades={subjectGrades}
        footerNote="Class 12 (HSC) subjects above cover the PCM, PCB and Commerce stream packs, with English available as an add-on — see pricing below, or ask us on WhatsApp for your exact subject list."
      />
      <ScorecardSection paperLabel="Paper 05 · Algebra · SSC X" />
      <ResultsSection />
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
