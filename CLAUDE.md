# Matriz del Destino — Calculator Website

Full build specification: see BUILD-SPEC.md (read it before starting any milestone).

## Project Summary
The best Matrix of Destiny calculator in Spanish. Free instant results, deep interpretations,
interactive octagram chart. Built to rank #1 for "matriz del destino" on Google.

## Stack
- Astro (SSG) + Tailwind CSS + TypeScript
- Preact islands for interactive components (calculator, share card, email capture)
- Content Collections (Zod-typed) for arcanos, guías, blog
- All content in neutral Latin American Spanish
- html lang="es" on every page

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm test` — run Vitest tests

## Build Order
Work through milestones in BUILD-SPEC.md Part 12, one at a time.
Do NOT build everything at once. Complete each milestone fully before starting the next.

**Milestone 1** — Scaffold & design system (Astro project, Tailwind, tokens, layouts, UI primitives)
**Milestone 2** — Calculator engine (pure TS logic, unit tests, interpretation data)
**Milestone 3** — Calculator UI islands (form, octagram chart, results, share, CTA)
**Milestone 4** — Money pages (homepage, calculator page, compatibility, child matrix, all SEO)
**Milestone 5** — Content collections (22 arcana pages, guides, blog)
**Milestone 6** — Trust pages, internal linking, related tools rails
**Milestone 7** — SEO/perf hardening, analytics, accessibility, launch prep

## Architecture Rules
- Everything is a static .astro server component EXCEPT calculator, share card, email capture, and interactive accordion — those are Preact islands (client:visible)
- Calculator logic is pure client-side TypeScript — no server round-trip
- One H1 per page, always contains the primary keyword
- Every non-home page has breadcrumbs with BreadcrumbList schema
- Every page has a self-referencing canonical tag
- Never gate the basic calculator result behind email, login, or payment
- The free instant result IS the ranking engine — monetize depth (PDF report, personalized reading), not access

## SEO Rules
- All URLs, titles, headings, meta descriptions, and UI labels in Spanish
- URL pattern: lowercase, hyphens, no dates, no query params for indexable pages
- Schema on every page: Organization + WebSite sitewide; FAQPage on FAQ sections; SoftwareApplication on calculator pages; Article on content pages; BreadcrumbList on all non-home pages
- Internal linking: hub-and-spoke — calculator is the hub, arcana/guides/blog link back with descriptive anchors

## Design Direction
- Color palette: deep indigo/violet primary + gold accent + neutral warm surface
- Mystical but clean and professional — NOT cluttered esoteric site aesthetic
- Mobile-first, large readable typography, generous spacing
- Type scale: 1.25 ratio, 4px spacing grid
- Self-host fonts, preload them
- All images: SVG where possible, WebP/AVIF for raster, explicit width/height, Spanish alt text, lazy-load below fold

## Don'ts
- Don't use localStorage/sessionStorage in islands (not supported in Claude.ai artifacts)
- Don't machine-translate anything — all Spanish must be native and fluent
- Don't skip heading levels (H1 → H2 → H3, never H1 → H3)
- Don't put content above the calculator on the main page — calculator goes above the fold
- Don't add display ads on calculator pages (hurts CWV + engagement)
- Don't create per-country Spanish pages (one neutral LatAm Spanish serves all)
