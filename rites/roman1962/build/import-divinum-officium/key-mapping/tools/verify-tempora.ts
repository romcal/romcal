import fs from 'node:fs';
import path from 'node:path';

import { temporaKeyToSlug } from '../tempora';

const data = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../../../data/tempora.json'), 'utf8')) as Record<
  string,
  unknown
>;

const slugs = new Map<string, string[]>();
const failures: string[] = [];
for (const key of Object.keys(data)) {
  try {
    const slug = temporaKeyToSlug(key);
    const bucket = slugs.get(slug) ?? [];
    bucket.push(key);
    slugs.set(slug, bucket);
  } catch (e) {
    failures.push(`${key}: ${(e as Error).message}`);
  }
}

const collisions = [...slugs.entries()].filter(([, ks]) => ks.length > 1);
console.log(
  `total: ${Object.keys(data).length}  mapped: ${slugs.size}  failures: ${failures.length}  collisions: ${collisions.length}`
);
if (failures.length > 0) {
  console.log('\n== failures ==');
  for (const f of failures) console.log(' ', f);
}
if (collisions.length > 0) {
  console.log('\n== collisions ==');
  for (const [slug, ks] of collisions) console.log(` ${slug}: ${ks.join(', ')}`);
}
