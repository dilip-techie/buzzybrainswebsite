import type { Metadata } from 'next';
import { LocalBusinessJsonLd, FaqJsonLd } from '../../components/JsonLd';
import { testimonials } from '@/lib/olympiad/data';

export const metadata: Metadata = {
  title: 'Coaching Classes for Kharadi Students | BuzzyBrains Academy',
  description:
    'Small-batch IIT-JEE, NEET, Foundation, Olympiad and Maths coaching for Kharadi students, online and offline.',
  keywords: 'coaching classes Kharadi, coaching institute near Kharadi Pune, tuition classes Kharadi, JEE NEET coaching Kharadi',
  alternates: { canonical: 'https://buzzybrainsacademy.com/coaching-in-kharadi' },
  openGraph: {
    title: 'Coaching Classes for Kharadi Students | BuzzyBrains Academy',
    description: 'IITian Mentorship. Small-batch IIT-JEE, NEET, Foundation, Olympiad and Maths coaching for Kharadi students, online and offline.',
    url: 'https://buzzybrainsacademy.com/coaching-in-kharadi',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coaching Classes for Kharadi Students | BuzzyBrains Academy',
    description: 'IITian Mentorship. Small-batch IIT-JEE, NEET, Foundation, Olympiad and Maths coaching for Kharadi students, online and offline.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function KharadiLocationLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LocalBusinessJsonLd
        name="BuzzyBrains Academy — serving Kharadi"
        description="IIT-JEE, NEET, Foundation, Olympiad and Maths Tuition coaching for students from Kharadi, Pune, in small batches capped at 12 students, online and at our Amanora / Aspire Towers centers."
        path="/coaching-in-kharadi"
        areaServed={['Kharadi', 'Viman Nagar', 'Mundhwa']}
        breadcrumbName="Coaching in Kharadi"
        reviews={testimonials.map((t) => ({ author: t.name, text: t.text }))}
        aggregateRating={{ ratingValue: 4.9, reviewCount: 24 }}
      />
      <FaqJsonLd
        items={[
          {
            question: 'Do you have a center in Kharadi?',
            answer: 'Our physical centers are in Amanora and at Aspire Towers, both a manageable drive from Kharadi. We also offer online classes for Kharadi students who prefer not to commute.',
          },
          {
            question: 'How long is the commute from Kharadi?',
            answer: 'It varies with traffic, but it\'s a manageable, commonly-traveled route for our current Kharadi students — most combine offline weekend sessions with online classes on weekdays.',
          },
          {
            question: 'Which programs are popular with Kharadi families?',
            answer: 'Foundation and One-on-One coaching are especially popular with Kharadi families, since both offer flexible, partly-online formats that reduce how often a commute is needed.',
          },
        ]}
      />
      {children}
    </>
  );
}
