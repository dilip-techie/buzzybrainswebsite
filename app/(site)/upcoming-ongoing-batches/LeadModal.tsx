'use client';

import { useEffect, useState } from 'react';
import LeadForm from './LeadForm';
import { BATCHES } from './_data';
import { OPEN_LEAD_EVENT, type OpenLeadDetail } from './events';

export default function LeadModal() {
  const [open, setOpen] = useState(false);
  const [batchId, setBatchId] = useState('');
  const [nonce, setNonce] = useState(0);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const detail = (e as CustomEvent<OpenLeadDetail>).detail;
      setBatchId(detail?.batchId ?? '');
      setNonce((n) => n + 1);
      setOpen(true);
    };
    window.addEventListener(OPEN_LEAD_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_LEAD_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;
  const batch = BATCHES.find((b) => b.id === batchId);

  return (
    <div className="bt-modal" role="dialog" aria-modal="true" aria-labelledby="bt-modal-title" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
      <div className="bt-modal-card">
        <button type="button" className="bt-modal-x" aria-label="Close" onClick={() => setOpen(false)}>×</button>
        <span className="bt-modal-eyebrow">Free demo class</span>
        <h2 id="bt-modal-title">{batch ? `Reserve your seat: ${batch.name}` : 'Reserve your free demo seat'}</h2>
        <p className="bt-modal-sub">Takes 30 seconds. We&apos;ll call you within 24 hours to confirm your slot.</p>
        <LeadForm key={nonce} defaultBatchId={batchId} source="batches-modal" />
      </div>
    </div>
  );
}
