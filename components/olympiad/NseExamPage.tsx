import '@/app/tailwind.css';
import OfferBanner from '@/components/OfferBanner';
import Link from 'next/link';
import { Atom, GraduationCap, Users, BookOpen, Landmark, Target, BrainCircuit, ClipboardCheck } from 'lucide-react';
import HeroBrand from '@/components/olympiad/HeroBrand';
import NseHeroVisual from '@/components/olympiad/NseHeroVisual';
import TrustBar, { type StatItem } from '@/components/olympiad/TrustBar';
import ShortVideoSection from '@/components/olympiad/ShortVideoSection';
import TrackGrid from '@/components/olympiad/TrackGrid';
import Roadmap from '@/components/olympiad/Roadmap';
import Faculty from '@/components/olympiad/Faculty';
import Testimonials from '@/components/olympiad/Testimonials';
import FAQ from '@/components/olympiad/FAQ';
import LeadForm from '@/components/olympiad/LeadForm';
import FinalCTA from '@/components/olympiad/FinalCTA';
import { scienceFaculty } from '@/lib/olympiad/data';
import { PHYSICS_SHORT, OLYMPIAD_SHORT } from '@/components/olympiad/videos';
import type { NseExam } from '@/lib/olympiad/nse';

/** Shared landing page for NSEP, NSEC and NSEB. Content comes from lib/olympiad/nse.ts. */
export default function NseExamPage({ exam }: { exam: NseExam }) {
  const stats: StatItem[] = [
    { icon: GraduationCap, value: '25+', label: 'Years of teaching excellence' },
    { icon: Users, value: '12', label: 'Maximum students per batch' },
    { icon: BookOpen, value: 'Class 11–12', label: 'Syllabus level of the paper' },
    { icon: Landmark, value: 'IAPT', label: `Conducts ${exam.code}` },
    { icon: Target, value: 'Negative', label: 'Marking, so accuracy matters' },
    { icon: BrainCircuit, value: 'Every mock', label: 'Scored with individual feedback' },
  ];
  const video = exam.slug === 'nsep' ? PHYSICS_SHORT : OLYMPIAD_SHORT;

  return (
    <main className="oly-page">
      <HeroBrand
        badges={[`🎁 FREE ${exam.code} Diagnostic Test`, `${exam.emoji} ${exam.subject} Olympiad Coaching`, '📍 Class 11–12']}
        titleLines={exam.titleLines}
        highlight={exam.highlight}
        taglineSub={`🏅 ${exam.code} → ${exam.nextStage} → ${exam.international}`}
        lede={exam.heroLede}
        chips={exam.chips}
        ctaLabel="Book Free Olympiad Counselling Call"
        secondaryHref="#oly-tracks"
        secondaryLabel={`See what ${exam.code} tests`}
        proofText={<>Trusted by <strong>150+ families</strong> across Pune</>}
        visual={<NseHeroVisual subject={exam.subject} pathway={exam.pathway} />}
      />
      <TrustBar stats={stats} />
      <OfferBanner
        tag="100% FREE"
        title={`Take our free ${exam.code} diagnostic test`}
        lede="Find out exactly where your child stands before you commit to anything."
        points={[`Timed, ${exam.code}-style diagnostic`, 'Maps problem-solving strengths and gaps', 'Leads to a personalized preparation plan and the right batch']}
        ctaLabel="Book Your Free Diagnostic"
        href="#oly-lead-form"
      />
      <ShortVideoSection video={video} />
      <TrackGrid
        id="oly-tracks"
        icon={Atom}
        eyebrow={`${exam.code} Syllabus`}
        title={exam.tracksTitle}
        subtitle={exam.tracksSubtitle}
        tracks={exam.tracks}
      />
      <section className="oly-section">
        <div className="oly-container text-center">
          <p className="text-[15.5px] text-oly-ink/70">
            Want the full picture first?{' '}
            <Link prefetch={false} href={exam.blogHref} className="font-bold text-oly-ink underline underline-offset-4">
              {exam.blogLabel}
            </Link>
            .
          </p>
        </div>
      </section>
      <Roadmap
        title={exam.roadmapTitle}
        subtitle={`Every student moves through the same five stages, in order, each built on the score data from the one before it.`}
        steps={exam.roadmapSteps}
      />
      <Faculty
        title={exam.facultyTitle}
        subtitle={exam.facultySubtitle}
        {...(exam.useScienceFaculty ? { faculty: scienceFaculty } : {})}
      />
      <Testimonials />
      <FAQ faqs={exam.faqs} />
      <LeadForm heading={exam.leadHeading} demoSubject={`${exam.subject} Olympiad`} programs={exam.programs} />
      <FinalCTA
        title={`Ready to start your ${exam.code} preparation?`}
        subtitle="Book a free demo class today: no cost, no obligation, just a real timed mock in the exact exam format."
      />
    </main>
  );
}
