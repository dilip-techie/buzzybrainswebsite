import Link from 'next/link';
import { QuizRunner, type QuizQuestion } from '../_tools/QuizRunner';

const QUESTIONS: QuizQuestion[] = [
  {
    subject: 'Number Systems',
    question: 'Which of the following is an irrational number?',
    options: ['4/5', 'π', '0.333...', '√16'],
    correctIndex: 1,
    explanation: '√16 = 4 (rational) and 0.333... = 1/3 (rational). π cannot be expressed as a simple fraction, so it is irrational.',
  },
  {
    subject: 'Polynomials',
    question: 'What is the degree of the polynomial 3x⁴ + 2x² - 7?',
    options: ['2', '3', '4', '7'],
    correctIndex: 2,
    explanation: 'The degree of a polynomial is the highest power of the variable — here, x⁴, so the degree is 4.',
  },
  {
    subject: 'Coordinate Geometry',
    question: 'In the coordinate plane, the point (0,0) is called the:',
    options: ['Origin', 'Quadrant', 'Axis', 'Abscissa'],
    correctIndex: 0,
    explanation: 'The point where the x-axis and y-axis intersect, (0,0), is called the origin.',
  },
  {
    subject: 'Linear Equations',
    question: 'If 2x + 3y = 12, what is y when x = 0?',
    options: ['2', '3', '4', '6'],
    correctIndex: 2,
    explanation: 'Substituting x=0: 3y = 12, so y = 4.',
  },
  {
    subject: 'Triangles',
    question: 'The sum of the angles of a triangle is always:',
    options: ['90°', '180°', '270°', '360°'],
    correctIndex: 1,
    explanation: 'This is a fundamental property of triangles — the three interior angles always sum to 180°.',
  },
  {
    subject: "Heron's Formula",
    question: 'A triangle has sides 3, 4 and 5. What is its area using Heron\'s formula?',
    options: ['6', '7.5', '10', '12'],
    correctIndex: 0,
    explanation: 'Semi-perimeter s = (3+4+5)/2 = 6. Area = √(s(s-a)(s-b)(s-c)) = √(6×3×2×1) = √36 = 6.',
  },
  {
    subject: 'Probability',
    question: 'What is the probability of getting a head when a fair coin is tossed once?',
    options: ['0', '1/4', '1/2', '1'],
    correctIndex: 2,
    explanation: 'There are 2 equally likely outcomes (heads, tails), and 1 favors heads, so the probability is 1/2.',
  },
  {
    subject: 'Linear Equations',
    question: 'Which of these is a linear equation in one variable?',
    options: ['3x - 7 = 2', 'x² + 3 = 7', 'xy = 5', '3x + 2y = 6'],
    correctIndex: 0,
    explanation: 'A linear equation in one variable has only one variable, raised to the power 1. "3x - 7 = 2" fits this exactly.',
  },
  {
    subject: 'Number Systems',
    question: 'What is the value of (2 + √3)(2 - √3)?',
    options: ['1', '4', '4-√3', '7'],
    correctIndex: 0,
    explanation: 'This is a difference of squares: 2² - (√3)² = 4 - 3 = 1.',
  },
  {
    subject: 'Lines & Angles',
    question: 'Two supplementary angles are in the ratio 2:3. What is the smaller angle?',
    options: ['36°', '60°', '72°', '108°'],
    correctIndex: 2,
    explanation: 'Supplementary angles sum to 180°. In the ratio 2:3, that\'s 5 parts = 180°, so 1 part = 36°. The smaller angle = 2 × 36° = 72°.',
  },
];

export default function FoundationMathsQuizClass9Page() {
  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero" style={{ paddingBottom: 32 }}>
        <div className="container article-shell">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb">
            <Link prefetch={false} href="/">Home</Link>
            <span>/</span>
            <Link prefetch={false} href="/resource-centre">Resource Centre</Link>
            <span>/</span>
            <span>Class 9 Maths Quiz</span>
          </nav>
          <div className="hero-badges">
            <span className="eyebrow">Free Tool</span>
            <span className="eyebrow">Mentored by IITian</span>
          </div>
          <h1 style={{ fontSize: 'clamp(30px,4vw,44px)' }}>Class 9 Foundation Maths Quiz</h1>
          <p className="lede" style={{ maxWidth: 680, marginTop: 6 }}>
            10 questions covering number systems, polynomials, coordinate geometry and triangles at Class 9 level. A quick pulse check — see how you do.
          </p>
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container article-shell">
          <QuizRunner
            examLabel="Class 9 Maths"
            questions={QUESTIONS}
            accentColor="#10B981"
            programHref="/foundation"
            programLabel="Foundation Program"
            blogHref="/blog/how-early-should-jee-preparation-actually-start"
            blogLabel="How Early Should JEE Preparation Actually Start?"
            requireLead
            quizType="Foundation Maths"
            gradeLabel="9"
          />
          <div style={{ marginTop: 8, textAlign: 'center' }}>
            <Link prefetch={false} href="/resource-centre" className="chip chip-link">&larr; All free tools</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
