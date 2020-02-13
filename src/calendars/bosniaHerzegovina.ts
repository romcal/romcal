import moment from "moment";

import { Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";

const defaultConfig = {};

let dates = (year: number): Array<IRomcalDateItem> => {
    let _dates: Array<IRomcalDateItem> = [
        {
            key: "saintScholasticaVirgin",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 9 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
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
            key: "blessedOsannaOfCattaroVirgin",
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
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 13 }),
        },
        {
            key: "saintElijahProphet",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 20 }),
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
            key: "saintClementOfOhridAndGorazdBishopsAndCompanions",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 27 }),
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
            key: "saintRoch",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 16 }),
        },
        {
            key: "saintMarkoKrizinPriestAndMartyr",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 8, day: 7 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "blessedGraziaOfCattaro",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 27 }),
        },
        {
            key: "saintNikolaTavelicPriestAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 14 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
    ];

    // Get localized celebration names
    return Utils.localizeDates(_dates);
};

export { defaultConfig, dates };
