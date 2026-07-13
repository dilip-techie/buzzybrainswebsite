'use client';

import Link from 'next/link';
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
}

const PROGRAMS_MEGA_MENU: MegaMenuGroup[] = [
  {
    title: 'Indian Boards & Competitive Exams',
    subtitle: 'CBSE · ICSE · State',
    items: [
      { href: '/foundation', label: 'Foundation (Grades 6–10)' },
      { href: '/12th-board-pcm', label: 'IIT-JEE (Grades 11–12)' },
      { href: '/12th-board-pcb', label: 'NEET (Grades 11–12)' },
      { href: '/commerce-tuitions', label: 'Commerce Tuitions (Grades 11–12)' },
      { href: '/olympiad-math', label: 'Maths Excellence (Grades 4–12)' },
      { href: '/olympiads', label: 'Olympiads (Grades 4–12)' },
    ],
  },
  {
    title: 'International Pathways',
    subtitle: 'Global Curricula',
    items: [
      { href: '/international-boards#igcse', label: 'IGCSE (Grades 4–12)' },
      { href: '/international-boards#ib', label: 'IB Diploma (Grades 4–12)' },
      { href: '/international-boards#a-level', label: 'A Level / AS Level' },
      { href: '/international-boards#ap', label: 'AP Exams' },
      { href: '/sat-exam', label: 'SAT' },
    ],
    footerLink: { href: '/international-boards', label: 'Compare pathways →' },
  },
  {
    title: 'Specialized Tracks',
    subtitle: 'Skills & Format',
    items: [
      { href: '/coding-lab', label: 'Code Ninja (Grades 6–12)' },
      { href: '/one-on-one', label: 'One-on-One Coaching' },
    ],
    footerLink: { href: '/#contact', label: 'Book a free demo →' },
  },
];

const NAV_LINKS = [
  { href: '/#programs', label: 'Programs', groups: PROGRAMS_MEGA_MENU },
  { href: '/achievements', label: 'Achievements' },
  { href: '/blog', label: 'Blogs' },
  { href: '/exams', label: 'Exams Portal' },
  { href: '/about', label: 'About' },
  { href: '/#contact', label: 'Contact Us' },
];

const STRIP_MESSAGES: { text: string; live?: boolean }[] = [
  { text: '🎓 An IIT/IIM Alumni Initiative' },
  { text: '✅ Top 1% Faculty Led by Dilip Sir' },
  { text: '✅ Maximum Batch Size: 12 Students' },
  { text: '✅ Personal Attention Guaranteed' },
  { text: '🏆 Olympiad Batches Open' },
  { text: '💻 Code Ninja: Coding Lab Now Open' },
  { text: 'Online & Offline Batches', live: true },
  { text: '🧑‍🏫 1-on-1 Classes Available Now' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

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
      <div className="top-strip" aria-label="BuzzyBrains Academy highlights">
        <div className="top-strip-track" aria-hidden="true">
          {[...STRIP_MESSAGES, ...STRIP_MESSAGES].map((msg, i) => (
            <span key={i}>
              {msg.live && <i className="strip-live-dot" aria-hidden="true" />}
              {msg.text}
            </span>
          ))}
        </div>
      </div>
      <header className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
        <div className="container nav-inner">
          <div className="nav-left">
            <Link href="/" className="logo" aria-label="BuzzyBrains Academy home">
              <span className="logo-mark" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.5-3 5.7V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.3C6.2 13.5 5 11.4 5 9a7 7 0 0 1 7-7z" />
                  <path d="M9 21h6" />
                  <path d="M10 9l2 2 2-2" />
                </svg>
              </span>
              <span className="logo-text">
                <span className="logo-word">Buzzy <b>Brains</b></span>
                <span className="logo-suffix">Academy</span>
              </span>
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
                      {link.groups.map((group) => (
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
      </header>
    </>
  );
}
