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
            key: "saintPaulMikiAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-2-6`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintTuribiusOfMogrovejoBishop",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-3-23`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintMarianaDeJesusDeParedesVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-25`),
        },
        {
            key: "blessedNazariaIgnaciaMarchReligious",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-3-23`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintCamillusDeLellisPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-7-12`),
        },
        {
            key: "saintFrancisSolanusPriest",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-7-14`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
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
            key: "saintRoseOfLima",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-8-23`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPeterClaverPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-9-9`),
        },
        {
            key: "saintJohnMaciasReligious",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-9-18`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintLouisBertrandPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-9`),
        },
        {
            key: "saintMiguelFebresCorderoReligious",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-21`),
        },
        {
            key: "saintAnthonyMaryClaretBishop",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-10-24`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintMartinDePorresReligious",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-11-3`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsRoqueGonzalezAlfonsoRodriguezOlmedoAndJuanDelCastilloPriestsAndMartyrs",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-11-19`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
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
        // Thursday after Pentecost
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
