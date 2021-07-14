import { LiturgicalColors } from '@roman-rite/constants/colors';
import {
  ProperCycles,
  PSALTER_WEEKS,
  PsalterWeeksCycles,
  SUNDAYS_CYCLE,
  SundaysCycles,
  WEEKDAYS_CYCLE,
  WeekdaysCycles,
} from '@roman-rite/constants/cycles';
import { MONTHS } from '@roman-rite/constants/months';
import { LiturgicalPeriods } from '@roman-rite/constants/periods';
import { Precedences } from '@roman-rite/constants/precedences';
import { LiturgicalSeasons } from '@roman-rite/constants/seasons';
import { WEEKDAYS } from '@roman-rite/constants/weekdays';
import { RomcalConfig } from '@roman-rite/models/config';
import LiturgicalDay from '@roman-rite/models/liturgical-day';
import {
  ByKeys,
  DatesIndex,
  LiturgicalDefBuiltData,
  ProperOfTimeDateDefinitions,
  ProperOfTimeDateDefInput,
} from '@roman-rite/types/calendar-def';
import { RomcalCalendarMetadata, RomcalCyclesMetadata } from '@roman-rite/types/liturgical-day';
import { Dates } from '@roman-rite/utils/dates';
import { CalendarScope } from '@romcal/constants/calendar-scope';
import dayjs, { Dayjs } from 'dayjs';

export const PROPER_OF_TIME_NAME = 'proper_of_time';

export class ProperOfTime {
  readonly #config: RomcalConfig;
  readonly #weekdays = WEEKDAYS;
  readonly #months = MONTHS;
  readonly dates: Dates;
  #cyclesCache?: Pick<RomcalCyclesMetadata, 'properCycle' | 'sundayCycle' | 'weekdayCycle'>;
  #calendarCache: Record<
    number,
    Pick<RomcalCalendarMetadata, 'startOfLiturgicalYear' | 'endOfLiturgicalYear'>
  > = {};

  #definitions: ProperOfTimeDateDefinitions = {};

  constructor(config: RomcalConfig) {
    this.#config = config;
    this.dates = config.dates;
  }

  /**
   * Build the base LiturgicalDay objects that occur during the whole liturgical year.
   */
  buildDates(): LiturgicalDefBuiltData {
    this.#populateDefinitions();

    const byKeys: Record<string, LiturgicalDay> = {};
    let datesIndex: DatesIndex = {};

    Object.keys(this.#definitions).forEach((key) => {
      const def: ProperOfTimeDateDefInput = this.#definitions[key];
      const date: Dayjs | null = def.date(this.#config.year);

      // If date is null, it means that this date doesn't occur in the given liturgical year.
      if (date === null) return;

      const calendar = def.calendar(date);
      const cycles = this.#computeLiturgicalCycleMetadata(date, calendar);

      const dateStr = date.format('YYYY-MM-DD');
      datesIndex[dateStr] = [...(datesIndex[dateStr] || []), key];

      byKeys[key] = new LiturgicalDay(
        {
          date,
          key,
          name: def.name,
          precedence: def.precedence,
          seasons: def.seasons,
          periods: def.periods,
          cycles,
          calendar,
          liturgicalColors: def.liturgicalColors,
          isHolyDayOfObligation: def.isHolyDayOfObligation ?? date.day() === 0,
          fromCalendar: PROPER_OF_TIME_NAME,
        },
        this.#config,
      );
    });

    // Order data by date
    datesIndex = Object.keys(datesIndex)
      .sort()
      .reduce((obj: DatesIndex, key) => {
        obj[key] = datesIndex[key];
        return obj;
      }, {});

    return {
      byKeys,
      datesIndex,
    };
  }

  buildAllDefinitions(): ByKeys {
    this.#populateDefinitions();

    const byKeys: ByKeys = {};

    Object.keys(this.#definitions).forEach((key) => {
      const def: ProperOfTimeDateDefInput = this.#definitions[key];
      const date: Dayjs | null = def.date(this.#config.year);

      // If date is null, it means that this date doesn't occur in the given liturgical year.
      if (date === null) return;

      const calendar = def.calendar(date);
      const cycles = this.#computeLiturgicalCycleMetadata(date, calendar);

      // byKeys[key] = new LiturgicalDayDef(
      //   {
      //     key,
      //     name: def.name,
      //     precedence: def.precedence,
      //     seasons: def.seasons,
      //     periods: def.periods,
      //     cycles,
      //     calendar,
      //     liturgicalColors: def.liturgicalColors,
      //     isHolyDayOfObligation: def.isHolyDayOfObligation ?? date.day() === 0,
      //     fromCalendar: 'proper_of_time',
      //   },
      //   this.#config,
      // );
    });

    return byKeys;
  }

  #populateDefinitions(): void {
    if (Object.keys(this.#definitions).length > 0) return;
    if (this.#config.scope === CalendarScope.Gregorian) {
      this.lateChristmasTime(this.#config.year);
      this.lent(this.#config.year);
      this.paschalTriduum(this.#config.year);
      this.easterTime(this.#config.year);
      this.ordinaryTime(this.#config.year);
      this.advent(this.#config.year + 1);
      this.earlyChristmasTime(this.#config.year + 1);
    } else {
      this.advent(this.#config.year);
      this.christmasTime(this.#config.year);
      this.lent(this.#config.year);
      this.paschalTriduum(this.#config.year);
      this.easterTime(this.#config.year);
      this.ordinaryTime(this.#config.year);
    }
  }

  /**
   * Compute the Proper of Advent
   * @param year The Liturgical year
   */
  advent(year: number): void {
    const startOfSeason = this.dates.firstSundayOfAdvent(year - 1);
    const endOfSeason = this.dates.christmas(year - 1).subtract(1, 'day');

    // All days, from the 1st Sunday of Advent to the Friday of the 3rd week of Advent.
    for (let i = 0; i < 20; i++) {
      const week = Math.floor(i / 7) + 1;
      const dow = i - (week - 1) * 7;
      this.#definitions[`advent_${week}_${this.#weekdays[dow]}`] = {
        precedence: dow === 0 ? Precedences.PrivilegedSunday_2 : Precedences.Weekday_13,
        date: (year) =>
          dow === 0
            ? this.dates.sundayOfAdvent(week, year - 1)
            : this.dates.unprivilegedWeekdayOfAdvent(dow, week, year - 1),
        isHolyDayOfObligation: dow === 0,
        seasons: [LiturgicalSeasons.ADVENT],
        periods: [],
        calendar: (date) =>
          this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, week, i + 1),
        liturgicalColors: [
          ...(week === 3 && dow === 0 ? [LiturgicalColors.ROSE] : []), // Gaudete
          LiturgicalColors.PURPLE,
        ],
        name:
          dow === 0
            ? this.#config.i18next.t('roman_rite:seasons.advent.sunday', { week })
            : this.#config.i18next.t('roman_rite:seasons.advent.weekday', { week, dow }),
      };
    }

    // Fourth Sunday of Advent.
    this.#definitions[`advent_4_${this.#weekdays[0]}`] = {
      precedence: Precedences.PrivilegedSunday_2,
      date: (year) => this.dates.sundayOfAdvent(4, year - 1),
      isHolyDayOfObligation: true,
      seasons: [LiturgicalSeasons.ADVENT],
      periods: [],
      calendar: (date) =>
        this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 4, 22),
      liturgicalColors: [LiturgicalColors.PURPLE],
      name: this.#config.i18next.t('roman_rite:seasons.advent.sunday', { week: 4 }),
    };

    // Week before Christmas, from the 17 to 24 December.
    for (let day = 17; day < 25; day++) {
      this.#definitions[`advent_${this.#months[11]}_${day}`] = {
        precedence: Precedences.PrivilegedWeekday_9,
        date: (year) => this.dates.privilegedWeekdayOfAdvent(day, year - 1),
        seasons: [LiturgicalSeasons.ADVENT],
        periods: [],
        // todo
        calendar: (date) =>
          this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
        liturgicalColors: [LiturgicalColors.PURPLE],
        name: this.#config.i18next.t('roman_rite:seasons.advent.privileged_weekday', { day }),
      };
    }
  }

  /**
   * Compute the Proper of the Christmas Time
   * @param year The Liturgical year
   */
  christmasTime(year: number): void {
    this.earlyChristmasTime(year);
    this.lateChristmasTime(year);
  }

  /**
   * Compute the Proper of the first part of the Christmas Time,
   * which is in the first Gregorian year of the liturgical year.
   * e.g.: A liturgical year that occur between the years 2019-2020,
   * it returns the Proper that correspond to the year 2019.
   * @param year The Liturgical year
   */
  earlyChristmasTime(year: number): void {
    const startOfSeason = this.dates.christmas(year - 1);
    const endOfSeason = this.dates.baptismOfTheLord(year);

    // The Nativity of the Lord.
    this.#definitions[`christmas`] = {
      precedence: Precedences.ProperOfTimeSolemnity_2,
      date: (year) => this.dates.christmas(year - 1),
      isHolyDayOfObligation: true,
      seasons: [LiturgicalSeasons.CHRISTMAS_TIME],
      periods: [
        LiturgicalPeriods.CHRISTMAS_OCTAVE,
        LiturgicalPeriods.CHRISTMAS_TO_PRESENTATION_OF_THE_LORD,
      ],
      calendar: (date) =>
        this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
      liturgicalColors: [LiturgicalColors.WHITE],
      name: this.#config.i18next.t(`roman_rite:celebrations.christmas`),
    };

    // Octave of the Nativity of the Lord (without December 25 and January 1).
    for (let count = 2; count < 8; count++) {
      this.#definitions[`christmas_octave_day_${count}`] = {
        precedence: Precedences.PrivilegedWeekday_9,
        date: (year) => this.dates.weekdayWithinOctaveOfChristmas(count, year - 1),
        seasons: [LiturgicalSeasons.CHRISTMAS_TIME],
        periods: [
          LiturgicalPeriods.CHRISTMAS_OCTAVE,
          LiturgicalPeriods.CHRISTMAS_TO_PRESENTATION_OF_THE_LORD,
        ],
        calendar: (date) =>
          this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
        liturgicalColors: [LiturgicalColors.WHITE],
        name: this.#config.i18next.t('roman_rite:seasons.christmas_time.octave', { count }),
      };
    }

    // The Sunday within the Octave of the Nativity of the Lord,
    // Feast of the Holy Family of Jesus, Mary and Joseph.
    this.#definitions[`holy_family`] = {
      precedence: Precedences.GeneralLordFeast_5,
      date: (year) => this.dates.holyFamily(year - 1),
      seasons: [LiturgicalSeasons.CHRISTMAS_TIME],
      periods: [
        LiturgicalPeriods.CHRISTMAS_OCTAVE,
        LiturgicalPeriods.CHRISTMAS_TO_PRESENTATION_OF_THE_LORD,
      ],
      calendar: (date) =>
        this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
      liturgicalColors: [LiturgicalColors.WHITE],
      name: this.#config.i18next.t(`roman_rite:celebrations.holy_family`),
    };
  }

  /**
   * Compute the Proper of the second part of the Christmas Time,
   * which is in the second Gregorian year of the liturgical year.
   * e.g.: A liturgical year that occur between the years 2019-2020,
   * it returns the Proper that correspond to the year 2020.
   * @param year The Liturgical year
   */
  lateChristmasTime(year: number): void {
    const startOfSeason = this.dates.christmas(year - 1);
    const endOfSeason = this.dates.baptismOfTheLord(year);

    // Solemnity of Mary, the Holy Mother of God.
    this.#definitions[`mary_mother_of_god`] = {
      precedence: Precedences.GeneralSolemnity_3,
      date: (year) => this.dates.maryMotherOfGod(year),
      isHolyDayOfObligation: true,
      seasons: [LiturgicalSeasons.CHRISTMAS_TIME],
      periods: [
        LiturgicalPeriods.CHRISTMAS_OCTAVE,
        LiturgicalPeriods.CHRISTMAS_TO_PRESENTATION_OF_THE_LORD,
      ],
      calendar: (date) =>
        this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
      liturgicalColors: [LiturgicalColors.WHITE],
      name: this.#config.i18next.t('roman_rite:celebrations.mary_mother_of_god'),
    };

    // Second Sunday after the Nativity.
    this.#definitions[`second_sunday_after_christmas`] = {
      precedence: Precedences.UnprivilegedSunday_6,
      date: (year) => this.dates.secondSundayAfterChristmas(year),
      isHolyDayOfObligation: true,
      seasons: [LiturgicalSeasons.CHRISTMAS_TIME],
      periods: [
        // todo: add period => can be before or after Epiphany
        LiturgicalPeriods.CHRISTMAS_TO_PRESENTATION_OF_THE_LORD,
      ],
      calendar: (date) =>
        this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
      liturgicalColors: [LiturgicalColors.WHITE],
      name: this.#config.i18next.t(
        'roman_rite:seasons.christmas_time.second_sunday_after_christmas',
      ),
    };

    // Weekdays of Christmas Time, before the Epiphany of the Lord.
    for (let day = 2; day < 9; day++) {
      this.#definitions[`christmas_time_${this.#months[0]}_${day}`] = {
        precedence: Precedences.Weekday_13,
        date: (year) => this.dates.weekdayBeforeEpiphany(day, year),
        seasons: [LiturgicalSeasons.CHRISTMAS_TIME],
        periods: [
          LiturgicalPeriods.DAYS_BEFORE_EPIPHANY,
          LiturgicalPeriods.CHRISTMAS_TO_PRESENTATION_OF_THE_LORD,
        ],
        calendar: (date) =>
          this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
        liturgicalColors: [LiturgicalColors.WHITE],
        name: this.#config.i18next.t('roman_rite:seasons.christmas_time.before_epiphany', { day }),
      };
    }

    // The Epiphany of the Lord.
    this.#definitions[`epiphany`] = {
      precedence: Precedences.ProperOfTimeSolemnity_2,
      date: (year) => this.dates.epiphany(year),
      isHolyDayOfObligation: true,
      seasons: [LiturgicalSeasons.CHRISTMAS_TIME],
      periods: [
        LiturgicalPeriods.DAYS_FROM_EPIPHANY,
        LiturgicalPeriods.CHRISTMAS_TO_PRESENTATION_OF_THE_LORD,
      ],
      calendar: (date) =>
        this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
      liturgicalColors: [LiturgicalColors.WHITE],
      name: this.#config.i18next.t('roman_rite:celebrations.epiphany'),
    };

    // Weekdays of Christmas Time, after the Epiphany of the Lord.
    for (let dow = 1; dow < 7; dow++) {
      this.#definitions[`${this.#weekdays[dow]}_after_epiphany`] = {
        precedence: Precedences.Weekday_13,
        date: (year) => this.dates.weekdayAfterEpiphany(dow, year),
        seasons: [LiturgicalSeasons.CHRISTMAS_TIME],
        periods: [
          LiturgicalPeriods.DAYS_FROM_EPIPHANY,
          LiturgicalPeriods.CHRISTMAS_TO_PRESENTATION_OF_THE_LORD,
        ],
        calendar: (date) =>
          this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
        liturgicalColors: [LiturgicalColors.WHITE],
        name: this.#config.i18next.t('roman_rite:seasons.christmas_time.after_epiphany', { dow }),
      };
    }

    // The Baptism of the Lord.
    this.#definitions[`baptism_of_the_lord`] = {
      precedence: Precedences.ProperOfTimeSolemnity_2,
      date: (year) => this.dates.baptismOfTheLord(year),
      isHolyDayOfObligation: true,
      seasons: [LiturgicalSeasons.CHRISTMAS_TIME],
      periods: [
        LiturgicalPeriods.DAYS_FROM_EPIPHANY,
        LiturgicalPeriods.CHRISTMAS_TO_PRESENTATION_OF_THE_LORD,
      ],
      calendar: (date) =>
        this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
      liturgicalColors: [LiturgicalColors.WHITE],
      name: this.#config.i18next.t('roman_rite:celebrations.baptism_of_the_lord'),
    };
  }

  /**
   * Compute the Proper of Lent
   * @param year The Liturgical year
   */
  lent(year: number): void {
    const startOfSeason = this.dates.ashWednesday(year);
    const endOfSeason = this.dates.holyThursday(year);

    // Ash Wednesday.
    this.#definitions[`ash_wednesday`] = {
      precedence: Precedences.AshWednesday_2,
      date: (year) => this.dates.ashWednesday(year),
      seasons: [LiturgicalSeasons.LENT],
      periods: [LiturgicalPeriods.PRESENTATION_OF_THE_LORD_TO_HOLY_THURSDAY],
      liturgicalColors: [LiturgicalColors.PURPLE],
      calendar: (date) =>
        this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
      name: this.#config.i18next.t(`roman_rite:celebrations.ash_wednesday`),
    };

    // Days after Ash Wednesday.
    for (let dow = 4; dow < 7; dow++) {
      this.#definitions[`${this.#weekdays[dow]}_after_ash_wednesday`] = {
        precedence: Precedences.PrivilegedWeekday_9,
        date: (year) => this.dates.ashWednesday(year).add(dow - 3, 'days'),
        seasons: [LiturgicalSeasons.LENT],
        periods: [LiturgicalPeriods.PRESENTATION_OF_THE_LORD_TO_HOLY_THURSDAY],
        liturgicalColors: [LiturgicalColors.PURPLE],
        calendar: (date) =>
          this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
        name: this.#config.i18next.t('roman_rite:seasons.lent.day_after_ash_wed', { dow }),
      };
    }

    // All days, from the 1st Sunday of Lent to the Saturday of the 5th week of Lent.
    for (let i = 0; i < 35; i++) {
      const week = Math.floor(i / 7) + 1;
      const dow = i - (week - 1) * 7;
      this.#definitions[`lent_${week}_${this.#weekdays[dow]}`] = {
        precedence: dow === 0 ? Precedences.PrivilegedSunday_2 : Precedences.PrivilegedWeekday_9,
        date: (year) => this.dates.ashWednesday(year).add(i + 4, 'days'),
        isHolyDayOfObligation: dow === 0,
        seasons: [LiturgicalSeasons.LENT],
        periods: [LiturgicalPeriods.PRESENTATION_OF_THE_LORD_TO_HOLY_THURSDAY],
        calendar: (date) =>
          this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
        liturgicalColors: [
          ...(week === 4 && dow === 0 ? [LiturgicalColors.ROSE] : []), // Laetare
          LiturgicalColors.PURPLE,
        ],
        name:
          dow === 0
            ? this.#config.i18next.t('roman_rite:seasons.lent.sunday', { week })
            : this.#config.i18next.t('roman_rite:seasons.lent.weekday', { week, dow }),
      };
    }

    // Palm Sunday of the Passion of the Lord.
    this.#definitions[`palm_sunday`] = {
      precedence: Precedences.PrivilegedSunday_2,
      date: (year) => this.dates.palmSunday(year),
      isHolyDayOfObligation: true,
      seasons: [LiturgicalSeasons.LENT],
      periods: [
        LiturgicalPeriods.HOLY_WEEK,
        LiturgicalPeriods.PRESENTATION_OF_THE_LORD_TO_HOLY_THURSDAY,
      ],
      calendar: (date) =>
        this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
      liturgicalColors: [LiturgicalColors.RED],
      name: this.#config.i18next.t(`roman_rite:celebrations.palm_sunday`),
    };

    // Holy Week, Monday to Thursday.
    for (let dow = 1; dow < 5; dow++) {
      this.#definitions[`holy_${this.#weekdays[dow]}`] = {
        precedence: Precedences.PrivilegedWeekday_9,
        date: (year) => this.dates.palmSunday(year).add(dow, 'days'),
        seasons: [LiturgicalSeasons.LENT],
        periods: [
          LiturgicalPeriods.HOLY_WEEK,
          LiturgicalPeriods.PRESENTATION_OF_THE_LORD_TO_HOLY_THURSDAY,
        ],
        calendar: (date) =>
          this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
        liturgicalColors: [LiturgicalColors.PURPLE],
        name: this.#config.i18next.t('roman_rite:seasons.lent.holy_week_day', { dow }),
      };
    }
  }

  /**
   * Compute the Proper of the Paschal Triduum
   * @param year The Liturgical year
   */
  paschalTriduum(year: number): void {
    const startOfSeason = this.dates.holyThursday(year);
    const endOfSeason = this.dates.easterSunday(year);

    // Thursday of the Lord's Supper (at the Evening Mass).
    this.#definitions[`thursday_of_the_lord_s_supper`] = {
      precedence: Precedences.Triduum_1,
      date: (year) => this.dates.holyThursday(year),
      seasons: [LiturgicalSeasons.PASCHAL_TRIDUUM],
      periods: [LiturgicalPeriods.HOLY_WEEK],
      calendar: (date) =>
        this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
      liturgicalColors: [LiturgicalColors.WHITE],
      name: this.#config.i18next.t(`roman_rite:celebrations.thursday_of_the_lord_s_supper`),
    };

    // Friday of the Passion of the Lord.
    this.#definitions[`good_friday`] = {
      precedence: Precedences.Triduum_1,
      date: (year) => this.dates.goodFriday(year),
      seasons: [LiturgicalSeasons.PASCHAL_TRIDUUM],
      periods: [LiturgicalPeriods.HOLY_WEEK],
      calendar: (date) =>
        this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
      liturgicalColors: [LiturgicalColors.RED],
      name: this.#config.i18next.t(`roman_rite:celebrations.good_friday`),
    };

    // Holy Saturday
    this.#definitions[`holy_saturday`] = {
      precedence: Precedences.Triduum_1,
      date: (year) => this.dates.holySaturday(year),
      seasons: [LiturgicalSeasons.PASCHAL_TRIDUUM],
      periods: [LiturgicalPeriods.HOLY_WEEK],
      calendar: (date) =>
        this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
      liturgicalColors: [],
      name: this.#config.i18next.t(`roman_rite:celebrations.holy_saturday`),
    };

    // Easter Sunday of the Resurrection of the Lord.
    this.#definitions[`easter_sunday`] = {
      precedence: Precedences.Triduum_1,
      date: (year) => this.dates.easterSunday(year),
      isHolyDayOfObligation: true,
      seasons: [LiturgicalSeasons.PASCHAL_TRIDUUM, LiturgicalSeasons.EASTER_TIME],
      periods: [LiturgicalPeriods.EASTER_OCTAVE],
      calendar: (date) =>
        this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
      liturgicalColors: [LiturgicalColors.WHITE],
      name: this.#config.i18next.t(`roman_rite:celebrations.easter_sunday`),
    };
  }

  /**
   * Compute the Proper of the Easter Time
   * @param year The Liturgical year
   */
  easterTime(year: number): void {
    const startOfSeason = this.dates.easterSunday(year);
    const endOfSeason = this.dates.pentecostSunday(year);

    // Octave of Easter.
    for (let dow = 1; dow < 7; dow++) {
      this.#definitions[`easter_${this.#weekdays[dow]}`] = {
        precedence: Precedences.WeekdayOfEasterOctave_2,
        date: (year) => this.dates.easterSunday(year).add(dow, 'days'),
        seasons: [LiturgicalSeasons.EASTER_TIME],
        periods: [LiturgicalPeriods.EASTER_OCTAVE],
        calendar: (date) =>
          this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
        liturgicalColors: [LiturgicalColors.WHITE],
        name: this.#config.i18next.t('roman_rite:seasons.easter_time.octave', { dow }),
      };
    }

    // Second Sunday of Easter, or of Divine Mercy.
    this.#definitions[`divine_mercy_sunday`] = {
      precedence: Precedences.PrivilegedSunday_2,
      date: (year) => this.dates.divineMercySunday(year),
      isHolyDayOfObligation: true,
      seasons: [LiturgicalSeasons.EASTER_TIME],
      periods: [LiturgicalPeriods.EASTER_OCTAVE],
      calendar: (date) =>
        this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
      liturgicalColors: [LiturgicalColors.WHITE],
      name: this.#config.i18next.t(`roman_rite:celebrations.divine_mercy_sunday`),
    };

    // All days, from the 2nd Monday to the 7th Saturday of Easter Time.
    for (let i = 8; i < 49; i++) {
      const week = Math.floor(i / 7) + 1;
      const dow = i - (week - 1) * 7;

      const data: ProperOfTimeDateDefInput = {
        precedence: dow === 0 ? Precedences.PrivilegedSunday_2 : Precedences.Weekday_13,
        date: (year) =>
          this.dates.weekdayOrSundayOfEasterTime(dow, week, year, this.#config.ascensionOnSunday),
        isHolyDayOfObligation: dow === 0,
        seasons: [LiturgicalSeasons.EASTER_TIME],
        periods: [],
        calendar: (date) =>
          this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
        liturgicalColors: [LiturgicalColors.WHITE],
        name:
          dow === 0
            ? this.#config.i18next.t('roman_rite:seasons.easter_time.sunday', { week })
            : this.#config.i18next.t('roman_rite:seasons.easter_time.weekday', { week, dow }),
      };
      // The Ascension of the Lord.
      if (week === 6 && dow === 4) {
        this.#definitions[`ascension`] = {
          ...data,
          precedence: Precedences.ProperOfTimeSolemnity_2,
          date: (year) => this.dates.ascension(year),
          isHolyDayOfObligation: true,
          name: this.#config.i18next.t(`roman_rite:celebrations.ascension`),
        };
      }
      // All other Sundays and weekdays.
      this.#definitions[`easter_time_${week}_${this.#weekdays[dow]}`] = { ...data };
    }

    // Pentecost Sunday.
    this.#definitions[`pentecost_sunday`] = {
      precedence: Precedences.PrivilegedSunday_2,
      date: (year) => this.dates.pentecostSunday(year),
      isHolyDayOfObligation: true,
      seasons: [LiturgicalSeasons.EASTER_TIME],
      periods: [],
      calendar: (date) =>
        this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
      liturgicalColors: [LiturgicalColors.RED],
      name: this.#config.i18next.t(`roman_rite:celebrations.pentecost_sunday`),
    };
  }

  /**
   * Compute the Proper of the Ordinary Time
   * @param year The Liturgical year
   */
  ordinaryTime(year: number): void {
    const startOfSeason = this.dates.baptismOfTheLord(year).add(1, 'day');
    const endOfSeason = this.dates.firstSundayOfAdvent(year + 1).subtract(1, 'day');
    const startOnMonday = this.dates.baptismOfTheLord(year).day() === 0;

    // The Most Holy Trinity.
    this.#definitions[`trinity_sunday`] = {
      precedence: Precedences.GeneralSolemnity_3,
      date: (year) => this.dates.trinitySunday(year),
      isHolyDayOfObligation: true,
      seasons: [LiturgicalSeasons.ORDINARY_TIME],
      periods: [],
      calendar: (date) =>
        this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
      liturgicalColors: [LiturgicalColors.WHITE],
      name: this.#config.i18next.t(`roman_rite:celebrations.trinity_sunday`),
    };

    // The Most Holy Body and Blood of Christ (Corpus Christi).
    this.#definitions[`corpus_christi`] = {
      precedence: Precedences.GeneralSolemnity_3,
      date: (year) => this.dates.corpusChristi(year),
      isHolyDayOfObligation: true,
      seasons: [LiturgicalSeasons.ORDINARY_TIME],
      periods: [],
      calendar: (date) =>
        this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
      liturgicalColors: [LiturgicalColors.WHITE],
      name: this.#config.i18next.t(`roman_rite:celebrations.corpus_christi`),
    };

    // The Most Sacred Heart of Jesus.
    this.#definitions[`most_sacred_heart_of_jesus`] = {
      precedence: Precedences.GeneralSolemnity_3,
      date: (year) => this.dates.mostSacredHeartOfJesus(year),
      isHolyDayOfObligation: true,
      seasons: [LiturgicalSeasons.ORDINARY_TIME],
      periods: [],
      calendar: (date) =>
        this.#computeCalendarMetadata(year, date, startOfSeason, endOfSeason, 0, 0),
      liturgicalColors: [LiturgicalColors.WHITE],
      name: this.#config.i18next.t(`roman_rite:celebrations.most_sacred_heart_of_jesus`),
    };

    // Ordinary Time.
    for (let i = 1; i < 238; i++) {
      const week = Math.floor(i / 7) + 1;
      const dow = i - (week - 1) * 7;

      const calendar = (date: Dayjs) =>
        this.#computeCalendarMetadata(
          year,
          date,
          startOfSeason,
          endOfSeason,
          week,
          startOnMonday ? i : i + 1,
        );

      const data: ProperOfTimeDateDefInput = {
        precedence: dow === 0 ? Precedences.UnprivilegedSunday_6 : Precedences.Weekday_13,
        date: (year) => this.dates.dateOfOrdinaryTime(dow, week, year),
        isHolyDayOfObligation: dow === 0,
        seasons: [LiturgicalSeasons.ORDINARY_TIME],
        periods: [], // todo: add early / late ordinary time
        calendar,
        liturgicalColors: [LiturgicalColors.GREEN],
        name:
          dow === 0
            ? this.#config.i18next.t('roman_rite:seasons.ordinary_time.sunday', { week })
            : this.#config.i18next.t('roman_rite:seasons.ordinary_time.weekday', { week, dow }),
      };

      // Sunday of the Word of God
      // http://www.vatican.va/content/francesco/en/motu_proprio/documents/papa-francesco-motu-proprio-20190930_aperuit-illis.html
      if (week === 3 && dow === 0) {
        this.#definitions[`sunday_of_the_word_of_god`] = {
          ...data,
          // date:
          name: this.#config.i18next.t(`roman_rite:celebrations.sunday_of_the_word_of_god`),
        };
      }

      // 34th week in Ordinary Time,
      // or the Solemnity of our Lord Jesus Christ, King of the Universe.
      else if (week === 34 && dow === 0) {
        this.#definitions[`christ_the_king_sunday`] = {
          ...data,
          precedence: Precedences.GeneralSolemnity_3,
          liturgicalColors: [LiturgicalColors.WHITE],
          name: this.#config.i18next.t(`roman_rite:celebrations.christ_the_king_sunday`),
        };
      }

      // All other Sundays and weekdays.
      else {
        this.#definitions[`ordinary_time_${week}_${this.#weekdays[dow]}`] = { ...data };
      }
    }
  }

  /**
   * Compute the calendar metadata that are integrated on the base liturgical day
   * @param year The Gregorian year
   * @param date The date object
   * @param startOfSeason Date of the start of the season
   * @param endOfSeason Date of the end of the season
   * @param weekOfSeason Nth week of the season
   * @param dayOfSeason Nth day of the season
   */
  #computeCalendarMetadata = (
    year: number,
    date: Dayjs,
    startOfSeason: Dayjs,
    endOfSeason: Dayjs,
    weekOfSeason: number,
    dayOfSeason: number,
  ): RomcalCalendarMetadata => {
    // Cache data so we don't have to compute them again each days
    if (!this.#calendarCache[year]) {
      const startOfLiturgicalYear = this.dates.firstSundayOfAdvent(
        this.#config.scope === CalendarScope.Liturgical ? year : year - 1,
      );
      const endOfLiturgicalYear = this.dates
        .firstSundayOfAdvent(this.#config.scope === CalendarScope.Liturgical ? year + 1 : year)
        .subtract(1, 'day');
      this.#calendarCache[year] = {
        startOfLiturgicalYear: startOfLiturgicalYear.toISOString(),
        endOfLiturgicalYear: endOfLiturgicalYear.toISOString(),
      };
    }

    const lCache = this.#calendarCache[year];

    return {
      weekOfSeason,
      dayOfSeason,
      dayOfWeek: date.day(),
      nthDayOfWeekInMonth: Math.ceil(date.date() / 7),
      startOfLiturgicalYear: lCache.startOfLiturgicalYear,
      endOfLiturgicalYear: lCache.endOfLiturgicalYear,
      startOfSeason: startOfSeason.toISOString(),
      endOfSeason: endOfSeason.toISOString(),
    };
  };

  /**
   * Compute cycle metadata of the liturgical year.
   * @param date The date object
   * @param calendar The calendar metadata
   * @private
   */
  #computeLiturgicalCycleMetadata(
    date: Dayjs,
    calendar: RomcalCalendarMetadata,
  ): RomcalCyclesMetadata {
    // Compute cycle of the liturgical year,
    // and cache the data since they are the same for every days of the year
    if (!this.#cyclesCache) {
      const year = dayjs(calendar.startOfLiturgicalYear).year();
      const firstSundayOfAdvent = this.dates.firstSundayOfAdvent(year);

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

      this.#cyclesCache = {
        properCycle: ProperCycles.PROPER_OF_TIME,
        sundayCycle,
        weekdayCycle,
      };
    }

    // Psalter week cycle restart to 1 at the beginning of each season.
    // Except during the four first days of lent (ash wednesday to the next saturday),
    // which are in week 4, to start on week 1 after the first sunday of lent.
    const weekIndex = (calendar.weekOfSeason % 4) - 1;
    const psalterWeek = PsalterWeeksCycles[PSALTER_WEEKS[weekIndex > -1 ? weekIndex : 3]];

    return { ...this.#cyclesCache, psalterWeek };
  }
}
