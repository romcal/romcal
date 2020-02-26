import dayjs from "dayjs";

import { Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "blessedGoncaloDeAmarantePriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-11`),
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
            key: "theFiveWoundsOfTheLord",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-2-7`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsCyrilMonkAndMethodiusBishop",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-2-14`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "saintTheotoniusPriest",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-2-18`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "blessedJacintaAndFranciscoMarto",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-2-20`),
        },
        {
            key: "saintJohnOfGodPriest",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-3-8`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-4-29`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "blessedJoanOfPortugalVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-12`),
        },
        {
            key: "ourLadyOfFatima",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-5-13`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "guardianAngelOfPortugal",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-6-10`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAnthonyOfLisbonPriestAndDoctorOfTheChurch",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-6-13`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "blessedSanchaAndMafaldaVirginsOrBlessedTheresaOfPortugalReligious",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-6-20`),
        },
        {
            key: "saintElizabethOfPortugal",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-7-4`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintBenedictOfNursiaAbbot",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-7-11`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "blessedInacioDeAzevedoPriestAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-7-17`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "blessedBartholomewOfTheMartyrsBishop",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-7-18`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
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
            key: "saintBeatriceOfSilvaVirgin",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-9-1`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintDenisAndCompanionsMartyrsSaintJohnLeonardiPriestBlessedJohnNewmanBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-9`),
        },
        {
            key: "blessedGoncaloDeLagosPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-27`),
        },
        {
            key: "saintNunoDeSantaMaria",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-11-6`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintFructuosusSaintMartinOfDumeAndSaintGeraldBishops",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-12-5`),
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
