import moment from "moment";

import { Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";

const defaultConfig = {};

let dates = (year: number): Array<IRomcalDateItem> => {
    let _dates: Array<IRomcalDateItem> = [
        {
            key: "blessedGoncaloDeAmarantePriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 11 }),
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
            key: "theFiveWoundsOfTheLord",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 1, day: 7 }),
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
            key: "saintTheotoniusPriest",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 18 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "blessedJacintaAndFranciscoMarto",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 20 }),
        },
        {
            key: "saintJohnOfGodPriest",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 8 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
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
            key: "blessedJoanOfPortugalVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 12 }),
        },
        {
            key: "ourLadyOfFatima",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 4, day: 13 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "guardianAngelOfPortugal",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 10 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAnthonyOfLisbonPriestAndDoctorOfTheChurch",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 5, day: 13 }),
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
            moment: moment.utc({ year, month: 5, day: 20 }),
        },
        {
            key: "saintElizabethOfPortugal",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 4 }),
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
            key: "blessedInacioDeAzevedoPriestAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 17 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "blessedBartholomewOfTheMartyrsBishop",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 18 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
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
            key: "saintBeatriceOfSilvaVirgin",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 1 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintDenisAndCompanionsMartyrsSaintJohnLeonardiPriestBlessedJohnNewmanBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 9 }),
        },
        {
            key: "blessedGoncaloDeLagosPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 27 }),
        },
        {
            key: "saintNunoDeSantaMaria",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 6 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintFructuosusSaintMartinOfDumeAndSaintGeraldBishops",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 5 }),
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

export { defaultConfig, dates };
