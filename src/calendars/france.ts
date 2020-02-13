import moment from "moment";

import { Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";

const defaultConfig = {
    epiphanyOnJan6: false,
    ascensionOnSunday: true,
    corpusChristiOnThursday: false,
};

let dates = (year: number): Array<IRomcalDateItem> => {
    let _dates: Array<IRomcalDateItem> = [
        {
            key: "saintGenevieveVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 3 }),
        },
        {
            key: "saintRemigiusBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 15 }),
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
            key: "saintBernadetteSoubirousVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 18 }),
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
            key: "saintIvoPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 19 }),
        },
        {
            key: "saintJoanOfArcVirginSecondaryPatronessOfFrance",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 30 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPothinusBishopSaintBlAndinaVirginAndTheirCompanionsMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 2 }),
        },
        {
            key: "saintClotilde",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 4 }),
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
            key: "saintCaesariusOfArlesBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 26 }),
        },
        {
            key: "saintThereseOfTheChildJesusVirginSecondaryPatronessOfFrance",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 1 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
    ];

    // Get localized celebration names
    return Utils.localizeDates(_dates);
};

export { defaultConfig, dates };
