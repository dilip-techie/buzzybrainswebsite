import type { Metadata } from 'next';
import Link from 'next/link';

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
            Last updated: November 2026
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
              <li>Programs for international students (USA, Canada, Singapore and Australia) are priced and billed in US dollars (USD), and international payment is supported. Promotional offers, such as the inaugural discount, apply only to enrolments made within the stated offer period.</li>
            </ul>

            <h2 id="refunds">3. Refunds &amp; Cancellations</h2>
            <p>
              Refunds and cancellations are governed by our{' '}
              <Link href="/refund-policy">Refund Policy</Link>, which forms part of these terms. In summary:
            </p>
            <ul>
              <li>Demo and diagnostic classes are free and are not subject to refunds.</li>
              <li>
                A student who withdraws within 7 days of enrollment, and before attending more than 2 classes, is
                eligible for a full refund of the program fee paid, minus any registration or study-material costs
                already incurred on the student&apos;s behalf.
              </li>
              <li>
                After the cooling-off period, or after more than 2 classes, fees already paid for the current term
                are non-refundable. At the Academy&apos;s discretion, a pro-rated credit may be offered toward a
                future term instead of a cash refund.
              </li>
              <li>Students may request a transfer to a different batch or program, subject to availability, instead of a refund.</li>
              <li>If the Academy cancels a batch or program before it starts, the student is offered a full refund or a transfer, at the student&apos;s choice.</li>
              <li>
                Refund requests must be sent in writing to{' '}
                <a href="mailto:hello@buzzybrainsacademy.com">hello@buzzybrainsacademy.com</a>. Approved refunds are
                processed to the original payment method within 10 to 15 working days.
              </li>
            </ul>

            <h2 id="classes">4. Classes &amp; Attendance</h2>
            <ul>
              <li>Class schedules are set by the Academy and may be revised with reasonable notice to enrolled students.</li>
              <li>Missed classes may, at the Academy&apos;s discretion, be made available as recordings for online batches; make-up sessions for offline batches are not guaranteed.</li>
              <li>Students are expected to maintain regular attendance and complete assigned practice work to benefit fully from small-batch mentoring.</li>
            </ul>

            <h2 id="conduct">5. Code of Conduct</h2>
            <p>
              Students and parents are expected to engage respectfully with faculty, staff and fellow students, both
              in-person and online. The Academy reserves the right to take appropriate action, including suspension,
              in response to conduct that is abusive, disruptive, or unsafe.
            </p>

            <h2 id="results">6. Results &amp; Outcomes</h2>
            <p>
              While the Academy is committed to genuine, concept-first teaching and structured mock assessments,
              exam results, ranks and admission outcomes depend on multiple factors beyond the Academy&apos;s control,
              including individual student effort. The Academy does not guarantee specific scores, ranks, or
              admission results.
            </p>

            <h2 id="ip">7. Intellectual Property</h2>
            <p>
              Study material, question sets, mock papers and other content provided by the Academy are for the
              personal academic use of enrolled students only, and may not be copied, distributed or resold without
              written permission.
            </p>

            <h2 id="changes">8. Changes to These Terms</h2>
            <p>
              These Terms and Conditions may be updated from time to time. Continued enrollment or use of the
              website after changes are posted constitutes acceptance of the revised terms.
            </p>

            <h2 id="contact">9. Contact</h2>
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
