import fs from 'node:fs';
import path from 'node:path';

const DATA_DIR = path.resolve(__dirname, '../data');

function loadJson<T>(name: string): T {
  const raw = fs.readFileSync(path.join(DATA_DIR, name), 'utf8');
  return JSON.parse(raw) as T;
}

describe('divinum-officium importer output', () => {
  test('calendar-1960.json resolves Conversio S. Pauli on Jan 25', () => {
    const calendar =
      loadJson<Record<string, Array<{ name: string; class1962: number; rank1962: string }>>>('calendar-1960.json');
    expect(calendar['01-25']).toBeDefined();
    expect(calendar['01-25'][0].name).toMatch(/Conversione S\. Pauli/i);
    expect(calendar['01-25'][0].class1962).toBe(3);
    expect(calendar['01-25'][0].rank1962).toBe('ClassIII');
  });

  test('tempora.json is non-empty and has stable ids', () => {
    const tempora = loadJson<Record<string, { id: string; source: string }>>('tempora.json');
    const keys = Object.keys(tempora);
    expect(keys.length).toBeGreaterThan(400);
    for (const k of keys) {
      expect(tempora[k].id).toBe(`tempora/${k}`);
      expect(tempora[k].source).toBe('tempora');
    }
  });

  test('sancti.json carries rubric flags where they exist', () => {
    const sancti =
      loadJson<Record<string, { rubrics?: { gloria?: boolean; credo?: boolean; preface?: string } }>>('sancti.json');
    const withPreface = Object.values(sancti).filter((e) => e.rubrics?.preface);
    expect(withPreface.length).toBeGreaterThan(50);
  });

  test('commune.json includes the standard 1962 Commons', () => {
    const commune = loadJson<Record<string, unknown>>('commune.json');
    expect(Object.keys(commune).length).toBeGreaterThan(40);
  });
});
