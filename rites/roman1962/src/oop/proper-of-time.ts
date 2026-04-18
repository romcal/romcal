import {
  CalendarDef,
  CalendarMetadata,
  Color,
  Colors,
  DateDef,
  LiturgicalDayDef,
  MONTHS,
  PROPER_OF_TIME_NAME,
  Period,
  Precedence,
  Precedences,
  ProperCycle,
  ProperCycles,
  RomcalConfig,
  Season,
  WEEKDAYS,
  i18nDef,
} from '@internal/rite-roman1969';
import type { BundleInputs, Id } from '@internal/rite-roman1969';

import { setMeta1962 } from './meta-1962';
import { classifyTempora } from './tempora-class';

// Narrow subset matching 1969's LiturgicalDayProperOfTimeInput shape, spelled
// locally so we don't depend on a non-public type alias.
type PoTInput = {
  precedence: Precedence;
  dateDef: DateDef;
  seasons: Season[];
  periods: Period[];
  calendarMetadata: CalendarMetadata;
  colors: Color[];
  i18nDef: i18nDef;
  isHolyDayOfObligation?: boolean;
  properCycle?: ProperCycle;
};

/**
 * 1962 Proper of Time. Emits one LiturgicalDayDef for every day of the
 * liturgical year across the civil scope so Calendar#generateCalendar has
 * a dated baseline. Rich 1962 metadata (Class1962, Rank1962, Season1962)
 * is layered by B2d via postReduceDay; for B2b we map onto the closest
 * 1969 precedence/season/color.
 */
export class ProperOfTime1962 extends CalendarDef {
  private readonly config: RomcalConfig;

  public get calendarName(): string {
    return PROPER_OF_TIME_NAME;
  }

  constructor(config: RomcalConfig, inputs?: BundleInputs) {
    super(config, inputs);
    this.config = config;
  }

  buildAllDefinitions = (): void => {
    if (Object.keys(this.config.liturgicalDayDef).length > 0) return;

    if (this.config.scope === 'gregorian') {
      this.lateChristmasTime(0);
      this.timeAfterEpiphany(0);
      this.preLent(0);
      this.lent(0);
      this.passiontideAndHolyWeek(0);
      this.paschalTriduum(0);
      this.easterTime(0);
      this.pentecostOctave(0);
      this.timeAfterPentecost(0);
      this.advent(+1);
      this.earlyChristmasTime(+1);
    } else {
      this.advent(0);
      this.earlyChristmasTime(0);
      this.lateChristmasTime(0);
      this.timeAfterEpiphany(0);
      this.preLent(0);
      this.lent(0);
      this.passiontideAndHolyWeek(0);
      this.paschalTriduum(0);
      this.easterTime(0);
      this.pentecostOctave(0);
      this.timeAfterPentecost(0);
    }
  };

  private emit(id: Id, input: PoTInput): LiturgicalDayDef {
    // Stamp 1962 metadata side-channel so LiturgicalDay1962 can surface
    // `classOf1962`/`kind1962`/`key1962` fields and so the overridden
    // `Calendar1962#resolveOccurrence` has enough context to score by
    // the 1962 rubrics. `numericRank1962` is intentionally left undefined
    // for tempora — `scorePrecedence` treats it as optional (`* 0.01`
    // tiebreaker flows to 0 cleanly).
    setMeta1962(id, {
      classOf1962: classifyTempora(id),
      kind1962: 'tempora',
      key1962: id,
    });
    return new LiturgicalDayDef(
      id,
      { properCycle: ProperCycles.ProperOfTime, ...input },
      PROPER_OF_TIME_NAME,
      this.config
    );
  }

  // -- Advent --------------------------------------------------------------

  private advent(yearOffset: number): void {
    // Advent I Sunday through Friday of week 3 (non-privileged weekdays).
    for (let i = 0; i < 20; i += 1) {
      const week = Math.floor(i / 7) + 1;
      const dow = i - (week - 1) * 7;
      this.emit(`advent_${week}_${WEEKDAYS[dow]}`, {
        precedence: dow === 0 ? Precedences.PrivilegedSunday_2 : Precedences.Weekday_13,
        dateDef:
          dow === 0
            ? { dateFn: 'sundayOfAdvent', dateArgs: [week], yearOffset: -1 + yearOffset }
            : { dateFn: 'unprivilegedWeekdayOfAdvent', dateArgs: [dow, week], yearOffset: -1 + yearOffset },
        isHolyDayOfObligation: dow === 0,
        seasons: [Season.Advent],
        periods: [],
        calendarMetadata: { weekOfSeason: week, dayOfSeason: i + 1, dayOfWeek: dow },
        colors: [...(week === 3 && dow === 0 ? [Colors.Rose] : []), Colors.Purple],
        i18nDef: dow === 0 ? ['seasons:advent.sunday', { week }] : ['seasons:advent.weekday', { week, dow }],
      });
    }
    // Advent IV Sunday.
    this.emit(`advent_4_${WEEKDAYS[0]}`, {
      precedence: Precedences.PrivilegedSunday_2,
      dateDef: { dateFn: 'sundayOfAdvent', dateArgs: [4], yearOffset: -1 + yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.Advent],
      periods: [],
      calendarMetadata: { weekOfSeason: 4, dayOfSeason: 22, dayOfWeek: 0 },
      colors: [Colors.Purple],
      i18nDef: ['seasons:advent.sunday', { week: 4 }],
    });
    // Dec 17-23 privileged weekdays (Greater Ferias in 1962).
    for (let day = 17; day < 24; day += 1) {
      this.emit(`advent_${MONTHS[11]}_${day}`, {
        precedence: Precedences.PrivilegedWeekday_9,
        dateDef: { dateFn: 'privilegedWeekdayOfAdvent', dateArgs: [day], yearOffset: -1 + yearOffset },
        seasons: [Season.Advent],
        periods: [],
        calendarMetadata: {},
        colors: [Colors.Purple],
        i18nDef: ['seasons:advent.privileged_weekday', { day }],
      });
    }
    // Vigil of the Nativity (Dec 24, Advent season in 1962).
    this.emit('vigil_of_christmas', {
      precedence: Precedences.PrivilegedWeekday_9,
      dateDef: { dateFn: 'privilegedWeekdayOfAdvent', dateArgs: [24], yearOffset: -1 + yearOffset },
      seasons: [Season.Advent],
      periods: [],
      calendarMetadata: {},
      colors: [Colors.Purple],
      i18nDef: ['names:vigil_of_christmas'],
    });
  }

  // -- Christmas Time, early part (Dec 25 - Dec 31) -----------------------

  private earlyChristmasTime(yearOffset: number): void {
    this.emit('nativity_of_the_lord', {
      precedence: Precedences.ProperOfTimeSolemnity_2,
      dateDef: { dateFn: 'christmas', yearOffset: -1 + yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.ChristmasTime],
      periods: [Period.ChristmasOctave, Period.ChristmasToPresentationOfTheLord],
      calendarMetadata: { weekOfSeason: 1, dayOfSeason: 1 },
      colors: [Colors.White],
      i18nDef: ['names:nativity_of_the_lord'],
    });
    // Christmas Octave days 2-7 (Dec 26-31). Dec 26=Stephen, 27=John, 28=Holy Innocents,
    // 29=Thomas of Canterbury, 30 & 31=Sylvester fall in here — we emit the weekday slots;
    // the sanctoral overlay later may extend, but the proper-of-time still needs to cover the dates.
    for (let count = 2; count < 8; count += 1) {
      this.emit(`christmas_octave_day_${count}`, {
        precedence: Precedences.PrivilegedWeekday_9,
        dateDef: { dateFn: 'weekdayWithinOctaveOfChristmas', dateArgs: [count], yearOffset: -1 + yearOffset },
        seasons: [Season.ChristmasTime],
        periods: [Period.ChristmasOctave, Period.ChristmasToPresentationOfTheLord],
        calendarMetadata: { dayOfSeason: count },
        colors: [Colors.White],
        i18nDef: ['seasons:christmas_time.octave', { count }],
      });
    }
    // Sunday within the Octave of Christmas (Dec 26-31 Sunday or Dec 30 fallback) — 1962 rubric.
    this.emit('sunday_within_octave_of_christmas', {
      precedence: Precedences.UnprivilegedSunday_6,
      dateDef: { dateFn: 'holyFamily', yearOffset: -1 + yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.ChristmasTime],
      periods: [Period.ChristmasOctave, Period.ChristmasToPresentationOfTheLord],
      calendarMetadata: {},
      colors: [Colors.White],
      i18nDef: ['names:sunday_within_octave_of_christmas'],
    });
  }

  // -- Christmas Time, late part + Circumcision + Epiphany + Time after Epi --

  private lateChristmasTime(yearOffset: number): void {
    // Circumcision of the Lord / Octave Day of Christmas (Jan 1).
    this.emit('circumcision_of_the_lord', {
      precedence: Precedences.GeneralSolemnity_3,
      dateDef: { dateFn: 'maryMotherOfGod', yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.ChristmasTime],
      periods: [Period.ChristmasOctave, Period.ChristmasToPresentationOfTheLord],
      calendarMetadata: { dayOfSeason: 8 },
      colors: [Colors.White],
      i18nDef: ['names:circumcision_of_the_lord'],
    });
    // Jan 2-5: weekdays of Christmas Time (Most Holy Name of Jesus falls on the Sunday here).
    for (let day = 2; day < 6; day += 1) {
      this.emit(`christmas_time_january_${day}`, {
        precedence: Precedences.Weekday_13,
        dateDef: { dateFn: 'weekdayBeforeEpiphany', dateArgs: [day], yearOffset },
        seasons: [Season.ChristmasTime],
        periods: [Period.DaysBeforeEpiphany, Period.ChristmasToPresentationOfTheLord],
        calendarMetadata: { dayOfSeason: 7 + day },
        colors: [Colors.White],
        i18nDef: ['seasons:christmas_time.before_epiphany', { day }],
      });
    }
    // Most Holy Name of Jesus — Sunday between Jan 2-5 (else Jan 2).
    // Emitted with the same dateDef as 1969's second_sunday_after_christmas;
    // will land on that Sunday when one exists.
    this.emit('most_holy_name_of_jesus', {
      precedence: Precedences.GeneralSolemnity_3,
      dateDef: { dateFn: 'secondSundayAfterChristmas', yearOffset },
      seasons: [Season.ChristmasTime],
      periods: [Period.DaysBeforeEpiphany, Period.ChristmasToPresentationOfTheLord],
      calendarMetadata: {},
      colors: [Colors.White],
      i18nDef: ['names:most_holy_name_of_jesus'],
    });
  }

  private timeAfterEpiphany(yearOffset: number): void {
    // Epiphany of the Lord (Jan 6).
    this.emit('epiphany_of_the_lord', {
      precedence: Precedences.ProperOfTimeSolemnity_2,
      dateDef: { dateFn: 'epiphany', yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.ChristmasTime],
      periods: [Period.DaysFromEpiphany, Period.ChristmasToPresentationOfTheLord],
      calendarMetadata: {},
      colors: [Colors.White],
      i18nDef: ['names:epiphany_of_the_lord'],
    });
    // Weekdays within the Octave of Epiphany (Jan 7-13).
    for (let dow = 1; dow < 7; dow += 1) {
      this.emit(`${WEEKDAYS[dow]}_after_epiphany`, {
        precedence: Precedences.Weekday_13,
        dateDef: { dateFn: 'weekdayAfterEpiphany', dateArgs: [dow], yearOffset },
        seasons: [Season.ChristmasTime],
        periods: [Period.DaysFromEpiphany, Period.ChristmasToPresentationOfTheLord],
        calendarMetadata: {},
        colors: [Colors.White],
        i18nDef: ['seasons:christmas_time.after_epiphany', { dow }],
      });
    }
    // Holy Family — first Sunday after Epiphany.
    this.emit('holy_family_of_jesus_mary_and_joseph', {
      precedence: Precedences.GeneralLordFeast_5,
      dateDef: { dateFn: 'baptismOfTheLord', yearOffset },
      seasons: [Season.ChristmasTime],
      periods: [Period.DaysFromEpiphany, Period.ChristmasToPresentationOfTheLord],
      calendarMetadata: {},
      colors: [Colors.White],
      i18nDef: ['names:holy_family_of_jesus_mary_and_joseph'],
    });
    // Sundays after Epiphany (2nd-6th) + weekdays. The ordinary-time date helper
    // covers Sundays 2..6 after Epi and their weekdays in the 1969 engine, which
    // works for 1962 too because Ordinary Time begins the Monday after the Baptism.
    // Later weeks (past Septuagesima) will be culled by the date-index intersection.
    for (let i = 1; i < 6 * 7; i += 1) {
      const week = Math.floor(i / 7) + 1;
      const dow = i - (week - 1) * 7;
      this.emit(`epiphany_${week}_${WEEKDAYS[dow]}`, {
        precedence: dow === 0 ? Precedences.UnprivilegedSunday_6 : Precedences.Weekday_13,
        dateDef: { dateFn: 'dateOfOrdinaryTime', dateArgs: [dow, week], yearOffset },
        isHolyDayOfObligation: dow === 0,
        seasons: [Season.OrdinaryTime],
        periods: [Period.EarlyOrdinaryTime],
        calendarMetadata: { weekOfSeason: week, dayOfWeek: dow },
        colors: [Colors.Green],
        i18nDef:
          dow === 0 ? ['seasons:ordinary_time.sunday', { week }] : ['seasons:ordinary_time.weekday', { week, dow }],
      });
    }
  }

  // -- Pre-Lent (Septuagesima/Sexagesima/Quinquagesima) -------------------

  private preLent(yearOffset: number): void {
    // Septuagesima = Easter - 63 = ashWednesday - 17.
    const preLentSeasons = ['septuagesima', 'sexagesima', 'quinquagesima'] as const;
    for (let w = 0; w < 3; w += 1) {
      for (let dow = 0; dow < 7; dow += 1) {
        // Day offset from ashWednesday: ashWed - 17 + w*7 + dow.
        const addDay = -17 + w * 7 + dow;
        const key = dow === 0 ? `${preLentSeasons[w]}_sunday` : `${preLentSeasons[w]}_${WEEKDAYS[dow]}`;
        this.emit(key, {
          // 1962: pre-Lent Sundays outrank resumed Epiphany Sundays and any
          // weekday coincidence. Bump to PrivilegedSunday_2 so Septuagesima/
          // Sexagesima/Quinquagesima win over epiphany_N_sunday emissions on
          // the same ISO date.
          precedence: dow === 0 ? Precedences.PrivilegedSunday_2 : Precedences.Weekday_13,
          dateDef: { dateFn: 'ashWednesday', addDay, yearOffset },
          isHolyDayOfObligation: dow === 0,
          // Map Septuagesima → OrdinaryTime (1969 lossy); real 1962 season via postReduceDay.
          seasons: [Season.OrdinaryTime],
          periods: [Period.EarlyOrdinaryTime],
          calendarMetadata: { weekOfSeason: w + 1, dayOfWeek: dow },
          colors: [Colors.Purple],
          i18nDef: [`seasons:${preLentSeasons[w]}.${dow === 0 ? 'sunday' : 'weekday'}`, { dow }],
        });
      }
    }
  }

  // -- Lent (Lent 1 Sun through Lent 4 Sat) -------------------------------

  private lent(yearOffset: number): void {
    // Ash Wednesday.
    this.emit('ash_wednesday', {
      precedence: Precedences.AshWednesday_2,
      dateDef: { dateFn: 'ashWednesday', yearOffset },
      seasons: [Season.Lent],
      periods: [Period.PresentationOfTheLordToHolyThursday],
      calendarMetadata: { weekOfSeason: 0, dayOfSeason: 1, dayOfWeek: 3 },
      colors: [Colors.Purple],
      i18nDef: ['names:ash_wednesday'],
    });
    // Thu-Sat after Ash Wednesday.
    for (let dow = 4; dow < 7; dow += 1) {
      this.emit(`${WEEKDAYS[dow]}_after_ash_wednesday`, {
        precedence: Precedences.PrivilegedWeekday_9,
        dateDef: { dateFn: 'ashWednesday', addDay: dow - 3, yearOffset },
        seasons: [Season.Lent],
        periods: [Period.PresentationOfTheLordToHolyThursday],
        calendarMetadata: { weekOfSeason: 0, dayOfSeason: dow - 2, dayOfWeek: dow },
        colors: [Colors.Purple],
        i18nDef: ['seasons:lent.day_after_ash_wed', { dow }],
      });
    }
    // Lent 1-4 Sun through Sat (28 days).
    for (let i = 0; i < 28; i += 1) {
      const week = Math.floor(i / 7) + 1;
      const dow = i - (week - 1) * 7;
      this.emit(`lent_${week}_${WEEKDAYS[dow]}`, {
        precedence: dow === 0 ? Precedences.PrivilegedSunday_2 : Precedences.PrivilegedWeekday_9,
        dateDef: { dateFn: 'ashWednesday', addDay: i + 4, yearOffset },
        isHolyDayOfObligation: dow === 0,
        seasons: [Season.Lent],
        periods: [Period.PresentationOfTheLordToHolyThursday],
        calendarMetadata: { weekOfSeason: week, dayOfSeason: i + 5, dayOfWeek: dow },
        // 4th Sunday of Lent = Laetare → Rose.
        colors: [...(week === 4 && dow === 0 ? [Colors.Rose] : []), Colors.Purple],
        i18nDef: dow === 0 ? ['seasons:lent.sunday', { week }] : ['seasons:lent.weekday', { week, dow }],
      });
    }
  }

  // -- Passiontide (Passion Sunday + Passion Week) + Holy Week ------------

  private passiontideAndHolyWeek(yearOffset: number): void {
    // Passion Sunday (= Lent 5 Sunday; easter - 14).
    this.emit('passion_sunday', {
      precedence: Precedences.PrivilegedSunday_2,
      dateDef: { dateFn: 'palmSunday', subtractDay: 7, yearOffset },
      isHolyDayOfObligation: true,
      // Lossy: Passiontide → Lent; refined by postReduceDay in B2d.
      seasons: [Season.Lent],
      periods: [Period.PresentationOfTheLordToHolyThursday],
      calendarMetadata: { weekOfSeason: 5, dayOfSeason: 33, dayOfWeek: 0 },
      colors: [Colors.Purple],
      i18nDef: ['names:passion_sunday'],
    });
    // Passion week weekdays (Mon-Sat).
    for (let dow = 1; dow < 7; dow += 1) {
      this.emit(`passion_week_${WEEKDAYS[dow]}`, {
        precedence: Precedences.PrivilegedWeekday_9,
        dateDef: { dateFn: 'palmSunday', subtractDay: 7 - dow, yearOffset },
        seasons: [Season.Lent],
        periods: [Period.PresentationOfTheLordToHolyThursday],
        calendarMetadata: { weekOfSeason: 5, dayOfSeason: 33 + dow, dayOfWeek: dow },
        colors: [Colors.Purple],
        i18nDef: ['seasons:passiontide.weekday', { dow }],
      });
    }
    // Palm Sunday (= 2nd Sunday of Passion).
    this.emit('palm_sunday_of_the_passion_of_the_lord', {
      precedence: Precedences.PrivilegedSunday_2,
      dateDef: { dateFn: 'palmSunday', yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.Lent],
      periods: [Period.HolyWeek, Period.PresentationOfTheLordToHolyThursday],
      calendarMetadata: { weekOfSeason: 6, dayOfSeason: 40, dayOfWeek: 0 },
      colors: [Colors.Red],
      i18nDef: ['names:palm_sunday_of_the_passion_of_the_lord'],
    });
    // Holy Week Mon-Thu (Thursday weekday paired with Triduum Mass of the Lord's Supper).
    for (let dow = 1; dow < 5; dow += 1) {
      this.emit(`holy_${WEEKDAYS[dow]}`, {
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

  // -- Paschal Triduum + Easter Sunday ------------------------------------

  private paschalTriduum(yearOffset: number): void {
    this.emit('thursday_of_the_lords_supper', {
      precedence: Precedences.Triduum_1,
      dateDef: { dateFn: 'holyThursday', yearOffset },
      seasons: [Season.PaschalTriduum],
      periods: [Period.HolyWeek],
      calendarMetadata: { weekOfSeason: 1, dayOfSeason: 0, dayOfWeek: 4 },
      colors: [Colors.White],
      i18nDef: ['names:thursday_of_the_lords_supper'],
    });
    this.emit('friday_of_the_passion_of_the_lord', {
      precedence: Precedences.Triduum_1,
      dateDef: { dateFn: 'goodFriday', yearOffset },
      seasons: [Season.PaschalTriduum],
      periods: [Period.HolyWeek],
      calendarMetadata: { weekOfSeason: 1, dayOfSeason: 1, dayOfWeek: 5 },
      colors: [Colors.Red],
      i18nDef: ['names:friday_of_the_passion_of_the_lord'],
    });
    this.emit('holy_saturday', {
      precedence: Precedences.Triduum_1,
      dateDef: { dateFn: 'holySaturday', yearOffset },
      seasons: [Season.PaschalTriduum],
      periods: [Period.HolyWeek],
      calendarMetadata: { weekOfSeason: 1, dayOfSeason: 2, dayOfWeek: 6 },
      colors: [],
      i18nDef: ['names:holy_saturday'],
    });
    this.emit('easter_sunday', {
      precedence: Precedences.Triduum_1,
      dateDef: { dateFn: 'easterSunday', yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.PaschalTriduum, Season.EasterTime],
      periods: [Period.EasterOctave],
      calendarMetadata: { weekOfSeason: 1, dayOfSeason: 1, dayOfWeek: 0 },
      colors: [Colors.White],
      i18nDef: ['names:easter_sunday'],
    });
  }

  // -- Easter Time (octave + 5 Sundays after Easter + Rogations + Ascension) --

  private easterTime(yearOffset: number): void {
    // Easter Octave Mon-Sat (in albis).
    for (let dow = 1; dow < 7; dow += 1) {
      this.emit(`easter_${WEEKDAYS[dow]}`, {
        precedence: Precedences.WeekdayOfEasterOctave_2,
        dateDef: { dateFn: 'easterSunday', addDay: dow, yearOffset },
        seasons: [Season.EasterTime],
        periods: [Period.EasterOctave],
        calendarMetadata: { weekOfSeason: 1, dayOfSeason: dow + 1, dayOfWeek: dow },
        colors: [Colors.White],
        i18nDef: ['seasons:easter_time.octave', { dow }],
      });
    }
    // Low Sunday + weeks after Easter (2-6, through Sat before Pentecost).
    for (let i = 7; i < 49; i += 1) {
      const week = Math.floor(i / 7) + 1;
      const dow = i - (week - 1) * 7;
      const isLowSunday = week === 2 && dow === 0;
      this.emit(`easter_time_${week}_${WEEKDAYS[dow]}`, {
        precedence: dow === 0 ? Precedences.PrivilegedSunday_2 : Precedences.Weekday_13,
        dateDef: { dateFn: 'easterSunday', addDay: i, yearOffset },
        isHolyDayOfObligation: dow === 0,
        seasons: [Season.EasterTime],
        periods: [...(isLowSunday ? [Period.EasterOctave] : [])],
        calendarMetadata: { weekOfSeason: week, dayOfSeason: i + 1, dayOfWeek: dow },
        colors: [Colors.White],
        i18nDef: dow === 0 ? ['seasons:easter_time.sunday', { week }] : ['seasons:easter_time.weekday', { week, dow }],
      });
    }
    // Ascension of the Lord (easter + 39).
    this.emit('ascension_of_the_lord', {
      precedence: Precedences.ProperOfTimeSolemnity_2,
      dateDef: { dateFn: 'easterSunday', addDay: 39, yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.EasterTime],
      periods: [],
      calendarMetadata: {},
      colors: [Colors.White],
      i18nDef: ['names:ascension_of_the_lord'],
    });
    // Vigil of Pentecost (easter + 48).
    this.emit('vigil_of_pentecost', {
      precedence: Precedences.PrivilegedWeekday_9,
      dateDef: { dateFn: 'easterSunday', addDay: 48, yearOffset },
      seasons: [Season.EasterTime],
      periods: [],
      calendarMetadata: {},
      colors: [Colors.Red],
      i18nDef: ['names:vigil_of_pentecost'],
    });
  }

  // -- Pentecost Octave (1962 has a full octave; 1969 does not) -----------

  private pentecostOctave(yearOffset: number): void {
    this.emit('pentecost_sunday', {
      precedence: Precedences.ProperOfTimeSolemnity_2,
      dateDef: { dateFn: 'pentecostSunday', yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.EasterTime],
      periods: [],
      calendarMetadata: { weekOfSeason: 8, dayOfSeason: 50, dayOfWeek: 0 },
      colors: [Colors.Red],
      i18nDef: ['names:pentecost_sunday'],
    });
    // Pentecost Mon-Sat.
    for (let dow = 1; dow < 7; dow += 1) {
      this.emit(`pentecost_octave_${WEEKDAYS[dow]}`, {
        precedence: Precedences.PrivilegedWeekday_9,
        dateDef: { dateFn: 'pentecostSunday', addDay: dow, yearOffset },
        seasons: [Season.EasterTime],
        periods: [],
        calendarMetadata: { weekOfSeason: 8, dayOfSeason: 50 + dow, dayOfWeek: dow },
        colors: [Colors.Red],
        i18nDef: ['seasons:pentecost_octave.weekday', { dow }],
      });
    }
  }

  // -- Time after Pentecost (Trinity through Sat before Advent I) ---------

  private timeAfterPentecost(yearOffset: number): void {
    // Trinity Sunday (1 week after Pentecost).
    this.emit('trinity_sunday', {
      precedence: Precedences.GeneralSolemnity_3,
      dateDef: { dateFn: 'trinitySunday', yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.OrdinaryTime],
      periods: [],
      calendarMetadata: { dayOfWeek: 0 },
      colors: [Colors.White],
      i18nDef: ['names:most_holy_trinity'],
    });
    // Corpus Christi (Thursday after Trinity).
    this.emit('corpus_christi', {
      precedence: Precedences.GeneralSolemnity_3,
      dateDef: { dateFn: 'corpusChristi', yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.OrdinaryTime],
      periods: [],
      calendarMetadata: { dayOfWeek: 4 },
      colors: [Colors.White],
      i18nDef: ['names:most_holy_body_and_blood_of_christ'],
    });
    // Sacred Heart of Jesus (Friday, easter + 68).
    this.emit('most_sacred_heart_of_jesus', {
      precedence: Precedences.GeneralSolemnity_3,
      dateDef: { dateFn: 'mostSacredHeartOfJesus', yearOffset },
      seasons: [Season.OrdinaryTime],
      periods: [],
      calendarMetadata: { dayOfWeek: 5 },
      colors: [Colors.White],
      i18nDef: ['names:most_sacred_heart_of_jesus'],
    });
    // Sundays + weekdays after Pentecost. 28 weeks is the safe upper bound
    // (Pentecost as early as May 10 ⇒ up to 28 Sundays before Advent I).
    // Ferials before Trinity are already covered by the Pentecost octave above,
    // so we start at i = 7 (Trinity Sunday onward).
    for (let i = 7; i < 28 * 7; i += 1) {
      const week = Math.floor(i / 7); // 1..27
      const dow = i - week * 7;
      // Skip days already minted: Trinity (week 1, dow 0), Corpus Christi (week 1, dow 4),
      // Sacred Heart (week 2, dow 5). We still need coverage for every other date.
      if ((week === 1 && dow === 0) || (week === 1 && dow === 4) || (week === 2 && dow === 5)) continue;
      const key = dow === 0 ? `after_pentecost_${week}_sunday` : `after_pentecost_${week}_${WEEKDAYS[dow]}`;
      this.emit(key, {
        precedence: dow === 0 ? Precedences.UnprivilegedSunday_6 : Precedences.Weekday_13,
        dateDef: { dateFn: 'pentecostSunday', addDay: i, yearOffset },
        isHolyDayOfObligation: dow === 0,
        seasons: [Season.OrdinaryTime],
        periods: [],
        calendarMetadata: { weekOfSeason: week, dayOfWeek: dow },
        colors: [Colors.Green],
        i18nDef:
          dow === 0
            ? ['seasons:time_after_pentecost.sunday', { week }]
            : ['seasons:time_after_pentecost.weekday', { week, dow }],
      });
    }
    // Christ the King — last Sunday of October in 1962.
    this.emit('our_lord_jesus_christ_king_of_the_universe', {
      precedence: Precedences.GeneralSolemnity_3,
      dateDef: { month: 10, lastDayOfWeekInMonth: 0, yearOffset },
      isHolyDayOfObligation: true,
      seasons: [Season.OrdinaryTime],
      periods: [],
      calendarMetadata: {},
      colors: [Colors.White],
      i18nDef: ['names:our_lord_jesus_christ_king_of_the_universe'],
    });
  }
}
