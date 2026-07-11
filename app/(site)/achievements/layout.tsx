import type { Metadata } from 'next';
import { BreadcrumbJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Our Achievements — Results & Reviews | BuzzyBrains Academy',
  description:
    'See BuzzyBrains Academy\'s real track record: board results, olympiad qualifiers, our growth story since 2020, and genuine reviews from parents and students in Pune.',
  keywords: 'BuzzyBrains Academy results, BuzzyBrains Academy reviews, coaching institute Pune results, JEE NEET olympiad results Pune',
  alternates: { canonical: 'https://buzzybrainsacademy.com/achievements' },
  openGraph: {
    title: 'Our Achievements — Results & Reviews',
    description: 'Real results, a real growth story, and genuine reviews from BuzzyBrains Academy families.',
    url: 'https://buzzybrainsacademy.com/achievements',
    siteName: 'BuzzyBrains Academy',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'Our Achievements - BuzzyBrains Academy',
      },
    ],
    type: 'website',
  },
};

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd name="Our Achievements" path="/achievements" />
      {children}
    </>
  );
}
