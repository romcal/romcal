import moment from "moment";
import { Types } from "../constants";
import { TLiturgicalColor } from "../constants/LiturgicalColors";
import LiturgicalSeasons from "../constants/LiturgicalSeasons";

export interface RomcalDateItemDataCalendar {
    weeks: number;
    week: number;
    day: number;
}

export interface RomcalSeason {
    key: LiturgicalSeasons;
    value: string;
}

export interface RomcalDateItemData {
    season: RomcalSeason;
    meta: RomcalDateItemMetadata;
    calendar: RomcalDateItemDataCalendar;
}

export interface RomcalDateItemMetadata {
    liturgicalColor: TLiturgicalColor;
    titles: Array<String>;
}

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
