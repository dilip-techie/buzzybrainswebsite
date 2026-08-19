import '@/app/tailwind.css';
import { ListChecks, GraduationCap, Users, Ban, Timer, BrainCircuit, ClipboardCheck } from 'lucide-react';
import HeroBrand from '@/components/olympiad/HeroBrand';
import AmcHeroVisual from '@/components/olympiad/AmcHeroVisual';
import TrustBar, { type StatItem } from '@/components/olympiad/TrustBar';
import TrackGrid from '@/components/olympiad/TrackGrid';
import Roadmap from '@/components/olympiad/Roadmap';
import Faculty from '@/components/olympiad/Faculty';
import Testimonials from '@/components/olympiad/Testimonials';
import FAQ from '@/components/olympiad/FAQ';
import LeadForm from '@/components/olympiad/LeadForm';
import FinalCTA from '@/components/olympiad/FinalCTA';
import { amcTracks, amcFaqs } from '@/lib/olympiad/data';

const stats: StatItem[] = [
  { icon: GraduationCap, value: '25+', label: 'Years of teaching excellence' },
  { icon: Users, value: '12', label: 'Maximum students per batch' },
  { icon: Timer, value: '75 min', label: 'AMC 10: 25 questions' },
  { icon: Ban, value: '6/1.5/0', label: 'AMC 10 scoring — guessing has a cost' },
  { icon: ListChecks, value: 'AIME', label: 'The gateway from AMC 10' },
  { icon: ClipboardCheck, value: 'Every mock', label: 'Real timed practice, scored' },
];

export default function Amc810CoachingPunePage() {
  return (
    <main className="oly-page">
      <HeroBrand
        badges={['⭐ AMC 8 & AMC 10 Coaching', '📍 Grades 6–10']}
        titleLines={['Master AMC.', 'Earn Your Shot at']}
        highlight="AIME."
        taglineSub="🇺🇸 America's Flagship Maths Competition"
        lede="Dedicated coaching for AMC 8 and AMC 10 — multiple-choice competition maths mentored by IIT alumni, in batches capped at 12. Build the pacing and scoring strategy that turns a good score into an AIME invitation."
        chips={[
          { label: 'Algebra', color: '#2563EB' },
          { label: 'Geometry', color: '#7C3AED' },
          { label: 'Number Theory', color: '#F59E0B' },
          { label: 'Counting & Probability', color: '#10B981' },
        ]}
        ctaLabel="Book Free Demo"
        secondaryHref="#oly-tracks"
        secondaryLabel="Explore AMC 8 & 10"
        proofText={<>Trusted by <strong>150+ families</strong> across Pune</>}
        visual={<AmcHeroVisual />}
      />
      <TrustBar stats={stats} />
      <TrackGrid
        id="oly-tracks"
        icon={ListChecks}
        eyebrow="Exam Tracks"
        title="AMC 8, AMC 10, and what comes next."
        subtitle="Each track runs on its own syllabus, timing and scoring rules — so your child trains in the exact format they'll sit on exam day."
        tracks={amcTracks}
      />
      <Roadmap
        title="A fixed sequence, because AMC pacing isn't intuitive."
        subtitle="Every student moves through the same five stages, in order — each one builds directly on the score data from the one before it."
      />
      <Faculty
        title="Mentors who've sat where your child is sitting."
        subtitle="Led by an IOQM / AMC specialist and a JEE AIR 400 founder — both IIT alumni who have personally coached students through the AMC pipeline."
      />
      <Testimonials />
      <FAQ faqs={amcFaqs} />
      <LeadForm
        heading="Sit a real timed AMC mock before you commit."
        demoSubject="AMC 8/10"
        programs={['AMC 8', 'AMC 10', 'Not sure yet — need guidance']}
      />
      <FinalCTA
        title="Ready to build a real AMC scoring strategy?"
        subtitle="Book a free demo class today — no cost, no obligation, just a real timed mock in the exact exam format."
      />
    </main>
  );
}
