import { PillarPage } from '../../components/PillarPage';

export default function FoundationPillarPage() {
  return (
    <PillarPage
      eyebrow="Foundation Classes Pune"
      h1={<>Foundation Classes in Pune: Why Grades 6-10 Matter More Than Parents Think</>}
      lede="The habits and conceptual depth built between Grade 6 and Grade 10 quietly decide how much a student struggles — or doesn't — when JEE, NEET or board-exam pressure arrives."
      primaryProgram={{ href: '/foundation', label: 'Foundation Program' }}
      secondaryPrograms={[
        { href: '/10th-board', label: '10th Board Coaching' },
        { href: '/olympiads', label: 'Olympiad Program' },
      ]}
      faq={[
        {
          question: 'What age or grade should foundation classes start at?',
          answer: 'Grade 6 is a common and effective starting point, since it’s early enough to build genuine conceptual habits before board-exam pressure begins in Grade 9-10, without rushing a younger child into exam-style coaching too early.',
        },
        {
          question: 'Is foundation coaching only useful for students planning JEE/NEET?',
          answer: 'No — strong conceptual foundations in Maths and Science pay off in board exam performance, NTSE and olympiad eligibility, and general academic confidence, regardless of which competitive exam path a student eventually chooses.',
        },
        {
          question: 'How is foundation coaching different from school tuition?',
          answer: 'School tuition typically reinforces what was taught in class. Foundation coaching goes further — building problem-solving ability and exposing students to competitive-exam-style thinking years before they need it.',
        },
      ]}
      body={[
        {
          kind: 'p',
          text: 'Most families start thinking seriously about coaching in Grade 11, when JEE or NEET preparation formally begins. By then, the conceptual habits a student has — or doesn’t have — are largely set. Foundation-level coaching in Grades 6-10 is where those habits actually get built, and it’s consistently the highest-leverage, most underused window in a student’s academic path.',
        },
        { kind: 'h2', text: 'What "foundation" actually means' },
        {
          kind: 'p',
          text: 'It’s not early competitive-exam coaching in disguise. Good foundation teaching uses stories, real-world examples and visual explanations to build genuine understanding of Maths and Science — the kind of understanding that makes a JEE-level problem in Grade 11 feel like a natural extension of something already known, rather than an entirely new mountain to climb.',
        },
        { kind: 'h2', text: 'The three things foundation years should build' },
        {
          kind: 'ul',
          items: [
            'Mathematics and Science mastery at a conceptual level, not a memorized-procedure level.',
            'Logical reasoning skills — the ability to break an unfamiliar problem into familiar pieces.',
            'Exam temperament through regular assessment, so a student is comfortable being tested long before boards or competitive exams raise the stakes.',
          ],
        },
        { kind: 'h2', text: 'Foundation as a runway to Olympiads and NTSE' },
        {
          kind: 'p',
          text: 'Strong foundation students are naturally well-positioned for NTSE and olympiad exams like IOQM, NSO and IJSO — these exams test exactly the kind of concept-first, non-formulaic thinking that good foundation coaching builds. A student who only starts this kind of thinking in Grade 11 is starting years behind a peer who built it in Grade 7 or 8.',
        },
        { kind: 'h2', text: 'Grade-by-grade, what changes' },
        {
          kind: 'ul',
          items: [
            'Grades 6-7: building confidence and curiosity — number systems, basic algebra, geometry fundamentals, the scientific method.',
            'Grades 8-9: conceptual deepening — advanced algebra, trigonometry introduction, physics laws, chemistry basics, and the start of genuinely competitive-exam-style thinking.',
            'Grade 10: board mastery plus a first real bridge into JEE/NEET-level problem-solving, so Grade 11 doesn’t start from zero.',
          ],
        },
        {
          kind: 'p',
          text: 'BuzzyBrains Academy runs its Foundation program in batches capped at 12, specifically because concept-building at this age needs a mentor who notices confusion early — before it hardens into a gap that shows up two years later in a JEE mock test.',
        },
      ]}
    />
  );
}
