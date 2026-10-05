'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/** Floating "Contact Us" dock pinned to the top-right, just under the header.
 * Hidden on the contact page itself, where it would point at the current page. */
export default function ContactDock() {
  const pathname = usePathname();
  if (pathname === '/contact') return null;

  return (
    <Link prefetch={false} href="/contact" className="contact-dock" aria-label="Contact us">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.5 2.9.7a2 2 0 0 1 1.7 2z" />
      </svg>
      <span className="contact-dock-label">Contact Us</span>
    </Link>
  );
}
