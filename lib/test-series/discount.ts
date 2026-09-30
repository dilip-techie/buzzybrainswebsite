// Discount rotates by calendar day so the offer always feels live:
// an even date-of-month gets the bigger 15% cut, an odd one gets 10%.
// Always frame the deadline as "next 2 days" from whenever it's viewed,
// rather than a fixed date, so the urgency never goes stale.
export interface DiscountInfo {
  percent: 10 | 15;
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
  const percent: 10 | 15 = now.getDate() % 2 === 0 ? 15 : 10;
  const code = `EARLY${percent}`;

  const validUntil = new Date(now);
  validUntil.setDate(validUntil.getDate() + 2);

  return {
    percent,
    code,
    validUntilLabel: formatOrdinalDate(validUntil),
  };
}
