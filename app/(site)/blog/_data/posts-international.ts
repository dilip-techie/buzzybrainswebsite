import type { BlogPost } from './posts';

const DATE = '2026-11-27';

const VERIFY =
  "Dates, fees, eligibility and test policies change from year to year, so confirm them on the organiser's official website before you register.";

/** Answer-first articles for students in the USA, Canada, Singapore and Australia. */
export const INTERNATIONAL_POSTS: BlogPost[] = [
  {
    slug: 'sat-vs-act-which-test-should-students-in-the-usa-and-canada-take',
    title: 'SAT vs ACT: Which Test Should Students in the USA and Canada Take?',
    description:
      'Most US universities accept both the SAT and the ACT. Here is how they differ, how to choose with one practice test of each, and what to check before you commit.',
    category: 'sat-exam',
    datePublished: DATE,
    readingMinutes: 6,
    relatedProgramHref: '/online-coaching-usa',
    relatedProgramLabel: 'Online Coaching for Students in the USA',
    relatedGuides: [
      { href: '/blog/digital-sat-format-scoring-and-how-to-prepare', label: 'The Digital SAT: Format, Scoring and How to Prepare' },
    ],
    body: [
      {
        kind: 'answer',
        text: 'Almost every US university that considers test scores accepts either the SAT or the ACT, so neither test is better in itself. The right choice is the one where a student scores higher after similar preparation. The simplest way to decide is to sit one official practice test of each, under timed conditions, and compare the results.',
      },
      { kind: 'h2', text: 'How the two tests differ' },
      {
        kind: 'table',
        headers: ['', 'SAT', 'ACT'],
        rows: [
          ['Delivery', 'Digital, adaptive by module', 'Offered on paper and online; check the current format'],
          ['Sections', 'Reading & Writing, Math', 'English, Math, Reading, with Science now optional'],
          ['Scoring', '400 to 1600', '1 to 36 composite'],
          ['Pacing', 'Fewer, shorter passages; more time per question', 'More questions to cover in the time allowed'],
          ['Math calculators', 'Allowed throughout, with a built-in graphing calculator', 'Allowed on the Math section'],
        ],
      },
      { kind: 'h2', text: 'How to choose' },
      {
        kind: 'ul',
        items: [
          'Take one full official practice test of each under real time limits, in the same week.',
          'Convert the scores with the official concordance table and compare, not the raw numbers.',
          'Choose the test where you score higher, or where the pacing feels more natural.',
          'Then commit to one test, because splitting preparation across both slows progress.',
        ],
      },
      { kind: 'h2', text: 'What to check before committing' },
      {
        kind: 'p',
        text: `Test policies differ by university and change over time: some require scores, some are test-optional and some are test-blind. Check the current policy of every university on the list before you decide how much to invest. ${VERIFY}`,
      },
    ],
    faq: [
      {
        question: 'Can I send both SAT and ACT scores?',
        answer: 'Most universities accept either and many will take both, but policies vary. Check each university and, in general, focus your effort on the single test where you score higher.',
      },
      {
        question: 'Do Canadian students need the SAT or ACT?',
        answer: 'Only if they apply to US universities that consider test scores. Canadian universities usually admit on school grades in the required subjects.',
      },
      {
        question: 'When should I take it for the first time?',
        answer: 'Many students sit their first official test in the spring of Grade 11 and keep time for a retake in the autumn of Grade 12. Start preparing two to four months earlier.',
      },
    ],
  },
  {
    slug: 'digital-sat-format-scoring-and-how-to-prepare',
    title: 'The Digital SAT: Format, Scoring and How to Prepare',
    description:
      'The SAT is now digital and adaptive. Here is how the test is structured, how it is scored, and a practical way to prepare for it.',
    category: 'sat-exam',
    datePublished: DATE,
    readingMinutes: 7,
    relatedProgramHref: '/sat-exam',
    relatedProgramLabel: 'SAT Preparation',
    relatedGuides: [
      { href: '/blog/sat-vs-act-which-test-should-students-in-the-usa-and-canada-take', label: 'SAT vs ACT: Which Should You Take?' },
    ],
    body: [
      {
        kind: 'answer',
        text: 'The digital SAT is a two-section, adaptive test taken on a computer. Reading & Writing and Math each have two modules, and the difficulty of the second module depends on how you did in the first. The total takes about 2 hours 14 minutes and is scored from 400 to 1600.',
      },
      { kind: 'h2', text: 'The structure at a glance' },
      {
        kind: 'table',
        headers: ['Section', 'Modules', 'Questions', 'Time'],
        rows: [
          ['Reading & Writing', '2', '54 in total (27 per module)', '64 minutes (32 per module)'],
          ['Math', '2', '44 in total (22 per module)', '70 minutes (35 per module)'],
        ],
      },
      {
        kind: 'p',
        text: 'Reading passages are short, with one question each. A graphing calculator is built into the testing app for the whole Math section, and students may bring an approved calculator as well. There is a short break between the two sections.',
      },
      { kind: 'h2', text: 'How scoring works' },
      {
        kind: 'p',
        text: 'Each section is scored from 200 to 800, giving a total of 400 to 1600. Because the test is adaptive, harder second modules allow a higher score ceiling, so accuracy in the first module matters.',
      },
      { kind: 'h2', text: 'A practical preparation plan' },
      {
        kind: 'ul',
        items: [
          'Start with an official digital practice test to find the starting score and weak areas.',
          'Spend the first weeks on content gaps: algebra, geometry basics, grammar rules and evidence-based reading.',
          'Then practise by module under timed conditions in the official testing app.',
          'Keep an error log and revisit it weekly. Most lost marks repeat.',
          'Finish with two or three full timed practice tests.',
        ],
      },
      { kind: 'p', text: VERIFY },
    ],
    faq: [
      {
        question: 'Is the digital SAT easier than the paper SAT?',
        answer: 'It is shorter and uses shorter reading passages, but the skills tested are similar. Preparation still needs real practice.',
      },
      {
        question: 'Can I use my own calculator?',
        answer: 'The testing app includes a graphing calculator for the whole Math section, and students may also use an approved calculator. Check the College Board list for the current rules.',
      },
      {
        question: 'How long should preparation take?',
        answer: 'Two to four months of steady practice is typical, depending on the starting score and the target.',
      },
    ],
  },
  {
    slug: 'ap-vs-ib-which-is-better-for-us-and-canadian-university-applications',
    title: 'AP vs IB: Which Is Better for US and Canadian University Applications?',
    description:
      'AP and the IB Diploma are both respected by universities. Here is how they differ, who each suits, and how US and Canadian universities treat them.',
    category: 'ap-exam',
    datePublished: DATE,
    readingMinutes: 7,
    relatedProgramHref: '/online-coaching-canada',
    relatedProgramLabel: 'Online Coaching for Students in Canada',
    relatedGuides: [
      { href: '/blog/ap-computer-science-a-vs-computer-science-principles-which-to-take', label: 'AP Computer Science A vs Principles' },
    ],
    body: [
      {
        kind: 'answer',
        text: 'Neither is better in itself. AP lets a student take individual college-level subjects and sit an exam in each, while the IB Diploma is a full two-year programme of six subjects plus core components. Universities in the USA and Canada recognise both, so the better choice is the one your school offers well and that fits the student.',
      },
      { kind: 'h2', text: 'How they differ' },
      {
        kind: 'table',
        headers: ['', 'AP', 'IB Diploma'],
        rows: [
          ['Structure', 'Individual subjects chosen by the student', 'Six subjects plus Theory of Knowledge, the Extended Essay and CAS'],
          ['Scoring', 'Each exam scored 1 to 5', 'Subjects scored 1 to 7, with a diploma total out of 45'],
          ['Flexibility', 'High: mix and match', 'Lower: a set programme'],
          ['Workload', 'Depends on how many APs are taken', 'Consistently heavy across two years'],
          ['University credit', 'Often awarded for strong scores, policies vary', 'Often awarded for Higher Level subjects, policies vary'],
        ],
      },
      { kind: 'h2', text: 'Which suits whom' },
      {
        kind: 'ul',
        items: [
          'AP suits students who want depth in a few subjects that match their intended major.',
          'The IB suits students who want a broad, writing-heavy programme and enjoy research and projects.',
          'Check what your school actually offers, because the quality of teaching and support varies.',
        ],
      },
      { kind: 'h2', text: 'How universities treat them' },
      {
        kind: 'p',
        text: `US universities evaluate the rigour of the courses a student chose within what the school offered, and many Canadian universities consider IB and AP results alongside provincial grades. Credit and placement policies differ for each university and each subject. ${VERIFY}`,
      },
    ],
    faq: [
      {
        question: 'Can a student take both AP and IB?',
        answer: 'Some schools allow IB students to sit selected AP exams, but it is rarely needed and adds workload. Ask your school.',
      },
      {
        question: 'Which subjects benefit most from outside coaching?',
        answer: 'Students often seek help in Mathematics, the Sciences, Computer Science and Economics, where concepts build on each other.',
      },
      {
        question: 'Is IGCSE the same as IB?',
        answer: 'No. IGCSE is a Grade 9 to 10 qualification, while the IB Diploma is a Grade 11 to 12 programme. Many international-school students take IGCSE first and the IB afterwards.',
      },
    ],
  },
  {
    slug: 'is-the-amc-worth-it-amc-8-10-12-and-the-path-to-aime',
    title: 'Is the AMC Worth It? AMC 8, 10 and 12 and the Path to AIME',
    description:
      "The American Mathematics Competitions are the best-known maths contests for students applying to US universities. Here is what each level involves and who should take them.",
    category: 'olympiad',
    datePublished: DATE,
    readingMinutes: 7,
    relatedProgramHref: '/amc-8-10-coaching-pune',
    relatedProgramLabel: 'AMC 8 / 10 / 12 Coaching',
    relatedGuides: [
      { href: '/blog/amc-8-preparation-guide-for-beginners', label: 'AMC 8 Preparation Guide for Beginners' },
      { href: '/blog/american-amc-vs-australian-mathematics-competition-which-is-which', label: 'American AMC vs Australian Mathematics Competition' },
    ],
    body: [
      {
        kind: 'answer',
        text: 'Yes, for students who enjoy problem solving. The AMC series (AMC 8, AMC 10 and AMC 12) is run by the Mathematical Association of America, is respected by US universities, and leads on to the AIME and the USA Mathematical Olympiad for top scorers. It is a strong benchmark even for students who never reach AIME.',
      },
      { kind: 'h2', text: 'The three levels' },
      {
        kind: 'table',
        headers: ['Contest', 'Who can take it', 'Format'],
        rows: [
          ['AMC 8', 'Grade 8 and below', '25 multiple-choice questions in 40 minutes, no calculators'],
          ['AMC 10', 'Grade 10 and below', '25 multiple-choice questions in 75 minutes, no calculators'],
          ['AMC 12', 'Grade 12 and below', '25 multiple-choice questions in 75 minutes, no calculators'],
        ],
      },
      { kind: 'h2', text: 'The path onwards' },
      {
        kind: 'p',
        text: 'Top scorers on the AMC 10 and AMC 12 are invited to the American Invitational Mathematics Examination (AIME), a 15-question exam where answers are whole numbers from 000 to 999. High AIME scorers go on to the USA Mathematical Olympiad.',
      },
      { kind: 'h2', text: 'Who should take it' },
      {
        kind: 'ul',
        items: [
          'Students who like puzzles and unfamiliar problems, from about Grade 6 or 7.',
          'Students building a maths-focused profile for US universities.',
          'Students who want a benchmark outside school marks.',
        ],
      },
      { kind: 'p', text: VERIFY },
    ],
    faq: [
      {
        question: 'Can students outside the USA take the AMC?',
        answer: 'Yes, through registered schools or centres. Registration and dates are set by the MAA, so check their current instructions.',
      },
      {
        question: 'Is a high AMC score needed for admission?',
        answer: 'No. It is a strong supporting achievement but not an entry requirement. Universities weigh it with grades and other evidence.',
      },
      {
        question: 'When should preparation start?',
        answer: 'Early preparation helps. Even in Grade 6 or 7, regular practice on non-routine problems builds the skills that all later contests reward.',
      },
    ],
  },
  {
    slug: 'american-amc-vs-australian-mathematics-competition-which-is-which',
    title: 'American AMC vs Australian Mathematics Competition: Which Is Which?',
    description:
      'Two different maths contests share the AMC name. Here is how to tell the American Mathematics Competitions and the Australian Mathematics Competition apart, and which to take.',
    category: 'olympiad',
    datePublished: DATE,
    readingMinutes: 5,
    relatedProgramHref: '/online-coaching-australia',
    relatedProgramLabel: 'Online Coaching for Students in Australia',
    relatedGuides: [
      { href: '/blog/is-the-amc-worth-it-amc-8-10-12-and-the-path-to-aime', label: 'Is the AMC Worth It? AMC 8, 10 and 12' },
    ],
    body: [
      {
        kind: 'answer',
        text: 'They are different contests with the same acronym. The Australian Mathematics Competition is run by the Australian Maths Trust for students in Australia and beyond. The American Mathematics Competitions (AMC 8, 10 and 12) are run by the Mathematical Association of America and lead on to AIME. A student can take both, but on applications each should be written out in full.',
      },
      { kind: 'h2', text: 'The differences' },
      {
        kind: 'table',
        headers: ['', 'Australian Mathematics Competition', 'American Mathematics Competitions'],
        rows: [
          ['Organiser', 'Australian Maths Trust', 'Mathematical Association of America (MAA)'],
          ['Levels', 'Divided by school year level', 'AMC 8, AMC 10, AMC 12 by grade'],
          ['Next step', 'Maths Challenge for Young Australians and the Australian Mathematical Olympiad', 'AIME, then the USA Mathematical Olympiad'],
          ['Best known for', 'Australian schools', 'US university applications'],
        ],
      },
      { kind: 'h2', text: 'Which should an Australian student take?' },
      {
        kind: 'ul',
        items: [
          'Take the Australian Mathematics Competition as a local benchmark through school.',
          'Add the American AMC series if applying to US universities or wanting an international, olympiad-style path.',
          'UKMT is another international option, entered through a registered school.',
        ],
      },
      { kind: 'h2', text: 'Writing it on an application' },
      {
        kind: 'p',
        text: `Always write the full name and organiser, for example "American Mathematics Competitions (MAA)" or "Australian Mathematics Competition (Australian Maths Trust)". ${VERIFY}`,
      },
    ],
    faq: [
      {
        question: 'Are the questions similar?',
        answer: 'Both reward problem solving, but the formats, levels and follow-on competitions differ. Preparation for one helps with the other.',
      },
      {
        question: 'Can I enter both in the same year?',
        answer: 'Yes. They are separate contests with separate registration, so check the dates of each.',
      },
      {
        question: 'Does the Australian competition lead to AIME?',
        answer: 'No. AIME is only reached through the American AMC 10 or AMC 12.',
      },
    ],
  },
  {
    slug: 'canadian-maths-contests-gauss-pascal-cayley-fermat-euclid-explained',
    title: 'Canadian Maths Contests Explained: Gauss, Pascal, Cayley, Fermat and Euclid',
    description:
      "The University of Waterloo's CEMC contests are the best-known maths contests for Canadian students. Here is which contest suits which grade and what comes next.",
    category: 'olympiad',
    datePublished: DATE,
    readingMinutes: 6,
    relatedProgramHref: '/online-coaching-canada',
    relatedProgramLabel: 'Online Coaching for Students in Canada',
    relatedGuides: [
      { href: '/blog/is-the-amc-worth-it-amc-8-10-12-and-the-path-to-aime', label: 'Is the AMC Worth It?' },
    ],
    body: [
      {
        kind: 'answer',
        text: "The Centre for Education in Mathematics and Computing (CEMC) at the University of Waterloo runs a contest for each grade: Gauss for Grades 7 and 8, Pascal for Grade 9, Cayley for Grade 10, Fermat for Grade 11 and Euclid for Grade 12. Strong students can go on to the Canadian Open Mathematics Challenge and the Canadian Mathematical Olympiad.",
      },
      { kind: 'h2', text: 'Which contest for which grade' },
      {
        kind: 'table',
        headers: ['Contest', 'Grade'],
        rows: [
          ['Gauss', '7 and 8'],
          ['Pascal', '9'],
          ['Cayley', '10'],
          ['Fermat', '11'],
          ['Euclid', '12'],
        ],
      },
      { kind: 'h2', text: 'What comes after' },
      {
        kind: 'p',
        text: 'The Canadian Mathematical Society runs the Canadian Open Mathematics Challenge, which feeds the Canadian Mathematical Olympiad. Together they form the senior olympiad path in Canada.',
      },
      { kind: 'h2', text: 'How to prepare' },
      {
        kind: 'ul',
        items: [
          'Practise past papers from the CEMC archive under timed conditions.',
          'Work on non-routine problems, not only school exercises.',
          'Add international contests such as AMC and UKMT, which build the same problem-solving skills.',
        ],
      },
      { kind: 'p', text: VERIFY },
    ],
    faq: [
      {
        question: 'Are these contests only for strong students?',
        answer: 'No. They are designed so that most students can answer some questions, with harder problems towards the end.',
      },
      {
        question: 'Do universities ask for contest results?',
        answer: 'Not as a requirement, but strong results can support an application in maths, computer science and engineering.',
      },
      {
        question: 'Should my child also take the AMC or UKMT?',
        answer: 'It can help. These contests reward similar skills and offer an international benchmark.',
      },
    ],
  },
  {
    slug: 'sasmo-and-the-singapore-mathematical-olympiad-which-should-your-child-take',
    title: 'SASMO and the Singapore Mathematical Olympiad: Which Should Your Child Take?',
    description:
      'Singapore has a strong culture of maths competitions. Here is how SASMO and the Singapore Mathematical Olympiad differ and how to pair them with international contests.',
    category: 'olympiad',
    datePublished: DATE,
    readingMinutes: 5,
    relatedProgramHref: '/online-coaching-singapore',
    relatedProgramLabel: 'Online Coaching for Students in Singapore',
    relatedGuides: [
      { href: '/blog/sasmo-singapore-maths-olympiad-why-indian-students-take-it', label: 'SASMO: Why Students Take It' },
      { href: '/blog/ukmt-mathematical-challenges-complete-guide-for-indian-students', label: 'UKMT Mathematical Challenges: A Complete Guide' },
    ],
    body: [
      {
        kind: 'answer',
        text: 'SASMO (Singapore and Asian Schools Math Olympiad) is an accessible multiple-choice competition for a wide range of school levels, while the Singapore Mathematical Olympiad, run by the Singapore Mathematical Society, is the more advanced route for older secondary and pre-university students. Many families pair a local contest with an international one such as AMC or UKMT.',
      },
      { kind: 'h2', text: 'How they compare' },
      {
        kind: 'table',
        headers: ['', 'SASMO', 'Singapore Mathematical Olympiad'],
        rows: [
          ['Style', 'Accessible, applied problems', 'Olympiad-level problems, with deeper reasoning'],
          ['Typical entrants', 'Primary and secondary students', 'Older secondary and pre-university students'],
          ['Best as', 'A first benchmark', 'A stretch goal for strong students'],
        ],
      },
      { kind: 'h2', text: 'Adding an international contest' },
      {
        kind: 'ul',
        items: [
          'AMC 8, 10 and 12 give a route to AIME and a respected profile item.',
          'UKMT Mathematical Challenges give a UK benchmark, entered through a registered school.',
          'Math Kangaroo is a friendly, widely taken option for younger students.',
        ],
      },
      { kind: 'h2', text: 'A simple plan' },
      {
        kind: 'p',
        text: `Start with SASMO or Math Kangaroo to build confidence, add AMC or UKMT as skills grow, and aim at the Singapore Mathematical Olympiad for a longer-term challenge. ${VERIFY}`,
      },
    ],
    faq: [
      {
        question: 'Is SASMO enough on its own?',
        answer: 'It is a good start. Adding one international contest gives more feedback and a wider benchmark.',
      },
      {
        question: 'Can students in Singapore take UKMT or the AMC?',
        answer: 'Yes, through registered schools or centres. Each organiser sets its own registration process.',
      },
      {
        question: 'When should preparation start?',
        answer: 'Steady practice over several months works better than last-minute revision.',
      },
    ],
  },
  {
    slug: 'ap-computer-science-a-vs-computer-science-principles-which-to-take',
    title: 'AP Computer Science A vs Computer Science Principles: Which Should You Take?',
    description:
      'AP offers two computer science courses. Here is how Computer Science A and Computer Science Principles differ and which to take first.',
    category: 'ap-exam',
    datePublished: DATE,
    readingMinutes: 5,
    relatedProgramHref: '/ap-exam',
    relatedProgramLabel: 'AP Exam Preparation',
    relatedGuides: [
      { href: '/blog/ap-vs-ib-which-is-better-for-us-and-canadian-university-applications', label: 'AP vs IB' },
    ],
    body: [
      {
        kind: 'answer',
        text: 'Computer Science Principles is a broad introduction to computing, data, the internet and the impact of technology, with little emphasis on a specific language. Computer Science A is a programming course built around Java. Beginners often take Principles first, and students who already code and want depth take Computer Science A.',
      },
      { kind: 'h2', text: 'How they differ' },
      {
        kind: 'table',
        headers: ['', 'AP CS Principles', 'AP CS A'],
        rows: [
          ['Focus', 'Breadth: how computing works and affects the world', 'Depth: programming and problem solving in Java'],
          ['Prior experience', 'None needed', 'Some programming experience helps'],
          ['Assessment', 'A written exam plus a project the student creates', 'A written exam on programming'],
          ['Suits', 'Beginners and non-majors', 'Students aiming at computer science or engineering'],
        ],
      },
      { kind: 'h2', text: 'Which should you take first?' },
      {
        kind: 'ul',
        items: [
          'New to coding: take Principles, then Computer Science A.',
          'Already programming: go straight to Computer Science A.',
          'Aiming at computer science at university: take Computer Science A, and add coding olympiad practice if possible.',
        ],
      },
      { kind: 'p', text: VERIFY },
    ],
    faq: [
      {
        question: 'Do I need to know Java for Computer Science A?',
        answer: 'The course teaches Java, but prior programming experience in any language makes it much easier.',
      },
      {
        question: 'Do both count for university credit?',
        answer: 'Credit policies vary by university and subject, so check each institution.',
      },
      {
        question: 'Is there a connection with coding olympiads?',
        answer: 'Yes. Coding olympiads build problem solving and algorithm skills that help in Computer Science A.',
      },
    ],
  },
  {
    slug: 'ap-microeconomics-vs-macroeconomics-which-should-you-take-first',
    title: 'AP Microeconomics vs Macroeconomics: Which Should You Take First?',
    description:
      'AP Economics is split into two separate courses. Here is what each covers and how to choose between them.',
    category: 'ap-exam',
    datePublished: DATE,
    readingMinutes: 5,
    relatedProgramHref: '/ap-exam',
    relatedProgramLabel: 'AP Exam Preparation',
    relatedGuides: [
      { href: '/blog/ap-vs-ib-which-is-better-for-us-and-canadian-university-applications', label: 'AP vs IB' },
    ],
    body: [
      {
        kind: 'answer',
        text: 'AP Microeconomics studies how individuals and firms make decisions in markets, and AP Macroeconomics studies the economy as a whole: growth, inflation, unemployment and policy. They are separate courses and exams. There is no required order, and many students take both.',
      },
      { kind: 'h2', text: 'What each covers' },
      {
        kind: 'table',
        headers: ['', 'AP Microeconomics', 'AP Macroeconomics'],
        rows: [
          ['Focus', 'Markets, supply and demand, firms and consumers', 'GDP, inflation, unemployment, monetary and fiscal policy'],
          ['Typical skills', 'Graphs, marginal analysis, decision making', 'Models of the whole economy, data and policy analysis'],
          ['Good for', 'Business, economics and public policy students', 'Economics, finance and international affairs students'],
        ],
      },
      { kind: 'h2', text: 'How to choose' },
      {
        kind: 'ul',
        items: [
          'Choose Microeconomics if you enjoy graphs and decision making.',
          'Choose Macroeconomics if you are interested in the economy and policy.',
          'If you plan to study economics, take both, ideally across two years.',
        ],
      },
      { kind: 'h2', text: 'Preparation tips' },
      {
        kind: 'p',
        text: `Learn to draw and explain the standard graphs fluently, practise free-response questions under time limits, and use official past papers. ${VERIFY}`,
      },
    ],
    faq: [
      {
        question: 'Can I take both in the same year?',
        answer: 'Many students do, but it is a heavy load, so check your timetable and other subjects.',
      },
      {
        question: 'Is there a maths requirement?',
        answer: 'Basic algebra and graph reading are needed. The courses are not calculus based.',
      },
      {
        question: 'Does IB Economics cover the same ground?',
        answer: 'It covers similar topics in a single course with a different assessment style.',
      },
    ],
  },
  {
    slug: 'how-students-outside-the-uk-can-enter-ukmt-challenges-step-by-step',
    title: 'How Students Outside the UK Can Enter the UKMT Challenges: Step by Step',
    description:
      'Students in Singapore, Australia, Canada and the USA can enter the UKMT Mathematical Challenges through a registered school. Here is the process, the dates and the time-zone rule.',
    category: 'olympiad',
    datePublished: DATE,
    readingMinutes: 6,
    relatedProgramHref: '/olympiad-math',
    relatedProgramLabel: 'Maths Olympiad Program',
    relatedGuides: [
      { href: '/blog/ukmt-mathematical-challenges-complete-guide-for-indian-students', label: 'UKMT Mathematical Challenges: A Complete Guide' },
      { href: '/blog/ukmt-kangaroo-and-olympiad-rounds-what-happens-after-the-challenge', label: 'UKMT Kangaroo and Olympiad Rounds' },
    ],
    body: [
      {
        kind: 'answer',
        text: 'Students outside the UK enter the UKMT Mathematical Challenges through their school. UKMT lists "England, Wales and Overseas" in the age groups, so an overseas school registers with UKMT, buys the entries, sits the paper on the set date and uploads the answer sheets. Individual students cannot enter on their own.',
      },
      { kind: 'h2', text: 'The four steps' },
      {
        kind: 'ul',
        items: [
          'Register your school with UKMT.',
          'Purchase entries. At the time of writing, UKMT charged about £16 per pack of 10 posted papers or £15 per pack of 10 to download and print.',
          'Sit the Challenge on the set date, on paper. UKMT competitions are paper-format only.',
          'Upload the answer sheets by the deadline and receive results.',
        ],
      },
      { kind: 'h2', text: 'Dates for 2026 to 2027' },
      {
        kind: 'table',
        headers: ['Challenge', 'Date set by UKMT', 'Overseas eligibility (year group)'],
        rows: [
          ['Senior Mathematical Challenge', 'Wednesday 7 October 2026', 'Year 13 and below'],
          ['Intermediate Mathematical Challenge', 'Wednesday 27 January 2027', 'Year 11 and below'],
          ['Junior Mathematical Challenge', 'Wednesday 5 May 2027', 'Year 8 and below'],
        ],
      },
      { kind: 'h2', text: 'The time-zone rule' },
      {
        kind: 'p',
        text: 'UKMT asks candidates in time zones more than two hours ahead of GMT, which includes Singapore and Australia, to sit the paper on the following day. Students must not discuss the paper online until the time UKMT sets after the competition.',
      },
      { kind: 'h2', text: 'What is not open overseas' },
      {
        kind: 'p',
        text: `The Kangaroo follow-on papers are open to UK schools only, while the Olympiad rounds list overseas year groups. ${VERIFY}`,
      },
    ],
    faq: [
      {
        question: 'Can my child enter if the school is not registered?',
        answer: 'Not directly. The school (or an approved centre) must register. Ask your school whether it takes part or can register.',
      },
      {
        question: 'What is the age limit?',
        answer: 'It is set by year group, not age: Year 8 and below, Year 11 and below and Year 13 and below, with equivalent grades overseas.',
      },
      {
        question: 'How should we prepare?',
        answer: 'Use UKMT past papers under timed conditions and keep an error log. Coaching in problem solving helps with the harder final questions.',
      },
    ],
  },
];
