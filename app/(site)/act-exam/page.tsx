'use client';

import '@/app/tailwind.css';
import { useState } from 'react';
import {
  BookOpen,
  Calculator,
  Target,
  TrendingUp,
  Award,
  Users,
  ChevronRight,
  Phone,
  BarChart3,
  Brain,
  Layers,
  Repeat,
  Trophy,
  FlaskConical,
  Clock,
} from 'lucide-react';
import { FaqJsonLd } from '@/app/components/JsonLd';
import CtaModal from '@/components/CtaModal';

const FAQS = [
  {
    question: 'What is the ACT, and is it accepted by US universities?',
    answer: 'The ACT is a standardized test used in US university admissions. Universities that consider test scores generally accept the ACT and the SAT equally. Confirm each target university\'s current testing policy on its admissions page.',
  },
  {
    question: 'How is the ACT scored?',
    answer: 'Each section is scored from 1 to 36. The Composite is the average of the English, Math and Reading scores. The optional Science section is reported separately, along with a STEM score that combines Math and Science. Check act.org for current details.',
  },
  {
    question: 'Should my child take the ACT or the SAT?',
    answer: 'It depends on personal fit. The ACT is a fixed-difficulty test with less time per question, while the Digital SAT is adaptive. We suggest a timed practice test of each before deciding. BuzzyBrains Academy also coaches the Digital SAT, so we can guide you either way.',
  },
  {
    question: 'When should ACT preparation start?',
    answer: 'Many students prepare for 8 to 12 weeks or longer, depending on their starting level, target score and school workload. Start early enough to fit at least a few full-length timed practice tests before the exam.',
  },
  {
    question: 'What is the batch size?',
    answer: 'Every BuzzyBrains Academy batch is capped at a maximum of 12 students, so each student gets individual attention and score analysis.',
  },
  {
    question: 'How do I find out about current ACT batches, timings and fees?',
    answer: 'Contact us by phone or WhatsApp, or use the enquiry form. We will share current batch details and help you decide on the right plan.',
  },
];

const HIGHLIGHTS = [
  { value: '36', label: 'Max ACT Score', icon: Trophy, gradient: 'var(--grad-blue)' },
  { value: '12', label: 'Max Students / Batch', icon: Users, gradient: 'var(--grad-purple)' },
  { value: '4', label: 'Sections Covered', icon: Layers, gradient: 'var(--grad-amber)' },
  { value: '25+', label: 'Years Faculty Experience', icon: Award, gradient: 'var(--grad-green)' },
];

const SECTIONS = [
  {
    title: 'English',
    subtitle: 'Grammar, punctuation and clear writing',
    icon: BookOpen,
    gradient: 'linear-gradient(90deg,#1E3A8A,#2563EB)',
    pcbg: 'var(--blue-050)',
    topics: ['Sentence boundaries and punctuation', 'Agreement, tense and modifiers', 'Concision and word choice', 'Organisation, transitions and purpose'],
  },
  {
    title: 'Math',
    subtitle: 'Algebra, functions, geometry and data',
    icon: Calculator,
    gradient: 'linear-gradient(90deg,#6D28D9,#A855F7)',
    pcbg: 'rgba(124,58,237,.12)',
    topics: ['Algebra and functions', 'Geometry and basic trigonometry', 'Number and quantity', 'Statistics and probability'],
  },
  {
    title: 'Reading',
    subtitle: 'Fast, evidence-based passage reading',
    icon: Brain,
    gradient: 'linear-gradient(90deg,#065F46,#10B981)',
    pcbg: 'rgba(16,185,129,.12)',
    topics: ['Main idea and purpose', 'Inference and evidence', 'Literary, social science, humanities and natural science passages', 'Pacing under time pressure'],
  },
  {
    title: 'Science (optional)',
    subtitle: 'Data interpretation and reasoning',
    icon: FlaskConical,
    gradient: 'linear-gradient(90deg,#92400E,#F59E0B)',
    pcbg: 'rgba(245,158,11,.12)',
    topics: ['Reading graphs and tables', 'Understanding experiments', 'Comparing viewpoints', 'Deciding whether the optional section suits your programme'],
  },
];

const METHODOLOGY = [
  { icon: Target, title: 'Baseline', desc: 'A timed practice test maps your starting score and section-wise gaps.' },
  { icon: Layers, title: 'Foundation', desc: 'Rebuild the grammar, algebra and reading fundamentals the ACT tests.' },
  { icon: Brain, title: 'Section Mastery', desc: 'Timed practice by question type, with an error log for every miss.' },
  { icon: Repeat, title: 'Full-Length Tests', desc: 'Full tests under real timing to build pace and stamina.' },
  { icon: TrendingUp, title: 'Score Optimization', desc: 'Targeted fixes and a final-week routine to convert practice into your target score.' },
];

const WHY_CHOOSE = [
  { title: 'Pace Training', desc: 'The ACT gives little time per question, so we train pacing and decision-making, not just content.', gradient: 'var(--grad-blue)', icon: Clock },
  { title: 'IIT/IIM Alumni Mentors', desc: 'Learn from mentors who have themselves cracked elite, high-stakes exams.', gradient: 'var(--grad-purple)', icon: Users },
  { title: 'Max 12 Students', desc: 'Small batches mean every student gets individual score analysis, not generic advice.', gradient: 'var(--grad-amber)', icon: Users },
  { title: 'Data-Driven Prep', desc: 'Every practice test is broken down by question type so we know exactly what to fix next.', gradient: 'var(--grad-green)', icon: BarChart3 },
  { title: 'SAT or ACT, Honest Advice', desc: 'We also coach the Digital SAT, so we can help you choose the exam that fits you best.', gradient: 'var(--grad-sky)', icon: Brain },
  { title: 'College-Ready Timeline', desc: 'A prep calendar built backward from your test date and application deadlines.', gradient: 'var(--grad-red)', icon: Target },
];

export default function ActExamPage() {
  const [showCtaModal, setShowCtaModal] = useState(false);

  const handleCtaModalWhatsApp = () => {
    setShowCtaModal(false);
    window.open('https://wa.me/918983604478', '_blank');
  };

  const handleCtaModalForm = () => {
    setShowCtaModal(false);
    window.location.href = '/#contact';
  };

  return (
    <main className="bb-landing bb-page-shell">
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container center">
          <span className="eyebrow">🎯 ACT Exam Prep · US College Admissions · Grades 10–12</span>
          <h1>Crack the <span className="grad">ACT.</span></h1>
          <p className="lede" style={{ margin: '0 auto 8px', maxWidth: 680 }}>
            Structured, data-driven preparation for the <strong style={{ color: 'var(--blue)' }}>ACT</strong> — English, Math, Reading and the optional Science section.
          </p>
          <p className="section-sub" style={{ margin: '0 auto 28px' }}>
            Timed practice, error analysis and small batches, mentored by IIT/IIM alumni faculty in Pune.
          </p>

          <div className="hero-chips" style={{ justifyContent: 'center' }}>
            <span className="chip"><i className="dot" style={{ background: 'var(--blue)' }} /> English</span>
            <span className="chip"><i className="dot" style={{ background: '#7C3AED' }} /> Math</span>
            <span className="chip"><i className="dot" style={{ background: 'var(--green)' }} /> Reading</span>
            <span className="chip"><i className="dot" style={{ background: 'var(--amber)' }} /> Optional Science</span>
          </div>

          <div className="hero-ctas" style={{ justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={() => setShowCtaModal(true)}>
              Enquire About ACT Coaching
              <ChevronRight size={19} />
            </button>
            <a href="tel:+919850570525" className="btn btn-ghost">
              <Phone size={17} /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* ============ KEY HIGHLIGHTS ============ */}
      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="stat-cards">
            {HIGHLIGHTS.map((h, i) => (
              <div className="stat-card reveal" data-delay={String(i % 2)} key={h.label}>
                <div className="stat-card-icon" style={{ background: h.gradient }}>
                  <h.icon size={22} color="#fff" />
                </div>
                <div>
                  <b>{h.value}</b>
                  <span>{h.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXAM FORMAT ============ */}
      <section className="programs bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Exam Coverage</span>
            <h2 className="section-title reveal">What our ACT preparation covers</h2>
            <p className="section-sub reveal">
              Each section is scored 1 to 36, and the Composite averages English, Math and Reading. Check{' '}
              <a href="https://www.act.org/" target="_blank" rel="noopener noreferrer">act.org</a> for the latest format and dates.
            </p>
          </div>
          <div className="prog-grid-2">
            {SECTIONS.map((s) => (
              <article className="prog-card reveal" style={{ ['--pc' as string]: s.gradient, ['--pcbg' as string]: s.pcbg }} key={s.title}>
                <div className="prog-icon"><s.icon size={27} color="#fff" /></div>
                <div className="grade">{s.subtitle}</div>
                <h3>{s.title}</h3>
                <ul>
                  {s.topics.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ METHODOLOGY ============ */}
      <section className="method bb-section" id="method">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Our Methodology</span>
            <h2 className="section-title reveal">Five steps to your target score</h2>
            <p className="section-sub reveal">A systematic path from baseline test to test day.</p>
          </div>
          <div className="method-steps-5">
            {METHODOLOGY.map((step, i) => (
              <div className="step reveal" data-delay={String(i)} key={step.title}>
                <span className="num">{i + 1}</span>
                <div className="step-orb" style={{ background: 'linear-gradient(135deg,#2563EB,#7C3AED)' }}>
                  <step.icon size={30} color="#fff" />
                </div>
                <h3 style={{ fontSize: 17 }}>{step.title}</h3>
                <p style={{ fontSize: 13.5 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Why BuzzyBrains Academy</span>
            <h2 className="section-title reveal">Built for focused, small-batch preparation</h2>
          </div>
          <div className="trust-grid">
            {WHY_CHOOSE.map((w, i) => (
              <div className="trust-card reveal" data-delay={String((i % 3) + 1)} key={w.title}>
                <div className="trust-icon" style={{ background: w.gradient }}><w.icon size={24} color="#fff" /></div>
                <h3>{w.title}</h3>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bb-section" id="faq" aria-labelledby="faq-title">
        <div className="container" style={{ maxWidth: 760 }}>
          <div className="center">
            <span className="eyebrow reveal">FAQ</span>
            <h2 className="section-title reveal" id="faq-title">Frequently asked questions</h2>
          </div>
          <FaqJsonLd items={FAQS} />
          <div className="article-faq reveal" style={{ marginTop: 32 }}>
            {FAQS.map((item) => (
              <div className="article-faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
          <p className="section-sub center" style={{ marginTop: 24 }}>
            Read our guides: <a href="/blog/act-exam-guide-for-indian-students-format-sections-timing">ACT exam guide</a>,{' '}
            <a href="/blog/act-study-plan-12-week-preparation-schedule-for-indian-students">12-week ACT study plan</a> and{' '}
            <a href="/blog/sat-vs-act-which-should-indian-students-take">SAT vs ACT</a>.
          </p>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="cta bb-section">
        <div className="container center" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ background: 'rgba(245,158,11,.16)', color: '#FBBF24' }}>Limited Seats · Max 12 per Batch</span>
          <h2 style={{ marginBottom: 14 }}>Ready to start your ACT preparation?</h2>
          <p className="lede" style={{ margin: '0 auto 28px' }}>
            Talk to our team about current batches and a plan built around your target score.
          </p>
          <div className="cta-btns" style={{ justifyContent: 'center' }}>
            <button className="btn btn-amber" onClick={() => setShowCtaModal(true)}>
              Enquire About ACT Coaching <ChevronRight size={19} />
            </button>
            <a href="tel:+919850570525" className="btn btn-ghost" style={{ background: 'rgba(255,255,255,.08)', borderColor: 'rgba(255,255,255,.25)', color: '#fff' }}>
              <Phone size={17} /> 98505 70525
            </a>
          </div>
        </div>
      </section>

      {/* ============ CTA MODAL ============ */}
      <CtaModal
        open={showCtaModal}
        onClose={() => setShowCtaModal(false)}
        onFormClick={handleCtaModalForm}
        onWhatsAppClick={handleCtaModalWhatsApp}
        title="Enquire About ACT Coaching 🎯"
        subtitle="Choose how you'd like to connect with us"
      />
    </main>
  );
}
