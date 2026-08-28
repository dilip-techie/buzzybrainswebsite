import Link from 'next/link';
import { QuizRunner, type QuizQuestion } from '../_tools/QuizRunner';

const QUESTIONS: QuizQuestion[] = [
  {
    subject: 'Physics',
    question: 'What is the SI unit of electric charge?',
    options: ['Ampere', 'Coulomb', 'Volt', 'Farad'],
    correctIndex: 1,
    explanation: 'Electric charge is measured in coulombs (C). The ampere is the unit of current — one ampere is one coulomb of charge flowing per second.',
  },
  {
    subject: 'Physics',
    question: 'What is the dimensional formula of force?',
    options: ['[MLT⁻¹]', '[MLT⁻²]', '[ML²T⁻²]', '[ML⁻¹T⁻²]'],
    correctIndex: 1,
    explanation: 'Force = mass × acceleration. Acceleration has dimensions [LT⁻²], so force has dimensions [M][LT⁻²] = [MLT⁻²].',
  },
  {
    subject: 'Physics',
    question: 'A body moves in a circle at constant speed. Is it in equilibrium?',
    options: ['Yes, since speed is constant', 'No, since it has centripetal acceleration', 'Yes, since velocity is constant', 'Only if the circle is very large'],
    correctIndex: 1,
    explanation: "Constant speed doesn't mean constant velocity — direction keeps changing, so there's a centripetal acceleration directed toward the center, meaning a net force acts on the body. It is not in equilibrium.",
  },
  {
    subject: 'Physics',
    question: '"For every action, there is an equal and opposite reaction" is which of Newton\'s laws?',
    options: ['First law', 'Second law', 'Third law', "Law of gravitation"],
    correctIndex: 2,
    explanation: "This is Newton's Third Law of Motion.",
  },
  {
    subject: 'Chemistry',
    question: 'What is the IUPAC name of CH₃-CH₂-OH?',
    options: ['Methanol', 'Ethanol', 'Ethanal', 'Ethanoic acid'],
    correctIndex: 1,
    explanation: 'CH₃-CH₂-OH is a two-carbon alcohol, named ethanol.',
  },
  {
    subject: 'Chemistry',
    question: 'What is the hybridization of carbon in methane (CH₄)?',
    options: ['sp', 'sp²', 'sp³', 'sp³d'],
    correctIndex: 2,
    explanation: 'Carbon in methane forms four equivalent bonds arranged tetrahedrally, which requires sp³ hybridization.',
  },
  {
    subject: 'Chemistry',
    question: 'Which quantum number determines the shape of an orbital?',
    options: ['Principal (n)', 'Azimuthal (l)', 'Magnetic (m)', 'Spin (s)'],
    correctIndex: 1,
    explanation: 'The azimuthal (angular momentum) quantum number l determines the subshell type — s, p, d, f — and therefore the orbital\'s shape. The principal quantum number n determines size/energy level.',
  },
  {
    subject: 'Chemistry',
    question: 'What is the pH of a neutral solution at 25°C?',
    options: ['0', '7', '14', '1'],
    correctIndex: 1,
    explanation: 'Pure water at 25°C has a pH of 7, the reference point for neutrality on the 0-14 pH scale.',
  },
  {
    subject: 'Maths',
    question: 'What is the derivative of sin(x) with respect to x?',
    options: ['-cos(x)', 'cos(x)', '-sin(x)', 'tan(x)'],
    correctIndex: 1,
    explanation: 'd/dx[sin(x)] = cos(x) — a standard result from first-principles differentiation.',
  },
  {
    subject: 'Maths',
    question: 'A fair six-sided die is rolled once. What is the probability of getting an even number?',
    options: ['1/6', '1/3', '1/2', '2/3'],
    correctIndex: 2,
    explanation: 'Even outcomes are {2, 4, 6} — 3 out of 6 equally likely outcomes, so the probability is 3/6 = 1/2.',
  },
];

export default function JeeQuizPage() {
  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero" style={{ paddingBottom: 32 }}>
        <div className="container article-shell">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb">
            <Link prefetch={false} href="/">Home</Link>
            <span>/</span>
            <Link prefetch={false} href="/resource-centre">Resource Centre</Link>
            <span>/</span>
            <span>JEE Quiz</span>
          </nav>
          <span className="eyebrow">Free Tool</span>
          <h1 style={{ fontSize: 'clamp(30px,4vw,44px)' }}>JEE Quick Quiz</h1>
          <p className="lede" style={{ maxWidth: 680, marginTop: 6 }}>
            10 Physics, Chemistry and Maths questions at JEE Main level. A quick pulse check, not a mock test — see how you do.
          </p>
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container article-shell">
          <QuizRunner
            examLabel="JEE"
            questions={QUESTIONS}
            accentColor="#2563EB"
            programHref="/12th-board-pcm"
            programLabel="IIT-JEE Program"
            blogHref="/blog/jee-main-exam-pattern-and-marking-scheme-explained"
            blogLabel="JEE Main Exam Pattern and Marking Scheme Explained"
          />
          <div style={{ marginTop: 8, textAlign: 'center' }}>
            <Link prefetch={false} href="/resource-centre" className="chip chip-link">&larr; All free tools</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
