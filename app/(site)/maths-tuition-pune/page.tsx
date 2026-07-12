import { PillarPage } from '../../components/PillarPage';

export default function MathsTuitionPillarPage() {
  return (
    <PillarPage
      eyebrow="Maths Tuition Pune"
      h1={<>Maths Tuition in Pune: 1-on-1, Small Batch, or Something Else?</>}
      lede="Maths tuition covers everything from confidence-building for a struggling student to olympiad-level problem solving. The right format depends on which of those you actually need."
      primaryProgram={{ href: '/one-on-one', label: 'One-on-One Coaching' }}
      secondaryPrograms={[
        { href: '/olympiad-math', label: 'Maths Excellence Program' },
        { href: '/foundation', label: 'Foundation Program' },
      ]}
      relatedPosts={[{ href: '/blog/vedic-maths-shortcuts-that-help-in-exams', label: 'Vedic Maths Shortcuts That Actually Help in Exams' }]}
      faq={[
        {
          question: 'Should I choose 1-on-1 maths tuition or a small batch?',
          answer: 'If a student is significantly behind or ahead of their grade level, or needs a custom pace, 1-on-1 is usually more effective. If the gap is smaller, a small batch (max 12 at BuzzyBrains Academy) offers similar attention with the added benefit of peer problem-solving.',
        },
        {
          question: 'My child says they "aren\'t a maths person" — does tuition actually help?',
          answer: 'In most cases, this is a confidence gap built from an earlier unresolved conceptual gap, not a fixed trait. Concept-first tuition that finds and fixes the original gap — rather than just drilling more of the current chapter — usually resolves this within a term.',
        },
        {
          question: 'Is maths tuition useful even if my child isn’t targeting JEE or NEET?',
          answer: 'Yes — strong maths ability supports board-exam performance, Applied Maths and Statistics for commerce students, and general logical reasoning used across every other subject.',
        },
      ]}
      body={[
        {
          kind: 'p',
          text: '"Maths tuition" means very different things to different families — a struggling student needing to rebuild confidence, a strong student wanting to go faster than their school pace, or a competitive-exam aspirant needing olympiad-level problem-solving. The right tuition format depends entirely on which of these actually describes your child.',
        },
        { kind: 'h2', text: 'When 1-on-1 is worth it' },
        {
          kind: 'p',
          text: 'One-on-one maths tuition earns its cost when a student needs a genuinely custom pace — either because they’re meaningfully behind their grade level and need targeted gap-filling, or because they’re ahead and a standard batch would hold them back. It’s also the right call when a student has developed real maths anxiety, since a 1-on-1 setting removes the social pressure of getting something wrong in front of peers.',
        },
        { kind: 'h2', text: 'When a small batch is enough — and better' },
        {
          kind: 'p',
          text: 'For a student who’s roughly at grade level and simply needs more depth than school provides, a small batch (BuzzyBrains Academy caps every batch at 12) delivers similar individual attention at a lower cost, with the added benefit of hearing how peers approach the same problem differently.',
        },
        { kind: 'h2', text: 'Diagnosing "I\'m not a maths person"' },
        {
          kind: 'p',
          text: 'This phrase almost always traces back to one specific unresolved concept — a gap from a year or two earlier that never got fixed, and that every subsequent chapter has quietly built on top of. Good maths tuition starts with finding that original gap, not with drilling the current chapter harder.',
        },
        { kind: 'h2', text: 'What effective maths tuition covers, grade by grade' },
        {
          kind: 'ul',
          items: [
            'Grades 6-8: number systems, basic algebra, geometry fundamentals — the base everything later depends on.',
            'Grades 9-10: advanced algebra, trigonometry, and board-exam problem patterns.',
            'Grades 11-12: calculus, coordinate geometry, and either JEE-level problem-solving or Applied Maths/Statistics depending on stream.',
          ],
        },
        {
          kind: 'p',
          text: 'A small number of Vedic maths techniques — for squaring numbers ending in 5, or fast multiplication near powers of 10 — genuinely save time in exam calculations, though they’re a speed tool, not a substitute for conceptual work. (See our full breakdown: Vedic Maths Shortcuts That Actually Help in Exams.)',
        },
      ]}
    />
  );
}
