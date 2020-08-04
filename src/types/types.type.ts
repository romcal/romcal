import { ElementType } from '@romcal/utils/helpers';
import { RANKS } from '@romcal/constants/ranks.constant';

/**
 * A dynamically generated type consisting of all extracted type keys.
 */
export type Types = ElementType<typeof RANKS>;
