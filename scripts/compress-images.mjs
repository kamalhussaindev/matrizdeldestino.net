import sharp from 'sharp';
import { readdir, stat, writeFile } from 'fs/promises';
import { join, extname, relative } from 'path';

// Sharp caches file input handles by default (sharp.cache()), and on Windows
// that cache keeps the source file open for the life of the process — so a
// later write back to that same path fails with a sharing-violation error,
// even long after toBuffer() has resolved. Disabling the cache releases each
// file the moment it's read, which is what lets this script overwrite the
// same path it just compressed.
sharp.cache(false);

const INPUT_DIR = './public/images';
const QUALITY = 78;

async function getAllFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const fullPath = join(dir, entry.name);
      return entry.isDirectory() ? getAllFiles(fullPath) : fullPath;
    }),
  );
  return files.flat();
}

const kb = (bytes) => `${Math.round(bytes / 1024)}KB`;

async function compressImages() {
  const files = await getAllFiles(INPUT_DIR);
  const webpFiles = files.filter((f) => extname(f).toLowerCase() === '.webp');

  console.log(`Found ${webpFiles.length} WebP files\n`);

  let totalBefore = 0;
  let totalAfter = 0;
  const results = [];

  for (const file of webpFiles) {
    const label = relative(INPUT_DIR, file);
    const before = (await stat(file)).size;
    const buffer = await sharp(file).webp({ quality: QUALITY }).toBuffer();
    const after = buffer.length;

    if (after < before) {
      await writeFile(file, buffer);
      const saving = Math.round((1 - after / before) * 100);
      console.log(`✅ ${label} — ${kb(before)} → ${kb(after)} (${saving}% smaller)`);
      results.push({ label, before, after, saving });
    } else {
      console.log(`⏭️  ${label} — already optimal, skipped`);
      results.push({ label, before, after: before, saving: 0 });
    }

    totalBefore += before;
    totalAfter += Math.min(before, after);
  }

  const totalSaving = Math.round((1 - totalAfter / totalBefore) * 100);
  console.log(`\n📦 Total: ${kb(totalBefore)} → ${kb(totalAfter)} (${totalSaving}% reduction)`);

  const topSavers = [...results].sort((a, b) => b.before - b.after - (a.before - a.after)).slice(0, 5);
  console.log('\n🏆 Biggest savings (by bytes):');
  topSavers.forEach((r) => {
    console.log(`   ${r.label} — saved ${kb(r.before - r.after)} (${r.saving}%)`);
  });
}

compressImages().catch(console.error);
