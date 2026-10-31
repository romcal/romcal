import { PRECEDENCES_1962, Precedences1962 } from './constants/precedences';
import { Ranks1962 } from './constants/ranks';
import { Season1962 } from './constants/seasons';
import { Rubricae1960Rubrics } from './rubrics';

/**
 * These test the rubrics as the engine consumes them: an ordered list it compares
 * positions in, and two pure functions. Collision cases below pin the §91 table rows
 * that a coarser grouping would get wrong.
 */

const { precedences, rankOf, seasons } = Rubricae1960Rubrics;

const dateOf = (iso: string): Date => new Date(`${iso}T00:00:00.000Z`);

const aheadOf = (higher: (typeof precedences)[number], lower: (typeof precedences)[number]): void => {
  expect(precedences.indexOf(higher)).toBeLessThan(precedences.indexOf(lower));
};

describe('The order of precedence', () => {
  test('is ordered most important first', () => {
    expect(precedences[0]).toBe(Precedences1962.PrivilegedFeastWithOctave_1962_1);
    expect(precedences[precedences.length - 1]).toBe(Precedences1962.OrdinaryCommemoration_1962_30);
  });

  test('lists every precedence exactly once', () => {
    expect(new Set(precedences).size).toBe(precedences.length);
    expect(precedences).toEqual(PRECEDENCES_1962);
  });

  test('Annunciation yields to Holy Monday (25 March 2024)', () => {
    // Universal I class feast (§91.11) below I class Holy-Week feria (§91.7).
    aheadOf(Precedences1962.FirstClassFeria_1962_7, Precedences1962.UniversalFirstClassFeast_1962_11);
  });

  test('Immaculate Conception beats Advent Sunday (8 December 2024)', () => {
    // Privileged Marian feast (§91.4) above I class Advent Sunday (§91.6); §15.
    aheadOf(Precedences1962.PrivilegedMaryFeast_1962_4, Precedences1962.FirstClassSunday_1962_6);
  });

  test('Christmas vigil sits above Advent Sundays', () => {
    aheadOf(Precedences1962.ChristmasVigilOrOctaveDay_1962_5, Precedences1962.FirstClassSunday_1962_6);
  });

  test('Lenten ferias outrank III class feasts; Advent ferias yield to them', () => {
    aheadOf(Precedences1962.LentenFeria_1962_22, Precedences1962.UniversalThirdClassFeast_1962_24);
    aheadOf(Precedences1962.UniversalThirdClassFeast_1962_24, Precedences1962.AdventFeria_1962_25);
  });

  test('II class ferias outrank proper II class feasts', () => {
    aheadOf(Precedences1962.UniversalSecondClassFeast_1962_16, Precedences1962.SecondClassFeria_1962_18);
    aheadOf(Precedences1962.SecondClassFeria_1962_18, Precedences1962.ProperSecondClassFeast_1962_19);
  });

  test('II class vigils sit below II class feasts and above Lenten ferias', () => {
    aheadOf(Precedences1962.ProperSecondClassFeast_1962_19, Precedences1962.SecondClassVigil_1962_21);
    aheadOf(Precedences1962.SecondClassVigil_1962_21, Precedences1962.LentenFeria_1962_22);
  });

  test('puts a II class feast above a III class feria, unlike 1969 Sunday tracks', () => {
    aheadOf(Precedences1962.UniversalSecondClassFeast_1962_16, Precedences1962.LentenFeria_1962_22);
  });
});

describe('The rank of a precedence', () => {
  test('gives every precedence a rank', () => {
    for (const precedence of precedences) {
      expect(rankOf(precedence, 'any_id')).toBeDefined();
    }
  });

  test('maps the classes as §91 numbers them', () => {
    expect(rankOf(Precedences1962.Triduum_1962_2, '')).toBe(Ranks1962.ClassI);
    expect(rankOf(Precedences1962.SecondClassVigil_1962_21, '')).toBe(Ranks1962.ClassII);
    expect(rankOf(Precedences1962.LentenFeria_1962_22, '')).toBe(Ranks1962.ClassIII);
    expect(rankOf(Precedences1962.AdventFeria_1962_25, '')).toBe(Ranks1962.ClassIII);
    expect(rankOf(Precedences1962.FourthClassFeria_1962_28, '')).toBe(Ranks1962.ClassIV);
  });

  test('ranks both kinds of commemoration as commemorations', () => {
    expect(rankOf(Precedences1962.PrivilegedCommemoration_1962_29, '')).toBe(Ranks1962.Commemoration);
    expect(rankOf(Precedences1962.OrdinaryCommemoration_1962_30, '')).toBe(Ranks1962.Commemoration);
  });

  test('needs no exception for the id, unlike 1969', () => {
    // The class is part of what a 1962 precedence means, so the mapping is a lookup.
    expect(rankOf(Precedences1962.PrivilegedFeastWithOctave_1962_1, 'easter_sunday')).toBe(
      rankOf(Precedences1962.PrivilegedFeastWithOctave_1962_1, 'pentecost_sunday')
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

  test('weekOfSeason is chronological from startOfSeason, not the Sunday-after-Epiphany ordinal', () => {
    // Time after Epiphany begins 14 January (§77). Second Sunday after Epiphany:
    // 2024-01-14 is that Sunday and the season start → week 1.
    expect(number('2024-01-14', Season1962.TimeAfterEpiphany, '2024-01-14')).toEqual({
      dayOfSeason: 1,
      weekOfSeason: 1,
    });
    // 2025-01-19 is the same Sunday-series ordinal 2, but day 6 of a Tuesday start → week 2.
    expect(number('2025-01-19', Season1962.TimeAfterEpiphany, '2025-01-14')).toEqual({
      dayOfSeason: 6,
      weekOfSeason: 2,
    });
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
