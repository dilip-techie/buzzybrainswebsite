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
  'sat-exam': {
    metaTitle: 'SAT Exam Prep Guides — Digital SAT Strategy',
    metaDescription:
      'Digital SAT preparation guides — adaptive module strategy, calculator-inclusive Math, short-passage Reading & Writing, prep timelines, and honest score-vs-college expectations.',
    h1: 'SAT Exam Preparation Guides',
    quickAnswer:
      'These are BuzzyBrains Academy\'s SAT guides — practical articles on the Digital SAT\'s adaptive, module-based format, Bluebook-specific preparation, Math and Reading & Writing strategy, realistic prep timelines, and how to weigh the SAT against the ACT for Indian students applying to US universities.',
    intro: [
      'The Digital SAT is a genuinely different exam from the paper SAT it replaced — adaptive modules, a calculator allowed throughout Math, and short, single-question Reading & Writing passages. These guides cover exactly how that format changes strategy, and how to build a realistic, multi-month preparation timeline around it.',
      'Written by founder Dilip Sah, an IIT Kanpur alumnus with 25+ years of mentoring experience, and the BuzzyBrains Academy SAT faculty team.',
    ],
    faqs: [
      { question: 'What is the Digital SAT, and how is it different from the old SAT?', answer: 'It\'s an adaptive, computer-based exam taken via the Bluebook app, with shorter Reading & Writing passages, a calculator allowed for the entire Math section, and module-based adaptive difficulty — all genuine changes from the older paper format.' },
      { question: 'How does the adaptive module system affect my score?', answer: 'Each section has two modules; performance on module 1 determines whether module 2 is the harder, higher-scoring version or the easier, capped version — module 1 accuracy is strategically important, not just "the first half."' },
      { question: 'How long does SAT preparation genuinely take?', answer: 'Meaningful score improvement typically needs several months of structured practice — diagnostic, foundational skills, timed practice, then full adaptive mocks — not a few weeks of cramming.' },
      { question: 'Should I take the SAT or the ACT?', answer: 'Both are widely accepted by US universities that consider standardized testing; the right choice depends on personal fit (adaptive strategy versus consistent fast pacing) more than either exam\'s general reputation.' },
    ],
  },
  'ap-exam': {
    metaTitle: 'AP Exam Guides — Calculus, Computer Science & Physics',
    metaDescription:
      'AP preparation guides covering Calculus AB/BC, Computer Science A and Principles, and Physics 1/C — course selection, FRQ strategy, and scoring a 5.',
    h1: 'AP Exam Preparation Guides',
    quickAnswer:
      'These are BuzzyBrains Academy\'s AP guides — articles on AP Calculus AB vs BC, AP Computer Science A and Principles, and AP Physics 1 and C, covering course-selection decisions, free-response question (FRQ) strategy, and how each exam is actually scored.',
    intro: [
      'AP exams reward complete, justified free-response answers, not just a correct final result — and course choices like AB vs BC Calculus, or CSP vs CSA, depend on genuine readiness, not just ambition. These guides break down what each exam actually tests and how to prepare for its specific FRQ format.',
      'Written by founder Dilip Sah, an IIT Kanpur alumnus with 25+ years of mentoring experience, and the BuzzyBrains Academy AP faculty team.',
    ],
    faqs: [
      { question: 'What is the difference between AP Calculus AB and BC?', answer: 'BC includes everything in AB plus additional topics (series, parametric/polar calculus) at a faster pace, and BC students also receive a separate AB subscore — the right choice depends on math foundation and pace comfort, not just ambition.' },
      { question: 'Do AP free-response questions need full written work, or just the final answer?', answer: 'Complete, justified reasoning — including correct notation and, where relevant, explicitly stated principles — is required for full credit; a correct final answer alone loses real points on most FRQs.' },
      { question: 'Should my child start with AP Computer Science Principles or AP CSA?', answer: 'CSP\'s broader, conceptual approach generally suits genuine beginners better, while a student with existing coding comfort can reasonably start directly with the Java-specific, code-writing-intensive CSA.' },
      { question: 'What is the difference between AP Physics 1 and Physics C?', answer: 'Physics 1 is algebra-based mechanics; Physics C is calculus-based and split into two separate exams (Mechanics, and Electricity & Magnetism) — Physics C assumes concurrent or prior calculus coursework.' },
    ],
  },
  igcse: {
    metaTitle: 'Cambridge IGCSE Guides — Maths, Additional Maths & Tiers',
    metaDescription:
      'Cambridge IGCSE preparation guides covering Mathematics (0580) Core vs Extended, Additional Mathematics (0606), mark-scheme strategy, and personalized tutoring outcomes.',
    h1: 'Cambridge IGCSE Guides',
    quickAnswer:
      'These are BuzzyBrains Academy\'s Cambridge IGCSE guides — articles on IGCSE Mathematics (0580) Core versus Extended tier selection, scoring A* in Additional Mathematics (0606), Cambridge\'s method-marks system, and how personalized tutoring improves IGCSE outcomes.',
    intro: [
      'Cambridge IGCSE rewards genuine content mastery combined with familiarity with Cambridge\'s specific mark-scheme style, where showing complete working matters as much as the final answer. These guides cover tier selection, the content jump into Additional Mathematics, and practical exam-technique strategy.',
      'BuzzyBrains Academy is one of the few institutes that genuinely teaches across CBSE, ICSE and IGCSE — written by founder Dilip Sah and the International Boards faculty team.',
    ],
    faqs: [
      { question: 'What is the difference between Core and Extended IGCSE Maths?', answer: 'Core caps at grade C and covers foundational content; Extended opens the full A*-E range and includes more advanced topics, suited to students continuing to A Level or IB Mathematics.' },
      { question: 'How to score A* in Cambridge IGCSE Additional Mathematics?', answer: 'Genuine mastery of calculus, trigonometric identities, algebraic techniques and coordinate geometry, combined with extensive past-paper practice reviewed against official mark schemes.' },
      { question: 'Why do method marks matter so much in Cambridge assessment?', answer: 'Cambridge\'s mark schemes reward clear, complete working — a student who shows correct method often earns partial credit even with a minor arithmetic slip, which is different from board exams that weight the final answer more heavily.' },
      { question: 'How important are past papers for IGCSE preparation?', answer: 'Extremely important — they are the single most valuable resource, but only when reviewed carefully against the official mark scheme, not just attempted for a score.' },
    ],
  },
  ib: {
    metaTitle: 'IB Diploma Guides — Maths AA vs AI & IB Physics',
    metaDescription:
      'IB Diploma Programme guides covering Mathematics AA vs AI course selection, scoring a 7 in IB Physics, and how personalized tutoring improves IB outcomes.',
    h1: 'IB Diploma Guides',
    quickAnswer:
      'These are BuzzyBrains Academy\'s IB Diploma guides — articles on choosing between IB Mathematics Analysis & Approaches (AA) and Applications & Interpretation (AI), strategies for scoring a 7 in IB Physics, and the specific mechanisms behind why personalized, small-batch tutoring genuinely improves IB results.',
    intro: [
      'IB rewards precise command-term compliance and genuine conceptual depth — in Mathematics, Physics, and the Internal Assessment components that carry real, distinct weight. These guides cover the AA-versus-AI decision, IB Physics FRQ-style strategy, and how tutoring should actually support the Diploma\'s specific demands.',
      'BuzzyBrains Academy is one of the few institutes that genuinely teaches across CBSE, ICSE and the IB Diploma Programme — written by founder Dilip Sah and the International Boards faculty team.',
    ],
    faqs: [
      { question: 'What is the difference between IB Maths AA and AI?', answer: 'Analysis & Approaches (AA) is theoretical and proof-oriented, suited to engineering or physics-bound students; Applications & Interpretation (AI) is applied and technology-integrated, suited to business, social science or design-bound students — the choice should follow intended university major, not perceived difficulty.' },
      { question: 'How do I score a 7 in IB Physics?', answer: 'Genuine conceptual understanding across core topics, precise command-term awareness (what "justify" versus "calculate" actually requires), strong data-analysis skill for Paper 3, and a thoughtfully executed Internal Assessment.' },
      { question: 'Does personalized tutoring really improve IB results?', answer: 'Through specific mechanisms — faster gap identification, individualized pacing, and direct mark-scheme and command-term coaching — not just generically "more attention," which is why genuinely small batch sizes matter.' },
      { question: 'Can a CBSE or ICSE student switch to IB later?', answer: 'It\'s far easier before Class 9, when curricula haven\'t diverged much — after that, IB\'s independent, application-based assessment style needs deliberate bridging support for a late switch to work smoothly.' },
    ],
  },
  clat: {
    metaTitle: 'CLAT Guides — India\'s National Law Entrance Exam',
    metaDescription:
      'CLAT (Common Law Admission Test) preparation guides — exam format, section-wise strategy, and how to build the reading and reasoning skills the exam actually tests.',
    h1: 'CLAT Guides',
    quickAnswer:
      'CLAT (Common Law Admission Test) is India\'s national entrance exam for admission to the National Law Universities (NLUs) and other law schools, testing English Language, Current Affairs including General Knowledge, Legal Reasoning, Logical Reasoning, and Quantitative Techniques through a fully passage-based format. BuzzyBrains Academy runs a dedicated CLAT coaching program built around this exact format.',
    intro: [
      'CLAT rewards a genuinely different skill set from JEE, NEET or board exams — reading comprehension under time pressure, applying legal principles to unfamiliar fact patterns, and structured logical reasoning, rather than curriculum-based content mastery alone. The guides in this category cover exam format, section-wise strategy and preparation timelines.',
      'For structured CLAT preparation — passage-first practice, full-length mocks and small batches capped at 12 students — see the BuzzyBrains Academy CLAT coaching program below.',
    ],
    faqs: [
      { question: 'What is CLAT?', answer: 'CLAT (Common Law Admission Test) is India\'s centralized national entrance exam for admission to the National Law Universities and other participating law schools, for both undergraduate (five-year integrated law) and postgraduate law programmes.' },
      { question: 'What sections does the CLAT UG exam cover?', answer: 'The exam is passage-based and covers English Language, Current Affairs including General Knowledge, Legal Reasoning, Logical Reasoning, and Quantitative Techniques — exact section weightage and format are set by the Consortium of NLUs and should be confirmed from the official CLAT website each year.' },
      { question: 'Does BuzzyBrains Academy offer dedicated CLAT coaching?', answer: 'Yes — BuzzyBrains Academy runs a structured CLAT coaching program covering all five sections, with passage-first practice, full-length mocks and batches capped at 12 students. See the CLAT program page for details.' },
      { question: 'What skills does CLAT preparation genuinely require?', answer: 'Fast, precise reading comprehension, applying general legal principles to unfamiliar scenarios (not prior legal knowledge), and structured logical and quantitative reasoning under real time pressure.' },
    ],
  },
  'ivy-colleges': {
    metaTitle: 'Ivy League & Top US College Guides',
    metaDescription:
      'Guides on what it genuinely takes to be competitive for Ivy League and other top US universities — SAT/AP context, holistic admissions, academic profile strategy and honest score expectations.',
    h1: 'Ivy League & Top US College Guides',
    quickAnswer:
      'The Ivy League refers to eight highly selective US universities (Harvard, Yale, Princeton, Columbia, Penn, Brown, Dartmouth and Cornell) that evaluate applicants holistically — academic record, essays, extracurriculars and recommendations together, not a single test score. This category collects guides on the academic side of that preparation — course strategy, SAT/AP scores, and realistic expectations — which is also what BuzzyBrains Academy\'s Ivy League & Top US University Counselling program is scoped to.',
    intro: [
      'No single SAT or AP score guarantees admission to an Ivy League or similarly selective US university — these institutions evaluate applications holistically, and published "typical score ranges" shift by year and should always be checked from a university\'s own official data. These guides focus on the part of that preparation BuzzyBrains Academy genuinely supports: course and curriculum strategy, and building strong Digital SAT and AP performance as real components of a competitive application.',
      'For families targeting top US universities, our SAT and AP guides are a good starting point alongside this category — and our dedicated Ivy League Counselling program coordinates all three into one grade-by-grade roadmap.',
    ],
    faqs: [
      { question: 'What SAT score do I need for an Ivy League university?', answer: 'There is no single required score — Ivy League admissions are holistic, and "typical ranges" vary by university and year, so checking a specific target institution\'s current, official data is essential rather than relying on a general number.' },
      { question: 'Does a high SAT or AP score guarantee Ivy League admission?', answer: 'No — these universities evaluate the full application holistically, including academic record, essays, extracurriculars and recommendations, not test scores alone.' },
      { question: 'Which US universities are in the Ivy League?', answer: 'Harvard, Yale, Princeton, Columbia, the University of Pennsylvania, Brown, Dartmouth and Cornell — eight specific, historically defined universities, distinct from other selective US universities sometimes discussed alongside them.' },
      { question: 'Does BuzzyBrains Academy offer Ivy League admissions counseling?', answer: 'Yes — BuzzyBrains Academy\'s Ivy League & Top US University Counselling program builds the academic profile (course strategy, SAT/AP scores, grade-by-grade roadmap) that supports a competitive application. It does not cover essay editing or extracurricular consulting; see the program page for exactly what is included.' },
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
  ipmat: {
    metaTitle: 'IPMAT Guides — 5-Year Integrated Programme in Management',
    metaDescription:
      'IPMAT preparation guides — exam pattern, Quantitative and Verbal Ability strategy, WAT-PI preparation and timelines for the 5-year integrated IPM route at IIMs like Indore and Rohtak.',
    h1: 'IPMAT Guides',
    quickAnswer:
      'IPMAT (Integrated Program in Management Aptitude Test) is the entrance exam for 5-year integrated BBA+MBA programmes at IIMs such as Indore and Rohtak, taken right after Class 12. BuzzyBrains Academy runs a dedicated IPMAT coaching program covering Quantitative Ability, Verbal Ability and the WAT-PI stage that follows the written test.',
    intro: [
      'IPMAT rewards a genuinely different preparation approach from board exams — short-answer quantitative questions that don\'t allow elimination-based guessing, and a written test that\'s only part of the full selection process. These guides cover exam format, section-wise strategy and preparation timelines specific to IPMAT.',
      'For structured, IPMAT-specific preparation — with small batches capped at 12 students — see the BuzzyBrains Academy IPMAT coaching program below.',
    ],
    faqs: [
      { question: 'What is IPMAT?', answer: 'IPMAT (Integrated Program in Management Aptitude Test) is the entrance exam for 5-year integrated BBA+MBA programmes at IIMs such as Indore and Rohtak, taken right after Class 12.' },
      { question: 'What does the IPMAT exam cover?', answer: 'IPMAT generally tests Quantitative Ability and Verbal Ability, followed by a Written Ability Test (WAT) and Personal Interview for shortlisted candidates — the exact pattern varies by IIM and year, so it should always be confirmed from that IIM\'s official notification.' },
      { question: 'Does BuzzyBrains Academy offer dedicated IPMAT coaching?', answer: 'Yes — BuzzyBrains Academy runs a structured IPMAT coaching program with track-specific preparation, full-length mocks and batches capped at 12 students. See the IPMAT program page for details.' },
    ],
  },
  cat: {
    metaTitle: 'CAT Guides — India\'s Top MBA Entrance Exam',
    metaDescription:
      'CAT preparation guides — exam pattern, VARC/DILR/QA section strategy, and timelines for MBA and PGP aspirants applying to the IIMs and other top B-schools.',
    h1: 'CAT Guides',
    quickAnswer:
      'CAT (Common Admission Test) is the entrance exam for 2-year MBA/PGP programmes at the IIMs and other top B-schools, taken after a bachelor\'s degree. BuzzyBrains Academy runs a dedicated CAT coaching program covering VARC, DILR and QA, with sectional-time-limited mock practice.',
    intro: [
      'CAT\'s sectional time limits, TITA questions and set-based DILR structure make it meaningfully different from most other competitive exams. These guides cover exam format, section-wise strategy and preparation timelines specific to CAT.',
      'For structured, CAT-specific preparation — with small batches capped at 12 students — see the BuzzyBrains Academy CAT coaching program below.',
    ],
    faqs: [
      { question: 'What is CAT?', answer: 'CAT (Common Admission Test) is the entrance exam for 2-year MBA/PGP programmes at the IIMs and other top B-schools, taken after a bachelor\'s degree.' },
      { question: 'What does the CAT exam cover?', answer: 'CAT tests Verbal Ability & Reading Comprehension (VARC), Data Interpretation & Logical Reasoning (DILR), and Quantitative Ability (QA), through a mix of MCQ and Type-In-The-Answer (TITA) questions under sectional time limits.' },
      { question: 'Does BuzzyBrains Academy offer dedicated CAT coaching?', answer: 'Yes — BuzzyBrains Academy runs a structured CAT coaching program with sectional-time-limited mock practice and batches capped at 12 students. See the CAT program page for details.' },
    ],
  },
};
