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
    dateDef: { ashWednesday: {}, yearOffset },
    seasons: [{ key: Season.Lent, weekOfSeason: 0, dayOfSeason: 1 }],
    periods: [{ key: Period.PresentationOfTheLordToHolyThursday }],
    dayOfWeek: 3,
    colors: [Color.Purple],
    i18nDef: [`names:ash_wednesday`],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  // Days after Ash Wednesday.
  for (let dayOfWeek = 4; dayOfWeek < 7; dayOfWeek++) {
    definitions.push({
      liturgicalDayId: `${DAYS_OF_WEEK[dayOfWeek]}_after_ash_wednesday`,
      precedence: Precedence.PrivilegedWeekday_9,
      dateDef: {
        ashWednesday: {},
        dayOffset: dayOfWeek - 3,
        yearOffset,
      },
      seasons: [{ key: Season.Lent, weekOfSeason: 0, dayOfSeason: dayOfWeek - 2 }],
      periods: [{ key: Period.PresentationOfTheLordToHolyThursday }],
      dayOfWeek,
      colors: [Color.Purple],
      i18nDef: ['seasons:lent.day_after_ash_wed', { dow: dayOfWeek }],
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
      dateDef: {
        ashWednesday: {},
        dayOffset: i + 4,
        yearOffset,
      },
      isHolyDayOfObligation: dow === 0,
      seasons: [{ key: Season.Lent, weekOfSeason: week, dayOfSeason: i + 5 }],
      periods: [{ key: Period.PresentationOfTheLordToHolyThursday }],
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
    dateDef: { palmSunday: {}, yearOffset },
    isHolyDayOfObligation: true,
    seasons: [{ key: Season.Lent, weekOfSeason: 6, dayOfSeason: 40 }],
    periods: [{ key: Period.HolyWeek }, { key: Period.PresentationOfTheLordToHolyThursday }],
    dayOfWeek: 0,
    colors: [Color.Red],
    i18nDef: [`names:palm_sunday_of_the_passion_of_the_lord`],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  // Holy Week, Monday to Thursday.
  for (let dayOfWeek = 1; dayOfWeek < 5; dayOfWeek++) {
    definitions.push({
      liturgicalDayId: `holy_${DAYS_OF_WEEK[dayOfWeek]}`,
      precedence: Precedence.PrivilegedWeekday_9,
      dateDef: {
        palmSunday: {},
        dayOffset: dayOfWeek,
        yearOffset,
      },
      seasons: [{ key: Season.Lent, weekOfSeason: 6, dayOfSeason: 40 + dayOfWeek }],
      periods: [{ key: Period.HolyWeek }, { key: Period.PresentationOfTheLordToHolyThursday }],
      dayOfWeek,
      colors: [Color.Purple],
      i18nDef: ['seasons:lent.holy_week_day', { dow: dayOfWeek }],
      fromCalendarId: PROPER_OF_TIME_ID,
    });
  }

  return definitions;
};
