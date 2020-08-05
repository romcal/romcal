import _ from 'lodash';

import * as Dates from '@romcal/lib/Dates';
import { LITURGICAL_COLORS } from '@romcal/constants/liturgical-colors.constant';
import { PSALTER_WEEKS } from '@romcal/constants/psalter-weeks.constant';
import { PsalterWeek } from '@romcal/types/psalter-weeks.type';
import { RomcalDateItemCalendar, RomcalDateItemInput } from '@romcal/models/romcal-date-item';
import { isNil } from '@romcal/utils/type-guards';
import { RanksEnum } from '@romcal/enums/ranks.enum';
import { ChristmastideEndings } from '@romcal/types/christmastide-endings.type';
import { getTypeByDayOfWeek, localize, localizeLiturgicalColor, ordinal } from '@romcal/lib/Locales';

import dayjs, { Dayjs } from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';
import isLeapYear from 'dayjs/plugin/isLeapYear'; // dependent on isLeapYear plugin

dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);
dayjs.extend(weekOfYear);

/**
 * Given an array index of a *sorted* array of date.objects, determine the psalter week
 * @param index The index of a *sorted* date.array
 * @param psalterWeek The psalterWeek number to use (defaults to 0 if not set)
 */
const getPsalterWeek = (index: number, psalterWeek = 0): number => {
  if (index % 7 === 0) {
    psalterWeek++;
    if (psalterWeek > 3) {
      psalterWeek = 0;
    }
  }
  return psalterWeek;
};

/**
 * Given a date in Christmastide, determine the week number of this season
 * @param date The date that occur during christmastide
 */
const getWeekOfChristmastide = (date: Dayjs): number => {
  const y = date.month() === 11 ? date.year() : date.year() - 1;
  const christmas = Dates.christmas(y);
  const firstDayOfWeek = christmas.clone().startOf('week');
  return date.diff(firstDayOfWeek, 'week') + 1;
};

/**
 * Generate the calendar metadata from a date.
 * Week and Day of seasons are computed outside of this method
 * but are included in the returned object
 * @param date the date from which is calculated the calendar metadata
 * @param weekOfSeason Week of season to include in the returned object
 * @param dayOfSeason Day of season to include in the returned object
 */
const calendar = ({
  date,
  weekOfSeason,
  dayOfSeason,
}: {
  date: Dayjs;
  weekOfSeason: number;
  dayOfSeason: number;
}): { calendar: RomcalDateItemCalendar } => {
  const y = date.year();
  const adventInCivilYear = Dates.firstSundayOfAdvent(y);
  const startYear = date.isBefore(adventInCivilYear) ? y - 1 : y;
  const startOfLiturgicalYear = Dates.firstSundayOfAdvent(startYear);
  const endOfLiturgicalYear = Dates.firstSundayOfAdvent(startYear + 1).subtract(1, 'day');

  return {
    calendar: {
      totalWeeksInGregorianYear: date.isoWeeksInYear(),
      totalWeeksInLiturgicalYear: endOfLiturgicalYear.diff(startOfLiturgicalYear, 'week') + 1,
      weekOfGregorianYear: date.week(),
      weekOfLiturgicalYear: date.diff(startOfLiturgicalYear, 'week') + 1,
      weekOfSeason,
      dayOfGregorianYear: date.dayOfYear(),
      dayOfLiturgicalYear: date.diff(startOfLiturgicalYear, 'day') + 1,
      dayOfSeason,
      dayOfWeek: date.day(),
      dayOfWeekCountInMonth: Math.ceil(date.date() / 7),
      startOfLiturgicalYear: startOfLiturgicalYear.toISOString(),
      endOfLiturgicalYear: endOfLiturgicalYear.toISOString(),
      easter: Dates.easter(startYear + 1).toISOString(),
    },
  };
};

/**
 * _.takes an array of [[RomcalDateItem]] items and adds the source key.
 * Also updates the data object of the [[RomcalDateItem]] to include the calendar key.
 * @param items An array of [[RomcalDateItem]] values
 * @returns An array of [[RomcalDateItem]] items.
 */
const _metadata = async (items: Array<RomcalDateItemInput>): Promise<Array<RomcalDateItemInput>> => {
  const metadataPromises = items.map(async ({ date, ...rest }: RomcalDateItemInput) => {
    return {
      ...rest,
      date,
      source: 'temporal', // IMPORTANT! Refer to RomcalDateItem.source for more information
      data: {
        ...rest.data,
        meta: {
          ...rest.data?.meta,
          ...(!isNil(rest.data?.meta?.liturgicalColor) && {
            liturgicalColor: await localizeLiturgicalColor(rest.data?.meta?.liturgicalColor),
          }),
        },
      },
    } as RomcalDateItemInput;
  });
  return await Promise.all(metadataPromises);
};

/**
 * Calculates the days in the period of Epiphany.
 * @param year The year to use for the calculation
 * @param epiphanyOnSunday If false, Epiphany will be fixed to Jan 6 (defaults to true)
 */
const _epiphany = async (year: number, epiphanyOnSunday = true): Promise<Array<RomcalDateItemInput>> => {
  const before: Array<Dayjs> = Dates.datesBeforeEpiphany(year, epiphanyOnSunday);
  const after: Array<Dayjs> = Dates.datesAfterEpiphany(year, epiphanyOnSunday);

  const datesBeforePromise = before.map(async (date: Dayjs, i: number) => {
    return {
      date,
      key: `${date.locale('en').format('dddd')}BeforeEpiphany`,
      rank: RanksEnum.FERIA,
      name: await localize({
        key: 'epiphany.before',
        day: date.format('dddd'),
      }),
      data: {
        season: [
          {
            key: 'CHRISTMASTIDE',
            value: await localize({
              key: 'christmastide.season',
            }),
          },
        ],
      },
      ...calendar({
        date,
        weekOfSeason: getWeekOfChristmastide(date),
        dayOfSeason: 9 + i,
      }),
    } as RomcalDateItemInput;
  });

  const datesAfterPromise = after.map(async (date: Dayjs) => {
    return {
      date,
      key: `${date.locale('en').format('dddd')}AfterEpiphany`,
      rank: RanksEnum.FERIA,
      name: await localize({
        key: 'epiphany.after',
        day: date.format('dddd'),
      }),
      data: {
        season: [
          {
            key: 'CHRISTMASTIDE',
            value: await localize({
              key: 'christmastide.season',
            }),
          },
        ],
      },
      ...calendar({
        date,
        weekOfSeason: getWeekOfChristmastide(date),
        dayOfSeason: date.date() + 7,
      }),
    } as RomcalDateItemInput;
  });

  const daysBefore = await Promise.all(datesBeforePromise);
  const daysAfter = await Promise.all(datesAfterPromise);

  return [...daysBefore, ...daysAfter];
};

/**
 * Returns the days constituting holy week
 * @param year The year to use for the calculation
 */
const _holyWeek = async (year: number): Promise<Array<RomcalDateItemInput>> => {
  const dates: Dayjs[] = Dates.holyWeek(year);
  const datesPromise = dates.map(async (date: Dayjs, i: number) => {
    return {
      date,
      key: `${date.locale('en').format('dddd')}OfHolyWeek`,
      rank: RanksEnum.HOLY_WEEK,
      name: await localize({
        key: 'holyWeek.feria',
        day: date.format('dddd'),
      }),
      data: {
        season: [
          {
            key: 'HOLY_WEEK',
            value: await localize({
              key: 'holyWeek.season',
            }),
          },
        ],
        meta: {
          liturgicalColor: LITURGICAL_COLORS.PURPLE,
        },
      },
      ...calendar({
        date,
        weekOfSeason: 6,
        dayOfSeason: 40 + i,
      }),
    } as RomcalDateItemInput;
  });
  return await Promise.all(datesPromise);
};

/**
 * Calculates the days in the season of Advent.
 *
 *  **PSALTER WEEKS & LITURGICAL COLORS - ADVENT**
 *
 *  The First Sunday of Advent always begins Week 1 of the Psalter,
 *  regardless of which week was previously observed (because the First
 *  Sunday of Advent is the first day of the liturgical year, the 4-Week
 *  cycle of the Psalter is “reset” to Week 1 on it).
 *  For example, as it works out on the liturgical calendar, the last
 *  week of Ordinary Time (i.e., the Solemnity of Christ the King, which
 *  is the last Sunday of Ordinary Time, and the following Monday through
 *  Saturday afternoon) uses Week 2 of the Psalter. Nevertheless, when
 *  the First Sunday of Advent arrives, one does not start using Week 3,
 *  but rather Week 1 of the Psalter.
 *
 *   *The proper color of the Advent is purple.*
 *
 * @param year The year to use for the calculation
 */
const advent = async (year: number): Promise<Array<RomcalDateItemInput>> => {
  const daysOfAdventPromise = Dates.datesOfAdvent(year).map(async (date: Dayjs, i: number) => {
    return {
      date,
      key:
        date.day() === 0
          ? `${ordinal(Math.floor(i / 7) + 1, true)}SundayOfAdvent`
          : `${date.locale('en').format('dddd')}OfThe${ordinal(Math.floor(i / 7) + 1).toUpperCase()}WeekOfAdvent`,
      rank: getTypeByDayOfWeek(date.day()),
      name: await localize({
        key: date.day() === 0 ? 'advent.sunday' : 'advent.feria',
        day: date.format('dddd'),
        week: Math.floor(i / 7) + 1,
      }),
      data: {
        season: [
          {
            key: 'ADVENT',
            value: await localize({
              key: 'advent.season',
            }),
          },
        ],
        meta: {
          // The proper color of the Third Sunday of Advent is rose. Purple may also be used on these Sundays.
          liturgicalColor:
            Math.floor(i / 7) === 2 && date.day() === 0 ? LITURGICAL_COLORS.ROSE : LITURGICAL_COLORS.PURPLE,
        },
      },
      ...calendar({
        date,
        weekOfSeason: Math.floor(i / 7) + 1,
        dayOfSeason: i + 1,
      }),
    } as RomcalDateItemInput;
  });
  let dateItemsWithoutKeyAndSource: Array<RomcalDateItemInput> = await Promise.all(daysOfAdventPromise);

  // Sort dates according to their date.objects in ascending order
  dateItemsWithoutKeyAndSource = _.sortBy(dateItemsWithoutKeyAndSource, item => item.date.valueOf());

  const romcalDateItems: Array<RomcalDateItemInput> = [];
  dateItemsWithoutKeyAndSource.forEach(({ name, key, data, ...rest }: RomcalDateItemInput, index: number) => {
    const psalterWeek = getPsalterWeek(index);
    romcalDateItems.push({
      ...rest,
      ...(isNil(key) ? { key: _.camelCase(name) } : { key: _.camelCase(key) }), // Only add camel cased name as the key if it is not defined
      name,
      data: {
        ...data,
        meta: {
          ...data?.meta,
          // Set the psalter week
          psalterWeek: {
            key: psalterWeek,
            value: PSALTER_WEEKS[psalterWeek],
          },
          // Set default season color if there is no color already set
          ...(data?.meta?.liturgicalColor ?? { liturgicalColor: LITURGICAL_COLORS.PURPLE }),
        },
      },
    } as RomcalDateItemInput);
  });

  return await _metadata(romcalDateItems);
};

/**
 * Calculates the days in the season of Christmastide.
 *
 * **PSALTER WEEKS & LITURGICAL COLORS - CHRISTMAS SEASON**
 *
 * If Christmas is on a feria (Monday - Saturday), then the first
 * week of Christmastide will follow the Psalter week of the 4th week
 * of Advent (which is always Psalter Week 4)
 * If Christmas is on a Sunday, the Psalter week will be Week 1
 *
 * *The proper color of Christmas is white.
 *
 * @param year The year to use for the calculation
 * @param christmastideEnds The mode to calculate the end of Christmastide. See [[ChristmastideEndings]] for more information
 * @param epiphanyOnSunday If false, Epiphany will be fixed to Jan 6 (defaults to true)
 * @param christmastideIncludesTheSeasonOfEpiphany If false, excludes the season of epiphany from being included in the season of Christmas
 */
const christmastide = async (
  year: number,
  christmastideEnds: ChristmastideEndings,
  epiphanyOnSunday = true,
  christmastideIncludesTheSeasonOfEpiphany = true,
): Promise<Array<RomcalDateItemInput>> => {
  const datesOfChristmastide: Dayjs[] = Dates.datesOfChristmas(year, christmastideEnds, epiphanyOnSunday);
  const datesInTheOctaveOfChristmas: Dayjs[] = Dates.octaveOfChristmas(year);
  const epiphany: Array<RomcalDateItemInput> = await _epiphany(year + 1, epiphanyOnSunday);
  let count = 0;

  const datesOfChristmastidePromise = datesOfChristmastide.map(async (date: Dayjs, i: number) => {
    const dayOfWeek = date.day();
    count = dayOfWeek === 0 ? count + 1 : count;
    return {
      date,
      key:
        dayOfWeek === 0
          ? `${ordinal(count, true)}SundayOfChristmas`
          : `${date.locale('en').format('dddd')}OfChristmastide`,
      rank: getTypeByDayOfWeek(dayOfWeek),
      name: await localize({
        key: dayOfWeek === 0 ? 'christmastide.sunday' : 'christmastide.date',
        day: date.format('dddd'),
        count,
      }),
      data: {
        season: [
          {
            key: 'CHRISTMASTIDE',
            value: await localize({
              key: 'christmastide.season',
            }),
          },
        ],
      },
      ...calendar({
        date,
        weekOfSeason: getWeekOfChristmastide(date),
        dayOfSeason: i + 1,
      }),
    } as RomcalDateItemInput;
  });
  const daysOfChristmasTide: Array<RomcalDateItemInput> = await Promise.all(datesOfChristmastidePromise);

  const datesInTheOctaveOfChristmasPromise = datesInTheOctaveOfChristmas.map(async (date: Dayjs, i: number) => {
    return {
      date,
      key: `${ordinal(i + 1, true)}DayInTheOctaveOfChristmas`,
      rank: getTypeByDayOfWeek(date.day()),
      name: await localize({
        key: 'christmastide.octave',
        count: i + 1,
      }),
      data: {
        season: [
          {
            key: 'CHRISTMASTIDE',
            value: await localize({
              key: 'christmastide.season',
            }),
          },
        ],
      },
      ...calendar({
        date,
        weekOfSeason: getWeekOfChristmastide(date),
        dayOfSeason: i + 1,
      }),
    } as RomcalDateItemInput;
  });
  const daysInTheOctaveOfChristmas: Array<RomcalDateItemInput> = await Promise.all(datesInTheOctaveOfChristmasPromise);

  //==============================================================================
  // Override in order: solemnities, feasts, epiphany and octave of christmas
  // to days of christmas
  //==============================================================================

  // only merge the season of epiphany if the flag is true
  let combinedDaysOfChristmas: Array<RomcalDateItemInput>;
  if (christmastideIncludesTheSeasonOfEpiphany) {
    combinedDaysOfChristmas = _.uniqBy(_.union(epiphany, daysInTheOctaveOfChristmas, daysOfChristmasTide), item =>
      item.date.valueOf(),
    );
  } else {
    combinedDaysOfChristmas = _.uniqBy(_.union(daysInTheOctaveOfChristmas, daysOfChristmasTide), item =>
      item.date.valueOf(),
    );
  }

  // Sort dates according to their unix time
  combinedDaysOfChristmas = _.sortBy(combinedDaysOfChristmas, item => item.date.valueOf());

  let psalterWeekStart = 3;
  const [firstDateOfChristmasTide] = datesOfChristmastide;
  if (firstDateOfChristmasTide.day() === 0) {
    psalterWeekStart = 0;
  }

  combinedDaysOfChristmas = combinedDaysOfChristmas.map(({ name, key, data, ...rest }, index: number) => {
    const resolvedPsalterWeek = getPsalterWeek(index, psalterWeekStart);
    return {
      ...rest,
      ...(isNil(key) ? { key: _.camelCase(name) } : { key: _.camelCase(key) }), // Only add camel cased name as the key if it is not defined
      name,
      data: {
        ...data,
        meta: {
          ...data?.meta,
          titles: data?.meta?.titles ?? [],
          psalterWeek: {
            key: resolvedPsalterWeek,
            value: PSALTER_WEEKS[resolvedPsalterWeek],
          },
          // Set default season color if there is no color already set
          ...(data?.meta?.liturgicalColor ?? { liturgicalColor: LITURGICAL_COLORS.WHITE }),
        },
      },
    } as RomcalDateItemInput;
  });

  return await _metadata(combinedDaysOfChristmas);
};

/**
 * Calculates the first half of ordinary time in a given liturgical year.
 *
 * **PSALTER WEEKS & LITURGICAL COLORS - EARLY ORDINARY TIME**
 *
 * The first week of Ordinary Time begins with the Monday following
 * the Feast of the Baptism of the Lord (which is the last Sunday of
 * the Christmas Season). Consequently, one starts using Week-1 of the
 * Psalter for that week. The Sunday that follows the first week of
 * Ordinary Time is the Second Sunday of Ordinary Time, so, technically
 * speaking, there is no Sunday that is called the First Sunday of
 * Ordinary Time. This makes sense if you consider the fact that
 * Ordinary Time begins on a Monday, and by the time Sunday rolls
 * around the first week of Ordinary Time has already been completed.
 * In light of all this, although the Feast of the Baptism of the Lord
 * is the last Sunday of the Christmas Season, simply for the purposes
 * of counting Sundays it is counted as the first Sunday of Ordinary Time.
 *
 * *The proper color of ordinary time is green.*
 *
 * @param year The year to use
 * @param christmastideEnds When does Christmas end. See [[ChristmastideEndings]] for more information
 * @param epiphanyOnSunday By default, Epiphany is celebrated on Sunday. If false, will cause Epiphany to land on January the 6th.
 * @returns
 */
const earlyOrdinaryTime = async (
  year: number,
  christmastideEnds: ChristmastideEndings,
  epiphanyOnSunday = true,
): Promise<Array<RomcalDateItemInput>> => {
  const daysOfEarlyOrdinaryTimePromise = Dates.datesOfEarlyOrdinaryTime(year, christmastideEnds, epiphanyOnSunday).map(
    async (date: Dayjs, i: number) => {
      const week = date.day() === 0 ? Math.floor(i / 7) + 2 : Math.floor(i / 7) + 1;
      return {
        date,
        key:
          date.day() === 0
            ? `${ordinal(Math.floor(i / 7) + 2, true)}SundayOfOrdinaryTime`
            : `${date.locale('en').format('dddd')}OfThe${ordinal(Math.floor(i / 7) + 1, true)}WeekOfOrdinaryTime`,
        rank: date.day() === 0 ? RanksEnum.SUNDAY : RanksEnum.FERIA,
        name: await localize({
          key: date.day() === 0 ? 'ordinaryTime.sunday' : 'ordinaryTime.feria',
          day: date.format('dddd'),
          week,
        }),
        data: {
          season: [
            {
              key: 'EARLY_ORDINARY_TIME',
              value: await localize({
                key: 'ordinaryTime.season',
              }),
            },
          ],
        },
        ...calendar({
          date,
          weekOfSeason: week,
          dayOfSeason: (week - 1) * 7 + date.day(),
        }),
      } as RomcalDateItemInput;
    },
  );
  let days: Array<RomcalDateItemInput> = await Promise.all(daysOfEarlyOrdinaryTimePromise);

  // Sort dates according to the value of the DayJS date object
  days = _.sortBy(days, v => v.date.valueOf());

  const psalterWeekStart = 0;

  days = days.map(({ data, key, name, ...rest }: RomcalDateItemInput, index: number) => {
    const resolvedPsalterWeek = getPsalterWeek(index, psalterWeekStart);
    return {
      ...rest,
      ...(isNil(key) ? { key: _.camelCase(name) } : { key: _.camelCase(key) }), // Only add camel cased name as the key if it is not defined
      name,
      data: {
        ...data,
        meta: {
          ...data?.meta,
          titles: data?.meta?.titles ?? [],
          psalterWeek: {
            key: resolvedPsalterWeek,
            value: PSALTER_WEEKS[resolvedPsalterWeek],
          },
          // Set default season color if there is no color already set
          ...(data?.meta?.liturgicalColor ?? { liturgicalColor: LITURGICAL_COLORS.GREEN }),
        },
      },
    } as RomcalDateItemInput;
  });

  return await _metadata(days);
};

/**
 * Calculates the latter half of ordinary time in a given liturgical year.
 *
 * **PSALTER WEEKS & LITURGICAL- LATER ORDINARY TIME**
 *
 * The second phase of Ordinary Time begins on the Monday that immediately
 * follows Pentecost Sunday (i.e., the last Sunday of the Season of Easter).
 * Note that, because the date of Easter changes from year to year, the
 * specific range of dates for the two phases in Ordinary Time likewise
 * change from year to year. In any event, the Monday of Ordinary Time
 * which immediately follows Pentecost Sunday does not “reset” to Week
 * 1 of the Psalter. Rather, it will simply be the week of the Psalter
 * corresponding to the Sunday to which the Monday belongs.
 *
 * *The proper color of Ordinary Time is green.*
 *
 * @param year
 */
const laterOrdinaryTime = async (year: number): Promise<Array<RomcalDateItemInput>> => {
  // Keep track of the first week in later ordinary time
  // for later use
  let firstWeekOfLaterOrdinaryTime = 0;

  const daysOfLaterOrdinaryTimePromise = Dates.datesOfLaterOrdinaryTime(year)
    .reverse()
    .map(async (date: Dayjs, i: number) => {
      // Calculate the week of ordinary time
      // from the last sunday of the year (34th)
      const week = 34 - Math.floor(i / 7);
      firstWeekOfLaterOrdinaryTime = week;

      return {
        date,
        key:
          date.day() === 0
            ? `${ordinal(week, true)}SundayOfOrdinaryTime`
            : `${date.locale('en').format('dddd')}OfThe${ordinal(week, true).toUpperCase()}WeekOfOrdinaryTime`,
        rank: date.day() === 0 ? RanksEnum.SUNDAY : RanksEnum.FERIA,
        name: await localize({
          key: date.day() === 0 ? 'ordinaryTime.sunday' : 'ordinaryTime.feria',
          day: date.format('dddd'),
          week: week,
        }),
        data: {
          season: [
            {
              key: 'LATER_ORDINARY_TIME',
              value: await localize({
                key: 'ordinaryTime.season',
              }),
            },
          ],
        },
        ...calendar({
          date,
          weekOfSeason: week,
          dayOfSeason: (week - 2) * 7 - 5 + date.day(),
        }),
      } as RomcalDateItemInput;
    });
  let days: Array<RomcalDateItemInput> = await Promise.all(daysOfLaterOrdinaryTimePromise);

  // Sort dates according to moment
  days = _.sortBy(days, v => v.date.valueOf());

  let psalterWeekStart = firstWeekOfLaterOrdinaryTime % 4;
  if (psalterWeekStart === 0) {
    psalterWeekStart = 3;
  }

  days = days.map(({ data, key, name, ...rest }: RomcalDateItemInput, index: number) => {
    const resolvedPsalterWeek = getPsalterWeek(index, psalterWeekStart);
    return {
      ...rest,
      ...(isNil(key) ? { key: _.camelCase(name) } : { key: _.camelCase(key) }), // Only add camel cased name as the key if it is not defined
      name,
      data: {
        ...data,
        meta: {
          ...data?.meta,
          titles: data?.meta?.titles ?? [],
          psalterWeek: {
            key: resolvedPsalterWeek,
            value: PSALTER_WEEKS[resolvedPsalterWeek],
          },
          // Set default season color if there is no color already set
          ...(data?.meta?.liturgicalColor ?? { liturgicalColor: LITURGICAL_COLORS.GREEN }),
        },
      },
    };
  });

  return await _metadata(days);
};

/**
 * Calculates the days in the season of Lent
 *
 * **PSALTER WEEKS & LITURGICAL COLORS - LENT & HOLY WEEK**
 *
 * Lent begins on Ash Wednesday and therefore in the middle of a week
 * rather than on a Sunday. Regardless of which week of the Psalter is
 * being observed on the Sunday through Tuesday immediately preceding
 * Ash Wednesday, Ash Wednesday (and the Thursday through Saturday
 * afternoon following it) are designated as Week 4 of the Psalter.
 *
 * *The proper color of the Lent is purple.*
 *
 * @param year The year to use for calculation
 */
const lent = async (year: number): Promise<Array<RomcalDateItemInput>> => {
  const datesOfLent: Array<Dayjs> = Dates.datesOfLent(year);
  const sundaysOfLent: Array<Dayjs> = Dates.sundaysOfLent(year);

  const daysOfLentPromise: Promise<RomcalDateItemInput>[] = datesOfLent.map(async (date: Dayjs, i: number) => {
    const week = Math.floor((i - 4) / 7) + 1;

    return {
      date,
      key:
        i > 0 && i < 4
          ? `${date.locale('en').format('dddd')}AfterAshWednesday`
          : `${date.locale('en').format('dddd')}OfThe${ordinal(week, true).toUpperCase()}WeekOfLent`,
      rank: RanksEnum.FERIA,
      name: await localize({
        key: i > 0 && i < 4 ? 'lent.dayAfterAshWed' : 'lent.feria',
        day: date.format('dddd'),
        week,
      }),
      data: {
        season: [
          {
            key: 'LENT',
            value: await localize({
              key: 'lent.season',
            }),
          },
        ],
      },
      ...calendar({
        date,
        weekOfSeason: week,
        dayOfSeason: i + 1,
      }),
    } as RomcalDateItemInput;
  });
  const ferialDays = await Promise.all(daysOfLentPromise);

  const sundaysOfLentPromise = sundaysOfLent.map(async (date: Dayjs, i: number) => {
    return {
      date,
      key: `${ordinal(i + 1, true)}SundayOfLent`,
      rank: RanksEnum.SUNDAY,
      name: await localize({
        key: 'lent.sunday',
        week: i + 1,
      }),
      data: {
        season: [
          {
            key: 'LENT',
            value: await localize({
              key: 'lent.season',
            }),
          },
        ],
        meta: {
          // The proper color of the the Fourth Sunday of Lent is rose. Purple may also be used on these Sundays.
          liturgicalColor: i === 3 ? LITURGICAL_COLORS.ROSE : LITURGICAL_COLORS.PURPLE,
        },
      },
      ...calendar({
        date,
        weekOfSeason: i + 1,
        dayOfSeason: i * 7 + 5,
      }),
    } as RomcalDateItemInput;
  });
  const sundays = await Promise.all(sundaysOfLentPromise);

  const holyWeek: Array<RomcalDateItemInput> = await _holyWeek(year);

  let combinedDaysOfLent: Array<RomcalDateItemInput>;

  // Override in order: Solemnities, Holy Week and Sundays of Lent to days of Lent
  combinedDaysOfLent = _.uniqBy(_.union(holyWeek, sundays, ferialDays), v => v.date.valueOf());

  // Sort dates according to DayJS
  combinedDaysOfLent = _.sortBy(combinedDaysOfLent, v => v.date.valueOf());

  const psalterWeekStart = 4;

  combinedDaysOfLent = combinedDaysOfLent.map(({ name, key, data, ...rest }: RomcalDateItemInput, index: number) => {
    const resolvedPsalterWeek = getPsalterWeek(index, psalterWeekStart);
    return {
      ...rest,
      name,
      ...(isNil(key) ? { key: _.camelCase(name) } : { key: _.camelCase(key) }), // Only add camel cased name as the key if it is not defined
      data: {
        ...data,
        meta: {
          ...data?.meta,
          titles: data?.meta?.titles ?? [],
          psalterWeek: {
            key: resolvedPsalterWeek,
            value: PSALTER_WEEKS[resolvedPsalterWeek],
          },
          // Set default season color if there is no color already set
          ...(data?.meta?.liturgicalColor ?? { liturgicalColor: LITURGICAL_COLORS.PURPLE }),
        },
      },
    };
  });

  combinedDaysOfLent = await _metadata(combinedDaysOfLent);

  return combinedDaysOfLent;
};

/**
 * _.takes the last 3 days of holy week which form the 3 days of Easter Triduum.
 *
 * @param year The year to use for the calculation
 */
const easterTriduum = async (year: number): Promise<Array<RomcalDateItemInput>> => (await _holyWeek(year)).slice(-3);

/**
 * Calculates the season of Easter.
 *
 * **PSALTER WEEKS & LITURGICAL COLOR - EASTER**
 *
 * The first eight days of the Easter Season make up the octave of Easter
 * and are celebrated as Solemnities of the Lord.
 * During this time, Easter Octave readings are used in favour of the
 * standard psalter readings.
 * The psalter is resumed at week 2 on the Monday following Divine
 * Mercy Sunday
 *
 * *The proper color of Easter is white*
 *
 * @param year The year to use for the calculation
 */
const eastertide = async (year: number): Promise<Array<RomcalDateItemInput>> => {
  const weekdaysOfEaster = Dates.datesOfEaster(year);
  const sundaysOfEaster = Dates.sundaysOfEaster(year);

  const weekdaysOfEasterPromise = weekdaysOfEaster.map(async (date: Dayjs, i: number) => {
    const week = Math.floor(i / 7) + 1;
    return {
      date,
      key:
        i > 0 && i < 7
          ? `Easter${date.locale('en').format('dddd')}`
          : `${date.locale('en').format('dddd')}OfThe${ordinal(week, true).toUpperCase()}WeekOfEaster`,
      rank: i > 0 && i < 7 ? RanksEnum.SOLEMNITY : RanksEnum.FERIA,
      name: await localize({
        key: i > 0 && i < 7 ? 'eastertide.octave' : 'eastertide.feria',
        day: date.locale('en').format('dddd'),
        week: week,
      }),
      data: {
        season: [
          {
            key: 'EASTER',
            value: await localize({
              key: 'eastertide.season',
            }),
          },
        ],
      },
      ...calendar({
        date,
        weekOfSeason: week,
        dayOfSeason: (week - 1) * 7 + 1 + date.day(),
      }),
    } as RomcalDateItemInput;
  });
  const days: Array<RomcalDateItemInput> = await Promise.all(weekdaysOfEasterPromise);

  const sundaysOfEasterPromise = sundaysOfEaster.map(async (date: Dayjs, i: number) => {
    return {
      date,
      key: `${ordinal(i + 1, true)}SundayOfEaster`,
      rank: RanksEnum.SUNDAY,
      name: await localize({
        key: 'eastertide.sunday',
        week: i + 1,
      }),
      data: {
        season: [
          {
            key: 'EASTER',
            value: await localize({
              key: 'eastertide.season',
            }),
          },
        ],
      },
      ...calendar({
        date,
        weekOfSeason: i + 1,
        dayOfSeason: i * 7 + 1 + date.day(),
      }),
    } as RomcalDateItemInput;
  });
  const sundays: Array<RomcalDateItemInput> = await Promise.all(sundaysOfEasterPromise);

  let combinedDaysOfEaster: Array<RomcalDateItemInput>;

  // Insert Solemnities and Sundays of Easter to days of Easter
  combinedDaysOfEaster = _.uniqBy(_.union(sundays, days), v => v.date.valueOf());

  // Sort dates according to DayJS
  combinedDaysOfEaster = _.sortBy(combinedDaysOfEaster, v => v.date.valueOf());

  const psalterWeekStart = 2;

  combinedDaysOfEaster = combinedDaysOfEaster.map(
    ({ name, key, data, ...rest }: RomcalDateItemInput, index: number) => {
      let resolvedPsalterWeek: number;
      let psalterWeek: PsalterWeek;
      if (index < 8) {
        psalterWeek = {
          key: 4,
          value: PSALTER_WEEKS[4],
        };
      } else {
        resolvedPsalterWeek = getPsalterWeek(index, psalterWeekStart);
        psalterWeek = {
          key: resolvedPsalterWeek,
          value: PSALTER_WEEKS[resolvedPsalterWeek],
        };
      }

      const dateItem: RomcalDateItemInput = {
        ...rest,
        name,
        ...(isNil(key) ? { key: _.camelCase(name) } : { key: _.camelCase(key) }), // Only add camel cased name as the key if it is not defined
        data: {
          ...data,
          meta: {
            ...data?.meta,
            titles: data?.meta?.titles ?? [],
            psalterWeek,
            // Set default season color if there is no color already set
            ...(data?.meta?.liturgicalColor ?? { liturgicalColor: LITURGICAL_COLORS.WHITE }),
          },
        },
      };

      return dateItem;
    },
  );

  combinedDaysOfEaster = await _metadata(combinedDaysOfEaster);

  return combinedDaysOfEaster;
};

/**
 * _.takes the days between Easter Sunday and Divine mercy sunday (inclusive) to form the easter octave
 *
 * @param year The year to use for the calculation
 */
const easterOctave = async (year: number): Promise<Array<RomcalDateItemInput>> => _.take(await eastertide(year), 8);

export { advent, christmastide, earlyOrdinaryTime, lent, easterTriduum, easterOctave, eastertide, laterOrdinaryTime };
