const EXAMS = [
  { code: 'IMO', label: 'Maths', color: '#2563EB' },
  { code: 'NSO', label: 'Science', color: '#10B981' },
  { code: 'IEO', label: 'English', color: '#F59E0B' },
  { code: 'IGKO', label: 'G.K.', color: '#7C3AED' },
];

export default function SofHeroVisual() {
  return (
    <div className="hero-visual-flex">
      <div className="board" role="img" aria-label="Illustration of four SOF olympiad medal badges — IMO, NSO, IEO and IGKO — with a certificate ribbon">
        <div className="board-top">
          <div className="board-dots" aria-hidden="true"><i style={{ background: '#EF4444' }} /><i style={{ background: '#F59E0B' }} /><i style={{ background: '#10B981' }} /></div>
          <span className="board-tag">Live · SOF Batch</span>
        </div>
        <svg className="lesson" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="sofBgGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#16233F" /><stop offset="1" stopColor="#0F1B33" />
            </linearGradient>
          </defs>
          <rect width="520" height="340" rx="16" fill="url(#sofBgGrad)" />

          <text x="34" y="46" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="16" fill="#E0EAFF">SOF Exam Medals</text>
          <text x="34" y="66" fontFamily="Manrope,sans-serif" fontWeight="600" fontSize="12" fill="#93C5FD" opacity="0.85">Grades 1–12 · Multiple choice</text>

          {EXAMS.map((exam, i) => {
            const cx = 90 + i * 110;
            const cy = 150;
            return (
              <g key={exam.code}>
                <circle cx={cx} cy={cy} r="42" fill={exam.color} opacity="0.18" />
                <circle cx={cx} cy={cy} r="34" fill={exam.color} />
                <circle cx={cx} cy={cy} r="34" fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="2" />
                <path d={`M${cx - 10} ${cy + 30} L${cx - 18} ${cy + 58} L${cx} ${cy + 46} L${cx + 18} ${cy + 58} L${cx + 10} ${cy + 30}`} fill={exam.color} opacity="0.85" />
                <text x={cx} y={cy + 6} textAnchor="middle" fontFamily="Manrope,sans-serif" fontWeight="800" fontSize="13" fill="#fff">{exam.code}</text>
                <text x={cx} y={cy + 82} textAnchor="middle" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="12" fill="#BBD3FF">{exam.label}</text>
              </g>
            );
          })}

          {/* Certificate strip */}
          <rect x="34" y="252" width="452" height="58" rx="10" fill="#0B1120" stroke="#334155" strokeWidth="1.5" />
          <circle cx="60" cy="281" r="14" fill="#FBBF24" />
          <path d="M50 281l7 7 13-13" stroke="#1E293B" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <text x="86" y="277" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="12" fill="#E0EAFF">International Rank Certificate</text>
          <text x="86" y="294" fontFamily="monospace" fontSize="10" fill="#64748B">Awarded to top scorers in every SOF exam</text>
        </svg>
      </div>

      <div className="float-card float-card-highlight fc-1">
        <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#1E3A8A,#2563EB)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.5-3 5.7V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.3C6.2 13.5 5 11.4 5 9a7 7 0 0 1 7-7z" /><path d="M9 21h6" /></svg>
        </span>
        <div><b>4 SOF Exams</b><small>IMO · NSO · IEO · IGKO</small></div>
      </div>
      <div className="float-card fc-2">
        <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#065F46,#10B981)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" /></svg>
        </span>
        <div><b>IIT / IISER Faculty</b><small>Across Maths &amp; Science</small></div>
      </div>
      <div className="float-card fc-3">
        <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#B45309,#F59E0B)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M21 21v-2a4 4 0 0 0-3-3.87" /></svg>
        </span>
        <div><b>Max 12 / Batch</b><small>Individual feedback, always</small></div>
      </div>
    </div>
  );
}
