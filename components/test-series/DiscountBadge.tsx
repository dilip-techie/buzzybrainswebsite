"use client";

import { useEffect, useState } from "react";
import { getDiscountInfo, type DiscountInfo } from "@/lib/test-series/discount";

export default function DiscountBadge() {
  const [discount, setDiscount] = useState<DiscountInfo | null>(null);

  useEffect(() => {
    setDiscount(getDiscountInfo());
  }, []);

  if (!discount) return null;

  return (
    <div
      className="reveal mt-5 inline-flex items-center gap-2 rounded-sm border border-dashed border-[#C9A227]/50 bg-[#C9A227]/10 px-4 py-2.5"
      data-delay="3"
    >
      <span className="font-ledger text-[12px] text-[#FAF7EF]/75">
        Use code <strong className="text-[#E4C158]">{discount.code}</strong> for {discount.percent}% off any pack
        below &mdash; valid till {discount.validUntilLabel}.
      </span>
    </div>
  );
}
