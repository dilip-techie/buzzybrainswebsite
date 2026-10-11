import Link from 'next/link';
import { Check, Clock, ShieldCheck, Users } from 'lucide-react';
import BatchExplorer from './BatchExplorer';
import HeroFinder from './HeroFinder';
import LeadForm from './LeadForm';
import LeadModal from './LeadModal';
import OpenLeadButton from './OpenLeadButton';
import StickyBar from './StickyBar';
import { BATCHES, BATCH_FAQS, CATEGORIES, FACTS_TABLE, INSTRUCTOR, QUICK_ANSWER } from './_data';
import './batches.css';

const PHONE = '+91 98505 70525';

const STEPS = [
  { title: 'Reserve a free demo seat', body: 'Pick a batch and tell us your grade. It takes 30 seconds.' },
  { title: 'Attend the demo class', body: 'Meet the mentor and see exactly how the batch runs, with no commitment.' },
  { title: 'Join with confidence', body: 'We share the schedule and fees, and you secure your place in a batch of 12.' },
];

export default function BatchesPage() {
  return (
    <main className="bb-landing bt-page">
      {/* ===== HERO ===== */}
      <section className="bt-hero">
        <div className="container bt-hero-grid">
          <div className="bt-hero-copy">
            <span className="bt-eyebrow"><i /> Admissions open · Max 12 students per batch</span>
            <h1>
              Find your batch.<br />
              <span className="bt-grad">Try it free.</span>
            </h1>
            <p className="bt-lede">
              {BATCHES.length} live batches across A Level &amp; Further Maths, Olympiads, SAT and Foundation, all led by {INSTRUCTOR.name} ({INSTRUCTOR.credentials}).
            </p>
            <div className="bt-hero-cta">
              <OpenLeadButton className="btn btn-amber">Book a free demo class</OpenLeadButton>
              <a href="#batches" className="btn bt-ghost">Browse all batches</a>
            </div>
            <ul className="bt-trust">
              <li><ShieldCheck aria-hidden="true" /> No cost, no obligation</li>
              <li><Users aria-hidden="true" /> Small batches of 12</li>
              <li><Clock aria-hidden="true" /> We call you within 24 hours</li>
            </ul>
          </div>
          <HeroFinder />
        </div>

        <div className="container">
          <ul className="bt-cats" aria-label="Programs">
            {CATEGORIES.map((c) => (
              <li key={c.id} style={{ ['--acc' as string]: c.accent }}>
                <b>{c.label}</b>
                <span>{c.blurb}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== EXPLORER ===== */}
      <BatchExplorer />

      {/* ===== LEAD HOOK ===== */}
      <section className="bt-hook" id="reserve">
        <div className="container bt-hook-grid">
          <div>
            <span className="bt-eyebrow light"><i /> Free demo class</span>
            <h2>Not sure which batch? Let us help you choose.</h2>
            <p>
              Tell us your grade and goal. We&apos;ll recommend the right batch and book you a free demo class. Seats are capped at 12 per batch, so reserve early.
            </p>
            <ul className="bt-hook-points">
              <li><Check aria-hidden="true" /> Meet the mentor before you decide</li>
              <li><Check aria-hidden="true" /> Honest advice on the right batch and level</li>
              <li><Check aria-hidden="true" /> Online or offline, whichever suits you</li>
            </ul>
            <p className="bt-hook-call">Prefer a call? <a href="tel:+919850570525">{PHONE}</a></p>
          </div>
          <div className="bt-hook-card">
            <h3>Reserve your free demo seat</h3>
            <LeadForm source="batches-inline" />
          </div>
        </div>
      </section>

      {/* ===== INSTRUCTOR ===== */}
      <section className="bt-instructor">
        <div className="container bt-inst-grid">
          <div className="bt-inst-badge" aria-hidden="true">DS</div>
          <div>
            <span className="eyebrow">Your instructor</span>
            <h2>Taught by {INSTRUCTOR.name}</h2>
            <p className="bt-inst-cred">{INSTRUCTOR.credentials}</p>
            <p className="bt-inst-bio">
              {INSTRUCTOR.name} is the founder and lead mentor of BuzzyBrains Academy. With a B.Tech from IIT Kanpur and a JEE Rank of 400, he leads every batch on this page with a concept-first approach: a topic is not done until the student can explain why it works, not just how to solve it.
            </p>
            <Link prefetch={false} href={INSTRUCTOR.profileHref} className="bt-more">Meet the faculty →</Link>
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="bt-how">
        <div className="container">
          <h2>How to join</h2>
          <ol className="bt-steps">
            {STEPS.map((s, i) => (
              <li key={s.title}><span>{i + 1}</span><div><h3>{s.title}</h3><p>{s.body}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== TABLE (answer-engine friendly) ===== */}
      <section className="bt-facts">
        <div className="container">
          <h2>Batches at a glance</h2>
          <p className="bt-note">{QUICK_ANSWER}</p>
          <div className="bt-table-wrap">
            <table className="bt-table">
              <thead>
                <tr>{FACTS_TABLE.headers.map((h) => <th key={h} scope="col">{h}</th>)}</tr>
              </thead>
              <tbody>
                {FACTS_TABLE.rows.map((r) => (
                  <tr key={r[0]}>{r.map((c, i) => (i === 0 ? <th key={i} scope="row">{c}</th> : <td key={i}>{c}</td>))}</tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bt-faq">
        <div className="container bt-faq-inner">
          <h2>Batch FAQs</h2>
          <div className="bt-faq-list">
            {BATCH_FAQS.map((f) => (
              <details key={f.question} className="bt-q">
                <summary>{f.question}</summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bt-final">
        <div className="container bt-final-inner">
          <div>
            <h2>Your seat in a batch of 12 is one click away.</h2>
            <p>Book a free demo class today. No cost, no obligation.</p>
          </div>
          <div className="bt-final-btns">
            <OpenLeadButton className="btn btn-amber">Book a free demo class</OpenLeadButton>
            <a className="btn bt-ghost" href="tel:+919850570525">Call {PHONE}</a>
          </div>
        </div>
      </section>

      <LeadModal />
      <StickyBar />
    </main>
  );
}
