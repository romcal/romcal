import dayjs from "dayjs";

import { Locales } from "../lib";
import { Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "blessedJosephVazPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-16`),
        },
        {
            key: "ourLadyOfLanka",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-2-4`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLadyOfMadhu",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-7-2`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
    ];

    // Get localized celebration names
    return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
