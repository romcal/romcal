import moment from "moment";
import { Types } from "../constants";
import { TLiturgicalColor } from "../constants/LiturgicalColors";
import LiturgicalSeasons from "../constants/LiturgicalSeasons";
import { TPsalterWeek } from "../constants/PsalterWeeks";
import { ISO8601DateString, isNil } from "../utils/type-guards";

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

/**
 * This interface is used internally by romcal
 * during the construction of the liturgical calendar.
 * All properties except `moment` is marked optional as
 * the the object is constructed in stages. This interface
 * should not be used in consumer applications.
 */
export interface IRomcalDateItem {
    /**
     * The human readable and localized name of this celebration
     */
    name?: string;
    /**
     * The unique key that identifies this celebration
     */
    key?: string;
    /**
     * The type of celebration
     */
    type?: Types;
    moment: moment.Moment;
    data?: IRomcalDateItemData;
    source?: string;
    drop?: boolean;
}

export interface IDateItemMetadata {
    psalterWeek?: TPsalterWeek;
    liturgicalColor?: TLiturgicalColor;
    titles?: Array<string>;
}

export interface IDateItemData {
    season: IRomcalSeason;
    meta: IDateItemMetadata;
    calendar: IRomcalDateItemDataCalendar;
}

export interface IDateItem {
    readonly key: string;
    readonly name: string;
    readonly date: ISO8601DateString;
    readonly type: Types;
    readonly data: IDateItemData;
    readonly moment: moment.Moment;
    readonly base?: DateItem;
    readonly _id: number;
    readonly _stack: number;
}

export interface IDateItemInput extends IDateItem {
    readonly _stack: number;
    readonly baseItem?: DateItem;
}

export class DateItem implements IDateItem {
    private key: string;
    private name: string;
    private date: ISO8601DateString;
    private type: Types;
    private data: IDateItemData;
    private moment: moment.Moment;
    private base: DateItem | undefined;
    private _id: number;
    private _stack: number;

    static latestId: number;

    constructor({ key, name, type, moment, data, _stack, baseItem }: IDateItemInput) {
        this.key = key;
        this.name = name;
        this.date = moment.toISOString();
        this.type = type;
        this.data = data;
        this.moment = moment;

        this._id = DateItem._incrementId();
        this._stack = _stack;

        if (this._id !== baseItem?._id) {
            this.base = baseItem;
        }
    }

    private adjustTypeInSeason() {}

    private addLiturgicalCycleMetadata() {}

    static _incrementId(): number {
        return isNil(this.latestId) ? (this.latestId = 0) : this.latestId++;
    }
}
