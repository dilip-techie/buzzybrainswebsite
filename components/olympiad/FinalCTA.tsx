import { Phone, MessageCircle } from 'lucide-react';

export default function FinalCTA({
  title = "Ready to unlock your child's olympiad potential?",
  subtitle = 'Book a free demo class today — no cost, no obligation, just a real timed mock in the exact exam format.',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="oly-section">
      <div className="oly-container">
        <div className="reveal relative overflow-hidden rounded-oly-4xl bg-gradient-to-br from-oly-brand-500 via-oly-brand-600 to-oly-ink px-8 py-16 text-center sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-oly-amber/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-oly-sky-light/20 blur-3xl" />

          <h2 className="relative mx-auto max-w-2xl text-balance text-[32px] font-extrabold leading-tight text-white sm:text-[42px]">
            {title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-balance text-[15.5px] leading-relaxed text-white/75">
            {subtitle}
          </p>

          <div className="relative mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a href="#oly-lead-form" className="oly-btn-primary !bg-white !text-oly-brand-700 hover:!bg-oly-amber hover:!text-oly-ink">
              Book Free Demo
            </a>
            <a href="tel:+919850570525" className="oly-btn-secondary !border-white/25 !bg-transparent !text-white hover:!border-white">
              <Phone size={16} /> Call Now
            </a>
            <a
              href="https://wa.me/919850570525"
              target="_blank"
              rel="noopener noreferrer"
              className="oly-btn-secondary !border-white/25 !bg-transparent !text-white hover:!border-white"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
