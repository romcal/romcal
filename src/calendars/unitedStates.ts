import moment from "moment";

import { Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";

const defaultConfig = {};

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintElizabethAnnSetonReligious",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 4 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintJohnNeumannBishop",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 5 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintAndreBessetteReligious",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 6 }),
            data: {},
        },
        {
            key: "saintVincentDeaconAndMartyrOrSaintMarianneCopeVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 22 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintKatharineDrexelVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 3 }),
            data: {},
        },
        {
            key: "saintDamienDeVeusterPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 10 }),
            data: {},
        },
        {
            key: "saintIsidoreTheFarmer",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 15 }),
            data: {},
        },
        {
            key: "blessedJuniperoSerraPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 1 }),
            data: {},
        },
        {
            key: "saintKateriTekakwithaVirgin",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 14 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintCamillusDeLellisPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 18 }),
            data: {},
        },
        {
            key: "saintPeterClaverPriest",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 9 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "blessedMarieRoseDurocherVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 6 }),
            data: {},
        },
        {
            key: "saintsJeanDeBrebeufAndIsaacJoguesPriestsAndCompanionsMartyrsSaintPaulOfTheCrossPriest",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 19 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintPaulOfTheCrossPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 20 }),
            data: {},
        },
        {
            key: "saintFrancesXavierCabriniVirgin",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 13 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintRosePhilippineDuchesneVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 18 }),
            data: {},
        },
        {
            key: "blessedMiguelAgustinProPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 23 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
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
    ];

    // Get localized celebration names
    return Utils.localizeDates(_dates);
};

export { defaultConfig, dates };
