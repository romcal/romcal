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
    });
    expect(transfers).toEqual([]);
  });

  describe('UNLY #60: impeded solemnities', () => {
    const date = '2020-04-22';
    const next = '2020-04-23';
    const weekday = day({ id: 'weekday', date, precedence: Precedences.Weekday_13, rank: Ranks.Weekday });
    const octaveDay = day({ id: 'octave', date, precedence: Precedences.WeekdayOfEasterOctave_2, rank: Ranks.Weekday });
    const solemnity = (id: string, from = date, precedence: string = Precedences.GeneralSolemnity_3): LiturgicalDay =>
      day({ id, date: from, precedence, rank: Ranks.Solemnity } as Parameters<typeof day>[0]);

    test('a solemnity impeded by a day of nos. 1-8 is transferred to the following day and omitted here', () => {
      const impeded = solemnity('impeded');
      const { onDate, transfers } = Unly1969Rubrics.resolveOccurrences({ date, days: [octaveDay, impeded] });

      expect(onDate).toEqual([octaveDay]);
      expect(transfers).toEqual([{ date: next, day: impeded }]);
    });

    test('an optional solemnity is not transferred', () => {
      const optional = { ...solemnity('optional'), isOptional: true } as LiturgicalDay;
      const { transfers } = Unly1969Rubrics.resolveOccurrences({ date, days: [octaveDay, optional] });

      expect(transfers).toEqual([]);
    });

    test('a transferred solemnity is kept on a day that is not listed in nos. 1-8, the other days being omitted', () => {
      const transferred = solemnity('transferred', '2020-04-21');
      const { onDate, transfers } = Unly1969Rubrics.resolveOccurrences({ date, days: [weekday, transferred] });

      expect(onDate.map((d) => d.id)).toEqual(['transferred']);
      expect(transfers).toEqual([]);
    });

    test('a transferred solemnity moves on again when the day is listed in nos. 1-8', () => {
      const transferred = solemnity('transferred', '2020-04-21');
      const { onDate, transfers } = Unly1969Rubrics.resolveOccurrences({ date, days: [octaveDay, transferred] });

      expect(onDate).toEqual([octaveDay]);
      expect(transfers).toEqual([{ date: next, day: transferred }]);
    });

    test('a transferred solemnity moves on again when the day has a solemnity of its own', () => {
      const own = solemnity('own');
      const transferred = solemnity('transferred', '2020-04-21');
      const { onDate, transfers } = Unly1969Rubrics.resolveOccurrences({ date, days: [own, weekday, transferred] });

      expect(onDate.map((d) => d.id)).toEqual(['own']);
      expect(transfers).toEqual([{ date: next, day: transferred }]);
    });

    test('a day takes one transferred solemnity only: the highest one, then the oldest one', () => {
      const proper = solemnity('proper', '2020-04-20', Precedences.ProperSolemnity_PrincipalPatron_4a);
      const oldest = solemnity('oldest', '2020-04-19');
      const newest = solemnity('newest', '2020-04-21');
      const { onDate, transfers } = Unly1969Rubrics.resolveOccurrences({
        date,
        days: [weekday, proper, newest, oldest],
      });

      expect(onDate.map((d) => d.id)).toEqual(['oldest']);
      expect(transfers?.map((t) => [t.day.id, t.date])).toEqual([
        ['newest', next],
        ['proper', next],
      ]);
    });

    test('the transfer rolls over the end of a month and of a year', () => {
      const impeded = solemnity('impeded', '2020-12-31');
      const { transfers } = Unly1969Rubrics.resolveOccurrences({
        date: '2020-12-31',
        days: [{ ...octaveDay, date: '2020-12-31' } as LiturgicalDay, impeded],
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
