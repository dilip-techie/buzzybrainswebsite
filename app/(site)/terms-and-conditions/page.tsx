import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | BuzzyBrains Academy',
  description: 'Terms and conditions for enrolling in and using BuzzyBrains Academy coaching programs and website.',
  alternates: { canonical: 'https://buzzybrainsacademy.com/terms-and-conditions' },
  robots: { index: true, follow: true },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero">
        <div className="container article-shell center">
          <span className="eyebrow">Legal</span>
          <h1 style={{ fontSize: 'clamp(28px,4vw,44px)' }}>
            Terms and Conditions
          </h1>
          <p className="lede" style={{ margin: '0 auto', maxWidth: 680 }}>
            Last updated: August 2026
          </p>
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container article-shell">
          <article className="article-body">
            <p>
              These Terms and Conditions govern enrollment in, and use of, programs offered by BuzzyBrains Academy
              (&quot;we&quot;, &quot;us&quot;, &quot;the Academy&quot;), operating from Amanora, Hadapsar, Pune, Maharashtra. By enrolling in
              a program, booking a demo class, or using this website, you agree to these terms.
            </p>

            <h2 id="admissions">1. Admissions &amp; Enrollment</h2>
            <ul>
              <li>Enrollment is confirmed only after the registration form is completed and the applicable fee is received.</li>
              <li>Batch placement (online or offline) is subject to availability, and every batch is capped at a maximum of 12 students.</li>
              <li>A free diagnostic or demo class does not guarantee a seat in a specific batch or time slot.</li>
              <li>The Academy reserves the right to decline or discontinue enrollment where a student&apos;s conduct disrupts the learning environment for others.</li>
            </ul>

            <h2 id="fees">2. Fees &amp; Payment</h2>
            <ul>
              <li>Program fees are as communicated at the time of enrollment and are payable as per the agreed schedule (one-time, term-wise, or monthly, depending on the program).</li>
              <li>Fees do not automatically include study material, mock test series, or exam registration costs unless explicitly stated in writing.</li>
              <li>Continued non-payment of fees may result in suspension of access to classes or learning materials.</li>
            </ul>

            <h2 id="classes">3. Classes &amp; Attendance</h2>
            <ul>
              <li>Class schedules are set by the Academy and may be revised with reasonable notice to enrolled students.</li>
              <li>Missed classes may, at the Academy&apos;s discretion, be made available as recordings for online batches; make-up sessions for offline batches are not guaranteed.</li>
              <li>Students are expected to maintain regular attendance and complete assigned practice work to benefit fully from small-batch mentoring.</li>
            </ul>

            <h2 id="conduct">4. Code of Conduct</h2>
            <p>
              Students and parents are expected to engage respectfully with faculty, staff and fellow students, both
              in-person and online. The Academy reserves the right to take appropriate action, including suspension,
              in response to conduct that is abusive, disruptive, or unsafe.
            </p>

            <h2 id="results">5. Results &amp; Outcomes</h2>
            <p>
              While the Academy is committed to genuine, concept-first teaching and structured mock assessments,
              exam results, ranks and admission outcomes depend on multiple factors beyond the Academy&apos;s control,
              including individual student effort. The Academy does not guarantee specific scores, ranks, or
              admission results.
            </p>

            <h2 id="ip">6. Intellectual Property</h2>
            <p>
              Study material, question sets, mock papers and other content provided by the Academy are for the
              personal academic use of enrolled students only, and may not be copied, distributed or resold without
              written permission.
            </p>

            <h2 id="changes">7. Changes to These Terms</h2>
            <p>
              These Terms and Conditions may be updated from time to time. Continued enrollment or use of the
              website after changes are posted constitutes acceptance of the revised terms.
            </p>

            <h2 id="contact">8. Contact</h2>
            <p>
              Questions about these terms can be directed to{' '}
              <a href="mailto:hello@buzzybrainsacademy.com">hello@buzzybrainsacademy.com</a> or{' '}
              <a href="tel:+919850570525">+91 98505 70525</a>.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
