// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// Only these 8 pages are indexable. Every other route carries
// <meta name="robots" content="noindex, follow"> and is filtered out of the
// sitemap here, so the two signals stay in sync.
const INDEXABLE_URLS = [
  'https://matrizdeldestino.net/',
  'https://matrizdeldestino.net/matriz-del-destino/',
  'https://matrizdeldestino.net/matriz-del-destino/compatibilidad/',
  'https://matrizdeldestino.net/guias/que-es-la-matriz-del-destino/',
  'https://matrizdeldestino.net/guias/como-calcular-la-matriz-del-destino/',
  'https://matrizdeldestino.net/guias/cola-karmica/',
  'https://matrizdeldestino.net/blog/matriz-del-destino-2026/',
  'https://matrizdeldestino.net/blog/cola-karmica-combinaciones-numeros/',
];

// https://astro.build/config
export default defineConfig({
  site: 'https://matrizdeldestino.net',
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    preact(),
    sitemap({
      filter: (page) => INDEXABLE_URLS.includes(page),
    }),
    mdx(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
