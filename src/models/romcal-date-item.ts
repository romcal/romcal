import moment from "moment";
import { Types } from "../constants";
import { TLiturgicalColor } from "../constants/LiturgicalColors";
import LiturgicalSeasons from "../constants/LiturgicalSeasons";
import { TPsalterWeek } from "../constants/PsalterWeeks";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface IRomcalDateItemDataCalendar {
    weeks: number;
    week: number;
    day: number;
}

export interface IRomcalSeason {
    key: LiturgicalSeasons;
    value: string;
}

export interface IRomcalDateItemMetadata {
    psalterWeek?: TPsalterWeek;
    liturgicalColor?: TLiturgicalColor;
    titles?: Array<string>;
}

export interface IRomcalDateItemData {
    season?: IRomcalSeason;
    meta?: IRomcalDateItemMetadata;
    calendar?: IRomcalDateItemDataCalendar;
    prioritized?: boolean;
}

export interface IRomcalDateItem {
    name?: string;
    key?: string;
    type?: Types;
    moment: moment.Moment;
    data?: IRomcalDateItemData;
    source?: string;
}
