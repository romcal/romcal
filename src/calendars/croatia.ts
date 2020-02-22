import moment from "moment";

import { Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "blessedAloysiusStepinacBishopAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 10 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
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
            key: "blessedIvanMerz",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 10 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintLeopoldMandicPriest",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 12 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintQuirinusOfSescia",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 4 }),
        },
        {
            key: "blessedMaryOfJesusCrucifiedPetkovicVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 9 }),
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
            key: "ourLadyOfBistrica",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 13 }),
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
            key: "blessedAugustinKazoticBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 3 }),
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
            key: "saintMarkoKrizinPriestAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 7 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintNikolaTavelicPriestAndMartyr",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 10, day: 14 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
    ];

    // Get localized celebration names
    return Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
