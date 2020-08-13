import { LiturgicalPeriods, LiturgicalSeasons } from '@romcal/constants/seasons-and-periods/seasons-and-periods.enum';

/**
 * A dynamically generated constant consisting of all the enum keys in [[LITURGICAL_SEASONS]]
 */
export const LITURGICAL_SEASONS = Object.keys(LiturgicalSeasons).filter(
  (key) => typeof LiturgicalSeasons[key as keyof typeof LiturgicalSeasons] === 'string',
) as Array<keyof typeof LiturgicalSeasons>;

/**
 * A dynamically generated constant consisting of all the enum keys in [[LITURGICAL_PERIODS]]
 */
export const LITURGICAL_PERIODS = Object.keys(LiturgicalPeriods).filter(
  (key) => typeof LiturgicalPeriods[key as keyof typeof LiturgicalPeriods] === 'string',
) as Array<keyof typeof LiturgicalPeriods>;
