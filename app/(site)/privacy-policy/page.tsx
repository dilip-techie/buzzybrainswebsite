import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | BuzzyBrains Academy',
  description: 'How BuzzyBrains Academy collects, uses and protects your personal information.',
  alternates: { canonical: 'https://buzzybrainsacademy.com/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero">
        <div className="container article-shell center">
          <span className="eyebrow reveal">Legal</span>
          <h1 className="reveal" data-delay="1" style={{ fontSize: 'clamp(28px,4vw,44px)' }}>
            Privacy Policy
          </h1>
          <p className="lede reveal" data-delay="2" style={{ margin: '0 auto', maxWidth: 680 }}>
            Last updated: August 2026
          </p>
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container article-shell">
          <article className="article-body">
            <p>
              BuzzyBrains Academy (&quot;we&quot;, &quot;us&quot;, &quot;the Academy&quot;) respects your privacy. This policy explains
              what information we collect through this website and our enrollment process, how we use it, and the
              choices you have.
            </p>

            <h2 id="information-we-collect">1. Information We Collect</h2>
            <ul>
              <li><strong>Contact details</strong> you provide via demo-booking forms, WhatsApp, phone or email — student and parent name, phone number, email address, school and grade.</li>
              <li><strong>Enrollment and academic information</strong> — batch, attendance, mock test scores and progress records, for students who join a program.</li>
              <li><strong>Usage data</strong> such as pages visited and general device/browser information, collected automatically via standard analytics tools.</li>
            </ul>

            <h2 id="how-we-use-it">2. How We Use This Information</h2>
            <ul>
              <li>To respond to demo-class and admission enquiries, and to contact you by phone, email or WhatsApp about programs you&apos;ve expressed interest in.</li>
              <li>To manage enrollment, batch communication, and to share progress updates with parents.</li>
              <li>To improve our website, teaching material and programs.</li>
              <li>To meet legal, regulatory or administrative requirements.</li>
            </ul>

            <h2 id="sharing">3. Sharing of Information</h2>
            <p>
              We do not sell personal information. We may share limited information with trusted service providers
              who help us operate (for example, email or messaging tools), bound to keep it confidential, or where
              required by law.
            </p>

            <h2 id="cookies">4. Cookies &amp; Analytics</h2>
            <p>
              This website may use cookies and analytics tools (such as Google Analytics) to understand how visitors
              use the site and to improve it. You can control cookies through your browser settings.
            </p>

            <h2 id="security">5. Data Security</h2>
            <p>
              We take reasonable technical and organizational measures to protect the information we hold, though no
              method of transmission or storage is completely secure.
            </p>

            <h2 id="retention">6. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to fulfil the purposes described above,
              including maintaining academic records for enrolled students, or as required by law.
            </p>

            <h2 id="your-choices">7. Your Choices</h2>
            <p>
              You can ask us to correct, update, or delete your personal information, or to stop contacting you
              about programs, by emailing <a href="mailto:hello@buzzybrainsacademy.com">hello@buzzybrainsacademy.com</a>.
            </p>

            <h2 id="children">8. Children&apos;s Information</h2>
            <p>
              As a coaching institute for school-age students, we collect student information (such as name, grade
              and academic performance) with the involvement and consent of a parent or guardian at the time of
              enrollment.
            </p>

            <h2 id="changes">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Material changes will be reflected by updating
              the &quot;Last updated&quot; date above.
            </p>

            <h2 id="contact">10. Contact</h2>
            <p>
              For any privacy-related questions, contact{' '}
              <a href="mailto:hello@buzzybrainsacademy.com">hello@buzzybrainsacademy.com</a> or{' '}
              <a href="tel:+919850570525">+91 98505 70525</a>.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
