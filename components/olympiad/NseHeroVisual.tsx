const COLORS = ['#2563EB', '#10B981', '#F59E0B', '#7C3AED'];

/** Hero visual for the NSEP / NSEC / NSEB pages: the Indian olympiad pathway. */
export default function NseHeroVisual({
  subject,
  pathway,
}: {
  subject: string;
  pathway: { code: string; label: string }[];
}) {
  return (
    <div className="hero-visual-flex">
      <div className="board" role="img" aria-label={`The ${subject} olympiad pathway: ${pathway.map((p) => p.code).join(', then ')}`}>
        <div className="board-top">
          <div className="board-dots" aria-hidden="true">
            <i style={{ background: '#EF4444' }} />
            <i style={{ background: '#F59E0B' }} />
            <i style={{ background: '#10B981' }} />
          </div>
          <span className="board-tag">Live · {subject} Olympiad Batch</span>
        </div>
        <svg className="lesson" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="nseBgGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#16233F" />
              <stop offset="1" stopColor="#0F1B33" />
            </linearGradient>
          </defs>
          <rect width="520" height="340" rx="16" fill="url(#nseBgGrad)" />
          <text x="34" y="46" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="16" fill="#E0EAFF">
            The {subject} Olympiad Pathway
          </text>
          <text x="34" y="66" fontFamily="Manrope,sans-serif" fontWeight="600" fontSize="12" fill="#93C5FD" opacity="0.85">
            From the first stage to the international team
          </text>

          {pathway.map((p, i) => {
            const y = 92 + i * 60;
            return (
              <g key={p.code}>
                {i > 0 && <line x1="62" y1={y - 22} x2="62" y2={y - 4} stroke="#fff" strokeOpacity="0.3" strokeWidth="2" />}
                <circle cx="62" cy={y + 16} r="16" fill={COLORS[i % COLORS.length]} />
                <text x="62" y={y + 21} textAnchor="middle" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="13" fill="#fff">
                  {i + 1}
                </text>
                <text x="96" y={y + 14} fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="16" fill="#fff">
                  {p.code}
                </text>
                <text x="96" y={y + 32} fontFamily="Manrope,sans-serif" fontWeight="600" fontSize="11.5" fill="#BBD3FF">
                  {p.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="float-card float-card-highlight fc-1">
        <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#059669,#10B981)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </span>
        <div>
          <b>Class 11–12</b>
          <small>Syllabus level</small>
        </div>
      </div>
      <div className="float-card fc-3">
        <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#B45309,#F59E0B)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="5" />
            <path d="M9 13l-1.5 8L12 18l4.5 3L15 13" />
          </svg>
        </span>
        <div>
          <b>Max 12 / Batch</b>
          <small>Individual feedback</small>
        </div>
      </div>
    </div>
  );
}
