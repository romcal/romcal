/*
    The MIT License (MIT)

    Copyright (c) 2014 Pereira, Julian Matthew

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/

import { groupBy, get } from "lodash";
import moment from "moment";

import { Calendar, Dates, Types, LiturgicalSeasons, PsalterWeeks, Titles, LiturgicalColors } from "..";
import { Dictionary, isNil } from "../utils/type-guards";
import { DateItem, isDateItem } from "../models/romcal-date-item";
import { hasKey, getValueByKey } from "../utils/object";
import { dayJsToMomentJs } from "../utils/dates";
import { TTypes } from "../constants/Types";

describe("Testing calendar generation functions", () => {
    test("Each item should have a key", () => {
        const calendar = Calendar.calendarFor();
        const result = calendar.every(value => hasKey(value, "key"));
        expect(result).toBeTruthy();
    });

    describe("When calling the calendarFor() method without a query", () => {
        let nonLeapYearDates: DateItem[] = [];
        let leapYearDates: DateItem[] = [];

        beforeEach(() => {
            nonLeapYearDates = Calendar.calendarFor(2018);
            leapYearDates = Calendar.calendarFor(2020);
        });

        test("Should return an array of DateItem objects", () => {
            expect(nonLeapYearDates.every(d => isDateItem(d))).toBeTruthy();
            expect(leapYearDates.every(d => isDateItem(d))).toBeTruthy();
        });

        test("Each object should contain the keys type, name, moment, source and data", () => {
            const requiredKeys = ["type", "name", "moment", "source", "data"];
            nonLeapYearDates.every(d => hasKey(d, requiredKeys));
            leapYearDates.every(d => hasKey(d, requiredKeys));
        });

        test("Array should be 365 days long on non-leap years", () => {
            const grouped: Dictionary<DateItem[]> = groupBy(nonLeapYearDates, item => item.moment.valueOf());
            expect(Object.keys(grouped)).toHaveLength(365);
        });

        test("Array should be 366 days long on leap years", () => {
            const grouped: Dictionary<DateItem[]> = groupBy(leapYearDates, item => item.moment.valueOf());
            expect(Object.keys(grouped)).toHaveLength(366);
        });

        afterEach(() => {
            leapYearDates = [];
            nonLeapYearDates = [];
        });
    });

    describe("Testing calendar functions", () => {
        describe("When requesting the liturgical year", () => {
            const year = moment.utc().year();
            const start = Dates.firstSundayOfAdvent(year - 1);
            const end = Dates.firstSundayOfAdvent(year).subtract(1, "day");
            const calendar = Calendar.calendarFor({
                year: year,
                type: "liturgical",
            });
            test("Should start on the 1st Sunday of Advent and end on Christ the King", () => {
                expect(calendar[0].moment.isSame(dayJsToMomentJs(start))).toBeTrue();
                expect(calendar[calendar.length - 1].moment.isSame(dayJsToMomentJs(end))).toBeTrue();
            });
        });

        describe("When requesting the calendar year", () => {
            const calendar = Calendar.calendarFor();
            const [firstDate] = calendar;
            const [lastDate] = calendar.reverse();
            test("Should start on Jan 1 and end on Dec 31", () => {
                expect(firstDate.moment.month()).toEqual(0);
                expect(firstDate.moment.date()).toEqual(1);
                expect(lastDate.moment.month()).toEqual(11);
                expect(lastDate.moment.date()).toEqual(31);
            });
        });
    });

    describe("Testing query filters", () => {
        describe("For filtering by day of week", () => {
            test("Results should match the day of week requested", () => {
                for (let i = 0, il = 7; i < il; i++) {
                    const dates = Calendar.queryFor(Calendar.calendarFor(), { day: i });
                    dates.forEach(d => expect(d.moment.day()).toEqual(i));
                }
            });
        });

        describe("For filtering by month of year", () => {
            test("Results should match the month of year requested", () => {
                for (let i = 0, il = 12; i < il; i++) {
                    const dates = Calendar.queryFor(Calendar.calendarFor(), { month: i });
                    dates.forEach(d => expect(d.moment.month()).toEqual(i));
                }
            });
        });

        describe("For filtering by groups", () => {
            test("Should group dates by days in a week", () => {
                const calendar = Calendar.calendarFor({
                    query: { group: "days" },
                });
                expect(Object.keys(calendar)).toEqual(["0", "1", "2", "3", "4", "5", "6"]);
            });

            test("Should group dates by months in the year", () => {
                expect(
                    Object.keys(
                        Calendar.queryFor(Calendar.calendarFor(), {
                            group: "months",
                        }),
                    ),
                ).toEqual(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]);
            });

            test("Should group days of week by the months they belong to", () => {
                const dates = Calendar.queryFor(Calendar.calendarFor(), {
                    group: "daysByMonth",
                });
                Object.values(dates).forEach((monthGroup: Dictionary<DateItem[]>, monthIndex: number) => {
                    Object.values(monthGroup).forEach((dateItems: DateItem[], dayIndex: number) => {
                        dateItems.forEach(dateItem => {
                            expect(dateItem.moment.day()).toEqual(dayIndex);
                            expect(dateItem.moment.month()).toEqual(monthIndex);
                        });
                    });
                });
            });

            test("Should group weeks of year by the months they belong to", () => {
                const calendar = Calendar.queryFor(Calendar.calendarFor(), {
                    group: "weeksByMonth",
                });

                // First level is months
                Object.keys(calendar).forEach(monthKey => {
                    const monthGroup = calendar[Number(monthKey)];
                    // Second level is weeks
                    Object.keys(monthGroup).forEach(weekKey => {
                        const weekGroup = monthGroup[Number(weekKey)];
                        weekGroup.forEach(dateItem => {
                            expect(dateItem.moment.month()).toEqual(Number(monthKey));
                            expect(dateItem.data.calendar.week).toEqual(Number(weekKey));
                        });
                    });
                });
            });

            test("Should group dates by their respective liturgical cycles", () => {
                const calendar = Calendar.calendarFor({ year: 2015 });
                const dates = Calendar.queryFor(calendar, { group: "cycles" });
                expect(Object.keys(dates)).toEqual(["Year B", "Year C"]);
            });

            test("Should group dates by their celebration types", () => {
                const typeKeys = Object.keys(Calendar.queryFor(Calendar.calendarFor(), { group: "types" }));
                expect(typeKeys.every(typeKey => Object.keys(Types).includes(typeKey as TTypes))).toBeTrue();
            });

            test("Should group dates by their liturgical seasons", () => {
                const liturgicalSeasonGroupings = Calendar.queryFor(Calendar.calendarFor(), {
                    group: "liturgicalSeasons",
                });
                expect(
                    Object.keys(liturgicalSeasonGroupings).every(liturgicalSeasonKey =>
                        Object.keys(LiturgicalSeasons).includes(liturgicalSeasonKey),
                    ),
                ).toBeTrue();
            });

            test("Should group dates by their psalter weeks", () => {
                const psaltertWeekKeys = Object.keys(
                    Calendar.queryFor(Calendar.calendarFor(), { group: "psalterWeeks" }),
                );
                expect(psaltertWeekKeys).toStrictEqual(Object.keys(PsalterWeeks));
            });
        });

        describe("For filtering by titles", () => {
            Calendar.queryFor(Calendar.calendarFor(), {
                title: Titles.FEAST_OF_THE_LORD,
            }).forEach((d: DateItem) => expect(d.data.meta.titles?.includes(Titles.FEAST_OF_THE_LORD)).toBeTruthy());
            Calendar.queryFor(Calendar.calendarFor(), { title: Titles.PATRON_OF_EUROPE }).forEach((d: DateItem) =>
                expect(d.data.meta.titles?.includes(Titles.PATRON_OF_EUROPE)).toBeTruthy(),
            );
        });

        describe("Testing advanced filters", () => {
            test("The proper color of a Memorial or a Feast is white except for martyrs in which case it is red", () => {
                const calendar = Calendar.calendarFor({ query: { group: "types" } }) as Dictionary<DateItem[]>;
                get(calendar, Types.FEAST).forEach(d => {
                    if (d.key === "theExaltationOfTheHolyCross") {
                        expect(d.data.meta.liturgicalColor?.key).toEqual(LiturgicalColors.RED.key);
                    } else {
                        if (!isNil(d.data.meta.titles)) {
                            if (d.data.meta.titles?.includes(Titles.MARTYR)) {
                                expect(d.data.meta.liturgicalColor?.key).toEqual(LiturgicalColors.RED.key);
                            } else {
                                expect(d.data.meta.liturgicalColor?.key).toEqual(LiturgicalColors.WHITE.key);
                            }
                        } else {
                            expect(d.data.meta.liturgicalColor?.key).toEqual(LiturgicalColors.WHITE.key);
                        }
                    }
                });
                get(calendar, Types.MEMORIAL).forEach(d => {
                    if (!isNil(d.data.meta.titles)) {
                        if (d.data.meta.titles.includes(Titles.MARTYR)) {
                            expect(d.data.meta.liturgicalColor?.key).toEqual(LiturgicalColors.RED.key);
                        } else {
                            expect(d.data.meta.liturgicalColor?.key).toEqual(LiturgicalColors.WHITE.key);
                        }
                    } else {
                        expect(d.data.meta.liturgicalColor?.key).toEqual(LiturgicalColors.WHITE.key);
                    }
                });
            });

            test("The proper color for the Chair of Peter and the Conversion of St. Paul is white, although both St. Peter and St. Paul were martyrs.", () => {
                const dates = Calendar.calendarFor();
                const calendar = Calendar.queryFor(dates, { group: "types" });
                getValueByKey(calendar, Types.FEAST).forEach(d => {
                    if (d.key === "chairOfSaintPeter" || d.key === "conversionOfSaintPaulApostle") {
                        expect(d.data.meta.liturgicalColor).toEqual(LiturgicalColors.WHITE);
                    }
                });
            });
        });
    });
});
