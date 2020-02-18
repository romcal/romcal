import moment from "moment";

import { Dates, Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "blessedMarcelinaDarowskaReligious",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 5 }),
        },
        {
            key: "blessedBronislawMarkiewiczPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 30 }),
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
            key: "maryMotherOfTheChurch",
            type: Types.FEAST,
            moment: ((y: number): moment.Moment =>
                moment.utc(
                    Dates.pentecostSunday(y)
                        .add(1, "day")
                        .toISOString(),
                ))(year),
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
            moment: moment.utc({ year, month: 3, day: 29 }),
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
            moment: moment.utc({ year, month: 4, day: 16 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintJohnNepomucenePriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 21 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintAlbertChmielowskiReligious",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 17 }),
        },
        {
            key: "saintZygmuntGorazdowskiPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 26 }),
        },
        {
            key: "saintJohnOfDuklaPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 8 }),
        },
        {
            key: "saintHedwigOfPoland",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 18 }),
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
            key: "blessedWladyslawBladzinskiPriestAndCompanionsMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 9 }),
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
            moment: moment.utc({ year, month: 8, day: 18 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJozefBilczewskiBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 23 }),
        },
    ];

    // Get localized celebration names
    return Utils.localizeDates(_dates);
};

export { dates };
