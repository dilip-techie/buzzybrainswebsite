'use client';

import '@/app/tailwind.css';
import React, { useEffect, useRef, useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { BookOpen, Check, ChevronRight, MapPin, MessageCircle, Phone, X } from 'lucide-react';
import { FaqJsonLd } from '@/app/components/JsonLd';
import MarketingFaq, { type MarketingFaqItem } from '@/components/MarketingFaq';
import CtaModal from '@/components/CtaModal';

const PHONE_HREF = 'tel:+918983604478';
const PHONE_DISPLAY = '89836 04478';
const WHATSAPP_HREF = 'https://wa.me/918983604478';
const STICKY_LABEL = 'Check Dates & Seats';

export interface CrashCourseConfig {
  chips: { label: string; tone: 'blue' | 'green' }[];
  h1: React.ReactNode;
  subtitle: React.ReactNode;
  ledBy: React.ReactNode;
  intro: React.ReactNode;
  ctaLabel: string;
  heroNote: React.ReactNode;
  /** Full stat cards, shown from tablet width up. */
  stats: { value: string; label: string; sub: React.ReactNode; tone?: 'blue' | 'purple'; featured?: boolean }[];
  /** One-line versions of the same three stats, shown in the phone hero strip. */
  shortStats: { value: string; label: string }[];
  why: { heading: string; subheading: string; items: { icon: LucideIcon; title: string; description: string }[] };
  curriculum: { heading: string; subheading: string; items: { subject: string; focus: string }[] };
  plan: { heading: string; subheading: string; phases: { phase: string; focus: string }[] };
  suitable: string[];
  notSuitable: string[];
  notSuitableFooter: React.ReactNode;
  faqs: MarketingFaqItem[];
  seats: { heading: string; body: React.ReactNode; button: string };
  finalCta: { heading: string; body: React.ReactNode; button: string };
  modal: { title: string; subtitle: string };
}

const chipTone = {
  blue: 'bg-blue-100 text-blue-800',
  green: 'bg-green-100 text-green-800',
};

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center mb-6 md:mb-16">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4 leading-tight">{title}</h2>
      <p className="text-sm md:text-xl text-gray-600">{subtitle}</p>
    </div>
  );
}

/** Phone-only action bar pinned to the thumb zone. It stays out of the way while the
 * hero button (or the closing seats block / footer) is on screen, so there is never
 * more than one primary call to action visible at a time. */
function StickyCtaBar({ visible, hideFloat, label, onCta }: { visible: boolean; hideFloat: boolean; label: string; onCta: () => void }) {
  return (
    <div
      data-open={visible}
      data-hide-float={hideFloat}
      aria-hidden={!visible}
      className={`cc-sticky-bar md:hidden fixed inset-x-0 bottom-0 z-[80] border-t border-slate-200 bg-white/95 px-3 pt-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))] shadow-[0_-4px_16px_rgba(15,23,42,0.08)] backdrop-blur transition-[transform,visibility] duration-200 motion-reduce:transition-none ${
        visible ? 'visible translate-y-0' : 'invisible translate-y-full'
      }`}
    >
      <div className="flex items-center gap-2">
        <a
          href={PHONE_HREF}
          aria-label="Call BuzzyBrains Academy"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-300 text-slate-700! active:bg-slate-100"
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-600! active:bg-emerald-100"
        >
          <MessageCircle className="h-5 w-5" />
        </a>
        <button
          type="button"
          onClick={onCta}
          className="flex h-12 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl bg-blue-600 px-3 text-[15px] font-semibold text-white shadow-md shadow-blue-600/25 active:scale-[0.98] active:bg-blue-700"
        >
          <span>{label}</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default function CrashCourseTemplate({ config }: { config: CrashCourseConfig }) {
  const [showCtaModal, setShowCtaModal] = useState(false);
  const heroCtaRef = useRef<HTMLButtonElement>(null);
  const seatsRef = useRef<HTMLElement>(null);
  const [heroCtaInView, setHeroCtaInView] = useState(true);
  const [seatsInView, setSeatsInView] = useState(false);
  const [footerInView, setFooterInView] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const footer = document.getElementById('footer');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.target === heroCtaRef.current) setHeroCtaInView(e.isIntersecting);
        else if (e.target === seatsRef.current) setSeatsInView(e.isIntersecting);
        else if (e.target === footer) setFooterInView(e.isIntersecting);
      });
    });
    if (heroCtaRef.current) io.observe(heroCtaRef.current);
    if (seatsRef.current) io.observe(seatsRef.current);
    if (footer) io.observe(footer);
    return () => io.disconnect();
  }, []);

  const openModal = () => setShowCtaModal(true);
  const barVisible = !heroCtaInView && !seatsInView && !footerInView && !showCtaModal;

  const planCols = config.plan.phases.length >= 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3';
  const curriculumCols = config.curriculum.items.length >= 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3';

  return (
    <div className="min-h-screen bb-page-shell">
      {/* Hero: everything a visitor needs in the first phone screen, with the one primary action in the thumb zone */}
      <section className="relative overflow-hidden px-4 pt-[118px] pb-8 md:pt-[108px] md:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-purple-600/5 md:bg-gradient-to-r md:from-blue-600/10 md:to-purple-600/10"></div>
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 flex flex-wrap items-center justify-center gap-1.5 md:mb-6 md:gap-2">
              {config.chips.map((c) => (
                <span
                  key={c.label}
                  className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-bold md:px-4 md:py-2 md:text-sm ${chipTone[c.tone]}`}
                >
                  {c.label}
                </span>
              ))}
            </div>
            <h1 className="mb-3 text-balance text-[30px] font-bold leading-[1.15] text-gray-900 md:mb-6 md:text-6xl">{config.h1}</h1>
            <h2 className="mb-3 text-balance bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-base font-bold leading-snug text-transparent md:mb-4 md:text-3xl">
              {config.subtitle}
            </h2>
            <p className="mb-3 text-sm text-gray-600 md:mb-4 md:text-xl">{config.ledBy}</p>
            <p className="mb-5 text-[15px] leading-snug text-gray-700 md:mb-8 md:text-lg">{config.intro}</p>

            {/* Phone-only stat strip: the three numbers that matter, in one glanceable row */}
            <div className="mb-5 grid grid-cols-3 divide-x divide-blue-100 rounded-xl border border-blue-100 bg-white/80 shadow-sm md:hidden">
              {config.shortStats.map((s) => (
                <div key={s.label} className="px-1.5 py-2.5 text-center">
                  <div className="text-[17px] font-extrabold leading-tight text-blue-700">{s.value}</div>
                  <div className="mt-0.5 text-[11px] leading-tight text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>

            <button
              ref={heroCtaRef}
              onClick={openModal}
              className="mx-auto flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 active:scale-[0.98] md:h-auto md:w-auto md:rounded-lg md:py-4 md:text-lg md:shadow-none"
            >
              <span>{config.ctaLabel}</span>
              <ChevronRight className="h-5 w-5" />
            </button>
            <p className="mt-3 text-xs leading-relaxed text-gray-500 md:mt-4 md:text-sm">{config.heroNote}</p>
          </div>
        </div>
      </section>

      {/* Key highlights (tablet and up; phones get the compact strip above) */}
      <section className="hidden bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-20 md:block">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {config.stats.map((s) => (
              <div
                key={s.label}
                className={`rounded-xl bg-white p-8 text-center shadow-lg ${s.featured ? 'border-2 border-blue-600' : ''}`}
              >
                <div className={`mb-3 text-4xl font-black leading-tight lg:text-6xl ${s.tone === 'purple' ? 'text-purple-600' : 'text-blue-600'}`}>{s.value}</div>
                <p className="text-lg text-gray-600">{s.label}</p>
                <p className="mt-2 text-gray-500">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="bg-white px-4 py-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={config.why.heading} subtitle={config.why.subheading} />
          <div className="grid gap-3 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
            {config.why.items.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="flex items-start gap-3 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-purple-50 p-4 transition-all md:block md:border-2 md:border-transparent md:p-8 md:hover:border-blue-600"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 md:mb-4 md:h-14 md:w-14">
                    <Icon className="h-5 w-5 text-white md:h-7 md:w-7" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-[15px] font-bold leading-snug text-gray-900 md:mb-3 md:text-xl">{f.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600 md:text-base md:text-gray-700">{f.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="bg-gradient-to-r from-blue-50 to-purple-50 px-4 py-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={config.curriculum.heading} subtitle={config.curriculum.subheading} />
          <div className={`grid gap-3 md:gap-8 ${curriculumCols}`}>
            {config.curriculum.items.map((item) => (
              <div key={item.subject} className="rounded-xl bg-white p-4 shadow-md md:p-8 md:shadow-lg">
                <h3 className="mb-2 flex items-center gap-2 text-base font-bold leading-snug text-gray-900 md:mb-4 md:gap-3 md:text-xl">
                  <BookOpen className="h-5 w-5 shrink-0 text-blue-600 md:h-6 md:w-6" />
                  <span>{item.subject}</span>
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 md:text-gray-700">{item.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan: a vertical timeline on phones, cards from tablet up */}
      <section className="bg-white px-4 py-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={config.plan.heading} subtitle={config.plan.subheading} />
          <ol className={`flex flex-col gap-5 md:grid md:gap-8 ${planCols}`}>
            {config.plan.phases.map((p, i) => (
              <li
                key={p.phase}
                className="relative flex gap-3 md:block md:rounded-xl md:border-2 md:border-blue-600 md:bg-gradient-to-br md:from-blue-50 md:to-purple-50 md:p-8"
              >
                {i < config.plan.phases.length - 1 && (
                  <span aria-hidden="true" className="absolute left-[15px] top-8 bottom-[-20px] w-px bg-blue-200 md:hidden" />
                )}
                <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-sm font-bold text-white md:mx-auto md:mb-4 md:h-12 md:w-12 md:text-base">
                  {i + 1}
                </span>
                <div className="md:text-center">
                  <h3 className="text-[15px] font-bold leading-snug text-gray-900 md:mb-2 md:text-xl">{p.phase}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-600 md:mt-0 md:text-base md:text-gray-700">{p.focus}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fit check */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <h2 className="mb-4 flex items-center gap-2.5 text-xl font-bold text-white md:mb-8 md:gap-3 md:text-3xl">
                <Check className="h-6 w-6 text-emerald-300 md:h-8 md:w-8" /> This Is For You If
              </h2>
              <div className="space-y-2.5 md:space-y-4">
                {config.suitable.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-lg border border-white/20 bg-white/10 p-3 backdrop-blur-sm md:p-4">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                    <p className="text-sm font-medium text-white md:text-base">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="mb-4 flex items-center gap-2.5 text-xl font-bold text-white md:mb-8 md:gap-3 md:text-3xl">
                <X className="h-6 w-6 text-rose-300 md:h-8 md:w-8" /> This Isn&apos;t For You If
              </h2>
              <div className="space-y-2.5 md:space-y-4">
                {config.notSuitable.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-lg border border-white/20 bg-white/10 p-3 backdrop-blur-sm md:p-4">
                    <X className="mt-0.5 h-5 w-5 shrink-0 text-rose-300" />
                    <p className="text-sm font-medium text-white md:text-base">{point}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-blue-100 md:mt-6">{config.notSuitableFooter}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqJsonLd items={config.faqs} />
      <MarketingFaq items={config.faqs} />

      {/* Closing block: one decision, three ways to act */}
      <section ref={seatsRef} className="bg-white px-4 py-10 md:py-20">
        <div className="mx-auto max-w-4xl rounded-2xl border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 p-5 text-center md:p-12">
          <h2 className="mb-2 text-xl font-bold leading-snug text-gray-900 md:mb-4 md:text-3xl">{config.seats.heading}</h2>
          <p className="mb-5 text-sm leading-relaxed text-gray-700 md:mb-8 md:text-xl">{config.seats.body}</p>

          <div className="mb-8 hidden space-y-4 md:block">
            <a href={PHONE_HREF} className="flex items-center justify-center space-x-3 text-lg text-gray-900! transition hover:text-blue-600!">
              <Phone className="h-6 w-6 text-blue-600" />
              <span className="font-bold">{PHONE_DISPLAY}</span>
            </a>
            <div className="flex items-center justify-center space-x-3 text-lg text-gray-900">
              <MapPin className="h-6 w-6 text-blue-600" />
              <span className="font-bold">Amanora, Hadapsar, Pune</span>
            </div>
          </div>

          <button
            onClick={openModal}
            className="h-12 w-full rounded-xl bg-blue-600 px-8 text-base font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 active:scale-[0.98] md:h-auto md:w-auto md:rounded-lg md:py-4 md:text-lg md:shadow-none"
          >
            {config.seats.button}
          </button>

          <div className="mt-3 grid grid-cols-2 gap-3 md:hidden">
            <a
              href={PHONE_HREF}
              className="flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-slate-300 bg-white text-[13px] font-semibold text-slate-800! active:bg-slate-100"
            >
              <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-emerald-300 bg-emerald-50 text-[13px] font-semibold text-emerald-700! active:bg-emerald-100"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-gray-500 md:hidden">
            <MapPin className="h-3.5 w-3.5" /> Amanora, Hadapsar, Pune · Online available
          </p>
        </div>
      </section>

      {/* Second closing call to action: wide screens only, phones already have the block above and the sticky bar */}
      <section className="hidden bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-20 md:block">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">{config.finalCta.heading}</h2>
          <p className="mb-8 text-xl text-blue-100">{config.finalCta.body}</p>
          <button
            onClick={openModal}
            className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-blue-600 transition hover:bg-gray-100"
          >
            {config.finalCta.button}
          </button>
        </div>
      </section>

      <StickyCtaBar visible={barVisible} hideFloat={barVisible || seatsInView} label={STICKY_LABEL} onCta={openModal} />

      <CtaModal
        open={showCtaModal}
        onClose={() => setShowCtaModal(false)}
        onFormClick={() => {
          setShowCtaModal(false);
          window.location.href = '/contact';
        }}
        onWhatsAppClick={() => {
          setShowCtaModal(false);
          window.open(WHATSAPP_HREF, '_blank');
        }}
        title={config.modal.title}
        subtitle={config.modal.subtitle}
      />
    </div>
  );
}
