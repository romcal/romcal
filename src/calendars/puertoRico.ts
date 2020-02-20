import moment from "moment";

import { Dates, Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "mostHolyNameOfJesusOrOurLadyOfBethlehem",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 3 }),
        },
        {
            key: "blessedMariaDoloresRodriguezSopenaVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 10 }),
        },
        {
            key: "blessedCarlosManuelRodriguez",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 4 }),
        },
        {
            key: "ourLadyOfMountCarmel",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 16 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintTeresaOfJesusJornetEIbarsVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 26 }),
        },
        {
            key: "saintRoseOfLima",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 7, day: 30 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "blessedsCarlosSpinolaAndJeronimoDeAngelisPriestsAndMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 10 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintSoledadTorresAcostaVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 11 }),
        },
        {
            key: "ourLadyMotherOfDivineProvidencePatronessOfPuertoRico",
            type: Types.SOLEMNITY,
            moment: moment.utc({ year, month: 10, day: 19 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "ourLadyOfGuadalupe",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 11, day: 12 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
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
