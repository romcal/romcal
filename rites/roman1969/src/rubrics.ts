import {
  Dates,
  PATRON_TITLES,
  LiturgicalDay,
  OccurrenceInput,
  OccurrenceOutcome,
  OccurrenceTransfer,
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

/** The last precedence listed in nos. 1-8 of the table of liturgical days (UNLY #59). */
const LAST_PRECEDENCE_OF_NOS_1_TO_8 = precedenceIndex(Precedences.ProperFeast_8f);

/** The date (YYYY-MM-DD) that is some days after (or, if negative, before) a date. */
const shiftDate = (date: string, days: number): string => {
  const shifted = new Date(`${date}T00:00:00Z`);
  shifted.setUTCDate(shifted.getUTCDate() + days);
  return shifted.toISOString().substring(0, 10);
};

/**
 * Whether a day is a Sunday of Advent, Lent or Easter other than Palm Sunday, the Sundays whose
 * solemnities go to the following Monday (UNLY no. 5). Easter Sunday is no. 1 of the table of
 * precedence, not a privileged Sunday.
 *
 * src: Universal Norms on the Liturgical Year and the General Roman Calendar (Normae universales de anno
 * liturgico et de calendario), no. 5, approved by Paul VI, motu proprio Mysterii Paschalis, 14 February 1969,
 * https://www.vatican.va/content/paul-vi/en/motu_proprio/documents/hf_p-vi_motu-proprio_19690214_mysterii-paschalis.html
 */
const isSundayTransferringToMonday = (day: LiturgicalDay<Roman1969Vocabulary>): boolean =>
  day.rank === Ranks.Sunday &&
  day.precedence === Precedences.PrivilegedSunday_2 &&
  day.id !== 'palm_sunday_of_the_passion_of_the_lord';

/**
 * The closest day to a date not listed in nos. 1-8 of the table of precedence, before or after it.
 *
 * UNLY #60 does not say which side is preferred between two days at the same distance: the library prefers
 * the following day. A ruling of the Holy See can say otherwise (see `COINCIDENCES`).
 *
 * UNLY #60 keeps the rule of no. 5: a solemnity impeded by a Sunday of Advent, Lent or Easter (other than
 * Palm Sunday) is transferred to the following Monday. When that Monday is not available, no. 5 says nothing
 * more: the library takes the next available day after it, never a day before the Sunday.
 *
 * src: Universal Norms on the Liturgical Year and the General Roman Calendar (Normae universales de anno
 * liturgico et de calendario), nos. 5 and 60, approved by Paul VI, motu proprio Mysterii Paschalis,
 * 14 February 1969,
 * https://www.vatican.va/content/paul-vi/en/motu_proprio/documents/hf_p-vi_motu-proprio_19690214_mysterii-paschalis.html
 *
 * @param date The date of the impeded solemnity
 * @param dayOn The celebration that holds a date
 * @param taken The dates already chosen for another transferred solemnity
 * @param afterOnly Search the days after the date only (UNLY no. 5)
 */
const closestAvailableDate = (
  date: string,
  dayOn: OccurrenceInput<Roman1969Vocabulary>['dayOn'],
  taken: ReadonlySet<string>,
  afterOnly: boolean
): string | undefined => {
  for (let distance = 1; ; distance += 1) {
    const sides = afterOnly ? [distance] : [distance, -distance];
    const candidates = sides.map((side) => shiftDate(date, side)).map((candidate) => ({
      date: candidate,
      day: dayOn(candidate),
    }));

    // Both sides are outside of the year: no day is available.
    if (candidates.every(({ day }) => day === undefined)) return undefined;

    const found = candidates.find(
      ({ date: candidate, day }) =>
        day !== undefined && !taken.has(candidate) && precedenceIndex(day.precedence) > LAST_PRECEDENCE_OF_NOS_1_TO_8
    );
    if (found) return found.date;
  }
};

/** Whether a celebration is the solemnity of a patron: of a nation, a diocese, a city or a religious community. */
const isSolemnityOfAPatron = (day: LiturgicalDay<Roman1969Vocabulary>): boolean =>
  (day.titles as string[]).some((title) => (PATRON_TITLES as string[]).includes(title)) ||
  day.precedence === Precedences.ProperSolemnity_PrincipalPatron_4a ||
  day.precedence === Precedences.ProperSolemnity_TitleOrFounderOrPrimaryPatronOfAReligiousOrg_4d;

/**
 * A ruling of the Holy See on the coincidence of two celebrations, which takes the place of the general
 * rule of UNLY #60 (the closest day) for these two celebrations.
 *
 * Add the rulings of the Holy See here, with their source: the celebration on a date is decided by the
 * precedence of the table of liturgical days, except for the rulings listed below.
 */
interface Coincidence {
  /** The document that publishes the ruling. */
  readonly source: string;
  /** The ids of the two celebrations that coincide. */
  readonly ids: readonly [string, string];
  /**
   * Which of the two is kept on the date, the other one being transferred to the day before (a negative
   * offset) or after (a positive one).
   */
  readonly settle: (
    first: LiturgicalDay<Roman1969Vocabulary>,
    second: LiturgicalDay<Roman1969Vocabulary>
  ) => { kept: LiturgicalDay<Roman1969Vocabulary>; moved: LiturgicalDay<Roman1969Vocabulary>; offset: number };
}

const COINCIDENCES: readonly Coincidence[] = [
  {
    // The Sacred Heart of Jesus and the Nativity of St John the Baptist (24 June). The ruling was given for 2022
    // only (dispositions of 20 August 2021 on the coincidences of the liturgical year 2021-2022); the norms do not
    // decide, both being no. 3 of the table of liturgical days. It is the only guidance of the Holy See on this
    // case, so it is extrapolated to the later coincidences (2033 and 2044, then 2101):
    //
    // - the Sacred Heart is celebrated on that day, and the Nativity of St John the Baptist is anticipated to the
    //   day before (Thursday 23 June 2022), instead of being transferred to the day after;
    // - where St John the Baptist is the patron of a nation, a diocese, a city or a religious community, the
    //   Nativity of St John the Baptist is celebrated on 24 June and the Sacred Heart the day before (23 June 2022).
    // The Holy See no longer publishes the text online; the bishops' conferences and the dioceses relay it.
    source:
      'Congregation for Divine Worship and the Discipline of the Sacraments, ruling on the coincidences of the ' +
      'liturgical year 2021-2022, as published by the Italian Episcopal Conference (Ufficio liturgico nazionale, ' +
      '20 August 2021): https://liturgico.chiesacattolica.it/calendario-liturgico-2021-2022coincidenze-particolari/ ' +
      '(also published by the dioceses, e.g. Teano-Calvi: ' +
      'https://www.diocesiteanocalvi.it/wp-content/uploads/sites/2/2022/06/2022-06-21-Notifica-ULD-Coincidenze-Anno-Liturgico.pdf)',
    ids: ['most_sacred_heart_of_jesus', 'nativity_of_john_the_baptist'],
    settle: (sacredHeart, baptist) =>
      isSolemnityOfAPatron(baptist)
        ? { kept: baptist, moved: sacredHeart, offset: -1 }
        : { kept: sacredHeart, moved: baptist, offset: -1 },
  },
];

/**
 * Settle the coincidences ruled by the Holy See (see `COINCIDENCES`).
 */
const settleCoincidences = (
  date: string,
  days: readonly LiturgicalDay<Roman1969Vocabulary>[]
): { days: LiturgicalDay<Roman1969Vocabulary>[]; transfers: OccurrenceTransfer<Roman1969Vocabulary>[] } =>
  COINCIDENCES.reduce(
    (acc, { ids, settle }) => {
      const first = acc.days.find((d) => d.id === ids[0]);
      const second = acc.days.find((d) => d.id === ids[1]);
      if (!first || !second) return acc;

      const { kept, moved, offset } = settle(first, second);
      return {
        days: [kept, ...acc.days.filter((d) => d !== kept && d !== moved)],
        transfers: [...acc.transfers, { date: shiftDate(date, offset), day: moved }],
      };
    },
    { days: [...days], transfers: [] as OccurrenceTransfer<Roman1969Vocabulary>[] }
  );

/**
 * Keep / drop when several celebrations land on one date (UNLY nn. 14, 16, 19, 28, 59).
 *
 * Losers are omitted or kept as optionals on the same date, except the solemnities, which
 * are transferred to the closest available day (UNLY #60).
 */
const resolveOccurrences = ({
  date,
  days,
  dayOn,
}: OccurrenceInput<Roman1969Vocabulary>): OccurrenceOutcome<Roman1969Vocabulary> => {
  // A ruling of the Holy See comes first. This also copies the list, so Holy Thursday's shift
  // does not mutate the calendar's sorted list.
  const settled = settleCoincidences(date, days);
  let dates = settled.days;
  const { transfers } = settled;

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
    return { onDate: thursdayOfTheLordsSupper ? [thursdayOfTheLordsSupper] : [], transfers };
  }

  // UNLY #60: "If several celebrations fall on the same day, the one that holds the highest rank
  // according to the preceding Table of Liturgical Days is observed. But a solemnity impeded by a
  // liturgical day that takes precedence over it should be transferred to the closest day not listed
  // in nos. 1-8 in the table of precedence; the rule of no. 5 remains in effect. Other celebrations
  // are omitted that year."
  // UNLY #5: "the Sundays of Advent, Lent and Easter have precedence over all Feasts of the Lord and
  // over all Solemnities. In fact, Solemnities occurring on these Sundays are transferred to the
  // following Monday unless they occur on Palm Sunday or on Sunday of the Lord's Resurrection."
  // Source: Universal Norms on the Liturgical Year and the General Roman Calendar (Normae universales
  // de anno liturgico et de calendario), nos. 5 and 60, approved by Paul VI, motu proprio Mysterii Paschalis,
  // 14 February 1969, https://www.vatican.va/content/paul-vi/en/motu_proprio/documents/hf_p-vi_motu-proprio_19690214_mysterii-paschalis.html;
  // English text of the current edition: Catholic Bishops' Conference of England and Wales, Liturgy Office,
  // https://www.liturgyoffice.org/Calendar/Info/GNLY.pdf.
  // Apart from no. 5, the closest day is searched on both sides of the date: a solemnity of Holy Week
  // goes to the Saturday before Palm Sunday, or to the Monday after the Octave of Easter, whichever is
  // the closest.
  const impeded = dates.slice(1).filter((d) => d.rank === Ranks.Solemnity && !d.isOptional);
  dates = [defaultLiturgicalDay, ...dates.slice(1).filter((d) => !impeded.includes(d))];

  const taken = new Set(transfers.map((transfer) => transfer.date));
  const afterOnly = isSundayTransferringToMonday(defaultLiturgicalDay);
  impeded.forEach((day) => {
    const target = closestAvailableDate(date, dayOn, taken, afterOnly);
    // No day of the generated range is available: the solemnity is omitted from this calendar, as the
    // generator drops a day transferred outside of its range.
    if (target === undefined) return;
    taken.add(target);
    transfers.push({ date: target, day });
  });

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
    defaultLiturgicalDay.precedence === Precedences.PrivilegedWeekday_9 ||
    defaultLiturgicalDay.precedence === Precedences.Weekday_13
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
    transfers,
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
  // UNLY no. 59: a memorial never takes precedence over a day of a higher category.
  precedenceFirst: true,
  rankOf,
  resolveOccurrences,
  seasons: {
    firstSeason: Season.Advent,
    lastSeason: Season.OrdinaryTime,
    numbering,
  },
};
