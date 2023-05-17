import {
  Color,
  DAYS_OF_WEEK,
  LiturgicalDayDef,
  Precedence,
  PROPER_OF_TIME_ID,
  Season,
} from '@romcal/shared';

/**
 * Compute the Proper of the Ordinary Time
 * @param yearOffset A Liturgical year offset
 */
export const ordinaryTime = (yearOffset = 0): LiturgicalDayDef[] => {
  const definitions: LiturgicalDayDef[] = [];

  // The Most Holy Trinity.
  definitions.push({
    liturgicalDayId: `most_holy_trinity`,
    precedence: Precedence.GeneralSolemnity_3,
    dateDef: { trinitySunday: {}, yearOffset },
    isHolyDayOfObligation: true,
    seasons: [{ key: Season.OrdinaryTime }],
    periods: [],
    dayOfWeek: 0,
    colors: [Color.White],
    i18nDef: [`names:most_holy_trinity`],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  // The Most Holy Body and Blood of Christ (Corpus Christi).
  definitions.push({
    liturgicalDayId: `most_holy_body_and_blood_of_christ`,
    precedence: Precedence.GeneralSolemnity_3,
    dateDef: { corpusChristi: {}, yearOffset },
    isHolyDayOfObligation: true,
    seasons: [{ key: Season.OrdinaryTime }],
    periods: [],
    colors: [Color.White],
    i18nDef: [`names:most_holy_body_and_blood_of_christ`],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  // The Most Sacred Heart of Jesus.
  definitions.push({
    liturgicalDayId: `most_sacred_heart_of_jesus`,
    precedence: Precedence.GeneralSolemnity_3,
    dateDef: { mostSacredHeartOfJesus: {}, yearOffset },
    isHolyDayOfObligation: false,
    seasons: [{ key: Season.OrdinaryTime }],
    periods: [],
    dayOfWeek: 5,
    colors: [Color.White],
    i18nDef: [`names:most_sacred_heart_of_jesus`],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  // Ordinary Time.
  for (let i = 1; i < 238; i++) {
    const weekOfSeason = Math.floor(i / 7) + 1;
    const dayOfWeek = i - (weekOfSeason - 1) * 7;

    const data: Omit<LiturgicalDayDef, 'liturgicalDayId'> = {
      precedence: dayOfWeek === 0 ? Precedence.UnprivilegedSunday_6 : Precedence.Weekday_13,
      dateDef: {
        weekdayOrSundayOfOrdinaryTime: { dayOfWeek, weekOfSeason },
        yearOffset,
      },
      isHolyDayOfObligation: dayOfWeek === 0,
      seasons: [{ key: Season.OrdinaryTime, weekOfSeason }],
      periods: [],
      dayOfWeek,
      colors: [Color.Green],
      i18nDef:
        dayOfWeek === 0
          ? ['seasons:ordinary_time.sunday', { week: weekOfSeason }]
          : ['seasons:ordinary_time.weekday', { week: weekOfSeason, dow: dayOfWeek }],
      fromCalendarId: PROPER_OF_TIME_ID,
    };

    // Sunday of the Word of God
    // http://www.vatican.va/content/francesco/en/motu_proprio/documents/papa-francesco-motu-proprio-20190930_aperuit-illis.html
    if (weekOfSeason === 3 && dayOfWeek === 0) {
      definitions.push({
        liturgicalDayId: `sunday_of_the_word_of_god`,
        ...data,
        i18nDef: [`names:sunday_of_the_word_of_god`],
      });
    }

    // 34th week in Ordinary Time,
    // or the Solemnity of our Lord Jesus Christ, King of the Universe.
    else if (weekOfSeason === 34 && dayOfWeek === 0) {
      definitions.push({
        liturgicalDayId: `our_lord_jesus_christ_king_of_the_universe`,
        ...data,
        precedence: Precedence.GeneralSolemnity_3,
        colors: [Color.White],
        i18nDef: [`names:our_lord_jesus_christ_king_of_the_universe`],
      });
    }

    // All other Sundays and weekdays.
    else {
      definitions.push({
        liturgicalDayId: `ordinary_time_${weekOfSeason}_${DAYS_OF_WEEK[dayOfWeek]}`,
        ...data,
      });
    }
  }

  return definitions;
};
