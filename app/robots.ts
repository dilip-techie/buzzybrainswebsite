import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/exams/login', '/exams/register', '/exams/tests/'],
    },
    sitemap: 'https://buzzybrainsacademy.com/sitemap.xml',
  };
}
