import '@/app/tailwind.css';

import Hero from '@/components/olympiad/Hero';
import TrustBar from '@/components/olympiad/TrustBar';
import ExamTracks from '@/components/olympiad/ExamTracks';
import Roadmap from '@/components/olympiad/Roadmap';
import Methodology from '@/components/olympiad/Methodology';
import Faculty from '@/components/olympiad/Faculty';
import Testimonials from '@/components/olympiad/Testimonials';
import FAQ from '@/components/olympiad/FAQ';
import LeadForm from '@/components/olympiad/LeadForm';
import FinalCTA from '@/components/olympiad/FinalCTA';

export default function IoqmAmcCoachingPunePage() {
  return (
    <main className="oly-page">
      <Hero />
      <TrustBar />
      <ExamTracks />
      <Roadmap />
      <Methodology />
      <Faculty />
      <Testimonials />
      <FAQ />
      <LeadForm />
      <FinalCTA />
    </main>
  );
}
