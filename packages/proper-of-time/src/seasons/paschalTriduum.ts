import {
  Color,
  LiturgicalDayDef,
  Period,
  Precedence,
  PROPER_OF_TIME_ID,
  Season,
} from '@romcal/shared';

/**
 * Compute the Proper of the Paschal Triduum
 * @param yearOffset A Liturgical year offset
 */
export const paschalTriduum = (yearOffset = 0): LiturgicalDayDef[] => {
  const definitions: LiturgicalDayDef[] = [];

  // Thursday of the Lord's Supper (at the Evening Mass).
  definitions.push({
    liturgicalDayId: `thursday_of_the_lords_supper`,
    precedence: Precedence.Triduum_1,
    dateDef: { holyThursday: {}, yearOffset },
    seasons: [{ key: Season.PaschalTriduum, weekOfSeason: 1, dayOfSeason: 0 }],
    periods: [{ key: Period.HolyWeek }],
    dayOfWeek: 4,
    colors: [Color.White],
    i18nDef: [`names:thursday_of_the_lords_supper`],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  // Friday of the Passion of the Lord.
  definitions.push({
    liturgicalDayId: `friday_of_the_passion_of_the_lord`,
    precedence: Precedence.Triduum_1,
    dateDef: { goodFriday: {}, yearOffset },
    seasons: [{ key: Season.PaschalTriduum, weekOfSeason: 1, dayOfSeason: 1 }],
    periods: [{ key: Period.HolyWeek }],
    dayOfWeek: 5,
    colors: [Color.Red],
    i18nDef: [`names:friday_of_the_passion_of_the_lord`],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  // Holy Saturday
  definitions.push({
    liturgicalDayId: `holy_saturday`,
    precedence: Precedence.Triduum_1,
    dateDef: { holySaturday: {}, yearOffset },
    seasons: [{ key: Season.PaschalTriduum, weekOfSeason: 1, dayOfSeason: 2 }],
    periods: [{ key: Period.HolyWeek }],
    dayOfWeek: 6,
    colors: [],
    i18nDef: [`names:holy_saturday`],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  // Easter Sunday of the Resurrection of the Lord.
  definitions.push({
    liturgicalDayId: `easter_sunday`,
    precedence: Precedence.Triduum_1,
    dateDef: { easterSunday: {}, yearOffset },
    isHolyDayOfObligation: true,
    seasons: [
      { key: Season.PaschalTriduum, weekOfSeason: 1, dayOfSeason: 3 },
      { key: Season.EasterTime, weekOfSeason: 1, dayOfSeason: 1 },
    ],
    periods: [{ key: Period.EasterOctave }],
    dayOfWeek: 0,
    colors: [Color.White],
    i18nDef: [`names:easter_sunday`],
    fromCalendarId: PROPER_OF_TIME_ID,
  });

  return definitions;
};
