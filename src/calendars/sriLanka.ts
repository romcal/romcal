import moment from "moment";

import { Locales } from "../lib";
import { Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
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
    return Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
