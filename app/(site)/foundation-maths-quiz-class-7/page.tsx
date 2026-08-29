import Link from 'next/link';
import { QuizRunner, type QuizQuestion } from '../_tools/QuizRunner';

const QUESTIONS: QuizQuestion[] = [
  {
    subject: 'Algebra',
    question: 'Solve for x: x + 7 = 15',
    options: ['6', '7', '8', '9'],
    correctIndex: 2,
    explanation: 'Subtract 7 from both sides: x = 15 - 7 = 8.',
  },
  {
    subject: 'Percentages',
    question: 'What is 25% of 200?',
    options: ['25', '40', '50', '60'],
    correctIndex: 2,
    explanation: '25% of 200 = (25/100) × 200 = 50.',
  },
  {
    subject: 'Geometry',
    question: 'The sum of the angles in a triangle is:',
    options: ['90°', '180°', '270°', '360°'],
    correctIndex: 1,
    explanation: 'The three interior angles of any triangle always add up to 180°.',
  },
  {
    subject: 'Integers',
    question: 'Simplify: (-3) × (-4)',
    options: ['-12', '-7', '7', '12'],
    correctIndex: 3,
    explanation: 'A negative number multiplied by a negative number gives a positive result: 3 × 4 = 12.',
  },
  {
    subject: 'Exponents',
    question: 'What is 2³ (2 to the power 3)?',
    options: ['6', '8', '9', '12'],
    correctIndex: 1,
    explanation: '2³ means 2 × 2 × 2 = 8.',
  },
  {
    subject: 'Rational Numbers',
    question: 'Which of these is a rational number?',
    options: ['√2', 'π', '3/5', '√3'],
    correctIndex: 2,
    explanation: 'A rational number can be written as a ratio of two integers. 3/5 fits this; √2, π and √3 cannot be written this way.',
  },
  {
    subject: 'Mensuration',
    question: 'Find the area of a rectangle with length 8 cm and breadth 5 cm.',
    options: ['13 cm²', '26 cm²', '40 cm²', '45 cm²'],
    correctIndex: 2,
    explanation: 'Area of a rectangle = length × breadth = 8 × 5 = 40 cm².',
  },
  {
    subject: 'Geometry',
    question: 'If two angles are complementary and one is 35°, the other is:',
    options: ['45°', '55°', '65°', '145°'],
    correctIndex: 1,
    explanation: 'Complementary angles add up to 90°. 90° - 35° = 55°.',
  },
  {
    subject: 'Algebra',
    question: 'What is the coefficient of x in the expression 7x + 5?',
    options: ['5', '7', '12', 'x'],
    correctIndex: 1,
    explanation: 'The coefficient is the number multiplying the variable — here, 7.',
  },
  {
    subject: 'Ratio & Proportion',
    question: 'In a class, the ratio of boys to girls is 3:2. If there are 15 boys, how many girls are there?',
    options: ['8', '10', '12', '15'],
    correctIndex: 1,
    explanation: '15 boys correspond to 3 "parts", so 1 part = 5. Girls = 2 parts = 2 × 5 = 10.',
  },
];

export default function FoundationMathsQuizClass7Page() {
  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero" style={{ paddingBottom: 32 }}>
        <div className="container article-shell">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb">
            <Link prefetch={false} href="/">Home</Link>
            <span>/</span>
            <Link prefetch={false} href="/resource-centre">Resource Centre</Link>
            <span>/</span>
            <span>Class 7 Maths Quiz</span>
          </nav>
          <div className="hero-badges">
            <span className="eyebrow">Free Tool</span>
            <span className="eyebrow">Mentored by IITian</span>
          </div>
          <h1 style={{ fontSize: 'clamp(30px,4vw,44px)' }}>Class 7 Foundation Maths Quiz</h1>
          <p className="lede" style={{ maxWidth: 680, marginTop: 6 }}>
            10 questions covering simple equations, percentages, rational numbers and geometry at Class 7 level. A quick pulse check — see how you do.
          </p>
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container article-shell">
          <QuizRunner
            examLabel="Class 7 Maths"
            questions={QUESTIONS}
            accentColor="#10B981"
            programHref="/foundation"
            programLabel="Foundation Program"
            blogHref="/blog/why-foundation-matters-for-jee-neet-class-6-8-concepts"
            blogLabel="Why Foundation Matters for JEE/NEET: The Concepts Class 6-8 Skip"
            requireLead
            quizType="Foundation Maths"
            gradeLabel="7"
          />
          <div style={{ marginTop: 8, textAlign: 'center' }}>
            <Link prefetch={false} href="/resource-centre" className="chip chip-link">&larr; All free tools</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
