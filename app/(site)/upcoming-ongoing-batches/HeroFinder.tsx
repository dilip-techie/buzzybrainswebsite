'use client';

import { useState } from 'react';
import { CATEGORIES, GRADE_OPTIONS } from './_data';
import { setFilter } from './events';

export default function HeroFinder() {
  const [grade, setGrade] = useState('');

  return (
    <div className="bt-finder">
      <h2>Find my batch</h2>
      <p>Pick your grade and we&apos;ll show the batches that fit.</p>
      <div className="bt-finder-grades" role="group" aria-label="Choose your grade">
        {GRADE_OPTIONS.map((g) => (
          <button
            key={g}
            type="button"
            className={`bt-gpill${grade === String(g) ? ' is-active' : ''}`}
            aria-pressed={grade === String(g)}
            onClick={() => {
              setGrade(String(g));
              setFilter({ grade: g, category: null });
            }}
          >
            {g}
          </button>
        ))}
      </div>
      <p className="bt-finder-or">or jump to a program</p>
      <div className="bt-finder-cats">
        {CATEGORIES.map((c) => (
          <button key={c.id} type="button" onClick={() => { setGrade(''); setFilter({ category: c.id, grade: null }); }}>
            {c.short}
          </button>
        ))}
      </div>
    </div>
  );
}
