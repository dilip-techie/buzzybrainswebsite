// Lightweight category metadata, kept separate from posts.ts (which also
// carries every post's full article body) so client components that only
// need category labels/styling don't pull in the heavy post content.

export type BlogCategory =
  | 'iit-jee'
  | 'neet'
  | 'foundation'
  | 'olympiad'
  | 'maths-tuition'
  | 'sat-exam'
  | 'ap-exam'
  | 'igcse'
  | 'ib'
  | 'clat'
  | 'ivy-colleges'
  | 'coding'
  | 'commerce'
  | 'ipmat'
  | 'cat'
  | 'coding-olympiad'
  | 'board-exams';

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  'iit-jee': 'IIT-JEE',
  neet: 'NEET',
  foundation: 'Foundation',
  olympiad: 'Olympiad',
  'maths-tuition': 'Maths Tuition',
  'sat-exam': 'SAT Exam',
  'ap-exam': 'AP Exam',
  igcse: 'IGCSE',
  ib: 'IB',
  clat: 'CLAT',
  'ivy-colleges': 'Ivy Colleges',
  coding: 'Code Ninja / Coding',
  commerce: 'Commerce',
  ipmat: 'IPMAT',
  cat: 'CAT',
  'coding-olympiad': 'Coding Olympiads',
  'board-exams': 'Board Exam Test Series',
};

/** Where each cluster's pillar guide lives. */
export const CATEGORY_PILLAR_HREF: Record<BlogCategory, string> = {
  'iit-jee': '/12th-board-pcm',
  neet: '/12th-board-pcb',
  foundation: '/foundation',
  olympiad: '/olympiads',
  'maths-tuition': '/olympiad-math',
  'sat-exam': '/sat-exam',
  'ap-exam': '/ap-exam',
  igcse: '/international-boards#igcse',
  ib: '/international-boards#ib',
  clat: '/clat-exam',
  'ivy-colleges': '/ivy-league-counselling',
  coding: '/coding-lab',
  commerce: '/commerce-tuitions',
  ipmat: '/ipmat-exam',
  cat: '/cat-exam',
  'coding-olympiad': '/coding-lab',
  'board-exams': '/test-series',
};

export const CATEGORY_STYLE: Record<BlogCategory, { gradient: string; glow: string; solid: string }> = {
  'iit-jee': { gradient: 'linear-gradient(135deg,#1E3A8A,#2563EB)', glow: '37,99,235', solid: '#2563EB' },
  neet: { gradient: 'linear-gradient(135deg,#991B1B,#EF4444)', glow: '239,68,68', solid: '#EF4444' },
  commerce: { gradient: 'linear-gradient(135deg,#92400E,#F59E0B)', glow: '245,158,11', solid: '#F59E0B' },
  foundation: { gradient: 'linear-gradient(135deg,#065F46,#10B981)', glow: '16,185,129', solid: '#10B981' },
  olympiad: { gradient: 'linear-gradient(135deg,#6D28D9,#A855F7)', glow: '124,58,237', solid: '#A855F7' },
  'maths-tuition': { gradient: 'linear-gradient(135deg,#0369A1,#0EA5E9)', glow: '14,165,233', solid: '#0EA5E9' },
  'sat-exam': { gradient: 'linear-gradient(135deg,#0F766E,#14B8A6)', glow: '20,184,166', solid: '#14B8A6' },
  'ap-exam': { gradient: 'linear-gradient(135deg,#3730A3,#6366F1)', glow: '99,102,241', solid: '#6366F1' },
  igcse: { gradient: 'linear-gradient(135deg,#9D174D,#EC4899)', glow: '236,72,153', solid: '#EC4899' },
  ib: { gradient: 'linear-gradient(135deg,#155E75,#06B6D4)', glow: '6,182,212', solid: '#06B6D4' },
  clat: { gradient: 'linear-gradient(135deg,#9A3412,#EA580C)', glow: '234,88,12', solid: '#EA580C' },
  'ivy-colleges': { gradient: 'linear-gradient(135deg,#854D0E,#CA8A04)', glow: '202,138,4', solid: '#CA8A04' },
  coding: { gradient: 'linear-gradient(135deg,#334155,#0F172A)', glow: '51,65,85', solid: '#334155' },
  ipmat: { gradient: 'linear-gradient(135deg,#9F1239,#E11D48)', glow: '225,29,72', solid: '#E11D48' },
  cat: { gradient: 'linear-gradient(135deg,#86198F,#C026D3)', glow: '192,38,211', solid: '#C026D3' },
  'coding-olympiad': { gradient: 'linear-gradient(135deg,#3F6212,#65A30D)', glow: '101,163,13', solid: '#65A30D' },
  'board-exams': { gradient: 'linear-gradient(135deg,#0E2148,#C9A227)', glow: '201,162,39', solid: '#C9A227' },
};
