import type { Metadata } from 'next';
import { ProgramJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Code Ninja — Coding & AI for Grades 6-12 | BuzzyBrains Academy',
  description:
    'Code Ninja by BuzzyBrains Academy: coding, AI foundations and computational logic for Grades 6-12. Python, Java, Web Dev and competitive programming.',
  keywords:
    'coding classes, AI classes for kids, logic classes, computational thinking, Python, Java, web development, competitive programming, coding olympiad, grades 6-12, IIT Kanpur mentor',
  alternates: { canonical: 'https://buzzybrainsacademy.com/coding-lab' },
  openGraph: {
    title: 'Code Ninja — Coding, AI & Logic Labs for Grades 6-12',
    description: 'A dedicated coding, AI and logic-building track for Grades 6-12, led by an IIT Kanpur graduate.',
    url: 'https://buzzybrainsacademy.com/coding-lab',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'Code Ninja - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Code Ninja — Coding, AI & Logic Labs for Grades 6-12',
    description: 'A dedicated coding, AI and logic-building track for Grades 6-12, led by an IIT Kanpur graduate.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function CodingLabLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ProgramJsonLd
        type="Course"
        name="Code Ninja — Coding, AI & Logic Labs"
        description="Code Ninja by BuzzyBrains Academy: coding, AI foundations and computational logic for Grades 6-12. Python, Java, Web Development, AI/ML basics and competitive programming — mentored by an IIT Kanpur graduate."
        path="/coding-lab"
      />
      {children}
    </>
  );
}
