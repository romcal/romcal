import moment from "moment";

import { Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";

const defaultConfig = {};

let dates = (year: number): Array<IRomcalDateItem> => {
    let _dates: Array<IRomcalDateItem> = [
        {
            key: "saintJohnNepomucenePriestAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 16 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintBridgetOfSwedenReligious",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 23 }),
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

export { defaultConfig, dates };
