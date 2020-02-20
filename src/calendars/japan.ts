import moment from "moment";

import { Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintPaulMikiAndCompanionsMartyrs",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 1, day: 6 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "discoveryOfTheHiddenChristians",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 17 }),
        },
        {
            key: "blessedPeterKibePriestAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 1 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "205BlessedMartyrsOfJapan",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 10 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintThomasRokuzayemonPriestAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 28 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintFrancisXavierPriest",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 11, day: 3 }),
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
