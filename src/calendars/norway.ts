import dayjs from "dayjs";

import { Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintThorfinnBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-1-8`),
        },
        {
            key: "saintHenryBishopAndMartyr",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-1-19`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintEysteinnBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-1-26`),
        },
        {
            key: "saintsCyrilMonkAndMethodiusBishop",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-2-14`),
            data: {
                meta: {
                    titles: [Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "saintMagnusMartyr",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-4-16`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-4-29`),
            data: {
                meta: {
                    titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintEricIxMartyr",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-5-18`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintSunnivaVirginAndMartyr",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-7-8`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintCanuteMartyr",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-7-10`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
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
                    titles: [Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "saintSwithunBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-7-15`),
        },
        {
            key: "saintThorlacBishop",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-7-20`),
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
            key: "saintOlafIiMartyr",
            type: Types.SOLEMNITY,
            moment: dayjs.utc(`${year}-5-29`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.MARTYR],
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
        {
            key: "blessedNicolasStenoBishop",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-11-25`),
        },
    ];

    // Get localized celebration names
    return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
