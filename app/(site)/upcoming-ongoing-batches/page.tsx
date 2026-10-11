import { Check, Users, Video, Building2 } from 'lucide-react';
import BatchExplorer from './BatchExplorer';
import Link from 'next/link';
import { BATCH_FAQS, FACTS_TABLE, INSTRUCTOR, QUICK_ANSWER } from './_data';
import './batches.css';

const CONTACT_PHONE = '+91 98505 70525';

export default function BatchesPage() {
  return (
    <main className="bb-landing bt-page">
      <section className="bt-hero">
        <div className="container">
          <span className="eyebrow">Enrolling now</span>
          <h1>
            Upcoming &amp; <span className="bt-grad">Ongoing Batches</span>
          </h1>
          <p className="bt-lede">
            Find the batch that fits your child: online A Level, Further Maths and SAT, and in-person Foundation batches for Grades 7, 8 and 9 in Pune.
          </p>
          <ul className="bt-chips">
            <li><Users aria-hidden="true" /> Max 12 students per batch</li>
            <li><Video aria-hidden="true" /> Online: A Level, Further Maths, SAT</li>
            <li><Building2 aria-hidden="true" /> Offline: Foundation Grades 7–9</li>
          </ul>
          <p className="bt-answer">{QUICK_ANSWER}</p>
        </div>
      </section>

      <section className="bt-list" aria-label="Batches">
        <div className="container">
          <BatchExplorer />
          <p className="bt-note">
            Start dates, timings and fees are shared when you enquire, because they vary by batch. Call{' '}
            <a href="tel:+919850570525">{CONTACT_PHONE}</a> or message us on WhatsApp.
          </p>
        </div>
      </section>

      <section className="bt-instructor">
        <div className="container bt-inst-grid">
          <div className="bt-inst-badge" aria-hidden="true">DS</div>
          <div>
            <span className="eyebrow">Your instructor</span>
            <h2>Taught by {INSTRUCTOR.name}</h2>
            <p className="bt-inst-cred">{INSTRUCTOR.credentials}</p>
            <p className="bt-inst-bio">
              {INSTRUCTOR.name} is the founder and lead mentor of BuzzyBrains Academy. With a B.Tech from IIT Kanpur and a JEE Rank of 400, he teaches every batch on this page with a concept-first approach: a topic is not done until the student can explain why it works, not just how to solve it.
            </p>
            <Link prefetch={false} href={INSTRUCTOR.profileHref} className="bt-more">Meet the faculty →</Link>
          </div>
        </div>
      </section>

      <section className="bt-facts">
        <div className="container">
          <h2>Batches at a glance</h2>
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

      <section className="bt-how">
        <div className="container">
          <h2>How to join a batch</h2>
          <ol className="bt-steps">
            <li><span>1</span><div><h3>Enquire</h3><p>Pick a batch above and message us on WhatsApp, or call us.</p></div></li>
            <li><span>2</span><div><h3>Free demo class</h3><p>Meet the mentor and see how the batch runs before you decide.</p></div></li>
            <li><span>3</span><div><h3>Confirm your seat</h3><p>We share the schedule and fees, and you secure your place.</p></div></li>
          </ol>
        </div>
      </section>

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

      <section className="bt-final">
        <div className="container bt-final-inner">
          <div>
            <h2>Not sure which batch is right?</h2>
            <p className="bt-final-sub"><Check aria-hidden="true" /> Talk to our admissions team. We will recommend the right batch for your child.</p>
          </div>
          <div className="bt-final-btns">
            <a className="btn btn-amber" href="tel:+919850570525">Call {CONTACT_PHONE}</a>
            <a className="btn btn-green" href="/contact">Contact us</a>
          </div>
        </div>
      </section>
    </main>
  );
}
