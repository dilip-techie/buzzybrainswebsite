export type BlogCategory =
  | 'iit-jee'
  | 'neet'
  | 'foundation'
  | 'olympiad'
  | 'maths-tuition'
  | 'international-sat'
  | 'coding'
  | 'commerce';

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  'iit-jee': 'IIT-JEE',
  neet: 'NEET',
  foundation: 'Foundation',
  olympiad: 'Olympiad',
  'maths-tuition': 'Maths Tuition',
  'international-sat': 'International & SAT',
  coding: 'Code Ninja / Coding',
  commerce: 'Commerce',
};

/** Where each cluster's pillar guide will live once Phase 2 ships. Points at
 * the closest existing program page until then so links are never dead. */
export const CATEGORY_PILLAR_HREF: Record<BlogCategory, string> = {
  'iit-jee': '/12th-board-pcm',
  neet: '/12th-board-pcb',
  foundation: '/foundation',
  olympiad: '/olympiads',
  'maths-tuition': '/olympiad-math',
  'international-sat': '/international-boards',
  coding: '/coding-lab',
  commerce: '/commerce-tuitions',
};

export const CATEGORY_STYLE: Record<BlogCategory, { gradient: string; glow: string; solid: string }> = {
  'iit-jee': { gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)', glow: '37,99,235', solid: '#2563EB' },
  neet: { gradient: 'linear-gradient(135deg,#991B1B,#EF4444)', glow: '239,68,68', solid: '#EF4444' },
  commerce: { gradient: 'linear-gradient(135deg,#92400E,#F59E0B)', glow: '245,158,11', solid: '#F59E0B' },
  foundation: { gradient: 'linear-gradient(135deg,#065F46,#10B981)', glow: '16,185,129', solid: '#10B981' },
  olympiad: { gradient: 'linear-gradient(135deg,#6D28D9,#A855F7)', glow: '124,58,237', solid: '#A855F7' },
  'maths-tuition': { gradient: 'linear-gradient(135deg,#0369A1,#0EA5E9)', glow: '14,165,233', solid: '#0EA5E9' },
  'international-sat': { gradient: 'linear-gradient(135deg,#3730A3,#6366F1)', glow: '99,102,241', solid: '#6366F1' },
  coding: { gradient: 'linear-gradient(135deg,#334155,#0F172A)', glow: '51,65,85', solid: '#334155' },
};

export type BlogBlock =
  | { kind: 'p'; text: string }
  | { kind: 'h2'; text: string }
  | { kind: 'ul'; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  datePublished: string;
  dateModified?: string;
  readingMinutes: number;
  body: BlogBlock[];
  faq?: { question: string; answer: string }[];
  relatedProgramHref: string;
  relatedProgramLabel: string;
  /** Manual cross-links to guides outside this post's own category — the
   * automatic "More in {category}" section only pulls same-category posts. */
  relatedGuides?: { href: string; label: string }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'jee-main-vs-advanced-explained',
    title: "JEE Main vs JEE Advanced: What's Actually Different",
    description:
      "JEE Main and JEE Advanced aren't two difficulty levels of the same test — they're run by different bodies, test different things, and serve different purposes. Here's exactly how they differ.",
    category: 'iit-jee',
    datePublished: '2026-01-15',
    readingMinutes: 7,
    relatedProgramHref: '/12th-board-pcm',
    relatedProgramLabel: 'IIT-JEE Program',
    body: [
      {
        kind: 'p',
        text: "Every JEE aspirant hears both names within the first week of starting prep, and most conflate them into one long exam. They're not. JEE Main and JEE Advanced are administered by different organizations, follow different formats, and unlock different outcomes — understanding the split early changes how you should actually prepare.",
      },
      { kind: 'h2', text: 'Who conducts each exam' },
      {
        kind: 'p',
        text: 'JEE Main is conducted by the National Testing Agency (NTA) across two sessions a year, typically in January and April. JEE Advanced is conducted by one of the IITs on a rotating basis, held once a year, and only students who clear a category-wise cutoff rank in JEE Main are eligible to sit for it — usually the top 2.5 lakh candidates nationally.',
      },
      { kind: 'h2', text: 'What each exam is actually for' },
      {
        kind: 'ul',
        items: [
          'JEE Main scores get you into NITs, IIITs, and Government-Funded Technical Institutes (GFTIs) directly.',
          'JEE Main is also the sole qualifying gate for JEE Advanced — you cannot register for Advanced without clearing Main first.',
          'JEE Advanced is the only exam that admits students into the IITs. A high Main score with no Advanced attempt does not get you an IIT seat.',
        ],
      },
      { kind: 'h2', text: 'How the question style differs' },
      {
        kind: 'p',
        text: 'JEE Main leans toward direct application of formulae across a wide syllabus, largely single-correct MCQs plus numerical-value questions, and rewards speed and accuracy under a predictable pattern. JEE Advanced is deliberately less predictable: multi-correct options, matrix-match sets, paragraph-based questions, and partial-marking schemes that punish guessing far more than Main does. The same topic can appear as a two-line formula plug-in in Main and a three-step derivation-heavy problem in Advanced.',
      },
      { kind: 'h2', text: 'What this means for your prep' },
      {
        kind: 'p',
        text: "Treating both exams as \"the same syllabus, just harder\" is the most common mistake droppers make. Main rewards drilling a large volume of moderate problems at speed. Advanced rewards deep conceptual flexibility — the ability to combine two or three ideas you learned separately into one problem you've never seen before. A study plan built only around Main-style practice tests will plateau hard the moment Advanced-style multi-concept problems show up.",
      },
    ],
    faq: [
      {
        question: 'Can I appear for JEE Advanced without attempting JEE Main?',
        answer: 'No. JEE Main is a mandatory qualifying step — only candidates who clear the category-wise cutoff in JEE Main are eligible to register for JEE Advanced.',
      },
      {
        question: 'How many attempts do I get for JEE Advanced?',
        answer: 'Candidates get a maximum of two consecutive attempts at JEE Advanced, in consecutive years, subject to meeting the JEE Main eligibility each time.',
      },
    ],
  },
  {
    slug: 'ioqm-syllabus-preparation-guide',
    title: 'IOQM Syllabus and Preparation Guide',
    description:
      "IOQM is the first rung on India's mathematical olympiad ladder — and the one most students underprepare for because it looks deceptively like a school test. Here's what it actually covers and how to prepare.",
    category: 'olympiad',
    datePublished: '2026-01-22',
    readingMinutes: 8,
    relatedProgramHref: '/olympiads',
    relatedProgramLabel: 'Olympiad Program',
    body: [
      {
        kind: 'p',
        text: 'The Indian Olympiad Qualifier in Mathematics (IOQM) is conducted by the Mathematics Teachers’ Association (India) under the guidance of the Homi Bhabha Centre for Science Education (HBCSE), and has been the entry point to India’s olympiad pipeline since it replaced PRMO in 2020. It’s open to students in Classes 8 through 12, and clearing it is the only way into INMO — the Indian National Mathematical Olympiad.',
      },
      { kind: 'h2', text: 'What the exam actually looks like' },
      {
        kind: 'p',
        text: 'IOQM is a 3-hour, 30-question test where every answer is a non-negative integer — there are no multiple-choice options to guess from, and no partial credit for a right method with a wrong final number. That single design choice makes it far less forgiving than a typical school exam, and it’s why students who are otherwise strong at maths still struggle on their first attempt.',
      },
      { kind: 'h2', text: 'The four topics that make up almost the entire paper' },
      {
        kind: 'ul',
        items: [
          'Algebra — polynomials, inequalities, functional equations, sequences and series at a level well beyond school textbooks.',
          'Number Theory — divisibility, modular arithmetic, prime factorization, and Diophantine-style integer problems.',
          'Geometry — synthetic Euclidean geometry, angle chasing, circle theorems, and coordinate geometry used as a problem-solving tool rather than a formula list.',
          'Combinatorics — counting principles, the pigeonhole principle, and structured "how many ways" problems that require a proof-like argument, not just a formula.',
        ],
      },
      { kind: 'h2', text: 'Why school-level preparation isn’t enough' },
      {
        kind: 'p',
        text: 'School maths trains students to recognize a problem type and apply a matching formula. IOQM problems are deliberately built so that the "obvious" formula either doesn’t apply cleanly or takes too long — you’re expected to restructure the problem first. This is a different skill from board-exam maths, and it has to be trained separately, ideally starting a full academic year before the exam rather than in the final two months.',
      },
      { kind: 'h2', text: 'A realistic preparation timeline' },
      {
        kind: 'p',
        text: 'For a Class 9 or 10 student starting from a strong school-maths base, six to nine months of structured olympiad-style problem sets — not extra school tuition — is a realistic runway to a competitive IOQM score. Weekly timed practice under real exam conditions matters more than volume of untimed problem-solving, since a large part of IOQM difficulty is finishing 30 integer-answer problems inside three hours.',
      },
    ],
    faq: [
      {
        question: 'What happens after clearing IOQM?',
        answer: 'Students who clear the IOQM cutoff qualify for INMO (Indian National Mathematical Olympiad). Strong INMO performers are then invited to selection camps that eventually determine India’s team for the International Mathematical Olympiad (IMO).',
      },
      {
        question: 'Is IOQM only for students already strong in maths?',
        answer: 'No — it rewards trained problem-solving more than raw talent. Students with a solid school-maths foundation who put in structured olympiad practice consistently outperform naturally "quick" students who prepare only in the last few weeks.',
      },
    ],
  },
  {
    slug: 'vedic-maths-shortcuts-that-help-in-exams',
    title: 'Vedic Maths Shortcuts That Actually Help in Exams',
    description:
      "Vedic maths gets oversold as a magic bullet and dismissed as a party trick in equal measure. Here's an honest look at which techniques genuinely save time in JEE/NEET/board exams, and where they can't substitute for real conceptual work.",
    category: 'maths-tuition',
    datePublished: '2026-02-03',
    readingMinutes: 6,
    relatedProgramHref: '/one-on-one',
    relatedProgramLabel: 'One-on-One Coaching',
    body: [
      {
        kind: 'p',
        text: "Vedic maths shows up in two very different pitches: as a guaranteed shortcut to acing every exam, or as a gimmick with no real exam value. Neither is accurate. A handful of Vedic maths techniques genuinely save meaningful time on specific, common calculation patterns — and the rest is either niche or a party trick. Here’s the honest breakdown.",
      },
      { kind: 'h2', text: 'Techniques worth actually learning' },
      {
        kind: 'ul',
        items: [
          'Squaring numbers ending in 5 — for any number ending in 5, multiply the leading digit(s) by the next integer up and append 25 (35² = 3×4, then append 25 = 1225). This comes up constantly in quick mental checks during Physics and Chemistry numericals.',
          'Multiplying two numbers close to the same power of 10 — the "base method" turns a two-digit or three-digit multiplication into a small subtraction and a small multiplication, which is faster and less error-prone than long multiplication under exam time pressure.',
          'Quick multiplication by 11 — add adjacent digits and carry where needed. Useful for fast arithmetic checks, though it rarely decides a JEE-level problem by itself.',
        ],
      },
      { kind: 'h2', text: 'Where Vedic maths cannot substitute for real preparation' },
      {
        kind: 'p',
        text: 'None of these techniques help with the actual bottleneck in JEE, NEET or Olympiad maths — recognizing which concept a problem is testing and setting up the right approach. A student who is fast at arithmetic but hasn’t built genuine problem-solving intuition will still stall on a multi-step Advanced-level problem, just slightly faster than before. Vedic maths saves seconds on calculation; it does not save the minutes lost to not knowing how to start a problem.',
      },
      { kind: 'h2', text: 'How we actually use it in class' },
      {
        kind: 'p',
        text: "We teach a small, curated set of these shortcuts — not the full traditional list — specifically at the points in the syllabus where they remove friction from an otherwise concept-heavy problem, so students spend their limited exam time on the part of the question that actually requires thinking.",
      },
    ],
    faq: [
      {
        question: 'Is Vedic maths useful for JEE and NEET, or just for younger students?',
        answer: 'A few specific techniques (like the base method for multiplication) genuinely save time in JEE/NEET numericals. Most of the broader Vedic maths system is more useful for building number-sense in younger students than for competitive-exam speed.',
      },
      {
        question: 'Should my child learn Vedic maths instead of standard problem-solving practice?',
        answer: 'No — it should sit alongside standard practice, not replace it. Vedic maths speeds up arithmetic; it doesn’t teach the concept recognition and multi-step reasoning that competitive exams actually test.',
      },
    ],
  },
  {
    slug: 'cuet-commerce-section-preparation-guide',
    title: 'CUET Commerce Section: What It Actually Tests and How to Prepare',
    description:
      "CUET's Commerce-stream papers reward a different kind of preparation than board exams do — here's what the Accountancy, Economics and Business Studies domain papers actually look like, and how to prepare for both at once without one crowding out the other.",
    category: 'commerce',
    datePublished: '2026-02-18',
    readingMinutes: 7,
    relatedProgramHref: '/commerce-tuitions',
    relatedProgramLabel: 'BuzzyBrains Commerce Tuitions',
    body: [
      {
        kind: 'p',
        text: "For Class 12 Commerce students, CUET isn't a separate subject to learn from scratch — it's the same Accountancy, Economics and Business Studies syllabus, tested in a different format and under different time pressure than the board exam. Students who treat the two as identical prep usually find CUET's pace catches them off guard.",
      },
      { kind: 'h2', text: 'How the CUET domain papers are structured' },
      {
        kind: 'p',
        text: "CUET domain subject papers (Accountancy, Economics/Business Economics, Business Studies) are objective-type — multiple-choice questions drawn from the NCERT Class 12 syllabus, attempted within a strict per-section time limit. There's no long-answer or numerical-derivation format like the board exam; every question has to be recognized and answered fast.",
      },
      { kind: 'h2', text: 'Where board-exam prep and CUET prep genuinely overlap' },
      {
        kind: 'ul',
        items: [
          'Core NCERT concepts in Accountancy (journal entries, ledger, final accounts) and Business Studies (principles of management, business environment) are tested in both — a strong board-level foundation is not wasted effort.',
          'Economics theory — demand/supply, national income concepts, money and banking — is common ground, though CUET tests recall and application faster and with less room for a written explanation to "get partial credit."',
          "Both reward genuine concept clarity over memorized answer templates, since CUET's MCQ format is specifically designed to catch students who've only memorized board-style written answers.",
        ],
      },
      { kind: 'h2', text: 'Where CUET prep needs its own track' },
      {
        kind: 'p',
        text: "The biggest gap is speed and objective-format practice. A student who can write a correct, well-structured five-mark board answer on depreciation methods may still lose time in CUET if they haven't specifically practiced recognizing the same concept inside a fast multiple-choice question. Timed MCQ mock tests — not just board-style practice papers — need a dedicated slot in the weekly schedule from Class 12 onward, not a last-minute add-on in the final month before the exam.",
      },
      { kind: 'h2', text: 'A realistic way to run both prep tracks together' },
      {
        kind: 'p',
        text: 'The most efficient approach is chapter-synchronized: as each Accountancy, Economics or Business Studies chapter is completed for board prep, immediately follow it with a short CUET-style MCQ set on the same chapter, while the concepts are still fresh. This avoids the common trap of finishing board syllabus completely and only then starting CUET-format practice from zero, which leaves too little runway before the exam.',
      },
    ],
    faq: [
      {
        question: 'Do I need to prepare separately for CUET and my Class 12 Commerce board exams?',
        answer: "Not from scratch — both draw on the same NCERT syllabus. What you need is dedicated timed MCQ practice alongside your regular board preparation, since CUET's objective format and pace differ from the board exam's written-answer style.",
      },
      {
        question: 'Which Commerce subjects does CUET test as separate domain papers?',
        answer: 'Accountancy, Business Studies, and Economics/Business Economics are each tested as separate CUET domain subject papers, in addition to the compulsory Languages and General Test sections most students also attempt.',
      },
    ],
  },
  {
    slug: 'ca-foundation-vs-cuet-bcom-after-12th-commerce',
    title: 'CA Foundation vs a CUET-Based B.Com: Choosing a Path After Class 12 Commerce',
    description:
      "Two of the most common next steps for a Class 12 Commerce student — CA Foundation and a CUET-based B.Com admission — lead to very different journeys. Here's an honest comparison of what each path actually involves.",
    category: 'commerce',
    datePublished: '2026-02-25',
    readingMinutes: 8,
    relatedProgramHref: '/commerce-tuitions',
    relatedProgramLabel: 'BuzzyBrains Commerce Tuitions',
    body: [
      {
        kind: 'p',
        text: "By the middle of Class 12, most Commerce students are asked to pick a direction: register for CA Foundation and start the Chartered Accountancy pipeline, or aim for a CUET score that gets them into a good B.Com program first. Both are legitimate, well-trodden paths — the right one depends less on which is \"better\" and more on how a specific student learns and how sure they already are about a CA career.",
      },
      { kind: 'h2', text: 'What the CA Foundation path actually commits you to' },
      {
        kind: 'p',
        text: 'CA Foundation is the entry exam into the Chartered Accountancy course run by the Institute of Chartered Accountants of India (ICAI). A student can register for CA Foundation while still in Class 12 and attempt it after appearing for board exams. It covers Accounting, Business Laws, Quantitative Aptitude and Business Economics — a noticeably more rigorous, exam-focused version of Class 11-12 Commerce fundamentals. Clearing it moves a student into CA Intermediate, and eventually Articleship and CA Final — a multi-year, exam-heavy professional pipeline that runs largely independent of a traditional college degree track.',
      },
      { kind: 'h2', text: 'What a CUET-based B.Com path actually commits you to' },
      {
        kind: 'p',
        text: "A CUET-based B.Com route means sitting the CUET Commerce domain papers and using that score to gain admission into a college's B.Com (or B.Com Honours) program. This keeps a student inside the conventional undergraduate degree structure — three (or four) years of structured coursework, campus life, and a degree that keeps multiple doors open afterward, whether that's an MBA, CA in parallel, CS, CMA, or a direct job.",
      },
      { kind: 'h2', text: 'Where the two paths genuinely differ' },
      {
        kind: 'ul',
        items: [
          'Pace and structure — CA Foundation onward is self-paced, exam-driven, and demands independent discipline outside a classroom structure far earlier than a college degree does.',
          'Certainty of direction — CA Foundation only makes sense if a student is reasonably confident about a CA career; a B.Com degree keeps far more options open at 18, including deciding on CA later, alongside the degree.',
          'Time to first professional outcome — the full CA pipeline (Foundation, Intermediate, Articleship, Final) typically runs longer than a standard undergraduate degree, though it leads directly to a professional qualification rather than a general degree.',
          'Support structure — a college B.Com program has a fixed academic calendar and cohort; CA Foundation students often study largely independently, which is where structured coaching support matters most.',
        ],
      },
      { kind: 'h2', text: 'A practical way to decide' },
      {
        kind: 'p',
        text: "Students who are certain about becoming a Chartered Accountant, and are comfortable with independent, exam-heavy study from age 17-18, tend to do well starting CA Foundation directly. Students who are still weighing CA against CS, CMA, an MBA, or a corporate career — or who thrive with the structure and pace of a classroom program — are usually better served starting with a strong CUET score and a B.Com, and deciding on CA in parallel or afterward, when the choice is less time-pressured.",
      },
    ],
    faq: [
      {
        question: 'Can I pursue CA Foundation and a B.Com degree at the same time?',
        answer: "Yes — many students register for CA Foundation and, once through Intermediate, pursue Articleship alongside a B.Com degree via distance or open-university mode. The two paths aren't mutually exclusive, but doing both fully in parallel from Class 12 onward demands strong time management.",
      },
      {
        question: 'Is CA Foundation harder than CUET Commerce papers?',
        answer: "They test different things. CA Foundation goes deeper into professional-level Accounting, Business Laws and Quantitative Aptitude than the school-level CUET Commerce domain papers, and is generally considered the more rigorous, specialized exam of the two.",
      },
    ],
  },
  {
    slug: 'when-to-start-foundation-coaching',
    title: 'When Should You Start Foundation Coaching? A Grade-by-Grade Guide',
    description:
      "Parents ask two opposite questions constantly: is Grade 6 too early to start Foundation coaching, and is Grade 9 already too late? Here's a grade-by-grade, honest answer to both.",
    category: 'foundation',
    datePublished: '2026-03-04',
    readingMinutes: 7,
    relatedProgramHref: '/foundation',
    relatedProgramLabel: 'Foundation Program',
    relatedGuides: [
      { href: '/best-coaching-institute-pune', label: 'Why small batches matter — BuzzyBrains Academy' },
      { href: '/blog/how-early-should-olympiad-prep-start', label: 'How Early Should Olympiad Prep Start?' },
    ],
    body: [
      {
        kind: 'p',
        text: "Two questions come up constantly from parents researching Foundation coaching: \"Isn't Grade 6 too early to start structured coaching?\" and, from parents of a Grade 9 student, \"Have we already missed the window?\" Both questions come from the same misunderstanding — that Foundation coaching is one fixed thing that starts on one fixed date. It isn't. What it should cover changes meaningfully by grade.",
      },
      { kind: 'h2', text: 'Grades 6-7: building number sense and comfort, not speed' },
      {
        kind: 'p',
        text: 'At this stage, the goal is not to get ahead of the school syllabus — it is to make sure a student is genuinely comfortable with fractions, ratios, basic algebra and simple geometry before these ideas start getting reused as building blocks for harder material. A Grade 6-7 student who is confident (not just passing) at this level has a real head start, because almost nothing taught later skips these foundations.',
      },
      { kind: 'h2', text: 'Grades 8-9: the real inflection point' },
      {
        kind: 'p',
        text: 'This is where Foundation coaching starts to matter most. Grade 8-9 Maths and Science quietly introduce the exact concepts that Grade 11-12 Physics, Chemistry and Maths will assume are already solid — trigonometry basics, linear equations, mensuration, motion and force concepts. A gap here does not usually show up as a failing grade; it shows up two years later as a student who "just isn\'t good at Physics," when the real issue is a Grade 9 trigonometry gap nobody caught.',
      },
      { kind: 'h2', text: 'Grade 10: the transition year' },
      {
        kind: 'p',
        text: 'Grade 10 is board-exam-focused by necessity, but it is also the last full year before students have to pick a stream and, often, a competitive-exam direction. Foundation coaching in Grade 10 should do double duty: consolidate board-exam readiness while quietly building the deeper conceptual base that Grade 11 will assume is already there.',
      },
      { kind: 'h2', text: 'Is it too late to start in Grade 9 or 10?' },
      {
        kind: 'p',
        text: "No — but it changes what the first few months look like. A student starting Foundation coaching in Grade 9 or 10 needs an honest diagnostic first, to find and fix specific earlier gaps, rather than jumping straight into grade-level material on top of an unstable base. It takes more deliberate work than starting in Grade 6, but it is a normal, recoverable starting point, not a lost cause.",
      },
      { kind: 'h2', text: 'A simple way to decide' },
      {
        kind: 'ul',
        items: [
          "If your child is in Grade 6-7: start now, focused on comfort and number sense, not speed or competition prep.",
          'If your child is in Grade 8-9: start now — this is the highest-leverage window before Grade 11 assumes these concepts are settled.',
          "If your child is in Grade 10: start with a real diagnostic, not a generic batch, so the specific gap gets found and fixed.",
          'If your child is already in Grade 11-12: Foundation-level gaps still matter, but the fix looks different — see how this plays out in JEE and NEET prep specifically.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Grade 6 too early to start Foundation coaching?',
        answer: "No. At Grade 6-7, the goal isn't to accelerate ahead of school — it's to build genuine comfort with fractions, ratios and basic algebra before they get reused as building blocks in later grades.",
      },
      {
        question: 'My child is in Grade 9 and has never had coaching. Have we missed the window?',
        answer: "No, but the starting point should be a real diagnostic assessment rather than jumping straight into grade-level batches, so any earlier gaps get identified and fixed alongside current material.",
      },
    ],
  },
  {
    slug: 'foundation-programme-vs-school-tuition',
    title: 'Foundation Programme vs Regular School Tuition: What’s Actually Different',
    description:
      "Both promise to help your child \"do better in school.\" But a Foundation programme and a regular tuition class are usually optimizing for two different things entirely. Here's the real difference.",
    category: 'foundation',
    datePublished: '2026-03-11',
    readingMinutes: 6,
    relatedProgramHref: '/foundation',
    relatedProgramLabel: 'Foundation Program',
    relatedGuides: [
      { href: '/blog/common-foundation-gaps-class-11', label: 'Common Foundation Gaps That Trip Up Class 11 Students' },
    ],
    body: [
      {
        kind: 'p',
        text: 'When a school report card shows a dip, most families’ first instinct is the same: find a tuition class. That instinct is not wrong, but it often leads to the wrong kind of help, because regular school tuition and a structured Foundation programme are usually solving different problems, even though both are called "coaching."',
      },
      { kind: 'h2', text: 'What regular school tuition actually optimizes for' },
      {
        kind: 'p',
        text: "Most local tuition classes are built around the school's own syllabus and exam calendar: homework help, revision before the unit test, and practice on the exact question patterns the school exam is likely to ask. This is genuinely useful — it keeps a student from falling behind in the short term. But it is reactive by design, following whatever the school covers this week.",
      },
      { kind: 'h2', text: 'What a Foundation programme optimizes for' },
      {
        kind: 'p',
        text: "A Foundation programme is built around the concept, not the syllabus calendar. It asks a different question: does this student genuinely understand ratios, or have they just memorized how to answer this week's worksheet? It deliberately spends more time on why a method works, because that understanding is what has to carry a student through three or four more years of harder material — not just next week's test.",
      },
      { kind: 'h2', text: 'A concrete example' },
      {
        kind: 'p',
        text: 'Take ratios and proportion in Grade 7. School tuition will typically teach the method needed to solve the textbook’s question types and move on once the unit test is done. A Foundation programme treats the same topic differently, because ratios resurface constantly later — in chemistry stoichiometry, in physics unit conversions, in economics later on. A student who only learned the exam-pattern version of ratios in Grade 7 often has to relearn the concept from scratch in Grade 11, at a much higher cost in time and confidence.',
      },
      { kind: 'h2', text: 'When regular tuition is genuinely enough' },
      {
        kind: 'p',
        text: "If a student is already conceptually solid and simply needs help keeping pace with school deadlines, or targeted revision before a specific exam, regular tuition can be exactly the right, lower-cost choice. The mismatch happens when a student has a real conceptual gap and keeps getting exam-pattern tuition instead — the grades may stabilize temporarily, but the underlying gap stays exactly where it was.",
      },
      { kind: 'h2', text: 'How to tell which one your child actually needs' },
      {
        kind: 'ul',
        items: [
          "If your child understands a topic but struggles with school's pace or deadlines, regular tuition is likely enough.",
          "If your child can pass tests on a topic but can't explain why the method works, that's a sign of a conceptual gap tuition alone won't close.",
          'If the same type of mistake keeps recurring across different topics (for example, always fumbling fraction operations inside bigger problems), that is a Foundation-level gap, not a syllabus-pacing problem.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is a Foundation programme just a more expensive version of tuition?',
        answer: "No — it targets a different problem. Tuition helps a student keep pace with the school syllabus and exam calendar. A Foundation programme builds the underlying concepts a student will keep needing for years, which is a different goal even when some of the topics overlap.",
      },
      {
        question: 'Can my child do both regular tuition and a Foundation programme?',
        answer: "Some families do, though it isn't necessary for most students. If a Foundation programme is already covering concept-building thoroughly, additional tuition is usually only needed for school-specific exam prep close to test dates.",
      },
    ],
  },
  {
    slug: 'foundation-concepts-that-decide-jee-neet-success',
    title: 'How Class 8-10 Foundation Concepts Quietly Decide JEE/NEET Success Later',
    description:
      "Most JEE and NEET droppers don't fail because of Grade 11-12 material — they fail because of an unresolved Grade 8-9 gap that Grade 11 quietly assumed was already fixed. Here's how that chain actually works.",
    category: 'foundation',
    datePublished: '2026-03-18',
    readingMinutes: 7,
    relatedProgramHref: '/foundation',
    relatedProgramLabel: 'Foundation Program',
    relatedGuides: [
      { href: '/blog/jee-main-vs-advanced-explained', label: "JEE Main vs JEE Advanced: What's Actually Different" },
      { href: '/blog/from-board-maths-to-olympiad-maths', label: 'From Board Maths to Olympiad Maths' },
    ],
    body: [
      {
        kind: 'p',
        text: "When a JEE or NEET dropper year is being planned, most of the conversation focuses on Grade 11-12 material — more practice, more mock tests, a stricter schedule. That conversation often skips the real question: is the struggle actually about Grade 11-12 content, or is it an older, unresolved Grade 8-9 gap that Grade 11 quietly assumed was already settled?",
      },
      { kind: 'h2', text: 'Why this pattern is so common' },
      {
        kind: 'p',
        text: "Grade 11 Physics, Chemistry and Maths textbooks do not re-teach trigonometry, basic algebra manipulation, or mensuration from scratch — they assume it. A student who was weak in Grade 9 trigonometry but still passed the unit test can coast through Grade 9-10 without anyone flagging it, because board-level questions rarely expose the gap directly. Then Grade 11 Physics introduces waves, projectile motion and circular motion — all of which lean heavily on trigonometry — and the old gap resurfaces, except now it looks like \"struggling with Physics,\" not \"a specific Grade 9 maths gap.\"",
      },
      { kind: 'h2', text: 'Three real examples of this chain' },
      {
        kind: 'ul',
        items: [
          "Weak Grade 9 trigonometry → struggles with Grade 11 Physics topics like waves, SHM and projectile motion, which are trigonometry-heavy by nature.",
          "Shaky Grade 8-9 algebraic manipulation (factoring, solving simultaneous equations quickly) → slow, error-prone problem-solving in Grade 11-12 Chemistry equilibrium and Physics mechanics, where algebra is a tool, not the main topic, but has to be fast and reliable.",
          "Incomplete Grade 9-10 mensuration and geometry → difficulty visualizing 3D geometry and coordinate geometry problems in JEE Maths, where spatial reasoning is assumed to already be automatic.",
        ],
      },
      { kind: 'h2', text: 'Why this is a dropper-year problem specifically' },
      {
        kind: 'p',
        text: "A first-attempt JEE or NEET student often does not have time to trace a struggle back to its Grade 9 root cause — there simply isn’t room in the calendar. A dropper year is exactly the moment to do this properly: a real diagnostic that identifies whether a specific Grade 11-12 struggle is actually rooted in an older Foundation-level gap, and fixing that gap directly rather than re-drilling Grade 12 material that was never really the problem.",
      },
      { kind: 'h2', text: 'What to check for right now' },
      {
        kind: 'p',
        text: 'If a student is fighting a specific Grade 11-12 topic despite putting in real effort, it is worth testing the underlying Grade 8-9 concept directly and in isolation — not through a Grade 12 problem that buries it inside several other steps. If the underlying concept itself is shaky, that is the actual fix, and it is usually faster to close than another round of Grade 12-level practice questions.',
      },
    ],
    faq: [
      {
        question: 'My child is struggling with JEE Physics specifically. Could this really be a Grade 9 issue?',
        answer: 'Yes, this is a very common pattern. Grade 11-12 Physics topics like waves, SHM and projectile motion rely heavily on trigonometry that is taught in Grade 9-10. A struggle that looks like "not good at Physics" often traces back to that earlier, unresolved gap.',
      },
      {
        question: 'Is it worth going back to Grade 9 material during a JEE/NEET dropper year?',
        answer: "Only for the specific concept that is actually causing the current struggle, tested in isolation — not a full re-teach of Grade 9. A targeted fix of the real root cause is usually faster and more effective than repeating Grade 12-level practice on the same topic.",
      },
    ],
  },
  {
    slug: 'common-foundation-gaps-class-11',
    title: 'The Most Common Foundation-Level Gaps That Trip Up Class 11 Students',
    description:
      "Five specific Foundation-level gaps show up again and again in Class 11 students, and all five are easy to test for at home in a few minutes. Here's what to look for.",
    category: 'foundation',
    datePublished: '2026-03-25',
    readingMinutes: 6,
    relatedProgramHref: '/foundation',
    relatedProgramLabel: 'Foundation Program',
    relatedGuides: [
      { href: '/blog/when-to-start-foundation-coaching', label: 'When Should You Start Foundation Coaching?' },
      { href: '/blog/foundation-concepts-that-decide-jee-neet-success', label: 'How Foundation Concepts Decide JEE/NEET Success' },
    ],
    body: [
      {
        kind: 'p',
        text: "Certain Foundation-level gaps show up in Class 11 students over and over, almost regardless of which school or board they came from. What makes these gaps tricky is that they rarely show up as a failing grade earlier — a student can pass every unit test up to Grade 10 while still carrying one of these gaps quietly forward.",
      },
      { kind: 'h2', text: 'The five recurring gaps' },
      {
        kind: 'ul',
        items: [
          "Fractions and ratios under pressure — a student can simplify a fraction slowly and correctly, but freezes or slows down badly when it appears as one step inside a longer Physics or Chemistry numerical.",
          "Basic algebraic manipulation — factoring, expanding, and rearranging equations quickly and without errors, which Grade 11 Physics and Chemistry assume is automatic, not a slow, effortful process.",
          "Geometry reasoning, not just formulas — knowing that an angle sum property applies is different from being able to construct the reasoning step yourself in an unfamiliar diagram.",
          "Reading and interpreting graphs — a shockingly common gap; many students can plot points correctly but cannot extract meaning (rate of change, area under a curve conceptually) from a graph they didn't draw themselves.",
          "Translating word problems into equations — the single most common bottleneck in Grade 11 Physics numericals, where the maths itself is usually simple but setting up the right equation from the problem description is not.",
        ],
      },
      { kind: 'h2', text: 'Why these gaps hide so well' },
      {
        kind: 'p',
        text: 'Each of these can be individually "gotten around" in earlier grades — a student can memorize a specific problem type, get through a unit test, and never actually build the underlying skill. Board exams up to Grade 10 rarely force a student to apply these skills in an unfamiliar combination, which is exactly what Grade 11-12 numericals start demanding immediately.',
      },
      { kind: 'h2', text: 'A simple way to test for each one at home' },
      {
        kind: 'p',
        text: 'Pick one topic from each of the five areas and ask your child to explain their method out loud, not just produce the answer. A student with a real gap will often get the right answer through a memorized shortcut but be unable to explain why it works, or will visibly slow down and hesitate compared to how quickly they handle familiar problem types. That hesitation, more than the final answer, is the signal worth paying attention to.',
      },
    ],
    faq: [
      {
        question: 'My child passes all their maths tests — could they still have one of these gaps?',
        answer: "Yes, and this is actually the most common scenario. These gaps are specifically the kind that let a student pass tests through memorized problem types, without the gap being caught, until Grade 11-12 material demands the skill in an unfamiliar combination.",
      },
      {
        question: 'How long does it typically take to close one of these gaps?',
        answer: "It varies by student, but because these are narrow, specific skills rather than entire topics, a focused effort of a few weeks is often enough to close one gap — far less time than it takes to notice and recover from its downstream effects in Grade 11-12.",
      },
    ],
  },
  {
    slug: 'cbse-icse-state-board-foundation-coaching',
    title: 'CBSE vs ICSE vs State Board: What It Means for Foundation-Level Coaching',
    description:
      "CBSE, ICSE and State Board students all sit through Foundation-age years differently — not just in syllabus, but in how much depth each board expects at Grade 6-10 level. Here's what actually changes.",
    category: 'foundation',
    datePublished: '2026-04-01',
    readingMinutes: 6,
    relatedProgramHref: '/foundation',
    relatedProgramLabel: 'Foundation Program',
    relatedGuides: [
      { href: '/blog/when-to-start-foundation-coaching', label: 'When Should You Start Foundation Coaching?' },
      { href: '/international-boards', label: 'Compare IGCSE, IB, A Level and AP' },
    ],
    body: [
      {
        kind: 'p',
        text: "Most comparisons of CBSE, ICSE and State Board focus on Class 12 outcomes — which board is \"better\" for a specific college or exam. That comparison matters less at the Foundation-age level (Grades 6-10), where the real question for parents is narrower: does the board itself change how Foundation coaching should be approached? The honest answer is yes, in a few specific ways.",
      },
      { kind: 'h2', text: 'How the three boards actually differ at Foundation level' },
      {
        kind: 'ul',
        items: [
          "CBSE follows NCERT textbooks closely, with a syllabus explicitly designed with JEE and NEET alignment in mind from Grade 9 onward — which is why most JEE/NEET-track Foundation coaching leans on NCERT as the base text regardless of a student's actual board.",
          "ICSE (run by CISCE) tends to go into more descriptive depth per topic, especially in English and the sciences, with a syllabus that is often broader in scope even if less exam-pattern-aligned with JEE/NEET specifically.",
          "State Board syllabi vary meaningfully by state, generally staying closer to a simplified core, which can mean less built-in depth at the Foundation stage compared to CBSE or ICSE — though this varies significantly state to state.",
        ],
      },
      { kind: 'h2', text: 'What matters most for JEE/NEET-track students specifically' },
      {
        kind: 'p',
        text: "Since JEE and NEET question papers are NCERT-aligned, a CBSE student's Foundation-year coursework already tracks reasonably close to what competitive-exam prep will eventually need. ICSE and State Board students heading toward JEE/NEET are not at a disadvantage, but their Foundation coaching needs to more deliberately bridge toward NCERT-style content and question patterns, rather than assuming the school syllabus alone will get there.",
      },
      { kind: 'h2', text: 'Does board choice change how a Foundation programme should teach?' },
      {
        kind: 'p',
        text: "Concept-first teaching — building genuine understanding of ratios, algebra, geometry and scientific reasoning — does not fundamentally change by board, because the underlying mathematics and science do not change. What changes is which gaps are more or less likely: ICSE students may need more targeted numerical-practice speed work relative to their strong conceptual depth, while some State Board students may need more explicit exposure to NCERT-style question framing they have not seen much of in school.",
      },
      { kind: 'h2', text: 'Should you switch boards for better Foundation-level coaching?' },
      {
        kind: 'p',
        text: "Rarely, and it is not usually the right lever to pull. Switching boards is a major disruption for comparatively small gains at the Foundation stage — the more effective move is choosing a Foundation programme that explicitly accounts for your current board's specific gaps, rather than switching boards to chase a syllabus that better matches a future exam years away.",
      },
    ],
    faq: [
      {
        question: 'Is CBSE genuinely better for a child who wants to do JEE or NEET later?',
        answer: 'CBSE has a practical advantage in that its syllabus is closely NCERT-aligned, and NCERT is also the base text for JEE and NEET. But ICSE and State Board students are not disadvantaged — their Foundation coaching just needs to more deliberately bridge toward NCERT-style content.',
      },
      {
        question: 'Should we switch our child from State Board to CBSE for better Foundation coaching?',
        answer: "Usually not. Switching boards is a significant disruption for a comparatively small gain at the Foundation stage. It is generally more effective to choose Foundation coaching that explicitly addresses your current board's specific gaps.",
      },
    ],
  },
  {
    slug: 'what-is-maths-excellence-programme',
    title: 'What Is a Maths Excellence Programme, and Who Actually Needs One?',
    description:
      "A Maths Excellence Programme is not just \"more maths.\" It serves three genuinely different kinds of students, and understanding which one your child is changes what the programme should actually focus on.",
    category: 'maths-tuition',
    datePublished: '2026-03-06',
    readingMinutes: 6,
    relatedProgramHref: '/olympiad-math',
    relatedProgramLabel: 'Maths Excellence Program',
    relatedGuides: [
      { href: '/blog/parents-guide-to-olympiad-exams-india', label: "A Parent's Guide to Olympiad Exams in India" },
      { href: '/blog/when-to-start-foundation-coaching', label: 'When Should You Start Foundation Coaching?' },
    ],
    body: [
      {
        kind: 'p',
        text: '"Maths Excellence" sounds like it is only for students who already top the class. In practice, it serves three genuinely different kinds of students, and a programme that does not distinguish between them ends up serving none of them particularly well.',
      },
      { kind: 'h2', text: 'The three kinds of students it actually serves' },
      {
        kind: 'ul',
        items: [
          "The bored high scorer — a student who tops school tests easily and is, frankly, understimulated by the pace and depth of the regular syllabus. This student needs harder problems and faster pacing, not more repetition of what they already know.",
          "The exam-ready but not competition-ready student — solid at board-style questions but has never been asked to solve a genuinely unfamiliar, multi-step problem. This student needs deliberate exposure to non-routine problem-solving, not just more of the same question types.",
          "The Olympiad-track student — already aiming at IOQM, NMTC or similar, who needs structured, sequenced training across number theory, algebra, geometry and combinatorics, not general enrichment.",
        ],
      },
      { kind: 'h2', text: 'What it is not' },
      {
        kind: 'p',
        text: "It is not extra homework help, and it is not the same as drilling past Olympiad papers on repeat. Both are common but ineffective versions of \"advanced maths\" — the first just adds volume without depth, and the second trains pattern-recognition on specific known problems rather than the underlying reasoning skill that lets a student handle an unfamiliar problem on exam day.",
      },
      { kind: 'h2', text: 'What a week actually looks like' },
      {
        kind: 'p',
        text: "A well-run Maths Excellence week mixes a new concept or technique, guided practice on problems that require applying it in a slightly unfamiliar way, and a timed problem set that mimics real exam pressure — whether that exam is a board paper, an entrance test, or an Olympiad qualifier. The specific mix shifts depending on which of the three student types above a child actually is.",
      },
      { kind: 'h2', text: 'How to know which type your child is' },
      {
        kind: 'p',
        text: "Ask your child to attempt one genuinely unfamiliar problem — not from their current syllabus, one level up in difficulty — and watch what happens. A bored high scorer will usually get there quickly once engaged. An exam-ready student will often know the right tools but struggle to figure out which one to use first. An Olympiad-track student will already be doing something close to this regularly. That single observation says more than a test score does.",
      },
    ],
    faq: [
      {
        question: 'Is a Maths Excellence Programme only for students who want to do Olympiads?',
        answer: 'No. It also serves strong students who find the regular syllabus understimulating, and students who are solid at board-style questions but have never been challenged with genuinely unfamiliar problems. Olympiad prep is one of three paths it serves, not the only one.',
      },
      {
        question: 'How is this different from just giving my child harder worksheets?',
        answer: "Harder worksheets add difficulty without necessarily teaching the reasoning skill to handle unfamiliar problems. A structured programme deliberately builds that reasoning skill through guided exposure to non-routine problems, not just volume.",
      },
    ],
  },
  {
    slug: 'from-board-maths-to-olympiad-maths',
    title: 'From Board Maths to Olympiad Maths: How the Jump Actually Works',
    description:
      "Board maths and Olympiad maths use the same textbook topics but test completely different skills. Here's exactly what changes, and a realistic picture of how long the transition actually takes.",
    category: 'maths-tuition',
    datePublished: '2026-03-13',
    readingMinutes: 7,
    relatedProgramHref: '/olympiad-math',
    relatedProgramLabel: 'Maths Excellence Program',
    relatedGuides: [
      { href: '/blog/ioqm-syllabus-preparation-guide', label: 'IOQM Syllabus and Preparation Guide' },
      { href: '/blog/prmo-vs-ioqm-what-changed', label: 'PRMO vs IOQM: What Changed' },
    ],
    body: [
      {
        kind: 'p',
        text: "A student who consistently scores well in board maths often assumes Olympiad maths will just be \"the same thing, but harder.\" It is not. The two test genuinely different skills, and the gap between them surprises a lot of otherwise strong students the first time they sit an Olympiad qualifier.",
      },
      { kind: 'h2', text: 'What board maths actually trains you to do' },
      {
        kind: 'p',
        text: "Board maths, by design, rewards recognizing a problem type and applying the matching method correctly and quickly. The questions are drawn from a known, publicly available syllabus, and past papers give a reliable sense of what to expect. This is a completely legitimate and valuable skill — it is just a different skill from what Olympiad maths tests.",
      },
      { kind: 'h2', text: 'What Olympiad maths actually demands' },
      {
        kind: 'p',
        text: "Olympiad problems are deliberately built so the \"obvious\" method either does not apply cleanly or takes too long. A student is expected to restructure the problem first — to notice, for example, that a geometry problem is really an algebra problem in disguise, or that a seemingly complex counting problem has a simpler symmetry hiding inside it. This is proof-based, non-routine reasoning, not formula application.",
      },
      { kind: 'h2', text: 'The bridge skills that actually connect the two' },
      {
        kind: 'ul',
        items: [
          "Genuine conceptual understanding (not memorized methods) of core board-syllabus topics — this is the raw material Olympiad problems restructure and combine.",
          "Comfort with proof and justification, not just producing a numeric answer — explaining why a method works, not just that it works.",
          "Exposure to the four core Olympiad areas — number theory, algebra, geometry and combinatorics — which board syllabi touch on lightly but do not develop in depth.",
        ],
      },
      { kind: 'h2', text: 'A realistic transition timeline' },
      {
        kind: 'p',
        text: "For a student with a genuinely strong board-maths base, six to nine months of structured, sequenced exposure to non-routine problem-solving is a realistic runway to a competitive Olympiad qualifier attempt — not two weeks of past-paper cramming before the exam. The IOQM syllabus and preparation guide breaks down exactly what that structured exposure should cover topic by topic.",
      },
    ],
    faq: [
      {
        question: 'My child tops board maths exams. Will Olympiad maths be easy for them?',
        answer: 'Not automatically. Board maths and Olympiad maths test different skills — pattern recognition and correct method application versus non-routine, proof-based problem-solving. A strong board-maths base is necessary but not sufficient without deliberate Olympiad-specific training.',
      },
      {
        question: 'Can my child prepare for Olympiads just by solving past papers?',
        answer: 'Past papers are useful for exposure but are not enough on their own — they train recognition of specific known problems rather than the underlying reasoning skill needed for an unfamiliar problem on exam day. Structured, sequenced training across the core topic areas matters more.',
      },
    ],
  },
  {
    slug: 'is-my-child-ready-for-advanced-maths',
    title: 'How to Know If Your Child Is Ready for Advanced Mathematics',
    description:
      "Readiness for advanced maths has less to do with current test scores than most parents assume. Here are four real signals to look for, and what it means if your child isn't ready yet.",
    category: 'maths-tuition',
    datePublished: '2026-03-20',
    readingMinutes: 6,
    relatedProgramHref: '/olympiad-math',
    relatedProgramLabel: 'Maths Excellence Program',
    relatedGuides: [
      { href: '/blog/when-to-start-foundation-coaching', label: 'When Should You Start Foundation Coaching?' },
      { href: '/blog/what-is-maths-excellence-programme', label: 'What Is a Maths Excellence Programme?' },
    ],
    body: [
      {
        kind: 'p',
        text: "Parents often use test scores as the only signal for whether a child is ready for advanced mathematics. Scores matter, but they are an incomplete picture — a student can score well through memorized methods without the underlying flexibility that advanced maths actually demands, and a student with a slightly lower score can be more genuinely ready than the raw number suggests.",
      },
      { kind: 'h2', text: 'Four real signals worth watching for' },
      {
        kind: 'ul',
        items: [
          "Curiosity about why, not just how — a child who asks why a formula works, not just how to apply it, already has the instinct advanced maths rewards.",
          "Comfort with being stuck — advanced problems do not yield in thirty seconds. A student who can sit with a hard problem for several minutes without giving up (rather than immediately asking for the answer) is showing real readiness.",
          "Ability to explain their reasoning out loud — not just produce a correct answer, but walk through why each step follows from the last.",
          "Enjoying a genuinely wrong attempt — a student who treats a wrong approach as useful information, rather than a failure to avoid, is building exactly the resilience advanced problem-solving requires.",
        ],
      },
      { kind: 'h2', text: 'What test scores alone miss' },
      {
        kind: 'p',
        text: 'A student can score 95% on a board exam through fast, accurate application of memorized methods and still struggle with a genuinely unfamiliar problem — because board exams are not designed to test that particular skill. This does not mean the score is meaningless; it means it is answering a different question than "is this student ready for non-routine problem-solving."',
      },
      { kind: 'h2', text: "What if my child isn't ready yet?" },
      {
        kind: 'p',
        text: "This is not a permanent verdict, and it is not a problem. Readiness for advanced maths is built, not fixed — through structured exposure to slightly-too-hard problems in a supportive setting, over months, not through being pushed straight into competition-level material. Starting a level lower than seems necessary, and building genuine confidence with being stuck, usually gets a student to readiness faster than starting too high and creating frustration.",
      },
    ],
    faq: [
      {
        question: 'Does my child need to be a top scorer to start a Maths Excellence Programme?',
        answer: "No. Readiness signals like curiosity, comfort with being stuck, and willingness to explain reasoning matter as much as current test scores. A programme that starts at the right level for a student's actual readiness works better than one that assumes readiness from grades alone.",
      },
      {
        question: 'My child gives up quickly on hard problems. Does that mean advanced maths is not for them?',
        answer: "Not necessarily — comfort with being stuck is a skill that can be built gradually through structured exposure to slightly-too-hard problems in a supportive setting. It is common for this to improve significantly over a few months of the right kind of practice.",
      },
    ],
  },
  {
    slug: 'four-pillars-of-competition-maths',
    title: 'Number Theory, Algebra, Geometry, Combinatorics: The Four Pillars of Competition Maths',
    description:
      "Almost every competition maths problem, from a school-level Olympiad to IOQM, draws from four core areas. Here's what each one actually is, in plain language, and why these four specifically.",
    category: 'maths-tuition',
    datePublished: '2026-03-27',
    readingMinutes: 7,
    relatedProgramHref: '/olympiad-math',
    relatedProgramLabel: 'Maths Excellence Program',
    relatedGuides: [
      { href: '/blog/ioqm-syllabus-preparation-guide', label: 'IOQM Syllabus and Preparation Guide' },
      { href: '/blog/nmtc-sof-olympiads-worth-it', label: 'NMTC and SOF Olympiads: Are They Worth It?' },
    ],
    body: [
      {
        kind: 'p',
        text: "Nearly every competition maths exam in India — from school-level Olympiads through IOQM — draws its problems from four core areas. A student (or parent) encountering these terms for the first time often finds them intimidating, but each one is a genuinely learnable, well-defined branch of maths, not a mysterious skill some students are just born with.",
      },
      { kind: 'h2', text: 'Number theory: the maths of whole numbers' },
      {
        kind: 'p',
        text: 'Number theory studies the properties of whole numbers — what makes a number divisible by another, how remainders behave, which numbers are prime, and how these properties interact. A simple example: proving that the sum of any three consecutive whole numbers is always divisible by 3 is a number theory argument, even though it uses nothing beyond basic arithmetic.',
      },
      { kind: 'h2', text: 'Algebra: beyond solving for x' },
      {
        kind: 'p',
        text: 'Competition algebra goes past solving a single equation for x. It includes working with inequalities (proving one expression is always bigger than another), sequences and series, and functional equations (finding all functions that satisfy a given rule) — all built on the same algebra basics taught in school, applied more flexibly.',
      },
      { kind: 'h2', text: 'Geometry: reasoning with shapes, not just formulas' },
      {
        kind: 'p',
        text: 'School geometry is largely formula-based: area, perimeter, angle rules applied to a labeled diagram. Competition geometry asks a student to construct the reasoning itself — proving why two angles must be equal, or why a particular line must pass through a specific point — often without being told which formula to use at all.',
      },
      { kind: 'h2', text: 'Combinatorics: the maths of counting possibilities' },
      {
        kind: 'p',
        text: 'Combinatorics is about counting — but not simple counting. It covers questions like "in how many genuinely different ways can this happen," using structured principles (like the pigeonhole principle: if you place more items into fewer boxes than items, at least one box must contain more than one item) rather than brute-force listing.',
      },
      { kind: 'h2', text: 'Why these four specifically' },
      {
        kind: 'p',
        text: "These four areas cover distinct types of mathematical reasoning that, together, represent most of what \"thinking like a mathematician\" actually involves — which is exactly why competition maths exams are built around them rather than testing calculus or other advanced topics that depend more on formula memorization than reasoning. For a full breakdown of how these four map onto a specific exam's syllabus, see our IOQM preparation guide.",
      },
    ],
    faq: [
      {
        question: 'Does my child need to master all four areas equally?',
        answer: "Not necessarily starting out — most students naturally find one or two areas more intuitive at first. A well-structured programme builds all four progressively, but it's normal and expected for a student to be stronger in some areas than others, especially early on.",
      },
      {
        question: 'Are these four areas only relevant for Olympiad-track students?',
        answer: 'No. The reasoning skills built through number theory, algebra, geometry and combinatorics also strengthen general problem-solving ability, which benefits board exams and later competitive exams like JEE, even for students not specifically targeting an Olympiad.',
      },
    ],
  },
  {
    slug: 'problem-solving-speed-without-losing-understanding',
    title: 'Building Genuine Problem-Solving Speed Without Losing Understanding',
    description:
      "Parents often worry that building speed means sacrificing understanding, or vice versa. In practice, real speed is a byproduct of genuine understanding — here's how that actually works.",
    category: 'maths-tuition',
    datePublished: '2026-04-03',
    readingMinutes: 6,
    relatedProgramHref: '/olympiad-math',
    relatedProgramLabel: 'Maths Excellence Program',
    relatedGuides: [
      { href: '/blog/vedic-maths-shortcuts-that-help-in-exams', label: 'Vedic Maths Shortcuts That Actually Help in Exams' },
      { href: '/blog/from-board-maths-to-olympiad-maths', label: 'From Board Maths to Olympiad Maths' },
    ],
    body: [
      {
        kind: 'p',
        text: 'A common worry among parents is that pushing for speed will come at the cost of real understanding — that a student who is trained to answer fast is really just being trained to skip the thinking. The concern is reasonable, because that failure mode is real. But it is not the only way to build speed, and it is not the way that actually works long-term.',
      },
      { kind: 'h2', text: 'The false trade-off' },
      {
        kind: 'p',
        text: "Speed built through shortcuts memorized without understanding is fragile — it works exactly on the problem types it was trained on and falls apart the moment a question looks slightly different. This is the version of \"speed\" that genuinely does trade away understanding, and it is a real risk when practice is just volume without reflection.",
      },
      { kind: 'h2', text: 'How real speed is actually built' },
      {
        kind: 'p',
        text: "Genuine speed comes from a different source: a student who deeply understands a method needs less working-memory effort to apply it, which frees up mental bandwidth and makes the whole process faster — not because they are skipping steps, but because each step has become automatic through real comprehension, the same way a fluent reader does not sound out each word. This kind of speed transfers to unfamiliar problems, because the understanding underneath it is real.",
      },
      { kind: 'h2', text: 'Where shortcuts like Vedic maths genuinely fit in' },
      {
        kind: 'p',
        text: 'A small set of calculation shortcuts — like the ones covered in our breakdown of Vedic maths techniques — do save real time, but only on the arithmetic portion of a problem, not the reasoning portion. They are a useful accelerant on top of genuine understanding, not a substitute for it. A student who is fast at arithmetic but has not built real problem-solving intuition will still stall on the actual hard part of a multi-step problem.',
      },
      { kind: 'h2', text: 'A practical weekly structure that builds both together' },
      {
        kind: 'ul',
        items: [
          'New concept or method, taught with the "why," not just the "how" — this is where understanding is actually built.',
          'Guided practice applying the method in slightly varied situations — this is where the method starts becoming automatic, without yet adding time pressure.',
          'A timed set, only after the above two steps — this is where genuine speed gets tested and reinforced, on a foundation that already exists rather than skipping straight to timed drilling.',
        ],
      },
    ],
    faq: [
      {
        question: "Won't focusing on understanding first slow down my child's exam preparation?",
        answer: 'It may feel slower in the first few weeks, but it produces speed that actually holds up on unfamiliar problems — unlike speed built purely through timed drilling on familiar problem types, which tends to break down under real exam conditions.',
      },
      {
        question: 'Are calculation shortcuts like Vedic maths worth teaching at all?',
        answer: "Yes, a curated set genuinely saves time on the arithmetic portion of a problem. But they work best layered on top of real conceptual understanding, not as a substitute for it — they speed up calculation, not problem-solving reasoning.",
      },
    ],
  },
  {
    slug: 'parents-guide-to-olympiad-exams-india',
    title: "A Parent's Guide to Olympiad Exams in India: IMO, NSO, IOQM Explained",
    description:
      "IMO, NSO, IOQM, PRMO, NMTC, SOF — the Olympiad landscape in India is a genuine alphabet soup. Here's a plain-language map of what each one actually is and how they connect.",
    category: 'olympiad',
    datePublished: '2026-03-05',
    readingMinutes: 8,
    relatedProgramHref: '/olympiads',
    relatedProgramLabel: 'Olympiad Program',
    relatedGuides: [
      { href: '/blog/ioqm-syllabus-preparation-guide', label: 'IOQM Syllabus and Preparation Guide' },
      { href: '/blog/prmo-vs-ioqm-what-changed', label: 'PRMO vs IOQM: What Changed' },
    ],
    body: [
      {
        kind: 'p',
        text: "Parents researching Olympiad exams for the first time run into a genuine alphabet soup — IMO, NSO, IOQM, PRMO, NMTC, SOF — often without a clear sense of which ones are related, which are completely separate, and which actually matter for a specific goal. Here is a plain-language map.",
      },
      { kind: 'h2', text: "India's mathematical Olympiad pipeline" },
      {
        kind: 'p',
        text: "The official path to the International Mathematical Olympiad (IMO) — the genuine, globally recognized competition — runs through a specific Indian pipeline: IOQM (Indian Olympiad Qualifier in Mathematics) is the entry gate, open to Classes 8-12. Clearing IOQM qualifies a student for INMO (Indian National Mathematical Olympiad). Strong INMO performers are invited to selection camps that eventually determine India's IMO team. Our full IOQM guide breaks down exactly what the entry-level exam covers.",
      },
      { kind: 'h2', text: 'Science Olympiads: a different, parallel track' },
      {
        kind: 'p',
        text: "Science Olympiads run separately from the maths pipeline. The International Junior Science Olympiad (IJSO) and International Olympiad in specific sciences (Physics, Chemistry, Biology, Astronomy) each have their own national qualifying process, generally run through the Homi Bhabha Centre for Science Education (HBCSE), similar in spirit to the maths pipeline but with separate exams per subject.",
      },
      { kind: 'h2', text: 'A crucial disambiguation: SOF exams' },
      {
        kind: 'p',
        text: '“IMO” and “NSO” are also used as exam names by the Science Olympiad Foundation (SOF), a private organization — and SOF’s “IMO” (International Mathematics Olympiad) is a completely different exam from the official International Mathematical Olympiad described above, despite the near-identical name. SOF exams are widely taken, school-level competitive exams that are excellent for building exposure and confidence, but they are not part of the elite IOQM-INMO-IMO pipeline.',
      },
      { kind: 'h2', text: 'Where NMTC and PRMO fit' },
      {
        kind: 'p',
        text: 'NMTC (National Mathematics Talent Contest), run by the Association of Mathematics Teachers of India (AMTI), is a separate, well-regarded maths competition with its own structure. PRMO (Pre-Regional Mathematical Olympiad) was the entry-level exam in the official pipeline before IOQM replaced it in 2020 — see our dedicated breakdown of what changed and why it still matters for how you choose practice material.',
      },
      { kind: 'h2', text: 'Which one should my child start with?' },
      {
        kind: 'ul',
        items: [
          "For general exposure and confidence-building, especially in Grades 4-7: SOF exams (NSO, their IMO) or NMTC are accessible, well-structured starting points.",
          "For students seriously aiming at the elite maths pipeline, from Grade 8 onward: IOQM is the actual entry gate and deserves dedicated, structured preparation.",
          "For students interested in sciences specifically: the HBCSE-run subject Olympiads (Physics, Chemistry, Biology, Astronomy) follow a similar structured national pipeline to IOQM.",
        ],
      },
    ],
    faq: [
      {
        question: 'Is the SOF "IMO" the same as the real International Mathematical Olympiad?',
        answer: "No, and this is a common point of confusion. SOF's IMO (International Mathematics Olympiad) is a private organization's school-level exam with a similar name, not the official International Mathematical Olympiad that India's national team competes in through the IOQM-INMO pipeline.",
      },
      {
        question: 'What is the actual path to representing India at the International Mathematical Olympiad?',
        answer: 'The official pipeline is: IOQM (Indian Olympiad Qualifier in Mathematics) as the entry gate, leading to INMO (Indian National Mathematical Olympiad) for those who clear it, followed by selection camps for strong INMO performers that eventually determine the IMO team.',
      },
    ],
  },
  {
    slug: 'prmo-vs-ioqm-what-changed',
    title: 'PRMO vs IOQM: What Changed and What It Means for Your Child',
    description:
      "IOQM replaced PRMO in 2020, but many practice materials and older guides still reference the old exam. Here's exactly what changed, why, and how it should affect the prep material you choose.",
    category: 'olympiad',
    datePublished: '2026-03-12',
    readingMinutes: 6,
    relatedProgramHref: '/olympiads',
    relatedProgramLabel: 'Olympiad Program',
    relatedGuides: [
      { href: '/blog/ioqm-syllabus-preparation-guide', label: 'IOQM Syllabus and Preparation Guide' },
      { href: '/blog/parents-guide-to-olympiad-exams-india', label: "A Parent's Guide to Olympiad Exams in India" },
    ],
    body: [
      {
        kind: 'p',
        text: "Parents researching India's maths Olympiad pipeline often run into both \"PRMO\" and \"IOQM\" referenced interchangeably in older articles, forum posts and practice material — which is understandable, since IOQM replaced PRMO fairly recently, and a lot of pre-2020 content simply has not been updated.",
      },
      { kind: 'h2', text: 'What PRMO was' },
      {
        kind: 'p',
        text: "The Pre-Regional Mathematical Olympiad (PRMO) was the entry-level exam in India's official maths Olympiad pipeline from 2016 to 2019, conducted by the Mathematics Teachers' Association (India). It served the same basic role IOQM now serves — the first qualifying step toward INMO.",
      },
      { kind: 'h2', text: 'What actually changed with IOQM' },
      {
        kind: 'p',
        text: "IOQM replaced PRMO in 2020. The core content areas — algebra, number theory, geometry, combinatorics — remained largely the same, since these represent the fundamental building blocks of competition maths regardless of the exam's name. What changed was primarily structural: the specific format details and the regional cutoff and eligibility structure were revised to address access and consistency issues in how PRMO was being administered across different regions of India.",
      },
      { kind: 'h2', text: 'Why the change happened' },
      {
        kind: 'p',
        text: "The stated goal behind the shift was to create a more consistent, fair qualifying process nationally — PRMO's region-by-region cutoff structure had created noticeable inconsistency in how accessible the next stage was depending on where a student lived, and IOQM was designed to address that.",
      },
      { kind: 'h2', text: 'Why this history still matters for your preparation today' },
      {
        kind: 'p',
        text: 'Old PRMO papers remain genuinely useful practice material, because the core mathematical content they test — number theory, algebra, geometry, combinatorics — has not changed. The important adjustment is being aware that some structural and format details referenced in pre-2020 guides no longer apply, so any prep plan should be built around IOQM’s current format specifically, using PRMO papers as content practice rather than as a format guide. Our IOQM syllabus and preparation guide reflects the current exam structure.',
      },
    ],
    faq: [
      {
        question: 'Are old PRMO papers still useful for IOQM preparation?',
        answer: 'Yes, for content practice — the core topic areas (algebra, number theory, geometry, combinatorics) are the same. Just be aware that some structural and format details from pre-2020 PRMO guides do not reflect the current IOQM format.',
      },
      {
        question: 'Why did India switch from PRMO to IOQM?',
        answer: "The stated goal was a more consistent, fair national qualifying process — PRMO's region-by-region cutoff structure created inconsistency in accessibility to the next stage depending on where a student lived, which IOQM's revised structure aimed to address.",
      },
    ],
  },
  {
    slug: 'nmtc-sof-olympiads-worth-it',
    title: 'NMTC and SOF Olympiads: Are They Worth Preparing For?',
    description:
      "NMTC and SOF Olympiads (like NSO and SOF's own IMO) are hugely popular but serve a different purpose from the elite IOQM pipeline. Here's an honest look at who should prepare for them, and why.",
    category: 'olympiad',
    datePublished: '2026-03-19',
    readingMinutes: 6,
    relatedProgramHref: '/olympiads',
    relatedProgramLabel: 'Olympiad Program',
    relatedGuides: [
      { href: '/blog/parents-guide-to-olympiad-exams-india', label: "A Parent's Guide to Olympiad Exams in India" },
      { href: '/blog/ioqm-syllabus-preparation-guide', label: 'IOQM Syllabus and Preparation Guide' },
    ],
    body: [
      {
        kind: 'p',
        text: "NMTC and SOF exams (NSO, and SOF's own similarly-named IMO) are among the most widely taken Olympiad-style exams in Indian schools — and also among the most debated in parent circles, with opinions ranging from \"essential\" to \"just a participation certificate.\" The honest answer sits between those two extremes.",
      },
      { kind: 'h2', text: 'What NMTC actually is' },
      {
        kind: 'p',
        text: "The National Mathematics Talent Contest (NMTC), run by the Association of Mathematics Teachers of India (AMTI), is a genuinely well-regarded maths competition with real depth, organized across multiple grade-appropriate levels. It is a respected, independent competition in its own right, not a stepping stone to the IOQM pipeline, though the reasoning skills it builds do transfer usefully.",
      },
      { kind: 'h2', text: 'What SOF Olympiads actually are' },
      {
        kind: 'p',
        text: "The Science Olympiad Foundation (SOF) runs widely taken school-level exams including NSO (science) and their own IMO (mathematics) — note this is a different exam from the official International Mathematical Olympiad despite the shared name, as covered in our full guide to India's Olympiad landscape. SOF exams are well-structured, syllabus-aligned, and administered at a large scale across schools nationally.",
      },
      { kind: 'h2', text: 'How they differ in purpose from the IOQM pipeline' },
      {
        kind: 'p',
        text: "SOF and NMTC exams are designed for broad participation and confidence-building — they follow the school syllabus reasonably closely, with an extra layer of challenge, making them accessible entry points. The IOQM pipeline, by contrast, is deliberately built for a smaller, more advanced pool of students, with genuinely non-routine, proof-based problems that go well beyond the school syllabus.",
      },
      { kind: 'h2', text: 'Honest verdict: worth it for whom' },
      {
        kind: 'ul',
        items: [
          "For Grades 4-7, as an accessible way to build exam confidence and early exposure to competitive-style questions: genuinely worth it, and a reasonable starting point before anything more advanced.",
          "For students already comfortable with the school syllabus who want a next step before committing to IOQM-level preparation: NMTC in particular offers real additional depth worth engaging with.",
          "As a credential for college admissions or as a marker of elite mathematical ability on their own: neither should be oversold for this purpose — that weight belongs more to the IOQM-INMO-IMO pipeline or genuinely strong board and competitive-exam results.",
        ],
      },
    ],
    faq: [
      {
        question: "Is SOF's IMO the same prestige level as IOQM or the real International Mathematical Olympiad?",
        answer: "No. SOF's IMO is a widely taken, well-structured school-level exam, valuable for confidence-building and exposure, but it is a separate exam from the official International Mathematical Olympiad, which is reached only through the IOQM-INMO pipeline.",
      },
      {
        question: 'Should my child skip SOF/NMTC and go straight to IOQM preparation?',
        answer: 'For younger students (Grades 4-7) or those new to competitive maths, SOF and NMTC are genuinely useful stepping stones for building confidence and exposure before the more demanding, non-routine problem style of IOQM.',
      },
    ],
  },
  {
    slug: 'how-early-should-olympiad-prep-start',
    title: 'How Early Should Olympiad Preparation Start?',
    description:
      "Starting too late and starting the wrong way too early are both real risks. Here's a grade-by-grade, honest picture of what Olympiad preparation should actually look like at each age.",
    category: 'olympiad',
    datePublished: '2026-03-26',
    readingMinutes: 6,
    relatedProgramHref: '/olympiads',
    relatedProgramLabel: 'Olympiad Program',
    relatedGuides: [
      { href: '/blog/when-to-start-foundation-coaching', label: 'When Should You Start Foundation Coaching?' },
      { href: '/blog/what-is-maths-excellence-programme', label: 'What Is a Maths Excellence Programme?' },
    ],
    body: [
      {
        kind: 'p',
        text: 'Two failure modes show up equally often with Olympiad preparation: starting too late, after a student is already deep into a Grade 10-11 exam-heavy schedule, and starting too early in the wrong way — drilling past-paper problems on a 9-year-old who has not yet built basic number comfort or genuine curiosity about maths.',
      },
      { kind: 'h2', text: 'Grades 4-5: exposure and curiosity, not exam prep' },
      {
        kind: 'p',
        text: "At this stage, the goal should be building a genuine love of puzzles and pattern-finding, not exam-style preparation. Age-appropriate logic puzzles, simple SOF or NMTC-style exposure, and problems that reward curiosity over speed do more good here than anything resembling formal Olympiad drilling.",
      },
      { kind: 'h2', text: 'Grades 6-8: structured foundation building' },
      {
        kind: 'p',
        text: 'This is where structured exposure to the four core Olympiad areas — number theory, algebra, geometry, combinatorics — should begin in earnest, alongside genuinely solid Foundation-level maths. A student entering Grade 9 with both a strong Foundation base and some real exposure to these four areas is in a strong position for serious IOQM-track preparation.',
      },
      { kind: 'h2', text: 'Grades 9-10: serious, structured IOQM-track preparation' },
      {
        kind: 'p',
        text: 'This is the realistic window for dedicated IOQM preparation, as covered in depth in our IOQM syllabus guide. Six to nine months of structured, sequenced practice — not cramming in the final weeks — gives a strong Grade 9-10 student a genuinely competitive shot.',
      },
      { kind: 'h2', text: 'What "starting early" should never mean' },
      {
        kind: 'p',
        text: "Starting early should never mean handing a young child difficult past-paper problems before they have the underlying number comfort or genuine interest to engage with them — that approach reliably builds frustration and maths anxiety rather than a head start. Early preparation should look like curiosity-building, not miniature exam drilling.",
      },
      { kind: 'h2', text: 'Is it too late if we are only starting in Grade 10?' },
      {
        kind: 'p',
        text: 'Not necessarily, though the timeline gets tighter. A Grade 10 student with a strong Foundation base can still make real progress with focused, structured preparation — the key is an honest assessment of where the gaps actually are, rather than assuming there is no time left to start.',
      },
    ],
    faq: [
      {
        question: 'Is Grade 4 too young to start any Olympiad-related activity?',
        answer: 'No, but it should look like curiosity-building through puzzles and light exposure, not formal exam preparation. Starting too intensively too early tends to build frustration rather than a genuine advantage.',
      },
      {
        question: "What's the realistic minimum runway for serious IOQM preparation?",
        answer: 'For a student with a strong board-maths foundation, six to nine months of structured, sequenced preparation is a realistic timeline for a competitive first attempt — ideally starting in Grade 9 or 10, not in the final two months before the exam.',
      },
    ],
  },
  {
    slug: 'olympiad-training-to-jee-advanced-overlap',
    title: 'From Olympiad Training to JEE Advanced: The Hidden Overlap',
    description:
      "Olympiad-trained students often have a real edge in JEE Advanced specifically — not JEE Main. Here's exactly which skills transfer, which don't, and how to sequence both without one starving the other.",
    category: 'olympiad',
    datePublished: '2026-04-02',
    readingMinutes: 7,
    relatedProgramHref: '/olympiads',
    relatedProgramLabel: 'Olympiad Program',
    relatedGuides: [
      { href: '/blog/jee-main-vs-advanced-explained', label: "JEE Main vs JEE Advanced: What's Actually Different" },
      { href: '/blog/from-board-maths-to-olympiad-maths', label: 'From Board Maths to Olympiad Maths' },
    ],
    body: [
      {
        kind: 'p',
        text: "Students who have gone through serious Olympiad training often notice something specific once they start JEE preparation: JEE Advanced feels more approachable to them than it does to equally strong peers without an Olympiad background — while JEE Main does not show the same gap. That difference is not a coincidence.",
      },
      { kind: 'h2', text: 'Why the edge shows up specifically in JEE Advanced' },
      {
        kind: 'p',
        text: 'As covered in our breakdown of how JEE Main and JEE Advanced actually differ, JEE Advanced deliberately tests deep conceptual flexibility — combining two or three ideas learned separately into one problem the student has never seen before. That is almost exactly the skill Olympiad training builds through non-routine, multi-step problems that force a student to restructure their approach rather than apply a known method directly.',
      },
      { kind: 'h2', text: 'The actual overlapping skill' },
      {
        kind: 'p',
        text: "It is not subject-matter overlap — Olympiad maths and JEE Physics/Chemistry cover different content. The overlap is in the underlying reasoning muscle: the comfort with sitting on an unfamiliar problem, testing different approaches, and combining ideas from different parts of the syllabus that Olympiad training deliberately builds through repeated practice, which JEE Advanced then rewards directly.",
      },
      { kind: 'h2', text: "What Olympiad training doesn't prepare you for in JEE" },
      {
        kind: 'ul',
        items: [
          "JEE Main's speed-and-accuracy format — Olympiad training rewards depth over a small number of hard problems, not fast, accurate throughput across a large number of moderate ones, which is what JEE Main specifically demands.",
          "The breadth of Physics and Chemistry content — Olympiad maths training does not cover JEE's Physics and Chemistry syllabus at all, so that preparation has to happen separately and cannot be skipped.",
          "NCERT-specific content mastery — JEE questions are grounded in the NCERT syllabus specifically, which Olympiad-style problems do not follow the same way.",
        ],
      },
      { kind: 'h2', text: 'How to sequence both without one starving the other' },
      {
        kind: 'p',
        text: "For a student in Grades 9-10 aiming at both, Olympiad-style maths training and Foundation-level Physics/Chemistry/Maths can run in parallel without much conflict, since Olympiad training at this stage is mostly building general reasoning strength. Once JEE-specific preparation begins in earnest (typically Grade 11), it should take priority in total hours — Olympiad training's job by then is done: it has already built the reasoning flexibility JEE Advanced will reward, and continuing to split time evenly risks under-preparing for JEE Main's specific speed-and-breadth demands.",
      },
    ],
    faq: [
      {
        question: 'Does Olympiad training help with JEE Main as much as JEE Advanced?',
        answer: 'Not as directly. Olympiad training builds the deep conceptual flexibility that JEE Advanced specifically rewards. JEE Main rewards fast, accurate application across a wide syllabus, which is a different skill that still needs dedicated practice regardless of Olympiad background.',
      },
      {
        question: 'Should my child stop Olympiad training once JEE preparation begins?',
        answer: 'Not necessarily stop, but the balance should shift. Once dedicated JEE preparation begins in Grade 11, it should take priority in total hours, since Olympiad training’s main value — building reasoning flexibility — has largely already been delivered by that point for a student with a solid Olympiad background.',
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.category === category);
}
