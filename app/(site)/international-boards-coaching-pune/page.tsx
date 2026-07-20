import { PillarPage } from '../../components/PillarPage';

export default function InternationalPillarPage() {
  return (
    <PillarPage
      eyebrow="International Boards & SAT Coaching Pune"
      h1={<>IGCSE, IB, AP &amp; SAT Coaching in Pune: Choosing and Preparing Right</>}
      lede="International curricula reward a different kind of preparation than CBSE or ICSE. Here's what actually changes, and how to prepare for each — including the Digital SAT."
      primaryProgram={{ href: '/international-boards', label: 'International Boards Program' }}
      secondaryPrograms={[
        { href: '/sat-exam', label: 'SAT Exam Prep' },
        { href: '/coding-lab', label: 'Code Ninja (Coding & AI)' },
      ]}
      relatedPosts={[
        { href: '/blog/complete-guide-cambridge-igcse-mathematics-0580', label: 'Complete Guide to Cambridge IGCSE Mathematics (0580)' },
        { href: '/blog/how-to-score-a-star-igcse-additional-mathematics-0606', label: 'How to Score A* in IGCSE Additional Mathematics (0606)' },
        { href: '/blog/ib-mathematics-aa-vs-ai-which-should-you-choose', label: 'IB Mathematics AA vs AI: Which Should You Choose?' },
        { href: '/blog/top-strategies-score-7-ib-physics', label: 'Top Strategies to Score a 7 in IB Physics' },
        { href: '/blog/how-personalized-tutoring-improves-igcse-ib-results', label: 'How Personalized Tutoring Improves IGCSE and IB Results' },
        { href: '/blog/cbse-icse-igcse-ibdp-which-board-prepares-for-jee-neet', label: 'CBSE vs ICSE vs IGCSE vs IBDP: Which Board Prepares for JEE/NEET?' },
      ]}
      faq={[
        {
          question: 'How is IGCSE/IB/AP coaching different from CBSE/ICSE coaching?',
          answer: 'International boards emphasize application and critical thinking over recall, use different assessment formats (Internal Assessments, coursework, structured/free-response questions), and often require more independent research skills — coaching needs to be built around those differences, not just the same syllabus taught differently.',
        },
        {
          question: 'When should SAT preparation start?',
          answer: 'Most students preparing for the Digital SAT get the best results starting focused prep about 6-9 months before their target test date, after their core Grade 10-11 English and Maths fundamentals are solid.',
        },
        {
          question: 'Can a student switch from CBSE to IGCSE or IB mid-way?',
          answer: 'It’s possible but easier before Class 9 — after that, the curriculum and assessment style diverge enough that a switch needs deliberate bridging support rather than a straight transfer.',
        },
      ]}
      body={[
        {
          kind: 'p',
          text: 'IGCSE, IB and AP are frequently discussed as one category — "international boards" — but each has a distinct assessment philosophy, and coaching that doesn’t account for those differences underprepares students for exactly the parts of the exam that matter most.',
        },
        { kind: 'h2', text: 'How the three actually differ' },
        {
          kind: 'ul',
          items: [
            'IGCSE (Cambridge/Edexcel): broad subject coverage with a mix of core and extended tiers, strong emphasis on structured, mark-scheme-aware answers.',
            'IB (Diploma Programme): the most demanding in terms of independent work — Internal Assessments, the Extended Essay, and Theory of Knowledge all require sustained self-directed research, not just exam technique.',
            'AP (Advanced Placement): US-curriculum, subject-by-subject exams that can convert to college credit, with a heavier emphasis on free-response, evidence-based answers than most Indian board exams.',
          ],
        },
        { kind: 'h2', text: 'The Digital SAT, explained' },
        {
          kind: 'p',
          text: 'The Digital SAT is a two-section, adaptive test — Reading & Writing and Math — each split into two modules where the difficulty of the second module depends on performance in the first. Total scoring runs 400-1600 (200-800 per section). Because it’s adaptive and taken on the Bluebook app, practicing on outdated paper-SAT material actively works against a student — pacing and question style genuinely differ from the older format.',
        },
        { kind: 'h2', text: 'Choosing a board before it’s too late to switch easily' },
        {
          kind: 'p',
          text: 'Switching from CBSE/ICSE to an international board is far easier before Class 9, when curricula haven’t diverged much yet. After that, IGCSE, IB and AP move toward independent, application-based assessment fast enough that a late switch needs deliberate bridging support, not just a change of textbooks.',
        },
        { kind: 'h2', text: 'What coaching should actually provide' },
        {
          kind: 'ul',
          items: [
            'Mark-scheme-aware answer training for IGCSE and AP — knowing what an examiner is scoring for, not just knowing the content.',
            'Structured IA/EE/TOK mentorship for IB students, since these components are graded on independent reasoning that’s hard to self-teach.',
            'Realistic, adaptive-format mock testing for SAT — not generic timed practice that doesn’t reflect how the real test adjusts difficulty.',
          ],
        },
      ]}
    />
  );
}
