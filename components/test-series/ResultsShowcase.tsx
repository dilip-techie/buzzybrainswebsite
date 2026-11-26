'use client';

import { useState } from 'react';

export interface TopScorer {
  initials: string;
  /** Star rating out of 5 (default 5). Use 0 to hide the stars. */
  rating?: number;
  /** Optional student photo (path under /public); falls back to initials. */
  photo?: string;
  name: string;
  /** Numeric value used for ranking and the progress bar (a percentage). */
  score: number;
  /** Big text on the card; defaults to `score` as a percentage. Use for
   * grade-count results such as "9 A* Grades". */
  headline?: string;
  /** Text next to the headline; defaults to "in Boards {year}". */
  caption?: string;
  year: string;
  stream: string;
  quote: string;
}

export interface ScorerGroup {
  /** Tab label and card caption, e.g. "Class 12". */
  label: string;
  board: string;
  scorers: TopScorer[];
  /** Override the four headline stats (needed when results are not percentages). */
  stats?: { value: string; label: string }[];
  /** Badge on the leading card(s); defaults to "TOP SCORE". */
  topLabel?: string;
}

export interface ResultsShowcaseProps {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  groups: ScorerGroup[];
  footnote?: string;
}

const STREAM_TONE: Record<string, string> = {
  Science: 'bg-[#5E7FB5]/15 text-[#2E4F86]',
  Commerce: 'bg-[#C9A227]/20 text-[#7A5F0B]',
  Humanities: 'bg-[#B23A2E]/10 text-[#8F2A20]',
};

function Stars({ rating = 5 }: { rating?: number }) {
  if (rating <= 0) return <span />;
  const full = Math.min(5, Math.round(rating));
  return (
    <span className="tracking-[0.15em] text-[#C9A227]" aria-label={`${full} out of 5 stars`}>
      {'★'.repeat(full)}
      <span className="text-[#0E2148]/20">{'★'.repeat(5 - full)}</span>
    </span>
  );
}

/** Class-12 results wall: headline stats, a ranked score board, then the
 * student testimonials. All numbers are derived from `scorers` so the stats
 * can never drift from the cards. */
export default function ResultsShowcase({
  eyebrow = 'BOARDS 2026 RESULTS',
  title = 'Results that speak louder than promises.',
  subtitle = 'CBSE students who trained on the BuzzyBrains test series — in their own words.',
  groups,
  footnote = 'Scores and testimonials are from the students featured above, shared with their consent. Individual results vary with effort and starting level.',
}: ResultsShowcaseProps) {
  const [active, setActive] = useState(0);
  const group = groups[active] ?? groups[0];
  const scorers = group.scorers;
  const sorted = [...scorers].sort((a, b) => b.score - a.score);
  const top = sorted[0];
  const avg = scorers.reduce((s, x) => s + x.score, 0) / scorers.length;
  const above95 = scorers.filter((x) => x.score >= 95).length;
  const above90 = scorers.filter((x) => x.score >= 90).length;

  const stats = group.stats ?? [
    { value: `${top.score.toFixed(1)}%`, label: `Top score · ${top.name}` },
    { value: `${avg.toFixed(1)}%`, label: `Average of featured ${group.label} students` },
    { value: `${above95} of ${scorers.length}`, label: 'Scored 95% or above' },
    { value: `${above90} of ${scorers.length}`, label: 'Scored 90% or above' },
  ];

  return (
    <section id="ts-results" className="relative overflow-hidden bg-[#0E2148] py-24 text-[#FAF7EF]">
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] paper-ruled" />
      <div
        className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(201,162,39,0.22), transparent 70%)' }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <p className="reveal font-ledger text-[12px] tracking-[0.25em] text-[#E4C158]">{eyebrow}</p>
        <h2 className="reveal mt-4 max-w-3xl font-display text-[36px] font-bold leading-tight sm:text-[48px]" data-delay="1">
          {title}
        </h2>
        <p className="reveal mt-4 max-w-2xl text-[16px] leading-relaxed text-[#FAF7EF]/70" data-delay="2">
          {subtitle}
        </p>

        {groups.length > 1 && (
          <div role="tablist" aria-label="Results by class" className="reveal mt-10 inline-flex flex-wrap gap-1 rounded-sm border border-[#C9A227]/40 p-1" data-delay="2">
            {groups.map((g, i) => (
              <button
                key={g.label}
                type="button"
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`rounded-sm px-6 py-2.5 font-ledger text-[13px] font-bold tracking-wide transition-colors ${
                  i === active ? 'bg-[#C9A227] text-[#0E2148]' : 'text-[#FAF7EF]/75 hover:text-[#E4C158]'
                }`}
              >
                {g.label} · {g.board}
              </button>
            ))}
          </div>
        )}

        {/* Headline stats */}
        <dl className="reveal mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-[#C9A227]/30 bg-[#C9A227]/30 lg:grid-cols-4" data-delay="2">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#0E2148] px-6 py-8">
              <dt className="font-display text-[40px] font-bold leading-none text-[#E4C158] sm:text-[52px]">{s.value}</dt>
              <dd className="mt-3 font-ledger text-[12px] leading-snug tracking-wide text-[#FAF7EF]/65">{s.label}</dd>
            </div>
          ))}
        </dl>

        {/* Score board + testimonials */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((s, i) => (
            <figure
              key={`${group.label}-${s.name}`}
              className="reveal flex flex-col rounded-sm bg-[#FAF7EF] p-7 text-[#0E2148] shadow-xl"
              data-delay={String(i % 3)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  {s.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={s.photo}
                      alt={`${s.name}, ${group.label} ${group.board} student`}
                      width={56}
                      height={56}
                      loading="lazy"
                      className="h-14 w-14 shrink-0 rounded-full border-2 border-[#C9A227] object-cover"
                    />
                  ) : (
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-[#0E2148] font-ledger text-[13px] font-bold text-[#E4C158]">
                      {s.initials}
                    </span>
                  )}
                  <div>
                    <figcaption className="font-display text-[16px] font-bold">{s.name}</figcaption>
                    <p className="font-ledger text-[12px] text-[#5E7FB5]">{group.label} {group.board}</p>
                  </div>
                </div>
                {s.score === top.score && (
                  <span className="rotate-3 rounded-sm border-2 border-[#B23A2E] px-2 py-1 font-ledger text-[11px] font-bold tracking-wider text-[#B23A2E]">
                    {group.topLabel ?? 'TOP SCORE'}
                  </span>
                )}
              </div>

              <div className="mt-6 flex flex-wrap items-end gap-x-3 gap-y-1">
                <span className={`font-display font-bold leading-none text-[#0E2148] ${(s.headline ?? '').length > 14 ? 'text-[30px]' : 'text-[44px] sm:text-[48px]'}`}>{s.headline ?? `${s.score.toFixed(1)}%`}</span>
                <span className="pb-2 font-ledger text-[12px] tracking-wide text-[#0E2148]/55">{s.caption ?? `in Boards ${s.year}`}</span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-[#0E2148]/10">
                <div className="h-full rounded-full bg-[#C9A227]" style={{ width: `${s.score}%` }} />
              </div>

              <div className="mt-4 flex items-center justify-between">
                <Stars rating={s.rating} />
                <span className={`rounded-full px-3 py-1 font-ledger text-[11px] font-bold ${STREAM_TONE[s.stream] ?? STREAM_TONE.Science}`}>
                  {s.stream}
                </span>
              </div>

              <blockquote className="mt-5 flex-1 text-[14.5px] leading-relaxed text-[#0E2148]/80">
                &ldquo;{s.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>

        <div className="reveal mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-[#FAF7EF]/15 pt-8">
          <p className="max-w-2xl font-ledger text-[12px] leading-relaxed text-[#FAF7EF]/50">{footnote}</p>
          <a
            href="#ts-pricing"
            className="rounded-sm bg-[#C9A227] px-7 py-3.5 text-[14px] font-bold tracking-wide text-[#0E2148] transition-transform hover:-translate-y-0.5"
          >
            Be next year&rsquo;s result
          </a>
        </div>
      </div>
    </section>
  );
}
