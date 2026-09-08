export interface FacultyProfile {
  name: string;
  subject: string;
  qualification: string;
  initials: string;
  gradient: string;
  tagline: string;
  bio: string;
  highlights: string[];
  alumniOf: string[];
}

// Every credential, subject and year-of-experience figure here matches what's
// already published on the homepage faculty section and lib/olympiad/data.ts —
// this file adds a deeper marketing bio per mentor, it doesn't invent new facts.
export const FACULTY_PROFILES: FacultyProfile[] = [
  {
    name: 'Dilip Sir',
    subject: 'Mathematics & Physics',
    qualification: 'B.Tech, IIT Kanpur • MBA, IIM Ahmedabad • JEE AIR 400',
    initials: 'DS',
    gradient: 'linear-gradient(135deg,#2563EB,#1D4ED8)',
    tagline: 'Founder & Lead Mentor — 25+ years turning confusion into confidence',
    bio: "Dilip Sir cleared JEE with an All India Rank of 400 before spending 25+ years in technology leadership — then founded BuzzyBrains Academy in 2021 to fix a problem he'd watched play out for years: bright students failing not from lack of ability, but because no one in a 60-student classroom had time to catch their specific gap. He personally teaches Mathematics and Physics, and every program at the academy — from Foundation to JEE to Olympiad — carries his concept-first philosophy: a topic isn't 'done' until a student can explain why it works, not just how to solve it.",
    highlights: [
      'JEE All India Rank 400 — he has personally been through the exam he now coaches for.',
      '25+ years of teaching experience, spanning Foundation through JEE Advanced.',
      'Shapes the concept-first teaching philosophy used across every BuzzyBrains program.',
    ],
    alumniOf: ['IIT Kanpur', 'IIM Ahmedabad'],
  },
  {
    name: 'Agarwal Sir',
    subject: 'Chemistry & Physics',
    qualification: 'PhD, IIT Bombay',
    initials: 'AS',
    gradient: 'linear-gradient(135deg,#10B981,#0D9488)',
    tagline: 'JEE Chemistry & Physics — research rigor applied to exam technique',
    bio: "A PhD from IIT Bombay means Agarwal Sir has spent years being wrong in a lab before being right — and that habit of testing an idea until it actually holds up shapes how he teaches JEE Chemistry and Physics. Where a student might memorize a reaction mechanism or a formula, Agarwal Sir pushes for the derivation underneath it, because that's what survives an unfamiliar JEE Advanced question when memorized shortcuts don't.",
    highlights: [
      'PhD, IIT Bombay — genuine research-level depth in the subjects he teaches.',
      'Known for a sharp, structured, exam-focused approach to JEE Chemistry and Physics.',
      'Demystifies problems that trip up even strong JEE aspirants.',
    ],
    alumniOf: ['IIT Bombay'],
  },
  {
    name: 'Dr. Mrinmayee',
    subject: 'Chemistry',
    qualification: 'PhD, IIT Kharagpur',
    initials: 'MM',
    gradient: 'linear-gradient(135deg,#EC4899,#8B5CF6)',
    tagline: 'JEE & NEET Chemistry — precision without the overwhelm',
    bio: "Organic reaction mechanisms and inorganic exceptions are exactly where JEE and NEET Chemistry scores quietly leak — not from lack of study, but from content that was never made genuinely memorable. Dr. Mrinmayee, a PhD from IIT Kharagpur, brings a research-trained precision to exactly this problem, breaking dense syllabi into the clear, exam-ready concepts that actually stick under exam pressure.",
    highlights: [
      'PhD, IIT Kharagpur — a research-driven approach to teaching Chemistry.',
      'Specializes in making JEE and NEET Chemistry genuinely memorable, not just covered.',
      'Turns the most commonly-confused topics into clear, structured concepts.',
    ],
    alumniOf: ['IIT Kharagpur'],
  },
  {
    name: 'Pooja Madam',
    subject: 'Mathematics',
    qualification: 'B.Tech, IIT Delhi',
    initials: 'PM',
    gradient: 'var(--grad-purple)',
    tagline: 'One-to-one online Mathematics — genuinely personalized, board to Olympiad',
    bio: "Pooja Madam, a B.Tech graduate of IIT Delhi, runs BuzzyBrains Academy's one-to-one online Mathematics coaching for Grades 6-12 — a format built for students who need pacing and depth tailored specifically to them, not a batch average. Her range is genuinely wide: CBSE, ICSE, Cambridge, IGCSE, IB and Olympiad Mathematics, all taught with the same student-centered, conceptual foundation regardless of which board a family is following.",
    highlights: [
      'B.Tech, IIT Delhi, with 5+ years of dedicated one-to-one teaching experience.',
      'Genuinely cross-curriculum: CBSE, ICSE, Cambridge, IGCSE, IB and Olympiad Mathematics.',
      'One-to-one format built around a specific student\'s pace, not a batch average.',
    ],
    alumniOf: ['IIT Delhi'],
  },
  {
    name: 'Dr. Todkar',
    subject: 'Biology',
    qualification: 'General Physician',
    initials: 'DT',
    gradient: 'linear-gradient(135deg,#F59E0B,#D97706)',
    tagline: 'NEET Biology — taught by someone who has practiced the medicine',
    bio: "Most NEET Biology teaching stops at the textbook. Dr. Todkar, a practicing General Physician with 25+ years of medical experience, brings the clinical context that turns an abstract diagram into something a student actually remembers — because they've heard it explained the way an actual doctor thinks about it. That real-world grounding is exactly what NEET's increasingly applied Biology questions reward.",
    highlights: [
      'A practicing General Physician — real clinical insight, not just textbook Biology.',
      '25+ years of medical and teaching experience combined.',
      'Makes NEET Biology memorable through genuine clinical context.',
    ],
    alumniOf: [],
  },
  {
    name: 'Dr. Urmila',
    subject: 'Chemistry & Science',
    qualification: 'PhD, IISER Pune',
    initials: 'DU',
    gradient: 'var(--grad-sky)',
    tagline: 'Chemistry & Science — a top-rated mentor for rock-solid fundamentals',
    bio: "A PhD from IISER Pune — one of India's premier research institutes — gives Dr. Urmila a depth in Chemistry and Science that goes well beyond exam syllabi, and she uses it patiently, building fundamentals so solid that a student can apply them to a question they've genuinely never seen before, not just the ones they've practiced.",
    highlights: [
      'PhD, IISER Pune — genuine research-institute depth in Chemistry and Science.',
      'A patient, top-rated mentor known for rock-solid conceptual fundamentals.',
      'Builds understanding that transfers to unfamiliar questions, not memorized patterns.',
    ],
    alumniOf: ['IISER Pune'],
  },
  {
    name: 'Dipak JK Sir',
    subject: 'Mathematics — Olympiad Specialist',
    qualification: 'M.Tech, IIT Bombay • GATE-Qualified • B.E. (Mechanical)',
    initials: 'DJ',
    gradient: 'linear-gradient(135deg,#7C3AED,#6D28D9)',
    tagline: "India's national olympiad pipeline and the American ladder, coached since 2010",
    bio: "Since 2010, Dipak JK Sir has coached students through India's exact national maths olympiad pipeline — IOQM into RMO into INMO into the IMO training camp — alongside the American Mathematics Competitions ladder: AMC 8, AMC 10, AMC 12, AIME and USAMO. That's genuinely rare dual-track depth, and it means a student doesn't need a different mentor for each olympiad track they attempt as their level rises.",
    highlights: [
      'M.Tech (Design Engineering), IIT Bombay, GATE-qualified, B.E. (Mechanical).',
      '15+ years coaching the IOQM → RMO → INMO → IMO pipeline, since 2010.',
      'Also coaches AMC 8/10/12, AIME and USAMO — a genuinely dual-track specialist.',
    ],
    alumniOf: ['IIT Bombay'],
  },
  {
    name: 'Priya Madam',
    subject: 'Biology',
    qualification: 'B.E., Pune University',
    initials: 'PM',
    gradient: 'var(--grad-red)',
    tagline: 'Biology, taught with detail and genuine curiosity',
    bio: "Priya Madam's Biology classes are built around a simple idea: curiosity sticks better than repetition. Her engaging, detail-oriented teaching style is known specifically for building deep conceptual clarity — students leave understanding why a biological process works the way it does, which is exactly the depth NEET's application-style questions reward.",
    highlights: [
      'B.E., Pune University.',
      'Known for building deep conceptual clarity, not just content coverage.',
      'Builds genuine curiosity about Biology, not rote memorization.',
    ],
    alumniOf: ['Pune University'],
  },
  {
    name: 'Shivangi Madam',
    subject: 'Science',
    qualification: 'B.E., Pune University',
    initials: 'SM',
    gradient: 'linear-gradient(135deg,#6366F1,#4338CA)',
    tagline: 'Science, made hands-on and confidence-building for young minds',
    bio: "Shivangi Madam teaches the Grades where a student either falls in love with Science or quietly decides it's not for them — and her enthusiastic, hands-on approach is built specifically to make it the former. Foundation-stage Science taught well here becomes the base every later Olympiad, JEE and NEET Science subject builds on.",
    highlights: [
      'B.E., Pune University.',
      'An enthusiastic, encouraging mentor for Foundation-stage Science.',
      'Makes learning hands-on and confidence-building for young students.',
    ],
    alumniOf: ['Pune University'],
  },
  {
    name: 'Arun Sir',
    subject: 'Mathematics',
    qualification: 'M.Sc. Mathematics',
    initials: 'AR',
    gradient: 'var(--grad-amber)',
    tagline: 'Grade 6 to Engineering Mathematics — one mentor across the full range',
    bio: "With an M.Sc. in Mathematics and 12+ years of teaching experience, Arun Sir has taught the full range from Grade 6 fundamentals through Engineering Mathematics — across every board a family might be following, plus Maths Olympiad coaching. That breadth means a student's Mathematics mentor doesn't need to change every time they move up a grade or a difficulty level.",
    highlights: [
      'M.Sc. Mathematics, with 12+ years of teaching experience.',
      'Has taught Grade 6 through Engineering Mathematics — genuinely full-range.',
      'Teaches across all boards, including Maths Olympiad coaching.',
    ],
    alumniOf: [],
  },
];
