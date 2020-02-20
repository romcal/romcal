import moment from "moment";

import { Dates, Utils } from "../lib";
import { Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "findingOfTheHolyCross",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 4, day: 3 }),
        },
        {
            key: "ourLadyHelpOfChristians",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 24 }),
        },
        {
            key: "saintMarianaDeJesusDeParedesVirgin",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 4, day: 26 }),
        },
        {
            key: "saintFrancisSolanusPriest",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 14 }),
        },
        {
            key: "ourLadyOfPeace",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 28 }),
        },
        {
            key: "saintRoseOfLima",
            type: Types.SOLEMNITY,
            moment: moment.utc({ year, month: 7, day: 23 }),
        },
        {
            key: "saintJohnMaciasReligious",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 8, day: 18 }),
        },
        {
            key: "ourLadyOfMercy",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 24 }),
        },
        {
            key: "ourLordOfMiracles",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 9, day: 28 }),
        },
        {
            key: "saintMartinDePorresReligious",
            type: Types.SOLEMNITY,
            moment: moment.utc({ year, month: 10, day: 3 }),
        },
        {
            key: "ourLadyOfGuadalupe",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 11, day: 12 }),
        },
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
    return Utils.localizeDates(_dates);
};

export { dates, defaultConfig };
