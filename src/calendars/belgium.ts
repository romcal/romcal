import dayjs from "dayjs";

import { Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintBrotherMutienMarieReligious",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-1-30`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAmandMissionary",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-2-6`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintGertrudeOfNivellesVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-3-17`),
        },
        {
            key: "saintJulieBilliartVirgin",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-4-8`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintDamienDeVeusterPriest",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-5-10`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJulianaOfLiegeVirgin",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-8-7`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLadyMediatrix",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-8-31`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintLambertBishopAndMartyr",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-9-17`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintHubertBishop",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-11-3`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJohnBerchmansReligious",
            type: Types.MEMORIAL,
            date: dayjs.utc(`${year}-11-26`),
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
