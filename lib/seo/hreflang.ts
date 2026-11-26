// Content is identical across regions (no per-region translation or forking),
// so there is no real alternate to point a regional hreflang tag at. Listing
// en-us, en-ca, en-au, en-sg and so on, all pointing back at the same URL,
// adds no regional signal, so we only declare the language and an x-default.
//
// Regional relevance for the USA, Canada, Singapore and Australia comes from
// dedicated market pages and content (see the SEO/AEO plan), not from hreflang.
// If real regional variants of a page are ever added, list them here with their
// own URLs and keep each variant self-referencing.
export function buildLanguageAlternates(canonicalUrl: string): Record<string, string> {
  return { en: canonicalUrl, 'x-default': canonicalUrl };
}
