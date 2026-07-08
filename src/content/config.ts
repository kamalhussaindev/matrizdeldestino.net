import { defineCollection, z } from 'astro:content';

// Fallback publish date for content that doesn't carry its own —
// keeps individual arcana/guide files from needing to repeat it.
const SITE_LAUNCH_DATE = new Date('2026-01-01');

// Note: `slug` is a reserved frontmatter key for `type: 'content'` collections
// — Astro strips it from the data object and uses it internally to override
// the filename-derived `entry.slug` (Astro throws ContentSchemaContainsSlugError
// if a content-collection schema tries to declare it too). Every file below
// still carries `slug: "..."` in its frontmatter (matching the filename), and
// that continues to work exactly as intended via `entry.slug` — it's just not
// part of the Zod schema.

const arcanos = defineCollection({
  type: 'content',
  schema: z.object({
    numero: z.number().int().min(1).max(22),
    nombre: z.string(),
    title: z.string().optional(),
    metaDescription: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    relatedArcanos: z.array(z.number().int().min(1).max(22)).default([]),
    datePublished: z.coerce.date().default(SITE_LAUNCH_DATE),
    heroImage: z.string().optional(),
  }),
});

const guias = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metaDescription: z.string(),
    keywords: z.array(z.string()).default([]),
    relatedGuias: z.array(z.string()).default([]),
    author: z.string().default('Equipo Arcania'),
    datePublished: z.coerce.date().default(SITE_LAUNCH_DATE),
    heroImage: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    metaDescription: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('Equipo Arcania'),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    heroImage: z.string().optional(),
  }),
});

export const collections = { arcanos, guias, blog };
