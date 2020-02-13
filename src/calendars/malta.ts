import moment from "moment";

import { Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";

const defaultConfig = {};

let dates = (year: number): Array<IRomcalDateItem> => {
    let _dates: Array<IRomcalDateItem> = [
        {
            key: "saintPubliusBishop",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 22 }),
        },
        {
            key: "shipwreckOfSaintPaulApostle",
            type: Types.SOLEMNITY,
            moment: moment.utc({ year, month: 1, day: 10 }),
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
            key: "blessedMariaAdeodataPisaniVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 25 }),
        },
        {
            key: "ourLadyOfSorrows",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 3, day: 15 }),
        },
        {
            key: "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 3, day: 29 }),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH, Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "saintPiusVPope",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 30 }),
        },
        {
            key: "saintGeorgePrecaPriest",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 4, day: 9 }),
        },
        {
            key: "blessedNazjuFalzon",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 1 }),
        },
        {
            key: "saintBenedictOfNursiaAbbot",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 11 }),
        },
        {
            key: "ourLadyOfMountCarmel",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 16 }),
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
            key: "saintCatherineOfAlexandriaVirginAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 25 }),
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
