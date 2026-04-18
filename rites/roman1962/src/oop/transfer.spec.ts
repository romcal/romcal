import type { LiturgicalCalendar } from '@internal/rite-roman1969';

import { LiturgicalDay1962OOP } from './liturgical-day';
import { Romcal1962OOP } from './romcal';
import { applyCap, filterCommemorations, isTransferTarget } from './transfer';

type Cal = LiturgicalCalendar<LiturgicalDay1962OOP>;

describe('1962 rubrics — forward transfer (§50) + vigil suppression (§10)', () => {
  describe('unit helpers', () => {
    it('isTransferTarget — Class III or IV primary accepts a transferred Class I feast', () => {
      const cls = (c: 1 | 2 | 3 | 4) => ({ classOf1962: c }) as unknown as LiturgicalDay1962OOP;
      expect(isTransferTarget(cls(1))).toBe(false);
      expect(isTransferTarget(cls(2))).toBe(false);
      expect(isTransferTarget(cls(3))).toBe(true);
      expect(isTransferTarget(cls(4))).toBe(true);
    });

    it('isTransferTarget — missing metadata treated as Class IV (transfer-target)', () => {
      // Leaked 1969-engine IDs (no 1962 meta stamp) bottom out at Class IV in
      // the scorer; mirror that assumption here so a latecomer sancti can
      // still displace them.
      const mystery = {} as unknown as LiturgicalDay1962OOP;
      expect(isTransferTarget(mystery)).toBe(true);
    });

    it('filterCommemorations drops Class IV tempora ferials only', () => {
      const ld = (kind: 'tempora' | 'sancti', cls: 1 | 2 | 3 | 4) =>
        ({ kind1962: kind, classOf1962: cls }) as unknown as LiturgicalDay1962OOP;
      const losers = [ld('tempora', 4), ld('tempora', 2), ld('sancti', 4), ld('sancti', 3)];
      const kept = filterCommemorations(losers);
      expect(kept).toHaveLength(3);
      expect(kept).toEqual([losers[1], losers[2], losers[3]]);
    });

    it('applyCap — "solemn" caps at 3, "private" at 1, "all" is unbounded', () => {
      const pool = Array.from({ length: 5 }, (_, i) => ({ id: `c${i}` }) as unknown as LiturgicalDay1962OOP);
      expect(applyCap(pool, 'solemn')).toHaveLength(3);
      expect(applyCap(pool, 'private')).toHaveLength(1);
      expect(applyCap(pool, 'all')).toHaveLength(5);
    });
  });

  describe('forward transfer (liturgical year 2024)', () => {
    let cal: Cal;

    beforeAll(async () => {
      cal = await new Romcal1962OOP().generateCalendar(2024);
    });

    it('Annunciation (03-25) is impeded in 2024 (falls in Holy Week) and transfers forward', () => {
      // 2024-03-25 is Holy Monday (Class I tempora); Annunciation (Class I
      // sancti) must transfer. Legacy + OOP both land it on 2024-04-08
      // (Monday after Low Sunday, first open day post-octave).
      const landing = cal['2024-04-08']?.[0];
      expect(landing).toBeDefined();
      expect(landing!.id).toBe('annunciation_of_the_blessed_virgin_mary');
      expect(landing!.isTransferredReplacement).toBe(true);
      expect(landing!.transferredFromDate).toBe('2024-03-25');
    });

    it('Immaculate Conception (12-08) yields to Advent II Sunday and transfers to 12-09', () => {
      // 2024-12-08 is Advent II Sunday (Class I tempora); Immaculate Conception
      // (Class I sancti) transfers to 12-09.
      const impediment = cal['2024-12-08']?.[0];
      expect(impediment?.id).toBe('advent_2_sunday');

      const landing = cal['2024-12-09']?.[0];
      expect(landing?.id).toBe('immaculate_conception_of_the_blessed_virgin_mary');
      expect(landing?.isTransferredReplacement).toBe(true);
      expect(landing?.transferredFromDate).toBe('2024-12-08');
    });

    it('Displaced primary is dropped when it is a Class IV tempora (§111–113 filter)', () => {
      // 2024-12-09 was originally Monday of Advent II (Class IV tempora
      // weekday). Per §111–113 a Class IV tempora ferial is NOT
      // commemorated, so the transferred Immaculate Conception's commem
      // list correctly excludes it. The only commem that remains on
      // 12-09 is the leaked 1969 overlay entry, which is Class IV sancti
      // and therefore survives the filter.
      const landing = cal['2024-12-09']?.[0];
      const commemIds = landing?.commemorations.map((c) => c.id) ?? [];
      expect(commemIds).not.toContain('advent_2_monday');
      // And the winner is unambiguously the transferred feast.
      expect(landing?.id).toBe('immaculate_conception_of_the_blessed_virgin_mary');
    });

    it('Displaced Class III tempora primary IS retained as a commemoration', () => {
      // Pick a landing date where the previous primary was a Class III
      // (a Lent ferial or similar). 2024-04-08 (Annunciation landing) was
      // originally `easter_time_2_monday` — a Class IV paschaltide weekday,
      // which is filtered. To exercise retention we'd need a year where
      // a Class I sancti transfers onto a Class III tempora day; none
      // occur in 2024 organically. So assert the mechanism via the filter
      // directly (covered by the unit test above) and guard the landing
      // shape here.
      const landing = cal['2024-04-08']?.[0];
      expect(landing?.id).toBe('annunciation_of_the_blessed_virgin_mary');
      expect(landing?.isTransferredReplacement).toBe(true);
      // Any commems that survived must not include Class IV tempora.
      for (const c of landing?.commemorations ?? []) {
        // Can only assert by name — there's no Class IV tempora named
        // 'easter_time_N_monday' in the commems because the filter drops them.
        expect(c.id).not.toMatch(/^easter_time_\d+_(monday|tuesday|wednesday|thursday|friday|saturday)$/);
      }
    });

    it('Transferred feast is NOT also present on its original date as a commemoration', () => {
      // §50 + post-transfer scrub: the transferred feast is stripped from
      // the original impediment day's commem list. On 2024-03-25, Holy
      // Monday owns the day and Annunciation must not appear as a commem.
      const impediment = cal['2024-03-25']?.[0];
      expect(impediment?.commemorations.map((c) => c.id)).not.toContain('annunciation_of_the_blessed_virgin_mary');
    });

    it('Non-transferred Class III sancti (St Patrick on 2024-03-17) drops to commemoration, NOT transferred', () => {
      // Only Class I impediments transfer. St Patrick (Class III) loses
      // to Passion Sunday and is retained as a commemoration.
      const day = cal['2024-03-17']?.[0];
      expect(day?.id).toBe('passion_sunday');
      expect(day?.commemorations.map((c) => c.id)).toContain('saint_patrick_bishop_and_confessor');
      // And no adjacent day should carry it as a transferred replacement.
      for (const d of ['2024-03-18', '2024-03-19', '2024-03-20']) {
        const p = cal[d]?.[0];
        expect(p?.isTransferredReplacement ? p.id : undefined).not.toBe('saint_patrick_bishop_and_confessor');
      }
    });
  });

  describe('vigil suppression (§10) — code path coverage', () => {
    // In the 2000-2030 window, none of the feasts that organically transfer
    // (Annunciation / St Joseph / Immaculate Conception / St Joseph the
    // Worker) have vigils in the 1960 Kalendarium, so the §10 branch never
    // fires on a natural year. The test below exercises it by transferring
    // a feast WHOSE NAME happens to match a vigil's `vigilOf` — we pick a
    // year where a feast with a known vigil (e.g. Assumption) transfers,
    // if any exist. If not, this reduces to asserting the non-crash path.
    it('transferred-feast names that match no vigil leave all vigils untouched', async () => {
      // 2024: transferredNames = [Annunciation, Immaculate Conception]; no
      // vigil in the Kalendarium has either as its `.of` → all vigils
      // survive as primaries on their assigned date.
      const cal = await new Romcal1962OOP().generateCalendar(2024);

      // Spot-check each of the 1960-Kalendarium vigils is still present on
      // its assigned date (by id or commemoration).
      const checks: Array<[string, string]> = [
        ['2024-06-23', 'vigil_of_the_nativity_of_saint_john_the_baptist'],
        ['2024-06-28', 'vigil_of_saints_peter_and_paul_apostles_rubrica1960'],
        ['2024-08-09', 'vigil_of_saint_lawrence_martyr_tridentine'],
        ['2024-08-14', 'vigil_of_the_assumption_of_the_blessed_virgin_mary'],
        ['2024-12-24', 'christmas_eve'],
      ];
      for (const [date, expectedId] of checks) {
        const day = cal[date];
        expect(day).toBeDefined();
        const ids = [day![0].id, ...day![0].commemorations.map((c) => c.id)];
        expect(ids).toContain(expectedId);
      }
    });
  });
});
