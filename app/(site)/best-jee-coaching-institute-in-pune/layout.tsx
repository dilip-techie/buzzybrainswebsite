import type { Metadata } from 'next';
import { BestInstituteJsonLd } from '@/components/local-seo/BestInstituteJsonLd';
import { DATA } from './_data';

export const metadata: Metadata = {
  title: 'Best IIT-JEE Coaching Institute in Pune | BuzzyBrains Academy',
  description:
    'Looking for the best JEE coaching institute in Pune? BuzzyBrains Academy is founded by an IIT Kanpur alumnus (JEE AIR 400), with subject-specific IIT faculty and batches capped at 12.',
  keywords:
    'best JEE coaching institute in Pune, IIT JEE coaching Pune, JEE Main coaching Pune, JEE Advanced coaching Pune, JEE coaching Hadapsar, JEE coaching Amanora',
  alternates: { canonical: 'https://buzzybrainsacademy.com/best-jee-coaching-institute-in-pune' },
  openGraph: {
    title: 'Best IIT-JEE Coaching Institute in Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. Founded by an IIT Kanpur alumnus, JEE AIR 400, with subject-specific IIT faculty for Physics, Chemistry and Maths. Batches capped at 12.',
    url: 'https://buzzybrainsacademy.com/best-jee-coaching-institute-in-pune',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [{ url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg', width: 1200, height: 630, alt: 'Best IIT-JEE Coaching Institute in Pune - BuzzyBrains Academy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best IIT-JEE Coaching Institute in Pune | BuzzyBrains Academy',
    description: 'IITian Mentorship. Founded by an IIT Kanpur alumnus, JEE AIR 400, with subject-specific IIT faculty for Physics, Chemistry and Maths. Batches capped at 12.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function BestJeeCoachingInstituteInPuneLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BestInstituteJsonLd
        path="/best-jee-coaching-institute-in-pune"
        breadcrumbName="Best IIT-JEE Coaching Institute in Pune"
        description="BuzzyBrains Academy runs JEE Main & Advanced coaching in Amanora, Hadapsar, Pune, founded by an IIT Kanpur alumnus (JEE AIR 400), with subject-specific IIT faculty. Batches capped at 12 students."
        faqs={DATA.faqs}
      />
      {children}
    </>
  );
}
