import { AnchorException, ParticularConfig, Romcal, TemporalOverrides } from '@src/rite-roman1969';

const { CalendarDef, RomcalConfig, LiturgicalDayConfig } = Romcal;

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
    expect(new LiturgicalDayConfig(config, 2024).dates.epiphany().toISOString()).toEqual('2024-01-07T00:00:00.000Z');
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
    expect(new LiturgicalDayConfig(clone, 2024).dates.epiphany().toISOString()).toEqual('2024-01-07T00:00:00.000Z');
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

    const config = new RomcalConfig({ epiphanyOnSunday: false }, undefined, undefined, ChildCalendar);

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
    expect(new LiturgicalDayConfig(config, 2024).dates.epiphany().toISOString()).toEqual('2024-01-06T00:00:00.000Z');
  });
});
