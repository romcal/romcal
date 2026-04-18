import {
  Calendar,
  LiturgicalDayConfig,
  LiturgicalDayDef,
  Rite,
  RomcalCalendarMetadata,
  RomcalConfig,
} from '@internal/rite-roman1969';

import { Calendar1962 } from './calendar';
import { LiturgicalDay1962 } from './liturgical-day';
import { Romcal1962 } from './romcal';

describe('1962 OOP skeleton', () => {
  it('Romcal1962 instantiates without throwing', () => {
    expect(() => new Romcal1962()).not.toThrow();
    expect(new Romcal1962()).toBeInstanceOf(Romcal1962);
  });

  it('generateCalendar returns a populated Record<string, LiturgicalDay1962[]>', async () => {
    const romcal = new Romcal1962();
    const result = await romcal.generateCalendar(2024);
    const dates = Object.keys(result);
    expect(dates.length).toBeGreaterThan(0);
    const firstBucket = result[dates[0]];
    expect(Array.isArray(firstBucket)).toBe(true);
    expect(firstBucket.length).toBeGreaterThan(0);
    expect(firstBucket[0]).toBeInstanceOf(LiturgicalDay1962);
  });

  it('every produced day has rite === "roman1962"', async () => {
    const romcal = new Romcal1962();
    const result = await romcal.generateCalendar(2024);
    const days = Object.values(result).flat();
    expect(days.length).toBeGreaterThan(0);
    // `rite` is defined non-enumerable at runtime with value 'roman1962'; the
    // static type inherited from LiturgicalDay is 'roman1969' so we read via Rite.
    expect(days.every((d) => (d.rite as Rite) === 'roman1962')).toBe(true);
  });

  it('every produced day has a commemorations array and undefined octaveOf', async () => {
    // B2d-1 landed `postReduceDay` which populates `commemorations` from
    // occurrence losers. `octaveOf` remains unpopulated until B2d-2.
    const romcal = new Romcal1962();
    const result = await romcal.generateCalendar(2024);
    const days = Object.values(result).flat();
    expect(days.every((d) => Array.isArray(d.commemorations))).toBe(true);
    expect(days.every((d) => d.octaveOf === undefined)).toBe(true);
  });

  it('createLiturgicalDay on the subclass is dispatched via createCalendar', async () => {
    class CountingCalendar1962 extends Calendar1962 {
      public createCalls = 0;

      protected override createLiturgicalDay(
        def: LiturgicalDayDef,
        date: Date,
        ldConfig: LiturgicalDayConfig,
        calendar: RomcalCalendarMetadata,
        baseData: LiturgicalDay1962 | null,
        weekday: LiturgicalDay1962 | null
      ): LiturgicalDay1962 {
        this.createCalls += 1;
        return super.createLiturgicalDay(def, date, ldConfig, calendar, baseData, weekday);
      }
    }

    class TrackingRomcal1962 extends Romcal1962 {
      public lastCalendar?: CountingCalendar1962;

      protected override createCalendar(
        config: RomcalConfig,
        ldConfig: LiturgicalDayConfig
      ): Calendar<LiturgicalDay1962> {
        this.lastCalendar = new CountingCalendar1962(config, ldConfig);
        return this.lastCalendar;
      }
    }

    const romcal = new TrackingRomcal1962();
    const result = await romcal.generateCalendar(2024);
    const dayCount = Object.values(result).flat().length;
    expect(romcal.lastCalendar).toBeInstanceOf(CountingCalendar1962);
    expect(romcal.lastCalendar!.createCalls).toBeGreaterThanOrEqual(dayCount);
  });
});
