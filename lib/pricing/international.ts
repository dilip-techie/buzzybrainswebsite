/** International (USA, Canada, Singapore, Australia) pricing. One source of
 * truth for the four country pages. All prices are in US dollars.
 *
 * Packages are one-to-one live online classes, 40 to 50 classes each.
 * The inaugural offer is 20% off every program, available until 31 December 2026. */
export const CURRENCY = 'USD';
export const INAUGURAL_DISCOUNT_PCT = 20;
export const OFFER_END = '31 December 2026';
export const PACKAGE_CLASSES = '40 to 50 one-to-one classes';

export interface PriceRow {
  program: string;
  detail: string;
  /** Standard price; `to` makes it a range. */
  from: number;
  to?: number;
  /** "package" prices are one-off; "hour" prices are per hour of teaching. */
  unit: 'package' | 'hour';
  /** Show "From" before the price. */
  fromLabel?: boolean;
}

export const PRICES: PriceRow[] = [
  { program: 'SAT (digital)', detail: `Package of ${PACKAGE_CLASSES}`, from: 1200, unit: 'package', fromLabel: true },
  { program: 'AP exams', detail: `Per subject, package of ${PACKAGE_CLASSES}`, from: 1500, unit: 'package' },
  { program: 'AMC 8', detail: `Package of ${PACKAGE_CLASSES}`, from: 1000, unit: 'package' },
  { program: 'AMC 10', detail: `Package of ${PACKAGE_CLASSES}`, from: 1500, unit: 'package' },
  { program: 'AMC 12', detail: `Package of ${PACKAGE_CLASSES}`, from: 2000, unit: 'package' },
  { program: 'UKMT Mathematical Challenges', detail: `Package of ${PACKAGE_CLASSES}; price depends on the grade level`, from: 1000, to: 2000, unit: 'package' },
  { program: 'IB and IGCSE subjects (Maths, Science, Computer Science, Economics)', detail: 'One-to-one, billed per hour of teaching', from: 25, to: 30, unit: 'hour' },
];

export const discounted = (price: number): number => Math.round(price * (1 - INAUGURAL_DISCOUNT_PCT / 100));

const usd = (n: number) => `$${n.toLocaleString('en-US')}`;

export function formatPrice(row: PriceRow, apply: (n: number) => number = (n) => n): string {
  const a = usd(apply(row.from));
  const range = row.to !== undefined ? `${a} to ${usd(apply(row.to))}` : a;
  const prefix = row.fromLabel ? 'From ' : '';
  return `${prefix}${range}${row.unit === 'hour' ? ' per hour' : ''}`;
}
