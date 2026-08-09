export default function IoqmHeroVisual() {
  const rows = [0, 1, 2, 3];
  const digits = ['4', '1', '7', '2', '9'];

  return (
    <div className="hero-visual-flex">
      <div className="board" role="img" aria-label="Illustration of an IOQM integer-answer sheet with a rank card and score trend">
        <div className="board-top">
          <div className="board-dots" aria-hidden="true"><i style={{ background: '#EF4444' }} /><i style={{ background: '#F59E0B' }} /><i style={{ background: '#10B981' }} /></div>
          <span className="board-tag">Live · IOQM Mock</span>
        </div>
        <svg className="lesson" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="ioqmBgGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#16233F" /><stop offset="1" stopColor="#0F1B33" />
            </linearGradient>
            <linearGradient id="ioqmScreenGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#1D4ED8" /><stop offset="1" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          <rect width="520" height="340" rx="16" fill="url(#ioqmBgGrad)" />

          {/* Answer sheet panel */}
          <rect x="34" y="30" width="230" height="188" rx="14" fill="url(#ioqmScreenGrad)" opacity="0.92" />
          <rect x="34" y="30" width="230" height="188" rx="14" fill="none" stroke="#93C5FD" strokeOpacity="0.35" strokeWidth="1.5" />
          <text x="52" y="58" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="14" fill="#E0EAFF">IOQM · Set 4</text>
          {rows.map((r, ri) => (
            <g key={r}>
              <text x="52" y={86 + ri * 32} fontFamily="monospace" fontWeight="700" fontSize="12" fill="#BBD3FF" opacity="0.85">Q{ri + 1}</text>
              {[0, 1, 2].map((ci) => {
                const isFilled = ri < 3 && ci === (ri + 1) % 3;
                return (
                  <g key={ci}>
                    <rect x={80 + ci * 34} y={72 + ri * 32} width="24" height="24" rx="5" fill={isFilled ? '#FBBF24' : 'rgba(255,255,255,0.08)'} stroke="#93C5FD" strokeOpacity="0.4" />
                    <text x={92 + ci * 34} y={89 + ri * 32} textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="12" fill={isFilled ? '#1E293B' : '#93C5FD'}>
                      {digits[(ri + ci) % digits.length]}
                    </text>
                  </g>
                );
              })}
            </g>
          ))}

          {/* Rank ring */}
          <circle cx="415" cy="72" r="30" fill="#1E3A8A" />
          <ellipse cx="415" cy="72" rx="46" ry="12" fill="none" stroke="#F59E0B" strokeWidth="3" transform="rotate(-18 415 72)" />
          <text x="415" y="77" textAnchor="middle" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="14" fill="#FDE68A">#4</text>

          {/* Score trend */}
          <text x="34" y="248" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="13" fill="#BBD3FF" opacity="0.85">Score trend</text>
          <polyline points="34,300 90,270 140,286 190,240 240,258 264,220" fill="none" stroke="#34D399" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="264" cy="220" r="6" fill="#34D399" />

          {/* Trophy */}
          <path d="M468 96 l14 -26 14 26 -8 4 v14 h-12 v-14 z" fill="#F8FAFC" transform="rotate(24 482 86)" />
          <path d="M480 116 q4 12 -2 20 q-2 -10 -8 -14 z" fill="#F59E0B" transform="rotate(24 476 122)" />

          {/* Stats panel */}
          <rect x="304" y="140" width="188" height="152" rx="10" fill="#0B1120" stroke="#334155" strokeWidth="1.5" />
          <text x="318" y="164" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="12" fill="#93C5FD">Batch Rank Sheet</text>
          <rect x="318" y="180" width="52" height="6" rx="3" fill="#60A5FA" />
          <text x="378" y="186" fontFamily="monospace" fontSize="10" fill="#64748B">Algebra</text>
          <rect x="318" y="198" width="140" height="6" rx="3" fill="#F59E0B" />
          <text x="318" y="216" fontFamily="monospace" fontSize="10" fill="#64748B">Number Theory</text>
          <rect x="318" y="228" width="90" height="6" rx="3" fill="#34D399" />
          <text x="318" y="246" fontFamily="monospace" fontSize="10" fill="#64748B">Combinatorics</text>
          <rect x="318" y="258" width="70" height="6" rx="3" fill="#A78BFA" />
          <text x="318" y="276" fontFamily="monospace" fontSize="10" fill="#64748B">Geometry</text>
        </svg>
      </div>

      <div className="float-card float-card-highlight fc-1">
        <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#059669,#10B981)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
        </span>
        <div><b>No Negative Marking</b><small>Attempt every question you can</small></div>
      </div>
      <div className="float-card fc-2">
        <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#1E3A8A,#2563EB)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
        </span>
        <div><b>30 Qs · 3 Hrs</b><small>Integer answers only</small></div>
      </div>
      <div className="float-card fc-3">
        <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#B45309,#F59E0B)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.5-3 5.7V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.3C6.2 13.5 5 11.4 5 9a7 7 0 0 1 7-7z" /><path d="M9 21h6" /></svg>
        </span>
        <div><b>Gateway to INMO</b><small>Then IMOTC → IMO</small></div>
      </div>
    </div>
  );
}
