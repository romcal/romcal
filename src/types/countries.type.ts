import { ElementType } from '@romcal/utils/helpers';
import { COUNTRIES } from '@romcal/constants/country-list.constant';

/**
 * A dynamic type indexing all supported countries for calendar generation.
 */
export type Countries = ElementType<typeof COUNTRIES>;
