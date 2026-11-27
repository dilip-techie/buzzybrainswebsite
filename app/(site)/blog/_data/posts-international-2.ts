import type { BlogPost } from './posts';

const DATE = '2026-11-27';

const VERIFY =
  "Dates, fees, eligibility and admissions policies change from year to year, so confirm them on the organiser's or university's official website before you decide.";

/** Batch 2: university and exam-planning articles for the USA, Canada, Singapore and Australia. */
export const INTERNATIONAL_POSTS_2: BlogPost[] = [
  {
    slug: 'how-us-universities-treat-maths-contest-results-amc-aime-and-ukmt',
    title: 'How US Universities Treat Maths Contest Results Like AMC, AIME and UKMT',
    description:
      'US universities read applications as a whole. Here is how contest results such as AMC, AIME and UKMT fit in, where to list them, and what they cannot do.',
    category: 'ivy-colleges',
    datePublished: DATE,
    readingMinutes: 6,
    relatedProgramHref: '/online-coaching-usa',
    relatedProgramLabel: 'Online Coaching for Students in the USA',
    relatedGuides: [
      { href: '/blog/is-the-amc-worth-it-amc-8-10-12-and-the-path-to-aime', label: 'Is the AMC Worth It?' },
      { href: '/blog/do-universities-require-ukmt-scores-what-admissions-teams-actually-look-for', label: 'Do Universities Require UKMT Scores?' },
    ],
    body: [
      {
        kind: 'answer',
        text: 'US universities do not require contest results, but admissions readers treat them as evidence of depth and independent problem solving, especially for mathematics, computer science, engineering and economics. They support an application that already has strong grades and a clear interest. They cannot replace either.',
      },
      { kind: 'h2', text: 'How readers use contest results' },
      {
        kind: 'ul',
        items: [
          'As proof that a student goes beyond the school syllabus.',
          'As a signal of persistence: results over several years say more than a single certificate.',
          'As context for a stated interest in a subject, for example in a personal essay.',
        ],
      },
      { kind: 'h2', text: 'Which results carry the most weight' },
      {
        kind: 'table',
        headers: ['Result', 'What it signals'],
        rows: [
          ['AMC 10 or 12 score that qualifies for AIME', 'A strong, nationally recognised mathematical achievement'],
          ['AIME qualification or a high AIME score', 'A selective, widely understood achievement'],
          ['UKMT Gold, Best in School, or an Olympiad invitation', 'A credible international benchmark, explained briefly'],
          ['Participation certificates', 'Interest, but little distinction on their own'],
        ],
      },
      { kind: 'h2', text: 'Where and how to list them' },
      {
        kind: 'p',
        text: 'Most applicants list named awards in the honours section and longer commitments, such as mentoring younger students or running a maths club, in the activities section. Write each contest in full with its organiser, because readers may not recognise an acronym.',
      },
      { kind: 'h2', text: 'What they cannot do' },
      {
        kind: 'p',
        text: `Contest results do not offset weak grades or a poor essay, and universities differ in how they weigh them. Test requirements also differ: several highly selective universities have reinstated test requirements while others remain optional. ${VERIFY}`,
      },
    ],
    faq: [
      {
        question: 'Is AIME qualification necessary for a top university?',
        answer: 'No. It is a strong supporting achievement, but admission depends on the whole application.',
      },
      {
        question: 'Do UKMT results mean anything in the USA?',
        answer: 'They are understood as an international maths contest result, especially when you explain the organiser and what the award means.',
      },
      {
        question: 'Should I list every contest I took?',
        answer: 'List the strongest results and a consistent pattern, not every certificate.',
      },
    ],
  },
  {
    slug: 'what-canadian-universities-look-for-from-maths-and-science-applicants',
    title: 'What Canadian Universities Look For From Maths and Science Applicants',
    description:
      'Canadian universities usually admit on school grades in required subjects, and some programs ask for more. Here is how to plan for maths, science and engineering applications.',
    category: 'ivy-colleges',
    datePublished: DATE,
    readingMinutes: 6,
    relatedProgramHref: '/online-coaching-canada',
    relatedProgramLabel: 'Online Coaching for Students in Canada',
    relatedGuides: [
      { href: '/blog/canadian-maths-contests-gauss-pascal-cayley-fermat-euclid-explained', label: 'Canadian Maths Contests Explained' },
      { href: '/blog/ap-vs-ib-which-is-better-for-us-and-canadian-university-applications', label: 'AP vs IB' },
    ],
    body: [
      {
        kind: 'answer',
        text: 'Canadian universities generally admit students mainly on grades in specific prerequisite subjects, such as Mathematics, Physics and Chemistry for engineering and science. Some programs also ask for supplementary information. Contest results and strong extracurricular work can support an application but rarely replace the grade requirement.',
      },
      { kind: 'h2', text: 'What usually matters most' },
      {
        kind: 'ul',
        items: [
          'Grades in the required prerequisite courses, which differ by program and province.',
          'The rigour of the courses taken, including IB or AP options where available.',
          'For some programs, a supplementary application or short responses.',
        ],
      },
      { kind: 'h2', text: 'Where contests and extra work help' },
      {
        kind: 'p',
        text: 'Contests such as the CEMC series, the Canadian Open Mathematics Challenge, the AMC and UKMT show problem-solving ability that grades alone do not. They are most useful for competitive programs, scholarships and supplementary applications.',
      },
      { kind: 'h2', text: 'A planning checklist' },
      {
        kind: 'table',
        headers: ['When', 'What to do'],
        rows: [
          ['Grade 9 to 10', 'Choose courses that keep science and maths options open'],
          ['Grade 10 to 11', 'Check prerequisites and deadlines for target programs'],
          ['Grade 11', 'Build a strong record and add one or two contests'],
          ['Grade 12', 'Apply on time and prepare supplementary material'],
        ],
      },
      { kind: 'p', text: VERIFY },
    ],
    faq: [
      {
        question: 'Do Canadian universities require the SAT?',
        answer: 'Generally not. The SAT matters mainly for students also applying to US universities.',
      },
      {
        question: 'Do IB and AP help for Canadian admissions?',
        answer: 'Many universities consider them alongside provincial grades, and some give credit for strong results. Policies vary.',
      },
      {
        question: 'Can contests replace weak grades?',
        answer: 'Rarely. Grades in the required subjects remain the main requirement.',
      },
    ],
  },
  {
    slug: 'contest-and-exam-calendar-for-students-in-the-usa-sat-ap-amc-and-ukmt',
    title: 'A Contest and Exam Calendar for Students in the USA: SAT, AP, AMC and UKMT',
    description:
      'A month-by-month view of the main tests and contests for students in the USA, so families can plan preparation without clashes.',
    category: 'olympiad',
    datePublished: DATE,
    readingMinutes: 5,
    relatedProgramHref: '/online-coaching-usa',
    relatedProgramLabel: 'Online Coaching for Students in the USA',
    relatedGuides: [
      { href: '/blog/how-students-outside-the-uk-can-enter-ukmt-challenges-step-by-step', label: 'How Students Outside the UK Can Enter UKMT' },
    ],
    body: [
      {
        kind: 'answer',
        text: 'The US year has a predictable rhythm: AMC 10 and 12 in the autumn, UKMT Senior in October, AMC 8 and AIME in winter, SAT dates through most of the year, and AP exams in May. Planning backwards from these dates avoids clashes and gives each contest enough preparation time.',
      },
      { kind: 'h2', text: 'The typical year' },
      {
        kind: 'table',
        headers: ['Period', 'Typical events'],
        rows: [
          ['October', 'UKMT Senior Mathematical Challenge (7 October 2026); SAT dates'],
          ['November', 'AMC 10 and AMC 12 (typically autumn); SAT dates'],
          ['January', 'AMC 8; UKMT Intermediate (27 January 2027)'],
          ['February to March', 'AIME for qualifying students; SAT dates'],
          ['May', 'AP exams; UKMT Junior (5 May 2027); SAT dates'],
        ],
      },
      { kind: 'h2', text: 'How to plan around it' },
      {
        kind: 'ul',
        items: [
          'Pick two or three events per year, not all of them.',
          'Schedule SAT dates away from AMC and AP windows.',
          'Start preparing 8 to 12 weeks before each contest.',
        ],
      },
      { kind: 'p', text: `Only the UKMT dates above are taken from the organiser's published 2026 to 2027 schedule. Dates for the others are typical, not fixed. ${VERIFY}` },
    ],
    faq: [
      {
        question: 'How many contests should a student take?',
        answer: 'Two or three taken consistently usually beats many taken once.',
      },
      {
        question: 'Should I avoid contests during AP season?',
        answer: 'Try to space them out. Heavy AP preparation in April and May is a poor time to add a new contest.',
      },
      {
        question: 'Where do I find exact dates?',
        answer: 'On the official sites of the College Board, the MAA and UKMT, which publish them each year.',
      },
    ],
  },
  {
    slug: 'sat-study-plan-by-grade-when-to-start-and-what-to-do-each-year',
    title: 'SAT Study Plan by Grade: When to Start and What to Do Each Year',
    description:
      'A grade-by-grade plan for SAT preparation, from building maths and reading foundations in Grade 9 to final practice tests in Grade 12.',
    category: 'sat-exam',
    datePublished: DATE,
    readingMinutes: 6,
    relatedProgramHref: '/sat-exam',
    relatedProgramLabel: 'SAT Preparation',
    relatedGuides: [
      { href: '/blog/digital-sat-format-scoring-and-how-to-prepare', label: 'The Digital SAT: Format, Scoring and How to Prepare' },
      { href: '/blog/sat-vs-act-which-test-should-students-in-the-usa-and-canada-take', label: 'SAT vs ACT' },
    ],
    body: [
      {
        kind: 'answer',
        text: 'Most students do best by building foundations in Grades 9 and 10, starting focused SAT preparation two to four months before their first official test in Grade 11, and keeping time for one retake in Grade 12. Starting earlier with reading and algebra helps more than cramming test tricks.',
      },
      { kind: 'h2', text: 'The plan by grade' },
      {
        kind: 'table',
        headers: ['Grade', 'Focus'],
        rows: [
          ['Grade 9', 'Read widely, strengthen algebra and geometry, write regularly'],
          ['Grade 10', 'Take an official diagnostic, fix content gaps, build grammar skills'],
          ['Grade 11 (autumn)', 'Start focused preparation with timed modules'],
          ['Grade 11 (spring)', 'Take the first official test after several full practice tests'],
          ['Grade 12 (autumn)', 'Retake if needed, with targeted practice on weak areas'],
        ],
      },
      { kind: 'h2', text: 'What a week of preparation looks like' },
      {
        kind: 'ul',
        items: [
          'Three or four focused sessions of 45 to 60 minutes.',
          'One timed module or mini-test.',
          'One review session on the error log.',
        ],
      },
      { kind: 'h2', text: 'Common mistakes' },
      {
        kind: 'ul',
        items: [
          'Taking full tests without reviewing mistakes.',
          'Ignoring grammar rules because they feel small.',
          'Practising only the topics that feel comfortable.',
        ],
      },
      { kind: 'p', text: VERIFY },
    ],
    faq: [
      {
        question: 'Is it too late to start in Grade 12?',
        answer: 'No, but time is tighter. A focused three-month plan can still raise a score, especially if you take a diagnostic first.',
      },
      {
        question: 'How many practice tests should I take?',
        answer: 'Enough that each one is followed by a proper review. Four to eight full tests over the preparation period is typical.',
      },
      {
        question: 'Should I take the SAT more than once?',
        answer: 'Many students take it twice. Check each university policy on score reporting.',
      },
    ],
  },
  {
    slug: 'how-to-prepare-for-ap-exams-study-plan-and-how-scores-work',
    title: 'How to Prepare for AP Exams: A Study Plan and How Scores Work',
    description:
      'AP exams are scored 1 to 5 and held each May. Here is how scoring works and a practical plan from September to the exam.',
    category: 'ap-exam',
    datePublished: DATE,
    readingMinutes: 6,
    relatedProgramHref: '/ap-exam',
    relatedProgramLabel: 'AP Exam Preparation',
    relatedGuides: [
      { href: '/blog/ap-vs-ib-which-is-better-for-us-and-canadian-university-applications', label: 'AP vs IB' },
      { href: '/blog/ap-computer-science-a-vs-computer-science-principles-which-to-take', label: 'AP Computer Science A vs Principles' },
    ],
    body: [
      {
        kind: 'answer',
        text: 'AP exams are held each May and scored from 1 to 5. A score of 3 or higher is generally treated as qualified, and many universities give credit or placement for 4 or 5, though policies differ. The best preparation is steady work through the year, followed by timed practice on past free-response questions.',
      },
      { kind: 'h2', text: 'A plan from September to May' },
      {
        kind: 'table',
        headers: ['Period', 'Focus'],
        rows: [
          ['September to December', 'Keep up with the course and build an error log'],
          ['January to March', 'Fill content gaps and start past free-response questions'],
          ['April', 'Take full timed practice exams'],
          ['Early May', 'Review the error log and rest'],
        ],
      },
      { kind: 'h2', text: 'What to practise' },
      {
        kind: 'ul',
        items: [
          'Past free-response questions, scored against the official scoring guidelines.',
          'Multiple-choice sets under time limits.',
          'Key graphs, formulas and definitions for the subject.',
        ],
      },
      { kind: 'h2', text: 'How many APs to take' },
      {
        kind: 'p',
        text: `Depth in a few subjects that match your intended major usually helps more than a thin spread across many. Balance AP work with SAT dates and contests. ${VERIFY}`,
      },
    ],
    faq: [
      {
        question: 'What is a good AP score?',
        answer: 'A 3 is generally qualified, and 4 or 5 is stronger. What counts for credit depends on the university.',
      },
      {
        question: 'Can I self-study an AP course?',
        answer: 'Some students do, but it needs discipline. A teacher or coach helps with the free-response sections.',
      },
      {
        question: 'Do AP scores matter for admission?',
        answer: 'Universities consider the courses you chose and, where reported, your scores, alongside your grades.',
      },
    ],
  },
  {
    slug: 'ib-vs-cambridge-a-level-in-singapore-which-should-your-child-choose',
    title: 'IB vs Cambridge A-Level in Singapore: Which Should Your Child Choose?',
    description:
      'International schools in Singapore offer the IB Diploma and Cambridge A-Levels. Here is how they differ and how to choose for a child heading to universities in Singapore, the UK or the USA.',
    category: 'ib',
    datePublished: DATE,
    readingMinutes: 6,
    relatedProgramHref: '/online-coaching-singapore',
    relatedProgramLabel: 'Online Coaching for Students in Singapore',
    relatedGuides: [
      { href: '/blog/ap-vs-ib-which-is-better-for-us-and-canadian-university-applications', label: 'AP vs IB' },
      { href: '/blog/sasmo-and-the-singapore-mathematical-olympiad-which-should-your-child-take', label: 'SASMO and the Singapore Mathematical Olympiad' },
    ],
    body: [
      {
        kind: 'answer',
        text: 'The IB Diploma is a broad programme of six subjects plus core components, while Cambridge A-Levels let students study three or four subjects in depth. A-Levels suit students who know their direction and want depth, and the IB suits students who want breadth and are comfortable with a heavy workload. Both are recognised by universities in Singapore, the UK and the USA.',
      },
      { kind: 'h2', text: 'How they compare' },
      {
        kind: 'table',
        headers: ['', 'IB Diploma', 'Cambridge A-Level'],
        rows: [
          ['Subjects', 'Six, plus Theory of Knowledge, Extended Essay and CAS', 'Usually three or four'],
          ['Style', 'Broad, with writing and research', 'Deep, subject focused'],
          ['Scoring', 'Out of 45', 'Grades per subject'],
          ['Flexibility', 'A set structure', 'Free choice of subjects'],
        ],
      },
      { kind: 'h2', text: 'How to choose' },
      {
        kind: 'ul',
        items: [
          'Choose A-Levels if the student already knows the degree they want and the subjects it needs.',
          'Choose the IB if the student is undecided and likes a mix of subjects and projects.',
          'Check the entry requirements for the target universities in each country.',
        ],
      },
      { kind: 'p', text: `Local students at junior colleges usually take the Singapore-Cambridge A-Level, which is a separate route. ${VERIFY}` },
    ],
    faq: [
      {
        question: 'Which is harder?',
        answer: 'They are hard in different ways: the IB through breadth and workload, A-Levels through depth.',
      },
      {
        question: 'Can I apply to US universities from either?',
        answer: 'Yes. Both are widely recognised, though universities may ask for different supporting tests.',
      },
      {
        question: 'Does either help with maths contests?',
        answer: 'Strong mathematics in either route helps. Contests such as AMC and UKMT add extra problem-solving practice.',
      },
    ],
  },
  {
    slug: 'hsc-vce-or-ib-how-australian-students-decide',
    title: 'HSC, VCE or IB: How Australian Students Decide',
    description:
      'Australian senior students follow a state certificate or the IB Diploma. Here is how to compare them and what to consider for university entry in Australia and abroad.',
    category: 'ib',
    datePublished: DATE,
    readingMinutes: 6,
    relatedProgramHref: '/online-coaching-australia',
    relatedProgramLabel: 'Online Coaching for Students in Australia',
    relatedGuides: [
      { href: '/blog/american-amc-vs-australian-mathematics-competition-which-is-which', label: 'American AMC vs Australian Mathematics Competition' },
    ],
    body: [
      {
        kind: 'answer',
        text: 'Most Australian students follow their state senior certificate (such as the NSW HSC or the Victorian VCE) and enter university through an ATAR rank, while some schools offer the IB Diploma instead. The state certificate is usually the simplest route for Australian universities, and the IB suits students who may study abroad.',
      },
      { kind: 'h2', text: 'The options at a glance' },
      {
        kind: 'table',
        headers: ['Route', 'Where', 'Best for'],
        rows: [
          ['HSC', 'New South Wales', 'Entry to Australian universities through the ATAR'],
          ['VCE', 'Victoria', 'Entry to Australian universities through the ATAR'],
          ['QCE, WACE and other state certificates', 'Other states', 'Entry to Australian universities'],
          ['IB Diploma', 'Selected schools', 'Students who may study in Australia or abroad'],
        ],
      },
      { kind: 'h2', text: 'What to consider' },
      {
        kind: 'ul',
        items: [
          'The school you attend often decides which option is realistic.',
          'Students aiming at US or UK universities may benefit from IB or AP alongside their certificate.',
          'Mathematics level choices matter for science, engineering and economics degrees.',
        ],
      },
      { kind: 'h2', text: 'Adding contests and tests' },
      {
        kind: 'p',
        text: `Contests such as the Australian Mathematics Competition, the American AMC and UKMT build depth, and SAT or AP suit students applying to US universities. ${VERIFY}`,
      },
    ],
    faq: [
      {
        question: 'Is the IB accepted by Australian universities?',
        answer: 'Yes. IB results are converted into an equivalent rank for entry.',
      },
      {
        question: 'Do I need the SAT for Australian universities?',
        answer: 'Generally no. The SAT matters mainly for students also applying to US universities.',
      },
      {
        question: 'Which maths level should I take?',
        answer: 'Check the prerequisites of your target degrees. Science, engineering and economics degrees usually expect a higher level of mathematics.',
      },
    ],
  },
  {
    slug: 'how-to-build-a-maths-profile-for-us-university-applications-from-grade-8',
    title: 'How to Build a Maths Profile for US University Applications From Grade 8',
    description:
      'A grade-by-grade plan to build a credible maths profile for US universities, using school results, contests and independent projects.',
    category: 'ivy-colleges',
    datePublished: DATE,
    readingMinutes: 6,
    relatedProgramHref: '/online-coaching-usa',
    relatedProgramLabel: 'Online Coaching for Students in the USA',
    relatedGuides: [
      { href: '/blog/how-us-universities-treat-maths-contest-results-amc-aime-and-ukmt', label: 'How US Universities Treat Contest Results' },
      { href: '/blog/is-the-amc-worth-it-amc-8-10-12-and-the-path-to-aime', label: 'Is the AMC Worth It?' },
    ],
    body: [
      {
        kind: 'answer',
        text: 'A strong maths profile combines excellent school results, a few contests taken consistently, some independent depth such as a project or teaching, and a clear story about why the subject matters to the student. Starting in Grade 8 gives enough time to build all four without rushing.',
      },
      { kind: 'h2', text: 'The four building blocks' },
      {
        kind: 'ul',
        items: [
          'School results: top grades in the strongest maths and science courses available.',
          'Contests: AMC and, where possible, UKMT or another international contest, taken regularly.',
          'Depth: a project, reading list, programming work or mentoring younger students.',
          'Story: an honest account of what draws the student to the subject.',
        ],
      },
      { kind: 'h2', text: 'A grade-by-grade plan' },
      {
        kind: 'table',
        headers: ['Grade', 'Focus'],
        rows: [
          ['8', 'AMC 8, strengthen number sense and algebra'],
          ['9', 'AMC 10, begin a small independent project'],
          ['10', 'AMC 10 again, add UKMT or another international contest'],
          ['11', 'AMC 12, SAT or AP maths, and applications planning'],
          ['12', 'Applications, essays and interviews'],
        ],
      },
      { kind: 'h2', text: 'Avoid these traps' },
      {
        kind: 'ul',
        items: [
          'Collecting many certificates without depth.',
          'Starting too late to build real skill.',
          'Letting contest preparation damage school grades.',
        ],
      },
      { kind: 'p', text: VERIFY },
    ],
    faq: [
      {
        question: 'Is a maths profile only for future mathematicians?',
        answer: 'No. It also supports applications in computer science, engineering, economics and the sciences.',
      },
      {
        question: 'How many contests are enough?',
        answer: 'Two or three taken consistently over several years is usually more convincing than many taken once.',
      },
      {
        question: 'What counts as an independent project?',
        answer: 'Anything that shows self-directed work: a paper, a programme, a data analysis or a teaching initiative.',
      },
    ],
  },
  {
    slug: 'balancing-school-sat-ap-and-maths-contests-without-burning-out',
    title: 'Balancing School, SAT, AP and Maths Contests Without Burning Out',
    description:
      'Students who take on school, tests and contests need a plan. Here is how to schedule the year, set priorities and protect rest.',
    category: 'sat-exam',
    datePublished: DATE,
    readingMinutes: 5,
    relatedProgramHref: '/online-coaching-usa',
    relatedProgramLabel: 'Online Coaching for Students in the USA',
    relatedGuides: [
      { href: '/blog/contest-and-exam-calendar-for-students-in-the-usa-sat-ap-amc-and-ukmt', label: 'A Contest and Exam Calendar for the USA' },
      { href: '/blog/sat-study-plan-by-grade-when-to-start-and-what-to-do-each-year', label: 'SAT Study Plan by Grade' },
    ],
    body: [
      {
        kind: 'answer',
        text: 'The key is to choose a few priorities per year, sequence them so that peaks do not overlap, and protect time for sleep and rest. School results come first, then one main test or contest focus per term. Doing less, with real practice, beats doing everything in a hurry.',
      },
      { kind: 'h2', text: 'A simple way to set priorities' },
      {
        kind: 'ul',
        items: [
          'List every test and contest being considered, with its date.',
          'Mark the two or three that matter most for the student\'s goals.',
          'Drop or postpone the rest.',
        ],
      },
      { kind: 'h2', text: 'A sample weekly rhythm' },
      {
        kind: 'table',
        headers: ['Day', 'Focus'],
        rows: [
          ['Weekdays', 'School homework first, then 30 to 45 minutes of test or contest practice'],
          ['Weekend', 'One longer timed session and a review of mistakes'],
          ['One evening', 'Fully free'],
        ],
      },
      { kind: 'h2', text: 'Warning signs to watch for' },
      {
        kind: 'ul',
        items: [
          'Falling school marks or missed deadlines.',
          'Constant tiredness or loss of interest.',
          'Practice that has become mechanical, without review.',
        ],
      },
      { kind: 'p', text: 'When any of these appear, reduce the load and talk to the student before adding anything new.' },
    ],
    faq: [
      {
        question: 'How many hours of extra practice per week is reasonable?',
        answer: 'It depends on the student, but three to six focused hours alongside school is a common range. Quality and review matter more than hours.',
      },
      {
        question: 'Should we skip a contest if school is heavy?',
        answer: 'Yes. A skipped contest is better than a stressed student with falling grades.',
      },
      {
        question: 'When is the busiest period?',
        answer: 'Usually spring, when AP exams, SAT dates and school finals overlap, so plan earlier preparation for those months.',
      },
    ],
  },
  {
    slug: 'computer-science-for-school-students-ap-cs-ib-cs-and-coding-olympiads-compared',
    title: 'Computer Science for School Students: AP CS, IB CS and Coding Olympiads Compared',
    description:
      'Students interested in computing have several routes. Here is how AP Computer Science, IB Computer Science and coding olympiads differ and how they fit together.',
    category: 'coding-olympiad',
    datePublished: DATE,
    readingMinutes: 6,
    relatedProgramHref: '/coding-olympiads',
    relatedProgramLabel: 'Coding Olympiads',
    relatedGuides: [
      { href: '/blog/ap-computer-science-a-vs-computer-science-principles-which-to-take', label: 'AP Computer Science A vs Principles' },
    ],
    body: [
      {
        kind: 'answer',
        text: 'AP and IB Computer Science are school courses with exams, while coding olympiads are competitions that test algorithmic problem solving. They complement each other: the courses give structure and credentials, and olympiads build the problem-solving depth that computer science degrees reward.',
      },
      { kind: 'h2', text: 'How they compare' },
      {
        kind: 'table',
        headers: ['Route', 'What it is', 'What it builds'],
        rows: [
          ['AP Computer Science Principles', 'A broad introductory course with a project', 'Understanding of computing and its impact'],
          ['AP Computer Science A', 'A Java programming course with an exam', 'Programming fundamentals and problem solving'],
          ['IB Computer Science', 'A Diploma subject at standard or higher level', 'Concepts, programming and a project'],
          ['Coding olympiads', 'Timed contests solved with programs', 'Algorithms, logic and speed'],
        ],
      },
      { kind: 'h2', text: 'How to combine them' },
      {
        kind: 'ul',
        items: [
          'Start with a school course for structure.',
          'Add olympiad practice for depth once programming basics are comfortable.',
          'Keep a portfolio of projects to show alongside results.',
        ],
      },
      { kind: 'h2', text: 'Which first?' },
      {
        kind: 'p',
        text: `Beginners should start with a course or introductory coding, then add olympiad problems once they can write programs confidently. ${VERIFY}`,
      },
    ],
    faq: [
      {
        question: 'Do olympiads replace school computer science?',
        answer: 'No. They test different things and work best together.',
      },
      {
        question: 'Which language should a beginner learn?',
        answer: 'Python is common for beginners, and AP Computer Science A uses Java. Many students learn both.',
      },
      {
        question: 'Can students outside India join coding olympiads?',
        answer: 'Several international computing contests accept entries from many countries. Check each organiser for eligibility.',
      },
    ],
  },
];
