import moment from "moment";

import { Dates, Locales } from "../lib";
import { Types } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";
import { dayJsToMomentJs } from "../utils/dates";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "maryMotherOfTheChurch",
            type: Types.OPT_MEMORIAL,
            moment: ((y: number): moment.Moment => dayJsToMomentJs(Dates.pentecostSunday(y).add(1, "day")))(year),
            data: {
                prioritized: true,
            },
        },
        {
            key: "ashWednesday",
            type: Types.SUNDAY,
            moment: moment.utc(Dates.ashWednesday(year).toISOString()),
        },
        // Test priority where saintLukeTheEvangelist is defined
        // in the "test" country as a commemoration instead of its
        // default type, feast...
        {
            key: "saintLukeTheEvangelist",
            type: Types.COMMEMORATION,
            moment: moment.utc({ year, month: 9, day: 18 }),
            data: {
                prioritized: true,
            },
        },
        {
            key: "aSampleCelebration1",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 9 }),
            data: {
                prioritized: true,
            },
        },
        {
            key: "aSampleCelebration2",
            type: Types.SOLEMNITY,
            moment: moment.utc({ year, month: 11, day: 25 }),
            data: {
                prioritized: true,
            },
        },
    ];

    // Get localized celebration names
    return Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
