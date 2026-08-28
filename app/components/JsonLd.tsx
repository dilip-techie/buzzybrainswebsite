export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const SITE_URL = 'https://buzzybrainsacademy.com';

export function ProgramJsonLd({
  type,
  name,
  description,
  path,
}: {
  type: 'Course' | 'Service';
  name: string;
  description: string;
  path: string;
}) {
  const url = `${SITE_URL}${path}`;
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': type,
          name,
          description,
          url,
          provider: {
            '@type': 'EducationalOrganization',
            name: 'BuzzyBrains Academy',
            url: SITE_URL,
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name, item: url },
          ],
        }}
      />
    </>
  );
}

export function BreadcrumbJsonLd({ name, path }: { name: string; path: string }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name, item: `${SITE_URL}${path}` },
        ],
      }}
    />
  );
}

export function FaqJsonLd({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
      }}
    />
  );
}

/**
 * For locality landing pages (e.g. /coaching-in-kharadi). Emits a combined
 * EducationalOrganization + LocalBusiness type so it's eligible for both
 * education-specific and local-pack rich results, plus a matching Breadcrumb.
 */
/**
 * Real, named testimonials only — no fabricated star ratings. Google's
 * structured-data guidelines treat self-published, unverifiable review
 * scores as spam (and risk a manual action), so `ratingValue` is only
 * ever set here from a genuine source the site owner supplies, never
 * invented. Reviews without a rating are still valid, honest Review
 * markup — they just won't independently trigger a rich-result star
 * snippet without an aggregateRating alongside them.
 */
export interface RealReview {
  author: string;
  text: string;
}

export interface RealAggregateRating {
  /** Out of `bestRating` (5) — must come from a real, current source
   * (e.g. the business's actual Google Business Profile), never guessed. */
  ratingValue: number;
  reviewCount: number;
}

export function LocalBusinessJsonLd({
  name,
  description,
  path,
  areaServed,
  streetAddress,
  geo,
  breadcrumbName,
  reviews,
  aggregateRating,
}: {
  name: string;
  description: string;
  path: string;
  areaServed: string[];
  streetAddress?: string;
  geo?: { latitude: number; longitude: number };
  breadcrumbName: string;
  reviews?: RealReview[];
  aggregateRating?: RealAggregateRating;
}) {
  const url = `${SITE_URL}${path}`;
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': ['EducationalOrganization', 'LocalBusiness'],
          name,
          description,
          url,
          telephone: '+91-98505-70525',
          email: 'hello@buzzybrainsacademy.com',
          priceRange: '₹₹',
          address: {
            '@type': 'PostalAddress',
            ...(streetAddress ? { streetAddress } : {}),
            addressLocality: 'Pune',
            addressRegion: 'Maharashtra',
            addressCountry: 'IN',
          },
          ...(geo
            ? { geo: { '@type': 'GeoCoordinates', latitude: geo.latitude, longitude: geo.longitude } }
            : {}),
          areaServed: areaServed.map((locality) => ({ '@type': 'Place', name: locality })),
          openingHours: 'Mo-Sa 09:00-20:00',
          parentOrganization: {
            '@type': 'EducationalOrganization',
            name: 'BuzzyBrains Academy',
            url: SITE_URL,
          },
          ...(aggregateRating
            ? {
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: aggregateRating.ratingValue,
                  reviewCount: aggregateRating.reviewCount,
                  bestRating: 5,
                },
              }
            : {}),
          ...(reviews && reviews.length > 0
            ? {
                review: reviews.map((r) => ({
                  '@type': 'Review',
                  author: { '@type': 'Person', name: r.author },
                  reviewBody: r.text,
                })),
              }
            : {}),
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: breadcrumbName, item: url },
          ],
        }}
      />
    </>
  );
}

/**
 * For founder/faculty bio sections — makes credentials (alma mater, role)
 * machine-readable so AI assistants can answer "who founded/teaches at
 * BuzzyBrains Academy" directly from structured data.
 */
export function PersonJsonLd({
  name,
  jobTitle,
  description,
  alumniOf,
  path,
}: {
  name: string;
  jobTitle: string;
  description: string;
  alumniOf: string[];
  path: string;
}) {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'Person',
        name,
        jobTitle,
        description,
        alumniOf: alumniOf.map((school) => ({ '@type': 'CollegeOrUniversity', name: school })),
        worksFor: { '@type': 'EducationalOrganization', name: 'BuzzyBrains Academy', url: SITE_URL },
        url: `${SITE_URL}${path}`,
      }}
    />
  );
}

/**
 * For blog category/listing pages — emits a CollectionPage with an ItemList
 * of the posts it contains, plus a matching Breadcrumb. Lets search engines
 * and AI crawlers understand the page as a curated collection (not a single
 * article) and surface its member articles directly.
 */
export function CollectionPageJsonLd({
  name,
  description,
  path,
  breadcrumbName,
  items,
}: {
  name: string;
  description: string;
  path: string;
  breadcrumbName: string;
  items: { title: string; path: string }[];
}) {
  const url = `${SITE_URL}${path}`;
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name,
          description,
          url,
          isPartOf: { '@type': 'Blog', name: 'BuzzyBrains Academy Blog', url: `${SITE_URL}/blog` },
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: items.map((item, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `${SITE_URL}${item.path}`,
              name: item.title,
            })),
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
            { '@type': 'ListItem', position: 3, name: breadcrumbName, item: url },
          ],
        }}
      />
    </>
  );
}

/**
 * For pillar guides, blog posts, comparison pages and parent/student
 * resource pages — anything long-form and editorial rather than a
 * commercial program page (use ProgramJsonLd for those instead).
 */
export function ArticleJsonLd({
  type = 'Article',
  headline,
  description,
  path,
  datePublished,
  dateModified,
  breadcrumbName,
  author = 'BuzzyBrains Academy',
}: {
  type?: 'Article' | 'BlogPosting';
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
  breadcrumbName: string;
  author?: string;
}) {
  const url = `${SITE_URL}${path}`;
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': type,
          headline,
          description,
          url,
          datePublished,
          dateModified: dateModified ?? datePublished,
          author: { '@type': 'Organization', name: author, url: SITE_URL },
          publisher: {
            '@type': 'EducationalOrganization',
            name: 'BuzzyBrains Academy',
            url: SITE_URL,
            logo: {
              '@type': 'ImageObject',
              url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
            },
          },
          mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: breadcrumbName, item: url },
          ],
        }}
      />
    </>
  );
}
