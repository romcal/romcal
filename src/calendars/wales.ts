import dayjs from "dayjs";

import { Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintTeiloBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-2-9`),
            data: {},
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
            key: "saintDavidBishop",
            type: Types.SOLEMNITY,
            date: dayjs.utc(`${year}-3-1`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintBeunoAbbot",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-4-20`),
            data: {},
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
            key: "saintAsaphBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-5`),
            data: {},
        },
        {
            key: "saintsAlbanJuliusAndAaronMartyrs",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-6-20`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
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
            key: "saintJohnJonesPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-7-12`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintBridgetOfSwedenReligious",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-7-23`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "saintsPhilipEvansAndJohnLloydPriestsAndMartyrs",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-7-25`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintGermanusOfAuxerreBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-3`),
            data: {},
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
            key: "saintDavidLewisPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-26`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintDeiniolBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-9-11`),
            data: {},
        },
        {
            key: "saintRichardGwynMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-16`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "theSixWelshMartyrsAndCompanions",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-10-25`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintWinefrideVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-11-3`),
            data: {},
        },
        {
            key: "saintIlltudAbbot",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-11-6`),
            data: {},
        },
        // In England and Wales when All Saints (1 November) falls on a Saturday
        // and is transferred to Sunday, All Souls is transferred to Monday 3 November.
        // Like Ash Wednesday, All Souls is, technically, without rank.
        // However, in countries (not England & Wales) where it falls
        // on a Sunday it replaces the Sunday.
        {
            key: "allSaints",
            source: "celebrations", // Override the default locale lookup
            type: Types.SOLEMNITY,
            date: ((y: number): dayjs.Dayjs => {
                const date = dayjs.utc(`${y}-11-1`);
                if (date.day() === 6) {
                    return dayjs.utc(`${y}-11-2`);
                } else {
                    return date;
                }
            })(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "allSouls",
            type: Types.FEAST,
            date: ((y: number): dayjs.Dayjs => {
                const date = dayjs.utc(`${y}-11-1`);
                if (date.day() === 6) {
                    // If All Saints is on Saturday
                    // Then All Souls will be on Monday because All Saints will be moved to Sunday on the rule above
                    return dayjs.utc(`${y}-11-3`);
                } else {
                    // Else, All Souls is the day after All Saints
                    return dayjs.utc(`${y}-11-2`);
                }
            })(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "allSaintsOfWales",
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
            key: "saintDubriciusBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-11-14`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintJohnRobertsPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-12-10`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        // In England and Wales when the celebration falls on either a
        // Saturday or a Monday it is transferred to the Sunday.
        // Replaces 20th Sunday in Ordinary Time when it falls on a Sunday.
        {
            key: "peterAndPaulApostles",
            source: "celebrations", // Override the default lookup source
            type: Types.SOLEMNITY,
            date: ((y: number): dayjs.Dayjs => {
                const date = dayjs.utc(`${y}-5-29`);
                if (date.day() === 1) {
                    return date.subtract(1, "day");
                } else if (date.day() === 6) {
                    return date.add(1, "day").startOf("day");
                } else {
                    return date;
                }
            })(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                },
            },
        },
        // In England and Wales when the celebration falls on either a
        // Saturday or a Monday it is transferred to the Sunday.
        // Replaces 20th Sunday in Ordinary Time when it falls on a Sunday.
        {
            key: "assumption",
            source: "celebrations",
            type: Types.SOLEMNITY,
            date: ((y: number): dayjs.Dayjs => {
                const date = dayjs.utc(`${y}-8-15`);
                if (date.day() === 1) {
                    return date.subtract(1, "day");
                } else if (date.day() === 6) {
                    return date.add(1, "week").startOf("week");
                } else {
                    return date;
                }
            })(year),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
    ];

    // Get localized celebration names
    const localizedDates = await Locales.localizeDates(_dates);
    return localizedDates;
};

export { dates, defaultConfig };
