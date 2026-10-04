'use client';

import { useEffect, useState } from 'react';

const GAP = 22;

export default function WhatsAppFloat() {
  const [bottom, setBottom] = useState(GAP);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const footer = document.getElementById('footer');
      if (!footer) return;
      const footerTop = footer.getBoundingClientRect().top;
      const overlap = window.innerHeight - footerTop;
      setBottom(overlap > 0 ? overlap + GAP : GAP);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <a
      href="https://wa.me/919850570525"
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      style={{ bottom }}
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5-.4.9-.9 1-.7 1.4.9 1.5 2 2.5 3.4 3.1.4.2.6.2.8-.1.2-.2.9-1 1.1-1.3.2-.3.4-.3.7-.2l2 1c.3.1.5.2.6.3 0 .2 0 .8-.2 1.5z" />
      </svg>
    </a>
  );
}
