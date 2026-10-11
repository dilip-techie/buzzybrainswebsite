'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Atom, BookOpen, Check, GraduationCap, Monitor, Building2, Sigma, Trophy, Users, type LucideIcon } from 'lucide-react';
import { BATCHES, CATEGORIES, GRADE_OPTIONS, INSTRUCTOR, type CategoryId, type BatchMode } from './_data';
import { openLead, SET_FILTER_EVENT, type SetFilterDetail } from './events';

const CATEGORY_ICON: Record<CategoryId, LucideIcon> = {
  'a-level': Sigma,
  olympiad: Trophy,
  sat: GraduationCap,
  foundation: BookOpen,
};

export default function BatchExplorer() {
  const [category, setCategory] = useState<CategoryId | 'all'>('all');
  const [mode, setMode] = useState<BatchMode | 'all'>('all');
  const [grade, setGrade] = useState<number | null>(null);

  useEffect(() => {
    const onSet = (e: Event) => {
      const d = (e as CustomEvent<SetFilterDetail>).detail;
      setCategory((d.category as CategoryId) ?? 'all');
      setGrade(d.grade ?? null);
      setMode('all');
    };
    window.addEventListener(SET_FILTER_EVENT, onSet);
    return () => window.removeEventListener(SET_FILTER_EVENT, onSet);
  }, []);

  const visible = useMemo(
    () =>
      BATCHES.filter(
        (b) =>
          (category === 'all' || b.category === category) &&
          (mode === 'all' || b.mode === mode) &&
          (grade === null || b.grades.includes(grade))
      ),
    [category, mode, grade]
  );
  const filtered = category !== 'all' || mode !== 'all' || grade !== null;
  const reset = () => {
    setCategory('all');
    setMode('all');
    setGrade(null);
  };
  const countFor = (id: CategoryId) => BATCHES.filter((b) => b.category === id).length;

  return (
    <section className="bt-explorer" id="batches" aria-label="Browse batches">
      <div className="bt-bar">
        <div className="container bt-bar-inner">
          <div className="bt-chips-row" role="tablist" aria-label="Program">
            <button type="button" role="tab" aria-selected={category === 'all'} className={`bt-chip${category === 'all' ? ' is-active' : ''}`} onClick={() => setCategory('all')}>
              All <span>{BATCHES.length}</span>
            </button>
            {CATEGORIES.map((c) => (
              <button key={c.id} type="button" role="tab" aria-selected={category === c.id} className={`bt-chip${category === c.id ? ' is-active' : ''}`} onClick={() => setCategory(c.id)}>
                {c.short} <span>{countFor(c.id)}</span>
              </button>
            ))}
          </div>
          <div className="bt-bar-right">
            <div className="bt-seg" role="group" aria-label="Mode">
              {(['all', 'Online', 'Offline'] as const).map((m) => (
                <button key={m} type="button" aria-pressed={mode === m} className={mode === m ? 'is-active' : ''} onClick={() => setMode(m)}>
                  {m === 'all' ? 'Any mode' : m}
                </button>
              ))}
            </div>
            <label className="bt-grade-sel">
              <span className="sr-only">Grade</span>
              <select value={grade ?? ''} onChange={(e) => setGrade(e.target.value ? Number(e.target.value) : null)} aria-label="Filter by grade">
                <option value="">Any grade</option>
                {GRADE_OPTIONS.map((g) => (
                  <option key={g} value={g}>Grade {g}</option>
                ))}
              </select>
            </label>
          </div>
        </div>
      </div>

      <div className="container">
        <p className="bt-count" aria-live="polite">
          Showing <b>{visible.length}</b> of {BATCHES.length} batches
          {filtered && (
            <button type="button" className="bt-reset" onClick={reset}>Clear filters</button>
          )}
        </p>

        {visible.length === 0 ? (
          <div className="bt-empty">
            <h3>No batch matches those filters yet</h3>
            <p>We often start new batches based on demand. Tell us what you need and we&apos;ll let you know.</p>
            <button type="button" className="btn btn-primary" onClick={() => openLead()}>Ask for this batch</button>
            <button type="button" className="bt-reset" onClick={reset}>Clear filters</button>
          </div>
        ) : (
          <div className="bt-grid">
            {visible.map((b) => {
              const cat = CATEGORIES.find((c) => c.id === b.category)!;
              const Icon = b.id.includes('physics') ? Atom : CATEGORY_ICON[b.category];
              return (
                <article key={b.id} className="bt-card" style={{ ['--acc' as string]: cat.accent }}>
                  <div className="bt-card-head">
                    <span className="bt-ic"><Icon aria-hidden="true" /></span>
                    <div className="bt-badges">
                      {b.tag && <span className="bt-tag">{b.tag}</span>}
                      <span className={`bt-mode ${b.mode === 'Offline' ? 'off' : 'on'}`}>
                        {b.mode === 'Offline' ? <Building2 aria-hidden="true" /> : <Monitor aria-hidden="true" />} {b.mode}
                      </span>
                    </div>
                  </div>
                  <p className="bt-cat">{cat.label}</p>
                  <h3>{b.name}</h3>
                  <p className="bt-aud">{b.audience}</p>
                  <p className="bt-sum">{b.summary}</p>
                  <ul className="bt-topics">
                    {b.topics.map((t) => (
                      <li key={t}><Check aria-hidden="true" /> {t}</li>
                    ))}
                  </ul>
                  <div className="bt-meta">
                    <span><Users aria-hidden="true" /> Max 12 students</span>
                    <span>Led by <b>{INSTRUCTOR.name}</b></span>
                  </div>
                  <div className="bt-actions">
                    <button type="button" className="btn btn-primary" onClick={() => openLead(b.id)}>
                      Reserve free demo seat
                    </button>
                    <Link prefetch={false} href={b.href} className="bt-more">{b.linkLabel} →</Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
