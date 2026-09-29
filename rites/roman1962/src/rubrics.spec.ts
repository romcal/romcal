import { PRECEDENCES_1962, Precedences1962 } from './constants/precedences';
import { Ranks1962 } from './constants/ranks';
import { Season1962 } from './constants/seasons';
import { Rubricae1960Rubrics } from './rubrics';

/**
 * These test the rubrics as the engine consumes them: an ordered list it compares
 * positions in, and two pure functions. Whether the order is *right* is a question
 * for the temporale snapshots; what matters here is that the shape is one the engine
 * can use and that the 1960 classes come out where §91 puts them.
 */

const { precedences, rankOf, seasons } = Rubricae1960Rubrics;

const dateOf = (iso: string): Date => new Date(`${iso}T00:00:00.000Z`);

describe('The order of precedence', () => {
  test('is ordered most important first', () => {
    expect(precedences[0]).toBe(Precedences1962.Triduum_1962_1);
    expect(precedences[precedences.length - 1]).toBe(Precedences1962.OrdinaryCommemoration_1962_20);
  });

  test('lists every precedence exactly once', () => {
    expect(new Set(precedences).size).toBe(precedences.length);
    expect(precedences).toEqual(PRECEDENCES_1962);
  });

  test('puts I class Sundays above I class feasts, which are transferred off them', () => {
    const sunday = precedences.indexOf(Precedences1962.FirstClassSunday_1962_4);
    const feast = precedences.indexOf(Precedences1962.FirstClassFeast_1962_5);
    expect(sunday).toBeLessThan(feast);
  });

  test('puts a II class feast above a III class Sunday, unlike 1969', () => {
    // Sundays are ranked by class alongside feasts here, not in a track of their own.
    const feast = precedences.indexOf(Precedences1962.SecondClassFeast_1962_12);
    const feria = precedences.indexOf(Precedences1962.ThirdClassFeria_1962_16);
    expect(feast).toBeLessThan(feria);
  });
});

describe('The rank of a precedence', () => {
  test('gives every precedence a rank', () => {
    for (const precedence of precedences) {
      expect(rankOf(precedence, 'any_id')).toBeDefined();
    }
  });

  test('maps the classes as §91 numbers them', () => {
    expect(rankOf(Precedences1962.Triduum_1962_1, '')).toBe(Ranks1962.ClassI);
    expect(rankOf(Precedences1962.SecondClassSunday_1962_11, '')).toBe(Ranks1962.ClassII);
    expect(rankOf(Precedences1962.ThirdClassFeast_1962_15, '')).toBe(Ranks1962.ClassIII);
    expect(rankOf(Precedences1962.FourthClassFeria_1962_18, '')).toBe(Ranks1962.ClassIV);
  });

  test('ranks both kinds of commemoration as commemorations', () => {
    expect(rankOf(Precedences1962.PrivilegedCommemoration_1962_19, '')).toBe(Ranks1962.Commemoration);
    expect(rankOf(Precedences1962.OrdinaryCommemoration_1962_20, '')).toBe(Ranks1962.Commemoration);
  });

  test('needs no exception for the id, unlike 1969', () => {
    // The class is part of what a 1962 precedence means, so the mapping is a lookup.
    expect(rankOf(Precedences1962.PrivilegedSunday_1962_2, 'easter_sunday')).toBe(
      rankOf(Precedences1962.PrivilegedSunday_1962_2, 'pentecost_sunday')
    );
  });
});

describe('The numbering within a season', () => {
  const number = (
    iso: string,
    season: Season1962,
    startIso: string
  ): { dayOfSeason: number; weekOfSeason: number } =>
    seasons.numbering({
      date: dateOf(iso),
      // The 1962 numbering reads no dates beyond the season's own boundaries.
      dates: undefined as never,
      seasons: [season],
      startOfSeason: dateOf(startIso),
    });

  test('counts a season beginning on a Sunday straight through', () => {
    // Trinity Sunday 2024, the first Sunday after Pentecost.
    expect(number('2024-05-26', Season1962.TimeAfterPentecost, '2024-05-26')).toEqual({
      dayOfSeason: 1,
      weekOfSeason: 1,
    });
    // The twenty-seventh and last Sunday of the series that year.
    expect(number('2024-11-24', Season1962.TimeAfterPentecost, '2024-05-26').weekOfSeason).toBe(27);
  });

  test('leaves the days from Ash Wednesday outside the weeks of Lent', () => {
    // Ash Wednesday 2024 and the three days following.
    expect(number('2024-02-14', Season1962.Lent, '2024-02-14').weekOfSeason).toBe(0);
    expect(number('2024-02-17', Season1962.Lent, '2024-02-14').weekOfSeason).toBe(0);
  });

  test('opens week I of Lent on the first Sunday', () => {
    expect(number('2024-02-18', Season1962.Lent, '2024-02-14')).toEqual({ dayOfSeason: 5, weekOfSeason: 1 });
    expect(number('2024-02-24', Season1962.Lent, '2024-02-14').weekOfSeason).toBe(1);
    expect(number('2024-02-25', Season1962.Lent, '2024-02-14').weekOfSeason).toBe(2);
  });

  test('numbers Septuagesima from its own Sunday', () => {
    expect(number('2024-01-28', Season1962.Septuagesima, '2024-01-28').weekOfSeason).toBe(1);
    // Quinquagesima, the third and last.
    expect(number('2024-02-11', Season1962.Septuagesima, '2024-01-28').weekOfSeason).toBe(3);
  });

  test('takes a declared number as given rather than computing one', () => {
    const declared = seasons.numbering({
      date: dateOf('2024-02-18'),
      dates: undefined as never,
      declaredDayOfSeason: 40,
      declaredWeekOfSeason: 9,
      seasons: [Season1962.Lent],
      startOfSeason: dateOf('2024-02-14'),
    });
    expect(declared).toEqual({ dayOfSeason: 40, weekOfSeason: 9 });
  });

  test('reports the year as running from Advent to the Time after Pentecost', () => {
    expect(seasons.firstSeason).toBe(Season1962.Advent);
    expect(seasons.lastSeason).toBe(Season1962.TimeAfterPentecost);
  });
});
