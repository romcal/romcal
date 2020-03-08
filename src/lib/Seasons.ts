import sortBy from 'lodash-es/sortBy';
import camelCase from 'lodash-es/camelCase';
import uniqBy from 'lodash-es/uniqBy';
import union from 'lodash-es/union';
import take from 'lodash-es/take';

import * as Dates from './Dates';
import * as Locales from './Locales';

import { PsalterWeeks, LiturgicalColors, Types } from '../constants';
import { IRomcalDateItem } from '../models/romcal-date-item';
import { TChristmastideEndings, isNil } from '../utils/type-guards';
import { TPsalterWeek } from '../constants/PsalterWeeks';

import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';
import isLeapYear from 'dayjs/plugin/isLeapYear'; // dependent on isLeapYear plugin
import { ordinal } from './Locales';

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
 * Takes an array of [[IRomcalDateItem]] items and adds the source key.
 * Also updates the data object of the [[IRomcalDateItem]] to include the calendar key.
 * @param items An array of [[IRomcalDateItem]] values
 * @returns An array of [[IRomcalDateItem]] items.
 */
const _metadata = (items: Array<IRomcalDateItem>): Array<IRomcalDateItem> => {
  return items.map(({ date, ...rest }: IRomcalDateItem) => {
    return {
      ...rest,
      date,
      source: 'custom',
      data: {
        ...rest.data,
        calendar: {
          weeks: date.isoWeeksInYear(),
          week: date.week(),
          day: date.dayOfYear(),
        },
      },
    };
  });
};

/**
 * Calculates the days in the period of Epiphany.
 * @param year The year to use for the calculation
 * @param epiphanyOnSunday If false, Epiphany will be fixed to Jan 6 (defaults to true)
 */
const _epiphany = async (year: number, epiphanyOnSunday = true): Promise<Array<IRomcalDateItem>> => {
  const before: Array<dayjs.Dayjs> = Dates.daysBeforeEpiphany(year, epiphanyOnSunday);
  const after: Array<dayjs.Dayjs> = Dates.daysAfterEpiphany(year, epiphanyOnSunday);

  const datesBeforePromise = before.map(async (date: dayjs.Dayjs) => {
    return {
      date,
      key: `${date.locale('en').format('dddd')}BeforeEpiphany`,
      type: Types.FERIA,
      name: await Locales.localize({
        key: 'epiphany.before',
        day: date.format('dddd'),
      }),
      data: {
        season: [
          {
            key: 'CHRISTMASTIDE',
            value: await Locales.localize({
              key: 'christmastide.season',
            }),
          },
        ],
      },
    } as IRomcalDateItem;
  });

  const datesAfterPromise = after.map(async date => {
    return {
      date,
      key: `${date.locale('en').format('dddd')}AfterEpiphany`,
      type: Types.FERIA,
      name: await Locales.localize({
        key: 'epiphany.after',
        day: date.format('dddd'),
      }),
      data: {
        season: [
          {
            key: 'CHRISTMASTIDE',
            value: await Locales.localize({
              key: 'christmastide.season',
            }),
          },
        ],
      },
    } as IRomcalDateItem;
  });

  const daysBefore = await Promise.all(datesBeforePromise);
  const daysAfter = await Promise.all(datesAfterPromise);

  return [...daysBefore, ...daysAfter];
};

/**
 * Returns the days constituting holy week
 * @param year The year to use for the calculation
 */
const _holyWeek = async (year: number): Promise<Array<IRomcalDateItem>> => {
  const dates: dayjs.Dayjs[] = Dates.holyWeek(year);
  const datesPromise = dates.map(async date => {
    return {
      date,
      key: `${date.locale('en').format('dddd')}OfHolyWeek`,
      type: Types.HOLY_WEEK,
      name: await Locales.localize({
        key: 'holyWeek.feria',
        day: date.format('dddd'),
      }),
      data: {
        season: [
          {
            key: 'HOLY_WEEK',
            value: await Locales.localize({
              key: 'holyWeek.season',
            }),
          },
        ],
        meta: {
          liturgicalColor: LiturgicalColors.PURPLE,
        },
      },
    } as IRomcalDateItem;
  });
  const days = await Promise.all(datesPromise);
  return days;
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
const advent = async (year: number): Promise<Array<IRomcalDateItem>> => {
  const daysOfAdventPromise = Dates.daysOfAdvent(year).map(async (value, i) => {
    return {
      date: value,
      key:
        value.day() === 0
          ? `${ordinal(Math.floor(i / 7) + 1, true)}SundayOfAdvent`
          : `${value.locale('en').format('dddd')}OfThe${ordinal(Math.floor(i / 7) + 1).toUpperCase()}WeekOfAdvent`,
      type: Locales.getTypeByDayOfWeek(value.day()),
      name: await Locales.localize({
        key: value.day() === 0 ? 'advent.sunday' : 'advent.feria',
        day: value.format('dddd'),
        week: Math.floor(i / 7) + 1,
      }),
      data: {
        season: [
          {
            key: 'ADVENT',
            value: await Locales.localize({
              key: 'advent.season',
            }),
          },
        ],
        meta: {
          // The proper color of the Third Sunday of Advent is rose. Purple may also be used on these Sundays.
          liturgicalColor:
            Math.floor(i / 7) === 2 && value.day() === 0 ? LiturgicalColors.ROSE : LiturgicalColors.PURPLE,
        },
      },
    } as IRomcalDateItem;
  });
  let dateItemsWithoutKeyAndSource: Array<IRomcalDateItem> = await Promise.all(daysOfAdventPromise);

  // Sort dates according to their date.objects in ascending order
  dateItemsWithoutKeyAndSource = sortBy(dateItemsWithoutKeyAndSource, item => item.date.valueOf());

  const romcalDateItems: Array<IRomcalDateItem> = [];
  dateItemsWithoutKeyAndSource.forEach(({ name, key, data, ...rest }: IRomcalDateItem, index: number) => {
    const psalterWeek = getPsalterWeek(index);
    romcalDateItems.push({
      ...rest,
      ...(isNil(key) ? { key: camelCase(name) } : { key: camelCase(key) }), // Only add camel cased name as the key if it is not defined
      name,
      data: {
        ...data,
        meta: {
          ...data?.meta,
          // Set the psalter week
          psalterWeek: {
            key: psalterWeek,
            value: PsalterWeeks[psalterWeek],
          },
          // Set default season color if there is no color already set
          ...(data?.meta?.liturgicalColor ?? { liturgicalColor: LiturgicalColors.PURPLE }),
        },
      },
    } as IRomcalDateItem);
  });

  return _metadata(romcalDateItems);
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
 * @param christmastideEnds The mode to calculate the end of Christmastide. See [[TChristmastideEndings]] for more information
 * @param epiphanyOnSunday If false, Epiphany will be fixed to Jan 6 (defaults to true)
 * @param christmastideIncludesTheSeasonOfEpiphany If false, excludes the season of epiphany from being included in the season of Christmas
 */
const christmastide = async (
  year: number,
  christmastideEnds: TChristmastideEndings,
  epiphanyOnSunday = true,
  christmastideIncludesTheSeasonOfEpiphany = true,
): Promise<Array<IRomcalDateItem>> => {
  const datesOfChristmastide: dayjs.Dayjs[] = Dates.christmastide(year, christmastideEnds, epiphanyOnSunday);
  const datesInTheOctaveOfChristmas: dayjs.Dayjs[] = Dates.octaveOfChristmas(year);
  const epiphany: Array<IRomcalDateItem> = await _epiphany(year + 1, epiphanyOnSunday);
  let count = 0;

  const datesOfChristmastidePromise = datesOfChristmastide.map(async day => {
    const dayOfWeek = day.day();
    count = dayOfWeek === 0 ? count + 1 : count;
    return {
      date: day,
      key:
        dayOfWeek === 0
          ? `${ordinal(count, true)}SundayOfChristmas`
          : `${day.locale('en').format('dddd')}OfChristmastide`,
      type: Locales.getTypeByDayOfWeek(dayOfWeek),
      name: await Locales.localize({
        key: dayOfWeek === 0 ? 'christmastide.sunday' : 'christmastide.day',
        day: day.format('dddd'),
        count,
      }),
      data: {
        season: [
          {
            key: 'CHRISTMASTIDE',
            value: await Locales.localize({
              key: 'christmastide.season',
            }),
          },
        ],
      },
    } as IRomcalDateItem;
  });
  const daysOfChristmasTide: Array<IRomcalDateItem> = await Promise.all(datesOfChristmastidePromise);

  const datesInTheOctaveOfChristmasPromise = datesInTheOctaveOfChristmas.map(async (day, idx) => {
    return {
      date: day,
      key: `${ordinal(idx + 1, true)}DayInTheOctaveOfChristmas`,
      type: Locales.getTypeByDayOfWeek(day.day()),
      name: await Locales.localize({
        key: 'christmastide.octave',
        count: idx + 1,
      }),
      data: {
        season: [
          {
            key: 'CHRISTMASTIDE',
            value: await Locales.localize({
              key: 'christmastide.season',
            }),
          },
        ],
      },
    } as IRomcalDateItem;
  });
  const daysInTheOctaveOfChristmas: Array<IRomcalDateItem> = await Promise.all(datesInTheOctaveOfChristmasPromise);

  //==============================================================================
  // Override in order: solemnities, feasts, epiphany and octave of christmas
  // to days of christmas
  //==============================================================================

  // only merge the season of epiphany if the flag is true
  let combinedDaysOfChristmas: Array<IRomcalDateItem> = [];
  if (christmastideIncludesTheSeasonOfEpiphany === true) {
    combinedDaysOfChristmas = uniqBy(union(epiphany, daysInTheOctaveOfChristmas, daysOfChristmasTide), item =>
      item.date.valueOf(),
    );
  } else {
    combinedDaysOfChristmas = uniqBy(union(daysInTheOctaveOfChristmas, daysOfChristmasTide), item =>
      item.date.valueOf(),
    );
  }

  // Sort dates according to their unix tims
  combinedDaysOfChristmas = sortBy(combinedDaysOfChristmas, item => item.date.valueOf());

  let psalterWeekStart = 3;
  const [firstDateOfChristmasTide] = datesOfChristmastide;
  if (firstDateOfChristmasTide.day() === 0) {
    psalterWeekStart = 0;
  }

  combinedDaysOfChristmas = combinedDaysOfChristmas.map(({ name, key, data, ...rest }, index: number) => {
    const resolvedPsalterWeek = getPsalterWeek(index, psalterWeekStart);
    return {
      ...rest,
      ...(isNil(key) ? { key: camelCase(name) } : { key: camelCase(key) }), // Only add camel cased name as the key if it is not defined
      name,
      data: {
        ...data,
        meta: {
          ...data?.meta,
          titles: data?.meta?.titles ?? [],
          psalterWeek: {
            key: resolvedPsalterWeek,
            value: PsalterWeeks[resolvedPsalterWeek],
          },
          // Set default season color if there is no color already set
          ...(data?.meta?.liturgicalColor ?? { liturgicalColor: LiturgicalColors.WHITE }),
        },
      },
    } as IRomcalDateItem;
  });

  const withMetadata = _metadata(combinedDaysOfChristmas);
  return withMetadata;
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
 * @param christmastideEnds When does Christmas end. See [[TChristmastideEndings]] for more information
 * @param epiphanyOnSunday By default, Epiphany is celebrated on Sunday. If false, will cause Epiphany to land on January the 6th.
 * @returns
 */
const earlyOrdinaryTime = async (
  year: number,
  christmastideEnds: TChristmastideEndings,
  epiphanyOnSunday = true,
): Promise<Array<IRomcalDateItem>> => {
  const daysOfEarlyOrdinaryTimePromise = Dates.daysOfEarlyOrdinaryTime(year, christmastideEnds, epiphanyOnSunday).map(
    async (value, i) => {
      return {
        date: value,
        key:
          value.day() === 0
            ? `${ordinal(Math.floor(i / 7) + 2, true)}SundayOfOrdinaryTime`
            : `${value.locale('en').format('dddd')}OfThe${ordinal(Math.floor(i / 7) + 1, true)}WeekOfOrdinaryTime`,
        type: value.day() === 0 ? Types.SUNDAY : Types.FERIA,
        name: await Locales.localize({
          key: value.day() === 0 ? 'ordinaryTime.sunday' : 'ordinaryTime.feria',
          day: value.format('dddd'),
          week: value.day() === 0 ? Math.floor(i / 7) + 2 : Math.floor(i / 7) + 1,
        }),
        data: {
          season: [
            {
              key: 'EARLY_ORDINARY_TIME',
              value: await Locales.localize({
                key: 'ordinaryTime.season',
              }),
            },
          ],
        },
      } as IRomcalDateItem;
    },
  );
  let days: Array<IRomcalDateItem> = await Promise.all(daysOfEarlyOrdinaryTimePromise);

  // Sort dates according to the value of the DayJS date object
  days = sortBy(days, v => v.date.valueOf());

  const psalterWeekStart = 0;

  days = days.map(({ data, key, name, ...rest }: IRomcalDateItem, index: number) => {
    const resolvedPsalterWeek = getPsalterWeek(index, psalterWeekStart);
    return {
      ...rest,
      ...(isNil(key) ? { key: camelCase(name) } : { key: camelCase(key) }), // Only add camel cased name as the key if it is not defined
      name,
      data: {
        ...data,
        meta: {
          ...data?.meta,
          titles: data?.meta?.titles ?? [],
          psalterWeek: {
            key: resolvedPsalterWeek,
            value: PsalterWeeks[resolvedPsalterWeek],
          },
          // Set default season color if there is no color alreayd set
          ...(data?.meta?.liturgicalColor ?? { liturgicalColor: LiturgicalColors.GREEN }),
        },
      },
    } as IRomcalDateItem;
  });

  return _metadata(days);
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
const laterOrdinaryTime = async (year: number): Promise<Array<IRomcalDateItem>> => {
  // Keep track of the first week in later ordinary time
  // for later use
  let firstWeekOfLaterOrdinaryTime = 0;

  const daysOfLaterOrdinaryTimePromise = Dates.daysOfLaterOrdinaryTime(year)
    .reverse()
    .map(async (value, i) => {
      // Calculate the week of ordinary time
      // from the last sunday of the year (34th)
      const week = 34 - Math.floor(i / 7);
      firstWeekOfLaterOrdinaryTime = week;

      return {
        date: value,
        key:
          value.day() === 0
            ? `${ordinal(week, true)}SundayOfOrdinaryTime`
            : `${value.locale('en').format('dddd')}OfThe${ordinal(week, true).toUpperCase()}WeekOfOrdinaryTime`,
        type: value.day() === 0 ? Types.SUNDAY : Types.FERIA,
        name: await Locales.localize({
          key: value.day() === 0 ? 'ordinaryTime.sunday' : 'ordinaryTime.feria',
          day: value.format('dddd'),
          week: week,
        }),
        data: {
          season: [
            {
              key: 'LATER_ORDINARY_TIME',
              value: await Locales.localize({
                key: 'ordinaryTime.season',
              }),
            },
          ],
        },
      } as IRomcalDateItem;
    });
  let days: Array<IRomcalDateItem> = await Promise.all(daysOfLaterOrdinaryTimePromise);

  // Sort dates according to moment
  days = sortBy(days, v => v.date.valueOf());

  let psalterWeekStart = firstWeekOfLaterOrdinaryTime % 4;
  if (psalterWeekStart === 0) {
    psalterWeekStart = 3;
  }

  days = days.map(({ data, key, name, ...rest }: IRomcalDateItem, index: number) => {
    const resolvedPsalterWeek = getPsalterWeek(index, psalterWeekStart);
    return {
      ...rest,
      ...(isNil(key) ? { key: camelCase(name) } : { key: camelCase(key) }), // Only add camel cased name as the key if it is not defined
      name,
      data: {
        ...data,
        meta: {
          ...data?.meta,
          titles: data?.meta?.titles ?? [],
          psalterWeek: {
            key: resolvedPsalterWeek,
            value: PsalterWeeks[resolvedPsalterWeek],
          },
          // Set default season color if there is no color alreayd set
          ...(data?.meta?.liturgicalColor ?? { liturgicalColor: LiturgicalColors.GREEN }),
        },
      },
    };
  });

  return _metadata(days);
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
const lent = async (year: number): Promise<Array<IRomcalDateItem>> => {
  const daysOfLent: Array<dayjs.Dayjs> = Dates.daysOfLent(year);
  const sundaysOfLent: Array<dayjs.Dayjs> = Dates.sundaysOfLent(year);

  const daysOfLentPromise: Promise<IRomcalDateItem>[] = daysOfLent.map(async (value, i) => {
    return {
      date: value,
      key:
        i > 0 && i < 4
          ? `${value.locale('en').format('dddd')}AfterAshWednesday`
          : `${value.locale('en').format('dddd')}OfThe${ordinal(
              Math.floor((i - 4) / 7) + 1,
              true,
            ).toUpperCase()}WeekOfLent`,
      type: Types.FERIA,
      name: await Locales.localize({
        key: i > 0 && i < 4 ? 'lent.dayAfterAshWed' : 'lent.feria',
        day: value.format('dddd'),
        week: Math.floor((i - 4) / 7) + 1,
      }),
      data: {
        season: [
          {
            key: 'LENT',
            value: await Locales.localize({
              key: 'lent.season',
            }),
          },
        ],
      },
    } as IRomcalDateItem;
  });
  const ferialDays = await Promise.all(daysOfLentPromise);

  const sundaysOfLentPromise = sundaysOfLent.map(async (value, i) => {
    return {
      date: value,
      key: `${ordinal(i + 1, true)}SundayOfLent`,
      type: Types.SUNDAY,
      name: await Locales.localize({
        key: 'lent.sunday',
        week: i + 1,
      }),
      data: {
        season: [
          {
            key: 'LENT',
            value: await Locales.localize({
              key: 'lent.season',
            }),
          },
        ],
        meta: {
          // The proper color of the the Fourth Sunday of Lent is rose. Purple may also be used on these Sundays.
          liturgicalColor: i === 3 ? LiturgicalColors.ROSE : LiturgicalColors.PURPLE,
        },
      },
    } as IRomcalDateItem;
  });
  const sundays = await Promise.all(sundaysOfLentPromise);

  const holyWeek: Array<IRomcalDateItem> = await _holyWeek(year);

  let combinedDaysOfLent: Array<IRomcalDateItem> = [];

  // Override in order: Solemnities, Holy Week and Sundays of Lent to days of Lent
  combinedDaysOfLent = uniqBy(union(holyWeek, sundays, ferialDays), v => v.date.valueOf());

  // Sort dates according to DayJS
  combinedDaysOfLent = sortBy(combinedDaysOfLent, v => v.date.valueOf());

  const psalterWeekStart = 4;

  combinedDaysOfLent = combinedDaysOfLent.map(({ name, key, data, ...rest }: IRomcalDateItem, index: number) => {
    const resolvedPsalterWeek = getPsalterWeek(index, psalterWeekStart);
    return {
      ...rest,
      name,
      ...(isNil(key) ? { key: camelCase(name) } : { key: camelCase(key) }), // Only add camel cased name as the key if it is not defined
      data: {
        ...data,
        meta: {
          ...data?.meta,
          titles: data?.meta?.titles ?? [],
          psalterWeek: {
            key: resolvedPsalterWeek,
            value: PsalterWeeks[resolvedPsalterWeek],
          },
          // Set default season color if there is no color already set
          ...(data?.meta?.liturgicalColor ?? { liturgicalColor: LiturgicalColors.PURPLE }),
        },
      },
    };
  });

  combinedDaysOfLent = _metadata(combinedDaysOfLent);

  return combinedDaysOfLent;
};

/**
 * Takes the last 3 days of holy week which form the 3 days of Easter Triduum.
 *
 * @param year The year to use for the calculation
 */
const easterTriduum = async (year: number): Promise<Array<IRomcalDateItem>> => (await _holyWeek(year)).slice(-3);

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
const eastertide = async (year: number): Promise<Array<IRomcalDateItem>> => {
  const weekdaysOfEaster = Dates.daysOfEaster(year);
  const sundaysOfEaster = Dates.sundaysOfEaster(year);

  const weekdaysOfEasterPromise = weekdaysOfEaster.map(async (value, i) => {
    return {
      date: value,
      key:
        i > 0 && i < 7
          ? `Easter${value.locale('en').format('dddd')}`
          : `${value.locale('en').format('dddd')}OfThe${ordinal(
              Math.floor(i / 7) + 1,
              true,
            ).toUpperCase()}WeekOfEaster`,
      type: i > 0 && i < 7 ? Types.SOLEMNITY : Types.FERIA,
      name: await Locales.localize({
        key: i > 0 && i < 7 ? 'eastertide.octave' : 'eastertide.feria',
        day: value.locale('en').format('dddd'),
        week: Math.floor(i / 7) + 1,
      }),
      data: {
        season: [
          {
            key: 'EASTER',
            value: await Locales.localize({
              key: 'eastertide.season',
            }),
          },
        ],
      },
    } as IRomcalDateItem;
  });
  const days: Array<IRomcalDateItem> = await Promise.all(weekdaysOfEasterPromise);

  const sundaysOfEasterPromise = sundaysOfEaster.map(async (value, i) => {
    return {
      date: value,
      key: `${ordinal(i + 1, true)}SundayOfEaster`,
      type: Types.SUNDAY,
      name: await Locales.localize({
        key: 'eastertide.sunday',
        week: i + 1,
      }),
      data: {
        season: [
          {
            key: 'EASTER',
            value: await Locales.localize({
              key: 'eastertide.season',
            }),
          },
        ],
      },
    } as IRomcalDateItem;
  });
  const sundays: Array<IRomcalDateItem> = await Promise.all(sundaysOfEasterPromise);

  let combinedDaysOfEaster: Array<IRomcalDateItem> = [];

  // Insert Solemnities and Sundays of Easter to days of Easter
  combinedDaysOfEaster = uniqBy(union(sundays, days), v => v.date.valueOf());

  // Sort dates according to DayJS
  combinedDaysOfEaster = sortBy(combinedDaysOfEaster, v => v.date.valueOf());

  const psalterWeekStart = 2;

  combinedDaysOfEaster = combinedDaysOfEaster.map(({ name, key, data, ...rest }: IRomcalDateItem, index: number) => {
    let resolvedPsalterWeek: number;
    let psalterWeek: TPsalterWeek;
    if (index < 8) {
      psalterWeek = {
        key: 4,
        value: PsalterWeeks[4],
      };
    } else {
      resolvedPsalterWeek = getPsalterWeek(index, psalterWeekStart);
      psalterWeek = {
        key: resolvedPsalterWeek,
        value: PsalterWeeks[resolvedPsalterWeek],
      };
    }

    const dateItem: IRomcalDateItem = {
      ...rest,
      name,
      ...(isNil(key) ? { key: camelCase(name) } : { key: camelCase(key) }), // Only add camel cased name as the key if it is not defined
      data: {
        ...data,
        meta: {
          ...data?.meta,
          titles: data?.meta?.titles ?? [],
          psalterWeek,
          // Set default season color if there is no color already set
          ...(data?.meta?.liturgicalColor ?? { liturgicalColor: LiturgicalColors.WHITE }),
        },
      },
    };

    return dateItem;
  });

  combinedDaysOfEaster = _metadata(combinedDaysOfEaster);

  return combinedDaysOfEaster;
};

/**
 * Takes the days between Easter Sunday and Divine mercy sunday (inclusive) to form the easter octave
 *
 * @param year The year to use for the calculation
 */
const easterOctave = async (year: number): Promise<Array<IRomcalDateItem>> => take(await eastertide(year), 8);

export { advent, christmastide, earlyOrdinaryTime, lent, easterTriduum, easterOctave, eastertide, laterOrdinaryTime };
