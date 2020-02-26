import dayjs from "dayjs";

import { Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintMargaretOfHungary",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-1-18`),
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
            key: "saintMatthiasTheApostle",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-2-24`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAdalbertBishopAndMartyr",
            type: Types.MEMORIAL,
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
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintFlorianMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-4`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "blessedGisela",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-7`),
        },
        {
            key: "blessedSaraSalkahaziVirginAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-11`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintJohnNepomucenePriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-16`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "blessedVilmosAporBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-23`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "ourLadyHelpOfChristians",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-5-24`),
        },
        {
            key: "transferOfTheRelicsOfSaintStephen",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-30`),
        },
        {
            key: "saintAgnesOfBohemiaVirgin",
            type: Types.MEMORIAL, // Memorial
            date: dayjs.utc(`${year}-6-8`), // 8th of June
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE, // What is the Liturgical color for this?
                },
            },
        },
        // Moved to the congregational calendar (Society of Saint Francis de Sales (Salesian Congregation)
        // {
        //   "key": "blessedIstvanSandorMartyr",
        //   "type": Types.OPT_MEMORIAL,
        //   "date": dayjs.utc({ year, month: 5, day: 8 }),
        //   "data": {
        //     "meta": {
        //       "titles": [
        //         Titles.MARTYR
        //       ]
        //     }
        //   }
        // },
        {
            key: "saintLadislaus",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-6-27`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "visitationOfTheBlessedVirginMary",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-7-2`),
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
            key: "saintsAndrewZorardAndBenedictHermits",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-7-17`),
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
            key: "saintKingaVirgin",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-7-24`),
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
            key: "blessedInnocentXiPope",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-8-13`),
        },
        {
            key: "saintStephenOfHungary",
            type: Types.SOLEMNITY,
            date: dayjs.utc(`${year}-8-20`),
        },
        {
            key: "saintTeresaOfCalcuttaReligious",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-9-5`),
        },
        {
            key: "saintsMarkoKrizinMelicharGrodeckiAndStephenPongracPriestsAndMartyrs",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-9-7`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintGerardBishop",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-9-24`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLadyOfHungary",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-10-8`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintMaurusBishop",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-10-25`),
        },
        {
            key: "blessedTheodoreRomzhaBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-31`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintEmeric",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-11-4`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "hungarianSaintsAndBlesseds",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-11-13`),
        },
    ];

    // Get localized celebration names
    return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
