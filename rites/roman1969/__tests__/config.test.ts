import {
  AnchorException,
  LiturgicalDayDef,
  ParticularConfig,
  Romcal,
  TemporalOverrides,
} from '@src/rite-roman1969';

const { CalendarDef, RomcalConfig, LiturgicalDayConfig } = Romcal;

/**
 * The engine only promises the handful of dates it uses itself, so reaching for one
 * of the rite's own means saying which rite's dates these are. Here that is not in
 * doubt: the config above was built with romcal's default.
 */
type Dates = ReturnType<Romcal['dates']>;

const datesOf = (config: InstanceType<typeof RomcalConfig>, year: number): Dates =>
  new LiturgicalDayConfig(config, year).dates as Dates;

const temporalOverridesFixture: TemporalOverrides = {
  anchorExceptions: {
    epiphany: [{ when: { dayOfWeek: 'saturday' }, then: { transferTo: 'sunday' } }],
  },
};

describe('getConfig()', () => {
  test('should get general config if country does not have default configurations', async () => {
    const config = new RomcalConfig();
    const liturgicalDayConfig = new LiturgicalDayConfig(config);
    const { year, scope, epiphanyOnSunday, corpusChristiOnSunday, ascensionOnSunday } =
      liturgicalDayConfig.getConfigObject();

    expect(year).toBe(new Date().getUTCFullYear());
    expect(scope).toBe('gregorian');
    expect(epiphanyOnSunday).toBeFalsy();
    expect(corpusChristiOnSunday).toBeFalsy();
    expect(ascensionOnSunday).toBeFalsy();
  });

  test('should omit temporal overrides when none are configured', () => {
    expect(new RomcalConfig().toObject()).not.toHaveProperty('temporalOverrides');
  });

  test('should return configured temporal overrides', () => {
    expect(new RomcalConfig({ temporalOverrides: temporalOverridesFixture }).toObject().temporalOverrides).toEqual(
      temporalOverridesFixture
    );
  });

  test('should isolate temporal overrides from input and output mutations', () => {
    const input = {
      anchorExceptions: {
        epiphany: [{ when: { dayOfWeek: 'saturday' }, then: { transferTo: 'sunday' } }],
      },
    } satisfies TemporalOverrides;
    const config = new RomcalConfig({ temporalOverrides: input });

    input.anchorExceptions.epiphany.length = 0;
    expect(config.temporalOverrides?.anchorExceptions.epiphany).toHaveLength(1);

    const outputExceptions = config.toObject().temporalOverrides?.anchorExceptions.epiphany as unknown as
      AnchorException[] | undefined;
    outputExceptions?.splice(0);

    expect(config.temporalOverrides?.anchorExceptions.epiphany).toHaveLength(1);
  });

  test('should inherit temporal overrides from a parent calendar', () => {
    class ParentCalendar extends CalendarDef {
      particularConfig: ParticularConfig = { temporalOverrides: temporalOverridesFixture };
    }

    class ChildCalendar extends CalendarDef {
      ParentCalendars = [ParentCalendar];
    }

    const config = new RomcalConfig(undefined, undefined, undefined, ChildCalendar);
    expect(config.temporalOverrides).toEqual(temporalOverridesFixture);
    expect(datesOf(config, 2024).epiphany().toISOString()).toEqual('2024-01-07T00:00:00.000Z');
  });

  test('should preserve resolved temporal overrides when cloned', () => {
    class ParentCalendar extends CalendarDef {
      particularConfig: ParticularConfig = { temporalOverrides: temporalOverridesFixture };
    }

    class ChildCalendar extends CalendarDef {
      ParentCalendars = [ParentCalendar];
    }

    const config = new RomcalConfig(undefined, undefined, undefined, ChildCalendar);
    const clone = config.clone();

    expect(clone.temporalOverrides).toEqual(temporalOverridesFixture);
    expect(clone.temporalOverrides).not.toBe(config.temporalOverrides);
    expect(clone.temporalOverrides?.anchorExceptions.epiphany).not.toBe(
      config.temporalOverrides?.anchorExceptions.epiphany
    );
    expect(datesOf(clone, 2024).epiphany().toISOString()).toEqual('2024-01-07T00:00:00.000Z');
  });

  test('should only remove inherited Epiphany exceptions for an explicit option', () => {
    const otherAnchorException = {
      when: { dayOfWeek: 'monday' },
      then: { transferTo: 'sunday' },
    } as const;
    const inheritedOverrides = {
      anchorExceptions: {
        epiphany: temporalOverridesFixture.anchorExceptions.epiphany,
        other_anchor: [otherAnchorException],
      },
    } as unknown as TemporalOverrides;

    class ParentCalendar extends CalendarDef {
      particularConfig: ParticularConfig = { temporalOverrides: inheritedOverrides };
    }

    class ChildCalendar extends CalendarDef {
      ParentCalendars = [ParentCalendar];
    }

    const config = new RomcalConfig(
      { epiphanyOnSunday: false },
      undefined,
      undefined,
      ChildCalendar
    );

    expect(config.temporalOverrides).toEqual({
      anchorExceptions: { other_anchor: [otherAnchorException] },
    });
  });

  test('should replace inherited temporal overrides with the child calendar configuration', () => {
    class ParentCalendar extends CalendarDef {
      particularConfig: ParticularConfig = { temporalOverrides: temporalOverridesFixture };
    }

    class ChildCalendar extends CalendarDef {
      ParentCalendars = [ParentCalendar];

      particularConfig: ParticularConfig = { temporalOverrides: { anchorExceptions: {} } };
    }

    const config = new RomcalConfig(undefined, undefined, undefined, ChildCalendar);
    expect(config.temporalOverrides).toEqual({ anchorExceptions: {} });
    expect(datesOf(config, 2024).epiphany().toISOString()).toEqual('2024-01-06T00:00:00.000Z');
  });
});

describe('LiturgicalDayConfig.buildDate()', () => {
  // Minimal stub: buildDate only reads dateDef and dateExceptions.
  const def = (
    dateDef: { month: number; date: number },
    dateExceptions: {
      ifIsDayOfWeek?: number;
      setDate: { addDay?: number; subtractDay?: number; dateFn?: string; dateArgs?: number[] };
    }[]
  ) => ({ dateDef, dateExceptions }) as LiturgicalDayDef;

  test('bare addDay / subtractDay still offset the originally computed date', () => {
    const liturgicalDayConfig = new LiturgicalDayConfig(new RomcalConfig(), 2024);
    // 25 March 2024 is a Monday.
    expect(
      liturgicalDayConfig
        .buildDate(def({ month: 3, date: 25 }, [{ ifIsDayOfWeek: 1, setDate: { addDay: 2 } }]))
        ?.toISOString()
    ).toEqual('2024-03-27T00:00:00.000Z');
    expect(
      liturgicalDayConfig
        .buildDate(def({ month: 3, date: 25 }, [{ ifIsDayOfWeek: 1, setDate: { subtractDay: 1 } }]))
        ?.toISOString()
    ).toEqual('2024-03-24T00:00:00.000Z');
  });

  test('a dateFn setDate that returns null drops the day instead of keeping the original date', () => {
    // Ascension on Thursday 2024 is 9 May — Thursday of Easter week 6.
    // weekdayOrSundayOfEasterTime(4, 6) therefore returns null.
    const liturgicalDayConfig = new LiturgicalDayConfig(new RomcalConfig({ ascensionOnSunday: false }), 2024);
    // 1 May 2024 is a Wednesday, so ifIsDayOfWeek: 3 always matches this dateDef.
    const result = liturgicalDayConfig.buildDate(
      def({ month: 5, date: 1 }, [
        {
          ifIsDayOfWeek: 3,
          setDate: { dateFn: 'weekdayOrSundayOfEasterTime', dateArgs: [4, 6] },
        },
      ])
    );

    expect(result).toBeNull();
  });

  test('the same dateFn setDate resolves when Ascension is on Sunday', () => {
    const liturgicalDayConfig = new LiturgicalDayConfig(new RomcalConfig({ ascensionOnSunday: true }), 2024);
    const result = liturgicalDayConfig.buildDate(
      def({ month: 5, date: 1 }, [
        {
          ifIsDayOfWeek: 3,
          setDate: { dateFn: 'weekdayOrSundayOfEasterTime', dateArgs: [4, 6] },
        },
      ])
    );

    expect(result?.toISOString()).toEqual('2024-05-09T00:00:00.000Z');
  });
});
