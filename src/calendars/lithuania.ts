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
            key: "blessedJerzyMatulewiczBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-27`),
        },
        {
            key: "saintsCyrilMonkAndMethodiusBishop",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-2-14`),
            data: {
                meta: {
                    titles: [Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "saintCasimir",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-3-4`),
        },
        {
            key: "saintBrunoBonifaceOfQuerfurtBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-3-9`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintAdalbertBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-4-23`),
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
            date: dayjs.utc(`${year}-4-29`),
            data: {
                meta: {
                    titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintAndrewBobolaPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-16`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "ourLadyMotherOfMercy",
            type: Types.SOLEMNITY,
            date: dayjs.utc(`${year}-11-16`),
        },
        {
            key: "saintBenedictOfNursiaAbbot",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-7-11`),
            data: {
                meta: {
                    titles: [Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "saintBridgetOfSwedenReligious",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-7-23`),
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
            date: dayjs.utc(`${year}-8-9`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR, Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "saintRocco",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-16`),
        },
        {
            key: "saintHyacinthPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-17`),
        },
        {
            key: "birthOfTheBlessedVirginMary",
            type: Types.SOLEMNITY,
            date: dayjs.utc(`${year}-9-8`),
        },
        {
            key: "saintFaustinaKowalskaVirginAndReligious",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-5`),
        },
    ];

    // Get localized celebration names
    return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
