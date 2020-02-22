import moment from "moment";

import { Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "waitangiDay",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 1, day: 6 }),
        },
        {
            key: "saintPaulMikiAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 7 }),
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
            moment: moment.utc({ year, month: 2, day: 17 }),
        },
        {
            key: "saintMarkApostle",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 3, day: 26 }),
        },
        {
            key: "saintLouisGrignonDeMontfortPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 27 }),
        },
        {
            key: "saintPeterChanelPriestAndMartyrSaintLouisGrignonDeMontfortPriest",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 3, day: 28 }),
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
            moment: moment.utc({ year, month: 4, day: 24 }),
        },
        {
            key: "saintMarcellinChampagnatPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 6 }),
        },
        {
            key: "saintDominicPriest/SaintSixtusIiPopeAndCompanionsMartyrsSaintCajetanPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 7 }),
        },
        {
            key: "saintMaryMacKillopVirgin",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 7, day: 8 }),
        },
    ];

    // Get localized celebration names
    return Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
