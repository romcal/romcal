import { ElementType } from '@romcal/utils/type-helpers/type-helpers';
import { TITLES } from '@romcal/constants/titles/titles.constant';

/**
 * A dynamically generated type consisting of all extracted titles keys.
 */
export type RomcalTitle = ElementType<typeof TITLES>;

export type RomcalTitles = {
  [key in RomcalTitle]: string;
};
