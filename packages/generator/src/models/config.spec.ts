import i18next from 'i18next';

import { PROPER_OF_TIME_NAME } from '../constants/general-calendar-names';
import { sanitizeLocaleId } from '../utils/string';

import { RomcalConfig } from './config';

// The transformer routes a file that mocks a module through Babel, which cannot strip
// annotations that reference imported bindings: this spec therefore uses local loose types only.
type Loose = Record<string, unknown>;

const mockGetRite = jest.fn();
const mockGetBaseCalendar = jest.fn();
const mockUpdateConfig = jest.fn();

jest.mock('./active-rite', () => ({ getRite: () => mockGetRite() }));
jest.mock('./base-calendar', () => ({ getBaseCalendar: () => mockGetBaseCalendar() }));
jest.mock('./calendar-def', () => ({
  CalendarDef: class {
    config: unknown;

    inputs: unknown;

    calendarName = 'localized_def';

    updateConfig = mockUpdateConfig;

    constructor(config: unknown, inputs: unknown) {
      this.config = config;
      this.inputs = inputs;
    }
  },
}));

const namedCalendar = (name: string) =>
  class {
    config: unknown;

    calendarName = name;

    updateConfig = mockUpdateConfig;

    constructor(config: unknown) {
      this.config = config;
    }
  };

const makeRite = (properOfTimeName: string = PROPER_OF_TIME_NAME): Loose => ({
  dates: class StubDates {},
  rubrics: { stub: 'rubrics' },
  properOfTime: namedCalendar(properOfTimeName),
});

const overrides = (dayOfWeek: string): Loose => ({
  anchorExceptions: { epiphany: [{ when: { dayOfWeek }, then: { transferTo: 'sunday' } }] },
});

const localized = (extra: Loose = {}): Loose => ({
  calendarName: 'localized_name',
  inputs: { some: 'inputs' },
  martyrology: { from: 'localized' },
  particularConfig: {},
  ...extra,
});

const make = (config?: Loose, ...rest: unknown[]) =>
  new RomcalConfig(config as never, rest[0] as never, rest[1] as never, rest[2] as never, rest[3] as never);

describe('config.ts', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    mockGetRite.mockReset().mockReturnValue(makeRite());
    mockGetBaseCalendar.mockReset().mockReturnValue(namedCalendar('base_name'));
    mockUpdateConfig.mockReset();
  });

  describe('constructor defaults', () => {
    it('builds a Gregorian configuration from the registered rite', () => {
      const rite = makeRite();
      mockGetRite.mockReturnValue(rite);

      const config = make();

      expect(config.rite).toBe(rite);
      expect(config.dates).toBe(rite.dates);
      expect(config.rubrics).toBe(rite.rubrics);
      expect(config).toMatchObject({
        easterCalculationType: 'gregorian',
        scope: 'gregorian',
        epiphanyOnSunday: false,
        corpusChristiOnSunday: true,
        ascensionOnSunday: false,
        elevatedMemorialIds: [],
        localeId: 'dev',
        calendarName: 'base_name',
        outputOptions: { calculateProperties: false },
        martyrologyCatalog: {},
        liturgicalDayDef: {},
        cyclesCache: {},
      });
      expect(config.temporalOverrides).toBeUndefined();
      expect(config.localizedCalendar).toBeUndefined();
    });

    it('builds the Proper of Time and the base calendar, in that order, and updates them', () => {
      const input = { scope: 'liturgical' };
      const config = make(input);

      expect(config.calendarsDef.map((cal) => cal.calendarName)).toEqual([PROPER_OF_TIME_NAME, 'base_name']);
      expect(mockUpdateConfig).toHaveBeenCalledTimes(2);
      expect(mockUpdateConfig).toHaveBeenCalledWith(input);
    });

    it('does not ask for the registered rite when one is given', () => {
      make(undefined, undefined, undefined, undefined, makeRite());

      expect(mockGetRite).not.toHaveBeenCalled();
    });

    it('refuses a rite whose Proper of Time calendar is misnamed', () => {
      mockGetRite.mockReturnValue(makeRite('wrong_name'));

      expect(() => make()).toThrow(`must be named "${PROPER_OF_TIME_NAME}" (got "wrong_name")`);
    });
  });

  describe('constructor input', () => {
    it('takes every setting from the input', () => {
      const config = make({
        easterCalculationType: 'julian',
        scope: 'liturgical',
        epiphanyOnSunday: true,
        corpusChristiOnSunday: false,
        ascensionOnSunday: true,
        elevatedMemorialIds: ['a', 'b'],
        outputOptions: { calculateProperties: true },
      });

      expect(config).toMatchObject({
        easterCalculationType: 'julian',
        scope: 'liturgical',
        epiphanyOnSunday: true,
        corpusChristiOnSunday: false,
        ascensionOnSunday: true,
        elevatedMemorialIds: ['a', 'b'],
        outputOptions: { calculateProperties: true },
      });
    });

    it('uses a copy of the temporal overrides it is given', () => {
      const given = overrides('MONDAY');

      const config = make({ temporalOverrides: given });

      expect(config.temporalOverrides).toEqual(given);
      expect(config.temporalOverrides).not.toBe(given);
    });

    it('drops the epiphany overrides when epiphanyOnSunday is given alone', () => {
      const config = make({
        epiphanyOnSunday: false,
        localizedCalendar: localized({ particularConfig: { temporalOverrides: overrides('TUESDAY') } }),
      });

      expect(config.temporalOverrides).toBeUndefined();
    });
  });

  describe('localized calendar', () => {
    it('takes the particular settings, the martyrology and the name from the localized calendar', () => {
      const calendar = localized({
        particularConfig: {
          epiphanyOnSunday: true,
          corpusChristiOnSunday: false,
          ascensionOnSunday: true,
          temporalOverrides: overrides('WEDNESDAY'),
        },
      });

      const config = make({ localizedCalendar: calendar });

      expect(config).toMatchObject({
        epiphanyOnSunday: true,
        corpusChristiOnSunday: false,
        ascensionOnSunday: true,
        calendarName: 'localized_name',
        martyrologyCatalog: { from: 'localized' },
      });
      expect(config.temporalOverrides).toEqual(overrides('WEDNESDAY'));
      expect(config.localizedCalendar).toBe(calendar);
    });

    it('builds a calendar definition from its inputs, in place of the base calendar', () => {
      const config = make({ localizedCalendar: localized() });

      expect(config.calendarsDef).toHaveLength(2);
      expect(config.calendarsDef[1]).toMatchObject({ inputs: { some: 'inputs' }, config });
      expect(mockGetBaseCalendar).not.toHaveBeenCalled();
    });

    it('takes the locale from the localized calendar over the one given', () => {
      const config = make({ localizedCalendar: localized({ i18n: { id: 'sk' } }) }, undefined, { id: 'en' });

      expect(config.localeId).toBe('sk');
    });
  });

  describe('calendars given by the caller', () => {
    it('adds the particular calendar after the base calendar and takes its name', () => {
      const config = make(undefined, undefined, undefined, namedCalendar('particular_name'));

      expect(config.calendarsDef.map((cal) => cal.calendarName)).toEqual([
        PROPER_OF_TIME_NAME,
        'base_name',
        'particular_name',
      ]);
      expect(config.calendarName).toBe('particular_name');
    });

    it('uses the martyrology catalog it is given', () => {
      const catalog = { from: 'caller' };

      expect(make(undefined, catalog).martyrologyCatalog).toBe(catalog);
    });
  });

  describe('locale and translations', () => {
    const locale = (extra: Loose = {}): Loose => ({
      id: 'en',
      colors: { red: 'Red' },
      seasons: { advent: { season: 'Advent' } },
      periods: {},
      ranks: {},
      cycles: {},
      weekdays: {},
      months: {},
      ordinals: {},
      names: {
        roman: '{{week, romanize}}',
        upper: '{{word, uppercase}}',
        capital: '{{word, capitalize}}',
      },
      ...extra,
    });

    it('sanitizes the id of the locale', () => {
      expect(make(undefined, undefined, locale({ id: 'en-US' })).localeId).toBe(sanitizeLocaleId('en-US'));
    });

    it('falls back to the development locale when the locale has no id', () => {
      expect(make(undefined, undefined, locale({ id: '' })).localeId).toBe('dev');
    });

    it('translates colour and season names from the locale', () => {
      const config = make(undefined, undefined, locale());

      expect(config.getLiturgicalColorNames(['RED'] as never)).toEqual(['Red']);
      expect(config.getSeasonNames(['ADVENT'])).toEqual(['Advent']);
    });

    it('accepts a locale with only some of its resources', () => {
      const config = make(undefined, undefined, { id: 'en' });

      // i18next answers a missing key with the key itself, without its namespace.
      expect(config.getLiturgicalColorNames(['RED'] as never)).toEqual(['red']);
    });

    it('falls back to the lookup key when a translation is missing, or answers nothing', () => {
      const config = make(undefined, undefined, locale());
      jest.spyOn(config.i18next, 't').mockReturnValue(undefined as never);

      expect(config.getLiturgicalColorNames([undefined, 'RED'] as never)).toEqual(['colors:', 'colors:red']);
      expect(config.getSeasonNames([undefined as never, 'ADVENT'])).toEqual(['seasons:.season', 'seasons:advent.season']);
    });

    it('registers the custom interpolation formats', () => {
      const config = make(undefined, undefined, locale());
      const t = (key: string, options: Loose) => config.i18next.t(key as never, options as never) as unknown as string;

      expect(t('names:roman', { week: 4 })).toBe('IV');
      expect(t('names:upper', { word: 'advent' })).toBe('ADVENT');
      expect(t('names:capital', { word: 'advent' })).toBe('Advent');
      expect(t('names:roman', { week: '' })).toBe('');
    });

    it('formats an absent value as an empty string', () => {
      const formats: Record<string, (value: unknown) => string> = {};
      const add = (name: string, format: (value: unknown) => string) => {
        formats[name] = format;
      };
      jest.spyOn(i18next, 'createInstance').mockReturnValueOnce({ services: { formatter: { add } } } as never);
      make();

      ['romanize', 'uppercase', 'capitalize'].forEach((name) => {
        expect(formats[name](undefined)).toBe('');
        expect(formats[name](null)).toBe('');
        expect(formats[name]('')).toBe('');
      });
      expect(formats.romanize('7')).toBe('VII');
    });

    it('goes on without custom formats when i18next has no formatter service', () => {
      jest.spyOn(i18next, 'createInstance').mockReturnValueOnce({ services: {} } as never);

      expect(() => make()).not.toThrow();
    });

    it('throws when i18next fails to initialise', () => {
      let onInit: ((err?: string) => void) | undefined;
      jest.spyOn(i18next, 'createInstance').mockImplementationOnce(((_options: unknown, callback: typeof onInit) => {
        onInit = callback;
        return { services: {} };
      }) as never);
      make();

      expect(() => onInit?.('boom')).toThrow('boom');
      expect(() => onInit?.(undefined)).not.toThrow();
    });
  });

  describe('clone', () => {
    it('builds an equivalent configuration, with its own copy of the temporal overrides', () => {
      const original = make({ scope: 'liturgical', temporalOverrides: overrides('FRIDAY') });

      const copy = original.clone();

      expect(copy).not.toBe(original);
      expect(copy.rite).toBe(original.rite);
      expect(copy.scope).toBe('liturgical');
      expect(copy.temporalOverrides).toEqual(original.temporalOverrides);
      expect(copy.temporalOverrides).not.toBe(original.temporalOverrides);
    });
  });

  describe('toObject', () => {
    it('describes the configuration', () => {
      const config = make({ scope: 'liturgical', elevatedMemorialIds: ['a'] });

      expect(config.toObject()).toEqual({
        epiphanyOnSunday: false,
        corpusChristiOnSunday: true,
        ascensionOnSunday: false,
        elevatedMemorialIds: ['a'],
        localeId: 'dev',
        calendarName: 'base_name',
        easterCalculationType: 'gregorian',
        scope: 'liturgical',
        outputOptions: { calculateProperties: false },
      });
    });

    it('includes a copy of the temporal overrides when there are some', () => {
      const config = make({ temporalOverrides: overrides('SATURDAY') });

      const result = config.toObject();

      expect(result.temporalOverrides).toEqual(overrides('SATURDAY'));
      expect(result.temporalOverrides).not.toBe(config.temporalOverrides);
    });
  });
});
