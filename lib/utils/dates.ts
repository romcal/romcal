import { CalendarScope } from '@romcal/main';
import { RomcalConfig } from '@romcal/models/config';
import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);
dayjs.extend(isBetween);

/**
 * This algorithm is based on the algorithm of Oudin (1940) and quoted in
 * "Explanatory Supplement to the Astronomical Almanac", P. Kenneth
 * Seidelmann, editor.
 *
 * @param year The year on which to check when Easter falls (integer)
 */
export const computeGregorianEasterDate = (year: number): Record<string, number> => {
  const Y = year;
  const C = Math.floor(Y / 100);
  const N = Y - 19 * Math.floor(Y / 19);
  const K = Math.floor((C - 17) / 25);
  let I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15;

  I = I - 30 * Math.floor(I / 30);
  I =
    I -
    Math.floor(I / 28) *
      (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11));

  let J = Y + Math.floor(Y / 4) + I + 2 - C + Math.floor(C / 4);
  J = J - 7 * Math.floor(J / 7);

  const L = I - J;
  const M = 3 + Math.floor((L + 40) / 44);
  const D = L + 28 - 31 * Math.floor(M / 4);

  return { year: Y, month: M, day: D };
};

/**
 * Returns a range of dates between a given start and end date included
 * @param start The start date
 * @param end The end date
 * @returns An array of dates representing the range
 */
export const rangeOfDays = (start: Dayjs, end: Dayjs): Dayjs[] => {
  const days = end.diff(start, 'day');
  const range: Dayjs[] = [];
  Array.from(new Array(days + 1), (_x, i) => {
    range.push(start.add(i, 'day'));
  });
  return range;
};

/**
 * Determines if a given date exists within a range of dates.
 * @param range The range to search against
 * @param date The date to search for in the range
 * @returns `true` if the date exists in tha range or false if otherwise
 */
export const rangeContainsDate = (range: Array<dayjs.Dayjs>, date: dayjs.Dayjs): boolean => {
  return range.map((date) => date.toISOString()).includes(date.toISOString());
};

export class Dates {
  readonly #config: RomcalConfig;
  readonly #year: number;
  readonly #isLiturgicalYear: boolean;

  constructor(config: RomcalConfig, year: number) {
    this.#config = config;
    this.#year = year;
    this.#isLiturgicalYear = this.#config.scope === CalendarScope.Liturgical;
  }

  /**
   * ADVENT
   */

  /**
   * Get all the dates occurring in the season of Advent
   * The length of Advent depends upon the day of the week on which Christmas occurs
   * @param year Gregorian year
   */
  allDatesOfAdvent = (year = this.#isLiturgicalYear ? this.#year - 1 : this.#year): Dayjs[] => {
    if (this.#allDatesOfAdvent[year]) return this.#allDatesOfAdvent[year];
    const start = this.firstSundayOfAdvent(year);
    const end = this.christmas(year).subtract(1, 'day');
    return (this.#allDatesOfAdvent[year] = rangeOfDays(start, end));
  };
  #allDatesOfAdvent: Record<string, Dayjs[]> = {};

  /**
   * Get the all 4 Sundays of Advent
   * @param year Gregorian year
   */
  allSundaysOfAdvent = (year = this.#isLiturgicalYear ? this.#year - 1 : this.#year): Dayjs[] => {
    if (this.#allSundaysOfAdvent[year]) return this.#allSundaysOfAdvent[year];
    const firstSunday = this.firstSundayOfAdvent(year);
    return (this.#allSundaysOfAdvent[year] = [
      firstSunday,
      firstSunday.add(7, 'days'),
      firstSunday.add(14, 'days'),
      firstSunday.add(21, 'days'),
    ]);
  };
  #allSundaysOfAdvent: Record<string, Dayjs[]> = {};

  /**
   * Get the date of the first Sunday of Advent
   * (the start of Advent depends upon the day of the week on which Christmas occurs)
   * @param year Gregorian year
   */
  firstSundayOfAdvent = (year = this.#isLiturgicalYear ? this.#year - 1 : this.#year): Dayjs => {
    if (this.#firstSundayOfAdvent[year]) return this.#firstSundayOfAdvent[year];
    return (this.#firstSundayOfAdvent[year] = Dates.firstSundayOfAdvent(year));
  };
  #firstSundayOfAdvent: Record<string, Dayjs> = {};

  /**
   * Get the date of the first Sunday of Advent
   * (the start of Advent depends upon the day of the week on which Christmas occurs)
   * @param year Gregorian year
   */
  static firstSundayOfAdvent = (year: number): Dayjs => {
    switch (Dates.christmas(year).day()) {
      case 0: // Sunday
        return dayjs.utc(`${year}-11-27`);
      case 1: // Monday
        return dayjs.utc(`${year}-12-3`);
      case 2: // Tuesday
        return dayjs.utc(`${year}-12-2`);
      case 3: // Wednesday
        return dayjs.utc(`${year}-12-1`);
      case 4: // Thursday
        return dayjs.utc(`${year}-11-30`);
      case 5: // Friday
        return dayjs.utc(`${year}-11-29`);
      default:
        // Saturday
        return dayjs.utc(`${year}-11-28`);
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
    year = this.#isLiturgicalYear ? this.#year - 1 : this.#year,
  ): Dayjs | null => {
    const id = `${year}_${week}_${dow}`;
    if (this.#unprivilegedWeekdayOfAdvent[id] !== undefined) {
      return this.#unprivilegedWeekdayOfAdvent[id];
    }
    if (dow < 1 || dow > 6 || week < 1 || week > 4)
      return (this.#unprivilegedWeekdayOfAdvent[id] = null);
    let date: Dayjs | null = this.firstSundayOfAdvent(year).add((week - 1) * 7 + dow, 'days');
    if (date.date() >= 17 && date.month() === 11 && date.day() !== 0) date = null;
    return (this.#unprivilegedWeekdayOfAdvent[id] = date);
  };
  #unprivilegedWeekdayOfAdvent: Record<string, Dayjs | null> = {};

  /**
   * Get the date of a privileged weekday within Advent, from 17 to 24 December,
   * Sundays excluded.
   * @param day Nth day of month
   * @param year Gregorian year
   */
  privilegedWeekdayOfAdvent = (
    day: number,
    year = this.#isLiturgicalYear ? this.#year - 1 : this.#year,
  ): Dayjs | null => {
    const id = `${year}_${day}`;
    if (this.#privilegedWeekdayOfAdvent[id] !== undefined) {
      return this.#privilegedWeekdayOfAdvent[id];
    }
    if (day < 17 || day > 24) return (this.#privilegedWeekdayOfAdvent[id] = null);
    let date: Dayjs | null = dayjs(`${year}-12-${day}`);
    if (date.day() === 0) date = null;
    return (this.#privilegedWeekdayOfAdvent[id] = date);
  };
  #privilegedWeekdayOfAdvent: Record<string, Dayjs | null> = {};

  /**
   * Get the date of a Sundays of Advent (1st to 4th).
   * @param week Nth week of season, from 1 to 4
   * @param year Gregorian year
   */
  sundayOfAdvent = (
    week: number,
    year = this.#isLiturgicalYear ? this.#year - 1 : this.#year,
  ): Dayjs | null => {
    const id = `${year}_${week}`;
    if (this.#sundayOfAdvent[id] !== undefined) return this.#sundayOfAdvent[id];
    if (week < 1 || week > 4) return (this.#sundayOfAdvent[id] = null);
    return (this.#sundayOfAdvent[id] = this.firstSundayOfAdvent(year).add(7 * (week - 1), 'days'));
  };
  #sundayOfAdvent: Record<string, Dayjs | null> = {};

  /**
   * CHRISTMAS TIME
   */

  /**
   * Get the date of Christmas
   * (in the Roman Rite, Christmas always falls on December 25).
   * @param year Gregorian year
   */
  christmas = (year = this.#isLiturgicalYear ? this.#year - 1 : this.#year): Dayjs => {
    if (this.#christmas[year]) return this.#christmas[year];
    return (this.#christmas[year] = Dates.christmas(year));
  };
  #christmas: Record<string, Dayjs> = {};

  /**
   * Get the date of Christmas
   * (in the Roman Rite, Christmas always falls on December 25).
   * @param year Gregorian year
   */
  static christmas = (year: number): Dayjs => {
    return dayjs.utc(`${year}-12-25`);
  };

  /**
   * Get all the dates occurring in the octave of Christmas
   * (from Christmas to Mary Mother of God, inclusive)
   * @param year Gregorian year
   */
  allDatesInOctaveOfChristmas = (
    year = this.#isLiturgicalYear ? this.#year - 1 : this.#year,
  ): Dayjs[] => {
    if (this.#allDatesInOctaveOfChristmas[year]) return this.#allDatesInOctaveOfChristmas[year];
    return (this.#allDatesInOctaveOfChristmas[year] = rangeOfDays(
      this.christmas(year),
      this.christmas(year).add(6, 'days'),
    ).concat(this.maryMotherOfGod(year)));
  };
  #allDatesInOctaveOfChristmas: Record<string, Dayjs[]> = {};

  /**
   * Get the date of the nth weekday within the Octave of the Nativity of the Lord.
   * Sundays and the feast of the Holy Family are excluded.
   * @param dayOfOctave Nth day within the Octave
   * @param year Gregorian year
   */
  weekdayWithinOctaveOfChristmas = (
    dayOfOctave: number,
    year = this.#isLiturgicalYear ? this.#year - 1 : this.#year,
  ): Dayjs | null => {
    const id = `${year}_${dayOfOctave}`;
    if (this.#weekdayWithinOctaveOfChristmas[id] !== undefined) {
      return this.#weekdayWithinOctaveOfChristmas[id];
    }
    if (dayOfOctave < 1 || dayOfOctave > 8)
      return (this.#weekdayWithinOctaveOfChristmas[id] = null);
    let date: Dayjs | null = this.christmas(year).add(dayOfOctave - 1, 'days');
    if (date.isSame(this.holyFamily(year), 'day')) date = null;
    return (this.#weekdayWithinOctaveOfChristmas[id] = date);
  };
  #weekdayWithinOctaveOfChristmas: Record<string, Dayjs | null> = {};

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
    epiphanyOnSunday = this.#config.epiphanyOnSunday,
  ): Dayjs[] => {
    const id = year + epiphanyOnSunday.toString();
    if (this.#allDatesOfChristmasTime[id]) return this.#allDatesOfChristmasTime[id];
    const start = this.christmas(year);
    const end = this.baptismOfTheLord(year + 1, epiphanyOnSunday);
    return (this.#allDatesOfChristmasTime[id] = rangeOfDays(start, end));
  };
  #allDatesOfChristmasTime: Record<string, Dayjs[]> = {};

  /**
   * Get the second Sunday after the Octave of the Nativity of the Lord,
   * which is not the Epiphany or the Baptism of the Lord.
   * This can occur only when Epiphany is celebrated the 6 January.
   * @param year Gregorian year
   * @param epiphanyOnSunday Is Epiphany is fixed on a Sunday
   */
  secondSundayAfterChristmas = (
    year = this.#year,
    epiphanyOnSunday = this.#config.epiphanyOnSunday,
  ): Dayjs | null => {
    const id = year + epiphanyOnSunday.toString();
    if (this.#secondSundayAfterChristmas[id] !== undefined) {
      return this.#secondSundayAfterChristmas[id];
    }
    if (epiphanyOnSunday) return (this.#secondSundayAfterChristmas[id] = null);
    const date =
      this.allDatesBeforeEpiphany(year, epiphanyOnSunday).find((d) => d.day() === 0) ??
      this.allDatesAfterEpiphany(year, epiphanyOnSunday).find((d) => d.day() === 0);
    return (this.#secondSundayAfterChristmas[id] = date ?? null);
  };
  #secondSundayAfterChristmas: Record<string, Dayjs | null> = {};

  /**
   * Get all the date before Epiphany (and from January 2)
   * @param year Gregorian year
   * @param epiphanyOnSunday Is Epiphany is fixed on a Sunday
   */
  allDatesBeforeEpiphany = (
    year = this.#year,
    epiphanyOnSunday = this.#config.epiphanyOnSunday,
  ): Dayjs[] => {
    const id = year + epiphanyOnSunday.toString();
    if (this.#allDatesBeforeEpiphany[id]) return this.#allDatesBeforeEpiphany[id];
    const start = this.maryMotherOfGod(year).add(1, 'day');
    const end = this.epiphany(year, epiphanyOnSunday).subtract(1, 'day');
    return (this.#allDatesBeforeEpiphany[id] = rangeOfDays(start, end));
  };
  #allDatesBeforeEpiphany: Record<string, Dayjs[]> = {};

  /**
   * Get the date of a weekday before Epiphany (and from January 2)
   * @param day Nth day of month
   * @param year Gregorian year
   * @param epiphanyOnSunday Is Epiphany is fixed on a Sunday
   */
  weekdayBeforeEpiphany = (
    day: number,
    year = this.#year,
    epiphanyOnSunday = this.#config.epiphanyOnSunday,
  ): Dayjs | null => {
    const id = `${day}_${year}_${epiphanyOnSunday.toString()}`;
    if (this.#weekdayBeforeEpiphany[id] !== undefined) return this.#weekdayBeforeEpiphany[id];
    if (day < 2 || day > 8) return (this.#weekdayBeforeEpiphany[id] = null);
    return (this.#weekdayBeforeEpiphany[id] =
      this.allDatesBeforeEpiphany(year, epiphanyOnSunday).find((d) => d.date() === day) ?? null);
  };
  #weekdayBeforeEpiphany: Record<string, Dayjs | null> = {};

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
  epiphany = (year = this.#year, epiphanyOnSunday = this.#config.epiphanyOnSunday): Dayjs => {
    const id = year + epiphanyOnSunday.toString();
    if (this.#epiphany[id]) return this.#epiphany[id];

    // Get the first day of the year
    const firstDay = dayjs.utc(`${year}-1-1`);
    let date = dayjs.utc(`${year}-1-6`);

    if (epiphanyOnSunday) {
      switch (firstDay.day()) {
        // If first day of the year is a Saturday, Mary Mother of God is on that day
        // and Epiphany is on the next day
        case 6:
          date = firstDay.add(1, 'day');
          break;
        // If first day of the year is a Sunday, Mary Mother of God is on that Sunday and
        // the Sunday proceeding will be Epiphany
        case 0:
          date = firstDay.add(7, 'day');
          break;
        // If first day of the year is on a weekday (i.e. Monday - Friday),
        // Epiphany will be celebrated on the Sunday proceeding
        default:
          date = firstDay.add(1, 'week').startOf('week');
          break;
      }
    }

    return (this.#epiphany[id] = date);
  };
  #epiphany: Record<string, Dayjs> = {};

  /**
   * Get all the dates after Epiphany, until the day before the Baptism of the Lord.
   * @param year Gregorian year
   * @param epiphanyOnSunday Is Epiphany is fixed on a Sunday
   */
  allDatesAfterEpiphany = (
    year = this.#year,
    epiphanyOnSunday = this.#config.epiphanyOnSunday,
  ): Dayjs[] => {
    const id = year + epiphanyOnSunday.toString();
    if (this.#allDatesAfterEpiphany[id]) return this.#allDatesAfterEpiphany[id];
    const start = this.epiphany(year, epiphanyOnSunday).add(1, 'day');
    const end = this.baptismOfTheLord(year, epiphanyOnSunday).subtract(1, 'day');
    return (this.#allDatesAfterEpiphany[id] = rangeOfDays(start, end));
  };
  #allDatesAfterEpiphany: Record<string, Dayjs[]> = {};

  /**
   * Get the date of a weekday after Epiphany (and before the Baptism of the Lord)
   * @param dow Day of week
   * @param year Gregorian year
   * @param epiphanyOnSunday Is Epiphany is fixed on a Sunday
   */
  weekdayAfterEpiphany = (
    dow: number,
    year = this.#year,
    epiphanyOnSunday = this.#config.epiphanyOnSunday,
  ): Dayjs | null => {
    const id = `${dow}_${year}_${epiphanyOnSunday.toString()}`;
    if (this.#weekdayAfterEpiphany[id] !== undefined) return this.#weekdayAfterEpiphany[id];
    if (dow < 1 || dow > 6) return (this.#weekdayAfterEpiphany[id] = null);
    return (this.#weekdayAfterEpiphany[id] =
      this.allDatesAfterEpiphany(year, epiphanyOnSunday).find((d) => d.day() === dow) ?? null);
  };
  #weekdayAfterEpiphany: Record<string, Dayjs | null> = {};

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
  ashWednesday = (year = this.#year): Dayjs => {
    if (this.#ashWednesday[year]) return this.#ashWednesday[year];
    return (this.#ashWednesday[year] = this.easterSunday(year).subtract(46, 'day').startOf('day'));
  };
  #ashWednesday: Record<string, Dayjs> = {};

  /**
   * Get all the Sunday of Lent
   * @param year Gregorian year
   */
  allSundaysOfLent = (year = this.#year): Dayjs[] => {
    if (this.#allSundaysOfLent[year]) return this.#allSundaysOfLent[year];
    const firstSunday = this.ashWednesday(year).add(4, 'days');
    return (this.#allSundaysOfLent[year] = [
      firstSunday,
      firstSunday.add(7, 'days'),
      firstSunday.add(14, 'days'),
      firstSunday.add(21, 'days'),
      firstSunday.add(28, 'days'),
      firstSunday.add(35, 'days'),
    ]);
  };
  #allSundaysOfLent: Record<string, Dayjs[]> = {};

  /**
   * Get all the dates occurring in Lent (from Ash Wednesday and runs until the day before Holy Thursday)
   * @param year Gregorian year
   */
  allDatesOfLent = (year = this.#year): Dayjs[] => {
    if (this.#allDatesOfLent[year]) return this.#allDatesOfLent[year];
    const start = this.ashWednesday(year);
    const end = this.holyThursday(year);
    return (this.#allDatesOfLent[year] = rangeOfDays(start, end));
  };
  #allDatesOfLent: Record<string, Dayjs[]> = {};

  /**
   * Get the date of Palm Sunday
   * @param year Gregorian year
   */
  palmSunday = (year = this.#year): Dayjs => {
    if (this.#palmSunday[year]) return this.#palmSunday[year];
    return (this.#palmSunday[year] = this.easterSunday(year).subtract(7, 'day').startOf('day'));
  };
  #palmSunday: Record<string, Dayjs> = {};

  /**
   * HOLY WEEK
   */

  /**
   * Get the date of Holy Thursday (or Maundy Thursday)
   * @param year Gregorian year
   */
  holyThursday = (year = this.#year): Dayjs => {
    if (this.#holyThursday[year]) return this.#holyThursday[year];
    return (this.#holyThursday[year] = this.easterSunday(year).subtract(3, 'day').startOf('day'));
  };
  #holyThursday: Record<string, Dayjs> = {};

  /**
   * Get the date of Good Friday (or Holy Friday)
   *
   * *Good Friday is a Christian religious holiday commemorating the crucifixion
   * of Jesus Christ and his death at Calvary. The holiday is observed during Holy Week as part of the
   * Paschal Triduum on the Friday preceding Easter Sunday*
   *
   * @param year Gregorian year
   */
  goodFriday = (year = this.#year): Dayjs => {
    if (this.#goodFriday[year]) return this.#goodFriday[year];
    return (this.#goodFriday[year] = this.easterSunday(year).subtract(2, 'day').startOf('day'));
  };
  #goodFriday: Record<string, Dayjs> = {};

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
  holySaturday = (year = this.#year): Dayjs => {
    if (this.#holySaturday[year]) return this.#holySaturday[year];
    return (this.#holySaturday[year] = this.easterSunday(year).subtract(1, 'day').startOf('day'));
  };
  #holySaturday: Record<string, Dayjs> = {};

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
  allDatesOfHolyWeek = (year = this.#year): Dayjs[] => {
    if (this.#allDatesOfHolyWeek[year]) return this.#allDatesOfHolyWeek[year];
    const start = this.palmSunday(year);
    const end = this.holySaturday(year);
    return (this.#allDatesOfHolyWeek[year] = rangeOfDays(start, end));
  };
  #allDatesOfHolyWeek: Record<string, Dayjs[]> = {};

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
  allDatesOfPaschalTriduum = (year = this.#year): Dayjs[] => {
    if (this.#allDatesOfPaschalTriduum[year]) return this.#allDatesOfPaschalTriduum[year];
    const start = this.holyThursday(year);
    const end = this.easterSunday(year);
    return (this.#allDatesOfPaschalTriduum[year] = rangeOfDays(start, end));
  };
  #allDatesOfPaschalTriduum: Record<string, Dayjs[]> = {};

  /**
   * EASTER TIME
   */

  /**
   * Get the date of Easter
   * @param year Gregorian year
   */
  easterSunday = (year = this.#year): Dayjs => {
    if (this.#easter[year]) return this.#easter[year];
    const { month, day } = computeGregorianEasterDate(year);
    return (this.#easter[year] = dayjs.utc(`${year}-${month}-${day}`));
  };
  #easter: Record<string, Dayjs> = {};

  /**
   * Get all the dates occurring during the octave of Easter
   * from Easter Sunday until the Sunday following Easter (Divine Mercy Sunday), inclusive.
   * @param year Gregorian year
   */
  allDatesInOctaveOfEaster = (year = this.#year): Dayjs[] => {
    if (this.#allDatesInOctaveOfEaster[year]) return this.#allDatesInOctaveOfEaster[year];
    const start = this.easterSunday(year);
    const end = this.divineMercySunday(year);
    return (this.#allDatesInOctaveOfEaster[year] = rangeOfDays(start, end));
  };
  #allDatesInOctaveOfEaster: Record<string, Dayjs[]> = {};

  /**
   * Get all the Sunday of Easter
   *
   * Easter Time is the period of fifty days from Easter Sunday to Pentecost Sunday (inclusive).
   * All Sundays in this period are counted as Sundays of Easter.
   *
   * @param year Gregorian year
   */
  allSundaysOfEaster = (year = this.#year): Dayjs[] => {
    if (this.#allSundaysOfEaster[year]) return this.#allSundaysOfEaster[year];
    const firstSunday = this.easterSunday(year);
    return (this.#allSundaysOfEaster[year] = [
      firstSunday,
      firstSunday.add(7, 'days'),
      firstSunday.add(14, 'days'),
      firstSunday.add(21, 'days'),
      firstSunday.add(28, 'days'),
      firstSunday.add(35, 'days'),
      firstSunday.add(42, 'days'),
      firstSunday.add(49, 'days'),
    ]);
  };
  #allSundaysOfEaster: Record<string, Dayjs[]> = {};

  weekdayOrSundayOfEasterTime = (
    dow: number,
    week: number,
    year = this.#year,
    ascensionOnSunday = this.#config.ascensionOnSunday,
  ): Dayjs | null => {
    const id = `${year}_${ascensionOnSunday}_${week}_${dow}`;
    if (this.#weekdayOrSundayOfEasterTime[id] !== undefined) {
      return this.#weekdayOrSundayOfEasterTime[id];
    }
    if (week < 1 || week > 7 || dow < 0 || dow > 6) {
      return (this.#weekdayOrSundayOfEasterTime[id] = null);
    }
    const date = this.easterSunday(year).add((week - 1) * 7 + dow, 'days');
    const ascension = this.ascension(year, ascensionOnSunday);
    return (this.#weekdayOrSundayOfEasterTime[id] = ascension.isSame(date, 'date') ? null : date);
  };
  #weekdayOrSundayOfEasterTime: Record<string, Dayjs | null> = {};

  /**
   * Get all the dates occurring in Easter Time.
   * Easter Time is the period of fifty days from Easter Sunday to Pentecost Sunday.
   * @param year Gregorian year
   */
  allDatesOfEasterTime = (year = this.#year): Dayjs[] => {
    if (this.#allDatesOfEasterTime[year]) return this.#allDatesOfEasterTime[year];
    const start = this.easterSunday(year);
    const end = this.pentecostSunday(year);
    return (this.#allDatesOfEasterTime[year] = rangeOfDays(start, end));
  };
  #allDatesOfEasterTime: Record<string, Dayjs[]> = {};

  /**
   * Get the date of Divine Mercy Sunday
   * (the Sunday after Easter, in the Octave of Easter)
   * @param year Gregorian year
   */
  divineMercySunday = (year = this.#year): Dayjs => {
    if (this.#divineMercySunday[year]) return this.#divineMercySunday[year];
    return (this.#divineMercySunday[year] = this.easterSunday(year).add(7, 'day').startOf('day'));
  };
  #divineMercySunday: Record<string, Dayjs> = {};

  /**
   * Get the date of Pentecost
   * (occurs 49 days after Easter)
   * @param year Gregorian year
   */
  pentecostSunday = (year = this.#year): Dayjs => {
    if (this.#pentecostSunday[year]) return this.#pentecostSunday[year];
    return (this.#pentecostSunday[year] = this.easterSunday(year).add(49, 'day').startOf('day'));
  };
  #pentecostSunday: Record<string, Dayjs> = {};

  //==================================================================================
  // Ordinary Time
  //==================================================================================

  /**
   * Get all the dates occurring in Ordinary Time
   * @param year Gregorian year
   * @param epiphanyOnSunday Is Epiphany is fixed on a Sunday
   */
  allDatesOfOrdinaryTime = (
    year = this.#year,
    epiphanyOnSunday = this.#config.epiphanyOnSunday,
  ): Dayjs[] => {
    const id = year + epiphanyOnSunday.toString();
    if (this.#allDatesOfOrdinaryTime[id]) return this.#allDatesOfOrdinaryTime[id];
    return (this.#allDatesOfOrdinaryTime[id] = [
      ...this.allDatesOfEarlyOrdinaryTime(year, epiphanyOnSunday),
      ...this.allDatesOfLateOrdinaryTime(year),
    ]);
  };
  #allDatesOfOrdinaryTime: Record<string, Dayjs[]> = {};

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
  allDatesOfEarlyOrdinaryTime = (
    year = this.#year,
    epiphanyOnSunday = this.#config.epiphanyOnSunday,
  ): Dayjs[] => {
    const id = year + epiphanyOnSunday.toString();
    if (this.#allDatesOfEarlyOrdinaryTime[id]) return this.#allDatesOfEarlyOrdinaryTime[id];
    const start = this.baptismOfTheLord(year, epiphanyOnSunday).add(1, 'day');
    const end = this.ashWednesday(year).subtract(1, 'day');
    return (this.#allDatesOfEarlyOrdinaryTime[id] = rangeOfDays(start, end));
  };
  #allDatesOfEarlyOrdinaryTime: Record<string, Dayjs[]> = {};

  /**
   * Get all Sundays that fall within the period of early Ordinary Time
   * @param year Gregorian year
   */
  sundaysOfEarlyOrdinaryTime = (year = this.#year): Dayjs[] => {
    if (this.#sundaysOfEarlyOrdinaryTime[year]) return this.#sundaysOfEarlyOrdinaryTime[year];
    return (this.#sundaysOfEarlyOrdinaryTime[year] = this.allDatesOfEarlyOrdinaryTime(year).filter(
      (d) => d.day() === 0,
    ));
  };
  #sundaysOfEarlyOrdinaryTime: Record<string, Dayjs[]> = {};

  /**
   * Get all the dates of Ordinary Time after Pentecost to the day before the
   * First Sunday of Advent.
   * @param year Gregorian year
   */
  allDatesOfLateOrdinaryTime = (year = this.#year): Dayjs[] => {
    if (this.#allDatesOfLateOrdinaryTime[year]) return this.#allDatesOfLateOrdinaryTime[year];
    const start = this.pentecostSunday(year).add(1, 'day');
    const end = this.firstSundayOfAdvent(year).subtract(1, 'day');
    return (this.#allDatesOfLateOrdinaryTime[year] = rangeOfDays(start, end));
  };
  #allDatesOfLateOrdinaryTime: Record<string, Dayjs[]> = {};

  /**
   * Gets all the Sundays that fall within the period of late Ordinary Time
   * @param year Gregorian year
   */
  allSundaysOfLateOrdinaryTime = (year = this.#year): Dayjs[] => {
    if (this.#allSundaysOfLateOrdinaryTime[year]) return this.#allSundaysOfLateOrdinaryTime[year];
    return (this.#allSundaysOfLateOrdinaryTime[year] = this.allDatesOfLateOrdinaryTime(year).filter(
      (d) => d.day() === 0,
    ));
  };
  #allSundaysOfLateOrdinaryTime: Record<string, Dayjs[]> = {};

  christTheKingSunday = (year = this.#year): Dayjs => {
    /**
     * Get the date of the Solemnity of Christ the King
     *
     * *The Solemnity of Christ the King is always the 34th (and last) Sunday of Ordinary Time
     * and is the week before the First Sunday of Advent. The Sundays of Ordinary Time in the
     * latter part of the year are numbered backwards from Christ the King to Pentecost.*
     */
    if (this.#christTheKingSunday[year]) return this.#christTheKingSunday[year];
    return (this.#christTheKingSunday[year] = this.firstSundayOfAdvent(year)
      .subtract(7, 'day')
      .startOf('day'));
  };
  #christTheKingSunday: Record<string, Dayjs> = {};

  dateOfOrdinaryTime = (
    dow: number,
    week: number,
    year = this.#year,
    epiphanyOnSunday = this.#config.epiphanyOnSunday,
  ): Dayjs | null => {
    const id = year + epiphanyOnSunday.toString();

    const aa = this.#dateOfOrdinaryTime[id];

    if (this.#dateOfOrdinaryTime[id] === undefined) {
      const early = this.allDatesOfEarlyOrdinaryTime(year, epiphanyOnSunday);
      const late = this.allDatesOfLateOrdinaryTime(year);
      const lateOrdinaryStartWeekCount = Math.floor(35 - (late.length + 1) / 7);

      const trinitySunday = this.trinitySunday(year).toDate().getTime();
      const corpusChristi = this.corpusChristi(year).toDate().getTime();
      const mostSacredHeartOfJesus = this.mostSacredHeartOfJesus(year).toDate().getTime();

      const groupBy = (dates: Dayjs[], isEarlyOrdinaryTime: boolean) =>
        dates.reduce((result: Record<string, Record<string, Dayjs | null>>, item, idx) => {
          const week = isEarlyOrdinaryTime
            ? // Early Ordinary Time
              item.day() === 0
              ? Math.floor(idx / 7) + 2
              : Math.floor(idx / 7) + 1
            : // Late Ordinary Time
            item.day() === 0
            ? lateOrdinaryStartWeekCount + Math.floor(idx / 7) + 1
            : lateOrdinaryStartWeekCount + Math.floor(idx / 7);

          const dateTime = item.toDate().getTime();
          const date =
            dateTime === trinitySunday ||
            dateTime === corpusChristi ||
            dateTime === mostSacredHeartOfJesus
              ? null
              : item;

          return { ...result, [week]: { ...(result[week] || []), [item.day()]: date } };
        }, {});

      this.#dateOfOrdinaryTime[id] = {
        ...groupBy(early, true),
        ...groupBy(late, false),
      };
    }

    return (this.#dateOfOrdinaryTime[id][week] && this.#dateOfOrdinaryTime[id][week][dow]) ?? null;
  };
  #dateOfOrdinaryTime: Record<string, Record<string, Record<string, Dayjs | null>>> = {};

  //==================================================================================
  // Fixed and movable Solemnities
  //==================================================================================

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
  maryMotherOfGod = (year = this.#year): Dayjs => {
    if (this.#maryMotherOfGod[year]) return this.#maryMotherOfGod[year];
    return (this.#maryMotherOfGod[year] = dayjs.utc(`${year}-1-1`));
  };
  #maryMotherOfGod: Record<string, Dayjs> = {};

  /**
   * Get the date of the celebration of the Annunciation
   *
   * *Occurs on March 25th, moved to Monday after Divine Mercy Sunday
   * if it is within Holy Week or Easter Octave*
   *
   * @param year Gregorian year
   */
  annunciation = (year = this.#year): Dayjs => {
    if (this.#annunciation[year]) return this.#annunciation[year];

    let date = dayjs.utc(`${year}-3-25`);

    // If it occurs during Holy Week or the Octave of Easter
    // it is transferred to the Monday of the Second Week of Easter.
    const palmSunday = this.palmSunday(year);
    const divineMercySunday = this.divineMercySunday(year);
    if (date.isSameOrAfter(palmSunday) && date.isSameOrBefore(divineMercySunday)) {
      date = divineMercySunday.add(1, 'day');
    }

    return (this.#annunciation[year] = date);
  };
  #annunciation: Record<string, Dayjs> = {};

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
  nativityOfJohnTheBaptist = (year = this.#year): Dayjs => {
    if (this.#nativityOfJohnTheBaptist[year]) return this.#nativityOfJohnTheBaptist[year];
    return (this.#nativityOfJohnTheBaptist[year] = dayjs.utc(`${year}-6-24`));
  };
  #nativityOfJohnTheBaptist: Record<string, Dayjs> = {};

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
  peterAndPaulApostles = (year = this.#year): Dayjs => {
    if (this.#peterAndPaulApostles[year]) return this.#peterAndPaulApostles[year];
    return (this.#peterAndPaulApostles[year] = dayjs.utc(`${year}-6-29`));
  };
  #peterAndPaulApostles: Record<string, Dayjs> = {};

  /**
   * Get the date of the celebration of the Assumption
   *
   * *The Latin Catholic Feast of the Assumption is celebrated on August 15
   * was the bodily taking up of the Virgin Mary into Heaven at the end
   * of her earthly life.*
   *
   * @param year Gregorian year
   */
  assumption = (year = this.#year): Dayjs => {
    if (this.#assumption[year]) return this.#assumption[year];
    return (this.#assumption[year] = dayjs.utc(`${year}-8-15`));
  };
  #assumption: Record<string, Dayjs> = {};

  /**
   * Get the date of the solemnity of All Saints
   *
   * *All Saints' Day is a solemnity celebrated on 1 November by the Roman
   * Catholic Church of Latin rite in honour of all the saints, known
   * and unknown.*
   *
   * @param year Gregorian year
   */
  allSaints = (year = this.#year): Dayjs => {
    if (this.#allSaints[year]) return this.#allSaints[year];
    return (this.#allSaints[year] = dayjs.utc(`${year}-11-1`));
  };
  #allSaints: Record<string, Dayjs> = {};

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
  immaculateConceptionOfMary = (
    year = this.#isLiturgicalYear ? this.#year - 1 : this.#year,
  ): Dayjs => {
    if (this.#immaculateConceptionOfMary[year]) return this.#immaculateConceptionOfMary[year];
    let date = dayjs.utc(`${year}-12-8`);
    // If this solemnity falls on a Sunday, is transferred to the
    // following Monday.
    if (date.day() === 0) date = date.add(1, 'day');
    return (this.#immaculateConceptionOfMary[year] = date);
  };
  #immaculateConceptionOfMary: Record<string, Dayjs> = {};

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
  ascension = (year = this.#year, ascensionOnSunday = this.#config.ascensionOnSunday): Dayjs => {
    const id = year + ascensionOnSunday.toString();
    if (this.#ascension[id]) return this.#ascension[id];
    return (this.#ascension[id] = ascensionOnSunday
      ? // If specified, move Ascension to Sunday
        this.easterSunday(year).add(42, 'day')
      : // else by default, Ascension on Thursday
        this.easterSunday(year).add(39, 'day'));
  };
  #ascension: Record<string, Dayjs> = {};

  /**
   * Get the date of the Solemnity of Trinity Sunday
   * (occurs 56 days after Easter)
   * @param year Gregorian year
   */
  trinitySunday = (year = this.#year): Dayjs => {
    if (this.#trinitySunday[year]) return this.#trinitySunday[year];
    return (this.#trinitySunday[year] = this.easterSunday(year).add(56, 'day'));
  };
  #trinitySunday: Record<string, Dayjs> = {};

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
  corpusChristi = (
    year = this.#year,
    corpusChristiOnSunday = this.#config.corpusChristiOnSunday,
  ): Dayjs => {
    const id = year + corpusChristiOnSunday.toString();
    if (this.#corpusChristi[id]) return this.#corpusChristi[id];
    return (this.#corpusChristi[id] = corpusChristiOnSunday
      ? // By default Corpus Christi on Sunday
        this.easterSunday(year).add(63, 'day')
      : // If specified, move Corpus Christi to Thursday
        this.easterSunday(year).add(60, 'day'));
  };
  #corpusChristi: Record<string, Dayjs> = {};

  /**
   * Get the date of the Solemnity of the Sacred Heart of Jesus
   * (occurs 68 days after Easter)
   * @param year Gregorian year
   */
  mostSacredHeartOfJesus = (year = this.#year): Dayjs => {
    if (this.#mostSacredHeartOfJesus[year]) return this.#mostSacredHeartOfJesus[year];
    return (this.#mostSacredHeartOfJesus[year] = this.easterSunday(year).add(68, 'day'));
  };
  #mostSacredHeartOfJesus: Record<string, Dayjs> = {};

  /**
   * Get the date of the celebration of the Immaculate Heart of Mary
   * (occurs 69 days after Easter)
   * @param year Gregorian year
   */
  immaculateHeartOfMary = (year = this.#year): Dayjs => {
    if (this.#immaculateHeartOfMary[year]) return this.#immaculateHeartOfMary[year];
    return (this.#immaculateHeartOfMary[year] = this.easterSunday(year).add(69, 'day'));
  };
  #immaculateHeartOfMary: Record<string, Dayjs> = {};

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
  holyFamily = (year = this.#isLiturgicalYear ? this.#year - 1 : this.#year): Dayjs => {
    if (this.#holyFamily[year]) return this.#holyFamily[year];
    return (this.#holyFamily[year] =
      this.christmas(year).day() === 0
        ? // If Christmas is on Sunday, then Holy Family is on the 30th Dec
          dayjs.utc(`${year}-12-30`)
        : // Holy Family is 1 week after Christmas when Christmas is on a weekday
          this.christmas(year).add(1, 'week').startOf('week'));
  };
  #holyFamily: Record<string, Dayjs> = {};

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
  baptismOfTheLord = (
    year = this.#year,
    epiphanyOnSunday = this.#config.epiphanyOnSunday,
  ): Dayjs => {
    const id = year + epiphanyOnSunday.toString();
    if (this.#baptismOfTheLord[id]) return this.#baptismOfTheLord[id];

    const epiphany = this.epiphany(year, epiphanyOnSunday);

    // If Epiphany is celebrated on Jan. 6
    // the Baptism of the Lord occurs on the Sunday following Jan. 6.
    if (epiphany.date() === 6) {
      return epiphany.add(1, 'week').startOf('week');
    }
    // If Epiphany occurs on Sunday Jan. 7 or Sunday Jan. 8,
    //  then the Baptism of the Lord is the next day (Monday)
    if ((epiphany.day() === 0 && epiphany.date() === 7) || epiphany.date() === 8) {
      return epiphany.add(1, 'day');
    }
    // If Epiphany occurs before Jan. 6, the Sunday
    // following Epiphany is the Baptism of the Lord.
    return (this.#baptismOfTheLord[id] = epiphany.add(1, 'week').startOf('week'));
  };
  #baptismOfTheLord: Record<string, Dayjs> = {};

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
  presentationOfTheLord = (year = this.#year): Dayjs => {
    if (this.#presentationOfTheLord[year]) return this.#presentationOfTheLord[year];
    return (this.#presentationOfTheLord[year] = dayjs.utc(`${year}-2-2`));
  };
  #presentationOfTheLord: Record<string, Dayjs> = {};

  /**
   * Get the date for the Transfiguration of our Lord.
   * @param year Gregorian year
   */
  transfiguration = (year = this.#year): Dayjs => {
    if (this.#transfiguration[year]) return this.#transfiguration[year];
    return (this.#transfiguration[year] = dayjs.utc(`${year}-8-6`));
  };
  #transfiguration: Record<string, Dayjs> = {};

  /**
   * Get the date for The Exultation of The Holy Cross.
   * @param year Gregorian year
   */
  exaltationOfTheHolyCross = (year = this.#year): Dayjs => {
    if (this.#exaltationOfTheHolyCross[year]) return this.#exaltationOfTheHolyCross[year];
    return (this.#exaltationOfTheHolyCross[year] = dayjs.utc(`${year}-9-14`));
  };
  #exaltationOfTheHolyCross: Record<string, Dayjs> = {};
}
