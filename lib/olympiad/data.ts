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
    role: 'Founder & Lead Mentor — Foundation & Advanced Mathematics',
    creds: 'B.Tech, IIT Kanpur • MBA, IIM Ahmedabad • JEE AIR 400',
    badge: '25+ yrs experience',
  },
  {
    name: 'Kamble Sir',
    role: 'IOQM / AMC-8 / AMC-10 / AMC-12 Coach',
    creds: 'M.Tech, IIT Bombay',
    badge: 'Olympiad specialist',
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
    blurb: 'Applied problem-solving in mechanics, light and basic electricity — building the conceptual habits that JEE and NEET Physics reward years later.',
    meta: [['Track', 'BuzzyBrains enrichment']],
    topics: ['Mechanics', 'Light & Optics', 'Basic Electricity'],
    outcome: 'Early foundation for JEE/NEET Physics',
    color: 'sky',
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
];

export const sofExamFaqs = [
  {
    q: 'What exactly is SOF, and which exams does it run?',
    a: 'The Science Olympiad Foundation (SOF) is one of India’s most widely taken school-olympiad bodies, running IMO (Mathematics), NSO (Science), IEO (English) and IGKO (General Knowledge) for Grades 1-12, all in a multiple-choice format.',
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
