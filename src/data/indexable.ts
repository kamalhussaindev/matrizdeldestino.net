// The site indexes exactly 6 pages (the homepage plus 3 guides and 2 blog
// posts; the homepage is the calculator). Everything else ships
// <meta name="robots" content="noindex, follow"> — "follow" so link equity
// from those pages still flows into the 6 that matter.
//
// Keep this list in sync with INDEXABLE_URLS in astro.config.mjs, which
// filters the sitemap using the same set.

/** Guide slugs (under /guias/) that stay indexable. */
export const INDEXABLE_GUIA_SLUGS = [
  'que-es-la-matriz-del-destino',
  'como-calcular-la-matriz-del-destino',
  'cola-karmica',
];

/** Blog slugs (under /blog/) that stay indexable. */
export const INDEXABLE_BLOG_SLUGS = [
  'matriz-del-destino-2026',
  'cola-karmica-combinaciones-numeros',
];
