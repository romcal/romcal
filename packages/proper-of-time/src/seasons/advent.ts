import {
  Color,
  DAYS_OF_WEEK,
  LiturgicalDayDef,
  MONTHS,
  Precedence,
  PROPER_OF_TIME_ID,
  Season,
} from '@romcal/shared';

/**
 * Compute the Proper of Advent
 * @param yearOffset A Liturgical year offset
 */
export const advent = (yearOffset = 0): LiturgicalDayDef[] => {
  const definitions: LiturgicalDayDef[] = [];

  // All days, from the 1st Sunday of Advent to the Friday of the 3rd week of Advent.
  for (let i = 0; i < 20; i++) {
    const weekOfSeason = Math.floor(i / 7) + 1;
    const dayOfWeek = i - (weekOfSeason - 1) * 7;

    definitions.push({
      liturgicalDayId: `advent_${weekOfSeason}_${DAYS_OF_WEEK[dayOfWeek]}`,
      precedence: dayOfWeek === 0 ? Precedence.PrivilegedSunday_2 : Precedence.Weekday_13,
      dateDef:
        dayOfWeek === 0
          ? {
              sundayOfAdvent: { weekOfSeason },
              yearOffset: -1 + yearOffset,
            }
          : {
              unprivilegedWeekdayOfAdvent: { dayOfWeek, weekOfSeason },
              yearOffset: -1 + yearOffset,
            },
      isHolyDayOfObligation: dayOfWeek === 0,
      seasons: [{ key: Season.Advent, weekOfSeason, dayOfSeason: i + 1 }],
      periods: [],
      dayOfWeek,
      colors: [
        ...(weekOfSeason === 3 && dayOfWeek === 0 ? [Color.Rose] : []), // Gaudete
        Color.Purple,
      ],
      i18nDef:
        dayOfWeek === 0
          ? ['seasons:advent.sunday', { week: weekOfSeason }]
          : ['seasons:advent.weekday', { week: weekOfSeason, dow: dayOfWeek }],
      fromCalendarId: PROPER_OF_TIME_ID,
    });
  }

  // Fourth Sunday of Advent.
  definitions.push({
    liturgicalDayId: `advent_4_${DAYS_OF_WEEK[0]}`,
    precedence: Precedence.PrivilegedSunday_2,
    dateDef: {
      sundayOfAdvent: { weekOfSeason: 4 },
      yearOffset: -1 + yearOffset,
    },
    isHolyDayOfObligation: true,
    seasons: [{ key: Season.Advent, weekOfSeason: 4, dayOfSeason: 22 }],
    periods: [],
    dayOfWeek: 0,
    colors: [Color.Purple],
    i18nDef: ['seasons:advent.sunday', { week: 4 }],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  // Week before Christmas, from the 17 to 24 December.
  for (let dayOfMonth = 17; dayOfMonth < 25; dayOfMonth++) {
    definitions.push({
      liturgicalDayId: `advent_${MONTHS[11]}_${dayOfMonth}`,
      precedence: Precedence.PrivilegedWeekday_9,
      dateDef: {
        privilegedWeekdayOfAdvent: { dayOfMonth },
        yearOffset: -1 + yearOffset,
      },
      seasons: [{ key: Season.Advent }],
      periods: [],
      colors: [Color.Purple],
      i18nDef: ['seasons:advent.privileged_weekday', { day: dayOfMonth }],
      fromCalendarId: PROPER_OF_TIME_ID,
    });
  }

  return definitions;
};
