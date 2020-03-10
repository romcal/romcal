import { ElementType } from '@RomcalUtils/helpers';
import { TYPES } from '@RomcalConstants/types.constant';

/**
 * A dynamically generated type consisting of all extracted type keys.
 */
export type Types = ElementType<typeof TYPES>;
