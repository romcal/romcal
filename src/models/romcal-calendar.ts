import { DateItem } from "./romcal-date-item";

export interface ICalendar {
    readonly dateItems: Array<DateItem>;
}
