import dayjs from "dayjs";

import { Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintAndreBessetteReligious",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-1-7`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintRaymondOfPenyafortPriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-8`),
        },
        {
            key: "saintMargueriteBourgeoysVirgin",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-1-12`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJosephSpouseOfTheBlessedVirginMaryPrincipalPatronOfCanada",
            type: Types.SOLEMNITY,
            date: dayjs.utc(`${year}-3-19`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintKateriTekakwithaVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-4-17`),
        },
        {
            key: "blessedMarieAnneBlondinVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-4-18`),
        },
        {
            key: "ourLadyOfGoodCounsel",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-4-26`),
        },
        {
            key: "saintMarieOfTheIncarnationReligious",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-4-30`),
        },
        {
            key: "blessedMarieLeonieParadisVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-4`),
        },
        {
            key: "saintFrancoisDeLavalBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-6`),
        },
        {
            key: "blessedCatherineOfSaintAugustineVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-8`),
        },
        {
            key: "saintEugeneDeMazenodBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-21`),
        },
        {
            key: "blessedLouisZephirinMoreauBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-24`),
        },
        {
            key: "blessedsNykytaBudkaAndVasylVelychkowskyBishopsAndMartyrs",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-6-27`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintAnnePatronOfQuebecAndSaintJoachimParentsOfTheBlessedVirginMary",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-7-26`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "blessedFredericJanssoonePriest",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-5`),
        },
        {
            key: "blessedAndreGrassetPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-9-2`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "blessedDinaBelangerVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-9-4`),
        },
        {
            key: "blessedEmilieTavernierGamelinReligious",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-9-24`),
        },
        {
            key: "saintsJeanDeBrebeufAndIsaacJoguesPriestsAndCompanionsMartyrsSaintPaulOfTheCrossPriest",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-9-26`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                },
            },
        },
        {
            key: "blessedMarieRoseDurocherVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-6`),
        },
        {
            key: "saintMargueriteDYouvilleReligious",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-10-16`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintHedwigReligiousOrSaintMargaretMaryAlacoqueVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-20`),
        },
        {
            key: "ourLadyOfGuadalupe",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-12-12`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
    ];

    // Get localized celebration names
    return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
