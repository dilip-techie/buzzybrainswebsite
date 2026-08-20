const STAGES = ['NSEP', 'INPhO', 'OCSC', 'IPhO'];

export default function PhysicsHeroVisual() {
  return (
    <div className="hero-visual-flex">
      <div className="board" role="img" aria-label="Illustration of a physics olympiad mechanics problem with a pendulum diagram and India's NSEP to IPhO selection ladder">
        <div className="board-top">
          <div className="board-dots" aria-hidden="true"><i style={{ background: '#EF4444' }} /><i style={{ background: '#F59E0B' }} /><i style={{ background: '#10B981' }} /></div>
          <span className="board-tag">Live · Mechanics Set</span>
        </div>
        <svg className="lesson" viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <linearGradient id="physBgGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#16233F" /><stop offset="1" stopColor="#0F1B33" />
            </linearGradient>
            <linearGradient id="physScreenGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#B45309" /><stop offset="1" stopColor="#DC2626" />
            </linearGradient>
          </defs>
          <rect width="520" height="340" rx="16" fill="url(#physBgGrad)" />

          {/* Pendulum / mechanics diagram panel */}
          <rect x="34" y="30" width="240" height="200" rx="14" fill="rgba(255,255,255,0.04)" stroke="#334155" strokeWidth="1.2" />
          <text x="50" y="56" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="13" fill="#93C5FD">Q3 · Mechanics</text>
          <line x1="150" y1="70" x2="150" y2="80" stroke="#64748B" strokeWidth="2" />
          <line x1="150" y1="80" x2="210" y2="160" stroke="#F59E0B" strokeWidth="2.4" />
          <circle cx="150" cy="80" r="3" fill="#93C5FD" />
          <circle cx="210" cy="160" r="12" fill="#F59E0B" />
          <path d="M150 80 A70 70 0 0 1 205 100" stroke="#3B82F6" strokeWidth="1.4" fill="none" strokeDasharray="3 3" />
          <text x="180" y="70" fontFamily="Manrope,sans-serif" fontSize="11" fill="#93C5FD">&#952;</text>
          <text x="60" y="196" fontFamily="monospace" fontWeight="700" fontSize="13" fill="#FCD34D">F = ma</text>
          <text x="60" y="214" fontFamily="monospace" fontSize="11" fill="#93C5FD">T = 2&#960;&#8730;(L/g)</text>

          {/* Selection ladder */}
          <text x="304" y="52" fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="12" fill="#93C5FD">India&apos;s Ladder</text>
          {STAGES.map((stage, i) => {
            const y = 70 + i * 40;
            const active = i === 1;
            return (
              <g key={stage}>
                <rect x="304" y={y} width="188" height="30" rx="8" fill={active ? '#F59E0B' : 'rgba(255,255,255,0.05)'} stroke={active ? '#FBBF24' : '#334155'} strokeWidth="1.2" />
                <text x="318" y={y + 20} fontFamily="Manrope,sans-serif" fontWeight="700" fontSize="12" fill={active ? '#1E293B' : '#93C5FD'}>{stage}</text>
                {active && <text x="460" y={y + 20} textAnchor="end" fontFamily="monospace" fontWeight="800" fontSize="11" fill="#1E293B">YOU</text>}
              </g>
            );
          })}
        </svg>
      </div>

      <div className="float-card float-card-highlight fc-1">
        <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#B45309,#F59E0B)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
        </span>
        <div><b>5 Physics Olympiads</b><small>India + 4 from abroad</small></div>
      </div>
      <div className="float-card fc-2">
        <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#1E3A8A,#2563EB)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
        </span>
        <div><b>Mechanics-First Method</b><small>Every track tests it hardest</small></div>
      </div>
      <div className="float-card fc-3">
        <span className="fc-icon" style={{ background: 'linear-gradient(135deg,#059669,#10B981)' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.5-3 5.7V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.3C6.2 13.5 5 11.4 5 9a7 7 0 0 1 7-7z" /><path d="M9 21h6" /></svg>
        </span>
        <div><b>NSEP → INPhO → IPhO</b><small>India&apos;s official pathway</small></div>
      </div>
    </div>
  );
}
