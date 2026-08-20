import '@/app/tailwind.css';
import { Atom, GraduationCap, Users, Layers, Globe2, BrainCircuit, ClipboardCheck } from 'lucide-react';
import HeroBrand from '@/components/olympiad/HeroBrand';
import PhysicsHeroVisual from '@/components/olympiad/PhysicsHeroVisual';
import TrustBar, { type StatItem } from '@/components/olympiad/TrustBar';
import WhyPhysicsOlympiads from '@/components/olympiad/WhyPhysicsOlympiads';
import IndianPathwayTimeline from '@/components/olympiad/IndianPathwayTimeline';
import TrackGrid from '@/components/olympiad/TrackGrid';
import AbroadComparisonTable from '@/components/olympiad/AbroadComparisonTable';
import PhysicsSyllabusAccordion from '@/components/olympiad/PhysicsSyllabusAccordion';
import Roadmap from '@/components/olympiad/Roadmap';
import Faculty from '@/components/olympiad/Faculty';
import ResultsPlaceholder from '@/components/olympiad/ResultsPlaceholder';
import Testimonials from '@/components/olympiad/Testimonials';
import FAQ from '@/components/olympiad/FAQ';
import LeadForm from '@/components/olympiad/LeadForm';
import FinalCTA from '@/components/olympiad/FinalCTA';
import { physicsOlympiadTracks, physicsOlympiadFaqs } from '@/lib/olympiad/data';

const stats: StatItem[] = [
  { icon: GraduationCap, value: '25+', label: 'Years of teaching excellence' },
  { icon: Users, value: '12', label: 'Maximum students per batch' },
  { icon: Layers, value: '5', label: 'Physics olympiads covered' },
  { icon: Globe2, value: 'India + 4', label: 'One official pathway, four abroad' },
  { icon: BrainCircuit, value: '100%', label: 'IIT-alumni-led faculty' },
  { icon: ClipboardCheck, value: 'Every mock', label: 'Scored with individual feedback' },
];

const roadmapSteps = [
  {
    step: '01',
    title: 'Diagnostic Mechanics Test',
    desc: 'A timed mechanics-only mock — the topic every one of these five olympiads tests hardest — so we see precisely where your child stands before building a plan.',
  },
  {
    step: '02',
    title: 'Concept Foundation',
    desc: 'Structured sessions across mechanics, electromagnetism, waves, thermodynamics and modern physics — deliberately mechanics-first, since NSEP, F=ma and BPhO all lean hardest on it.',
  },
  {
    step: '03',
    title: 'Problem-Pattern Drilling',
    desc: 'Curated problem sets from past NSEP, INPhO, F=ma and BPhO papers, sorted by technique — not just topic — so patterns become instinct.',
  },
  {
    step: '04',
    title: 'Weekly Timed Mocks, Real Formats',
    desc: 'Full-length mocks administered in the exact format of the target exam — MCQ for F=ma, subjective derivation for NSEP/INPhO — with scoring and a rank sheet every week.',
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
        taglineSub="🌍 India's Official Pathway + 4 Olympiads Abroad"
        lede="Structured coaching for India's IOQP pathway — NSEP, INPhO, OCSC and the IPhO team selection — alongside F=ma/USAPhO, the British Physics Olympiad, the Asian Physics Olympiad and the European Physics Olympiad. Mechanics-first, IIT-alumni mentored, batches capped at 12."
        chips={[
          { label: 'IOQP · OCSC · IPhO', color: '#2547CC' },
          { label: 'F=ma / USAPhO', color: '#F59E0B' },
          { label: 'BPhO', color: '#2576C7' },
          { label: 'APhO · EuPhO', color: '#10B981' },
        ]}
        ctaLabel="Book Free Olympiad Counselling Call"
        secondaryHref="#oly-tracks"
        secondaryLabel="Compare the 5 Olympiads"
        proofText={<>Trusted by <strong>150+ families</strong> across Pune</>}
        visual={<PhysicsHeroVisual />}
      />
      <TrustBar stats={stats} />
      <WhyPhysicsOlympiads />
      <IndianPathwayTimeline />
      <TrackGrid
        id="oly-tracks"
        icon={Atom}
        eyebrow="Top Olympiads Abroad"
        title="IPhO, plus the four worth attempting from India."
        subtitle="India's own IOQP pathway is the route onto the IPhO team — alongside it, here's exactly how a serious student from Pune can genuinely engage with F=ma, BPhO, APhO and EuPhO."
        tracks={physicsOlympiadTracks}
      />
      <AbroadComparisonTable />
      <PhysicsSyllabusAccordion />
      <Roadmap
        title="A fixed sequence, because physics olympiad prep isn't random."
        subtitle="Every student moves through the same five stages, in order — mechanics-first, since every one of these five tracks tests it hardest."
        steps={roadmapSteps}
      />
      <Faculty
        title="Mentors who've solved these exact problem sets."
        subtitle="Led by Dilip Sir (B.Tech, IIT Kanpur) and an IIT Bombay PhD, both of whom mentor JEE and olympiad Physics directly — not generalists teaching outside their depth."
      />
      <ResultsPlaceholder />
      <Testimonials />
      <FAQ faqs={physicsOlympiadFaqs} />
      <LeadForm
        heading="Sit a real timed mechanics mock before you commit."
        demoSubject="Physics Olympiad"
        programs={['NSEP / INPhO', 'F=ma / USAPhO', 'BPhO', 'APhO', 'EuPhO', 'Not sure yet — need guidance']}
      />
      <FinalCTA
        title="Ready to compete with the world's best in Physics?"
        subtitle="Book a free demo class today — no cost, no obligation, just a real timed mechanics mock in the exact exam format."
      />
    </main>
  );
}
