import type { BlogCategory } from './posts';

export interface CategoryContent {
  /** SEO <title> — kept under ~60 chars before the site suffix. */
  metaTitle: string;
  /** SEO meta description — 150-160 chars, written as a direct answer. */
  metaDescription: string;
  /** On-page H1 — can differ slightly from metaTitle for readability. */
  h1: string;
  /** AEO "quick answer" — a self-contained 40-70 word answer to "What is
   * [category] at BuzzyBrains Academy?", written to be lifted directly into
   * an AI Overview or featured snippet without needing surrounding context. */
  quickAnswer: string;
  /** 1-2 supporting paragraphs giving context beneath the quick answer. */
  intro: string[];
  /** Category-specific FAQs, each independently answerable (AEO). */
  faqs: { question: string; answer: string }[];
}

export const CATEGORY_CONTENT: Record<BlogCategory, CategoryContent> = {
  'iit-jee': {
    metaTitle: 'IIT-JEE Preparation Guides — JEE Main & Advanced',
    metaDescription:
      'Honest, concept-first IIT-JEE guides covering JEE Main vs Advanced, NCERT strategy, subject balance, mock-test review, dropper years and realistic percentile-to-college expectations.',
    h1: 'IIT-JEE Preparation Guides',
    quickAnswer:
      'These are BuzzyBrains Academy\'s IIT-JEE guides — practical, concept-first articles on JEE Main and JEE Advanced covering exam pattern, NCERT strategy, subject-wise time allocation, mock-test review, dropper-year planning, and what different percentile bands realistically convert to in NIT/IIT admissions.',
    intro: [
      'JEE Main and JEE Advanced reward genuinely different skills — speed and breadth versus deep, multi-concept reasoning — and most preparation mistakes trace back to treating them as the same exam. These guides break down exactly how to sequence NCERT mastery, subject-wise time allocation, and mock-test strategy across the two-year JEE runway.',
      'Written by founder Dilip Sah, an IIT Kanpur alumnus (JEE AIR 400) with 25+ years of mentoring experience, and the BuzzyBrains Academy faculty team.',
    ],
    faqs: [
      { question: 'What is the difference between JEE Main and JEE Advanced?', answer: 'JEE Main rewards fast, accurate execution of known methods across a wide syllabus, while JEE Advanced tests deep, multi-concept reasoning on fewer, more unusual problems that often combine ideas from different chapters.' },
      { question: 'When should JEE preparation actually start?', answer: 'Formal, syllabus-aligned JEE preparation naturally begins in Class 11, but genuine readiness — solid Class 8-10 trigonometry, algebra and mechanics — is built years earlier and is the single highest-leverage early investment.' },
      { question: 'Is NCERT enough for JEE preparation?', answer: 'NCERT is the essential, non-negotiable base and defines the actual syllabus boundary, especially for Chemistry — but Physics and Mathematics need significant additional problem-solving depth on top of it, particularly for JEE Advanced.' },
      { question: 'How is BuzzyBrains Academy\'s JEE coaching different?', answer: 'Small batches (max 12 students) under founder Dilip Sah — an IIT Kanpur alumnus with JEE AIR 400 — allow individualized subject-time allocation and direct mentor feedback on JEE Advanced-style multi-concept problem-solving.' },
    ],
  },
  neet: {
    metaTitle: 'NEET Preparation Guides — Biology, Physics & Chemistry',
    metaDescription:
      'Concept-first NEET guides covering NCERT-precise Biology strategy, Physics numericals, Organic and Inorganic Chemistry, dropper-year planning, and realistic MBBS score benchmarks.',
    h1: 'NEET Preparation Guides',
    quickAnswer:
      'These are BuzzyBrains Academy\'s NEET guides — practical articles on NCERT-first Biology mastery, Physics numerical fluency, Organic and Inorganic Chemistry strategy, mock-test review, dropper-year planning, and exam-proof preparation habits for NEET aspirants and their parents.',
    intro: [
      'NEET rewards a different kind of precision than JEE — especially in Biology, where questions frequently draw on NCERT\'s exact phrasing and diagrams, not just the underlying concept. These guides cover how to build that precision deliberately across all three subjects, plus the exam-specific skills (stamina, pacing, mock-test review) NEET\'s single long paper demands.',
      'Written by founder Dilip Sah, an IIT Kanpur alumnus with 25+ years of mentoring experience, and the BuzzyBrains Academy NEET faculty team.',
    ],
    faqs: [
      { question: 'Why does NCERT matter so much for NEET specifically?', answer: 'NEET Biology in particular draws very directly on NCERT\'s exact phrasing, diagrams and terminology — genuine, reproducible NCERT mastery is the single highest-leverage investment a NEET aspirant can make.' },
      { question: 'What score is considered safe for a government MBBS seat?', answer: 'As a rough, commonly cited benchmark from recent years, a score in the 620-650+ range has generally been considered a reasonably safe zone for General-category government MBBS admission, though this varies by year, state and category — always check current official counselling data.' },
      { question: 'How is NEET Physics different from NEET Biology in how it should be studied?', answer: 'Biology rewards NCERT-precise recall and diagram mastery, while Physics rewards calculation fluency and formula application built on genuine conceptual understanding — the two need different study habits, not the same approach applied twice.' },
      { question: 'Does BuzzyBrains Academy teach NEET across all boards?', answer: 'Yes — NEET preparation is NCERT-based regardless of a student\'s school board (CBSE, ICSE, IGCSE or IB), and BuzzyBrains Academy\'s faculty explicitly bridge non-CBSE students toward NCERT-precise content.' },
    ],
  },
  foundation: {
    metaTitle: 'Foundation Coaching Guides — Grades 6-10',
    metaDescription:
      'Grade-by-grade Foundation coaching guides for Class 6-10 — when to start, how Foundation gaps quietly decide later JEE/NEET/Olympiad success, and board-specific considerations.',
    h1: 'Foundation Coaching Guides (Grades 6–10)',
    quickAnswer:
      'These are BuzzyBrains Academy\'s Foundation guides — articles for parents and students in Grades 6-10 on when to start Foundation coaching, why Class 8-10 concept gaps quietly determine later JEE, NEET and Olympiad outcomes, and how Foundation coaching differs from regular school tuition.',
    intro: [
      'Foundation-year gaps rarely show up as a failing grade — a student can pass every unit test through memorized problem types while the underlying concept stays genuinely shaky, only to have that gap resurface years later in Class 11-12. These guides map out exactly which Class 6-10 concepts matter most and when to address them.',
      'Written by founder Dilip Sah, an IIT Kanpur alumnus with 25+ years of mentoring experience, and the BuzzyBrains Academy Foundation faculty team.',
    ],
    faqs: [
      { question: 'When should Foundation coaching actually start?', answer: 'Grade 6-7 is right for building comfort and number sense without pressure; Grade 8-9 is the highest-leverage window before Class 11 assumes these concepts are already solid; starting in Grade 10 is still recoverable with an honest diagnostic first.' },
      { question: 'How is a Foundation programme different from regular school tuition?', answer: 'Regular tuition optimizes for keeping pace with the school syllabus and exam calendar; a Foundation programme builds genuine, durable conceptual understanding that has to carry a student through several more years of harder material.' },
      { question: 'Does the school board (CBSE, ICSE, State Board) change how Foundation coaching should work?', answer: 'The underlying concepts don\'t change by board, but which gaps are more likely does — ICSE students often need more NCERT-style question-pattern practice, while State Board students may need more exposure to NCERT-aligned framing.' },
      { question: 'Can a Foundation-level gap really affect JEE or NEET years later?', answer: 'Yes — weak Class 9 trigonometry, for example, directly undermines Class 11 Physics topics like SHM and projectile motion, since those chapters assume the earlier concept is already automatic, not something to relearn.' },
    ],
  },
  olympiad: {
    metaTitle: 'Maths & Science Olympiad Guides — IOQM, NSO & More',
    metaDescription:
      'Olympiad preparation guides covering IOQM, INMO, NSO, AMC 8, Kangaroo Math, geometry and combinatorics techniques, and how Olympiad training builds a genuine JEE Advanced edge.',
    h1: 'Maths & Science Olympiad Guides',
    quickAnswer:
      'These are BuzzyBrains Academy\'s Olympiad guides — articles covering India\'s IOQM-INMO-IMO pipeline, AMC 8, NSO, Kangaroo Math, core problem-solving techniques (geometry, combinatorics, number theory), and how genuine Olympiad training builds the reasoning skill JEE Advanced specifically rewards.',
    intro: [
      'Olympiad mathematics tests a genuinely different skill from board exams — non-routine, proof-based reasoning on problems deliberately built so the obvious method doesn\'t apply cleanly. These guides cover the real preparation pathway, from Grade 6-7 curiosity-building through structured IOQM-track training, plus the specific topic techniques (geometry, combinatorics) that make up most competition papers.',
      'Written by founder Dilip Sah, an IIT Kanpur alumnus (JEE AIR 400) who has personally mentored Olympiad-track students for 25+ years.',
    ],
    faqs: [
      { question: 'What is the Olympiad pipeline in India?', answer: 'The official pipeline runs IOQM → INMO → IMO, coordinated under HBCSE guidance and open to Classes 8-12, separate from school-level exams like SOF and NMTC which serve as earlier, more accessible entry points.' },
      { question: 'Does Olympiad training help with JEE?', answer: 'Yes, specifically with JEE Advanced — Olympiad problems train the same multi-concept, restructuring reasoning that JEE Advanced deliberately rewards, though it does not cover JEE\'s Physics/Chemistry content or JEE Main\'s speed-focused format.' },
      { question: 'Can Olympiad achievement get a student direct admission to an IIT?', answer: 'No — IIT admission runs exclusively through JEE Advanced. What strong Olympiad training builds is the reasoning edge for that exam; institutes like CMI and ISI, however, have historically given direct-admission consideration to strong National Olympiad performers.' },
      { question: 'What age should a child start Olympiad training?', answer: 'Grade 6-7 is right for light, curiosity-driven puzzle exposure; structured, sequenced training across the four core topic areas should begin in Grade 8-9, ahead of serious IOQM-track preparation from Grade 9 onward.' },
    ],
  },
  'maths-tuition': {
    metaTitle: 'Maths Excellence Guides — Advanced Problem-Solving',
    metaDescription:
      'Guides on advanced Maths Excellence coaching — mental maths techniques, the four pillars of competition maths, and how to know if your child is ready for non-routine problem-solving.',
    h1: 'Maths Excellence & Advanced Problem-Solving Guides',
    quickAnswer:
      'These are BuzzyBrains Academy\'s Maths Excellence guides — articles on advanced, non-routine mathematical problem-solving for students who are bored by the regular syllabus, exam-ready but not competition-ready, or already Olympiad-track, plus practical techniques like mental maths shortcuts and the four core areas of competition mathematics.',
    intro: [
      'A Maths Excellence Programme is not simply "more maths" — it serves three genuinely different kinds of students, from a bored high scorer needing harder pacing to an Olympiad-track student needing structured, sequenced training. These guides cover how to tell which kind of student your child is, and the specific techniques (mental maths, the four pillars of number theory/algebra/geometry/combinatorics) that build genuine problem-solving flexibility.',
      'Written by founder Dilip Sah, an IIT Kanpur alumnus with 25+ years of mentoring experience, and the BuzzyBrains Academy faculty team.',
    ],
    faqs: [
      { question: 'How do I know if my child is ready for advanced mathematics?', answer: 'Look for curiosity about "why" over "how," comfort sitting with a hard problem for several minutes without giving up, and the ability to explain reasoning out loud — these matter as much as current test scores.' },
      { question: 'What are the four pillars of competition mathematics?', answer: 'Number theory, algebra, geometry and combinatorics — nearly every competition maths problem, from school-level Olympiads through IOQM, draws from these four core, learnable areas.' },
      { question: 'Do mental maths techniques really help in exams?', answer: 'A curated set of techniques — fast squaring, the base method for multiplication, modular arithmetic shortcuts — genuinely save time in calculator-free exams, but they accelerate genuine understanding rather than substitute for it.' },
      { question: 'Is a Maths Excellence Programme only for Olympiad students?', answer: 'No — it also serves strong students who find the regular syllabus understimulating, and students who are solid at board-style questions but have never been challenged with genuinely unfamiliar problems.' },
    ],
  },
  'international-sat': {
    metaTitle: 'International Boards & SAT Guides — IGCSE, IB, A-Level, AP',
    metaDescription:
      'Guides comparing IGCSE, IB Diploma, A-Level and AP, plus Digital SAT prep and how CBSE/ICSE compare to international boards for JEE/NEET readiness.',
    h1: 'International Boards & SAT Guides',
    quickAnswer:
      'These are BuzzyBrains Academy\'s International Boards guides — articles comparing Cambridge IGCSE, the IB Diploma Programme, A-Level and AP, Digital SAT preparation, and how each board compares to CBSE and ICSE for students also targeting JEE or NEET.',
    intro: [
      'IGCSE, IB, A-Level and AP each build genuinely valuable but different skills — and none of them are built around NCERT, which matters if a student is also targeting JEE or NEET. These guides cover board-specific preparation (IGCSE Maths tiers, IB AA vs AI, IB Physics scoring) and how to bridge deliberately toward India\'s competitive exams when needed.',
      'BuzzyBrains Academy is one of the few institutes that genuinely teaches across CBSE, ICSE, IGCSE and IB — written by founder Dilip Sah and the International Boards faculty team.',
    ],
    faqs: [
      { question: 'Which international board is best for JEE/NEET readiness?', answer: 'None are built around NCERT, so all need deliberate bridging — but a strong IGCSE Extended or IB Maths AA background transfers reasoning skill well, provided NCERT-specific content is covered separately.' },
      { question: 'What is the difference between IB Maths AA and AI?', answer: 'Analysis & Approaches (AA) is theoretical and proof-oriented, suited to engineering/physics-bound students; Applications & Interpretation (AI) is applied and technology-integrated, suited to business, social science or design-bound students — the choice should follow intended university major, not perceived difficulty.' },
      { question: 'Is the Digital SAT very different from the old paper SAT?', answer: 'Yes — it\'s a two-section, adaptive test taken on the Bluebook app where the second module\'s difficulty depends on the first module\'s performance, which genuinely changes pacing strategy compared to older, non-adaptive paper-SAT material.' },
      { question: 'Can a CBSE or ICSE student switch to IGCSE or IB later?', answer: 'It\'s far easier before Class 9, when curricula haven\'t diverged much — after that, IGCSE/IB\'s independent, application-based assessment style needs deliberate bridging support for a late switch to work smoothly.' },
    ],
  },
  coding: {
    metaTitle: 'Coding & AI Guides — Code Ninja Program',
    metaDescription:
      'Guides on coding and AI education for school students — what to learn, when to start, and how programming skill connects to Olympiad informatics and future STEM paths.',
    h1: 'Coding & AI Guides',
    quickAnswer:
      'These are BuzzyBrains Academy\'s Coding & AI guides — articles for parents and students on how school-age programming education fits alongside academics, and how it connects to competitive tracks like Olympiad informatics (ZIO, INOI) for students who want to go further.',
    intro: [
      'Coding and AI literacy are increasingly part of a well-rounded school-age education, not just an extracurricular add-on — but figuring out when and how to introduce it, and how deep to go, is a genuine question for most families. These guides cover that landing, plus how programming skill connects to more advanced tracks for students who develop a real pull toward it.',
      'Part of BuzzyBrains Academy\'s Code Ninja programme, under founder Dilip Sah\'s concept-first philosophy.',
    ],
    faqs: [
      { question: 'What age should a child start learning to code?', answer: 'There is no single right age — what matters more is starting with genuine, project-based engagement rather than abstract syntax drilling, so a student builds real problem-solving comfort, not just memorized commands.' },
      { question: 'Does coding connect to competitive exams like Olympiads?', answer: 'Yes — India\'s informatics olympiad pipeline (ZIO → INOI → IOI) rewards the same structured, algorithmic problem-solving skill that a solid coding foundation builds, alongside popular parallel tracks like USACO.' },
      { question: 'Is learning to code useful even without pursuing it as a career?', answer: 'Yes — the structured, logical problem-solving habit it builds transfers usefully to Mathematics and Science reasoning generally, independent of whether a student eventually pursues computer science specifically.' },
    ],
  },
  commerce: {
    metaTitle: 'Commerce & CUET Guides — B.Com, CA Foundation & CUET',
    metaDescription:
      'Commerce-stream guides covering CUET preparation, CA Foundation vs a CUET-based B.Com, and how to prepare for board exams and CUET together without one crowding out the other.',
    h1: 'Commerce & CUET Guides',
    quickAnswer:
      'These are BuzzyBrains Academy\'s Commerce guides — articles for Class 12 Commerce students on what CUET\'s Accountancy, Economics and Business Studies papers actually test, how to prepare for boards and CUET together, and how to choose between CA Foundation and a CUET-based B.Com path.',
    intro: [
      'CUET tests the same NCERT-based Commerce syllabus as board exams, but in a fast, objective format under real time pressure — a genuinely different demand from board-style written answers. These guides cover how to prepare for both together, and the honest tradeoffs between starting CA Foundation directly versus a CUET-based B.Com.',
      'Written by the BuzzyBrains Academy Commerce faculty team, under founder Dilip Sah\'s concept-first philosophy.',
    ],
    faqs: [
      { question: 'Do I need to prepare separately for CUET and board exams?', answer: 'Not from scratch — both draw on the same NCERT Commerce syllabus. What\'s needed is dedicated, timed MCQ practice alongside regular board preparation, since CUET\'s objective format and pace genuinely differ from the board exam\'s written-answer style.' },
      { question: 'Should I choose CA Foundation or a CUET-based B.Com after Class 12?', answer: 'CA Foundation suits students reasonably confident about a CA career and comfortable with independent, exam-heavy study; a CUET-based B.Com keeps more options open at 18, including deciding on CA later alongside the degree.' },
      { question: 'Which Commerce subjects does CUET test as separate papers?', answer: 'Accountancy, Business Studies, and Economics/Business Economics are each tested as separate CUET domain subject papers, alongside the compulsory Languages and General Test sections most students also attempt.' },
    ],
  },
};
