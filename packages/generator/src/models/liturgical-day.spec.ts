import { PROPER_OF_TIME_NAME } from '../constants/general-calendar-names';
import { Precedences } from '../constants/precedences';
import { Ranks } from '../constants/ranks';

import { LiturgicalDay } from './liturgical-day';

// The transformer routes a file that mocks a module through Babel, which cannot strip
// annotations that reference imported bindings: this spec therefore uses local loose types only.
type Loose = Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

const mockCyclesMetadata = jest.fn();

jest.mock('./cycles-metadata', () => ({
  CyclesMetadata: function CyclesMetadata(this: unknown, ...args: unknown[]) {
    mockCyclesMetadata(...args);
    return { cyclesStub: true, args };
  },
}));

const makeDef = (extra: Loose = {}): Loose => ({
  id: 'some_day',
  dateDef: { month: 1, date: 1 },
  dateExceptions: [{ ifIsDayOfWeek: 1 }],
  alternativeTransferDateDefs: [{ month: 2, date: 2 }],
  precedence: Precedences.OptionalMemorial_12,
  rank: Ranks.Feast,
  allowSimilarRankItems: true,
  commonsDef: ['common'],
  isHolyDayOfObligation: false,
  isOptional: false,
  i18nDef: { key: 'value' },
  seasons: ['ORDINARY_TIME'],
  periods: ['PERIOD_DEF'],
  colors: ['RED'],
  martyrology: [{ id: 'm' }],
  titles: { titles: [] },
  cycles: { properCycle: 'PROPER_OF_SAINTS' },
  fromCalendarId: 'general_roman',
  fromExtendedCalendars: [],
  name: 'The name',
  rankName: 'The rank name',
  ...extra,
});

const makeConfig = (rubrics: Loose = {}) => ({
  config: {
    rubrics,
    getLiturgicalColorNames: jest.fn(() => ['Red']),
    getSeasonNames: jest.fn(() => ['Ordinary Time']),
  },
  dates: { stub: 'dates' },
  getConfigObject: jest.fn(() => ({ year: 2027 })),
});

const calendarOf = (extra: Loose = {}): Loose => ({ dayOfWeek: 3, startOfLiturgicalYear: '2026-11-29', ...extra });

const DATE = new Date('2027-03-15T00:00:00.000Z');

const make = (
  options: {
    def?: Loose;
    config?: ReturnType<typeof makeConfig>;
    calendar?: Loose;
    base?: Loose | null;
    weekday?: Loose | null;
  } = {}
) => {
  const config = options.config ?? makeConfig();
  const def = options.def ?? makeDef();
  const calendar = options.calendar ?? calendarOf();
  const day = new LiturgicalDay(
    def as never,
    DATE,
    config as never,
    calendar as never,
    (options.base ?? null) as never,
    (options.weekday ?? null) as never
  );
  return { day, def, config, calendar };
};

describe('liturgical-day.ts', () => {
  beforeEach(() => mockCyclesMetadata.mockClear());

  describe('constructor', () => {
    it('takes its fields from the definition, with the date as an ISO day', () => {
      const { day, def } = make();

      expect(day).toMatchObject({
        id: 'some_day',
        date: '2027-03-15',
        dateDef: def.dateDef,
        dateExceptions: def.dateExceptions,
        alternativeTransferDateDefs: def.alternativeTransferDateDefs,
        precedence: def.precedence,
        rank: def.rank,
        allowSimilarRankItems: true,
        commonsDef: def.commonsDef,
        isOptional: false,
        i18nDef: def.i18nDef,
        martyrology: def.martyrology,
        titles: def.titles,
        fromCalendarId: 'general_roman',
        fromExtendedCalendars: def.fromExtendedCalendars,
      });
    });

    it('is a holy day of obligation on a Sunday, or when its definition says so', () => {
      expect(make({ calendar: calendarOf({ dayOfWeek: 0 }) }).day.isHolyDayOfObligation).toBe(true);
      expect(make({ calendar: calendarOf({ dayOfWeek: 2 }) }).day.isHolyDayOfObligation).toBe(false);
      expect(
        make({ calendar: calendarOf({ dayOfWeek: 2 }), def: makeDef({ isHolyDayOfObligation: true }) }).day
          .isHolyDayOfObligation
      ).toBe(true);
    });

    it('reads the seasons, periods and calendar from the definition and the given calendar', () => {
      const { day, def, calendar } = make();

      expect(day.seasons).toBe(def.seasons);
      expect(day.periods).toEqual(['PERIOD_DEF']);
      expect(day.calendar).toBe(calendar);
    });

    it('prefers the seasons, periods and calendar of the base data', () => {
      const base = { seasons: ['ADVENT'], periods: ['PERIOD_BASE'], calendar: { from: 'base' } };

      const { day } = make({ base });

      expect(day.seasons).toBe(base.seasons);
      expect(day.periods).toEqual(['PERIOD_BASE']);
      expect(day.calendar).toBe(base.calendar);
    });

    it('copies the periods so the definition is not written back to', () => {
      const periodsOf = jest.fn(() => ['PERIOD_FROM_DATE']);
      const def = makeDef({ fromCalendarId: PROPER_OF_TIME_NAME });

      const { day } = make({ def, config: makeConfig({ periodsOf }) });

      expect(day.periods).toEqual(['PERIOD_FROM_DATE', 'PERIOD_DEF']);
      expect(def.periods).toEqual(['PERIOD_DEF']);
    });

    it('asks the rite for the periods of a Proper of Time day, from where its date landed', () => {
      const periodsOf = jest.fn(() => []);
      const config = makeConfig({ periodsOf });

      const { day } = make({ def: makeDef({ fromCalendarId: PROPER_OF_TIME_NAME }), config });

      expect(periodsOf).toHaveBeenCalledWith({
        date: DATE,
        dates: config.dates,
        id: 'some_day',
        seasons: day.seasons,
      });
    });

    it('asks nothing of the rite for a day from another calendar, or from a rite without periodsOf', () => {
      const periodsOf = jest.fn(() => ['X']);

      const other = make({ config: makeConfig({ periodsOf }) });
      const noHook = make({ def: makeDef({ fromCalendarId: PROPER_OF_TIME_NAME }) });

      expect(periodsOf).not.toHaveBeenCalled();
      expect(other.day.periods).toEqual(['PERIOD_DEF']);
      expect(noHook.day.periods).toEqual(['PERIOD_DEF']);
    });

    describe('colours', () => {
      const privileged = { precedence: Precedences.PrivilegedWeekday_9 };

      it('has none for a memorial under a privileged weekday', () => {
        expect(make({ def: makeDef({ rank: Ranks.Memorial }), weekday: privileged }).day.colors).toEqual([]);
        expect(make({ def: makeDef({ rank: Ranks.OptionalMemorial }), weekday: privileged }).day.colors).toEqual([]);
      });

      it('keeps those of the definition otherwise', () => {
        expect(make({ def: makeDef({ rank: Ranks.Feast }), weekday: privileged }).day.colors).toEqual(['RED']);
        expect(
          make({ def: makeDef({ rank: Ranks.Memorial }), weekday: { precedence: Precedences.OptionalMemorial_12 } }).day
            .colors
        ).toEqual(['RED']);
        expect(make({ def: makeDef({ rank: Ranks.Memorial }) }).day.colors).toEqual(['RED']);
      });
    });

    it('builds the cycles metadata from the given date, calendar and proper cycle', () => {
      const { day, config, calendar } = make({ base: { calendar: { from: 'base' } } });

      expect(mockCyclesMetadata).toHaveBeenCalledWith(DATE, calendar, 'PROPER_OF_SAINTS', config.config);
      expect(day.cycles).toMatchObject({ cyclesStub: true });
    });

    it('holds the base weekday when there is one, and none otherwise', () => {
      const weekday = { id: 'weekday' };

      expect(make({ weekday }).day.weekday).toBe(weekday);
      expect('weekday' in make().day).toBe(false);
    });
  });

  describe('getters', () => {
    it('reads the name, rank name and definition from the definition', () => {
      const { day, def } = make();

      expect(day.name).toBe('The name');
      expect(day.rankName).toBe('The rank name');
      expect(day.definition).toBe(def);
    });

    it('reads the config from the liturgical day config', () => {
      expect(make().day.config).toEqual({ year: 2027 });
    });

    it('translates the colour and season names once', () => {
      const { day, config } = make();

      expect(day.colorNames).toEqual(['Red']);
      expect(day.colorNames).toEqual(['Red']);
      expect(day.seasonNames).toEqual(['Ordinary Time']);
      expect(day.seasonNames).toEqual(['Ordinary Time']);
      expect(config.config.getLiturgicalColorNames).toHaveBeenCalledTimes(1);
      expect(config.config.getLiturgicalColorNames).toHaveBeenCalledWith(day.colors);
      expect(config.config.getSeasonNames).toHaveBeenCalledTimes(1);
      expect(config.config.getSeasonNames).toHaveBeenCalledWith(day.seasons);
    });
  });

  describe('toJson', () => {
    it('adds the computed fields, read from the definition, to a copy of the day', () => {
      const computed = {
        name: 'N',
        colorNames: ['C'],
        seasonNames: ['S'],
        rankName: 'R',
        definition: { d: 1 },
        config: { c: 1 },
      };
      const { day } = make({ def: makeDef(computed) });

      const json = day.toJson() as unknown as Loose;

      expect(json).not.toBe(day);
      expect(json).toMatchObject({ id: 'some_day', date: '2027-03-15', ...computed });
    });
  });
});
