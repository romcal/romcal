import fs from 'node:fs';
import path from 'node:path';

import { buildSanctoral1962 } from '../src/sanctoral';
import { deriveCommuneSlug } from '../src/sanctoral/commune-ref';
import { detectVigil } from '../src/sanctoral/vigil';

const DATA_DIR = path.resolve(__dirname, '../data');

function loadJson<T>(name: string): T {
  return JSON.parse(fs.readFileSync(path.join(DATA_DIR, name), 'utf8')) as T;
}

describe('buildSanctoral1962 — authoritative 1960 ranks', () => {
  const map = buildSanctoral1962(1962);

  test.each([
    ['1962-12-25', 'ClassI', /Nativitate|Christi/i],
    ['1962-01-01', 'ClassII', /Circumcisione/i],
    ['1962-01-06', 'ClassI', /Epiphan/i],
    ['1962-11-01', 'ClassI', /Omnium Sanctorum/i],
    ['1962-12-08', 'ClassI', /Immaculata|Conceptione/i],
    ['1962-06-24', 'ClassI', /Nativitate.+Joannis/i],
    ['1962-08-15', 'ClassI', /Assumptione|Beatae Mariae|BMV/i],
    ['1962-09-14', 'ClassII', /Exaltatione|Sanctae Crucis/i],
    ['1962-06-29', 'ClassI', /Petri et Pauli|Apostolorum/i],
    ['1962-02-02', 'ClassII', /Purificatione/i],
    ['1962-03-17', 'ClassIII', /Patritii|Patricii/i],
    ['1962-01-25', 'ClassIII', /Conversione.+Pauli/i],
  ])('%s has rank %s matching %s', (iso, rank, nameRe) => {
    const entries = map.get(iso);
    expect(entries).toBeDefined();
    expect(entries![0].rank1962).toBe(rank);
    expect(entries![0].name).toMatch(nameRe);
  });

  test('All Saints 1962 is Class I (rank-source fix over kalendarium)', () => {
    const entry = map.get('1962-11-01')![0];
    expect(entry.rank1962).toBe('ClassI');
    expect(entry.numericRank).toBeGreaterThanOrEqual(6);
  });

  test('Circumcision 01-01 carries Christmas-octave day 8', () => {
    const entry = map.get('1962-01-01')![0];
    expect(entry.octave).toBeDefined();
    expect(entry.octave?.id).toBe('christmas');
    expect(entry.octave?.day).toBe(8);
    expect(entry.octave?.kind).toBe('octaveDay');
  });
});

describe('buildSanctoral1962 — vigils', () => {
  const map = buildSanctoral1962(1962);

  test('Vigil of Ss. Peter & Paul on June 28 sets vigil.of', () => {
    const entry = map.get('1962-06-28')![0];
    expect(entry.vigil).toBeDefined();
    expect(entry.vigil?.of).toMatch(/Petri et Pauli/);
  });

  test('Non-vigil feast has no vigil field', () => {
    const entry = map.get('1962-06-29')![0];
    expect(entry.vigil).toBeUndefined();
  });
});

describe('buildSanctoral1962 — leap year rule', () => {
  test('Feb 29 on a leap year has no sanctoral entry', () => {
    const map = buildSanctoral1962(2000);
    expect(map.has('2000-02-29')).toBe(false);
  });

  test('Feb 29 does not appear on a non-leap year', () => {
    const map = buildSanctoral1962(1962);
    expect(map.has('1962-02-29')).toBe(false);
  });
});

describe('buildSanctoral1962 — coverage', () => {
  const calendar = loadJson<Record<string, Array<{ fileKey: string }>>>('calendar-1960.json');
  const sancti = loadJson<Record<string, unknown>>('sancti.json');
  const tempora = loadJson<Record<string, unknown>>('tempora.json');

  test('every fileKey in calendar-1960.json resolves in sancti or tempora', () => {
    const missing: string[] = [];
    for (const entries of Object.values(calendar)) {
      for (const e of entries) {
        if (!(e.fileKey in sancti) && !(e.fileKey in tempora)) {
          missing.push(e.fileKey);
        }
      }
    }
    expect(missing).toEqual([]);
  });

  test('M3 sanctoral-owned dates all have a sanctoral entry in M4', () => {
    const map = buildSanctoral1962(1962);
    for (const mmdd of ['12-24', '12-25', '12-26', '12-27', '12-28', '01-01', '01-06']) {
      expect(map.has(`1962-${mmdd}`)).toBe(true);
    }
  });

  test('buildSanctoral1962 is idempotent', () => {
    const a = buildSanctoral1962(1962);
    const b = buildSanctoral1962(1962);
    expect(a.size).toBe(b.size);
    for (const [k, v] of a.entries()) {
      expect(b.get(k)).toEqual(v);
    }
  });
});

describe('deriveCommuneSlug', () => {
  test('returns undefined when no Commune references', () => {
    expect(deriveCommuneSlug({ Introitus: 'Tempora/Nat30' })).toBeUndefined();
  });

  test('returns the shared base when all Commune refs agree', () => {
    expect(deriveCommuneSlug({ Offertorium: 'Commune/C3a-1', Secreta: 'Commune/C3a' })).toBe('C3a');
  });

  test('returns undefined when Commune refs disagree', () => {
    expect(deriveCommuneSlug({ Offertorium: 'Commune/C3a', Secreta: 'Commune/C3b' })).toBeUndefined();
  });

  test('strips :Section suffix', () => {
    expect(deriveCommuneSlug({ x: 'Commune/C5:Evangelium' })).toBe('C5');
  });
});

describe('detectVigil', () => {
  test('"Vigilia …" returns the feast fragment', () => {
    expect(detectVigil('Vigilia S. Laurentii Martyris')).toBe('S. Laurentii Martyris');
  });

  test('"In Vigilia …" also matches', () => {
    expect(detectVigil('In Vigilia Omnium Sanctorum')).toBe('Omnium Sanctorum');
  });

  test('non-vigil returns undefined', () => {
    expect(detectVigil('S. Patritii Episcopi et Conf')).toBeUndefined();
  });
});
