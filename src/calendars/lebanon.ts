import dayjs from "dayjs";

import { Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintBarbaraVirginAndMartyr",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-12-4`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintNicholasBishop",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-12-6`),
        },
        {
            key: "saintCharbelMakhloufPriestAndHermit",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-12-24`),
        },
        {
            key: "saintMaroun",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-2-9`),
        },
        {
            key: "saintRafqaRebeccaVirgin",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-3-23`),
        },
        {
            key: "saintGeorgeMartyr",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-4-23`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "ourLadyOfLebanon",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-5-1`),
        },
    ];

    // Get localized celebration names
    return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
