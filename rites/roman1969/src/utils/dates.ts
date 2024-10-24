import { calculateGregorianEasterDate, calculateJulianEasterDateToGregorianDate } from '@internal/easter';

import { Season } from '../constants/seasons';
import { RomcalConfig } from '../models/config';
import { EasterCalculationType } from '../types/config';

const { isNaN } = Number;

export const getUtcDate = (year: number, month: number, date: number): Date => {
  return new Date(Date.UTC(year, month - 1, date, 0, 0, 0, 0));
};

export const getUtcDateFromString = (dateStr: string): Date => {
  const [year, month, date] = dateStr.split('-').map((n) => parseInt(n, 10));
  return getUtcDate(year, month, date);
};

export const addDays = (date: Date, days: number): Date => {
  return new Date(date.valueOf() + 864e5 * days); // 864e5 = 24 * 60 * 60 * 1000
};

export const subtractsDays = (date: Date, days: number): Date => {
  return new Date(date.valueOf() - 864e5 * days);
};

export const isSameDate = (date1: Date, date2: Date): boolean => {
  return (
    date1 &&
    date2 &&
    date1.getUTCFullYear() === date2.getUTCFullYear() &&
    date1.getUTCMonth() === date2.getUTCMonth() &&
    date1.getUTCDate() === date2.getUTCDate()
  );
};

export const dateDifference = (date1: Date, date2: Date): number => {
  return Math.abs(Math.floor((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)));
};

export const startOfWeek = (date: Date): Date => {
  return subtractsDays(date, date.getUTCDay());
};

export const isValidDate = (maybeDate: unknown): maybeDate is Date => {
  // it is a date
  if (maybeDate && Object.prototype.toString.call(maybeDate) === '[object Date]') {
    if (isNaN((maybeDate as Date).getTime())) return false; // date is not valid
    return true; // date is valid
  }
  // not a date
  return false;
};

/**
 * Get total number of days in a particular month
 *
 * @param      {Date}    date    Date of the month that should be considered
 * @return     {number}  Total number of dates in the particular month
 */
export const daysInMonth = (date: Date): number => {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0)).getUTCDate();
};

/**
 * For a given date, get the ISO week number
 *
 * @remarks This function was sourced from [StackOverflow](https://stackoverflow.com/a/6117889/3408342).
 *
 * @param    date - Date which should be considered
 * @returns  ISO week number of the specified date
 */
export const getWeekNumber = (date: Date): number => {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  return Math.ceil(((d.getTime() - new Date(Date.UTC(d.getUTCFullYear(), 0, 1)).getTime()) / 864e5 + 1) / 7);
};

/**
 * Returns a range of dates between a given start and end date included
 * @param start The start date
 * @param end The end date
 * @returns An array of dates representing the range
 */
export const rangeOfDays = (start: Date, end: Date): Date[] => {
  const days = dateDifference(start, end);
  return Array.from(new Array(days + 1), (_x, i) => {
    return addDays(start, i);
  });
};

/**
 * Determines if a given date exists within a range of dates.
 * @param range The range to search against
 * @param date The date to search for in the range
 * @returns `true` if the date exists in the range or false if otherwise
 */
export const rangeContainsDate = (range: Date[], date: Date): boolean => {
  return range.map((d) => d.toISOString()).includes(date.toISOString());
};

export class Dates {
  readonly #config: RomcalConfig;

  readonly #year: number;

  readonly #isLiturgicalYear: boolean;

  constructor(config: RomcalConfig, year: number) {
    this.#config = config;
    this.#year = year;
    this.#isLiturgicalYear = this.#config.scope === 'liturgical';
  }

  /**
   * ADVENT
   */

  /**
   * Get all the dates occurring in the season of Advent
   * The length of Advent depends upon the day of the week on which Christmas occurs
   * @param year Gregorian year
   */
  allDatesOfAdvent = (year = this.#isLiturgicalYear ? this.#year - 1 : this.#year): Date[] => {
    if (this.#allDatesOfAdvent[year]) return this.#allDatesOfAdvent[year];
    const start = this.firstSundayOfAdvent(year);
    const end = subtractsDays(this.christmas(year), 1);
    return (this.#allDatesOfAdvent[year] = rangeOfDays(start, end));
  };

  #allDatesOfAdvent: Record<string, Date[]> = {};

  /**
   * Get the all 4 Sundays of Advent
   * @param year Gregorian year
   */
  allSundaysOfAdvent = (year = this.#isLiturgicalYear ? this.#year - 1 : this.#year): Date[] => {
    if (this.#allSundaysOfAdvent[year]) return this.#allSundaysOfAdvent[year];
    const firstSunday = this.firstSundayOfAdvent(year);
    return (this.#allSundaysOfAdvent[year] = [
      firstSunday,
      addDays(firstSunday, 7),
      addDays(firstSunday, 14),
      addDays(firstSunday, 21),
    ]);
  };

  #allSundaysOfAdvent: Record<string, Date[]> = {};

  /**
   * Get the date of the first Sunday of Advent
   * (the start of Advent depends upon the day of the week on which Christmas occurs)
   * @param year Gregorian year
   */
  firstSundayOfAdvent = (year = this.#isLiturgicalYear ? this.#year - 1 : this.#year): Date => {
    if (this.#firstSundayOfAdvent[year]) return this.#firstSundayOfAdvent[year];
    return (this.#firstSundayOfAdvent[year] = Dates.firstSundayOfAdvent(year));
  };

  #firstSundayOfAdvent: Record<string, Date> = {};

  /**
   * Get the date of the first Sunday of Advent
   * (the start of Advent depends upon the day of the week on which Christmas occurs)
   * @param year Gregorian year
   */
  static firstSundayOfAdvent = (year: number): Date => {
    switch (Dates.christmas(year).getUTCDay()) {
      case 0: // Sunday
        return getUtcDate(year, 11, 27);
      case 1: // Monday
        return getUtcDate(year, 12, 3);
      case 2: // Tuesday
        return getUtcDate(year, 12, 2);
      case 3: // Wednesday
        return getUtcDate(year, 12, 1);
      case 4: // Thursday
        return getUtcDate(year, 11, 30);
      case 5: // Friday
        return getUtcDate(year, 11, 29);
      default:
        // Saturday
        return getUtcDate(year, 11, 28);
    }
  };

  /**
   * Get the date of an unprivileged weekdays of Advent (until 16 December).
   * @param dow Day of week, from 1 to 6
   * @param week Nth week of season, from 1 to 4
   * @param year Gregorian year
   */
  unprivilegedWeekdayOfAdvent = (
    dow: number,
    week: number,
    year = this.#isLiturgicalYear ? this.#year - 1 : this.#year
  ): Date | null => {
    const id = `${year}_${week}_${dow}`;
    if (this.#unprivilegedWeekdayOfAdvent[id] !== undefined) {
      return this.#unprivilegedWeekdayOfAdvent[id];
    }
    if (dow < 1 || dow > 6 || week < 1 || week > 4) return (this.#unprivilegedWeekdayOfAdvent[id] = null);
    let date: Date | null = addDays(this.firstSundayOfAdvent(year), (week - 1) * 7 + dow);
    if (date.getUTCDate() >= 17 && date.getUTCMonth() === 11 && date.getUTCDay() !== 0) date = null;
    return (this.#unprivilegedWeekdayOfAdvent[id] = date);
  };

  #unprivilegedWeekdayOfAdvent: Record<string, Date | null> = {};

  /**
   * Get the date of a privileged weekday within Advent, from 17 to 24 December,
   * Sundays excluded.
   * @param day Nth day of month
   * @param year Gregorian year
   */
  privilegedWeekdayOfAdvent = (
    day: number,
    year = this.#isLiturgicalYear ? this.#year - 1 : this.#year
  ): Date | null => {
    const id = `${year}_${day}`;
    if (this.#privilegedWeekdayOfAdvent[id] !== undefined) {
      return this.#privilegedWeekdayOfAdvent[id];
    }
    if (day < 17 || day > 24) return (this.#privilegedWeekdayOfAdvent[id] = null);
    let date: Date | null = getUtcDate(year, 12, day);
    if (date.getUTCDay() === 0) date = null;
    return (this.#privilegedWeekdayOfAdvent[id] = date);
  };

  #privilegedWeekdayOfAdvent: Record<string, Date | null> = {};

  /**
   * Get the date of a Sundays of Advent (1st to 4th).
   * @param week Nth week of season, from 1 to 4
   * @param year Gregorian year
   */
  sundayOfAdvent = (week: number, year = this.#isLiturgicalYear ? this.#year - 1 : this.#year): Date | null => {
    const id = `${year}_${week}`;
    if (this.#sundayOfAdvent[id] !== undefined) return this.#sundayOfAdvent[id];
    if (week < 1 || week > 4) return (this.#sundayOfAdvent[id] = null);
    return (this.#sundayOfAdvent[id] = addDays(this.firstSundayOfAdvent(year), 7 * (week - 1)));
  };

  #sundayOfAdvent: Record<string, Date | null> = {};

  /**
   * CHRISTMAS TIME
   */

  /**
   * Get the date of Christmas
   * (in the Roman Rite, Christmas always falls on December 25).
   * @param year Gregorian year
   */
  christmas = (year = this.#isLiturgicalYear ? this.#year - 1 : this.#year): Date => {
    if (this.#christmas[year]) return this.#christmas[year];
    return (this.#christmas[year] = Dates.christmas(year));
  };

  #christmas: Record<string, Date> = {};

  /**
   * Get the date of Christmas
   * (in the Roman Rite, Christmas always falls on December 25).
   * @param year Gregorian year
   */
  static christmas = (year: number): Date => {
    return getUtcDate(year, 12, 25);
  };

  /**
   * Get all the dates occurring in the octave of Christmas
   * (from Christmas to Mary Mother of God, inclusive)
   * @param year Gregorian year
   */
  allDatesInOctaveOfChristmas = (year = this.#isLiturgicalYear ? this.#year - 1 : this.#year): Date[] => {
    if (this.#allDatesInOctaveOfChristmas[year]) return this.#allDatesInOctaveOfChristmas[year];
    return (this.#allDatesInOctaveOfChristmas[year] = rangeOfDays(
      this.christmas(year),
      addDays(this.christmas(year), 6)
    ).concat(this.maryMotherOfGod(year)));
  };

  #allDatesInOctaveOfChristmas: Record<string, Date[]> = {};

  /**
   * Get the date of the nth weekday within the Octave of the Nativity of the Lord.
   * Sundays and the feast of the Holy Family are excluded.
   * @param dayOfOctave Nth day within the Octave
   * @param year Gregorian year
   */
  weekdayWithinOctaveOfChristmas = (
    dayOfOctave: number,
    year = this.#isLiturgicalYear ? this.#year - 1 : this.#year
  ): Date | null => {
    const id = `${year}_${dayOfOctave}`;
    if (this.#weekdayWithinOctaveOfChristmas[id] !== undefined) {
      return this.#weekdayWithinOctaveOfChristmas[id];
    }
    if (dayOfOctave < 1 || dayOfOctave > 8) return (this.#weekdayWithinOctaveOfChristmas[id] = null);
    let date: Date | null = addDays(this.christmas(year), dayOfOctave - 1);
    if (isSameDate(date, this.holyFamily(year))) date = null;
    return (this.#weekdayWithinOctaveOfChristmas[id] = date);
  };

  #weekdayWithinOctaveOfChristmas: Record<string, Date | null> = {};

  /**
   * Get all the dates occurring in the season of Christmas.
   *
   * *In different Churches, the Christmas Season might end on Jan. 6
   * (the traditional date of the Feast of the Epiphany), or might last
   * until the Feast of the Baptism of the Lord (usually the Sunday after
   * Epiphany), or might even last all the way to Feb. 2 (the Feast of the
   * Presentation of the Lord, 40 days after Dec. 25) (Candlemass).*
   *
   * @param year Gregorian year
   * @param epiphanyOnSunday Is Epiphany is fixed on a Sunday
   */
  allDatesOfChristmasTime = (
    year = this.#isLiturgicalYear ? this.#year - 1 : this.#year,
    epiphanyOnSunday = this.#config.epiphanyOnSunday
  ): Date[] => {
    const id = year + epiphanyOnSunday.toString();
    if (this.#allDatesOfChristmasTime[id]) return this.#allDatesOfChristmasTime[id];
    const start = this.christmas(year);
    const end = this.baptismOfTheLord(year + 1, epiphanyOnSunday);
    return (this.#allDatesOfChristmasTime[id] = rangeOfDays(start, end));
  };

  #allDatesOfChristmasTime: Record<string, Date[]> = {};

  /**
   * Get the second Sunday after the Octave of the Nativity of the Lord,
   * which is not the Epiphany or the Baptism of the Lord.
   * This can occur only when Epiphany is celebrated the 6 January.
   * @param year Gregorian year
   * @param epiphanyOnSunday Is Epiphany is fixed on a Sunday
   */
  secondSundayAfterChristmas = (year = this.#year, epiphanyOnSunday = this.#config.epiphanyOnSunday): Date | null => {
    const id = year + epiphanyOnSunday.toString();
    if (this.#secondSundayAfterChristmas[id] !== undefined) {
      return this.#secondSundayAfterChristmas[id];
    }
    if (epiphanyOnSunday) return (this.#secondSundayAfterChristmas[id] = null);
    const date =
      this.allDatesBeforeEpiphany(year, epiphanyOnSunday).find((d) => d.getUTCDay() === 0) ??
      this.allDatesAfterEpiphany(year, epiphanyOnSunday).find((d) => d.getUTCDay() === 0);
    return (this.#secondSundayAfterChristmas[id] = date ?? null);
  };

  #secondSundayAfterChristmas: Record<string, Date | null> = {};

  /**
   * Get all the date before Epiphany (and from January 2)
   * @param year Gregorian year
   * @param epiphanyOnSunday Is Epiphany is fixed on a Sunday
   */
  allDatesBeforeEpiphany = (year = this.#year, epiphanyOnSunday = this.#config.epiphanyOnSunday): Date[] => {
    const id = year + epiphanyOnSunday.toString();
    if (this.#allDatesBeforeEpiphany[id]) return this.#allDatesBeforeEpiphany[id];
    const start = addDays(this.maryMotherOfGod(year), 1);
    const epiphany = this.epiphany(year, epiphanyOnSunday);

    // If there are no days between Mary, Mother of God and Epiphany
    if (isSameDate(start, epiphany)) return (this.#allDatesBeforeEpiphany[id] = []);

    const end = subtractsDays(epiphany, 1);
    return (this.#allDatesBeforeEpiphany[id] = rangeOfDays(start, end));
  };

  #allDatesBeforeEpiphany: Record<string, Date[]> = {};

  /**
   * Get the date of a weekday before Epiphany (and from January 2)
   * @param day Nth day of month
   * @param year Gregorian year
   * @param epiphanyOnSunday Is Epiphany is fixed on a Sunday
   */
  weekdayBeforeEpiphany = (
    day: number,
    year = this.#year,
    epiphanyOnSunday = this.#config.epiphanyOnSunday
  ): Date | null => {
    const id = `${day}_${year}_${epiphanyOnSunday.toString()}`;
    if (this.#weekdayBeforeEpiphany[id] !== undefined) return this.#weekdayBeforeEpiphany[id];
    if (day < 2 || day > 8) return (this.#weekdayBeforeEpiphany[id] = null);
    return (this.#weekdayBeforeEpiphany[id] =
      this.allDatesBeforeEpiphany(year, epiphanyOnSunday).find((d) => d.getUTCDate() === day) ?? null);
  };

  #weekdayBeforeEpiphany: Record<string, Date | null> = {};

  /**
   * Get the date of Epiphany
   *
   * Depending of the countries or regions:*
   * - Epiphany is celebrated on the first Sunday after the first Saturday in January,
   *   which means it can fall on any day from January 2 to January 8.
   * - *Epiphany is always celebrated on Jan 6.
   *
   * @param year Gregorian year
   * @param epiphanyOnSunday Is Epiphany is fixed on a Sunday
   */
  epiphany = (year = this.#year, epiphanyOnSunday = this.#config.epiphanyOnSunday): Date => {
    const id = year + epiphanyOnSunday.toString();
    if (this.#epiphany[id]) return this.#epiphany[id];

    // Get the first day of the year
    const firstDay = getUtcDate(year, 1, 1);
    let date = getUtcDate(year, 1, 6);

    if (epiphanyOnSunday) {
      switch (firstDay.getUTCDay()) {
        // If first day of the year is a Saturday, Mary Mother of God is on that day
        // and Epiphany is on the next day
        case 6:
          date = addDays(firstDay, 1);
          break;
        // If first day of the year is a Sunday, Mary Mother of God is on that Sunday and
        // the Sunday proceeding will be Epiphany
        case 0:
          date = addDays(firstDay, 7);
          break;
        // If first day of the year is on a weekday (i.e. Monday - Friday),
        // Epiphany will be celebrated on the Sunday proceeding
        default:
          date = startOfWeek(addDays(firstDay, 7));
          break;
      }
    }

    return (this.#epiphany[id] = date);
  };

  #epiphany: Record<string, Date> = {};

  /**
   * Get all the dates after Epiphany, until the day before the Baptism of the Lord.
   * @param year Gregorian year
   * @param epiphanyOnSunday Is Epiphany is fixed on a Sunday
   */
  allDatesAfterEpiphany = (year = this.#year, epiphanyOnSunday = this.#config.epiphanyOnSunday): Date[] => {
    const id = year + epiphanyOnSunday.toString();
    if (this.#allDatesAfterEpiphany[id]) return this.#allDatesAfterEpiphany[id];
    const start = addDays(this.epiphany(year, epiphanyOnSunday), 1);
    const baptismOfTheLord = this.baptismOfTheLord(year, epiphanyOnSunday);

    // If there are no days between Epiphany and Baptism of the Lord
    if (isSameDate(start, baptismOfTheLord)) return (this.#allDatesAfterEpiphany[id] = []);

    const end = subtractsDays(baptismOfTheLord, 1);
    return (this.#allDatesAfterEpiphany[id] = rangeOfDays(start, end));
  };

  #allDatesAfterEpiphany: Record<string, Date[]> = {};

  /**
   * Get the date of a weekday after Epiphany (and before the Baptism of the Lord)
   * @param dow Day of week
   * @param year Gregorian year
   * @param epiphanyOnSunday Is Epiphany is fixed on a Sunday
   */
  weekdayAfterEpiphany = (
    dow: number,
    year = this.#year,
    epiphanyOnSunday = this.#config.epiphanyOnSunday
  ): Date | null => {
    const id = `${dow}_${year}_${epiphanyOnSunday.toString()}`;
    if (this.#weekdayAfterEpiphany[id] !== undefined) return this.#weekdayAfterEpiphany[id];
    if (dow < 1 || dow > 6) return (this.#weekdayAfterEpiphany[id] = null);
    return (this.#weekdayAfterEpiphany[id] =
      this.allDatesAfterEpiphany(year, epiphanyOnSunday).find((d) => d.getUTCDay() === dow) ?? null);
  };

  #weekdayAfterEpiphany: Record<string, Date | null> = {};

  /**
   * LENT
   */

  /**
   * Get the date of Ash Wednesday
   *
   * *Ash Wednesday, a day of fasting, is the first day of Lent in Western
   * Christianity. It occurs 46 days (40 fasting days, if the 6 Sundays,
   * which are not days of fast, are excluded) before Easter and can fall
   * as early as 4 February or as late as 10 March.*
   *
   * @param year Gregorian year
   */
  ashWednesday = (year = this.#year): Date => {
    if (this.#ashWednesday[year]) return this.#ashWednesday[year];
    return (this.#ashWednesday[year] = subtractsDays(this.easterSunday(year), 46));
  };

  #ashWednesday: Record<string, Date> = {};

  /**
   * Get all the Sunday of Lent
   * @param year Gregorian year
   */
  allSundaysOfLent = (year = this.#year): Date[] => {
    if (this.#allSundaysOfLent[year]) return this.#allSundaysOfLent[year];
    const firstSunday = addDays(this.ashWednesday(year), 4);
    return (this.#allSundaysOfLent[year] = [
      firstSunday,
      addDays(firstSunday, 7),
      addDays(firstSunday, 14),
      addDays(firstSunday, 21),
      addDays(firstSunday, 28),
      addDays(firstSunday, 35),
    ]);
  };

  #allSundaysOfLent: Record<string, Date[]> = {};

  /**
   * Get all the dates occurring in Lent (from Ash Wednesday and runs until the day before Holy Thursday)
   * @param year Gregorian year
   */
  allDatesOfLent = (year = this.#year): Date[] => {
    if (this.#allDatesOfLent[year]) return this.#allDatesOfLent[year];
    const start = this.ashWednesday(year);
    const end = this.holyThursday(year);
    return (this.#allDatesOfLent[year] = rangeOfDays(start, end));
  };

  #allDatesOfLent: Record<string, Date[]> = {};

  /**
   * Get the date of Palm Sunday
   * @param year Gregorian year
   */
  palmSunday = (year = this.#year): Date => {
    if (this.#palmSunday[year]) return this.#palmSunday[year];
    return (this.#palmSunday[year] = subtractsDays(this.easterSunday(year), 7));
  };

  #palmSunday: Record<string, Date> = {};

  /**
   * HOLY WEEK
   */

  /**
   * Get the date of Holy Thursday (or Maundy Thursday)
   * @param year Gregorian year
   */
  holyThursday = (year = this.#year): Date => {
    if (this.#holyThursday[year]) return this.#holyThursday[year];
    return (this.#holyThursday[year] = subtractsDays(this.easterSunday(year), 3));
  };

  #holyThursday: Record<string, Date> = {};

  /**
   * Get the date of Good Friday (or Holy Friday)
   *
   * *Good Friday is a Christian religious holiday commemorating the crucifixion
   * of Jesus Christ and his death at Calvary. The holiday is observed during Holy Week as part of the
   * Paschal Triduum on the Friday preceding Easter Sunday*
   *
   * @param year Gregorian year
   */
  goodFriday = (year = this.#year): Date => {
    if (this.#goodFriday[year]) return this.#goodFriday[year];
    return (this.#goodFriday[year] = subtractsDays(this.easterSunday(year), 2));
  };

  #goodFriday: Record<string, Date> = {};

  /**
   * Get the date of Holy Saturday
   *
   * *Holy Saturday (Latin: Sabbatum Sanctum) i.e. the Saturday of Holy Week, also known as the
   * Great Sabbath, Black Saturday, or Easter Eve,[1] and called "Joyous Saturday" or "the
   * Saturday of Light" among Coptic Christians, is the day after Good Friday. It is the day
   * before Easter and the last day of Holy Week in which Christians prepare for Easter.
   * It commemorates the day that Jesus Christ's body lay in the tomb and the Harrowing of Hell.*
   *
   * @param year Gregorian year
   */
  holySaturday = (year = this.#year): Date => {
    if (this.#holySaturday[year]) return this.#holySaturday[year];
    return (this.#holySaturday[year] = subtractsDays(this.easterSunday(year), 1));
  };

  #holySaturday: Record<string, Date> = {};

  /**
   * Get all the date occurring during Holy Week
   *
   * *Holy Week is the week just before Easter.
   * In the west, it is also the last week of Lent, and includes
   * Palm Sunday, Holy Wednesday, Maundy Thursday (Holy Thursday),
   * Good Friday (Holy Friday), and Holy Saturday.
   * It does not include Easter Sunday.*
   *
   * @param year Gregorian year
   */
  allDatesOfHolyWeek = (year = this.#year): Date[] => {
    if (this.#allDatesOfHolyWeek[year]) return this.#allDatesOfHolyWeek[year];
    const start = this.palmSunday(year);
    const end = this.holySaturday(year);
    return (this.#allDatesOfHolyWeek[year] = rangeOfDays(start, end));
  };

  #allDatesOfHolyWeek: Record<string, Date[]> = {};

  /**
   * PASCHAL TRIDUUM
   */

  /**
   * Get all the dates occurring in the Paschal Triduum
   *
   * The Paschal Triduum of the Passion and Resurrection of the Lord begins with the
   * evening Mass of the Lord’s Supper, has its centre in the Easter Vigil, and closes with
   * Vespers (Evening Prayer) of the Sunday of the Resurrection.
   *
   * @param year Gregorian year
   */
  allDatesOfPaschalTriduum = (year = this.#year): Date[] => {
    if (this.#allDatesOfPaschalTriduum[year]) return this.#allDatesOfPaschalTriduum[year];
    const start = this.holyThursday(year);
    const end = this.easterSunday(year);
    return (this.#allDatesOfPaschalTriduum[year] = rangeOfDays(start, end));
  };

  #allDatesOfPaschalTriduum: Record<string, Date[]> = {};

  /**
   * EASTER TIME
   */

  /**
   * Get the date of Easter
   * @param {number} [year=this.#year] Gregorian year
   * @param {EasterCalculationType} [easterCalculationType=this.#config.easterCalculationType] The type of calculation to use to determine the date of Easter
   */
  easterSunday = (
    year: number = this.#year,
    easterCalculationType: EasterCalculationType = this.#config.easterCalculationType
  ): Date => {
    if (this.#easter[year]) return this.#easter[year];
    const { month, day } =
      easterCalculationType === 'gregorian'
        ? calculateGregorianEasterDate(year)
        : calculateJulianEasterDateToGregorianDate(year);
    return (this.#easter[year] = getUtcDate(year, month, day));
  };

  #easter: Record<string, Date> = {};

  /**
   * Get all the dates occurring during the octave of Easter
   * from Easter Sunday until the Sunday following Easter (Divine Mercy Sunday), inclusive.
   * @param year Gregorian year
   */
  allDatesInOctaveOfEaster = (year = this.#year): Date[] => {
    if (this.#allDatesInOctaveOfEaster[year]) return this.#allDatesInOctaveOfEaster[year];
    const start = this.easterSunday(year);
    const end = this.divineMercySunday(year);
    return (this.#allDatesInOctaveOfEaster[year] = rangeOfDays(start, end));
  };

  #allDatesInOctaveOfEaster: Record<string, Date[]> = {};

  /**
   * Get all the Sunday of Easter
   *
   * Easter Time is the period of fifty days from Easter Sunday to Pentecost Sunday (inclusive).
   * All Sundays in this period are counted as Sundays of Easter.
   *
   * @param year Gregorian year
   */
  allSundaysOfEaster = (year = this.#year): Date[] => {
    if (this.#allSundaysOfEaster[year]) return this.#allSundaysOfEaster[year];
    const firstSunday = this.easterSunday(year);
    return (this.#allSundaysOfEaster[year] = [
      firstSunday,
      addDays(firstSunday, 7),
      addDays(firstSunday, 14),
      addDays(firstSunday, 21),
      addDays(firstSunday, 28),
      addDays(firstSunday, 35),
      addDays(firstSunday, 42),
      addDays(firstSunday, 49),
    ]);
  };

  #allSundaysOfEaster: Record<string, Date[]> = {};

  weekdayOrSundayOfEasterTime = (
    dow: number,
    week: number,
    year = this.#year,
    ascensionOnSunday = this.#config.ascensionOnSunday
  ): Date | null => {
    const id = `${year}_${ascensionOnSunday}_${week}_${dow}`;
    if (this.#weekdayOrSundayOfEasterTime[id] !== undefined) {
      return this.#weekdayOrSundayOfEasterTime[id];
    }
    if (week < 1 || week > 7 || dow < 0 || dow > 6) {
      return (this.#weekdayOrSundayOfEasterTime[id] = null);
    }
    const date = addDays(this.easterSunday(year), (week - 1) * 7 + dow);
    const ascension = this.ascension(year, ascensionOnSunday);
    return (this.#weekdayOrSundayOfEasterTime[id] = isSameDate(ascension, date) ? null : date);
  };

  #weekdayOrSundayOfEasterTime: Record<string, Date | null> = {};

  /**
   * Get all the dates occurring in Easter Time.
   * Easter Time is the period of fifty days from Easter Sunday to Pentecost Sunday.
   * @param year Gregorian year
   */
  allDatesOfEasterTime = (year = this.#year): Date[] => {
    if (this.#allDatesOfEasterTime[year]) return this.#allDatesOfEasterTime[year];
    const start = this.easterSunday(year);
    const end = this.pentecostSunday(year);
    return (this.#allDatesOfEasterTime[year] = rangeOfDays(start, end));
  };

  #allDatesOfEasterTime: Record<string, Date[]> = {};

  /**
   * Get the date of Divine Mercy Sunday
   * (the Sunday after Easter, in the Octave of Easter)
   * @param year Gregorian year
   */
  divineMercySunday = (year = this.#year): Date => {
    if (this.#divineMercySunday[year]) return this.#divineMercySunday[year];
    return (this.#divineMercySunday[year] = addDays(this.easterSunday(year), 7));
  };

  #divineMercySunday: Record<string, Date> = {};

  /**
   * Get the date of Pentecost
   * (occurs 49 days after Easter)
   * @param year Gregorian year
   */
  pentecostSunday = (year = this.#year): Date => {
    if (this.#pentecostSunday[year]) return this.#pentecostSunday[year];
    return (this.#pentecostSunday[year] = addDays(this.easterSunday(year), 49));
  };

  #pentecostSunday: Record<string, Date> = {};

  //= =================================================================================
  // Ordinary Time
  //= =================================================================================

  /**
   * Get all the dates occurring in Ordinary Time
   * @param year Gregorian year
   * @param epiphanyOnSunday Is Epiphany is fixed on a Sunday
   */
  allDatesOfOrdinaryTime = (year = this.#year, epiphanyOnSunday = this.#config.epiphanyOnSunday): Date[] => {
    const id = year + epiphanyOnSunday.toString();
    if (this.#allDatesOfOrdinaryTime[id]) return this.#allDatesOfOrdinaryTime[id];
    return (this.#allDatesOfOrdinaryTime[id] = [
      ...this.allDatesOfEarlyOrdinaryTime(year, epiphanyOnSunday),
      ...this.allDatesOfLateOrdinaryTime(year),
    ]);
  };

  #allDatesOfOrdinaryTime: Record<string, Date[]> = {};

  /**
   * Get all the dates of the Ordinary Time, from the day after the Christmas Time
   * till the day before Ash Wednesday.
   *
   * *Ordinary Time in the early part of the year begins
   * the day after the Baptism of the Lord and concludes
   * the day before Ash Wednesday.*
   *
   * @param year Gregorian year
   * @param epiphanyOnSunday Is Epiphany is fixed on a Sunday
   */
  allDatesOfEarlyOrdinaryTime = (year = this.#year, epiphanyOnSunday = this.#config.epiphanyOnSunday): Date[] => {
    const id = year + epiphanyOnSunday.toString();
    if (this.#allDatesOfEarlyOrdinaryTime[id]) return this.#allDatesOfEarlyOrdinaryTime[id];
    const start = addDays(this.baptismOfTheLord(year, epiphanyOnSunday), 1);
    const end = subtractsDays(this.ashWednesday(year), 1);
    return (this.#allDatesOfEarlyOrdinaryTime[id] = rangeOfDays(start, end));
  };

  #allDatesOfEarlyOrdinaryTime: Record<string, Date[]> = {};

  /**
   * Get all Sundays that fall within the period of early Ordinary Time
   * @param year Gregorian year
   */
  sundaysOfEarlyOrdinaryTime = (year = this.#year): Date[] => {
    if (this.#sundaysOfEarlyOrdinaryTime[year]) return this.#sundaysOfEarlyOrdinaryTime[year];
    return (this.#sundaysOfEarlyOrdinaryTime[year] = this.allDatesOfEarlyOrdinaryTime(year).filter(
      (d) => d.getUTCDay() === 0
    ));
  };

  #sundaysOfEarlyOrdinaryTime: Record<string, Date[]> = {};

  /**
   * Get all the dates of Ordinary Time after Pentecost to the day before the
   * First Sunday of Advent.
   * @param year Gregorian year
   */
  allDatesOfLateOrdinaryTime = (year = this.#year): Date[] => {
    if (this.#allDatesOfLateOrdinaryTime[year]) return this.#allDatesOfLateOrdinaryTime[year];
    const start = addDays(this.pentecostSunday(year), 1);
    const end = subtractsDays(this.firstSundayOfAdvent(year), 1);
    return (this.#allDatesOfLateOrdinaryTime[year] = rangeOfDays(start, end));
  };

  #allDatesOfLateOrdinaryTime: Record<string, Date[]> = {};

  /**
   * Gets all the Sundays that fall within the period of late Ordinary Time
   * @param year Gregorian year
   */
  allSundaysOfLateOrdinaryTime = (year = this.#year): Date[] => {
    if (this.#allSundaysOfLateOrdinaryTime[year]) return this.#allSundaysOfLateOrdinaryTime[year];
    return (this.#allSundaysOfLateOrdinaryTime[year] = this.allDatesOfLateOrdinaryTime(year).filter(
      (d) => d.getUTCDay() === 0
    ));
  };

  #allSundaysOfLateOrdinaryTime: Record<string, Date[]> = {};

  christTheKingSunday = (year = this.#year): Date => {
    /**
     * Get the date of the Solemnity of Christ the King
     *
     * *The Solemnity of Christ the King is always the 34th (and last) Sunday of Ordinary Time
     * and is the week before the First Sunday of Advent. The Sundays of Ordinary Time in the
     * latter part of the year are numbered backwards from Christ the King to Pentecost.*
     */
    if (this.#christTheKingSunday[year]) return this.#christTheKingSunday[year];
    return (this.#christTheKingSunday[year] = subtractsDays(this.firstSundayOfAdvent(year), 7));
  };

  #christTheKingSunday: Record<string, Date> = {};

  dateOfOrdinaryTime = (
    dow: number,
    week: number,
    year = this.#year,
    epiphanyOnSunday = this.#config.epiphanyOnSunday
  ): Date | null => {
    const id = year + epiphanyOnSunday.toString();

    if (this.#dateOfOrdinaryTime[id] === undefined) {
      const early = this.allDatesOfEarlyOrdinaryTime(year, epiphanyOnSunday);
      const late = this.allDatesOfLateOrdinaryTime(year);
      const lateOrdinaryStartWeekCount = Math.floor(35 - (late.length + 1) / 7);
      const baptismOfTheLordIsMonday = this.baptismOfTheLord(year).getUTCDay() === 1;

      const trinitySunday = this.trinitySunday(year).getTime();
      const corpusChristi = this.corpusChristi(year).getTime();
      const mostSacredHeartOfJesus = this.mostSacredHeartOfJesus(year).getTime();

      const groupBy = (dates: Date[], isEarlyOrdinaryTime: boolean): Record<string, Record<string, Date | null>> =>
        dates.reduce((result: Record<string, Record<string, Date | null>>, item, idx) => {
          const lateOrdinaryTime =
            item.getUTCDay() === 0
              ? lateOrdinaryStartWeekCount + Math.floor(idx / 7) + 1
              : lateOrdinaryStartWeekCount + Math.floor(idx / 7);
          const earlyOrdinaryTime = item.getUTCDay() === 0 ? Math.floor(idx / 7) + 2 : Math.floor(idx / 7) + 1;
          let weekNumber = isEarlyOrdinaryTime
            ? // Early Ordinary Time
              earlyOrdinaryTime
            : // Late Ordinary Time
              lateOrdinaryTime;

          // When the Baptism of the Lord is observed on Monday, Ordinary Time starts on Tuesday.
          // So in this case, the Monday (from the group of 7 days computed above) takes place in the next week.
          if (isEarlyOrdinaryTime && baptismOfTheLordIsMonday && item.getUTCDay() === 1) weekNumber += 1;

          const dateTime = item.getTime();
          const date =
            dateTime === trinitySunday || dateTime === corpusChristi || dateTime === mostSacredHeartOfJesus
              ? null
              : item;

          return { ...result, [weekNumber]: { ...(result[weekNumber] || []), [item.getUTCDay()]: date } };
        }, {});

      this.#dateOfOrdinaryTime[id] = {
        ...groupBy(early, true),
        ...groupBy(late, false),
      };
    }

    return this.#dateOfOrdinaryTime[id][week]?.[dow] ?? null;
  };

  #dateOfOrdinaryTime: Record<string, Record<string, Record<string, Date | null>>> = {};

  //= =================================================================================
  // Fixed and movable Solemnities
  //= =================================================================================

  /**
   * Get the date of the Solemnity of Mary, Holy Mother of God
   *
   * *The Solemnity of Mary, the Holy Mother of God is a
   * feast day of the Blessed Virgin Mary under the aspect
   * of her motherhood of Jesus Christ, whom Christians
   * see as the Lord, Son of God. It is celebrated by
   * the Latin Rite of the Catholic Church on 1 January,
   * the Octave (8th) day of Christmas, and in some
   * countries is a Holy day of obligation.*
   *
   * @param year Gregorian year
   */
  maryMotherOfGod = (year = this.#year): Date => {
    if (this.#maryMotherOfGod[year]) return this.#maryMotherOfGod[year];
    return (this.#maryMotherOfGod[year] = getUtcDate(year, 1, 1));
  };

  #maryMotherOfGod: Record<string, Date> = {};

  /**
   * Get the date of the celebration of the Annunciation
   *
   * *Occurs on March 25th, moved to Monday after Divine Mercy Sunday
   * if it is within Holy Week or Easter Octave*
   *
   * @param year Gregorian year
   */
  annunciation = (year = this.#year): Date => {
    if (this.#annunciation[year]) return this.#annunciation[year];

    let date = getUtcDate(year, 3, 25);

    // If it occurs during Holy Week or the Octave of Easter
    // it is transferred to the Monday of the Second Week of Easter.
    const palmSunday = this.palmSunday(year);
    const divineMercySunday = this.divineMercySunday(year);
    if (date.getTime() >= palmSunday.getTime() && date.getTime() <= divineMercySunday.getTime()) {
      date = addDays(divineMercySunday, 1);
    }

    return (this.#annunciation[year] = date);
  };

  #annunciation: Record<string, Date> = {};

  /**
   * Get the date of the celebration of the birth of John the Baptist
   *
   * *The Nativity of St John the Baptist on June 24 comes three months after
   * the celebration on March 25 of the Annunciation, when the Archangel Gabriel
   * told Our Lady that her cousin Elizabeth was in her sixth month of pregnancy,
   * and six months before the Christmas celebration of the birth of Jesus.
   * The purpose of these festivals is not to celebrate the exact dates of these
   * events, but simply to commemorate them in an interlinking way.
   * The Nativity of St. John the Baptist anticipates the feast of Christmas.*
   *
   * @param year Gregorian year
   */
  nativityOfJohnTheBaptist = (year = this.#year): Date => {
    if (this.#nativityOfJohnTheBaptist[year]) return this.#nativityOfJohnTheBaptist[year];
    return (this.#nativityOfJohnTheBaptist[year] = getUtcDate(year, 6, 24));
  };

  #nativityOfJohnTheBaptist: Record<string, Date> = {};

  /**
   * Get the date of the solemnity of Saints Peter and Paul
   *
   * *The Feast of Saints Peter and Paul or Solemnity of Saints Peter and Paul is a
   * liturgical feast in honour of the martyrdom in Rome of the apostles Saint Peter
   * and Saint Paul, which is observed on 29 June. The celebration is of ancient origin,
   * the date selected being the anniversary either of their death or of the translation
   * of their relics.*
   *
   * @param year Gregorian year
   */
  peterAndPaulApostles = (year = this.#year): Date => {
    if (this.#peterAndPaulApostles[year]) return this.#peterAndPaulApostles[year];
    return (this.#peterAndPaulApostles[year] = getUtcDate(year, 6, 29));
  };

  #peterAndPaulApostles: Record<string, Date> = {};

  /**
   * Get the date of the celebration of the Assumption
   *
   * *The Latin Catholic Feast of the Assumption is celebrated on August 15
   * was the bodily taking up of the Virgin Mary into Heaven at the end
   * of her earthly life.*
   *
   * @param year Gregorian year
   */
  assumption = (year = this.#year): Date => {
    if (this.#assumption[year]) return this.#assumption[year];
    return (this.#assumption[year] = getUtcDate(year, 8, 15));
  };

  #assumption: Record<string, Date> = {};

  /**
   * Get the date of the solemnity of All Saints
   *
   * *All Saints' Day is a solemnity celebrated on 1 November by the Roman
   * Catholic Church of Latin rite in honour of all the saints, known
   * and unknown.*
   *
   * @param year Gregorian year
   */
  allSaints = (year = this.#year): Date => {
    if (this.#allSaints[year]) return this.#allSaints[year];
    return (this.#allSaints[year] = getUtcDate(year, 11, 1));
  };

  #allSaints: Record<string, Date> = {};

  /**
   * Get the date of the celebration of the Immaculate Conception
   *
   * *The Catholic Church celebrates the Feast of the Immaculate Conception on December 8
   * The Immaculate Conception, according to the teaching of the Catholic Church, was the
   * conception of the Blessed Virgin Mary in the womb of her mother, Saint Anne, free from
   * original sin by virtue of the foreseen merits of her son Jesus Christ. The Catholic
   * Church teaches that Mary was conceived by normal biological means, but God acted upon
   * her soul (keeping her "immaculate") at the time of her conception.*
   *
   * @param year Gregorian year
   *
   */
  immaculateConceptionOfMary = (year = this.#isLiturgicalYear ? this.#year - 1 : this.#year): Date => {
    if (this.#immaculateConceptionOfMary[year]) return this.#immaculateConceptionOfMary[year];
    let date = getUtcDate(year, 12, 8);
    // If this solemnity falls on a Sunday, is transferred to the
    // following Monday.
    if (date.getUTCDay() === 0) date = addDays(date, 1);
    return (this.#immaculateConceptionOfMary[year] = date);
  };

  #immaculateConceptionOfMary: Record<string, Date> = {};

  /**
   * Get the date of the solemnity of Ascension
   *
   * *In 1999, an Indult for the Transfer of the Solemnity of the Ascension was issued by the
   * United States Conference of Catholic Bishops allowing each ecclesiastical province to
   * determine if the Ascension should be celebrated on its proper Thursday (39 days after
   * Easter) or on the Seventh Sunday of Easter (42 days after Easter). The following
   * provinces of the United States have retained the celebration of Ascension on its proper
   * Thursday. All other provinces of the United States have transferred the celebration of
   * the Ascension to the Seventh Sunday of Easter.*
   *
   * @param year Gregorian year
   * @param ascensionOnSunday Is Ascension is fixed on a Sunday
   */
  ascension = (year = this.#year, ascensionOnSunday = this.#config.ascensionOnSunday): Date => {
    const id = year + ascensionOnSunday.toString();
    if (this.#ascension[id]) return this.#ascension[id];
    return (this.#ascension[id] = ascensionOnSunday
      ? // If specified, move Ascension to Sunday
        addDays(this.easterSunday(year), 42)
      : // else by default, Ascension on Thursday
        addDays(this.easterSunday(year), 39));
  };

  #ascension: Record<string, Date> = {};

  /**
   * Get the date of the Memorial of Mary, Mother of the Church
   * (occurs the day after Pentecost Sunday)
   * @param year Gregorian year
   */
  maryMotherOfTheChurch = (year = this.#year): Date => {
    if (this.#maryMotherOfTheChurch[year]) return this.#maryMotherOfTheChurch[year];
    return (this.#maryMotherOfTheChurch[year] = addDays(this.easterSunday(year), 50));
  };

  #maryMotherOfTheChurch: Record<string, Date> = {};

  /**
   * Get the date of the Solemnity of Trinity Sunday
   * (occurs 56 days after Easter)
   * @param year Gregorian year
   */
  trinitySunday = (year = this.#year): Date => {
    if (this.#trinitySunday[year]) return this.#trinitySunday[year];
    return (this.#trinitySunday[year] = addDays(this.easterSunday(year), 56));
  };

  #trinitySunday: Record<string, Date> = {};

  /**
   * Get the date of the solemnity of Corpus Christi
   *
   * *The Solemnity of Corpus Christi occurs 60 days after Easter, if it is celebrated on Thursday
   * of the Seventh Week of Easter. In those places where Corpus Christi is not a holiday, it is
   * transferred to the following Sunday (63 days after Easter).*
   *
   * If second argument is false, Corpus Christi is moved to the Thursday of the 7th Week of Easter.
   *
   * @param year Gregorian year
   * @param corpusChristiOnSunday Is Corpus Christi is fixed on a Sunday
   */
  corpusChristi = (year = this.#year, corpusChristiOnSunday = this.#config.corpusChristiOnSunday): Date => {
    const id = year + corpusChristiOnSunday.toString();
    if (this.#corpusChristi[id]) return this.#corpusChristi[id];
    return (this.#corpusChristi[id] = corpusChristiOnSunday
      ? // By default Corpus Christi on Sunday
        addDays(this.easterSunday(year), 63)
      : // If specified, move Corpus Christi to Thursday
        addDays(this.easterSunday(year), 60));
  };

  #corpusChristi: Record<string, Date> = {};

  /**
   * Get the date of the Solemnity of the Sacred Heart of Jesus
   * (occurs 68 days after Easter)
   * @param year Gregorian year
   */
  mostSacredHeartOfJesus = (year = this.#year): Date => {
    if (this.#mostSacredHeartOfJesus[year]) return this.#mostSacredHeartOfJesus[year];
    return (this.#mostSacredHeartOfJesus[year] = addDays(this.easterSunday(year), 68));
  };

  #mostSacredHeartOfJesus: Record<string, Date> = {};

  /**
   * Get the date of the celebration of the Immaculate Heart of Mary
   * (occurs 69 days after Easter)
   * @param year Gregorian year
   */
  immaculateHeartOfMary = (year = this.#year): Date => {
    if (this.#immaculateHeartOfMary[year]) return this.#immaculateHeartOfMary[year];
    return (this.#immaculateHeartOfMary[year] = addDays(this.easterSunday(year), 69));
  };

  #immaculateHeartOfMary: Record<string, Date> = {};

  /**
   * FEASTS OF THE LORD
   * If a fixed date Feast of the Lord occurs on a Sunday in Ordinary Time,
   * the feast is celebrated in place of the Sunday.
   * (e.g., Presentation of the Lord, 1992).
   */

  /**
   * Feast of the Holy Family
   *
   * If Christmas falls on a Sunday, then Holy Family is celebrated on December 30.
   * Otherwise, Holy Family is the Sunday after Christmas.
   *
   * @param year Gregorian year
   */
  holyFamily = (year = this.#isLiturgicalYear ? this.#year - 1 : this.#year): Date => {
    if (this.#holyFamily[year]) return this.#holyFamily[year];
    return (this.#holyFamily[year] =
      this.christmas(year).getUTCDay() === 0
        ? // If Christmas is on Sunday, then Holy Family is on the 30th Dec
          getUtcDate(year, 12, 30)
        : // Holy Family is 1 week after Christmas when Christmas is on a weekday
          startOfWeek(addDays(this.christmas(year), 7)));
  };

  #holyFamily: Record<string, Date> = {};

  /**
   * Get the date of the Baptism of the Lord
   *
   * *The Baptism of the Lord (or the Baptism of Christ) is the feast day
   * commemorating the baptism of Jesus in the Jordan River by John the
   * Baptist. Originally the baptism of Christ was celebrated on Epiphany,
   * which commemorates the coming of the Magi, the baptism of Christ, and
   * the wedding at Cana. Over time in the West, however, the celebration of
   * the baptism of the Lord came to be commemorated as a distinct feast from
   * Epiphany. It is celebrated in Anglican and Lutheran Churches on the first
   * Sunday following The Epiphany of Our Lord (6 January).*
   *
   * @param year Gregorian year
   * @param epiphanyOnSunday Is Epiphany is fixed on a Sunday
   */
  baptismOfTheLord = (year = this.#year, epiphanyOnSunday = this.#config.epiphanyOnSunday): Date => {
    const id = year + epiphanyOnSunday.toString();
    if (this.#baptismOfTheLord[id]) return this.#baptismOfTheLord[id];

    const epiphany = this.epiphany(year, epiphanyOnSunday);

    // If Epiphany is celebrated on Jan. 6
    // the Baptism of the Lord occurs on the Sunday following Jan. 6.
    if (epiphany.getUTCDate() === 6) {
      return startOfWeek(addDays(epiphany, 7));
    }
    // If Epiphany occurs on Sunday Jan. 7 or Sunday Jan. 8,
    //  then the Baptism of the Lord is the next day (Monday)
    if ((epiphany.getUTCDay() === 0 && epiphany.getUTCDate() === 7) || epiphany.getUTCDate() === 8) {
      return addDays(epiphany, 1);
    }
    // If Epiphany occurs before Jan. 6, the Sunday
    // following Epiphany is the Baptism of the Lord.
    return (this.#baptismOfTheLord[id] = startOfWeek(addDays(epiphany, 7)));
  };

  #baptismOfTheLord: Record<string, Date> = {};

  /**
   * Get the date of the Presentation of the Lord
   *
   * *In the Roman Catholic Church, the Feast of the Presentation of the Lord is
   * a Feast Day occurring between the Feast of the Conversion of St. Paul the
   * Apostle on 25 January and the Feast of the Chair of St. Peter the Apostle on
   * 22 February. In some Western liturgical churches, Vespers (or Compline) on the
   * Feast of the Presentation marks the end of the Epiphany season.*
   *
   * @param year Gregorian year
   */
  presentationOfTheLord = (year = this.#year): Date => {
    if (this.#presentationOfTheLord[year]) return this.#presentationOfTheLord[year];
    return (this.#presentationOfTheLord[year] = getUtcDate(year, 2, 2));
  };

  #presentationOfTheLord: Record<string, Date> = {};

  /**
   * Get the date for the Transfiguration of our Lord.
   * @param year Gregorian year
   */
  transfiguration = (year = this.#year): Date => {
    if (this.#transfiguration[year]) return this.#transfiguration[year];
    return (this.#transfiguration[year] = getUtcDate(year, 8, 6));
  };

  #transfiguration: Record<string, Date> = {};

  /**
   * Get the date for The Exultation of The Holy Cross.
   * @param year Gregorian year
   */
  exaltationOfTheHolyCross = (year = this.#year): Date => {
    if (this.#exaltationOfTheHolyCross[year]) return this.#exaltationOfTheHolyCross[year];
    return (this.#exaltationOfTheHolyCross[year] = getUtcDate(year, 9, 14));
  };

  #exaltationOfTheHolyCross: Record<string, Date> = {};

  startOfSeasons = (year = this.#year): Record<Season, Date> => {
    if (this.#startOfSeasons[year]) return this.#startOfSeasons[year];
    return (this.#startOfSeasons[year] = {
      [Season.Advent]: this.firstSundayOfAdvent(year - 1),
      [Season.ChristmasTime]: this.christmas(year - 1),
      [Season.Lent]: this.ashWednesday(year),
      [Season.PaschalTriduum]: this.holyThursday(year),
      [Season.EasterTime]: this.easterSunday(year),
      [Season.OrdinaryTime]: addDays(this.baptismOfTheLord(year), 1),
    });
  };

  #startOfSeasons: Record<number, Record<Season, Date>> = {};

  endOfSeasons = (year = this.#year): Record<Season, Date> => {
    if (this.#endOfSeasons[year]) return this.#endOfSeasons[year];
    return (this.#endOfSeasons[year] = {
      [Season.Advent]: getUtcDate(year - 1, 12, 24),
      [Season.ChristmasTime]: this.baptismOfTheLord(year),
      [Season.Lent]: this.holyThursday(year),
      [Season.PaschalTriduum]: this.easterSunday(year),
      [Season.EasterTime]: this.pentecostSunday(year),
      [Season.OrdinaryTime]: addDays(this.christTheKingSunday(year), 6),
    });
  };

  #endOfSeasons: Record<number, Record<Season, Date>> = {};
}
