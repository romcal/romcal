import moment from "moment";
import { Types } from "../constants";
import { TLiturgicalColor } from "../constants/LiturgicalColors";
import LiturgicalSeasons from "../constants/LiturgicalSeasons";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface RomcalDateItemDataCalendar {
    weeks: number;
    week: number;
    day: number;
}

export interface RomcalSeason {
    key: LiturgicalSeasons;
    value: string;
}

export interface RomcalDateItemMetadata {
    liturgicalColor: TLiturgicalColor;
    titles: Array<string>;
}

/**
 * A subset of [[RomcalDateItemMetadata]] that does not include the liturgicalColor key
 */
export type RomcalDateItemMetadataWithoutLiturgicalColor = Omit<RomcalDateItemMetadata, "liturgicalColor">;

/**
 * A subset of [[RomcalDateItemMetadata]] that does not include the titles key
 */
export type RomcalDateItemMetadataWithoutTitles = Omit<RomcalDateItemMetadata, "titles">;


export interface RomcalDateItemData {
    season: RomcalSeason;
    meta: RomcalDateItemMetadata | RomcalDateItemMetadataWithoutLiturgicalColor | RomcalDateItemMetadataWithoutTitles;
    calendar: RomcalDateItemDataCalendar;
}

/**
 * A subset of [[RomcalDateItemData]] that does not include the calendar key
 */
export type RawDateItemDataWithoutCalendar = Omit<RomcalDateItemData, "calendar">;

/**
 * A subset of [[RomcalDateItemData]] that does not include the meta key
 */
export type RawDateItemDataWithoutMeta = Omit<RomcalDateItemData, "meta">;

/**
 * A subset of [[RomcalDateItemData]] that does not include the meta and calendar keys
 */
export type RawDateItemDataWithoutMetaAndCalendar = Omit<RomcalDateItemData, "meta" | "calendar">;

export type RomcalDateItem = {
    name: string;
    key: string;
    type: Types;
    moment: moment.Moment;
    data?: RomcalDateItemData | RawDateItemDataWithoutCalendar | RawDateItemDataWithoutMeta | RawDateItemDataWithoutMetaAndCalendar;
    source: string;
};

/**
 * A subset of the [[RomcalDateItem]] that does not include the name and source key.
 * This subset
 */
export type RawDateItem = Omit<RomcalDateItem, "name" | "source">;

/**
 * A subset of [[RomcalDateItem]] that does not include the source key
 */
export type LocalizedRawDateItem = Omit<RomcalDateItem, "source">;

/**
 * A subset of [[RomcalDateItem]] that does not include the source key
 */
export type RomcalDateItemWithoutKeyAndSource = Omit<RomcalDateItem, "key" | "source">;
