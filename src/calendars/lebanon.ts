import moment from "moment";

import { Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";

const defaultConfig = {};

let dates = (year: number): Array<IRomcalDateItem> => {
    let _dates: Array<IRomcalDateItem> = [
        {
            key: "saintBarbaraVirginAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 4 }),
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
            moment: moment.utc({ year, month: 11, day: 6 }),
        },
        {
            key: "saintCharbelMakhloufPriestAndHermit",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 24 }),
        },
        {
            key: "saintMaroun",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 9 }),
        },
        {
            key: "saintRafqaRebeccaVirgin",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 23 }),
        },
        {
            key: "saintGeorgeMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 23 }),
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
            moment: moment.utc({ year, month: 4, day: 1 }),
        },
    ];

    // Get localized celebration names
    return Utils.localizeDates(_dates);
};

export { defaultConfig, dates };
