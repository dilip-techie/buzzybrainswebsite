import Link from 'next/link';
import { QuizRunner, type QuizQuestion } from '../_tools/QuizRunner';

const QUESTIONS: QuizQuestion[] = [
  {
    subject: 'Algebra',
    question: 'Solve for x: 2x - 5 = 11',
    options: ['3', '6', '8', '16'],
    correctIndex: 2,
    explanation: 'Add 5 to both sides: 2x = 16, then divide by 2: x = 8.',
  },
  {
    subject: 'Squares & Roots',
    question: 'What is the square root of 144?',
    options: ['11', '12', '14', '72'],
    correctIndex: 1,
    explanation: '12 × 12 = 144, so √144 = 12.',
  },
  {
    subject: 'Algebra',
    question: 'Expand: (a + b)²',
    options: ['a² + b²', 'a² + 2ab + b²', 'a² - 2ab + b²', 'a² + ab + b²'],
    correctIndex: 1,
    explanation: 'This is a standard algebraic identity: (a+b)² = a² + 2ab + b².',
  },
  {
    subject: 'Cubes & Roots',
    question: 'What is the cube of 3?',
    options: ['9', '18', '27', '81'],
    correctIndex: 2,
    explanation: '3³ = 3 × 3 × 3 = 27.',
  },
  {
    subject: 'Geometry',
    question: 'The sum of the interior angles of a quadrilateral is:',
    options: ['180°', '270°', '360°', '540°'],
    correctIndex: 2,
    explanation: 'Any quadrilateral can be split into 2 triangles (2 × 180° = 360°), so its interior angles always sum to 360°.',
  },
  {
    subject: 'Comparing Quantities',
    question: 'If the cost price is ₹200 and profit is 10%, what is the selling price?',
    options: ['₹190', '₹210', '₹220', '₹240'],
    correctIndex: 2,
    explanation: 'Profit = 10% of 200 = 20. Selling price = cost price + profit = 200 + 20 = ₹220.',
  },
  {
    subject: 'Exponents',
    question: 'Simplify: 2⁵ ÷ 2²',
    options: ['2', '4', '8', '16'],
    correctIndex: 2,
    explanation: 'When dividing powers with the same base, subtract exponents: 2^(5-2) = 2³ = 8.',
  },
  {
    subject: 'Factorization',
    question: 'Factorize: x² - 9',
    options: ['(x-3)(x+3)', '(x-9)(x+1)', '(x+3)²', '(x-3)²'],
    correctIndex: 0,
    explanation: 'This is a difference of squares: x² - 9 = x² - 3² = (x-3)(x+3).',
  },
  {
    subject: 'Number Systems',
    question: 'Which of these is an irrational number?',
    options: ['√4', '√5', '√9', '√16'],
    correctIndex: 1,
    explanation: '√4=2, √9=3 and √16=4 are all whole numbers (rational). √5 cannot be simplified to a whole number or exact fraction, so it is irrational.',
  },
  {
    subject: 'Direct & Inverse Proportion',
    question: 'If 8 workers can build a wall in 10 days, how many days will 4 workers take (working at the same rate)?',
    options: ['5 days', '10 days', '20 days', '40 days'],
    correctIndex: 2,
    explanation: 'Total work = 8 × 10 = 80 worker-days. With 4 workers: 80 ÷ 4 = 20 days.',
  },
];

export default function FoundationMathsQuizClass8Page() {
  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero" style={{ paddingBottom: 32 }}>
        <div className="container article-shell">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb">
            <Link prefetch={false} href="/">Home</Link>
            <span>/</span>
            <Link prefetch={false} href="/resource-centre">Resource Centre</Link>
            <span>/</span>
            <span>Class 8 Maths Quiz</span>
          </nav>
          <div className="hero-badges">
            <span className="eyebrow">Free Tool</span>
            <span className="eyebrow">Mentored by IITian</span>
          </div>
          <h1 style={{ fontSize: 'clamp(30px,4vw,44px)' }}>Class 8 Foundation Maths Quiz</h1>
          <p className="lede" style={{ maxWidth: 680, marginTop: 6 }}>
            10 questions covering linear equations, squares/cubes, factorization and proportion at Class 8 level. A quick pulse check — see how you do.
          </p>
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container article-shell">
          <QuizRunner
            examLabel="Class 8 Maths"
            questions={QUESTIONS}
            accentColor="#10B981"
            programHref="/foundation"
            programLabel="Foundation Program"
            blogHref="/blog/why-foundation-matters-for-jee-neet-class-6-8-concepts"
            blogLabel="Why Foundation Matters for JEE/NEET: The Concepts Class 6-8 Skip"
            requireLead
            quizType="Foundation Maths"
            gradeLabel="8"
          />
          <div style={{ marginTop: 8, textAlign: 'center' }}>
            <Link prefetch={false} href="/resource-centre" className="chip chip-link">&larr; All free tools</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
