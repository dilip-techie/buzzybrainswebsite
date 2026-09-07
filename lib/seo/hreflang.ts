// Content is identical across regions (no per-region translation or forking),
// so these are self-referencing hreflang tags: they tell Google the same
// English page is relevant to searchers in each of these English-speaking /
// significant-NRI-population markets, rather than pointing to a variant page.
export const HREFLANG_LOCALES = ['en-us', 'en-gb', 'en-au', 'en-sg', 'en-ae', 'en-ca', 'en-in'];

export function buildLanguageAlternates(canonicalUrl: string): Record<string, string> {
  return Object.fromEntries(HREFLANG_LOCALES.map((locale) => [locale, canonicalUrl]));
}
