import Link from 'next/link';
import { QuizRunner, type QuizQuestion } from '../_tools/QuizRunner';

const QUESTIONS: QuizQuestion[] = [
  {
    subject: 'Physics',
    question: 'What is the SI unit of power?',
    options: ['Joule', 'Newton', 'Watt', 'Pascal'],
    correctIndex: 2,
    explanation: 'Power is the rate of doing work, measured in watts (W). One watt equals one joule per second.',
  },
  {
    subject: 'Physics',
    question: 'Which type of lens is used to correct myopia (short-sightedness)?',
    options: ['Convex lens', 'Concave lens', 'Cylindrical lens', 'Bifocal lens only'],
    correctIndex: 1,
    explanation: 'In myopia, the eye focuses images in front of the retina. A concave (diverging) lens spreads the light out before it enters the eye, moving the focal point back onto the retina.',
  },
  {
    subject: 'Physics',
    question: 'A transformer works on which principle?',
    options: ['Electromagnetic induction', 'Thermal expansion', 'Photoelectric effect', 'Nuclear fission'],
    correctIndex: 0,
    explanation: "A transformer's changing current in the primary coil creates a changing magnetic flux, which induces a voltage in the secondary coil — electromagnetic (mutual) induction.",
  },
  {
    subject: 'Chemistry',
    question: 'Which gas is commonly known as laughing gas?',
    options: ['Carbon dioxide', 'Nitrous oxide', 'Nitrogen dioxide', 'Sulphur dioxide'],
    correctIndex: 1,
    explanation: 'Nitrous oxide (N₂O) is commonly called laughing gas and has historically been used as a mild anaesthetic.',
  },
  {
    subject: 'Chemistry',
    question: 'The pH scale commonly ranges from:',
    options: ['0 to 7', '0 to 10', '0 to 14', '1 to 14'],
    correctIndex: 2,
    explanation: 'The standard pH scale runs from 0 (most acidic) to 14 (most basic/alkaline), with 7 as neutral.',
  },
  {
    subject: 'Chemistry',
    question: 'Which element has the atomic number 6?',
    options: ['Nitrogen', 'Oxygen', 'Carbon', 'Boron'],
    correctIndex: 2,
    explanation: 'Carbon has 6 protons, giving it atomic number 6 — the basis of all organic chemistry and biology.',
  },
  {
    subject: 'Biology',
    question: 'Which cell organelle is known as the "powerhouse of the cell"?',
    options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi apparatus'],
    correctIndex: 2,
    explanation: 'Mitochondria generate ATP through cellular respiration, providing most of the cell\'s usable energy — hence the nickname.',
  },
  {
    subject: 'Biology',
    question: 'What is the functional unit of the kidney called?',
    options: ['Neuron', 'Nephron', 'Alveolus', 'Nephridium'],
    correctIndex: 1,
    explanation: 'Each kidney contains about a million nephrons, the structures that filter blood and form urine.',
  },
  {
    subject: 'Biology',
    question: 'DNA replication is described as:',
    options: ['Conservative', 'Semiconservative', 'Dispersive', 'Non-conservative'],
    correctIndex: 1,
    explanation: "DNA replication is semiconservative — each new DNA molecule retains one original (parent) strand and one newly synthesized strand, as demonstrated by the Meselson-Stahl experiment.",
  },
  {
    subject: 'Biology',
    question: 'Which blood group is known as the universal donor?',
    options: ['AB positive', 'O negative', 'A positive', 'B negative'],
    correctIndex: 1,
    explanation: 'O negative red blood cells carry no A, B, or Rh antigens, so they can generally be transfused into patients of any blood group without triggering an immune reaction.',
  },
];

export default function NeetQuizPage() {
  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero" style={{ paddingBottom: 32 }}>
        <div className="container article-shell">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb">
            <Link prefetch={false} href="/">Home</Link>
            <span>/</span>
            <Link prefetch={false} href="/resource-centre">Resource Centre</Link>
            <span>/</span>
            <span>NEET Quiz</span>
          </nav>
          <span className="eyebrow">Free Tool</span>
          <h1 style={{ fontSize: 'clamp(30px,4vw,44px)' }}>NEET Quick Quiz</h1>
          <p className="lede" style={{ maxWidth: 680, marginTop: 6 }}>
            10 Physics, Chemistry and Biology questions at NEET level. A quick pulse check, not a mock test — see how you do.
          </p>
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container article-shell">
          <QuizRunner
            examLabel="NEET"
            questions={QUESTIONS}
            accentColor="#EF4444"
            programHref="/12th-board-pcb"
            programLabel="NEET Program"
            blogHref="/blog/neet-2027-exam-pattern-and-marking-scheme-explained"
            blogLabel="NEET 2027 Exam Pattern and Marking Scheme Explained"
          />
          <div style={{ marginTop: 8, textAlign: 'center' }}>
            <Link prefetch={false} href="/resource-centre" className="chip chip-link">&larr; All free tools</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
