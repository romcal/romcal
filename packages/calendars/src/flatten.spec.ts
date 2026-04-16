import { CalendarDef } from './calendar-def';
import { flattenCalendarChain } from './flatten';

interface TestEntry {
  readonly name: string;
}

class Region extends CalendarDef<TestEntry> {
  readonly id = 'europe';

  readonly entries: readonly TestEntry[] = [{ name: 'europe-feast' }];
}

class Country extends CalendarDef<TestEntry> {
  readonly id = 'switzerland';

  readonly parents: readonly CalendarDef<TestEntry>[] = [new Region()];

  readonly entries: readonly TestEntry[] = [{ name: 'bruder-klaus' }];
}

class Diocese extends CalendarDef<TestEntry> {
  readonly id = 'switzerland.basel';

  readonly parents: readonly CalendarDef<TestEntry>[] = [new Country()];

  readonly entries: readonly TestEntry[] = [{ name: 'ursicinus' }];
}

describe('flattenCalendarChain', () => {
  it('returns parents-first for a diocese → country → region chain', () => {
    const ids = flattenCalendarChain(new Diocese()).map((c) => c.id);
    expect(ids).toEqual(['europe', 'switzerland', 'switzerland.basel']);
  });

  it('deduplicates calendars reached through more than one parent', () => {
    const europe = new Region();
    class AsiaPacific extends CalendarDef<TestEntry> {
      readonly id = 'asia-pacific';

      readonly entries: readonly TestEntry[] = [];
    }
    class Hybrid extends CalendarDef<TestEntry> {
      readonly id = 'hybrid';

      readonly parents: readonly CalendarDef<TestEntry>[] = [europe, new AsiaPacific(), europe];

      readonly entries: readonly TestEntry[] = [];
    }
    const ids = flattenCalendarChain(new Hybrid()).map((c) => c.id);
    expect(ids).toEqual(['europe', 'asia-pacific', 'hybrid']);
  });

  it('returns only the root when there are no parents', () => {
    expect(flattenCalendarChain(new Region()).map((c) => c.id)).toEqual(['europe']);
  });
});
