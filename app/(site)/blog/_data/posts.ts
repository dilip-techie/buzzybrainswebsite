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
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return BLOG_POSTS.filter((post) => post.category === category);
}
