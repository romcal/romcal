import moment from "moment";

import { Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintAndreBessetteReligious",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 7 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintRaymondOfPenyafortPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 8 }),
        },
        {
            key: "saintMargueriteBourgeoysVirgin",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 12 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJosephSpouseOfTheBlessedVirginMaryPrincipalPatronOfCanada",
            type: Types.SOLEMNITY,
            moment: moment.utc({ year, month: 2, day: 19 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintKateriTekakwithaVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 17 }),
        },
        {
            key: "blessedMarieAnneBlondinVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 18 }),
        },
        {
            key: "ourLadyOfGoodCounsel",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 26 }),
        },
        {
            key: "saintMarieOfTheIncarnationReligious",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 30 }),
        },
        {
            key: "blessedMarieLeonieParadisVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 4 }),
        },
        {
            key: "saintFrancoisDeLavalBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 6 }),
        },
        {
            key: "blessedCatherineOfSaintAugustineVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 8 }),
        },
        {
            key: "saintEugeneDeMazenodBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 21 }),
        },
        {
            key: "blessedLouisZephirinMoreauBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 24 }),
        },
        {
            key: "blessedsNykytaBudkaAndVasylVelychkowskyBishopsAndMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 27 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintAnnePatronOfQuebecAndSaintJoachimParentsOfTheBlessedVirginMary",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 26 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "blessedFredericJanssoonePriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 5 }),
        },
        {
            key: "blessedAndreGrassetPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 2 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "blessedDinaBelangerVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 4 }),
        },
        {
            key: "blessedEmilieTavernierGamelinReligious",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 24 }),
        },
        {
            key: "saintsJeanDeBrebeufAndIsaacJoguesPriestsAndCompanionsMartyrsSaintPaulOfTheCrossPriest",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 8, day: 26 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                },
            },
        },
        {
            key: "blessedMarieRoseDurocherVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 6 }),
        },
        {
            key: "saintMargueriteDYouvilleReligious",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 16 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintHedwigReligiousOrSaintMargaretMaryAlacoqueVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 20 }),
        },
        {
            key: "ourLadyOfGuadalupe",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 11, day: 12 }),
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

export { dates };
