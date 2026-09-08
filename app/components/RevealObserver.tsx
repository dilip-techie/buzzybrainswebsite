'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Elements like the homepage stat cards render their real, final number in
// the server-rendered HTML (see data-count) so every visitor sees a correct
// value even if this script never runs. This only replaces that already-
// correct text with a 0-to-target count-up as a visual enhancement — it
// never leaves the element showing 0.
function animateCount(el: Element) {
  const target = Number(el.getAttribute('data-count'));
  if (!Number.isFinite(target)) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = String(target);
    return;
  }

  const duration = 1200;
  const start = performance.now();

  const step = (now: number) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = String(Math.round(target * eased));
    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = String(target);
    }
  };
  requestAnimationFrame(step);
}

export default function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains('reveal')) {
              entry.target.classList.add('in');
            }
            if (entry.target.hasAttribute('data-count')) {
              animateCount(entry.target);
            }
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal:not(.in), .count[data-count]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
