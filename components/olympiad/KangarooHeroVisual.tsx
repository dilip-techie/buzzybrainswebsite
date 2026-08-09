const LEVELS = [
  { code: 'PE', label: 'Pre-Ecolier', color: '#2563EB' },
  { code: 'EC', label: 'Ecolier', color: '#10B981' },
  { code: 'BJ', label: 'Benjamin', color: '#F59E0B' },
  { code: 'CD', label: 'Cadet', color: '#7C3AED' },
  { code: 'JR', label: 'Junior', color: '#EC4899' },
  { code: 'ST', label: 'Student', color: '#0EA5E9' },
];

export default function KangarooHeroVisual() {
  return (
    <div className="hero-visual-flex">
      <div className="board" role="img" aria-label="Illustration of the six Math Kangaroo levels from Pre-Ecolier to Student">
        <div className="board-top">
          <div className="board-dots" aria-hidden="true"><i style={{ background: '#EF4444' }} /><i style={{ background: '#F59E0B' }} /><i style={{ background: '#10B981' }} /></div>
          <span className="board-tag">Live · Kangaroo Batch</span>
        </div>
        <svg className="lesson" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="kngBgGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#16233F" /><stop offset="1" stopColor="#0F1B33" />
            </linearGradient>
          </defs>
          <rect width="520" height="340" rx="16" fill="url(#kngBgGrad)" />

          <text x="34" y="46" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="16" fill="#E0EAFF">Six Levels, Grades 1–12</text>
          <text x="34" y="66" fontFamily="Manrope,sans-serif" fontWeight="600" fontSize="12" fill="#93C5FD" opacity="0.85">One playful, low-pressure format</text>

          {LEVELS.map((lvl, i) => {
            const col = i % 3;
            const row = Math.floor(i / 3);
            const cx = 100 + col * 160;
            const cy = 140 + row * 100;
            return (
              <g key={lvl.code}>
                <circle cx={cx} cy={cy} r="34" fill={lvl.color} opacity="0.9" />
                <circle cx={cx} cy={cy} r="34" fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="2" />
                <text x={cx} y={cy + 5} textAnchor="middle" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="13" fill="#fff">{lvl.code}</text>
                <text x={cx} y={cy + 52} textAnchor="middle" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="11" fill="#BBD3FF">{lvl.label}</text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="float-card float-card-highlight fc-1">
        <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#059669,#10B981)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
        </span>
        <div><b>Grades 1–12</b><small>A level for every age</small></div>
      </div>
      <div className="float-card fc-2">
        <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#1E3A8A,#2563EB)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" /></svg>
        </span>
        <div><b>World&apos;s Largest</b><small>By participation</small></div>
      </div>
      <div className="float-card fc-3">
        <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#B45309,#F59E0B)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.5-3 5.7V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.3C6.2 13.5 5 11.4 5 9a7 7 0 0 1 7-7z" /><path d="M9 21h6" /></svg>
        </span>
        <div><b>A Great First Step</b><small>Before AMC / IOQM</small></div>
      </div>
    </div>
  );
}
