import {
  Color,
  DAYS_OF_WEEK,
  LiturgicalDayDef,
  MONTHS,
  Period,
  Precedence,
  PROPER_OF_TIME_ID,
  Season,
} from '@romcal/shared';

/**
 * Compute the Proper of the first part of the Christmas Time,
 * which is in the first Gregorian year of the liturgical year.
 * e.g.: A liturgical year that occur between the years 2019-2020,
 * it returns the Proper that correspond to the year 2019.
 * @param yearOffset A Liturgical year offset
 */
export const earlyChristmasTime = (yearOffset = 0): LiturgicalDayDef[] => {
  const definitions: LiturgicalDayDef[] = [];

  // The Nativity of the Lord.
  definitions.push({
    liturgicalDayId: `nativity_of_the_lord`,
    precedence: Precedence.ProperOfTimeSolemnity_2,
    dateDef: {
      nativityOfTheLord: {},
      yearOffset: -1 + yearOffset,
    },
    isHolyDayOfObligation: true,
    seasons: [{ key: Season.ChristmasTime, weekOfSeason: 1, dayOfSeason: 1 }],
    periods: [{ key: Period.ChristmasOctave }, { key: Period.ChristmasToPresentationOfTheLord }],
    colors: [Color.White],
    i18nDef: [`names:nativity_of_the_lord`],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  // Octave of the Nativity of the Lord (without December 25 and January 1).
  for (let dayOfOctave = 2; dayOfOctave < 8; dayOfOctave++) {
    definitions.push({
      liturgicalDayId: `christmas_octave_day_${dayOfOctave}`,
      precedence: Precedence.PrivilegedWeekday_9,
      dateDef: {
        weekdayWithinOctaveOfChristmas: { dayOfOctave },
        yearOffset: -1 + yearOffset,
      },
      seasons: [{ key: Season.ChristmasTime, dayOfSeason: dayOfOctave }],
      periods: [{ key: Period.ChristmasOctave }, { key: Period.ChristmasToPresentationOfTheLord }],
      colors: [Color.White],
      i18nDef: ['seasons:christmas_time.octave', { count: dayOfOctave }],
      fromCalendarId: PROPER_OF_TIME_ID,
    });
  }

  // The Sunday within the Octave of the Nativity of the Lord,
  // Feast of the Holy Family of Jesus, Mary and Joseph.
  definitions.push({
    liturgicalDayId: `holy_family_of_jesus_mary_and_joseph`,
    precedence: Precedence.GeneralLordFeast_5,
    dateDef: {
      holyFamily: {},
      yearOffset: -1 + yearOffset,
    },
    seasons: [{ key: Season.ChristmasTime }],
    periods: [{ key: Period.ChristmasOctave }, { key: Period.ChristmasToPresentationOfTheLord }],
    colors: [Color.White],
    i18nDef: [`names:holy_family_of_jesus_mary_and_joseph`],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  return definitions;
};

/**
 * Compute the Proper of the second part of the Christmas Time,
 * which is in the second Gregorian year of the liturgical year.
 * e.g.: A liturgical year that occur between the years 2019-2020,
 * it returns the Proper that correspond to the year 2020.
 * @param yearOffset A Liturgical year offset
 */
export const lateChristmasTime = (yearOffset = 0): LiturgicalDayDef[] => {
  const definitions: LiturgicalDayDef[] = [];

  // Solemnity of Mary, the Holy Mother of God.
  definitions.push({
    liturgicalDayId: `mary_mother_of_god`,
    precedence: Precedence.GeneralSolemnity_3,
    dateDef: { month: 1, date: 1, yearOffset },
    isHolyDayOfObligation: true,
    seasons: [{ key: Season.ChristmasTime, dayOfSeason: 8 }],
    periods: [{ key: Period.ChristmasOctave }, { key: Period.ChristmasToPresentationOfTheLord }],
    colors: [Color.White],
    i18nDef: ['names:mary_mother_of_god'],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  // Second Sunday after the Nativity.
  definitions.push({
    liturgicalDayId: `second_sunday_after_christmas`,
    precedence: Precedence.UnprivilegedSunday_6,
    dateDef: { secondSundayAfterChristmas: {}, yearOffset },
    isHolyDayOfObligation: true,
    seasons: [{ key: Season.ChristmasTime }],
    periods: [
      // Note: before / from Epiphany flag is added during the creation of the liturgical day object,
      // because this can only be determined within a liturgical year scope.
      { key: Period.ChristmasToPresentationOfTheLord },
    ],
    colors: [Color.White],
    i18nDef: ['seasons:christmas_time.second_sunday_after_christmas'],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  // Weekdays of Christmas Time, before the Epiphany of the Lord.
  for (let dayOfMonth = 2; dayOfMonth < 9; dayOfMonth++) {
    definitions.push({
      liturgicalDayId: `christmas_time_${MONTHS[0]}_${dayOfMonth}`,
      precedence: Precedence.Weekday_13,
      dateDef: { weekdayBeforeEpiphany: { dayOfMonth }, yearOffset },
      seasons: [{ key: Season.ChristmasTime, dayOfSeason: 7 + dayOfMonth }],
      periods: [
        { key: Period.DaysBeforeEpiphany },
        { key: Period.ChristmasToPresentationOfTheLord },
      ],
      colors: [Color.White],
      i18nDef: ['seasons:christmas_time.before_epiphany', { day: dayOfMonth }],
      fromCalendarId: PROPER_OF_TIME_ID,
    });
  }

  // The Epiphany of the Lord.
  definitions.push({
    liturgicalDayId: `epiphany_of_the_lord`,
    precedence: Precedence.ProperOfTimeSolemnity_2,
    dateDef: { epiphany: {}, yearOffset },
    isHolyDayOfObligation: true,
    seasons: [{ key: Season.ChristmasTime }],
    periods: [{ key: Period.DaysFromEpiphany }, { key: Period.ChristmasToPresentationOfTheLord }],
    colors: [Color.White],
    i18nDef: ['names:epiphany_of_the_lord'],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  // Weekdays of Christmas Time, after the Epiphany of the Lord.
  for (let dayOfWeek = 1; dayOfWeek < 7; dayOfWeek++) {
    definitions.push({
      liturgicalDayId: `${DAYS_OF_WEEK[dayOfWeek]}_after_epiphany`,
      precedence: Precedence.Weekday_13,
      dateDef: { weekdayAfterEpiphany: { dayOfWeek }, yearOffset },
      seasons: [{ key: Season.ChristmasTime }],
      periods: [{ key: Period.DaysFromEpiphany }, { key: Period.ChristmasToPresentationOfTheLord }],
      colors: [Color.White],
      i18nDef: ['seasons:christmas_time.after_epiphany', { dow: dayOfWeek }],
      fromCalendarId: PROPER_OF_TIME_ID,
    });
  }

  // The Baptism of the Lord.
  definitions.push({
    liturgicalDayId: `baptism_of_the_lord`,
    precedence: Precedence.ProperOfTimeSolemnity_2,
    dateDef: { baptismOfTheLord: {}, yearOffset },
    seasons: [{ key: Season.ChristmasTime }],
    periods: [{ key: Period.DaysFromEpiphany }, { key: Period.ChristmasToPresentationOfTheLord }],
    colors: [Color.White],
    i18nDef: ['names:baptism_of_the_lord'],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  return definitions;
};

/**
 * Compute the Proper of the Christmas Time
 * @param yearOffset A Liturgical year offset
 */
export const christmasTime = (yearOffset = 0): LiturgicalDayDef[] => [
  ...earlyChristmasTime(yearOffset),
  ...lateChristmasTime(yearOffset),
];
