import type { BestInstituteData } from '@/components/local-seo/BestInstituteTemplate';

export const DATA: BestInstituteData = {
  h1: 'Best AMC 8 & AMC 10 Coaching Institute in Pune — BuzzyBrains Academy',
  heroLede:
    "Dedicated AMC 8, AMC 10 and AMC 12 coaching in Amanora, Hadapsar, from a mentor who has trained students for this exact American Mathematics Competition ladder since 2010 — including the AIME and USAMO pathway beyond it. Batches capped at 12.",
  whatIsHeading: 'What Actually Makes an Institute Good at AMC Coaching?',
  whatIsAnswer:
    "AMC 8 and AMC 10 are multiple-choice, but scoring well consistently needs more than content knowledge — AMC 10's scoring (6 for correct, 1.5 for blank, 0 for wrong) specifically punishes blind guessing, so a good AMC institute teaches the actual decision-making of when to attempt a question versus leave it blank, not just the underlying maths.",
  contextParagraphs: [
    "AMC 8 targets Grades 6-8 (under 14.5 years) with 25 questions in 40 minutes and no negative marking, building speed and pattern recognition. AMC 10 targets Grades 9-10 (under 17.5 years) with 25 questions in 75 minutes, and a strong score opens the door to the AIME, then USAMO — the same pipeline serious US competition mathletes follow.",
    "Because AMC's topic emphasis shifts meaningfully between the two levels — AMC 10 goes considerably further into intermediate algebra than AMC 8 does — coaching that treats them as one continuous syllabus, rather than two distinct exams with real content differences, under-prepares students moving up the ladder.",
  ],
  whyUsHeading: 'Why BuzzyBrains Academy for AMC Coaching in Pune',
  whyUsIntro:
    "AMC coaching at BuzzyBrains Academy is run by the same mentor who has coached students through IOQM's national pipeline since 2010, applying the same rigor to the American competition ladder.",
  whyUsBullets: [
    { title: 'A coach who has run this pipeline since 2010', text: "Dipak JK Sir coaches AMC 8, AMC 10, AMC 12, AIME and USAMO alongside IOQM/RMO/INMO/IMO — genuinely dual-track experience, not a JEE mentor teaching AMC as an afterthought." },
    { title: 'Full past-paper practice, not isolated topic drills', text: "since AMC increasingly combines concepts across topics within single questions, preparation is built around complete timed papers." },
    { title: 'Explicit scoring-strategy coaching', text: "students are taught when a guess is statistically worth the risk under AMC 10's specific mark distribution, not just the underlying content." },
    { title: 'Batch capped at 12 students', text: "individual review of exactly which questions a student is losing time or marks on." },
    { title: 'Both online and offline batches', text: "from the Amanora, Hadapsar campus, or the same curriculum live online." },
  ],
  infoTableHeading: 'AMC 8 vs AMC 10 at a Glance',
  infoTableIntro: "The two exams share a format but differ meaningfully in depth and scoring:",
  infoTableHeaders: ['Aspect', 'AMC 8', 'AMC 10'],
  infoTableRows: [
    ['Eligibility', 'Grades 6-8 (under 14.5 yrs)', 'Grades 9-10 (under 17.5 yrs)'],
    ['Format', 'Multiple choice, 5 options', 'Multiple choice, 5 options'],
    ['Questions', '25 questions', '25 questions'],
    ['Duration', '40 minutes', '75 minutes'],
    ['Scoring', '1 / correct, 0 for blank/wrong', '6 / correct, 1.5 / blank, 0 / wrong'],
    ['Leads to', 'AMC 10 / AMC 12', 'AIME → USAMO pathway'],
  ],
  facultyHeading: 'Meet the AMC Faculty',
  facultyIntro: "The same Mathematics mentors who coach IOQM lead AMC preparation, since the underlying skills overlap heavily:",
  faculty: [
    { name: 'Dipak JK Sir', role: 'AMC 8/10/12, AIME & USAMO Coach, also IOQM → RMO → INMO → IMO', creds: 'M.Tech (Design Engineering), IIT Bombay, GATE-qualified, B.E. (Mechanical)', note: 'Coaching this exact pipeline since 2010.' },
    { name: 'Dilip Sir', role: 'Founder & Lead Mathematics Mentor', creds: 'B.Tech, IIT Kanpur, MBA, IIM Ahmedabad, JEE AIR 400', note: '25+ years shaping the academy\'s concept-first Mathematics approach.' },
    { name: 'Arun Sir', role: 'Mathematics Mentor — Grades 6-12, Engineering Maths & Olympiad', creds: 'M.Sc. Mathematics', note: '12+ years teaching across all boards, including olympiad mathematics.' },
  ],
  commonMistakesHeading: 'Common Mistakes When Choosing an AMC Institute',
  commonMistakes: [
    { title: 'Treating AMC 8 success as automatic AMC 10 readiness.', text: 'AMC 10 tests intermediate algebra content — quadratics, sequences, inequalities — that simply doesn\'t appear on AMC 8, and needs its own dedicated preparation.' },
    { title: 'Ignoring scoring strategy.', text: "AMC 10's penalty-free blank versus wrong-answer scoring rewards a specific decision framework — coaching that only drills content and skips this loses easy points." },
    { title: 'Topic-by-topic drilling instead of full timed papers.', text: 'AMC questions increasingly mix concepts across topics; isolated drilling doesn\'t build the combined-concept fluency the real exam rewards.' },
  ],
  faqs: [
    { question: 'Can a student prepare for both IOQM and AMC at the same time?', answer: "Yes — many students do, since the core mathematical skills overlap heavily, and BuzzyBrains Academy runs a dedicated dual-track IOQM/AMC coaching option." },
    { question: 'Is AMC open to Indian students?', answer: "Yes — AMC 8, AMC 10 and AMC 12 are administered at registered international test centers, including in India, open to students worldwide regardless of nationality." },
    { question: 'Should my child attempt AMC 10A or AMC 10B?', answer: "The MAA runs two AMC 10 papers a few weeks apart, and a student may sit both — the better score counts toward AIME qualification, so most serious students attempt both if the schedule allows." },
    { question: 'How big are the batches?', answer: "Capped at a maximum of 12 students, so pacing and question-selection strategy can be reviewed individually, not just final scores." },
  ],
  ctaText: 'Ready to build genuine AMC exam strategy, not just content knowledge?',
  internalLinks: [
    { href: '/amc-8-10-coaching-pune', label: 'AMC 8/10 Coaching Program' },
    { href: '/ioqm-amc-coaching-pune', label: 'IOQM / AMC Dual-Track Coaching' },
    { href: '/blog/amc-8-preparation-guide-for-beginners', label: 'AMC 8 Preparation Guide for Beginners' },
    { href: '/blog/amc-scoring-negative-marking-strategy-explained', label: 'AMC Scoring & Negative Marking Strategy Explained' },
  ],
};
