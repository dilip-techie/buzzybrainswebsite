'use client';

import { useEffect, useState } from 'react';
import { Link2, Mail, Check } from 'lucide-react';

export function ShareBar({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — no-op, the buttons below still work.
    }
  };

  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(`${title} — ${url}`)}`;
  const mailHref = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;

  return (
    <div className="share-bar">
      <span className="share-bar-label">Share this guide</span>
      <div className="share-bar-btns">
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="share-btn" aria-label="Share on WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5-.4.9-.9 1-.7 1.4.9 1.5 2 2.5 3.4 3.1.4.2.6.2.8-.1.2-.2.9-1 1.1-1.3.2-.3.4-.3.7-.2l2 1c.3.1.5.2.6.3 0 .2 0 .8-.2 1.5z" /></svg>
        </a>
        <a href={mailHref} className="share-btn" aria-label="Share via email">
          <Mail size={17} />
        </a>
        <button type="button" onClick={handleCopy} className="share-btn" aria-label="Copy link">
          {copied ? <Check size={17} /> : <Link2 size={17} />}
        </button>
      </div>
    </div>
  );
}
