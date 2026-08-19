'use client';

import '@/app/tailwind.css';
import { PenTool, GraduationCap, Users, Layers, FileText, BrainCircuit, ClipboardCheck } from 'lucide-react';
import HeroBrand from '@/components/olympiad/HeroBrand';
import NmtcHeroVisual from '@/components/olympiad/NmtcHeroVisual';
import TrustBar, { type StatItem } from '@/components/olympiad/TrustBar';
import TrackGrid from '@/components/olympiad/TrackGrid';
import Roadmap from '@/components/olympiad/Roadmap';
import Faculty from '@/components/olympiad/Faculty';
import Testimonials from '@/components/olympiad/Testimonials';
import FAQ from '@/components/olympiad/FAQ';
import LeadForm from '@/components/olympiad/LeadForm';
import FinalCTA from '@/components/olympiad/FinalCTA';
import { nmtcLevelTracks, nmtcFaqs } from '@/lib/olympiad/data';

const stats: StatItem[] = [
  { icon: GraduationCap, value: '25+', label: 'Years of teaching excellence' },
  { icon: Users, value: '12', label: 'Maximum students per batch' },
  { icon: Layers, value: '5', label: 'Levels: Primary to Senior' },
  { icon: FileText, value: 'Part A+B', label: 'Objective + written solutions' },
  { icon: BrainCircuit, value: '100%', label: 'IIT-alumni-led faculty' },
  { icon: ClipboardCheck, value: 'Every mock', label: 'Solutions reviewed individually' },
];

export default function NmtcCoachingPunePage() {
  return (
    <main className="oly-page">
      <HeroBrand
        badges={['⭐ NMTC Coaching', '📍 Class 5–12']}
        titleLines={['Master NMTC.', 'Write Proofs That']}
        highlight="Score Full Marks."
        taglineSub="✍️ Part A + Part B, Every Level"
        lede="Structured coaching for all five NMTC levels — Primary, Sub-Junior, Junior, Inter and Senior — mentored by IIT alumni, in batches capped at 12. Build the proof-writing skill IOQM and INMO reward later."
        chips={[
          { label: 'Primary', color: '#2563EB' },
          { label: 'Sub-Junior', color: '#10B981' },
          { label: 'Junior', color: '#F59E0B' },
          { label: 'Inter & Senior', color: '#7C3AED' },
        ]}
        ctaLabel="Book Free Demo"
        secondaryHref="#oly-levels"
        secondaryLabel="Explore the Levels"
        proofText={<>Trusted by <strong>150+ families</strong> across Pune</>}
        visual={<NmtcHeroVisual />}
      />
      <TrustBar stats={stats} />
      <TrackGrid
        id="oly-levels"
        icon={PenTool}
        eyebrow="NMTC Levels"
        title="Five levels. One proof-writing method."
        subtitle="Every level runs on the same two-part format — Part A objective, Part B fully written — so your child builds real proof-writing skill from the very first level."
        tracks={nmtcLevelTracks}
      />
      <Roadmap
        title="A fixed sequence, because proof-writing isn't intuitive."
        subtitle="Every student moves through the same five stages, in order, whichever NMTC level they're preparing for."
      />
      <Faculty
        title="Mentors who grade every proof personally."
        subtitle="Led by an IIT Bombay-trained maths specialist and a JEE AIR 400 founder — both IIT alumni who review written solutions individually, not just final answers."
      />
      <Testimonials />
      <FAQ faqs={nmtcFaqs} />
      <LeadForm
        heading="Get feedback on real Part B solutions."
        demoSubject="NMTC"
        programs={['NMTC Primary', 'NMTC Sub-Junior', 'NMTC Junior', 'NMTC Inter', 'NMTC Senior', 'Not sure yet — need guidance']}
      />
      <FinalCTA
        title="Ready to build real proof-writing skill?"
        subtitle="Book a free demo class today — no cost, no obligation, just a real look at how Part B is taught."
      />
    </main>
  );
}
