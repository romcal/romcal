import dayjs from "dayjs";

import { Dates, Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintPatrickBishop",
            type: Types.SOLEMNITY,
            moment: dayjs.utc(`${year}-3-17`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPeterChanelPriestAndMartyrSaintLouisGrignonDeMontfortPriest",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-4-28`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "ourLadyHelpOfChristians",
            type: Types.SOLEMNITY,
            moment: dayjs.utc(`${year}-5-24`),
        },
        {
            key: "blessedPeterToRotMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-7-7`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintMaryOfTheCrossVirgin",
            type: Types.SOLEMNITY,
            moment: dayjs.utc(`${year}-8-8`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLordJesusChristTheEternalHighPriest",
            type: Types.FEAST,
            moment: ((y: number): dayjs.Dayjs =>
                dayjs.utc(
                    Dates.pentecostSunday(y)
                        .add(4, "day")
                        .toISOString(),
                ))(year),
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
