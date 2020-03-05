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
            key: "saintMunchinBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-3`),
        },
        {
            key: "saintItaVirgin",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-1-15`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintFursaAbbotAndMissionary",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-16`),
        },
        {
            key: "saintAidanBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-30`),
        },
        {
            key: "saintBridgetOfSwedenReligious",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-2-1`),
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
            date: dayjs.utc(`${year}-2-7`),
        },
        {
            key: "saintGobnaitVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-2-11`),
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
            key: "saintFintan",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-2-17`),
        },
        {
            key: "saintDavidBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-3-1`),
        },
        {
            key: "saintKieranBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-3-5`),
        },
        {
            key: "saintSenanBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-3-8`),
        },
        {
            key: "saintAengusOengusBishopAndAbbot",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-3-11`),
        },
        {
            key: "saintPatrickBishop",
            type: Types.SOLEMNITY,
            date: dayjs.utc(`${year}-3-17`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintEndaAbbot",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-3-21`),
        },
        {
            key: "saintMacartanBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-3-24`),
        },
        {
            key: "saintCeallachCelsusBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-4-1`),
        },
        {
            key: "saintMolaiseLaisrenLaserianBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-4-18`),
        },
        {
            key: "saintAsicusBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-4-27`),
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
            key: "saintConlethBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-4`),
        },
        {
            key: "blessedEdmundIgnatiusRiceReligious",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-5`),
        },
        {
            key: "saintComgallAbbot",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-10`),
        },
        {
            key: "saintCarthageBishopMochuta",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-15`),
        },
        {
            key: "saintBrendanAbbot",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-16`),
        },
        {
            key: "saintKevinAbbot",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-6-3`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJarlathBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-6-6`),
        },
        {
            key: "saintColmanOfDromoreBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-6-7`),
        },
        {
            key: "saintColumbaAbbotAndMissionary",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-6-9`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintDavnetVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-6-14`),
        },
        {
            key: "blessedIrishMartyrs",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-6-20`),
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
            date: dayjs.utc(`${year}-7-1`),
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
            date: dayjs.utc(`${year}-7-6`),
        },
        {
            key: "saintMaelruainMaolruainVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-7-7`),
        },
        {
            key: "saintKillianBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-7-8`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
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
            key: "saintDeclanBishop",
            type: Types.OPT_MEMORIAL,
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
            key: "saintMuiredachBishopSaintAttractaVirginOrSaintLeliaVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-12`),
        },
        {
            key: "saintFachtnaBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-13`),
        },
        {
            key: "ourLadyOfKnock",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-8-17`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintEugeneEoghanBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-23`),
        },
        {
            key: "saintFiacreMonk",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-30`),
        },
        {
            key: "saintAidanOfLindisfarneBishopAndMissionary",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-31`),
        },
        {
            key: "saintMacNissiBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-9-4`),
        },
        {
            key: "saintCiaranAbbot",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-9-9`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAilbeBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-9-12`),
        },
        {
            key: "saintPioOfPietralcina",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-9-23`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintFinbarrBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-9-25`),
        },
        {
            key: "blessedColumbaMarmionPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-3`),
        },
        {
            key: "blessedJohnHenryNewmanPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-9`),
        },
        {
            key: "saintCaniceAbbot",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-11`),
        },
        {
            key: "saintGallAbbotAndMissionary",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-16`),
        },
        {
            key: "saintOtteranMonk",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-27`),
        },
        {
            key: "saintColmanOfKilmacduaghBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-29`),
        },
        {
            key: "saintMalachyBishop",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-11-3`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "allSaintsOfIreland",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-11-6`),
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
            date: dayjs.utc(`${year}-11-7`),
        },
        {
            key: "saintLaurenceOTooleBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-11-14`),
        },
        {
            key: "saintColumbanAbbotAndMissionary",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-11-23`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintColmanOfCloyneBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-11-25`),
        },
        {
            key: "saintFergalBishopAndMissionary",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-11-27`),
        },
        {
            key: "saintFinnianOfClonardBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-12-12`),
        },
        {
            key: "saintFlannanBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-12-18`),
        },
        {
            key: "saintFachananOfKilfenoraBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-12-20`),
        },
    ];

    // Get localized celebration names
    return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
