import dayjs from "dayjs";

import { Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "waitangiDay",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-2-6`),
        },
        {
            key: "saintPaulMikiAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-2-7`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintPatrickBishop",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-3-17`),
        },
        {
            key: "saintMarkApostle",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-4-26`),
        },
        {
            key: "saintLouisGrignonDeMontfortPriest",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-4-27`),
        },
        {
            key: "saintPeterChanelPriestAndMartyrSaintLouisGrignonDeMontfortPriest",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-4-28`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "ourLadyHelpOfChristians",
            type: Types.MEMORIAL,
            moment: dayjs.utc(`${year}-5-24`),
        },
        {
            key: "saintMarcellinChampagnatPriest",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-6-6`),
        },
        {
            key: "saintDominicPriest/SaintSixtusIiPopeAndCompanionsMartyrsSaintCajetanPriest",
            type: Types.OPT_MEMORIAL,
            moment: dayjs.utc(`${year}-8-7`),
        },
        {
            key: "saintMaryMacKillopVirgin",
            type: Types.FEAST,
            moment: dayjs.utc(`${year}-8-8`),
        },
    ];

    // Get localized celebration names
    return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
