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
    const week = Math.floor(i / 7) + 1;
    const dow = i - (week - 1) * 7;

    definitions.push({
      liturgicalDayId: `advent_${week}_${DAYS_OF_WEEK[dow]}`,
      precedence: dow === 0 ? Precedence.PrivilegedSunday_2 : Precedence.Weekday_13,
      dateDef:
        dow === 0
          ? { dateFn: 'sundayOfAdvent', dateArgs: [week], yearOffset: -1 + yearOffset }
          : {
              dateFn: 'unprivilegedWeekdayOfAdvent',
              dateArgs: [dow, week],
              yearOffset: -1 + yearOffset,
            },
      isHolyDayOfObligation: dow === 0,
      seasons: [{ season: Season.Advent, weekOfSeason: week, dayOfSeason: i + 1 }],
      periods: [],
      dayOfWeek: dow,
      colors: [
        ...(week === 3 && dow === 0 ? [Color.Rose] : []), // Gaudete
        Color.Purple,
      ],
      i18nDef:
        dow === 0 ? ['seasons:advent.sunday', { week }] : ['seasons:advent.weekday', { week, dow }],
      fromCalendarId: PROPER_OF_TIME_ID,
    });
  }

  // Fourth Sunday of Advent.
  definitions.push({
    liturgicalDayId: `advent_4_${DAYS_OF_WEEK[0]}`,
    precedence: Precedence.PrivilegedSunday_2,
    dateDef: { dateFn: 'sundayOfAdvent', dateArgs: [4], yearOffset: -1 + yearOffset },
    isHolyDayOfObligation: true,
    seasons: [{ season: Season.Advent, weekOfSeason: 4, dayOfSeason: 22 }],
    periods: [],
    dayOfWeek: 0,
    colors: [Color.Purple],
    i18nDef: ['seasons:advent.sunday', { week: 4 }],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  // Week before Christmas, from the 17 to 24 December.
  for (let day = 17; day < 25; day++) {
    definitions.push({
      liturgicalDayId: `advent_${MONTHS[11]}_${day}`,
      precedence: Precedence.PrivilegedWeekday_9,
      dateDef: {
        dateFn: 'privilegedWeekdayOfAdvent',
        dateArgs: [day],
        yearOffset: -1 + yearOffset,
      },
      seasons: [{ season: Season.Advent }],
      periods: [],
      colors: [Color.Purple],
      i18nDef: ['seasons:advent.privileged_weekday', { day }],
      fromCalendarId: PROPER_OF_TIME_ID,
    });
  }

  return definitions;
};
