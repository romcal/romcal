import { RomcalDateItemDataCalendar } from "./romcal-date-item-data-calendar";
import { RomcalDateItemMetadata } from "./romcal-date-item-metadata";
import { RomcalSeason } from "./romcal-date-item-data-season";

export interface RomcalDateItemData {
  season: RomcalSeason;
  meta: RomcalDateItemMetadata;
  calendar: RomcalDateItemDataCalendar;
}
