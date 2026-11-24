import { PROPER_OF_TIME_NAME } from '../constants/general-calendar-names';
import { Ranks } from '../constants/ranks';

import { Calendar } from './calendar';

// The days the calendar builds are the real thing's business, not this spec's: a stand-in records what the
// calendar hands it, so every assertion is about the calendar's own decisions.
jest.mock('./liturgical-day', () => ({
  LiturgicalDay: class {
    id: string;

    date: string;

    definition: Record<string, unknown>;

    seasons: string[];

    calendar: Record<string, unknown>;

    isOptional: boolean;

    precedence: string;

    rank: string;

    allowSimilarRankItems: boolean;

    weekday?: unknown;

    calculated?: boolean;

    constructor(
      def: Record<string, unknown>,
      date: Date,
      _config: unknown,
      calendar: Record<string, unknown>,
      baseData: { seasons: string[]; calendar: Record<string, unknown> } | null,
      weekday: unknown
    ) {
      this.id = def.id as string;
      this.date = date.toISOString().substring(0, 10);
      this.definition = def;
      this.seasons = baseData?.seasons ?? (def.seasons as string[]);
      this.calendar = baseData?.calendar ?? calendar;
      this.isOptional = def.isOptional as boolean;
      this.precedence = def.precedence as string;
      this.rank = def.rank as string;
      this.allowSimilarRankItems = def.allowSimilarRankItems as boolean;
      if (weekday) this.weekday = weekday;
    }

    toJson(): unknown {
      return { ...this, calculated: true };
    }
  },
}));

interface FakeDay {
  id: string;
  date: string;
  calendar: Record<string, unknown>;
  calculated?: boolean;
  weekday?: FakeDay;
}

type Overrides = Record<string, unknown>;

const at = (iso: string): Date => new Date(`${iso}T00:00:00Z`);

const GENERAL = 'GeneralRoman';

// A definition, by default a day of the Proper of Time in Advent.
const def = (id: string, extra: Overrides = {}): Overrides => ({
  id,
  fromCalendarId: PROPER_OF_TIME_NAME,
  fromExtendedCalendars: [],
  seasons: ['advent'],
  calendarMetadata: {},
  rank: Ranks.Weekday,
  precedence: 'low',
  isOptional: false,
  allowSimilarRankItems: false,
  dates: {},
  ...extra,
});

// A sanctoral definition, which builds on the Proper of Time day of its date.
const sanctoral = (id: string, extra: Overrides = {}): Overrides =>
  def(id, { fromCalendarId: GENERAL, precedence: 'high', ...extra });

const setup = (defs: Overrides[], { scope = 'gregorian', calculateProperties = false, rite = {} } = {}) => {
  const numbering = jest.fn<{ dayOfSeason: number; weekOfSeason: number }, [unknown]>(() => ({
    dayOfSeason: 3,
    weekOfSeason: 2,
  }));
  const startOfSeasons = jest.fn((year: number) => ({ advent: at(`${year - 1}-12-01`), ordinary: at(`${year}-01-01`) }));
  const endOfSeasons = jest.fn((year: number) => ({ advent: at(`${year - 1}-12-24`), ordinary: at(`${year}-12-31`) }));
  const buildDate = jest.fn((d: { id: string; dates: { current?: Date; previous?: Date } }, offset = 0) => {
    return d.dates[offset === 0 ? 'current' : 'previous'] ?? null;
  });
  const dayConfig = {
    year: 2020,
    dates: { firstSundayOfAdvent: () => at('2020-11-29'), startOfSeasons, endOfSeasons },
    buildDate,
  };
  const DatesStandIn = jest.fn();
  const config = {
    scope,
    dates: DatesStandIn,
    outputOptions: { calculateProperties },
    liturgicalDayDef: Object.fromEntries(defs.map((d) => [d.id as string, d])),
    rubrics: {
      precedences: ['high', 'low'],
      precedenceFirst: true,
      similarRankItemRanks: [],
      resolveOccurrences: ({ days }: { days: FakeDay[] }) => ({ onDate: days }),
      seasons: { firstSeason: 'advent', lastSeason: 'ordinary', numbering },
      ...rite,
    },
  };
  const calendar = new Calendar(config as never, dayConfig as never);
  const generate = (): Record<string, FakeDay[]> => calendar.generateCalendar() as unknown as Record<string, FakeDay[]>;
  return { buildDate, calendar, config, DatesStandIn, endOfSeasons, generate, numbering, startOfSeasons };
};

const idsOf = (days: Record<string, FakeDay[]>): Record<string, string[]> =>
  Object.fromEntries(Object.entries(days).map(([date, list]) => [date, list.map((d) => d.id)]));

describe('Calendar', () => {
  test('builds its dates from the rite, for the year of the day configuration', () => {
    const { calendar, config, DatesStandIn } = setup([]);

    expect(DatesStandIn).toHaveBeenCalledWith(config, 2020);
    expect(calendar.dates).toBeDefined();
  });

  describe('getOneLiturgicalDay', () => {
    test('is undefined for an id the calendar does not hold, whatever the object inherits', () => {
      const { calendar } = setup([def('w1')]);

      expect(calendar.getOneLiturgicalDay('nothing')).toBeUndefined();
      expect(calendar.getOneLiturgicalDay('toString')).toBeUndefined();
    });

    test('is null when the day does not occur in the year, or its date is invalid', () => {
      const { calendar } = setup([def('none'), def('bad', { dates: { current: new Date(NaN) } })]);

      expect(calendar.getOneLiturgicalDay('none')).toBeNull();
      expect(calendar.getOneLiturgicalDay('bad')).toBeNull();
    });

    test('builds the metadata from the definition, the season and the boundaries of the year', () => {
      const { calendar, numbering } = setup([
        def('w1', {
          calendarMetadata: { dayOfSeason: 10, weekOfSeason: 5, dayOfWeek: 3 },
          dates: { current: at('2020-01-15') },
        }),
      ]);

      const day = calendar.getOneLiturgicalDay('w1') as unknown as FakeDay;

      expect(day.calendar).toEqual({
        weekOfSeason: 2,
        dayOfSeason: 3,
        dayOfWeek: 3,
        nthDayOfWeekInMonth: 3,
        startOfSeason: '2019-12-01',
        endOfSeason: '2019-12-24',
        startOfLiturgicalYear: '2019-12-01',
        endOfLiturgicalYear: '2020-12-31',
        seasons: ['advent'],
      });
      expect(numbering).toHaveBeenCalledWith(
        expect.objectContaining({
          date: at('2020-01-15'),
          declaredDayOfSeason: 10,
          declaredWeekOfSeason: 5,
          endOfSeason: at('2019-12-24'),
          seasons: ['advent'],
          startOfSeason: at('2019-12-01'),
        })
      );
    });

    test('leaves the season boundaries empty for a day in no season, and reads its weekday off the date', () => {
      const { calendar, numbering } = setup([def('w1', { seasons: [], dates: { current: at('2020-01-02') } })]);

      const day = calendar.getOneLiturgicalDay('w1') as unknown as FakeDay;

      expect(day.calendar).toMatchObject({ dayOfWeek: 4, startOfSeason: '', endOfSeason: '' });
      expect(numbering).toHaveBeenCalledWith(
        expect.objectContaining({ endOfSeason: undefined, startOfSeason: undefined })
      );
    });

    test('reads the season dictionaries of a year once', () => {
      const { calendar, startOfSeasons, endOfSeasons } = setup([
        def('w1', { dates: { current: at('2020-01-15') } }),
        def('w2', { dates: { current: at('2020-01-16') } }),
      ]);

      calendar.getOneLiturgicalDay('w1');
      calendar.getOneLiturgicalDay('w2');

      expect(startOfSeasons).toHaveBeenCalledTimes(1);
      expect(endOfSeasons).toHaveBeenCalledTimes(1);
    });

    test('says which season the rite named as a boundary of its year when it has no date for it', () => {
      const { calendar } = setup([def('w1', { dates: { current: at('2020-01-15') } })], {
        rite: { seasons: { firstSeason: 'missing', lastSeason: 'ordinary', numbering: () => ({}) } },
      });

      expect(() => calendar.getOneLiturgicalDay('w1')).toThrow(
        'The rite declares the liturgical year to run to "missing", which has no boundary.'
      );
    });
  });

  describe('generateCalendar', () => {
    test('orders the days of a date by precedence, and gives a feast or a memorial its weekday', () => {
      const { generate } = setup([
        def('w1', { dates: { current: at('2020-01-01') }, calendarMetadata: { dayOfWeek: 3 } }),
        def('w2', { dates: { current: at('2020-01-02') } }),
        sanctoral('sol', { rank: Ranks.Solemnity, dates: { current: at('2020-01-01') } }),
        sanctoral('feast', { rank: Ranks.Feast, dates: { current: at('2020-01-02') } }),
        sanctoral('memorial', { rank: Ranks.Memorial, precedence: 'low', dates: { current: at('2020-01-02') } }),
        sanctoral('optional', {
          rank: Ranks.OptionalMemorial,
          isOptional: true,
          dates: { current: at('2020-01-02') },
        }),
      ]);

      const days = generate();

      expect(idsOf(days)).toEqual({
        '2020-01-01': ['sol', 'w1'],
        '2020-01-02': ['feast', 'w2', 'memorial', 'optional'],
      });
      expect(days['2020-01-01'][0].weekday).toBeUndefined();
      const [feast, w2, memorial, optional] = days['2020-01-02'];
      expect(feast.weekday).toBe(w2);
      expect(memorial.weekday).toBe(w2);
      expect(optional.weekday).toBe(w2);
      expect(feast.calendar).toBe(w2.calendar);
      expect(days['2020-01-01'][1].calendar).toEqual({
        weekOfSeason: 2,
        dayOfSeason: 3,
        dayOfWeek: 3,
        nthDayOfWeekInMonth: 1,
        startOfSeason: '2019-12-01',
        endOfSeason: '2019-12-24',
        startOfLiturgicalYear: '2019-12-01',
        endOfLiturgicalYear: '2020-12-31',
        seasons: ['advent'],
      });
    });

    test('drops the days of the sanctoral that no day of the Proper of Time covers, and those without a valid date', () => {
      const { generate } = setup([
        def('w1', { dates: { current: at('2020-01-01') } }),
        sanctoral('outside', { dates: { current: at('2020-04-01') } }),
        sanctoral('none'),
        sanctoral('bad', { dates: { current: new Date(NaN) } }),
        // Locally extended, but with a calendar that is not the Proper of Time.
        sanctoral('foreign', {
          fromCalendarId: 'Local',
          fromExtendedCalendars: [{ fromCalendarId: 'Other' }],
          dates: { current: at('2020-05-01') },
        }),
      ]);

      expect(idsOf(generate())).toEqual({ '2020-01-01': ['w1'] });
    });

    test('takes a Proper of Time day extended by a particular calendar for a day of the Proper of Time', () => {
      const { generate } = setup([
        def('w1', { dates: { current: at('2020-01-01') } }),
        def('extended', {
          fromCalendarId: 'Local',
          fromExtendedCalendars: [{ fromCalendarId: PROPER_OF_TIME_NAME }],
          seasons: [],
          dates: { current: at('2020-03-01') },
        }),
      ]);

      const days = generate();

      expect(idsOf(days)).toEqual({ '2020-01-01': ['w1'], '2020-03-01': ['extended'] });
      expect(days['2020-03-01'][0].calendar).toMatchObject({ startOfSeason: '', endOfSeason: '' });
    });

    test('looks a sanctoral day up in the previous year too in a liturgical scope, but not the Proper of Time', () => {
      const { buildDate, generate } = setup(
        [
          def('w0', { dates: { current: at('2019-12-31') } }),
          def('w1', { dates: { current: at('2020-01-01') } }),
          sanctoral('saint', { dates: { previous: at('2019-12-31'), current: at('2020-01-01') } }),
        ],
        { scope: 'liturgical' }
      );

      const days = generate();

      expect(idsOf(days)).toEqual({ '2019-12-31': ['saint', 'w0'], '2020-01-01': ['saint', 'w1'] });
      expect(buildDate.mock.calls.filter(([d, offset]) => offset === -1 && d.id.startsWith('w'))).toEqual([]);
      expect(buildDate).toHaveBeenCalledWith(expect.objectContaining({ id: 'saint' }), -1);
    });

    test('counts the days from Advent in the following year in a gregorian scope', () => {
      const { generate, startOfSeasons } = setup([
        def('early', { dates: { current: at('2020-01-01') } }),
        def('late', { dates: { current: at('2020-12-05') } }),
      ]);

      const days = generate();

      expect(startOfSeasons.mock.calls).toEqual([[2020], [2021]]);
      expect(days['2020-01-01'][0].calendar.startOfLiturgicalYear).toBe('2019-12-01');
      expect(days['2020-12-05'][0].calendar.startOfLiturgicalYear).toBe('2020-12-01');
    });

    test('does not move the year on in a liturgical scope', () => {
      const { generate, startOfSeasons } = setup([def('late', { dates: { current: at('2020-12-05') } })], {
        scope: 'liturgical',
      });

      generate();

      expect(startOfSeasons.mock.calls).toEqual([[2020]]);
    });

    test('hands the days to the rite as properties when asked to calculate them', () => {
      const { generate } = setup([def('w1', { dates: { current: at('2020-01-01') } })], { calculateProperties: true });

      expect(generate()['2020-01-01'][0].calculated).toBe(true);
    });

    test('keeps the days as they are otherwise', () => {
      const { generate } = setup([def('w1', { dates: { current: at('2020-01-01') } })]);

      expect(generate()['2020-01-01'][0].calculated).toBeUndefined();
    });

    describe('transfers', () => {
      const defs = (): Overrides[] => [
        def('w1', { dates: { current: at('2020-01-01') }, calendarMetadata: { dayOfWeek: 3, dayOfSeason: 10 } }),
        def('w2', { dates: { current: at('2020-01-02') } }),
      ];

      test('rebuilds a day of the Proper of Time where it landed, and drops a transfer out of range', () => {
        const seen: Record<string, unknown> = {};
        const { generate, numbering } = setup(defs(), {
          rite: {
            resolveOccurrences: ({
              date,
              days,
              dayOn,
            }: {
              date: string;
              days: FakeDay[];
              dayOn: (d: string) => FakeDay | undefined;
            }) => {
              if (date === '2020-01-01') {
                seen.later = dayOn('2020-01-02')?.id;
                seen.outside = dayOn('2020-02-01');
                return {
                  onDate: [],
                  transfers: [
                    { date: '2020-01-02', day: days[0] },
                    { date: '2020-06-01', day: days[0] },
                  ],
                };
              }
              seen.resolved = dayOn('2020-01-01');
              return { onDate: days };
            },
          },
        });

        const days = generate();

        expect(idsOf(days)).toEqual({ '2020-01-01': [], '2020-01-02': ['w2', 'w1'] });
        const moved = days['2020-01-02'][1];
        expect(moved.date).toBe('2020-01-02');
        expect(moved.calendar).toMatchObject({ dayOfWeek: 4 });
        expect(seen.later).toBe('w2');
        expect(seen.outside).toBeUndefined();
        expect(seen.resolved).toBeUndefined();
        // The day was appointed to the tenth day of its season; where it landed, that no longer holds.
        const declared = numbering.mock.calls.map(([input]) => input as { date: Date; declaredDayOfSeason?: number });
        const onFirst = declared.filter(({ date }) => date.getTime() === at('2020-01-01').getTime());
        const onSecond = declared.filter(({ date }) => date.getTime() === at('2020-01-02').getTime());
        expect(onFirst.map((input) => input.declaredDayOfSeason)).toEqual([10]);
        expect(onSecond.map((input) => input.declaredDayOfSeason)).toEqual([undefined, undefined]);
      });

      test('rebuilds a day of the sanctoral on the weekday of its destination', () => {
        const { generate } = setup(
          [...defs(), sanctoral('feast', { rank: Ranks.Feast, dates: { current: at('2020-01-01') } })],
          {
            rite: {
              resolveOccurrences: ({ date, days }: { date: string; days: FakeDay[] }) =>
                date === '2020-01-01'
                  ? { onDate: [days[1]], transfers: [{ date: '2020-01-02', day: days[0] }] }
                  : { onDate: days },
            },
          }
        );

        const days = generate();

        expect(idsOf(days)).toEqual({ '2020-01-01': ['w1'], '2020-01-02': ['feast', 'w2'] });
        expect(days['2020-01-02'][0].weekday).toBe(days['2020-01-02'][1]);
      });

      test('resolves a date again when a day it sent comes back, once nothing more moves', () => {
        const calls: Record<string, number> = {};
        const { generate } = setup(defs(), {
          rite: {
            resolveOccurrences: ({ date, days }: { date: string; days: FakeDay[] }) => {
              calls[date] = (calls[date] ?? 0) + 1;
              if (calls[date] > 1) return { onDate: days };
              const day = days.find((d) => d.id === 'w1') as FakeDay;
              return date === '2020-01-01'
                ? { onDate: days, transfers: [{ date: '2020-01-02', day }] }
                : { onDate: days, transfers: [{ date: '2020-01-01', day }] };
            },
          },
        });

        generate();

        expect(calls).toEqual({ '2020-01-01': 3, '2020-01-02': 2 });
      });

      test('refuses a transfer onto the date it is sent from', () => {
        const { generate } = setup(defs(), {
          rite: {
            resolveOccurrences: ({ date, days }: { date: string; days: FakeDay[] }) => ({
              onDate: days,
              transfers: [{ date, day: days[0] }],
            }),
          },
        });

        expect(() => generate()).toThrow('Transfers must move to another date: "w1" on 2020-01-01.');
      });

      test('refuses a day that is sent back and forth for ever', () => {
        const { generate } = setup(defs(), {
          rite: {
            resolveOccurrences: ({ date, days }: { date: string; days: FakeDay[] }) => ({
              onDate: days,
              transfers: [
                {
                  date: date === '2020-01-01' ? '2020-01-02' : '2020-01-01',
                  day: days.find((d) => d.id === 'w1') as FakeDay,
                },
              ],
            }),
          },
        });

        expect(() => generate()).toThrow('The transfers of "w1" do not settle.');
      });
    });
  });
});
