import type { CSSProperties } from 'react';
import Image from 'next/image';
import LeadForm from './LeadForm';
import RevealInit from './RevealInit';
import { WA_GENERIC } from './constants';
import './landing.css';

export default function CbseClass10LandingPage() {
  return (
    <div className="cbl">
      <noscript>
        <style>{'.cbl .l-reveal{opacity:1!important;transform:none!important}.cbl .l-bar i{width:var(--w)!important}.cbl .l-chart i{height:var(--h)!important}'}</style>
      </noscript>
<header>
  <div className="l-wrap l-nav">
    <a href="#top" className="l-logo" aria-label="Buzzy Brains home"><Image src="/images/landing/buzzybrains-logo-blue.jpg" alt="BuzzyBrains: Strong foundations for Life" width={370} height={210} priority /></a>
    <nav className="l-nav-links" aria-label="Sections">
      <a href="#why">Why Us</a><a href="#faculty">Faculty</a><a href="#tests">Tests</a><a href="#classrooms">Classrooms</a><a href="#faq">FAQ</a>
    </nav>
    <a href="tel:+919850570525" className="l-nav-call">📞 +91 98505 70525</a>
    <a href="#book" className="l-btn l-btn-primary">Book Free Demo</a>
  </div>
</header>

<main id="top">

<div className="l-hero">
  <div className="l-wrap l-hero-grid">
    <div>
      <span className="l-badge"><i></i> Admissions open · CBSE Class 10 · Maths &amp; Science</span>
      <h1>Score higher in Class 10 <em>Maths &amp; Science</em> boards.</h1>
      <p className="l-lead">A focused CBSE Class 10 Maths &amp; Science program with top faculty, exam-focused study material, regular tests and smart classrooms, built to help every student walk into the board exam prepared.</p>
      <div className="l-pills">
        <div className="l-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>Top subject faculty</div>
        <div className="l-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h12a4 4 0 014 4v12H8a4 4 0 01-4-4z"/><path d="M8 8h8M8 12h8"/></svg>Exam-ready study material</div>
        <div className="l-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>Regular tests + analysis</div>
        <div className="l-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 21h8M12 16v5"/></svg>Smart classrooms</div>
      </div>
      <div className="l-hero-cta">
        <a href="#book" className="l-btn l-btn-primary">Book a Free Demo Class →</a>
        <a href="#why" className="l-btn l-btn-ghost">See what&apos;s inside</a>
      </div>
      <p className="l-hero-note">✓ No fees to attend the demo &nbsp; ✓ Meet the faculty &nbsp; ✓ Free diagnostic test</p>
    </div>

    <LeadForm />
  </div>
</div>


<div className="l-strip"><div className="l-wrap l-strip-grid">
  <div className="l-stat"><b>2 Subjects</b><span>Maths &amp; Science, with total focus</span></div>
  <div className="l-stat"><b>Weekly</b><span>Tests with detailed analysis</span></div>
  <div className="l-stat"><b>12</b><span>Students max per batch</span></div>
  <div className="l-stat"><b>100%</b><span>Syllabus + board-pattern practice</span></div>
</div></div>


<section id="why">
  <div className="l-wrap">
    <div className="l-sec-head l-center l-reveal">
      <span className="l-eyebrow">Why Buzzy Brains</span>
      <h2>Four things that move the needle on board results</h2>
      <p>Everything in our Class 10 program exists for one reason: helping your child understand deeply, practise smartly and write confidently.</p>
    </div>
    <div className="l-pillars">
      <article className="l-pillar l-reveal"><div className="l-ico"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg></div><h3>Top Faculty</h3><p>Experienced subject specialists who simplify tough chapters and know exactly how CBSE examiners award marks.</p></article>
      <article className="l-pillar l-reveal"><div className="l-ico"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h12a4 4 0 014 4v12H8a4 4 0 01-4-4z"/><path d="M8 8h8M8 12h8"/></svg></div><h3>Smart Study Material</h3><p>Chapter notes, NCERT-aligned practice sets, PYQs and sample papers, curated so nothing is left to chance.</p></article>
      <article className="l-pillar l-reveal"><div className="l-ico"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/></svg></div><h3>Regular Tests</h3><p>Weekly chapter tests, monthly full-syllabus tests and pre-board mocks, each followed by a clear improvement plan.</p></article>
      <article className="l-pillar l-reveal"><div className="l-ico"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 21h8M12 16v5"/></svg></div><h3>Smart Classrooms</h3><p>Digital boards, animations and visual models that turn tricky concepts into &quot;oh, now I get it!&quot; moments.</p></article>
    </div>
  </div>
</section>


<section id="faculty" className="l-alt">
  <div className="l-wrap">
    <div className="l-feature" style={{ padding: '0' }}>
      <div className="l-f-text l-reveal">
        <span className="l-eyebrow">Top Faculty</span>
        <h3>Learn from teachers who know the board exam inside out</h3>
        <p>Meet Dilip Sah, Arun Kumar, Anu Mam, Beena Mam and Dr. Agarwal. Our faculty are chosen for two things: how clearly they explain and how well they prepare students for the CBSE paper.</p>
        <ul className="l-ticks">
          <li>Concept-first teaching, so students understand, not just memorise</li>
          <li>Board-paper analysis: marking scheme, common mistakes, answer-writing tips</li>
          <li>Doubt-clearing support so no question stays unanswered</li>
          <li>Regular parent updates on progress and attendance</li>
        </ul>
        <p style={{ margin: '22px 0 0' }}><a href="#book" className="l-btn l-btn-dark">Meet the faculty at a free demo</a></p>
      </div>
      <div className="l-panel l-reveal">
        <div className="l-fac-grid">
          <div className="l-fac"><div className="l-av" style={{ background: '#ffe9a8' }}>DS</div><div><b>Dilip Sah</b><span>Maths &amp; Science Faculty</span></div></div>
          <div className="l-fac"><div className="l-av" style={{ background: '#c9f0dd' }}>AK</div><div><b>Arun Kumar</b><span>Maths &amp; Science Faculty</span></div></div>
          <div className="l-fac"><div className="l-av" style={{ background: '#d6e4ff' }}>AM</div><div><b>Anu Mam</b><span>Maths &amp; Science Faculty</span></div></div>
          <div className="l-fac"><div className="l-av" style={{ background: '#ffd9d6' }}>BM</div><div><b>Beena Mam</b><span>Maths &amp; Science Faculty</span></div></div>
          <div className="l-fac"><div className="l-av" style={{ background: '#e5d9ff' }}>DA</div><div><b>Dr. Agarwal</b><span>Maths &amp; Science Faculty</span></div></div>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="material">
  <div className="l-wrap l-feature l-rev" style={{ paddingBlock: '0' }}>
    <div className="l-f-text l-reveal">
      <span className="l-eyebrow">Study Material</span>
      <h3>Everything your child needs. Nothing they don&apos;t.</h3>
      <p>No more hunting for notes or random worksheets. Our material follows the latest CBSE syllabus and exam pattern, chapter by chapter.</p>
      <ul className="l-ticks">
        <li>Concise chapter notes, formulae sheets and quick-revision cards</li>
        <li>NCERT-aligned practice with graded difficulty</li>
        <li>Previous-year questions and CBSE sample paper solutions</li>
        <li>Competency-based and case-study questions, as in the new pattern</li>
      </ul>
    </div>
    <div className="l-panel l-reveal">
      <div className="l-stack">
        <div className="l-doc l-d1"><span className="l-chip">NOTES</span><h4>Real Numbers</h4><div className="l-ln"></div><div className="l-ln l-m"></div><div className="l-ln l-s"></div></div>
        <div className="l-doc l-d2"><span className="l-chip">PYQ</span><h4>Previous Year Questions</h4><div className="l-ln"></div><div className="l-ln l-m"></div><div className="l-ln"></div></div>
        <div className="l-doc l-d3"><span className="l-chip">SAMPLE PAPER</span><h4>CBSE Pattern · 80 Marks</h4><div className="l-ln"></div><div className="l-ln l-s"></div></div>
      </div>
    </div>
  </div>
</section>


<section id="tests" className="l-alt">
  <div className="l-wrap l-feature" style={{ paddingBlock: '0' }}>
    <div className="l-panel l-reveal l-report" aria-label="Sample student progress report">
      <div className="l-row"><b>Chapter Test · Mathematics</b><span style={{ color: 'var(--muted)' }}>Sample report</span></div>
      <div className="l-score">42<small> / 50</small></div>
      <div className="l-row"><span>Real Numbers</span><b>95%</b></div><div className="l-bar"><i style={{ '--w': '95%' } as CSSProperties}></i></div>
      <div className="l-row"><span>Polynomials</span><b>82%</b></div><div className="l-bar"><i style={{ '--w': '82%' } as CSSProperties}></i></div>
      <div className="l-row"><span>Trigonometry</span><b>58%</b></div><div className="l-bar l-warn"><i style={{ '--w': '58%' } as CSSProperties}></i></div>
      <div className="l-row" style={{ margin: '0' }}><span style={{ color: 'var(--muted)' }}>Last 5 tests, trending up</span></div>
      <div className="l-chart"><i style={{ '--h': '45%' } as CSSProperties}></i><i style={{ '--h': '55%' } as CSSProperties}></i><i style={{ '--h': '62%' } as CSSProperties}></i><i style={{ '--h': '74%' } as CSSProperties}></i><i style={{ '--h': '88%' } as CSSProperties}></i></div>
    </div>
    <div className="l-f-text l-reveal">
      <span className="l-eyebrow">Regular Tests</span>
      <h3>Practise like it&apos;s the real exam, again and again</h3>
      <p>Tests build exam temperament. Every test comes with an analysis that tells your child, and you, exactly what to fix next.</p>
      <ul className="l-ticks">
        <li>Weekly chapter tests and monthly full-syllabus tests</li>
        <li>Pre-board mocks in real CBSE paper format and timing</li>
        <li>Topic-wise strength/weakness report after every test</li>
        <li>Revision tests and doubt sessions for weak areas</li>
        <li>Progress shared with parents regularly</li>
      </ul>
    </div>
  </div>
</section>


<section id="classrooms">
  <div className="l-wrap l-feature l-rev" style={{ paddingBlock: '0' }}>
    <div className="l-f-text l-reveal">
      <span className="l-eyebrow">Smart Classrooms</span>
      <h3>Concepts you can see, not just read</h3>
      <p>Our technology-enabled classrooms make abstract topics visual. From graphs and geometry to chemical reactions and maps, students learn faster because they can see it happen.</p>
      <ul className="l-ticks">
        <li>Digital boards with live graphs, constructions and animations</li>
        <li>Recorded lesson access for revision at home</li>
        <li>Comfortable, well-lit, distraction-free learning spaces</li>
        <li>Batches capped at 12 students, so every student is seen and heard</li>
      </ul>
    </div>
    <div className="l-panel l-reveal">
      <div className="l-board">
        <div className="l-top"><i></i><i></i><i></i></div>
        <div className="l-eq">sin²θ + cos²θ = 1</div>
        <div className="l-lbl">Live on the smart board · Trigonometry</div>
        <svg viewBox="0 0 300 130" fill="none" strokeLinecap="round"><line x1="20" y1="110" x2="285" y2="110" stroke="#7ea6ea" strokeWidth="2"/><line x1="60" y1="10" x2="60" y2="120" stroke="#7ea6ea" strokeWidth="2"/><path d="M60 110 Q110 -10 160 60 T270 40" stroke="#ffb400" strokeWidth="3"/><path d="M60 110 Q110 130 160 60 T270 90" stroke="#5ee0a0" strokeWidth="3" strokeDasharray="6 6"/></svg>
      </div>
      <div className="l-mini">
        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 21h8M12 16v5"/></svg>Digital boards</div>
        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>Recorded lessons</div>
        <div><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3 2.7-5 6-5s6 2 6 5M16 15c3 0 5 1.6 5 4"/></svg>Max 12 per batch</div>
      </div>
    </div>
  </div>
</section>


<section className="l-alt">
  <div className="l-wrap">
    <div className="l-sec-head l-center l-reveal">
      <span className="l-eyebrow">Full Coverage</span>
      <h2>Two subjects. Every chapter. Total focus.</h2>
      <p>Maths and Science carry the chapters students find toughest, and the marks that lift the board percentage most.</p>
    </div>
    <div className="l-subj">
      <div className="l-sbj l-reveal"><div className="l-e">📐</div><h3>Mathematics</h3><small>Standard &amp; Basic</small>
        <div className="l-tp"><span>Real Numbers</span><span>Polynomials</span><span>Linear Equations</span><span>Quadratics</span><span>AP</span><span>Triangles</span><span>Coordinate Geometry</span><span>Trigonometry</span><span>Circles</span><span>Mensuration</span><span>Statistics</span><span>Probability</span></div></div>
      <div className="l-sbj l-reveal"><div className="l-e">🔬</div><h3>Science</h3><small>Physics · Chemistry · Biology</small>
        <div className="l-tp"><span>Chemical Reactions</span><span>Acids, Bases &amp; Salts</span><span>Metals &amp; Non-metals</span><span>Carbon Compounds</span><span>Life Processes</span><span>Control &amp; Coordination</span><span>Heredity</span><span>Light</span><span>Human Eye</span><span>Electricity</span><span>Magnetic Effects</span><span>Environment</span></div></div>
    </div>
  </div>
</section>


<section>
  <div className="l-wrap">
    <div className="l-sec-head l-center l-reveal">
      <span className="l-eyebrow">The Roadmap</span>
      <h2>A clear plan from first class to board day</h2>
      <p>Students and parents always know what&apos;s coming next.</p>
    </div>
    <div className="l-road">
      <div className="l-step l-reveal"><div className="l-n">1</div><span className="l-m">Start</span><h3>Diagnose &amp; Plan</h3><p>Entry test to find strengths and gaps, then a personal study plan.</p></div>
      <div className="l-step l-reveal"><div className="l-n">2</div><span className="l-m">Core phase</span><h3>Learn Every Chapter</h3><p>Concept classes with smart-board teaching, notes and weekly tests.</p></div>
      <div className="l-step l-reveal"><div className="l-n">3</div><span className="l-m">Revision</span><h3>Revise &amp; Practise</h3><p>Full-syllabus revision, PYQs, sample papers and doubt marathons.</p></div>
      <div className="l-step l-reveal"><div className="l-n">4</div><span className="l-m">Pre-boards</span><h3>Mock Boards &amp; Final Polish</h3><p>Timed mock exams, answer-writing coaching and exam-hall strategy.</p></div>
    </div>
  </div>
</section>


<section className="l-alt">
  <div className="l-wrap">
    <div className="l-sec-head l-center l-reveal">
      <span className="l-eyebrow">The Difference</span>
      <h2>Why parents choose Buzzy Brains</h2>
    </div>
    <div className="l-cmp-wrap l-reveal">
      <table className="l-cmp">
        <thead><tr><th>What matters</th><th className="l-us">Buzzy Brains</th><th>Self-study / crowded batches</th></tr></thead>
        <tbody>
          <tr><td>Expert, board-focused faculty</td><td className="l-us"><span className="l-y">✓</span> Yes</td><td><span className="l-x">✕</span> Varies</td></tr>
          <tr><td>Structured study material</td><td className="l-us"><span className="l-y">✓</span> Chapter-wise, CBSE-aligned</td><td><span className="l-x">✕</span> Scattered sources</td></tr>
          <tr><td>Regular tests with analysis</td><td className="l-us"><span className="l-y">✓</span> Weekly + mocks</td><td><span className="l-x">✕</span> Occasional</td></tr>
          <tr><td>Smart classrooms</td><td className="l-us"><span className="l-y">✓</span> Visual learning</td><td><span className="l-x">✕</span> Chalk &amp; talk</td></tr>
          <tr><td>Personal attention &amp; doubt solving</td><td className="l-us"><span className="l-y">✓</span> Max 12 per batch</td><td><span className="l-x">✕</span> Limited</td></tr>
          <tr><td>Parent progress updates</td><td className="l-us"><span className="l-y">✓</span> Regular</td><td><span className="l-x">✕</span> Rare</td></tr>
        </tbody>
      </table>
    </div>
  </div>
</section>




<section id="faq">
  <div className="l-wrap">
    <div className="l-sec-head l-center l-reveal">
      <span className="l-eyebrow">FAQs</span>
      <h2>Questions parents ask us</h2>
    </div>
    <div className="l-faq l-reveal">
      <details><summary>Is the demo class really free?</summary><p>Yes. Your child can attend a demo class, meet the faculty and take a short diagnostic test at no cost and with no obligation.</p></details>
      <details><summary>Does the program follow the latest CBSE syllabus and pattern?</summary><p>Absolutely. Our material and tests follow the current CBSE syllabus, including competency-based and case-study questions.</p></details>
      <details><summary>How often are tests conducted, and will we see the results?</summary><p>Students take weekly chapter tests, monthly full-syllabus tests and pre-board mocks. Each test comes with a topic-wise analysis, and progress is shared with parents regularly.</p></details>
      <details><summary>Where are classes held?</summary><p>At our Amanora, Pune centre, with a live online option for students who prefer not to commute. Both formats get the same content, faculty and test schedule.</p></details>
      <details><summary>Can my child manage school and coaching together?</summary><p>Yes. Batch timings are planned around school hours, and the workload is balanced so students stay fresh and confident.</p></details>
      <details><summary>What if my child is weak in Maths or Science?</summary><p>The entry diagnostic helps us find gaps early. Weak chapters get extra practice, revision tests and doubt sessions so they don&apos;t hold back the final score.</p></details>
      <details><summary>Do you teach the other subjects too?</summary><p>This program is dedicated to CBSE Class 10 Maths and Science, so our faculty and tests can go deeper on the two subjects that most affect the board percentage.</p></details>
      <details><summary>How do I enrol?</summary><p>Fill in the form above. Our counsellor will call you to schedule the free demo, and you can enrol after you&apos;ve experienced a class.</p></details>
    </div>
  </div>
</section>


<section style={{ paddingTop: '0' }}>
  <div className="l-wrap">
    <div className="l-final l-reveal">
      <div>
        <h2>Give your child the Class 10 advantage.</h2>
        <p>Batches are capped at 12 students, so seats fill up. Book a free demo and see the difference for yourself.</p>
        <ul className="l-ticks">
          <li>Free demo class &amp; diagnostic test</li>
          <li>Meet the faculty, see the smart classroom</li>
          <li>No obligation to enrol</li>
        </ul>
      </div>
      <div style={{ textAlign: 'center' }}>
        <a href="#book" className="l-btn l-btn-primary" style={{ fontSize: '1.1rem', padding: '18px 34px' }}>Book My Free Demo →</a>
        <p style={{ margin: '14px 0 0', fontSize: '.9rem', color: '#cfe2ff' }}><a href="tel:+919850570525" style={{ color: '#fff', fontWeight: '700' }}>📞 Call +91 98505 70525</a> &nbsp;·&nbsp; or <a href={WA_GENERIC} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--amber)', fontWeight: '700', textDecoration: 'underline' }}>chat with a counsellor on WhatsApp</a></p>
      </div>
    </div>
  </div>
</section>
</main>

<footer>
  <div className="l-wrap"><span>© {new Date().getFullYear()} BuzzyBrains Academy. Strong foundations for Life.</span><span><a href="tel:+919850570525">📞 +91 98505 70525</a> &nbsp;·&nbsp; Amanora, Pune</span></div>
</footer>

<div className="l-sticky">
  <a className="l-btn l-btn-dark l-btn-call" href="tel:+919850570525" aria-label="Call +91 98505 70525">📞 Call</a>
  <a className="l-btn l-btn-wa" href={WA_GENERIC} target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
  <a className="l-btn l-btn-primary" href="#book">Book Demo</a>
</div>


      <RevealInit />
    </div>
  );
}
