import '@/app/tailwind.css';
import { Rabbit, GraduationCap, Users, Layers, Smile, BrainCircuit, ClipboardCheck } from 'lucide-react';
import HeroBrand from '@/components/olympiad/HeroBrand';
import KangarooHeroVisual from '@/components/olympiad/KangarooHeroVisual';
import TrustBar, { type StatItem } from '@/components/olympiad/TrustBar';
import TrackGrid from '@/components/olympiad/TrackGrid';
import Roadmap from '@/components/olympiad/Roadmap';
import Faculty from '@/components/olympiad/Faculty';
import Testimonials from '@/components/olympiad/Testimonials';
import FAQ from '@/components/olympiad/FAQ';
import LeadForm from '@/components/olympiad/LeadForm';
import FinalCTA from '@/components/olympiad/FinalCTA';
import { kangarooTracks, kangarooFaqs } from '@/lib/olympiad/data';

const stats: StatItem[] = [
  { icon: GraduationCap, value: '25+', label: 'Years of teaching excellence' },
  { icon: Users, value: '12', label: 'Maximum students per batch' },
  { icon: Layers, value: '6', label: 'Levels, Grades 1–12' },
  { icon: Smile, value: 'Low', label: 'Pressure, high engagement' },
  { icon: BrainCircuit, value: '100%', label: 'IIT-alumni-led faculty' },
  { icon: ClipboardCheck, value: 'Every mock', label: 'Scored with individual feedback' },
];

export default function MathsKangarooCoachingPunePage() {
  return (
    <main className="oly-page">
      <HeroBrand
        badges={['⭐ Math Kangaroo Coaching', '📍 Grades 1–12']}
        titleLines={['Every Kangaroo Level.', 'One Playful']}
        highlight="Start."
        taglineSub="🦘 The World's Largest Maths Competition"
        lede="Structured coaching across all six Math Kangaroo levels — from Pre-Ecolier to Student — mentored by IIT alumni, in batches capped at 12. A joyful, low-pressure first step into competitive mathematics."
        chips={[
          { label: 'Pre-Ecolier / Ecolier', color: '#2563EB' },
          { label: 'Benjamin / Cadet', color: '#F59E0B' },
          { label: 'Junior / Student', color: '#7C3AED' },
        ]}
        ctaLabel="Book Free Demo"
        secondaryHref="#oly-levels"
        secondaryLabel="Explore the Levels"
        proofText={<>Trusted by <strong>150+ families</strong> across Pune</>}
        visual={<KangarooHeroVisual />}
      />
      <TrustBar stats={stats} />
      <TrackGrid
        id="oly-levels"
        icon={Rabbit}
        eyebrow="Kangaroo Levels"
        title="Six levels. One playful format."
        subtitle="Every Kangaroo level runs multiple-choice, tuned to its age group — a low-pressure, high-value entry point into competitive thinking for every grade."
        tracks={kangarooTracks}
      />
      <Roadmap
        title="A fixed sequence, so Kangaroo prep stays fun."
        subtitle="Every student moves through the same five stages, in order, whichever level they're preparing for."
      />
      <Faculty
        title="Mentors who make competition maths fun."
        subtitle="Led by an IIT Bombay-trained maths specialist and a JEE AIR 400 founder — both IIT alumni who have personally mentored students from their very first olympiad."
      />
      <Testimonials />
      <FAQ faqs={kangarooFaqs} />
      <LeadForm
        heading="Give your child a joyful first olympiad."
        demoSubject="Math Kangaroo"
        programs={['Pre-Ecolier / Ecolier', 'Benjamin / Cadet', 'Junior / Student', 'Not sure yet — need guidance']}
      />
      <FinalCTA
        title="Ready for a playful first step into competition maths?"
        subtitle="Book a free demo class today — no cost, no obligation, just a fun, low-pressure introduction."
      />
    </main>
  );
}
