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
            key: "santoNinoInfantJesus",
            type: Types.FEAST,
            date: ((): dayjs.Dayjs => {
                // Third Sunday of January: Santo Niño (Holy Child Jesus)
                const firstDay = dayjs.utc(`${year}-1-1`);
                const feastDay = 22 - (firstDay.day() == 0 ? 7 : firstDay.day());
                return dayjs.utc(`${year}-1-${feastDay}`);
            })(),
            data: {
                prioritized: true,
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPaulMikiAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-2-6`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintPedroCalungsodMartyr",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-4-2`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintIsidoreTheFarmer",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-5-15`),
        },
        {
            key: "saintRoch",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-16`),
        },
        {
            key: "saintEzekielMorenoBishop",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-19`),
        },
        {
            key: "saintLorenzoRuizAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-9-28`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "immaculateConceptionOfTheBlessedVirginMaryPrincipalPatronessOfThePhilippines",
            type: Types.SOLEMNITY,
            date: dayjs.utc(`${year}-12-8`),
        },
    ];

    // Get localized celebration names
    return await Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
