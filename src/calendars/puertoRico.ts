import dayjs from "dayjs";

import { Dates, Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "mostHolyNameOfJesusOrOurLadyOfBethlehem",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-3`),
        },
        {
            key: "blessedMariaDoloresRodriguezSopenaVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-1-10`),
        },
        {
            key: "blessedCarlosManuelRodriguez",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-4`),
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
            key: "saintTeresaOfJesusJornetEIbarsVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-8-26`),
        },
        {
            key: "saintRoseOfLima",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-8-30`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "blessedsCarlosSpinolaAndJeronimoDeAngelisPriestsAndMartyrs",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-9-10`),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintSoledadTorresAcostaVirgin",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-10-11`),
        },
        {
            key: "ourLadyMotherOfDivineProvidencePatronessOfPuertoRico",
            type: Types.SOLEMNITY,
            date: dayjs.utc(`${year}-11-19`),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
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
        {
            key: "ourLordJesusChristTheEternalHighPriest",
            type: Types.FEAST,
            date: ((y: number): dayjs.Dayjs =>
                dayjs.utc(
                    Dates.pentecostSunday(y)
                        .add(4, "day")
                        .toISOString(),
                ))(year),
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
