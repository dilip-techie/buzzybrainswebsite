'use client';

import { openLead } from './events';

/** Mobile-only bottom bar: keeps the free-demo hook one tap away while browsing. */
export default function StickyBar() {
  return (
    <div className="bt-sticky" role="region" aria-label="Book a free demo class">
      <button type="button" className="btn btn-primary" onClick={() => openLead()}>
        Book a free demo class
      </button>
      <a className="bt-sticky-wa" href="https://wa.me/918983604478" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5-.4.9-.9 1-.7 1.4.9 1.5 2 2.5 3.4 3.1.4.2.6.2.8-.1.2-.2.9-1 1.1-1.3.2-.3.4-.3.7-.2l2 1c.3.1.5.2.6.3 0 .2 0 .8-.2 1.5z" /></svg>
      </a>
    </div>
  );
}
