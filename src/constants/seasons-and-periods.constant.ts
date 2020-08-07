import { PeriodsEnum, SeasonsEnum } from '@romcal/enums/seasons-and-periods.enum';

/**
 * A dynamically generated constant consisting of all the enum keys in [[LITURGICAL_SEASONS]]
 */
export const LITURGICAL_SEASONS = Object.keys(SeasonsEnum).filter(
  key => typeof SeasonsEnum[key as keyof typeof SeasonsEnum] === 'string',
) as Array<keyof typeof SeasonsEnum>;

/**
 * A dynamically generated constant consisting of all the enum keys in [[LITURGICAL_PERIODS]]
 */
export const LITURGICAL_PERIODS = Object.keys(PeriodsEnum).filter(
  key => typeof PeriodsEnum[key as keyof typeof PeriodsEnum] === 'string',
) as Array<keyof typeof PeriodsEnum>;
