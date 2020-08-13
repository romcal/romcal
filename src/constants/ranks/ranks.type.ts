import { ElementType } from '@romcal/utils/type-helpers/type-helpers';
import { RANKS } from '@romcal/constants/ranks/ranks.constant';

/**
 * A dynamically generated type consisting of all extracted rank keys.
 */
export type RomcalRank = ElementType<typeof RANKS>;

export type RomcalRanks = {
  [key in RomcalRank]: string;
};
