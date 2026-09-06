import '@/app/tailwind.css';

import { testSeriesFontVars } from '@/lib/test-series/fonts';
import { IGCSE_TEST_SERIES_FAQS } from '@/lib/test-series/faqs';
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

export default function IgcseTestSeriesPage() {
  return (
    <main className={`ts-page ${testSeriesFontVars}`}>
      <DiscountPopup />
      <Hero {...heroContent} />
      <WhySection features={whyFeatures} />
      <StructureSection stages={structureStages} />
      <SubjectsSection
        eyebrow="COVERAGE"
        title="Cambridge IGCSE. Every component, matched exactly."
        grades={subjectGrades}
        footerNote="Other Cambridge/Edexcel electives available on request — ask us on WhatsApp for your exact subject list and syllabus code."
      />
      <ScorecardSection
        paperLabel="Paper 4 · Mathematics · Cambridge IGCSE"
        topics={[
          { name: "Number & Algebra", pct: 90 },
          { name: "Coordinate Geometry", pct: 71 },
          { name: "Trigonometry", pct: 66 },
          { name: "Mensuration", pct: 84 },
          { name: "Statistics & Probability", pct: 58 },
        ]}
        priorityNote="Statistics & Probability — revisit cumulative frequency and tree-diagram method before the next mock."
      />
      <TrustSection />
      <PricingSection
        baseName="Single Subject"
        basePrice="₹12,999"
        basePeriod="per subject · full 8-sitting mock series"
        baseTagline="Confident everywhere except one paper? Cover just that Cambridge IGCSE subject."
        groups={pricingGroups}
        addons={addons}
        addonPrice="₹12,999"
      />
      <FaqSection eyebrow="QUESTIONS" title="Before you enroll" faqs={IGCSE_TEST_SERIES_FAQS} />
      <FinalCta
        title="Mock exam season fills up fast every year."
        subtitle="Reserve your seat now to lock in the 72-hour evaluation window for the full 12-week cycle."
      />
    </main>
  );
}
