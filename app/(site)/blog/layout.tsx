import type { Metadata } from 'next';
import { BreadcrumbJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'BuzzyBrains Academy Blog | Exam Prep Guides',
  description:
    'Guides on IIT-JEE, NEET, Commerce, Olympiad, Foundation and Maths Tuition preparation from BuzzyBrains Academy — written by IIT/IIM alumni faculty in Pune.',
  alternates: { canonical: 'https://buzzybrainsacademy.com/blog' },
  openGraph: {
    title: 'BuzzyBrains Academy Blog',
    description: 'IITian Mentorship. Guides on IIT-JEE, NEET, Commerce, Olympiad, Foundation and Maths Tuition preparation, written by IIT/IIM alumni faculty in Pune.',
    url: 'https://buzzybrainsacademy.com/blog',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuzzyBrains Academy Blog',
    description: 'IITian Mentorship. Guides on IIT-JEE, NEET, Commerce, Olympiad, Foundation and Maths Tuition preparation, written by IIT/IIM alumni faculty in Pune.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd name="Blog" path="/blog" />
      {children}
    </>
  );
}
