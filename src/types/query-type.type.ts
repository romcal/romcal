import { ElementType } from '@romcal/utils/helpers';
import { QUERY_TYPES } from '@romcal/constants/query-types.constant';

export type QueryType = ElementType<typeof QUERY_TYPES>;

export type Query = Readonly<{
  day?: number;
  month?: number;
  group?: QueryType;
  title?: string;
}>;
