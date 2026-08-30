import { Period } from '../constants/periods';
import { PRECEDENCES, Precedence, Precedences } from '../constants/precedences';
import { Rank, Ranks, RanksFromPrecedence } from '../constants/ranks';
import { Season } from '../constants/seasons';
import { PeriodInput, Rubrics, SeasonNumbering, SeasonNumberingInput } from '../types/rubrics';
import { Vocabulary } from '../types/vocabulary';
import { Dates, dateDifference } from '../utils/dates';

/**
 * The table of precedence of the Universal Norms on the Liturgical Year, 1969.
 *
 * This is the rubric set romcal was written against, so it stays in the engine as the
 * default: a rite that supplies nothing gets it, and the 1969 calendars keep working
 * unchanged. It is expressed through the same `Rubrics` contract a second rite would
 * use, which is what makes it a seam rather than a special case.
 */

/** Easter Sunday sits under the Triduum precedence but is ranked a solemnity. */
const rankOf = (precedence: string, id: string): Rank => {
  if (precedence === Precedences.Triduum_1 && id === 'easter_sunday') return Ranks.Solemnity;
  return RanksFromPrecedence[precedence as keyof typeof RanksFromPrecedence];
};

/**
 * Where a day falls in its season, under the 1969 numbering.
 *
 * Two seasons are not simply counted from their first day. Lent begins on Ash
 * Wednesday, mid-week, and its first full week is numbered 1, so the week count runs
 * one behind. Ordinary Time is interrupted by Lent, the Triduum and Easter Time and
 * resumes afterwards, so the later stretch subtracts the 96 intervening days and
 * takes its week number by counting backwards from the end of the year, which is what
 * makes the last week always the 34th.
 */
const numbering = ({
  date,
  dates,
  declaredDayOfSeason,
  declaredWeekOfSeason,
  endOfSeason,
  seasons,
  startOfSeason,
}: SeasonNumberingInput): SeasonNumbering => {
  const isLent = seasons.includes(Season.Lent);
  const isLateOrdinaryTime =
    seasons.includes(Season.OrdinaryTime) &&
    date.getTime() >= (dates as unknown as Dates).maryMotherOfTheChurch().getTime();

  let dayOfSeason = declaredDayOfSeason ?? (startOfSeason ? dateDifference(date, startOfSeason) + 1 : NaN);
  if (isLateOrdinaryTime) dayOfSeason -= 96;

  // A declared week is taken as given; only a computed one carries the Lenten shift.
  const weekOfSeasonOffset = isLent ? -1 : 0;
  let weekOfSeason =
    declaredWeekOfSeason ??
    (startOfSeason ? Math.ceil((dayOfSeason + startOfSeason.getUTCDay()) / 7) + weekOfSeasonOffset : NaN);

  if (isLateOrdinaryTime) {
    weekOfSeason = endOfSeason ? Math.ceil(34 - dateDifference(date, endOfSeason) / 7) : NaN;
  }

  return { dayOfSeason, weekOfSeason };
};

/**
 * The periods of a 1969 day of the Proper of Time that depend on the date.
 *
 * Two of them. The second Sunday after Christmas falls on either side of the Epiphany
 * depending on the year, and Ordinary Time is in two stretches, before Lent and after
 * Pentecost, which are told apart by comparing against Pentecost itself.
 */
const periodsOf = ({ date, dates, id, seasons }: PeriodInput): readonly Period[] => {
  const { epiphany, maryMotherOfGod, pentecostSunday } = dates as unknown as Dates;

  if (id === 'second_sunday_after_christmas') {
    if (date.getTime() >= epiphany().getTime()) return [Period.DaysFromEpiphany];
    if (date.getTime() > maryMotherOfGod().getTime()) return [Period.DaysBeforeEpiphany];
    return [];
  }

  if (seasons[0] === Season.OrdinaryTime) {
    return [date.getTime() < pentecostSunday().getTime() ? Period.EarlyOrdinaryTime : Period.LateOrdinaryTime];
  }

  return [];
};

/**
 * The vocabulary these rubrics are written in: the 1969 precedences, ranks, seasons and
 * periods.
 */
export type Unly1969Vocabulary = Vocabulary<Precedence, Rank, Season, Period>;

export const Unly1969Rubrics: Rubrics<Unly1969Vocabulary> = {
  periodsOf,
  precedences: PRECEDENCES,
  rankOf,
  seasons: {
    firstSeason: Season.Advent,
    lastSeason: Season.OrdinaryTime,
    numbering,
  },
};
