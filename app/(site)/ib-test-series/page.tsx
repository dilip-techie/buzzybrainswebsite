import '@/app/tailwind.css';

import { testSeriesFontVars } from '@/lib/test-series/fonts';
import { IB_TEST_SERIES_FAQS } from '@/lib/test-series/faqs';
import DiscountPopup from '@/components/test-series/DiscountPopup';
import Hero from '@/components/test-series/Hero';
import WhySection from '@/components/test-series/WhySection';
import StructureSection from '@/components/test-series/StructureSection';
import SubjectsSection from '@/components/test-series/SubjectsSection';
import ScorecardSection from '@/components/test-series/ScorecardSection';
import TrustSection from '@/components/test-series/TrustSection';
import PricingSection from '@/components/test-series/PricingSection';
import FaqSection from '@/components/test-series/FaqSection';
import FinalCta from '@/components/test-series/FinalCta';
import { heroContent, whyFeatures, structureStages, subjectGrades, pricingGroups, addons } from './_data';

export default function IbTestSeriesPage() {
  return (
    <main className={`ts-page ${testSeriesFontVars}`}>
      <DiscountPopup />
      <Hero {...heroContent} />
      <WhySection features={whyFeatures} />
      <StructureSection stages={structureStages} />
      <SubjectsSection
        eyebrow="COVERAGE"
        title="IB Diploma Programme. Marked the way IB actually marks."
        grades={subjectGrades}
        footerNote="Any Group 1-6 subject combination is supported — tell us your exact HL/SL choices on WhatsApp."
      />
      <ScorecardSection
        paperLabel="Paper 2 · Mathematics AA HL · IB DP2"
        score="6/7"
        description="Not just a final grade out of 7. Every mock is broken down by IB command term and topic, so revision time goes where marks are actually being lost."
        topics={[
          { name: "Algebra & Functions", pct: 88 },
          { name: "Calculus", pct: 64 },
          { name: "Trigonometry & Vectors", pct: 79 },
          { name: "Statistics & Probability", pct: 70 },
          { name: "Proof & Number Theory", pct: 55 },
        ]}
        priorityNote="Proof & Number Theory — revisit induction and divisibility proofs before the next mock."
      />
      <TrustSection />
      <PricingSection
        baseName="Single Subject (HL or SL)"
        basePrice="₹14,999"
        basePeriod="per subject · full 8-sitting mock series"
        baseTagline="Confident everywhere except one subject? Cover just that HL or SL paper."
        groups={pricingGroups}
        addonsLabel="ADD-ON REVIEWS · STACK ONTO ANY PACK ABOVE"
        addons={addons}
        addonPrice="₹4,999"
      />
      <FaqSection eyebrow="QUESTIONS" title="Before you enroll" faqs={IB_TEST_SERIES_FAQS} />
      <FinalCta
        title="Mock exam season fills up fast every year."
        subtitle="Reserve your seat now to lock in the 72-hour evaluation window for the full 12-week cycle."
      />
    </main>
  );
}
