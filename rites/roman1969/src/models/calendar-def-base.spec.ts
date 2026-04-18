import { Ranks } from '../constants/ranks';
import { LiturgicalDayBundleInput } from '../types/liturgical-day';

import { CalendarDef } from './calendar-def';
import { CalendarDefBase, flattenCalendarChain } from './calendar-def-base';
import { RomcalConfig } from './config';

interface TestEntry {
  readonly name: string;
}

class Region extends CalendarDefBase<TestEntry> {
  readonly id = 'europe';

  readonly entries: readonly TestEntry[] = [{ name: 'europe-feast' }];
}

class Country extends CalendarDefBase<TestEntry> {
  readonly id = 'switzerland';

  readonly parents: readonly CalendarDefBase<TestEntry>[] = [new Region()];

  readonly entries: readonly TestEntry[] = [{ name: 'bruder-klaus' }];
}

class Diocese extends CalendarDefBase<TestEntry> {
  readonly id = 'switzerland.basel';

  readonly parents: readonly CalendarDefBase<TestEntry>[] = [new Country()];

  readonly entries: readonly TestEntry[] = [{ name: 'ursicinus' }];
}

describe('flattenCalendarChain', () => {
  it('returns parents-first for a diocese → country → region chain', () => {
    const ids = flattenCalendarChain(new Diocese()).map((c) => c.id);
    expect(ids).toEqual(['europe', 'switzerland', 'switzerland.basel']);
  });

  it('deduplicates calendars reached through more than one parent', () => {
    const europe = new Region();
    class AsiaPacific extends CalendarDefBase<TestEntry> {
      readonly id = 'asia-pacific';

      readonly entries: readonly TestEntry[] = [];
    }
    class Hybrid extends CalendarDefBase<TestEntry> {
      readonly id = 'hybrid';

      readonly parents: readonly CalendarDefBase<TestEntry>[] = [europe, new AsiaPacific(), europe];

      readonly entries: readonly TestEntry[] = [];
    }
    const ids = flattenCalendarChain(new Hybrid()).map((c) => c.id);
    expect(ids).toEqual(['europe', 'asia-pacific', 'hybrid']);
  });

  it('returns only the root when there are no parents', () => {
    expect(flattenCalendarChain(new Region()).map((c) => c.id)).toEqual(['europe']);
  });
});

describe('CalendarDef declarative octave expansion', () => {
  it('expands an input with octave into N additional shifted LiturgicalDayDefs', () => {
    class OctaveCalendar extends CalendarDef {
      inputs: Record<string, LiturgicalDayBundleInput> = {
        some_feast: {
          dateDef: { month: 6, date: 29 },
          precedence: 'GENERAL_FEAST_7',
          octave: { rank: Ranks.Memorial, days: 7 },
        },
      };
    }
    const config = new RomcalConfig();
    const cal = new OctaveCalendar(config);
    cal.buildAllDefinitions();
    for (let n = 1; n <= 7; n += 1) {
      const id = `some_feast_octave_day_${n}`;
      expect(config.liturgicalDayDef[id]).toBeDefined();
      expect(config.liturgicalDayDef[id].rank).toBe(Ranks.Memorial);
    }
    // The original anchor should also exist.
    expect(config.liturgicalDayDef['some_feast']).toBeDefined();
    // And we should NOT have an 8th day.
    expect(config.liturgicalDayDef['some_feast_octave_day_8']).toBeUndefined();
  });
});
