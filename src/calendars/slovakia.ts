import moment from "moment";

import { Dates, Utils } from "../lib";
import { Titles, Types, LiturgicalColors } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { IRomcalDefaultConfig } from "../models/romcal-config";

const defaultConfig: IRomcalDefaultConfig = {
    ascensionOnSunday: false,
    christmastideEnds: "o",
    christmastideIncludesTheSeasonOfEpiphany: true,
    corpusChristiOnThursday: false,
    epiphanyOnJan6: true,
};

const dates = (year: number): Array<IRomcalDateItem> => {
    const _dates: Array<IRomcalDateItem> = [
        {
            key: "saintAdalbertBishopAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 23 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintGeorgeMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 3, day: 24 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintCatherineOfSienaVirginAndDoctorOfTheChurch",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 3, day: 29 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE, Titles.DOCTOR_OF_THE_CHURCH],
                },
            },
        },
        {
            key: "saintFlorianMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 4 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                },
            },
        },
        {
            key: "blessedSaraSalkahaziVirginAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 11 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintJohnNepomucenePriestAndMartyr",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 4, day: 16 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintLadislaus",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 5, day: 27 }),
        },
        {
            key: "visitationOfTheBlessedVirginMary",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 2 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        // In Slovakia and Czech Republic, the two brothers were originally
        // commemorated on 9 March, but Pope Pius IX changed this date to 5 July
        // https://en.wikipedia.org/wiki/Saints_Cyril_and_Methodius
        {
            key: "saintsCyrilMonkAndMethodiusBishop",
            type: Types.SOLEMNITY,
            moment: moment.utc({ year, month: 6, day: 5 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "saintAnthonyZaccariaPriest",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 7 }),
        },
        {
            key: "saintBenedictOfNursiaAbbot",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 11 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "saintsAndrewZorardAndBenedictHermits",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 17 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintBridgetOfSwedenReligious",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 6, day: 23 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                    titles: [Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "saintGorazdAndCompanions",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 27 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "blessedZdenkaSchelingovaVirginAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 6, day: 30 }),
            data: {
                meta: {
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "saintTeresaBenedictaOfTheCrossEdithSteinVirginAndMartyr",
            type: Types.FEAST,
            moment: moment.utc({ year, month: 7, day: 9 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR, Titles.PATRON_OF_EUROPE],
                },
            },
        },
        {
            key: "saintHelena",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 7, day: 18 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintTeresaOfCalcuttaReligious",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 5 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintsMarkoKrizinMelicharGrodeckiAndStephenPongracPriestsAndMartyrs",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 8, day: 7 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                    titles: [Titles.MARTYR],
                },
            },
        },
        {
            key: "ourLadyOfSorrows",
            type: Types.SOLEMNITY,
            moment: moment.utc({ year, month: 8, day: 15 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintFaustinaKowalskaVirginAndReligious",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 5 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintGallAbbotAndMissionary",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 16 }),
        },
        {
            key: "saintMaurusBishop",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 9, day: 25 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "dedicationOfAParticularChurch",
            type: Types.SOLEMNITY,
            moment: moment.utc({ year, month: 9, day: 26 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "allSouls",
            type: Types.MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 2 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.WHITE,
                },
            },
        },
        {
            key: "saintEmeric",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 10, day: 5 }),
        },
        {
            // This key is dropped only because of adding Optional Memorial of St Barbara to the same day
            key: "saintJohnDamascenePriestAndDoctor",
            moment: moment.utc(),
            drop: true,
        },
        {
            key: "saintJohnDamascenePriestAndDoctorOrSaintBarbaraVirginAndMartyr",
            type: Types.OPT_MEMORIAL,
            moment: moment.utc({ year, month: 11, day: 4 }),
            data: {
                meta: {
                    liturgicalColor: LiturgicalColors.RED,
                },
            },
        },
        {
            key: "ourLordJesusChristTheEternalHighPriest",
            type: Types.FEAST,
            moment: ((y: number): moment.Moment => Dates.pentecostSunday(y).add(4, "days"))(year),
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
