# Matriz del Destino — Complete Build Spec & Claude Code Implementation Plan

**Stack:** Astro + Islands · Tailwind · Content Collections · TypeScript · Static-first (SSG) with an SSR/edge path reserved for premium reports
**Primary market:** Spanish-speaking (neutral LatAm Spanish, `.com`, root = Spanish)
**Primary keyword:** `matriz del destino`
**Goal:** The definitive, fastest, deepest Matrix-of-Destiny calculator in Spanish — built to scale to 50+ calculators, multi-language, accounts, and premium reports.

> Placeholders to replace: `[DOMINIO]` (e.g. `matrizdeldestino.com`), `[MARCA]` (brand name — suggestions: *Mapa del Alma*, *Arcania*, *Matriz Viva*).

---

## PART 0 — What we borrow from the inspiration sites

The four references win for different reasons. The strategy is to steal one strength from each and fuse them.

**OmniCalculator → content depth per tool.** Every Omni calculator is a full page: the tool up top, then a long, genuinely useful explainer, worked examples, formulas, and an FAQ, all tightly scoped to that one calculation. Nothing is a bare input box. **We copy:** the pattern of *calculator-first, then deep supporting content on the same URL*, and a large library of interlinked single-purpose calculators.

**InchCalculator → SEO structure & internal linking.** Inch wins on rigorous heading hierarchy, breadcrumbs everywhere, dense contextual internal links, "related calculators" and "related content" modules, and tables that earn featured snippets. **We copy:** the breadcrumb + hub-and-spoke internal linking discipline, the related-tools rail, and snippet-optimized tables/FAQ.

**TinyWow → simplicity & scalability.** Tiny's homepage is a clean, searchable grid of tools with near-zero friction — pick a tool, use it instantly, no signup wall. The architecture obviously scales to hundreds of tools. **We copy:** the frictionless "use it immediately, no login" flow and a tool-grid homepage/hub that scales to 50+ calculators.

**MyMatrixOfDestiny → niche relevance.** It nails the actual product: an interactive octagram chart, position-by-position interpretation, compatibility mode, and premium reports. **We copy:** the interactive chart UX, layered interpretation, compatibility/child-matrix modes, and the free-basic / paid-depth monetization split — but executed in native, fluent Spanish, which is exactly where the current Spanish SERP (machine-translated microsites) is weakest.

**The synthesis:** Omni's depth + Inch's SEO skeleton + Tiny's frictionless scale + MyMatrix's niche product, delivered in native Spanish on an Astro static site that loads faster than every incumbent.

---

## PART 1 — Website architecture

### 1.1 Information architecture (three tiers)

```
Tier 1  MONEY PAGES (convert + rank head terms)
        └─ /  ................................ Home = flagship Matriz del Destino calculator + hub
        └─ /matriz-del-destino/ .............. Canonical calculator page (deep)
        └─ /matriz-del-destino/compatibilidad/  Couple compatibility calculator
        └─ /matriz-del-destino/matriz-infantil/ Children's matrix calculator

Tier 2  TOPICAL AUTHORITY (rank informational + long-tail, feed Tier 1)
        └─ /arcanos/ ......................... Hub: the 22 Major Arcana
        └─ /arcanos/[1..22]/ ................. One page per arcana (22 pages)
        └─ /guias/ ........................... Hub: how-to & interpretation guides
        └─ /guias/[slug]/ .................... qué es, cómo calcular, cómo leer, cola kármica, punto E, etc.
        └─ /blog/ ............................ Freshness + trend/viral capture
        └─ /blog/[slug]/

Tier 3  SCALE (future: 50+ calculators, other niches)
        └─ /calculadoras/ .................... Master directory (TinyWow-style grid)
        └─ /calculadoras/[categoria]/ ........ Category hubs (numerología, tarot, astrología…)

TRUST / LEGAL
        └─ /sobre-nosotros/  /metodo/  /contacto/  /privacidad/  /terminos/
```

**Why this shape:** Tier 1 concentrates authority on the pages that earn revenue and rank the hardest head terms. Tier 2 is the topical-authority engine — the 22-arcana cluster and guides are winnable fast and link *up* into Tier 1, which is how you eventually dislodge incumbents on "matriz del destino" itself. Tier 3 is dormant scaffolding so the folder/route conventions already support 50+ calculators without a rebuild.

### 1.2 Navigation

- **Header (sticky, minimal):** Logo · Calculadora · Arcanos · Guías · Blog · [CTA: *Calcular gratis*]. Add a search field once the tool count grows (Tier 3).
- **Footer (fat, for link equity):** four columns — Calculadoras · Arcanos (1–22 quick links) · Guías · Empresa/Legal. Footer distributes crawl equity to deep pages.
- **Breadcrumbs on every non-home page** (Inch pattern) with `BreadcrumbList` schema.

### 1.3 Internal linking strategy (hub-and-spoke)

- The **calculator page is the hub.** Every arcana page, guide, and blog post links back to it with descriptive anchors (`calcula tu matriz del destino`).
- The **calculator's results block links out** to the relevant arcana pages ("lee más sobre el Arcano 20 →") — contextual, per-user, high-CTR internal links.
- **Arcana pages interlink** (prev/next arcana + "arcanos relacionados").
- **Guides interlink** into both arcana pages and the calculator.
- Every page carries a **"Calculadoras relacionadas"** rail (Inch/Omni pattern).

### 1.4 User journey

```
Search "matriz del destino"
   → Home / calculator page
   → Enters birth date  →  INSTANT free result (no wall)
   → Interactive octagram + basic interpretation per position
   → Clicks a position → deep interpretation → related arcana page (Tier 2)
   → CTA: "Descarga tu informe completo en PDF" → email capture
   → Nurture → premium personalized reading / compatibility upsell
Return visits: compatibility mode, child matrix, blog/trend content
Viral loop: share result card to WhatsApp/IG/TikTok → new visitors
```

---

## PART 2 — Complete sitemap

| URL | Type | Primary keyword | Priority |
|---|---|---|---|
| `/` | Calculator + hub | matriz del destino | 1.0 |
| `/matriz-del-destino/` | Calculator (deep) | calculadora matriz del destino | 1.0 |
| `/matriz-del-destino/compatibilidad/` | Calculator | matriz del destino compatibilidad de pareja | 0.9 |
| `/matriz-del-destino/matriz-infantil/` | Calculator | matriz infantil del destino | 0.8 |
| `/arcanos/` | Hub | arcanos matriz del destino | 0.8 |
| `/arcanos/1/` … `/arcanos/22/` | Content ×22 | arcano N matriz del destino significado | 0.7 |
| `/guias/que-es-la-matriz-del-destino/` | Guide | qué es la matriz del destino | 0.8 |
| `/guias/como-calcular-la-matriz-del-destino/` | Guide | cómo calcular la matriz del destino | 0.8 |
| `/guias/como-leer-la-matriz-del-destino/` | Guide | cómo leer la matriz del destino | 0.7 |
| `/guias/cola-karmica/` | Guide | cola kármica matriz del destino | 0.6 |
| `/guias/punto-e-zona-de-confort/` | Guide | punto e matriz del destino | 0.6 |
| `/guias/linea-del-dinero/` | Guide | línea del dinero matriz del destino | 0.6 |
| `/guias/numeros-maestros-11-22/` | Guide | números maestros numerología | 0.5 |
| `/blog/` | Hub | — | 0.6 |
| `/blog/[slug]/` | Posts | trend/long-tail | 0.5 |
| `/calculadoras/` | Directory | calculadoras numerología | 0.6 |
| `/sobre-nosotros/` `/metodo/` `/contacto/` | Trust | — | 0.4 |
| `/privacidad/` `/terminos/` | Legal | — | 0.3 |

Generated automatically via `@astrojs/sitemap` from the route tree + content collections.

---

## PART 3 — Homepage wireframe

```
┌─────────────────────────────────────────────────────────────┐
│ HEADER (sticky)  [MARCA]   Calculadora Arcanos Guías Blog  [Calcular]│
├─────────────────────────────────────────────────────────────┤
│ 1. HERO                                                      │
│    H1: Calculadora de la Matriz del Destino                  │
│    Sub: Descubre tus 22 arcanos, tu propósito y energías…    │
│    ┌───────────────── CALCULATOR (island) ──────────────┐    │
│    │  Nombre (opcional) · Fecha de nacimiento [DD/MM/AAAA]│   │
│    │  [ Calcular mi matriz  →  ]   (instant, no signup)  │   │
│    └─────────────────────────────────────────────────────┘   │
│    trust chips: 100% gratis · sin registro · resultado al instante│
├─────────────────────────────────────────────────────────────┤
│ 2. VALUE PROP  (3 cards): Autoconocimiento · 22 Arcanos · Gratis│
├─────────────────────────────────────────────────────────────┤
│ 3. RESULT PREVIEW  interactive octagram sample + "así se ve"  │
├─────────────────────────────────────────────────────────────┤
│ 4. BENEFITS  (icon grid): propósito, relaciones, dinero, karma│
├─────────────────────────────────────────────────────────────┤
│ 5. HOW IT WORKS  3 steps: fecha → cálculo → interpretación    │
├─────────────────────────────────────────────────────────────┤
│ 6. EXAMPLE RESULT  real worked example (famous DOB or sample) │
├─────────────────────────────────────────────────────────────┤
│ 7. EDUCATIONAL  "¿Qué es la Matriz del Destino?" (H2 + prose) │
│                 links → /guias/que-es… , /arcanos/            │
├─────────────────────────────────────────────────────────────┤
│ 8. FAQ  (accordion, FAQPage schema) 6–8 Q&A                   │
├─────────────────────────────────────────────────────────────┤
│ 9. RELATED CALCULATORS  cards: compatibilidad, matriz infantil│
├─────────────────────────────────────────────────────────────┤
│ 10. BLOG STRIP  3 latest posts                                │
├─────────────────────────────────────────────────────────────┤
│ 11. FINAL CTA  "Descarga tu informe completo" → email capture │
├─────────────────────────────────────────────────────────────┤
│ FOOTER (fat: Calculadoras · Arcanos 1–22 · Guías · Empresa)  │
└─────────────────────────────────────────────────────────────┘
```

Above the fold = H1 + working calculator. That is non-negotiable: it drives the instant-value engagement signals (low bounce, high dwell) that rank you, and it matches the intent of someone typing "matriz del destino."

---

## PART 4 — Calculator page wireframe (`/matriz-del-destino/`)

```
Breadcrumb: Inicio › Matriz del Destino
H1: Calculadora de la Matriz del Destino Gratis

[ SEO INTRO — 2–3 short paragraphs, keyword-rich but human ]

┌────────────── CALCULATOR ISLAND ──────────────┐
│ Nombre (opcional) · Fecha [DD/MM/AAAA]         │
│ [ Calcular mi matriz → ]                        │
└────────────────────────────────────────────────┘

── RESULTS (render inline, same URL) ────────────
│ ┌── Interactive octagram SVG ──┐  ┌ Summary ─┐ │
│ │  clickable positions          │  │ Arcano   │ │
│ │  A B C D E + lines            │  │ central  │ │
│ │                               │  │ E = N    │ │
│ └───────────────────────────────┘  └──────────┘ │
│                                                  │
│ Number-by-number breakdown (accordion per pos.)  │
│   • Punto E / Zona de confort → interp + link    │
│   • Cola kármica → interp + link                 │
│   • Línea masculina / femenina                   │
│   • Línea del dinero / prosperidad               │
│   • Chakras                                       │
│                                                  │
│ Insight tabs:  Propósito · Relaciones · Carrera  │
│                · Fortalezas y retos              │
│                                                  │
│ [ Compartir resultado ]  [ Descargar PDF (email)]│

── SUPPORTING CONTENT (below results) ────────────
 H2 ¿Qué es la Matriz del Destino?
 H2 ¿Cómo se calcula? (método, 22 arcanos)
 H2 Cómo interpretar tu resultado
 H2 Preguntas frecuentes (FAQPage schema)
 Disclaimer: herramienta de autoconocimiento, no adivinación
 Related tools rail  +  related arcana links
```

---

## PART 5 — Component hierarchy

```
Layout
├─ BaseLayout.astro            (html lang="es", <head>, SEO, JSON-LD slots)
├─ Header.astro
├─ Footer.astro
└─ Breadcrumbs.astro

SEO (server, zero JS)
├─ SEOHead.astro               (title, meta, OG, canonical, hreflang)
├─ SchemaOrganization.astro
├─ SchemaWebSite.astro         (+ SearchAction)
├─ SchemaFAQ.astro             (props: qa[])
├─ SchemaBreadcrumb.astro
├─ SchemaSoftwareApp.astro     (the calculator)
└─ SchemaArticle.astro         (arcana/guide/blog, with author)

Calculator (island — hydrate client:visible)
├─ MatrixCalculator.tsx        (form + orchestration)
│   ├─ BirthDateInput.tsx
│   ├─ NameInput.tsx
│   └─ CalculateButton.tsx
├─ MatrixChart.tsx             (interactive SVG octagram; clickable positions)
├─ ResultSummary.tsx
├─ PositionBreakdown.tsx       (accordion; pulls interpretation data)
├─ InsightTabs.tsx             (propósito/relaciones/carrera/retos)
├─ ShareResult.tsx             (generates share card image)
└─ PdfReportCTA.tsx            (email capture → report)

Content (server)
├─ Hero.astro
├─ ValuePropCards.astro
├─ BenefitsGrid.astro
├─ HowItWorks.astro
├─ ExampleResult.astro
├─ FaqAccordion.astro          (island only if interactive; else CSS accordion)
├─ RelatedCalculators.astro
├─ RelatedArcana.astro
├─ BlogStrip.astro
├─ ArcanaCard.astro
└─ CtaEmailCapture.tsx         (island)

UI primitives
└─ Button, Card, Input, Accordion, Tabs, Badge, Icon
```

**Islands discipline:** everything is a static `.astro` server component except the calculator, share card, FAQ (if JS accordion), and email capture. This keeps the JS bundle tiny — the whole calculation is client-side arithmetic, so no server round-trip and near-instant results.

---

## PART 6 — Folder structure (Astro)

```
/
├─ astro.config.mjs            (integrations: tailwind, sitemap, react/preact, i18n)
├─ tsconfig.json
├─ package.json
├─ public/
│   ├─ og/                     (default OG images)
│   ├─ fonts/                  (self-hosted, preloaded)
│   └─ favicon.svg
├─ src/
│   ├─ layouts/
│   │   └─ BaseLayout.astro
│   ├─ components/
│   │   ├─ seo/                (Schema*.astro, SEOHead.astro)
│   │   ├─ calculator/         (islands: *.tsx)
│   │   ├─ content/            (Hero, Faq, etc.)
│   │   └─ ui/                 (primitives)
│   ├─ pages/
│   │   ├─ index.astro
│   │   ├─ matriz-del-destino/
│   │   │   ├─ index.astro
│   │   │   ├─ compatibilidad.astro
│   │   │   └─ matriz-infantil.astro
│   │   ├─ arcanos/
│   │   │   ├─ index.astro
│   │   │   └─ [numero].astro          (getStaticPaths → 1..22)
│   │   ├─ guias/
│   │   │   ├─ index.astro
│   │   │   └─ [slug].astro
│   │   ├─ blog/
│   │   │   ├─ index.astro
│   │   │   └─ [slug].astro
│   │   ├─ calculadoras/index.astro
│   │   ├─ sobre-nosotros.astro
│   │   ├─ metodo.astro
│   │   ├─ contacto.astro
│   │   ├─ privacidad.astro
│   │   └─ terminos.astro
│   ├─ content/
│   │   ├─ config.ts           (collections + Zod schemas)
│   │   ├─ arcanos/            (1.md … 22.md  OR  arcanos.json data collection)
│   │   ├─ guias/*.md
│   │   └─ blog/*.md
│   ├─ lib/
│   │   ├─ matrix/
│   │   │   ├─ calculate.ts    (pure calc: date → positions)
│   │   │   ├─ reduce.ts       (arcana reduction ≤22)
│   │   │   ├─ positions.ts    (position definitions/metadata)
│   │   │   └─ types.ts
│   │   ├─ seo.ts              (title/meta builders)
│   │   └─ share.ts            (share-card generation)
│   ├─ data/
│   │   ├─ interpretations/    (per-position, per-arcana Spanish copy)
│   │   └─ faq.ts
│   ├─ styles/
│   │   ├─ tokens.css          (design tokens: colors, spacing, type scale)
│   │   └─ global.css
│   └─ i18n/                   (dormant: es/ default, en/ pt/ later)
└─ integrations/               (optional custom)
```

---

## PART 7 — Data model & calculator engine

### 7.1 Core types (`src/lib/matrix/types.ts`)

```ts
export type Arcana = number; // 1..22

export interface MatrixInput {
  day: number; month: number; year: number;
  name?: string;
}

export interface MatrixPositions {
  // central octagram
  A: Arcana;  // día  (personalidad / carácter — izquierda)
  B: Arcana;  // mes  (talentos — arriba)
  C: Arcana;  // año  (energía generacional — derecha)
  D: Arcana;  // A+B+C (misión terrenal — abajo)
  E: Arcana;  // A+B+C+D (comfort / propósito central — centro)
  // líneas
  masculine: Arcana[];   // línea paterna
  feminine: Arcana[];    // línea materna
  karmicTail: Arcana[];  // cola kármica
  money: Arcana;         // línea del dinero / prosperidad
  chakras: { name: string; physical: Arcana; energy: Arcana; emotion: Arcana }[];
  // propósitos (mirrors known model vocab)
  purposes: {
    personal: Arcana; social: Arcana; general: Arcana; planetary: Arcana;
    sky: Arcana; earth: Arcana; male: Arcana; female: Arcana;
  };
}

export interface MatrixResult {
  input: MatrixInput;
  positions: MatrixPositions;
  central: Arcana;
}
```

### 7.2 Reduction rule (`reduce.ts`)

```ts
// Ladini-style: keep values 1..22; if >22, sum digits until ≤22.
export const toArcana = (n: number): number => {
  let x = Math.abs(n);
  while (x > 22) x = String(x).split('').reduce((s, d) => s + +d, 0);
  return x === 0 ? 22 : x;
};
```

> The exact position formulas (diagonals, chakra derivations, karmic tail) live in `positions.ts` as a single source of truth. Implement the standard Ladini/22-arcana construction; keep it isolated so it can be corrected/tuned without touching UI. There's a reference implementation of this points/purposes model on PyPI (`matriz-del-destino-calculadora`) worth mirroring for parity with what users see elsewhere.

### 7.3 Interpretation content model

Interpretations are **data, not code** — content-managed so writers (not devs) can improve them, which is your quality moat. Store as a content/data collection:

```
data/interpretations/
  arcana/{1..22}.json      → { general, love, career, shadow, gift }  (per arcana)
  positions.json           → { A: "En la personalidad…", E: "En el punto E…", karmicTail: …}
```

Final interpretation = `positions.json[position]` framing + `arcana/{value}.json[facet]` content. This combinatorial approach is exactly what the thin competitors skip (they show isolated numbers); rendering *position × arcana* is your differentiation.

---

## PART 8 — SEO strategy

### 8.1 URL, title, meta, headings (per template)

**Homepage / main calculator**
- URL: `/` (and canonical deep page `/matriz-del-destino/`)
- Title: `Matriz del Destino: Calculadora Gratis Online | [MARCA]`
- Meta: `Calcula tu Matriz del Destino gratis con tu fecha de nacimiento. Descubre tus 22 arcanos, tu propósito y energías al instante. Sin registro.`
- H1: `Calculadora de la Matriz del Destino`
- H2s: ¿Qué es la Matriz del Destino? · ¿Cómo se calcula? · Cómo interpretar tu resultado · Preguntas frecuentes · Calculadoras relacionadas
- H3s: under "cómo se calcula" → los 22 arcanos, el punto E, la cola kármica, etc.

**Arcana page** `/arcanos/20/`
- Title: `Arcano 20 en la Matriz del Destino: Significado | [MARCA]`
- Meta: `Descubre el significado del Arcano 20 (El Juicio) en tu Matriz del Destino: energía positiva y negativa, en el amor, el trabajo y la cola kármica.`
- H1: `Arcano 20 en la Matriz del Destino`
- H2s: Significado · En positivo / en negativo · En el amor · En el trabajo · En cada posición de la matriz · Arcanos relacionados

**Guide page** — H1 = the exact question ("¿Qué es la Matriz del Destino?"), H2s answer sub-intents.

### 8.2 Heading hierarchy rule

One `H1` per page (contains the primary keyword). H2 = major sections / co-queries. H3 = sub-points. Never skip levels. Keep the question-phrased headings (they win People-Also-Ask).

### 8.3 Semantic keyword map (by page)

| Page | Primary | Secondary / semantic terms to include |
|---|---|---|
| Calculator | matriz del destino, calculadora matriz del destino | fecha de nacimiento, 22 arcanos, gratis, online, propósito de vida, energías, autoconocimiento, punto E, cola kármica |
| Compatibilidad | matriz del destino compatibilidad de pareja | compatibilidad, matriz de dos personas, sinastría, relaciones, karma de pareja |
| Matriz infantil | matriz infantil del destino | niños, talentos del niño, crianza, propósito infantil |
| Arcanos hub | arcanos matriz del destino | 22 arcanos mayores, tarot, numerología, energías |
| Arcano N | arcano N significado matriz del destino | El Loco/La Torre/…, en positivo, en negativo, en el amor, karma |
| Guía "qué es" | qué es la matriz del destino | Natalia Ladini, mapa del alma, mandala, octagrama, numerología, tarot |
| Guía "cómo calcular" | cómo calcular la matriz del destino | reducción, fecha de nacimiento, sumar dígitos, 22 arcanos, paso a paso |
| Guía "cómo leer" | cómo leer la matriz del destino | interpretar, zonas, líneas, punto E, cola kármica |

**Related entities to weave in sitewide (topical completeness):** Natalia Ladini, Arcanos Mayores del Tarot, numerología, chakras, cola kármica, punto E / zona de confort, línea del dinero, energía masculina y femenina, cuadrado ancestral, números maestros (11, 22), octagrama/mandala, autoconocimiento.

**Synonyms:** matriz del alma · mapa del alma · matriz kármica · diagnóstico del destino.

### 8.4 Topic clusters

```
CLUSTER HUB: /matriz-del-destino/ (pillar)
 ├─ /arcanos/ + /arcanos/1..22/          (22 spokes)
 ├─ /guias/que-es…  como-calcular…  como-leer…
 ├─ /guias/cola-karmica  punto-e  linea-del-dinero  numeros-maestros
 ├─ /matriz-del-destino/compatibilidad/
 └─ /matriz-del-destino/matriz-infantil/
All spokes link ↑ to pillar with descriptive anchors; pillar links ↓ contextually.
```

### 8.5 Schema (JSON-LD, one component each)

- **Sitewide:** `Organization`, `WebSite` (+ `SearchAction`).
- **Calculator pages:** `SoftwareApplication`/`WebApplication` (`applicationCategory: "UtilitiesApplication"`, `offers` free).
- **FAQ sections:** `FAQPage`.
- **Arcana/guide/blog:** `Article` with named `author` (E-E-A-T) + `datePublished`/`dateModified`.
- **All non-home pages:** `BreadcrumbList`.

### 8.6 Blog strategy

Blog = freshness + trend capture (this niche spikes on TikTok). Cadence: 2–4 posts/week early. Angles: "matriz del destino de [famoso]", "qué dice tu arcano central sobre el amor", seasonal/viral hooks, "errores al calcular tu matriz". Each post links into the arcana cluster + calculator. Blog is where display ads eventually live (not the calculator).

### 8.7 Core Web Vitals & technical

- **SSG everything**; calculator hydrates `client:visible`. Inline critical CSS, self-host + preload fonts, reserve chart dimensions (no CLS), lazy-load below-fold images.
- **Images:** octagram/arcana art as **SVG**; raster as WebP/AVIF with width/height + Spanish `alt`.
- **Canonical:** self-referencing on every page; calculator result query params (`?f=`) canonicalize to the clean URL.
- **hreflang:** none at launch (Spanish only). When `/en/`, `/pt/` ship, add reciprocal hreflang + `x-default`.

---

## PART 9 — Content strategy

Every money page = **calculator-first, then depth** (Omni model). Mandatory content blocks the SERP expects on the main page: *qué es*, *cómo se calcula* (with the 22 arcana), *cómo interpretar*, *FAQ*, and the *autoconocimiento-no-adivinación* disclaimer (trust/E-E-A-T signal the good competitors all use).

Launch content set:
1. Main calculator page (deep).
2. 22 arcana pages (the cluster — your fastest-ranking, highest-volume-of-pages authority play).
3. Four core guides: qué es, cómo calcular, cómo leer, cola kármica.
4. Compatibility + child-matrix calculator pages.
5. Named author bio + `/metodo/` page explaining the calculation transparently (E-E-A-T).

Writing rules: **native, fluent Spanish** (neutral LatAm — avoid *vosotros* and heavy regional slang); interpret **combinations**, not isolated numbers; cite the method's origin (Ladini) honestly; never machine-translate. This is precisely where the incumbent microsites are weak and where you win.

---

## PART 10 — Monetization strategy

Layered, sequenced so ads never sabotage the ranking-critical engagement signals:

1. **Premium PDF report** (best fit): free calculator + free basic interpretation; pay for the full multi-page personalized report (all positions, compatibility, yearly forecast). High margin, intent-aligned.
2. **Email capture** → deliver the report free-for-email, then nurture toward paid readings/courses. Your most Google-independent asset.
3. **Personalized reading upsell** ("solicitar lectura personalizada") — high-ticket, proven by competitors.
4. **Affiliate** — tarot decks, numerology books, courses, crystals; contextual on guides/blog.
5. **Subscription/membership** — daily arcana, unlimited compatibility, community — once traffic + repeat visits justify it.
6. **Display ads** — last, and only on high-traffic blog/informational pages, never on the calculator (protects CWV + engagement).

**Never gate the basic result** behind email or payment — the free instant result is the ranking engine. Monetize depth, not access.

---

## PART 11 — Technical architecture

```
Rendering:   Static (SSG) for all content + calculator UI.
             Calculator logic = client-side TS (no server needed).
Islands:     Preact or React via @astrojs/* (Preact = smaller bundle) for
             calculator, share card, email capture, JS accordions.
Styling:     Tailwind + tokens.css (design-token layer for theming/scale).
Content:     Astro Content Collections (Zod-typed) for arcanos, guias, blog;
             JSON data collections for interpretations.
SEO:         @astrojs/sitemap, manual JSON-LD components, robots.txt.
i18n:        Astro i18n routing, es = default/root; en, pt dormant.
Forms/email: serverless endpoint (Astro API route on edge) → ESP (Resend/
             Mailerlite/ConvertKit). PDF gen via serverless (@react-pdf or
             puppeteer-core on edge) — reserved for premium phase.
Deploy:      Vercel / Netlify / Cloudflare Pages (edge). CDN + image CDN.
Analytics:   GA4 + Search Console; privacy-friendly (Plausible optional).
```

### 11.1 Database schema (for the accounts/premium phase — not needed at launch)

Recommended: **Postgres (Supabase)** or **Turso/libSQL** (edge SQLite). Schema:

```sql
users            (id, email, name, created_at, plan)               -- plan: free|premium
matrix_reports   (id, user_id FK, name, birth_date, positions JSONB,
                  created_at, is_premium)
subscriptions    (id, user_id FK, provider, status, current_period_end)
email_captures   (id, email, source, birth_date, consent, created_at)  -- pre-account leads
saved_shares     (id, report_id FK, slug UNIQUE, image_url, created_at) -- shareable pages
```

`positions JSONB` stores the computed `MatrixResult` so reports are reproducible without recomputation. `email_captures` runs from day one (no accounts required); `users`/`subscriptions` activate in the premium phase.

---

## PART 12 — Claude Code implementation plan (build order)

Hand this to Claude Code as sequential milestones. Each is independently shippable.

### Milestone 1 — Scaffold & design system
1. `npm create astro@latest` → add integrations: `@astrojs/tailwind`, `@astrojs/sitemap`, `@astrojs/preact` (or react), `@astrojs/mdx`.
2. Configure `astro.config.mjs`: site URL, i18n (`defaultLocale: 'es'`, `locales: ['es']`, prefixDefaultLocale: false), sitemap.
3. Create `src/styles/tokens.css` (color palette — mystical but clean: deep indigo/violet + gold accent + neutral surface; type scale 1.25 ratio; 4px spacing grid) and `global.css`.
4. Build `BaseLayout.astro` (`<html lang="es">`, `SEOHead` slot, JSON-LD slots), `Header`, `Footer`, `Breadcrumbs`.
5. Build UI primitives: `Button, Card, Input, Accordion, Tabs, Badge, Icon`.

### Milestone 2 — Calculator engine (pure logic, tested)
6. `src/lib/matrix/reduce.ts`, `positions.ts`, `calculate.ts`, `types.ts` — pure functions, no UI.
7. Unit tests (Vitest): known birth dates → expected positions; boundary cases (22, leap years, invalid/future dates rejected).
8. `data/interpretations/` — seed all 22 arcana JSON (general/love/career/shadow/gift) + `positions.json`. (Placeholder copy first; native-Spanish rewrite after.)

### Milestone 3 — Calculator UI (islands)
9. `MatrixCalculator.tsx` (form + orchestration), `BirthDateInput`, `NameInput`, validation, instant client-side calc.
10. `MatrixChart.tsx` — interactive SVG octagram, clickable positions, keyboard-accessible.
11. `ResultSummary`, `PositionBreakdown` (accordion), `InsightTabs` (propósito/relaciones/carrera/retos).
12. `ShareResult.tsx` (canvas → PNG share card) and `PdfReportCTA.tsx` (email capture stub).

### Milestone 4 — Money pages
13. `pages/index.astro` — full homepage per Part 3 wireframe, calculator island above fold.
14. `pages/matriz-del-destino/index.astro` — deep calculator page per Part 4, all H2 content blocks, FAQ.
15. `compatibilidad.astro`, `matriz-infantil.astro` (reuse engine with two-input / child variants).
16. Wire all SEO: `SEOHead`, `SchemaSoftwareApp`, `SchemaFAQ`, `SchemaBreadcrumb`, `SchemaOrganization`, `SchemaWebSite`.

### Milestone 5 — Topical authority (content collections)
17. `content/config.ts` — Zod schemas for `arcanos`, `guias`, `blog`.
18. `pages/arcanos/index.astro` + `[numero].astro` (`getStaticPaths` → 1..22), `ArcanaCard`, prev/next, related.
19. `pages/guias/index.astro` + `[slug].astro`; author bio component + `/metodo/` page (E-E-A-T).
20. `pages/blog/index.astro` + `[slug].astro`. `SchemaArticle` on all three.
21. Seed the 22 arcana pages + 4 core guides (qué es, cómo calcular, cómo leer, cola kármica).

### Milestone 6 — Trust, scale scaffold, polish
22. `/sobre-nosotros/`, `/contacto/`, `/privacidad/`, `/terminos/`; `calculadoras/index.astro` (grid scaffold for future tools).
23. Internal-linking pass: related rails, footer link map, breadcrumbs everywhere, contextual links results→arcana.
24. `RelatedCalculators`, `RelatedArcana`, `BlogStrip`.

### Milestone 7 — SEO/perf hardening & launch
25. `sitemap.xml`, `robots.txt`, self-referencing canonicals, OG images.
26. CWV pass: inline critical CSS, preload fonts, SVG art, no-CLS chart sizing, lazy images, Lighthouse ≥95 mobile.
27. GA4 + Search Console + event tracking (calc completion, share, email capture).
28. Accessibility pass (WCAG AA: labels, focus states, contrast, keyboard nav on chart/tabs/accordion).

### Milestone 8 — Monetization & data (post-launch phase)
29. Email endpoint (Astro API route → ESP), real PDF report generation.
30. Add DB (Supabase/Turso) + schema from Part 11.1; accounts, saved reports, premium gating, subscriptions.

### Definition of done (launch)
- Calculator returns instant results, no signup, no CLS.
- 22 arcana pages + 4 guides + 3 calculator pages live and interlinked.
- All schema validates (Rich Results Test); sitemap submitted.
- Lighthouse mobile: Performance/SEO/Accessibility ≥95.
- Every page has one H1, breadcrumbs, canonical, Spanish `lang`.

### Milestones to track (first 6 months)
Month 1 indexed + CWV green · Month 2 arcana cluster live, first long-tail impressions · Month 3 full cluster + compatibility/child + email capture · Month 4 first page-1 long-tails + backlinks · Month 5 mid-tail page-1 + premium conversions · Month 6 push head term "matriz del destino" toward top-10 + evaluate en/pt expansion.
