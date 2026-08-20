import Link from 'next/link';

export default function Hero() {
  return (
    <section id="ts-top" className="relative overflow-hidden bg-[#0E2148] text-[#FAF7EF]">
      {/* faint ruled-paper texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] paper-ruled" />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(201,162,39,0.25), transparent 70%)" }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10 lg:py-28">
        <div>
          <nav aria-label="Breadcrumb" className="reveal mb-5 flex items-center gap-2 font-ledger text-[11px] tracking-[0.1em] text-[#FAF7EF]/50">
            <Link prefetch={false} href="/" className="transition-colors hover:text-[#E4C158]">Home</Link>
            <span>/</span>
            <span className="text-[#FAF7EF]/75">Board Exam Test Series</span>
          </nav>
          <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E4C158]" />
            <span className="font-ledger text-[11px] tracking-[0.18em] text-[#E4C158]">
              CBSE &middot; ICSE &nbsp;|&nbsp; GRADE 10 &amp; 12 &nbsp;|&nbsp; BOARDS 2027
            </span>
          </div>

          <h1 className="reveal font-display text-[42px] font-bold leading-[1.08] tracking-tight sm:text-[54px] lg:text-[60px]" data-delay="1">
            Practice like it&rsquo;s
            <br />
            <span className="relative inline-block text-[#E4C158]">
              exam day.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M2 8C60 2 240 2 298 8" stroke="#C9A227" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            Every single time.
          </h1>

          <p className="reveal mt-7 max-w-xl text-[17px] leading-relaxed text-[#FAF7EF]/75" data-delay="2">
            The BuzzyBrains Test Series puts Grade 10 &amp; 12 CBSE and ICSE students through
            full-length papers set to the exact board pattern &mdash; then hands back a
            marked, examiner-annotated scorecard within 72 hours, so you know precisely
            what to fix before the real thing.
          </p>

          <div className="reveal mt-9 flex flex-wrap items-center gap-4" data-delay="3">
            <a
              href="#ts-pricing"
              className="rounded-sm bg-[#C9A227] px-7 py-3.5 text-[14px] font-bold tracking-wide text-[#0E2148] transition-transform hover:-translate-y-0.5"
            >
              See pricing &amp; seats
            </a>
            <a
              href="#ts-structure"
              className="rounded-sm border border-[#FAF7EF]/30 px-7 py-3.5 text-[14px] font-semibold tracking-wide text-[#FAF7EF] transition-colors hover:bg-[#FAF7EF]/10"
            >
              See the test schedule
            </a>
          </div>

          <dl className="reveal mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-[#FAF7EF]/15 pt-8" data-delay="4">
            <div>
              <dt className="font-display text-[28px] font-bold text-[#E4C158]">8</dt>
              <dd className="mt-1 font-ledger text-[11px] leading-tight text-[#FAF7EF]/60">
                Full-length papers per subject
              </dd>
            </div>
            <div>
              <dt className="font-display text-[28px] font-bold text-[#E4C158]">72 hrs</dt>
              <dd className="mt-1 font-ledger text-[11px] leading-tight text-[#FAF7EF]/60">
                Turnaround to marked scorecard
              </dd>
            </div>
            <div>
              <dt className="font-display text-[28px] font-bold text-[#E4C158]">1:1</dt>
              <dd className="mt-1 font-ledger text-[11px] leading-tight text-[#FAF7EF]/60">
                Weak-topic review call
              </dd>
            </div>
          </dl>
        </div>

        {/* Signature element: tilted marked answer sheet */}
        <div className="reveal relative mx-auto w-full max-w-[420px]" data-delay="2">
          <div className="absolute -inset-6 -z-10 rounded-lg border border-[#C9A227]/20" />
          <div className="rotate-[-3deg] rounded-sm bg-[#FAF7EF] p-6 text-[#0E2148] shadow-2xl transition-transform duration-500 hover:rotate-0">
            <div className="paper-ruled margin-rule relative rounded-[2px] pb-2">
              <div className="flex items-start justify-between border-b-2 border-[#0E2148] pb-3">
                <div>
                  <p className="font-ledger text-[10px] tracking-widest text-[#5E7FB5]">
                    BUZZYBRAINS ACADEMY &mdash; MOCK BOARD PAPER
                  </p>
                  <p className="mt-1 font-display text-[15px] font-bold">
                    Mathematics &middot; CBSE Class X
                  </p>
                </div>
                <span className="rotate-6 rounded-sm border-2 border-[#B23A2E] px-2 py-1 font-ledger text-[9px] font-bold text-[#B23A2E]">
                  VERIFIED
                </span>
              </div>

              <div className="mt-4 flex items-center justify-between font-ledger text-[10px] text-[#0E2148]/60">
                <span>Roll No. BB&#8209;X&#8209;0417</span>
                <span>Time: 3 hrs</span>
                <span>M.M. 80</span>
              </div>

              <div className="mt-5 space-y-3.5 pl-3">
                {[
                  { q: "Q1 &ndash; Real Numbers (MCQ)", awarded: "5/5" },
                  { q: "Q7 &ndash; Quadratic Equations", awarded: "4/5" },
                  { q: "Q12 &ndash; Coordinate Geometry", awarded: "6/6" },
                  { q: "Q18 &ndash; Trigonometry (Case Study)", awarded: "9/10" },
                ].map((row) => (
                  <div key={row.q} className="flex items-center justify-between border-b border-dashed border-[#0E2148]/15 pb-3">
                    <span
                      className="text-[12.5px] text-[#0E2148]/80"
                      dangerouslySetInnerHTML={{ __html: row.q }}
                    />
                    <span
                      className="font-ledger text-[12px] font-bold text-[#B23A2E]"
                      dangerouslySetInnerHTML={{ __html: row.awarded }}
                    />
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between rounded-sm bg-[#0E2148] px-4 py-3">
                <span className="font-ledger text-[10px] tracking-widest text-[#FAF7EF]/70">
                  TOTAL AWARDED
                </span>
                <span className="font-display text-[22px] font-bold text-[#E4C158]">71 / 80</span>
              </div>
            </div>
          </div>

          {/* small floating gold percentile tag */}
          <div className="absolute -bottom-5 -left-5 rotate-[4deg] rounded-full bg-[#C9A227] px-4 py-2 shadow-lg">
            <span className="font-ledger text-[11px] font-bold text-[#0E2148]">92nd percentile</span>
          </div>
        </div>
      </div>
    </section>
  );
}
