import Link from 'next/link';
import { QuizRunner, type QuizQuestion } from '../_tools/QuizRunner';

const QUESTIONS: QuizQuestion[] = [
  {
    subject: 'Real Numbers',
    question: 'What is the HCF of 24 and 36?',
    options: ['6', '8', '12', '18'],
    correctIndex: 2,
    explanation: '24 = 2³ × 3 and 36 = 2² × 3². The common factors are 2² and 3, so HCF = 4 × 3 = 12.',
  },
  {
    subject: 'Quadratic Equations',
    question: 'What are the roots of x² - 5x + 6 = 0?',
    options: ['2 and 3', '1 and 6', '-2 and -3', '5 and 6'],
    correctIndex: 0,
    explanation: 'Factorizing: x² - 5x + 6 = (x-2)(x-3) = 0, so x = 2 or x = 3.',
  },
  {
    subject: 'Arithmetic Progressions',
    question: 'In an AP, the first term a = 5 and common difference d = 3. What is the 4th term?',
    options: ['8', '11', '14', '17'],
    correctIndex: 2,
    explanation: 'The nth term of an AP is a + (n-1)d. For n=4: 5 + (3×3) = 5 + 9 = 14.',
  },
  {
    subject: 'Trigonometry',
    question: 'What is sin 30°?',
    options: ['0', '1/2', '√3/2', '1'],
    correctIndex: 1,
    explanation: 'sin 30° is a standard trigonometric value equal to 1/2.',
  },
  {
    subject: 'Coordinate Geometry',
    question: 'What is the distance between the points (0,0) and (3,4)?',
    options: ['3', '4', '5', '7'],
    correctIndex: 2,
    explanation: 'Using the distance formula: √(3² + 4²) = √(9+16) = √25 = 5.',
  },
  {
    subject: 'Linear Equations',
    question: 'If a pair of linear equations has no solution, the lines represented are:',
    options: ['Intersecting', 'Parallel', 'Coincident', 'Perpendicular'],
    correctIndex: 1,
    explanation: 'Parallel lines never meet, so a pair of equations representing parallel lines has no common solution.',
  },
  {
    subject: 'Trigonometry',
    question: 'What is the value of cos 0°?',
    options: ['0', '1/2', '1', 'undefined'],
    correctIndex: 2,
    explanation: 'cos 0° = 1, a standard trigonometric value.',
  },
  {
    subject: 'Quadratic Equations',
    question: 'A quadratic equation has how many roots (counted with multiplicity)?',
    options: ['0', '1', '2', '3'],
    correctIndex: 2,
    explanation: 'A quadratic equation (degree 2) always has exactly 2 roots, which may be real or complex, and may repeat.',
  },
  {
    subject: 'Circles',
    question: 'What is the circumference of a circle with radius 7 cm? (use π = 22/7)',
    options: ['22 cm', '44 cm', '49 cm', '88 cm'],
    correctIndex: 1,
    explanation: 'Circumference = 2πr = 2 × (22/7) × 7 = 44 cm.',
  },
  {
    subject: 'Triangles',
    question: 'Two triangles are similar if their corresponding angles are:',
    options: ['Equal', 'Supplementary', 'Complementary', 'Unequal'],
    correctIndex: 0,
    explanation: 'By the AA (Angle-Angle) similarity criterion, triangles with equal corresponding angles are similar.',
  },
];

export default function FoundationMathsQuizClass10Page() {
  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero" style={{ paddingBottom: 32 }}>
        <div className="container article-shell">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb">
            <Link prefetch={false} href="/">Home</Link>
            <span>/</span>
            <Link prefetch={false} href="/resource-centre">Resource Centre</Link>
            <span>/</span>
            <span>Class 10 Maths Quiz</span>
          </nav>
          <div className="hero-badges">
            <span className="eyebrow">Free Tool</span>
            <span className="eyebrow">Mentored by IITian</span>
          </div>
          <h1 style={{ fontSize: 'clamp(30px,4vw,44px)' }}>Class 10 Foundation Maths Quiz</h1>
          <p className="lede" style={{ maxWidth: 680, marginTop: 6 }}>
            10 questions covering quadratic equations, trigonometry, coordinate geometry and circles at Class 10 level. A quick pulse check — see how you do.
          </p>
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container article-shell">
          <QuizRunner
            examLabel="Class 10 Maths"
            questions={QUESTIONS}
            accentColor="#10B981"
            programHref="/foundation"
            programLabel="Foundation Program"
            blogHref="/blog/how-early-should-jee-preparation-actually-start"
            blogLabel="How Early Should JEE Preparation Actually Start?"
            requireLead
            quizType="Foundation Maths"
            gradeLabel="10"
          />
          <div style={{ marginTop: 8, textAlign: 'center' }}>
            <Link prefetch={false} href="/resource-centre" className="chip chip-link">&larr; All free tools</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
