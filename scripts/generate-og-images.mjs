// Generates one 1200x630 OG image per arcana, using Playwright to screenshot
// a simple HTML template. Run manually (`node scripts/generate-og-images.mjs`)
// and commit the resulting PNGs — NOT wired into `npm run build`, since the
// production build runs on Cloudflare Pages, which has no browser installed.
import { chromium } from 'playwright-core';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'og', 'arcanos');

const ARCANOS = [
  [1, 'el-mago', 'El Mago'],
  [2, 'la-sacerdotisa', 'La Sacerdotisa'],
  [3, 'la-emperatriz', 'La Emperatriz'],
  [4, 'el-emperador', 'El Emperador'],
  [5, 'el-hierofante', 'El Hierofante'],
  [6, 'los-enamorados', 'Los Enamorados'],
  [7, 'el-carro', 'El Carro'],
  [8, 'la-fuerza', 'La Fuerza'],
  [9, 'el-ermitano', 'El Ermitaño'],
  [10, 'la-rueda-de-la-fortuna', 'La Rueda de la Fortuna'],
  [11, 'la-justicia', 'La Justicia'],
  [12, 'el-colgado', 'El Colgado'],
  [13, 'la-muerte', 'La Muerte'],
  [14, 'la-templanza', 'La Templanza'],
  [15, 'el-diablo', 'El Diablo'],
  [16, 'la-torre', 'La Torre'],
  [17, 'la-estrella', 'La Estrella'],
  [18, 'la-luna', 'La Luna'],
  [19, 'el-sol', 'El Sol'],
  [20, 'el-juicio', 'El Juicio'],
  [21, 'el-mundo', 'El Mundo'],
  [22, 'el-loco', 'El Loco'],
];

function buildHTML(numero, nombre) {
  return `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px;
    height: 630px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #2e1065 0%, #4c1d95 60%, #2e1065 100%);
    font-family: Georgia, 'Times New Roman', serif;
    color: #ffffff;
  }
  .badge {
    font-family: Arial, sans-serif;
    font-size: 28px;
    letter-spacing: 6px;
    text-transform: uppercase;
    color: #c9a227;
    margin-bottom: 24px;
  }
  .numero {
    font-size: 200px;
    font-weight: bold;
    line-height: 1;
    color: #ffffff;
  }
  .nombre {
    font-size: 64px;
    font-weight: bold;
    color: #c9a227;
    margin-top: 8px;
  }
  .brand {
    position: absolute;
    bottom: 48px;
    font-family: Arial, sans-serif;
    font-size: 28px;
    color: #ffffff;
    opacity: 0.85;
  }
</style>
</head>
<body>
  <div class="badge">Arcano ${numero} · Matriz del Destino</div>
  <div class="numero">${numero}</div>
  <div class="nombre">${nombre}</div>
  <div class="brand">Arcania</div>
</body>
</html>`;
}

async function main() {
  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch({ channel: 'msedge' });
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });

  for (const [numero, slug, nombre] of ARCANOS) {
    await page.setContent(buildHTML(numero, nombre));
    const filePath = path.join(outDir, `arcano-${numero}-${slug}.png`);
    await page.screenshot({ path: filePath });
    console.log(`Generated ${filePath}`);
  }

  await browser.close();
}

main();
