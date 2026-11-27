import OfferBanner from '@/components/OfferBanner';

/** Inaugural launch offer shown on the country landing pages: 20% off every
 * program, available until 31 December 2026 (see lib/pricing/international.ts). */
export default function InauguralOffer({ place }: { place: string }) {
  return (
    <OfferBanner
      tag="INAUGURAL OFFER"
      title={`Inaugural launch offer: 20% off for students in ${place}`}
      lede="We are opening our live online programs to families abroad, and new students get an inaugural 20% discount on every program."
      points={[
        'One-to-one live online classes',
        'Taught by IIT/IIM-alumni faculty',
        'Free diagnostic call to choose the right program',
      ]}
      ctaLabel="Claim the 20% inaugural offer"
      href="/#contact"
      footnote="Offer available until 31 December 2026. Prices in USD."
    />
  );
}
