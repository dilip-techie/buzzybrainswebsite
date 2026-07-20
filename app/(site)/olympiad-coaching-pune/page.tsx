import { PillarPage } from '../../components/PillarPage';

export default function OlympiadPillarPage() {
  return (
    <PillarPage
      eyebrow="Olympiad Coaching Pune"
      h1={<>Olympiad Coaching in Pune: One Program, Every Subject</>}
      lede="Maths, Physics, Chemistry, Biology and Coding olympiads each have their own ladder of named exams. Here's how they connect, and how to choose where to start."
      primaryProgram={{ href: '/olympiads', label: 'Olympiad Program' }}
      secondaryPrograms={[
        { href: '/olympiad-math', label: 'Maths Excellence Program' },
        { href: '/coding-lab', label: 'Code Ninja (Coding & AI)' },
      ]}
      relatedPosts={[
        { href: '/blog/ioqm-syllabus-preparation-guide', label: 'IOQM Syllabus and Preparation Guide' },
        { href: '/blog/complete-guide-maths-olympiad-preparation-class-6-10', label: 'Complete Guide to Maths Olympiad Prep (Class 6–10)' },
        { href: '/blog/how-to-prepare-for-ioqm-from-grade-8', label: 'How to Prepare for IOQM from Grade 8' },
        { href: '/blog/amc-8-preparation-guide-for-beginners', label: 'AMC 8 Preparation Guide for Beginners' },
        { href: '/blog/science-olympiad-preparation-strategy-middle-school', label: 'Science Olympiad Preparation Strategy' },
        { href: '/blog/common-mistakes-students-make-in-olympiad-mathematics', label: 'Common Mistakes in Olympiad Mathematics' },
        { href: '/blog/why-olympiad-preparation-improves-jee-success', label: 'Why Olympiad Preparation Improves JEE Success' },
        { href: '/blog/best-books-for-maths-olympiad-preparation', label: 'Best Books for Maths Olympiad Preparation' },
        { href: '/blog/how-parents-can-support-olympiad-preparation', label: 'How Parents Can Support Olympiad Preparation' },
        { href: '/blog/olympiad-vs-school-mathematics-key-differences', label: 'Olympiad vs School Mathematics' },
        { href: '/blog/mental-maths-techniques-every-olympiad-student-should-know', label: 'Mental Maths Techniques for Olympiad Students' },
        { href: '/blog/geometry-problem-solving-techniques-for-maths-olympiads', label: 'Geometry Problem-Solving Techniques for Maths Olympiads' },
        { href: '/blog/combinatorics-for-beginners-counting-techniques-olympiad-maths', label: 'Combinatorics for Beginners' },
        { href: '/blog/from-ioqm-to-inmo-what-changes-at-the-next-level', label: 'From IOQM to INMO: What Changes at the Next Level' },
        { href: '/blog/how-to-build-an-effective-olympiad-practice-routine', label: 'How to Build an Effective Olympiad Practice Routine' },
        { href: '/blog/kangaroo-math-olympiad-what-it-is-and-how-to-prepare', label: 'Kangaroo Math Olympiad: What It Is and How to Prepare' },
        { href: '/blog/olympiad-advantage-ioqm-nso-toppers-build-their-iit-edge', label: 'The Olympiad Advantage: Building the IIT Edge Before Class 12' },
      ]}
      faq={[
        {
          question: 'Which olympiad should my child start with?',
          answer: 'For most students, IOQM (Maths) or NSO (general Science, junior level) are the natural entry points — both have a clear preparation path and feed into more advanced national and international olympiads.',
        },
        {
          question: 'Do olympiads help with JEE/NEET preparation too?',
          answer: 'Yes — olympiad-style problem-solving builds exactly the deep, flexible reasoning that JEE Advanced and NEET’s harder questions reward, so olympiad prep and competitive-exam prep reinforce each other rather than competing for time.',
        },
        {
          question: 'Is olympiad coaching only for exceptionally gifted students?',
          answer: 'No — it rewards trained, structured problem-solving more than raw natural talent. Students with a solid foundation who put in consistent, well-structured olympiad practice regularly outperform naturally quick students who prepare only briefly before the exam.',
        },
      ]}
      body={[
        {
          kind: 'p',
          text: 'Olympiad coaching gets treated as a single category, but it isn’t one exam or one syllabus — it’s a family of ladders, one per subject, each with its own entry-level qualifier, national round, and (for the strongest students) international stage. Choosing where to start matters as much as choosing to start at all.',
        },
        { kind: 'h2', text: 'The ladders, subject by subject' },
        {
          kind: 'ul',
          items: [
            'Mathematics: IOQM → INMO → International Mathematical Olympiad (IMO), alongside independent tracks like AMC 8/10/12, SOF IMO, and Kangaroo Math.',
            'Physics: NSEP → INPhO → International Physics Olympiad (IPhO).',
            'Chemistry: NSEC → INChO → International Chemistry Olympiad (IChO).',
            'Biology: NSEB → INBO → International Biology Olympiad (IBO).',
            'General Science (junior level): NSO and IJSO — a common entry point before students specialize into one subject.',
            'Coding/Informatics: ZIO → INOI → International Olympiad in Informatics (IOI), with USACO as a popular parallel track for competitive programmers.',
          ],
        },
        { kind: 'h2', text: 'A common naming confusion worth clearing up' },
        {
          kind: 'p',
          text: '"IMO" refers to two different things depending on context — the prestigious International Mathematical Olympiad (the pinnacle of the INMO ladder), and SOF IMO, a separate, more accessible school-level exam run by the Science Olympiad Foundation. Both are legitimate and worth preparing for; they are simply not the same competition, and preparation for one doesn’t automatically prepare a student for the other.',
        },
        { kind: 'h2', text: 'How to choose where to start' },
        {
          kind: 'p',
          text: 'For younger students (Grades 6-8) without a clear subject preference, NSO or SOF IMO are natural low-friction entry points. For a student who has already shown a strong pull toward one subject — a student who finds Maths genuinely absorbing, for instance — starting directly on that subject’s ladder (IOQM, in this case) builds momentum faster than a generalist approach.',
        },
        { kind: 'h2', text: 'Why olympiad prep also strengthens JEE/NEET outcomes' },
        {
          kind: 'p',
          text: 'Olympiad problems are deliberately built so the obvious formula doesn’t apply cleanly — students have to restructure the problem first. That is precisely the skill JEE Advanced and NEET’s harder questions reward. Students who train on olympiad-style problems consistently find multi-concept competitive-exam questions less intimidating, because they’ve already practiced the underlying skill of reasoning from first principles rather than pattern-matching.',
        },
      ]}
    />
  );
}
