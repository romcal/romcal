import { CalendarDef } from './calendar-def';
import { LiturgicalDayDef } from './liturgical-day-def';

// The transformer routes a file that mocks a module through Babel, which cannot strip
// annotations that reference imported bindings: this spec therefore uses local loose types only.
jest.mock('./liturgical-day-def', () => ({ LiturgicalDayDef: jest.fn() }));

type Loose = Record<string, unknown>;

const overrides = (dayOfWeek: string): Loose => ({
  anchorExceptions: { epiphany: [{ when: { dayOfWeek }, then: { transferTo: 'sunday' } }] },
});

const makeConfig = (state: Loose = {}): never => ({ dates: { stub: true }, ...state }) as never;

const day = (extra: Loose = {}): Loose => ({ dateDef: { month: 1, date: 1 }, precedence: 'X', ...extra });

const temporalOverridesOf = (config: unknown): unknown => (config as Loose).temporalOverrides;

describe('calendar-def.ts', () => {
  const ctor = LiturgicalDayDef as unknown as jest.Mock;

  beforeEach(() => ctor.mockClear());

  describe('calendarName', () => {
    class GeneralRoman extends CalendarDef {}

    it('derives a snake_case name from the class name, once', () => {
      const cal = new GeneralRoman(makeConfig());

      expect(cal.calendarName).toBe('general_roman');
      expect(cal.calendarName).toBe('general_roman');
    });
  });

  describe('constructor', () => {
    it('takes the dates from the config and starts without inputs', () => {
      const config = makeConfig();
      const cal = new CalendarDef(config);

      expect(cal.dates).toBe((config as Loose).dates);
      expect(cal.inputs).toEqual({});
    });

    it('keeps the inputs it is given', () => {
      const inputs = { a: [day()] } as never;

      expect(new CalendarDef(makeConfig(), inputs).inputs).toBe(inputs);
    });
  });

  describe('updateConfig', () => {
    const base = () => ({
      epiphanyOnSunday: false,
      ascensionOnSunday: false,
      corpusChristiOnSunday: false,
      temporalOverrides: overrides('MONDAY'),
    });

    it('keeps the config values when neither the input nor the calendar sets any', () => {
      const state = base();
      const config = makeConfig(state);

      new CalendarDef(config).updateConfig();

      expect(config).toMatchObject(state);
    });

    it('prefers the input over the particular config over the config', () => {
      class Particular extends CalendarDef {
        readonly particularConfig = {
          epiphanyOnSunday: true,
          ascensionOnSunday: true,
          corpusChristiOnSunday: true,
        };
      }
      const fromParticular = makeConfig(base());
      new Particular(fromParticular).updateConfig();

      expect(fromParticular).toMatchObject({
        epiphanyOnSunday: true,
        ascensionOnSunday: true,
        corpusChristiOnSunday: true,
      });

      const fromInput = makeConfig(base());
      new Particular(fromInput).updateConfig({
        epiphanyOnSunday: false,
        ascensionOnSunday: false,
        corpusChristiOnSunday: false,
      } as never);

      expect(fromInput).toMatchObject({
        epiphanyOnSunday: false,
        ascensionOnSunday: false,
        corpusChristiOnSunday: false,
      });
    });

    it('uses a copy of the temporal overrides given in the input', () => {
      const config = makeConfig(base());
      const given = overrides('TUESDAY');

      new CalendarDef(config).updateConfig({ temporalOverrides: given } as never);

      expect(temporalOverridesOf(config)).toEqual(given);
      expect(temporalOverridesOf(config)).not.toBe(given);
    });

    it('drops the epiphany overrides of the particular config when epiphanyOnSunday is given', () => {
      class Particular extends CalendarDef {
        readonly particularConfig = { temporalOverrides: overrides('WEDNESDAY') } as never;
      }
      const config = makeConfig(base());

      new Particular(config).updateConfig({ epiphanyOnSunday: true } as never);

      expect(temporalOverridesOf(config)).toBeUndefined();
    });

    it('drops the epiphany overrides of the config when epiphanyOnSunday is given and the calendar has none', () => {
      const config = makeConfig(base());

      new CalendarDef(config).updateConfig({ epiphanyOnSunday: false } as never);

      expect(temporalOverridesOf(config)).toBeUndefined();
    });

    it('uses a copy of the temporal overrides of the particular config', () => {
      const particular = overrides('THURSDAY');
      class Particular extends CalendarDef {
        readonly particularConfig = { temporalOverrides: particular } as never;
      }
      const config = makeConfig(base());

      new Particular(config).updateConfig();

      expect(temporalOverridesOf(config)).toEqual(particular);
      expect(temporalOverridesOf(config)).not.toBe(particular);
    });

    it('updates the parent calendars first, with the same input', () => {
      const order: string[] = [];
      const seen: unknown[] = [];
      class Grandparent extends CalendarDef {
        updateConfig(input?: unknown): void {
          order.push('grandparent');
          seen.push(input);
          super.updateConfig(input as never);
        }
      }
      class Parent extends CalendarDef {
        ParentCalendars = [Grandparent] as never;

        updateConfig(input?: unknown): void {
          order.push('parent');
          super.updateConfig(input as never);
        }
      }
      class Child extends CalendarDef {
        ParentCalendars = [Parent] as never;
      }
      const input = { ascensionOnSunday: true };
      const child = new Child(makeConfig(base()));

      child.updateConfig(input as never);

      expect(order).toEqual(['parent', 'grandparent']);
      expect(seen).toEqual([input]);
      expect(child.parentCalendarInstances).toHaveLength(1);
      expect(child.parentCalendarInstances?.[0]).toBeInstanceOf(Parent);
    });
  });

  describe('buildAllDefinitions', () => {
    it('builds one definition per input, accepting a single value or an array', () => {
      const config = makeConfig();
      const single = day({ precedence: 'SINGLE' });
      const many = [day({ precedence: 'A' }), day()];
      class Local extends CalendarDef {}

      new Local(config, { one: single, two: many } as never).buildAllDefinitions();

      expect(ctor).toHaveBeenCalledTimes(3);
      expect(ctor.mock.calls.map((c) => c[0])).toEqual(['one', 'two', 'two']);
      expect(ctor.mock.calls[0][1]).toMatchObject({ precedence: 'SINGLE', dateDef: single.dateDef });
      expect(ctor.mock.calls[0][3]).toBe(config);
    });

    it('attributes a definition to the calendar, or to the one named by fromCalendarId', () => {
      class Local extends CalendarDef {}

      new Local(makeConfig(), {
        mine: day(),
        borrowed: day({ fromCalendarId: 'other_calendar' }),
      } as never).buildAllDefinitions();

      expect(ctor.mock.calls[0][2]).toBe('local');
      expect(ctor.mock.calls[1][2]).toBe('other_calendar');
    });

    it('builds only once', () => {
      const cal = new CalendarDef(makeConfig(), { a: [day()] } as never);

      cal.buildAllDefinitions();
      cal.buildAllDefinitions();

      expect(ctor).toHaveBeenCalledTimes(1);
    });

    it('builds the definitions of every ancestor, deepest first', () => {
      class Grandparent extends CalendarDef {
        inputs = { g: [day()] } as never;
      }
      class Parent extends CalendarDef {
        ParentCalendars = [Grandparent] as never;

        inputs = { p: [day()] } as never;
      }
      class Child extends CalendarDef {
        ParentCalendars = [Parent] as never;

        inputs = { c: [day()] } as never;
      }
      const child = new Child(makeConfig());

      child.updateConfig();
      child.buildAllDefinitions();

      expect(ctor.mock.calls.map((c) => c[0])).toEqual(['g', 'p', 'c']);
    });
  });
});
