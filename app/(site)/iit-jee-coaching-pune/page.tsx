import { PillarPage } from '../../components/PillarPage';

export default function IitJeePillarPage() {
  return (
    <PillarPage
      eyebrow="IIT JEE Coaching Pune"
      h1={<>IIT JEE Coaching in Pune: A Parent&apos;s Complete Guide</>}
      lede="What actually separates good JEE coaching from average coaching in Pune — batch size, faculty background, and how Main and Advanced prep differ — before you commit to a program."
      primaryProgram={{ href: '/12th-board-pcm', label: 'IIT-JEE Program' }}
      secondaryPrograms={[
        { href: '/foundation', label: 'Foundation Program (Grades 6-10)' },
        { href: '/one-on-one', label: 'One-on-One Coaching' },
      ]}
      relatedPosts={[
        { href: '/blog/jee-main-vs-advanced-explained', label: 'JEE Main vs JEE Advanced: What’s Actually Different' },
        { href: '/blog/jee-main-exam-pattern-and-marking-scheme-explained', label: 'JEE Main Exam Pattern and Marking Scheme Explained' },
        { href: '/blog/balancing-physics-chemistry-maths-for-jee', label: 'How to Balance Physics, Chemistry and Maths for JEE' },
        { href: '/blog/why-ncert-is-non-negotiable-for-jee-preparation', label: 'Why NCERT Is Non-Negotiable for JEE Preparation' },
        { href: '/blog/jee-dropper-year-how-to-structure-a-successful-repeat-attempt', label: 'JEE Dropper Year: How to Structure a Successful Repeat Attempt' },
        { href: '/blog/time-management-strategies-for-jee-exam-day', label: 'Time Management Strategies for JEE Exam Day' },
      ]}
      faq={[
        {
          question: 'What makes JEE coaching in Pune different from self-study?',
          answer: 'Structured JEE coaching gives you a sequenced syllabus, timed practice under real exam conditions, and faculty who can spot conceptual gaps early — the three things self-study almost always underdelivers on, especially for JEE Advanced-style multi-concept problems.',
        },
        {
          question: 'What batch size should I look for in JEE coaching?',
          answer: 'Below 15 students per batch is where individual doubt-resolution and mentor familiarity with each student’s weak areas actually becomes possible. BuzzyBrains Academy caps every batch at 12.',
        },
        {
          question: 'When should my child start JEE coaching?',
          answer: 'Most strong performers start structured foundation work in Grade 9-10 and move into full JEE-focused coaching from Grade 11, giving a genuine two-year runway before Grade 12 boards and JEE overlap.',
        },
      ]}
      body={[
        {
          kind: 'p',
          text: 'Pune has no shortage of JEE coaching options — from large multi-city chains to small, independent mentors. The right choice depends less on brand name and more on three concrete things: how many students share a mentor’s attention, who is actually teaching, and whether the program is built for JEE Main, JEE Advanced, or genuinely both.',
        },
        { kind: 'h2', text: 'Why batch size matters more than most parents realize' },
        {
          kind: 'p',
          text: 'A JEE aspirant needs regular, specific doubt resolution — not generic revision. In a batch of 40-60 students, a mentor physically cannot track which exact concept is blocking each student. In a batch capped at 12, which is how BuzzyBrains Academy structures every JEE batch, a mentor can identify a recurring error pattern within a week and correct it before it costs marks in a mock test.',
        },
        { kind: 'h2', text: 'What to check about the faculty' },
        {
          kind: 'ul',
          items: [
            'Have they cleared JEE themselves, and at what level — Main, or Advanced with an IIT seat?',
            'Do they teach year-round, or are they brought in seasonally?',
            'Can they explain a topic three different ways when the first explanation doesn’t land — the actual skill that separates good teaching from someone reading a solution out loud?',
          ],
        },
        {
          kind: 'p',
          text: 'BuzzyBrains Academy’s JEE program is anchored by faculty with IIT and IIM backgrounds, including founder Dilip Sir (IIT Kanpur, IIM Ahmedabad), teaching year-round rather than as a seasonal add-on.',
        },
        { kind: 'h2', text: 'Building a program around Main and Advanced, not just "JEE"' },
        {
          kind: 'p',
          text: 'JEE Main and JEE Advanced test differently — Main rewards speed and volume on a predictable pattern, Advanced rewards deep, flexible problem-solving across multi-concept questions with negative and partial marking that punishes guessing. A coaching program that only drills Main-style MCQs will plateau the moment Advanced-style questions show up in a mock test. (See our full breakdown: JEE Main vs JEE Advanced.)',
        },
        { kind: 'h2', text: 'What a well-structured JEE year actually looks like' },
        {
          kind: 'ul',
          items: [
            'A diagnostic to map real starting strengths and gaps, not assumed ones.',
            'Concept-first teaching before problem drilling — so a formula is understood, not memorized.',
            'Weekly tests that build real exam temperament, not just topic revision.',
            'Regular, specific parent updates so course-correction happens in weeks, not after a disappointing mock test.',
          ],
        },
        {
          kind: 'p',
          text: 'If your child is starting from Grade 9-10, the strongest path is usually a Foundation program that builds fundamentals early, feeding directly into a dedicated Grade 11-12 JEE program — rather than starting JEE-specific coaching cold in Grade 11.',
        },
      ]}
    />
  );
}
