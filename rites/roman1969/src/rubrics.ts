import {
  Dates,
  LiturgicalDay,
  OccurrenceInput,
  OccurrenceOutcome,
  Period,
  PRECEDENCES,
  Precedence,
  Precedences,
  PeriodInput,
  Rank,
  Ranks,
  RanksFromPrecedence,
  Rubrics,
  Season,
  SeasonNumbering,
  SeasonNumberingInput,
  dateDifference,
} from '@internal/generator';

import { Roman1969Vocabulary } from './vocabulary';

/**
 * Rubrics drawn from the *Normae universales de anno liturgico et de Calendario*
 * (Universal Norms on the Liturgical Year and the General Roman Calendar; current
 * English title also *General Norms for the Liturgical Year and the Calendar* —
 * glossary: UNLY / UNLYC / GNLY / GNLYC), promulgated by Paul VI, motu proprio
 * *Mysterii Paschalis* (1969). Primary locus for precedence: n. 59.
 *
 * Lives with this rite, not the engine: the generator only knows the `Rubrics`
 * contract. Wiring `Unly1969Rubrics` onto `Roman1969Rite` is what keeps the seam.
 */

/** @deprecated Prefer {@link Roman1969Vocabulary}; same four 1969 vocab strings. */
export type Unly1969Vocabulary = Roman1969Vocabulary;

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
}: SeasonNumberingInput<Roman1969Vocabulary>): SeasonNumbering => {
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
const periodsOf = ({ date, dates, id, seasons }: PeriodInput<Roman1969Vocabulary>): readonly Period[] => {
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

const precedenceIndex = (precedence: string): number => PRECEDENCES.indexOf(precedence as Precedence);

/**
 * Keep / drop when several celebrations land on one date (UNLY nn. 14, 16, 19, 28, 59).
 *
 * 1969 never transfers across dates; losers are omitted or kept as optionals on the
 * same day.
 */
const resolveOccurrences = ({
  days,
}: OccurrenceInput<Roman1969Vocabulary>): OccurrenceOutcome<Roman1969Vocabulary> => {
  // Copy so Holy Thursday's shift does not mutate the calendar's sorted list.
  const dates: LiturgicalDay<Roman1969Vocabulary>[] = [...days];

  // Exception the Thursday within the Holy Week, this day contain 2 liturgical days, i.e.:
  //
  // - The weekday of Holy Thursday and the season of Lent is finishing just before the
  //   mass of the Lord’s Supper memorial.
  //   UNLY #28. The forty days of Lent run from Ash Wednesday up to but excluding the Mass of
  //   the Lord’s Supper exclusive.
  //
  // - The Paschal Triduum starts from the mass of the Lord’s Supper memorial.
  //   UNLY #19. The Paschal Triduum of the Passion and Resurrection of the Lord begins with the
  //   evening Mass of the Lord’s Supper, has its centre in the Easter Vigil, and closes with
  //   Vespers (Evening Prayer) of the Sunday of the Resurrection.
  //
  // These 2 liturgical day entities needs to be separated, because they do not have the same
  // metadata: different liturgical colors, seasons, rank, precedence...
  // The mass (Chrismal Mass on Holy Thursday, and the Mass the Lord’s Supper the evening), as
  // well as the liturgy of the hours are also different.
  let thursdayOfTheLordsSupper: LiturgicalDay<Roman1969Vocabulary> | undefined;
  if (dates[0]?.id === 'thursday_of_the_lords_supper') {
    thursdayOfTheLordsSupper = dates.shift();
  }

  // - The first item in the array correspond to the Liturgical Day that take precedence.
  // - When multiple LiturgicalDay objects are output the same day, it means that all other
  //   object after the first LiturgicalDay object in the array are optionals.
  //
  // UNLY #14:
  // Memorials are either obligatory or optional; their observance is integrated into the celebration
  // of the occurring weekday in accordance with the norms set forth in the General Instruction of the Roman
  // Missal and of the Liturgy of the Hours.
  // Obligatory Memorials which fall on weekdays of Lent may only be celebrated as Optional
  // Memorials.
  // If several Optional Memorials are inscribed in the Calendar on the same day, only one may be
  // celebrated, the others being omitted.
  const defaultLiturgicalDay = dates[0];
  if (!defaultLiturgicalDay) {
    return { onDate: thursdayOfTheLordsSupper ? [thursdayOfTheLordsSupper] : [], transfers: [] };
  }

  let optionalMemorials: LiturgicalDay<Roman1969Vocabulary>[] = [];

  // If the current day is:
  //
  // - a privileged weekday (UNLY #59 9):
  //     - a weekdays of Advent from December 17 up to and including December 24;
  //     - a days within the Octave of Christmas;
  //     - a weekdays of Lent (except Ash Wednesday and all weekdays of the Holy Week, UNLY #16 a).
  //
  // - a weekday (UNLY #59 13).
  //
  // [1] Output Optional Memorials, which, however, may be celebrated, in the special manner
  //     described in the General Instruction of the Roman Missal (see below, GIRM #355)
  //     and of the Liturgy of the Hours, even on the days listed in UNLY #59 9.
  //
  // [2] If the current day is a privileged weekday (UNLY #59 9),
  //       todo: set a "massIsCelebrated: false" flag on available memorial LiturgicalDay objects.
  //     According to the GIRM #355 (see below), the mass of the optional memorials are not celebrated.
  //     However the memorial can be commemorate, and the Collect may be taken.
  //
  // On Optional Memorials: (GIRM #355)
  // a. On the weekdays of Advent from 17 December to 24 December, on days within
  //    the Octave of the Nativity of the Lord, and on the weekdays of Lent, except Ash
  //    Wednesday and during Holy Week, the Mass texts for the current liturgical day
  //    are used; but the Collect may be taken from a Memorial which happens to be
  //    inscribed in the General Calendar for that day, except on Ash Wednesday and
  //    during Holy Week. On weekdays of Easter Time, Memorials of Saints may rightly
  //    be celebrated in full.
  // b. On weekdays of Advent before 17 December, on weekdays of Christmas Time
  //    from 2 January, and on weekdays of Easter Time, one of the following may be
  //    chosen: either the Mass of the weekday, or the Mass of the Saint or of one of the
  //    Saints whose Memorial is observed, or the Mass of any Saint inscribed in the
  //    Martyrology for that day.
  // c. On weekdays in Ordinary Time, there may be chosen either the Mass of the
  //    weekday, or the Mass of an Optional Memorial which happens to occur on that
  //    day, or the Mass of any Saint inscribed in the Martyrology for that day, or a Mass
  //    for Various Needs, or a Votive Mass.
  if (
    (defaultLiturgicalDay.precedence === Precedences.PrivilegedWeekday_9 ||
      defaultLiturgicalDay.precedence === Precedences.Weekday_13) &&
    !defaultLiturgicalDay.periods.includes(Period.HolyWeek)
  ) {
    optionalMemorials = optionalMemorials.concat(
      dates
        .slice(1)
        .filter(
          (d) =>
            [
              Precedences.GeneralMemorial_10,
              Precedences.ProperMemorial_SecondPatron_11a,
              Precedences.ProperMemorial_11b,
              Precedences.OptionalMemorial_12,
            ].some((p) => p === d.precedence) || d.isOptional
        )
        .map((d) => (d.isOptional = true) && d)
    );
  }

  // If the default liturgical day is marked as allowing similar rank types (allowSimilarRankItems: true),
  // keep the next liturgical(s) day(s) from the list that have also this option enabled,
  // and finally the one that have the same rank type.
  // Note: all sibling items are already sorted by precedence (higher first),
  // so the next items have always the same or a lower precedence type.
  // e.g. The memorial of the Immaculate heart of Mary, that can falls the same day of another memorial.
  if (defaultLiturgicalDay.allowSimilarRankItems && dates.length > 1) {
    const checkNextItems = (d: LiturgicalDay<Roman1969Vocabulary>): boolean =>
      d.rank === defaultLiturgicalDay.rank &&
      d.precedence !== Precedences.OptionalMemorial_12 &&
      !optionalMemorials.map((om) => om.id).includes(d.id);

    const nextAllowingSimilarItems = dates.slice(1).filter((d) => d.allowSimilarRankItems && checkNextItems(d));
    optionalMemorials = [...optionalMemorials, ...nextAllowingSimilarItems];

    const nextItem = dates.slice(1).find((d) => !d.allowSimilarRankItems && checkNextItems(d));
    if (nextItem) optionalMemorials.push(nextItem);
  }

  // Also keep liturgical days marked as optional,
  // and that have a similar or higher precedence type than the default liturgical day.
  // e.g. The dedication of consecrated Churches is an optional solemnity.
  if (dates.length > 1) {
    const optionalDayIds = optionalMemorials.map((d) => d.id);
    const defaultPrecedenceIndex = precedenceIndex(defaultLiturgicalDay.precedence);
    optionalMemorials = optionalMemorials.concat(
      dates
        .slice(1)
        .filter(
          (d) =>
            d.isOptional &&
            precedenceIndex(d.precedence) >= defaultPrecedenceIndex &&
            !optionalDayIds.includes(d.id)
        )
    );
  }

  return {
    onDate: [
      defaultLiturgicalDay,
      ...optionalMemorials,
      ...(thursdayOfTheLordsSupper ? [thursdayOfTheLordsSupper] : []),
    ],
    transfers: [],
  };
};

export const Unly1969Rubrics: Rubrics<Roman1969Vocabulary> = {
  source: {
    title: 'Universal Norms on the Liturgical Year and the General Roman Calendar',
    titleLatin: 'Normae universales de anno liturgico et de Calendario',
    year: 1969,
    promulgatedBy: 'Paul VI, motu proprio Mysterii Paschalis',
    abbreviation: 'UNLY',
    primaryLocus: 'n. 59',
  },
  periodsOf,
  precedences: PRECEDENCES,
  rankOf,
  resolveOccurrences,
  seasons: {
    firstSeason: Season.Advent,
    lastSeason: Season.OrdinaryTime,
    numbering,
  },
};
