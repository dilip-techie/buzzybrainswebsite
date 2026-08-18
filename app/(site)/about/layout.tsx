import type { Metadata } from 'next';
import { BreadcrumbJsonLd, PersonJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'About Us — Our Story & Mission | BuzzyBrains Academy',
  description:
    "IITian Mentorship. Gateway to Top IITs and AIIMS. Learn how BuzzyBrains Academy began: Dilip Sir's mission to fix a broken education system with small batches, IITian mentors and student-first teaching in Pune.",
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
      <PersonJsonLd
        name="Dilip Sah"
        jobTitle="Founder, BuzzyBrains Academy"
        description="Founder of BuzzyBrains Academy in Pune — left a stable job in 2021 to build a small-batch, mentor-led coaching institute after seeing capable students fail in overcrowded classrooms."
        alumniOf={['IIT Kanpur']}
        path="/about"
      />
      {children}
    </>
  );
}
