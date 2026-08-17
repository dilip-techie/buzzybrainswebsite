'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface MegaMenuItem {
  href: string;
  label: string;
}

interface MegaMenuGroup {
  title: string;
  subtitle: string;
  items: MegaMenuItem[];
  footerLink?: MegaMenuItem;
  /** Desktop mega-menu column (1-indexed) this group renders in. Groups
   * sharing a column are stacked vertically within it. Ignored on mobile,
   * where every group renders as its own accordion section regardless. */
  column: number;
}

const ABOUT_US_MENU: MegaMenuItem[] = [
  { href: '/about', label: 'About BuzzyBrains' },
  { href: '/about#founder-story', label: 'About Our Founder' },
  { href: '/about#mission', label: 'Our Mission' },
  { href: '/about#vision', label: 'Our Vision' },
  { href: '/#faculty', label: 'Our Faculties' },
  { href: '/exams', label: 'Exams Portal' },
];

const OLYMPIAD_PREP_MEGA_MENU: MegaMenuGroup[] = [
  {
    title: 'Maths Olympiad',
    subtitle: 'SOF IMO · IOQM · NMTC · AMC · Kangaroo',
    column: 1,
    items: [
      { href: '/sof-imo-coaching-pune', label: 'SOF IMO' },
      { href: '/ioqm-coaching-pune', label: 'IOQM' },
      { href: '/nmtc-coaching-pune', label: 'NMTC' },
      { href: '/amc-8-10-coaching-pune', label: 'AMC 8 / AMC 10' },
      { href: '/maths-kangaroo-coaching-pune', label: 'Maths Kangaroo' },
    ],
    footerLink: { href: '/olympiad-math', label: 'View Maths Olympiad Program →' },
  },
  {
    title: 'Science Olympiad',
    subtitle: 'Homi Bhabha · NSEJS · Physics · Chemistry · Biology',
    column: 2,
    items: [
      { href: '/sof-olympiads#homi-bhabha', label: 'Homi Bhabha' },
      { href: '/sof-olympiads#nsejs', label: 'NSEJS' },
      { href: '/sof-olympiads#physics', label: 'Physics Olympiad' },
      { href: '/sof-olympiads#chemistry', label: 'Chemistry Olympiad' },
      { href: '/sof-olympiads#biology', label: 'Biology Olympiad' },
    ],
    footerLink: { href: '/sof-olympiads', label: 'View Science Olympiad Program →' },
  },
  {
    title: 'Other Olympiad',
    subtitle: 'English · GK · Commerce · Economics',
    column: 3,
    items: [
      { href: '/sof-olympiads#english', label: 'English Olympiad' },
      { href: '/sof-olympiads#knowledge', label: 'General Knowledge Olympiad' },
      { href: '/sof-olympiads#commerce', label: 'Commerce Olympiad' },
      { href: '/sof-olympiads#financial-literacy', label: 'Financial Literacy Olympiad' },
      { href: '/sof-olympiads#economics', label: 'Economics Olympiad' },
      { href: '/olympiads', label: 'All Olympiads Overview' },
    ],
  },
  {
    title: 'Coding Olympiad',
    subtitle: 'ZIO · INOI · IOI pipeline',
    column: 3,
    items: [
      { href: '/coding-lab', label: 'Code Ninja Program' },
      { href: '/blog/informatics-olympiad-pipeline-zio-inoi-ioi-explained', label: 'ZIO / INOI / IOI Guide' },
    ],
  },
];

const PROGRAMS_MEGA_MENU: MegaMenuGroup[] = [
  {
    title: 'Indian Boards & Competitive Exams',
    subtitle: 'CBSE · ICSE · State',
    column: 1,
    items: [
      { href: '/foundation', label: 'Foundation (Grades 6–10)' },
      { href: '/olympiad-math', label: 'Maths Excellence (Grades 4–12)' },
      { href: '/olympiads', label: 'Olympiads (Grades 4–12)' },
      { href: '/ioqm-amc-coaching-pune', label: 'IOQM / AMC Coaching (Grades 6–12)' },
      { href: '/12th-board-pcm', label: 'IIT-JEE (Grades 9–12)' },
      { href: '/12th-board-pcb', label: 'NEET (Grades 9–12)' },
      { href: '/coding-lab', label: 'Code Ninja (Grades 6–12)' },
      { href: '/test-series', label: 'Board Test Series (Grades 10 & 12)' },
    ],
    footerLink: { href: '/#contact', label: 'Book a free demo →' },
  },
  {
    title: 'International Pathways',
    subtitle: 'CIE · IGCSE · IB',
    column: 2,
    items: [
      { href: '/international-boards#a-level', label: 'CIE (Grades 11–12)' },
      { href: '/international-boards#igcse', label: 'IGCSE (Grades 4–12)' },
      { href: '/international-boards#ib', label: 'IB (Grades 4–12)' },
      { href: '/ap-exam', label: 'AP Exams (Grades 9–12)' },
      { href: '/sat-exam', label: 'PSAT/SAT Exams (Grades 10–12)' },
      { href: '/ivy-league-counselling', label: 'Ivy League Counselling (Grades 9–12)' },
    ],
    footerLink: { href: '/international-boards', label: 'Compare pathways →' },
  },
  {
    title: 'Commerce, Law & MBA Prep',
    subtitle: 'IPMAT · CLAT · CA · CAT',
    column: 3,
    items: [
      { href: '/commerce-tuitions', label: 'Commerce (Grades 11–12)' },
      { href: '/ca-foundation-coaching-pune', label: 'CA Prep (Grade 12)' },
      { href: '/clat-exam', label: 'CLAT (Grades 11–12)' },
      { href: '/ipmat-exam', label: 'IPMAT (Grade 12)' },
      { href: '/cat-exam', label: 'CAT (Post-Graduation)' },
    ],
    footerLink: { href: '/commerce-tuitions', label: 'Explore Commerce →' },
  },
];

const NAV_LINKS = [
  { href: '/#programs', label: 'Programs', groups: PROGRAMS_MEGA_MENU },
  { href: '/olympiad-math', label: 'Olympiad Prep', groups: OLYMPIAD_PREP_MEGA_MENU },
  { href: '/achievements', label: 'Achievements' },
  { href: '/blog', label: 'Blogs' },
  { href: '/about', label: 'About Us', simpleItems: ABOUT_US_MENU },
  { href: '/#contact', label: 'Contact Us' },
];

const STRIP_MESSAGES: { text: string; live?: boolean; href: string; external?: boolean }[] = [
  { text: '📝 Test Series Available for Board Exams — Complete Package Starts ₹19,999', href: '/test-series' },
  { text: '🚀 IOQM 2027 Batch Open — Enroll Now', href: '/ioqm-coaching-pune' },
  { text: '🎓 An IIT/IIM Alumni Initiative', href: '/about' },
  { text: '✅ Top 1% Faculty Led by Dilip Sir', href: '/about' },
  { text: '✅ Maximum Batch Size: 12 Students', href: '/admissions' },
  { text: '✅ Personal Attention Guaranteed', href: '/admissions' },
  { text: '⭐ Consistently Rated #1 by Parents and Students', href: 'https://www.google.com/search?q=BuzzyBrains+Academy+Google+Reviews', external: true },
  { text: '🏆 Olympiad Batches Open', href: '/olympiads' },
  { text: 'Online & Offline Batches', live: true, href: '/admissions' },
  { text: '🧑‍🏫 1-on-1 Classes Available Now', href: '/one-on-one' },
  { text: '📍 Available Near Amanora Mall, Pune', href: 'https://maps.app.goo.gl/gANY66SQFDgVajtf8', external: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [stripPaused, setStripPaused] = useState(false);
  const pathname = usePathname();

  // The top strip persists across client-side route changes, so a stationary
  // cursor left over a just-clicked link keeps CSS :hover true on the new
  // page — this resets that state explicitly on every navigation instead of
  // waiting for the mouse to physically move.
  useEffect(() => {
    setStripPaused(false);
  }, [pathname]);

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'dark' : 'light');

    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('bb-theme', next);
    } catch {}
    setTheme(next);
  };

  return (
    <>
      <div
        className="top-strip"
        aria-label="BuzzyBrains Academy highlights"
        onMouseEnter={() => setStripPaused(true)}
        onMouseLeave={() => setStripPaused(false)}
        onFocus={() => setStripPaused(true)}
        onBlur={() => setStripPaused(false)}
      >
        <div className={`top-strip-track${stripPaused ? ' is-paused' : ''}`}>
          {STRIP_MESSAGES.map((msg, i) =>
            msg.external ? (
              <a key={`a-${i}`} href={msg.href} target="_blank" rel="noopener noreferrer" className="top-strip-item">
                {msg.live && <i className="strip-live-dot" aria-hidden="true" />}
                {msg.text}
              </a>
            ) : (
              <Link key={`a-${i}`} href={msg.href} className="top-strip-item">
                {msg.live && <i className="strip-live-dot" aria-hidden="true" />}
                {msg.text}
              </Link>
            )
          )}
          {STRIP_MESSAGES.map((msg, i) =>
            msg.external ? (
              <a key={`b-${i}`} href={msg.href} target="_blank" rel="noopener noreferrer" className="top-strip-item" aria-hidden="true" tabIndex={-1}>
                {msg.live && <i className="strip-live-dot" aria-hidden="true" />}
                {msg.text}
              </a>
            ) : (
              <Link key={`b-${i}`} href={msg.href} className="top-strip-item" aria-hidden="true" tabIndex={-1}>
                {msg.live && <i className="strip-live-dot" aria-hidden="true" />}
                {msg.text}
              </Link>
            )
          )}
        </div>
      </div>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="container nav-inner">
          <div className="nav-left">
            <Link href="/" className="logo" aria-label="BuzzyBrains Academy home">
              <Image src="/logo-badge.png" alt="BuzzyBrains Academy" width={523} height={307} className="logo-badge-img" priority />
            </Link>
          </div>
          <nav aria-label="Primary">
            <ul className="nav-links">
              {NAV_LINKS.map((link) =>
                link.groups ? (
                  <li key={link.href} className="nav-dropdown-wrap">
                    <Link href={link.href} className="nav-dropdown-trigger">
                      {link.label}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                    </Link>
                    <div className="nav-mega">
                      {Array.from(new Set(link.groups.map((g) => g.column)))
                        .sort((a, b) => a - b)
                        .map((col) => (
                        <div className="nav-mega-col" key={col}>
                          {link.groups.filter((g) => g.column === col).map((group) => (
                            <div className="nav-mega-group" key={group.title}>
                              <h4>{group.title}</h4>
                              <span className="nav-mega-sub">{group.subtitle}</span>
                              <ul>
                                {group.items.map((item) => (
                                  <li key={item.href}>
                                    <Link href={item.href}>{item.label}</Link>
                                  </li>
                                ))}
                              </ul>
                              {group.footerLink && (
                                <div className="nav-mega-footer">
                                  <Link href={group.footerLink.href}>{group.footerLink.label}</Link>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </li>
                ) : link.simpleItems ? (
                  <li key={link.href} className="nav-dropdown-wrap">
                    <Link href={link.href} className="nav-dropdown-trigger">
                      {link.label}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                    </Link>
                    <div className="nav-simple-menu">
                      <ul>
                        {link.simpleItems.map((item) => (
                          <li key={item.href}>
                            <Link href={item.href}>{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                )
              )}
            </ul>
          </nav>
          <div className="nav-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
              {theme === 'dark' ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                </svg>
              )}
            </button>
            <Link href="/#contact" className="btn btn-primary nav-cta">Book Free Demo</Link>
            <button
              className="hamburger"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* Rendered as a sibling of <header>, not a descendant — .navbar's
          backdrop-filter creates a new containing block for position:fixed
          children, which would otherwise squash this panel down to the
          header's own height instead of the full viewport. */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
          {NAV_LINKS.map((link) =>
            link.groups ? (
              <div className="mobile-menu-programs" key={link.href}>
                <button
                  type="button"
                  className="mobile-menu-programs-trigger"
                  aria-expanded={mobileProgramsOpen}
                  onClick={() => setMobileProgramsOpen((prev) => !prev)}
                >
                  {link.label}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                </button>
                <div className={`mobile-menu-programs-panel${mobileProgramsOpen ? ' open' : ''}`}>
                  {link.groups.map((group) => (
                    <div className="mobile-menu-group" key={group.title}>
                      <span className="mobile-menu-group-title">{group.title}</span>
                      {group.items.map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : link.simpleItems ? (
              <div className="mobile-menu-programs" key={link.href}>
                <button
                  type="button"
                  className="mobile-menu-programs-trigger"
                  aria-expanded={mobileAboutOpen}
                  onClick={() => setMobileAboutOpen((prev) => !prev)}
                >
                  {link.label}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                </button>
                <div className={`mobile-menu-programs-panel${mobileAboutOpen ? ' open' : ''}`}>
                  <div className="mobile-menu-group">
                    {link.simpleItems.map((item) => (
                      <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </Link>
            )
          )}
          <Link href="/#contact" style={{ color: 'var(--blue)', fontWeight: 700 }} onClick={() => setMenuOpen(false)}>
            Book Free Demo →
          </Link>
        </div>
    </>
  );
}
