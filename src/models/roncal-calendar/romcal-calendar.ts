import { RomcalDateItemModel } from '@romcal/models/romcal-date-item/romcal-date-item.model';

export interface Romcal {
  readonly dateItems: Array<RomcalDateItemModel>;
}
