import moment from "moment";

import { Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintMargaretOfHungary",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 0, day: 18 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsCyrilMonkAndMethodiusBishop",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 1, day: 14 }),
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
            moment: moment.utc({ year, month: 1, day: 24 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAdalbertBishopAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 23 }),
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
            moment: moment.utc({ year, month: 3, day: 29 }),
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
            moment: moment.utc({ year, month: 4, day: 4 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "blessedGisela",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 7 }),
        },
        {
            key: "blessedSaraSalkahaziVirginAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 11 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintJohnNepomucenePriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 16 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "blessedVilmosAporBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 23 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "ourLadyHelpOfChristians",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 24 }),
        },
        {
            key: "transferOfTheRelicsOfSaintStephen",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 30 }),
        },
        {
            key: "saintAgnesOfBohemiaVirgin",
            type: Types.MEMORIAL, // Memorial
            moment: moment.utc({ year, month: 5, day: 8 }), // 8th of June
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
        //   "moment": moment.utc({ year, month: 5, day: 8 }),
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
            moment: moment.utc({ year, month: 5, day: 27 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "visitationOfTheBlessedVirginMary",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 2 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintBenedictOfNursiaAbbot",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 11 }),
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
            moment: moment.utc({ year, month: 6, day: 17 }),
        },
        {
            key: "saintBridgetOfSwedenReligious",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 23 }),
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
            moment: moment.utc({ year, month: 6, day: 24 }),
        },
        {
            key: "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 7, day: 9 }),
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
            moment: moment.utc({ year, month: 7, day: 13 }),
        },
        {
            key: "saintStephenOfHungary",
            type: Types.SOLEMNITY,
            moment: moment.utc({ year, month: 7, day: 20 }),
        },
        {
            key: "saintTeresaOfCalcuttaReligious",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 5 }),
        },
        {
            key: "saintsMarkoKrizinMelicharGrodeckiAndStephenPongracPriestsAndMartyrs",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 8, day: 7 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintGerardBishop",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 8, day: 24 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLadyOfHungary",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 9, day: 8 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintMaurusBishop",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 25 }),
        },
        {
            key: "blessedTheodoreRomzhaBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 31 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintEmeric",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 10, day: 4 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "hungarianSaintsAndBlesseds",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 13 }),
        },
    ];

    // Get localized celebration names
    return Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
