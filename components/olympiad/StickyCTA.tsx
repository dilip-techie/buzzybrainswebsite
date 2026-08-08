'use client';

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function StickyCTA({ label }: { label: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-[90] border-t border-oly-line bg-white/95 px-4 py-3 backdrop-blur transition-transform duration-300 sm:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ boxShadow: '0 -8px 24px rgba(15,28,63,0.12)' }}
    >
      <a href="#oly-lead-form" className="oly-btn-primary w-full">
        {label} <ArrowRight size={16} />
      </a>
    </div>
  );
}
