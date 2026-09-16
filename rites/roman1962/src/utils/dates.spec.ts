import {
  adventEmberDays,
  ascension,
  christTheKingSunday,
  corpusChristi,
  epiphany,
  firstSundayOfLent,
  lentEmberDays,
  majorRogationDay,
  minorRogationDays,
  passionSunday,
  quinquagesimaSunday,
  sacredHeart,
  septemberEmberDays,
  septuagesimaSunday,
  sexagesimaSunday,
  sundaysAfterEpiphany,
  sundaysAfterPentecost,
  trinitySunday,
  whitEmberDays,
} from './dates';

/**
 * Years chosen so that the range of outcomes is covered rather than one convenient
 * shape: 2024 has an early Easter (31 March) and 2019 a late one (21 April), which is
 * what moves the pre-Lenten Sundays and the count of Sundays in both series.
 */

const iso = (date: Date): string => date.toISOString().substring(0, 10);
const isoAll = (dates: readonly Date[]): string[] => dates.map(iso);

describe('The pre-Lenten Sundays', () => {
  test('Septuagesima is the ninth Sunday before Easter', () => {
    expect(iso(septuagesimaSunday(2024))).toBe('2024-01-28');
    expect(iso(septuagesimaSunday(2019))).toBe('2019-02-17');
  });

  test('Sexagesima and Quinquagesima follow it weekly', () => {
    expect(iso(sexagesimaSunday(2024))).toBe('2024-02-04');
    expect(iso(quinquagesimaSunday(2024))).toBe('2024-02-11');
  });

  test('they are always Sundays', () => {
    for (const year of [2019, 2024, 2025, 2038]) {
      expect(septuagesimaSunday(year).getUTCDay()).toBe(0);
      expect(sexagesimaSunday(year).getUTCDay()).toBe(0);
      expect(quinquagesimaSunday(year).getUTCDay()).toBe(0);
    }
  });

  test('Quinquagesima is the Sunday before Ash Wednesday', () => {
    // Ash Wednesday 2024 was 14 February, three days after Quinquagesima.
    expect(iso(quinquagesimaSunday(2024))).toBe('2024-02-11');
  });
});

describe('Lent and Passiontide', () => {
  test('the first Sunday of Lent is six weeks before Easter', () => {
    expect(iso(firstSundayOfLent(2024))).toBe('2024-02-18');
    expect(iso(firstSundayOfLent(2019))).toBe('2019-03-10');
  });

  test('Passion Sunday is the second Sunday before Easter', () => {
    expect(iso(passionSunday(2024))).toBe('2024-03-17');
    // The week between Passion Sunday and Palm Sunday.
    expect(iso(passionSunday(2019))).toBe('2019-04-07');
  });
});

describe('The anchors 1962 fixes and 1969 lets move', () => {
  test('Ascension is always the Thursday, never a Sunday', () => {
    expect(iso(ascension(2024))).toBe('2024-05-09');
    expect(ascension(2024).getUTCDay()).toBe(4);
    expect(ascension(2019).getUTCDay()).toBe(4);
  });

  test('Corpus Christi is always the Thursday after Trinity', () => {
    expect(iso(trinitySunday(2024))).toBe('2024-05-26');
    expect(iso(corpusChristi(2024))).toBe('2024-05-30');
    expect(corpusChristi(2024).getUTCDay()).toBe(4);
  });

  test('the Sacred Heart is the Friday after the octave of Corpus Christi', () => {
    expect(iso(sacredHeart(2024))).toBe('2024-06-07');
    expect(sacredHeart(2024).getUTCDay()).toBe(5);
  });

  test('Epiphany is 6 January and is never transferred', () => {
    expect(iso(epiphany(2024))).toBe('2024-01-06');
    expect(iso(epiphany(2025))).toBe('2025-01-06');
  });

  test('Christ the King is the last Sunday of October', () => {
    expect(iso(christTheKingSunday(2024))).toBe('2024-10-27');
    expect(iso(christTheKingSunday(2025))).toBe('2025-10-26');
    // 31 October 2027 is itself a Sunday.
    expect(iso(christTheKingSunday(2027))).toBe('2027-10-31');
  });
});

describe('The Sunday series', () => {
  test('the Sundays after Epiphany run from after 6 January to Septuagesima', () => {
    // Easter 2024 is early, so only three fit.
    expect(isoAll(sundaysAfterEpiphany(2024))).toEqual(['2024-01-07', '2024-01-14', '2024-01-21']);
  });

  test('a later Easter leaves room for more', () => {
    // Epiphany 2019 fell on a Sunday, so the first of the series is the 13th.
    expect(sundaysAfterEpiphany(2019)).toHaveLength(5);
    expect(iso(sundaysAfterEpiphany(2019)[0])).toBe('2019-01-13');
    expect(iso(sundaysAfterEpiphany(2019)[4])).toBe('2019-02-10');
  });

  test('the count stays between one and six', () => {
    for (const year of [2019, 2024, 2025, 2038]) {
      expect(sundaysAfterEpiphany(year).length).toBeGreaterThanOrEqual(1);
      expect(sundaysAfterEpiphany(year).length).toBeLessThanOrEqual(6);
    }
  });

  test('the series never reaches Septuagesima', () => {
    for (const year of [2019, 2024, 2025, 2038]) {
      const sundays = sundaysAfterEpiphany(year);
      expect(sundays[sundays.length - 1] < septuagesimaSunday(year)).toBe(true);
    }
  });

  test('the Sundays after Pentecost start at Trinity and stop before Advent', () => {
    const sundays = sundaysAfterPentecost(2024);
    expect(iso(sundays[0])).toBe('2024-05-26');
    expect(iso(sundays[sundays.length - 1])).toBe('2024-11-24');
    expect(sundays).toHaveLength(27);
  });

  test('the latest possible Easter gives the shortest series', () => {
    // Easter 2038 is 25 April, the latest it can fall.
    expect(sundaysAfterPentecost(2038)).toHaveLength(23);
  });

  test('the count stays within the range the Missal provides for', () => {
    for (let year = 1970; year <= 2070; year += 1) {
      expect(sundaysAfterPentecost(year).length).toBeGreaterThanOrEqual(23);
      expect(sundaysAfterPentecost(year).length).toBeLessThanOrEqual(28);
    }
  });
});

describe('The Ember days', () => {
  test('Lent: the week after the first Sunday of Lent', () => {
    expect(isoAll(lentEmberDays(2024))).toEqual(['2024-02-21', '2024-02-23', '2024-02-24']);
  });

  test('Whitsun: the week after Pentecost', () => {
    expect(isoAll(whitEmberDays(2024))).toEqual(['2024-05-22', '2024-05-24', '2024-05-25']);
  });

  test('September: the week after the third Sunday of September, not after 14 September', () => {
    // The third Sunday of September 2024 is the 15th.
    expect(isoAll(septemberEmberDays(2024))).toEqual(['2024-09-18', '2024-09-20', '2024-09-21']);
    // 2027 opens on a Wednesday, so the third Sunday is the 19th.
    expect(isoAll(septemberEmberDays(2027))).toEqual(['2027-09-22', '2027-09-24', '2027-09-25']);
  });

  test('Advent: the week after the third Sunday of Advent, not after Saint Lucy', () => {
    expect(isoAll(adventEmberDays(2024))).toEqual(['2024-12-18', '2024-12-20', '2024-12-21']);
  });

  test('each set is a Wednesday, a Friday and a Saturday', () => {
    for (const year of [2019, 2024, 2025]) {
      for (const set of [lentEmberDays(year), whitEmberDays(year), septemberEmberDays(year), adventEmberDays(year)]) {
        expect(set.map((date) => date.getUTCDay())).toEqual([3, 5, 6]);
      }
    }
  });
});

describe('The Rogation days', () => {
  test('the Greater Litanies are on 25 April', () => {
    expect(iso(majorRogationDay(2024))).toBe('2024-04-25');
  });

  test('the Lesser Litanies are the three days before Ascension', () => {
    expect(isoAll(minorRogationDays(2024))).toEqual(['2024-05-06', '2024-05-07', '2024-05-08']);
    expect(minorRogationDays(2024).map((date) => date.getUTCDay())).toEqual([1, 2, 3]);
  });
});

describe('The Julian computation', () => {
  test('carries through to every Easter-derived anchor', () => {
    // Julian Easter 2024 is 5 May, five weeks after the Gregorian 31 March.
    expect(iso(septuagesimaSunday(2024, 'julian'))).toBe('2024-03-03');
    expect(iso(ascension(2024, 'julian'))).toBe('2024-06-13');
    expect(iso(septuagesimaSunday(2024, 'gregorian'))).toBe('2024-01-28');
  });
});
