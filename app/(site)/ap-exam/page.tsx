'use client';

import { useState } from 'react';
import {
  Calculator,
  Atom,
  FlaskConical,
  BarChart3,
  Code2,
  Layers,
  ChevronRight,
  Phone,
  Clock,
  Users,
  Award,
  Trophy,
  Target,
  Brain,
  Repeat,
  TrendingUp,
  BookOpen,
  Dna,
  Leaf,
  DollarSign,
  Landmark,
  Globe,
  Scale,
  MapPin,
} from 'lucide-react';

const HIGHLIGHTS = [
  { value: '24', label: 'AP Subjects Coached', icon: Trophy, gradient: 'var(--grad-blue)' },
  { value: '12', label: 'Max Students / Batch', icon: Users, gradient: 'var(--grad-purple)' },
  { value: 'IIT Kanpur', label: 'Founder-Led Teaching', icon: Award, gradient: 'var(--grad-amber)' },
  { value: '25+', label: 'Years Faculty Experience', icon: Trophy, gradient: 'var(--grad-green)' },
];

const COURSES = [
  {
    id: 'calculus',
    subject: 'AP Calculus AB & BC',
    grade: 'Mathematics',
    icon: Calculator,
    gradient: 'var(--grad-blue)',
    pcbg: 'var(--blue-050)',
    description: 'From limits to series, built on deep conceptual foundations — not formula memorisation.',
    topics: ['Full FRQ practice with College Board rubrics', 'Unit-wise progress checks (AP Classroom aligned)', 'BC-only topics: series, parametrics, polar'],
  },
  {
    id: 'physics',
    subject: 'AP Physics 1 & Physics C',
    grade: 'Physics',
    icon: Atom,
    gradient: 'var(--grad-green)',
    pcbg: 'rgba(16,185,129,.12)',
    description: 'Algebra-based Physics 1 for first-timers; calculus-based Physics C: Mechanics for engineering-bound students.',
    topics: ['Derivations from first principles', 'Experimental-design FRQ training', 'Lab-context reasoning practice'],
  },
  {
    id: 'chemistry',
    subject: 'AP Chemistry',
    grade: 'Sciences',
    icon: FlaskConical,
    gradient: 'var(--grad-amber)',
    pcbg: 'rgba(245,158,11,.12)',
    description: 'Stoichiometry through thermodynamics and equilibrium, with the particulate-level reasoning the exam rewards.',
    topics: ['Net-ionic equation mastery', 'Long & short FRQ pattern practice', 'Full-length timed mocks'],
  },
  {
    id: 'statistics',
    subject: 'AP Statistics',
    grade: 'Mathematics',
    icon: BarChart3,
    gradient: 'var(--grad-purple)',
    pcbg: 'rgba(124,58,237,.12)',
    description: 'Inference, probability and study design taught through real data — with the justification language graders look for.',
    topics: ['Template answers for inference FRQs', 'Calculator fluency (TI-84 / Casio)', 'Investigative Task preparation'],
  },
  {
    id: 'computer-science',
    subject: 'AP Computer Science A',
    grade: 'Computer Science',
    icon: Code2,
    gradient: 'linear-gradient(135deg,#334155,#0F172A)',
    pcbg: 'rgba(51,65,85,.12)',
    description: 'Java from fundamentals to the four FRQ archetypes: methods & control, class design, arrays/ArrayList and 2D arrays.',
    topics: ['All four FRQ types drilled to pattern', 'Code-tracing for the MCQ section', 'Practice sets with full solutions'],
  },
  {
    id: 'multi-ap',
    subject: 'Multi-AP Bundles',
    grade: 'Combined Track',
    icon: Layers,
    gradient: 'linear-gradient(135deg,#0369A1,#0EA5E9)',
    pcbg: 'rgba(14,165,233,.12)',
    description: 'Taking two or more APs this cycle? Combined schedules balance workloads so no exam is under-prepared in May.',
    topics: ['Coordinated weekly planner', 'Shared mock-exam calendar', 'Priority doubt-clearing slots'],
  },
];

const CATEGORY_COLOR: Record<string, string> = {
  Mathematics: '#1E3A8A,#2563EB',
  Sciences: '#065F46,#10B981',
  'Social Science': '#6D28D9,#A855F7',
  English: '#0369A1,#0EA5E9',
  History: '#92400E,#F59E0B',
  'Computer Science': '#334155,#0F172A',
};

const TIER_2 = [
  { name: 'AP Precalculus', cat: 'Mathematics', icon: Calculator },
  { name: 'AP Physics C: Electricity & Magnetism', cat: 'Sciences', icon: Atom },
  { name: 'AP Physics 2', cat: 'Sciences', icon: Atom },
  { name: 'AP Biology', cat: 'Sciences', icon: Dna },
  { name: 'AP Environmental Science', cat: 'Sciences', icon: Leaf },
  { name: 'AP Computer Science Principles (CSP)', cat: 'Computer Science', icon: Code2 },
];

const TIER_3 = [
  { name: 'AP Psychology', cat: 'Social Science', icon: Brain },
  { name: 'AP Microeconomics', cat: 'Social Science', icon: DollarSign },
  { name: 'AP Macroeconomics', cat: 'Social Science', icon: TrendingUp },
  { name: 'AP English Language & Composition', cat: 'English', icon: BookOpen },
  { name: 'AP English Literature & Composition', cat: 'English', icon: BookOpen },
  { name: 'AP US History', cat: 'History', icon: Landmark },
  { name: 'AP World History: Modern', cat: 'History', icon: Globe },
  { name: 'AP US Government & Politics', cat: 'Social Science', icon: Scale },
  { name: 'AP Comparative Government & Politics', cat: 'Social Science', icon: Scale },
  { name: 'AP European History', cat: 'History', icon: Landmark },
  { name: 'AP Human Geography', cat: 'Social Science', icon: MapPin },
];

const METHODOLOGY = [
  { icon: Target, title: 'Diagnostic', desc: 'A no-pressure assessment maps current level against the AP course framework.' },
  { icon: Layers, title: 'Personal Plan', desc: 'A week-by-week roadmap to exam day, tuned to the target score and available time.' },
  { icon: Brain, title: 'Concept Classes', desc: 'Live sessions building genuine understanding — every topic derived, never dictated.' },
  { icon: Repeat, title: 'FRQ Drills & Mocks', desc: 'Rubric-graded free-response practice and full-length timed mock exams.' },
  { icon: TrendingUp, title: 'Score the 5', desc: 'Walk into the May exam having already written it — several times over.' },
];

const WHY_CHOOSE = [
  { title: 'IIT Kanpur Mentorship', desc: 'Learn from an IIT Kanpur graduate (JEE AIR ~400) who teaches the why behind every method — the depth AP exams are designed to test.', gradient: 'var(--grad-blue)', icon: Award },
  { title: '1-on-1 or Small Batches', desc: 'Choose fully personalized one-on-one mentoring, or small batches capped at 12 — either way, misconceptions get caught and corrected the week they appear, not in May.', gradient: 'var(--grad-purple)', icon: Users },
  { title: 'FRQ-First Training', desc: 'Free-response questions decide your score band. We train rubric-aligned writing from day one, graded against College Board standards.', gradient: 'var(--grad-amber)', icon: Target },
  { title: 'US-Timezone Friendly', desc: 'Live online classes scheduled to suit students in the US and internationally, with recordings and doubt support between sessions.', gradient: 'var(--grad-green)', icon: Clock },
  { title: 'AP Classroom Aligned', desc: 'Unit-wise progress checks and practice mapped directly to the official College Board AP Classroom framework.', gradient: 'var(--grad-sky)', icon: BarChart3 },
  { title: 'College-Credit Ready', desc: 'A prep calendar built backward from exam day, aimed at the 4s and 5s that earn credit or advanced standing.', gradient: 'var(--grad-red)', icon: Trophy },
];

const FAQS = [
  { question: 'Who are AP courses for?', answer: 'Advanced Placement courses are college-level courses for high-school students, administered by the College Board. Strong AP scores (typically 4 or 5) strengthen US college applications and can earn college credit or advanced standing at many universities worldwide.' },
  { question: 'When are AP exams held, and when should we start?', answer: 'AP exams are held in the first two weeks of May each year. For comfortable, high-score preparation we recommend starting by August–September of the preceding year; accelerated tracks are available for later starters.' },
  { question: 'Are classes online or in person?', answer: 'Both. We run live online classes for students across India, the US and elsewhere, and in-person sessions at our Amanora, Pune centre. All online sessions are recorded for revision.' },
  { question: 'Do you offer one-on-one classes, or only batches?', answer: 'Both formats are available. Choose fully personalized 1-on-1 mentoring for a fully customized pace, or join a small batch (capped at 12 students) for a more collaborative, structured schedule — whichever fits your child better.' },
  { question: 'Do you help with exam registration?', answer: 'Yes — we guide families through College Board registration, choosing an authorised test centre, and key deadlines so nothing is missed.' },
  { question: 'How is progress reported to parents?', answer: 'Parents receive regular progress updates after unit tests and mock exams, including score-band tracking against the target and specific areas being worked on.' },
  { question: 'Can my child take more than one AP exam in the same year?', answer: 'Yes — our Multi-AP Bundles coordinate a shared weekly planner and mock-exam calendar across subjects, so workload stays balanced and no exam is under-prepared.' },
];

export default function ApExamPage() {
  const [showCtaModal, setShowCtaModal] = useState(false);

  const handleCtaModalWhatsApp = () => {
    setShowCtaModal(false);
    window.open(
      `https://wa.me/919850570525?text=${encodeURIComponent("Hi, I'd like to book a free AP demo class at BuzzyBrains Academy.")}`,
      '_blank'
    );
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
          <span className="eyebrow reveal">🎯 Advanced Placement · College Board · Grades 9–12</span>
          <h1 className="reveal" data-delay="1">
            AP Prep
            <br />
            with One Goal:
            <br />
            <span className="grad">A 5.</span> ⭐⭐⭐⭐⭐
          </h1>
          <p className="lede reveal" data-delay="2" style={{ margin: '0 auto 8px', maxWidth: 680 }}>
            Calculus, Physics, Chemistry, Statistics and Computer Science A — taught by an{' '}
            <strong style={{ color: 'var(--blue)' }}>IIT Kanpur graduate</strong> in small batches, with FRQ-first
            training and full-length mocks.
          </p>
          <p className="section-sub reveal" data-delay="2" style={{ margin: '0 auto 8px' }}>
            For students in India, the US and beyond — online and at our Pune centre.
          </p>

          <div className="ap-scale reveal" data-delay="3" aria-label="AP score scale, target score 5">
            <div className="ap-scale-step">1</div>
            <div className="ap-scale-step">2</div>
            <div className="ap-scale-step hit">3</div>
            <div className="ap-scale-step hit">4</div>
            <div className="ap-scale-step target">5</div>
          </div>

          <div className="hero-chips reveal" data-delay="3" style={{ justifyContent: 'center' }}>
            <span className="chip"><i className="dot" style={{ background: 'var(--blue)' }} /> Calculus AB &amp; BC</span>
            <span className="chip"><i className="dot" style={{ background: '#10B981' }} /> Physics 1 &amp; C</span>
            <span className="chip"><i className="dot" style={{ background: 'var(--amber)' }} /> Chemistry</span>
            <span className="chip"><i className="dot" style={{ background: '#7C3AED' }} /> Statistics</span>
            <span className="chip"><i className="dot" style={{ background: '#334155' }} /> Computer Science A</span>
          </div>

          <div className="hero-chips reveal" data-delay="3" style={{ justifyContent: 'center', marginTop: -20 }}>
            <span className="chip" style={{ borderColor: 'var(--blue)', color: 'var(--blue)', fontWeight: 800 }}>👤 1-on-1 Mentoring</span>
            <span className="chip" style={{ borderColor: 'var(--blue)', color: 'var(--blue)', fontWeight: 800 }}>👥 Small Batches (Max 12)</span>
            <span style={{ fontSize: 13.5, color: 'var(--text-3)', display: 'flex', alignItems: 'center' }}>— both formats available</span>
          </div>

          <div className="hero-ctas reveal" data-delay="4" style={{ justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={() => setShowCtaModal(true)}>
              Book Free Demo Class
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
                  <b style={{ fontSize: h.value.length > 3 ? 'clamp(22px,2.4vw,28px)' : undefined }}>{h.value}</b>
                  <span>{h.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AP COURSES ============ */}
      <section className="programs bb-section" id="courses">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">AP Programs</span>
            <h2 className="section-title reveal">Seven flagship tracks. One standard of rigour.</h2>
            <p className="section-sub reveal">
              Every course follows the official College Board framework, unit by unit — with the derivation-first
              depth our JEE and Olympiad students know us for. Beyond our flagship subjects below, we also mentor
              students through the wider AP catalogue.
            </p>
          </div>
          <div className="prog-grid-3">
            {COURSES.map((c) => (
              <article className="prog-card reveal" style={{ ['--pc' as string]: c.gradient, ['--pcbg' as string]: c.pcbg }} key={c.id}>
                <div className="prog-icon"><c.icon size={27} color="#fff" /></div>
                <div className="grade">{c.grade}</div>
                <h3>{c.subject}</h3>
                <p>{c.description}</p>
                <ul>
                  {c.topics.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </article>
            ))}
          </div>

          {/* ---- Tier 2: STEM AP subjects ---- */}
          <div className="subject-tier reveal">
            <div className="subject-tier-head">
              <span className="subject-tier-badge" style={{ background: 'var(--grad-green)' }}>Tier 2 · STEM</span>
              <span className="subject-tier-title">Every STEM AP subject we coach, including CSP</span>
            </div>
            <div className="subject-grid-4">
              {TIER_2.map((s) => (
                <div className="subject-card-lg" key={s.name}>
                  <div className="subject-card-lg-icon" style={{ background: `linear-gradient(135deg,${CATEGORY_COLOR[s.cat]})` }}>
                    <s.icon size={24} />
                  </div>
                  <h4>{s.name}</h4>
                  <span>{s.cat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ---- Tier 3: humanities & social science AP subjects, on request ---- */}
          <div className="subject-tier reveal">
            <div className="subject-tier-head">
              <span className="subject-tier-badge" style={{ background: 'linear-gradient(135deg,#334155,#0F172A)' }}>Tier 3</span>
              <span className="subject-tier-title">Humanities &amp; Social Science AP subjects</span>
              <span className="subject-tier-note">Available on request, subject to mentor availability</span>
            </div>
            <div className="subject-grid">
              {TIER_3.map((s) => (
                <div className="subject-card" key={s.name}>
                  <div className="subject-card-icon" style={{ background: `linear-gradient(135deg,${CATEGORY_COLOR[s.cat]})` }}>
                    <s.icon size={18} />
                  </div>
                  <div>
                    <b>{s.name}</b>
                    <span>{s.cat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ METHODOLOGY ============ */}
      <section className="method bb-section" id="method">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">The Method</span>
            <h2 className="section-title reveal">From diagnostic to exam day</h2>
            <p className="section-sub reveal">A structured path — so May holds no surprises.</p>
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
      <section className="bb-section" id="why">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Why BuzzyBrains Academy</span>
            <h2 className="section-title reveal">Built for students who won&apos;t settle for a 3</h2>
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

      {/* ============ MENTOR ============ */}
      <section className="bb-section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div className="trust-card reveal" style={{ display: 'flex', gap: 26, alignItems: 'center', flexWrap: 'wrap' }}>
            <div
              className="trust-icon"
              style={{
                width: 84,
                height: 84,
                borderRadius: '50%',
                background: 'var(--grad-blue)',
                fontFamily: 'var(--font-display)',
                fontSize: 26,
                fontWeight: 800,
                color: '#fff',
                flexShrink: 0,
              }}
            >
              DS
            </div>
            <div style={{ flex: 1, minWidth: 240 }}>
              <h3 style={{ fontSize: 20, marginBottom: 4 }}>Dilip Sah</h3>
              <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 10 }}>
                Founder &amp; Lead Educator · IIT Kanpur · JEE AIR ~400
              </div>
              <p style={{ fontSize: 14.5, color: 'var(--text-2)' }}>
                After a career leading technology teams as a CTO and co-founder, Dilip returned to his first love:
                teaching Mathematics and Physics. At BuzzyBrains Academy he mentors students across AP, IB, IGCSE,
                CBSE and competitive tracks — building understanding from first principles, the exact skill AP
                free-response questions are written to reward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bb-section">
        <div className="container" style={{ maxWidth: 780, margin: '0 auto' }}>
          <div className="center">
            <span className="eyebrow reveal">Questions Parents Ask</span>
            <h2 className="section-title reveal">AP, answered for parents</h2>
          </div>
          <div className="article-faq reveal" style={{ marginTop: 32 }}>
            {FAQS.map((item) => (
              <div className="article-faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="cta bb-section">
        <div className="container center" style={{ position: 'relative', zIndex: 1 }}>
          <span className="eyebrow" style={{ background: 'rgba(245,158,11,.16)', color: '#FBBF24' }}>The May Exam Is Closer Than It Looks</span>
          <h2 style={{ marginBottom: 14 }}>Ready to aim for the 5?</h2>
          <p className="lede" style={{ margin: '0 auto 28px' }}>
            Book a free demo class and diagnostic — and get a week-by-week plan to the score you want.
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
              <h2 style={{ fontSize: 26, fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: 8 }}>Ready to Enroll? 🎯</h2>
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
