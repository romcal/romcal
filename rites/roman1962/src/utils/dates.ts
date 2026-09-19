import {
  addDays,
  EasterCalculationType,
  easterSunday,
  firstSundayOfAdvent,
  getUtcDate,
  subtractsDays,
} from '@internal/calendar-dates';

/**
 * The dates the 1962 calendar needs that the 1969 one does not.
 *
 * Everything measured from Easter, Christmas or a fixed day comes from
 * `@internal/calendar-dates`, which is rite-neutral. What lives here is the part the
 * Rubricae of 1960 shape differently: the pre-Lenten Sundays the 1969 reform
 * abolished, Passiontide, the Ember and Rogation days, and the anchors 1969 allows a
 * conference to move but 1962 fixes.
 *
 * These are plain functions rather than methods on a `Dates` class. The engine's
 * `dateFn` mechanism is still typed against the 1969 `Dates`, so wiring them into a
 * calendar definition waits on that seam; as pure functions they are usable and
 * testable now, and the eventual class can delegate to them the way the 1969 one
 * delegates to the shared package.
 *
 * Citations are to the Rubricarum Instructum (Rubricae Breviarii et Missalis Romani,
 * 1960), by paragraph.
 */

type Easter = EasterCalculationType;

/**
 * PRE-LENT
 *
 * Three Sundays of preparation before Lent, kept in 1962 and abolished in 1969. They
 * are counted back from Easter, so they need no rule of their own.
 */

/** Ninth Sunday before Easter, and the start of the 1962 liturgical reckoning of Lent. */
export const septuagesimaSunday = (year: number, easterCalculationType?: Easter): Date =>
  subtractsDays(easterSunday(year, easterCalculationType), 63);

/** Eighth Sunday before Easter. */
export const sexagesimaSunday = (year: number, easterCalculationType?: Easter): Date =>
  subtractsDays(easterSunday(year, easterCalculationType), 56);

/** Seventh Sunday before Easter, the day before Lent proper begins. */
export const quinquagesimaSunday = (year: number, easterCalculationType?: Easter): Date =>
  subtractsDays(easterSunday(year, easterCalculationType), 49);

/**
 * LENT AND PASSIONTIDE
 */

/** First Sunday of Lent. Ember days and the Lenten weeks are numbered from here. */
export const firstSundayOfLent = (year: number, easterCalculationType?: Easter): Date =>
  subtractsDays(easterSunday(year, easterCalculationType), 42);

/**
 * Passion Sunday, the second Sunday before Easter, which opens Passiontide.
 *
 * 1969 folded this into the fifth Sunday of Lent; in 1962 it begins a distinct season
 * with its own rubrics, so it is an anchor rather than a name.
 */
export const passionSunday = (year: number, easterCalculationType?: Easter): Date =>
  subtractsDays(easterSunday(year, easterCalculationType), 14);

/**
 * AFTER EASTER
 *
 * 1969 lets a conference move Ascension and Corpus Christi to the following Sunday.
 * 1962 does not, so these are offsets and take no configuration.
 */

/** Thursday of the sixth week after Easter. Never transferred to a Sunday. */
export const ascension = (year: number, easterCalculationType?: Easter): Date =>
  addDays(easterSunday(year, easterCalculationType), 39);

/** The Sunday after Pentecost. Sundays after Pentecost are numbered from it. */
export const trinitySunday = (year: number, easterCalculationType?: Easter): Date =>
  addDays(easterSunday(year, easterCalculationType), 56);

/** Thursday after Trinity Sunday. Never transferred to a Sunday. */
export const corpusChristi = (year: number, easterCalculationType?: Easter): Date =>
  addDays(easterSunday(year, easterCalculationType), 60);

/** Friday after the octave of Corpus Christi. */
export const sacredHeart = (year: number, easterCalculationType?: Easter): Date =>
  addDays(easterSunday(year, easterCalculationType), 68);

/**
 * FIXED ANCHORS
 */

/** 6 January, always. 1969 allows the transfer to a Sunday; 1962 does not. */
export const epiphany = (year: number): Date => getUtcDate(year, 1, 6);

/**
 * Christ the King, instituted in 1925 for the last Sunday of October, where 1962
 * keeps it. 1969 moved it to the last Sunday of the liturgical year.
 */
export const christTheKingSunday = (year: number): Date => {
  const lastDayOfOctober = getUtcDate(year, 10, 31);
  return subtractsDays(lastDayOfOctober, lastDayOfOctober.getUTCDay());
};

/**
 * SUNDAY SERIES
 */

/**
 * The Sundays after Epiphany, from the one following 6 January up to Septuagesima.
 *
 * Between one and six, depending on the date of Easter. The ones crowded out are not
 * simply lost: their propers are resumed after Pentecost, which is a matter for the
 * temporale rather than for a date function.
 */
export const sundaysAfterEpiphany = (year: number, easterCalculationType?: Easter): Date[] => {
  const epiphanyDate = epiphany(year);
  const limit = septuagesimaSunday(year, easterCalculationType);
  const sundays: Date[] = [];

  // The Sunday strictly after 6 January, whatever weekday Epiphany falls on.
  let sunday = addDays(epiphanyDate, 7 - epiphanyDate.getUTCDay());

  while (sunday < limit) {
    sundays.push(sunday);
    sunday = addDays(sunday, 7);
  }

  return sundays;
};

/**
 * The Sundays after Pentecost, from Trinity Sunday to the last before Advent.
 *
 * Twenty-three to twenty-eight, counting Trinity Sunday as the first, as the 1962
 * Missal numbers them. The low end needs the latest possible Easter: 25 April, as in
 * 2038.
 */
export const sundaysAfterPentecost = (year: number, easterCalculationType?: Easter): Date[] => {
  const limit = firstSundayOfAdvent(year);
  const sundays: Date[] = [];

  let sunday = trinitySunday(year, easterCalculationType);

  while (sunday < limit) {
    sundays.push(sunday);
    sunday = addDays(sunday, 7);
  }

  return sundays;
};

/**
 * EMBER AND ROGATION DAYS
 */

/** The Wednesday, Friday and Saturday of the week beginning on `sunday`. */
const emberWeek = (sunday: Date): [Date, Date, Date] => [addDays(sunday, 3), addDays(sunday, 5), addDays(sunday, 6)];

/**
 * The Ember days, four sets of three across the year.
 *
 * The 1960 rubrics fixed the two that used to be reckoned from a saint's day: the
 * September set is the week after the third Sunday of September rather than after the
 * Exaltation of the Holy Cross, and the Advent set the week after the third Sunday of
 * Advent rather than after Saint Lucy (Rubricae 1960, §78).
 */
export const lentEmberDays = (year: number, easterCalculationType?: Easter): [Date, Date, Date] =>
  emberWeek(firstSundayOfLent(year, easterCalculationType));

export const whitEmberDays = (year: number, easterCalculationType?: Easter): [Date, Date, Date] =>
  // Reckoned from Pentecost, which is itself a Sunday.
  emberWeek(addDays(easterSunday(year, easterCalculationType), 49));

export const septemberEmberDays = (year: number): [Date, Date, Date] => {
  const firstOfSeptember = getUtcDate(year, 9, 1);
  const firstSunday = addDays(firstOfSeptember, (7 - firstOfSeptember.getUTCDay()) % 7);
  return emberWeek(addDays(firstSunday, 14));
};

export const adventEmberDays = (year: number): [Date, Date, Date] => emberWeek(addDays(firstSundayOfAdvent(year), 14));

/**
 * The Greater Litanies, on a fixed day, unrelated to Easter. When it collides with
 * Easter week it is transferred, which is an occurrence rule rather than a date.
 */
export const majorRogationDay = (year: number): Date => getUtcDate(year, 4, 25);

/** The Lesser Litanies: the Monday, Tuesday and Wednesday before Ascension. */
export const minorRogationDays = (year: number, easterCalculationType?: Easter): [Date, Date, Date] => {
  const ascensionDate = ascension(year, easterCalculationType);
  return [subtractsDays(ascensionDate, 3), subtractsDays(ascensionDate, 2), subtractsDays(ascensionDate, 1)];
};
