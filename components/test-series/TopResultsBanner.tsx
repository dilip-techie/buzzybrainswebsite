export interface TopResultsBannerProps {
  /** Short highlight, e.g. "Our students scored up to 99.0% in CBSE Boards". */
  highlight: string;
  /** Anchor of the results section; defaults to the shared results section id. */
  href?: string;
}

/** Height of the site's fixed header: 34px promo strip + 74px navbar. */
const HEADER_OFFSET = 108;

/** Strip that stays pinned just below the fixed site header while the page
 * scrolls, so the button to the results section is always visible. The spacer
 * above it clears the fixed header at the top of the page (these pages have no
 * built-in top offset). */
export default function TopResultsBanner({ highlight, href = '#ts-results' }: TopResultsBannerProps) {
  return (
    <>
      <div aria-hidden="true" className="bg-[#0E2148]" style={{ height: HEADER_OFFSET }} />
      <aside
        aria-label="Top results"
        className="sticky z-40 border-b border-[#C9A227]/50 bg-gradient-to-r from-[#C9A227] via-[#E4C158] to-[#C9A227] text-[#0E2148] shadow-md"
        style={{ top: HEADER_OFFSET }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2 sm:gap-4 sm:px-6 lg:px-10">
          <span className="hidden rounded-sm bg-[#0E2148] px-2.5 py-1 font-ledger text-[11px] font-bold tracking-[0.2em] text-[#E4C158] sm:inline-block">
            TOP RESULTS 2026
          </span>
          <p className="line-clamp-2 text-[12.5px] font-semibold leading-tight sm:text-[15px]">{highlight}</p>
          <a
            href={href}
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-sm border-2 border-[#0E2148] px-3 py-1 text-[12px] font-bold tracking-wide transition-colors hover:bg-[#0E2148] hover:text-[#E4C158] sm:px-4 sm:py-1.5 sm:text-[13px]"
          >
            See top results <span aria-hidden="true">↓</span>
          </a>
        </div>
      </aside>
    </>
  );
}
