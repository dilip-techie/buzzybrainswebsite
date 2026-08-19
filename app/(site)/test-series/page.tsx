import '@/app/tailwind.css';

import { Playfair_Display, Archivo, Space_Mono } from 'next/font/google';
import Hero from '@/components/test-series/Hero';
import WhySection from '@/components/test-series/WhySection';
import StructureSection from '@/components/test-series/StructureSection';
import SubjectsSection from '@/components/test-series/SubjectsSection';
import ScorecardSection from '@/components/test-series/ScorecardSection';
import ResultsSection from '@/components/test-series/ResultsSection';
import PricingSection from '@/components/test-series/PricingSection';
import FaqSection from '@/components/test-series/FaqSection';
import FinalCta from '@/components/test-series/FinalCta';

const playfair = Playfair_Display({
  variable: '--font-ts-display',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
});

const archivo = Archivo({
  variable: '--font-ts-body',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const spaceMono = Space_Mono({
  variable: '--font-ts-ledger',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function TestSeriesPage() {
  return (
    <main className={`ts-page ${playfair.variable} ${archivo.variable} ${spaceMono.variable}`}>
      <Hero />
      <WhySection />
      <StructureSection />
      <SubjectsSection />
      <ScorecardSection />
      <ResultsSection />
      <PricingSection />
      <FaqSection />
      <FinalCta />
    </main>
  );
}
