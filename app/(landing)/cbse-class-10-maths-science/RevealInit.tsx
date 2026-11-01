'use client';

import { useEffect } from 'react';

// Adds the "in" class to .l-reveal elements as they scroll into view. Landing page only:
// the main site has its own RevealObserver, but it lives in the (site) layout.
export default function RevealInit() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.cbl .l-reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('l-in'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('l-in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
