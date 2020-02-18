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

import _ from "lodash";
import moment from "moment";

import { Calendar, Dates, Types, LiturgicalSeasons, PsalterWeeks, Titles, LiturgicalColors } from "../src";
import { isObject, Dictionary, isNil } from "../src/utils/type-guards";
import { DateItem } from "../src/models/romcal-date-item";
import { extractedTypeKeys } from "../src/constants/Types";
import { hasKey, getValueByKey } from "../src/utils/object";
import { dayJsToMomentJs } from "../src/utils/dates";

describe("Testing calendar generation functions", () => {
    describe("When calling the calendarFor() method without a query", () => {
        const nonLeapYearDates = Calendar.calendarFor(2018);
        const leapYearDates = Calendar.calendarFor(2020);

        test("Should return an array of objects", () => {
            expect(nonLeapYearDates.every(d => isObject(d))).toBeTruthy();
            expect(leapYearDates.every(d => isObject(d))).toBeTruthy();
        });

        test("Each object should contain the keys type, name, moment, source and data", () => {
            const requiredKeys = ["type", "name", "moment", "source", "data"];
            nonLeapYearDates.every(d => hasKey(d, requiredKeys));
            leapYearDates.every(d => hasKey(d, requiredKeys));
        });

        test("Array should be 365 days long on non-leap years", () => {
            const grouped: Dictionary<DateItem[]> = _.groupBy(nonLeapYearDates, item => item.moment.valueOf());
            expect(Object.keys(grouped)).toEqual(365);
        });

        test("Array should be 366 days long on leap years", () => {
            const grouped: Dictionary<DateItem[]> = _.groupBy(leapYearDates, item => item.moment.valueOf());
            expect(Object.keys(grouped)).toEqual(366);
        });
    });

    describe("Testing calendar functions", () => {
        describe("When requesting the liturgical year", () => {
            const year = moment.utc().year();
            const start = Dates.firstSundayOfAdvent(year);
            const end = Dates.firstSundayOfAdvent(year + 1).subtract(1, "day");
            const calendar = Calendar.calendarFor({
                year: year,
                type: "liturgical",
            });

            test("Should start on the 1st Sunday of Advent and end on Christ the King", () => {
                expect(calendar[0].moment.isSame(dayJsToMomentJs(start))).toEqual(true);
                expect(calendar[calendar.length - 1].moment.isSame(dayJsToMomentJs(end))).toEqual(true);
            });
        });

        describe("When requesting the calendar year", () => {
            const [firstDate, , lastDate] = Calendar.calendarFor();
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
                    const dates = Calendar.calendarFor({ query: { day: i } });
                    dates.forEach(d => expect(d.moment.day()).toEqual(i));
                }
            });
        });

        describe("For filtering by month of year", () => {
            test("Results should match the month of year requested", () => {
                for (let i = 0, il = 12; i < il; i++) {
                    const dates = Calendar.calendarFor({ query: { month: i } });
                    dates.forEach(d => expect(d.moment.month()).toEqual(i));
                }
            });
        });

        describe("For filtering by groups", () => {
            test("Should group dates by days in a week", () => {
                const calendar = Calendar.calendarFor({
                    query: { group: "days" },
                });
                expect(Object.keys(calendar)).toEqual([0, 1, 2, 3, 4, 5, 6]);
            });

            test("Should group dates by months in the year", () => {
                expect(
                    Object.keys(
                        Calendar.calendarFor({
                            query: {
                                group: "months",
                            },
                        }),
                    ),
                ).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
            });

            test("Should group days of week by the months they belong to", () => {
                const calendar = Calendar.calendarFor({
                    query: {
                        group: "daysByMonth",
                    },
                });
                Object.values(calendar).forEach((monthGroup: Dictionary<DateItem[]>, monthIndex: number) => {
                    Object.values(monthGroup).forEach((dateItems: DateItem[], dayIndex: number) => {
                        dateItems.forEach(dateItem => {
                            expect(dateItem.moment.day()).toEqual(dayIndex);
                            expect(dateItem.moment.month()).toEqual(monthIndex);
                        });
                    });
                });
            });

            test("Should group weeks of year by the months they belong to", () => {
                const calendar = Calendar.calendarFor({
                    query: {
                        group: "weeksByMonth",
                    },
                });

                Object.values(calendar).forEach((monthGroup: Dictionary<DateItem[]>, monthIndex: number) => {
                    Object.values(monthGroup).forEach((dateItems: DateItem[], weekIndex: number) => {
                        dateItems.forEach(dateItem => {
                            expect(dateItem.moment.month()).toEqual(monthIndex);
                            expect(dateItem.data.calendar.week).toEqual(weekIndex);
                        });
                    });
                });
            });

            test("Should group dates by their respective liturgical cycles", () => {
                const dates = Calendar.queryFor(Calendar.calendarFor({ year: 2015 }), { group: "cycles" })
                expect(Object.keys(dates)).toEqual(["Year B", "Year C"]);
            });

            test("Should group dates by their celebration types", () => {
                expect(Object.keys(Calendar.queryFor(Calendar.calendarFor(), { group: "types" }))).toContain(
                    extractedTypeKeys,
                );
            });

            test("Should group dates by their liturgical seasons", () => {
                expect(
                    Object.keys(
                        Calendar.calendarFor({
                            query: { group: "liturgicalSeasons" },
                        }),
                    ),
                ).toContain(Object.values(LiturgicalSeasons));

                expect(
                    Object.keys(Calendar.queryFor(Calendar.calendarFor(), { group: "liturgicalSeasons" })),
                ).toContain(Object.values(LiturgicalSeasons));
            });

            test("Should group dates by their psalter weeks", () => {
                expect(
                    Object.keys(
                        Calendar.calendarFor({
                            query: { group: "psalterWeeks" },
                        }),
                    ),
                ).toContain(PsalterWeeks);

                expect(Object.keys(Calendar.queryFor(Calendar.calendarFor(), { group: "psalterWeeks" }))).toContain(
                    PsalterWeeks,
                );
            });
        });

        describe("For filtering by titles", () => {
            (Calendar.calendarFor({
                query: { title: Titles.FEAST_OF_THE_LORD },
            }) as DateItem[]).forEach((d: DateItem) =>
                expect(d.data.meta.titles?.includes(Titles.FEAST_OF_THE_LORD)).toBeTruthy(),
            );
            (Calendar.calendarFor({ query: { title: Titles.PATRON_OF_EUROPE } }) as DateItem[]).forEach((d: DateItem) =>
                expect(d.data.meta.titles?.includes(Titles.PATRON_OF_EUROPE)).toBeTruthy(),
            );
        });

        describe("Testing advanced filters", () => {
            test("The proper color of a Memorial or a Feast is white except for martyrs in which case it is red", () => {
                const calendar = Calendar.calendarFor({ query: { group: "types" } }) as Dictionary<DateItem[]>;
                _.get(calendar, Types.FEAST).forEach(d => {
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
                _.get(calendar, Types.MEMORIAL).forEach(d => {
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

            test.only("The proper color for the Chair of Peter and the Conversion of St. Paul is white, although both St. Peter and St. Paul were martyrs.", () => {
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
