import dayjs from "dayjs";

import { Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintJohnNeumannBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-1-5`),
        },
        {
            key: "saintValentineOfRaetiaBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-1-7`),
        },
        {
            key: "saintSeverinusOfNoricumMonk",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-1-8`),
        },
        {
            key: "saintMeinradMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-1-21`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "blessedHenrySusoPriest",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-1-23`),
        },
        {
            key: "saintRabanusMaurusBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-2-4`),
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
            key: "saintMatthiasTheApostle",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-2-24`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintWalburgaAbbess",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-2-25`),
        },
        {
            key: "saintFridolinOfSackingenMonk",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-3-6`),
        },
        {
            key: "saintBrunoBonifaceOfQuerfurtBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-3-9`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintMatilda",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-3-14`),
        },
        {
            key: "saintClementMaryHofbauerPriest",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-3-15`),
        },
        {
            key: "saintGertrudeOfNivellesAbbess",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-3-17`),
        },
        {
            key: "saintLudgerBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-3-26`),
        },
        {
            key: "saintLeoIxPopeOrBlessedMarcelCalloMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-4-19`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintConradOfParzhamReligious",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-4-21`),
        },
        {
            key: "saintPeterCanisiusPriestAndDoctor",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-4-27`),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
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
            key: "saintFlorianAndHisCompanionsMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-5-4`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintGotthardBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-5-5`),
        },
        {
            key: "saintJohnNepomucenePriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-5-16`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintHermannJosephPriest",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-5-21`),
        },
        {
            key: "saintVitusMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-6-15`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintBennoOfMeissenBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-6-16`),
        },
        {
            key: "saintHemmaOfGurk",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-6-27`),
        },
        {
            key: "saintOttoOfBambergBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-6-30`),
        },
        {
            key: "visitationOfTheBlessedVirginMary",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-7-2`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintUlrichOfAugsburg",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-7-4`),
        },
        {
            key: "saintWillibaldBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-7-7`),
        },
        {
            key: "saintKilianBishopAndCompanionsMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-7-8`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintsCanuteEricAndOlafMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-7-10`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
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
            key: "saintsHenryAndCunigunde",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-7-13`),
        },
        {
            key: "saintMargaretOfAntiochVirginAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-7-20`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
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
                },
            },
        },
        {
            key: "saintChristopherMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-7-24`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
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
            key: "saintPaulinusOfTrierBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-8-31`),
        },
        {
            key: "saintHildegardOfBingenAbbessAndDoctor",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-9-17`),
            data: {
                meta: {
                    titles: [Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintLambertBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-9-18`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintMauriceAndCompanionsMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-9-22`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintsRupertAndVirgiliusOfSalzburgBishops",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-9-24`),
        },
        {
            key: "saintNicholasOfFlueHermit",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-9-25`),
        },
        {
            key: "saintLeobaAbbess",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-9-28`),
        },
        {
            key: "saintGallAbbotAndMissionary",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-10-16`),
        },
        {
            key: "saintWendelinAbbot",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-10-20`),
        },
        {
            key: "saintUrsulaAndCompanionsVirginsAndMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-10-21`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintWolfgangOfRegensburgBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-10-31`),
        },
        {
            key: "saintHubertOfLiegeBishopOrSaintPirminAbbotAndBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-11-3`),
        },
        {
            key: "saintLeonardOfNoblacHermit",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-11-6`),
        },
        {
            key: "saintWillibrordBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-11-7`),
        },
        {
            key: "saintLeopoldIII",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-11-15`),
        },
        {
            key: "saintGertrudeTheGreatVirgin",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-11-17`),
        },
        {
            key: "saintElizabethOfHungary",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-11-19`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintCorbinianBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-11-20`),
        },
        {
            key: "saintsConradAndGebhardOfConstanceBishops",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-11-26`),
        },
        {
            key: "saintLuciusOfChurBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-12-2`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintBarbaraVirginAndMartyrOrBlessedAdolphKolpingPriest",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-12-4`),
        },
        {
            key: "saintAnnoIiBishop",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-12-5`),
        },
        {
            key: "saintOdileOfAlsaceAbbess",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-12-13`),
        },
    ];

    // Get localized celebration names
    return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
