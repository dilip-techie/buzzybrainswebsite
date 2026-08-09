'use client';

import { Medal, GraduationCap, Users, Layers, ListChecks, BrainCircuit, ClipboardCheck } from 'lucide-react';
import HeroBrand from '@/components/olympiad/HeroBrand';
import SofHeroVisual from '@/components/olympiad/SofHeroVisual';
import TrustBar, { type StatItem } from '@/components/olympiad/TrustBar';
import TrackGrid from '@/components/olympiad/TrackGrid';
import Roadmap from '@/components/olympiad/Roadmap';
import Faculty from '@/components/olympiad/Faculty';
import Testimonials from '@/components/olympiad/Testimonials';
import FAQ from '@/components/olympiad/FAQ';
import LeadForm from '@/components/olympiad/LeadForm';
import FinalCTA from '@/components/olympiad/FinalCTA';
import { sofExamTracks, sofExamFaqs, scienceFaculty } from '@/lib/olympiad/data';

const stats: StatItem[] = [
  { icon: GraduationCap, value: '25+', label: 'Years of teaching excellence' },
  { icon: Users, value: '12', label: 'Maximum students per batch' },
  { icon: Layers, value: '4', label: 'SOF exams: IMO, NSO, IEO, IGKO' },
  { icon: ListChecks, value: 'MCQ', label: 'Multiple-choice, Grades 1-12' },
  { icon: BrainCircuit, value: '100%', label: 'IIT / IISER-alumni-led faculty' },
  { icon: ClipboardCheck, value: 'Every mock', label: 'Scored with individual feedback' },
];

export default function SofImoCoachingPunePage() {
  return (
    <main className="oly-page">
      <HeroBrand
        badges={['⭐ SOF Olympiad Coaching', '📍 Grades 1–12']}
        titleLines={['Every SOF Exam.', 'One Confident']}
        highlight="Start."
        taglineSub="🏅 IMO · NSO · IEO · IGKO"
        lede="Structured coaching for all four Science Olympiad Foundation exams — IMO (Maths), NSO (Science), IEO (English) and IGKO (General Knowledge) — mentored by IIT/IISER alumni, in batches capped at 12."
        chips={[
          { label: 'Mathematics', color: '#2563EB' },
          { label: 'Science', color: '#10B981' },
          { label: 'English', color: '#F59E0B' },
          { label: 'General Knowledge', color: '#7C3AED' },
        ]}
        ctaLabel="Book Free Demo"
        secondaryHref="#oly-exams"
        secondaryLabel="Explore the SOF Exams"
        proofText={<>Trusted by <strong>150+ families</strong> across Pune</>}
        visual={<SofHeroVisual />}
      />
      <TrustBar stats={stats} />
      <TrackGrid
        id="oly-exams"
        icon={Medal}
        eyebrow="SOF Exams"
        title="Four exams. One accessible format."
        subtitle="Every SOF exam runs multiple-choice from Grade 1 onward — a low-pressure, high-value entry point into competitive thinking, well before IOQM-level rigor becomes relevant."
        tracks={sofExamTracks}
      />
      <Roadmap
        title="A fixed sequence, so SOF prep isn't left to chance."
        subtitle="Every student moves through the same five stages, in order, whichever SOF exam they're preparing for."
      />
      <Faculty
        title="Mentors across Maths and Science tracks."
        subtitle="Our subject leads hold degrees from IIT, IISER and other top institutions, and have personally mentored students across SOF's Maths and Science olympiad tracks."
        faculty={scienceFaculty}
      />
      <Testimonials />
      <FAQ faqs={sofExamFaqs} />
      <LeadForm
        heading="Find the right SOF exam for your child."
        demoSubject="SOF Olympiad"
        programs={['SOF IMO', 'SOF NSO', 'SOF IEO', 'SOF IGKO', 'Not sure yet — need guidance']}
      />
      <FinalCTA />
    </main>
  );
}
