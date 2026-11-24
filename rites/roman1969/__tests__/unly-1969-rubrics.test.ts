import { PatronTitle, Period, Season } from '@internal/generator';
import { LiturgicalDay, Romcal } from '@src/rite-roman1969';

import { Unly1969Rubrics } from '../src/rubrics';
import { Roman1969Vocabulary } from '../src/vocabulary';

const { Precedences, Ranks } = Romcal;

const day = (
  partial: Pick<LiturgicalDay, 'id' | 'date' | 'precedence' | 'rank'> &
    Partial<
      Pick<LiturgicalDay, 'periods' | 'isOptional' | 'allowSimilarRankItems' | 'titles' | 'dateDef' | 'dateExceptions'>
    >
): LiturgicalDay =>
  ({
    dateDef: {},
    dateExceptions: [],
    periods: [],
    isOptional: false,
    allowSimilarRankItems: false,
    ...partial,
  }) as LiturgicalDay;

describe('Unly1969Rubrics', () => {
  test('source cites Normae universales / UNLY n. 59', () => {
    const { source } = Unly1969Rubrics;
    expect(source).toMatchObject({
      abbreviation: 'UNLY',
      titleLatin: 'Normae universales de anno liturgico et de Calendario',
      primaryLocus: 'n. 59',
      year: 1969,
    });
  });

  test('resolveOccurrences downgrades a memorial to optional on a privileged weekday', () => {
    const privilegedWeekday = day({
      id: 'lent_1_monday',
      date: '2020-03-02',
      precedence: Precedences.PrivilegedWeekday_9,
      rank: Ranks.Weekday,
    });
    const memorial = day({
      id: 'some_memorial',
      date: '2020-03-02',
      precedence: Precedences.GeneralMemorial_10,
      rank: Ranks.Memorial,
    });

    // Engine precedence order: PrivilegedWeekday_9 sorts before GeneralMemorial_10.
    const { onDate, transfers } = Unly1969Rubrics.resolveOccurrences({
      date: '2020-03-02',
      days: [privilegedWeekday, memorial],
      dayOn: () => undefined,
    });

    expect(onDate.map((d) => d.id)).toEqual(['lent_1_monday', 'some_memorial']);
    expect(onDate[1].isOptional).toBe(true);
    expect(transfers).toEqual([]);
  });

  test('resolveOccurrences returns no transfer when no solemnity is impeded', () => {
    const { transfers } = Unly1969Rubrics.resolveOccurrences({
      date: '2020-06-01',
      days: [
        day({
          id: 'weekday_of_ordinary_time',
          date: '2020-06-01',
          precedence: Precedences.Weekday_13,
          rank: Ranks.Weekday,
        }),
      ],
      dayOn: () => undefined,
    });
    expect(transfers).toEqual([]);
  });

  test('resolveOccurrences keeps nothing on a date with no day', () => {
    expect(Unly1969Rubrics.resolveOccurrences({ date: '2020-06-01', days: [], dayOn: () => undefined })).toEqual({
      onDate: [],
      transfers: [],
    });
  });

  test('resolveOccurrences keeps the Thursday of the Lord’s Supper when it is the only day of the date', () => {
    const thursday = day({
      id: 'thursday_of_the_lords_supper',
      date: '2020-04-09',
      precedence: Precedences.Triduum_1,
      rank: Ranks.Solemnity,
    });

    expect(
      Unly1969Rubrics.resolveOccurrences({ date: '2020-04-09', days: [thursday], dayOn: () => undefined }).onDate
    ).toEqual([thursday]);
  });

  describe('UNLY #60: impeded solemnities', () => {
    const date = '2020-04-22';
    const weekday = day({ id: 'weekday', date, precedence: Precedences.Weekday_13, rank: Ranks.Weekday });
    const octaveDay = day({ id: 'octave', date, precedence: Precedences.WeekdayOfEasterOctave_2, rank: Ranks.Weekday });
    const solemnity = (id: string, precedence: string = Precedences.GeneralSolemnity_3): LiturgicalDay =>
      day({ id, date, precedence, rank: Ranks.Solemnity } as Parameters<typeof day>[0]);

    // The celebrations of the days around 22 April, by offset in days: 0 is the date resolved.
    const around =
      (held: Record<number, LiturgicalDay>, from = -5, to = 5) =>
        (other: string): LiturgicalDay | undefined => {
          const offset = Math.round((Date.parse(other) - Date.parse(date)) / 86400000);
          return offset < from || offset > to ? undefined : (held[offset] ?? weekday);
        };
    const free = around({});

    test('a solemnity impeded by a day of nos. 1-8 is transferred to the closest day and omitted here', () => {
      const impeded = solemnity('impeded');
      const { onDate, transfers } = Unly1969Rubrics.resolveOccurrences({
        date,
        days: [octaveDay, impeded],
        dayOn: free,
      });

      expect(onDate).toEqual([octaveDay]);
      expect(transfers).toEqual([{ date: '2020-04-23', day: impeded }]);
    });

    describe('a solemnity that a date exception moved onto the date', () => {
      // St George in England: 23 April moved to the Monday after Divine Mercy Sunday (here 22 April).
      const george = (extra: Record<string, unknown> = {}): LiturgicalDay =>
        day({
          id: 'george',
          date,
          dateDef: { month: 4, date: 23 },
          dateExceptions: [{}],
          precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
          rank: Ranks.Solemnity,
          ...extra,
        } as Parameters<typeof day>[0]);
      const feast = day({ id: 'feast', date, precedence: Precedences.GeneralFeast_7, rank: Ranks.Feast });

      test('goes to the next available day when the date holds a feast', () => {
        const moved = george();
        const { onDate, transfers } = Unly1969Rubrics.resolveOccurrences({ date, days: [moved, feast], dayOn: free });

        expect(onDate).toEqual([feast]);
        expect(transfers).toEqual([{ date: '2020-04-23', day: moved }]);
      });

      test('never goes to a day before the date', () => {
        const moved = george();
        const { transfers } = Unly1969Rubrics.resolveOccurrences({
          date,
          days: [moved, feast],
          dayOn: around({ 1: octaveDay, [-1]: weekday }),
        });

        expect(transfers?.[0].date).toBe('2020-04-24');
      });

      test('is omitted when no day after the date is available', () => {
        const { onDate, transfers } = Unly1969Rubrics.resolveOccurrences({
          date,
          days: [george(), feast],
          dayOn: (other) => (other > date ? undefined : weekday),
        });

        expect(onDate).toEqual([feast]);
        expect(transfers).toEqual([]);
      });

      test('is kept over a Sunday, which a solemnity can replace', () => {
        const sunday = day({ id: 'sunday', date, precedence: Precedences.UnprivilegedSunday_6, rank: Ranks.Sunday });
        const moved = george();

        expect(Unly1969Rubrics.resolveOccurrences({ date, days: [moved, sunday], dayOn: free }).onDate[0]).toBe(moved);
      });

      test('is kept over a solemnity of a lower precedence (St Joseph over St Patrick in Ireland)', () => {
        const lower = day({
          id: 'lower',
          date,
          precedence: Precedences.ProperSolemnity_PrincipalPatron_4a,
          rank: Ranks.Solemnity,
        });
        const moved = george({ precedence: Precedences.GeneralSolemnity_3 });

        expect(Unly1969Rubrics.resolveOccurrences({ date, days: [moved, lower], dayOn: free }).onDate[0]).toBe(moved);
      });

      test('is kept over a day that a date exception moved there too', () => {
        const another = george({ id: 'another', precedence: Precedences.GeneralFeast_7, rank: Ranks.Feast });
        const moved = george();

        expect(Unly1969Rubrics.resolveOccurrences({ date, days: [moved, another], dayOn: free }).onDate[0]).toBe(moved);
      });

      test('is kept on its own date, where no exception moved it', () => {
        const unmoved = george({ date: '2020-04-23', id: 'unmoved' });
        const holder = day({ id: 'holder', date: '2020-04-23', precedence: Precedences.GeneralFeast_7, rank: Ranks.Feast });

        expect(
          Unly1969Rubrics.resolveOccurrences({ date: '2020-04-23', days: [unmoved, holder], dayOn: free }).onDate[0]
        ).toBe(unmoved);
      });

      test.each([
        ['has no exception', { dateExceptions: [] }],
        ['is defined by a function of the year, not by a month and a date', { dateDef: { dateFn: 'palmSunday' } }],
      ])('is kept where the day %s', (_name, extra) => {
        const kept = george(extra);

        expect(Unly1969Rubrics.resolveOccurrences({ date, days: [kept, feast], dayOn: free }).onDate[0]).toBe(kept);
      });
    });

    test('the following day is preferred to the previous one at the same distance', () => {
      const impeded = solemnity('impeded');
      const { transfers } = Unly1969Rubrics.resolveOccurrences({ date, days: [octaveDay, impeded], dayOn: free });

      expect(transfers?.[0].date).toBe('2020-04-23');
    });

    test('an earlier day is chosen when it is closer', () => {
      const impeded = solemnity('impeded');
      const busy = octaveDay;
      const { transfers } = Unly1969Rubrics.resolveOccurrences({
        date,
        days: [octaveDay, impeded],
        dayOn: around({ 1: busy }),
      });

      expect(transfers).toEqual([{ date: '2020-04-21', day: impeded }]);
    });

    test('a day listed in nos. 1-8 is not available, whether it is a solemnity or a feast', () => {
      const impeded = solemnity('impeded');
      const feast = day({ id: 'feast', date, precedence: Precedences.GeneralFeast_7, rank: Ranks.Feast });
      const { transfers } = Unly1969Rubrics.resolveOccurrences({
        date,
        days: [octaveDay, impeded],
        dayOn: around({ 1: solemnity('other'), [-1]: feast, 2: weekday }),
      });

      expect(transfers).toEqual([{ date: '2020-04-24', day: impeded }]);
    });

    test('several impeded solemnities are transferred to different days', () => {
      const first = solemnity('first');
      const second = solemnity('second');
      const { transfers } = Unly1969Rubrics.resolveOccurrences({
        date,
        days: [octaveDay, first, second],
        dayOn: free,
      });

      expect(transfers).toEqual([
        { date: '2020-04-23', day: first },
        { date: '2020-04-21', day: second },
      ]);
    });

    test('a solemnity is omitted when no day of the year is available', () => {
      const impeded = solemnity('impeded');
      const { onDate, transfers } = Unly1969Rubrics.resolveOccurrences({
        date,
        days: [octaveDay, impeded],
        dayOn: around({ 1: octaveDay, [-1]: octaveDay }, -1, 1),
      });

      expect(onDate).toEqual([octaveDay]);
      expect(transfers).toEqual([]);
    });

    test('an optional solemnity is not transferred', () => {
      const optional = { ...solemnity('optional'), isOptional: true } as LiturgicalDay;
      const { transfers } = Unly1969Rubrics.resolveOccurrences({ date, days: [octaveDay, optional], dayOn: free });

      expect(transfers).toEqual([]);
    });

    test('a transferred solemnity wins on its new day, the other days being omitted', () => {
      const transferred = solemnity('transferred');
      const { onDate, transfers } = Unly1969Rubrics.resolveOccurrences({
        date,
        days: [transferred, weekday],
        dayOn: free,
      });

      expect(onDate.map((d) => d.id)).toEqual(['transferred']);
      expect(transfers).toEqual([]);
    });

    test('the transfer crosses the end of a month and of a year', () => {
      const impeded = solemnity('impeded');
      const { transfers } = Unly1969Rubrics.resolveOccurrences({
        date: '2020-12-31',
        days: [{ ...octaveDay, date: '2020-12-31' } as LiturgicalDay, impeded],
        dayOn: (other) => (other === '2021-01-01' ? weekday : undefined),
      });

      expect(transfers).toEqual([{ date: '2021-01-01', day: impeded }]);
    });
  });

  describe('the ruling on the coincidence of the Sacred Heart and the Nativity of St John the Baptist', () => {
    const date = '2022-06-24';
    const other = day({ id: 'other', date, precedence: Precedences.Weekday_13, rank: Ranks.Weekday });
    const sacredHeart = day({
      id: 'most_sacred_heart_of_jesus',
      date,
      precedence: Precedences.GeneralSolemnity_3,
      rank: Ranks.Solemnity,
    });
    const baptist = (extra: Partial<LiturgicalDay> = {}): LiturgicalDay =>
      day({
        id: 'nativity_of_john_the_baptist',
        date,
        precedence: Precedences.GeneralSolemnity_3,
        rank: Ranks.Solemnity,
        titles: [],
        ...extra,
      } as Parameters<typeof day>[0]);
    const dayOn = (): LiturgicalDay => other;

    test('the Sacred Heart is celebrated and the Nativity of St John the Baptist is anticipated to the day before', () => {
      const nativity = baptist();
      const { onDate, transfers } = Unly1969Rubrics.resolveOccurrences({
        date,
        days: [sacredHeart, nativity, other],
        dayOn,
      });

      expect(onDate).toEqual([sacredHeart]);
      expect(transfers).toEqual([{ date: '2022-06-23', day: nativity }]);
    });

    test.each([
      ['a patron title', { titles: [PatronTitle.PrincipalPatronOfTheDiocese] }],
      ['the precedence of a patron of the place', { precedence: Precedences.ProperSolemnity_PrincipalPatron_4a }],
      [
        'the precedence of a patron of a religious community',
        { precedence: Precedences.ProperSolemnity_TitleOrFounderOrPrimaryPatronOfAReligiousOrg_4d },
      ],
    ])('where St John the Baptist is a patron (%s), he is celebrated and the Sacred Heart is anticipated', (_n, extra) => {
      const nativity = baptist(extra as Partial<LiturgicalDay>);
      const { onDate, transfers } = Unly1969Rubrics.resolveOccurrences({
        date,
        days: [nativity, sacredHeart, other],
        dayOn,
      });

      expect(onDate).toEqual([nativity]);
      expect(transfers).toEqual([{ date: '2022-06-23', day: sacredHeart }]);
    });

    test('is not applied when only one of the two celebrations is on the date', () => {
      const { onDate, transfers } = Unly1969Rubrics.resolveOccurrences({ date, days: [baptist(), other], dayOn });

      expect(onDate.map((d) => d.id)).toEqual(['nativity_of_john_the_baptist']);
      expect(transfers).toEqual([]);
    });
  });

  test('resolveOccurrences does not keep twice a similar-rank day that is already kept as optional', () => {
    const weekday = day({
      id: 'weekday_a',
      date: '2020-06-02',
      precedence: Precedences.Weekday_13,
      rank: Ranks.Weekday,
      allowSimilarRankItems: true,
    });
    const optionalWeekday = day({
      id: 'weekday_b',
      date: '2020-06-02',
      precedence: Precedences.Weekday_13,
      rank: Ranks.Weekday,
      allowSimilarRankItems: true,
      isOptional: true,
    });

    const { onDate } = Unly1969Rubrics.resolveOccurrences({
      date: '2020-06-02',
      days: [weekday, optionalWeekday],
      dayOn: () => undefined,
    });

    expect(onDate.map((d) => d.id)).toEqual(['weekday_a', 'weekday_b']);
  });

  test('periodsOf gives no period to the second Sunday after Christmas on or before Mary, Mother of God', () => {
    const at = (iso: string): Date => new Date(`${iso}T00:00:00Z`);
    const input = {
      date: at('2021-01-01'),
      dates: { epiphany: () => at('2021-01-06'), maryMotherOfGod: () => at('2021-01-01') },
      id: 'second_sunday_after_christmas',
      seasons: [],
    };

    expect(Unly1969Rubrics.periodsOf?.(input as never)).toEqual([]);
  });

  test('periodsOf places the second Sunday after Christmas from the Epiphany once the date reaches it', () => {
    const at = (iso: string): Date => new Date(`${iso}T00:00:00Z`);
    const input = {
      date: at('2021-01-06'),
      dates: { epiphany: () => at('2021-01-06'), maryMotherOfGod: () => at('2021-01-01') },
      id: 'second_sunday_after_christmas',
      seasons: [],
    };

    expect(Unly1969Rubrics.periodsOf?.(input as never)).toEqual([Period.DaysFromEpiphany]);
  });

  test('numbering gives no week to late Ordinary Time that has no end of season', () => {
    const at = (iso: string): Date => new Date(`${iso}T00:00:00Z`);
    const input = {
      date: at('2021-06-01'),
      dates: { maryMotherOfTheChurch: () => at('2021-05-24') },
      declaredDayOfSeason: 100,
      declaredWeekOfSeason: undefined,
      endOfSeason: undefined,
      seasons: [Season.OrdinaryTime],
      startOfSeason: at('2021-01-11'),
    };

    const result = Unly1969Rubrics.seasons.numbering?.(input as never);

    expect(result?.dayOfSeason).toBe(4);
    expect(result?.weekOfSeason).toBeNaN();
  });

  test('is the rubrics object on the registered 1969 rite vocabulary', () => {
    // Compile-time lock: Unly1969Rubrics is Rubrics<Roman1969Vocabulary>.
    const _: Roman1969Vocabulary['precedence'] = Unly1969Rubrics.precedences[0];
    expect(_).toBeDefined();
  });
});
