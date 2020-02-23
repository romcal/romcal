import dayjs from "dayjs";

import { Dates, Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "blessedMarcelinaDarowskaReligious",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-1-5`),
        },
        {
            key: "blessedBronislawMarkiewiczPriest",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-1-30`),
        },
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
            key: "maryMotherOfTheChurch",
            type: Types.FEAST,
            moment: ((y: number): dayjs.Dayjs => Dates.pentecostSunday(y).add(1, "day"))(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
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
            key: "saintAndrewBobolaPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-5-16`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintJohnNepomucenePriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-5-21`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintAlbertChmielowskiReligious",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-6-17`),
        },
        {
            key: "saintZygmuntGorazdowskiPriest",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-6-26`),
        },
        {
            key: "saintJohnOfDuklaPriest",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-7-8`),
        },
        {
            key: "saintHedwigOfPoland",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-7-18`),
        },
        {
            key: "saintOlga",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-7-24`),
        },
        {
            key: "saintVladimirTheGreat",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-7-28`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
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
            key: "ourLadyOfCzestochowa",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-8-26`),
        },
        {
            key: "blessedWladyslawBladzinskiPriestAndCompanionsMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-9-9`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintStanislausKostkaReligious",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-9-18`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJozefBilczewskiBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-10-23`),
        },
    ];

    // Get localized celebration names
    return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
