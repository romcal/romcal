import { LiturgicalDayDef, Romcal } from '@src/rite-roman1969';

const { RomcalConfig, LiturgicalDayConfig } = Romcal;

// Reference year 2025: Palm Sunday 13 Apr, Easter 20 Apr, Divine Mercy Sunday 27 Apr.
const config = new LiturgicalDayConfig(new RomcalConfig(), 2025);

const build = (dateDef: unknown, dateExceptions: unknown[] = [], yearOffset?: number): string | null => {
  const date = config.buildDate({ dateDef, dateExceptions } as unknown as LiturgicalDayDef, yearOffset);
  return date ? date.toISOString().slice(0, 10) : null;
};

const between = (inclusive: boolean) => ({
  from: { dateFn: 'palmSunday' },
  to: { dateFn: 'divineMercySunday' },
  inclusive,
});

describe('LiturgicalDayConfig.buildDate', () => {
  describe('without date exceptions', () => {
    test('returns the date defined by the date definition', () => {
      expect(build({ month: 4, date: 23 })).toBe('2025-04-23');
    });

    test('returns null if the date definition cannot be resolved', () => {
      expect(build({})).toBeNull();
    });

    test('throws if the date function is unknown', () => {
      expect(() => build({ dateFn: 'unknownDateFn' })).toThrow("Unknown dateFn 'unknownDateFn'");
    });

    test('returns null if the date function gives an invalid date', () => {
      expect(build({ dateFn: 'easterSunday', dateArgs: [Number.NaN] })).toBeNull();
    });

    test('applies the year offset', () => {
      expect(build({ month: 4, date: 23 }, [], 1)).toBe('2026-04-23');
    });
  });

  describe('date lookup', () => {
    test.each([
      ['a date function', { dateFn: 'easterSunday' }, '2025-04-20'],
      ['a date function with an added offset', { dateFn: 'easterSunday', addDay: 1 }, '2025-04-21'],
      ['a date function with a subtracted offset', { dateFn: 'easterSunday', subtractDay: 1 }, '2025-04-19'],
      ['the nth weekday of a month', { month: 5, dayOfWeek: 0, nthWeekInMonth: 2 }, '2025-05-11'],
      ['the last weekday of a month', { month: 5, lastDayOfWeekInMonth: 0 }, '2025-05-25'],
      ['the first date of a list of dates', { dateFn: 'allSundaysOfLent' }, '2025-03-09'],
    ])('resolves %s', (_label, dateDef, expected) => {
      expect(build(dateDef)).toBe(expected);
    });
  });

  describe('relative date offsets (`addDay` / `subtractDay` only)', () => {
    test('`addDay` is relative to the original date of the celebration', () => {
      expect(build({ month: 4, date: 27 }, [{ ifIsDayOfWeek: 0, setDate: { addDay: 1 } }])).toBe('2025-04-28');
    });

    test('`subtractDay` is relative to the original date of the celebration', () => {
      expect(build({ month: 4, date: 28 }, [{ ifIsDayOfWeek: 1, setDate: { subtractDay: 1 } }])).toBe('2025-04-27');
    });

    test('are not applied when the exception does not match', () => {
      expect(build({ month: 4, date: 29 }, [{ ifIsDayOfWeek: 0, setDate: { addDay: 1 } }])).toBe('2025-04-29');
    });
  });

  describe('date offsets anchored to a date function (`dateFn` + `addDay` / `subtractDay`)', () => {
    // Regression: the offset used to be applied to the original date, ignoring the `dateFn` anchor.
    test('`addDay` is relative to the date function, not to the original date', () => {
      // 23 Apr 2025 is on the Easter Octave: it is transferred to the Monday after Divine Mercy Sunday.
      expect(
        build({ month: 4, date: 23 }, [
          { ifIsBetween: between(true), setDate: { dateFn: 'divineMercySunday', addDay: 1 } },
        ])
      ).toBe('2025-04-28');
    });

    test('`subtractDay` is relative to the date function, not to the original date', () => {
      // 15 Apr 2025 is in Holy Week: it is transferred to the Saturday before Palm Sunday.
      expect(
        build({ month: 4, date: 15 }, [
          { ifIsBetween: between(true), setDate: { dateFn: 'palmSunday', subtractDay: 1 } },
        ])
      ).toBe('2025-04-12');
    });

    test('can resolve to a different date than the one a relative offset would give', () => {
      expect(
        build({ month: 4, date: 23 }, [{ ifIsDayOfWeek: 3, setDate: { dateFn: 'easterSunday', addDay: 1 } }])
      ).toBe('2025-04-21');
    });

    test('returns null if the anchor cannot be resolved', () => {
      expect(
        build({ month: 4, date: 23 }, [{ ifIsDayOfWeek: 3, setDate: { dateFn: 'easterSunday', dateArgs: [Number.NaN], addDay: 1 } }])
      ).toBeNull();
    });
  });

  describe('fixed date anchors (`month` + `date`)', () => {
    test('sets the date to the defined day of the year', () => {
      expect(build({ month: 4, date: 23 }, [{ ifIsDayOfWeek: 3, setDate: { month: 5, date: 1 } }])).toBe('2025-05-01');
    });

    test('supports a year offset', () => {
      expect(build({ month: 4, date: 23 }, [{ ifIsDayOfWeek: 3, setDate: { month: 1, date: 1, yearOffset: 1 } }])).toBe(
        '2026-01-01'
      );
    });
  });

  describe('a `setDate` without any usable date information', () => {
    test('returns null', () => {
      expect(build({ month: 4, date: 23 }, [{ ifIsDayOfWeek: 3, setDate: {} }])).toBeNull();
    });
  });

  describe('exception `ifIsBetween`', () => {
    const setDate = { month: 6, date: 1 };

    test.each([
      ['the lower bound', 13, true, '2025-06-01'],
      ['a date inside the range', 20, true, '2025-06-01'],
      ['the upper bound', 27, true, '2025-06-01'],
      ['a date before the range', 12, true, '2025-04-12'],
      ['a date after the range', 28, true, '2025-04-28'],
      ['the lower bound (exclusive)', 13, false, '2025-04-13'],
      ['a date inside the range (exclusive)', 20, false, '2025-06-01'],
      ['the upper bound (exclusive)', 27, false, '2025-04-27'],
    ])('with %s', (_label, date, inclusive, expected) => {
      expect(build({ month: 4, date }, [{ ifIsBetween: between(inclusive), setDate }])).toBe(expected);
    });

    test('is ignored if a bound cannot be resolved', () => {
      expect(
        build({ month: 4, date: 20 }, [
          {
            ifIsBetween: { from: { dateFn: 'easterSunday', dateArgs: [Number.NaN] }, to: { dateFn: 'divineMercySunday' }, inclusive: true },
            setDate,
          },
        ])
      ).toBe('2025-04-20');
      expect(
        build({ month: 4, date: 20 }, [
          {
            ifIsBetween: { from: { dateFn: 'palmSunday' }, to: { dateFn: 'easterSunday', dateArgs: [Number.NaN] }, inclusive: false },
            setDate,
          },
        ])
      ).toBe('2025-04-20');
    });
  });

  describe('exception `ifIsSameAsDate`', () => {
    test('sets the date if both dates are the same', () => {
      expect(
        build({ month: 4, date: 20 }, [
          { ifIsSameAsDate: { dateFn: 'easterSunday' }, setDate: { dateFn: 'easterSunday', addDay: 1 } },
        ])
      ).toBe('2025-04-21');
    });

    test('keeps the date if the dates differ, or if the compared date cannot be resolved', () => {
      expect(
        build({ month: 4, date: 21 }, [{ ifIsSameAsDate: { dateFn: 'easterSunday' }, setDate: { addDay: 1 } }])
      ).toBe('2025-04-21');
      expect(
        build({ month: 4, date: 20 }, [{ ifIsSameAsDate: { dateFn: 'easterSunday', dateArgs: [Number.NaN] }, setDate: { addDay: 1 } }])
      ).toBe('2025-04-20');
    });
  });

  describe('exception `ifIsDayOfWeek`', () => {
    test('only applies on the defined day of the week', () => {
      expect(build({ month: 4, date: 20 }, [{ ifIsDayOfWeek: 0, setDate: { addDay: 1 } }])).toBe('2025-04-21');
      expect(build({ month: 4, date: 20 }, [{ ifIsDayOfWeek: 1, setDate: { addDay: 1 } }])).toBe('2025-04-20');
    });
  });

  describe('unknown exception', () => {
    test('is ignored', () => {
      expect(build({ month: 4, date: 20 }, [{ setDate: { addDay: 1 } }])).toBe('2025-04-20');
    });
  });

  // Whether a date function resolves depends on the configuration: with Ascension on Thursday (9 May 2024, the
  // Thursday of the 6th week of Easter), `weekdayOrSundayOfEasterTime(4, 6)` returns null.
  describe('a `dateFn` whose result depends on the configuration', () => {
    // 1 May 2024 is a Wednesday, so `ifIsDayOfWeek: 3` always matches this date definition.
    const buildWith = (ascensionOnSunday: boolean): string | null => {
      const date = new LiturgicalDayConfig(new RomcalConfig({ ascensionOnSunday }), 2024).buildDate({
        dateDef: { month: 5, date: 1 },
        dateExceptions: [
          { ifIsDayOfWeek: 3, setDate: { dateFn: 'weekdayOrSundayOfEasterTime', dateArgs: [4, 6] } },
        ],
      } as unknown as LiturgicalDayDef);
      return date ? date.toISOString().slice(0, 10) : null;
    };

    test('drops the day instead of keeping the original date if it returns null', () => {
      expect(buildWith(false)).toBeNull();
    });

    test('resolves when Ascension is on Sunday', () => {
      expect(buildWith(true)).toBe('2024-05-09');
    });
  });

  describe('several exceptions', () => {
    // St Joseph: a Sunday moves to Monday, Holy Week moves to the Saturday before Palm Sunday.
    const joseph = [
      { ifIsDayOfWeek: 0, setDate: { addDay: 1 } },
      { ifIsBetween: between(true), setDate: { dateFn: 'palmSunday', subtractDay: 1 } },
    ];

    test.each([
      // [year, expected]
      [2008, '2008-03-15'], // Wednesday of Holy Week
      [2023, '2023-03-20'], // Sunday of Lent
      [2024, '2024-03-19'], // unaffected
      [2062, '2062-03-18'], // Palm Sunday itself (both exceptions match, the last one wins)
    ])('are evaluated in order, year %i', (year, expected) => {
      const yearConfig = new LiturgicalDayConfig(new RomcalConfig(), year);
      const date = yearConfig.buildDate({
        dateDef: { month: 3, date: 19 },
        dateExceptions: joseph,
      } as unknown as LiturgicalDayDef);
      expect(date?.toISOString().slice(0, 10)).toBe(expected);
    });
  });

  describe('constructor', () => {
    afterEach(() => {
      jest.useRealTimers();
    });

    test.each([
      ['gregorian', '2026-10-09', 2026],
      ['gregorian', '2026-12-15', 2026],
      ['liturgical', '2026-10-09', 2026],
    ] as const)('uses the current %s year when no year is provided (today: %s)', (scope, today, expected) => {
      jest.useFakeTimers().setSystemTime(new Date(`${today}T12:00:00Z`));
      expect(new LiturgicalDayConfig(new RomcalConfig({ scope })).year).toBe(expected);
    });

    test('uses the provided year', () => {
      expect(new LiturgicalDayConfig(new RomcalConfig(), 2030).year).toBe(2030);
    });
  });
});
