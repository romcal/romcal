import dayjs from "dayjs";

import { Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintsCyrilMonkAndMethodiusBishop",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-2-14`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "saintJohnCassianPriest",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-2-28`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-4-29`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "blessedVladimirGhikaPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-5-16`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintBenedictOfNursiaAbbot",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-7-11`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "saintBridgetOfSwedenReligious",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-7-23`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-8-9`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR, Titles.PATRON_OF_EUROPE],
                },
            },
        },
    ];

    // Get localized celebration names
    return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
