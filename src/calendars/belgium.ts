import moment from "moment";

import { Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintBrotherMutienMarieReligious",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 30 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAmandMissionary",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 6 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintGertrudeOfNivellesVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 17 }),
        },
        {
            key: "saintJulieBilliartVirgin",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 8 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintDamienDeVeusterPriest",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 10 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJulianaOfLiegeVirgin",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 7 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLadyMediatrix",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 7, day: 31 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintLambertBishopAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 17 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintHubertBishop",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 3 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJohnBerchmansReligious",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 26 }),
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
