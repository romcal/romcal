import { LiturgicalDay, Romcal } from '@src/rite-roman1969';

import { Unly1969Rubrics } from '../src/rubrics';
import { Roman1969Vocabulary } from '../src/vocabulary';

const { Precedences, Ranks } = Romcal;

const day = (
  partial: Pick<LiturgicalDay, 'id' | 'date' | 'precedence' | 'rank'> &
    Partial<Pick<LiturgicalDay, 'periods' | 'isOptional' | 'allowSimilarRankItems'>>
): LiturgicalDay =>
  ({
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

  test('is the rubrics object on the registered 1969 rite vocabulary', () => {
    // Compile-time lock: Unly1969Rubrics is Rubrics<Roman1969Vocabulary>.
    const _: Roman1969Vocabulary['precedence'] = Unly1969Rubrics.precedences[0];
    expect(_).toBeDefined();
  });
});
