import '@/app/tailwind.css';
import OfferBanner from '@/components/OfferBanner';

import Hero from '@/components/olympiad/Hero';
import TrustBar from '@/components/olympiad/TrustBar';
import ShortVideoSection from '@/components/olympiad/ShortVideoSection';
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
      <OfferBanner
        tag="100% FREE"
        title="Take our free IOQM / AMC diagnostic test"
        lede="Find out exactly where your child stands before you commit to anything."
        points={['Timed, IOQM / AMC-style diagnostic', 'Maps problem-solving strengths and gaps', 'Leads to a personalized preparation plan and the right batch', 'Scholarships of up to 90% for group batches, based on your test score']}
        ctaLabel="Book Your Free Diagnostic"
        href="#oly-lead-form"
      />
      <ShortVideoSection />
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
