"use client";

import { useState } from "react";
import { TEST_SERIES_FAQS } from "@/lib/test-series/faqs";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="ts-faq" className="border-t border-[#0E2148]/10 bg-[#FAF7EF] py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <p className="reveal font-ledger text-[11px] tracking-[0.25em] text-[#B23A2E]">QUESTIONS</p>
        <h2 className="reveal mt-4 font-display text-[34px] font-bold leading-tight sm:text-[40px]" data-delay="1">
          Before you enroll
        </h2>

        <div className="reveal mt-10 divide-y divide-[#0E2148]/10 border-t border-[#0E2148]/10" data-delay="2">
          {TEST_SERIES_FAQS.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="font-display text-[16.5px] font-semibold text-[#0E2148]">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 font-ledger text-[18px] text-[#B23A2E] transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 pr-10 text-[14.5px] leading-relaxed text-[#0E2148]/70">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
