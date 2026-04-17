import { Switzerland_Chur } from '../src/calendars';
import { Romcal1962 } from '../src/romcal-1962';

describe('Romcal1962 — 1969-parity helpers', () => {
  describe('dates(year)', () => {
    test('returns the YearAnchors bundle for the requested year', () => {
      const r = new Romcal1962();
      const a = r.dates(2024);
      expect(a.year).toBe(2024);
      expect(a.easter).toBeInstanceOf(Date);
      expect(a.easter.getUTCFullYear()).toBe(2024);
      expect(a.advent1Sunday.getUTCFullYear()).toBe(2024);
      expect(a.septuagesima).toBeInstanceOf(Date);
    });

    test('accepts numeric string year', () => {
      const r = new Romcal1962();
      expect(r.dates('1962').year).toBe(1962);
    });

    test('rejects invalid year', () => {
      const r = new Romcal1962();
      expect(() => r.dates('not-a-year')).toThrow(/Invalid year/);
    });

    test('returns the same instance on repeated calls (per-year cache)', () => {
      const r = new Romcal1962();
      expect(r.dates(2024)).toBe(r.dates(2024));
    });

    test('1962 Easter falls on 1962-04-22', () => {
      const r = new Romcal1962();
      expect(r.dates(1962).easter.toISOString().slice(0, 10)).toBe('1962-04-22');
    });
  });

  describe('getAllDefinitions()', () => {
    test('returns a year-agnostic catalog keyed by celebration key', async () => {
      const r = new Romcal1962();
      const defs = await r.getAllDefinitions();
      expect(Object.keys(defs).length).toBeGreaterThan(100);
      const pentecost = defs['saint_francis_xavier_confessor'];
      expect(pentecost).toBeDefined();
      expect(pentecost.source).toBe('sancti');
      expect(pentecost.mmdd).toBe('12-03');
    });

    test('includes tempora definitions with officium names', async () => {
      const r = new Romcal1962();
      const defs = await r.getAllDefinitions();
      const feria = defs['advent_1_friday'];
      expect(feria).toBeDefined();
      expect(feria.source).toBe('tempora');
      expect(feria.name).toMatch(/Feria VI/);
      expect(feria.rank1962).toBe('ClassIV');
    });

    test('overlay entries override universal sancti for the same key', async () => {
      const r = new Romcal1962({ calendar: Switzerland_Chur });
      const defs = await r.getAllDefinitions();
      const lucius = defs['saint_lucius_of_chur_bishop_and_martyr_patron'];
      expect(lucius).toBeDefined();
      expect(lucius.source).toBe('overlay');
      expect(lucius.rank1962).toBe('ClassI');
    });

    test('result is memoized across calls', async () => {
      const r = new Romcal1962();
      const a = await r.getAllDefinitions();
      const b = await r.getAllDefinitions();
      expect(a).toBe(b);
    });

    test('without overlay, includes no diocesan-only entries', async () => {
      const r = new Romcal1962();
      const defs = await r.getAllDefinitions();
      expect(defs['saint_gerold_of_einsiedeln_hermit']).toBeUndefined();
    });
  });
});
