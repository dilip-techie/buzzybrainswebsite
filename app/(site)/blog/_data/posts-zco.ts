import type { BlogPost } from './posts';

const PROGRAM = {
  relatedProgramHref: '/coding-lab',
  relatedProgramLabel: 'Code Ninja Program',
} as const;

const PIPELINE_GUIDE = {
  href: '/blog/informatics-olympiad-pipeline-zio-inoi-ioi-explained',
  label: 'The ZIO to INOI to IOI Pipeline Explained',
};

/** ZCO preparation series — 5 posts. */
export const ZCO_POSTS: BlogPost[] = [
  {
    slug: 'zco-explained-eligibility-exam-pattern-and-path-to-inoi-ioi',
    title: 'ZCO Explained: Eligibility, Exam Pattern and the Path to INOI and IOI',
    description:
      "The Zonal Computing Olympiad (ZCO) is the first real gate in India's computing olympiad pipeline. Here's what it is, who can take it, how the paper works, and where it can lead.",
    category: 'coding-olympiad',
    datePublished: '2026-10-29',
    readingMinutes: 7,
    ...PROGRAM,
    relatedGuides: [PIPELINE_GUIDE],
    body: [
      {
        kind: 'answer',
        text: "The Zonal Computing Olympiad (ZCO) is a school-level programming contest conducted in India by the Indian Association for Research in Computing Science (IARCS). It is the first stage of the pipeline that leads to INOI (Indian National Olympiad in Informatics) and, for a very small number of students each year, to the International Olympiad in Informatics (IOI). The paper tests algorithmic problem-solving in code, not memorised theory.",
      },
      { kind: 'h2', text: 'What ZCO actually is' },
      {
        kind: 'p',
        text: "Most students meet ZCO as a name on a poster and assume it is a coding quiz. It is not. ZCO is a timed programming contest: you read a few problems, design an algorithm on paper, write a program in a language such as C, C++, Java or Python, and your code is judged automatically against hidden test cases. A program that is logically right but too slow still loses marks, which is what makes the contest a test of algorithmic thinking and not just of syntax.",
      },
      { kind: 'h2', text: 'Who can take it' },
      {
        kind: 'p',
        text: "ZCO is meant for school students, and it is aimed at those who are further along than a first-time beginner. A younger or newer student is usually better served by starting with ZIO, the Zonal Informatics Olympiad, and building towards ZCO. Eligibility details, registration windows and exam dates are set by IARCS each year and do change, so always confirm them on the official IARCS website before you plan around a date.",
      },
      { kind: 'h2', text: 'The exam pattern in plain words' },
      {
        kind: 'ul',
        items: [
          "A single paper of roughly three hours with a small set of problems (typically about three), of increasing difficulty.",
          "Solutions are written as programs and checked by an online judge against many test cases, including large ones that punish slow solutions.",
          "Partial credit is possible when your program passes some test cases but not all, so a correct-but-slow solution still earns something.",
          "You choose your own language from those the contest permits; most serious students settle on C++ or Python.",
        ],
      },
      { kind: 'h2', text: 'Where ZCO can lead' },
      {
        kind: 'p',
        text: "Strong ZCO performers are invited to take INOI, the national round. A very small group from INOI goes on to the national training camp, and from there the team that represents India at the IOI is chosen. Treat that as the long road it is: the realistic first goal is a good ZCO result and the habits that produce it. Our [ZIO to INOI to IOI explainer](/blog/informatics-olympiad-pipeline-zio-inoi-ioi-explained) maps the full ladder.",
      },
      { kind: 'h2', text: 'What a good ZCO result is worth' },
      {
        kind: 'ul',
        items: [
          "A concrete, externally verified measure of your algorithmic ability, which means far more than a certificate of participation.",
          "A direct route into INOI and the national community of informatics students.",
          "A strong line on a profile for computer science programmes, alongside your school record.",
        ],
      },
      { kind: 'h2', text: 'The first three things to do' },
      {
        kind: 'ul',
        items: [
          "Check the current notice on the IARCS website for eligibility, dates and the permitted languages.",
          "Pick one language and stay with it long enough to stop thinking about syntax.",
          "Solve a handful of past ZCO problems untimed, before you decide how much preparation you need.",
        ],
      },
      { kind: 'h2', text: 'How BuzzyBrains Academy fits in' },
      {
        kind: 'p',
        text: "Our [Code Ninja programme](/coding-lab) builds the programming and algorithmic foundations that ZCO assumes, in small batches so each student progresses at their own pace. No programme can guarantee a result in an olympiad, and we would be wary of any that does.",
      },
    ],
    faq: [
      {
        question: 'What does ZCO stand for?',
        answer: 'ZCO stands for Zonal Computing Olympiad. It is conducted by IARCS and is the first stage of the national informatics pipeline for school students.',
      },
      {
        question: 'Which programming languages can I use in ZCO?',
        answer: 'Contests of this kind have typically allowed C, C++, Java and Python. Confirm the current list on the official IARCS notice for the year you are appearing.',
      },
      {
        question: 'Is ZCO only for very advanced students?',
        answer: 'It is aimed at students with some programming and problem-solving practice. Beginners often start with ZIO, then move to ZCO once they are comfortable with loops, arrays and basic algorithms.',
      },
      {
        question: 'What happens after ZCO?',
        answer: 'Top performers are invited to INOI. From INOI, a small number of students are selected for training camps, which lead to the team for the International Olympiad in Informatics.',
      },
    ],
  },
  {
    slug: 'zco-syllabus-topic-by-topic-what-to-learn-first',
    title: 'The ZCO Syllabus, Topic by Topic: What to Learn First and Why',
    description:
      "ZCO has no published textbook syllabus, but the problems follow a recognisable set of topics. Here is a topic-by-topic order for learning them, with what each one is used for.",
    category: 'coding-olympiad',
    datePublished: '2026-10-31',
    readingMinutes: 8,
    ...PROGRAM,
    relatedGuides: [PIPELINE_GUIDE],
    body: [
      {
        kind: 'answer',
        text: "ZCO does not have a fixed textbook syllabus, but its problems consistently draw on a small set of topics: arrays and strings, sorting and searching, simple recursion, greedy algorithms, prefix sums, basic graph ideas and introductory dynamic programming. Learn them roughly in that order, and always through solving problems, not reading chapters.",
      },
      { kind: 'h2', text: 'Why there is no syllabus list' },
      {
        kind: 'p',
        text: "Unlike a school board exam, ZCO publishes no chapter list. What students can rely on is the pattern of past papers, which keep returning to the same families of ideas. The order below is our recommendation for building them so that each topic rests on the one before it.",
      },
      { kind: 'h2', text: 'Stage 1: Programming fundamentals' },
      {
        kind: 'ul',
        items: [
          "Input and output, variables, conditions and loops, written without hesitation.",
          "Functions, and the habit of breaking a problem into small testable pieces.",
          "Arrays (lists) and strings, including reading large inputs quickly.",
        ],
      },
      {
        kind: 'p',
        text: "If any of this is shaky, nothing later will work. Many ZCO attempts are lost to a careless off-by-one error and not to missing theory.",
      },
      { kind: 'h2', text: 'Stage 2: Core techniques' },
      {
        kind: 'ul',
        items: [
          "**Sorting and searching**, including binary search, used far more often than students expect.",
          "**Prefix sums and simple counting**, which turn a slow nested loop into a single pass.",
          "**Brute force with pruning**, so you can tell when trying every possibility is actually fast enough.",
          "**Recursion and backtracking** for small search problems.",
        ],
      },
      { kind: 'h2', text: 'Stage 3: Problem-solving paradigms' },
      {
        kind: 'ul',
        items: [
          "**Greedy algorithms**: making the locally best choice, and learning to argue why it is safe.",
          "**Introductory dynamic programming**: remembering sub-answers to avoid repeating work.",
          "**Basic graphs**: representing a graph, then BFS and DFS to explore it.",
        ],
      },
      { kind: 'h2', text: 'A skill the syllabus does not list: complexity' },
      {
        kind: 'p',
        text: "The most important idea sits underneath every topic. Contest inputs are large, so you must estimate how many steps your solution takes before you write it. A student who can say, in a few seconds, that an approach is far too slow has a bigger advantage than one who knows an extra algorithm.",
      },
      { kind: 'h2', text: 'Topic priority at a glance' },
      {
        kind: 'table',
        headers: ['Topic', 'Priority for ZCO', 'Typical use'],
        rows: [
          ['Arrays and strings', 'Essential', 'Almost every problem'],
          ['Sorting and binary search', 'Essential', 'Ordering data, fast look-ups'],
          ['Prefix sums', 'High', 'Range queries, subarray problems'],
          ['Greedy', 'High', 'Scheduling and selection problems'],
          ['Recursion / backtracking', 'Medium', 'Small search spaces'],
          ['Dynamic programming (basic)', 'Medium to high', 'Optimisation, counting'],
          ['Graphs (BFS / DFS)', 'Medium', 'Grids, connectivity, shortest steps'],
        ],
      },
      { kind: 'h2', text: 'What not to spend time on' },
      {
        kind: 'ul',
        items: [
          "Advanced data structures such as segment trees before the core techniques feel natural.",
          "Learning many topics shallowly. Depth on fewer topics wins.",
          "Reading editorials without attempting the problem first.",
        ],
      },
    ],
    faq: [
      {
        question: 'Is there an official ZCO syllabus?',
        answer: 'There is no published chapter-wise syllabus. Past papers show a consistent set of topics, which is what this guide is based on. Check the IARCS website for any official notice.',
      },
      {
        question: 'Do I need dynamic programming for ZCO?',
        answer: 'Basic dynamic programming helps with the harder problems, but it should come after arrays, sorting, prefix sums and greedy techniques are comfortable.',
      },
      {
        question: 'Do I need to learn graph algorithms?',
        answer: 'A working knowledge of BFS and DFS is useful, since grid and connectivity problems appear in contests. It is lower priority than the core techniques.',
      },
      {
        question: 'How long does it take to cover these topics?',
        answer: 'Most students need several months of steady practice, depending on their starting point. Consistency matters more than speed.',
      },
    ],
  },
  {
    slug: 'best-programming-language-for-zco-cpp-vs-python-vs-java',
    title: 'Best Programming Language for ZCO: C++ vs Python vs Java',
    description:
      "Choosing a language for ZCO is a real decision, because speed limits matter. Here is an honest comparison of C++, Python and Java for contest coding, and how to choose.",
    category: 'coding-olympiad',
    datePublished: '2026-11-02',
    readingMinutes: 6,
    ...PROGRAM,
    relatedGuides: [{ href: '/blog/which-programming-language-should-your-child-learn-first', label: 'Which Programming Language Should Your Child Learn First?' }],
    body: [
      {
        kind: 'answer',
        text: "For ZCO, C++ is the usual first choice of serious competitors because it is fast and has a rich standard library. Python is perfectly workable for beginners and for problems with moderate input sizes, and Java sits between the two. The best language is the one you can write correctly under time pressure, so pick one and commit to it.",
      },
      { kind: 'h2', text: 'Why language choice matters at all' },
      {
        kind: 'p',
        text: "ZCO programs are judged against strict time limits and large inputs. A correct algorithm in a slow language can still time out on the biggest test cases, while the same algorithm in a faster language passes. That is the one place where the language you pick affects your score.",
      },
      { kind: 'h2', text: 'C++' },
      {
        kind: 'ul',
        items: [
          "**Speed:** the fastest of the three for typical contest code.",
          "**Library:** the standard template library gives you sorting, sets, maps and priority queues ready to use.",
          "**Community:** most contest editorials and reference solutions are written in C++.",
          "**Cost:** stricter syntax, and mistakes such as out-of-range access can fail silently.",
        ],
      },
      { kind: 'h2', text: 'Python' },
      {
        kind: 'ul',
        items: [
          "**Readability:** short, clear code with fewer chances for syntax slips.",
          "**Big integers and built-in structures:** lists, dictionaries and sets are very convenient.",
          "**Cost:** slower, so the biggest inputs can time out even with a correct algorithm.",
        ],
      },
      { kind: 'h2', text: 'Java' },
      {
        kind: 'ul',
        items: [
          "**Balance:** faster than Python, with a solid collections library.",
          "**Cost:** verbose to write, and fast input handling needs care.",
        ],
      },
      { kind: 'h2', text: 'Quick comparison' },
      {
        kind: 'table',
        headers: ['Language', 'Speed', 'Ease of writing', 'Best for'],
        rows: [
          ['C++', 'Fastest', 'Moderate', 'Students aiming at INOI and beyond'],
          ['Python', 'Slowest', 'Easiest', 'Beginners and first attempts at ZCO'],
          ['Java', 'Fast', 'Verbose', 'Students already learning Java in school'],
        ],
      },
      { kind: 'h2', text: 'How to choose' },
      {
        kind: 'ul',
        items: [
          "If you are a complete beginner, start with Python to learn algorithmic thinking, then move to C++ once the ideas feel natural.",
          "If you already know Java from school, stay with it for now and learn contest-style input handling.",
          "If you are aiming for INOI or beyond, plan to be comfortable in C++ within a year.",
        ],
      },
      {
        kind: 'p',
        text: "Whatever you pick, do not switch languages in the weeks before the exam. Fluency in one language is worth more than a better language you half know. Confirm the permitted languages on the current IARCS notice.",
      },
    ],
    faq: [
      {
        question: 'Can I clear ZCO using Python?',
        answer: 'You can attempt and score with Python, especially on problems with moderate input sizes. The risk is time-outs on the largest test cases, so efficient algorithms matter even more.',
      },
      {
        question: 'Is C++ compulsory for ZCO?',
        answer: 'No. Contests of this kind have typically permitted several languages. C++ is popular because of its speed, not because it is required.',
      },
      {
        question: 'Should I learn two languages together?',
        answer: 'Not at the start. Build fluency in one, then add a second once your algorithmic skills are steady.',
      },
      {
        question: 'When should a Python user switch to C++?',
        answer: 'When you begin hitting time-limit errors on correct solutions, or when you commit to INOI-level preparation, it is a good moment to switch.',
      },
    ],
  },
  {
    slug: 'how-to-solve-zco-past-papers-step-by-step',
    title: 'How to Solve ZCO Past Papers: A Step-by-Step Method',
    description:
      "Past papers are the single best ZCO resource, but only if you use them properly. Here is a step-by-step method for attempting, reviewing and learning from every problem.",
    category: 'coding-olympiad',
    datePublished: '2026-11-04',
    readingMinutes: 7,
    ...PROGRAM,
    relatedGuides: [{ href: '/blog/common-mistakes-students-make-in-coding-contests', label: 'Common Mistakes Students Make in Coding Contests' }],
    body: [
      {
        kind: 'answer',
        text: "To get the most from ZCO past papers, attempt each problem untimed first, write your solution on paper before coding, test it on your own edge cases, and only then read the official solution. After that, re-solve the problem a week later without help. One problem handled this way teaches more than five skimmed.",
      },
      { kind: 'h2', text: 'Where to find past problems' },
      {
        kind: 'p',
        text: "The IARCS website keeps an archive of previous ZCO and INOI problems, and online practice platforms have hosted many of them with automatic judging. Availability changes over time, so start from the official IARCS pages and use a judge that lets you submit and see which test cases pass.",
      },
      { kind: 'h2', text: 'The 6-step method' },
      {
        kind: 'h3',
        text: 'Step 1: Read twice, restate once',
      },
      {
        kind: 'p',
        text: "Read the statement twice, then explain it in your own words. Work out the input limits at this point, because they tell you how efficient your solution has to be.",
      },
      { kind: 'h3', text: 'Step 2: Solve small cases by hand' },
      {
        kind: 'p',
        text: "Invent tiny inputs and solve them by hand. Patterns usually appear here, long before any code exists.",
      },
      { kind: 'h3', text: 'Step 3: Write the idea, then the complexity' },
      {
        kind: 'p',
        text: "Write the approach in plain sentences and estimate how many steps it takes for the largest input. If it is too slow, return to Step 2 and look for a better idea.",
      },
      { kind: 'h3', text: 'Step 4: Code it and test the edges' },
      {
        kind: 'ul',
        items: [
          "The smallest input, and the largest input.",
          "All equal values, and already-sorted values.",
          "Negative numbers and zero, if the problem allows them.",
        ],
      },
      { kind: 'h3', text: 'Step 5: Read the official solution' },
      {
        kind: 'p',
        text: "Only after a real attempt. Compare ideas, not just code: what did the editorial notice that you did not?",
      },
      { kind: 'h3', text: 'Step 6: Re-solve it a week later' },
      {
        kind: 'p',
        text: "If you cannot, you understood the solution but not the idea. Note the idea in a short log and try again.",
      },
      { kind: 'h2', text: 'Keep a mistake log' },
      {
        kind: 'p',
        text: "After every problem, write one line: what went wrong and what would have prevented it. Over a month, this log shows your real weak spots more clearly than any mock test.",
      },
      { kind: 'h2', text: 'When to start timing yourself' },
      {
        kind: 'p',
        text: "Begin timed, full-paper practice only when untimed solving feels steady. A good rhythm is one untimed problem a day and one timed full paper a week, in the last two months.",
      },
    ],
    faq: [
      {
        question: 'Where can I find ZCO past papers?',
        answer: 'Start with the archive on the official IARCS website. Several practice platforms also host earlier ZCO and INOI problems with automatic judging.',
      },
      {
        question: 'How many past papers should I solve?',
        answer: 'Quality matters more than count. Solving every available past problem with full review is far better than skimming many papers.',
      },
      {
        question: 'Is it fine to read the solution if I am stuck?',
        answer: 'Yes, after a genuine attempt of at least 30 to 45 minutes. Then re-solve the problem later without looking.',
      },
      {
        question: 'Should I practise on paper or only on a computer?',
        answer: 'Plan on paper first and code second. The exam rewards clear thinking, and writing the idea down prevents wasted coding time.',
      },
    ],
  },
  {
    slug: '90-day-zco-study-plan-weekly-targets-and-mock-tests',
    title: 'A 90-Day ZCO Study Plan: Weekly Targets, Mock Tests and Exam-Day Strategy',
    description:
      "A realistic 12-week plan for ZCO preparation, with weekly targets, when to start mock tests, and how to manage the three hours on exam day.",
    category: 'coding-olympiad',
    datePublished: '2026-11-06',
    readingMinutes: 8,
    ...PROGRAM,
    relatedGuides: [PIPELINE_GUIDE],
    body: [
      {
        kind: 'answer',
        text: "A 90-day ZCO plan works best in three phases: weeks 1 to 4 for fundamentals and core techniques, weeks 5 to 8 for greedy, recursion and basic dynamic programming through past problems, and weeks 9 to 12 for timed mock papers and revision. It assumes you already write basic programs in one language; if not, add a month at the start.",
      },
      { kind: 'h2', text: 'Before you begin' },
      {
        kind: 'ul',
        items: [
          "Choose one language and set up a tool you can run code in quickly.",
          "Set aside one hour on weekdays and two on weekends. Short, daily practice beats long, rare sessions.",
          "Create a notebook for ideas and a log for mistakes.",
        ],
      },
      { kind: 'h2', text: 'Phase 1 (Weeks 1 to 4): Fundamentals and core techniques' },
      {
        kind: 'ul',
        items: [
          "**Week 1:** loops, conditions, arrays and strings; solve 15 to 20 easy problems.",
          "**Week 2:** sorting, searching and binary search.",
          "**Week 3:** prefix sums, counting and two-pointer ideas.",
          "**Week 4:** estimating complexity; revisit weak areas from the mistake log.",
        ],
      },
      { kind: 'h2', text: 'Phase 2 (Weeks 5 to 8): Paradigms through past problems' },
      {
        kind: 'ul',
        items: [
          "**Week 5:** greedy algorithms, with proofs of why a greedy choice is safe.",
          "**Week 6:** recursion and backtracking.",
          "**Week 7:** introductory dynamic programming.",
          "**Week 8:** basic graphs (BFS and DFS) on grids and simple networks.",
        ],
      },
      {
        kind: 'p',
        text: "Throughout this phase, solve past ZCO and INOI problems using the method in our [past-paper guide](/blog/how-to-solve-zco-past-papers-step-by-step).",
      },
      { kind: 'h2', text: 'Phase 3 (Weeks 9 to 12): Mocks and revision' },
      {
        kind: 'ul',
        items: [
          "**Weeks 9 and 10:** one timed full paper per week, then a detailed review the next day.",
          "**Week 11:** two timed papers; revisit only the topics your log flags.",
          "**Week 12:** light revision, one last paper early in the week, then rest.",
        ],
      },
      { kind: 'h2', text: 'Exam-day strategy for the three hours' },
      {
        kind: 'ul',
        items: [
          "Read every problem first, spending the first ten minutes choosing the order to attempt them.",
          "Start with the problem you are most sure of; early points build confidence.",
          "Aim for partial credit on harder problems by solving the easy subtasks first.",
          "Test on small inputs before submitting. Leave a few minutes to re-read the output format.",
          "If you are stuck for more than 30 minutes, move on and return later.",
        ],
      },
      { kind: 'h2', text: 'The week before the exam' },
      {
        kind: 'p',
        text: "Do not learn new topics. Sleep well, confirm the exam logistics from the official notice, and make sure your setup and language are ready. A calm, rested mind is worth more than an extra problem.",
      },
      { kind: 'h2', text: 'If you are starting late' },
      {
        kind: 'p',
        text: "With fewer than 90 days, protect fundamentals and core techniques first, and treat dynamic programming and graphs as bonuses. A solid, accurate attempt at the easier problems is a stronger result than a rushed attempt at all of them.",
      },
    ],
    faq: [
      {
        question: 'Is 90 days enough to prepare for ZCO?',
        answer: 'For a student who already writes basic programs comfortably, 90 days of steady practice is a reasonable runway. Complete beginners usually need more time to build fundamentals first.',
      },
      {
        question: 'How many hours a day should I study?',
        answer: 'One focused hour on weekdays and two on weekends is enough for most students. Consistency matters more than long sessions.',
      },
      {
        question: 'When should I start mock tests?',
        answer: 'Start timed full-paper mocks in the last four weeks, once untimed solving feels steady.',
      },
      {
        question: 'What if I get stuck on a problem during the exam?',
        answer: 'Move to another problem after about 30 minutes, secure the points you can, and return later with a fresh view.',
      },
    ],
  },
];
