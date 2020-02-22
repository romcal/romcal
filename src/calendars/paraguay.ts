import { Dates, Locales } from "../lib";
import { Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import moment from "moment";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "ourLordJesusChristTheEternalHighPriest",
            type: Types.FEAST,
            moment: ((y: number): moment.Moment =>
                moment.utc(
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
    return Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
