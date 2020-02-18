import moment from "moment";

import { Dates, Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintFelipeDeJesusPriestAndMartyr",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 0, day: 22 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintJohnNepomucenePriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 16 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "blessedSebastianDeAparicioReligious",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 25 }),
        },
        {
            key: "saintChristopherMagallanesAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 21 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintMariaDeJesusSacramentadoVenegasVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 30 }),
        },
        {
            key: "blessedBartolomeLaurelReligiousAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 16 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "blessedsPedroZunigaAndLuisFloresPriestsAndMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 16 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "blessedJuniperoSerraPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 26 }),
        },
        {
            key: "saintJoseMariaDeYermoPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 19 }),
        },
        {
            key: "saintRafaelGuizarYValenciaBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 24 }),
        },
        {
            key: "blessedMiguelAgustinProPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 23 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintJuanDiego",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 9 }),
        },
        {
            key: "ourLadyOfGuadalupe",
            type: Types.SOLEMNITY,
            moment: moment.utc({ year, month: 11, day: 12 }),
        },
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
    return Utils.localizeDates(_dates);
};

export { dates };
