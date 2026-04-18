import {
  Calendar,
  LiturgicalDayConfig,
  LiturgicalDayDef,
  Rite,
  RomcalCalendarMetadata,
  RomcalConfig,
} from '@internal/rite-roman1969';

import { Calendar1962OOP } from './calendar';
import { LiturgicalDay1962OOP } from './liturgical-day';
import { Romcal1962OOP } from './romcal';

describe('1962 OOP skeleton', () => {
  it('Romcal1962OOP instantiates without throwing', () => {
    expect(() => new Romcal1962OOP()).not.toThrow();
    expect(new Romcal1962OOP()).toBeInstanceOf(Romcal1962OOP);
  });

  it('generateCalendar returns a populated Record<string, LiturgicalDay1962OOP[]>', async () => {
    const romcal = new Romcal1962OOP();
    const result = await romcal.generateCalendar(2024);
    const dates = Object.keys(result);
    expect(dates.length).toBeGreaterThan(0);
    const firstBucket = result[dates[0]];
    expect(Array.isArray(firstBucket)).toBe(true);
    expect(firstBucket.length).toBeGreaterThan(0);
    expect(firstBucket[0]).toBeInstanceOf(LiturgicalDay1962OOP);
  });

  it('every produced day has rite === "roman1962"', async () => {
    const romcal = new Romcal1962OOP();
    const result = await romcal.generateCalendar(2024);
    const days = Object.values(result).flat();
    expect(days.length).toBeGreaterThan(0);
    // `rite` is defined non-enumerable at runtime with value 'roman1962'; the
    // static type inherited from LiturgicalDay is 'roman1969' so we read via Rite.
    expect(days.every((d) => (d.rite as Rite) === 'roman1962')).toBe(true);
  });

  it('every produced day has an empty commemorations array and undefined octaveOf', async () => {
    const romcal = new Romcal1962OOP();
    const result = await romcal.generateCalendar(2024);
    const days = Object.values(result).flat();
    expect(days.every((d) => Array.isArray(d.commemorations) && d.commemorations.length === 0)).toBe(true);
    expect(days.every((d) => d.octaveOf === undefined)).toBe(true);
  });

  it('createLiturgicalDay on the subclass is dispatched via createCalendar', async () => {
    class CountingCalendar1962 extends Calendar1962OOP {
      public createCalls = 0;

      protected override createLiturgicalDay(
        def: LiturgicalDayDef,
        date: Date,
        ldConfig: LiturgicalDayConfig,
        calendar: RomcalCalendarMetadata,
        baseData: LiturgicalDay1962OOP | null,
        weekday: LiturgicalDay1962OOP | null
      ): LiturgicalDay1962OOP {
        this.createCalls += 1;
        return super.createLiturgicalDay(def, date, ldConfig, calendar, baseData, weekday);
      }
    }

    class TrackingRomcal1962 extends Romcal1962OOP {
      public lastCalendar?: CountingCalendar1962;

      protected override createCalendar(
        config: RomcalConfig,
        ldConfig: LiturgicalDayConfig
      ): Calendar<LiturgicalDay1962OOP> {
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
