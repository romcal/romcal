import { Dates } from '../utils/dates';
import dayjs, { Dayjs } from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import { Precedences } from '../constants/precedences';
import { LiturgicalSeasons } from '../constants/seasons';
import { LiturgicalPeriods } from '../constants/periods';
import LiturgicalDay, {
  RomcalCalendarMetadata,
  RomcalCyclesMetadata,
} from '../models/liturgical-day';
import { LiturgicalColors } from '../constants/colors';
import {
  LiturgicalDayCycles,
  PSALTER_WEEKS,
  PsalterWeeksCycles,
  SUNDAYS_CYCLE,
  SundaysCycles,
  WEEKDAYS_CYCLE,
  WeekdaysCycles,
} from '../constants/cycles';
import { RomcalConfig } from '../models/config';

dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear); // dependent on isLeapYear plugin
dayjs.extend(weekOfYear);

type DatesIndex = Record<string, string[]>;

export enum ChristmasTimeParts {
  All,
  EarlyChristmasTime,
  LateChristmasTime,
}

export type LiturgicalDefBuiltData = {
  byKeys: Record<string, LiturgicalDay>;
  datesIndex: DatesIndex;
};

export default class Temporale {
  config: RomcalConfig;

  private _cyclesCache?: Pick<
    RomcalCyclesMetadata,
    'liturgicalDayCycle' | 'sundayCycle' | 'weekdayCycle'
  >;

  private _calendarCache: Record<
    number,
    Pick<
      RomcalCalendarMetadata,
      'startOfLiturgicalYear' | 'endOfLiturgicalYear' | 'easter'
    >
  > = {};

  constructor(config: RomcalConfig) {
    this.config = config;
  }

  /**
   * Output cycle metadata of the liturgical year.
   */
  private _addLiturgicalCycleMetadata(
    date: Dayjs,
    calendar: RomcalCalendarMetadata,
  ): RomcalCyclesMetadata {
    // Compute cycle of the liturgical year,
    // and cache the data since they are the same for every days of the year
    if (!this._cyclesCache) {
      const year = dayjs(calendar.startOfLiturgicalYear).year();
      const firstSundayOfAdvent = Dates.firstSundayOfAdvent(year);

      let sundayCycle: SundaysCycles;
      let weekdayCycle: WeekdaysCycles;

      // Formula to calculate Sunday cycle (Year A, B, C)
      const thisSundayCycleIndex: number = (year - 1963) % 3;
      const nextSundayCycleIndex: number =
        thisSundayCycleIndex === 2 ? 0 : thisSundayCycleIndex + 1;

      // If the date is on or after the First Sunday of Advent,
      // it is the next liturgical cycle
      if (date.isSameOrAfter(firstSundayOfAdvent)) {
        sundayCycle = SundaysCycles[SUNDAYS_CYCLE[nextSundayCycleIndex]];
        weekdayCycle = WeekdaysCycles[WEEKDAYS_CYCLE[year % 2]];
      } else {
        sundayCycle = SundaysCycles[SUNDAYS_CYCLE[thisSundayCycleIndex]];
        weekdayCycle = WeekdaysCycles[WEEKDAYS_CYCLE[(year + 1) % 2]];
      }

      this._cyclesCache = {
        liturgicalDayCycle: LiturgicalDayCycles.TEMPORALE,
        sundayCycle,
        weekdayCycle,
      };
    }

    // Psalter week cycle restart to 1 at the beginning of each season.
    // Except during the four first days of lent (ash wednesday to the next saturday),
    // which are in week 4, to start on week 1 after the first sunday of lent.
    const weekIndex = (calendar.weekOfSeason % 4) - 1;
    const psalterWeek =
      PsalterWeeksCycles[PSALTER_WEEKS[weekIndex > -1 ? weekIndex : 3]];

    return { ...this._cyclesCache, psalterWeek };
  }

  private _computeCalendarMetadata = (
    year: number,
    date: Dayjs,
    startOfSeason: Dayjs,
    endOfSeason: Dayjs,
    weekOfSeason: number,
    dayOfSeason: number,
  ): RomcalCalendarMetadata => {
    // Cache data so we don't have to compute them again each days
    if (!this._calendarCache[year]) {
      const startOfLiturgicalYear = Dates.firstSundayOfAdvent(year);
      const endOfLiturgicalYear = Dates.firstSundayOfAdvent(year + 1).subtract(
        1,
        'day',
      );
      this._calendarCache[year] = {
        startOfLiturgicalYear: startOfLiturgicalYear.toDate(),
        endOfLiturgicalYear: endOfLiturgicalYear.toDate(),
        easter: Dates.easter(year).toDate(),
      };
    }

    const lCache = this._calendarCache[year];

    return {
      weekOfSeason,
      dayOfSeason,
      dayOfWeek: date.day(),
      dayOfWeekCountInMonth: Math.ceil(date.date() / 7),
      startOfLiturgicalYear: lCache.startOfLiturgicalYear,
      endOfLiturgicalYear: lCache.endOfLiturgicalYear,
      startOfSeason: startOfSeason.toDate(),
      endOfSeason: endOfSeason.toDate(),
      easter: lCache.easter,
    };
  };

  /**
   * Given a date in Christmastide, determine the week number of this season
   * @param date The date that occur during christmastide
   */
  private _getWeekOfChristmastide = (date: Dayjs): number => {
    const y = date.month() === 11 ? date.year() : date.year() - 1;
    const christmas = Dates.christmas(y);
    const firstDayOfWeek = christmas.clone().startOf('week');
    return date.diff(firstDayOfWeek, 'week') + 1;
  };

  /**
   * Generates the Proper of Time of the season of Advent
   * @param year
   */
  adventBuilder = (year: number): LiturgicalDefBuiltData => {
    const datesOfAdvent = Dates.datesOfAdvent(year - 1);
    const datesIndex: DatesIndex = {};

    const byKeys = datesOfAdvent.reduce(
      (acc: Record<string, LiturgicalDay>, date: Dayjs, idx) => {
        const week = Math.floor(idx / 7) + 1;

        const key =
          date.month() >= 11 && date.date() >= 17 && date.day() > 0
            ? `advent_${date.locale('en').format('MMMM_D').toLowerCase()}`
            : `advent_${Math.floor(idx / 7) + 1}_${date
                .locale('en')
                .format('dddd')
                .toLowerCase()}`;

        const precedence: Precedences =
          date.day() === 0
            ? // Sundays of Advent. (UNLY #59 2)
              Precedences.PrivilegedSunday_2
            : date.date() >= 17
            ? // Weekdays of Advent from December 17 up to and including December 24. (UNLY #59 9)
              Precedences.PrivilegedWeekday_9
            : // Weekdays of Advent up to and including December 16. (UNLY #59 13)
              Precedences.Weekday_13;

        const calendar = this._computeCalendarMetadata(
          year,
          date,
          datesOfAdvent[0],
          datesOfAdvent[datesOfAdvent.length - 1],
          week,
          idx,
        );

        acc[key] = new LiturgicalDay({
          date,
          key,
          name: key,
          precedence,
          seasons: [LiturgicalSeasons.ADVENT],
          periods: [],
          cycles: this._addLiturgicalCycleMetadata(date, calendar),
          calendar,
          liturgicalColors: [LiturgicalColors.PURPLE],
          isHolyDayOfObligation: date.day() === 0,
          fromCalendar: 'temporale',
        });

        const dateStr = date.format('YYYY-MM-DD');
        datesIndex[dateStr] = [key];

        return acc;
      },
      {},
    );

    return { byKeys, datesIndex };
  };

  christmasTimeBuilder = (
    year: number,
    part: ChristmasTimeParts = ChristmasTimeParts.All,
  ): LiturgicalDefBuiltData => {
    const datesOfChristmasTime = Dates.datesOfChristmasTime(year - 1);
    const datesIndex: DatesIndex = {};
    const byKeys: Record<string, LiturgicalDay> = {};
    let count = 0;

    datesOfChristmasTime.forEach((date: Dayjs, idx) => {
      const dayOfWeek = date.day();
      count = dayOfWeek === 0 ? count + 1 : count;

      let key: string;
      let precedence: Precedences;

      // Nativity of the Lord
      if (idx === 0) {
        key = 'christmas';
        precedence = Precedences.TemporaleSolemnity_2;
      }
      // Days within the Octave of Christmas. (UNLY #59 9)
      else if (idx < 7) {
        key = `christmas_octave_day_${idx + 1}`;
        precedence = Precedences.PrivilegedWeekday_9;
      }
      // Mary, the Holy Mother of God
      else if (idx === 7) {
        key = 'mary_mother_of_god';
        precedence = Precedences.GeneralSolemnity_3;
      }
      // Sundays of Christmas Time. (UNLY #59 6)
      else if (date.day() === 0) {
        key = `christmastide_${count}_${date
          .locale('en')
          .format('dddd')
          .toLowerCase()}`;
        precedence = Precedences.UnprivilegedSunday_6;
      }
      // Weekdays of Christmas Time from January 2 until the Saturday after the Epiphany. (UNLY #59 13)
      else {
        key = `christmastide_${count}_${date
          .locale('en')
          .format('dddd')
          .toLowerCase()}`;
        precedence = Precedences.Weekday_13;
      }

      if (
        part === ChristmasTimeParts.All ||
        (date.month() === 0 && part === ChristmasTimeParts.LateChristmasTime) ||
        (date.month() === 11 && part === ChristmasTimeParts.EarlyChristmasTime)
      ) {
        const calendar = this._computeCalendarMetadata(
          year,
          date,
          datesOfChristmasTime[0],
          datesOfChristmasTime[datesOfChristmasTime.length - 1],
          this._getWeekOfChristmastide(date),
          idx,
        );

        byKeys[key] = new LiturgicalDay({
          date,
          key,
          name: key,
          precedence,
          seasons: [LiturgicalSeasons.CHRISTMAS_TIME],
          periods: [
            ...(date.day() <= 31 || date.day() === 1
              ? [LiturgicalPeriods.CHRISTMAS_OCTAVE]
              : []),
          ],
          cycles: this._addLiturgicalCycleMetadata(date, calendar),
          calendar,
          liturgicalColors: [LiturgicalColors.WHITE],
          isHolyDayOfObligation: date.day() === 0,
          fromCalendar: 'temporale',
        });

        const dateStr = date.format('YYYY-MM-DD');
        datesIndex[dateStr] = [key];
      }
    });

    return { byKeys, datesIndex };
  };

  lentBuilder = (year: number): LiturgicalDefBuiltData => {
    const datesOfLent = Dates.datesOfLent(year);
    const datesIndex: DatesIndex = {};

    const byKeys = datesOfLent.reduce(
      (acc: Record<string, LiturgicalDay>, date: Dayjs, idx) => {
        const week = Math.floor((idx - 4) / 7) + 1;
        let key: string;
        let precedence: Precedences;
        let liturgicalColors = [LiturgicalColors.PURPLE];

        // Ash Wednesday
        if (idx === 0) {
          key = 'ash_wednesday';
          precedence = Precedences.AshWednesday_2;
        }
        // Days after Ash Wednesday
        else if (idx < 4) {
          key = `${date
            .locale('en')
            .format('dddd')
            .toLowerCase()}_after_ash_wednesday`;
          precedence = Precedences.PrivilegedWeekday_9;
        }
        // Palm Sunday of the Passion of the Lord. (UNLY #30)
        else if (idx === 39) {
          key = 'palm_sunday';
          precedence = Precedences.PrivilegedSunday_2;
          liturgicalColors = [LiturgicalColors.RED];
        }
        // Holy Week. (UNLY #30)
        else if (idx > 39) {
          key = `holy_${date.locale('en').format('dddd').toLowerCase()}`;
          precedence = Precedences.PrivilegedWeekday_9;
          // Holy Thursday is white
          if (idx === 43) liturgicalColors = [LiturgicalColors.WHITE];
        }
        // Sundays of Lent Time. (UNLY #59 2)
        else if (date.day() === 0) {
          key = `lent_${week}_sunday`;
          precedence = Precedences.PrivilegedSunday_2;
        }
        // Weekdays of Lent. (UNLY #59 9)
        else {
          key = `lent_${week}_${date
            .locale('en')
            .format('dddd')
            .toLowerCase()}`;
          precedence = Precedences.PrivilegedWeekday_9;
        }

        const calendar = this._computeCalendarMetadata(
          year,
          date,
          datesOfLent[0],
          datesOfLent[datesOfLent.length - 1],
          week,
          idx,
        );

        acc[key] = new LiturgicalDay({
          date,
          key,
          name: key,
          precedence,
          seasons: [LiturgicalSeasons.LENT],
          periods: [],
          cycles: this._addLiturgicalCycleMetadata(date, calendar),
          calendar,
          liturgicalColors,
          isHolyDayOfObligation: date.day() === 0,
          fromCalendar: 'temporale',
        });

        // Holy Week begins from the Sixth Sunday of Lent
        // (from Palm Sunday of the Passion of the Lord). (UNLY #30)
        if (idx >= 38) {
          acc[key].periods.push(LiturgicalPeriods.HOLY_WEEK);
        }

        // Holy Thursday is in between the season of Lent and the Paschal Triduum:
        // - The forty days of Lent run from Ash Wednesday up to but excluding
        //    the Mass of the Lord’s Supper exclusive. (UNLY #28)
        // - The Paschal Triduum of the Passion and Resurrection of the Lord begins with
        //   the evening Mass of the Lord’s Supper. (UNLY #19)
        if (idx === 43) {
          acc[key].seasons.push(LiturgicalSeasons.PASCHAL_TRIDUUM);
        }

        const dateStr = date.format('YYYY-MM-DD');
        datesIndex[dateStr] = [key];

        return acc;
      },
      {},
    );

    return { byKeys, datesIndex };
  };

  paschalTriduumBuilder = (year: number): LiturgicalDefBuiltData => {
    // Retrieve only Holy Friday and Holy Saturday,
    // the Holy Thursday is managed in the Lent function
    // Easter Sunday is managed in the EasterTime function
    const datesOfPaschalTriduum = Dates.datesOfPaschalTriduum(
      year,
      false,
    ).slice(0, -1);
    const datesIndex: DatesIndex = {};

    const byKeys = datesOfPaschalTriduum.reduce(
      (acc: Record<string, LiturgicalDay>, date: Dayjs, idx) => {
        const key = idx === 0 ? 'good_friday' : 'holy_saturday';

        const calendar = this._computeCalendarMetadata(
          year,
          date,
          datesOfPaschalTriduum[0],
          datesOfPaschalTriduum[datesOfPaschalTriduum.length - 1].add(1, 'day'),
          1,
          idx,
        );

        acc[key] = new LiturgicalDay({
          date,
          key,
          name: key,
          precedence: Precedences.Triduum_1,
          seasons: [LiturgicalSeasons.PASCHAL_TRIDUUM],
          periods: [LiturgicalPeriods.HOLY_WEEK],
          cycles: this._addLiturgicalCycleMetadata(date, calendar),
          calendar,
          liturgicalColors:
            idx === 0 ? [LiturgicalColors.RED] : [LiturgicalColors.WHITE],
          isHolyDayOfObligation: false,
          fromCalendar: 'temporale',
        });

        const dateStr = date.format('YYYY-MM-DD');
        datesIndex[dateStr] = [key];

        return acc;
      },
      {},
    );

    return { byKeys, datesIndex };
  };

  easterTimeBuilder = (year: number): LiturgicalDefBuiltData => {
    const datesOfEaster = Dates.datesOfEaster(year);
    const datesIndex: DatesIndex = {};

    const byKeys = datesOfEaster.reduce(
      (acc: Record<string, LiturgicalDay>, date: Dayjs, idx) => {
        const week = Math.floor(idx / 7) + 1;
        let key: string;
        let precedence: Precedences;

        // Easter Sunday
        if (idx == 0) {
          key = 'easter_sunday';
          precedence = Precedences.Triduum_1;
        }
        // Divine Mercy Sunday
        else if (idx === 7) {
          key = 'divine_mercy_sunday';
          precedence = Precedences.PrivilegedSunday_2;
        }
        // Pentecost Sunday
        else if (idx === 49) {
          key = 'pentecost_sunday';
          precedence = Precedences.TemporaleSolemnity_2;
        }
        // Sundays of Easter Time. (UNLY #59 2)
        else if (date.day() === 0) {
          key = `eastertide_${week}_sunday`;
          precedence = Precedences.PrivilegedSunday_2;
        }
        // Days within the Octave of Easter. (UNLY #59 2)
        else if (idx <= 7) {
          key = `easter_${date.locale('en').format('dddd').toLowerCase()}`;
          precedence = Precedences.WeekdayOfEasterOctave_2;
        }
        // Weekdays of the Easter Time from Monday after the Octave of Easter up to and including the
        // Saturday before Pentecost. (UNLY #59 13)
        else {
          key = `eastertide_${week}_${date
            .locale('en')
            .format('dddd')
            .toLowerCase()}`;
          precedence = Precedences.Weekday_13;
        }

        const calendar = this._computeCalendarMetadata(
          year,
          date,
          datesOfEaster[0],
          datesOfEaster[datesOfEaster.length - 1],
          week,
          idx,
        );

        acc[key] = new LiturgicalDay({
          date,
          key,
          name: key,
          precedence,
          seasons: [LiturgicalSeasons.EASTER_TIME],
          periods: [LiturgicalPeriods.HOLY_WEEK],
          cycles: this._addLiturgicalCycleMetadata(date, calendar),
          calendar,
          liturgicalColors: [LiturgicalColors.WHITE],
          isHolyDayOfObligation: date.day() === 0,
          fromCalendar: 'temporale',
        });

        // The Paschal Triduum of the Passion and Resurrection of the Lord begins with the evening Mass
        // of the Lord’s Supper, has its center in the Easter Vigil, and closes with Vespers (Evening Prayer) of the
        // Sunday of the Resurrection. (UNLY #19)
        if (idx === 0) {
          acc[key].seasons.unshift(LiturgicalSeasons.PASCHAL_TRIDUUM);
        }

        const dateStr = date.format('YYYY-MM-DD');
        datesIndex[dateStr] = [key];

        return acc;
      },
      {},
    );

    return { byKeys, datesIndex };
  };

  earlyOrdinaryTimeBuilder = (year: number): LiturgicalDefBuiltData =>
    this._ordinaryTimeBuilderFromDates(
      year,
      Dates.datesOfEarlyOrdinaryTime(year),
      LiturgicalPeriods.EARLY_ORDINARY_TIME,
      true,
    );

  lateOrdinaryTimeBuilder = (year: number): LiturgicalDefBuiltData =>
    this._ordinaryTimeBuilderFromDates(
      year,
      Dates.datesOfLateOrdinaryTime(year),
      LiturgicalPeriods.LATE_ORDINARY_TIME,
      false,
    );

  private _ordinaryTimeBuilderFromDates = (
    year: number,
    dates: Dayjs[],
    periodOfOrdinaryTime: LiturgicalPeriods,
    isEarlyOrdinaryTime: boolean,
  ): LiturgicalDefBuiltData => {
    const lateOrdinaryStartWeekCount = 35 - (dates.length + 1) / 7;
    const datesIndex: DatesIndex = {};

    const firstDayOfSeason = Dates.baptismOfTheLord(
      this.config.year,
      this.config.epiphanyOnSunday,
    ).add(1, 'day');
    const lastDayOfSeason = Dates.firstSundayOfAdvent(
      this.config.year + 1,
    ).subtract(1, 'day');

    const byKeys = dates.reduce(
      (acc: Record<string, LiturgicalDay>, date: Dayjs, idx) => {
        const week = isEarlyOrdinaryTime
          ? // Early Ordinary Time
            date.day() === 0
            ? Math.floor(idx / 7) + 2
            : Math.floor(idx / 7) + 1
          : // Late Ordinary Time
          date.day() === 0
          ? lateOrdinaryStartWeekCount + Math.floor(idx / 7) + 1
          : lateOrdinaryStartWeekCount + Math.floor(idx / 7);

        let key: string;
        let precedence: Precedences;

        // Our Lord Jesus Christ, King of the Universe
        if (week === 34 && date.day() === 0) {
          key = 'christ_the_king_sunday';
          precedence = Precedences.GeneralSolemnity_3;
        }
        // All other days
        else {
          key = `ordinary_time_${week}_${date
            .locale('en')
            .format('dddd')
            .toLowerCase()}`;
          precedence =
            date.day() === 0
              ? // Sundays in Ordinary Time. (UNLY #59 6)
                Precedences.UnprivilegedSunday_6
              : // Weekdays in Ordinary Time. (UNLY #59 13)
                Precedences.Weekday_13;
        }

        const calendar = this._computeCalendarMetadata(
          year,
          date,
          firstDayOfSeason,
          lastDayOfSeason,
          week,
          idx,
        );

        acc[key] = new LiturgicalDay({
          date,
          key,
          name: key,
          precedence,
          seasons: [LiturgicalSeasons.ORDINARY_TIME],
          periods: [periodOfOrdinaryTime],
          cycles: this._addLiturgicalCycleMetadata(date, calendar),
          calendar,
          liturgicalColors: [LiturgicalColors.GREEN],
          isHolyDayOfObligation: date.day() === 0,
          fromCalendar: 'temporale',
        });

        const dateStr = date.format('YYYY-MM-DD');
        datesIndex[dateStr] = [key];

        return acc;
      },
      {},
    );

    return { byKeys, datesIndex };
  };

  liturgicalYearBuilder = (): LiturgicalDefBuiltData => {
    const advent = this.adventBuilder(this.config.year);
    const christmasTime = this.christmasTimeBuilder(this.config.year);
    const earlyOrdinaryTime = this.earlyOrdinaryTimeBuilder(this.config.year);
    const lent = this.lentBuilder(this.config.year);
    const paschalTriduum = this.paschalTriduumBuilder(this.config.year);
    const easterTime = this.easterTimeBuilder(this.config.year);
    const lateOrdinaryTime = this.lateOrdinaryTimeBuilder(this.config.year);

    return {
      byKeys: {
        ...advent.byKeys,
        ...christmasTime.byKeys,
        ...earlyOrdinaryTime.byKeys,
        ...lent.byKeys,
        ...paschalTriduum.byKeys,
        ...easterTime.byKeys,
        ...lateOrdinaryTime.byKeys,
      },
      datesIndex: {
        ...advent.datesIndex,
        ...christmasTime.datesIndex,
        ...earlyOrdinaryTime.datesIndex,
        ...lent.datesIndex,
        ...paschalTriduum.datesIndex,
        ...easterTime.datesIndex,
        ...lateOrdinaryTime.datesIndex,
      },
    };
  };

  gregorianYearBuilder = (): LiturgicalDefBuiltData => {
    const lateChristmasTime = this.christmasTimeBuilder(
      this.config.year,
      ChristmasTimeParts.LateChristmasTime,
    );
    const earlyOrdinaryTime = this.earlyOrdinaryTimeBuilder(this.config.year);
    const lent = this.lentBuilder(this.config.year);
    const paschalTriduum = this.paschalTriduumBuilder(this.config.year);
    const easterTime = this.easterTimeBuilder(this.config.year);
    const lateOrdinaryTime = this.lateOrdinaryTimeBuilder(this.config.year);
    const advent = this.adventBuilder(this.config.year + 1);
    const earlyChristmasTime = this.christmasTimeBuilder(
      this.config.year + 1,
      ChristmasTimeParts.EarlyChristmasTime,
    );

    return {
      byKeys: {
        ...lateChristmasTime.byKeys,
        ...earlyOrdinaryTime.byKeys,
        ...lent.byKeys,
        ...paschalTriduum.byKeys,
        ...easterTime.byKeys,
        ...lateOrdinaryTime.byKeys,
        ...advent.byKeys,
        ...earlyChristmasTime.byKeys,
      },
      datesIndex: {
        ...lateChristmasTime.datesIndex,
        ...earlyOrdinaryTime.datesIndex,
        ...lent.datesIndex,
        ...paschalTriduum.datesIndex,
        ...easterTime.datesIndex,
        ...lateOrdinaryTime.datesIndex,
        ...advent.datesIndex,
        ...earlyChristmasTime.datesIndex,
      },
    };
  };
}
