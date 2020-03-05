import dayjs from "dayjs";

import { Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import Config, { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
    const year = config.year;
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintJoseDeAnchietaPriest",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-6-9`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "blessedAlbertinaBerkenbrockVirginAndMartyr",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-6-15`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintPaulinaOfTheAgonizingHeartOfJesusVirgin",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-7-9`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLadyOfMountCarmel",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-7-16`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "blessedInacioDeAzevedoPriestAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-7-17`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintRoseOfLima",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-8-23`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "blessedsAndreDeSoveralAndAmbrosioFranciscoFerroPriestsAndMartyrs",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-10-3`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "ourLadyOfAparecidaPatronessOfBrazil",
            type: Types.SOLEMNITY,
            date: dayjs.utc(`${year}-10-12`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAnthonyOfSaintAnneGalvaoFreiGalvaoPriest",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-10-25`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsRoqueGonzalezAlfonsoRodriguezOlmedoAndJuanDelCastilloPriestsAndMartyrs",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-11-19`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
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
