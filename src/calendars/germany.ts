import moment from "moment";

import { Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintJohnNeumannBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 5 }),
        },
        {
            key: "saintValentineOfRaetiaBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 7 }),
        },
        {
            key: "saintSeverinusOfNoricumMonk",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 8 }),
        },
        {
            key: "saintMeinradMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 21 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "blessedHenrySusoPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 23 }),
        },
        {
            key: "saintRabanusMaurusBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 4 }),
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
            key: "saintMatthiasTheApostle",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 24 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintWalburgaAbbess",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 25 }),
        },
        {
            key: "saintFridolinOfSackingenMonk",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 6 }),
        },
        {
            key: "saintBrunoBonifaceOfQuerfurtBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 9 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintMatilda",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 14 }),
        },
        {
            key: "saintClementMaryHofbauerPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 15 }),
        },
        {
            key: "saintGertrudeOfNivellesAbbess",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 17 }),
        },
        {
            key: "saintLudgerBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 26 }),
        },
        {
            key: "saintLeoIxPopeOrBlessedMarcelCalloMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 19 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintConradOfParzhamReligious",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 21 }),
        },
        {
            key: "saintPeterCanisiusPriestAndDoctor",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 27 }),
            data: {
                meta: {
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
            key: "saintFlorianAndHisCompanionsMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 4 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintGotthardBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 5 }),
        },
        {
            key: "saintJohnNepomucenePriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 16 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintHermannJosephPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 21 }),
        },
        {
            key: "saintVitusMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 15 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintBennoOfMeissenBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 16 }),
        },
        {
            key: "saintHemmaOfGurk",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 27 }),
        },
        {
            key: "saintOttoOfBambergBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 30 }),
        },
        {
            key: "visitationOfTheBlessedVirginMary",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 2 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintUlrichOfAugsburg",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 4 }),
        },
        {
            key: "saintWillibaldBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 7 }),
        },
        {
            key: "saintKilianBishopAndCompanionsMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 8 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintsCanuteEricAndOlafMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 10 }),
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
            key: "saintsHenryAndCunigunde",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 13 }),
        },
        {
            key: "saintMargaretOfAntiochVirginAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 20 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
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
                },
            },
        },
        {
            key: "saintChristopherMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 24 }),
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
            key: "saintPaulinusOfTrierBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 31 }),
        },
        {
            key: "saintHildegardOfBingenAbbessAndDoctor",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 17 }),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintLambertBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 18 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintMauriceAndCompanionsMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 22 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintsRupertAndVirgiliusOfSalzburgBishops",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 24 }),
        },
        {
            key: "saintNicholasOfFlueHermit",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 25 }),
        },
        {
            key: "saintLeobaAbbess",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 28 }),
        },
        {
            key: "saintGallAbbotAndMissionary",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 16 }),
        },
        {
            key: "saintWendelinAbbot",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 20 }),
        },
        {
            key: "saintUrsulaAndCompanionsVirginsAndMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 21 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintWolfgangOfRegensburgBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 31 }),
        },
        {
            key: "saintHubertOfLiegeBishopOrSaintPirminAbbotAndBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 3 }),
        },
        {
            key: "saintLeonardOfNoblacHermit",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 6 }),
        },
        {
            key: "saintWillibrordBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 7 }),
        },
        {
            key: "saintLeopoldIII",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 15 }),
        },
        {
            key: "saintGertrudeTheGreatVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 17 }),
        },
        {
            key: "saintElizabethOfHungary",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 19 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintCorbinianBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 20 }),
        },
        {
            key: "saintsConradAndGebhardOfConstanceBishops",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 26 }),
        },
        {
            key: "saintLuciusOfChurBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 2 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintBarbaraVirginAndMartyrOrBlessedAdolphKolpingPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 4 }),
        },
        {
            key: "saintAnnoIiBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 5 }),
        },
        {
            key: "saintOdileOfAlsaceAbbess",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 13 }),
        },
    ];

    // Get localized celebration names
    return Utils.localizeDates(_dates);
};

export { dates, defaultConfig };
