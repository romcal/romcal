import moment from "moment";

import { Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "blessedKuriakoseEliasChavaraPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 3 }),
        },
        {
            key: "blessedJosephVazPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 16 }),
        },
        {
            key: "saintJohnDeBritoPriestAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 4 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintGonsaloGarciaMartyr",
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
            key: "blessedMariaTheresaChiramelVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 8 }),
        },
        {
            key: "saintThomasTheApostle",
            type: Types.SOLEMNITY,
            moment: moment.utc({ year, month: 6, day: 3 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAlphonsaOfTheImmaculateConceptionVirgin",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 28 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintTeresaOfCalcuttaReligious",
            type: Types.SOLEMNITY,
            moment: moment.utc({ year, month: 8, day: 5 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintFrancisXavierPriest",
            type: Types.SOLEMNITY,
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
