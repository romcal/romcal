import _ from "lodash";

import * as Dates from "./Dates";
import * as Utils from "./Utils";

import { PsalterWeeks, LiturgicalColors, Types } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { TChristmastideEndings, isNil } from "../utils/type-guards";
import moment from "moment";
import { TPsalterWeek } from "../constants/PsalterWeeks";

/**
 * Given an array index of a *sorted* array of moment objects, determine the psalter week
 * @param index The index of a *sorted* moment array
 * @param psalterWeek The psalterWeek number to use (defaults to 0 if not set)
 */
const getPsalterWeek = (index: number, psalterWeek = 0): number => {
    if (index % 7 === 0) {
        psalterWeek++;
        if (psalterWeek > 3) {
            psalterWeek = 0;
        }
    }
    return psalterWeek;
};

/**
 * Takes an array of [[IRomcalDateItem]] items and adds the source key.
 * Also updates the data object of the [[IRomcalDateItem]] to include the calendar key/
 * @param items An array of [[IRomcalDateItem]] values
 * @returns An array of [[IRomcalDateItem]] items.
 */
const _metadata = (items: Array<IRomcalDateItem>): Array<IRomcalDateItem> => {
    return items.map(({ moment, ...rest }: IRomcalDateItem) => {
        return {
            ...rest,
            moment,
            source: "l",
            data: {
                ...rest.data,
                calendar: {
                    weeks: moment.weeksInYear(),
                    week: moment.week(),
                    day: moment.dayOfYear(),
                },
            },
        };
    });
};

/**
 * Calculates the days in the period of Epiphany
 * @param year The year to use for the calculation
 * @param epiphanyOnJan6 true|false [If true, Epiphany will be fixed to Jan 6] (defaults to false)
 */
const _epiphany = (year: number, epiphanyOnJan6 = false): Array<IRomcalDateItem> => {
    const before: Array<moment.Moment> = Dates.daysBeforeEpiphany(year, epiphanyOnJan6).map(date =>
        moment.utc(date.toISOString()),
    );
    const after: Array<moment.Moment> = Dates.daysAfterEpiphany(year, epiphanyOnJan6).map(date =>
        moment.utc(date.toISOString()),
    );

    const days: Array<IRomcalDateItem> = [];
    before.forEach(day => {
        days.push({
            moment: day,
            type: Types.FERIA,
            name: Utils.localize({
                key: "epiphany.before",
                day: day.format("dddd"),
            }),
            data: {
                season: {
                    key: "CHRISTMASTIDE",
                    value: Utils.localize({
                        key: "christmastide.season",
                    }),
                },
            },
        });
    });

    after.forEach(day => {
        days.push({
            moment: day,
            type: Types.FERIA,
            name: Utils.localize({
                key: "epiphany.after",
                day: day.format("dddd"),
            }),
            data: {
                season: {
                    key: "CHRISTMASTIDE",
                    value: Utils.localize({
                        key: "christmastide.season",
                    }),
                },
            },
        });
    });

    return days;
};

/**
 * Returns the days constituting holy week
 * @param year The year to use for the calculation
 */
const _holyWeek = (year: number): Array<IRomcalDateItem> => {
    const dates: moment.Moment[] = Dates.holyWeek(year).map(date => moment.utc(date.toISOString()));
    const days: Array<IRomcalDateItem> = [];

    dates.forEach((date: moment.Moment) => {
        days.push({
            moment: date,
            type: Types.HOLY_WEEK,
            name: Utils.localize({
                key: "holyWeek.feria",
                day: date.format("dddd"),
            }),
            data: {
                season: {
                    key: "HOLY_WEEK",
                    value: Utils.localize({
                        key: "holyWeek.season",
                    }),
                },
                meta: {
                    liturgicalColor: LiturgicalColors.PURPLE,
                },
            },
        });
    });

    return days;
};

/**
 * Calculates the days in the season of Advent.
 *
 *  **PSALTER WEEKS & LITURGICAL COLORS - ADVENT**
 *
 *  The First Sunday of Advent always begins Week 1 of the Psalter,
 *  regardless of which week was previously observed (because the First
 *  Sunday of Advent is the first day of the liturgical year, the 4-Week
 *  cycle of the Psalter is “reset” to Week 1 on it).
 *  For example, as it works out on the liturgical calendar, the last
 *  week of Ordinary Time (i.e., the Solemnity of Christ the King, which
 *  is the last Sunday of Ordinary Time, and the following Monday through
 *  Saturday afternoon) uses Week 2 of the Psalter. Nevertheless, when
 *  the First Sunday of Advent arrives, one does not start using Week 3,
 *  but rather Week 1 of the Psalter.
 *
 *   *The proper color of the Advent is purple.*
 *
 * @param year The year to use for the calculation
 */
const advent = (year: number): Array<IRomcalDateItem> => {
    let dateItemsWithoutKeyAndSource: Array<IRomcalDateItem> = [];
    const daysOfAdvent: moment.Moment[] = Dates.daysOfAdvent(year).map(date => moment.utc(date.toISOString()));

    daysOfAdvent.forEach((value, i) => {
        dateItemsWithoutKeyAndSource.push({
            moment: value,
            type: Utils.getTypeByDayOfWeek(value.day()),
            name: Utils.localize({
                key: value.day() === 0 ? "advent.sunday" : "advent.feria",
                day: value.format("dddd"),
                week: Math.floor(i / 7) + 1,
            }),
            data: {
                season: {
                    key: "ADVENT",
                    value: Utils.localize({
                        key: "advent.season",
                    }),
                },
                meta: {
                    // The proper color of the Third Sunday of Advent is rose. Purple may also be used on these Sundays.
                    liturgicalColor:
                        Math.floor(i / 7) === 2 && value.day() === 0 ? LiturgicalColors.ROSE : LiturgicalColors.PURPLE,
                },
            },
        });
    });

    // Sort dates according to their moment objects in ascending order
    dateItemsWithoutKeyAndSource = _.sortBy(dateItemsWithoutKeyAndSource, item => item.moment.valueOf());

    const romcalDateItems: Array<IRomcalDateItem> = [];
    dateItemsWithoutKeyAndSource.forEach(({ name, data, ...rest }: IRomcalDateItem, index: number) => {
        const psalterWeek = getPsalterWeek(index);
        romcalDateItems.push({
            ...rest,
            key: _.camelCase(name),
            name,
            data: {
                ...data,
                meta: {
                    ...data?.meta,
                    // Set the psalter week
                    psalterWeek: {
                        key: psalterWeek,
                        value: PsalterWeeks[psalterWeek],
                    },
                    // Set default season color if there is no color already set
                    ...(data?.meta?.liturgicalColor ?? { liturgicalColor: LiturgicalColors.PURPLE }),
                },
            },
        } as IRomcalDateItem);
    });

    return _metadata(romcalDateItems);
};

/**
 * Calculates the days in the season of Christmastide.
 *
 * **PSALTER WEEKS & LITURGICAL COLORS - CHRISTMAS SEASON**
 *
 * If Christmas is on a feria (Monday - Saturday), then the first
 * week of Christmastide will follow the Psalter week of the 4th week
 * of Advent (which is always Psalter Week 4)
 * If Christmas is on a Sunday, the Psalter week will be Week 1
 *
 * *The proper color of Christmas is white.
 *
 * @param year The year to use for the calculation
 * @param christmastideEnds The mode to calculate the end of Christmastide. See [[TChristmastideEndings]] for more information
 * @param epiphanyOnJan6 If true, Epiphany will be fixed to Jan 6 (defaults to false)
 * @param christmastideIncludesTheSeasonOfEpiphany If false, excludes the season of epiphany from being included in the season of Christmas
 */
const christmastide = (
    year: number,
    christmastideEnds: TChristmastideEndings,
    epiphanyOnJan6 = false,
    christmastideIncludesTheSeasonOfEpiphany = true,
): Array<IRomcalDateItem> => {
    const datesOfChristmastide: moment.Moment[] = Dates.christmastide(
        year,
        christmastideEnds,
        epiphanyOnJan6,
    ).map(date => moment.utc(date.toISOString()));
    const datesInTheOctaveOfChristmas: moment.Moment[] = Dates.octaveOfChristmas(year).map(date =>
        moment.utc(date.toISOString()),
    );
    const epiphany: Array<IRomcalDateItem> = _epiphany(year + 1, epiphanyOnJan6);

    let count = 0;

    const daysOfChristmasTide: Array<IRomcalDateItem> = [];
    datesOfChristmastide.forEach(day => {
        const dayOfWeek = day.day();
        count = dayOfWeek === 0 ? count + 1 : count;
        daysOfChristmasTide.push({
            moment: day,
            type: Utils.getTypeByDayOfWeek(dayOfWeek),
            name: Utils.localize({
                key: dayOfWeek === 0 ? "christmastide.sunday" : "christmastide.day",
                day: day.format("dddd"),
                count: count,
            }),
            data: {
                season: {
                    key: "CHRISTMASTIDE",
                    value: Utils.localize({
                        key: "christmastide.season",
                    }),
                },
            },
        });
    });

    const daysInTheOctaveOfChristmas: Array<IRomcalDateItem> = [];
    datesInTheOctaveOfChristmas.forEach((day, idx) => {
        daysInTheOctaveOfChristmas.push({
            moment: day,
            type: Utils.getTypeByDayOfWeek(day.day()),
            name: Utils.localize({
                key: "christmastide.octave",
                count: idx + 1,
            }),
            data: {
                season: {
                    key: "CHRISTMASTIDE",
                    value: Utils.localize({
                        key: "christmastide.season",
                    }),
                },
            },
        });
    });

    //==============================================================================
    // Override in order: solemnities, feasts, epiphany and octave of christmas
    // to days of christmas
    //==============================================================================

    // only merge the season of epiphany if the flag is true
    let combinedDaysOfChristmas: Array<IRomcalDateItem> = [];
    if (christmastideIncludesTheSeasonOfEpiphany === true) {
        combinedDaysOfChristmas = _.uniqBy(_.union(epiphany, daysInTheOctaveOfChristmas, daysOfChristmasTide), item =>
            item.moment.valueOf(),
        );
    } else {
        combinedDaysOfChristmas = _.uniqBy(_.union(daysInTheOctaveOfChristmas, daysOfChristmasTide), item =>
            item.moment.valueOf(),
        );
    }

    // Sort dates according to moment
    combinedDaysOfChristmas = _.sortBy(combinedDaysOfChristmas, item => item.moment.valueOf());

    let psalterWeekStart = 3;
    const [firstDateOfChristmasTide] = datesOfChristmastide;
    if (firstDateOfChristmasTide.day() === 0) {
        psalterWeekStart = 0;
    }

    combinedDaysOfChristmas = combinedDaysOfChristmas.map(({ name, data, ...rest }, index: number) => {
        const resolvedPsalterWeek = getPsalterWeek(index, psalterWeekStart);
        return {
            ...rest,
            key: _.camelCase(name),
            name,
            data: {
                ...data,
                meta: {
                    ...data?.meta,
                    titles: data?.meta?.titles ?? [],
                    psalterWeek: {
                        key: resolvedPsalterWeek,
                        value: PsalterWeeks[resolvedPsalterWeek],
                    },
                    // Set default season color if there is no color already set
                    ...(data?.meta?.liturgicalColor ?? { liturgicalColor: LiturgicalColors.WHITE }),
                },
            },
        } as IRomcalDateItem;
    });

    return _metadata(combinedDaysOfChristmas);
};

/**
 * Calculates the first half of ordinary time in a given liturgical year.
 *
 * **PSALTER WEEKS & LITURGICAL COLORS - EARLY ORDINARY TIME**
 *
 * The first week of Ordinary Time begins with the Monday following
 * the Feast of the Baptism of the Lord (which is the last Sunday of
 * the Christmas Season). Consequently, one starts using Week-1 of the
 * Psalter for that week. The Sunday that follows the first week of
 * Ordinary Time is the Second Sunday of Ordinary Time, so, technically
 * speaking, there is no Sunday that is called the First Sunday of
 * Ordinary Time. This makes sense if you consider the fact that
 * Ordinary Time begins on a Monday, and by the time Sunday rolls
 * around the first week of Ordinary Time has already been completed.
 * In light of all this, although the Feast of the Baptism of the Lord
 * is the last Sunday of the Christmas Season, simply for the purposes
 * of counting Sundays it is counted as the first Sunday of Ordinary Time.
 *
 * *The proper color of ordinary time is green.*
 *
 * @param year The year to use
 * @param christmastideEnds When does Christmas end. See [[TChristmastideEndings]] for more information
 * @param epiphanyOnJan6 Will Epiphany end on January the 6th (true | false)
 * @returns
 */
const earlyOrdinaryTime = (
    year: number,
    christmastideEnds: TChristmastideEndings,
    epiphanyOnJan6 = false,
): Array<IRomcalDateItem> => {
    let days: Array<IRomcalDateItem> = [];

    Dates.daysOfEarlyOrdinaryTime(year, christmastideEnds, epiphanyOnJan6)
        .map(date => moment.utc(date.toISOString()))
        .forEach((value, i) => {
            days.push({
                moment: value,
                type: value.day() === 0 ? Types.SUNDAY : Types.FERIA,
                name: Utils.localize({
                    key: value.day() === 0 ? "ordinaryTime.sunday" : "ordinaryTime.feria",
                    day: value.format("dddd"),
                    week: value.day() === 0 ? Math.floor(i / 7) + 2 : Math.floor(i / 7) + 1,
                }),
                data: {
                    season: {
                        key: "EARLY_ORDINARY_TIME",
                        value: Utils.localize({
                            key: "ordinaryTime.season",
                        }),
                    },
                },
            });
        });

    // Sort dates according to moment
    days = _.sortBy(days, v => v.moment.valueOf());

    const psalterWeekStart = 0;

    days = days.map(({ data, name, ...rest }: IRomcalDateItem, index: number) => {
        const resolvedPsalterWeek = getPsalterWeek(index, psalterWeekStart);
        return {
            ...rest,
            key: _.camelCase(name),
            name,
            data: {
                ...data,
                meta: {
                    ...data?.meta,
                    titles: data?.meta?.titles ?? [],
                    psalterWeek: {
                        key: resolvedPsalterWeek,
                        value: PsalterWeeks[resolvedPsalterWeek],
                    },
                    // Set default season color if there is no color alreayd set
                    ...(data?.meta?.liturgicalColor ?? { liturgicalColor: LiturgicalColors.GREEN }),
                },
            },
        } as IRomcalDateItem;
    });

    return _metadata(days);
};

/**
 * Calculates the latter half of ordinary time in a given liturgical year.
 *
 * **PSALTER WEEKS & LITURGICAL- LATER ORDINARY TIME**
 *
 * The second phase of Ordinary Time begins on the Monday that immediately
 * follows Pentecost Sunday (i.e., the last Sunday of the Season of Easter).
 * Note that, because the date of Easter changes from year to year, the
 * specific range of dates for the two phases in Ordinary Time likewise
 * change from year to year. In any event, the Monday of Ordinary Time
 * which immediately follows Pentecost Sunday does not “reset” to Week
 * 1 of the Psalter. Rather, it will simply be the week of the Psalter
 * corresponding to the Sunday to which the Monday belongs.
 *
 * *The proper color of Ordinary Time is green.*
 *
 * @param year
 */
const laterOrdinaryTime = (year: number): Array<IRomcalDateItem> => {
    // Keep track of the first week in later ordinary time
    // for later use
    let firstWeekOfLaterOrdinaryTime = 0;
    let days: Array<IRomcalDateItem> = [];

    Dates.daysOfLaterOrdinaryTime(year)
        .map(date => moment.utc(date.toISOString()))
        .reverse()
        .forEach((value, i) => {
            // Calculate the week of ordinary time
            // from the last sunday of the year (34th)
            const week = 34 - Math.floor(i / 7);
            firstWeekOfLaterOrdinaryTime = week;

            days.push({
                moment: value,
                type: value.day() === 0 ? Types.SUNDAY : Types.FERIA,
                name: Utils.localize({
                    key: value.day() === 0 ? "ordinaryTime.sunday" : "ordinaryTime.feria",
                    day: value.format("dddd"),
                    week: week,
                }),
                data: {
                    season: {
                        key: "LATER_ORDINARY_TIME",
                        value: Utils.localize({
                            key: "ordinaryTime.season",
                        }),
                    },
                },
            });
        });

    // Sort dates according to moment
    days = _.sortBy(days, v => v.moment.valueOf());

    let psalterWeekStart = firstWeekOfLaterOrdinaryTime % 4;
    if (psalterWeekStart === 0) {
        psalterWeekStart = 3;
    }

    days = days.map(({ data, name, ...rest }: IRomcalDateItem, index: number) => {
        const resolvedPsalterWeek = getPsalterWeek(index, psalterWeekStart);
        return {
            ...rest,
            key: _.camelCase(name),
            name,
            data: {
                ...data,
                meta: {
                    ...data?.meta,
                    titles: data?.meta?.titles ?? [],
                    psalterWeek: {
                        key: resolvedPsalterWeek,
                        value: PsalterWeeks[resolvedPsalterWeek],
                    },
                    // Set default season color if there is no color alreayd set
                    ...(data?.meta?.liturgicalColor ?? { liturgicalColor: LiturgicalColors.GREEN }),
                },
            },
        };
    });

    return _metadata(days);
};

/**
 * Calculates the days in the season of Lent
 *
 * **PSALTER WEEKS & LITURGICAL COLORS - LENT & HOLY WEEK**
 *
 * Lent begins on Ash Wednesday and therefore in the middle of a week
 * rather than on a Sunday. Regardless of which week of the Psalter is
 * being observed on the Sunday through Tuesday immediately preceding
 * Ash Wednesday, Ash Wednesday (and the Thursday through Saturday
 * afternoon following it) are designated as Week 4 of the Psalter.
 *
 * *The proper color of the Lent is purple.*
 *
 * @param year The year to use for calculation
 */
const lent = (year: number): Array<IRomcalDateItem> => {
    const daysOfLent: Array<moment.Moment> = Dates.daysOfLent(year).map(date => moment.utc(date.toISOString()));
    const sundaysOfLent: Array<moment.Moment> = Dates.sundaysOfLent(year).map(date => moment.utc(date.toISOString()));

    const ferialDays: Array<IRomcalDateItem> = [];
    const sundays: Array<IRomcalDateItem> = [];

    daysOfLent.forEach((value, i) => {
        ferialDays.push({
            moment: value,
            type: Types.FERIA,
            name: Utils.localize({
                key: i > 0 && i < 4 ? "lent.dayAfterAshWed" : "lent.feria",
                day: value.format("dddd"),
                week: Math.floor((i - 4) / 7) + 1,
            }),
            data: {
                season: {
                    key: "LENT",
                    value: Utils.localize({
                        key: "lent.season",
                    }),
                },
            },
        });
    });

    sundaysOfLent.forEach((value, i) => {
        sundays.push({
            moment: value,
            type: Types.SUNDAY,
            name: Utils.localize({
                key: "lent.sunday",
                day: value.format("dddd"),
                week: i + 1,
            }),
            data: {
                season: {
                    key: "LENT",
                    value: Utils.localize({
                        key: "lent.season",
                    }),
                },
                meta: {
                    // The proper color of the the Fourth Sunday of Lent is rose. Purple may also be used on these Sundays.
                    liturgicalColor: i === 3 ? LiturgicalColors.ROSE : LiturgicalColors.PURPLE,
                },
            },
        });
    });

    const holyWeek: Array<IRomcalDateItem> = _holyWeek(year);

    let combinedDaysOfLent: Array<IRomcalDateItem> = [];

    // Override in order: Solemnities, Holy Week and Sundays of Lent to days of Lent
    combinedDaysOfLent = _.uniqBy(_.union(holyWeek, sundays, ferialDays), v => v.moment.valueOf());

    // Sort dates according to moment
    combinedDaysOfLent = _.sortBy(combinedDaysOfLent, v => v.moment.valueOf());

    const psalterWeekStart = 4;

    combinedDaysOfLent = combinedDaysOfLent.map(({ name, data, ...rest }: IRomcalDateItem, index: number) => {
        const resolvedPsalterWeek = getPsalterWeek(index, psalterWeekStart);
        return {
            ...rest,
            name,
            key: _.camelCase(name),
            data: {
                ...data,
                meta: {
                    ...data?.meta,
                    titles: data?.meta?.titles ?? [],
                    psalterWeek: {
                        key: resolvedPsalterWeek,
                        value: PsalterWeeks[resolvedPsalterWeek],
                    },
                    // Set default season color if there is no color already set
                    ...(data?.meta?.liturgicalColor ?? { liturgicalColor: LiturgicalColors.PURPLE }),
                },
            },
        };
    });

    combinedDaysOfLent = _metadata(combinedDaysOfLent);

    return combinedDaysOfLent;
};

/**
 * Takes the last 3 days of holy week which form the 3 days of Easter Triduum.
 *
 * @param year The year to use for the calculation
 */
const easterTriduum = (year: number): Array<IRomcalDateItem> => _holyWeek(year).slice(-3);

/**
 * Calculates the season of Easter.
 *
 * **PSALTER WEEKS & LITURGICAL COLOR - EASTER**
 *
 * The first eight days of the Easter Season make up the octave of Easter
 * and are celebrated as Solemnities of the Lord.
 * During this time, Easter Octave readings are used in favour of the
 * standard psalter readings.
 * The psalter is resumed at week 2 on the Monday following Divine
 * Mercy Sunday
 *
 * *The proper color of Easter is white*
 *
 * @param year The year to use for the calculation
 */
const eastertide = (year: number): Array<IRomcalDateItem> => {
    const weekdaysOfEaster = Dates.daysOfEaster(year).map(date => moment.utc(date.toISOString()));
    const sundaysOfEaster = Dates.sundaysOfEaster(year).map(date => moment.utc(date.toISOString()));

    const days: Array<IRomcalDateItem> = [];
    weekdaysOfEaster.forEach((value, i) => {
        days.push({
            moment: value,
            type: i > 0 && i < 7 ? Types.SOLEMNITY : Types.FERIA,
            name: Utils.localize({
                key: i > 0 && i < 7 ? "eastertide.octave" : "eastertide.feria",
                day: value.format("dddd"),
                week: Math.floor(i / 7) + 1,
            }),
            data: {
                season: {
                    key: "EASTER",
                    value: Utils.localize({
                        key: "eastertide.season",
                    }),
                },
            },
        });
    });

    const sundays: Array<IRomcalDateItem> = [];
    sundaysOfEaster.forEach((value, i) => {
        sundays.push({
            moment: value,
            type: Types.SUNDAY,
            name: Utils.localize({
                key: "eastertide.sunday",
                day: value.format("dddd"),
                week: i + 1,
            }),
            data: {
                season: {
                    key: "EASTER",
                    value: Utils.localize({
                        key: "eastertide.season",
                    }),
                },
            },
        });
    });

    let combinedDaysOfEaster: Array<IRomcalDateItem> = [];

    // Insert Solemnities and Sundays of Easter to days of Easter
    // combinedDaysOfEaster = _.uniqBy(_.union(sundays, days), v => v.moment.valueOf());
    combinedDaysOfEaster = days.map(day => {
        const match = sundays.find(sunday => sunday.moment.valueOf() === day.moment.valueOf());
        return !isNil(match) ? match : day;
    });

    // Sort dates according to moment
    combinedDaysOfEaster = _.sortBy(days, v => v.moment.valueOf());

    const psalterWeekStart = 2;

    combinedDaysOfEaster = combinedDaysOfEaster.map(({ name, data, ...rest }: IRomcalDateItem, index: number) => {
        let resolvedPsalterWeek: number;
        let psalterWeek: TPsalterWeek;
        if (index < 8) {
            psalterWeek = {
                key: 4,
                value: PsalterWeeks[4],
            };
        } else {
            resolvedPsalterWeek = getPsalterWeek(index, psalterWeekStart);
            psalterWeek = {
                key: resolvedPsalterWeek,
                value: PsalterWeeks[resolvedPsalterWeek],
            };
        }

        const dateItem: IRomcalDateItem = {
            ...rest,
            name,
            key: _.camelCase(name),
            data: {
                ...data,
                meta: {
                    ...data?.meta,
                    titles: data?.meta?.titles ?? [],
                    psalterWeek,
                    // Set default season color if there is no color already set
                    ...(data?.meta?.liturgicalColor ?? { liturgicalColor: LiturgicalColors.WHITE }),
                },
            },
        };

        console.log(_.camelCase(name), name, data);

        return dateItem;
    });

    combinedDaysOfEaster = _metadata(combinedDaysOfEaster);

    return combinedDaysOfEaster;
};

/**
 * Takes the days between Easter Sunday and Divine mercy sunday (inclusive) to form the easter octave
 *
 * @param year The year to use for the calculation
 */
const easterOctave = (year: number): Array<IRomcalDateItem> => _.take(eastertide(year), 8);

export { advent, christmastide, earlyOrdinaryTime, lent, easterTriduum, easterOctave, eastertide, laterOrdinaryTime };
