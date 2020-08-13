import { Ranks } from '@romcal/constants/ranks/ranks.enum';

/**
 * A dynamically generated constant consisting of all the enum keys in [[RANKS]]
 */
export const RANKS = Object.keys(Ranks).filter((key) => typeof Ranks[key as keyof typeof Ranks] === 'string') as Array<
  keyof typeof Ranks
>;
