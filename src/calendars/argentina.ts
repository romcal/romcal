import dayjs from "dayjs";

import { Dates, Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import Config, { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
    const year = config.year;
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "blessedLauraVicunaVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-22`),
        },
        {
            key: "ourLadyQueenOfPeace",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-24`),
        },
        {
            key: "saintTuribiusOfMogrovejoBishop",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-4-27`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLadyOfLujanPatronessOfArgentina",
            type: Types.SOLEMNITY,
            date: dayjs.utc(`${year}-5-8`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintIsidoreTheFarmer",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-15`),
        },
        {
            key: "saintLuigiOrionePriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-16`),
        },
        {
            key: "ourLadyOfItati",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-7-9`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsAugustineZhaoRongPriestAndCompanionsMartyrs",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-7-10`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "ourLadyOfMountCarmel",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-7-16`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintCharbelMakhloufPriestAndHermit",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-7-23`),
        },
        {
            key: "saintFrancisSolanusPriest",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-7-24`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintRocco",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-16`),
        },
        {
            key: "blessedCeferinoNamuncura",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-26`),
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
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-9-24`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintHectorValdivielsoSaezMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-9`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "ourLadyOfThePillar",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-12`),
        },
        {
            key: "saintsRoqueGonzalezAlfonsoRodriguezOlmedoAndJuanDelCastilloPriestsAndMartyrs",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-11-17`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintElizabethOfHungary",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-11-18`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
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
        // Saturday of the 2nd Week of Easter
        {
            key: "ourLadyOfTheValley",
            type: Types.MEMORIAL,
            date: ((y: number): dayjs.Dayjs =>
                dayjs.utc(
                    Dates.divineMercySunday(y)
                        .add(6, "day")
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
