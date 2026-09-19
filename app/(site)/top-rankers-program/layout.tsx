import type { Metadata } from 'next';
import { ProgramJsonLd } from '../../components/JsonLd';
import { buildLanguageAlternates } from '@/lib/seo/hreflang';

export const metadata: Metadata = {
  title: 'Top Rankers Program for JEE & NEET — Mentorship by Dilip Sah, IIT Kanpur | BuzzyBrains Academy',
  description:
    'A premium, small-cohort rank program for JEE Main + Advanced and NEET UG, personally mentored by Dilip Sah (IIT Kanpur, JEE AIR 400). Available offline at Amanora, Pune and live online — same faculty, same tests, batches capped at 12.',
  keywords:
    'top rankers program JEE NEET, JEE top rank coaching Pune, NEET top rank coaching Pune, premium JEE mentorship, IIT Kanpur mentor JEE, JEE Advanced rank program, NEET UG 2027 rank program, online JEE coaching, online NEET coaching, offline JEE coaching Pune, small batch JEE NEET coaching, personal mentorship JEE NEET, JEE 2027 NEET 2027 top rank preparation',
  alternates: {
    canonical: 'https://buzzybrainsacademy.com/top-rankers-program',
    languages: buildLanguageAlternates('https://buzzybrainsacademy.com/top-rankers-program'),
  },
  openGraph: {
    title: 'Top Rankers Program — JEE & NEET, Mentored by Dilip Sah (IIT Kanpur)',
    description:
      'Premium rank-focused mentorship for JEE Main + Advanced and NEET UG. Small cohorts capped at 12, personal mentorship by an IIT Kanpur alumnus, offline in Pune and live online.',
    url: 'https://buzzybrainsacademy.com/top-rankers-program',
    siteName: 'BuzzyBrains Academy',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'Top Rankers Program for JEE & NEET - BuzzyBrains Academy',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top Rankers Program — JEE & NEET, Mentored by Dilip Sah (IIT Kanpur)',
    description: 'Premium rank-focused mentorship for JEE and NEET, offline in Pune and live online. Cohorts capped at 12.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function TopRankersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="Top Rankers Program for JEE & NEET"
        description="A premium rank-focused program for JEE Main + Advanced and NEET UG, personally mentored by Dilip Sah (IIT Kanpur alumnus, JEE AIR 400): small cohorts capped at 12, subject-specialist faculty, weekly tests with error analysis and one-on-one mentor sessions. Offered offline at Amanora, Pune and as live online classes."
        path="/top-rankers-program"
        courseModes={['onsite', 'online']}
      />
      {children}
    </>
  );
}
