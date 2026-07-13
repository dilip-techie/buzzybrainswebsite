import type { Metadata } from 'next';
import { BreadcrumbJsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Sitemap | BuzzyBrains Academy',
  description:
    'A complete, organized list of every page on the BuzzyBrains Academy website — programs, SEO guides, locality pages and blog posts.',
  alternates: { canonical: 'https://buzzybrainsacademy.com/sitemap' },
  robots: { index: true, follow: true },
};

export default function SitemapLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd name="Sitemap" path="/sitemap" />
      {children}
    </>
  );
}
