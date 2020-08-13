import { ElementType } from '@romcal/utils/type-helpers/type-helpers';
import { QUERY_TYPES } from '@romcal/constants/query-options/query-types.constant';

export type RomcalQueryType = ElementType<typeof QUERY_TYPES>;

export type RomcalQuery = Readonly<{
  day?: number;
  month?: number;
  group?: RomcalQueryType;
  title?: string;
}>;
