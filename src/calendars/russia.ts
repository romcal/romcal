import moment from "moment";

import { Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "blessedGeorgeMatulewiczBishop",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 27 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "blessedBoleslawaMariaLamentVirginAndSaintAngelaMericiVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 29 }),
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
            key: "saintGeorgeMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 6 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintTheodosiusOfTheCavesAbbot",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 16 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLadyOfPerpetualHelpOrBlessedLeonidFeodorovPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 27 }),
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
            key: "saintAnthonyOfTheCavesMonk",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 24 }),
        },
        {
            key: "saintOlga",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 24 }),
        },
        {
            key: "saintVladimirTheGreat",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 28 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsBorisAndGlebMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 5 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
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
            key: "ourLadyOfCzestochowa",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 26 }),
        },
        {
            key: "ourLadyOfVladimir",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 7 }),
        },
        {
            key: "saintFaustinaKowalskaVirginAndReligious",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 5 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "blessedOleksiyZarytskyiPriestAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 30 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLadyOfTheGateOfDawn",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 16 }),
        },
        {
            key: "saintRafalKalinowskiPriest",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 20 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAndrewTheApostlePatronOfRussia",
            type: Types.SOLEMNITY,
            moment: moment.utc({ year, month: 10, day: 30 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintBarbaraVirginAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 4 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintNicholasBishop",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 6 }),
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

export { dates, defaultConfig };
