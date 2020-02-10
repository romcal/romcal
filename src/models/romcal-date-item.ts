import moment from "moment";
import { Types } from "../constants";
import { RomcalDateItemData } from "./romcal-date-item-data";

export type RomcalDateItem = {
  name: String;
  key: string;
  type: Types;
  moment: moment.Moment;
  data?: RomcalDateItemData;
  source: string;
};

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * A subset of the [[RomcalDateItem]] that does not include the name and source key.
 * This subset
 */
export type RawDateItem = Omit<RomcalDateItem, "name" | "source">;

/**
 * A subset of [[RomcalDateItem]] that does not include the source key
 */
export type LocalizedRawDateItem = Omit<RomcalDateItem, "source">;
