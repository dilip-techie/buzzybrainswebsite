'use client';

import { BookOpen, GraduationCap, Users, Layers, Timer, BrainCircuit, ClipboardCheck } from 'lucide-react';
import HeroGeneric from '@/components/olympiad/HeroGeneric';
import TrustBar, { type StatItem } from '@/components/olympiad/TrustBar';
import TrackGrid from '@/components/olympiad/TrackGrid';
import Roadmap from '@/components/olympiad/Roadmap';
import Faculty from '@/components/olympiad/Faculty';
import Testimonials from '@/components/olympiad/Testimonials';
import FAQ from '@/components/olympiad/FAQ';
import LeadForm from '@/components/olympiad/LeadForm';
import FinalCTA from '@/components/olympiad/FinalCTA';
import { sofSubjectTracks, sofOlympiadRoadmap, scienceFaculty, sofOlympiadFaqs } from '@/lib/olympiad/data';

const stats: StatItem[] = [
  { icon: GraduationCap, value: '25+', label: 'Years of teaching excellence' },
  { icon: Users, value: '12', label: 'Maximum students per batch' },
  { icon: Layers, value: '10', label: 'Subject tracks, Grades 3–10' },
  { icon: Timer, value: 'Weekly', label: 'Timed mock papers, real exam conditions' },
  { icon: BrainCircuit, value: '100%', label: 'IIT / IISER-alumni-led faculty' },
  { icon: ClipboardCheck, value: 'Every mock', label: 'Scored with individual feedback' },
];

export default function SofOlympiadsPage() {
  return (
    <main className="oly-page">
      <HeroGeneric
        eyebrow="Grades 3–10 · 10 Subject Tracks"
        title="One academy,"
        highlight="every olympiad your child needs."
        description="From SOF-style Maths, Science, English and General Knowledge to Commerce, Financial Literacy, Economics, Physics, Chemistry and NSEJS — structured olympiad coaching across every core subject, in batches capped at 12."
        stats={[['10', 'Subject tracks'], ['12', 'Max batch size'], ['25+', 'Years teaching']]}
        exploreHref="#oly-tracks"
        exploreLabel="Explore Subject Tracks"
      />
      <TrustBar stats={stats} />
      <TrackGrid
        id="oly-tracks"
        icon={BookOpen}
        eyebrow="Subject Tracks"
        title="Ten tracks. One consistent method."
        subtitle="Every track — from Maths to Financial Literacy — runs on the same structure: diagnostic, concept foundation, guided practice, and timed mocks in the real exam format."
        tracks={sofSubjectTracks}
      />
      <Roadmap
        title="A fixed sequence, because olympiad prep isn't random."
        subtitle="Every student moves through the same five stages, in order, whichever subject tracks they're taking."
        steps={sofOlympiadRoadmap}
      />
      <Faculty
        title="Mentors across every subject your child needs."
        subtitle="Our subject leads hold degrees from IIT, IISER and other top institutions, and have personally mentored students across Maths, Science and Biology olympiad tracks."
        faculty={scienceFaculty}
      />
      <Testimonials />
      <FAQ faqs={sofOlympiadFaqs} />
      <LeadForm
        heading="Find the right olympiad track for your child."
        demoSubject="Olympiad"
        programs={['Maths', 'Science', 'English', 'General Knowledge', 'Commerce', 'Financial Literacy', 'Economics', 'Physics', 'Chemistry', 'NSEJS', 'Not sure yet — need guidance']}
      />
      <FinalCTA />
    </main>
  );
}
