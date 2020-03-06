import dayjs from "dayjs";
import { Dates, Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { rangeOfDays, rangeContainsDate } from "../utils/dates";
import Config, { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
    const year = config.year;
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintAelredOfRievaulx",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-12`),
        },
        {
            key: "saintWulstanBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-19`),
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
            type: Types.FEAST,
            date: dayjs.utc(`${year}-3-1`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPatrickBishop",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-3-17`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        // When the celebration falls in the Easter Triduum, on a Sunday of Easter,
        // or in the Easter Octave it is transferred to the next available day —
        // generally the Monday of the Second Week of Easter.
        {
            key: "saintGeorgeMartyr",
            type: Types.SOLEMNITY,
            date: ((y: number): dayjs.Dayjs => {
                const holyWeekDates = Dates.holyWeek(y);
                const [firstDateInHolyWeek] = holyWeekDates;
                const [lastDateInHolyWeek] = holyWeekDates.reverse();

                const octaveOfEasterDates = Dates.octaveOfEaster(y);
                const [firstDateInTheEasterOctave] = octaveOfEasterDates;
                const [lastDateInTheEasterOctave] = octaveOfEasterDates.reverse();

                const annunciation = Dates.annunciation(y);
                const holyWeekRange = rangeOfDays(firstDateInHolyWeek, lastDateInHolyWeek);
                const easterOctaveRange = rangeOfDays(firstDateInTheEasterOctave, lastDateInTheEasterOctave);
                const date = dayjs.utc(`${y}-4-23`);

                // If the celebration lands anywhere between Holy Week to Divine Mercy Sunday (inclusive)
                // move it to the Monday after Divine Mercy Sunday
                if (rangeContainsDate(holyWeekRange, date) || rangeContainsDate(easterOctaveRange, date)) {
                    // Ensure that the Monday after Divine Mercy Sunday is not Annunciation
                    // if it is, move this celebration to the next day (Tuesday)
                    const proposed = lastDateInTheEasterOctave.add(1, "day");
                    if (proposed.isSame(annunciation)) {
                        return dayjs.utc(lastDateInTheEasterOctave.add(2, "day").toISOString());
                    } else {
                        return dayjs.utc(proposed.toISOString());
                    }
                } else {
                    return dayjs.utc(date.toISOString());
                }
            })(year),
            data: {
                prioritized: true,
            },
        },
        {
            key: "saintAdalbertBishopAndMartyrSaintFidelisOfSigmaringenPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-4-24`),
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
            date: dayjs.utc(`${year}-4-29`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "theEnglishMartyrs",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-5-4`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "stDunstanArchbishopOfCanterbury",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-19`),
        },
        {
            key: "saintBedeTheVenerablePriestAndDoctor",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-5-25`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintAugustineOfCanterburyBishop",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-5-27`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintBonifaceBishopAndMartyr",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-6-5`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintEphraemDeaconDoctorOrSaintColumbaColumCilleAbbot",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-6-9`),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintRichardOfChichesterBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-6-16`),
        },
        {
            key: "saintAlbanMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-6-20`),
        },
        {
            key: "saintsJohnFisherBishopAndThomasMoreMartyrs",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-6-22`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintEtheldredaAudreyVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-6-23`),
        },
        {
            key: "saintOliverPlunkettBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-7-1`),
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
            key: "blessedDominicOfTheMotherOfGodDominicBarberiPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-26`),
        },
        {
            key: "saintsMargaretClitherowAnneLineAndMargaretWardMartyrs",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-30`),
        },
        {
            key: "saintAidanBishopAndTheSaintsOfLindisfarne",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-31`),
        },
        {
            key: "saintGregoryTheGreatPopeAndDoctor",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-9-3`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintCuthbertBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-9-4`),
        },
        {
            key: "saintTheodoreOfCanterburyBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-9-19`),
        },
        {
            key: "ourLadyOfWalsingham",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-9-24`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "blessedJohnHenryNewmanPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-9`),
        },
        {
            key: "saintPaulinusOfYorkBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-10`),
        },
        // In England and Wales when the celebration falls on either a
        // Saturday or a Monday it is transferred to the Sunday.
        // Replaces 20th Sunday in Ordinary Time when it falls on a Sunday.
        {
            key: "peterAndPaulApostles",
            source: "celebrations", // Override the default lookup source
            type: Types.SOLEMNITY,
            date: ((y: number): dayjs.Dayjs => {
                const date = dayjs.utc(`${y}-6-29`);
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
                    return date.add(1, "day").startOf("day");
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
            key: "saintWilfridBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-12`),
        },
        {
            key: "saintEdwardTheConfessor",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-13`),
        },
        {
            key: "saintsChadAndCeddBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-26`),
        },
        {
            key: "saintWinefrideVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-11-3`),
        },
        {
            key: "saintWillibrordBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-11-7`),
        },
        {
            key: "saintEdmundOfAbingdonBishopOrSaintMargaretOfScotland",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-11-16`),
        },
        {
            key: "saintElizabethOfHungary",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-11-17`),
        },
        {
            key: "saintAndrewTheApostle",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-11-30`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
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
            key: "saintThomasBecketBishopAndMartyr",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-12-29`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
    ];

    // Get localized celebration names
    return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
