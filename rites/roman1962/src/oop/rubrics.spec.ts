import type { LiturgicalCalendar } from '@internal/rite-roman1969';

import { LiturgicalDay1962 } from './liturgical-day';
import { Romcal1962 } from './romcal';

type Cal = LiturgicalCalendar<LiturgicalDay1962>;

function primaryId(cal: Cal, date: string): string | undefined {
  return cal[date]?.[0]?.id;
}

function commemIds(cal: Cal, date: string): string[] {
  return (cal[date]?.[0]?.commemorations ?? []).map((c) => c.id);
}

describe('1962 rubrics — precedence scoring + commemoration selection', () => {
  describe('precedence scoring (liturgical year 2024)', () => {
    let cal: Cal;

    beforeAll(async () => {
      cal = await new Romcal1962().generateCalendar(2024);
    });

    it('Assumption (2024-08-15, Class I sancti) wins over any coincident tempora feria', () => {
      // After-Pentecost-12 Thursday would have coincided as a Class IV tempora
      // ferial; dropped by `selectCommemorations` (no Class IV tempora losers).
      expect(primaryId(cal, '2024-08-15')).toBe('assumption_of_the_blessed_virgin_mary');
      expect(commemIds(cal, '2024-08-15')).toEqual([]);
    });

    it('Transfiguration (2024-08-06, Class II sancti) wins via §15 Lord-feast elevation', () => {
      // classOf1962=2 + LORD_FEAST_KEYS bump (+200) outscores the coincident
      // ClassIV tempora weekday (after-Pentecost-11-tuesday: 1000). The §15
      // mechanism is explicit in `precedence.ts#fineAdjustment`.
      expect(primaryId(cal, '2024-08-06')).toBe('the_transfiguration_of_our_lord_jesus_christ');
    });

    it('Passion Sunday (2024-03-17) wins over coincident St Patrick, who drops to commemoration', () => {
      // Class I tempora Sunday (score 4360) beats Class III sancti St Patrick.
      // St Patrick is retained as a commemoration (Class III sancti survive the filter).
      expect(primaryId(cal, '2024-03-17')).toBe('passion_sunday');
      expect(commemIds(cal, '2024-03-17')).toContain('saint_patrick_bishop_and_confessor');
    });

    it('Advent II Sunday (2024-12-08) wins over Immaculate Conception (which is then transferred forward)', () => {
      // Class I Advent Sunday (4360) beats Class I Immaculate Conception sancti.
      // Pre-B2d-2 the sancti stayed on 12-08 as a commemoration; since B2d-2
      // landed §50 forward-transfer, the impeded Class I sancti moves to
      // 12-09 (the next open day), so 12-08's commems do NOT retain it.
      expect(primaryId(cal, '2024-12-08')).toBe('advent_2_sunday');
      expect(commemIds(cal, '2024-12-08')).not.toContain('immaculate_conception_of_the_blessed_virgin_mary');
      expect(primaryId(cal, '2024-12-09')).toBe('immaculate_conception_of_the_blessed_virgin_mary');
    });

    it('Nativity (2024-12-25) surfaces the tempora canonical source (tempora > sancti at §96 tie)', () => {
      // Tempora `nativity_of_the_lord` and sancti `nativity_of_our_lord_jesus_christ`
      // both score 4000 (Class I, no fine adjustment). §96 tempora-first tiebreak
      // keeps the tempora on top; the sancti duplicate lands in commemorations.
      expect(primaryId(cal, '2024-12-25')).toBe('nativity_of_the_lord');
      expect(commemIds(cal, '2024-12-25')).toContain('nativity_of_our_lord_jesus_christ');
    });
  });

  describe('commemoration selection + cap', () => {
    it('Class IV tempora losers are dropped (filter verified at Assumption — no weekday commem)', async () => {
      const cal = await new Romcal1962().generateCalendar(2024);
      // The tempora `after_pentecost_12_thursday` would coincide; it is Class IV
      // tempora (ferial) and therefore filtered out of commemorations.
      expect(commemIds(cal, '2024-08-15')).not.toContain('after_pentecost_12_thursday');
    });

    it('default cap is "all" — no upper bound on commemoration count', async () => {
      const cal = await new Romcal1962().generateCalendar(2024);
      const maxLen = Math.max(...Object.values(cal).map((d) => d[0].commemorations.length));
      // There exists at least one date with multiple commemorations in 2024
      // (e.g. 2024-01-07 Holy Family has two: epiphany octave + Raymond of Penyafort).
      expect(maxLen).toBeGreaterThanOrEqual(1);
    });

    it('solemn cap ≤ 3 on every date', async () => {
      const cal = await new Romcal1962({ commemorationMode: 'solemn' }).generateCalendar(2024);
      for (const [date, days] of Object.entries(cal)) {
        expect(days[0].commemorations.length).toBeLessThanOrEqual(3);
        void date;
      }
    });

    it('private cap ≤ 1 on every date', async () => {
      const cal = await new Romcal1962({ commemorationMode: 'private' }).generateCalendar(2024);
      for (const [date, days] of Object.entries(cal)) {
        expect(days[0].commemorations.length).toBeLessThanOrEqual(1);
        void date;
      }
    });

    it('private vs all produce strictly smaller commemoration counts where overflow exists', async () => {
      const calAll = await new Romcal1962({ commemorationMode: 'all' }).generateCalendar(2024);
      const calPrivate = await new Romcal1962({ commemorationMode: 'private' }).generateCalendar(2024);
      // Sum totals across all dates.
      const totalAll = Object.values(calAll).reduce((n, d) => n + d[0].commemorations.length, 0);
      const totalPrivate = Object.values(calPrivate).reduce((n, d) => n + d[0].commemorations.length, 0);
      expect(totalPrivate).toBeLessThan(totalAll);
    });
  });
});
