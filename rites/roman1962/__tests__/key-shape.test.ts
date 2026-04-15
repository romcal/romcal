import fs from 'node:fs';
import path from 'node:path';

import calendar from '../data/calendar-1960.json';
import communeData from '../data/commune.json';
import sanctiData from '../data/sancti.json';
import temporaData from '../data/tempora.json';

const DATA_DIR = path.resolve(__dirname, '../data');

const SLUG_RE = /^[a-z0-9][a-z0-9_]*$/;

// DO-shaped keys we should never see after remap: Adv1-0, Pasc0-0, Quad6-0,
// Quadp3-3, Epi1-0a, Nat1-0, Pent24-0, PentEpi6-0, C1..C21, Cm*, CommC10,
// bare "07-22" as a file key (dates are still valid calendar keys).
const DO_SHAPED_RE = /^(Adv|Pasc|Pent|Quad|Quadp|Epi|Nat|PentEpi)\d.*$|^C\d+[a-z]*(\.txt)?$|^Cm[^/]*$|^CommC\d+$/;

describe('key-shape guard — emitted artifacts use readable slugs', () => {
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

  test('calendar-1960 entries use slug fileKeys (not MM-DD or DO keys)', () => {
    const bad: string[] = [];
    for (const [date, feasts] of Object.entries(calendar as Record<string, Array<{ fileKey: string }>>)) {
      for (const f of feasts) {
        if (!SLUG_RE.test(f.fileKey) || DO_SHAPED_RE.test(f.fileKey)) {
          bad.push(`${date} → ${f.fileKey}`);
        }
      }
    }
    expect(bad).toEqual([]);
  });

  test('sancti.json entry ids start with "sancti/<slug>"', () => {
    const bad = Object.entries(sanctiData as Record<string, { id: string }>)
      .filter(([slug, e]) => e.id !== `sancti/${slug}`)
      .map(([slug, e]) => `${slug}: ${e.id}`);
    expect(bad).toEqual([]);
  });

  test('tempora.json entry ids start with "tempora/<slug>"', () => {
    const bad = Object.entries(temporaData as Record<string, { id: string }>)
      .filter(([slug, e]) => e.id !== `tempora/${slug}`)
      .map(([slug, e]) => `${slug}: ${e.id}`);
    expect(bad).toEqual([]);
  });

  test('commune.json entry ids start with "commune/<slug>"', () => {
    const bad = Object.entries(communeData as Record<string, { id: string }>)
      .filter(([slug, e]) => e.id !== `commune/${slug}`)
      .map(([slug, e]) => `${slug}: ${e.id}`);
    expect(bad).toEqual([]);
  });

  test('inline ref tokens contain no DO-shaped target keys', () => {
    // Broken/unknown refs that DO itself never resolved are left verbatim
    // by rewriteRef (see remap-entries.ts) — the test only flags refs
    // whose shape matches a known DO naming convention (Adv1-0, C5, Nat1-0).
    interface EntryShape {
      references?: Record<string, string>;
      sections?: Record<string, Array<{ type: string; target?: string }>>;
    }
    const bundles: Array<[string, Record<string, EntryShape>]> = [
      ['sancti', sanctiData as Record<string, EntryShape>],
      ['tempora', temporaData as Record<string, EntryShape>],
      ['commune', communeData as Record<string, EntryShape>],
    ];
    const REF_RE = /^(Sancti|Tempora|Commune)\/([^:\s]+)(:.+)?$/;
    const bad: string[] = [];
    for (const [bundle, data] of bundles) {
      for (const [slug, entry] of Object.entries(data)) {
        for (const [name, target] of Object.entries(entry.references ?? {})) {
          const m = REF_RE.exec(target);
          if (!m) continue;
          const [, , targetKey] = m;
          if (DO_SHAPED_RE.test(targetKey)) {
            bad.push(`${bundle}/${slug}.references.${name} → ${target}`);
          }
        }
        for (const [sectionName, items] of Object.entries(entry.sections ?? {})) {
          for (const item of items) {
            if (item.type !== 'ref' || !item.target) continue;
            const m = REF_RE.exec(item.target);
            if (!m) continue;
            const [, , targetKey] = m;
            if (DO_SHAPED_RE.test(targetKey)) {
              bad.push(`${bundle}/${slug}.sections.${sectionName} → ${item.target}`);
            }
          }
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
