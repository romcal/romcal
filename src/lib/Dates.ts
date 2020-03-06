import { TChristmastideEndings, isNil } from '../utils/type-guards';
import dayjs from 'dayjs';

import utc from 'dayjs/plugin/utc';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import { rangeOfDays, eachDayOfWeekInRange, rangeContainsDate, DayOfWeek } from '../utils/dates';

dayjs.extend(utc);
dayjs.extend(dayOfYear);

//==================================================================================
// Base functions (all types of seasons and celebrations)
//==================================================================================

// This algorithm is based on the algorithm of Oudin (1940) and quoted in
// "Explanatory Supplement to the Astronomical Almanac", P. Kenneth
// Seidelmann, editor.
// year: The year on which to check when Easter falls (integer)
const _easter = (year: number): Record<string, number> => {
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

const easter = (year: number): dayjs.Dayjs => {
  const { month, day } = _easter(year);
  return dayjs.utc(`${year}-${month}-${day}`);
};

/**
 * The Solemnity of Pentecost occurs 49 days after Easter.
 *
 * @param year The year to use for the calculation
 */
const pentecostSunday = (year: number): dayjs.Dayjs =>
  easter(year)
    .add(49, 'day')
    .startOf('day');

/**
 * Divine Mercy Sunday is celebrated on the Sunday after Easter, the Octave of Easter,
 * observed by Roman Catholic as well as some Anglicans
 *
 * @param year The year to use for the calculation
 */
const divineMercySunday = (year: number): dayjs.Dayjs =>
  easter(year)
    .add(7, 'day')
    .startOf('day');

/**
 * In the Western Rite, Christmas falls on the 25th of December.
 *
 * @param year The year to use for the calculation
 */
const christmas = (year: number): dayjs.Dayjs => dayjs.utc(`${year}-12-25`);

// The start of Advent depends upon the day of the
// week on which Christmas occurs
// y: year
const firstSundayOfAdvent = (year: number): dayjs.Dayjs => {
  switch (christmas(year).day()) {
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
// Lent & Holy Week
//==================================================================================

/**
 * Ash Wednesday, a day of fasting, is the first day of Lent in Western
 * Christianity. It occurs 46 days (40 fasting days, if the 6 Sundays,
 * which are not days of fast, are excluded) before Easter and can fall
 * as early as 4 February or as late as 10 March.
 *
 * @param year The year to use for the calculation
 */
const ashWednesday = (year: number): dayjs.Dayjs =>
  easter(year)
    .subtract(46, 'day')
    .startOf('day');

// Maundy Thursday (also known as Holy Thursday) is
// the Christian holy day falling on the Thursday before Easter.
// y: year
const holyThursday = (year: number): dayjs.Dayjs =>
  easter(year)
    .subtract(3, 'day')
    .startOf('day');

// Palm Sunday is a Christian moveable feast that
// falls on the Sunday before Easter.
// y: year
const palmSunday = (year: number): dayjs.Dayjs =>
  easter(year)
    .subtract(7, 'day')
    .startOf('day');

/**
 * Resolves the date of Holy Saturday.
 *
 *  Holy Saturday (Latin: Sabbatum Sanctum) i.e. the Saturday of Holy Week, also known as the
 * Great Sabbath, Black Saturday, or Easter Eve,[1] and called "Joyous Saturday" or "the
 * Saturday of Light" among Coptic Christians, is the day after Good Friday. It is the day
 * before Easter and the last day of Holy Week in which Christians prepare for Easter.
 * It commemorates the day that Jesus Christ's body lay in the tomb and the Harrowing of Hell.
 *
 * @param year The year to use for the calculation
 */
const holySaturday = (year: number): dayjs.Dayjs =>
  easter(year)
    .subtract(1, 'day')
    .startOf('day');

// Lent starts on Ash Wednesday and runs until the
// day before Holy Thursday
// y: year (integer)
const daysOfLent = (year: number): Array<dayjs.Dayjs> => {
  const start = ashWednesday(year);
  const end = holyThursday(year);
  return rangeOfDays(start, end, { exclude: [end] });
};

// Lent begins on Ash Wednesday and concludes
// the day before Holy Thursday
// y: year (integer)
const sundaysOfLent = (year: number): Array<dayjs.Dayjs> => {
  const start = ashWednesday(year);
  const end = holyThursday(year);
  const range = rangeOfDays(start, end, {
    exclude: [end],
  });
  const sundays = eachDayOfWeekInRange(range, DayOfWeek.SUNDAY);
  return sundays;
};

/**
 * Holy Week is the week just before Easter.
 * In the west, it is also the last week of Lent, and includes
 * Palm Sunday, Holy Wednesday, Maundy Thursday (Holy Thursday),
 * Good Friday (Holy Friday), and Holy Saturday.
 * It does not include Easter Sunday.
 *
 * @param year The year for the calculation
 */
const holyWeek = (year: number): Array<dayjs.Dayjs> => {
  const start = palmSunday(year);
  const end = holySaturday(year);
  return rangeOfDays(start, end);
};

// Good Friday is a Christian religious holiday commemorating the crucifixion of Jesus Christ
// and his death at Calvary. The holiday is observed during Holy Week as part of the
// Paschal Triduum on the Friday preceding Easter Sunday
// y: year
const goodFriday = (year: number): dayjs.Dayjs =>
  easter(year)
    .subtract(2, 'day')
    .startOf('day');

//==================================================================================
// Epiphany & Christmastide
//==================================================================================

/**
 * EPIPHANY RUBRIC
 *
 * Standard rule:
 * Epiphany is celebrated on the first Sunday after the first Saturday in January,
 * which means it could fall on any day from January 2 to January 8.
 *
 * Traditional rule:
 * Epiphany is always celebrated on Jan 6
 *
 * @param year The year to base the calculation upon
 * @param epiphanyOnJan6 Activates the traditional rule when true (defaults to false)
 */
const epiphany = (year: number, epiphanyOnJan6 = false): dayjs.Dayjs => {
  // Get the first day of the year
  const firstDay = dayjs.utc(`${year}-1-1`);
  let date = dayjs.utc(`${year}-1-6`);

  if (!epiphanyOnJan6) {
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
      // If first day of the year is on a feria (i.e. Monday - Friday),
      // Epiphany will be celebrated on the Sunday proceeding
      default:
        date = firstDay.add(1, 'week').startOf('week');
        break;
    }
  }
  return date;
};

// The Solemnity of Mary, the Holy Mother of God is a
// feast day of the Blessed Virgin Mary under the aspect
// of her motherhood of Jesus Christ, whom Christians
// see as the Lord, Son of God. It is celebrated by
// the Latin Rite of the Catholic Church on 1 January,
// the Octave (8th) day of Christmas, and in some
// countries is a Holy day of obligation..
// y: year
const maryMotherOfGod = (year: number): dayjs.Dayjs => dayjs.utc(`${year}-1-1`);

/**
 * The 8 days from Christmas to Mary Mother of God (inclusive).
 *
 * @param year The year for the calculation
 */
const octaveOfChristmas = (year: number): Array<dayjs.Dayjs> => {
  return rangeOfDays(christmas(year), maryMotherOfGod(year + 1));
};

/**
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
 * @param epiphanyOnJan6 If true, Epiphany will be fixed to Jan 6] (defaults to false)
 */
const baptismOfTheLord = (year: number, epiphanyOnJan6 = false): dayjs.Dayjs => {
  let date = epiphany(year, epiphanyOnJan6);

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
 * In the Roman Catholic Church, the Feast of the Presentation of the Lord is
 * a Feast Day occurring between the Feast of the Conversion of St. Paul the
 * Apostle on 25 January and the Feast of the Chair of St. Peter the Apostle on
 * 22 February. In some Western liturgical churches, Vespers (or Compline) on the
 * Feast of the Presentation marks the end of the Epiphany season.
 *
 * @param year The year to use for the calculation
 */
const presentationOfTheLord = (year: number): dayjs.Dayjs => dayjs.utc(`${year}-2-2`);

/**
 * Calculate the days in the season of Christmastide.
 *
 * *In different Churches, the Christmas Season might end on Jan. 6
 * (the traditional date of the Feast of the Epiphany), or might last
 * until the Feast of the Baptism of the Lord (usually the Sunday after
 * Epiphany), or might even last all the way to Feb. 2 (the Feast of the
 * Presentation of the Lord, 40 days after Dec. 25) (Candlemass).*
 *
 * @param year The year to use for the calculation
 * @param christmastideEnds The rule determining when the season of Christmas ends
 * @param epiphanyOnJan6 If true, Epiphany will be fixed to Jan 6] (defaults to false)
 */
const christmastide = (
  year: number,
  christmastideEnds: TChristmastideEndings = 'o',
  epiphanyOnJan6 = false,
): Array<dayjs.Dayjs> => {
  const start = christmas(year);
  let end = null;
  switch (christmastideEnds) {
    case 't':
      end = epiphany(year + 1, epiphanyOnJan6);
      break;
    case 'o':
      end = baptismOfTheLord(year + 1, epiphanyOnJan6);
      break;
    case 'e': // Candlemass (40 days)
      end = presentationOfTheLord(year + 1);
      break;
    default:
      end = baptismOfTheLord(year + 1, epiphanyOnJan6);
      break;
  }
  return rangeOfDays(start, end);
};

//==================================================================================
// Ordinary Time
//==================================================================================

/**
 * Calculates the days of ordinary time from the day after Christmastide
 * till the day before Ash Wednesday.
 *
 * *Ordinary Time in the early part of the year begins
 * the day after the Baptism of the Lord and concludes
 * the day before Ash Wednesday.*
 *
 * @param year The year for the calculation
 * @param christmastideEnds The mode to calculate the end of Christmastide
 * @param epiphanyOnJan6 If true, fixes Epiphany to Jan 6] (defaults to false
 */
const daysOfEarlyOrdinaryTime = (
  year: number,
  christmastideEnds: TChristmastideEndings = 'o',
  epiphanyOnJan6 = false,
): Array<dayjs.Dayjs> => {
  let start = null;
  const end = ashWednesday(year);

  if (christmastideEnds === 't') {
    start = epiphany(year, epiphanyOnJan6);
  } else if (christmastideEnds === 'e') {
    start = presentationOfTheLord(year);
  } else {
    start = baptismOfTheLord(year, epiphanyOnJan6);
  }
  return rangeOfDays(start, end, { exclude: [start, end] });
};

/**
 * Gets all Sundays that fall within the period of early ordinary time.
 *
 * @param year The year for the calculation
 */
const sundaysOfEarlyOrdinaryTime = (year: number): Array<dayjs.Dayjs> => {
  return eachDayOfWeekInRange(daysOfEarlyOrdinaryTime(year), DayOfWeek.SUNDAY);
};

/**
 * Ordinary Time in the later part of the year begins the
 * day after Pentecost and concludes the day before the
 * First Sunday of Advent.
 * @param year The year for the calculation
 */
const daysOfLaterOrdinaryTime = (year: number): Array<dayjs.Dayjs> => {
  const start = pentecostSunday(year);
  const end = firstSundayOfAdvent(year);
  return rangeOfDays(start, end, { exclude: [start, end] });
};

/**
 * Gets all Sundays that fall within the period of later ordinary time.
 *
 * @param year The year for the calculation
 */
const sundaysOfLaterOrdinaryTime = (year: number): Array<dayjs.Dayjs> => {
  return eachDayOfWeekInRange(daysOfLaterOrdinaryTime(year), DayOfWeek.SUNDAY);
};

// The Solemnity of Christ the King is always the 34th (and last) Sunday of Ordinary Time
// and is the week before the First Sunday of Advent. The Sundays of Ordinary Time in the
// latter part of the year are numbered backwards from Christ the King to Pentecost.
// y: Year (integer)
const christTheKing = (year: number): dayjs.Dayjs =>
  firstSundayOfAdvent(year)
    .subtract(7, 'day')
    .startOf('day');

//==================================================================================
// Eastertide
//==================================================================================

/**
 * The term Octave of Easter refers to the eight-day period (Octave)
 * from Easter Sunday until the Sunday following Easter (Divine Mercy Sunday), inclusive.
 *
 * @param year The year for the calculation
 */
const octaveOfEaster = (year: number): Array<dayjs.Dayjs> => {
  const start = easter(year);
  const end = divineMercySunday(year);
  return rangeOfDays(start, end);
};

/**
 * Eastertide is the period of fifty days from Easter Sunday to Pentecost Sunday (inclusive).
 *
 * All Sundays in this period are counted as Sundays of Easter.
 *
 * @param year The year for the calculation
 */
const sundaysOfEaster = (year: number): Array<dayjs.Dayjs> => {
  const start = easter(year);
  const end = pentecostSunday(year);
  const range = rangeOfDays(start, end);
  const sundays = eachDayOfWeekInRange(range, DayOfWeek.SUNDAY);
  return sundays;
};

// Eastertide is the period of fifty days from Easter Sunday to Pentecost Sunday.
// y: year
const daysOfEaster = (year: number): Array<dayjs.Dayjs> => {
  const start = easter(year);
  const end = pentecostSunday(year);
  return rangeOfDays(start, end);
};

//==================================================================================
// Advent
//==================================================================================

// The length of Advent depends upon the day
// of the week on which Christmas occurs
// y: year
const daysOfAdvent = (year: number): Array<dayjs.Dayjs> => {
  const start = firstSundayOfAdvent(year);
  const end = christmas(year);
  return rangeOfDays(start, end, { exclude: [end] });
};

// There are always 4 sundays in Advent
// y: year
const sundaysOfAdvent = (year: number): Array<dayjs.Dayjs> => {
  const start = firstSundayOfAdvent(year);
  const end = christmas(year);
  const range = rangeOfDays(start, end, { exclude: [end] });
  const sundays = eachDayOfWeekInRange(range, DayOfWeek.SUNDAY);
  return sundays;
};

/**
 * Calculates the number of days from the Mary, Mother of God to the last day of Epiphany (inclusive).
 * @param year The year to be used for the calculation
 * @param epiphanyOnJan6 true|false [If true, Epiphany will be fixed to Jan 6]
 */
const daysBeforeEpiphany = (year: number, epiphanyOnJan6 = false): Array<dayjs.Dayjs> => {
  const start = maryMotherOfGod(year);
  const end = epiphany(year, epiphanyOnJan6);
  return rangeOfDays(start, end, { exclude: [start, end] });
};

// y: year (integer)
// epiphanyOnJan6: true|false [If true, Epiphany will be fixed to Jan 6]
const daysAfterEpiphany = (year: number, epiphanyOnJan6 = false): Array<dayjs.Dayjs> => {
  const start = epiphany(year, epiphanyOnJan6);
  const end = baptismOfTheLord(year, epiphanyOnJan6);
  return rangeOfDays(start, end, { exclude: [start, end] });
};

// In the Roman Catholic church, the Feast of St. Joseph (19 March)
// is a Solemnity (first class if using the Tridentine calendar), and
// is transferred to another date if impeded (i.e., 19 March falling
// on Sunday or in Holy Week).
// y: year
const josephHusbandOfMary = (year: number): dayjs.Dayjs => {
  let date = dayjs.utc(`${year}-3-19`);

  // Check to see if this solemnity falls on a Sunday of Lent
  // If it occurs on a Sunday of Lent is transferred to the
  // following Monday.
  if (date.day() === 0) {
    sundaysOfLent(year).forEach(sunday => {
      if (date.isSame(sunday)) {
        date = sunday.add(1, 'day');
      }
    });
  }

  // Check to see if this solemnity falls within Holy Week
  // If Joseph, Husband of Mary (Mar 19) falls on
  // Palm Sunday or during Holy Week, it is moved to
  // the Saturday preceding Palm Sunday.
  const holyWeekDates = holyWeek(year);
  const [first] = holyWeekDates;
  const [last] = holyWeekDates.reverse();
  const holyWeekRange = rangeOfDays(first, last);
  if (rangeContainsDate(holyWeekRange, date)) {
    date = palmSunday(year)
      .subtract(1, 'day')
      .startOf('day');
  }
  return date;
};

// Occurs on March 25th, moved to Monday after Divine Mercy Sunday
// if it is within Holy Week or Easter Octave
// y: year
const annunciation = (year: number): dayjs.Dayjs => {
  let date = dayjs.utc(`${year}-3-25`);

  // If it occurs on a Sunday of Lent, it is trasferred to the next day (Monday)
  const sundays = sundaysOfLent(year);
  const match = rangeContainsDate(sundays, date);

  // Since its a Sunday, add one day to make it a Monday
  if (match) {
    date = date.add(1, 'day');
  }

  // If it occurs during Holy Week, it is transferred to the
  // Monday of the Second Week of Easter.
  const holyWeekDates = holyWeek(year);
  const [firstDateOfHolyWeek] = holyWeekDates;
  const [lastDateOfHolyWeek] = holyWeekDates.reverse();
  const holyWeekRange = rangeOfDays(firstDateOfHolyWeek, lastDateOfHolyWeek);
  if (rangeContainsDate(holyWeekRange, date)) {
    date = divineMercySunday(year).add(1, 'day');
  }

  // If it occurs during the Octave of Easter, it is transferred to the
  // Monday of the Second Week of Easter.
  const octaveOfEasterDates = octaveOfEaster(year);
  const [firstDateInOctaveOfEaster] = octaveOfEasterDates;
  const [lastDateInOctaveOfEaster] = octaveOfEasterDates.reverse();
  const octaveRange = rangeOfDays(firstDateInOctaveOfEaster, lastDateInOctaveOfEaster);
  if (rangeContainsDate(octaveRange, date)) {
    date = divineMercySunday(year).add(1, 'day');
  }

  return date;
};

// The Nativity of St John the Baptist on June 24 comes three months after
// the celebration on March 25 of the Annunciation, when the Archangel Gabriel
// told Our Lady that her cousin Elizabeth was in her sixth month of pregnancy,
// and six months before the Christmas celebration of the birth of Jesus.
// The purpose of these festivals is not to celebrate the exact dates of these
// events, but simply to commemorate them in an interlinking way.
// The Nativity of St. John the Baptist anticipates the feast of Christmas.
// y: year
const birthOfJohnTheBaptist = (year: number): dayjs.Dayjs => dayjs.utc(`${year}-6-24`);

// The Feast of Saints Peter and Paul or Solemnity of Saints Peter and Paul is a
// liturgical feast in honour of the martyrdom in Rome of the apostles Saint Peter
// and Saint Paul, which is observed on 29 June. The celebration is of ancient origin,
// the date selected being the anniversary either of their death or of the translation
// of their relics.
// y: year
const peterAndPaulApostles = (year: number): dayjs.Dayjs => dayjs.utc(`${year}-6-29`);

// The Latin Catholic Feast of the Assumption is celebrated on August 15
// was the bodily taking up of the Virgin Mary into Heaven at the end
// of her earthly life.
// y: year
const assumption = (year: number): dayjs.Dayjs => dayjs.utc(`${year}-8-15`);

// All Saints' Day is a solemnity celebrated on 1 November by the Roman
// Catholic Church of Latin rite in honour of all the saints, known
// and unknown.
// y: year
const allSaints = (year: number): dayjs.Dayjs => dayjs.utc(`${year}-11-1`);

// The Catholic Church celebrates the Feast of the Immaculate Conception on December 8
// The Immaculate Conception, according to the teaching of the Catholic Church, was the
// conception of the Blessed Virgin Mary in the womb of her mother, Saint Anne, free from
// original sin by virtue of the foreseen merits of her son Jesus Christ. The Catholic
// Church teaches that Mary was conceived by normal biological means, but God acted upon
// her soul (keeping her "immaculate") at the time of her conception.
// y: year
const immaculateConception = (year: number): dayjs.Dayjs => {
  let _date = dayjs.utc(`${year}-12-8`);
  // Check to see if this solemnity falls on a Sunday of Advent
  // If it occurs on a Sunday of Advent is transferred to the
  // following Monday.
  if (_date.day() === 0) {
    sundaysOfAdvent(year).forEach(s => {
      if (_date.isSame(s)) {
        _date = s.add(1, 'day');
      }
    });
  }
  return _date;
};

/**
 * In 1999, an Indult for the Transfer of the Solemnity of the Ascension was issued by the
 * United States Conference of Catholic Bishops allowing each ecclesiastical province to
 * determine if the Ascension should be celebrated on its proper Thursday (39 days after
 * Easter) or on the Seventh Sunday of Easter (42 days after Easter). The following
 * provinces of the United States have retained the celebration of Ascension on its proper
 * Thursday. All other provinces of the United States have transferred the celebration of
 * the Ascension to the Seventh Sunday of Easter.
 *
 * @param year The year to base the calculation upon
 * @param ascensionOn7thSundayOfEaster Sets Ascension to the 7th Sunday of Easter when true. Defaults to false.
 */
const ascension = (year: number, ascensionOn7thSundayOfEaster = false): dayjs.Dayjs => {
  // If specified, move Ascension to Sunday
  if (!isNil(ascensionOn7thSundayOfEaster) && ascensionOn7thSundayOfEaster) {
    return easter(year).add(42, 'day');
  }
  // else by default, Ascension on Thursday
  else {
    return easter(year).add(39, 'day');
  }
};

// The Solemnity of Trinity Sunday occurs 56 days after Easter.
// y: Takes the year (integer)
const trinitySunday = (year: number): dayjs.Dayjs => easter(year).add(56, 'day');

// The Solemnity of Corpus Christi occurs 60 days after Easter, if it is celebrated on Thursday
// of the Seventh Week of Easter. In those places where Corpus Christi is not a holiday, it is
// transferred to the following Sunday (63 days after Easter)
// If second argument is true, move Corpus Christi to Thursday
// By default it will be on Sunday
// y: year
// corpusChristiOnThursday: Optional boolean to set Corpus Christi to Thursday when true (defaults to false)
const corpusChristi = (year: number, corpusChristiOnThursday = false): dayjs.Dayjs => {
  // If specified, move Corpus Christi to Thursday
  if (!isNil(corpusChristiOnThursday) && corpusChristiOnThursday) {
    return easter(year).add(60, 'day');
  }
  // By default Corpus Christi on Sunday
  else {
    return easter(year).add(63, 'day');
  }
};

// The Solemnity of the Sacred Heart of Jesus occurs 68 days after Easter.
// y: year
const sacredHeartOfJesus = (year: number): dayjs.Dayjs => easter(year).add(68, 'day');

// Immaculate Heart of Mary occurs 69 days after
// Easter and is a Memorial. This was formerly an Optional Memorial.
// y: year
const immaculateHeartOfMary = (year: number): dayjs.Dayjs => easter(year).add(69, 'day');

/**
 * Feast of the Holy Family
 *
 * *If Christmas falls on a Sunday, then Holy Family is celebrated on Dec. 30.
 * Otherwise, Holy Family is the Sunday after Christmas.*
 *
 * @param year The year for the calculation
 */
const holyFamily = (year: number): dayjs.Dayjs => {
  const _christmas = christmas(year);
  // If Christmas is on Sunday, then Holy Family is on the 30th Dec
  if (_christmas.day() === 0) {
    return dayjs.utc(`${year}-12-30`);
  }
  // Holy Family is 1 week after Christmas when Christmas is on a Feria
  else {
    return _christmas.add(1, 'week').startOf('week');
  }
};

/**
 * Obtains the date for the Transfiguration of our Lord.
 *
 * https://en.wikipedia.org/wiki/Transfiguration_of_Jesus
 *
 * @param year The year for the calculation
 */
const transfiguration = (year: number): dayjs.Dayjs => dayjs.utc(`${year}-8-6`);

/**
 * Obtains the date for The Exultation of The Holy Cross.
 *
 * https://en.wikipedia.org/wiki/Feast_of_the_Cross#History
 *
 * @param year The year for the calculation
 */
const theExaltationOfTheHolyCross = (year: number): dayjs.Dayjs => dayjs.utc(`${year}-9-14`);

export {
  //==================================================================================
  // The Season of Lent
  //==================================================================================

  ashWednesday,
  sundaysOfLent,
  daysOfLent,
  //==================================================================================
  // Holy Week
  //==================================================================================

  palmSunday,
  holyThursday,
  goodFriday,
  holySaturday,
  holyWeek,
  //==================================================================================
  // Eastertide
  //==================================================================================

  easter,
  sundaysOfEaster,
  daysOfEaster,
  octaveOfEaster,
  divineMercySunday,
  pentecostSunday,
  //==================================================================================
  // Ordinary Time
  //==================================================================================

  daysOfEarlyOrdinaryTime,
  sundaysOfEarlyOrdinaryTime,
  daysOfLaterOrdinaryTime,
  sundaysOfLaterOrdinaryTime,
  christTheKing,
  //==================================================================================
  // ADVENT SEASON
  //==================================================================================

  firstSundayOfAdvent,
  sundaysOfAdvent,
  daysOfAdvent,
  //==================================================================================
  // Christmastide
  //==================================================================================

  christmas,
  octaveOfChristmas,
  christmastide,
  //==================================================================================
  // Epiphany
  //==================================================================================

  epiphany,
  daysBeforeEpiphany,
  daysAfterEpiphany,
  //==================================================================================
  // Fixed and movable Solemnities
  //==================================================================================

  maryMotherOfGod,
  josephHusbandOfMary,
  annunciation,
  birthOfJohnTheBaptist,
  peterAndPaulApostles,
  assumption,
  allSaints,
  immaculateConception,
  ascension,
  trinitySunday,
  corpusChristi,
  sacredHeartOfJesus,
  immaculateHeartOfMary,
  //==================================================================================
  // FEASTS OF THE LORD
  // If a fixed date Feast of the Lord occurs on a Sunday in Ordinary Time,
  // the feast is celebrated in place of the Sunday.
  // (e.g., Presentation of the Lord, 1992).
  //==================================================================================

  holyFamily,
  baptismOfTheLord,
  presentationOfTheLord,
  transfiguration,
  theExaltationOfTheHolyCross,

  //==================================================================================
};
