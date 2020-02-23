import dayjs from "dayjs";

import { Dates, Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "ourLadyMotherOfChristianUnity",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-1-18`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLadyMediatrixOfAllGrace",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-5-8`),
        },
        {
            key: "saintAdalbertBishopAndMartyr",
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
            key: "saintSigismundMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-4-30`),
        },
        {
            key: "saintJohnNepomucenePriestAndMartyr",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-5-16`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintClementMaryHofbauerPriest",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-5-20`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintZdislava",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-5-30`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintVitusMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-6-15`),
        },
        {
            key: "saintJohnNeumannBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-6-19`),
        },
        {
            key: "saintProcopiusAbbot",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-7-4`),
        },
        // In Slovakia and Czech Republic, the two brothers were originally
        // commemorated on 9 March, but Pope Pius IX changed this date to 5 July
        // https://en.wikipedia.org/wiki/Saints_Cyril_and_Methodius
        {
            key: "saintsCyrilMonkAndMethodiusBishop",
            type: Types.SOLEMNITY,
            moment: dayjs.utc(`${year}-7-5`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE],
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
            key: "blessedHroznataMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-7-14`),
        },
        {
            key: "blessedCeslausAndSaintHyacinthPriests",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-7-17`),
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
            key: "saintsBenedyktJanMateuszIsaakAndKrystynMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-8-25`),
        },
        {
            key: "saintTeresaOfCalcuttaReligious",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-9-5`),
        },
        {
            key: "saintMelchiorGrodzieckiPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-9-7`),
        },
        {
            key: "blessedCharlesSpinolaPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-9-10`),
        },
        {
            key: "saintLudmilaMartyr",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-9-16`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintRadimBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-10-12`),
        },
        {
            key: "blessedKarlOfAustria",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-10-21`),
        },
        {
            key: "saintWolfgangBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-10-31`),
        },
        {
            key: "saintAgnesOfBohemiaVirgin",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-11-13`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintEdmundCampionPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-12-1`),
        },
        {
            key: "ourLordJesusChristTheEternalHighPriest",
            type: Types.FEAST,
            moment: ((y: number): dayjs.Dayjs =>
                dayjs.utc(
                    Dates.pentecostSunday(y)
                        .add(4, "day")
                        .toISOString(),
                ))(year),
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
