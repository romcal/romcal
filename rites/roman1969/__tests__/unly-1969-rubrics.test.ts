import { LiturgicalDay, Period, Romcal } from '@src/rite-roman1969';

import { Unly1969Rubrics } from '../src/rubrics';
import { Roman1969Vocabulary } from '../src/vocabulary';

const { Precedences, Ranks } = Romcal;

const day = (
  partial: Pick<LiturgicalDay, 'id' | 'precedence' | 'rank'> &
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

  test('resolveOccurrences keeps a memorial as optional beside a weekday', () => {
    const weekday = day({
      id: 'weekday_of_ordinary_time',
      precedence: Precedences.Weekday_13,
      rank: Ranks.Weekday,
      periods: [Period.EarlyOrdinaryTime],
    });
    const memorial = day({
      id: 'some_memorial',
      precedence: Precedences.GeneralMemorial_10,
      rank: Ranks.Memorial,
    });

    const { onDate, transfers } = Unly1969Rubrics.resolveOccurrences({
      date: '2020-01-03',
      days: [weekday, memorial],
    });

    expect(onDate.map((d) => d.id)).toEqual(['weekday_of_ordinary_time', 'some_memorial']);
    expect(onDate[1].isOptional).toBe(true);
    expect(transfers).toEqual([]);
  });

  test('resolveOccurrences never returns transfers', () => {
    const { transfers } = Unly1969Rubrics.resolveOccurrences({
      date: '2020-06-01',
      days: [
        day({
          id: 'weekday_of_ordinary_time',
          precedence: Precedences.Weekday_13,
          rank: Ranks.Weekday,
        }),
      ],
    });
    expect(transfers).toEqual([]);
  });

  test('is the rubrics object on the registered 1969 rite vocabulary', () => {
    // Compile-time lock: Unly1969Rubrics is Rubrics<Roman1969Vocabulary>.
    const _: Roman1969Vocabulary['precedence'] = Unly1969Rubrics.precedences[0];
    expect(_).toBeDefined();
  });
});
