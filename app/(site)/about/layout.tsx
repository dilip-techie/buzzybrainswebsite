import type { Metadata } from 'next';
import { BreadcrumbJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'About Us — Our Story & Mission | BuzzyBrains Academy',
  description:
    "Learn how BuzzyBrains Academy began: Dilip Sir's mission to fix a broken education system with small batches, IITian mentors and student-first teaching in Pune.",
  alternates: { canonical: 'https://buzzybrainsacademy.com/about' },
  openGraph: {
    title: 'About Us — Our Story & Mission | BuzzyBrains Academy',
    description:
      "How a simple realization changed everything: Dilip Sir's mission to build a beacon of quality learning in Pune.",
    url: 'https://buzzybrainsacademy.com/about',
    siteName: 'BuzzyBrains Academy',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'About BuzzyBrains Academy',
      },
    ],
    type: 'website',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd name="About Us" path="/about" />
      {children}
    </>
  );
}
