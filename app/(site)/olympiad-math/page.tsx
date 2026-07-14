'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  Sigma,
  Hash,
  Shapes,
  Network,
  ChevronRight,
  Phone,
  Award,
  Users,
  TrendingUp,
  Target,
  Sparkles,
  Layers,
  GraduationCap,
  Eye,
  EyeOff,
  Check,
  X,
  CheckCircle2,
} from 'lucide-react';

const HERO_STATS = [
  { count: 150, suffix: '+', label: 'Students Mentored', icon: Users, gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)' },
  { count: 35, suffix: '+', label: 'Olympiad Qualifiers', icon: Award, gradient: 'linear-gradient(135deg,#6D28D9,#A855F7)' },
  { count: 25, suffix: '+', label: 'Years Experience', icon: TrendingUp, gradient: 'linear-gradient(135deg,#92400E,#F59E0B)' },
  { count: 12, suffix: '', label: 'Max Students / Batch', icon: Target, gradient: 'linear-gradient(135deg,#065F46,#10B981)' },
];

const SUBJECTS = [
  { title: 'Advanced Algebra', subtitle: 'Deep concept mastery', topics: ['Functional equations', 'Polynomials', 'Inequalities'], gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)', glow: '37,99,235', icon: Sigma },
  { title: 'Number Theory', subtitle: 'Structure & pattern recognition', topics: ['Divisibility', 'Modular arithmetic', 'Diophantine equations'], gradient: 'linear-gradient(135deg,#065F46,#10B981)', glow: '16,185,129', icon: Hash },
  { title: 'Geometry', subtitle: 'Rigorous spatial reasoning', topics: ['Euclidean geometry', 'Angle chasing', 'Transformations'], gradient: 'linear-gradient(135deg,#92400E,#F59E0B)', glow: '245,158,11', icon: Shapes },
  { title: 'Combinatorics', subtitle: 'Logical counting techniques', topics: ['Counting techniques', 'Pigeonhole principle', 'Graph thinking'], gradient: 'linear-gradient(135deg,#6D28D9,#A855F7)', glow: '168,85,247', icon: Network },
];

const GRADE_TRACKS = [
  {
    grade: 'Grades 4–6',
    title: 'Foundations & Number Sense',
    description: 'Real number sense and pattern recognition, built before any formal olympiad drilling begins.',
    focus: ['Number patterns & logic puzzles', 'Mental math & estimation', 'Intro geometry & spatial reasoning'],
    targets: ['SOF IMO', 'Kangaroo (Pre-Écolier / Écolier)'],
    gradient: 'linear-gradient(135deg,#065F46,#10B981)',
    glow: '16,185,129',
    icon: Sparkles,
  },
  {
    grade: 'Grades 7–9',
    title: 'Pre-Olympiad Track',
    description: 'First serious exposure to proof-based thinking, algebraic rigor, and timed problem sets.',
    focus: ['Algebra & geometry rigor', 'First proof-writing', 'Timed problem sets'],
    targets: ['IOQM / PRMO', 'AMC 8 / AMC 10', 'Kangaroo (Benjamin / Junior)'],
    gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)',
    glow: '37,99,235',
    icon: Layers,
  },
  {
    grade: 'Grades 10–12',
    title: 'Advanced Olympiad Track',
    description: 'Full competition-mathematics training for the exams that actually move the needle for IIT and beyond.',
    focus: ['RMO / INMO-level problem solving', 'Advanced proof techniques', 'Full mock olympiad papers'],
    targets: ['RMO / INMO', 'AMC 12 / AIME', 'USAJMO prep'],
    gradient: 'linear-gradient(135deg,#6D28D9,#A855F7)',
    glow: '168,85,247',
    icon: GraduationCap,
  },
];

const SAMPLE_PROBLEMS = [
  {
    level: 'Pre-Olympiad · Number Theory',
    statement: 'How many positive integers n ≤ 100 satisfy 7 | (n² + n + 1)?',
    solution: 'n² + n + 1 (mod 7) repeats with period 7. Checking n ≡ 0..6 (mod 7), the expression is divisible by 7 only when n ≡ 2 or n ≡ 4 (mod 7). Between 1 and 100 there are 15 values with n ≡ 2 (mod 7) and 14 values with n ≡ 4 (mod 7).',
    answer: '29',
  },
  {
    level: 'AMC / RMO Style · Algebra',
    statement: 'Find the number of ordered pairs of positive integers (x, y) satisfying 1/x + 1/y = 1/12.',
    solution: 'Rearranging gives (x − 12)(y − 12) = 144, with x, y > 12. Every ordered factor pair of 144 gives exactly one solution. Since 144 = 2⁴ × 3² has (4+1)(2+1) = 15 positive divisors, there are 15 such factor pairs.',
    answer: '15',
  },
];

const COMPARISON_ROWS = [
  { label: 'Who teaches', apps: 'Rotating tutors, often junior instructors', us: 'Same IIT/IIM-mentored faculty all year, led by Dilip Sah' },
  { label: 'Batch size', apps: 'Large groups, or app-paced solo learning', us: 'Capped at 12 students per batch' },
  { label: 'Core focus', apps: 'Gamified drills and engagement streaks', us: 'Proof-based reasoning and competition technique' },
  { label: 'Curriculum', apps: 'Generic, one-size-fits-all modules', us: 'Grade-mapped roadmap tied to named exams' },
  { label: 'Feedback', apps: 'Automated scoring', us: 'Mentor reviews every solution, weekly written feedback' },
  { label: 'Competition mapping', apps: 'Vague "olympiad readiness"', us: 'Named tracks: IOQM, RMO, INMO, AMC, AIME, IMO' },
];

const COMPETITION_REGIONS = [
  { title: 'India', gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)', competitions: ['IOQM', 'PRMO', 'RMO', 'INMO', 'SOF IMO'] },
  { title: 'International', gradient: 'linear-gradient(135deg,#6D28D9,#A855F7)', competitions: ['AMC 8', 'AMC 10', 'AMC 12', 'AIME', 'USAJMO', 'IMO'] },
  { title: 'UK', gradient: 'linear-gradient(135deg,#92400E,#F59E0B)', competitions: ['JMC', 'IMC', 'SMC', 'BMO'] },
  { title: 'Global', gradient: 'linear-gradient(135deg,#065F46,#10B981)', competitions: ['IMO', 'Kangaroo Math', 'Math League', 'Purple Comet'] },
];

const METHODOLOGY = [
  { step: '01', title: 'Concept Foundations', description: 'Build crystal-clear understanding of fundamental principles and theorems.' },
  { step: '02', title: 'Structured Problem Solving', description: 'Master diverse problem types with systematic approaches.' },
  { step: '03', title: 'Olympiad Techniques', description: 'Learn advanced strategies for competition-level challenges.' },
  { step: '04', title: 'Mock Tests & Analysis', description: 'Regular assessments with detailed error analysis and feedback.' },
  { step: '05', title: 'Competition Readiness', description: 'Final preparation and confidence building for actual contests.' },
];

const REVIEWS = [
  { name: 'Kavita Khurana', text: 'My son is taking coaching for his 10th standard. Both the teachers of Maths & Science are amazing. They are very supportive & provide professional guidance. I highly recommend BuzzyBrains Academy.' },
  { name: 'Krishnan Duraisamy', text: 'My son has been attending Further Mathematics (AS level) and has absolutely benefitted from the structured and in-depth learning experience.' },
  { name: 'Pinky Singhal', text: 'I highly recommend Dilip Sir for his clear and simple teaching methods. He explains complex topics in a way that is perfect for students, and my daughter is very happy with her progress. Thank you!' },
];

const FAQS = [
  { question: 'What grade or age should my child start olympiad math?', answer: 'We take students from Grade 4 onward. Earlier grades focus on number sense and logic puzzles; formal proof-based olympiad training typically ramps up from Grade 7. There is no single "right" age — a short diagnostic tells us where your child actually stands.' },
  { question: 'Is this different from regular school or board maths tuition?', answer: 'Yes. Board maths rewards applying known methods correctly. Olympiad maths rewards constructing an original argument for a problem you have never seen before. We teach proof-writing and problem-solving technique on top of the concepts your child already has, not instead of them.' },
  { question: 'My child has never done olympiad-style problems before. Can they still join?', answer: 'Yes — most students start exactly here. The Grades 7–9 Pre-Olympiad track is designed for students making their first serious attempt at competition mathematics, with a gradual ramp from board-level algebra into proof-based reasoning.' },
  { question: 'Which competitions does this program prepare for?', answer: 'India: IOQM, PRMO, RMO, INMO, SOF IMO. International: AMC 8/10/12, AIME, USAJMO, IMO. UK: JMC, IMC, SMC, BMO. Plus Kangaroo Math and other global contests, mapped to the right grade band.' },
  { question: 'How big are the batches?', answer: 'Every batch is capped at 12 students, so the mentor can review each student’s written solutions individually rather than just grading final answers.' },
  { question: 'Is this available online, offline, or both?', answer: 'Both. Classes run online (live, interactive sessions) and offline at our Pune centers. We’ll help you pick whichever fits your schedule better.' },
];

export default function OlympiadMathPage() {
  const [showCtaModal, setShowCtaModal] = useState(false);
  const [revealed, setRevealed] = useState<boolean[]>(() => SAMPLE_PROBLEMS.map(() => false));
  const heroRef = useRef<HTMLElement>(null);

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

    const counterIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          counterIo.unobserve(entry.target);
          const el = entry.target as HTMLElement;
          const target = Number(el.dataset.count);
          const dur = 1400;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - t0) / dur, 1);
            const ease = 1 - Math.pow(1 - p, 3);
            el.textContent = String(Math.round(target * ease));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 }
    );
    document.querySelectorAll('.count').forEach((el) => counterIo.observe(el));

    return () => {
      io.disconnect();
      counterIo.disconnect();
    };
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const handleMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty('--mx', `${x}%`);
      hero.style.setProperty('--my', `${y}%`);
    };
    const handleEnter = () => hero.classList.add('spotlight-on');
    const handleLeave = () => hero.classList.remove('spotlight-on');

    hero.addEventListener('mousemove', handleMove);
    hero.addEventListener('mouseenter', handleEnter);
    hero.addEventListener('mouseleave', handleLeave);
    return () => {
      hero.removeEventListener('mousemove', handleMove);
      hero.removeEventListener('mouseenter', handleEnter);
      hero.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const handleCtaModalWhatsApp = () => {
    setShowCtaModal(false);
    window.open('https://wa.me/919850570525', '_blank');
  };

  const handleCtaModalForm = () => {
    setShowCtaModal(false);
    window.location.href = '/#contact';
  };

  const toggleReveal = (i: number) => {
    setRevealed((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  };

  return (
    <main className="bb-landing bb-page-shell">
      {/* ============ HERO ============ */}
      <section className="hero" ref={heroRef}>
        <div className="eq-field" aria-hidden="true">
          <span className="eq" style={{ top: '12%', left: '6%', fontSize: 24, ['--rot' as string]: '-7deg' }}>n² + n + 1</span>
          <span className="eq amber" style={{ top: '22%', left: '46%', fontSize: 20, ['--rot' as string]: '6deg', animationDelay: '2s' }}>gcd(a, b)</span>
          <span className="eq" style={{ top: '66%', left: '4%', fontSize: 22, ['--rot' as string]: '4deg', animationDelay: '4s' }}>C(n, r)</span>
          <span className="eq green" style={{ top: '8%', left: '72%', fontSize: 24, ['--rot' as string]: '-5deg', animationDelay: '1s' }}>a² + b² = c²</span>
          <span className="eq" style={{ top: '80%', left: '58%', fontSize: 20, ['--rot' as string]: '7deg', animationDelay: '3s' }}>∠A+∠B+∠C=180°</span>
          <span className="eq amber" style={{ top: '48%', left: '90%', fontSize: 22, ['--rot' as string]: '-6deg', animationDelay: '5s' }}>QED ∎</span>
          <span className="eq green" style={{ top: '88%', left: '26%', fontSize: 19, ['--rot' as string]: '5deg', animationDelay: '2.5s' }}>n ≡ r (mod m)</span>
          <span className="eq" style={{ top: '36%', left: '24%', fontSize: 18, ['--rot' as string]: '-4deg', animationDelay: '6s' }}>Σ aᵢ</span>
        </div>

        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="hero-badges reveal">
              <span className="eyebrow eyebrow-highlight">🏆 Pune&apos;s Premium Olympiad Maths Program</span>
              <span className="eyebrow eyebrow-location">📍 Near Amanora Mall, Pune</span>
            </div>
            <h1 className="reveal" data-delay="1">
              Build Mathematical<br /><span className="grad">Excellence.</span>
              <span className="hero-tagline-sub">∑ <span className="hero-tagline-sub-text">From IOQM to IMO.</span></span>
            </h1>
            <p className="lede reveal" data-delay="2">
              Elite mathematics program for students who think differently. Founded by{' '}
              <strong style={{ color: 'var(--blue)' }}>Dilip Sah (IIT Kanpur, IIM Ahmedabad, JEE AIR 400)</strong>.
              Master deep reasoning, problem-solving and competition mathematics.
            </p>

            <div className="hero-chips reveal" data-delay="2">
              <span className="chip"><i className="dot" style={{ background: 'var(--blue)' }} /> IOQM · PRMO · RMO · INMO</span>
              <span className="chip"><i className="dot" style={{ background: '#7C3AED' }} /> AMC 8/10/12 · AIME · IMO</span>
              <span className="chip"><i className="dot" style={{ background: 'var(--amber)' }} /> SOF IMO · Kangaroo Math</span>
            </div>

            <div className="hero-ctas reveal" data-delay="3">
              <button className="btn btn-primary" onClick={() => setShowCtaModal(true)}>
                Schedule a Demo
                <ChevronRight size={19} />
              </button>
              <a href="tel:+919850570525" className="btn btn-ghost">
                <Phone size={17} /> Call Us
              </a>
            </div>

            <div className="hero-proof reveal" data-delay="4">
              <div className="avatars" aria-hidden="true">
                <span style={{ background: '#2563EB' }}>K</span><span style={{ background: '#7C3AED' }}>P</span><span style={{ background: '#F59E0B' }}>R</span><span style={{ background: '#10B981' }}>M</span>
              </div>
              <div>
                <span className="stars" aria-label="Rated highly by parents">★★★★★</span><br />
                <Link href="/achievements" style={{ color: 'inherit', textDecoration: 'underline', textDecorationColor: 'rgba(100,116,139,.35)' }}>
                  Trusted by <strong>150+ families</strong> across Pune
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal" data-delay="2">
            <div className="board" role="img" aria-label="Illustration of an olympiad geometry proof board with a triangle inscribed in a circle, angle labels, a proof-steps panel, a medal, and student avatars representing a 12-student batch">
              <div className="board-top">
                <div className="board-dots" aria-hidden="true"><i style={{ background: '#EF4444' }} /><i style={{ background: '#F59E0B' }} /><i style={{ background: '#10B981' }} /></div>
                <span className="board-tag">Live · Problem Board</span>
              </div>
              <svg className="lesson" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <linearGradient id="omBgGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#16233F" /><stop offset="1" stopColor="#0F1B33" />
                  </linearGradient>
                  <linearGradient id="omPanelGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#1D4ED8" /><stop offset="1" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
                <rect width="520" height="340" rx="16" fill="url(#omBgGrad)" />

                {/* Geometry proof panel: triangle inscribed in a circle with angle labels */}
                <rect x="30" y="30" width="290" height="200" rx="14" fill="url(#omPanelGrad)" opacity="0.16" />
                <rect x="30" y="30" width="290" height="200" rx="14" fill="none" stroke="#93C5FD" strokeOpacity="0.35" strokeWidth="1.5" />
                <text x="50" y="56" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="14" fill="#E0EAFF">Angle Chase</text>
                <circle cx="175" cy="150" r="68" fill="none" stroke="#60A5FA" strokeWidth="1.5" strokeOpacity="0.55" />
                <polygon points="175,86 116,192 240,180" fill="none" stroke="#F8FAFC" strokeWidth="2.5" strokeLinejoin="round" />
                <circle cx="175" cy="86" r="4" fill="#FBBF24" /><circle cx="116" cy="192" r="4" fill="#34D399" /><circle cx="240" cy="180" r="4" fill="#F472B6" />
                <path d="M175 100 a20 20 0 0 1 15 24" fill="none" stroke="#FBBF24" strokeWidth="2" />
                <path d="M133 182 a20 20 0 0 1 -2 -25" fill="none" stroke="#34D399" strokeWidth="2" />
                <path d="M222 172 a20 20 0 0 1 -22 4" fill="none" stroke="#F472B6" strokeWidth="2" />
                <text x="184" y="112" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="13" fill="#FBBF24">α</text>
                <text x="122" y="172" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="13" fill="#34D399">β</text>
                <text x="196" y="168" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="13" fill="#F472B6">γ</text>
                <text x="50" y="212" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="14" fill="#E0EAFF">α + β + γ = 180°</text>

                {/* Medal */}
                <g transform="translate(430 78)">
                  <path d="M-9 -10 l9 -22 9 22 -8 5 v16 h-2 v-16 z" fill="#94A3B8" opacity="0.7" />
                  <path d="M9 -10 l14 26 -8 -3 -6 8 -10 -22 z" fill="#F59E0B" />
                  <path d="M-9 -10 l-14 26 8 -3 6 8 10 -22 z" fill="#FBBF24" />
                  <circle r="30" fill="#FBBF24" stroke="#D97706" strokeWidth="3" />
                  <circle r="21" fill="none" stroke="#FEF3C7" strokeWidth="2" strokeDasharray="3 5" />
                  <text textAnchor="middle" y="7" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="20" fill="#78350F">1</text>
                </g>

                {/* Proof-steps panel */}
                <rect x="352" y="150" width="138" height="90" rx="10" fill="#0B1120" stroke="#334155" strokeWidth="1.5" />
                <text x="364" y="170" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="11" fill="#93C5FD">SOLUTION STEPS</text>
                <rect x="364" y="180" width="94" height="6" rx="3" fill="#60A5FA" />
                <rect x="364" y="194" width="112" height="6" rx="3" fill="#F59E0B" />
                <rect x="364" y="208" width="70" height="6" rx="3" fill="#34D399" />
                <g transform="translate(364 222)">
                  <circle r="7" fill="#10B981" />
                  <path d="M-3 0 l2 2.5 4 -5" stroke="#0B1120" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <text x="378" y="227" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="11" fill="#6EE7B7">QED</text>

                {/* Batch of 12 — student avatars */}
                <text x="30" y="266" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="12" fill="#93C5FD" opacity="0.85">Batch of 12, mentored closely</text>
                <g>
                  <circle cx="42" cy="292" r="13" fill="#F8B4B4" /><path d="M22 330 q0 -28 20 -28 q20 0 20 28 z" fill="#10B981" />
                </g>
                <g>
                  <circle cx="82" cy="292" r="13" fill="#FDE68A" /><path d="M62 330 q0 -28 20 -28 q20 0 20 28 z" fill="#7C3AED" />
                </g>
                <g>
                  <circle cx="122" cy="292" r="13" fill="#BFDBFE" /><path d="M102 330 q0 -28 20 -28 q20 0 20 28 z" fill="#0EA5E9" />
                </g>
                <text x="150" y="300" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="15" fill="#F8FAFC">+9</text>
              </svg>
            </div>

            <div className="float-card float-card-highlight fc-1">
              <span className="fc-icon" style={{ background: 'rgba(96,165,250,.28)' }}>
                <CheckCircle2 size={20} color="#fff" />
              </span>
              <div>
                <b>Proof-Based Mastery, Not Memorization</b>
              </div>
            </div>
            <div className="float-card fc-2">
              <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#6D28D9,#A855F7)' }}>
                <Award size={20} color="#fff" />
              </span>
              <div><b>35+ Olympiad Qualifiers</b><small>Since 2020</small></div>
            </div>
            <div className="float-card fc-3">
              <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#F59E0B,#D97706)' }}>
                <Users size={20} color="#fff" />
              </span>
              <div><b>Max 12 / Batch</b><small>Truly personal mentoring</small></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TRUSTED OUTCOMES ============ */}
      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Trusted Outcomes</span>
            <h2 className="section-title reveal">Real numbers, not marketing claims</h2>
            <p className="section-sub reveal">Every figure here reflects the small-batch, mentor-led approach behind the program.</p>
          </div>
          <div className="stat-cards-lg" style={{ marginTop: 44 }}>
            {HERO_STATS.map((stat, i) => (
              <div className="stat-card-lg reveal" data-delay={String(i % 2)} style={{ ['--acc' as string]: stat.gradient }} key={stat.label}>
                <div className="stat-card-icon" style={{ background: stat.gradient }}><stat.icon size={22} color="#fff" /></div>
                <div>
                  <b>
                    <span className="count" data-count={stat.count}>0</span>
                    {stat.suffix ? <span className="stat-suffix-lg">{stat.suffix}</span> : null}
                  </b>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY: PROOF-BASED + ROADMAP ============ */}
      <section className="bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Our Philosophy</span>
            <h2 className="section-title reveal">Thinking over memorizing</h2>
            <p className="section-sub reveal">Mathematics isn&apos;t a collection of formulas. It&apos;s a way of thinking, reasoning, and solving problems with elegance and precision.</p>
          </div>

          <div className="why-row">
            <div className="why-copy reveal">
              <h3>Real proofs, not just final answers</h3>
              <p>Board maths rewards a correct final number. Olympiad maths rewards a correct, well-argued line of reasoning — and that&apos;s a different skill entirely, one most coaching never actually teaches.</p>
              <ul className="why-list">
                {['Step-by-step proof construction, not just answer-matching', 'Mentors review written solutions, not just final answers', 'Rigor first, speed second — speed follows naturally'].map((item) => (
                  <li key={item}><span className="tick"><Check size={14} /></span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="why-visual reveal" data-delay="1">
              <div className="illus">
                <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of an actual written proof that if n squared is even then n is even, reviewed by a mentor and ending in QED">
                  <rect width="480" height="300" fill="var(--bg-alt)" />
                  <rect x="52" y="34" width="376" height="232" rx="14" fill="var(--card)" stroke="var(--line)" />
                  <rect x="76" y="52" width="60" height="21" rx="10.5" fill="rgba(37,99,235,.12)" />
                  <text x="88" y="66.5" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="10.5" fill="var(--blue)">PROOF</text>
                  <text x="76" y="97" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="15" fill="var(--text)">Claim: if n&#178; is even, n is even.</text>
                  <text x="76" y="120" fontFamily="Manrope,sans-serif" fontWeight="600" fontSize="11.5" fill="var(--text-3)">Proof (contrapositive):</text>
                  <text x="76" y="146" fontFamily="ui-monospace,monospace" fontSize="13" fill="var(--text-2)">Assume n is odd: n = 2k + 1</text>
                  <text x="76" y="168" fontFamily="ui-monospace,monospace" fontSize="13" fill="var(--text-2)">n&#178; = 4k&#178; + 4k + 1</text>
                  <text x="76" y="190" fontFamily="ui-monospace,monospace" fontSize="13" fill="var(--text-2)">&#160;&#160;&#160;= 2(2k&#178; + 2k) + 1</text>
                  <text x="76" y="214" fontFamily="ui-monospace,monospace" fontWeight="700" fontSize="13.5" fill="var(--text)">&#8658; n&#178; is odd.</text>
                  <g transform="translate(372 148) rotate(-8)">
                    <path d="M-11 1 l7 8 15 -18" stroke="#EF4444" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <text x="330" y="172" fontFamily="Manrope,sans-serif" fontWeight="600" fontSize="10.5" fill="#EF4444">mentor-checked</text>
                  <g transform="translate(392 238)">
                    <circle r="18" fill="#10B981" />
                    <path d="M-7 0 l5 5.5 9 -11" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <text x="284" y="243" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="15" fill="var(--text-2)">Q.E.D.</text>
                </svg>
              </div>
            </div>
          </div>

          <div className="why-row reverse">
            <div className="why-copy reveal">
              <h3>A roadmap mapped to real competitions</h3>
              <p>&quot;Olympiad readiness&quot; means nothing without a named exam attached to it. Every grade band here maps to specific competitions — so you always know exactly what your child is training for, and when.</p>
              <ul className="why-list">
                {['Grade-mapped syllabus, not one-size-fits-all', 'Named exam targets at every stage — IOQM to IMO', 'A diagnostic before day one, not guesswork'].map((item) => (
                  <li key={item}><span className="tick"><Check size={14} /></span> {item}</li>
                ))}
              </ul>
            </div>
            <div className="why-visual reveal" data-delay="1">
              <div className="illus">
                <svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration of an ascending staircase representing grade-wise progression from IOQM to IMO">
                  <rect width="480" height="300" fill="var(--bg-alt)" />
                  <rect x="60" y="210" width="80" height="40" fill="#10B981" opacity="0.85" />
                  <rect x="150" y="170" width="80" height="80" fill="#2563EB" opacity="0.85" />
                  <rect x="240" y="130" width="80" height="120" fill="#7C3AED" opacity="0.85" />
                  <rect x="330" y="90" width="80" height="160" fill="#F59E0B" opacity="0.9" />
                  <text x="70" y="200" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="12" fill="var(--text-2)">Gr 4–6</text>
                  <text x="160" y="160" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="12" fill="var(--text-2)">Gr 7–8</text>
                  <text x="250" y="120" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="12" fill="var(--text-2)">Gr 9–10</text>
                  <text x="340" y="80" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="12" fill="var(--text-2)">Gr 11–12</text>
                  <text x="66" y="228" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="11" fill="#fff">SOF</text>
                  <text x="160" y="192" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="11" fill="#fff">IOQM</text>
                  <text x="250" y="152" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="11" fill="#fff">INMO</text>
                  <text x="345" y="112" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="11" fill="#fff">IMO</text>
                  <path d="M100 200 q120 -140 290 -120" fill="none" stroke="#FBBF24" strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" />
                  <circle cx="390" cy="82" r="8" fill="#FBBF24" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ GRADE-WISE ROADMAP ============ */}
      <section className="programs bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">The Roadmap</span>
            <h2 className="section-title reveal">A track for every stage, not one syllabus for everyone</h2>
            <p className="section-sub reveal">Olympiad readiness looks different at 10 than it does at 16. Here&apos;s exactly what changes at each stage.</p>
          </div>
          <div className="prog-grid-3">
            {GRADE_TRACKS.map((t) => (
              <article className="prog-card reveal" style={{ ['--pc' as string]: t.gradient, ['--pc-glow' as string]: t.glow }} key={t.grade}>
                <div className="prog-icon"><t.icon size={27} color="#fff" /></div>
                <span className="grade">{t.grade}</span>
                <h3>{t.title}</h3>
                <p>{t.description}</p>
                <ul>
                  {t.focus.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 'auto' }}>
                  {t.targets.map((tg) => (
                    <span key={tg} style={{ fontSize: 11.5, fontWeight: 700, fontFamily: 'var(--font-display)', padding: '5px 11px', borderRadius: 999, background: 'rgba(255,255,255,.5)', border: '1px solid var(--line)', color: 'var(--text-2)' }}>
                      {tg}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CORE SUBJECTS ============ */}
      <section className="bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Curriculum</span>
            <h2 className="section-title reveal">Four Pillars of Excellence</h2>
            <p className="section-sub reveal">Master the mathematical disciplines that define olympiad success.</p>
          </div>
          <div className="prog-grid-2">
            {SUBJECTS.map((s, i) => (
              <article className="prog-card reveal" data-delay={String(i)} style={{ ['--pc' as string]: s.gradient, ['--pcbg' as string]: 'var(--blue-050)', ['--pc-glow' as string]: s.glow }} key={s.title}>
                <div className="prog-icon"><s.icon size={27} color="#fff" /></div>
                <h3>{s.title}</h3>
                <p>{s.subtitle}</p>
                <ul>
                  {s.topics.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SAMPLE PROBLEMS ============ */}
      <section className="bb-section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">See The Rigor</span>
            <h2 className="section-title reveal">Two problems our students actually work on</h2>
            <p className="section-sub reveal">No stock marketing claims — try these yourself, then reveal how we&apos;d walk a student through them.</p>
          </div>
          <div className="trust-grid" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
            {SAMPLE_PROBLEMS.map((p, i) => (
              <article className="trust-card reveal" key={p.level} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <span style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: 'var(--blue)' }}>{p.level}</span>
                <p style={{ fontSize: 16.5, fontWeight: 700, color: 'var(--text)', fontFamily: 'var(--font-display)', lineHeight: 1.5 }}>{p.statement}</p>
                <button
                  className="btn btn-ghost"
                  style={{ padding: '10px 18px', fontSize: 14, alignSelf: 'flex-start' }}
                  onClick={() => toggleReveal(i)}
                  aria-expanded={revealed[i]}
                >
                  {revealed[i] ? <EyeOff size={16} /> : <Eye size={16} />}
                  {revealed[i] ? 'Hide Solution' : 'Reveal Solution'}
                </button>
                {revealed[i] && (
                  <div className="answer-block" style={{ fontSize: 14.5, fontWeight: 500, lineHeight: 1.7 }}>
                    {p.solution}
                    <div style={{ marginTop: 10, fontWeight: 800, color: 'var(--blue)' }}>Answer: {p.answer}</div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY NOT JUST AN APP ============ */}
      <section className="bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">The Honest Comparison</span>
            <h2 className="section-title reveal">Why not just use a math app?</h2>
            <p className="section-sub reveal">Gamified apps are great for engagement. Olympiad qualification needs something else — here&apos;s the actual difference.</p>
          </div>
          <div className="table-wrap reveal" style={{ marginTop: 40 }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>What matters</th>
                  <th>Typical online math apps</th>
                  <th>BuzzyBrains Maths Excellence</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td><X size={14} style={{ color: '#EF4444', display: 'inline-block', verticalAlign: -2, marginRight: 6 }} />{row.apps}</td>
                    <td><Check size={14} style={{ color: 'var(--green)', display: 'inline-block', verticalAlign: -2, marginRight: 6 }} />{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============ COMPETITIONS ============ */}
      <section className="bb-section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Competitions</span>
            <h2 className="section-title reveal">Prepare for the biggest competitions</h2>
            <p className="section-sub reveal">Comprehensive training for national and international mathematics competitions.</p>
          </div>
          <div style={{ display: 'grid', gap: 32, marginTop: 48 }}>
            {COMPETITION_REGIONS.map((region) => (
              <div className="reveal" key={region.title}>
                <h3 style={{ fontSize: 20, marginBottom: 16, background: region.gradient, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{region.title}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {region.competitions.map((c) => (
                    <span
                      key={c}
                      style={{
                        fontSize: 13.5, fontWeight: 700, fontFamily: 'var(--font-display)',
                        padding: '9px 16px', borderRadius: 12, background: 'var(--card)',
                        border: '1px solid var(--line)', color: 'var(--text)', boxShadow: 'var(--shadow-sm)',
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MENTOR PROFILE ============ */}
      <section className="testis bb-section">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="center">
            <span className="eyebrow reveal">Meet the Mentor</span>
            <h2 className="section-title reveal" style={{ color: '#fff' }}>Learn From an IITian Expert</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }} className="reveal">
            <div className="tcard" style={{ maxWidth: 420, textAlign: 'center', gap: 14 }}>
              <div className="tavatar" style={{ margin: '0 auto', width: 84, height: 84, fontSize: 30, background: 'linear-gradient(135deg,#2563EB,#7C3AED)' }}>DS</div>
              <b style={{ color: '#fff', fontSize: 22, fontFamily: 'var(--font-display)' }}>Dilip Sah</b>
              <p className="quote" style={{ flex: 'none' }}>IIT Kanpur &middot; IIM Ahmedabad &middot; JEE AIR 400</p>
              <p className="quote" style={{ flex: 'none', fontSize: 14 }}>Mathematics Educator &middot; Olympiad Coach &middot; 25+ Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ METHODOLOGY ============ */}
      <section className="method bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Our Methodology</span>
            <h2 className="section-title reveal">Our 5-Step Mastery Path</h2>
            <p className="section-sub reveal">A systematic approach to mathematical excellence.</p>
          </div>
          <div className="method-steps-5">
            {METHODOLOGY.map((item) => (
              <div className="step reveal" key={item.step}>
                <span className="num">{item.step}</span>
                <div className="step-orb" style={{ background: 'linear-gradient(135deg,#2563EB,#7C3AED)' }}>
                  <span style={{ color: '#fff', fontWeight: 800, fontSize: 18 }}>{item.step}</span>
                </div>
                <h3 style={{ fontSize: 17 }}>{item.title}</h3>
                <p style={{ fontSize: 13.5 }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ REAL REVIEWS ============ */}
      <section className="bb-section">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Real Families, Real Reviews</span>
            <h2 className="section-title reveal">What parents actually say</h2>
            <p className="section-sub reveal">No stock testimonials — genuine reviews from BuzzyBrains Academy parents.</p>
          </div>
          <div className="review-grid">
            {REVIEWS.map((r) => (
              <article className="review-card reveal" key={r.name}>
                <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
                <p>&quot;{r.text}&quot;</p>
                <strong>{r.name}</strong>
                <small>Parent Review</small>
              </article>
            ))}
          </div>
          <div className="center" style={{ marginTop: 24 }}>
            <Link href="/achievements" className="review-link">
              See our full achievements & reviews
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bb-section" style={{ background: 'var(--bg-alt)' }}>
        <div className="container" style={{ maxWidth: 780, margin: '0 auto' }}>
          <div className="center">
            <span className="eyebrow reveal">Questions Parents Ask</span>
            <h2 className="section-title reveal">Frequently asked questions</h2>
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
          <span className="eyebrow" style={{ background: 'rgba(245,158,11,.16)', color: '#FBBF24' }}>Limited Seats · Max 12 per Batch</span>
          <h2 style={{ marginBottom: 14 }}>Your Olympiad Journey Starts Here</h2>
          <p className="lede" style={{ margin: '0 auto 24px' }}>
            Join elite students mastering advanced mathematics with an IITian mentor.
          </p>
          <ul className="cta-points" style={{ maxWidth: 460, margin: '0 auto 32px', textAlign: 'left' }}>
            <li><CheckCircle2 size={19} color="var(--green)" /> Free diagnostic to map the right track</li>
            <li><CheckCircle2 size={19} color="var(--green)" /> Meet Dilip Sah face-to-face</li>
            <li><CheckCircle2 size={19} color="var(--green)" /> Batch capped at 12 students</li>
          </ul>
          <div className="cta-btns" style={{ justifyContent: 'center' }}>
            <button className="btn btn-amber" onClick={() => setShowCtaModal(true)}>
              Schedule a Demo Class <ChevronRight size={19} />
            </button>
            <a href="tel:+919850570525" className="btn btn-ghost" style={{ background: 'rgba(255,255,255,.08)', borderColor: 'rgba(255,255,255,.25)', color: '#fff' }}>
              <Phone size={17} /> Talk to a Mentor
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
              <h2 style={{ fontSize: 26, fontFamily: 'var(--font-display)', fontWeight: 800, marginBottom: 8 }}>Ready to Enroll? ∑</h2>
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
