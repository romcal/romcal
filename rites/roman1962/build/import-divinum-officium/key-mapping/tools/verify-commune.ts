import fs from 'node:fs';
import path from 'node:path';

import { communeKeyToSlug, COMMUNE_KEY_MAP } from '../commune';

const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../../../data/commune.json'), 'utf8')) as Record<
  string,
  unknown
>;

const slugs = new Map<string, string[]>();
const missing: string[] = [];
const extra = Object.keys(COMMUNE_KEY_MAP).filter((k) => !data[k]);
for (const key of Object.keys(data)) {
  try {
    const slug = communeKeyToSlug(key);
    const bucket = slugs.get(slug) ?? [];
    bucket.push(key);
    slugs.set(slug, bucket);
  } catch {
    missing.push(key);
  }
}
const collisions = [...slugs.entries()].filter(([, ks]) => ks.length > 1);
console.log(
  `total: ${Object.keys(data).length}  mapped: ${slugs.size}  missing: ${missing.length}  collisions: ${collisions.length}  extra-in-map: ${extra.length}`
);
for (const m of missing) console.log(' missing rule:', m);
for (const [slug, ks] of collisions) console.log(' collision:', slug, '→', ks.join(', '));
for (const e of extra) console.log(' unused rule:', e);
