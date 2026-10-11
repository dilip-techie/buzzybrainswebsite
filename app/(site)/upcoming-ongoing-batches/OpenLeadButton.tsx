'use client';

import type { ReactNode } from 'react';
import { openLead } from './events';

export default function OpenLeadButton({
  className,
  batchId,
  children,
}: {
  className?: string;
  batchId?: string;
  children: ReactNode;
}) {
  return (
    <button type="button" className={className} onClick={() => openLead(batchId)}>
      {children}
    </button>
  );
}
