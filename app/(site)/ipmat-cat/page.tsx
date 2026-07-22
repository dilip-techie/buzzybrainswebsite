'use client';

import { useEffect, useState } from 'react';
import {
  BarChart3,
  Target,
  TrendingUp,
  Award,
  Users,
  ChevronRight,
  Phone,
  Clock,
  Brain,
  Layers,
  Repeat,
  Building2,
  MessageSquare,
} from 'lucide-react';

const HIGHLIGHTS = [
  { value: '2', label: 'Elite B-School Entrances', icon: Building2, gradient: 'linear-gradient(135deg,#9F1239,#E11D48)' },
  { value: '20+', label: 'IIMs Accept CAT Scores', icon: Award, gradient: 'linear-gradient(135deg,#6D28D9,#A855F7)' },
  { value: '12', label: 'Max Students / Batch', icon: Users, gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)' },
  { value: '25+', label: 'Years Mentoring Experience', icon: Award, gradient: 'linear-gradient(135deg,#065F46,#10B981)' },
];

const TRACKS = [
  {
    title: 'IPMAT',
    subtitle: 'After Class 12 · 5-Year Integrated BBA + MBA',
    icon: Target,
    gradient: 'linear-gradient(90deg,#9F1239,#E11D48)',
    pcbg: 'rgba(225,29,72,.12)',
    topics: [
      'Quantitative Ability — MCQ & short-answer',
      'Verbal Ability — reading comprehension & grammar',
      'Written Ability Test (WAT) & Personal Interview for shortlisted candidates',
      'Exact pattern varies by IIM and year — always confirm from the official notification',
    ],
  },
  {
    title: 'CAT',
    subtitle: 'After Graduation · 2-Year MBA / PGP',
    icon: BarChart3,
    gradient: 'linear-gradient(90deg,#1E3A8A,#2563EB)',
    pcbg: 'var(--blue-050)',
    topics: [
      'Verbal Ability & Reading Comprehension (VARC)',
      'Data Interpretation & Logical Reasoning (DILR)',
      'Quantitative Ability (QA)',
      'MCQ + Type-In-The-Answer (TITA), under sectional time limits',
    ],
  },
];

const COMPARE_ROWS = [
  { aspect: 'Eligibility', ipmat: 'Completed or appearing in Class 12, any stream', cat: "Bachelor's degree (final-year students can also apply)" },
  { aspect: 'Program Length', ipmat: '5-year integrated BBA + MBA', cat: '2-year full-time MBA / PGP' },
  { aspect: 'Typical Age at Entry', ipmat: '17–18', cat: '21+, after graduation' },
  { aspect: 'Core Skills Tested', ipmat: 'Quantitative & Verbal Ability', cat: 'Quant, Verbal & Data Interpretation/Logical Reasoning' },
];

const METHODOLOGY = [
  { icon: Target, title: 'Diagnostic', desc: 'A full-length diagnostic maps your current quant, verbal and (for CAT) DI/LR baseline against your target exam.' },
  { icon: Layers, title: 'Foundation', desc: 'Build core quantitative and verbal fundamentals, plus structured logical reasoning for CAT aspirants.' },
  { icon: Brain, title: 'Section Mastery', desc: 'Deep, timed practice by section and question type, matched to the exact IPMAT or CAT format.' },
  { icon: Repeat, title: 'Full-Length Mocks', desc: 'Realistic, sectional-timed mock tests every week, scored and analyzed section by section.' },
  { icon: TrendingUp, title: 'Score Optimization', desc: 'Detailed error analysis and final sprint strategy to convert practice into your target percentile.' },
];

const WHY_CHOOSE = [
  { title: 'Track-Specific Preparation', desc: 'IPMAT and CAT are prepared as genuinely different exams, not one generic aptitude course.', gradient: 'linear-gradient(135deg,#9F1239,#E11D48)', icon: Clock },
  { title: 'IIT Kanpur & IIM Ahmedabad Mentorship', desc: 'Led by founder Dilip Sah, an IIT Kanpur and IIM Ahmedabad alumnus with 25+ years of mentoring experience.', gradient: 'linear-gradient(135deg,#6D28D9,#A855F7)', icon: Users },
  { title: 'Max 12 Students', desc: 'Small batches mean every student gets individual, section-wise feedback — not generic advice.', gradient: 'linear-gradient(135deg,#92400E,#F59E0B)', icon: Users },
  { title: 'Data-Driven Prep', desc: 'Every mock is broken down by section and question type so we always know exactly what to fix next.', gradient: 'linear-gradient(135deg,#065F46,#10B981)', icon: BarChart3 },
  { title: 'Realistic Percentile Goals', desc: 'A target percentile band is set from your diagnostic, not a generic promise, and the plan is built backward from it.', gradient: 'linear-gradient(135deg,#0EA5E9,#0284C7)', icon: Brain },
  { title: 'WAT-PI / GD-PI Ready', desc: 'Preparation extends beyond the written test to the WAT-PI (IPMAT) and GD-PI-WAT (CAT) rounds that follow it.', gradient: 'linear-gradient(135deg,#EF4444,#DC2626)', icon: MessageSquare },
];

export default function IpmatCatPage() {
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
          <span className="eyebrow reveal">🏛️ IPMAT & CAT Coaching · India&apos;s Top B-School Entrances</span>
          <h1 className="reveal" data-delay="1">Crack <span className="grad">IPMAT & CAT.</span></h1>
          <p className="lede reveal" data-delay="2" style={{ margin: '0 auto 8px', maxWidth: 700 }}>
            Structured, track-specific preparation for both the <strong style={{ color: 'var(--blue)' }}>5-year integrated IPM</strong> route
            right after Class 12, and the <strong style={{ color: 'var(--blue)' }}>post-graduate CAT/MBA</strong> route.
          </p>
          <p className="section-sub reveal" data-delay="2" style={{ margin: '0 auto 28px' }}>
            Quantitative Ability, Verbal Ability, Data Interpretation & Logical Reasoning — mentored by an IIT Kanpur and IIM Ahmedabad alumnus.
          </p>

          <div className="hero-chips reveal" data-delay="3" style={{ justifyContent: 'center' }}>
            <span className="chip"><i className="dot" style={{ background: '#E11D48' }} /> IPMAT</span>
            <span className="chip"><i className="dot" style={{ background: 'var(--blue)' }} /> CAT</span>
            <span className="chip"><i className="dot" style={{ background: '#7C3AED' }} /> Quant & Verbal</span>
            <span className="chip"><i className="dot" style={{ background: 'var(--green)' }} /> Data Interpretation & LR</span>
          </div>

          <div className="hero-ctas reveal" data-delay="4" style={{ justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={() => setShowCtaModal(true)}>
              Book Free Demo
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

      {/* ============ TWO TRACKS ============ */}
      <section className="programs bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Two Tracks, One Program</span>
            <h2 className="section-title reveal">IPMAT and CAT, section by section</h2>
            <p className="section-sub reveal">Different exams, different timelines — prepared with genuinely different strategies.</p>
          </div>
          <div className="prog-grid-2">
            {TRACKS.map((t) => (
              <article className="prog-card reveal" style={{ ['--pc' as string]: t.gradient, ['--pcbg' as string]: t.pcbg }} key={t.title}>
                <div className="prog-icon"><t.icon size={27} color="#fff" /></div>
                <div className="grade">{t.subtitle}</div>
                <h3>{t.title}</h3>
                <ul>
                  {t.topics.map((topic) => <li key={topic}>{topic}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHICH TRACK IS RIGHT FOR YOU ============ */}
      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container article-shell" style={{ maxWidth: 860 }}>
          <div className="center">
            <span className="eyebrow reveal">Choosing a Track</span>
            <h2 className="section-title reveal">Which path is right for your child?</h2>
            <p className="section-sub reveal">A quick, honest comparison to help decide between the two routes.</p>
          </div>
          <div className="table-wrap reveal" style={{ marginTop: 32 }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Aspect</th>
                  <th>IPMAT (after Class 12)</th>
                  <th>CAT (after graduation)</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row) => (
                  <tr key={row.aspect}>
                    <td>{row.aspect}</td>
                    <td>{row.ipmat}</td>
                    <td>{row.cat}</td>
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
            <h2 className="section-title reveal">Five steps to your target percentile</h2>
            <p className="section-sub reveal">A systematic, data-backed path from diagnostic to test day.</p>
          </div>
          <div className="method-steps-5">
            {METHODOLOGY.map((step, i) => (
              <div className="step reveal" data-delay={String(i)} key={step.title}>
                <span className="num">{i + 1}</span>
                <div className="step-orb" style={{ background: 'linear-gradient(135deg,#E11D48,#9F1239)' }}>
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
            <h2 className="section-title reveal">Built for the exam students actually take</h2>
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
          <h2 style={{ marginBottom: 14 }}>Ready to target a top B-school?</h2>
          <p className="lede" style={{ margin: '0 auto 28px' }}>
            Book a free diagnostic session and get a personalized IPMAT or CAT preparation plan.
          </p>
          <div className="cta-btns" style={{ justifyContent: 'center' }}>
            <button className="btn btn-amber" onClick={() => setShowCtaModal(true)}>
              Book Your Free Demo <ChevronRight size={19} />
            </button>
            <a href="tel:+919850570525" className="btn btn-ghost" style={{ background: 'rgba(255,255,255,.08)', borderColor: 'rgba(255,255,255,.25)', color: '#fff' }}>
              <Phone size={17} /> 98505 70525
            </a>
          </div>
        </div>
      </section>

      {/* ============ CTA MODAL ============ */}
      {showCtaModal && (
        <div
          style={{
            position: 'fixed', inset: 0, background: 'rgba(15,23,42,.6)', zIndex: 200,
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
          }}
          onClick={() => setShowCtaModal(false)}
        >
          <div
            style={{
              background: 'var(--card)', borderRadius: 'var(--r-lg)', boxShadow: 'var(--shadow-lg)',
              maxWidth: 420, width: '100%', padding: 32,
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="center" style={{ marginBottom: 24 }}>
              <h2 style={{ fontSize: 26, fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: 8 }}>Ready to Enroll? 🏛️</h2>
              <p style={{ color: 'var(--text-2)' }}>Choose how you&apos;d like to connect with us</p>
            </div>

            <div style={{ display: 'grid', gap: 12 }}>
              <button onClick={handleCtaModalForm} className="btn btn-primary" style={{ width: '100%', justifyContent: 'space-between' }}>
                <span>📝 Contact Form</span>
                <ChevronRight size={19} />
              </button>
              <button onClick={handleCtaModalWhatsApp} className="btn btn-green" style={{ width: '100%', justifyContent: 'space-between' }}>
                <span>💬 WhatsApp Chat</span>
                <ChevronRight size={19} />
              </button>
            </div>

            <button
              onClick={() => setShowCtaModal(false)}
              style={{ width: '100%', marginTop: 20, color: 'var(--text-3)', fontWeight: 600, padding: '8px 0', background: 'none', border: 'none' }}
            >
              Maybe Later
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
