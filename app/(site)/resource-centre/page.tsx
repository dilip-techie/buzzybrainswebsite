import Link from 'next/link';
import { Target, Calculator, HelpCircle, CalendarClock, ListChecks, BookOpen, type LucideIcon } from 'lucide-react';

interface ToolEntry {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  live: boolean;
  gradient: string;
  solid: string;
  glow: string;
}

const CALCULATORS: ToolEntry[] = [
  {
    slug: '/neet-jee-rank-predictor',
    title: 'NEET & JEE Main Rank Predictor',
    description: 'An honest, banded read on what your expected score typically converts to — no fake precise cutoffs.',
    icon: Target,
    live: true,
    gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)',
    solid: '#2563EB',
    glow: '37,99,235',
  },
  {
    slug: '/score-calculator',
    title: 'NEET/JEE Score Calculator',
    description: 'Enter your correct, incorrect and unattempted counts per section and get your score using the real official marking scheme.',
    icon: Calculator,
    live: true,
    gradient: 'linear-gradient(135deg,#991B1B,#EF4444)',
    solid: '#EF4444',
    glow: '239,68,68',
  },
];

const QUIZZES: ToolEntry[] = [
  {
    slug: '/jee-quiz',
    title: 'JEE Quick Quiz',
    description: '10 Physics, Chemistry and Maths questions at JEE Main level, with instant scoring and explanations.',
    icon: HelpCircle,
    live: true,
    gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)',
    solid: '#2563EB',
    glow: '37,99,235',
  },
  {
    slug: '/neet-quiz',
    title: 'NEET Quick Quiz',
    description: '10 Physics, Chemistry and Biology questions at NEET level, with instant scoring and explanations.',
    icon: HelpCircle,
    live: true,
    gradient: 'linear-gradient(135deg,#991B1B,#EF4444)',
    solid: '#EF4444',
    glow: '239,68,68',
  },
];

const PLANNERS: ToolEntry[] = [
  {
    slug: '/study-timetable-generator',
    title: 'Study Timetable Generator',
    description: 'Enter your school and coaching hours, get a realistic weekly timetable built around subject rotation, not guesswork.',
    icon: CalendarClock,
    live: false,
    gradient: 'linear-gradient(135deg,#0369A1,#0EA5E9)',
    solid: '#0EA5E9',
    glow: '14,165,233',
  },
  {
    slug: '/mock-test-planner',
    title: 'Mock Test Schedule Planner',
    description: 'Enter your exam date and get a phased mock-test calendar — diagnostic, core, intensive, taper.',
    icon: ListChecks,
    live: false,
    gradient: 'linear-gradient(135deg,#065F46,#10B981)',
    solid: '#10B981',
    glow: '16,185,129',
  },
  {
    slug: '/board-exam-study-planner',
    title: 'Board Exam Study Planner',
    description: 'A free, printable month-by-month study planner for Class 10 and 12 board exams, with a final-week checklist.',
    icon: BookOpen,
    live: true,
    gradient: 'linear-gradient(135deg,#92400E,#F59E0B)',
    solid: '#F59E0B',
    glow: '245,158,11',
  },
];

function ToolGroup({ heading, tools }: { heading: string; tools: ToolEntry[] }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 20, marginBottom: 16 }}>{heading}</h2>
      <div className="category-grid">
        {tools.map((tool) => {
          const Icon = tool.icon;
          const card = (
            <>
              <div className="category-card-top">
                <span className="category-card-icon"><Icon /></span>
                <span className={`category-card-count${tool.live ? '' : ' soon'}`}>
                  {tool.live ? 'Free' : 'Coming soon'}
                </span>
              </div>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
            </>
          );
          const style = { ['--cc-gradient' as string]: tool.gradient, ['--cc-solid' as string]: tool.solid, ['--cc-glow' as string]: tool.glow };
          return tool.live ? (
            <Link prefetch={false} key={tool.slug} href={tool.slug} className="category-card" style={style}>
              {card}
            </Link>
          ) : (
            <div key={tool.slug} className="category-card category-card-disabled" style={style} aria-disabled="true">
              {card}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ResourceCentrePage() {
  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero blog-hero-compact">
        <div className="container">
          <div className="hero-badges">
            <span className="eyebrow">Resource Centre</span>
            <span className="eyebrow">Mentored by IITian</span>
          </div>
          <h1>Free tools for JEE, NEET & board exams.</h1>
          <p className="lede">
            No signup, no fake precision — just the same honest, banded thinking behind our blog guides, made interactive.
          </p>
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <ToolGroup heading="Calculators" tools={CALCULATORS} />
          <ToolGroup heading="Quizzes" tools={QUIZZES} />
          <ToolGroup heading="Planners" tools={PLANNERS} />

          <div style={{ marginTop: 20, textAlign: 'center' }}>
            <Link prefetch={false} href="/blog" className="chip chip-link">Looking for guides instead? Browse the blog &rarr;</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
