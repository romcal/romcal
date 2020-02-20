import moment from "moment";

import { Dates, Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "blessedLauraVicunaVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 22 }),
        },
        {
            key: "ourLadyQueenOfPeace",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 24 }),
        },
        {
            key: "saintTuribiusOfMogrovejoBishop",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 3, day: 27 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLadyOfLujanPatronessOfArgentina",
            type: Types.SOLEMNITY,
            moment: moment.utc({ year, month: 4, day: 8 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintIsidoreTheFarmer",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 15 }),
        },
        {
            key: "saintLuigiOrionePriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 16 }),
        },
        {
            key: "ourLadyOfItati",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 9 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsAugustineZhaoRongPriestAndCompanionsMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 10 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "ourLadyOfMountCarmel",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 16 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintCharbelMakhloufPriestAndHermit",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 23 }),
        },
        {
            key: "saintFrancisSolanusPriest",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 24 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintRocco",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 16 }),
        },
        {
            key: "blessedCeferinoNamuncura",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 26 }),
        },
        {
            key: "saintRoseOfLima",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 7, day: 30 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLadyOfMercy",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 24 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintHectorValdivielsoSaezMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 9 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "ourLadyOfThePillar",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 12 }),
        },
        {
            key: "saintsRoqueGonzalezAlfonsoRodriguezOlmedoAndJuanDelCastilloPriestsAndMartyrs",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 17 }),
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
            moment: moment.utc({ year, month: 10, day: 18 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
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
        // Saturday of the 2nd Week of Easter
        {
            key: "ourLadyOfTheValley",
            type: Types.MEMORIAL,
            moment: ((y: number): moment.Moment =>
                moment.utc(
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
    return Utils.localizeDates(_dates);
};

export { dates, defaultConfig };
