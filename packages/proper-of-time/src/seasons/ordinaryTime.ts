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
    dateDef: { dateFn: 'trinitySunday', yearOffset },
    isHolyDayOfObligation: true,
    seasons: [{ season: Season.OrdinaryTime }],
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
    dateDef: { dateFn: 'corpusChristi', yearOffset },
    isHolyDayOfObligation: true,
    seasons: [{ season: Season.OrdinaryTime }],
    periods: [],
    colors: [Color.White],
    i18nDef: [`names:most_holy_body_and_blood_of_christ`],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  // The Most Sacred Heart of Jesus.
  definitions.push({
    liturgicalDayId: `most_sacred_heart_of_jesus`,
    precedence: Precedence.GeneralSolemnity_3,
    dateDef: { dateFn: 'mostSacredHeartOfJesus', yearOffset },
    isHolyDayOfObligation: false,
    seasons: [{ season: Season.OrdinaryTime }],
    periods: [],
    dayOfWeek: 5,
    colors: [Color.White],
    i18nDef: [`names:most_sacred_heart_of_jesus`],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  // Ordinary Time.
  for (let i = 1; i < 238; i++) {
    const week = Math.floor(i / 7) + 1;
    const dow = i - (week - 1) * 7;

    const data: Omit<LiturgicalDayDef, 'liturgicalDayId'> = {
      precedence: dow === 0 ? Precedence.UnprivilegedSunday_6 : Precedence.Weekday_13,
      dateDef: { dateFn: 'weekdayOrSundayOfOrdinaryTime', dateArgs: [dow, week], yearOffset },
      isHolyDayOfObligation: dow === 0,
      seasons: [{ season: Season.OrdinaryTime, weekOfSeason: week }],
      periods: [],
      dayOfWeek: dow,
      colors: [Color.Green],
      i18nDef:
        dow === 0
          ? ['seasons:ordinary_time.sunday', { week }]
          : ['seasons:ordinary_time.weekday', { week, dow }],
      fromCalendarId: PROPER_OF_TIME_ID,
    };

    // Sunday of the Word of God
    // http://www.vatican.va/content/francesco/en/motu_proprio/documents/papa-francesco-motu-proprio-20190930_aperuit-illis.html
    if (week === 3 && dow === 0) {
      definitions.push({
        liturgicalDayId: `sunday_of_the_word_of_god`,
        ...data,
        i18nDef: [`names:sunday_of_the_word_of_god`],
      });
    }

    // 34th week in Ordinary Time,
    // or the Solemnity of our Lord Jesus Christ, King of the Universe.
    else if (week === 34 && dow === 0) {
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
        liturgicalDayId: `ordinary_time_${week}_${DAYS_OF_WEEK[dow]}`,
        ...data,
      });
    }
  }

  return definitions;
};
