import moment from "moment";

import { Dates, Utils } from "../lib";
import { Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "blessedLauraVicunaVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 22 }),
        },
        {
            key: "blessedPiusIxPope",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 7 }),
        },
        {
            key: "ourLadyOfLourdes",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 11 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsPhilipAndJamesApostles",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 4, day: 4 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintTeresaOfLosAndesVirgin",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 13 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintCamillusDeLellisPriestOrSaintHenryBishopAndMartyr ",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 14 }),
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
            key: "saintAlbertoHurtadoPriest",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 18 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
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
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 24 }),
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
        {
            key: "ourLordJesusChristTheEternalHighPriest",
            type: Types.FEAST,
            moment: ((y: number): moment.Moment => Dates.pentecostSunday(y).add(4, "days"))(year),
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
