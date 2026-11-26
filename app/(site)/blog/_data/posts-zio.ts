import type { BlogPost } from './posts';

const PROGRAM = {
  relatedProgramHref: '/coding-lab',
  relatedProgramLabel: 'Code Ninja Program',
} as const;

const PIPELINE_GUIDE = {
  href: '/blog/informatics-olympiad-pipeline-zio-inoi-ioi-explained',
  label: 'The ZIO to INOI to IOI Pipeline Explained',
};

/** ZIO preparation series — 5 posts. */
export const ZIO_POSTS: BlogPost[] = [
  {
    slug: 'zio-for-beginners-what-it-is-and-how-to-start',
    title: 'ZIO for Beginners: What It Is, Who Can Take It and How to Start',
    description:
      "The Zonal Informatics Olympiad (ZIO) is the gentlest entry point into India's informatics pipeline. Here's what the exam is, who it suits, and how a beginner should start.",
    category: 'coding-olympiad',
    datePublished: '2026-11-08',
    readingMinutes: 7,
    ...PROGRAM,
    relatedGuides: [PIPELINE_GUIDE, { href: '/blog/coding-olympiad-grade-wise-preparation-roadmap', label: 'Coding Olympiads: A Grade-Wise Roadmap' }],
    body: [
      {
        kind: 'answer',
        text: "The Zonal Informatics Olympiad (ZIO) is the entry-level exam in India's informatics olympiad pipeline, conducted by IARCS for school students. It tests basic programming and logical reasoning more than advanced algorithms, which makes it the right first contest for a student who has just learned to code and wants a real, external benchmark.",
      },
      { kind: 'h2', text: 'What ZIO is, and what it is not' },
      {
        kind: 'p',
        text: "ZIO is a timed programming contest. You read problems, work out a method, write a program and the judge tests it on hidden inputs. It is lighter than ZCO and INOI: the problems lean on clear thinking, careful reading and solid basics rather than specialised algorithms. It is not a school quiz on computer-science facts, and rote learning will not carry you through.",
      },
      { kind: 'h2', text: 'Who it suits' },
      {
        kind: 'ul',
        items: [
          "Younger school students who have started coding in Python, C++ or Java and want a goal to work towards.",
          "Students who enjoy puzzles and logic, even if their programming is still new.",
          "Students planning to attempt ZCO later who want a lower-pressure first experience.",
        ],
      },
      {
        kind: 'p',
        text: "Eligibility rules, class limits and dates are decided by IARCS each year, so check the official notice before you register.",
      },
      { kind: 'h2', text: 'What to expect in the paper' },
      {
        kind: 'ul',
        items: [
          "A few problems to be solved in a fixed time, written as programs in a permitted language.",
          "Automatic judging against test cases, with partial credit for programs that pass some of them.",
          "Problems that reward careful reading and simulation of a process step by step.",
        ],
      },
      { kind: 'h2', text: 'A beginner starting plan' },
      {
        kind: 'ul',
        items: [
          "**Month 1:** learn one language's basics: input, output, variables, conditions and loops.",
          "**Month 2:** arrays and strings; solve small problems daily.",
          "**Month 3:** start solving past ZIO-style problems untimed, reading solutions after real attempts.",
          "**Month 4:** one timed practice paper a week; review each one carefully.",
        ],
      },
      { kind: 'h2', text: 'Why ZIO is worth attempting even if you do not place' },
      {
        kind: 'p',
        text: "A first contest teaches things practice at home cannot: reading under time pressure, choosing which problem to attempt first and coping with being stuck. Treat your first ZIO as a diagnostic, and use the result to plan the next year of learning.",
      },
      { kind: 'h2', text: 'How BuzzyBrains Academy helps' },
      {
        kind: 'p',
        text: "Our [Code Ninja programme](/coding-lab) takes students from first programs towards contest problems in small batches, with a concept-first approach. We do not promise olympiad results; we promise a solid foundation and honest feedback.",
      },
    ],
    faq: [
      {
        question: 'What does ZIO stand for?',
        answer: 'ZIO stands for Zonal Informatics Olympiad. It is the entry-level exam in the Indian informatics olympiad pipeline, conducted by IARCS.',
      },
      {
        question: 'Do I need to know advanced algorithms for ZIO?',
        answer: 'No. ZIO leans on basic programming, logical reasoning and careful problem reading. Advanced algorithms matter more at ZCO and INOI.',
      },
      {
        question: 'Which language should I use for ZIO?',
        answer: 'Use the language you are most comfortable in among those permitted. Python is a friendly choice for beginners; C++ becomes more useful as you progress.',
      },
      {
        question: 'Can I appear for ZIO and ZCO in different years?',
        answer: 'Many students start with ZIO and move to ZCO later. Check the current IARCS eligibility notice for the rules that apply in your year.',
      },
    ],
  },
  {
    slug: 'logical-thinking-and-problem-solving-for-zio',
    title: 'Logical Thinking and Problem Solving for ZIO: Skills Before Syntax',
    description:
      "ZIO rewards how you think more than how much code you know. Here are practical ways to build logical reasoning, pattern spotting and step-by-step problem breakdown.",
    category: 'coding-olympiad',
    datePublished: '2026-11-10',
    readingMinutes: 7,
    ...PROGRAM,
    relatedGuides: [{ href: '/blog/how-coding-skills-support-maths-science-and-problem-solving', label: 'How Coding Skills Support Maths, Science and Problem-Solving' }],
    body: [
      {
        kind: 'answer',
        text: "ZIO-style problems are won before any code is written: by reading carefully, trying small examples by hand, spotting a pattern and breaking the task into steps. The habit that matters most is to solve the problem on paper first and to treat the program as the last step, not the first.",
      },
      { kind: 'h2', text: 'Thinking comes before typing' },
      {
        kind: 'p',
        text: "Many beginners open an editor the moment they see a problem and start typing. That usually leads to tangled code and wasted time. Strong contest students do the opposite: they spend the first stretch understanding the task completely and only then write code, which is often short because the idea is clear.",
      },
      { kind: 'h2', text: 'Five thinking habits to build' },
      { kind: 'h3', text: '1. Restate the problem' },
      {
        kind: 'p',
        text: "Explain it aloud in your own words. If you cannot, you have not understood it yet. Identify the input, the output and the rule that connects them.",
      },
      { kind: 'h3', text: '2. Work small examples by hand' },
      {
        kind: 'p',
        text: "Invent an input with three or four items and solve it manually, noting each step you take. The steps you write are, in effect, your algorithm.",
      },
      { kind: 'h3', text: '3. Look for a pattern' },
      {
        kind: 'p',
        text: "Try a second and third example. Does something repeat, grow or cancel? Patterns turn long processes into short rules.",
      },
      { kind: 'h3', text: '4. Break the problem into parts' },
      {
        kind: 'p',
        text: "Split the task into stages, such as read the data, process it, then print the result. Solve each stage separately and check it before joining them.",
      },
      { kind: 'h3', text: '5. Test your own thinking' },
      {
        kind: 'p',
        text: "Before submitting, try to break your method with an awkward case: the smallest input, the largest, or one where nothing happens.",
      },
      { kind: 'h2', text: 'Ways to practise away from the screen' },
      {
        kind: 'ul',
        items: [
          "Logic puzzles, grid puzzles and number puzzles, done regularly for ten to fifteen minutes.",
          "Maths problems that ask you to find a pattern or count possibilities.",
          "Explaining a solution to a friend or parent; teaching exposes gaps instantly.",
          "Tracing a small program by hand, writing down the value of each variable at every step.",
        ],
      },
      { kind: 'h2', text: 'A worked mini-example' },
      {
        kind: 'p',
        text: "Suppose a problem asks for how many times the running total of a list of daily scores falls below zero. Walk through a short list by hand, keeping a running total, and you will notice the whole task is one loop with a counter. The thinking took a minute; the program is five lines.",
      },
      { kind: 'h2', text: 'Common thinking traps' },
      {
        kind: 'ul',
        items: [
          "Skimming the statement and missing a condition hidden in one sentence.",
          "Assuming the first idea that comes to mind is correct.",
          "Ignoring the input limits that decide how efficient the solution must be.",
        ],
      },
    ],
    faq: [
      {
        question: 'Can puzzles really help me in ZIO?',
        answer: 'Yes. Logic and pattern puzzles train the same step-by-step reasoning that contest problems need, even without any coding.',
      },
      {
        question: 'Should I write code first or think first?',
        answer: 'Think first. Work small examples by hand, plan the steps, then code. This usually saves time overall.',
      },
      {
        question: 'How much time should I spend on one practice problem?',
        answer: 'Give a genuine attempt of 30 to 45 minutes before reading a solution, then re-solve the problem a few days later.',
      },
      {
        question: 'Is maths ability important for ZIO?',
        answer: 'Comfort with basic arithmetic and pattern-finding helps, but ZIO does not require advanced mathematics.',
      },
    ],
  },
  {
    slug: 'programming-basics-every-zio-aspirant-must-master',
    title: 'Programming Basics Every ZIO Aspirant Must Master',
    description:
      "Before algorithms, there are basics: input, conditions, loops, arrays, strings and functions. Here's the checklist ZIO aspirants should be able to do without thinking.",
    category: 'coding-olympiad',
    datePublished: '2026-11-12',
    readingMinutes: 7,
    ...PROGRAM,
    relatedGuides: [
      { href: '/blog/which-programming-language-should-your-child-learn-first', label: 'Which Programming Language Should Your Child Learn First?' },
    ],
    body: [
      {
        kind: 'answer',
        text: "A ZIO aspirant should be able to read input, use variables and conditions, write loops, work with arrays and strings, and break code into functions, all without having to look anything up. These are the building blocks of every contest solution, and weakness in any one of them costs marks no matter how clever the idea is.",
      },
      { kind: 'h2', text: 'Why basics decide more than you think' },
      {
        kind: 'p',
        text: "In a timed paper, hesitating over how a loop works or how to read a line of input burns minutes and nerves. Students who have automated the basics can spend their attention on the real problem. Fluency, not cleverness, is what basics buy you.",
      },
      { kind: 'h2', text: 'The checklist' },
      { kind: 'h3', text: 'Input and output' },
      {
        kind: 'ul',
        items: [
          "Read a single number, several numbers on one line, and many lines.",
          "Print results in exactly the format the problem asks for.",
          "Handle the case where the number of inputs is given first.",
        ],
      },
      { kind: 'h3', text: 'Variables and arithmetic' },
      {
        kind: 'ul',
        items: [
          "Integer and decimal types, and when each is correct.",
          "Division and remainder, which come up constantly in contest problems.",
          "Awareness of very large values and how your language handles them.",
        ],
      },
      { kind: 'h3', text: 'Conditions' },
      {
        kind: 'ul',
        items: [
          "If, else-if and else, and combining conditions with and, or and not.",
          "Careful use of boundary comparisons, since off-by-one errors are the commonest bug.",
        ],
      },
      { kind: 'h3', text: 'Loops' },
      {
        kind: 'ul',
        items: [
          "For and while loops, and nested loops.",
          "Using a loop to accumulate a total, count items or find a maximum.",
          "Stopping early with break when the answer is found.",
        ],
      },
      { kind: 'h3', text: 'Arrays (lists) and strings' },
      {
        kind: 'ul',
        items: [
          "Creating, filling and traversing an array; index starts at zero.",
          "Reading characters in a string, comparing strings and building new ones.",
          "Basic sorting using the language's built-in function.",
        ],
      },
      { kind: 'h3', text: 'Functions' },
      {
        kind: 'ul',
        items: [
          "Writing a small function with parameters and a return value.",
          "Using functions to keep code short and easy to debug.",
        ],
      },
      { kind: 'h2', text: 'How to check you have really mastered them' },
      {
        kind: 'p',
        text: "Pick ten easy problems and solve each within fifteen minutes, with no searching. If you can, the basics are in place. If you cannot, the problems that slow you down tell you exactly which topic to revisit.",
      },
      { kind: 'h2', text: 'Habits that make code safer' },
      {
        kind: 'ul',
        items: [
          "Use clear variable names; you will read your own code under pressure.",
          "Print intermediate values while debugging, then remove them before submitting.",
          "Run your code on a tiny example before any large one.",
        ],
      },
    ],
    faq: [
      {
        question: 'How much programming do I need before attempting ZIO?',
        answer: 'You should be comfortable with input and output, conditions, loops, arrays and strings. Advanced topics are not required.',
      },
      {
        question: 'Is Scratch enough preparation for ZIO?',
        answer: 'Scratch builds good logic habits, but ZIO needs text-based programming. A move to Python, C++ or Java is recommended before attempting the contest.',
      },
      {
        question: 'How long does it take to learn these basics?',
        answer: 'With regular practice, most students become comfortable in two to three months, though this varies widely.',
      },
      {
        question: 'Should I memorise syntax?',
        answer: 'Practise until the common patterns come without effort. You do not need to memorise rare features.',
      },
    ],
  },
  {
    slug: 'common-zio-mistakes-and-how-to-avoid-them',
    title: 'Common ZIO Mistakes and How to Avoid Them',
    description:
      "Most lost marks in ZIO come from avoidable errors: misread statements, missed edge cases, wrong output formats and poor time use. Here is how to prevent each of them.",
    category: 'coding-olympiad',
    datePublished: '2026-11-14',
    readingMinutes: 6,
    ...PROGRAM,
    relatedGuides: [{ href: '/blog/common-mistakes-students-make-in-coding-contests', label: 'Common Mistakes Students Make in Coding Contests' }],
    body: [
      {
        kind: 'answer',
        text: "The most common ZIO mistakes are misreading the problem, ignoring edge cases, printing in the wrong format, writing a solution that is too slow, and mismanaging time. All of them are habits, which means they can be trained out of you with deliberate practice.",
      },
      { kind: 'h2', text: 'Mistake 1: Misreading the problem' },
      {
        kind: 'p',
        text: "A single overlooked sentence, such as a condition on who counts or when counting stops, can invalidate an entire solution. Read twice, underline the conditions and check your understanding against the sample input and output before you code.",
      },
      { kind: 'h2', text: 'Mistake 2: Skipping edge cases' },
      {
        kind: 'ul',
        items: [
          "The smallest possible input, such as a single item or an empty case.",
          "All values equal, or all values already in order.",
          "Zero or negative numbers, if the statement allows them.",
          "The largest allowed input, to check speed and overflow.",
        ],
      },
      { kind: 'h2', text: 'Mistake 3: Wrong output format' },
      {
        kind: 'p',
        text: "Judges compare output exactly. Extra text, missing spaces or the wrong number of lines can turn a correct answer into a failed test. Print only what is asked, in the order asked.",
      },
      { kind: 'h2', text: 'Mistake 4: A correct but slow solution' },
      {
        kind: 'p',
        text: "Trying every possibility works for small inputs and fails on large ones. Check the input limits at the start and estimate roughly how many steps your method takes before you write the code.",
      },
      { kind: 'h2', text: 'Mistake 5: Poor time management' },
      {
        kind: 'ul',
        items: [
          "Spending most of the paper on one hard problem and leaving easier ones untouched.",
          "Not reading all the problems first, so the easiest one is found too late.",
          "Not leaving time at the end to re-check outputs.",
        ],
      },
      { kind: 'h2', text: 'Mistake 6: Weak fundamentals' },
      {
        kind: 'p',
        text: "Off-by-one errors, wrong loop bounds and confusion over indices all come from shaky basics. If these keep appearing in your mistake log, go back to the fundamentals before taking on harder problems.",
      },
      { kind: 'h2', text: 'A pre-submission checklist' },
      {
        kind: 'ul',
        items: [
          "Does my program match every sample?",
          "Have I tried the smallest and largest inputs?",
          "Is my output format exactly as required?",
          "Will it finish in time for the biggest case?",
        ],
      },
      { kind: 'h2', text: 'Turn mistakes into progress' },
      {
        kind: 'p',
        text: "Keep a short log. After each practice paper, write the mistake and the habit that would have prevented it. Patterns emerge quickly, and they are the most reliable guide to what to practise next.",
      },
    ],
    faq: [
      {
        question: 'What is the biggest reason students lose marks in ZIO?',
        answer: 'Misreading the statement and missing edge cases are among the most common causes, along with output-format slips.',
      },
      {
        question: 'How do I find edge cases?',
        answer: 'Ask what the smallest, largest, empty and all-equal inputs would be, and test your solution on each.',
      },
      {
        question: 'Does the output format really matter?',
        answer: 'Yes. Automatic judges compare output exactly, so stray text or wrong spacing can fail an otherwise correct program.',
      },
      {
        question: 'How can I improve time management?',
        answer: 'Practise full timed papers, read all problems first, start with the easiest and set a time limit per problem.',
      },
    ],
  },
  {
    slug: 'from-zio-to-zco-year-by-year-path-for-school-students',
    title: 'From ZIO to ZCO: A Year-by-Year Path for School Students and How Parents Can Help',
    description:
      "A practical year-by-year path from a first ZIO to ZCO and beyond, plus concrete ways parents can support a young competitive programmer without adding pressure.",
    category: 'coding-olympiad',
    datePublished: '2026-11-16',
    readingMinutes: 8,
    ...PROGRAM,
    relatedGuides: [
      PIPELINE_GUIDE,
      { href: '/blog/coding-olympiad-grade-wise-preparation-roadmap', label: 'Coding Olympiads: A Grade-Wise Roadmap' },
    ],
    body: [
      {
        kind: 'answer',
        text: "A sensible path is to attempt ZIO once the basics of programming are solid, build algorithmic skills over the following year, and then attempt ZCO. Students who spread preparation over two to three years usually do better and enjoy it more than those who cram. Parents help most by providing time, patience and perspective, not pressure.",
      },
      { kind: 'h2', text: 'The big picture' },
      {
        kind: 'p',
        text: "India's informatics pipeline is long. ZIO and ZCO are entry points; INOI and the national camps come later. The goal of the early years is not a medal; it is to build a student who can solve unfamiliar problems calmly.",
      },
      { kind: 'h2', text: 'Year 1: Foundations and first contest' },
      {
        kind: 'ul',
        items: [
          "Learn one language well and write many small programs.",
          "Practise logic puzzles and pattern problems alongside coding.",
          "Attempt ZIO as a first benchmark, treating the result as feedback.",
        ],
      },
      { kind: 'h2', text: 'Year 2: Algorithmic skills' },
      {
        kind: 'ul',
        items: [
          "Learn sorting, searching, prefix sums and complexity estimation.",
          "Move towards C++ if aiming for INOI, or deepen Python if enjoying it.",
          "Solve past ZIO and ZCO problems with a mistake log.",
        ],
      },
      { kind: 'h2', text: 'Year 3: ZCO and beyond' },
      {
        kind: 'ul',
        items: [
          "Add greedy methods, recursion, basic dynamic programming and graphs.",
          "Take regular timed mocks and attempt ZCO.",
          "If the result is strong, begin INOI-level preparation.",
        ],
      },
      {
        kind: 'p',
        text: "Timelines vary. A student who starts programming late can still follow the same sequence in a compressed form, and one who starts early can enjoy a slower pace. See our [grade-wise roadmap](/blog/coding-olympiad-grade-wise-preparation-roadmap) for how this maps to classes.",
      },
      { kind: 'h2', text: 'How parents can help' },
      {
        kind: 'ul',
        items: [
          "**Protect time:** a consistent daily slot, even thirty minutes, beats occasional long sessions.",
          "**Ask about the thinking:** 'How did you approach it?' is more useful than 'Did you get it right?'",
          "**Normalise being stuck:** struggle is part of learning, not a sign of failure.",
          "**Celebrate effort and progress,** not only ranks.",
          "**Keep balance:** sleep, sport and school work matter for long-term success.",
          "**Verify details yourself:** check dates and rules on the official IARCS pages, not through hearsay.",
        ],
      },
      { kind: 'h2', text: 'What to avoid' },
      {
        kind: 'ul',
        items: [
          "Comparing your child with others who started earlier.",
          "Switching resources constantly instead of finishing a chosen path.",
          "Treating a single contest as a verdict on ability.",
        ],
      },
      { kind: 'h2', text: 'How BuzzyBrains Academy supports the journey' },
      {
        kind: 'p',
        text: "Our [Code Ninja programme](/coding-lab) runs in small batches so students progress at their own speed, and we keep parents informed. Whatever route you choose, a steady, enjoyable practice habit is the best predictor of long-term progress.",
      },
    ],
    faq: [
      {
        question: 'How long does it take to go from ZIO to ZCO?',
        answer: 'Many students take one to two years of steady practice, though it depends on the starting point and weekly time spent.',
      },
      {
        question: 'Should my child attempt ZIO before ZCO?',
        answer: 'It is often a good idea, since ZIO offers a lower-pressure first contest experience. Check the IARCS eligibility notice for the rules in your year.',
      },
      {
        question: 'How can parents help if they do not know programming?',
        answer: 'By protecting practice time, asking about the thinking behind solutions, and encouraging a calm attitude to mistakes. You do not need to know code.',
      },
      {
        question: 'What if my child does not do well in the first contest?',
        answer: 'Treat it as feedback. Review the mistakes together, adjust the plan and try again next year. Most strong competitors improved over several attempts.',
      },
    ],
  },
];
