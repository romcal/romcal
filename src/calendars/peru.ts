import dayjs from "dayjs";

import { Dates, Locales } from "../lib";
import { Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import Config, { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (config: Config): Promise<Array<IRomcalDateItem>> => {
    const year = config.year;
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "findingOfTheHolyCross",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-5-3`),
        },
        {
            key: "ourLadyHelpOfChristians",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-5-24`),
        },
        {
            key: "saintMarianaDeJesusDeParedesVirgin",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-5-26`),
        },
        {
            key: "saintFrancisSolanusPriest",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-7-14`),
        },
        {
            key: "ourLadyOfPeace",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-7-28`),
        },
        {
            key: "saintRoseOfLima",
            type: Types.SOLEMNITY,
            date: dayjs.utc(`${year}-8-23`),
        },
        {
            key: "saintJohnMaciasReligious",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-9-18`),
        },
        {
            key: "ourLadyOfMercy",
            type: Types.OPT_MEMORIAL,
            date: dayjs.utc(`${year}-9-24`),
        },
        {
            key: "ourLordOfMiracles",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-10-28`),
        },
        {
            key: "saintMartinDePorresReligious",
            type: Types.SOLEMNITY,
            date: dayjs.utc(`${year}-11-3`),
        },
        {
            key: "ourLadyOfGuadalupe",
            type: Types.FEAST,
            date: dayjs.utc(`${year}-12-12`),
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
