import type { MetadataRoute } from 'next';

const DISALLOW = ['/exams/login', '/exams/register', '/exams/tests/'];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: DISALLOW,
      },
      // Named explicitly (rather than left to the wildcard rule above) so it's
      // unambiguous that AI answer engines are welcome to crawl and cite this site.
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'ClaudeBot',
          'anthropic-ai',
          'Claude-Web',
          'PerplexityBot',
          'Perplexity-User',
          'Google-Extended',
          'CCBot',
          'Amazonbot',
        ],
        allow: '/',
        disallow: DISALLOW,
      },
    ],
    sitemap: 'https://buzzybrainsacademy.com/sitemap.xml',
  };
}
