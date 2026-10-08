import Link from 'next/link';
import { Phone, Mail, MessageCircle, Clock, MapPin, ArrowUpRight, Check } from 'lucide-react';
import ContactForm from './ContactForm';
import { CONTACT, LOCATIONS, TOPICS, CONTACT_FAQS } from './_data';
import './contact.css';

const STEPS = [
  { title: 'Tell us about your child', body: 'Share the grade, goals and what you are looking for, in the form or on WhatsApp.' },
  { title: 'Talk to an admissions mentor', body: 'We call you back to understand where your child is today and answer every question.' },
  { title: 'Try a free demo class', body: 'Meet the mentors, experience the teaching style and get a personalised program recommendation.' },
];

export default function ContactPage() {
  return (
    <main className="bb-landing ct-page">
      {/* ===== HERO ===== */}
      <section className="ct-hero">
        <div className="container">
          <span className="eyebrow">Contact us</span>
          <h1>
            Let&apos;s plan your child&apos;s <span className="ct-grad">next big step</span>
          </h1>
          <p className="ct-lede">
            Talk to our admissions team about programs, batches, scholarships or a free demo class. Real people, quick replies, zero pressure.
          </p>
          <ul className="ct-chips">
            <li><Clock aria-hidden="true" /> {CONTACT.hours}</li>
            <li><Check aria-hidden="true" /> Reply within 24 hours</li>
            <li><Check aria-hidden="true" /> Online &amp; offline batches</li>
          </ul>

          <div className="ct-quick">
            <a className="ct-qcard ct-q-call" href={CONTACT.phoneHref}>
              <span className="ct-qic"><Phone aria-hidden="true" /></span>
              <span className="ct-qtxt">
                <b>Call us</b>
                <span>{CONTACT.phoneDisplay}</span>
              </span>
              <ArrowUpRight className="ct-qarrow" aria-hidden="true" />
            </a>
            <a className="ct-qcard ct-q-wa" href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">
              <span className="ct-qic"><MessageCircle aria-hidden="true" /></span>
              <span className="ct-qtxt">
                <b>WhatsApp</b>
                <span>Fastest way to reach us</span>
              </span>
              <ArrowUpRight className="ct-qarrow" aria-hidden="true" />
            </a>
            <a className="ct-qcard ct-q-mail" href={`mailto:${CONTACT.email}`}>
              <span className="ct-qic"><Mail aria-hidden="true" /></span>
              <span className="ct-qtxt">
                <b>Email</b>
                <span>{CONTACT.email}</span>
              </span>
              <ArrowUpRight className="ct-qarrow" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== FORM + WHAT HAPPENS NEXT ===== */}
      <section className="ct-main" id="send-message">
        <div className="container ct-grid">
          <div className="ct-side">
            <h2>What happens after you reach out</h2>
            <ol className="ct-steps">
              {STEPS.map((s, i) => (
                <li key={s.title}>
                  <span className="ct-step-n">{i + 1}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="ct-promise">
              <b>Small batches, big attention.</b>
              <p>Batches are capped at 12 students and led by IITian and IIM-alumni mentors, so every question gets answered.</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* ===== VISIT US ===== */}
      <section className="ct-visit" id="visit-us">
        <div className="container">
          <span className="eyebrow">Visit us</span>
          <h2>Two centers in Hadapsar, Pune</h2>
          <p className="ct-sec-lede">Walk in for a conversation, a campus tour or a demo class. {CONTACT.hours}.</p>
          <div className="ct-locs">
            {LOCATIONS.map((l) => (
              <article key={l.tag} className={`ct-loc${l.primary ? ' is-primary' : ''}`}>
                <span className="ct-loc-tag">{l.tag}</span>
                <h3>{l.name}</h3>
                <p className="ct-loc-addr"><MapPin aria-hidden="true" /> {l.address}</p>
                <p className="ct-loc-note">{l.note}</p>
                <a href={l.mapsHref} target="_blank" rel="noopener noreferrer" className="ct-loc-link">
                  Get directions <ArrowUpRight aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TOPICS ===== */}
      <section className="ct-topics">
        <div className="container">
          <span className="eyebrow">Looking for something specific?</span>
          <h2>Jump straight to the right program</h2>
          <div className="ct-topic-grid">
            {TOPICS.map((t) => (
              <Link prefetch={false} key={t.href} href={t.href} className="ct-topic">
                <h3>{t.title}</h3>
                <p>{t.body}</p>
                <span className="ct-topic-go">Explore <ArrowUpRight aria-hidden="true" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="ct-faq">
        <div className="container ct-faq-inner">
          <span className="eyebrow">FAQ</span>
          <h2>Common questions</h2>
          <div className="ct-faq-list">
            {CONTACT_FAQS.map((f) => (
              <details key={f.question} className="ct-q">
                <summary>{f.question}</summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CLOSING CTA ===== */}
      <section className="ct-final">
        <div className="container ct-final-inner">
          <div>
            <h2>Prefer to talk right now?</h2>
            <p>Call or message us, and an admissions mentor will pick it up.</p>
          </div>
          <div className="ct-final-btns">
            <a className="btn btn-amber" href={CONTACT.phoneHref}>Call {CONTACT.phoneDisplay}</a>
            <a className="btn btn-green" href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
          </div>
        </div>
      </section>
    </main>
  );
}
