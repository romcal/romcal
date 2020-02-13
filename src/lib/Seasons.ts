import _ from "lodash";

import * as Dates from "./Dates";
import * as Utils from "./Utils";

import { LiturgicalSeasons, PsalterWeeks, LiturgicalColors, Types } from "../constants";
import { IRomcalDateItem } from "../models/romcal-date-item";
import { ChristmastideEndings } from "../utils/type-guards";
import moment from "moment";
import { hasKey } from "../utils/object";
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
    return _.map(items, ({ moment, ...rest }: IRomcalDateItem) => {
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
const _epiphany = (year: number, epiphanyOnJan6: boolean = false) => {
    let before: Array<moment.Moment> = Dates.daysBeforeEpiphany(year, epiphanyOnJan6);
    let after: Array<moment.Moment> = Dates.daysAfterEpiphany(year, epiphanyOnJan6);

    let days: Array<IRomcalDateItem> = [];
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
                    key: LiturgicalSeasons.CHRISTMASTIDE,
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
                    key: LiturgicalSeasons.CHRISTMASTIDE,
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
const _holyWeek = (year: number) => {
    let dates: moment.Moment[] = Dates.holyWeek(year);
    let days: Array<IRomcalDateItem> = [];

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
                    key: LiturgicalSeasons.HOLY_WEEK,
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
const advent = (year: number) => {
    let dateItemsWithoutKeyAndSource: Array<IRomcalDateItem> = [];
    let daysOfAdvent: moment.Moment[] = Dates.daysOfAdvent(year);

    daysOfAdvent.forEach((value, i) => {
        dateItemsWithoutKeyAndSource.push({
            moment: value,
            type: Utils.getTypeByDayOfWeek(value.day()),
            name: Utils.localize({
                key: _.eq(value.day(), 0) ? "advent.sunday" : "advent.feria",
                day: value.format("dddd"),
                week: Math.floor(i / 7) + 1,
            }),
            data: {
                season: {
                    key: LiturgicalSeasons.ADVENT,
                    value: Utils.localize({
                        key: "advent.season",
                    }),
                },
                meta: {
                    // The proper color of the Third Sunday of Advent is rose. Purple may also be used on these Sundays.
                    liturgicalColor: _.eq(Math.floor(i / 7), 2) && _.eq(value.day(), 0) ? LiturgicalColors.ROSE : LiturgicalColors.PURPLE,
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
 * @param christmastideEnds The mode to calculate the end of Christmastide. See [[ChristmastideEndings]] for more information
 * @param epiphanyOnJan6 If true, Epiphany will be fixed to Jan 6 (defaults to false)
 * @param christmastideIncludesTheSeasonOfEpiphany If false, excludes the season of epiphany from being included in the season of Christmas
 */
const christmastide = (year: number, christmastideEnds: ChristmastideEndings, epiphanyOnJan6 = false, christmastideIncludesTheSeasonOfEpiphany = true) => {
    let datesOfChristmastide: moment.Moment[] = Dates.christmastide(year, christmastideEnds, epiphanyOnJan6);
    let datesInTheOctaveOfChristmas: moment.Moment[] = Dates.octaveOfChristmas(year);
    let epiphany: Array<IRomcalDateItem> = _epiphany(year + 1, epiphanyOnJan6);

    let count = 0;

    let daysOfChristmasTide: Array<IRomcalDateItem> = [];
    datesOfChristmastide.forEach(day => {
        let dayOfWeek = day.day();
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
                    key: LiturgicalSeasons.CHRISTMASTIDE,
                    value: Utils.localize({
                        key: "christmastide.season",
                    }),
                },
            },
        });
    });

    let daysInTheOctaveOfChristmas: Array<IRomcalDateItem> = [];
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
                    key: LiturgicalSeasons.CHRISTMASTIDE,
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
        combinedDaysOfChristmas = _.uniqBy(_.union(epiphany, daysInTheOctaveOfChristmas, daysOfChristmasTide), item => item.moment.valueOf());
    } else {
        combinedDaysOfChristmas = _.uniqBy(_.union(daysInTheOctaveOfChristmas, daysOfChristmasTide), item => item.moment.valueOf());
    }

    // Sort dates according to moment
    combinedDaysOfChristmas = _.sortBy(combinedDaysOfChristmas, item => item.moment.valueOf());

    let psalterWeekStart = 3;
    const [firstDateOfChristmasTide] = datesOfChristmastide;
    if (firstDateOfChristmasTide.day() === 0) {
        psalterWeekStart = 0;
    }

    combinedDaysOfChristmas = _.map(combinedDaysOfChristmas, ({ name, data, ...rest }, index: number) => {
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
 * @param christmastideEnds When does Christmas end. See [[ChristmastideEndings]] for more information
 * @param epiphanyOnJan6 Will Epiphany end on January the 6th (true | false)
 * @returns
 */
const earlyOrdinaryTime = (year: number, christmastideEnds: ChristmastideEndings, epiphanyOnJan6 = false): Array<IRomcalDateItem> => {
    let days: Array<IRomcalDateItem> = [];

    Dates.daysOfEarlyOrdinaryTime(year, christmastideEnds, epiphanyOnJan6).forEach((value, i) => {
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
                    key: LiturgicalSeasons.EARLY_ORDINARY_TIME,
                    value: Utils.localize({
                        key: "ordinaryTime.season",
                    }),
                },
            },
        });
    });

    // Sort dates according to moment
    days = _.sortBy(days, v => v.moment.valueOf());

    let psalterWeekStart = 0;

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
const laterOrdinaryTime = (year: number) => {
    // Keep track of the first week in later ordinary time
    // for later use
    let firstWeekOfLaterOrdinaryTime = 0;
    let days: Array<IRomcalDateItem> = [];

    Dates.daysOfLaterOrdinaryTime(year)
        .reverse()
        .forEach((value, i) => {
            // Calculate the week of ordinary time
            // from the last sunday of the year (34th)
            let week = 34 - Math.floor(i / 7);
            firstWeekOfLaterOrdinaryTime = week;

            days.push({
                moment: value,
                type: _.eq(value.day(), 0) ? Types.SUNDAY : Types.FERIA,
                name: Utils.localize({
                    key: _.eq(value.day(), 0) ? "ordinaryTime.sunday" : "ordinaryTime.feria",
                    day: value.format("dddd"),
                    week: week,
                }),
                data: {
                    season: {
                        key: LiturgicalSeasons.LATER_ORDINARY_TIME,
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
    if (_.eq(psalterWeekStart, 0)) {
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
const lent = (year: number) => {
    let daysOfLent: Array<moment.Moment> = Dates.daysOfLent(year);
    let sundaysOfLent: Array<moment.Moment> = Dates.sundaysOfLent(year);

    let ferialDays: Array<IRomcalDateItem> = [];
    let sundays: Array<IRomcalDateItem> = [];

    daysOfLent.forEach((value, i) => {
        ferialDays.push({
            moment: value,
            type: Types.FERIA,
            name: Utils.localize({
                key: _.gt(i, 0) && _.lt(i, 4) ? "lent.day_after_ash_wed" : "lent.feria",
                day: value.format("dddd"),
                week: Math.floor((i - 4) / 7) + 1,
            }),
            data: {
                season: {
                    key: LiturgicalSeasons.LENT,
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
                    key: LiturgicalSeasons.LENT,
                    value: Utils.localize({
                        key: "lent.season",
                    }),
                },
                meta: {
                    // The proper color of the the Fourth Sunday of Lent is rose. Purple may also be used on these Sundays.
                    liturgicalColor: _.eq(i, 3) ? LiturgicalColors.ROSE : LiturgicalColors.PURPLE,
                },
            },
        });
    });

    let holyWeek: Array<IRomcalDateItem> = _holyWeek(year);

    let combinedDaysOfLent: Array<IRomcalDateItem> = [];

    // Override in order: Solemnities, Holy Week and Sundays of Lent to days of Lent
    combinedDaysOfLent = _.uniqBy(_.union(holyWeek, sundays, ferialDays), v => v.moment.valueOf());

    // Sort dates according to moment
    combinedDaysOfLent = _.sortBy(combinedDaysOfLent, v => v.moment.valueOf());

    let psalterWeekStart = 4;

    combinedDaysOfLent = combinedDaysOfLent.map(({ name, data, ...rest }: IRomcalDateItem, index: number) => {
        const resolvedPsalterWeek = getPsalterWeek(index, psalterWeekStart);
        return {
            ...rest,
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

    // _.each( days, function( v ) {
    //   console.log(
    //     v.moment.format('ddd, DD MMM YY'),
    //     '|', _.padRight( v.data.meta.liturgicalColor.key, 6 ),
    //     '|', _.padRight( v.data.season.value, 9 ),
    //     '|', _.padRight( v.data.meta.psalterWeek.value, 8 ),
    //     '|', _.padRight( v.type, 13 ),
    //     '|', _.padRight( v.data.calendar.week, 2 ),
    //     '|', _.padRight( v.data.calendar.day, 3 ),
    //     '|', v.name
    //   );
    // });

    return combinedDaysOfLent;
};

/**
 * Takes the last 3 days of holy week which form the 3 days of Easter Triduum.
 *
 * @param year The year to use for the calculation
 */
const easterTriduum = (year: number) => _.takeRight(_holyWeek(year), 3);

/**
 * Takes the days between Easter Sunday and Divine mercy sunday (inclusive) to form the easter octave
 *
 * @param year The year to use for the calculation
 */
const easterOctave = (year: number) => _.take(eastertide(year), 8);

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
const eastertide = (year: number) => {
    let weekdaysOfEaster = Dates.daysOfEaster(year);
    let sundaysOfEaster = Dates.sundaysOfEaster(year);

    let days: Array<IRomcalDateItem> = [];
    weekdaysOfEaster.forEach((value, i) => {
        days.push({
            moment: value,
            type: _.gt(i, 0) && _.lt(i, 7) ? Types.SOLEMNITY : Types.FERIA,
            name: Utils.localize({
                key: _.gt(i, 0) && _.lt(i, 7) ? "eastertide.octave" : "eastertide.feria",
                day: value.format("dddd"),
                week: Math.floor(i / 7) + 1,
            }),
            data: {
                season: {
                    key: LiturgicalSeasons.EASTER,
                    value: Utils.localize({
                        key: "eastertide.season",
                    }),
                },
            },
        });
    });

    let sundays: Array<IRomcalDateItem> = [];
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
                    key: LiturgicalSeasons.EASTER,
                    value: Utils.localize({
                        key: "eastertide.season",
                    }),
                },
            },
        });
    });

    let combinedDaysOfEaster: Array<IRomcalDateItem> = [];

    // Insert Solemnities and Sundays of Lent to days of Easter
    combinedDaysOfEaster = _.uniqBy(_.union(sundays, days), v => v.moment.valueOf());

    // Sort dates according to moment
    combinedDaysOfEaster = _.sortBy(days, v => v.moment.valueOf());

    let psalterWeekStart = 1;

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

        return {
            ...rest,
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
    });

    combinedDaysOfEaster = _metadata(combinedDaysOfEaster);

    // _.each( days, function( v ) {
    //   console.log(
    //     v.moment.format('ddd, DD MMM YY'),
    //     '|', _.padRight( v.data.meta.liturgicalColor.key, 6 ),
    //     '|', _.padRight( v.data.season.value, 9 ),
    //     '|', _.padRight( v.data.meta.psalterWeek.value, 8 ),
    //     '|', _.padRight( v.type, 13 ),
    //     '|', v.name
    //   );
    // });

    return combinedDaysOfEaster;
};

export { advent, christmastide, earlyOrdinaryTime, lent, easterTriduum, easterOctave, eastertide, laterOrdinaryTime };
