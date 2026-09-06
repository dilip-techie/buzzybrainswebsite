import { LocalBusinessJsonLd, PersonJsonLd, FaqJsonLd } from '@/app/components/JsonLd';
import { testimonials } from '@/lib/olympiad/data';

const AREA_SERVED = [
  'Hadapsar',
  'Amanora',
  'Magarpatta',
  'Kharadi',
  'Mundhwa',
  'Wanowrie',
  'Fatima Nagar',
  'NIBM',
  'Kondhwa',
  'Manjri',
  'Fursungi',
  'Pune',
];

export function BestInstituteJsonLd({
  path,
  breadcrumbName,
  description,
  faqs,
}: {
  path: string;
  breadcrumbName: string;
  description: string;
  faqs: { question: string; answer: string }[];
}) {
  return (
    <>
      <LocalBusinessJsonLd
        name="BuzzyBrains Academy"
        description={description}
        path={path}
        streetAddress="201, Pallazo, Nr. Wisdom World School, Amanora"
        areaServed={AREA_SERVED}
        breadcrumbName={breadcrumbName}
        reviews={testimonials.map((t) => ({ author: t.name, text: t.text }))}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 24 }}
      />
      <PersonJsonLd
        name="Dilip Sah"
        jobTitle="Founder & Mathematics Mentor, BuzzyBrains Academy"
        description="Founder of BuzzyBrains Academy. IIT Kanpur alumnus (JEE All India Rank 400), IIM Ahmedabad alumnus, with 25+ years of technology leadership experience before founding the academy in 2021."
        alumniOf={['IIT Kanpur', 'IIM Ahmedabad']}
        path={path}
      />
      <FaqJsonLd items={faqs} />
    </>
  );
}
