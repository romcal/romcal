import fs from 'node:fs';
import path from 'node:path';

import calendar from '../data/calendar-1960.json';
import communeData from '../data/commune.json';
import sanctiData from '../data/sancti.json';
import temporaData from '../data/tempora.json';

const DATA_DIR = path.resolve(__dirname, '../data');

const SLUG_RE = /^[a-z0-9][a-z0-9_]*$/;

// DO-shaped keys we should never see: Adv1-0, Pasc0-0, Quad6-0, Quadp3-3,
// Epi1-0a, Nat1-0, Pent24-0, PentEpi6-0, C1..C21, Cm*, CommC10, bare
// "07-22" as a file key (dates are still valid calendar keys). Retained
// as a guard against regressions even though the importer that produced
// these shapes has been removed.
const DO_SHAPED_RE = /^(Adv|Pasc|Pent|Quad|Quadp|Epi|Nat|PentEpi)\d.*$|^C\d+[a-z]*(\.txt)?$|^Cm[^/]*$|^CommC\d+$/;

describe('key-shape guard — data artifacts use readable slugs', () => {
  test('sancti.json keys are snake_case slugs', () => {
    const bad = Object.keys(sanctiData).filter((k) => !SLUG_RE.test(k) || DO_SHAPED_RE.test(k));
    expect(bad).toEqual([]);
  });

  test('tempora.json keys are snake_case slugs', () => {
    const bad = Object.keys(temporaData).filter((k) => !SLUG_RE.test(k) || DO_SHAPED_RE.test(k));
    expect(bad).toEqual([]);
  });

  test('commune.json keys are snake_case slugs', () => {
    const bad = Object.keys(communeData).filter((k) => !SLUG_RE.test(k) || DO_SHAPED_RE.test(k));
    expect(bad).toEqual([]);
  });

  test('calendar-1960 entries use slug keys (not MM-DD or DO keys)', () => {
    const bad: string[] = [];
    for (const [date, feasts] of Object.entries(calendar as Record<string, Array<{ key: string }>>)) {
      for (const f of feasts) {
        if (!SLUG_RE.test(f.key) || DO_SHAPED_RE.test(f.key)) {
          bad.push(`${date} → ${f.key}`);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  test('locale files key names by "source/slug" with slug-shaped targets', () => {
    const localeDir = path.resolve(__dirname, '../src/locales');
    const files = fs.readdirSync(localeDir).filter((f) => f.endsWith('.ts') && f !== 'index.ts');
    const ENTRY_RE = /'(sancti|tempora|commune)\/([^']+)'\s*:/g;
    const bad: string[] = [];
    for (const file of files) {
      const src = fs.readFileSync(path.join(localeDir, file), 'utf8');
      for (const match of src.matchAll(ENTRY_RE)) {
        const [, , slug] = match;
        if (!SLUG_RE.test(slug) || DO_SHAPED_RE.test(slug)) {
          bad.push(`${file}: ${match[0]}`);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  test('propers scaffold JSONs key entries by slug', () => {
    const structureDir = path.resolve(DATA_DIR, 'propers/_structure');
    const bad: string[] = [];
    for (const source of ['sancti', 'tempora', 'commune']) {
      const file = path.join(structureDir, `${source}.json`);
      const data = JSON.parse(fs.readFileSync(file, 'utf8')) as Record<string, unknown>;
      for (const key of Object.keys(data)) {
        if (!SLUG_RE.test(key) || DO_SHAPED_RE.test(key)) bad.push(`${source}.json: ${key}`);
      }
    }
    expect(bad).toEqual([]);
  });
});
