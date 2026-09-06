// Discount rotates by calendar day so the offer always feels live:
// an even date-of-month gets the bigger 20% cut, an odd one gets 15%.
// Always frame the deadline as "next 2 days" from whenever it's viewed,
// rather than a fixed date, so the urgency never goes stale.
export interface DiscountInfo {
  percent: 15 | 20;
  code: string;
  validUntilLabel: string;
}

function ordinalSuffix(day: number): string {
  if (day % 10 === 1 && day !== 11) return "st";
  if (day % 10 === 2 && day !== 12) return "nd";
  if (day % 10 === 3 && day !== 13) return "rd";
  return "th";
}

function formatOrdinalDate(date: Date): string {
  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();
  return `${day}${ordinalSuffix(day)} ${month} ${year}`;
}

export function getDiscountInfo(now: Date = new Date()): DiscountInfo {
  const percent: 15 | 20 = now.getDate() % 2 === 0 ? 20 : 15;
  const code = `EARLY${percent}`;

  const validUntil = new Date(now);
  validUntil.setDate(validUntil.getDate() + 2);

  return {
    percent,
    code,
    validUntilLabel: formatOrdinalDate(validUntil),
  };
}
