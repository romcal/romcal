import dayjs from "dayjs";

import { Dates, Locales } from "../lib";
import { Types } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "maryMotherOfTheChurch",
            type: Types.OPT_MEMORIAL,
            moment: ((y: number): dayjs.Dayjs => Dates.pentecostSunday(y).add(1, "day"))(year),
            data: {
                prioritized: true,
            },
        },
        {
            key: "ashWednesday",
            type: Types.SUNDAY,
            moment: dayjs.utc(Dates.ashWednesday(year).toISOString()),
        },
        // Test priority where saintLukeTheEvangelist is defined
        // in the "test" country as a commemoration instead of its
        // default type, feast...
        {
            key: "saintLukeTheEvangelist",
            type: Types.COMMEMORATION,
            moment: dayjs.utc(`${year}-10-18`),
            data: {
                prioritized: true,
            },
        },
        {
            key: "aSampleCelebration1",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-11-9`),
            data: {
                prioritized: true,
            },
        },
        {
            key: "aSampleCelebration2",
            type: Types.SOLEMNITY,
            moment: dayjs.utc(`${year}-12-25`),
            data: {
                prioritized: true,
            },
        },
    ];

    // Get localized celebration names
    return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
