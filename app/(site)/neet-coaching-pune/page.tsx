import { PillarPage } from '../../components/PillarPage';

export default function NeetPillarPage() {
  return (
    <PillarPage
      eyebrow="NEET Coaching Pune"
      h1={<>NEET Coaching in Pune: What Actually Determines the Score</>}
      lede="NCERT depth, structured revision, and exam-day time management decide more of the final NEET score than most families expect. Here's what to look for in a coaching program."
      primaryProgram={{ href: '/12th-board-pcb', label: 'NEET Program' }}
      secondaryPrograms={[
        { href: '/foundation', label: 'Foundation Program (Grades 6-10)' },
        { href: '/one-on-one', label: 'One-on-One Coaching' },
      ]}
      relatedPosts={[
        { href: '/blog/neet-biology-preparation-strategy-ncert-first-approach', label: 'NEET Biology Preparation Strategy: NCERT-First Approach' },
        { href: '/blog/how-to-master-neet-physics-numericals', label: 'How to Master NEET Physics Numericals Without Fear' },
        { href: '/blog/neet-organic-chemistry-concept-first-study-plan', label: 'NEET Organic Chemistry: A Concept-First Study Plan' },
        { href: '/blog/neet-dropper-year-building-a-realistic-comeback-plan', label: 'NEET Dropper Year: Building a Realistic Comeback Plan' },
        { href: '/blog/neet-class-11-vs-class-12-syllabus-where-to-focus-first', label: 'NEET Class 11 vs Class 12 Syllabus: Where to Focus First' },
        { href: '/blog/how-to-crack-neet-in-the-first-attempt', label: 'How to Crack NEET in the First Attempt' },
        { href: '/blog/why-foundation-is-important-for-cracking-neet', label: 'Why Foundation Is Important for Cracking NEET' },
        { href: '/blog/neet-physical-chemistry-building-calculation-fluency', label: 'NEET Physical Chemistry: Building Calculation Fluency' },
        { href: '/blog/how-many-hours-a-day-should-you-study-for-neet', label: 'How Many Hours a Day Should You Study for NEET?' },
        { href: '/blog/neet-mock-test-strategy-how-to-learn-from-every-attempt', label: 'NEET Mock Test Strategy' },
        { href: '/blog/common-neet-preparation-mistakes-that-cost-a-rank', label: 'Common NEET Preparation Mistakes That Cost a Rank' },
        { href: '/blog/neet-revision-strategy-for-the-final-3-months', label: 'NEET Revision Strategy for the Final 3 Months' },
        { href: '/blog/neet-coaching-vs-self-study-how-to-choose', label: 'NEET Coaching vs Self-Study: How to Choose' },
        { href: '/blog/neet-inorganic-chemistry-high-yield-low-time-strategy', label: 'NEET Inorganic Chemistry: A High-Yield Strategy' },
        { href: '/blog/how-early-should-neet-preparation-actually-start', label: 'How Early Should NEET Preparation Actually Start?' },
        { href: '/blog/re-neet-paper-leak-year-exam-proof-preparation', label: 'Re-NEET: What a Paper-Leak Year Teaches About Exam-Proof Prep' },
      ]}
      faq={[
        {
          question: 'Why does NCERT matter so much for NEET?',
          answer: 'NEET Biology in particular draws heavily and directly from NCERT phrasing — students who master NCERT line-by-line consistently outperform those who rely only on reference books that reframe the same content differently.',
        },
        {
          question: 'Can NEET and board exam preparation happen together?',
          answer: 'Yes, and it should — a well-structured NEET program builds board-exam clarity and NEET-level depth from the same NCERT foundation, rather than treating them as two separate syllabi.',
        },
        {
          question: 'Is a dropper year worth it for NEET?',
          answer: 'For students who fell short by a correctable margin — weak in one subject, or let down by exam-day time management — a focused dropper year with small-batch mentoring often closes that gap. It’s a bigger commitment and should be a considered decision, not a default.',
        },
      ]}
      body={[
        {
          kind: 'p',
          text: 'NEET rewards a specific kind of preparation: exhaustive command over NCERT, especially in Biology, combined with fast, accurate Physics and Chemistry problem-solving under a strict per-question time budget. Coaching quality shows up most clearly in how directly a program targets that combination, rather than in generic "we cover everything" claims.',
        },
        { kind: 'h2', text: 'NCERT-first teaching, not NCERT-adjacent teaching' },
        {
          kind: 'p',
          text: 'A large share of NEET Biology questions are drawn close to NCERT’s exact phrasing and diagrams. Reference books that reorganize the same content into their own structure can actually work against a student on exam day, when recognizing a familiar NCERT sentence is what triggers instant recall. BuzzyBrains Academy’s NEET program is built around line-by-line NCERT mastery first, with reference material used to deepen understanding — not replace the source.',
        },
        { kind: 'h2', text: 'The three-subject balancing act' },
        {
          kind: 'ul',
          items: [
            'Biology carries the largest weight and rewards volume + precision — the more of NCERT a student has internalized, the faster they move.',
            'Chemistry rewards a mix of memorization (Inorganic) and mechanism-based reasoning (Organic, Physical) — treating all of Chemistry the same way is a common and costly mistake.',
            'Physics is usually the differentiator between an average NEET score and a strong one — it needs the most numerical practice per topic, not the most theory revision.',
          ],
        },
        { kind: 'h2', text: 'What good NEET mentoring looks like week to week' },
        {
          kind: 'ul',
          items: [
            'Weekly tests that mirror the real NEET time pressure — not untimed chapter quizzes.',
            'High-yield revision systems that flag which NCERT lines get tested most often, so revision time is spent where it returns the most marks.',
            'Small batches so a mentor notices when a student is strong on paper but slow under time pressure — a gap most large-batch coaching never catches until the real exam.',
          ],
        },
        { kind: 'h2', text: 'Board exams and NEET, prepared together' },
        {
          kind: 'p',
          text: 'Because NEET and Class 12 boards draw from an overlapping core, a program that treats them as two unrelated syllabi wastes a student’s limited study hours. BuzzyBrains Academy’s NEET program is designed so board-exam clarity and NEET-level depth build from the same foundation, rather than requiring two separate preparation tracks.',
        },
      ]}
    />
  );
}
