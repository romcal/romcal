import moment from "moment";
import { Types } from "../constants";
import { RomcalDateItemData } from "./romcal-date-item-data";

export type RomcalDateItem = {
  name: String;
  key: string;
  type: Types;
  moment: moment.Moment;
  data: RomcalDateItemData;
  source: string;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type RawDateItem = Omit<RomcalDateItem, "name" | "source">;

export type LocalizedRawDateItem = Omit<RomcalDateItem, "name">;
