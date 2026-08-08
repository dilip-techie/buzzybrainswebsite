'use client';

import { Hash, GraduationCap, Users, Timer, Ban, Trophy, ClipboardCheck } from 'lucide-react';
import HeroGeneric from '@/components/olympiad/HeroGeneric';
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

export default function IoqmCoachingPunePage() {
  return (
    <main className="oly-page">
      <HeroGeneric
        eyebrow="🚀 IOQM 2027 Batch Open · Grades 8–12"
        title="Master IOQM,"
        highlight="India's toughest maths qualifier."
        description="A dedicated IOQM track — integer-answer problem solving across Number Theory, Algebra, Geometry and Combinatorics, mentored by IIT alumni, in batches capped at 12. Seats for the 2027 batch are open now. Clear IOQM and you're in line for INMO."
        stats={[['25+', 'Years teaching'], ['12', 'Max batch size'], ['30', 'Questions, 3 hrs']]}
        exploreHref="#oly-topics"
        exploreLabel="Explore the Syllabus"
      />
      <TrustBar stats={stats} />
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
      <Faculty
        title="Mentors who've sat where your child is sitting."
        subtitle="Led by an IOQM / AMC specialist and a JEE AIR 400 founder — both IIT alumni who have personally coached students through the IOQM pipeline."
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
