import { Dates } from '../utils/dates';
import { Dayjs } from 'dayjs';
import { Precedences } from '../constants/precedences';
import { LiturgicalSeasons } from '../constants/seasons';
import { LiturgicalPeriods } from '../constants/periods';
import LiturgicalDay from '../models/liturgical-day';
import { LiturgicalColors } from '../constants/colors';

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
  /**
   * Generates the Proper of Time of the season of Advent
   * @param year
   */
  static adventBuilder = (year: number): LiturgicalDefBuiltData => {
    const datesOfAdvent = Dates.datesOfAdvent(year - 1);
    const datesIndex: DatesIndex = {};

    const byKeys = datesOfAdvent.reduce(
      (acc: Record<string, LiturgicalDay>, date: Dayjs, idx) => {
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

        acc[key] = new LiturgicalDay({
          date,
          key,
          name: key,
          precedence,
          seasons: [LiturgicalSeasons.ADVENT],
          periods: [],
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

  static christmasTimeBuilder = (
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

  static lentBuilder = (year: number): LiturgicalDefBuiltData => {
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

        acc[key] = new LiturgicalDay({
          date,
          key,
          name: key,
          precedence,
          seasons: [LiturgicalSeasons.LENT],
          periods: [],
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

  static paschalTriduumBuilder = (year: number): LiturgicalDefBuiltData => {
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

        acc[key] = new LiturgicalDay({
          date,
          key,
          name: key,
          precedence: Precedences.Triduum_1,
          seasons: [LiturgicalSeasons.PASCHAL_TRIDUUM],
          periods: [LiturgicalPeriods.HOLY_WEEK],
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

  static easterTimeBuilder = (year: number): LiturgicalDefBuiltData => {
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

        acc[key] = new LiturgicalDay({
          date,
          key,
          name: key,
          precedence,
          seasons: [LiturgicalSeasons.EASTER_TIME],
          periods: [LiturgicalPeriods.HOLY_WEEK],
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

  static earlyOrdinaryTimeBuilder = (year: number): LiturgicalDefBuiltData =>
    Temporale._ordinaryTimeBuilderFromDates(
      Dates.datesOfEarlyOrdinaryTime(year),
      LiturgicalPeriods.EARLY_ORDINARY_TIME,
      true,
    );

  static lateOrdinaryTimeBuilder = (year: number): LiturgicalDefBuiltData =>
    Temporale._ordinaryTimeBuilderFromDates(
      Dates.datesOfLateOrdinaryTime(year),
      LiturgicalPeriods.LATE_ORDINARY_TIME,
      false,
    );

  private static _ordinaryTimeBuilderFromDates = (
    dates: Dayjs[],
    periodOfOrdinaryTime: LiturgicalPeriods,
    isEarlyOrdinaryTime: boolean,
  ): LiturgicalDefBuiltData => {
    const lateOrdinaryStartWeekCount = 35 - (dates.length + 1) / 7;
    const datesIndex: DatesIndex = {};

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

        acc[key] = new LiturgicalDay({
          date,
          key,
          name: key,
          precedence,
          seasons: [LiturgicalSeasons.ORDINARY_TIME],
          periods: [periodOfOrdinaryTime],
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

  static liturgicalYearBuilder = (year: number): LiturgicalDefBuiltData => {
    const advent = Temporale.adventBuilder(year);
    const christmasTime = Temporale.christmasTimeBuilder(year);
    const earlyOrdinaryTime = Temporale.earlyOrdinaryTimeBuilder(year);
    const lent = Temporale.lentBuilder(year);
    const paschalTriduum = Temporale.paschalTriduumBuilder(year);
    const easterTime = Temporale.easterTimeBuilder(year);
    const lateOrdinaryTime = Temporale.lateOrdinaryTimeBuilder(year);

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

  static gregorianYearBuilder = (year: number): LiturgicalDefBuiltData => {
    const lateChristmasTime = Temporale.christmasTimeBuilder(
      year,
      ChristmasTimeParts.LateChristmasTime,
    );
    const earlyOrdinaryTime = Temporale.earlyOrdinaryTimeBuilder(year);
    const lent = Temporale.lentBuilder(year);
    const paschalTriduum = Temporale.paschalTriduumBuilder(year);
    const easterTime = Temporale.easterTimeBuilder(year);
    const lateOrdinaryTime = Temporale.lateOrdinaryTimeBuilder(year);
    const advent = Temporale.adventBuilder(year + 1);
    const earlyChristmasTime = Temporale.christmasTimeBuilder(
      year + 1,
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
