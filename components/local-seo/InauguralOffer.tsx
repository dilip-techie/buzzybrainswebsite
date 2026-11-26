import OfferBanner from '@/components/OfferBanner';

/** Inaugural launch offer shown on the country landing pages. No price,
 * end date or seat count is stated, because none has been set; terms are
 * confirmed when the family enquires. */
export default function InauguralOffer({ place }: { place: string }) {
  return (
    <OfferBanner
      tag="INAUGURAL OFFER"
      title={`Inaugural launch offer: 20% off for students in ${place}`}
      lede="We are opening our live online programs to families abroad, and new students get an inaugural 20% discount."
      points={[
        'Live online batches capped at 12 students',
        'Taught by IIT/IIM-alumni faculty',
        'Free diagnostic call to choose the right program',
      ]}
      ctaLabel="Claim the 20% inaugural offer"
      href="/#contact"
      footnote="Offer terms are confirmed when you enquire."
    />
  );
}
