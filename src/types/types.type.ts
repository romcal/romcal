import { ElementType } from '@romcal/utils/helpers';
import { TYPES } from '@romcal/constants/types.constant';

/**
 * A dynamically generated type consisting of all extracted type keys.
 */
export type Types = ElementType<typeof TYPES>;
