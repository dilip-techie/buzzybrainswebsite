'use client';

import '@/app/tailwind.css';
import { Trophy } from 'lucide-react';
import HeroGeneric from '@/components/olympiad/HeroGeneric';
import TrustBar from '@/components/olympiad/TrustBar';
import TrackGrid from '@/components/olympiad/TrackGrid';
import Roadmap from '@/components/olympiad/Roadmap';
import Methodology from '@/components/olympiad/Methodology';
import Faculty from '@/components/olympiad/Faculty';
import Testimonials from '@/components/olympiad/Testimonials';
import FAQ from '@/components/olympiad/FAQ';
import LeadForm from '@/components/olympiad/LeadForm';
import FinalCTA from '@/components/olympiad/FinalCTA';
import { mathsOlympiadTracks, mathsOlympiadFaqs } from '@/lib/olympiad/data';

export default function OlympiadMathPage() {
  return (
    <main className="oly-page">
      <HeroGeneric
        eyebrow="SOF IMO · IOQM · NMTC · AMC · Kangaroo"
        title="Every maths olympiad,"
        highlight="one concept-first method."
        description="From a first SOF IMO attempt in Grade 3 to IOQM, NMTC, AMC 8/10 and Math Kangaroo — structured competition-maths coaching for Grades 1-12, mentored by IIT alumni, in batches capped at 12."
        stats={[['5', 'Olympiad tracks'], ['12', 'Max batch size'], ['25+', 'Years teaching']]}
        exploreHref="#oly-tracks"
        exploreLabel="Explore Olympiad Tracks"
      />
      <TrustBar />
      <TrackGrid
        id="oly-tracks"
        icon={Trophy}
        eyebrow="Olympiad Tracks"
        title="Five olympiads. One rigorous method."
        subtitle="Each track runs on its own syllabus, timing and scoring rules — so your child trains in the exact format they'll sit on exam day."
        tracks={mathsOlympiadTracks}
      />
      <Roadmap />
      <Methodology />
      <Faculty />
      <Testimonials />
      <FAQ faqs={mathsOlympiadFaqs} />
      <LeadForm
        heading="Sit a real timed mock before you commit."
        demoSubject="Maths Olympiad"
        programs={['SOF IMO', 'IOQM', 'NMTC', 'AMC 8/10', 'Kangaroo', 'Not sure yet — need guidance']}
      />
      <FinalCTA />
    </main>
  );
}
