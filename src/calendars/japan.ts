import dayjs from "dayjs";

import { Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import Config, { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
    const year = config.year;
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintPaulMikiAndCompanionsMartyrs",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-2-6`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "discoveryOfTheHiddenChristians",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-3-17`),
        },
        {
            key: "blessedPeterKibePriestAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-7-1`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "205BlessedMartyrsOfJapan",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-9-10`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintThomasRokuzayemonPriestAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-9-28`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintFrancisXavierPriest",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-12-3`),
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
