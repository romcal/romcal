import moment from "moment";

import { Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "santoNinoInfantJesus",
            type: Types.FEAST,
            moment: ((): moment.Moment => {
                // Third Sunday of January: Santo Niño (Holy Child Jesus)
                const firstDay = moment.utc({ year, month: 0, day: 1 });
                const feastDay = 22 - (firstDay.day() == 0 ? 7 : firstDay.day());
                return moment.utc({ year, month: 0, day: feastDay });
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
            moment: moment.utc({ year, month: 1, day: 6 }),
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
            moment: moment.utc({ year, month: 3, day: 2 }),
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
            moment: moment.utc({ year, month: 4, day: 15 }),
        },
        {
            key: "saintRoch",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 16 }),
        },
        {
            key: "saintEzekielMorenoBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 19 }),
        },
        {
            key: "saintLorenzoRuizAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 28 }),
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
            moment: moment.utc({ year, month: 11, day: 8 }),
        },
    ];

    // Get localized celebration names
    return Utils.localizeDates(_dates);
};

export { dates };
