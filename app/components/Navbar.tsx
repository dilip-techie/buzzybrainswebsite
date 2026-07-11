'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const NAV_LINKS = [
  { href: '/#programs', label: 'Programs' },
  { href: '/#why', label: 'Why Us' },
  { href: '/#faculty', label: 'Faculty' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/exams', label: 'Exams Portal' },
  { href: '/#contact', label: 'Contact Us' },
];

const STRIP_MESSAGES = [
  '🎓 An IIT/IIM Alumni Initiative',
  '✅ Top 1% Faculty Led by Dilip Sir',
  '✅ Maximum Batch Size: 12 Students',
  '✅ Personal Attention Guaranteed',
  '🏆 Olympiad Batches Open',
  '💻 CodeHive: Coding Lab Now Open',
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
            <span key={i}>{msg}</span>
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
              Buzzy<b>Brains</b><span className="logo-suffix">Academy</span>
            </Link>
          </div>
          <nav aria-label="Primary">
            <ul className="nav-links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
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
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/#contact" style={{ color: 'var(--blue)', fontWeight: 700 }} onClick={() => setMenuOpen(false)}>
            Book Free Demo →
          </Link>
        </div>
      </header>
    </>
  );
}
