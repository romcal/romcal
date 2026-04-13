import fs from 'node:fs';
import path from 'node:path';

import { buildProperOfTime1962 } from '../src/proper-of-time';

const DATA_DIR = path.resolve(__dirname, '../data');

function loadTempora(): Record<string, unknown> {
  const raw = fs.readFileSync(path.join(DATA_DIR, 'tempora.json'), 'utf8');
  return JSON.parse(raw) as Record<string, unknown>;
}

describe('buildProperOfTime1962 — 1962 spot checks', () => {
  const map = buildProperOfTime1962(1962);

  test('Epiphany (Jan 6) is sancti-owned and absent', () => {
    expect(map.has('1962-01-06')).toBe(false);
  });

  test('Holy Family = first Sunday after Epiphany → Epi1-0a', () => {
    const entry = map.get('1962-01-07');
    expect(entry?.temporaKey).toBe('Epi1-0a');
    expect(entry?.kind).toBe('feast');
  });

  test('Ash Wednesday 1962 = March 7 → Quadp3-3', () => {
    const entry = map.get('1962-03-07');
    expect(entry?.temporaKey).toBe('Quadp3-3');
    expect(entry?.season).toBe('Septuagesima');
  });

  test('Palm Sunday 1962 = April 15 → Quad6-0', () => {
    const entry = map.get('1962-04-15');
    expect(entry?.temporaKey).toBe('Quad6-0');
    expect(entry?.season).toBe('HolyWeek');
  });

  test('Easter Sunday 1962 = April 22 → Pasc0-0', () => {
    const entry = map.get('1962-04-22');
    expect(entry?.temporaKey).toBe('Pasc0-0');
    expect(entry?.season).toBe('EasterWeek');
  });

  test('Ascension Thursday 1962 = May 31 → Pasc5-4', () => {
    const entry = map.get('1962-05-31');
    expect(entry?.temporaKey).toBe('Pasc5-4');
  });

  test('Pentecost Sunday 1962 = June 10 → Pasc7-0', () => {
    const entry = map.get('1962-06-10');
    expect(entry?.temporaKey).toBe('Pasc7-0');
  });

  test('Trinity Sunday 1962 = June 17 → Pent01-0', () => {
    const entry = map.get('1962-06-17');
    expect(entry?.temporaKey).toBe('Pent01-0');
    expect(entry?.season).toBe('TimeAfterPentecost');
  });

  test('Advent I 1962 = December 2 → Adv1-0', () => {
    const entry = map.get('1962-12-02');
    expect(entry?.temporaKey).toBe('Adv1-0');
    expect(entry?.season).toBe('Advent');
  });

  test('Christmas Day (Dec 25) is sancti-owned and absent', () => {
    expect(map.has('1962-12-25')).toBe(false);
  });

  test('Sunday within Christmas Octave 1962 = Dec 30 → Nat1-0', () => {
    const entry = map.get('1962-12-30');
    expect(entry?.temporaKey).toBe('Nat1-0');
  });
});

describe('buildProperOfTime1962 — edge years', () => {
  test('2008 (Easter very early, March 23) produces resumed PentEpi Sundays', () => {
    const map = buildProperOfTime1962(2008);
    const hasPentEpi = [...map.values()].some((e) => e.temporaKey.startsWith('PentEpi') && e.kind === 'sunday');
    expect(hasPentEpi).toBe(true);
    // Pent24-0 is always the final Sunday before Advent
    const advent1 = [...map.values()].find((e) => e.temporaKey === 'Adv1-0' && e.date.startsWith('2008-'));
    expect(advent1).toBeDefined();
  });

  test('2011 (Easter late, April 24) has no resumed PentEpi Sundays', () => {
    const map = buildProperOfTime1962(2011);
    const hasPentEpi = [...map.values()].some((e) => e.temporaKey.startsWith('PentEpi'));
    expect(hasPentEpi).toBe(false);
  });

  test('Pent24-0 is always the last Sunday before Advent I', () => {
    for (const year of [1962, 2008, 2011]) {
      const map = buildProperOfTime1962(year);
      const pent24 = [...map.values()].find((e) => e.temporaKey === 'Pent24-0' && e.date.startsWith(`${year}-`));
      expect(pent24).toBeDefined();
    }
  });
});

describe('buildProperOfTime1962 — tempora key coverage', () => {
  const tempora = loadTempora();

  test('every emitted temporaKey exists in tempora.json', () => {
    const map = buildProperOfTime1962(1962);
    const missing: string[] = [];
    for (const entry of map.values()) {
      if (!(entry.temporaKey in tempora)) missing.push(entry.temporaKey);
    }
    expect(missing).toEqual([]);
  });

  test('idempotent: two builds produce structurally equal maps', () => {
    const a = buildProperOfTime1962(1962);
    const b = buildProperOfTime1962(1962);
    expect(a.size).toBe(b.size);
    for (const [k, v] of a.entries()) {
      expect(b.get(k)).toEqual(v);
    }
  });
});
