import '@/app/tailwind.css';
import OfferBanner from '@/components/OfferBanner';
import EliteBatchBanner from '@/components/EliteBatchBanner';
import { Trophy } from 'lucide-react';
import HeroGeneric from '@/components/olympiad/HeroGeneric';
import TrustBar from '@/components/olympiad/TrustBar';
import ShortVideoSection from '@/components/olympiad/ShortVideoSection';
import { MATHS_SHORT } from '@/components/olympiad/videos';
import TrackGrid from '@/components/olympiad/TrackGrid';
import Roadmap from '@/components/olympiad/Roadmap';
import Methodology from '@/components/olympiad/Methodology';
import Faculty from '@/components/olympiad/Faculty';
import Testimonials from '@/components/olympiad/Testimonials';
import FAQ from '@/components/olympiad/FAQ';
import GuidesGrid from '@/components/olympiad/GuidesGrid';
import LeadForm from '@/components/olympiad/LeadForm';
import FinalCTA from '@/components/olympiad/FinalCTA';
import { mathsOlympiadTracks, mathsOlympiadFaqs } from '@/lib/olympiad/data';

export default function OlympiadMathPage() {
  return (
    <main className="oly-page">
      <HeroGeneric
        eyebrow="SOF IMO · IOQM · NMTC · AMC · Kangaroo · WMI · SASMO"
        title="Every maths olympiad,"
        highlight="one concept-first method."
        description="From a first SOF IMO attempt in Grade 3 to IOQM, NMTC, AMC 8/10, Math Kangaroo, WMI and SASMO — structured competition-maths coaching for Grades 1-12, mentored by IIT alumni, in batches capped at 12."
        stats={[['7', 'Olympiad tracks'], ['12', 'Max batch size'], ['25+', 'Years teaching']]}
        exploreHref="#oly-tracks"
        exploreLabel="Explore Olympiad Tracks"
      />
      <TrustBar />
      <EliteBatchBanner program="Maths Olympiad" href="#oly-lead-form" />
      <OfferBanner
        tag="100% FREE"
        title="Take our free Maths Olympiad diagnostic test"
        lede="Find out exactly where your child stands before you commit to anything."
        points={['Timed, Maths Olympiad-style diagnostic', 'Maps problem-solving strengths and gaps', 'Leads to a personalized preparation plan and the right batch', 'Scholarships of up to 90% for group batches, based on your test score']}
        ctaLabel="Book Your Free Diagnostic"
        href="#oly-lead-form"
      />
      <ShortVideoSection video={MATHS_SHORT} />
      <TrackGrid
        id="oly-tracks"
        icon={Trophy}
        eyebrow="Olympiad Tracks"
        title="Seven olympiads. One rigorous method."
        subtitle="Each track runs on its own syllabus, timing and scoring rules — so your child trains in the exact format they'll sit on exam day."
        tracks={mathsOlympiadTracks}
      />
      <Roadmap />
      <Methodology />
      <Faculty />
      <Testimonials />
      <GuidesGrid
        title="Maths olympiad guides, by contest."
        subtitle="Plain-English guides on formats, scoring and preparation for WMI, Math Kangaroo and AMC 8."
        groups={[
          {
            heading: 'WMI',
            guides: [
              { href: '/blog/what-is-wmi-world-mathematics-invitational-guide-for-indian-students', label: 'What Is WMI? A Guide for Indian Students' },
              { href: '/blog/wmi-preliminary-round-format-scoring-medals-explained', label: 'WMI Preliminary Round: Format, Scoring and Medals' },
              { href: '/blog/how-to-prepare-for-wmi-preliminary-round-study-plan', label: 'How to Prepare for WMI: A 10-Week Study Plan' },
              { href: '/blog/wmi-vs-math-kangaroo-vs-imo-vs-amc-which-competition', label: 'WMI vs Math Kangaroo vs IMO vs AMC' },
              { href: '/blog/wmi-final-round-qualification-what-to-expect', label: 'WMI Final Round: How to Qualify and What to Expect' },
            ],
          },
          {
            heading: 'Math Kangaroo',
            guides: [
              { href: '/blog/math-kangaroo-india-registration-guide-how-to-register', label: 'Math Kangaroo in India: How to Register' },
              { href: '/blog/math-kangaroo-12-week-preparation-plan', label: 'Math Kangaroo: A 12-Week Preparation Plan' },
              { href: '/blog/how-to-solve-math-kangaroo-logic-and-visual-puzzles', label: 'How to Solve Logic and Visual Puzzles: Six Techniques' },
              { href: '/blog/math-kangaroo-benjamin-cadet-grades-5-8-topics-and-practice', label: 'Benjamin and Cadet (Grades 5-8): Topics and Practice' },
              { href: '/blog/math-kangaroo-mistakes-students-make-and-how-parents-can-help', label: 'Eight Common Mistakes and How Parents Can Help' },
            ],
          },
          {
            heading: 'AMC 8',
            guides: [
              { href: '/blog/amc-8-geometry-problems-strategies-area-angles-diagrams', label: 'AMC 8 Geometry: Area, Angles and Diagrams' },
              { href: '/blog/amc-8-counting-probability-problems-systematic-listing', label: 'AMC 8 Counting and Probability' },
              { href: '/blog/amc-8-number-theory-arithmetic-divisibility-primes-remainders', label: 'AMC 8 Number Theory and Arithmetic' },
              { href: '/blog/amc-8-honor-roll-distinguished-honor-roll-score-targets', label: 'AMC 8 Scoring, Honor Roll and Target Scores' },
              { href: '/blog/how-to-use-past-amc-8-papers-effectively', label: 'How to Use Past AMC 8 Papers Effectively' },
            ],
          },
        ]}
      />
      <FAQ faqs={mathsOlympiadFaqs} />
      <LeadForm
        heading="Sit a real timed mock before you commit."
        demoSubject="Maths Olympiad"
        programs={['SOF IMO', 'IOQM', 'NMTC', 'AMC 8/10', 'Kangaroo', 'WMI', 'SASMO', 'Not sure yet — need guidance']}
      />
      <FinalCTA />
    </main>
  );
}
