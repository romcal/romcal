import {
  Color,
  DAYS_OF_WEEK,
  LiturgicalDayDef,
  Period,
  Precedence,
  PROPER_OF_TIME_ID,
  Season,
} from '@romcal/shared';

/**
 * Compute the Proper of the Easter Time
 * @param yearOffset A Liturgical year offset
 */
export const easterTime = (yearOffset = 0): LiturgicalDayDef[] => {
  const definitions: LiturgicalDayDef[] = [];

  // Octave of Easter.
  for (let dayOfWeek = 1; dayOfWeek < 7; dayOfWeek++) {
    definitions.push({
      liturgicalDayId: `easter_${DAYS_OF_WEEK[dayOfWeek]}`,
      precedence: Precedence.WeekdayOfEasterOctave_2,
      dateDef: {
        easterSunday: {},
        dayOffset: dayOfWeek,
        yearOffset,
      },
      seasons: [{ key: Season.EasterTime, weekOfSeason: 1, dayOfSeason: dayOfWeek + 1 }],
      periods: [{ key: Period.EasterOctave }],
      dayOfWeek,
      colors: [Color.White],
      i18nDef: ['seasons:easter_time.octave', { dow: dayOfWeek }],
      fromCalendarId: PROPER_OF_TIME_ID,
    });
  }

  // Second Sunday of Easter, or of Divine Mercy.
  definitions.push({
    liturgicalDayId: `divine_mercy_sunday`,
    precedence: Precedence.PrivilegedSunday_2,
    dateDef: { divineMercySunday: {}, yearOffset },
    isHolyDayOfObligation: true,
    seasons: [{ key: Season.EasterTime, weekOfSeason: 2, dayOfSeason: 8 }],
    periods: [{ key: Period.EasterOctave }],
    dayOfWeek: 0,
    colors: [Color.White],
    i18nDef: [`names:divine_mercy_sunday`],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  // All days, from the 2nd Monday to the 7th Saturday of Easter Time.
  for (let i = 8; i < 49; i++) {
    const weekOfSeason = Math.floor(i / 7) + 1;
    const dayOfWeek = i - (weekOfSeason - 1) * 7;

    const data: Omit<LiturgicalDayDef, 'liturgicalDayId'> = {
      precedence: dayOfWeek === 0 ? Precedence.PrivilegedSunday_2 : Precedence.Weekday_13,
      dateDef: {
        weekdayOrSundayOfEasterTime: { dayOfWeek, weekOfSeason },
        yearOffset,
      },
      isHolyDayOfObligation: dayOfWeek === 0,
      seasons: [{ key: Season.EasterTime, weekOfSeason, dayOfSeason: i + 1 }],
      periods: [],
      dayOfWeek,
      colors: [Color.White],
      i18nDef:
        dayOfWeek === 0
          ? ['seasons:easter_time.sunday', { week: weekOfSeason }]
          : ['seasons:easter_time.weekday', { week: weekOfSeason, dow: dayOfWeek }],
      fromCalendarId: PROPER_OF_TIME_ID,
    };
    // The Ascension of the Lord
    if (weekOfSeason === 6 && dayOfWeek === 4) {
      definitions.push({
        liturgicalDayId: `ascension_of_the_lord`,
        ...data,
        precedence: Precedence.ProperOfTimeSolemnity_2,
        dateDef: { ascension: {}, yearOffset },
        isHolyDayOfObligation: true,
        i18nDef: [`names:ascension_of_the_lord`],
      });
    }
    // All other Sundays and weekdays.
    definitions.push({
      liturgicalDayId: `easter_time_${weekOfSeason}_${DAYS_OF_WEEK[dayOfWeek]}`,
      ...data,
    });
  }

  // Pentecost Sunday.
  definitions.push({
    liturgicalDayId: `pentecost_sunday`,
    precedence: Precedence.ProperOfTimeSolemnity_2,
    dateDef: { pentecostSunday: {}, yearOffset },
    isHolyDayOfObligation: true,
    seasons: [{ key: Season.EasterTime, weekOfSeason: 8, dayOfSeason: 50 }],
    periods: [],
    dayOfWeek: 0,
    colors: [Color.Red],
    i18nDef: [`names:pentecost_sunday`],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  return definitions;
};
