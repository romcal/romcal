import { ElementType } from '@RomcalUtils/helpers';
import { COUNTRIES } from '@RomcalConstants/county-list.constant';

/**
 * A dynamic type indexing all supported countries for calendar generation.
 */
export type Countries = ElementType<typeof COUNTRIES>;
