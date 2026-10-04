import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | BuzzyBrains Academy',
  description: "BuzzyBrains Academy's refund and cancellation policy for program fees.",
  alternates: { canonical: 'https://buzzybrainsacademy.com/refund-policy' },
  robots: { index: true, follow: true },
};

export default function RefundPolicyPage() {
  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero">
        <div className="container article-shell center">
          <span className="eyebrow">Legal</span>
          <h1 style={{ fontSize: 'clamp(28px,4vw,44px)' }}>
            Refund Policy
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
              This policy explains how refund and cancellation requests for BuzzyBrains Academy program fees are
              handled. It applies to all programs — Foundation, Olympiad, IIT-JEE, NEET, Commerce, International
              Boards and Code Ninja — unless a specific program communicates different terms in writing at the time
              of enrollment.
            </p>

            <h2 id="demo-classes">1. Demo Classes</h2>
            <p>
              Demo and diagnostic classes are offered free of cost and are not subject to this refund policy, as no
              payment is collected for them.
            </p>

            <h2 id="cooling-off">2. Cooling-Off Period</h2>
            <p>
              A student who wishes to withdraw within 7 days of enrollment, and before attending more than 2 classes
              in the enrolled batch, is eligible for a full refund of the program fee paid, minus any registration or
              study-material costs already incurred on the student&apos;s behalf.
            </p>

            <h2 id="after-cooling-off">3. Withdrawal After the Cooling-Off Period</h2>
            <p>
              For withdrawals requested after the cooling-off period or after attending more than 2 classes, fees
              already paid for the current term are non-refundable, since batch seats are limited (capped at 12
              students) and are held exclusively for enrolled students. At the Academy&apos;s discretion, a pro-rated
              credit may be offered toward a future term instead of a cash refund.
            </p>

            <h2 id="batch-transfer">4. Batch or Program Transfer</h2>
            <p>
              Students may request a transfer to a different batch or program (subject to seat availability) instead
              of a refund. Transfer requests should be sent in writing to the email below.
            </p>

            <h2 id="cancelled-by-academy">5. If the Academy Cancels a Batch</h2>
            <p>
              In the rare case that the Academy cancels a batch or program before it starts, students will be
              offered a full refund or a transfer to an equivalent batch, at the student&apos;s choice.
            </p>

            <h2 id="how-to-request">6. How to Request a Refund</h2>
            <p>
              Refund requests must be submitted in writing to{' '}
              <a href="mailto:hello@buzzybrainsacademy.com">hello@buzzybrainsacademy.com</a>, stating the student
              name, program, batch and reason for the request. Approved refunds are processed to the original
              payment method within 10–15 working days.
            </p>

            <h2 id="contact">7. Contact</h2>
            <p>
              For questions about this policy, contact{' '}
              <a href="mailto:hello@buzzybrainsacademy.com">hello@buzzybrainsacademy.com</a> or{' '}
              <a href="tel:+919850570525">+91 98505 70525</a>.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
