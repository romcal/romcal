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

  describe('getOneLiturgicalDay(id, opts?)', () => {
    test('unknown id → undefined', async () => {
      const r = new Romcal1962();
      await expect(r.getOneLiturgicalDay('not_a_real_key', { year: 1962 })).resolves.toBeUndefined();
    });

    test('tempora partial — easter_sunday lands on 1962-04-22 (no rubrics needed)', async () => {
      const r = new Romcal1962();
      const day = await r.getOneLiturgicalDay('easter_sunday', { year: 1962 });
      expect(day).toBeDefined();
      expect(day!.key).toBe('easter_sunday');
      expect(day!.kind).toBe('tempora');
      expect(day!.date).toBe('1962-04-22');
    });

    test('sancti partial — all_saints on 1962-11-01 from mmdd', async () => {
      const r = new Romcal1962();
      const day = await r.getOneLiturgicalDay('all_saints', { year: 1962 });
      expect(day).toBeDefined();
      expect(day!.kind).toBe('sancti');
      expect(day!.date).toBe('1962-11-01');
    });

    test('default year falls back to current civil year (smoke: returns something for easter_sunday)', async () => {
      const r = new Romcal1962();
      const day = await r.getOneLiturgicalDay('easter_sunday');
      expect(day).toBeDefined();
      expect(day!.key).toBe('easter_sunday');
      expect(day!.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });

    test('partial skips rubric precedence — returns the raw celebration', async () => {
      // 1968-12-08 is Advent II Sunday (tempora) which *beats* the
      // Immaculate Conception (sancti Class I). The partial should
      // still return IC at its natural mmdd date, before any
      // occurrence/transfer logic.
      const r = new Romcal1962();
      const day = await r.getOneLiturgicalDay('immaculate_conception_of_the_blessed_virgin_mary', {
        year: 1968,
      });
      expect(day).toBeDefined();
      expect(day!.date).toBe('1968-12-08');
      expect(day!.isTransferredReplacement).toBeUndefined();
    });

    test('computeInWholeYear=true — IC in 1968 surfaces at its transferred date, not 12-08', async () => {
      const r = new Romcal1962();
      const day = await r.getOneLiturgicalDay('immaculate_conception_of_the_blessed_virgin_mary', {
        year: 1968,
        computeInWholeYear: true,
      });
      expect(day).toBeDefined();
      expect(day!.date).not.toBe('1968-12-08');
      expect(day!.isTransferredReplacement).toBe(true);
      expect(day!.transferredFromDate).toBe('1968-12-08');
    });

    test('computeInWholeYear=true — returns the occurrence primary even when not transferred', async () => {
      const r = new Romcal1962();
      const day = await r.getOneLiturgicalDay('easter_sunday', {
        year: 1962,
        computeInWholeYear: true,
      });
      expect(day).toBeDefined();
      expect(day!.date).toBe('1962-04-22');
      // season propagated onto the resolved celebration
      expect(day!.season).toBeDefined();
    });

    test('overlay lookup — diocesan key resolves via overlay chain', async () => {
      const r = new Romcal1962({ calendar: Switzerland_Chur });
      const day = await r.getOneLiturgicalDay('saint_lucius_of_chur_bishop_and_martyr_patron', { year: 1962 });
      expect(day).toBeDefined();
      expect(day!.kind).toBe('sancti');
      expect(day!.date).toMatch(/^1962-/);
    });

    test('accepts string year', async () => {
      const r = new Romcal1962();
      const day = await r.getOneLiturgicalDay('easter_sunday', { year: '1962' });
      expect(day!.date).toBe('1962-04-22');
    });

    test('invalid year rejects', async () => {
      const r = new Romcal1962();
      await expect(r.getOneLiturgicalDay('easter_sunday', { year: 'nope' })).rejects.toThrow(/Invalid year/);
    });
  });
});
