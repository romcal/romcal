import { ElementType } from '@romcal/utils/type-helpers/type-helpers';
import { COUNTRIES } from '@romcal/constants/countries/countries.constant';

/**
 * A dynamic type indexing all supported countries for calendar generation.
 */
export type RomcalCalendarName = ElementType<typeof COUNTRIES>;
