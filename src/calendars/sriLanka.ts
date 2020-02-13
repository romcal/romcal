import moment from "moment";

import { Utils } from "../lib";
import { Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";

const defaultConfig = {};

let dates = (year: number): Array<IRomcalDateItem> => {
    let _dates: Array<IRomcalDateItem> = [
        {
            key: "blessedJosephVazPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 16 }),
        },
        {
            key: "ourLadyOfLanka",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 1, day: 4 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLadyOfMadhu",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 2 }),
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
