import { RanksEnum } from '@romcal/enums/ranks.enum';

/**
 * A dynamically generated constant consisting of all the enum keys in [[RANKS]]
 */
export const RANKS = Object.keys(RanksEnum).filter(
  (key) => typeof RanksEnum[key as keyof typeof RanksEnum] === 'string',
) as Array<keyof typeof RanksEnum>;
