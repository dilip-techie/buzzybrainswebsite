import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bb-footer bb-landing" id="footer">
      <div className="container">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/#top" className="logo" style={{ color: '#fff' }}>
              <span className="logo-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.5-3 5.7V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.3C6.2 13.5 5 11.4 5 9a7 7 0 0 1 7-7z" />
                  <path d="M9 21h6" />
                  <path d="M10 9l2 2 2-2" />
                </svg>
              </span>
              Buzzy<b style={{ color: '#60A5FA' }}>Brains</b>
            </Link>
            <p>Premium coaching for IIT-JEE, NEET, Olympiads and Foundation — where learning is fun, conceptual and powered by technology.</p>
            <div className="foot-social">
              <a href="https://www.facebook.com/profile.php?id=61590943110329" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="https://www.youtube.com/@BuzzyBrainsAcademy" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 6.4a2.8 2.8 0 0 0-2-2C18.9 4 12 4 12 4s-6.9 0-8.5.4a2.8 2.8 0 0 0-2 2A29 29 0 0 0 1 12a29 29 0 0 0 .5 5.6 2.8 2.8 0 0 0 2 2c1.6.4 8.5.4 8.5.4s6.9 0 8.5-.4a2.8 2.8 0 0 0 2-2A29 29 0 0 0 23 12a29 29 0 0 0-.5-5.6zM9.8 15.5v-7l6 3.5z" /></svg>
              </a>
            </div>
          </div>
          <nav aria-label="Footer quick links">
            <h4>Quick Links</h4>
            <ul className="foot-links">
              <li><Link href="/#programs">Programs</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/admissions">Admissions</Link></li>
              <li><Link href="/#faculty">Faculty</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
          <nav aria-label="Footer program links">
            <h4>Programs</h4>
            <ul className="foot-links">
              <li><Link href="/foundation">Foundation (6–10)</Link></li>
              <li><Link href="/12th-board-pcm">IIT-JEE</Link></li>
              <li><Link href="/12th-board-pcb">NEET</Link></li>
              <li><Link href="/olympiad-math">Olympiads</Link></li>
              <li><Link href="/international-boards">International Boards</Link></li>
              <li><Link href="/one-on-one">One-on-One</Link></li>
              <li><Link href="/programming-classes">Programming Classes</Link></li>
            </ul>
          </nav>
          <div>
            <h4>Get in Touch</h4>
            <ul className="foot-contact">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Pune, Maharashtra
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.9.7a2 2 0 0 1 1.7 2z" /></svg>
                <a href="tel:+919850570525">+91 98505 70525</a>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 6L2 7" /></svg>
                <a href="mailto:hello@buzzybrainsacademy.com">hello@buzzybrainsacademy.com</a>
              </li>
            </ul>
            <a className="foot-map" href="https://wa.me/919850570525" target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
              <svg className="roads" viewBox="0 0 300 120" preserveAspectRatio="none"><path d="M0 60 H300 M150 0 V120 M0 20 Q150 40 300 10 M0 100 Q150 80 300 110" stroke="#3B5488" strokeWidth="3" fill="none" /></svg>
              <svg className="pin" width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a8 8 0 0 0-8 8c0 6 8 12 8 12s8-6 8-12a8 8 0 0 0-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" /></svg>
              <span>Chat with us on WhatsApp →</span>
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} BuzzyBrains Academy. All rights reserved.</span>
          <span>Learn Smarter. Dream Bigger. Achieve More.</span>
        </div>
      </div>
    </footer>
  );
}
