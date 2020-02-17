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
import "moment-recur-ts";
import { extendMoment } from "moment-range";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
extendMoment(moment as any);

import { Calendar, Dates, Types, LiturgicalSeasons, PsalterWeeks, Titles, LiturgicalColors } from "../src";
import { isObject, Dictionary, isNil } from "../src/utils/type-guards";
import { DateItem } from "../src/models/romcal-date-item";
import { extractedTypeKeys } from "../src/constants/Types";

describe("Testing calendar generation functions", () => {
    describe("When calling the calendarFor() method without a query", () => {
        const nonLeapYearDates = Calendar.calendarFor(2018);
        const leapYearDates = Calendar.calendarFor(2020);

        it("Should return an array of objects", () => {
            expect(nonLeapYearDates.every(d => isObject(d))).toBeTruthy();
            expect(leapYearDates.every(d => isObject(d))).toBeTruthy();
        });

        it("Each object should contain the keys type, name, moment, source and data", () => {
            const requiredKeys = ["type", "name", "moment", "source", "data"];
            nonLeapYearDates.every(d => _.has(d, requiredKeys));
            leapYearDates.every(d => _.has(d, requiredKeys));
        });

        it("Array should be 365 days long on non-leap years", () => {
            const grouped: Dictionary<DateItem[]> = _.groupBy(nonLeapYearDates, item => item.moment.valueOf());
            expect(Object.keys(grouped)).toEqual(365);
        });

        it("Array should be 366 days long on leap years", () => {
            const grouped: Dictionary<DateItem[]> = _.groupBy(leapYearDates, item => item.moment.valueOf());
            expect(Object.keys(grouped)).toEqual(366);
        });
    });

    describe("Testing calendar functions", () => {
        describe("When requesting the liturgical year", () => {
            const year = moment.utc().year();
            const start = Dates.firstSundayOfAdvent(year);
            const end = Dates.firstSundayOfAdvent(year + 1).subtract(1, "days");
            const [firstDate, , lastDate] = Calendar.calendarFor({
                year: year,
                type: "liturgical",
            });

            it("Should start on the 1st Sunday of Advent and end on Christ the King", () => {
                expect(firstDate.moment.isSame(start)).toEqual(true);
                expect(lastDate.moment.isSame(end)).toEqual(true);
            });
        });

        describe("When requesting the calendar year", () => {
            const [firstDate, , lastDate] = Calendar.calendarFor();
            it("Should start on Jan 1 and end on Dec 31", () => {
                expect(firstDate.moment.month()).toEqual(0);
                expect(firstDate.moment.date()).toEqual(1);
                expect(lastDate.moment.month()).toEqual(11);
                expect(lastDate.moment.date()).toEqual(31);
            });
        });
    });

    describe("Testing query filters", () => {
        describe("For filtering by day of week", () => {
            it("Results should match the day of week requested", () => {
                for (let i = 0, il = 7; i < il; i++) {
                    const dates = Calendar.calendarFor({ query: { day: i } }) as DateItem[];
                    dates.forEach(d => expect(d.moment.day()).toEqual(i));
                }
            });
        });

        describe("For filtering by month of year", () => {
            it("Results should match the month of year requested", () => {
                for (let i = 0, il = 12; i < il; i++) {
                    const dates = Calendar.calendarFor({ query: { month: i } }) as DateItem[];
                    dates.forEach(d => expect(d.moment.month()).toEqual(i));
                }
            });
        });

        describe("For filtering by groups", () => {
            it("Should group dates by days in a week", () => {
                expect(
                    Object.keys(
                        Calendar.calendarFor({
                            query: { group: "days" },
                        }),
                    ),
                ).toEqual([0, 1, 2, 3, 4, 5, 6]);
            });

            it("Should group dates by months in the year", () => {
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

            it("Should group days of week by the months they belong to", () => {
                const calendar = Calendar.calendarFor({
                    query: {
                        group: "daysByMonth",
                    },
                }) as Dictionary<DateItem[]>[];
                Object.values(calendar).forEach((monthGroup: Dictionary<DateItem[]>, monthIndex: number) => {
                    Object.values(monthGroup).forEach((dateItems: DateItem[], dayIndex: number) => {
                        dateItems.forEach(dateItem => {
                            expect(dateItem.moment.day()).toEqual(dayIndex);
                            expect(dateItem.moment.month()).toEqual(monthIndex);
                        });
                    });
                });
            });

            it("Should group weeks of year by the months they belong to", () => {
                const calendar = Calendar.calendarFor({
                    query: {
                        group: "weeksByMonth",
                    },
                }) as Dictionary<DateItem[]>[];

                Object.values(calendar).forEach((monthGroup: Dictionary<DateItem[]>, monthIndex: number) => {
                    Object.values(monthGroup).forEach((dateItems: DateItem[], weekIndex: number) => {
                        dateItems.forEach(dateItem => {
                            expect(dateItem.moment.month()).toEqual(monthIndex);
                            expect(dateItem.data.calendar.week).toEqual(weekIndex);
                        });
                    });
                });
            });

            it("Should group dates by their respective liturgical cycles", () => {
                expect(
                    Object.keys(
                        Calendar.calendarFor({
                            year: 2015,
                            query: { group: "cycles" },
                        }) as Dictionary<DateItem[]>,
                    ),
                ).toEqual(["Year B", "Year C"]);

                expect(Object.keys(Calendar.queryFor(Calendar.calendarFor({ year: 2015 }), { group: "cycles" }))).toEqual(["Year B", "Year C"]);
            });

            it("Should group dates by their celebration types", () => {
                expect(
                    Object.keys(
                        Calendar.calendarFor({
                            query: { group: "types" },
                        }) as Dictionary<DateItem[]>,
                    ),
                ).toContain(extractedTypeKeys);

                expect(Object.keys(Calendar.queryFor(Calendar.calendarFor(), { group: "types" }))).toContain(extractedTypeKeys);
            });

            it("Should group dates by their liturgical seasons", () => {
                expect(
                    Object.keys(
                        Calendar.calendarFor({
                            query: { group: "liturgicalSeasons" },
                        }),
                    ),
                ).toContain(Object.values(LiturgicalSeasons));

                expect(Object.keys(Calendar.queryFor(Calendar.calendarFor(), { group: "liturgicalSeasons" }))).toContain(Object.values(LiturgicalSeasons));
            });

            it("Should group dates by their psalter weeks", () => {
                expect(
                    Object.keys(
                        Calendar.calendarFor({
                            query: { group: "psalterWeeks" },
                        }),
                    ),
                ).toContain(PsalterWeeks);

                expect(Object.keys(Calendar.queryFor(Calendar.calendarFor(), { group: "psalterWeeks" }))).toContain(PsalterWeeks);
            });
        });

        describe("For filtering by titles", () => {
            (Calendar.calendarFor({ query: { title: Titles.FEAST_OF_THE_LORD } }) as DateItem[]).forEach((d: DateItem) =>
                expect(d.data.meta.titles?.includes(Titles.FEAST_OF_THE_LORD)).toBeTruthy(),
            );
            (Calendar.calendarFor({ query: { title: Titles.PATRON_OF_EUROPE } }) as DateItem[]).forEach((d: DateItem) =>
                expect(d.data.meta.titles?.includes(Titles.PATRON_OF_EUROPE)).toBeTruthy(),
            );
        });

        describe("Testing advanced filters", () => {
            it("The proper color of a Memorial or a Feast is white except for martyrs in which case it is red", () => {
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

            it("The proper color for the Chair of Peter and the Conversion of St. Paul is white, although both St. Peter and St. Paul were martyrs.", () => {
                const calendar = Calendar.calendarFor({ query: { group: "types" } }) as Dictionary<DateItem[]>;
                _.get(calendar, Types.FEAST).forEach(d => {
                    if (d.key === "chairOfSaintPeter" || d.key === "conversionOfSaintPaulApostle") {
                        expect(d.data.meta.liturgicalColor).toEqual(LiturgicalColors.WHITE);
                    }
                });
            });
        });
    });
});
