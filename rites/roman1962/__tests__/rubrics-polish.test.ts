import { buildLiturgicalYear1962 } from '../src/calendar-year';
import { Romcal1962 } from '../src/romcal-1962';
import { applyCommemorationCap } from '../src/rubrics/commemoration-cap';

describe('M8 rubrics polish', () => {
  describe('Class II Lord feast vs Class II Sunday (§15)', () => {
    test('1961-08-06 Transfiguration on after_pentecost_11_sunday → Transfiguration wins', () => {
      const year = buildLiturgicalYear1962(1961);
      const day = year['1961-08-06'];
      expect(day).toBeDefined();
      expect(day[0].kind).toBe('sancti');
      expect(day[0].key).toBe('the_transfiguration_of_our_lord_jesus_christ');
      expect(day[0].name).toMatch(/Transfiguratione|Transfiguratio/);
      const sundayCommem = day.slice(1).find((c) => c.key === 'after_pentecost_11_sunday');
      expect(sundayCommem).toBeDefined();
    });

    test('1958-09-14 Exaltation on after_pentecost_16_sunday → Exaltation wins', () => {
      const year = buildLiturgicalYear1962(1958);
      const day = year['1958-09-14'];
      expect(day).toBeDefined();
      expect(day[0].kind).toBe('sancti');
      expect(day[0].key).toBe('exaltation_of_the_holy_cross');
      const sundayCommem = day.slice(1).find((c) => c.key === 'after_pentecost_16_sunday');
      expect(sundayCommem).toBeDefined();
    });
  });

  describe('Greater Ferials of Advent (Dec 17–23)', () => {
    test('all Dec 17–23 ferias are Class II', () => {
      const year = buildLiturgicalYear1962(1962);
      for (const d of ['1962-12-17', '1962-12-18', '1962-12-19', '1962-12-20', '1962-12-22']) {
        const day = year[d];
        expect(day).toBeDefined();
        // 12-21 is St Thomas (Class II sancti); 12-23 is the Sunday — others are tempora ferias.
        if (day[0].kind === 'tempora') {
          expect(day[0].classOf1962).toBeLessThanOrEqual(2);
        }
      }
    });
  });

  describe('applyCommemorationCap', () => {
    const year = buildLiturgicalYear1962(1962);

    test("'all' is identity (same map reference is allowed but same data)", () => {
      const out = applyCommemorationCap(year, { mode: 'all' });
      // 'all' returns input unchanged.
      expect(out).toBe(year);
    });

    test("'private' caps every day to ≤1 commemoration", () => {
      const out = applyCommemorationCap(year, { mode: 'private' });
      for (const day of Object.values(out)) {
        expect(day.slice(1).length).toBeLessThanOrEqual(1);
      }
    });

    test("'solemn' caps every day to ≤3 commemorations", () => {
      const out = applyCommemorationCap(year, { mode: 'solemn' });
      for (const day of Object.values(out)) {
        expect(day.slice(1).length).toBeLessThanOrEqual(3);
      }
    });

    test('cap preserves precedence-desc ordering (top-N kept)', () => {
      // 1961-08-06 has after_pentecost_11_sunday (Class II Sunday) + Ss. Xysti (Class IV).
      // Under 'private', the Class II Sunday must survive.
      const y61 = buildLiturgicalYear1962(1961);
      const out = applyCommemorationCap(y61, { mode: 'private' });
      const day = out['1961-08-06'];
      expect(day.slice(1).length).toBe(1);
      expect(day[1].key).toBe('after_pentecost_11_sunday');
    });

    test('cap does not mutate input', () => {
      const before = JSON.stringify(year['1961-08-06']?.slice(1) ?? []);
      applyCommemorationCap(year, { mode: 'private' });
      const after = JSON.stringify(year['1961-08-06']?.slice(1) ?? []);
      expect(after).toBe(before);
    });
  });

  describe('Romcal1962 commemorationLimit config', () => {
    test("default 'all' leaves commemorations untouched", async () => {
      const r = new Romcal1962();
      const cal = await r.generateCalendar(1961);
      const day = cal['1961-08-06'];
      expect(day.slice(1).length).toBeGreaterThanOrEqual(2);
    });

    test("'private' caps end-to-end through the class API", async () => {
      const r = new Romcal1962({ commemorationLimit: 'private' });
      const cal = await r.generateCalendar(1961);
      for (const day of Object.values(cal)) {
        expect(day.slice(1).length).toBeLessThanOrEqual(1);
      }
    });

    test("'solemn' caps end-to-end through the class API", async () => {
      const r = new Romcal1962({ commemorationLimit: 'solemn' });
      const cal = await r.generateCalendar(1962);
      for (const day of Object.values(cal)) {
        expect(day.slice(1).length).toBeLessThanOrEqual(3);
      }
    });
  });

  describe('Vigil suppression on parent transfer', () => {
    test('1962 has no parent-feast transfers that strip a vigil (no regression)', () => {
      // No vigil-bearing parent feast transfers in 1962. This test
      // pins the no-op behavior so the suppression code does not
      // accidentally drop a legitimate vigil. Vigils that survive:
      // 06-23 (St John Baptist), 06-28 (P&P), 08-09 (St Lawrence),
      // 08-14 (Assumption), 12-24 (Christmas).
      const year = buildLiturgicalYear1962(1962);
      const survivors = ['1962-06-23', '1962-06-28', '1962-08-09', '1962-08-14', '1962-12-24'];
      for (const date of survivors) {
        const day = year[date];
        const hasVigilSomewhere = day[0]?.vigil !== undefined || day.slice(1).some((c) => c.vigil !== undefined);
        expect(hasVigilSomewhere).toBe(true);
      }
    });
  });
});
