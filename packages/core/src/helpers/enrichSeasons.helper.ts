import { PsalterWeekCycle, Season, SeasonMetadata } from '@romcal/shared';

import { LiturgicalDayParams } from '../LiturgicalDay';

export const enrichSeasons = (params: LiturgicalDayParams): SeasonMetadata[] => {
  const { dayDefinition, baseData } = params;

  return Object.values(
    [...(dayDefinition.seasons ?? []), ...(baseData?.seasons ?? [])].reduce((acc, season) => {
      acc[season.key] = {
        key: season.key,
        name: acc[season.key].name ?? '', // TODO: Add name
        weekOfSeason: acc[season.key].weekOfSeason ?? 0, // TODO: Add weekOfSeason
        dayOfSeason: acc[season.key].dayOfSeason ?? 0, // TODO: Add dayOfSeason
        psalterWeek: acc[season.key].psalterWeek ?? PsalterWeekCycle.Week1, // TODO: Add psalterWeek
        startOfSeason: acc[season.key].startOfSeason ?? '', // TODO: Add startOfSeason
        endOfSeason: acc[season.key].endOfSeason ?? '', // TODO: Add endOfSeason
      };

      return acc;
    }, {} as Record<Season, SeasonMetadata>),
  );
};
