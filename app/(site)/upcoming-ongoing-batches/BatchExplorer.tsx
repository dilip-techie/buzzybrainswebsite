'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BATCHES, INSTRUCTOR, type Batch } from './_data';

type Filter = 'All' | 'Online' | 'Offline';

const FILTERS: Filter[] = ['All', 'Online', 'Offline'];

function waHref(batch: Batch) {
  const msg = `Hi, I'd like details about the ${batch.name} batch (${batch.mode.toLowerCase()}) at BuzzyBrains Academy.`;
  return `https://wa.me/918983604478?text=${encodeURIComponent(msg)}`;
}

export default function BatchExplorer() {
  const [filter, setFilter] = useState<Filter>('All');
  const visible = BATCHES.filter((b) => filter === 'All' || b.mode === filter);
  const count = (f: Filter) => (f === 'All' ? BATCHES.length : BATCHES.filter((b) => b.mode === f).length);

  return (
    <>
      <div className="bt-filters" role="tablist" aria-label="Filter batches by mode">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            role="tab"
            aria-selected={filter === f}
            className={`bt-filter${filter === f ? ' is-active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f} <span>{count(f)}</span>
          </button>
        ))}
      </div>

      <div className="bt-grid">
        {visible.map((b) => (
          <article key={b.id} className={`bt-card${b.mode === 'Offline' ? ' is-offline' : ''}`}>
            <div className="bt-top">
              <span className={`bt-mode ${b.mode === 'Offline' ? 'off' : 'on'}`}>
                <i aria-hidden="true" /> {b.mode}
              </span>
              <span className="bt-status">Admissions open</span>
            </div>
            <p className="bt-group">{b.group}</p>
            <h3>{b.name}</h3>
            <p className="bt-aud">{b.audience}</p>
            <p className="bt-sum">{b.summary}</p>
            <p className="bt-inst">Instructor: <b>{INSTRUCTOR.name}</b> · {INSTRUCTOR.credentials}</p>
            <ul className="bt-topics">
              {b.topics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="bt-actions">
              <a className="btn btn-primary" href={waHref(b)} target="_blank" rel="noopener noreferrer">
                Enquire on WhatsApp
              </a>
              <Link prefetch={false} href={b.href} className="bt-more">
                {b.linkLabel} →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
