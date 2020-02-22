import moment from "moment";

import { Dates, Locales } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig | undefined = undefined;

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "blessedOdoricOfPordenonePriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 14 }),
        },
        {
            key: "saintFrancisFernandezDeCapillasPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 15 }),
        },
        {
            key: "saintLawrenceBaiXiaomanMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 23 }),
        },
        {
            key: "saintAugustineZhaoRongPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 27 }),
        },
        {
            key: "saintLaurenceWangBingAndCompanionsMartyrSaintJosephFreinademetzPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 0, day: 29 }),
        },
        {
            key: "saintJohnOfTrioraPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 13 }),
        },
        {
            key: "saintMartinWuXueshengAndCompanionsMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 17 }),
        },
        {
            key: "saintLucyYiZhenmeiVirginAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 19 }),
        },
        {
            key: "saintPaulLiuHanzouPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 21 }),
        },
        {
            key: "saintsLouisVersigliaBishopAndCallistusCaravarioPriestMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 1, day: 25 }),
        },
        {
            key: "saintAgnesCaoGuiyingMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 1 }),
        },
        {
            key: "saintJosephZhangDapengMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 2, day: 12 }),
        },
        {
            key: "blessedMariaAssuntaPallottaVirgin",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 8 }),
        },
        {
            key: "blessedJohnMartinMoyePriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 4 }),
        },
        {
            key: "ourLadyOfChina",
            type: Types.MEMORIAL,
            moment: ((y: number): moment.Moment => {
                const firstMay = moment.utc({ year: y, month: 4, day: 1 });
                const memorialDay = firstMay;
                // determine first saturday
                memorialDay.add(6 - firstMay.day(), "days");
                // Second saturday
                memorialDay.add(7, "days");
                return memorialDay;
            })(year),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintPeterLiuMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 14 }),
        },
        {
            key: "saintPeterSanzBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 27 }),
        },
        {
            key: "saintJoachimHoMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 29 }),
        },
        {
            key: "saintsGregoryGrassiFrancisFogollaAndAnthonyFantosatiBishopsAndCompanionsMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 20 }),
        },
        {
            key: "saintJosephYuanPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 23 }),
        },
        {
            key: "sevenMartyredNunsFromTheFranciscanMissionariesOfMary",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 8 }),
        },
        {
            key: "saintAugustineZhaoRongPriestAndCompanionsMartyrs",
            type: Types.SOLEMNITY,
            moment: moment.utc({ year, month: 6, day: 9 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintLeoManginPriestAndCompanionsMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 20 }),
        },
        {
            key: "saintAlbericCrescitelliPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 21 }),
        },
        {
            key: "saintPaulChenChangpinAndCompanionsMartyrs",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 28 }),
        },
        {
            key: "blessedMauriceTornayPriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 11 }),
        },
        {
            key: "saintJohnGabrielPerboyrePriestAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 11 }),
        },
        {
            key: "saintFrancisDiazPriestAndCompanionsMartyrs",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 27 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintPeterWuMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 7 }),
        },
        {
            key: "saintGabrieltaurinDufresseBishopAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 27 }),
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
    return Locales.localizeDates(_dates);
};

export { dates, defaultConfig };
