import { Period, PeriodDef, PROPER_OF_TIME_ID, Season, SeasonDef } from '@romcal/shared';

import { LiturgicalDayParams } from '../LiturgicalDay';

export const enrichPeriods = (params: LiturgicalDayParams): PeriodDef[] => {
  const { dayDefinition, computedDate, properOfTimeDates, baseData } = params;
  const periods: PeriodDef[] = dayDefinition.periods ?? baseData?.periods ?? [];
  const seasons: SeasonDef[] = dayDefinition.seasons ?? baseData?.seasons ?? [];

  // The second Sunday after the Christmas octave can be before or after the Epiphany,
  // and this can be determined from the definition of the Proper of the Time,
  // without having a liturgical year context.
  if (
    dayDefinition.fromCalendarId === PROPER_OF_TIME_ID &&
    dayDefinition.liturgicalDayId === 'second_sunday_after_christmas'
  ) {
    if (computedDate.getTime() >= properOfTimeDates.epiphany().getTime()) {
      periods.unshift({ key: Period.DaysFromEpiphany });
    } else if (computedDate.getTime() > properOfTimeDates.maryMotherOfGod().getTime()) {
      periods.unshift({ key: Period.DaysBeforeEpiphany });
    }
  }

  // Specify the early/late period of an ordinary time liturgical day item.
  if (
    dayDefinition.fromCalendarId === PROPER_OF_TIME_ID &&
    seasons[0].key === Season.OrdinaryTime
  ) {
    if (computedDate.getTime() < properOfTimeDates.pentecostSunday().getTime()) {
      periods.unshift({ key: Period.EarlyOrdinaryTime });
    } else {
      periods.unshift({ key: Period.LateOrdinaryTime });
    }
  }

  return periods;
};
