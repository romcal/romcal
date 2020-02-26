import dayjs from "dayjs";

import { Dates, Locales } from "../lib";
import { Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "blessedLauraVicunaVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-22`),
        },
        {
            key: "blessedPiusIxPope",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-2-7`),
        },
        {
            key: "ourLadyOfLourdes",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-2-11`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsPhilipAndJamesApostles",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-5-4`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintTeresaOfLosAndesVirgin",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-7-13`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintCamillusDeLellisPriestOrSaintHenryBishopAndMartyr ",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-7-14`),
        },
        {
            key: "ourLadyOfMountCarmel",
            type: Types.SOLEMNITY,
            date: dayjs.utc(`${year}-7-16`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAlbertoHurtadoPriest",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-8-18`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintRoseOfLima",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-8-30`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLadyOfMercy",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-9-24`),
        },
        {
            key: "ourLadyOfGuadalupe",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-12-12`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLordJesusChristTheEternalHighPriest",
            type: Types.FEAST,
            date: ((y: number): dayjs.Dayjs =>
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
