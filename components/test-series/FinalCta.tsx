export interface FinalCtaProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
}

export default function FinalCta({
  title = "The batch starting January fills up in weeks.",
  subtitle = "Reserve your seat now to lock in the 72-hour evaluation window for the full 12-week cycle.",
  primaryLabel = "Enroll on WhatsApp",
}: FinalCtaProps) {
  return (
    <section className="bg-[#0E2148] py-20 text-[#FAF7EF]">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <h2 className="reveal font-display text-[32px] font-bold leading-tight sm:text-[42px]">
          {title}
        </h2>
        <p className="reveal mx-auto mt-4 max-w-xl text-[15px] text-[#FAF7EF]/70" data-delay="1">
          {subtitle}
        </p>
        <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-4" data-delay="2">
          <a
            href="https://wa.me/919850570525"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-[#C9A227] px-8 py-4 text-[14px] font-bold tracking-wide text-[#0E2148] transition-transform hover:-translate-y-0.5"
          >
            {primaryLabel}
          </a>
          <a
            href="mailto:dilip@buzzybrainsacademy.com"
            className="rounded-sm border border-[#FAF7EF]/30 px-8 py-4 text-[14px] font-semibold tracking-wide text-[#FAF7EF] transition-colors hover:bg-[#FAF7EF]/10"
          >
            Email us instead
          </a>
        </div>
      </div>
    </section>
  );
}
