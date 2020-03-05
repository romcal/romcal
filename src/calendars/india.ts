import dayjs from "dayjs";

import { Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import Config, { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
    const year = config.year;
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "blessedKuriakoseEliasChavaraPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-3`),
        },
        {
            key: "blessedJosephVazPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-16`),
        },
        {
            key: "saintJohnDeBritoPriestAndMartyr",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-2-4`),
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
            date: dayjs.utc(`${year}-2-6`),
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
            date: dayjs.utc(`${year}-6-8`),
        },
        {
            key: "saintThomasTheApostle",
            type: Types.SOLEMNITY,
            date: dayjs.utc(`${year}-7-3`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAlphonsaOfTheImmaculateConceptionVirgin",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-7-28`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintTeresaOfCalcuttaReligious",
            type: Types.SOLEMNITY,
            date: dayjs.utc(`${year}-9-5`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintFrancisXavierPriest",
            type: Types.SOLEMNITY,
            date: dayjs.utc(`${year}-12-3`),
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
