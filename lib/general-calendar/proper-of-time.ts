import { Colors } from '../constants/colors';
import { ProperCycles } from '../constants/cycles';
import { PROPER_OF_TIME_NAME } from '../constants/general-calendar-names';
import { MONTHS } from '../constants/months';
import { Period } from '../constants/periods';
import { Precedences } from '../constants/precedences';
import { Season } from '../constants/seasons';
import { WEEKDAYS } from '../constants/weekdays';
import { CalendarDef } from '../models/calendar-def';
import { RomcalConfig } from '../models/config';
import { LiturgicalDayDef } from '../models/liturgical-day-def';
import { BundleInputs } from '../types/calendar-def';
import { Id } from '../types/common';
import { LiturgicalDayProperOfTimeInput } from '../types/liturgical-day';

export class ProperOfTime extends CalendarDef {
  readonly #config: RomcalConfig;

  readonly #weekdays = WEEKDAYS;

  readonly #months = MONTHS;

  readonly #calendarName: string = PROPER_OF_TIME_NAME;

  public get calendarName(): string {
    return this.#calendarName;
  }

  constructor(config: RomcalConfig, inputs?: BundleInputs) {
    super(config, inputs);
    this.#config = config;
  }

  buildAllDefinitions = (): void => {
    if (Object.keys(Object.keys(this.#config.liturgicalDayDef)).length > 0) return;

    if (this.#config.scope === 'gregorian') {
      this.lateChristmasTime();
      this.lent();
      this.paschalTriduum();
      this.easterTime();
      this.ordinaryTime();
      this.advent(+1);
      this.earlyChristmasTime(+1);
    } else {
      this.advent();
      this.christmasTime();
      this.lent();
      this.paschalTriduum();
      this.easterTime();
      this.ordinaryTime();
    }
  };

  /**
   * Helper function to create new LiturgicalDayDef object
   * @param id
   * @param input
   * @private
   */
  #newLiturgicalDayDef(id: Id, input: LiturgicalDayProperOfTimeInput): LiturgicalDayDef {
    return new LiturgicalDayDef(
      id,
      { properCycle: ProperCycles.ProperOfTime, ...input },
      PROPER_OF_TIME_NAME,
      this.#config
    );
  }

  /**
   * Compute the Proper of Advent
   * @param yearOffset A Liturgical year offset
   */
  advent(yearOffset = 0): void {
    // All days, from the 1st Sunday of Advent to the Friday of the 3rd week of Advent.
    for (let i = 0; i < 20; i += 1) {
      const week = Math.floor(i / 7) + 1;
      const dow = i - (week - 1) * 7;

      this.#newLiturgicalDayDef(`advent_${week}_${this.#weekdays[dow]}`, {
        precedence: dow === 0 ? Precedences.PrivilegedSunday_2 : Precedences.Weekday_13,
        dateDef:
          dow === 0
            ? { dateFn: 'sundayOfAdvent', dateArgs: [week], yearOffset: -1 + yearOffset }
            : {
                dateFn: 'unprivilegedWeekdayOfAdvent',
                dateArgs: [dow, week],
                yearOffset: -1 + yearOffset,
              },
        isHolyDayOfObligation: dow === 0,
        seasons: [Season.Advent],
        periods: [],
        calendarMetadata: { weekOfSeason: week, dayOfSeason: i + 1, dayOfWeek: dow },
        colors: [
          ...(week === 3 && dow === 0 ? [Colors.Rose] : []), // Gaudete
          Colors.Purple,
        ],
        i18nDef: dow === 0 ? ['seasons:advent.sunday', { week }] : ['seasons:advent.weekday', { week, dow }],
      });
    }

    // Fourth Sunday of Advent.
    this.#newLiturgicalDayDef(`advent_4_${this.#weekdays[0]}`, {
      precedence: Precedences.PrivilegedSunday_2,
      dateDef: { dateFn: 'sundayOfAdvent', dateArgs: [4], yearOffset: -1 + yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.Advent],
      periods: [],
      calendarMetadata: { weekOfSeason: 4, dayOfSeason: 22, dayOfWeek: 0 },
      colors: [Colors.Purple],
      i18nDef: ['seasons:advent.sunday', { week: 4 }],
    });

    // Week before Christmas, from the 17 to 24 December.
    for (let day = 17; day < 25; day += 1) {
      this.#newLiturgicalDayDef(`advent_${this.#months[11]}_${day}`, {
        precedence: Precedences.PrivilegedWeekday_9,
        dateDef: {
          dateFn: 'privilegedWeekdayOfAdvent',
          dateArgs: [day],
          yearOffset: -1 + yearOffset,
        },
        seasons: [Season.Advent],
        periods: [],
        calendarMetadata: {},
        colors: [Colors.Purple],
        i18nDef: ['seasons:advent.privileged_weekday', { day }],
      });
    }
  }

  /**
   * Compute the Proper of the Christmas Time
   * @param yearOffset A Liturgical year offset
   */
  christmasTime(yearOffset = 0): void {
    this.earlyChristmasTime(yearOffset);
    this.lateChristmasTime(yearOffset);
  }

  /**
   * Compute the Proper of the first part of the Christmas Time,
   * which is in the first Gregorian year of the liturgical year.
   * e.g.: A liturgical year that occur between the years 2019-2020,
   * it returns the Proper that correspond to the year 2019.
   * @param yearOffset A Liturgical year offset
   */
  earlyChristmasTime(yearOffset = 0): void {
    // The Nativity of the Lord.
    this.#newLiturgicalDayDef(`nativity_of_the_lord`, {
      precedence: Precedences.ProperOfTimeSolemnity_2,
      dateDef: { dateFn: 'christmas', yearOffset: -1 + yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.ChristmasTime],
      periods: [Period.ChristmasOctave, Period.ChristmasToPresentationOfTheLord],
      calendarMetadata: { weekOfSeason: 1, dayOfSeason: 1 },
      colors: [Colors.White],
      i18nDef: [`names:nativity_of_the_lord`],
    });

    // Octave of the Nativity of the Lord (without December 25 and January 1).
    for (let count = 2; count < 8; count += 1) {
      this.#newLiturgicalDayDef(`christmas_octave_day_${count}`, {
        precedence: Precedences.PrivilegedWeekday_9,
        dateDef: {
          dateFn: 'weekdayWithinOctaveOfChristmas',
          dateArgs: [count],
          yearOffset: -1 + yearOffset,
        },
        seasons: [Season.ChristmasTime],
        periods: [Period.ChristmasOctave, Period.ChristmasToPresentationOfTheLord],
        calendarMetadata: { dayOfSeason: count },
        colors: [Colors.White],
        i18nDef: ['seasons:christmas_time.octave', { count }],
      });
    }

    // The Sunday within the Octave of the Nativity of the Lord,
    // Feast of the Holy Family of Jesus, Mary and Joseph.
    this.#newLiturgicalDayDef(`holy_family_of_jesus_mary_and_joseph`, {
      precedence: Precedences.GeneralLordFeast_5,
      dateDef: { dateFn: 'holyFamily', yearOffset: -1 + yearOffset },
      seasons: [Season.ChristmasTime],
      periods: [Period.ChristmasOctave, Period.ChristmasToPresentationOfTheLord],
      calendarMetadata: {},
      colors: [Colors.White],
      i18nDef: [`names:holy_family_of_jesus_mary_and_joseph`],
    });
  }

  /**
   * Compute the Proper of the second part of the Christmas Time,
   * which is in the second Gregorian year of the liturgical year.
   * e.g.: A liturgical year that occur between the years 2019-2020,
   * it returns the Proper that correspond to the year 2020.
   * @param yearOffset A Liturgical year offset
   */
  lateChristmasTime(yearOffset = 0): void {
    // Solemnity of Mary, the Holy Mother of God.
    this.#newLiturgicalDayDef(`mary_mother_of_god`, {
      precedence: Precedences.GeneralSolemnity_3,
      dateDef: { dateFn: 'maryMotherOfGod', yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.ChristmasTime],
      periods: [Period.ChristmasOctave, Period.ChristmasToPresentationOfTheLord],
      calendarMetadata: { dayOfSeason: 8 },
      colors: [Colors.White],
      i18nDef: ['names:mary_mother_of_god'],
    });

    // Second Sunday after the Nativity.
    this.#newLiturgicalDayDef(`second_sunday_after_christmas`, {
      precedence: Precedences.UnprivilegedSunday_6,
      dateDef: { dateFn: 'secondSundayAfterChristmas', yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.ChristmasTime],
      periods: [
        // Note: before / from Epiphany flag is added during the creation of the liturgical day object,
        // because this can only be determined within a liturgical year scope.
        Period.ChristmasToPresentationOfTheLord,
      ],
      calendarMetadata: {},
      colors: [Colors.White],
      i18nDef: ['seasons:christmas_time.second_sunday_after_christmas'],
    });

    // Weekdays of Christmas Time, before the Epiphany of the Lord.
    for (let day = 2; day < 9; day += 1) {
      this.#newLiturgicalDayDef(`christmas_time_${this.#months[0]}_${day}`, {
        precedence: Precedences.Weekday_13,
        dateDef: { dateFn: 'weekdayBeforeEpiphany', dateArgs: [day], yearOffset },
        seasons: [Season.ChristmasTime],
        periods: [Period.DaysBeforeEpiphany, Period.ChristmasToPresentationOfTheLord],
        calendarMetadata: { dayOfSeason: 7 + day },
        colors: [Colors.White],
        i18nDef: ['seasons:christmas_time.before_epiphany', { day }],
      });
    }

    // The Epiphany of the Lord.
    this.#newLiturgicalDayDef(`epiphany_of_the_lord`, {
      precedence: Precedences.ProperOfTimeSolemnity_2,
      dateDef: { dateFn: 'epiphany', yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.ChristmasTime],
      periods: [Period.DaysFromEpiphany, Period.ChristmasToPresentationOfTheLord],
      calendarMetadata: {},
      colors: [Colors.White],
      i18nDef: ['names:epiphany_of_the_lord'],
    });

    // Weekdays of Christmas Time, after the Epiphany of the Lord.
    for (let dow = 1; dow < 7; dow += 1) {
      this.#newLiturgicalDayDef(`${this.#weekdays[dow]}_after_epiphany`, {
        precedence: Precedences.Weekday_13,
        dateDef: { dateFn: 'weekdayAfterEpiphany', dateArgs: [dow], yearOffset },
        seasons: [Season.ChristmasTime],
        periods: [Period.DaysFromEpiphany, Period.ChristmasToPresentationOfTheLord],
        calendarMetadata: {},
        colors: [Colors.White],
        i18nDef: ['seasons:christmas_time.after_epiphany', { dow }],
      });
    }

    // The Baptism of the Lord.
    this.#newLiturgicalDayDef(`baptism_of_the_lord`, {
      precedence: Precedences.ProperOfTimeSolemnity_2,
      dateDef: { dateFn: 'baptismOfTheLord', yearOffset },
      seasons: [Season.ChristmasTime],
      periods: [Period.DaysFromEpiphany, Period.ChristmasToPresentationOfTheLord],
      calendarMetadata: {},
      colors: [Colors.White],
      i18nDef: ['names:baptism_of_the_lord'],
    });
  }

  /**
   * Compute the Proper of Lent
   * @param yearOffset A Liturgical year offset
   */
  lent(yearOffset = 0): void {
    // Ash Wednesday.
    this.#newLiturgicalDayDef(`ash_wednesday`, {
      precedence: Precedences.AshWednesday_2,
      dateDef: { dateFn: 'ashWednesday', yearOffset },
      seasons: [Season.Lent],
      periods: [Period.PresentationOfTheLordToHolyThursday],
      calendarMetadata: { weekOfSeason: 0, dayOfSeason: 1, dayOfWeek: 3 },
      colors: [Colors.Purple],
      i18nDef: [`names:ash_wednesday`],
    });

    // Days after Ash Wednesday.
    for (let dow = 4; dow < 7; dow += 1) {
      this.#newLiturgicalDayDef(`${this.#weekdays[dow]}_after_ash_wednesday`, {
        precedence: Precedences.PrivilegedWeekday_9,
        dateDef: { dateFn: 'ashWednesday', addDay: dow - 3, yearOffset },
        seasons: [Season.Lent],
        periods: [Period.PresentationOfTheLordToHolyThursday],
        calendarMetadata: { weekOfSeason: 0, dayOfSeason: dow - 2, dayOfWeek: dow },
        colors: [Colors.Purple],
        i18nDef: ['seasons:lent.day_after_ash_wed', { dow }],
      });
    }

    // All days, from the 1st Sunday of Lent to the Saturday of the 5th week of Lent.
    for (let i = 0; i < 35; i += 1) {
      const week = Math.floor(i / 7) + 1;
      const dow = i - (week - 1) * 7;
      this.#newLiturgicalDayDef(`lent_${week}_${this.#weekdays[dow]}`, {
        precedence: dow === 0 ? Precedences.PrivilegedSunday_2 : Precedences.PrivilegedWeekday_9,
        dateDef: { dateFn: 'ashWednesday', addDay: i + 4, yearOffset },
        isHolyDayOfObligation: dow === 0,
        seasons: [Season.Lent],
        periods: [Period.PresentationOfTheLordToHolyThursday],
        calendarMetadata: { weekOfSeason: week, dayOfSeason: i + 5, dayOfWeek: dow },
        colors: [
          ...(week === 4 && dow === 0 ? [Colors.Rose] : []), // Laetare
          Colors.Purple,
        ],
        i18nDef: dow === 0 ? ['seasons:lent.sunday', { week }] : ['seasons:lent.weekday', { week, dow }],
      });
    }

    // Palm Sunday of the Passion of the Lord.
    this.#newLiturgicalDayDef(`palm_sunday_of_the_passion_of_the_lord`, {
      precedence: Precedences.PrivilegedSunday_2,
      dateDef: { dateFn: 'palmSunday', yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.Lent],
      periods: [Period.HolyWeek, Period.PresentationOfTheLordToHolyThursday],
      calendarMetadata: { weekOfSeason: 6, dayOfSeason: 40, dayOfWeek: 0 },
      colors: [Colors.Red],
      i18nDef: [`names:palm_sunday_of_the_passion_of_the_lord`],
    });

    // Holy Week, Monday to Thursday.
    for (let dow = 1; dow < 5; dow += 1) {
      this.#newLiturgicalDayDef(`holy_${this.#weekdays[dow]}`, {
        precedence: Precedences.PrivilegedWeekday_9,
        dateDef: { dateFn: 'palmSunday', addDay: dow, yearOffset },
        seasons: [Season.Lent],
        periods: [Period.HolyWeek, Period.PresentationOfTheLordToHolyThursday],
        calendarMetadata: { weekOfSeason: 6, dayOfSeason: 40 + dow, dayOfWeek: dow },
        colors: [Colors.Purple],
        i18nDef: ['seasons:lent.holy_week_day', { dow }],
      });
    }
  }

  /**
   * Compute the Proper of the Paschal Triduum
   * @param yearOffset A Liturgical year offset
   */
  paschalTriduum(yearOffset = 0): void {
    // Thursday of the Lord's Supper (at the Evening Mass).
    this.#newLiturgicalDayDef(`thursday_of_the_lords_supper`, {
      precedence: Precedences.Triduum_1,
      dateDef: { dateFn: 'holyThursday', yearOffset },
      seasons: [Season.PaschalTriduum],
      periods: [Period.HolyWeek],
      calendarMetadata: { weekOfSeason: 1, dayOfSeason: 0, dayOfWeek: 4 },
      colors: [Colors.White],
      i18nDef: [`names:thursday_of_the_lords_supper`],
    });

    // Friday of the Passion of the Lord.
    this.#newLiturgicalDayDef(`friday_of_the_passion_of_the_lord`, {
      precedence: Precedences.Triduum_1,
      dateDef: { dateFn: 'goodFriday', yearOffset },
      seasons: [Season.PaschalTriduum],
      periods: [Period.HolyWeek],
      calendarMetadata: { weekOfSeason: 1, dayOfSeason: 1, dayOfWeek: 5 },
      colors: [Colors.Red],
      i18nDef: [`names:friday_of_the_passion_of_the_lord`],
    });

    // Holy Saturday
    this.#newLiturgicalDayDef(`holy_saturday`, {
      precedence: Precedences.Triduum_1,
      dateDef: { dateFn: 'holySaturday', yearOffset },
      seasons: [Season.PaschalTriduum],
      periods: [Period.HolyWeek],
      calendarMetadata: { weekOfSeason: 1, dayOfSeason: 2, dayOfWeek: 6 },
      colors: [],
      i18nDef: [`names:holy_saturday`],
    });

    // Easter Sunday of the Resurrection of the Lord.
    this.#newLiturgicalDayDef(`easter_sunday`, {
      precedence: Precedences.Triduum_1,
      dateDef: { dateFn: 'easterSunday', yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.PaschalTriduum, Season.EasterTime],
      periods: [Period.EasterOctave],
      calendarMetadata: { weekOfSeason: 1, dayOfSeason: 1, dayOfWeek: 0 },
      colors: [Colors.White],
      i18nDef: [`names:easter_sunday`],
    });
  }

  /**
   * Compute the Proper of the Easter Time
   * @param yearOffset A Liturgical year offset
   */
  easterTime(yearOffset = 0): void {
    // Octave of Easter.
    for (let dow = 1; dow < 7; dow += 1) {
      this.#newLiturgicalDayDef(`easter_${this.#weekdays[dow]}`, {
        precedence: Precedences.WeekdayOfEasterOctave_2,
        dateDef: { dateFn: 'easterSunday', addDay: dow, yearOffset },
        seasons: [Season.EasterTime],
        periods: [Period.EasterOctave],
        calendarMetadata: { weekOfSeason: 1, dayOfSeason: dow + 1, dayOfWeek: dow },
        colors: [Colors.White],
        i18nDef: ['seasons:easter_time.octave', { dow }],
      });
    }

    // Second Sunday of Easter, or of Divine Mercy.
    this.#newLiturgicalDayDef(`divine_mercy_sunday`, {
      precedence: Precedences.PrivilegedSunday_2,
      dateDef: { dateFn: 'divineMercySunday', yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.EasterTime],
      periods: [Period.EasterOctave],
      calendarMetadata: { weekOfSeason: 2, dayOfSeason: 8, dayOfWeek: 0 },
      colors: [Colors.White],
      i18nDef: [`names:divine_mercy_sunday`],
    });

    // All days, from the 2nd Monday to the 7th Saturday of Easter Time.
    for (let i = 8; i < 49; i += 1) {
      const week = Math.floor(i / 7) + 1;
      const dow = i - (week - 1) * 7;

      const data: LiturgicalDayProperOfTimeInput = {
        precedence: dow === 0 ? Precedences.PrivilegedSunday_2 : Precedences.Weekday_13,
        dateDef: {
          dateFn: 'weekdayOrSundayOfEasterTime',
          dateArgs: [dow, week],
          yearOffset,
        },
        isHolyDayOfObligation: dow === 0,
        seasons: [Season.EasterTime],
        periods: [],
        calendarMetadata: { weekOfSeason: week, dayOfSeason: i + 1, dayOfWeek: dow },
        colors: [Colors.White],
        i18nDef: dow === 0 ? ['seasons:easter_time.sunday', { week }] : ['seasons:easter_time.weekday', { week, dow }],
      };
      // The Ascension of the Lord
      if (week === 6 && dow === 4) {
        this.#newLiturgicalDayDef(`ascension_of_the_lord`, {
          ...data,
          precedence: Precedences.ProperOfTimeSolemnity_2,
          dateDef: { dateFn: 'ascension', yearOffset },
          isHolyDayOfObligation: true,
          calendarMetadata: {},
          i18nDef: [`names:ascension_of_the_lord`],
        });
      }
      // All other Sundays and weekdays.
      this.#newLiturgicalDayDef(`easter_time_${week}_${this.#weekdays[dow]}`, data);
    }

    // Pentecost Sunday.
    this.#newLiturgicalDayDef(`pentecost_sunday`, {
      precedence: Precedences.ProperOfTimeSolemnity_2,
      dateDef: { dateFn: 'pentecostSunday', yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.EasterTime],
      periods: [],
      calendarMetadata: { weekOfSeason: 8, dayOfSeason: 50, dayOfWeek: 0 },
      colors: [Colors.Red],
      i18nDef: [`names:pentecost_sunday`],
    });
  }

  /**
   * Compute the Proper of the Ordinary Time
   * @param yearOffset A Liturgical year offset
   */
  ordinaryTime(yearOffset = 0): void {
    // The Most Holy Trinity.
    this.#newLiturgicalDayDef(`most_holy_trinity`, {
      precedence: Precedences.GeneralSolemnity_3,
      dateDef: { dateFn: 'trinitySunday', yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.OrdinaryTime],
      periods: [],
      calendarMetadata: { dayOfWeek: 0 },
      colors: [Colors.White],
      i18nDef: [`names:most_holy_trinity`],
    });

    // The Most Holy Body and Blood of Christ (Corpus Christi).
    this.#newLiturgicalDayDef(`most_holy_body_and_blood_of_christ`, {
      precedence: Precedences.GeneralSolemnity_3,
      dateDef: { dateFn: 'corpusChristi', yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.OrdinaryTime],
      periods: [],
      calendarMetadata: {},
      colors: [Colors.White],
      i18nDef: [`names:most_holy_body_and_blood_of_christ`],
    });

    // The Most Sacred Heart of Jesus.
    this.#newLiturgicalDayDef(`most_sacred_heart_of_jesus`, {
      precedence: Precedences.GeneralSolemnity_3,
      dateDef: { dateFn: 'mostSacredHeartOfJesus', yearOffset },
      isHolyDayOfObligation: false,
      seasons: [Season.OrdinaryTime],
      periods: [],
      calendarMetadata: { dayOfWeek: 5 },
      colors: [Colors.White],
      i18nDef: [`names:most_sacred_heart_of_jesus`],
    });

    // Ordinary Time.
    for (let i = 1; i < 238; i += 1) {
      const week = Math.floor(i / 7) + 1;
      const dow = i - (week - 1) * 7;

      const data: LiturgicalDayProperOfTimeInput = {
        precedence: dow === 0 ? Precedences.UnprivilegedSunday_6 : Precedences.Weekday_13,
        dateDef: { dateFn: 'dateOfOrdinaryTime', dateArgs: [dow, week], yearOffset },
        isHolyDayOfObligation: dow === 0,
        seasons: [Season.OrdinaryTime],
        periods: [],
        calendarMetadata: { weekOfSeason: week, dayOfWeek: dow },
        colors: [Colors.Green],
        i18nDef:
          dow === 0 ? ['seasons:ordinary_time.sunday', { week }] : ['seasons:ordinary_time.weekday', { week, dow }],
      };

      // Sunday of the Word of God
      // http://www.vatican.va/content/francesco/en/motu_proprio/documents/papa-francesco-motu-proprio-20190930_aperuit-illis.html
      if (week === 3 && dow === 0) {
        this.#newLiturgicalDayDef(`sunday_of_the_word_of_god`, {
          ...data,
          i18nDef: [`names:sunday_of_the_word_of_god`],
        });
      }

      // 34th week in Ordinary Time,
      // or the Solemnity of our Lord Jesus Christ, King of the Universe.
      else if (week === 34 && dow === 0) {
        this.#newLiturgicalDayDef(`our_lord_jesus_christ_king_of_the_universe`, {
          ...data,
          precedence: Precedences.GeneralSolemnity_3,
          colors: [Colors.White],
          i18nDef: [`names:our_lord_jesus_christ_king_of_the_universe`],
        });
      }

      // All other Sundays and weekdays.
      else {
        this.#newLiturgicalDayDef(`ordinary_time_${week}_${this.#weekdays[dow]}`, data);
      }
    }
  }
}
