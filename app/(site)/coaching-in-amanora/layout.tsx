import type { Metadata } from 'next';
import { LocalBusinessJsonLd, FaqJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Coaching Classes in Amanora, Pune | BuzzyBrains Academy',
  description:
    'Our flagship center is in Amanora, Hadapsar — small-batch IIT-JEE, NEET, Foundation, Olympiad and Maths coaching.',
  keywords: 'coaching classes Amanora, coaching institute Amanora Pune, tuition classes Amanora, JEE NEET coaching Amanora',
  alternates: { canonical: 'https://buzzybrainsacademy.com/coaching-in-amanora' },
  openGraph: {
    title: 'Coaching Classes in Amanora, Pune | BuzzyBrains Academy',
    description: 'Our flagship center is in Amanora, Hadapsar — small-batch IIT-JEE, NEET, Foundation, Olympiad and Maths coaching.',
    url: 'https://buzzybrainsacademy.com/coaching-in-amanora',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coaching Classes in Amanora, Pune | BuzzyBrains Academy',
    description: 'Our flagship center is in Amanora, Hadapsar — small-batch IIT-JEE, NEET, Foundation, Olympiad and Maths coaching.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function AmanoraLocationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocalBusinessJsonLd
        name="BuzzyBrains Academy — Amanora"
        description="Flagship coaching center in Amanora, Hadapsar, Pune, offering IIT-JEE, NEET, Foundation, Olympiad and Maths Tuition coaching in small batches capped at 12 students."
        path="/coaching-in-amanora"
        streetAddress="201, Pallazo, Nr. Wisdom World School, Amanora"
        areaServed={['Amanora', 'Hadapsar', 'Magarpatta', 'Mundhwa', 'Keshav Nagar']}
        breadcrumbName="Coaching in Amanora"
      />
      <FaqJsonLd
        items={[
          {
            question: 'Where exactly is the Amanora center located?',
            answer: 'Our Amanora center is at 201, Pallazo, near Wisdom World School — inside the Amanora locality of Hadapsar, Pune.',
          },
          {
            question: 'Which programs run out of the Amanora center?',
            answer: 'Foundation, IIT-JEE, NEET, Olympiads, Maths Excellence and One-on-One coaching all run from Amanora, both online and offline.',
          },
          {
            question: 'Do you offer online classes for Amanora students who prefer not to commute?',
            answer: 'Yes — every program offers an online option in addition to in-person classes at the Amanora center.',
          },
        ]}
      />
      {children}
    </>
  );
}
