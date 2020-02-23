import dayjs from "dayjs";

import { Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "blessedKuriakoseEliasChavaraPriest",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-1-3`),
        },
        {
            key: "blessedJosephVazPriest",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-1-16`),
        },
        {
            key: "saintJohnDeBritoPriestAndMartyr",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-2-4`),
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
            moment: dayjs.utc(`${year}-2-6`),
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
            moment: dayjs.utc(`${year}-6-8`),
        },
        {
            key: "saintThomasTheApostle",
            type: Types.SOLEMNITY,
            moment: dayjs.utc(`${year}-7-3`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAlphonsaOfTheImmaculateConceptionVirgin",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-7-28`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintTeresaOfCalcuttaReligious",
            type: Types.SOLEMNITY,
            moment: dayjs.utc(`${year}-9-5`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintFrancisXavierPriest",
            type: Types.SOLEMNITY,
            moment: dayjs.utc(`${year}-12-3`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
    ];

    // Get localized celebration names
    return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
