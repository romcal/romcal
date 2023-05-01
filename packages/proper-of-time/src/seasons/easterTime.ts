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
  for (let dow = 1; dow < 7; dow++) {
    definitions.push({
      liturgicalDayId: `easter_${DAYS_OF_WEEK[dow]}`,
      precedence: Precedence.WeekdayOfEasterOctave_2,
      dateDef: { dateFn: 'easterSunday', addDay: dow, yearOffset },
      seasons: [{ season: Season.EasterTime, weekOfSeason: 1, dayOfSeason: dow + 1 }],
      periods: [{ period: Period.EasterOctave }],
      dayOfWeek: dow,
      colors: [Color.White],
      i18nDef: ['seasons:easter_time.octave', { dow }],
      fromCalendarId: PROPER_OF_TIME_ID,
    });
  }

  // Second Sunday of Easter, or of Divine Mercy.
  definitions.push({
    liturgicalDayId: `divine_mercy_sunday`,
    precedence: Precedence.PrivilegedSunday_2,
    dateDef: { dateFn: 'divineMercySunday', yearOffset },
    isHolyDayOfObligation: true,
    seasons: [{ season: Season.EasterTime, weekOfSeason: 2, dayOfSeason: 8 }],
    periods: [{ period: Period.EasterOctave }],
    dayOfWeek: 0,
    colors: [Color.White],
    i18nDef: [`names:divine_mercy_sunday`],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  // All days, from the 2nd Monday to the 7th Saturday of Easter Time.
  for (let i = 8; i < 49; i++) {
    const week = Math.floor(i / 7) + 1;
    const dow = i - (week - 1) * 7;

    const data: Omit<LiturgicalDayDef, 'liturgicalDayId'> = {
      precedence: dow === 0 ? Precedence.PrivilegedSunday_2 : Precedence.Weekday_13,
      dateDef: {
        dateFn: 'weekdayOrSundayOfEasterTime',
        dateArgs: [dow, week],
        yearOffset,
      },
      isHolyDayOfObligation: dow === 0,
      seasons: [{ season: Season.EasterTime, weekOfSeason: week, dayOfSeason: i + 1 }],
      periods: [],
      dayOfWeek: dow,
      colors: [Color.White],
      i18nDef:
        dow === 0
          ? ['seasons:easter_time.sunday', { week }]
          : ['seasons:easter_time.weekday', { week, dow }],
      fromCalendarId: PROPER_OF_TIME_ID,
    };
    // The Ascension of the Lord
    if (week === 6 && dow === 4) {
      definitions.push({
        liturgicalDayId: `ascension_of_the_lord`,
        ...data,
        precedence: Precedence.ProperOfTimeSolemnity_2,
        dateDef: { dateFn: 'ascension', yearOffset },
        isHolyDayOfObligation: true,
        i18nDef: [`names:ascension_of_the_lord`],
      });
    }
    // All other Sundays and weekdays.
    definitions.push({
      liturgicalDayId: `easter_time_${week}_${DAYS_OF_WEEK[dow]}`,
      ...data,
    });
  }

  // Pentecost Sunday.
  definitions.push({
    liturgicalDayId: `pentecost_sunday`,
    precedence: Precedence.ProperOfTimeSolemnity_2,
    dateDef: { dateFn: 'pentecostSunday', yearOffset },
    isHolyDayOfObligation: true,
    seasons: [{ season: Season.EasterTime, weekOfSeason: 8, dayOfSeason: 50 }],
    periods: [],
    dayOfWeek: 0,
    colors: [Color.Red],
    i18nDef: [`names:pentecost_sunday`],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  return definitions;
};
