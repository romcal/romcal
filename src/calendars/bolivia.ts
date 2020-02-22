import moment from "moment";

import { Dates, Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintPaulMikiAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 6 }),
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
            moment: moment.utc({ year, month: 2, day: 23 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintMarianaDeJesusDeParedesVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 25 }),
        },
        {
            key: "blessedNazariaIgnaciaMarchReligious",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 23 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintCamillusDeLellisPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 12 }),
        },
        {
            key: "saintFrancisSolanusPriest",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 14 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLadyOfMountCarmel",
            type: Types.SOLEMNITY,
            moment: moment.utc({ year, month: 6, day: 16 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintRoseOfLima",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 7, day: 23 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPeterClaverPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 9 }),
        },
        {
            key: "saintJohnMaciasReligious",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 18 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintLouisBertrandPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 9 }),
        },
        {
            key: "saintMiguelFebresCorderoReligious",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 21 }),
        },
        {
            key: "saintAnthonyMaryClaretBishop",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 24 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintMartinDePorresReligious",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 3 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsRoqueGonzalezAlfonsoRodriguezOlmedoAndJuanDelCastilloPriestsAndMartyrs",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 19 }),
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
            moment: moment.utc({ year, month: 11, day: 12 }),
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
            moment: ((y: number): moment.Moment =>
                moment.utc(
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
    return Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
