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
