const rows = [0, 1, 2, 3, 4];
const options = ['A', 'B', 'C', 'D', 'E'];
const correctIdx = [2, 0, 3, 1, 4];

export default function AmcHeroVisual() {
  return (
    <div className="hero-visual-flex">
      <div className="board" role="img" aria-label="Illustration of an AMC multiple-choice bubble answer sheet with a score readout">
        <div className="board-top">
          <div className="board-dots" aria-hidden="true"><i style={{ background: '#EF4444' }} /><i style={{ background: '#F59E0B' }} /><i style={{ background: '#10B981' }} /></div>
          <span className="board-tag">Live · AMC 10 Mock</span>
        </div>
        <svg className="lesson" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="amcBgGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#16233F" /><stop offset="1" stopColor="#0F1B33" />
            </linearGradient>
          </defs>
          <rect width="520" height="340" rx="16" fill="url(#amcBgGrad)" />

          <text x="34" y="42" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="15" fill="#E0EAFF">AMC 10 · Set B</text>
          <text x="34" y="60" fontFamily="Manrope,sans-serif" fontWeight="600" fontSize="11" fill="#93C5FD" opacity="0.85">25 questions · 75 minutes</text>

          {rows.map((ri) => {
            const y = 92 + ri * 42;
            return (
              <g key={ri}>
                <text x="34" y={y + 5} fontFamily="monospace" fontWeight="700" fontSize="12" fill="#BBD3FF" opacity="0.85">Q{ri + 1}</text>
                {options.map((opt, oi) => {
                  const cx = 74 + oi * 40;
                  const isCorrect = oi === correctIdx[ri];
                  return (
                    <g key={opt}>
                      <circle cx={cx} cy={y} r="14" fill={isCorrect ? '#FBBF24' : 'rgba(255,255,255,0.06)'} stroke="#93C5FD" strokeOpacity="0.4" strokeWidth="1.4" />
                      <text x={cx} y={y + 4} textAnchor="middle" fontSize="11" fontWeight={700} fill={isCorrect ? '#1E293B' : '#93C5FD'}>{opt}</text>
                    </g>
                  );
                })}
              </g>
            );
          })}

          {/* Score dial */}
          <rect x="330" y="86" width="156" height="220" rx="12" fill="#0B1120" stroke="#334155" strokeWidth="1.5" />
          <text x="346" y="112" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="12" fill="#93C5FD">Score Report</text>
          <text x="346" y="150" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="34" fill="#FBBF24">112.5</text>
          <text x="346" y="168" fontFamily="monospace" fontSize="10" fill="#64748B">/ 150 points</text>
          <rect x="346" y="184" width="120" height="6" rx="3" fill="#1E3A8A" />
          <rect x="346" y="184" width="90" height="6" rx="3" fill="#34D399" />
          <text x="346" y="206" fontFamily="monospace" fontSize="10" fill="#64748B">AIME index: 225</text>
          <circle cx="405" cy="250" r="34" fill="none" stroke="#334155" strokeWidth="8" />
          <circle cx="405" cy="250" r="34" fill="none" stroke="#F59E0B" strokeWidth="8" strokeDasharray="160 214" strokeLinecap="round" transform="rotate(-90 405 250)" />
          <text x="405" y="255" textAnchor="middle" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="13" fill="#fff">75%</text>
        </svg>
      </div>

      <div className="float-card float-card-highlight fc-1">
        <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#059669,#10B981)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
        </span>
        <div><b>Blank Beats a Bad Guess</b><small>Scoring rewards discipline</small></div>
      </div>
      <div className="float-card fc-2">
        <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#1E3A8A,#2563EB)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
        </span>
        <div><b>AMC 8 &amp; AMC 10</b><small>Grades 6–10</small></div>
      </div>
      <div className="float-card fc-3">
        <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#B45309,#F59E0B)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.5-3 5.7V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.3C6.2 13.5 5 11.4 5 9a7 7 0 0 1 7-7z" /><path d="M9 21h6" /></svg>
        </span>
        <div><b>Gateway to AIME</b><small>Then USAMO / USAJMO</small></div>
      </div>
    </div>
  );
}
