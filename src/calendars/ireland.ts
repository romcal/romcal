import moment from "moment";

import { Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";

const defaultConfig = {};

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintMunchinBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 3 }),
        },
        {
            key: "saintItaVirgin",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 15 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintFursaAbbotAndMissionary",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 16 }),
        },
        {
            key: "saintAidanBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 30 }),
        },
        {
            key: "saintBridgetOfSwedenReligious",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 1, day: 1 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "saintMelBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 7 }),
        },
        {
            key: "saintGobnaitVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 11 }),
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
            key: "saintFintan",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 17 }),
        },
        {
            key: "saintDavidBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 1 }),
        },
        {
            key: "saintKieranBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 5 }),
        },
        {
            key: "saintSenanBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 8 }),
        },
        {
            key: "saintAengusOengusBishopAndAbbot",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 11 }),
        },
        {
            key: "saintPatrickBishop",
            type: Types.SOLEMNITY,
            moment: moment.utc({ year, month: 2, day: 17 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintEndaAbbot",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 21 }),
        },
        {
            key: "saintMacartanBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 24 }),
        },
        {
            key: "saintCeallachCelsusBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 1 }),
        },
        {
            key: "saintMolaiseLaisrenLaserianBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 18 }),
        },
        {
            key: "saintAsicusBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 27 }),
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
            key: "saintConlethBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 4 }),
        },
        {
            key: "blessedEdmundIgnatiusRiceReligious",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 5 }),
        },
        {
            key: "saintComgallAbbot",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 10 }),
        },
        {
            key: "saintCarthageBishopMochuta",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 15 }),
        },
        {
            key: "saintBrendanAbbot",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 16 }),
        },
        {
            key: "saintKevinAbbot",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 3 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJarlathBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 6 }),
        },
        {
            key: "saintColmanOfDromoreBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 7 }),
        },
        {
            key: "saintColumbaAbbotAndMissionary",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 5, day: 9 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintDavnetVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 14 }),
        },
        {
            key: "blessedIrishMartyrs",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 20 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintOliverPlunkettBishopAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 1 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintMoninneVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 6 }),
        },
        {
            key: "saintMaelruainMaolruainVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 7 }),
        },
        {
            key: "saintKillianBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 8 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
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
            key: "saintDeclanBishop",
            type: Types.OPT_MEMORIAL,
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
            key: "saintMuiredachBishopSaintAttractaVirginOrSaintLeliaVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 12 }),
        },
        {
            key: "saintFachtnaBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 13 }),
        },
        {
            key: "ourLadyOfKnock",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 7, day: 17 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintEugeneEoghanBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 23 }),
        },
        {
            key: "saintFiacreMonk",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 30 }),
        },
        {
            key: "saintAidanOfLindisfarneBishopAndMissionary",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 31 }),
        },
        {
            key: "saintMacNissiBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 4 }),
        },
        {
            key: "saintCiaranAbbot",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 9 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAilbeBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 12 }),
        },
        {
            key: "saintPioOfPietralcina",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 23 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintFinbarrBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 25 }),
        },
        {
            key: "blessedColumbaMarmionPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 3 }),
        },
        {
            key: "blessedJohnHenryNewmanPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 9 }),
        },
        {
            key: "saintCaniceAbbot",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 11 }),
        },
        {
            key: "saintGallAbbotAndMissionary",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 16 }),
        },
        {
            key: "saintOtteranMonk",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 27 }),
        },
        {
            key: "saintColmanOfKilmacduaghBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 29 }),
        },
        {
            key: "saintMalachyBishop",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 3 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "allSaintsOfIreland",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 10, day: 6 }),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintWillibrordBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 7 }),
        },
        {
            key: "saintLaurenceOTooleBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 14 }),
        },
        {
            key: "saintColumbanAbbotAndMissionary",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 23 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintColmanOfCloyneBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 25 }),
        },
        {
            key: "saintFergalBishopAndMissionary",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 27 }),
        },
        {
            key: "saintFinnianOfClonardBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 12 }),
        },
        {
            key: "saintFlannanBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 18 }),
        },
        {
            key: "saintFachananOfKilfenoraBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 20 }),
        },
    ];

    // Get localized celebration names
    return Utils.localizeDates(_dates);
};

export { defaultConfig, dates };
