import type { Metadata } from 'next';
import { BreadcrumbJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Sitemap | BuzzyBrains Academy',
  description:
    'A complete, organized list of every page on the BuzzyBrains Academy website — programs, SEO guides, locality pages and blog posts.',
  alternates: { canonical: 'https://buzzybrainsacademy.com/sitemap' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Sitemap | BuzzyBrains Academy',
    description:
      'A complete, organized list of every page on the BuzzyBrains Academy website — programs, SEO guides, locality pages and blog posts.',
    url: 'https://buzzybrainsacademy.com/sitemap',
    siteName: 'BuzzyBrains Academy',
    type: 'website',
    images: [
      {
        url: 'https://buzzybrainsacademy.com/images/buzzybrains_social.jpg',
        width: 1200,
        height: 630,
        alt: 'Sitemap - BuzzyBrains Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sitemap | BuzzyBrains Academy',
    description:
      'A complete, organized list of every page on the BuzzyBrains Academy website — programs, SEO guides, locality pages and blog posts.',
    images: ['https://buzzybrainsacademy.com/images/buzzybrains_social.jpg'],
  },
};

export default function SitemapLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd name="Sitemap" path="/sitemap" />
      {children}
    </>
  );
}
