import {
  addDays,
  calculateEasterDate,
  CalendarScope,
  getUtcDate,
  isSameDate,
  OneOfDatesFn,
  rangeOfDays,
  RomcalConfig,
  RomcalConfigInput,
  sanitizeConfig,
  startOfWeek,
  subtractsDays,
  YearProp,
} from '@romcal/shared';
import type { UnionToIntersection } from 'type-fest';

export type AllDatesFn = UnionToIntersection<OneOfDatesFn>;
type IProperOfTimeDates = {
  [K in keyof AllDatesFn]: (arg: Parameters<(arg: AllDatesFn[K]) => void>[0]) => Date | null;
};

/**
 * Calculate the date of a single day of the liturgical year.
 */
class ProperOfTimeDates implements IProperOfTimeDates {
  readonly #config: RomcalConfig;
  readonly #year: number;
  readonly #isLiturgicalYear: boolean;

  constructor(config?: RomcalConfigInput) {
    const c = sanitizeConfig(config);
    this.#config = c;
    this.#year = c.year;
    this.#isLiturgicalYear = c.scope === CalendarScope.Liturgical;
  }

  /**
   * Get the date of the first Sunday of Advent.
   */
  firstSundayOfAdvent = (arg?: AllDatesFn['firstSundayOfAdvent']): Date => {
    const { year = this.#isLiturgicalYear ? this.#year - 1 : this.#year } = arg || {};
    if (this.#__firstSundayOfAdvent[year]) return this.#__firstSundayOfAdvent[year];
    return (this.#__firstSundayOfAdvent[year] = ProperOfTimeDates.firstSundayOfAdvent({ year }));
  };
  #__firstSundayOfAdvent: Record<string, Date> = {};

  /**
   * Get the date of the first Sunday of Advent.
   */
  static firstSundayOfAdvent = ({ year }: YearProp): Date => {
    switch (ProperOfTimeDates.nativityOfTheLord(year).getUTCDay()) {
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
   * Get a date of an unprivileged weekday of Advent.
   *
   * The unprivileged weekdays of Advent are the weekdays from Monday to Friday during the first
   * three weeks of Advent (until December 16th). These weekdays are not associated with any
   * particular liturgical celebration or feast day, and the Mass and readings used during these
   * days are the standard ones for the current liturgical season. However, these weekdays still
   * retain the penitential character of Advent and serve as an opportunity for Catholics to prepare
   * themselves spiritually for the celebration of Christmas.
   */
  unprivilegedWeekdayOfAdvent = (arg: AllDatesFn['unprivilegedWeekdayOfAdvent']): Date | null => {
    const {
      dayOfWeek,
      weekOfSeason,
      year = this.#isLiturgicalYear ? this.#year - 1 : this.#year,
    } = arg || {};
    const id = `${year}_${weekOfSeason}_${dayOfWeek}`;
    if (this.#__unprivilegedWeekdayOfAdvent[id] !== undefined) {
      return this.#__unprivilegedWeekdayOfAdvent[id];
    }
    if (dayOfWeek < 1 || dayOfWeek > 6 || weekOfSeason < 1 || weekOfSeason > 4)
      return (this.#__unprivilegedWeekdayOfAdvent[id] = null);
    let date: Date | null = addDays(
      this.firstSundayOfAdvent({ year }),
      (weekOfSeason - 1) * 7 + dayOfWeek,
    );
    if (date.getUTCDate() >= 17 && date.getUTCMonth() === 11 && date.getUTCDay() !== 0) date = null;
    return (this.#__unprivilegedWeekdayOfAdvent[id] = date);
  };
  #__unprivilegedWeekdayOfAdvent: Record<string, Date | null> = {};

  /**
   * Get a date of a privileged weekday of Advent.
   *
   * The privileged weekdays of Advent are the weekdays from December 17 to December 24, inclusive.
   * These days are also known as the "O Antiphons" because of the Antiphons used in the Liturgy of
   * the Hours during this time. Each of the seven Antiphons begins with the vocative "O" followed
   * by a different title for the Messiah, such as "O Wisdom", "O Key of David", and "O Emmanuel".
   * The O Antiphons are an ancient tradition that dates back to at least the 8th century and are
   * still used in many Christian denominations today.
   */
  privilegedWeekdayOfAdvent = (arg: AllDatesFn['privilegedWeekdayOfAdvent']): Date | null => {
    const { dayOfMonth, year = this.#isLiturgicalYear ? this.#year - 1 : this.#year } = arg || {};
    const id = `${year}_${dayOfMonth}`;
    if (this.#__privilegedWeekdayOfAdvent[id] !== undefined) {
      return this.#__privilegedWeekdayOfAdvent[id];
    }
    if (dayOfMonth < 17 || dayOfMonth > 24) return (this.#__privilegedWeekdayOfAdvent[id] = null);
    let date: Date | null = getUtcDate(year, 12, dayOfMonth);
    if (date.getUTCDay() === 0) date = null;
    return (this.#__privilegedWeekdayOfAdvent[id] = date);
  };
  #__privilegedWeekdayOfAdvent: Record<string, Date | null> = {};

  /**
   * Get a date of a Sunday of Advent.
   *
   * There are four Sundays of Advent, which are:
   * - First Sunday of Advent
   * - Second Sunday of Advent
   * - Third Sunday of Advent (also known as Gaudete Sunday)
   * - Fourth Sunday of Advent
   */
  sundayOfAdvent = (arg: AllDatesFn['sundayOfAdvent']): Date | null => {
    const { weekOfSeason, year = this.#isLiturgicalYear ? this.#year - 1 : this.#year } = arg || {};
    const id = `${year}_${weekOfSeason}`;
    if (this.#__sundayOfAdvent[id] !== undefined) return this.#__sundayOfAdvent[id];
    if (weekOfSeason < 1 || weekOfSeason > 4) return (this.#__sundayOfAdvent[id] = null);
    return (this.#__sundayOfAdvent[id] = addDays(
      this.firstSundayOfAdvent({ year }),
      7 * (weekOfSeason - 1),
    ));
  };
  #__sundayOfAdvent: Record<string, Date | null> = {};

  /**
   * Get the date of the Solemnity of the Nativity of the Lord (Christmas).
   */
  nativityOfTheLord = (arg?: AllDatesFn['nativityOfTheLord']): Date => {
    const { year = this.#isLiturgicalYear ? this.#year - 1 : this.#year } = arg || {};
    if (this.#__nativityOfTheLord[year]) return this.#__nativityOfTheLord[year];
    return (this.#__nativityOfTheLord[year] = ProperOfTimeDates.nativityOfTheLord(year));
  };
  #__nativityOfTheLord: Record<string, Date> = {};

  /**
   * Get the date of the Solemnity of the Nativity of the Lord.
   */
  static nativityOfTheLord = (year: number): Date => {
    return getUtcDate(year, 12, 25);
  };

  /**
   * Get the date of the feast of the Holy Family.
   */
  holyFamily = (arg?: AllDatesFn['holyFamily']): Date => {
    const { year = this.#isLiturgicalYear ? this.#year - 1 : this.#year } = arg || {};
    if (this.#__holyFamily[year]) return this.#__holyFamily[year];
    return (this.#__holyFamily[year] =
      this.nativityOfTheLord({ year }).getUTCDay() === 0
        ? // If Christmas is on Sunday, then Holy Family occurs the December 30th.
          getUtcDate(year, 12, 30)
        : // Otherwise, Holy Family occur the Sunday during the Christmas octave.
          startOfWeek(addDays(this.nativityOfTheLord({ year }), 7)));
  };
  #__holyFamily: Record<string, Date> = {};

  /**
   * Get a date of a weekday within the Christmas octave (from December 26 to December 31),
   * excluding the first day of the Christmas octave (which is Christmas), the last day of the
   * Christmas octave (which is Solemnity of Mary, Mother of God), and the feast of the Holy Family.
   */
  weekdayWithinOctaveOfChristmas = (
    arg: AllDatesFn['weekdayWithinOctaveOfChristmas'],
  ): Date | null => {
    const { dayOfOctave, year = this.#isLiturgicalYear ? this.#year - 1 : this.#year } = arg || {};
    const id = `${year}_${dayOfOctave}`;
    if (this.#__weekdayWithinOctaveOfChristmas[id] !== undefined) {
      return this.#__weekdayWithinOctaveOfChristmas[id];
    }
    if (dayOfOctave < 2 || dayOfOctave > 7)
      return (this.#__weekdayWithinOctaveOfChristmas[id] = null);
    let date: Date | null = addDays(this.nativityOfTheLord({ year }), dayOfOctave - 1);
    if (isSameDate(date, this.holyFamily({ year }))) date = null;
    return (this.#__weekdayWithinOctaveOfChristmas[id] = date);
  };
  #__weekdayWithinOctaveOfChristmas: Record<string, Date | null> = {};

  /**
   * Get the date of the Solemnity of Mary, Mother of God.
   */
  maryMotherOfGod = (arg?: AllDatesFn['maryMotherOfGod']): Date => {
    const { year = this.#year } = arg || {};
    if (this.#__maryMotherOfGod[year]) return this.#__maryMotherOfGod[year];
    return (this.#__maryMotherOfGod[year] = getUtcDate(year, 1, 1));
  };
  #__maryMotherOfGod: Record<string, Date> = {};

  /**
   * Get the date of the second Sunday after the Octave of the Nativity of the Lord.
   * which is not the Epiphany or the Baptism of the Lord.
   * This can occur only when Epiphany is celebrated the 6 January.
   */
  secondSundayAfterChristmas = (arg?: AllDatesFn['secondSundayAfterChristmas']): Date | null => {
    const { epiphanyOnSunday = this.#config.epiphanyOnSunday, year = this.#year } = arg || {};
    const id = year + epiphanyOnSunday.toString();
    if (this.#__secondSundayAfterChristmas[id] !== undefined) {
      return this.#__secondSundayAfterChristmas[id];
    }
    if (epiphanyOnSunday) return (this.#__secondSundayAfterChristmas[id] = null);
    const date =
      this.#__allDatesBeforeEpiphany(year, epiphanyOnSunday).find((d) => d.getUTCDay() === 0) ??
      this.#__allDatesAfterEpiphany(year, epiphanyOnSunday).find((d) => d.getUTCDay() === 0);
    return (this.#__secondSundayAfterChristmas[id] = date ?? null);
  };
  #__secondSundayAfterChristmas: Record<string, Date | null> = {};

  /**
   * Get a date of a weekday from January 2nd and the day before the Solemnity of the Epiphany of
   * the Lord.
   */
  weekdayBeforeEpiphany = (arg: AllDatesFn['weekdayBeforeEpiphany']): Date | null => {
    const {
      dayOfMonth,
      year = this.#year,
      epiphanyOnSunday = this.#config.epiphanyOnSunday,
    } = arg || {};
    const id = `${dayOfMonth}_${year}_${epiphanyOnSunday.toString()}`;
    if (this.#__weekdayBeforeEpiphany[id] !== undefined) return this.#__weekdayBeforeEpiphany[id];
    if (dayOfMonth < 2 || dayOfMonth > 8) return (this.#__weekdayBeforeEpiphany[id] = null);
    return (this.#__weekdayBeforeEpiphany[id] =
      this.#__allDatesBeforeEpiphany(year, epiphanyOnSunday).find(
        (d) => d.getUTCDate() === dayOfMonth,
      ) ?? null);
  };
  #__weekdayBeforeEpiphany: Record<string, Date | null> = {};

  /**
   * Get the date of the Solemnity of the Epiphany of the Lord.
   */
  epiphany = (arg?: AllDatesFn['epiphany']): Date => {
    const { year = this.#year, epiphanyOnSunday = this.#config.epiphanyOnSunday } = arg || {};
    const id = year + epiphanyOnSunday.toString();
    if (this.#__epiphany[id]) return this.#__epiphany[id];

    // Get the first day of the year.
    const firstDay = getUtcDate(year, 1, 1);
    let date = getUtcDate(year, 1, 6);

    if (epiphanyOnSunday) {
      switch (firstDay.getUTCDay()) {
        // First day of year on Saturday => Epiphany on the day after.
        case 6:
          date = addDays(firstDay, 1);
          break;
        // First day of year on Sunday => Epiphany on Sunday following.
        case 0:
          date = addDays(firstDay, 7);
          break;
        // First day of year on weekday (Monday to Friday) => Epiphany on Sunday following.
        default:
          date = startOfWeek(addDays(firstDay, 7));
          break;
      }
    }
    return (this.#__epiphany[id] = date);
  };
  #__epiphany: Record<string, Date> = {};

  /**
   * Get a date of a weekday from the day after the Solemnity of the Epiphany of the Lord,
   * to the day before the Solemnity of the Baptism of the Lord.
   */
  weekdayAfterEpiphany = (arg: AllDatesFn['weekdayAfterEpiphany']): Date | null => {
    const {
      dayOfWeek,
      year = this.#year,
      epiphanyOnSunday = this.#config.epiphanyOnSunday,
    } = arg || {};
    const id = `${dayOfWeek}_${year}_${epiphanyOnSunday.toString()}`;
    if (this.#__weekdayAfterEpiphany[id] !== undefined) return this.#__weekdayAfterEpiphany[id];
    if (dayOfWeek < 1 || dayOfWeek > 6) return (this.#__weekdayAfterEpiphany[id] = null);
    return (this.#__weekdayAfterEpiphany[id] =
      this.#__allDatesAfterEpiphany(year, epiphanyOnSunday).find(
        (d) => d.getUTCDay() === dayOfWeek,
      ) ?? null);
  };
  #__weekdayAfterEpiphany: Record<string, Date | null> = {};

  /**
   * Get the date of the Feast of the Baptism of the Lord.
   */
  baptismOfTheLord = (arg?: AllDatesFn['baptismOfTheLord']): Date => {
    const { year = this.#year, epiphanyOnSunday = this.#config.epiphanyOnSunday } = arg || {};
    const id = year + epiphanyOnSunday.toString();
    if (this.#__baptismOfTheLord[id]) return this.#__baptismOfTheLord[id];
    const epiphany = this.epiphany({ year, epiphanyOnSunday });

    // Epiphany on January 6 => Baptism of the Lord on the next Sunday.
    if (epiphany.getUTCDate() === 6) {
      return (this.#__baptismOfTheLord[id] = startOfWeek(addDays(epiphany, 7)));
    }
    // Epiphany on Sunday January 7 => Baptism of the Lord on Monday January 8.
    // Or Epiphany on January 8 => Baptism of the Lord on Monday January 9.
    if (
      (epiphany.getUTCDay() === 0 && epiphany.getUTCDate() === 7) ||
      epiphany.getUTCDate() === 8
    ) {
      return (this.#__baptismOfTheLord[id] = addDays(epiphany, 1));
    }
    // Epiphany before January 6 => Baptism of the Lord on the Sunday following Epiphany.
    return (this.#__baptismOfTheLord[id] = startOfWeek(addDays(epiphany, 7)));
  };
  #__baptismOfTheLord: Record<string, Date> = {};

  /**
   * Get the date of Ash Wednesday.
   */
  ashWednesday = (arg?: AllDatesFn['ashWednesday']): Date => {
    const { year = this.#year } = arg || {};
    if (this.#__ashWednesday[year]) return this.#__ashWednesday[year];
    return (this.#__ashWednesday[year] = subtractsDays(this.easterSunday({ year }), 46));
  };
  #__ashWednesday: Record<string, Date> = {};

  /**
   * Get the date of Palm Sunday.
   */
  palmSunday = (arg?: AllDatesFn['palmSunday']): Date => {
    const { year = this.#year } = arg || {};
    if (this.#__palmSunday[year]) return this.#__palmSunday[year];
    return (this.#__palmSunday[year] = subtractsDays(this.easterSunday({ year }), 7));
  };
  #__palmSunday: Record<string, Date> = {};

  /**
   * Get the date of Holy Thursday.
   */
  holyThursday = (arg?: AllDatesFn['holyThursday']): Date => {
    const { year = this.#year } = arg || {};
    if (this.#__holyThursday[year]) return this.#__holyThursday[year];
    return (this.#__holyThursday[year] = subtractsDays(this.easterSunday({ year }), 3));
  };
  #__holyThursday: Record<string, Date> = {};

  /**
   * Get the date of Good Friday (Holy Friday).
   */
  goodFriday = (arg?: AllDatesFn['goodFriday']): Date => {
    const { year = this.#year } = arg || {};
    if (this.#__goodFriday[year]) return this.#__goodFriday[year];
    return (this.#__goodFriday[year] = subtractsDays(this.easterSunday({ year }), 2));
  };
  #__goodFriday: Record<string, Date> = {};

  /**
   * Get the date of Holy Saturday.
   */
  holySaturday = (arg?: AllDatesFn['holySaturday']): Date => {
    const { year = this.#year } = arg || {};
    if (this.#__holySaturday[year]) return this.#__holySaturday[year];
    return (this.#__holySaturday[year] = subtractsDays(this.easterSunday({ year }), 1));
  };
  #__holySaturday: Record<string, Date> = {};

  /**
   * Get the date of Easter Sunday.
   */
  easterSunday = (arg?: AllDatesFn['easterSunday']): Date => {
    const { year = this.#year } = arg || {};
    if (this.#__easter[year]) return this.#__easter[year];
    const { month, day } = calculateEasterDate(year);
    return (this.#__easter[year] = getUtcDate(year, month, day));
  };
  #__easter: Record<string, Date> = {};

  /**
   * Get a date of a weekday or a Sunday of Easter Time.
   */
  weekdayOrSundayOfEasterTime = (arg: AllDatesFn['weekdayOrSundayOfEasterTime']): Date | null => {
    const {
      dayOfWeek,
      weekOfSeason,
      ascensionOnSunday = this.#config.ascensionOnSunday,
      year = this.#year,
    } = arg || {};
    const id = `${year}_${ascensionOnSunday}_${weekOfSeason}_${dayOfWeek}`;
    if (this.#__weekdayOrSundayOfEasterTime[id] !== undefined) {
      return this.#__weekdayOrSundayOfEasterTime[id];
    }
    if (weekOfSeason < 1 || weekOfSeason > 7 || dayOfWeek < 0 || dayOfWeek > 6) {
      return (this.#__weekdayOrSundayOfEasterTime[id] = null);
    }
    const easterSunday = this.easterSunday({ year });
    const date = addDays(easterSunday, (weekOfSeason - 1) * 7 + dayOfWeek);
    const ascension = this.ascension({ year, ascensionOnSunday });
    return (this.#__weekdayOrSundayOfEasterTime[id] =
      isSameDate(ascension, date) || isSameDate(easterSunday, date) ? null : date);
  };
  #__weekdayOrSundayOfEasterTime: Record<string, Date | null> = {};

  /**
   * Get the date of Divine Mercy (second Sunday of Easter).
   */
  divineMercySunday = (arg?: AllDatesFn['divineMercySunday']): Date => {
    const { year = this.#year } = arg || {};
    if (this.#__divineMercySunday[year]) return this.#__divineMercySunday[year];
    return (this.#__divineMercySunday[year] = addDays(this.easterSunday({ year }), 7));
  };
  #__divineMercySunday: Record<string, Date> = {};

  /**
   * Get the date of the Solemnity of the Ascension of the Lord.
   */
  ascension = (arg?: AllDatesFn['ascension']): Date => {
    const { year = this.#year, ascensionOnSunday = this.#config.ascensionOnSunday } = arg || {};
    const id = year + ascensionOnSunday.toString();
    if (this.#__ascension[id]) return this.#__ascension[id];
    return (this.#__ascension[id] = ascensionOnSunday
      ? // If specified, move Ascension to the following Sunday
        addDays(this.easterSunday({ year }), 42)
      : // else by default, Ascension on Thursday
        addDays(this.easterSunday({ year }), 39));
  };
  #__ascension: Record<string, Date> = {};

  /**
   * Get the date of the Solemnity of Pentecost Sunday.
   */
  pentecostSunday = (arg?: AllDatesFn['pentecostSunday']): Date => {
    const { year = this.#year } = arg || {};
    if (this.#__pentecostSunday[year]) return this.#__pentecostSunday[year];
    return (this.#__pentecostSunday[year] = addDays(this.easterSunday({ year }), 49));
  };
  #__pentecostSunday: Record<string, Date> = {};

  /**
   * Get a date of a weekday or a Sunday of Ordinary Time.
   */
  weekdayOrSundayOfOrdinaryTime = (
    arg: AllDatesFn['weekdayOrSundayOfOrdinaryTime'],
  ): Date | null => {
    const {
      dayOfWeek,
      weekOfSeason,
      epiphanyOnSunday = this.#config.epiphanyOnSunday,
      corpusChristiOnSunday = this.#config.corpusChristiOnSunday,
      year = this.#year,
    } = arg || {};
    const id = year + epiphanyOnSunday.toString() + corpusChristiOnSunday.toString();

    if (dayOfWeek < 0 || dayOfWeek > 6 || weekOfSeason < 1 || weekOfSeason > 34) {
      return null;
    }

    if (this.#__dateOfOrdinaryTime[id] === undefined) {
      const early = this.#__allDatesOfEarlyOrdinaryTime(year, epiphanyOnSunday);
      const late = this.#__allDatesOfLateOrdinaryTime(year);
      const lateOrdinaryStartWeekCount = Math.floor(35 - (late.length + 1) / 7);
      const baptismOfTheLordIsMonday =
        this.baptismOfTheLord({ year, epiphanyOnSunday }).getUTCDay() === 1;

      const trinitySunday = this.trinitySunday({ year }).getTime();
      const corpusChristi = this.corpusChristi({ year, corpusChristiOnSunday }).getTime();
      const mostSacredHeartOfJesus = this.mostSacredHeartOfJesus({ year }).getTime();
      const christTheKingSunday = this.christTheKingSunday({ year }).getTime();

      const groupBy = (
        dates: Date[],
        isEarlyOrdinaryTime: boolean,
      ): Record<string, Record<string, Date | null>> =>
        dates.reduce((result: Record<string, Record<string, Date | null>>, item, idx) => {
          let weekNumber = isEarlyOrdinaryTime
            ? // Early Ordinary Time
              item.getUTCDay() === 0
              ? Math.floor(idx / 7) + 2
              : Math.floor(idx / 7) + 1
            : // Late Ordinary Time
            item.getUTCDay() === 0
            ? lateOrdinaryStartWeekCount + Math.floor(idx / 7) + 1
            : lateOrdinaryStartWeekCount + Math.floor(idx / 7);

          // When the Baptism of the Lord is observed on Monday, Ordinary Time starts on Tuesday.
          // So in this case, the Monday (from the group of 7 days computed above) takes place in the next week.
          if (isEarlyOrdinaryTime && baptismOfTheLordIsMonday && item.getUTCDay() === 1)
            weekNumber++;

          const dateTime = item.getTime();
          const date =
            (baptismOfTheLordIsMonday && weekNumber === 1 && item.getUTCDay() === 1) ||
            dateTime === trinitySunday ||
            dateTime === corpusChristi ||
            dateTime === mostSacredHeartOfJesus ||
            dateTime === christTheKingSunday
              ? null
              : item;

          return {
            ...result,
            [weekNumber]: { ...(result[weekNumber] || []), [item.getUTCDay()]: date },
          };
        }, {});

      this.#__dateOfOrdinaryTime[id] = {
        ...groupBy(early, true),
        ...groupBy(late, false),
      };
    }

    return this.#__dateOfOrdinaryTime[id][weekOfSeason]?.[dayOfWeek] ?? null;
  };
  #__dateOfOrdinaryTime: Record<string, Record<string, Record<string, Date | null>>> = {};

  /**
   * Get the date of the Solemnity of the Most Holy Trinity.
   */
  trinitySunday = (arg?: AllDatesFn['trinitySunday']): Date => {
    const { year = this.#year } = arg || {};
    if (this.#__trinitySunday[year]) return this.#__trinitySunday[year];
    return (this.#__trinitySunday[year] = addDays(this.easterSunday({ year }), 56));
  };
  #__trinitySunday: Record<string, Date> = {};

  /**
   * Get the date of the Solemnity of the Most Holy Body and Blood of Christ (Corpus Christi).
   */
  corpusChristi = (arg?: AllDatesFn['corpusChristi']): Date => {
    const { year = this.#year, corpusChristiOnSunday = this.#config.corpusChristiOnSunday } =
      arg || {};
    const id = year + corpusChristiOnSunday.toString();
    if (this.#__corpusChristi[id]) return this.#__corpusChristi[id];
    return (this.#__corpusChristi[id] = corpusChristiOnSunday
      ? // By default Corpus Christi on Sunday
        addDays(this.easterSunday({ year }), 63)
      : // If specified, move Corpus Christi to Thursday
        addDays(this.easterSunday({ year }), 60));
  };
  #__corpusChristi: Record<string, Date> = {};

  /**
   * Get the date of the Solemnity of the Most Sacred Heart of Jesus.
   */
  mostSacredHeartOfJesus = (arg?: AllDatesFn['mostSacredHeartOfJesus']): Date => {
    const { year = this.#year } = arg || {};
    if (this.#__mostSacredHeartOfJesus[year]) return this.#__mostSacredHeartOfJesus[year];
    return (this.#__mostSacredHeartOfJesus[year] = addDays(this.easterSunday({ year }), 68));
  };
  #__mostSacredHeartOfJesus: Record<string, Date> = {};

  /**
   * Get the date of the Solemnity of Our Lord Jesus Christ, King of the Universe (Christ the King).
   */
  christTheKingSunday = (arg?: AllDatesFn['christTheKingSunday']): Date => {
    const { year = this.#year } = arg || {};
    if (this.#__christTheKingSunday[year]) return this.#__christTheKingSunday[year];
    return (this.#__christTheKingSunday[year] = subtractsDays(
      this.firstSundayOfAdvent({ year }),
      7,
    ));
  };
  #__christTheKingSunday: Record<string, Date> = {};

  /**
   * Get all dates before from January 2 to the day before Epiphany.
   * @private
   */
  #__allDatesBeforeEpiphany = (
    year = this.#year,
    epiphanyOnSunday = this.#config.epiphanyOnSunday,
  ): Date[] => {
    const id = year + epiphanyOnSunday.toString();
    if (this.#__allDatesBeforeEpiphanyCache[id]) return this.#__allDatesBeforeEpiphanyCache[id];
    const start = addDays(this.maryMotherOfGod({ year }), 1);
    const epiphany = this.epiphany({ year, epiphanyOnSunday });

    // If there are no days between Mary, Mother of God and Epiphany
    if (isSameDate(start, epiphany)) return (this.#__allDatesBeforeEpiphanyCache[id] = []);

    const end = subtractsDays(epiphany, 1);
    return (this.#__allDatesBeforeEpiphanyCache[id] = rangeOfDays(start, end));
  };
  #__allDatesBeforeEpiphanyCache: Record<string, Date[]> = {};

  /**
   * Get all dates after Epiphany to the day before the Baptism of the Lord.
   * @private
   */
  #__allDatesAfterEpiphany = (
    year = this.#year,
    epiphanyOnSunday = this.#config.epiphanyOnSunday,
  ): Date[] => {
    const id = year + epiphanyOnSunday.toString();
    if (this.#__allDatesAfterEpiphanyCache[id]) return this.#__allDatesAfterEpiphanyCache[id];
    const start = addDays(this.epiphany({ year, epiphanyOnSunday }), 1);
    const baptismOfTheLord = this.baptismOfTheLord({ year, epiphanyOnSunday });

    // If there are no days between Epiphany and Baptism of the Lord
    if (isSameDate(start, baptismOfTheLord)) return (this.#__allDatesAfterEpiphanyCache[id] = []);

    const end = subtractsDays(baptismOfTheLord, 1);
    return (this.#__allDatesAfterEpiphanyCache[id] = rangeOfDays(start, end));
  };
  #__allDatesAfterEpiphanyCache: Record<string, Date[]> = {};

  /**
   * Get all dates of Ordinary Time after the Baptism of the Lord to the day before Ash Wednesday.
   * @private
   */
  #__allDatesOfEarlyOrdinaryTime = (
    year = this.#year,
    epiphanyOnSunday = this.#config.epiphanyOnSunday,
  ): Date[] => {
    const id = year + epiphanyOnSunday.toString();
    if (this.#__allDatesOfEarlyOrdinaryTimeCache[id]) {
      return this.#__allDatesOfEarlyOrdinaryTimeCache[id];
    }
    const start = addDays(this.baptismOfTheLord({ year, epiphanyOnSunday }), 1);
    const end = subtractsDays(this.ashWednesday({ year }), 1);
    return (this.#__allDatesOfEarlyOrdinaryTimeCache[id] = rangeOfDays(start, end));
  };
  #__allDatesOfEarlyOrdinaryTimeCache: Record<string, Date[]> = {};

  /**
   * Get all the dates of Ordinary Time after Pentecost to the day before the First Sunday of
   * Advent.
   * @private
   */
  #__allDatesOfLateOrdinaryTime = (year = this.#year): Date[] => {
    if (this.#__allDatesOfLateOrdinaryTimeCache[year]) {
      return this.#__allDatesOfLateOrdinaryTimeCache[year];
    }
    const start = addDays(this.pentecostSunday({ year }), 1);
    const end = subtractsDays(this.firstSundayOfAdvent({ year }), 1);
    return (this.#__allDatesOfLateOrdinaryTimeCache[year] = rangeOfDays(start, end));
  };
  #__allDatesOfLateOrdinaryTimeCache: Record<string, Date[]> = {};
}

export const DATES_FN = Object.getOwnPropertyNames(new ProperOfTimeDates()) as (keyof AllDatesFn)[];

export const isDateFn = (unknownName: unknown): unknownName is keyof AllDatesFn =>
  typeof unknownName === 'string' && DATES_FN.includes(unknownName as keyof ProperOfTimeDates);

export { ProperOfTimeDates };
