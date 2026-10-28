// Discount rotates by calendar day so the offer always feels live:
// an even date-of-month gets the bigger 15% cut, an odd one gets 10%.
// Always frame the deadline as "next 2 days" from whenever it's viewed,
// rather than a fixed date, so the urgency never goes stale.
export interface DiscountInfo {
  percent: 10 | 15 | 40;
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

// Diwali 2026 sale: a fixed-date 40% offer that overrides the rotating
// EARLY10/EARLY15 discount until the end of the last day, then reverts.
const DIWALI_CODE = "DIWALI40";
const DIWALI_END = new Date(2026, 10, 12, 23, 59, 59); // 12 Nov 2026, local time

export function getDiscountInfo(now: Date = new Date()): DiscountInfo {
  if (now <= DIWALI_END) {
    return { percent: 40, code: DIWALI_CODE, validUntilLabel: formatOrdinalDate(DIWALI_END) };
  }

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
