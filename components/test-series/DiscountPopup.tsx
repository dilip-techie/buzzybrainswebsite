"use client";

import { useEffect, useState } from "react";
import { getDiscountInfo, type DiscountInfo } from "@/lib/test-series/discount";

const STORAGE_KEY = "ts-discount-seen";
const AUTO_MINIMIZE_MS = 4000;

type Phase = "expanded" | "minimized" | "closed";

export default function DiscountPopup() {
  const [discount, setDiscount] = useState<DiscountInfo | null>(null);
  const [phase, setPhase] = useState<Phase>("expanded");
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setDiscount(getDiscountInfo());
  }, []);

  useEffect(() => {
    if (!discount) return;

    let alreadySeen = false;
    try {
      alreadySeen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      // sessionStorage unavailable — fall back to always showing the popup
    }

    if (alreadySeen) {
      setPhase("minimized");
      setVisible(true);
      return;
    }

    const showTimer = setTimeout(() => setVisible(true), 50);
    const minimizeTimer = setTimeout(() => {
      setPhase("minimized");
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore
      }
    }, AUTO_MINIMIZE_MS);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(minimizeTimer);
    };
  }, [discount]);

  function handleCopy(code: string) {
    try {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — code is still visible to copy manually
    }
  }

  if (!discount || phase === "closed") return null;

  if (phase === "expanded") {
    return (
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Discount offer"
        className={`fixed inset-0 z-[200] flex items-center justify-center bg-[#0E2148]/70 px-4 backdrop-blur-sm transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`relative w-full max-w-md rounded-sm border border-[#C9A227]/50 bg-[#FAF7EF] p-8 text-center text-[#0E2148] shadow-2xl transition-all duration-300 ${
            visible ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-95 opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={() => setPhase("minimized")}
            aria-label="Minimize offer"
            className="absolute right-4 top-4 text-[16px] text-[#0E2148]/40 transition-colors hover:text-[#0E2148]"
          >
            &#10005;
          </button>

          <p className="font-ledger text-[11px] tracking-[0.25em] text-[#B23A2E]">LIMITED-TIME OFFER</p>
          <h3 className="mt-3 font-display text-[26px] font-bold leading-tight">
            {discount.percent}% off every test series pack
          </h3>
          <p className="mt-2.5 text-[14px] leading-relaxed text-[#0E2148]/65">
            Valid till <strong>{discount.validUntilLabel}</strong>. Quote the code when you message us to enroll.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3 rounded-sm border-2 border-dashed border-[#C9A227] bg-[#C9A227]/10 px-5 py-3.5">
            <span className="font-ledger text-[20px] font-bold tracking-[0.15em] text-[#0E2148]">
              {discount.code}
            </span>
            <button
              type="button"
              onClick={() => handleCopy(discount.code)}
              className="rounded-sm bg-[#0E2148] px-3 py-1.5 text-[12px] font-bold tracking-wide text-[#FAF7EF] transition-opacity hover:opacity-90"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>

          <a
            href="https://wa.me/919850570525"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block w-full rounded-sm bg-[#C9A227] px-6 py-3.5 text-center text-[14px] font-bold tracking-wide text-[#0E2148] transition-transform hover:-translate-y-0.5"
          >
            Claim on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`sticky top-[108px] z-40 flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 bg-[#0E2148] px-4 py-2.5 text-center shadow-md transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <span className="hidden font-ledger text-[11px] tracking-[0.15em] text-[#E4C158] sm:inline">
        LIMITED-TIME
      </span>
      <span className="text-[13px] text-[#FAF7EF]/85">
        {discount.percent}% off with code <strong className="font-ledger text-[#E4C158]">{discount.code}</strong>{" "}
        &mdash; valid till {discount.validUntilLabel}
      </span>
      <button
        type="button"
        onClick={() => handleCopy(discount.code)}
        className="rounded-full bg-[#C9A227] px-3 py-1 text-[11px] font-bold tracking-wide text-[#0E2148] transition-opacity hover:opacity-90"
      >
        {copied ? "Copied" : "Copy code"}
      </button>
      <button
        type="button"
        onClick={() => setPhase("closed")}
        aria-label="Dismiss offer"
        className="text-[14px] text-[#FAF7EF]/45 transition-colors hover:text-[#FAF7EF]"
      >
        &#10005;
      </button>
    </div>
  );
}
