const LEVELS = ['Primary', 'Sub-Jr', 'Junior', 'Inter', 'Senior'];

export default function NmtcHeroVisual() {
  return (
    <div className="hero-visual-flex">
      <div className="board" role="img" aria-label="Illustration of an NMTC Part B written solution sheet with a five-level progress ladder">
        <div className="board-top">
          <div className="board-dots" aria-hidden="true"><i style={{ background: '#EF4444' }} /><i style={{ background: '#F59E0B' }} /><i style={{ background: '#10B981' }} /></div>
          <span className="board-tag">Live · NMTC Part B</span>
        </div>
        <svg className="lesson" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="nmtcBgGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#16233F" /><stop offset="1" stopColor="#0F1B33" />
            </linearGradient>
            <linearGradient id="nmtcScreenGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#1D4ED8" /><stop offset="1" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          <rect width="520" height="340" rx="16" fill="url(#nmtcBgGrad)" />

          {/* Written solution panel */}
          <rect x="34" y="30" width="240" height="200" rx="14" fill="url(#nmtcScreenGrad)" opacity="0.92" />
          <rect x="34" y="30" width="240" height="200" rx="14" fill="none" stroke="#93C5FD" strokeOpacity="0.35" strokeWidth="1.5" />
          <text x="52" y="58" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="14" fill="#E0EAFF">Part B · Q4</text>
          {[0, 1, 2, 3, 4].map((row) => (
            <rect key={row} x="52" y={78 + row * 26} width={row % 2 === 0 ? 200 : 160} height="4" rx="2" fill="#BBD3FF" opacity={row % 2 === 0 ? 0.55 : 0.35} />
          ))}
          <circle cx="90" cy="212" r="14" fill="#34D399" />
          <path d="M83 212l5 5 10-10" stroke="#0F1B33" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="112" y="217" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="12" fill="#D1FAE5">Full marks</text>

          {/* Level ladder */}
          <text x="304" y="52" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="12" fill="#93C5FD">Level Ladder</text>
          {LEVELS.map((lvl, i) => {
            const y = 70 + i * 40;
            const active = i === 2;
            return (
              <g key={lvl}>
                <rect x="304" y={y} width="188" height="30" rx="8" fill={active ? '#F59E0B' : 'rgba(255,255,255,0.05)'} stroke={active ? '#FBBF24' : '#334155'} strokeWidth="1.2" />
                <text x="318" y={y + 20} fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="12" fill={active ? '#1E293B' : '#93C5FD'}>{lvl}</text>
                {active && <text x="460" y={y + 20} textAnchor="end" fontFamily="monospace" fontWeight="800" fontSize="11" fill="#1E293B">YOU</text>}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="float-card float-card-highlight fc-1">
        <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#059669,#10B981)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
        </span>
        <div><b>5 Levels, Class 5–12</b><small>One olympiad, every age</small></div>
      </div>
      <div className="float-card fc-2">
        <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#1E3A8A,#2563EB)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M9 15l2 2 4-4" /></svg>
        </span>
        <div><b>Part A + Part B</b><small>Objective + written proof</small></div>
      </div>
      <div className="float-card fc-3">
        <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#B45309,#F59E0B)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.5-3 5.7V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.3C6.2 13.5 5 11.4 5 9a7 7 0 0 1 7-7z" /><path d="M9 21h6" /></svg>
        </span>
        <div><b>Feeds IOQM &amp; INMO</b><small>Shared proof-writing skill</small></div>
      </div>
    </div>
  );
}
