import dayjs from "dayjs";

import { Dates, Locales } from "../lib";
import { Types } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import Config, { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
    const year = config.year;
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "maryMotherOfTheChurch",
            type: Types.OPT_MEMORIAL,
            date: ((y: number): dayjs.Dayjs => Dates.pentecostSunday(y).add(1, "day"))(year),
            data: {
                prioritized: true,
            },
        },
        {
            key: "ashWednesday",
            source: "celebrations", // Override the default lookup source
            type: Types.SUNDAY,
            date: dayjs.utc(Dates.ashWednesday(year).toISOString()),
        },
        // Test priority where saintLukeTheEvangelist is defined
        // in the "test" country as a commemoration instead of its
        // default type, feast...
        {
            key: "saintLukeTheEvangelist",
            type: Types.COMMEMORATION,
            date: dayjs.utc(`${year}-10-18`),
            data: {
                prioritized: true,
            },
        },
        {
            key: "aSampleCelebration1",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-11-9`),
            data: {
                prioritized: true,
            },
        },
        {
            key: "aSampleCelebration2",
            type: Types.SOLEMNITY,
            date: dayjs.utc(`${year}-12-25`),
            data: {
                prioritized: true,
            },
        },
    ];

    // Get localized celebration names
    return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
