'use client';

import '@/app/tailwind.css';
import { Hash, GraduationCap, Users, Timer, Ban, Trophy, ClipboardCheck, BookOpen, PenLine, MessagesSquare, Route } from 'lucide-react';
import HeroBrand from '@/components/olympiad/HeroBrand';
import IoqmHeroVisual from '@/components/olympiad/IoqmHeroVisual';
import TrustBar, { type StatItem } from '@/components/olympiad/TrustBar';
import TrackGrid from '@/components/olympiad/TrackGrid';
import Roadmap from '@/components/olympiad/Roadmap';
import Faculty from '@/components/olympiad/Faculty';
import Testimonials from '@/components/olympiad/Testimonials';
import FAQ from '@/components/olympiad/FAQ';
import LeadForm from '@/components/olympiad/LeadForm';
import FinalCTA from '@/components/olympiad/FinalCTA';
import StickyCTA from '@/components/olympiad/StickyCTA';
import { ioqmTopicTracks, ioqmFaqs } from '@/lib/olympiad/data';

const stats: StatItem[] = [
  { icon: GraduationCap, value: '25+', label: 'Years of teaching excellence' },
  { icon: Users, value: '12', label: 'Maximum students per batch' },
  { icon: Timer, value: '3 hrs', label: '30 questions, integer answers' },
  { icon: Ban, value: 'None', label: 'No negative marking on IOQM' },
  { icon: Trophy, value: 'INMO', label: 'The gateway to India’s IMO pipeline' },
  { icon: ClipboardCheck, value: 'Every mock', label: 'Scored with a percentile rank sheet' },
];

const APPROACH = [
  { icon: BookOpen, title: 'Concept-first, not shortcut-first', desc: 'Every complex idea is traced back to fundamentals — definitions, axioms and lemmas — before it ever becomes a formula to memorize.' },
  { icon: Route, title: 'Structured progression', desc: 'From basic theory to illustrative examples to previous-year IOQM problems — never straight into past papers without the foundation underneath.' },
  { icon: MessagesSquare, title: 'Interactive, not passive', desc: 'Sessions are built to provoke reasoning and discussion, not rote recall — the same instinct IOQM rewards under real exam pressure.' },
  { icon: PenLine, title: 'Personalized tracks', desc: 'Concept-first or problem-first — each student follows the sequence that actually matches how they learn.' },
];

export default function IoqmCoachingPunePage() {
  return (
    <main className="oly-page">
      <HeroBrand
        badges={['🚀 IOQM 2027 Batch Open', '📍 Grades 8–12']}
        titleLines={['Master IOQM With Faculty', "Who've Walked the Full"]}
        highlight="Olympiad Path."
        taglineSub="🎯 IOQM · RMO · INMO · IMO"
        lede="From foundations to India's toughest maths olympiads — IOQM, RMO, INMO and IMO — learn from mentors who've taken students through every stage of the journey, in batches capped at 12. Seats for the 2027 batch are open now."
        chips={[
          { label: 'Number Theory', color: '#2563EB' },
          { label: 'Algebra', color: '#7C3AED' },
          { label: 'Geometry', color: '#F59E0B' },
          { label: 'Combinatorics', color: '#10B981' },
        ]}
        ctaLabel="Book Free Demo"
        secondaryHref="#oly-topics"
        secondaryLabel="Explore the Syllabus"
        proofText={<>Trusted by <strong>150+ families</strong> across Pune</>}
        visual={<IoqmHeroVisual />}
      />
      <TrustBar stats={stats} />

      <section className="oly-section !pb-0">
        <div className="oly-container">
          <div className="mx-auto max-w-3xl text-center">
            <span className="oly-eyebrow">Why BuzzyBrains for IOQM</span>
            <h2 className="mt-5 text-balance text-[28px] font-extrabold leading-tight text-oly-ink sm:text-[34px]">
              Depth over exam tricks.
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-oly-ink/65">
              Preparing for IOQM isn&apos;t about formulas — it&apos;s about mathematical reasoning, proof-writing and
              pattern recognition under pressure. Our faculty bring both IIT pedigree and real olympiad-coaching
              experience, ensuring students build the depth IOQM demands, not just exam tricks.
            </p>
          </div>
        </div>
      </section>

      <TrackGrid
        id="oly-topics"
        icon={Hash}
        eyebrow="Syllabus"
        title="Four topics. Almost the entire paper."
        subtitle="IOQM draws overwhelmingly from four areas — we drill each one deliberately, then layer in timed, integer-answer practice."
        tracks={ioqmTopicTracks}
      />
      <Roadmap
        title="A fixed sequence, because IOQM prep isn't random."
        subtitle="Every student moves through the same five stages, in order — each one builds directly on the score data from the one before it."
      />
      <section className="oly-section bg-oly-paper">
        <div className="oly-container">
          <div className="max-w-xl">
            <span className="oly-eyebrow">Our Teaching Approach</span>
            <h2 className="mt-5 text-balance text-[34px] font-extrabold leading-tight text-oly-ink sm:text-[42px]">
              Concept-oriented, not shortcut-oriented.
            </h2>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {APPROACH.map((a) => (
              <div key={a.title} className="oly-card flex gap-4 p-6">
                <span className="oly-glow-icon grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white" style={{ '--glow': '37,71,204' } as React.CSSProperties}>
                  <a.icon size={20} strokeWidth={2.2} />
                </span>
                <div>
                  <h3 className="text-[15.5px] font-bold leading-snug text-oly-ink">{a.title}</h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-oly-ink/60">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faculty
        title="Mentors who've walked the full olympiad path."
        subtitle="Led by a founder with JEE AIR 400 and a coach who has personally taken students through IOQM → RMO → INMO → IMO, plus AMC 8/10/12, AIME and USAMO — both IIT alumni."
      />
      <Testimonials />
      <FAQ faqs={ioqmFaqs} />
      <LeadForm
        heading="Sit a real timed IOQM mock before you commit."
        demoSubject="IOQM"
        programs={['IOQM', 'Not sure yet — need guidance']}
      />
      <FinalCTA
        title="IOQM 2027 batches are open — reserve your seat."
        subtitle="Batches are capped at 12 students and fill on a first-come basis. Book a free demo class today — no cost, no obligation."
      />
      <StickyCTA label="IOQM 2027 Batch Open — Book Free Demo" />
    </main>
  );
}
