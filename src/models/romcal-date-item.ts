import dayjs from "dayjs";
import { Types, LiturgicalCycles } from "../constants";
import { TLiturgicalColor } from "../constants/LiturgicalColors";
import { TLiturgicalSeasonKeys } from "../constants/LiturgicalSeasons";
import { TPsalterWeek } from "../constants/PsalterWeeks";
import { ISO8601DateString, isNil } from "../utils/type-guards";
import { Dates } from "../lib";
import { TLiturgicalCycle } from "../constants/LiturgicalCycles";

export interface IRomcalDateItemDataCalendar {
    weeks: number;
    week: number;
    day: number;
}

export interface IRomcalSeason {
    key: TLiturgicalSeasonKeys;
    value: string;
}

export interface IRomcalDateItemMetadata {
    psalterWeek?: TPsalterWeek;
    liturgicalColor?: TLiturgicalColor;
    titles?: Array<string>;
    cycle?: TLiturgicalCycle;
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
    moment: dayjs.Dayjs;
    data?: IRomcalDateItemData;
    source?: string;
    drop?: boolean;
}

export interface IDateItemMetadata {
    psalterWeek?: TPsalterWeek;
    liturgicalColor?: TLiturgicalColor;
    titles?: Array<string>;
    cycle?: TLiturgicalCycle;
}

export interface IDateItemData {
    season: IRomcalSeason;
    meta: IDateItemMetadata;
    calendar: IRomcalDateItemDataCalendar;
    prioritized?: boolean;
}

export interface IDateItem {
    readonly key: string;
    readonly name: string;
    readonly date: ISO8601DateString;
    readonly type: Types;
    readonly data: IDateItemData;
    readonly moment: dayjs.Dayjs;
    readonly base?: DateItem;
    readonly _id: number;
    readonly _stack: number;
}

export type TDateItemInput = Omit<IDateItem, "_id" | "base" | "date"> &
    Readonly<{
        baseItem?: DateItem;
    }>;

export class DateItem implements IDateItem {
    /**
     * The unique key of the celebration.
     */
    public key: string;
    /**
     * The localized name of the celebration.
     */
    public name: string;
    /**
     * The ISO8601 formatted date and time string of the celebration.
     */
    public date: ISO8601DateString;
    /**
     * The type of the celebration.
     */
    public type: Types;
    /**
     * The data associated to this celebration.
     */
    public data: IDateItemData;
    /**
     * The DayJS object representing the date and time of the celebration.
     */
    public moment: dayjs.Dayjs;
    public base: DateItem | undefined;
    public _id: number;
    public _stack: number;

    static latestId: number;

    constructor({ key, name, type, moment, data, _stack, baseItem }: TDateItemInput) {
        this.key = key;
        this.name = name;
        this.date = moment.toISOString();
        this.type = type;
        this.data = data;
        this.moment = moment;

        this._id = DateItem._incrementId();
        this._stack = _stack;

        // The original default item is added to the current item as the `base` property
        if (!isNil(baseItem) && this._id !== baseItem?._id) {
            this.base = baseItem;
            this.data = {
                ...this.data,
                ...(baseItem?.data.season && { season: baseItem?.data.season }),
                ...(baseItem?.data.calendar && { calendar: baseItem?.data.calendar }),
                meta: {
                    ...this.data.meta,
                    psalterWeek: this.data.meta?.psalterWeek ?? baseItem?.data.meta.psalterWeek,
                },
            };
        }

        this.adjustTypeInSeason();
        this.addLiturgicalCycleMetadata();
    }

    /**
     * Runs type management on celebrations given their specific types.
     *
     * **Special type management in the season of LENT.**
     *
     * Memorials or Optional Memorials that fall on a feria
     * in the season of Lent are reduced to Commemorations.
     *
     * Feasts occuring in the season of Lent are also reduced to
     * Commemorations.
     */
    private adjustTypeInSeason(): void {
        if (this.base?.data.season?.key === "LENT") {
            if ((this.type === Types.MEMORIAL || this.type === Types.OPT_MEMORIAL) && this.base.type === Types.FERIA) {
                this.type = Types.COMMEMORATION;
            }
            if (this.type === Types.FEAST) {
                this.type = Types.COMMEMORATION;
            }
        }
    }

    /**
     * Include liturgical cycle metadata corresponding to the liturgical year.
     */
    private addLiturgicalCycleMetadata(): void {
        const year = this.getLiturgicalStartYear();

        // Formula to calculate Sunday cycle (Year A, B, C)
        const firstSundayOfAdvent = Dates.firstSundayOfAdvent(year);
        const thisCycle: number = (year - 1963) % 3;
        const nextCycle: number = thisCycle === 2 ? 0 : thisCycle + 1;

        // If the date is on or after the First Sunday of Advent,
        // it is the next liturgical cycle
        this.data = {
            ...this.data,
            meta: {
                ...this.data.meta,
                cycle: {
                    key: this.moment.isSameOrAfter(firstSundayOfAdvent) ? nextCycle : thisCycle,
                    value: this.moment.isSameOrAfter(firstSundayOfAdvent)
                        ? LiturgicalCycles[nextCycle]
                        : LiturgicalCycles[thisCycle],
                },
            },
        };
    }

    /**
     * Get the liturgical starting year from a DateItem
     */
    private getLiturgicalStartYear(): number {
        const currentYear = this.moment.utc().year();
        const firstSundayOfAdvent = Dates.firstSundayOfAdvent(currentYear);
        return this.moment.isBefore(firstSundayOfAdvent) ? currentYear - 1 : currentYear;
    }

    /**
     * Increment the ID based of the [[DateItem]] instance
     */
    static _incrementId(): number {
        return isNil(this.latestId) ? (this.latestId = 0) : this.latestId++;
    }
}

/**
 * Checks if a value is a [[DateItem]]
 * @param value The value that could be an instance of [[IDateItem]]
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isDateItem = (value: Record<string, any>): value is IDateItem => {
    const { key, name, date, type, moment } = value;
    return !isNil(key) && !isNil(name) && !isNil(date) && !isNil(type) && !isNil(moment);
};
