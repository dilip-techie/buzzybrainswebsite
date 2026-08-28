import Link from 'next/link';
import { QuizRunner, type QuizQuestion } from '../_tools/QuizRunner';

const QUESTIONS: QuizQuestion[] = [
  {
    subject: 'Numbers',
    question: 'What is the place value of 7 in 4,752?',
    options: ['7', '70', '700', '7000'],
    correctIndex: 2,
    explanation: 'In 4,752, the digit 7 is in the hundreds place, so its place value is 700.',
  },
  {
    subject: 'Numbers',
    question: 'Which of the following is a prime number?',
    options: ['15', '21', '17', '27'],
    correctIndex: 2,
    explanation: '15 = 3×5, 21 = 3×7, and 27 = 3×9 all have factors other than 1 and themselves. 17 has no such factors, so it is prime.',
  },
  {
    subject: 'Numbers',
    question: 'What is the HCF of 12 and 18?',
    options: ['2', '3', '6', '9'],
    correctIndex: 2,
    explanation: '12 = 2² × 3 and 18 = 2 × 3². The common factors are 2 and 3, so the HCF is 2 × 3 = 6.',
  },
  {
    subject: 'Fractions',
    question: 'Simplify: 3/4 + 1/4',
    options: ['1/2', '3/4', '1', '4/8'],
    correctIndex: 2,
    explanation: 'With the same denominator, add the numerators: 3/4 + 1/4 = 4/4 = 1.',
  },
  {
    subject: 'Mensuration',
    question: 'What is the perimeter of a square with side 5 cm?',
    options: ['10 cm', '15 cm', '20 cm', '25 cm'],
    correctIndex: 2,
    explanation: 'A square has 4 equal sides, so perimeter = 4 × side = 4 × 5 = 20 cm.',
  },
  {
    subject: 'Numbers',
    question: 'Which of these numbers is divisible by 3?',
    options: ['25', '27', '28', '29'],
    correctIndex: 1,
    explanation: 'A number is divisible by 3 if the sum of its digits is divisible by 3. For 27, 2+7=9, which is divisible by 3.',
  },
  {
    subject: 'Integers',
    question: 'What is -5 + 8?',
    options: ['-13', '-3', '3', '13'],
    correctIndex: 2,
    explanation: 'Adding 8 to -5 moves 8 steps to the right on the number line from -5, landing on 3.',
  },
  {
    subject: 'Decimals',
    question: 'Convert 0.75 to a fraction in simplest form.',
    options: ['7/5', '3/4', '75/10', '1/4'],
    correctIndex: 1,
    explanation: '0.75 = 75/100, which simplifies (dividing by 25) to 3/4.',
  },
  {
    subject: 'Geometry',
    question: 'An angle of 90° is called a:',
    options: ['Acute angle', 'Right angle', 'Obtuse angle', 'Straight angle'],
    correctIndex: 1,
    explanation: 'An angle of exactly 90° is called a right angle.',
  },
  {
    subject: 'Algebra',
    question: 'What is the value of 6 × (4 + 3)?',
    options: ['27', '42', '34', '46'],
    correctIndex: 1,
    explanation: 'Following the order of operations, first solve the bracket: 4+3=7, then 6×7=42.',
  },
];

export default function FoundationMathsQuizClass6Page() {
  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero" style={{ paddingBottom: 32 }}>
        <div className="container article-shell">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb">
            <Link prefetch={false} href="/">Home</Link>
            <span>/</span>
            <Link prefetch={false} href="/resource-centre">Resource Centre</Link>
            <span>/</span>
            <span>Class 6 Maths Quiz</span>
          </nav>
          <div className="hero-badges">
            <span className="eyebrow">Free Tool</span>
            <span className="eyebrow">Mentored by IITian</span>
          </div>
          <h1 style={{ fontSize: 'clamp(30px,4vw,44px)' }}>Class 6 Foundation Maths Quiz</h1>
          <p className="lede" style={{ maxWidth: 680, marginTop: 6 }}>
            10 questions covering numbers, fractions, integers and basic geometry at Class 6 level. A quick pulse check — see how you do.
          </p>
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container article-shell">
          <QuizRunner
            examLabel="Class 6 Maths"
            questions={QUESTIONS}
            accentColor="#10B981"
            programHref="/foundation"
            programLabel="Foundation Program"
            blogHref="/blog/why-foundation-matters-for-jee-neet-class-6-8-concepts"
            blogLabel="Why Foundation Matters for JEE/NEET: The Concepts Class 6-8 Skip"
            requireLead
            quizType="Foundation Maths"
            gradeLabel="6"
          />
          <div style={{ marginTop: 8, textAlign: 'center' }}>
            <Link prefetch={false} href="/resource-centre" className="chip chip-link">&larr; All free tools</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
