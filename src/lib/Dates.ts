import { eachDayOfWeekInRange, rangeContainsDate, rangeOfDays } from '@romcal/utils/dates/dates';
import { isNil } from '@romcal/utils/type-guards/type-guards';

import dayjs, { Dayjs } from 'dayjs';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import utc from 'dayjs/plugin/utc';
import { DayOfWeek } from '@romcal/constants/day-of-weeks/day-of-week.enum';

dayjs.extend(utc);
dayjs.extend(dayOfYear);

export class Dates {
  /**
   * This algorithm is based on the algorithm of Oudin (1940) and quoted in
   * "Explanatory Supplement to the Astronomical Almanac", P. Kenneth
   * Seidelmann, editor.
   *
   * @param year The year on which to check when Easter falls (integer)
   */
  private static computeEasterDate = (year: number): Record<string, number> => {
    const Y = year;
    const C = Math.floor(Y / 100);
    const N = Y - 19 * Math.floor(Y / 19);
    const K = Math.floor((C - 17) / 25);
    let I = C - Math.floor(C / 4) - Math.floor((C - K) / 3) + 19 * N + 15;

    I = I - 30 * Math.floor(I / 30);
    I = I - Math.floor(I / 28) * (1 - Math.floor(I / 28) * Math.floor(29 / (I + 1)) * Math.floor((21 - N) / 11));

    let J = Y + Math.floor(Y / 4) + I + 2 - C + Math.floor(C / 4);
    J = J - 7 * Math.floor(J / 7);

    const L = I - J;
    const M = 3 + Math.floor((L + 40) / 44);
    const D = L + 28 - 31 * Math.floor(M / 4);

    return { year: Y, month: M, day: D };
  };

  //==================================================================================
  // Advent
  //==================================================================================

  /**
   * Get all the dates occurring in the season of Advent
   * The length of Advent depends upon the day of the week on which Christmas occurs
   *
   * @param year The year to use for the calculation
   */
  static datesOfAdvent = (year: number): Array<Dayjs> => {
    const start = Dates.firstSundayOfAdvent(year);
    const end = Dates.christmas(year);
    return rangeOfDays(start, end, { exclude: [end] });
  };

  /**
   * Get the all 4 sundays of Advent
   *
   * @param year The year to use for the calculation
   */
  static sundaysOfAdvent = (year: number): Array<Dayjs> => {
    const start = Dates.firstSundayOfAdvent(year);
    const end = Dates.christmas(year);
    const range = rangeOfDays(start, end, { exclude: [end] });
    return eachDayOfWeekInRange(range, DayOfWeek.SUNDAY);
  };

  /**
   * Get the date of the first Sunday of Advent
   * (the start of Advent depends upon the day of the week on which Christmas occurs)
   *
   * @param year The year to use for the calculation
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

  //==================================================================================
  // Christmastide & Epiphany
  //==================================================================================

  /**
   * Get the date of Christmas
   * (in the Roman Rite, Christmas always falls on December 25)
   *
   * @param year The year to use for the calculation
   */
  static christmas = (year: number): Dayjs => dayjs.utc(`${year}-12-25`);

  /**
   * Get all the dates occurring in the octave of Christmas
   * (from Christmas to Mary Mother of God, inclusive)
   *
   * @param year The year to use for the calculation
   */
  static octaveOfChristmas = (year: number): Array<Dayjs> => {
    return rangeOfDays(Dates.christmas(year), Dates.maryMotherOfGod(year + 1));
  };

  /**
   * Get all the dates occurring in the season of Christmastide.
   *
   * *In different Churches, the Christmas Season might end on Jan. 6
   * (the traditional date of the Feast of the Epiphany), or might last
   * until the Feast of the Baptism of the Lord (usually the Sunday after
   * Epiphany), or might even last all the way to Feb. 2 (the Feast of the
   * Presentation of the Lord, 40 days after Dec. 25) (Candlemass).*
   *
   * @param year The year to use for the calculation
   * @param epiphanyOnSunday If false, Epiphany will be fixed to Jan 6 (defaults to true)
   */
  static datesOfChristmas = (year: number, epiphanyOnSunday = true): Array<Dayjs> => {
    const start = Dates.christmas(year);
    const end = Dates.baptismOfTheLord(year + 1, epiphanyOnSunday);

    return rangeOfDays(start, end);
  };

  /**
   * Get all the date before Epiphany (and from January 2)
   *
   * @param year The year to use for the calculation
   * @param epiphanyOnSunday If false, Epiphany will be fixed to Jan 6 (defaults to true)
   */
  static datesBeforeEpiphany = (year: number, epiphanyOnSunday = true): Array<Dayjs> => {
    const start = Dates.maryMotherOfGod(year);
    const end = Dates.epiphany(year, epiphanyOnSunday);
    return rangeOfDays(start, end, { exclude: [start, end] });
  };

  /**
   * Get the date of Epiphany
   *
   * Depending of the countries or regions:*
   * - Epiphany is celebrated on the first Sunday after the first Saturday in January,
   *   which means it can fall on any day from January 2 to January 8.
   * - *Epiphany is always celebrated on Jan 6.
   *
   * @param year The year to use for the calculation
   * @param epiphanyOnSunday Epiphany to be always celebrated on January 6. (defaults to true)
   */
  static epiphany = (year: number, epiphanyOnSunday = true): Dayjs => {
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
    return date;
  };

  /**
   * Get all the dates after Epiphany, until the day before the Baptism of the Lord.
   *
   * @param year The year to use for the calculation
   * @param epiphanyOnSunday If false, Epiphany will be fixed to Jan 6 (defaults to true)
   */
  static datesAfterEpiphany = (year: number, epiphanyOnSunday = true): Array<Dayjs> => {
    const start = Dates.epiphany(year, epiphanyOnSunday);
    const end = Dates.baptismOfTheLord(year, epiphanyOnSunday);
    return rangeOfDays(start, end, { exclude: [start, end] });
  };

  //==================================================================================
  // Lent
  //==================================================================================

  /**
   * Get the date of Ash Wednesday
   *
   * *Ash Wednesday, a day of fasting, is the first day of Lent in Western
   * Christianity. It occurs 46 days (40 fasting days, if the 6 Sundays,
   * which are not days of fast, are excluded) before Easter and can fall
   * as early as 4 February or as late as 10 March.*
   *
   * @param year The year to use for the calculation
   */
  static ashWednesday = (year: number): Dayjs => Dates.easter(year).subtract(46, 'day').startOf('day');

  /**
   * Get all the Sunday of Lent
   *
   * @param year The year to use for the calculation
   */
  static sundaysOfLent = (year: number): Array<Dayjs> => {
    const start = Dates.ashWednesday(year);
    const end = Dates.holyThursday(year);
    const range = rangeOfDays(start, end, {
      exclude: [end],
    });
    return eachDayOfWeekInRange(range, DayOfWeek.SUNDAY);
  };

  /**
   * Get all the dates occurring in Lent (from Ash Wednesday and runs until the day before Holy Thursday)
   *
   * @param year The year to use for the calculation
   */
  static datesOfLent = (year: number): Array<Dayjs> => {
    const start = Dates.ashWednesday(year);
    const end = Dates.holyThursday(year);
    return rangeOfDays(start, end, { exclude: [end] });
  };

  //==================================================================================
  // Lent & Holy Week
  //==================================================================================

  /**
   * Get the date of Palm Sunday
   *
   * @param year The year to use for the calculation
   */
  static palmSunday = (year: number): Dayjs => Dates.easter(year).subtract(7, 'day').startOf('day');

  /**
   * Get the date of Holy Thursday (or Maundy Thursday)
   *
   * @param year The year to use for the calculation
   */
  static holyThursday = (year: number): Dayjs => Dates.easter(year).subtract(3, 'day').startOf('day');

  /**
   * Get the date of Good Friday (or Holy Friday)
   *
   * *Good Friday is a Christian religious holiday commemorating the crucifixion
   * of Jesus Christ and his death at Calvary. The holiday is observed during Holy Week as part of the
   * Paschal Triduum on the Friday preceding Easter Sunday*
   *
   * @param year The year to use for the calculation
   */
  static goodFriday = (year: number): Dayjs => Dates.easter(year).subtract(2, 'day').startOf('day');

  /**
   * Get the date of Holy Saturday
   *
   * *Holy Saturday (Latin: Sabbatum Sanctum) i.e. the Saturday of Holy Week, also known as the
   * Great Sabbath, Black Saturday, or Easter Eve,[1] and called "Joyous Saturday" or "the
   * Saturday of Light" among Coptic Christians, is the day after Good Friday. It is the day
   * before Easter and the last day of Holy Week in which Christians prepare for Easter.
   * It commemorates the day that Jesus Christ's body lay in the tomb and the Harrowing of Hell.*
   *
   * @param year The year to use for the calculation
   */
  static holySaturday = (year: number): Dayjs => Dates.easter(year).subtract(1, 'day').startOf('day');

  /**
   * Get all the date occurring during Holy Week
   *
   * *Holy Week is the week just before Easter.
   * In the west, it is also the last week of Lent, and includes
   * Palm Sunday, Holy Wednesday, Maundy Thursday (Holy Thursday),
   * Good Friday (Holy Friday), and Holy Saturday.
   * It does not include Easter Sunday.*
   *
   * @param year The year to use for the calculation
   */
  static holyWeek = (year: number): Array<Dayjs> => {
    const start = Dates.palmSunday(year);
    const end = Dates.holySaturday(year);
    return rangeOfDays(start, end);
  };

  //==================================================================================
  // Eastertide
  //==================================================================================

  /**
   * Get the date of Easter
   *
   * @param year The year to use for the calculation
   */
  static easter = (year: number): Dayjs => {
    const { month, day } = Dates.computeEasterDate(year);
    return dayjs.utc(`${year}-${month}-${day}`);
  };

  /**
   * Get all the dates occurring during the octave of Easter
   * from Easter Sunday until the Sunday following Easter (Divine Mercy Sunday), inclusive.
   *
   * @param year The year to use for the calculation
   */
  static datesInOctaveOfEaster = (year: number): Array<Dayjs> => {
    const start = Dates.easter(year);
    const end = Dates.divineMercySunday(year);
    return rangeOfDays(start, end);
  };

  /**
   * Get all the Sunday of Easter
   *
   * Eastertide is the period of fifty days from Easter Sunday to Pentecost Sunday (inclusive).
   * All Sundays in this period are counted as Sundays of Easter.
   *
   * @param year The year to use for the calculation
   */
  static sundaysOfEaster = (year: number): Array<Dayjs> => {
    const start = Dates.easter(year);
    const end = Dates.pentecostSunday(year);
    const range = rangeOfDays(start, end);
    return eachDayOfWeekInRange(range, DayOfWeek.SUNDAY);
  };

  /**
   * Get all the dates occurring in Eastertide
   *
   * Eastertide is the period of fifty days from Easter Sunday to Pentecost Sunday.
   *
   * @param year The year to use for the calculation
   */
  static datesOfEaster = (year: number): Array<Dayjs> => {
    const start = Dates.easter(year);
    const end = Dates.pentecostSunday(year);
    return rangeOfDays(start, end);
  };

  /**
   * Get the date of Divine Mercy Sunday
   * (the Sunday after Easter, in the Octave of Easter)
   *
   * @param year The year to use for the calculation
   */
  static divineMercySunday = (year: number): Dayjs => Dates.easter(year).add(7, 'day').startOf('day');

  /**
   * Get the date of Pentecost
   * (occurs 49 days after Easter)
   *
   * @param year The year to use for the calculation
   */
  static pentecostSunday = (year: number): Dayjs => Dates.easter(year).add(49, 'day').startOf('day');

  //==================================================================================
  // Ordinary Time
  //==================================================================================

  /**
   * Get all the dates occurring in Ordinary Time
   *
   * @param year The year to use for the calculation
   * @param epiphanyOnSunday If false, fixes Epiphany to Jan 6 (defaults to true)
   */
  static datesOfOrdinaryTime = (year: number, epiphanyOnSunday = true): Array<Dayjs> => {
    return [...Dates.datesOfEarlyOrdinaryTime(year, epiphanyOnSunday), ...Dates.datesOfLaterOrdinaryTime(year)];
  };

  /**
   * Get all the dates of Ordinary Time from the day after Christmastide
   * till the day before Ash Wednesday.
   *
   * *Ordinary Time in the early part of the year begins
   * the day after the Baptism of the Lord and concludes
   * the day before Ash Wednesday.*
   *
   * @param year The year to use for the calculation
   * @param epiphanyOnSunday If false, fixes Epiphany to Jan 6 (defaults to true)
   */
  static datesOfEarlyOrdinaryTime = (year: number, epiphanyOnSunday = true): Array<Dayjs> => {
    const start = Dates.baptismOfTheLord(year, epiphanyOnSunday);
    const end = Dates.ashWednesday(year);

    return rangeOfDays(start, end, { exclude: [start, end] });
  };

  /**
   * Get all Sundays that fall within the period of early Ordinary Time
   *
   * @param year The year to use for the calculation
   */
  static sundaysOfEarlyOrdinaryTime = (year: number): Array<Dayjs> => {
    return eachDayOfWeekInRange(Dates.datesOfEarlyOrdinaryTime(year), DayOfWeek.SUNDAY);
  };

  /**
   * Get all the dates of Ordinary Time after Pentecost to the day before the
   * First Sunday of Advent.
   *
   * @param year The year to use for the calculation
   */
  static datesOfLaterOrdinaryTime = (year: number): Array<Dayjs> => {
    const start = Dates.pentecostSunday(year);
    const end = Dates.firstSundayOfAdvent(year);
    return rangeOfDays(start, end, { exclude: [start, end] });
  };

  /**
   * Gets all the Sundays that fall within the period of later Ordinary Time
   *
   * @param year The year to use for the calculation
   */
  static sundaysOfLaterOrdinaryTime = (year: number): Array<Dayjs> => {
    return eachDayOfWeekInRange(Dates.datesOfLaterOrdinaryTime(year), DayOfWeek.SUNDAY);
  };

  /**
   * Get the date of the Solemnity of Christ the King
   *
   * *The Solemnity of Christ the King is always the 34th (and last) Sunday of Ordinary Time
   * and is the week before the First Sunday of Advent. The Sundays of Ordinary Time in the
   * latter part of the year are numbered backwards from Christ the King to Pentecost.*
   *
   * @param year The year to use for the calculation
   */
  static christTheKing = (year: number): Dayjs => Dates.firstSundayOfAdvent(year).subtract(7, 'day').startOf('day');

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
   * @param year The year to use for the calculation
   */
  static maryMotherOfGod = (year: number): Dayjs => dayjs.utc(`${year}-1-1`);

  /**
   * Get the date of the celebration of Saint Joseph, Husband of Mary
   *
   * *In the Roman Catholic church, the Feast of St. Joseph (19 March)
   * is a Solemnity (first class if using the Tridentine calendar), and
   * is transferred to another date if impeded (i.e., 19 March falling
   * on Sunday or in Holy Week).*
   *
   * @param year The year to use for the calculation
   */
  static josephHusbandOfMary = (year: number): Dayjs => {
    let date = dayjs.utc(`${year}-3-19`);

    // Check to see if this solemnity falls on a Sunday of Lent
    // If it occurs on a Sunday of Lent is transferred to the
    // following Monday.
    if (date.day() === 0) {
      Dates.sundaysOfLent(year).forEach((sunday) => {
        if (date.isSame(sunday)) {
          date = sunday.add(1, 'day');
        }
      });
    }

    // Check to see if this solemnity falls within Holy Week
    // If Joseph, Husband of Mary (Mar 19) falls on
    // Palm Sunday or during Holy Week, it is moved to
    // the Saturday preceding Palm Sunday.
    const holyWeekDates = Dates.holyWeek(year);
    const [first] = holyWeekDates;
    const [last] = holyWeekDates.reverse();
    const holyWeekRange = rangeOfDays(first, last);
    if (rangeContainsDate(holyWeekRange, date)) {
      date = Dates.palmSunday(year).subtract(1, 'day').startOf('day');
    }
    return date;
  };

  /**
   * Get the date of the celebration of the Annunciation
   *
   * *Occurs on March 25th, moved to Monday after Divine Mercy Sunday
   * if it is within Holy Week or Easter Octave*
   *
   * @param year The year to use for the calculation
   */
  static annunciation = (year: number): Dayjs => {
    let date = dayjs.utc(`${year}-3-25`);

    // If it occurs on a Sunday of Lent, it is transferred to the next day (Monday)
    const sundays = Dates.sundaysOfLent(year);
    const match = rangeContainsDate(sundays, date);

    // Since its a Sunday, add one day to make it a Monday
    if (match) {
      date = date.add(1, 'day');
    }

    // If it occurs during Holy Week, it is transferred to the
    // Monday of the Second Week of Easter.
    const holyWeekDates = Dates.holyWeek(year);
    const [firstDateOfHolyWeek] = holyWeekDates;
    const [lastDateOfHolyWeek] = holyWeekDates.reverse();
    const holyWeekRange = rangeOfDays(firstDateOfHolyWeek, lastDateOfHolyWeek);
    if (rangeContainsDate(holyWeekRange, date)) {
      date = Dates.divineMercySunday(year).add(1, 'day');
    }

    // If it occurs during the Octave of Easter, it is transferred to the
    // Monday of the Second Week of Easter.
    const octaveOfEasterDates = Dates.datesInOctaveOfEaster(year);
    const [firstDateInOctaveOfEaster] = octaveOfEasterDates;
    const [lastDateInOctaveOfEaster] = octaveOfEasterDates.reverse();
    const octaveRange = rangeOfDays(firstDateInOctaveOfEaster, lastDateInOctaveOfEaster);
    if (rangeContainsDate(octaveRange, date)) {
      date = Dates.divineMercySunday(year).add(1, 'day');
    }

    return date;
  };

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
   * @param year The year to use for the calculation
   */
  static birthOfJohnTheBaptist = (year: number): Dayjs => dayjs.utc(`${year}-6-24`);

  /**
   * Get the date of the solemnity of Saints Peter and Paul
   *
   * *The Feast of Saints Peter and Paul or Solemnity of Saints Peter and Paul is a
   * liturgical feast in honour of the martyrdom in Rome of the apostles Saint Peter
   * and Saint Paul, which is observed on 29 June. The celebration is of ancient origin,
   * the date selected being the anniversary either of their death or of the translation
   * of their relics.*
   *
   * @param year The year to use for the calculation
   */
  static peterAndPaulApostles = (year: number): Dayjs => dayjs.utc(`${year}-6-29`);

  /**
   * Get the date of the celebration of the Assumption
   *
   * *The Latin Catholic Feast of the Assumption is celebrated on August 15
   * was the bodily taking up of the Virgin Mary into Heaven at the end
   * of her earthly life.*
   *
   * @param year The year to use for the calculation
   */
  static assumption = (year: number): Dayjs => dayjs.utc(`${year}-8-15`);

  /**
   * Get the date of the solemnity of All Saints
   *
   * *All Saints' Day is a solemnity celebrated on 1 November by the Roman
   * Catholic Church of Latin rite in honour of all the saints, known
   * and unknown.*
   *
   * @param year The year to use for the calculation
   */
  static allSaints = (year: number): Dayjs => dayjs.utc(`${year}-11-1`);

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
   * @param year The year to use for the calculation
   */
  static immaculateConception = (year: number): Dayjs => {
    let _date = dayjs.utc(`${year}-12-8`);
    // Check to see if this solemnity falls on a Sunday of Advent
    // If it occurs on a Sunday of Advent is transferred to the
    // following Monday.
    if (_date.day() === 0) {
      Dates.sundaysOfAdvent(year).forEach((s) => {
        if (_date.isSame(s)) {
          _date = s.add(1, 'day');
        }
      });
    }
    return _date;
  };

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
   * @param year The year to use for the calculation
   * @param ascensionOn7thSundayOfEaster Sets Ascension to the 7th Sunday of Easter when true. Defaults to false.
   */
  static ascension = (year: number, ascensionOn7thSundayOfEaster = false): Dayjs => {
    // If specified, move Ascension to Sunday
    if (!isNil(ascensionOn7thSundayOfEaster) && ascensionOn7thSundayOfEaster) {
      return Dates.easter(year).add(42, 'day');
    }
    // else by default, Ascension on Thursday
    else {
      return Dates.easter(year).add(39, 'day');
    }
  };

  /**
   * Get the date of the Solemnity of Trinity Sunday
   * (occurs 56 days after Easter)
   *
   * @param year The year to use for the calculation
   */
  static trinitySunday = (year: number): Dayjs => Dates.easter(year).add(56, 'day');

  /**
   * Get the date of the solemnity of Corpus Christi
   *
   * *The Solemnity of Corpus Christi occurs 60 days after Easter, if it is celebrated on Thursday
   * of the Seventh Week of Easter. In those places where Corpus Christi is not a holiday, it is
   * transferred to the following Sunday (63 days after Easter).*
   *
   * If second argument is false, Corpus Christi is moved to the Thursday of the 7th Week of Easter.
   *
   * @param year The year to use for the calculation
   * @param corpusChristiOnSunday Optional boolean to determine if Corpus Christi should be on Sunday or Thursday (defaults to true, meaning that Corpus Christi will be on Sunday)
   */
  static corpusChristi = (year: number, corpusChristiOnSunday = true): Dayjs => {
    // By default Corpus Christi on Sunday
    if (!isNil(corpusChristiOnSunday) && corpusChristiOnSunday) {
      return Dates.easter(year).add(63, 'day');
    } else {
      // If specified, move Corpus Christi to Thursday
      return Dates.easter(year).add(60, 'day');
    }
  };

  /**
   * Get the date of the Solemnity of the Sacred Heart of Jesus
   * (occurs 68 days after Easter)
   *
   * @param year The year to use for the calculation
   */
  static sacredHeartOfJesus = (year: number): Dayjs => Dates.easter(year).add(68, 'day');

  /**
   * Get the date of the celebration of the Immaculate Heart of Mary
   * (occurs 69 days after Easter)
   *
   * @param year The year to use for the calculation
   */
  static immaculateHeartOfMary = (year: number): Dayjs => Dates.easter(year).add(69, 'day');

  //==================================================================================
  // FEASTS OF THE LORD
  // If a fixed date Feast of the Lord occurs on a Sunday in Ordinary Time,
  // the feast is celebrated in place of the Sunday.
  // (e.g., Presentation of the Lord, 1992).
  //==================================================================================

  /**
   * Feast of the Holy Family
   *
   * If Christmas falls on a Sunday, then Holy Family is celebrated on December 30.
   * Otherwise, Holy Family is the Sunday after Christmas.
   *
   * @param year The year to use for the calculation
   */
  static holyFamily = (year: number): Dayjs => {
    const _christmas = Dates.christmas(year);
    // If Christmas is on Sunday, then Holy Family is on the 30th Dec
    if (_christmas.day() === 0) {
      return dayjs.utc(`${year}-12-30`);
    }
    // Holy Family is 1 week after Christmas when Christmas is on a weekday
    else {
      return _christmas.add(1, 'week').startOf('week');
    }
  };

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
   * @param year The year to use for the calculation
   * @param epiphanyOnSunday If false, Epiphany will be fixed to Jan 6] (defaults to true)
   */
  static baptismOfTheLord = (year: number, epiphanyOnSunday = true): Dayjs => {
    let date = Dates.epiphany(year, epiphanyOnSunday);

    // If Epiphany is celebrated on Jan. 6
    // the Baptism of the Lord occurs on the Sunday following Jan. 6.
    if (date.dayOfYear() === 6) {
      date = date.add(1, 'week').startOf('week');
    }
    // If Epiphany is not celebrated on Jan. 6
    else {
      // If Epiphany occurs on Sunday Jan. 7 or Sunday Jan. 8,
      //  then the Baptism of the Lord is the next day (Monday)
      if ((date.day() === 0 && date.dayOfYear() === 7) || date.dayOfYear() === 8) {
        date = date.add(1, 'day');
      }
      // If Epiphany occurs before Jan. 6, the Sunday
      // following Epiphany is the Baptism of the Lord.
      else {
        date = date.add(1, 'week').startOf('week');
      }
    }

    return date;
  };

  /**
   * Get the date of the Presentation of the Lord
   *
   * *In the Roman Catholic Church, the Feast of the Presentation of the Lord is
   * a Feast Day occurring between the Feast of the Conversion of St. Paul the
   * Apostle on 25 January and the Feast of the Chair of St. Peter the Apostle on
   * 22 February. In some Western liturgical churches, Vespers (or Compline) on the
   * Feast of the Presentation marks the end of the Epiphany season.*
   *
   * @param year The year to use for the calculation
   */
  static presentationOfTheLord = (year: number): Dayjs => dayjs.utc(`${year}-2-2`);

  /**
   * Get the date for the Transfiguration of our Lord.
   *
   * @param year The year to use for the calculation
   */
  static transfiguration = (year: number): Dayjs => dayjs.utc(`${year}-8-6`);

  /**
   * Get the date for The Exultation of The Holy Cross.
   *
   * @param year The year to use for the calculation
   */
  static theExaltationOfTheHolyCross = (year: number): Dayjs => dayjs.utc(`${year}-9-14`);
}
