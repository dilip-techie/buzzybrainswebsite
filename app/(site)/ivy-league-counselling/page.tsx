'use client';

import { useEffect, useState } from 'react';
import {
  BookOpen,
  Target,
  TrendingUp,
  Award,
  Users,
  ChevronRight,
  Phone,
  Clock,
  BarChart3,
  Brain,
  Layers,
  Repeat,
  Landmark,
  CalendarClock,
  Compass,
} from 'lucide-react';
import CtaModal from '@/components/CtaModal';

const HIGHLIGHTS = [
  { value: '8', label: 'Ivy League Universities', icon: Landmark, gradient: 'linear-gradient(135deg,#854D0E,#CA8A04)' },
  { value: '4-Yr', label: 'Grade 9–12 Roadmap', icon: CalendarClock, gradient: 'linear-gradient(135deg,#6D28D9,#A855F7)' },
  { value: '12', label: 'Max Students / Batch', icon: Users, gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)' },
  { value: '25+', label: 'Years Mentoring Experience', icon: Award, gradient: 'linear-gradient(135deg,#065F46,#10B981)' },
];

const SECTIONS = [
  {
    title: 'Academic Profile Strategy',
    subtitle: 'Course rigor & GPA trajectory',
    icon: TrendingUp,
    gradient: 'linear-gradient(90deg,#854D0E,#CA8A04)',
    pcbg: 'rgba(202,138,4,.12)',
    topics: ['Course-rigor mapping across grades 9–12', 'Subject-depth planning (AP / IB / IGCSE)', 'GPA trajectory awareness, term by term', 'Identifying a coherent academic narrative'],
  },
  {
    title: 'Standardized Testing',
    subtitle: 'SAT & AP score strategy',
    icon: Target,
    gradient: 'linear-gradient(90deg,#1E3A8A,#2563EB)',
    pcbg: 'var(--blue-050)',
    topics: ['SAT preparation via our Digital SAT program', 'AP subject selection and score targets', 'Test-date and retake planning', 'Score-band goals aligned to target universities'],
  },
  {
    title: 'Course & Curriculum Planning',
    subtitle: 'Building depth, not just breadth',
    icon: BookOpen,
    gradient: 'linear-gradient(90deg,#6D28D9,#A855F7)',
    pcbg: 'rgba(124,58,237,.12)',
    topics: ['Choosing AP / IB / IGCSE subjects with intent', 'Balancing rigor against realistic workload', 'Building a 2–3 subject area of depth', 'Aligning coursework to intended majors'],
  },
  {
    title: 'Application Timeline Roadmap',
    subtitle: 'Grade-by-grade calendar',
    icon: CalendarClock,
    gradient: 'linear-gradient(90deg,#065F46,#10B981)',
    pcbg: 'rgba(16,185,129,.12)',
    topics: ['Grade 9–10: foundation & exploration phase', 'Grade 11: testing & profile-building phase', 'Grade 12: application-cycle deadlines', 'Early Decision / Early Action awareness'],
  },
];

const PROFILE_TABLE = [
  { component: 'Course Rigor', signals: 'Depth of AP / IB / IGCSE courses taken relative to what your school offers', help: 'Multi-year subject & timeline strategy' },
  { component: 'Standardized Tests', signals: 'SAT and AP scores, submitted where relevant to your target universities', help: 'Dedicated SAT and AP coaching programs' },
  { component: 'Academic Trajectory', signals: 'Consistent grade performance and improvement over time', help: 'Grade-by-grade planning and progress reviews' },
  { component: 'Extracurriculars & Essays', signals: 'Depth of outside interests, activities and personal voice', help: 'Not covered by this program — coordinate with your school counsellor or a dedicated admissions consultant' },
];

const METHODOLOGY = [
  { icon: Target, title: 'Profile Assessment', desc: 'A detailed review of current coursework, grades and testing plans against your target universities.' },
  { icon: Layers, title: 'Roadmap Design', desc: 'A grade-by-grade academic and testing roadmap built backward from application deadlines.' },
  { icon: Brain, title: 'Course & Test Strategy', desc: 'Subject selection guidance plus structured SAT/AP preparation to build a genuinely competitive profile.' },
  { icon: Repeat, title: 'Progress Reviews', desc: 'Regular check-ins each term to track grades, test scores and adjust the roadmap as needed.' },
  { icon: TrendingUp, title: 'Application-Ready Profile', desc: 'By senior year, a documented academic profile and score record ready to support your applications.' },
];

const WHY_CHOOSE = [
  { title: 'Academic Focus, Honestly Scoped', desc: 'We build the academic profile — course strategy, SAT/AP scores — and are upfront about what this program does not cover.', gradient: 'linear-gradient(135deg,#854D0E,#CA8A04)', icon: Compass },
  { title: 'IIT/IIM Alumni Mentors', desc: 'Mentors who have themselves navigated high-stakes, competitive academic pathways.', gradient: 'linear-gradient(135deg,#6D28D9,#A855F7)', icon: Users },
  { title: 'Max 12 Students', desc: 'Small batches mean every family gets an individually reviewed academic roadmap.', gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)', icon: Users },
  { title: 'Integrated SAT/AP Prep', desc: 'Testing strategy is coordinated with our own SAT and AP programs, not outsourced or generic.', gradient: 'linear-gradient(135deg,#065F46,#10B981)', icon: BarChart3 },
  { title: 'No Guarantees, No Overselling', desc: 'Ivy League admission is holistic and never guaranteed by any program — we set honest, evidence-based expectations.', gradient: 'linear-gradient(135deg,#0EA5E9,#0284C7)', icon: Brain },
  { title: 'Multi-Year Planning', desc: 'A roadmap that starts as early as grade 9, so decisions compound instead of scrambling senior year.', gradient: 'linear-gradient(135deg,#EF4444,#DC2626)', icon: Clock },
];

export default function IvyLeagueCounsellingPage() {
  const [showCtaModal, setShowCtaModal] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const handleCtaModalWhatsApp = () => {
    setShowCtaModal(false);
    window.open('https://wa.me/919850570525', '_blank');
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
          <span className="eyebrow reveal">🎓 Ivy League &amp; Top US University Counselling · Grades 9–12</span>
          <h1 className="reveal" data-delay="1">Build the <span className="grad">academic profile</span> top universities look for.</h1>
          <p className="lede reveal" data-delay="2" style={{ margin: '0 auto 8px', maxWidth: 720 }}>
            A multi-year roadmap for <strong style={{ color: 'var(--blue)' }}>course strategy, SAT/AP scores and academic trajectory</strong> —
            the parts of an Ivy League or top-US-university application that structured mentorship can genuinely move.
          </p>
          <p className="section-sub reveal" data-delay="2" style={{ margin: '0 auto 28px' }}>
            We focus on academics, honestly. No admission guarantees, no essay or extracurricular consulting — just a disciplined, grade-by-grade plan.
          </p>

          <div className="hero-chips reveal" data-delay="3" style={{ justifyContent: 'center' }}>
            <span className="chip"><i className="dot" style={{ background: '#CA8A04' }} /> Course Strategy</span>
            <span className="chip"><i className="dot" style={{ background: 'var(--blue)' }} /> SAT / AP Scores</span>
            <span className="chip"><i className="dot" style={{ background: '#7C3AED' }} /> Grade 9–12 Roadmap</span>
            <span className="chip"><i className="dot" style={{ background: 'var(--green)' }} /> Term-wise Reviews</span>
          </div>

          <div className="hero-ctas reveal" data-delay="4" style={{ justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={() => setShowCtaModal(true)}>
              Book Free Consultation
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

      {/* ============ PROGRAM FOCUS AREAS ============ */}
      <section className="programs bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Program Focus</span>
            <h2 className="section-title reveal">Four pillars of a competitive academic profile</h2>
            <p className="section-sub reveal">What we actually build with your child, grade by grade.</p>
          </div>
          <div className="prog-grid">
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

      {/* ============ WHAT COUNTS, HONESTLY ============ */}
      <section className="bb-section">
        <div className="container article-shell" style={{ maxWidth: 860 }}>
          <div className="center">
            <span className="eyebrow reveal">Holistic Review, Honestly Explained</span>
            <h2 className="section-title reveal">What a profile signals — and where we help</h2>
            <p className="section-sub reveal">Top US universities evaluate applications holistically. Here is exactly where our program fits, and where it doesn&apos;t.</p>
          </div>
          <div className="table-wrap reveal" style={{ marginTop: 32 }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Profile Component</th>
                  <th>What It Signals</th>
                  <th>How We Help</th>
                </tr>
              </thead>
              <tbody>
                {PROFILE_TABLE.map((row) => (
                  <tr key={row.component}>
                    <td>{row.component}</td>
                    <td>{row.signals}</td>
                    <td>{row.help}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ METHODOLOGY ============ */}
      <section className="method bb-section" id="method">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Our Methodology</span>
            <h2 className="section-title reveal">Five steps to an application-ready profile</h2>
            <p className="section-sub reveal">A systematic, multi-year path from grade 9 assessment to senior-year applications.</p>
          </div>
          <div className="method-steps-5">
            {METHODOLOGY.map((step, i) => (
              <div className="step reveal" data-delay={String(i)} key={step.title}>
                <span className="num">{i + 1}</span>
                <div className="step-orb" style={{ background: 'linear-gradient(135deg,#CA8A04,#854D0E)' }}>
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
            <h2 className="section-title reveal">Honest guidance, built on real academics</h2>
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

      {/* ============ FINAL CTA ============ */}
      <section className="cta bb-section">
        <div className="container center" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ background: 'rgba(245,158,11,.16)', color: '#FBBF24' }}>Limited Seats · Max 12 per Batch</span>
          <h2 style={{ marginBottom: 14 }}>Ready to start the roadmap?</h2>
          <p className="lede" style={{ margin: '0 auto 28px' }}>
            Book a free consultation and get a grade-by-grade academic and testing plan.
          </p>
          <div className="cta-btns" style={{ justifyContent: 'center' }}>
            <button className="btn btn-amber" onClick={() => setShowCtaModal(true)}>
              Book Your Free Consultation <ChevronRight size={19} />
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
        title="Ready to Get Started? 🎓"
        subtitle="Choose how you'd like to connect with us"
      />
    </main>
  );
}
