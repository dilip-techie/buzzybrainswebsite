import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Achievements — Results & Reviews | BuzzyBrains Academy',
  description:
    'See BuzzyBrains Academy\'s real track record: board results, olympiad qualifiers, our growth story since 2020, and genuine reviews from parents and students in Pune.',
  keywords: 'BuzzyBrains Academy results, BuzzyBrains Academy reviews, coaching institute Pune results, JEE NEET olympiad results Pune',
  openGraph: {
    title: 'Our Achievements — Results & Reviews',
    description: 'Real results, a real growth story, and genuine reviews from BuzzyBrains Academy families.',
    type: 'website',
  },
};

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
