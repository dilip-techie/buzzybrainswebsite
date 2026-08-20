import '@/app/tailwind.css';
import { Atom, GraduationCap, Users, Layers, Globe2, BrainCircuit, ClipboardCheck } from 'lucide-react';
import HeroBrand from '@/components/olympiad/HeroBrand';
import PhysicsHeroVisual from '@/components/olympiad/PhysicsHeroVisual';
import TrustBar, { type StatItem } from '@/components/olympiad/TrustBar';
import TrackGrid from '@/components/olympiad/TrackGrid';
import Roadmap from '@/components/olympiad/Roadmap';
import Faculty from '@/components/olympiad/Faculty';
import Testimonials from '@/components/olympiad/Testimonials';
import FAQ from '@/components/olympiad/FAQ';
import LeadForm from '@/components/olympiad/LeadForm';
import FinalCTA from '@/components/olympiad/FinalCTA';
import { physicsOlympiadTracks, physicsOlympiadFaqs } from '@/lib/olympiad/data';

const stats: StatItem[] = [
  { icon: GraduationCap, value: '25+', label: 'Years of teaching excellence' },
  { icon: Users, value: '12', label: 'Maximum students per batch' },
  { icon: Layers, value: '5', label: 'Physics olympiads covered' },
  { icon: Globe2, value: 'India + 4', label: 'One domestic pipeline, four abroad' },
  { icon: BrainCircuit, value: '100%', label: 'IIT-alumni-led faculty' },
  { icon: ClipboardCheck, value: 'Every mock', label: 'Scored with individual feedback' },
];

const roadmapSteps = [
  {
    step: '01',
    title: 'Diagnostic Mechanics Test',
    desc: 'A timed mechanics-only mock — the exact skill every one of these five olympiads tests hardest — so we see precisely where your child stands before building a plan.',
  },
  {
    step: '02',
    title: 'Concept Foundation',
    desc: 'Structured sessions across mechanics, electromagnetism, waves, thermodynamics and modern physics — deliberately mechanics-first, since NSEP, F=ma and BPhO all lean hardest on it.',
  },
  {
    step: '03',
    title: 'Problem-Pattern Drilling',
    desc: 'Curated problem sets from past NSEP, INPhO, F=ma, BPhO and PhysicsBowl papers, sorted by technique — not just topic — so patterns become instinct.',
  },
  {
    step: '04',
    title: 'Timed Mocks, Real Formats',
    desc: 'Full-length mocks administered in the exact format of your target exam — MCQ for F=ma and PhysicsBowl, subjective for NSEP/INPhO — with scoring and a rank sheet.',
  },
  {
    step: '05',
    title: 'Exam-Day Readiness',
    desc: 'Speed drills, negative-marking strategy and last-mile revision tuned to the specific olympiad your child is sitting.',
  },
];

export default function PhysicsOlympiadCoachingPunePage() {
  return (
    <main className="oly-page">
      <HeroBrand
        badges={['⚛️ Physics Olympiad Coaching', '📍 Grades 9–12']}
        titleLines={['Master Physics.', 'Compete With']}
        highlight="The World's Best."
        taglineSub="🌍 India's Pipeline + 4 Olympiads Abroad"
        lede="Structured coaching across NSEP → INPhO → IPhO — India's official physics olympiad pathway — plus F=ma / USAPhO, the British Physics Olympiad, PhysicsBowl and the Online Physics Olympiad. Mechanics-first, IIT-alumni mentored, batches capped at 12."
        chips={[
          { label: 'NSEP · INPhO · IPhO', color: '#2547CC' },
          { label: 'F=ma / USAPhO', color: '#F59E0B' },
          { label: 'BPhO', color: '#2576C7' },
          { label: 'PhysicsBowl · OPhO', color: '#10B981' },
        ]}
        ctaLabel="Book Free Demo"
        secondaryHref="#oly-tracks"
        secondaryLabel="Explore the 5 Olympiads"
        proofText={<>Trusted by <strong>150+ families</strong> across Pune</>}
        visual={<PhysicsHeroVisual />}
      />
      <TrustBar stats={stats} />
      <TrackGrid
        id="oly-tracks"
        icon={Atom}
        eyebrow="Physics Olympiad Tracks"
        title="One domestic pipeline. Four olympiads abroad."
        subtitle="India's NSEP-to-IPhO ladder is the only route onto the national team — alongside it, we train students for the four international physics olympiads most worth attempting from Pune."
        tracks={physicsOlympiadTracks}
      />
      <Roadmap
        title="A fixed sequence, because physics olympiad prep isn't random."
        subtitle="Every student moves through the same five stages, in order — mechanics-first, since every one of these five tracks tests it hardest."
        steps={roadmapSteps}
      />
      <Faculty
        title="Mentors who've solved these exact problem sets."
        subtitle="Led by an IIT Kanpur founder and an IIT Bombay PhD, both of whom mentor JEE and olympiad Physics — not generalists teaching outside their depth."
      />
      <Testimonials />
      <FAQ faqs={physicsOlympiadFaqs} />
      <LeadForm
        heading="Sit a real timed mechanics mock before you commit."
        demoSubject="Physics Olympiad"
        programs={['NSEP / INPhO', 'F=ma / USAPhO', 'BPhO', 'PhysicsBowl', 'Online Physics Olympiad', 'Not sure yet — need guidance']}
      />
      <FinalCTA
        title="Ready to compete with the world's best in Physics?"
        subtitle="Book a free demo class today — no cost, no obligation, just a real timed mechanics mock in the exact exam format."
      />
    </main>
  );
}
