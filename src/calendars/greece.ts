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
            key: "saintCyrilOfJerusalemBishopAndDoctor",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-3-18`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintAdalbertBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-4-22`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintGeorgeMartyr",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-4-23`),
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
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintIrene",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-5-5`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLadyOfFatima",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-5-15`),
        },
        {
            key: "saintCyrilOfAlexandriaBishopAndDoctor",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-6-27`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
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
            key: "saintMarina",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-7-17`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
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
            key: "saintPantaleon",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-7-27`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintLydiaOfPhilippi",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-8-3`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
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
            key: "saintsCosmasAndDamian",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-9-26`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintDionysiusTheAreopagite",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-10-3`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintDemetrius",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-10-26`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "presentationOfTheBlessedVirginMary",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-11-21`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintBarbaraVirginAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-12-4`),
        },
        {
            key: "saintNicholasBishop",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-12-6`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintSpyridon",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-12-12`),
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
