import { LiturgicalDayConfig } from './liturgical-day-config';

type Loose = Record<string, unknown>;

const utc = (year: number, month: number, date: number): Date => new Date(Date.UTC(year, month - 1, date));

/**
 * A stand-in for a rite's date class: the engine only needs the static
 * `firstSundayOfAdvent` and an instance exposing date functions by name.
 */
class StubDates {
  // The liturgical year N starts with the Advent of December N - 1.
  static firstSundayOfAdvent = (year: number): Date => utc(year - 1, 12, 1);

  readonly config: unknown;

  readonly year: number;

  constructor(config: unknown, year: number) {
    this.config = config;
    this.year = year;
  }

  easter = (year: number): Date => utc(year, 4, 20);

  withDays = (day: number, year: number): Date => utc(year, 5, day);

  firstValid = (year: number): (Date | null)[] => [null, utc(year, 6, 1)];

  none = (): null => null;

  invalid = (): Date => new Date(NaN);
}

const makeConfig = (scope = 'liturgical'): never =>
  ({ dates: StubDates, scope, toObject: () => ({ scope, name: 'stub' }) }) as never;

const make = (year = 2027) => new LiturgicalDayConfig(makeConfig(), year);

const defOf = (dateDef: Loose, dateExceptions: Loose[] = []): never => ({ dateDef, dateExceptions }) as never;

describe('liturgical-day-config.ts', () => {
  describe('constructor', () => {
    afterEach(() => jest.useRealTimers());

    it('keeps the given year and builds the rite dates for it', () => {
      const config = makeConfig();
      const cfg = new LiturgicalDayConfig(config, 2031);

      expect(cfg.year).toBe(2031);
      expect(cfg.config).toBe(config);
      expect(cfg.dates).toBeInstanceOf(StubDates);
      expect(cfg.dates).toMatchObject({ year: 2031, config });
    });

    it('defaults to the current Gregorian year for a Gregorian scope', () => {
      jest.useFakeTimers().setSystemTime(new Date('2026-12-15T12:00:00.000Z'));

      expect(new LiturgicalDayConfig(makeConfig('gregorian')).year).toBe(2026);
    });

    it('defaults to the current liturgical year before the first Sunday of Advent', () => {
      jest.useFakeTimers().setSystemTime(new Date('2026-06-15T12:00:00.000Z'));

      expect(new LiturgicalDayConfig(makeConfig()).year).toBe(2026);
    });

    it('defaults to the next year once the first Sunday of Advent has come', () => {
      jest.useFakeTimers().setSystemTime(new Date('2026-12-15T12:00:00.000Z'));

      expect(new LiturgicalDayConfig(makeConfig()).year).toBe(2027);
    });
  });

  describe('buildDate: looking a date up', () => {
    it('resolves a month and a date', () => {
      expect(make().buildDate(defOf({ month: 3, date: 15 }))).toEqual(utc(2027, 3, 15));
    });

    it('applies the year offset of the definition and the one passed in', () => {
      expect(make().buildDate(defOf({ month: 3, date: 15, yearOffset: 1 }))).toEqual(utc(2028, 3, 15));
      expect(make().buildDate(defOf({ month: 3, date: 15 }), -1)).toEqual(utc(2026, 3, 15));
      expect(make().buildDate(defOf({ month: 3, date: 15, yearOffset: 1 }), 1)).toEqual(utc(2029, 3, 15));
    });

    it('resolves nothing for a month without a usable date', () => {
      expect(make().buildDate(defOf({ month: 3 }))).toBeNull();
      expect(make().buildDate(defOf({ month: 0, date: 5 }))).toBeNull();
      expect(make().buildDate(defOf({}))).toBeNull();
    });

    it('calls a date function of the rite with its arguments and the year', () => {
      expect(make().buildDate(defOf({ dateFn: 'easter' }))).toEqual(utc(2027, 4, 20));
      expect(make().buildDate(defOf({ dateFn: 'withDays', dateArgs: [7] }))).toEqual(utc(2027, 5, 7));
    });

    it('moves the result of a date function by a number of days', () => {
      expect(make().buildDate(defOf({ dateFn: 'easter', addDay: 3 }))).toEqual(utc(2027, 4, 23));
      expect(make().buildDate(defOf({ dateFn: 'easter', subtractDay: 3 }))).toEqual(utc(2027, 4, 17));
    });

    it('takes the first date of a list of dates', () => {
      expect(make().buildDate(defOf({ dateFn: 'firstValid' }))).toEqual(utc(2027, 6, 1));
    });

    it('resolves nothing when a date function answers with no or an invalid date', () => {
      expect(make().buildDate(defOf({ dateFn: 'none', addDay: 1, subtractDay: 1 }))).toBeNull();
      expect(make().buildDate(defOf({ dateFn: 'invalid' }))).toBeNull();
    });

    it('refuses a date function the rite does not have', () => {
      expect(() => make().buildDate(defOf({ dateFn: 'missing' }))).toThrow("Unknown dateFn 'missing'");
    });

    it('resolves the nth day of week of a month', () => {
      // The second Monday of March 2027.
      expect(make().buildDate(defOf({ month: 3, dayOfWeek: 1, nthWeekInMonth: 2 }))).toEqual(utc(2027, 3, 8));
    });

    it('resolves the last day of week of a month', () => {
      // The last Sunday of March 2027.
      expect(make().buildDate(defOf({ month: 3, lastDayOfWeekInMonth: 0 }))).toEqual(utc(2027, 3, 28));
    });
  });

  describe('buildDate: date exceptions', () => {
    const base = { month: 3, date: 15 };
    const moved = { month: 4, date: 1 };
    const day = (date: number): Loose => ({ month: 3, date });
    const run = (exception: Loose) => make().buildDate(defOf(base, [{ setDate: moved, ...exception }]));

    it('moves the date when it is within an inclusive range, boundaries included', () => {
      expect(run({ ifIsBetween: { from: day(15), to: day(20), inclusive: true } })).toEqual(utc(2027, 4, 1));
      expect(run({ ifIsBetween: { from: day(10), to: day(15), inclusive: true } })).toEqual(utc(2027, 4, 1));
    });

    it('keeps the date when it is outside an inclusive range', () => {
      expect(run({ ifIsBetween: { from: day(16), to: day(20), inclusive: true } })).toEqual(utc(2027, 3, 15));
      expect(run({ ifIsBetween: { from: day(10), to: day(14), inclusive: true } })).toEqual(utc(2027, 3, 15));
    });

    it('moves the date when it is within an exclusive range, boundaries excluded', () => {
      expect(run({ ifIsBetween: { from: day(14), to: day(16) } })).toEqual(utc(2027, 4, 1));
      expect(run({ ifIsBetween: { from: day(15), to: day(20) } })).toEqual(utc(2027, 3, 15));
      expect(run({ ifIsBetween: { from: day(10), to: day(15) } })).toEqual(utc(2027, 3, 15));
    });

    it('ignores a range with a bound that does not resolve', () => {
      const none = { dateFn: 'none' };

      expect(run({ ifIsBetween: { from: none, to: day(20), inclusive: true } })).toEqual(utc(2027, 3, 15));
      expect(run({ ifIsBetween: { from: day(10), to: none, inclusive: true } })).toEqual(utc(2027, 3, 15));
    });

    it('moves the date when it is the same as another date', () => {
      expect(run({ ifIsSameAsDate: day(15) })).toEqual(utc(2027, 4, 1));
      expect(run({ ifIsSameAsDate: day(16) })).toEqual(utc(2027, 3, 15));
      expect(run({ ifIsSameAsDate: { month: 0 } })).toEqual(utc(2027, 3, 15));
    });

    it('moves the date when it falls on a given day of the week', () => {
      // 15 March 2027 is a Monday.
      expect(run({ ifIsDayOfWeek: 1 })).toEqual(utc(2027, 4, 1));
      expect(run({ ifIsDayOfWeek: 2 })).toEqual(utc(2027, 3, 15));
      expect(run({ ifIsDayOfWeek: 0 })).toEqual(utc(2027, 3, 15));
    });

    it('ignores an exception without a condition', () => {
      expect(run({})).toEqual(utc(2027, 3, 15));
    });

    it('offsets the original date for a bare day offset', () => {
      expect(run({ ifIsDayOfWeek: 1, setDate: { addDay: 2 } })).toEqual(utc(2027, 3, 17));
      expect(run({ ifIsDayOfWeek: 1, setDate: { subtractDay: 3 } })).toEqual(utc(2027, 3, 12));
    });

    it('replaces the date for a full date definition, even when it does not resolve', () => {
      expect(run({ ifIsDayOfWeek: 1, setDate: { dateFn: 'easter' } })).toEqual(utc(2027, 4, 20));
      expect(run({ ifIsDayOfWeek: 1, setDate: { month: 5, date: 5, addDay: 1 } })).toEqual(utc(2027, 5, 5));
      expect(run({ ifIsDayOfWeek: 1, setDate: { dateFn: 'none', addDay: 1 } })).toBeNull();
      expect(run({ ifIsDayOfWeek: 1, setDate: {} })).toBeNull();
    });

    it('applies every exception in order', () => {
      const result = make().buildDate(
        defOf(base, [
          { ifIsDayOfWeek: 1, setDate: { addDay: 1 } },
          { ifIsDayOfWeek: 1, setDate: { addDay: 2 } },
        ])
      );

      // Each exception tests the original date and offsets it: the last match wins.
      expect(result).toEqual(utc(2027, 3, 17));
    });

    it('resolves nothing when the date itself does not resolve, whatever the exceptions', () => {
      expect(make().buildDate(defOf({ dateFn: 'none' }, [{ ifIsDayOfWeek: 1, setDate: moved }]))).toBeNull();
    });
  });

  describe('getConfigObject', () => {
    it('returns the config as an object, with the year', () => {
      expect(make(2031).getConfigObject()).toEqual({ scope: 'liturgical', name: 'stub', year: 2031 });
    });
  });
});
