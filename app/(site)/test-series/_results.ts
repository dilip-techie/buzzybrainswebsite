import type { ScorerGroup, TopScorer } from '@/components/test-series/ResultsShowcase';
import { scorerGroups as cbse } from '../cbse-board-test-series/_data';
import { scorerGroups as icse } from '../icse-board-test-series/_data';
import { scorerGroups as maharashtra } from '../maharashtra-board-test-series/_data';
import { scorerGroups as igcse } from '../igcse-cambridge-test-series/_data';
import { scorerGroups as ib } from '../ib-test-series/_data';

/** Every per-board result group, in the order the tabs appear. The hub page
 * reuses each board page's own data, so a result can never differ between
 * the hub and the board page. */
const boardGroups: ScorerGroup[] = [...cbse, ...icse, ...maharashtra, ...igcse, ...ib];

const SHORT_BOARD: Record<string, string> = {
  CBSE: 'CBSE',
  ICSE: 'ICSE',
  ISC: 'ISC',
  'Maharashtra HSC': 'HSC',
  IGCSE: 'IGCSE',
  Programme: 'IB DP',
};

const ranked = (g: ScorerGroup) => [...g.scorers].sort((a, b) => b.score - a.score);

function spotlight(g: ScorerGroup, s: TopScorer): TopScorer {
  return {
    ...s,
    caption: `${g.label} ${g.board} · ${s.year}`,
    stream: SHORT_BOARD[g.board] ?? g.board,
  };
}

/** Best student from every board group, plus the runner-up from the two CBSE
 * groups (9 cards, a clean 3x3 grid). */
const bestOfEach = boardGroups.map((g) => spotlight(g, ranked(g)[0]));
const runnersUp = cbse.map((g) => spotlight(g, ranked(g)[1]));
const spotlights = [...bestOfEach, ...runnersUp];

// Percentage-based groups only (IGCSE and IB report grades / points).
const pctStudents = boardGroups.filter((g) => !g.scorers[0].headline).flatMap((g) => g.scorers);
const topPct = Math.max(...pctStudents.map((s) => s.score));
const atTop = pctStudents.filter((s) => s.score === topPct).length;
const above95 = pctStudents.filter((s) => s.score >= 95).length;
const totalStudents = boardGroups.reduce((n, g) => n + g.scorers.length, 0);

export const hubGroups: ScorerGroup[] = [
  {
    label: 'Top results',
    board: 'All boards',
    topLabel: 'TOP RESULT',
    scorers: spotlights,
    stats: [
      { value: `${topPct.toFixed(1)}%`, label: `Top Indian-board score · reached by ${atTop} students` },
      { value: `${above95} of ${pctStudents.length}`, label: 'Indian-board students featured at 95% or above' },
      { value: '9 A* · 45/45', label: 'Best Cambridge IGCSE and IB Diploma results' },
      { value: `${totalStudents}`, label: 'Students featured across 5 boards' },
    ],
  },
  ...boardGroups,
];

export const hubHeroStats = [
  { value: `${topPct.toFixed(1)}%`, label: 'Top board score, 2026' },
  { value: `${totalStudents}`, label: 'Featured results across 5 boards' },
  { value: '8', label: 'Full-length papers per subject' },
];
