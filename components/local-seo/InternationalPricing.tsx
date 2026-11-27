import Link from 'next/link';
import {
  CURRENCY,
  INAUGURAL_DISCOUNT_PCT,
  OFFER_END,
  PRICES,
  discounted,
  formatPrice,
} from '@/lib/pricing/international';

/** Pricing table for the country landing pages. Prices live in
 * lib/pricing/international.ts so the four pages can never disagree. */
export default function InternationalPricing() {
  return (
    <>
      <h2 id="pricing">Pricing</h2>
      <p>
        All programs are taught as one-to-one live online classes, and prices are in US dollars ({CURRENCY}). New
        students get an inaugural {INAUGURAL_DISCOUNT_PCT}% discount on every program, available until {OFFER_END}.
      </p>
      <div className="table-wrap">
        <table className="compare-table">
          <thead>
            <tr>
              <th>Program</th>
              <th>What is included</th>
              <th>Standard price</th>
              <th>Inaugural price ({INAUGURAL_DISCOUNT_PCT}% off)</th>
            </tr>
          </thead>
          <tbody>
            {PRICES.map((row) => (
              <tr key={row.program}>
                <td>{row.program}</td>
                <td>{row.detail}</td>
                <td>{formatPrice(row)}</td>
                <td>
                  <strong>{formatPrice(row, discounted)}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: 14, opacity: 0.8 }}>
        The inaugural price applies to enrolments made until {OFFER_END}; the standard price applies afterwards. See
        our <Link href="/refund-policy">refund policy</Link> and{' '}
        <Link href="/terms-and-conditions">terms and conditions</Link>.
      </p>
    </>
  );
}
