'use client';

import { Suspense, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { MessageCircle } from 'lucide-react';

type ExamKey = 'neet' | 'jee';

interface Band {
  label: string;
  min: number;
  max: number;
  outcome: string;
}

/** Bands are ported verbatim from the two source guides so this tool never
 * disagrees with the site's own published content — see the "Recommended
 * reading" links below for the full reasoning behind each band. */
const NEET_BANDS: Band[] = [
  {
    label: '650+',
    min: 650,
    max: 720,
    outcome: 'Government MBBS at a broad range of colleges realistically in reach, including several well-regarded ones.',
  },
  {
    label: '620–650',
    min: 620,
    max: 649,
    outcome:
      'Government MBBS remains realistic, particularly via State Quota and reservation categories, though options narrow at the more sought-after colleges.',
  },
  {
    label: '550–620',
    min: 550,
    max: 619,
    outcome:
      'Government MBBS becomes more state- and category-dependent; government BDS and AYUSH courses become strong, common alternatives.',
  },
  {
    label: 'Below 550',
    min: 0,
    max: 549,
    outcome:
      'Private/deemed MBBS (significantly higher fees) or AYUSH/BDS become the more likely primary paths, category and state depending.',
  },
];

const JEE_BANDS: Band[] = [
  {
    label: '99+ (very high)',
    min: 99,
    max: 100,
    outcome: 'Competitive CSE / AI-DS at top, established NITs realistically in reach.',
  },
  {
    label: '~95',
    min: 95,
    max: 98.99,
    outcome: 'Core branches at established NITs; CSE at several IIITs; strong GFTI options.',
  },
  {
    label: '~90',
    min: 90,
    max: 94.99,
    outcome: 'IIITs (more variable), GFTIs, and CSAB special-round options become the more realistic path.',
  },
  {
    label: 'Below ~85',
    min: 0,
    max: 89.99,
    outcome: 'Government options narrow further; private/deemed universities and state options more likely primary paths.',
  },
];

const EXAM_CONFIG: Record<
  ExamKey,
  {
    label: string;
    bands: Band[];
    max: number;
    unit: string;
    placeholder: string;
    guideHref: string;
    guideLabel: string;
    programHref: string;
    programLabel: string;
    color: string;
  }
> = {
  neet: {
    label: 'NEET',
    bands: NEET_BANDS,
    max: 720,
    unit: 'out of 720',
    placeholder: 'e.g. 610',
    guideHref: '/blog/neet-score-honest-mbbs-seat-map',
    guideLabel: 'NEET Score to MBBS Seat: An Honest Rank-to-College Map',
    programHref: '/12th-board-pcb',
    programLabel: 'NEET Program',
    color: '#EF4444',
  },
  jee: {
    label: 'JEE Main',
    bands: JEE_BANDS,
    max: 100,
    unit: 'percentile',
    placeholder: 'e.g. 92.5',
    guideHref: '/blog/95-percentile-jee-main-honest-college-map',
    guideLabel: '95 Percentile in JEE Main: The Honest College Map',
    programHref: '/12th-board-pcm',
    programLabel: 'IIT-JEE Program',
    color: '#2563EB',
  },
};

const FAQS = [
  {
    question: 'How accurate is this rank predictor?',
    answer:
      "It's a directional estimate based on the general pattern from recent years, not an official or guaranteed number — actual cutoffs shift every year by category, state and applicant pool. Always confirm with official JoSAA/CSAB (JEE) or MCC/state counselling (NEET) data before making a final decision.",
  },
  {
    question: 'Why does this tool give a band instead of an exact rank?',
    answer:
      "Because an exact score-to-rank mapping doesn't exist until the year's official results and normalization are published. A band is the honest version of what any predictor can actually tell you before that — precise-sounding numbers before then are guesses dressed up as data.",
  },
  {
    question: 'Does this account for category (SC/ST/OBC/EWS) reservation?',
    answer:
      'No — this tool shows the general-category pattern only. Reservation categories shift effective cutoffs substantially, so treat this as a starting reference point, not a category-specific prediction.',
  },
];

function findBand(bands: Band[], value: number): Band | null {
  return bands.find((b) => value >= b.min && value <= b.max) ?? null;
}

function RankPredictorInner() {
  const searchParams = useSearchParams();
  const [exam, setExam] = useState<ExamKey>('neet');
  const [rawValue, setRawValue] = useState('');
  const config = EXAM_CONFIG[exam];

  // Lets the Score Calculator hand off directly into a prefilled result
  // (?exam=neet&score=610) instead of making a student re-type it.
  useEffect(() => {
    const examParam = searchParams.get('exam');
    const scoreParam = searchParams.get('score');
    if (examParam === 'neet' || examParam === 'jee') setExam(examParam);
    if (scoreParam && !Number.isNaN(Number(scoreParam))) setRawValue(scoreParam);
  }, [searchParams]);

  const numericValue = rawValue.trim() === '' ? null : Number(rawValue);
  const isValid = numericValue !== null && !Number.isNaN(numericValue) && numericValue >= 0 && numericValue <= config.max;
  const matchedBand = useMemo(() => (isValid ? findBand(config.bands, numericValue as number) : null), [isValid, numericValue, config.bands]);

  function switchExam(next: ExamKey) {
    setExam(next);
    setRawValue('');
  }

  const waMessage = matchedBand
    ? `Hi! My expected ${config.label} score/percentile is ${rawValue}, in the "${matchedBand.label}" band. Can I get personalized guidance on realistic college options?`
    : `Hi! I'd like personalized guidance on realistic ${config.label} college options.`;
  const waHref = `https://wa.me/919850570525?text=${encodeURIComponent(waMessage)}`;

  return (
    <main className="bb-landing bb-page-shell">
      <section className="hero" style={{ paddingBottom: 32 }}>
        <div className="container article-shell">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb">
            <Link prefetch={false} href="/">Home</Link>
            <span>/</span>
            <Link prefetch={false} href="/resource-centre">Resource Centre</Link>
            <span>/</span>
            <span>Rank Predictor</span>
          </nav>
          <span className="eyebrow">Free Tool</span>
          <h1 style={{ fontSize: 'clamp(30px,4vw,44px)' }}>NEET & JEE Main Rank + College Predictor</h1>
          <p className="lede" style={{ maxWidth: 680, marginTop: 6 }}>
            An honest, banded estimate — not a fake precise number. Enter your expected score to see the general pattern from recent years.
          </p>
        </div>
      </section>

      <section className="bb-section" style={{ paddingTop: 0 }}>
        <div className="container article-shell">
          <div className="predictor-tabs" role="tablist" aria-label="Choose exam">
            {(Object.keys(EXAM_CONFIG) as ExamKey[]).map((key) => (
              <button
                type="button"
                key={key}
                role="tab"
                aria-selected={exam === key}
                className={`blog-filter-tab predictor-tab${exam === key ? ' active' : ''}`}
                onClick={() => switchExam(key)}
              >
                {EXAM_CONFIG[key].label}
              </button>
            ))}
          </div>

          <div className="predictor-input-row">
            <label htmlFor="predictor-score" className="predictor-label">
              Your expected {config.label} {config.unit}
            </label>
            <input
              id="predictor-score"
              type="number"
              inputMode="decimal"
              min={0}
              max={config.max}
              step={exam === 'jee' ? 0.01 : 1}
              value={rawValue}
              onChange={(e) => setRawValue(e.target.value)}
              placeholder={config.placeholder}
              className="predictor-input"
            />
          </div>
          {rawValue.trim() !== '' && !isValid && (
            <p className="predictor-error">Enter a number between 0 and {config.max}.</p>
          )}

          {matchedBand && (
            <div className="answer-block" style={{ borderLeftColor: config.color }}>
              <strong>{config.label} {matchedBand.label}:</strong> {matchedBand.outcome}
            </div>
          )}

          <div className="table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>{config.label} Band</th>
                  <th>General Pattern of Realistic Outcomes</th>
                </tr>
              </thead>
              <tbody>
                {config.bands.map((band) => (
                  <tr key={band.label} className={matchedBand?.label === band.label ? 'predictor-row-active' : undefined}>
                    <td>{band.label}</td>
                    <td>{band.outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ color: 'var(--text-3)', fontSize: 13, marginTop: -12, marginBottom: 32 }}>
            General-category pattern from recent years — not a guaranteed outcome. Always confirm with official{' '}
            {exam === 'jee' ? 'JoSAA/CSAB' : 'MCC/state counselling'} data before making a decision.
          </p>

          <div className="mid-article-cta" style={{ margin: '0 0 40px' }}>
            <span className="mid-article-cta-icon" style={{ background: config.color }}>
              <MessageCircle size={20} />
            </span>
            <div className="mid-article-cta-body">
              <p className="mid-article-cta-title">Want a read that accounts for your category and state?</p>
              <p className="mid-article-cta-text">
                Talk to a {config.programLabel} mentor directly — no form, just a quick WhatsApp chat.
              </p>
            </div>
            <div className="mid-article-cta-actions">
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn btn-green">
                <MessageCircle size={17} />
                Chat on WhatsApp
              </a>
              <Link prefetch={false} href={config.programHref} className="mid-article-cta-link">
                Explore {config.programLabel} &rarr;
              </Link>
            </div>
          </div>

          <div style={{ marginBottom: 40 }}>
            <span className="article-toc-label" style={{ display: 'block', marginBottom: 12 }}>Recommended reading</span>
            <Link prefetch={false} href={config.guideHref} className="chip chip-link">
              {config.guideLabel}
            </Link>
          </div>

          <div className="article-faq">
            <h2>Frequently asked questions</h2>
            {FAQS.map((item) => (
              <div className="article-faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <Link prefetch={false} href="/resource-centre" className="chip chip-link">&larr; All free tools</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function RankPredictorPage() {
  return (
    <Suspense fallback={null}>
      <RankPredictorInner />
    </Suspense>
  );
}
