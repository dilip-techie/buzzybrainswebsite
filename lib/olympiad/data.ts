export interface FacultyMember {
  name: string;
  role: string;
  creds: string;
  badge: string;
}

export interface Track {
  id: string;
  code: string;
  name: string;
  grades: string;
  blurb: string;
  meta: [string, string][];
  topics: string[];
  outcome: string;
  color: 'brand' | 'amber' | 'sky';
  /** Overrides the card's CTA link (e.g. to a dedicated exam landing page)
   * instead of the section's shared ctaHref. */
  href?: string;
}

export const examTracks = [
  {
    code: 'IOQM',
    name: 'Indian Olympiad Qualifier in Mathematics',
    grades: 'Grades 8–12',
    format: 'Subjective, integer-type answers',
    questions: '30 questions',
    duration: '3 hours',
    scoring: '1 mark / question, no negative marking',
    color: 'brand',
    blurb:
      "The first rung of India's math olympiad ladder — clear IOQM and you're in line for INMO, then the International Mathematical Olympiad camp.",
    topics: ['Number Theory', 'Algebra', 'Combinatorics', 'Geometry'],
    outcome: 'Gateway to INMO → IMOTC → IMO',
  },
  {
    code: 'AMC 8',
    name: 'American Mathematics Competition 8',
    grades: 'Grades 6–8 (under 14.5 yrs)',
    format: 'Multiple choice, 5 options (A–E)',
    questions: '25 questions',
    duration: '40 minutes',
    scoring: '1 mark / correct, 0 for blank/wrong',
    color: 'amber',
    blurb:
      'A fast, elegant entry point to competition mathematics — builds the speed and pattern-recognition instincts every serious mathlete needs.',
    topics: ['Arithmetic', 'Pre-Algebra', 'Basic Geometry', 'Logic'],
    outcome: 'Builds the base for AMC 10 and AMC 12',
  },
  {
    code: 'AMC 10',
    name: 'American Mathematics Competition 10',
    grades: 'Grades 9–10 (under 17.5 yrs)',
    format: 'Multiple choice, 5 options (A–E)',
    questions: '25 questions',
    duration: '75 minutes',
    scoring: '6 / correct, 1.5 / blank, 0 / wrong',
    color: 'sky',
    blurb:
      'The proving ground for AIME qualification — a top-tier score opens the door to the American Invitational Mathematics Examination.',
    topics: ['Algebra II', 'Geometry', 'Number Theory', 'Probability'],
    outcome: 'Qualifying score → AIME → USAMO pathway',
  },
];

export const roadmap = [
  {
    step: '01',
    title: 'Diagnostic Bubble Test',
    desc: 'A timed mock in the exact OMR / MCQ format of your target olympiad, scored the same way the real board scores it.',
  },
  {
    step: '02',
    title: 'Concept Foundation',
    desc: "Targeted sessions on the exact topic clusters your diagnostic flagged — no wasted hours on what you've already mastered.",
  },
  {
    step: '03',
    title: 'Problem-Pattern Drilling',
    desc: 'Curated problem sets from past IOQM, AMC 8 and AMC 10 papers, sorted by technique, not just topic.',
  },
  {
    step: '04',
    title: 'Weekly Timed Mocks',
    desc: 'Full-length simulated papers under exam conditions, with scoring and a rank sheet against your batch.',
  },
  {
    step: '05',
    title: 'Exam-Day Readiness',
    desc: 'Speed drills, negative-marking strategy and last-mile revision sheets tuned to the exact exam you are sitting.',
  },
];

// Real BuzzyBrains Academy Mathematics faculty — all three are IIT alumni.
export const faculty = [
  {
    name: 'Dilip Sir',
    role: 'Founder & Lead Mentor — Mathematics & Physics, Foundation to Olympiad',
    creds: 'B.Tech, IIT Kanpur • MBA, IIM Ahmedabad • JEE AIR 400',
    badge: '25+ yrs experience',
  },
  {
    name: 'Dipak JK Sir',
    role: "IOQM → RMO → INMO → IMO Coach • AMC 8/10/12, AIME & USAMO",
    creds: 'M.Tech (Design Engg), IIT Bombay • GATE-qualified • B.E. (Mech)',
    badge: '15+ yrs since 2010',
  },
  {
    name: 'Agarwal Sir',
    role: 'JEE Mathematics & Physics Mentor',
    creds: 'PhD, IIT Bombay',
    badge: 'IIT Bombay alumnus',
  },
];

// Real, previously-published parent reviews of BuzzyBrains Academy.
export const testimonials = [
  {
    name: 'Pinky Singhal',
    text: 'I highly recommend Dilip Sir for his clear and simple teaching methods. He explains complex topics in a way that is perfect for students, and my daughter is very happy with her progress.',
  },
  {
    name: 'Rishi Raj',
    text: 'Dilip sir is extremely talented and efficient. We had a very good experience with our kids. Will highly recommend him.',
  },
  {
    name: 'Kavita Khurana',
    text: 'Both the teachers of Maths & Science are amazing. They are very supportive & provide professional guidance. I highly recommend BuzzyBrains Academy.',
  },
];

export const faqs = [
  {
    q: 'What is the difference between IOQM, AMC 8 and AMC 10?',
    a: 'IOQM is India\'s official qualifying round for the national math olympiad pathway (INMO → IMO), open to Grades 8–12. AMC 8 and AMC 10 are US-based competitions run by the MAA — AMC 8 targets Grades 6–8 and AMC 10 targets Grades 9–10 — and a strong AMC 10 score qualifies students for the AIME. Many of our students prepare for more than one track in parallel, since the core skills overlap heavily.',
  },
  {
    q: 'My child has never attempted an olympiad before — can they still join?',
    a: 'Yes. Every student starts with a diagnostic bubble test so we can see exactly where they stand, then build a personal preparation plan from there. We run dedicated starter batches for first-time olympiad students alongside our advanced tracks.',
  },
  {
    q: 'How is the batch structured and how many students per batch?',
    a: 'Batches are capped at a maximum of 12 students — the same limit that applies across every BuzzyBrains Academy program — so every student gets reviewed individually on every mock paper.',
  },
  {
    q: 'Do you provide past papers and mock tests in the real exam format?',
    a: 'Yes — every mock is administered in the format, timing and scoring rules of the target exam (OMR-style bubble sheet for AMC 8/10, integer-answer sheet for IOQM), so exam day never feels unfamiliar.',
  },
  {
    q: 'Is coaching available online, offline, or both?',
    a: 'Both. Our Amanora, Hadapsar campus runs live in-person batches with smart digital boards, and the same curriculum is available live online.',
  },
];

// Broader subject faculty for multi-subject (non-Maths-only) olympiad pages.
export const scienceFaculty: FacultyMember[] = [
  {
    name: 'Dr. Mrinmayee',
    role: 'Chemistry — JEE / NEET / Olympiad',
    creds: 'PhD, IIT Kharagpur',
    badge: 'Research-trained',
  },
  {
    name: 'Dr. Urmila',
    role: 'Chemistry & Science — Top-rated Faculty',
    creds: 'PhD, IISER Pune',
    badge: 'IISER Pune alumna',
  },
  {
    name: 'Dr. Todkar',
    role: 'Biology — NEET & Science Olympiad',
    creds: 'General Physician',
    badge: '25+ yrs experience',
  },
  {
    name: 'Priya Madam',
    role: 'Biology — Top Biology Faculty',
    creds: 'B.E., Pune University',
    badge: 'Biology specialist',
  },
];

export const mathsOlympiadTracks: Track[] = [
  {
    id: 'sof-imo',
    code: 'SOF IMO',
    name: 'SOF International Mathematics Olympiad',
    grades: 'Grades 1–12',
    blurb: 'Run by the Science Olympiad Foundation, IMO is the most widely taken school-level maths olympiad in India — a strong, accessible starting point before moving to IOQM-level rigor.',
    meta: [['Format', 'Multiple choice'], ['Level', 'School + applied logic']],
    topics: ['Number Sense', 'Reasoning', 'Applied Arithmetic'],
    outcome: 'Strong first step into competitive maths',
    color: 'brand',
    href: '/sof-imo-coaching-pune',
  },
  {
    id: 'ioqm',
    code: 'IOQM',
    name: 'Indian Olympiad Qualifier in Mathematics',
    grades: 'Grades 8–12',
    blurb: "India's national qualifying round — clear IOQM and you're in line for INMO, then the International Mathematical Olympiad camp.",
    meta: [['Format', 'Integer answer'], ['Duration', '3 hours, 30 Qs']],
    topics: ['Number Theory', 'Algebra', 'Combinatorics', 'Geometry'],
    outcome: 'Gateway to INMO → IMOTC → IMO',
    color: 'brand',
    href: '/ioqm-coaching-pune',
  },
  {
    id: 'nmtc',
    code: 'NMTC',
    name: 'National Mathematics Talent Contest',
    grades: 'Grades 5–12',
    blurb: 'Conducted by AMTI (Association of Mathematics Teachers of India) across Primary, Sub-Junior, Junior, Inter and Senior levels — a respected, proof-and-reasoning-oriented contest.',
    meta: [['Conducted by', 'AMTI'], ['Format', 'Two-stage, written']],
    topics: ['Problem Solving', 'Reasoning', 'Number Theory'],
    outcome: 'Builds proof-writing skill for INMO-level work',
    color: 'amber',
    href: '/nmtc-coaching-pune',
  },
  {
    id: 'amc',
    code: 'AMC 8/10',
    name: 'American Mathematics Competition 8 & 10',
    grades: 'Grades 6–10',
    blurb: "The MAA's flagship US competitions — AMC 8 for Grade 6–8, AMC 10 for Grade 9–10 — with a strong AMC 10 score opening the door to AIME and USAMO.",
    meta: [['Format', 'Multiple choice'], ['Leads to', 'AIME → USAMO']],
    topics: ['Algebra', 'Geometry', 'Counting & Probability'],
    outcome: 'Builds an international competition-maths profile',
    color: 'sky',
    href: '/amc-8-10-coaching-pune',
  },
  {
    id: 'kangaroo',
    code: 'Kangaroo',
    name: 'Math Kangaroo',
    grades: 'Grades 1–12',
    blurb: "One of the world's largest maths competitions by participation — multiple-choice, no negative marking, and built around clever application of school-level concepts rather than advanced theory.",
    meta: [['Format', 'Multiple choice'], ['Negative marking', 'None']],
    topics: ['Logic', 'Pattern Recognition', 'Applied Arithmetic'],
    outcome: 'Global benchmark, no downside to attempting',
    color: 'amber',
    href: '/maths-kangaroo-coaching-pune',
  },
];

export const mathsOlympiadFaqs = [
  {
    q: 'Which maths olympiad should my child start with?',
    a: 'It depends mainly on grade. Grades 1–7 typically start with SOF IMO or Math Kangaroo since both are accessible, multiple-choice and low-pressure. From Grade 6 onward, AMC 8 is a strong alternative entry point. From Grade 8, IOQM and NMTC become available and are the more rigorous, India-focused tracks. Many students prepare for more than one in parallel since the core skills overlap heavily.',
  },
  {
    q: 'What is the difference between SOF IMO and IOQM?',
    a: 'SOF IMO is a multiple-choice exam open from Grade 1, testing applied school-level maths and reasoning at a broad, accessible level. IOQM is a far more rigorous, integer-answer exam for Grades 8–12 that is the official gateway to India\'s INMO/IMO pipeline. Most students use SOF IMO and Kangaroo as an early foundation before moving into IOQM-level preparation.',
  },
  {
    q: 'Is NMTC recognized the same way as IOQM?',
    a: 'Both are well-respected in India\'s olympiad ecosystem. NMTC (via AMTI) is a strong proof-and-reasoning-focused contest in its own right, and its written, multi-stage format builds genuine skill that transfers directly to IOQM and INMO-level work.',
  },
  {
    q: 'How is batch size and mentoring structured?',
    a: 'Every BuzzyBrains Academy batch is capped at a maximum of 12 students, so mentors can review each student\'s work individually across every track — SOF IMO, IOQM, NMTC, AMC or Kangaroo.',
  },
];

export const sofSubjectTracks: Track[] = [
  {
    id: 'maths',
    code: 'Maths',
    name: 'Mathematics Olympiad',
    grades: 'Grades 3–10',
    blurb: 'Applied number sense, logic and problem-solving beyond the school syllabus — the same foundation that feeds directly into IOQM and AMC-track preparation from Grade 8 onward.',
    meta: [['Track', 'SOF IMO-style']],
    topics: ['Number Sense', 'Reasoning', 'Speed Maths'],
    outcome: 'Feeds into our Maths Olympiad program',
    color: 'brand',
  },
  {
    id: 'science',
    code: 'Science',
    name: 'Science Olympiad',
    grades: 'Grades 3–10',
    blurb: 'Broad, applied science reasoning across Physics, Chemistry and Biology concepts — built for curiosity and speed, not rote memorization.',
    meta: [['Track', 'SOF NSO-style']],
    topics: ['General Science', 'Applied Reasoning'],
    outcome: 'Strong base for NEET/JEE-track science later',
    color: 'brand',
  },
  {
    id: 'biology',
    code: 'Biology',
    name: 'Biology Olympiad',
    grades: 'Grades 6–10',
    blurb: 'Applied life-science reasoning — human biology, ecology and genetics basics — building the concept-first habits NEET Biology rewards years later.',
    meta: [['Track', 'BuzzyBrains enrichment']],
    topics: ['Human Biology', 'Ecology', 'Genetics Basics'],
    outcome: 'Early foundation for NEET Biology',
    color: 'sky',
  },
  {
    id: 'english',
    code: 'English',
    name: 'English Olympiad',
    grades: 'Grades 3–10',
    blurb: 'Grammar, vocabulary, comprehension and verbal reasoning — sharpened through timed, olympiad-style practice rather than textbook drills alone.',
    meta: [['Track', 'SOF IEO-style']],
    topics: ['Grammar', 'Vocabulary', 'Comprehension'],
    outcome: 'Builds the verbal fluency SAT/CLAT reward later',
    color: 'sky',
  },
  {
    id: 'knowledge',
    code: 'GK',
    name: 'General Knowledge Olympiad',
    grades: 'Grades 3–10',
    blurb: 'Current affairs, general awareness and reasoning — a well-rounded, low-pressure track that builds genuine curiosity about the world.',
    meta: [['Track', 'SOF IGKO-style']],
    topics: ['Current Affairs', 'General Awareness'],
    outcome: 'Broadens awareness beyond the classroom',
    color: 'sky',
  },
  {
    id: 'commerce',
    code: 'Commerce',
    name: 'Commerce Olympiad',
    grades: 'Grades 8–10',
    blurb: "BuzzyBrains' structured enrichment track introducing core commerce concepts — accounting basics, business studies and economics fundamentals — ahead of Grade 11 stream choice.",
    meta: [['Track', 'BuzzyBrains enrichment']],
    topics: ['Business Basics', 'Accounting Fundamentals'],
    outcome: 'Head start before Grade 11 Commerce stream',
    color: 'amber',
  },
  {
    id: 'financial-literacy',
    code: 'Fin. Literacy',
    name: 'Financial Literacy Olympiad',
    grades: 'Grades 6–10',
    blurb: 'Practical money-management reasoning — budgeting, saving, interest and basic financial decision-making — taught through olympiad-style applied problems.',
    meta: [['Track', 'BuzzyBrains enrichment']],
    topics: ['Budgeting', 'Interest & Growth', 'Financial Decisions'],
    outcome: 'Real-world financial reasoning skill',
    color: 'amber',
  },
  {
    id: 'economics',
    code: 'Economics',
    name: 'Economics Olympiad',
    grades: 'Grades 8–10',
    blurb: "An introduction to economic thinking — demand, supply, markets and basic macro concepts — structured as preparation for CUET/board Economics and future Commerce-stream study.",
    meta: [['Track', 'BuzzyBrains enrichment']],
    topics: ['Microeconomics Basics', 'Macroeconomics Basics'],
    outcome: 'Foundation for board & CUET Economics',
    color: 'amber',
  },
  {
    id: 'physics',
    code: 'Physics',
    name: 'Physics Olympiad',
    grades: 'Grades 8–10',
    blurb: 'Applied problem-solving in mechanics, light and basic electricity — building the conceptual habits that JEE and NEET Physics reward years later. Grades 9-12 aiming for NSEP, INPhO, F=ma or BPhO should see our dedicated Physics Olympiad program.',
    meta: [['Track', 'BuzzyBrains enrichment']],
    topics: ['Mechanics', 'Light & Optics', 'Basic Electricity'],
    outcome: 'Early foundation for JEE/NEET Physics',
    color: 'sky',
    href: '/physics-olympiad-coaching-pune',
  },
  {
    id: 'chemistry',
    code: 'Chemistry',
    name: 'Chemistry Olympiad',
    grades: 'Grades 8–10',
    blurb: 'Structured, applied chemistry problem-solving across basic chemical concepts — a concept-first runway into JEE/NEET Chemistry.',
    meta: [['Track', 'BuzzyBrains enrichment']],
    topics: ['Basic Chemical Concepts', 'Applied Reasoning'],
    outcome: 'Early foundation for JEE/NEET Chemistry',
    color: 'sky',
  },
  {
    id: 'nsejs',
    code: 'NSEJS',
    name: 'National Standard Examination in Junior Science',
    grades: 'Grades 9–10',
    blurb: 'Conducted by IAPT, NSEJS is a genuine national-level science exam — a serious stepping stone toward the NSE senior-science pipeline (Physics, Chemistry, Biology, Astronomy) in Grades 11–12.',
    meta: [['Conducted by', 'IAPT'], ['Level', 'National']],
    topics: ['Physics', 'Chemistry', 'Biology'],
    outcome: 'Gateway to NSEP / NSEC / NSEB in Grade 11–12',
    color: 'brand',
  },
  {
    id: 'homi-bhabha',
    code: 'Homi Bhabha',
    name: 'Homi Bhabha Balvaidnyanik Spardha',
    grades: 'Grades 6 & 9 (Maharashtra)',
    blurb: 'A well-known Maharashtra state science talent search exam, held annually for Grade 6 and Grade 9 students — a strong, locally-relevant option for Pune students building a science profile.',
    meta: [['Level', 'Maharashtra State'], ['Grades', '6 & 9 only']],
    topics: ['General Science', 'Applied Reasoning'],
    outcome: 'Respected Maharashtra state science credential',
    color: 'amber',
  },
];

export const sofOlympiadRoadmap = [
  {
    step: '01',
    title: 'Diagnostic Assessment',
    desc: 'A short, subject-wise diagnostic across the tracks your child is interested in, to see where they genuinely stand before building a plan.',
  },
  {
    step: '02',
    title: 'Concept Foundation',
    desc: 'Structured sessions covering the core concepts each track actually tests — not just school revision, but applied, olympiad-style thinking.',
  },
  {
    step: '03',
    title: 'Guided Practice Sets',
    desc: 'Curated practice questions sorted by topic and difficulty, reviewed individually since every batch is capped at 12 students.',
  },
  {
    step: '04',
    title: 'Timed Mock Tests',
    desc: 'Full-length mocks in the real exam format, so exam day never feels unfamiliar — with scores shared after every attempt.',
  },
  {
    step: '05',
    title: 'Exam-Day Readiness',
    desc: 'Final revision, pacing strategy and last-mile practice tuned to the specific olympiad your child is sitting.',
  },
];

export const sofOlympiadFaqs = [
  {
    q: 'Can my child do more than one olympiad track at the same time?',
    a: 'Yes — most students combine 2–3 tracks (commonly Maths, Science and English) since sessions are structured to avoid overloading a single week, and the reasoning skills genuinely reinforce each other across subjects.',
  },
  {
    q: 'Is NSEJS the same as a Science Olympiad like NSO?',
    a: 'No — NSEJS (National Standard Examination in Junior Science), conducted by IAPT, is a more rigorous national-level exam for Grades 9–10 that leads into the NSE senior-science pipeline, distinct from broader school-level science olympiads aimed at younger grades.',
  },
  {
    q: 'What age or grade should a child start olympiad prep?',
    a: 'Grade 3 is a comfortable, low-pressure starting point for Maths, Science, English and GK tracks. Commerce, Financial Literacy, Economics, Physics and Chemistry tracks are better suited from Grade 8 onward, once foundational concepts are in place.',
  },
  {
    q: 'How big are the batches?',
    a: 'Every batch is capped at a maximum of 12 students across all tracks, so mentors can give individual attention rather than teaching to the average of a large classroom.',
  },
  {
    q: 'Is coaching available online, offline, or both?',
    a: 'Both. Our Amanora, Hadapsar campus runs live in-person batches with smart digital boards, and the same curriculum is available live online.',
  },
];

// ============ IOQM — dedicated page ============
export const ioqmTopicTracks: Track[] = [
  {
    id: 'number-theory',
    code: 'Topic',
    name: 'Number Theory',
    grades: 'Core IOQM area',
    blurb: 'Divisibility, modular arithmetic, prime factorization and Diophantine-style integer problems — one of the most heavily-weighted areas on the actual paper.',
    meta: [['Weight', 'High']],
    topics: ['Divisibility', 'Modular Arithmetic', 'Primes'],
    outcome: 'Frequently 8-10 of the 30 questions',
    color: 'brand',
  },
  {
    id: 'algebra',
    code: 'Topic',
    name: 'Algebra',
    grades: 'Core IOQM area',
    blurb: 'Polynomials, inequalities, functional equations, and sequences at a level well beyond school textbooks.',
    meta: [['Weight', 'High']],
    topics: ['Polynomials', 'Inequalities', 'Sequences'],
    outcome: 'Builds directly toward INMO-level algebra',
    color: 'sky',
  },
  {
    id: 'geometry',
    code: 'Topic',
    name: 'Geometry',
    grades: 'Core IOQM area',
    blurb: 'Synthetic Euclidean geometry, angle chasing and circle theorems, used as a problem-solving tool rather than a formula list.',
    meta: [['Weight', 'Medium-High']],
    topics: ['Angle Chasing', 'Circle Theorems', 'Coordinate Geometry'],
    outcome: 'Often the most time-consuming section',
    color: 'amber',
  },
  {
    id: 'combinatorics',
    code: 'Topic',
    name: 'Combinatorics',
    grades: 'Core IOQM area',
    blurb: 'Counting principles, the pigeonhole principle, and structured "how many ways" problems that require a proof-like argument, not just a formula.',
    meta: [['Weight', 'Medium']],
    topics: ['Counting', 'Pigeonhole Principle', 'Casework'],
    outcome: 'Rewards structured, careful reasoning',
    color: 'brand',
  },
];

export const ioqmFaqs = [
  {
    q: 'Who conducts IOQM and who is eligible?',
    a: 'IOQM (Indian Olympiad Qualifier in Mathematics) is conducted by the Mathematics Teachers’ Association (India) under the guidance of HBCSE, and is open to students in Classes 8 through 12.',
  },
  {
    q: 'What is the exact format of IOQM?',
    a: 'A 3-hour, 30-question paper where every answer is a non-negative integer. There are no multiple-choice options, no partial credit for a right method with a wrong final number, and no negative marking.',
  },
  {
    q: 'What happens after clearing IOQM?',
    a: 'Students who clear the IOQM cutoff qualify for INMO (Indian National Mathematical Olympiad). Strong INMO performers are then invited to selection camps (IMOTC) that eventually determine India’s team for the International Mathematical Olympiad (IMO).',
  },
  {
    q: 'Is IOQM only for students already strong in maths?',
    a: 'No — it rewards trained problem-solving more than raw talent. Students with a solid school-maths foundation who put in structured olympiad practice consistently outperform naturally "quick" students who prepare only in the last few weeks.',
  },
  {
    q: 'How big are the batches?',
    a: 'Every batch is capped at a maximum of 12 students, so every student’s written solutions are reviewed individually, not just the final answer.',
  },
  {
    q: 'When should a student start preparing?',
    a: 'For a Class 9 or 10 student starting from a strong school-maths base, six to nine months of structured olympiad-style problem sets is a realistic runway to a competitive IOQM score.',
  },
];

// ============ SOF Olympiads — dedicated page ============
export const sofExamTracks: Track[] = [
  {
    id: 'sof-imo',
    code: 'IMO',
    name: 'SOF International Mathematics Olympiad',
    grades: 'Grades 1–12',
    blurb: "SOF's flagship maths olympiad, and the most widely taken school-level maths competition in India — applied number sense and logic, multiple-choice format.",
    meta: [['Subject', 'Mathematics'], ['Format', 'Multiple choice']],
    topics: ['Number Sense', 'Reasoning', 'Applied Arithmetic'],
    outcome: 'Strong first step into competitive maths',
    color: 'brand',
  },
  {
    id: 'sof-nso',
    code: 'NSO',
    name: 'SOF National Science Olympiad',
    grades: 'Grades 1–12',
    blurb: 'Applied science reasoning across Physics, Chemistry and Biology concepts, built for curiosity and speed rather than rote memorization.',
    meta: [['Subject', 'Science'], ['Format', 'Multiple choice']],
    topics: ['General Science', 'Applied Reasoning'],
    outcome: 'Strong base for NEET/JEE-track science later',
    color: 'sky',
  },
  {
    id: 'sof-ieo',
    code: 'IEO',
    name: 'SOF International English Olympiad',
    grades: 'Grades 1–12',
    blurb: 'Grammar, vocabulary, comprehension and verbal reasoning, sharpened through timed, olympiad-style practice.',
    meta: [['Subject', 'English'], ['Format', 'Multiple choice']],
    topics: ['Grammar', 'Vocabulary', 'Comprehension'],
    outcome: 'Builds the verbal fluency SAT/CLAT reward later',
    color: 'amber',
  },
  {
    id: 'sof-igko',
    code: 'IGKO',
    name: 'SOF International General Knowledge Olympiad',
    grades: 'Grades 1–10',
    blurb: 'Current affairs, general awareness and reasoning — a well-rounded, low-pressure track that builds genuine curiosity about the world.',
    meta: [['Subject', 'General Knowledge'], ['Format', 'Multiple choice']],
    topics: ['Current Affairs', 'General Awareness'],
    outcome: 'Broadens awareness beyond the classroom',
    color: 'brand',
  },
  {
    id: 'sof-nco',
    code: 'NCO',
    name: 'SOF National Cyber Olympiad',
    grades: 'Grades 1–12',
    blurb: "SOF's computer and cyber-awareness olympiad — computer fundamentals, internet safety and logical reasoning, building the digital literacy foundation every student needs today.",
    meta: [['Subject', 'Computers / Cyber'], ['Format', 'Multiple choice']],
    topics: ['Computer Basics', 'Cyber Safety', 'Logical Reasoning'],
    outcome: 'Early foundation for our Code Ninja program',
    color: 'sky',
  },
  {
    id: 'sof-isso',
    code: 'ISSO',
    name: 'SOF International Social Studies Olympiad',
    grades: 'Grades 3–10',
    blurb: 'History, Geography, Civics and current events, tested through applied reasoning rather than rote dates and definitions.',
    meta: [['Subject', 'Social Studies'], ['Format', 'Multiple choice']],
    topics: ['History', 'Geography', 'Civics'],
    outcome: 'Builds well-rounded general awareness',
    color: 'amber',
  },
];

export const sofExamFaqs = [
  {
    q: 'What exactly is SOF, and which exams does it run?',
    a: 'The Science Olympiad Foundation (SOF) is one of India’s most widely taken school-olympiad bodies, running IMO (Mathematics), NSO (Science), IEO (English), NCO (Computers / Cyber), IGKO (General Knowledge) and ISSO (Social Studies) for Grades 1-12, all in a multiple-choice format.',
  },
  {
    q: 'How is SOF different from IOQM or NMTC?',
    a: 'SOF exams are broad, accessible, multiple-choice tests open from Grade 1, designed as a strong entry point into competitive thinking. IOQM and NMTC are far more rigorous, written/integer-answer exams for Grades 8-12 that feed India’s national olympiad pipeline. Many students use SOF exams as an early foundation before moving into IOQM-level preparation.',
  },
  {
    q: 'Can a child attempt more than one SOF exam in the same year?',
    a: 'Yes — most students combine 2-3 SOF tracks (commonly IMO and NSO) since the exams run on separate dates and the underlying reasoning skills reinforce each other.',
  },
  {
    q: 'How big are the batches?',
    a: 'Every batch is capped at a maximum of 12 students, so mentors can review each student’s specific gaps individually.',
  },
  {
    q: 'Is coaching available online, offline, or both?',
    a: 'Both. Our Amanora, Hadapsar campus runs live in-person batches with smart digital boards, and the same curriculum is available live online.',
  },
];

// ============ NMTC — dedicated page ============
export const nmtcLevelTracks: Track[] = [
  {
    id: 'primary',
    code: 'Level',
    name: 'Primary',
    grades: 'Class 5',
    blurb: 'Arithmetic reasoning, logic puzzles and pattern recognition — an accessible first taste of proof-and-reasoning mathematics.',
    meta: [['Class', '5'], ['Format', 'Part A + Part B']],
    topics: ['Arithmetic', 'Logic', 'Patterns'],
    outcome: 'A gentle, structured first olympiad',
    color: 'brand',
  },
  {
    id: 'sub-junior',
    code: 'Level',
    name: 'Sub-Junior',
    grades: 'Class 6–7',
    blurb: 'Elementary geometry and number properties enter the syllabus, alongside longer, multi-step reasoning problems.',
    meta: [['Class', '6–7'], ['Format', 'Part A + Part B']],
    topics: ['Number Properties', 'Elementary Geometry'],
    outcome: 'Builds toward Junior-level rigor',
    color: 'sky',
  },
  {
    id: 'junior',
    code: 'Level',
    name: 'Junior',
    grades: 'Class 8–9',
    blurb: 'Early algebra, number theory and combinatorics appear — the same skills IOQM rewards from Class 8 onward.',
    meta: [['Class', '8–9'], ['Format', 'Part A + Part B']],
    topics: ['Algebra', 'Number Theory', 'Combinatorics'],
    outcome: 'Directly reinforces IOQM preparation',
    color: 'amber',
  },
  {
    id: 'inter',
    code: 'Level',
    name: 'Inter',
    grades: 'Class 10–11',
    blurb: 'Genuine proof-writing begins — functional equations, modular arithmetic and synthetic geometry proofs, not just angle chasing.',
    meta: [['Class', '10–11'], ['Format', 'Part A + Part B']],
    topics: ['Proof Writing', 'Modular Arithmetic', 'Geometry'],
    outcome: 'Close to INMO-level rigor',
    color: 'brand',
  },
  {
    id: 'senior',
    code: 'Level',
    name: 'Senior',
    grades: 'Class 11–12',
    blurb: 'NMTC at its most demanding — multi-step proofs graded on rigor and completeness, the closest AMTI gets to INMO-style evaluation.',
    meta: [['Class', '11–12'], ['Format', 'Part A + Part B']],
    topics: ['Inequalities', 'Diophantine Equations', 'Casework'],
    outcome: 'Serious INMO-track practice',
    color: 'sky',
  },
];

export const nmtcFaqs = [
  {
    q: 'Who conducts NMTC and what does it test?',
    a: 'NMTC (National Mathematics Talent Contest) is conducted by AMTI (Association of Mathematics Teachers of India) across five levels — Primary, Sub-Junior, Junior, Inter and Senior — through a two-part paper: Part A (objective/short answer) and Part B (full written solutions).',
  },
  {
    q: 'Which level should my child attempt?',
    a: 'NMTC levels map directly to class: Primary (Class 5), Sub-Junior (Class 6-7), Junior (Class 8-9), Inter (Class 10-11) and Senior (Class 11-12). Your child attempts the level matching their current class.',
  },
  {
    q: 'How is NMTC different from IOQM?',
    a: 'NMTC is open from Class 5 with a written Part B at every level, building proof-writing skill gradually. IOQM is a Class 8-12, integer-answer-only exam with no written component. Many students use NMTC as an early foundation before IOQM becomes available in Class 8.',
  },
  {
    q: 'How big are the batches?',
    a: 'Every batch is capped at a maximum of 12 students, so written Part B solutions can be reviewed individually rather than just answer-checked.',
  },
  {
    q: 'Is coaching available online, offline, or both?',
    a: 'Both. Our Amanora, Hadapsar campus runs live in-person batches with smart digital boards, and the same curriculum is available live online.',
  },
];

// ============ AMC 8/10 — dedicated page ============
export const amcTracks: Track[] = [
  {
    id: 'amc-8',
    code: 'AMC 8',
    name: 'American Mathematics Competition 8',
    grades: 'Grades 6–8 (under 14.5 yrs)',
    blurb: 'A fast, elegant entry point to US competition mathematics — 25 questions in 40 minutes, no negative marking, building speed and pattern recognition.',
    meta: [['Format', 'Multiple choice'], ['Time', '40 minutes']],
    topics: ['Arithmetic', 'Pre-Algebra', 'Basic Geometry'],
    outcome: 'Builds the base for AMC 10',
    color: 'brand',
  },
  {
    id: 'amc-10',
    code: 'AMC 10',
    name: 'American Mathematics Competition 10',
    grades: 'Grades 9–10 (under 17.5 yrs)',
    blurb: 'The proving ground for AIME qualification — 25 questions, 75 minutes, with a scoring system where blind guessing is a losing strategy.',
    meta: [['Format', 'Multiple choice'], ['Time', '75 minutes']],
    topics: ['Algebra II', 'Geometry', 'Probability'],
    outcome: 'Qualifying score → AIME → USAMO',
    color: 'sky',
  },
  {
    id: 'aime-pathway',
    code: 'Next Step',
    name: 'AIME & Beyond',
    grades: 'By invitation',
    blurb: 'A strong AMC 10/12 score earns an AIME invitation — 15 integer-answer questions in 3 hours, the closest US equivalent to IOQM-level derivation.',
    meta: [['Format', 'Integer answer'], ['Time', '3 hours']],
    topics: ['AIME', 'USAMO', 'USAJMO'],
    outcome: 'The top of the AMC pipeline',
    color: 'amber',
  },
];

export const amcFaqs = [
  {
    q: 'What is the difference between AMC 8 and AMC 10?',
    a: 'AMC 8 is for Grade 6-8 students (under 14.5 years) — 25 questions in 40 minutes, no negative marking. AMC 10 is for Grade 9-10 students (under 17.5 years) — 25 questions in 75 minutes, with a scoring system (6 for correct, 1.5 for blank, 0 for wrong) where a strong score qualifies for AIME.',
  },
  {
    q: 'Should my child take AMC 10A or AMC 10B?',
    a: 'The MAA runs two AMC 10 papers each year, roughly two weeks apart, and a student may sit both — the better of the two scores counts toward AIME qualification, so most serious students attempt both if the schedule allows.',
  },
  {
    q: 'Is AMC open to Indian students?',
    a: 'Yes — AMC 8, AMC 10 and AMC 12 are administered at registered international test centers, including in India, and are open to students worldwide regardless of nationality.',
  },
  {
    q: 'How does AMC connect to IOQM?',
    a: 'They are distinct pipelines that reward overlapping skills — IOQM feeds India\'s INMO/IMO pipeline, while AMC feeds AIME/USAMO. Many students prepare for both in parallel since the core mathematical skill transfers directly.',
  },
  {
    q: 'How big are the batches?',
    a: 'Every batch is capped at a maximum of 12 students, so mentors can review pacing and question-selection strategy individually, not just final scores.',
  },
];

// ============ Math Kangaroo — dedicated page ============
export const kangarooTracks: Track[] = [
  {
    id: 'ecolier',
    code: 'Levels',
    name: 'Pre-Ecolier & Ecolier',
    grades: 'Grades 1–4',
    blurb: 'The youngest Kangaroo levels — playful, visual, logic-driven questions that build number sense without any formal olympiad pressure.',
    meta: [['Grades', '1–4'], ['Format', 'Multiple choice']],
    topics: ['Number Sense', 'Visual Logic', 'Patterns'],
    outcome: 'A joyful first competition-maths experience',
    color: 'brand',
  },
  {
    id: 'benjamin-cadet',
    code: 'Levels',
    name: 'Benjamin & Cadet',
    grades: 'Grades 5–8',
    blurb: 'Applied arithmetic, early geometry and clever multi-step reasoning — the level where Kangaroo starts feeling like real competition maths.',
    meta: [['Grades', '5–8'], ['Format', 'Multiple choice']],
    topics: ['Applied Arithmetic', 'Geometry', 'Logic'],
    outcome: 'A natural bridge to AMC 8 / IOQM',
    color: 'amber',
  },
  {
    id: 'junior-student',
    code: 'Levels',
    name: 'Junior & Student',
    grades: 'Grades 9–12',
    blurb: 'The most advanced Kangaroo levels — algebra, geometry and combinatorics applied cleverly under real time pressure.',
    meta: [['Grades', '9–12'], ['Format', 'Multiple choice']],
    topics: ['Algebra', 'Combinatorics', 'Geometry'],
    outcome: 'Sharpens speed alongside IOQM/AMC prep',
    color: 'sky',
  },
];

export const kangarooFaqs = [
  {
    q: 'What are the Math Kangaroo levels?',
    a: 'Math Kangaroo runs six levels by grade: Pre-Ecolier and Ecolier (Grades 1-4), Benjamin and Cadet (Grades 5-8), and Junior and Student (Grades 9-12) — each with its own paper, tuned to that age group.',
  },
  {
    q: 'Is there negative marking in Math Kangaroo?',
    a: 'Scoring policy can vary slightly by country and administering body, but Math Kangaroo is generally designed to be low-pressure and encourage genuine attempts — we teach students the specific scoring rules for their exact paper as part of preparation.',
  },
  {
    q: 'Is Math Kangaroo a good first olympiad?',
    a: 'Yes — it\'s one of the most accessible, low-pressure entry points into competition mathematics, with no eligibility barriers and a playful question style, making it a strong first step before AMC 8, SOF IMO or IOQM-track preparation.',
  },
  {
    q: 'How big are the batches?',
    a: 'Every batch is capped at a maximum of 12 students, so mentors can tailor practice to exactly where each student is starting from.',
  },
  {
    q: 'Is coaching available online, offline, or both?',
    a: 'Both. Our Amanora, Hadapsar campus runs live in-person batches with smart digital boards, and the same curriculum is available live online.',
  },
];

// ============ Physics Olympiad — dedicated page ============
// India's official pipeline (IOQP = NSEP + INPhO -> OCSC -> PDC -> IPhO,
// run jointly by IAPT and HBCSE-TIFR) is covered separately via
// physicsIndianPathway below. This tracks the "top 5 abroad" comparison —
// IPhO itself (global context) plus the four programs worth a serious
// Indian student's attention. Eligibility is stated exactly as verified:
// F=ma/USAPhO needs a US school/citizenship; APhO is strictly country-team
// registration with no individual entry at all; EuPhO allows guest teams
// but still through national coordination, not open individual signup.
// Always re-verify dates/eligibility against the current-year bulletin —
// these change yearly and nothing here should be treated as permanent.
export const physicsOlympiadTracks: Track[] = [
  {
    id: 'ipho',
    code: 'Global',
    name: 'IPhO',
    grades: 'Grades 11–12',
    blurb:
      "The pinnacle — roughly 90+ countries, 5 students each, ~9–10 days of 5-hour theory and 5-hour experimental papers. India's only route in is the IOQP pipeline: NSEP + INPhO, then OCSC, then the Pre-Departure Camp.",
    meta: [['Countries', '90+'], ['Format', 'Theory + Experimental']],
    topics: ['Full Syllabus', 'Multi-Concept Derivation', 'Experimental Design'],
    outcome: "The route runs entirely through India's own IOQP pipeline",
    color: 'brand',
  },
  {
    id: 'f-ma-usapho',
    code: 'USA · AAPT',
    name: 'F=ma / USAPhO',
    grades: 'Grades 11–12',
    blurb:
      'The mechanics-only exam that opens the U.S. Physics Team pipeline — 25 multiple-choice questions in 75 minutes, then top scorers sit the 3-hour free-response USAPhO. Official registration needs a U.S. school or citizenship, so we train in its exact problem style as an internationally benchmarked practice track, not a direct entry point from India.',
    meta: [['Format', '25 MCQ, 75 min'], ['Focus', 'Mechanics only']],
    topics: ['Kinematics', 'Newtonian Mechanics', 'Energy & Momentum', 'Rotational Motion'],
    outcome: 'The world\'s most emulated mechanics benchmark',
    color: 'amber',
  },
  {
    id: 'bpho',
    code: 'UK · Oxford',
    name: 'British Physics Olympiad',
    grades: 'Grades 11–12',
    blurb:
      "The UK's premier physics competition and a genuine Oxbridge admissions signal, run out of the University of Oxford. Questions build on A-Level physics but apply it in unfamiliar, calculus-heavy ways. International/overseas schools register by contacting BPhO directly — it isn't a self-serve individual signup.",
    meta: [['Round', 'BPhO Round 1 + 2'], ['Entry', 'Via overseas school']],
    topics: ['Applied Mechanics', 'Thermal Physics', 'Astrophysics', 'Unfamiliar Problem-Solving'],
    outcome: 'A strong signal for UK & Ivy League applications',
    color: 'sky',
  },
  {
    id: 'apho',
    code: 'Asia-Pacific',
    name: 'Asian Physics Olympiad (APhO)',
    grades: 'Grades 11–12',
    blurb:
      "A regional feeder for IPhO-level talent across Asia-Pacific — up to 8 students and 2 leaders per country. Entry is exclusively through each country's own national selection process; there is no individual or independent registration route.",
    meta: [['Entry', 'Country team only'], ['Team size', 'Up to 8 students']],
    topics: ['Regional IPhO-Style Problems', 'Theory + Experimental'],
    outcome: 'A benchmark for where regional talent stands',
    color: 'brand',
  },
  {
    id: 'eupho',
    code: 'Europe + Guests',
    name: 'European Physics Olympiad (EuPhO)',
    grades: 'Under 21 as of June 30',
    blurb:
      'A fast-growing, IPhO-format competition that welcomes guest teams from outside Europe alongside official European teams — each country sends one team of up to 5, coordinated nationally rather than through open individual entry.',
    meta: [['Guest teams', 'Welcome'], ['Age cap', 'Under 21, June 30']],
    topics: ['IPhO-Format Theory Problems', 'Multi-Step Derivation'],
    outcome: 'The most accessible of the three team-based olympiads abroad',
    color: 'sky',
  },
];

// Bonus card: not a school-selected olympiad, genuinely open online — for
// students who've already outgrown the tracks above.
export const physicsCupBonus = {
  name: 'Physics Cup',
  organizer: 'Jaan Kalda, Tallinn University of Technology (Estonia)',
  blurb:
    'An online problem set, harder than EuPhO, APhO or even IPhO by design — the training material serious IPhO medalists use to sharpen further. Genuinely open online entry, no school or federation gatekeeping. Only worth attempting once the five tracks above feel comfortable.',
};

// Real, named student achievements — confirmed by Dilip Sir. Add to this
// list as more are confirmed; do not invent entries.
export const physicsStudentAchievements = [
  {
    name: 'Aditya Raj',
    school: "Bishop's School",
    achievement: 'Selected in SOF Science Olympiad, Level 2',
  },
  {
    name: 'Rohini Agarwal',
    school: 'HDFC School',
    achievement: 'Selected in SOF Science Olympiad',
  },
];

// Explicit, table-shaped fields for the comparison table — kept separate
// from physicsOlympiadTracks' `meta` tuples, which are ordered for each
// track's own card display rather than a shared table schema.
export const physicsAbroadComparison = [
  {
    id: 'ipho',
    name: 'IPhO',
    region: 'Global (90+ countries)',
    format: '5 hrs theory + 5 hrs experimental',
    eligibility: "Via India's own IOQP pipeline only",
    idealFor: "Students already through India's OCSC selection",
  },
  {
    id: 'f-ma-usapho',
    name: 'F=ma / USAPhO',
    region: 'USA (AAPT)',
    format: '25 MCQ (75 min) → free-response USAPhO',
    eligibility: 'U.S. citizens/residents or U.S.-school students only',
    idealFor: 'Benchmarking mechanics, even without eligibility',
  },
  {
    id: 'bpho',
    name: 'British Physics Olympiad',
    region: 'UK (University of Oxford)',
    format: 'BPhO Round 1 + Round 2',
    eligibility: 'Overseas schools register directly with BPhO',
    idealFor: 'UK & Ivy League admissions signal',
  },
  {
    id: 'apho',
    name: 'Asian Physics Olympiad',
    region: 'Asia-Pacific',
    format: 'Theory + experimental, IPhO-style',
    eligibility: 'Country team only — no individual entry',
    idealFor: 'Benchmarking against regional talent',
  },
  {
    id: 'eupho',
    name: 'European Physics Olympiad',
    region: 'Europe + guest teams',
    format: 'IPhO-format theory paper',
    eligibility: 'Guest teams welcome, coordinated nationally, age <21',
    idealFor: 'The most accessible of the three team-based tracks',
  },
];

// India's official pathway — IOQP (combining NSEP + INPhO, run jointly by
// IAPT and HBCSE-TIFR) through to the IPhO team. Duration/date windows are
// deliberately kept soft ("typically", "usually") since exact dates shift
// year to year — always confirm against the current-year HBCSE/IAPT
// bulletin before publishing anything date-specific.
export const physicsIndianPathway = [
  {
    step: '01',
    stage: 'NSEP',
    title: 'National Standard Examination in Physics',
    window: 'Typically held in November',
    format: 'Objective-type paper, run by IAPT',
    covers: 'Class 11–12 physics, science up to Class 10, maths up to Class 12 — the full 19-unit syllabus.',
  },
  {
    step: '02',
    stage: 'INPhO',
    title: 'Indian National Physics Olympiad',
    window: 'Typically held shortly after NSEP',
    format: 'Subjective, derivation-based theory paper, run by HBCSE — together with NSEP this forms the IOQP (Indian Olympiad Qualifier in Physics)',
    covers: 'Deeper, multi-concept problems on the same syllabus — genuine derivation and non-standard reasoning, not recall.',
  },
  {
    step: '03',
    stage: 'OCSC',
    title: 'Orientation-cum-Selection Camp',
    window: 'Typically 3–4 weeks, mid-year',
    format: 'Residential camp at HBCSE, Mumbai, for roughly the top 35 INPhO scorers',
    covers: 'Theory depth plus hands-on experimental physics training, with selection tests throughout the camp.',
  },
  {
    step: '04',
    stage: 'PDC',
    title: 'Pre-Departure Camp',
    window: 'Shortly before IPhO',
    format: 'Final training for the selected 5-member team',
    covers: 'Exam-format drilling and last-mile preparation in the exact IPhO structure.',
  },
  {
    step: '05',
    stage: 'IPhO',
    title: 'International Physics Olympiad',
    window: 'Typically mid-year, host country rotates',
    format: '5 students + 2 leaders, ~9–10 days: 5 hours theory, 5 hours experimental',
    covers: 'The global finale — India competes against 90+ countries.',
  },
];

// Syllabus cross-referenced to which stage/olympiad leans on it hardest —
// powers the accordion breakdown on the page.
export const physicsSyllabusTopics = [
  {
    topic: 'Mechanics',
    detail: 'Kinematics, Newtonian mechanics, energy & momentum, rotational dynamics, oscillations, orbital mechanics, fluids.',
    testedBy: 'F=ma (exclusively), NSEP/INPhO, BPhO, APhO, EuPhO — the single most heavily tested topic across every track.',
  },
  {
    topic: 'Electromagnetism',
    detail: 'Electrostatics, circuits, magnetic fields, electromagnetic induction, Maxwell\'s equations at an introductory level.',
    testedBy: 'INPhO, USAPhO, BPhO, IPhO — a core pillar once a student moves past mechanics-only exams like F=ma.',
  },
  {
    topic: 'Thermodynamics & Heat',
    detail: 'Laws of thermodynamics, kinetic theory, heat engines, entropy.',
    testedBy: 'INPhO, USAPhO, BPhO, IPhO.',
  },
  {
    topic: 'Waves & Optics',
    detail: 'Wave mechanics, interference, diffraction, geometrical and physical optics.',
    testedBy: 'NSEP, INPhO, IPhO.',
  },
  {
    topic: 'Modern & Quantum Physics',
    detail: 'Photoelectric effect, atomic models, introductory quantum mechanics, wave-particle duality.',
    testedBy: 'INPhO, IPhO — appears from Grade 12-level prep onward.',
  },
  {
    topic: 'Relativity & Nuclear Physics',
    detail: 'Special relativity basics, nuclear structure, radioactivity, binding energy.',
    testedBy: 'INPhO, IPhO — typically the last topics introduced in a prep timeline.',
  },
  {
    topic: 'Experimental Skills',
    detail: 'Error analysis, graph-fitting, apparatus handling, designing an experiment from scratch.',
    testedBy: 'OCSC selection tests, IPhO\'s dedicated 5-hour experimental paper.',
  },
  {
    topic: 'Mathematics for Physics',
    detail: 'Calculus fundamentals (differentiation, integration), vectors, differential equations at a basic level.',
    testedBy: 'Required across every stage — the toolkit every olympiad above assumes, not a topic tested on its own.',
  },
];

export const physicsOlympiadFaqs = [
  {
    q: 'What is India\'s official pathway to the IPhO team?',
    a: 'The IOQP (Indian Olympiad Qualifier in Physics) — combining NSEP, run by IAPT, and INPhO, run by HBCSE — is the only route in. Top INPhO scorers attend HBCSE\'s OCSC training camp, and the students selected there go through a Pre-Departure Camp before representing India at the IPhO. There is no alternate route onto India\'s team.',
  },
  {
    q: 'What is the actual difference between NSEP and INPhO?',
    a: 'NSEP is the objective-type first stage, run by IAPT and testing the full syllabus at a recall-and-application level. INPhO is the deeper, subjective second stage, run by HBCSE, demanding genuine derivation and non-standard problem-solving on the same syllabus. Together they form the IOQP.',
  },
  {
    q: 'Can a student in Pune actually register for F=ma or the US Physics Team?',
    a: 'Official F=ma registration requires the student to be a U.S. citizen, U.S. permanent resident, or currently enrolled at a U.S. school — it is not open to students studying purely in India. We teach the exact F=ma problem style anyway, because it is internationally regarded as the sharpest mechanics benchmark available, and it sharpens mechanics for NSEP/INPhO too.',
  },
  {
    q: 'Can an Indian student register individually for APhO or EuPhO?',
    a: 'No, not for APhO — it is exclusively country-team registration, decided by each nation\'s own selection process, with no individual entry route at all. EuPhO is more open in spirit — it accepts guest teams from outside Europe — but participation is still coordinated at a national level, not a self-serve individual signup. We prepare students in these formats as advanced practice regardless.',
  },
  {
    q: 'Which of the five tracks is realistically the most accessible from India?',
    a: 'The British Physics Olympiad, since international schools can register directly by contacting BPhO — no national federation gatekeeping. EuPhO\'s guest-team route is the next most accessible. APhO has no individual path at all, and F=ma/USAPhO is restricted to U.S. citizens, residents or U.S.-school students.',
  },
  {
    q: 'My child has never attempted a physics olympiad before — where do we start?',
    a: 'Every student starts with a diagnostic mechanics mock, since mechanics is the topic every one of these tracks tests hardest, then we build a personal preparation plan from where they actually stand — not a generic syllabus dump.',
  },
  {
    q: 'How early should my child start physics olympiad preparation?',
    a: 'Grade 9 or 10 gives the most runway to build genuine derivation-level mechanics before NSEP becomes relevant in Grade 11. Students starting in Grade 11 can still make real progress, but with a more compressed, mechanics-first timeline.',
  },
  {
    q: 'How big are the batches?',
    a: 'Every batch is capped at a maximum of 12 students — the same limit across every BuzzyBrains Academy program — so mentors can review each student\'s derivations individually, not just final answers.',
  },
  {
    q: 'Is coaching available online, offline, or both?',
    a: 'Both. Our Amanora, Hadapsar campus runs live in-person batches with smart digital boards, and the same curriculum is available live online.',
  },
];
