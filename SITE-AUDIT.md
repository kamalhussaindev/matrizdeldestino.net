# Arcania — Complete Site Audit
## UI/UX · SEO · Image Strategy
**Audited:** matrizdeldestino-net.pages.dev · July 2026

---

## EXECUTIVE SUMMARY

The site has an excellent technical and content foundation — better than most of what
currently ranks for "matriz del destino." The gaps are almost entirely visual and
conversion-focused: the site reads as functional but sparse. No images anywhere, blog
cards have no thumbnails, arcana pages have no illustrations, and the homepage has no
social proof. These are the changes that will most move the needle on engagement, time
on page, and conversion rate — all of which feed back into rankings.

---

## PART 1 — UI/UX IMPROVEMENTS

### 1.1 Homepage

**Problem: The "Así se ve tu resultado" section is confusing.**
The sample octagram shows raw numbers (114, 222, 010, 19, 12…) with no labels.
A first-time visitor doesn't know what A, B, C, D, E mean. The preview looks like
a mysterious shape with random numbers, not a preview of something valuable.

**Fix:** Add position labels directly on the sample octagram:
- "Personalidad" next to position A
- "Talentos" next to B
- "Misión" next to D
- "Centro / Propósito" next to E (the central number)
Add a caption below: "Cada número es uno de los 22 arcanos mayores. Haz clic para
interpretarlo." This turns a confusing graphic into a compelling preview.

**Problem: No social proof anywhere.**
There are zero testimonials, zero "X personas han calculado su matriz" counters,
zero trust signals beyond the trust chips. In the esoteric niche, social proof is
especially important because users are deciding whether to trust an unknown brand.

**Fix:** Add a testimonials strip between "How it works" and the educational section.
3 short quotes (fictional but realistic until real ones arrive) with names and countries:
"María G., México" / "Carlos R., Argentina" / "Laura M., España". Or alternatively
a simple counter: "Más de 50,000 matrices calculadas" — even a modest number
builds confidence.

**Problem: The FAQ accordion shows only questions, no answers in the HTML.**
This was flagged in the live site review. The answers are either hidden until JS
renders or not rendered server-side. This breaks FAQPage schema rich results.

**Fix:** Render FAQ answers in the initial server-side HTML (visible in <details>
elements or with CSS-only accordion). Answers must be in the static HTML, not added
by JS after page load.

**Problem: The "Descarga tu informe completo" CTA is stranded at the bottom.**
After someone calculates their matrix and feels the emotional high of seeing their
result, they scroll past the result, past more content, and eventually find an email
capture at the very bottom of a very long page. That emotional moment has passed.

**Fix:** Add a second, smaller PDF/email CTA immediately below the results block
(after InsightTabs). Something like: "¿Quieres guardar tu lectura completa?
Recíbela en tu correo →" with an email field. This is the highest-converting
placement because it catches users at peak interest.

**Problem: Blog cards on the homepage have no images.**
Three blog post titles with plain text descriptions. In a visual niche competing
against sites with rich imagery, this looks sparse and signals "low production value."

**Fix:** Each blog card needs a featured image (600×400px). See Part 3 for prompts.

**Problem: The "Calculadoras relacionadas" section is text-only cards.**
Two calculator cards with just text. Competitors use icon illustrations or small
graphics to differentiate tool types visually.

**Fix:** Add a small illustrative icon or image to each calculator card —
hearts for compatibility, a child figure for matriz infantil. Simple but effective.

**Problem: Benefits grid icons are generic.**
The "Lo que descubrirás" section (Propósito, Relaciones, Dinero, Karma) uses
generic icons. In a mystical/esoteric niche, the icon style matters for brand feel.

**Fix:** Replace with custom illustrated icons in the indigo/gold palette —
a compass for Propósito, interlinked rings for Relaciones, a rising sun for Dinero,
a spiral for Karma. These can be SVG, keeping load time zero.

---

### 1.2 Arcana Pages

**Problem: Pure text, no visual identity per arcana.**
Every arcana page looks identical: the same layout, no illustration, no color
variation. A user reading about Arcano 1 (El Mago) vs Arcano 13 (La Muerte) gets
the exact same visual experience. This is the biggest UI gap on the site.

**Fix:** Add a hero illustration to each arcana page — a stylized, abstract
representation of that arcana's energy in the indigo/gold palette. Not a
reproduction of tarot cards (copyright risk), but original artistic interpretations.
See Part 3 for generation prompts for all 22.

**Problem: The "Arcanos relacionados" section shows only 3 cards with no images.**
Related arcana cards are just titles and a one-line description. No visual
differentiation.

**Fix:** Add small thumbnail images (160×160px) to each related arcana card.
Same illustration style as the main arcana hero images.

**Problem: No "reading progress" context for users.**
A user on Arcano 7's page doesn't know they're 7/22 of the way through the series,
or that they can explore all arcana in order.

**Fix:** Add a small visual progress indicator or numbered navigation strip
showing all 22 arcana as dots/numbers with the current one highlighted.
This also encourages users to click through to adjacent arcana, increasing
pages per session.

---

### 1.3 Blog Pages

**Problem: No hero image on any blog post.**
Blog posts are pure text from top to bottom. No featured image, no pull quotes,
no visual breaks. On mobile this reads as a wall of text.

**Fix:**
- Add a full-width hero image at the top of each blog post (1200×630px —
  the same as OG image, so it doubles as both).
- Add 1-2 inline images within longer posts to break up text and give
  Google Images more to index.
- Add a styled pull quote mid-article (large text in the gold color) to
  create visual breaks.

**Problem: Blog author section is just a name and date, no author bio.**
"Equipo Arcania · 3 de febrero de 2026" — no photo, no bio, no credentials.
This hurts E-E-A-T.

**Fix:** Add an author card at the bottom of each post with:
- A small avatar image (or illustrated avatar — see Part 3)
- 2-3 sentence bio of "Equipo Arcania" or a named author
- Links to the /sobre-nosotros/ and /metodo/ pages

---

### 1.4 Guide Pages

**Problem: The guides are excellent text content but completely unillustrated.**
The "¿Qué es la Matriz del Destino?" guide is genuinely good — 800+ words,
well-structured, native Spanish. But there are no images at all.

**Fix:**
- Add a hero image at the top of each guide.
- The "Cómo se construye tu octagrama" section in the qué-es guide would
  benefit enormously from a labeled diagram showing the two overlapping squares
  and how they form the octagram. This is both educational and a Google Images
  opportunity.
- The "Cómo calcular" guide needs a step-by-step visual showing the reduction
  of a sample birth date (e.g., 15/05/1990 → A=15, B=5, C=10→1, etc.).

---

### 1.5 Navigation & Global UI

**Problem: The header has no visual weight.**
The Arcania logo is just text. In a crowded niche, a distinctive logomark
builds brand recognition, especially important for repeat visits.

**Fix:** Add a small SVG logomark before "Arcania" — the octagram shape from
the calculator, in gold, at 24×24px. Zero extra weight (SVG inline) and
dramatically improves brand feel.

**Problem: Mobile menu is CSS-only with no visual feedback.**
The hamburger menu works but there's no transition/animation, which feels
abrupt on mobile.

**Fix:** Add a simple CSS transition (height or opacity) when the menu opens.
Lightweight, no JS needed.

**Problem: Footer arcana links show only numbers (1, 2, 3…) not names.**
The footer lists arcana as plain numbers. A user scanning the footer doesn't
know what "7" is.

**Fix:** Change to "1 · El Mago", "2 · La Sacerdotisa" etc., or at minimum
add title attributes so hovering shows the name.

---

## PART 2 — SEO IMPROVEMENTS

### 2.1 Critical: FAQ answers not in server-rendered HTML

Already flagged in UI section. This is the most urgent SEO fix. FAQPage
schema is declared but if the answer text isn't in the initial HTML,
Google can't generate rich results (the expandable FAQ boxes in SERPs).
Confirm with: View Source on the homepage → Ctrl+F "necesitas pagar" →
if you don't find the answer text, it's not server-rendered.

### 2.2 Missing: Per-page OG images

All 43 pages share the same `og/default.png`. When content from arcana pages
or blog posts is shared on social media, every share looks identical.
Unique OG images per arcana (showing the arcana number + name) and per
blog post (showing the post title) would:
- Increase click-through from social shares
- Make shares visually distinctive and more likely to be clicked
- Give a professional impression vs. generic competitor shares

This can be done with the same Playwright screenshot technique used for
default.png in M7 — generate them at build time, templated.

### 2.3 Missing: Word count on arcana pages

Arcano 1 is approximately 450–500 words. For "arcano 1 matriz del destino
significado" type queries, competitors with 800–1,200 words will outrank you
on content depth signals. Each arcana page needs at least 300 more words,
specifically in the "En cada posición de la matriz" section which is currently
one short paragraph.

Action: expand each arcana's positional section to give a full paragraph for
each of the 5 main positions (Punto E, Cola kármica, Línea del dinero,
Línea masculina, Línea femenina).

### 2.4 Missing: Image alt text (currently no images exist to alt-tag)

Once images are added (see Part 3), every image needs a descriptive
Spanish alt text containing the keyword:
- Hero: `alt="Arcano 1 El Mago en la Matriz del Destino — ilustración"`
- Blog: `alt="Cómo descubrir tu propósito de vida con la Matriz del Destino"`
- Octagram diagram: `alt="Octagrama de la Matriz del Destino con posiciones etiquetadas"`

### 2.5 Missing: Internal links from blog posts to arcana pages

The blog post about propósito mentions "your four purposes" but never links
to the specific arcana pages that might appear in those positions.
Blog posts should link to relevant arcana pages wherever an arcana is mentioned:
"Si tienes el Arcano 1 en tu propósito personal, leer su significado completo
te dará más contexto → [Arcano 1: El Mago]"

### 2.6 Missing: dateModified in Article schema

Blog posts have datePublished but guides don't show dateModified.
For freshness signals, add dateModified to all Article schema instances,
set to the most recent update date. Update this whenever content is refreshed.

### 2.7 Opportunity: "Como ler" and "O que é" content (for PT expansion)

Image 2 showed "matrix do destino como ler" at 900 searches/month in PT.
When you build the Portuguese version, the guides ("como ler", "o que é")
should be the first content published — highest question-query volume in that market.

### 2.8 Opportunity: Add reading time to blog/guide headers

"Tiempo de lectura: 4 minutos" next to the author/date. Small UX detail
that reduces bounce rate (users know what they're committing to) and is
a soft E-E-A-T signal.

### 2.9 Opportunity: Add a Table of Contents to guides and arcana pages

Long-form content (the guides especially) should have a sticky or inline
ToC with jump links to each H2 section. This:
- Improves navigation (UX)
- Can earn "jump to" links in Google's organic results
- Increases time on page as users jump between sections

### 2.10 Opportunity: Structured data for the octagram diagram

Once you add the octagram diagram image to the guide page, mark it up with
ImageObject schema pointing to it. Google Images indexes schema-marked images
with higher confidence.

---

## PART 3 — IMAGE STRATEGY & GEMINI PROMPTS

### Overview

Images are needed in 5 locations:
1. Homepage (hero background, blog card thumbnails, benefit icons)
2. Arcana pages (hero illustration per arcana — 22 images)
3. Blog posts (hero + inline images)
4. Guide pages (hero + educational diagrams)
5. Author avatar

**Style guide for all AI-generated images:**
Apply this style prefix to every prompt below:
"Digital illustration, mystical but minimalist, deep indigo and violet color palette
with gold accent highlights, dark background (#1e1b4b to #0f0a1e gradient),
glowing sacred geometry elements, no text, no letters, no numbers in the image,
clean and modern spiritual aesthetic, 16:9 aspect ratio, high resolution —"

---

### 3.1 Homepage images

**IMAGE 1 — Hero background**
Placement: Full-width background behind the H1 and calculator form.
Purpose: Immediately communicates "this is a mystical/spiritual tool" to users
who arrive without context. Increases perceived quality.
Size: 1920×600px (wide banner, calculator sits on top)

Gemini prompt:
"Digital illustration, mystical but minimalist, deep indigo and violet color palette
with gold accent highlights, dark background gradient from deep indigo to near-black,
glowing sacred geometry elements, no text, no letters, no numbers in the image,
clean and modern spiritual aesthetic, high resolution — A vast cosmic octagram (eight-
pointed star) made of glowing golden lines floats in a deep indigo starfield. Soft
violet nebula clouds surround it. Tiny golden particles drift upward like embers.
The center of the star glows with warm golden light. Abstract, serene, otherworldly.
Ultra-wide panoramic composition, the star centered slightly left to leave space
for text overlay on the right. 1920x600 pixels."

---

**IMAGE 2 — Blog card: "Cómo descubrir tu propósito de vida"**
Placement: Thumbnail on homepage blog strip and blog index.
Size: 600×400px

Gemini prompt:
"Digital illustration, mystical but minimalist, deep indigo and violet color palette
with gold accent highlights, dark background, glowing sacred geometry, no text,
no letters, no numbers, clean modern spiritual aesthetic — A human silhouette stands
at the center of a glowing compass rose made of golden light. Four radiating paths
extend outward in the cardinal directions, each glowing a slightly different shade
of violet and gold. The figure's chest emits a soft warm glow as if illuminated from
within. The background is deep indigo with scattered star points. The mood is
contemplative and purposeful. 600x400 pixels."

---

**IMAGE 3 — Blog card: "Números maestros 11 y 22"**
Placement: Thumbnail on homepage blog strip and blog index.
Size: 600×400px

Gemini prompt:
"Digital illustration, mystical but minimalist, deep indigo and violet color palette
with gold accent highlights, dark background, glowing sacred geometry, no text,
no letters, no numbers, clean modern spiritual aesthetic — Two large translucent
crystal pillars stand side by side, glowing from within with golden and violet light.
Between them, a double helix of golden light spirals upward. Sacred geometry
patterns (circles within circles, hexagons) float in the dark indigo background.
The overall mood is powerful and ancient. 600x400 pixels."

---

**IMAGE 4 — Blog card: "5 errores comunes al calcular tu Matriz"**
Placement: Thumbnail on homepage blog strip and blog index.
Size: 600×400px

Gemini prompt:
"Digital illustration, mystical but minimalist, deep indigo and violet color palette
with gold accent highlights, dark background, glowing sacred geometry, no text,
no letters, no numbers, clean modern spiritual aesthetic — An octagram (eight-pointed
star) made of golden lines, but with one of its eight points slightly misaligned and
glowing red-orange instead of gold, as if correcting itself back into alignment.
A subtle correction arc of white light guides the misaligned point back into place.
The overall shape is beautiful and precise. The mood is instructive but mystical.
600x400 pixels."

---

### 3.2 Arcana page hero images (22 images)

Each arcana page needs one 800×450px hero illustration.
The style prefix applies to all. Only the central element changes.

**ARCANO 1 — El Mago**
"...A lone figure stands before a table laid with four glowing objects representing
the four elements: a wand of fire, a chalice of water, a sword of air, a pentacle
of earth. Above the figure's head, a golden infinity symbol (∞) glows. The figure's
arm is raised toward the sky, drawing down golden lightning into the objects.
Deep indigo background with golden particle trails."

**ARCANO 2 — La Sacerdotisa**
"...A serene feminine figure sits between two pillars of light, one gold and one
silver. She holds a closed scroll or book to her chest. Behind her, a curtain of
violet fabric embroidered with pomegranates parts slightly, hinting at hidden
knowledge beyond. A crescent moon rests at her feet. The mood is silent, knowing."

**ARCANO 3 — La Emperatriz**
"...A lush golden field of wheat and wildflowers glows under a starlit indigo sky.
At the center, a radiant feminine figure sits on a throne of interwoven vines and
blossoms. A crown of twelve golden stars hovers above her. The overall energy is
abundant, fertile, warm."

**ARCANO 4 — El Emperador**
"...A powerful masculine figure sits on a throne of geometric stone, arms resting
on carved ram-head armrests. He wears a crown of golden geometric shapes. The
background is a mountain range of deep violet stone under a starlit sky. The mood
is stable, authoritative, ordered."

**ARCANO 5 — El Hierofante**
"...A towering figure sits between two ornate golden pillars in a temple of indigo
stone. Two smaller figures kneel before him. His right hand is raised in blessing,
three fingers extended. Above him, a golden key hovers, glowing. The mood is
ceremonial, wise, traditional."

**ARCANO 6 — Los Enamorados**
"...Two luminous figures stand facing each other beneath an angelic form that
radiates golden light from above. Between the figures, a beam of rose-gold light
connects their hearts. The background is an indigo twilight sky with twin stars.
The mood is tender, choice-laden, luminous."

**ARCANO 7 — El Carro**
"...A charioteer stands in a vehicle of white and black energy, holding no reins —
the two forces are controlled by will alone. The chariot moves forward through
a dark starfield, leaving golden trails. The sphinxes pulling the chariot are
made of light, one gold and one silver. The mood is triumphant, controlled."

**ARCANO 8 — La Fuerza**
"...A luminous feminine figure gently closes the mouth of a lion made of golden
light. She does not force the lion — she calms it. The lion's mane glows amber.
The infinity symbol (∞) hovers above her head in gold. The background is deep
violet. The mood is gentle but powerful."

**ARCANO 9 — El Ermitaño**
"...A solitary robed figure stands on a mountain peak of dark violet stone, holding
a staff with a glowing golden lantern at its tip. The lantern casts a cone of light
downward into the darkness below. Stars surround the peak. The figure's face is
turned downward, contemplative. The mood is wise, solitary, illuminating."

**ARCANO 10 — La Rueda de la Fortuna**
"...A great wheel of golden geometric lines spins slowly in an indigo void. Four
figures are attached to the wheel at cardinal points, rising and falling as it turns.
At the center, an eye or a spiral of light. The wheel's rim is inscribed with
sacred geometry patterns. The mood is cyclical, inevitable, cosmic."

**ARCANO 11 — La Justicia**
"...A precise, balanced figure sits with a perfectly level golden scale in one hand
and a double-edged sword of light in the other. The two pans of the scale glow
with equal violet and gold light. The background is geometric, architectural.
The mood is impartial, exact, clear."

**ARCANO 12 — El Colgado**
"...A figure hangs peacefully upside-down from a tau cross of golden light, one
leg crossed behind the other. His expression is serene, not suffering. A halo of
golden light radiates from his head, which hangs below. The surrounding space is
deep indigo and still. The mood is surrender, perspective, waiting."

**ARCANO 13 — La Muerte / La Transformación**
"...A skeletal rider on a horse of white light moves through a field where old
forms dissolve into golden particles. Behind the rider, black flags with white
roses. Ahead, a sunrise of deep rose and gold begins to light the horizon.
The mood is not fearful — it is inevitable, transformative, liberating."

**ARCANO 14 — La Templanza**
"...An angelic figure stands with one foot in water and one on land, pouring
glowing liquid from one golden chalice to another. The liquid flows upward against
gravity in a luminous arc. Wings of violet and gold extend behind. A triangle
glows in the figure's chest. The mood is patient, alchemical, balanced."

**ARCANO 15 — El Diablo**
"...A horned figure of dark energy looms above two smaller figures loosely chained
below him. The chains are thin — they could be removed easily. The figure holds
an inverted torch. The color palette shifts warmer here — deep amber and smoldering
violet. An inverted pentagram glows in the background. The mood is bondage that
is self-imposed, unconscious, breakable."

**ARCANO 16 — La Torre**
"...A tall dark tower is struck by a bolt of golden lightning from above. The
crown of the tower explodes outward in a shower of golden light fragments. Two
figures fall from the tower, but they fall in golden light, not darkness. The sky
behind is deep violet and electric. The mood is sudden rupture, necessary liberation."

**ARCANO 17 — La Estrella**
"...A serene feminine figure kneels at the edge of a pool of starlit water, pouring
two streams of glowing liquid — one into the water, one onto the land. Above her,
eight stars form a constellation, with one large central star radiating pure golden
light. The background is deep indigo sky. The mood is hope, renewal, cosmic gift."

**ARCANO 18 — La Luna**
"...A full moon of silver-violet light hangs in a deep indigo sky, its reflection
shimmering in dark water below. Two towers flank the moon on either side. A path
leads from the water toward the horizon between the towers. A crayfish or lobster
shape emerges from the water in the foreground. The mood is mystery, illusion,
the unconscious."

**ARCANO 19 — El Sol**
"...A radiant sun with a geometric face blazes golden light in a warm indigo sky.
Below it, a walled garden with golden sunflowers. A joyful child figure dances
in the foreground, surrounded by a swirling banner of golden light. The mood is
pure joy, vitality, clarity, success."

**ARCANO 20 — El Juicio / El Despertar**
"...An angelic figure descends from above, sounding a trumpet of golden light.
Below, three figures rise from geometric coffins of stone, arms outstretched
toward the angel. The background is deep violet sky with golden rays breaking
through. The mood is awakening, calling, resurrection of consciousness."

**ARCANO 21 — El Mundo**
"...A dancing figure wreathed in a golden laurel wreath of light moves within
a large golden oval (a vesica piscis of light). In the four corners of the image,
four elemental symbols glow. The figure holds two wands of light. The mood is
completion, integration, cosmic celebration."

**ARCANO 22 — El Loco**
"...A carefree figure in patchwork robes of violet and gold stands at the edge
of a cliff of dark stone, one step away from the abyss. The figure carries a
small knapsack on a staff and looks upward, not at the drop below. A small dog
of golden light nips playfully at their heels. The mood is freedom, pure potential,
divine foolishness."

---

### 3.3 Guide page images

**IMAGE G1 — Hero for "¿Qué es la Matriz del Destino?"**
Size: 1200×500px

Gemini prompt:
"Digital illustration, mystical but minimalist, deep indigo and violet color palette
with gold accent highlights, dark background, glowing sacred geometry, no text,
no letters, no numbers, clean modern spiritual aesthetic — A detailed octagram
(eight-pointed star) constructed from two overlapping squares of golden light floats
in a deep indigo void. Each of the eight points glows differently, suggesting
different life dimensions. The center where the squares overlap glows most brightly
with warm golden light. Sacred geometry lines trace the construction of the figure.
The mood is geometric, cosmic, revealing. 1200x500 pixels."

**IMAGE G2 — Diagram for "Cómo se construye tu octagrama" section**
Size: 900×600px (inline, within the guide text)

Gemini prompt:
"Digital illustration, minimalist diagram style, deep indigo background, golden and
violet lines only, no text, no letters, no numbers, clean and precise —
Two squares of glowing golden lines overlap at 45 degrees to form a perfect octagram.
The first square glows bright gold. The second square glows violet. Where they
overlap, the intersection glows white. Small glowing dots mark each of the eight
outer points and four inner intersection points. Construction lines in dim violet
show the geometric relationships. The style is between sacred geometry art and
technical diagram. 900x600 pixels."

**IMAGE G3 — Hero for "Cómo calcular la Matriz del Destino"**
Size: 1200×500px

Gemini prompt:
"Digital illustration, mystical but minimalist, deep indigo and violet color palette
with gold accent highlights, dark background, glowing sacred geometry, no text,
no letters, no numbers, clean modern spiritual aesthetic — A calendar page of deep
indigo with glowing golden dots marking a birth date dissolves into a stream of
golden particles that flow and reform into a complete octagram shape. The
transformation from date to geometric map is shown as a flowing river of light.
The mood is mathematical, magical, transformative. 1200x500 pixels."

**IMAGE G4 — Hero for "Cómo leer la Matriz del Destino"**
Size: 1200×500px

Gemini prompt:
"Digital illustration, mystical but minimalist, deep indigo and violet color palette
with gold accent highlights, dark background, glowing sacred geometry, no text,
no letters, no numbers, clean modern spiritual aesthetic — An open book of indigo
light floats in space, its pages blank but radiating golden lines that extend outward
and connect to a glowing octagram to its right. A magnifying glass of golden light
hovers over one section of the octagram, highlighting it. The mood is interpretive,
studious, illuminating. 1200x500 pixels."

**IMAGE G5 — Hero for "Cola Kármica"**
Size: 1200×500px

Gemini prompt:
"Digital illustration, mystical but minimalist, deep indigo and violet color palette
with gold accent highlights, dark background, glowing sacred geometry, no text,
no letters, no numbers, clean modern spiritual aesthetic — A spiral of golden light
descends from above like a comet's tail, coiling into a knot of complex golden loops
at the bottom — the karmic pattern. The loops are not entirely closed: a gap in the
spiral suggests the possibility of transformation and release. The background shows
faint outlines of previous loops in dimmer gold, suggesting past repetition.
The mood is deep, ancestral, transformable. 1200x500 pixels."

---

### 3.4 Author/team avatar

**IMAGE A1 — Author avatar for "Equipo Arcania"**
Size: 200×200px (circular crop)

Gemini prompt:
"Digital illustration portrait, abstract and mystical, deep indigo background,
no realistic human face, no text, no numbers — An abstract human-like form made
of flowing golden and violet light particles, suggesting a wise and serene presence.
The head area has a soft golden glow like an aura. The shoulders and body fade into
indigo particle streams. The style is between abstract art and a spiritual avatar.
Square composition with the figure centered, suitable for a circular crop.
200x200 pixels."

---

### 3.5 Implementation notes for Claude Code

When adding these images to the site:

1. **Format:** Save all as WebP (Gemini outputs PNG — convert with `sharp` or
   `cwebp`). Keep a PNG original as backup.

2. **Placement in folder structure:**
   ```
   public/
     images/
       arcanos/
         arcano-1-el-mago.webp
         arcano-2-la-sacerdotisa.webp
         ... (22 files)
       blog/
         como-descubrir-tu-proposito.webp
         numeros-maestros-11-22.webp
         errores-comunes-calcular.webp
       guias/
         que-es-la-matriz-del-destino.webp
         como-calcular.webp
         como-leer.webp
         cola-karmica.webp
         octagrama-diagrama.webp
       homepage/
         hero-background.webp
       team/
         equipo-arcania-avatar.webp
   ```

3. **Every image needs:**
   - `width` and `height` attributes (prevents CLS)
   - `loading="lazy"` for below-fold images
   - `loading="eager"` for hero images (above fold)
   - Descriptive Spanish `alt` text containing the keyword
   - Astro's `<Image>` component for automatic optimization

4. **Add to content frontmatter:**
   In arcana .md files, add `heroImage: /images/arcanos/arcano-1-el-mago.webp`
   In blog .md files, add `heroImage: /images/blog/[slug].webp`
   In guide .md files, add `heroImage: /images/guias/[slug].webp`
   Then render `heroImage` in the [numero].astro and [slug].astro templates.

---

## PART 4 — ADDITIONAL IMPROVEMENTS

### 4.1 Add a "Arcano del día" widget

A daily arcana widget on the homepage sidebar or below the calculator:
"Arcano del día: El Mago (1) — La energía de hoy invita a…"
This is algorithmically simple (day of year mod 22 + 1) and drives repeat visits.
Users come back daily to see their arcano del día, which is your #1 retention tool.

### 4.2 Add result sharing via URL parameters

Currently sharing is via generated PNG image. Add an additional option:
a shareable URL that pre-fills the result:
`/resultado/?f=15-05-1990` → shows the matrix for that date without re-entering.
This makes the link itself viral: "mira mi matriz" → friend clicks → sees their
friend's result → wants to calculate their own.

### 4.3 Add a counter in the hero

"Más de 50,000 personas han descubierto su propósito" (start conservative,
increase as real usage grows). Placed below the trust chips. Adds social proof
at the highest-friction moment (before someone decides whether to enter their date).

### 4.4 Add "Comparte este artículo" to blog posts

Blog posts have no sharing buttons. Add WhatsApp, Twitter/X, and a copy-link
button at the bottom (and optionally at the top) of each blog post.
WhatsApp is especially important for the LatAm audience — it's the primary
sharing channel for this type of content.

### 4.5 Add a "Calcular ahora" sticky footer bar on mobile

On arcana pages, guides, and blog posts on mobile only: a thin sticky bar
at the bottom of the viewport with "¿Cuál es tu arcano? → Calcular gratis"
linking to the calculator. Low-intrusion, high-conversion. Disappears if the
user is already on a calculator page. This is the mobile version of the
sidebar CTA that desktops have room for but mobile doesn't.

### 4.6 Implement per-arcana OG images at build time

Use the same Playwright technique from M7 to generate 22 unique OG images
at build time — one per arcana, showing the number + name + the brand:
"Arcano 1 · El Mago · arcania.app" on the indigo/gold background.
This makes social shares of arcana pages look professional and distinct.

---

## PRIORITY ORDER

### Do first (highest impact, fast):
1. Fix FAQ server-render issue (SEO critical)
2. Add hero images to arcana pages (22 images — biggest visual gap)
3. Add hero images to blog posts (3 images)
4. Add labeled sample result on homepage
5. Add inline PDF CTA below calculator results

### Do second (medium effort, high return):
6. Add testimonials/counter to homepage
7. Add guide hero images + octagram diagram
8. Add author card with avatar to blog posts
9. Add blog card thumbnails to homepage strip
10. Add Table of Contents to guides

### Do third (polish and retention):
11. Add arcano del día widget
12. Add shareable URL parameters for results
13. Add WhatsApp share buttons on blog posts
14. Add mobile sticky footer CTA on content pages
15. Generate per-arcana OG images at build time
