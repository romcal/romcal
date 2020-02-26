import { Dates, Locales } from "../lib";
import { Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import dayjs from "dayjs";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = async (year: number): Promise<Array<IRomcalDateItem>> => {
    const _dates: Array<IRomcalDateItem> = [
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
