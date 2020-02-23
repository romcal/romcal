import dayjs from "dayjs";

import { Dates, Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintPaulMikiAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-2-6`),
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
            moment: dayjs.utc(`${year}-3-23`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintMarianaDeJesusDeParedesVirgin",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-5-25`),
        },
        {
            key: "blessedNazariaIgnaciaMarchReligious",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-3-23`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintCamillusDeLellisPriest",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-7-12`),
        },
        {
            key: "saintFrancisSolanusPriest",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-7-14`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLadyOfMountCarmel",
            type: Types.SOLEMNITY,
            moment: dayjs.utc(`${year}-7-16`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintRoseOfLima",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-8-23`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPeterClaverPriest",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-9-9`),
        },
        {
            key: "saintJohnMaciasReligious",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-9-18`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintLouisBertrandPriest",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-10-9`),
        },
        {
            key: "saintMiguelFebresCorderoReligious",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-10-21`),
        },
        {
            key: "saintAnthonyMaryClaretBishop",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-10-24`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintMartinDePorresReligious",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-11-3`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsRoqueGonzalezAlfonsoRodriguezOlmedoAndJuanDelCastilloPriestsAndMartyrs",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-11-19`),
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
            moment: dayjs.utc(`${year}-12-12`),
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
