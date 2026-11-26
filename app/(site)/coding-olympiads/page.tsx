'use client';

import '@/app/tailwind.css';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, Phone, Trophy, Flag, Globe2, Code2, Medal } from 'lucide-react';
import { FaqJsonLd } from '@/app/components/JsonLd';
import CtaModal from '@/components/CtaModal';

interface Contest {
  id: string;
  name: string;
  full: string;
  tag: string;
  who: string;
  format: string;
  details: string;
  languages?: string;
  href?: string;
}

const PIPELINE = [
  { step: 'ZIO / ZCO', note: 'Entry round, conducted by IARCS' },
  { step: 'INOI', note: 'Indian National Olympiad in Informatics' },
  { step: 'IOITC', note: 'Training and selection camp' },
  { step: 'IOI', note: 'International Olympiad in Informatics' },
];

const INDIAN: Contest[] = [
  {
    id: 'zio',
    name: 'ZIO',
    full: 'Zonal Informatics Olympiad',
    tag: 'Entry level',
    who: 'Younger school students who have just started programming.',
    format: 'Timed contest; a few problems solved as programs and checked by an online judge.',
    details:
      'The gentlest first step into the national pipeline. It leans on basic programming, careful reading and logical reasoning rather than advanced algorithms. A good first benchmark before ZCO.',
    languages: 'C, C++, Java, Python (confirm each year)',
    href: '/blog/zio-for-beginners-what-it-is-and-how-to-start',
  },
  {
    id: 'zco',
    name: 'ZCO',
    full: 'Zonal Computing Olympiad',
    tag: 'First national gate',
    who: 'School students with some programming and algorithm practice.',
    format: 'About 3 hours, a small set of problems, judged automatically with partial credit.',
    details:
      'Conducted by IARCS. Problems draw on arrays, sorting, searching, greedy methods, recursion and introductory dynamic programming. Strong performers are invited to INOI.',
    languages: 'C, C++, Java, Python (confirm each year)',
    href: '/blog/zco-explained-eligibility-exam-pattern-and-path-to-inoi-ioi',
  },
  {
    id: 'inoi',
    name: 'INOI',
    full: 'Indian National Olympiad in Informatics',
    tag: 'National round',
    who: 'Students who qualify through ZCO / ZIO.',
    format: 'A longer, harder contest with fewer, tougher problems that need efficient algorithms.',
    details:
      'Where real algorithmic skill is required: complexity analysis, dynamic programming, graphs and clever problem reduction. Top performers are invited to the national training camp.',
    href: '/blog/informatics-olympiad-pipeline-zio-inoi-ioi-explained',
  },
  {
    id: 'ioitc',
    name: 'IOITC',
    full: 'IOI Training Camp',
    tag: 'Selection camp',
    who: 'The small group of top INOI performers.',
    format: 'Camp with several training contests; the team is chosen from the results.',
    details:
      'Run to select and train the Indian team for the IOI. Reaching it reflects years of sustained, high-level practice.',
  },
  {
    id: 'sof-cyber',
    name: 'SOF Cyber Olympiad',
    full: 'National Cyber Olympiad (NCO)',
    tag: 'School-level computer science',
    who: 'Students from early school classes upwards.',
    format: 'Multiple-choice paper by the Science Olympiad Foundation.',
    details:
      'Tests computer basics, logical reasoning and general ICT knowledge rather than programming contests. A friendly introduction, but a different skill from ZIO / ZCO / INOI.',
    href: '/sof-olympiads',
  },
];

const INTERNATIONAL: Contest[] = [
  {
    id: 'ioi',
    name: 'IOI',
    full: 'International Olympiad in Informatics',
    tag: 'The world championship',
    who: 'Up to four students per country, chosen through national selection.',
    format: 'Two contest days of about 5 hours each, with three tasks per day, in a limited set of languages.',
    details:
      'The most prestigious informatics contest for school students, held annually in a different host country since 1989. India sends a team chosen via the ZIO / ZCO, INOI and IOITC pipeline.',
  },
  {
    id: 'usaco',
    name: 'USACO',
    full: 'USA Computing Olympiad',
    tag: 'Open online',
    who: 'Open to students from any country, including India.',
    format: 'Online contests through the season in four divisions: Bronze, Silver, Gold, Platinum.',
    details:
      'A clear promotion ladder and a large archive of problems with analyses. Popular with Indian students because anyone can join and progress at their own pace. Season dates are on the official USACO site.',
    languages: 'C++, Java, Python and others',
    href: '/blog/usaco-for-indian-students-beginners-guide',
  },
  {
    id: 'apio',
    name: 'APIO',
    full: 'Asia-Pacific Informatics Olympiad',
    tag: 'Regional',
    who: 'Students from participating Asia-Pacific countries, through national selection.',
    format: 'Online contest of a few hard problems over several hours.',
    details:
      'A regional stepping stone that gives strong students another chance to compete internationally. Participation is usually through the national olympiad body, so check the current arrangement.',
  },
  {
    id: 'ioai',
    name: 'IOAI',
    full: 'International Olympiad in Artificial Intelligence',
    tag: 'AI olympiad',
    who: 'School students nominated through national selection.',
    format: 'Theory and practical AI / machine-learning tasks.',
    details:
      'A newer olympiad that focuses on AI and machine learning rather than classical algorithms. Check the national body for how selection works in India.',
  },
  {
    id: 'codeforces',
    name: 'Codeforces & CodeChef',
    full: 'Online contest platforms',
    tag: 'Open to everyone',
    who: 'Anyone with an account, any age.',
    format: 'Regular timed rounds, ratings and divisions; beginner-friendly practice problems.',
    details:
      'Not olympiads, but where most serious competitors build speed and pattern recognition. CodeChef has also hosted practice for Indian olympiad problems.',
    languages: 'Most popular languages',
  },
  {
    id: 'bebras',
    name: 'Bebras Challenge',
    full: 'International Informatics Challenge',
    tag: 'Beginner',
    who: 'School students of many ages, from primary upwards.',
    format: 'Short computational-thinking tasks, no coding required.',
    details:
      'A gentle way to build logical and computational thinking before programming contests. Availability and registration in India depend on the current organiser.',
  },
];

const COMPARE = [
  ['ZIO', 'India', 'Entry', 'School students, early programmers', 'Basic programming, logic'],
  ['ZCO', 'India', 'First national gate', 'School students with some practice', 'Core algorithms'],
  ['INOI', 'India', 'National', 'ZCO / ZIO qualifiers', 'Efficient algorithms, DP, graphs'],
  ['IOITC', 'India', 'Selection camp', 'Top INOI performers', 'Advanced algorithms'],
  ['IOI', 'World', 'Championship', 'National team (up to 4)', 'Advanced algorithms'],
  ['USACO', 'USA, open to all', 'Online ladder', 'Any student', 'Bronze to Platinum progression'],
  ['APIO', 'Asia-Pacific', 'Regional', 'National selection', 'Hard algorithmic problems'],
  ['IOAI', 'World', 'AI olympiad', 'National selection', 'AI / ML tasks'],
];

const START_BY_STAGE = [
  { who: 'Just starting to code', plan: 'Learn one language, try Bebras-style puzzles, then attempt ZIO.' },
  { who: 'Comfortable with basics', plan: 'Solve ZIO / ZCO past problems and begin USACO Bronze.' },
  { who: 'Solving problems regularly', plan: 'Attempt ZCO, move to USACO Silver, practise on Codeforces / CodeChef.' },
  { who: 'Strong, consistent solver', plan: 'Aim for INOI; learn DP and graphs; push through USACO Gold and Platinum.' },
];

const GUIDES = [
  { href: '/blog/zco-explained-eligibility-exam-pattern-and-path-to-inoi-ioi', label: 'ZCO Explained: Eligibility, Pattern and Path to INOI and IOI' },
  { href: '/blog/zco-syllabus-topic-by-topic-what-to-learn-first', label: 'The ZCO Syllabus, Topic by Topic' },
  { href: '/blog/best-programming-language-for-zco-cpp-vs-python-vs-java', label: 'Best Programming Language for ZCO' },
  { href: '/blog/how-to-solve-zco-past-papers-step-by-step', label: 'How to Solve ZCO Past Papers' },
  { href: '/blog/90-day-zco-study-plan-weekly-targets-and-mock-tests', label: 'A 90-Day ZCO Study Plan' },
  { href: '/blog/zio-for-beginners-what-it-is-and-how-to-start', label: 'ZIO for Beginners' },
  { href: '/blog/programming-basics-every-zio-aspirant-must-master', label: 'Programming Basics Every ZIO Aspirant Must Master' },
  { href: '/blog/from-zio-to-zco-year-by-year-path-for-school-students', label: 'From ZIO to ZCO: A Year-by-Year Path' },
  { href: '/blog/usaco-for-indian-students-beginners-guide', label: "USACO for Indian Students: A Beginner's Guide" },
  { href: '/blog/why-every-school-student-should-try-a-computing-olympiad', label: 'Why Every School Student Should Try a Computing Olympiad' },
  { href: '/blog/coding-olympiad', label: 'All Coding Olympiad Guides' },
];

const FAQS = [
  {
    question: 'What is a coding olympiad?',
    answer: 'A coding or informatics olympiad is a contest where school students solve algorithmic problems by writing programs that must be correct and efficient. Examples include ZIO, ZCO, INOI and the international IOI.',
  },
  {
    question: 'What is the path from ZIO to IOI?',
    answer: 'In India the pipeline runs from ZIO or ZCO (conducted by IARCS) to INOI, then the IOI Training Camp, where the team for the International Olympiad in Informatics is selected. Only a very small number of students reach the last stage each year.',
  },
  {
    question: 'Which coding olympiad should a beginner start with?',
    answer: 'ZIO is the usual starting point for school students in India. Students can also begin with USACO Bronze, which is open online to anyone, and with Bebras-style puzzles to build logical thinking.',
  },
  {
    question: 'Can Indian students take USACO?',
    answer: 'Yes. USACO is open online to students from any country. Check the official USACO website for the current season schedule and rules.',
  },
  {
    question: 'Which programming language is best for coding olympiads?',
    answer: 'C++ is the most common choice because of its speed. Python is fine for beginners and many problems, and Java is also widely allowed. Always confirm the permitted languages for each contest.',
  },
  {
    question: 'Do I need advanced coding knowledge to start?',
    answer: 'No. A solid grasp of one language, loops, arrays and strings is enough to begin with ZIO or USACO Bronze. Algorithms are learned progressively through practice.',
  },
  {
    question: 'Are exam dates and eligibility fixed?',
    answer: 'No. Dates, eligibility and formats change from year to year. This page is a guide; always confirm details on the official IARCS, USACO and IOI websites.',
  },
];

const chip = {
  fontSize: 12.5,
  fontWeight: 700,
  fontFamily: 'var(--font-display)',
  padding: '5px 12px',
  borderRadius: 999,
  background: 'var(--bg-alt)',
  border: '1px solid var(--line)',
  color: 'var(--text-2)',
} as const;

function ContestCard({ c, i, gradient }: { c: Contest; i: number; gradient: string }) {
  return (
    <div id={c.id} className="trust-card reveal" data-delay={String((i % 3) + 1)} style={{ scrollMarginTop: 122 }}>
      <div className="trust-icon" style={{ background: gradient }}>
        <Code2 size={24} color="#fff" />
      </div>
      <h3>
        {c.name} <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-3, var(--text-2))' }}>· {c.full}</span>
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '10px 0' }}>
        <span style={chip}>{c.tag}</span>
        {c.languages && <span style={chip}>{c.languages}</span>}
      </div>
      <p>{c.details}</p>
      <p style={{ marginTop: 10 }}><strong>Who:</strong> {c.who}</p>
      <p style={{ marginTop: 6 }}><strong>Format:</strong> {c.format}</p>
      {c.href && (
        <p style={{ marginTop: 10 }}>
          <Link prefetch={false} href={c.href} style={{ color: 'var(--blue)', fontWeight: 700 }}>
            Read the guide →
          </Link>
        </p>
      )}
    </div>
  );
}

export default function CodingOlympiadsPage() {
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
          <span className="eyebrow">💻 Coding Olympiads · Indian &amp; International</span>
          <h1>
            Every Major <span className="grad">Coding Olympiad</span>, Explained.
          </h1>
          <p className="lede" style={{ margin: '0 auto 8px', maxWidth: 700 }}>
            ZIO, ZCO, INOI and IOI in India, and USACO, APIO, IOAI and more worldwide, with who each is for, how it works and how to prepare.
          </p>
          <p className="section-sub" style={{ margin: '0 auto 28px' }}>
            A single guide for school students and parents, from first program to the world stage.
          </p>
          <div className="hero-chips" style={{ justifyContent: 'center' }}>
            <a href="#india" className="chip"><i className="dot" style={{ background: '#F59E0B' }} /> Indian Olympiads</a>
            <a href="#international" className="chip"><i className="dot" style={{ background: '#2563EB' }} /> International</a>
            <a href="#compare" className="chip"><i className="dot" style={{ background: '#10B981' }} /> Compare</a>
            <a href="#start" className="chip"><i className="dot" style={{ background: '#A855F7' }} /> Where to start</a>
          </div>
          <div className="hero-ctas" style={{ justifyContent: 'center' }}>
            <button className="btn btn-primary" onClick={() => setShowCtaModal(true)}>
              Talk to a Mentor <ChevronRight size={19} />
            </button>
            <a href="tel:+919850570525" className="btn btn-ghost">
              <Phone size={17} /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* ============ PIPELINE ============ */}
      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">The Indian Pipeline</span>
            <h2 className="section-title reveal">From first contest to the world stage</h2>
            <p className="section-sub reveal">India&apos;s informatics olympiad path is a ladder; each stage is harder than the last.</p>
          </div>
          <div className="stat-cards">
            {PIPELINE.map((p, i) => (
              <div className="stat-card reveal" data-delay={String(i % 2)} key={p.step}>
                <div className="stat-card-icon" style={{ background: 'linear-gradient(135deg,#334155,#0F172A)' }}>
                  <Medal size={22} color="#fff" />
                </div>
                <div>
                  <b>{i + 1}. {p.step}</b>
                  <span>{p.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INDIAN ============ */}
      <section className="bb-section" id="india">
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal"><Flag size={14} style={{ verticalAlign: '-2px' }} /> India</span>
            <h2 className="section-title reveal">Indian coding olympiads</h2>
            <p className="section-sub reveal">The national pipeline run by IARCS, plus the school-level cyber olympiad.</p>
          </div>
          <div className="trust-grid">
            {INDIAN.map((c, i) => (
              <ContestCard key={c.id} c={c} i={i} gradient="linear-gradient(135deg,#92400E,#F59E0B)" />
            ))}
          </div>
        </div>
      </section>

      {/* ============ INTERNATIONAL ============ */}
      <section className="bb-section" id="international" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal"><Globe2 size={14} style={{ verticalAlign: '-2px' }} /> World</span>
            <h2 className="section-title reveal">International coding olympiads and contests</h2>
            <p className="section-sub reveal">From the IOI to open online ladders anyone can join.</p>
          </div>
          <div className="trust-grid">
            {INTERNATIONAL.map((c, i) => (
              <ContestCard key={c.id} c={c} i={i} gradient="linear-gradient(135deg,#1E3A8A,#2563EB)" />
            ))}
          </div>
        </div>
      </section>

      {/* ============ COMPARE ============ */}
      <section className="bb-section" id="compare" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal"><Trophy size={14} style={{ verticalAlign: '-2px' }} /> At a glance</span>
            <h2 className="section-title reveal">Coding olympiads compared</h2>
          </div>
          <div style={{ overflowX: 'auto', marginTop: 28, border: '1px solid var(--line)', borderRadius: 'var(--r-md)', background: 'var(--card)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 640, fontSize: 14.5 }}>
              <thead>
                <tr style={{ textAlign: 'left', background: 'var(--bg-alt)' }}>
                  {['Contest', 'Scope', 'Level', 'Who takes it', 'What it tests'].map((h) => (
                    <th key={h} style={{ padding: '12px 14px', fontFamily: 'var(--font-display)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row) => (
                  <tr key={row[0]} style={{ borderTop: '1px solid var(--line)' }}>
                    {row.map((cell, i) => (
                      <td key={i} style={{ padding: '12px 14px', fontWeight: i === 0 ? 700 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="section-sub" style={{ marginTop: 14, textAlign: 'center' }}>
            Dates, eligibility and formats change each year. Always confirm on the official IARCS, USACO and IOI websites.
          </p>
        </div>
      </section>

      {/* ============ WHERE TO START ============ */}
      <section className="bb-section" id="start" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Where to start</span>
            <h2 className="section-title reveal">Pick the right first contest</h2>
            <p className="section-sub reveal">Choose by current skill, not by how famous the contest is.</p>
          </div>
          <div className="trust-grid">
            {START_BY_STAGE.map((s, i) => (
              <div className="trust-card reveal" data-delay={String((i % 3) + 1)} key={s.who}>
                <h3>{s.who}</h3>
                <p>{s.plan}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GUIDES ============ */}
      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="center">
            <span className="eyebrow reveal">Free Guides</span>
            <h2 className="section-title reveal">Coding olympiad preparation guides</h2>
          </div>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 12, listStyle: 'none', margin: '32px 0 0', padding: 0 }}>
            {GUIDES.map((g) => (
              <li key={g.href} style={{ border: '1px solid var(--line)', borderRadius: 'var(--r-md)', background: 'var(--card)' }}>
                <Link prefetch={false} href={g.href} style={{ display: 'block', padding: '16px 18px', fontSize: 14.5, fontWeight: 600, color: 'var(--text-2)' }}>
                  {g.label}
                </Link>
              </li>
            ))}
          </ul>
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
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="cta bb-section">
        <div className="container center" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ marginBottom: 14 }}>Build the Foundation for Coding Olympiads</h2>
          <p className="lede" style={{ margin: '0 auto 28px' }}>
            Our Code Ninja programme builds programming and algorithmic skills in small batches, so students can aim for ZIO, ZCO, USACO and beyond. We cannot guarantee olympiad results, but we can build the skills that make them possible.
          </p>
          <div className="cta-btns" style={{ justifyContent: 'center', marginBottom: 28 }}>
            <button className="btn btn-amber" onClick={() => setShowCtaModal(true)}>
              Talk to a Mentor <ChevronRight size={19} />
            </button>
            <Link prefetch={false} href="/coding-lab" className="btn btn-ghost" style={{ background: 'rgba(255,255,255,.08)', borderColor: 'rgba(255,255,255,.25)', color: '#fff' }}>
              Explore Code Ninja
            </Link>
            <a href="tel:+919850570525" className="btn btn-ghost" style={{ background: 'rgba(255,255,255,.08)', borderColor: 'rgba(255,255,255,.25)', color: '#fff' }}>
              <Phone size={17} /> 98505 70525
            </a>
          </div>
        </div>
      </section>

      <CtaModal
        open={showCtaModal}
        onClose={() => setShowCtaModal(false)}
        onFormClick={handleCtaModalForm}
        onWhatsAppClick={handleCtaModalWhatsApp}
        title="Start Your Coding Olympiad Journey 💻"
        subtitle="Choose how you'd like to connect with us"
      />
    </main>
  );
}
