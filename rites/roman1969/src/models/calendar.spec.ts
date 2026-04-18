import { Romcal } from '..';
import { Precedences } from '../constants/precedences';
import { LiturgicalCalendar } from '../types/calendar';
import { RomcalCalendarMetadata } from '../types/liturgical-day';

import { Calendar } from './calendar';
import { RomcalConfig } from './config';
import { LiturgicalDay } from './liturgical-day';
import { LiturgicalDayConfig } from './liturgical-day-config';
import { LiturgicalDayDef } from './liturgical-day-def';

class TaggedLiturgicalDay extends LiturgicalDay {
  public tag?: string;
}

class CountingCalendar extends Calendar<TaggedLiturgicalDay> {
  public createCalls = 0;

  public postReduceCalls = 0;

  public resolveCalls = 0;

  protected createLiturgicalDay(
    def: LiturgicalDayDef,
    date: Date,
    ldConfig: LiturgicalDayConfig,
    calendar: RomcalCalendarMetadata,
    baseData: TaggedLiturgicalDay | null,
    weekday: TaggedLiturgicalDay | null
  ): TaggedLiturgicalDay {
    this.createCalls += 1;
    return new TaggedLiturgicalDay(def, date, ldConfig, calendar, baseData, weekday);
  }

  protected postReduceDay(day: TaggedLiturgicalDay, candidates: TaggedLiturgicalDay[]): TaggedLiturgicalDay {
    this.postReduceCalls += 1;
    day.tag = `tagged:${candidates.length}`;
    return day;
  }

  protected resolveOccurrence(candidates: TaggedLiturgicalDay[], date: Date): TaggedLiturgicalDay {
    this.resolveCalls += 1;
    return super.resolveOccurrence(candidates, date);
  }
}

// Picks the last-ranked (lowest-precedence) candidate after the default sort.
class LowestPrecedenceCalendar extends Calendar<LiturgicalDay> {
  protected resolveOccurrence(candidates: LiturgicalDay[], date: Date): LiturgicalDay {
    const winner = super.resolveOccurrence(candidates, date);
    void winner;
    return candidates[candidates.length - 1];
  }
}

class SubclassedRomcal extends Romcal<TaggedLiturgicalDay> {
  public lastCalendar?: CountingCalendar;

  protected createCalendar(config: RomcalConfig, ldConfig: LiturgicalDayConfig): Calendar<TaggedLiturgicalDay> {
    this.lastCalendar = new CountingCalendar(config, ldConfig);
    return this.lastCalendar;
  }
}

class LowestPrecedenceRomcal extends Romcal {
  protected createCalendar(config: RomcalConfig, ldConfig: LiturgicalDayConfig): Calendar<LiturgicalDay> {
    return new LowestPrecedenceCalendar(config, ldConfig);
  }
}

describe('Calendar extension points', () => {
  it('createLiturgicalDay is invoked for every generated LiturgicalDay', async () => {
    const romcal = new SubclassedRomcal();
    const result: LiturgicalCalendar<TaggedLiturgicalDay> = await romcal.generateCalendar(2020);
    const dayCount = Object.values(result).flat().length;
    expect(romcal.lastCalendar).toBeDefined();
    expect(romcal.lastCalendar!.createCalls).toBeGreaterThanOrEqual(dayCount);
  });

  it('postReduceDay can tag the winning LiturgicalDay and tags propagate to output', async () => {
    const romcal = new SubclassedRomcal();
    const result = await romcal.generateCalendar(2020);
    const days = Object.values(result).flat();
    expect(romcal.lastCalendar!.postReduceCalls).toBeGreaterThan(0);
    const winners = Object.values(result).map((bucket) => bucket[0]);
    expect(winners.every((d) => typeof d.tag === 'string' && d.tag.startsWith('tagged:'))).toBe(true);
    // Sanity: every day retains its discriminator.
    expect(days[0].rite).toBe('roman1969');
  });

  it('resolveOccurrence override picks its chosen winner', async () => {
    const defaultRomcal = new Romcal();
    const overrideRomcal = new LowestPrecedenceRomcal();
    const [defaultCal, overrideCal] = await Promise.all([
      defaultRomcal.generateCalendar(2020),
      overrideRomcal.generateCalendar(2020),
    ]);
    // Find a date where the default had 2+ candidates so the override can meaningfully differ.
    const dateStr = Object.keys(defaultCal).find((k) => defaultCal[k].length > 1)!;
    expect(dateStr).toBeDefined();
    const defaultWinner = defaultCal[dateStr][0];
    const overrideWinner = overrideCal[dateStr][0];
    const overrideLowestPrecIndex = Math.max(
      ...defaultCal[dateStr].map((d) => Object.values(Precedences).indexOf(d.precedence))
    );
    const overrideWinnerIndex = Object.values(Precedences).indexOf(overrideWinner.precedence);
    expect(overrideWinnerIndex).toBe(overrideLowestPrecIndex);
    // Default winner should have strictly higher precedence (lower index) than the override winner,
    // unless the date coincidentally only had equal-precedence candidates.
    expect(Object.values(Precedences).indexOf(defaultWinner.precedence)).toBeLessThanOrEqual(overrideWinnerIndex);
  });

  it('Romcal.createCalendar factory dispatches to the overridden Calendar', async () => {
    const romcal = new SubclassedRomcal();
    await romcal.generateCalendar(2020);
    expect(romcal.lastCalendar).toBeInstanceOf(CountingCalendar);
  });
});
