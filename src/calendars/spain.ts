import moment from "moment";

import { Dates, Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";

const defaultConfig = {};

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintEulogiusOfCordobaBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 9 }),
        },
        {
            key: "saintsFructuosusBishopAndAuguriusAndEulogiusDeaconsMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 20 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintVincentDeaconAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 22 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintIldephonsusOfToledoBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 23 }),
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
            key: "saintHermenegildMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 13 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                },
            },
        },
        {
            key: "saintIsidoreOfSevilleBishopAndDoctorOfTheChurch",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 3, day: 26 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
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
            key: "saintJohnOfAvilaPriest",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 10 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintIsidoreTheFarmer",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 15 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPaschalBaylon",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 17 }),
        },
        {
            key: "saintJoaquinaVedruna",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 22 }),
        },
        {
            key: "saintFerdinand",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 30 }),
        },
        {
            key: "saintMariaMicaelaOfTheBlessedSacramentVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 15 }),
        },
        {
            key: "saintPelagiusMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 26 }),
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
            key: "ourLadyOfMountCarmel",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 16 }),
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
            key: "saintJamesApostlePatronOfSpain",
            type: Types.SOLEMNITY,
            moment: moment.utc({ year, month: 6, day: 25 }),
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
            key: "saintEzequielMorenoBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 19 }),
        },
        {
            key: "saintTeresaOfJesusJornetEIbarsVirgin",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 26 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintFrancisBorgiaPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 3 }),
        },
        {
            key: "saintThomasOfVillanovaBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 10 }),
        },
        {
            key: "saintSoledadTorresAcostaVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 11 }),
        },
        {
            key: "ourLadyOfThePillar",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 9, day: 12 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintTeresaOfJesusVirginAndDoctorOfTheChurch",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 9, day: 15 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintPeterOfAlcantaraPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 19 }),
        },
        {
            key: "saintLeanderBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 13 }),
        },
        {
            key: "saintEulaliaOfMeridaVirginAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 10 }),
        },
        {
            key: "saintJohnOfTheCrossDoctorOfTheChurch",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 14 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "ourLordJesusChristTheEternalHighPriest",
            type: Types.FEAST,
            moment: ((y: number): moment.Moment => Dates.pentecostSunday(y).add(4, "days"))(year),
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

export { defaultConfig, dates };
