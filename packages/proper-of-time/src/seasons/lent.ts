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
 * Compute the Proper of Lent
 * @param yearOffset A Liturgical year offset
 */
export const lent = (yearOffset = 0): LiturgicalDayDef[] => {
  const definitions: LiturgicalDayDef[] = [];

  // Ash Wednesday.
  definitions.push({
    liturgicalDayId: `ash_wednesday`,
    precedence: Precedence.AshWednesday_2,
    dateDef: { dateFn: 'ashWednesday', yearOffset },
    seasons: [{ season: Season.Lent, weekOfSeason: 0, dayOfSeason: 1 }],
    periods: [{ period: Period.PresentationOfTheLordToHolyThursday }],
    dayOfWeek: 3,
    colors: [Color.Purple],
    i18nDef: [`names:ash_wednesday`],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  // Days after Ash Wednesday.
  for (let dow = 4; dow < 7; dow++) {
    definitions.push({
      liturgicalDayId: `${DAYS_OF_WEEK[dow]}_after_ash_wednesday`,
      precedence: Precedence.PrivilegedWeekday_9,
      dateDef: { dateFn: 'ashWednesday', addDay: dow - 3, yearOffset },
      seasons: [{ season: Season.Lent, weekOfSeason: 0, dayOfSeason: dow - 2 }],
      periods: [{ period: Period.PresentationOfTheLordToHolyThursday }],
      dayOfWeek: dow,
      colors: [Color.Purple],
      i18nDef: ['seasons:lent.day_after_ash_wed', { dow }],
      fromCalendarId: PROPER_OF_TIME_ID,
    });
  }

  // All days, from the 1st Sunday of Lent to the Saturday of the 5th week of Lent.
  for (let i = 0; i < 35; i++) {
    const week = Math.floor(i / 7) + 1;
    const dow = i - (week - 1) * 7;
    definitions.push({
      liturgicalDayId: `lent_${week}_${DAYS_OF_WEEK[dow]}`,
      precedence: dow === 0 ? Precedence.PrivilegedSunday_2 : Precedence.PrivilegedWeekday_9,
      dateDef: { dateFn: 'ashWednesday', addDay: i + 4, yearOffset },
      isHolyDayOfObligation: dow === 0,
      seasons: [{ season: Season.Lent, weekOfSeason: week, dayOfSeason: i + 5 }],
      periods: [{ period: Period.PresentationOfTheLordToHolyThursday }],
      dayOfWeek: dow,
      colors: [
        ...(week === 4 && dow === 0 ? [Color.Rose] : []), // Laetare
        Color.Purple,
      ],
      i18nDef:
        dow === 0 ? ['seasons:lent.sunday', { week }] : ['seasons:lent.weekday', { week, dow }],
      fromCalendarId: PROPER_OF_TIME_ID,
    });
  }

  // Palm Sunday of the Passion of the Lord.
  definitions.push({
    liturgicalDayId: `palm_sunday_of_the_passion_of_the_lord`,
    precedence: Precedence.PrivilegedSunday_2,
    dateDef: { dateFn: 'palmSunday', yearOffset },
    isHolyDayOfObligation: true,
    seasons: [{ season: Season.Lent, weekOfSeason: 6, dayOfSeason: 40 }],
    periods: [{ period: Period.HolyWeek }, { period: Period.PresentationOfTheLordToHolyThursday }],
    dayOfWeek: 0,
    colors: [Color.Red],
    i18nDef: [`names:palm_sunday_of_the_passion_of_the_lord`],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  // Holy Week, Monday to Thursday.
  for (let dow = 1; dow < 5; dow++) {
    definitions.push({
      liturgicalDayId: `holy_${DAYS_OF_WEEK[dow]}`,
      precedence: Precedence.PrivilegedWeekday_9,
      dateDef: { dateFn: 'palmSunday', addDay: dow, yearOffset },
      seasons: [{ season: Season.Lent, weekOfSeason: 6, dayOfSeason: 40 + dow }],
      periods: [
        { period: Period.HolyWeek },
        { period: Period.PresentationOfTheLordToHolyThursday },
      ],
      dayOfWeek: dow,
      colors: [Color.Purple],
      i18nDef: ['seasons:lent.holy_week_day', { dow }],
      fromCalendarId: PROPER_OF_TIME_ID,
    });
  }

  return definitions;
};
