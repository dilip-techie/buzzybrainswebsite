export interface TopResultsBannerProps {
  /** Short highlight, e.g. "up to 99.0% in CBSE Boards (Class 10 & 12)". */
  highlight: string;
  /** Anchor the button jumps to; defaults to the page hero (the results now sit above it). */
  href?: string;
}

/** Slim strip at the very top of a test-series page: headline result, plus a
 * button down to the test-series details that follow the results section. */
export default function TopResultsBanner({ highlight, href = '#ts-top' }: TopResultsBannerProps) {
  return (
    <aside
      aria-label="Top results"
      className="relative z-10 border-b border-[#C9A227]/40 bg-gradient-to-r from-[#C9A227] via-[#E4C158] to-[#C9A227] text-[#0E2148]"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-6 py-3 text-center sm:flex-row sm:gap-4 lg:px-10">
        <span className="rounded-sm bg-[#0E2148] px-2.5 py-1 font-ledger text-[11px] font-bold tracking-[0.2em] text-[#E4C158]">
          TOP RESULTS 2026
        </span>
        <p className="text-[14px] font-semibold leading-snug sm:text-[15px]">{highlight}</p>
        <a
          href={href}
          className="inline-flex items-center gap-1.5 rounded-sm border-2 border-[#0E2148] px-4 py-1.5 text-[13px] font-bold tracking-wide transition-colors hover:bg-[#0E2148] hover:text-[#E4C158]"
        >
          See the test series <span aria-hidden="true">↓</span>
        </a>
      </div>
    </aside>
  );
}
