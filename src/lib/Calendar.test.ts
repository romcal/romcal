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

import groupBy from "lodash-es/groupBy";
import get from "lodash-es/get";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import { Calendar, Dates, Types, LiturgicalSeasons, PsalterWeeks, Titles, LiturgicalColors } from "..";
import { Dictionary, isNil } from "../utils/type-guards";
import { DateItem, isDateItem } from "../models/romcal-date-item";
import { hasKey, getValueByKey } from "../utils/object";
import { TTypes } from "../constants/Types";

dayjs.extend(utc);

describe("Testing calendar generation functions", () => {
    test("Each item should have a key", async () => {
        const calendar = await Calendar.calendarFor();
        const result = calendar.every(value => hasKey(value, "key"));
        expect(result).toBeTruthy();
    });

    describe("When calling the calendarFor() method without a query", () => {
        let nonLeapYearDates: DateItem[];
        let leapYearDates: DateItem[];

        beforeEach(async () => {
            nonLeapYearDates = await Calendar.calendarFor(2018);
            leapYearDates = await Calendar.calendarFor(2020);
        });

        test("Should return an array of DateItem objects", async () => {
            expect(nonLeapYearDates.every(d => isDateItem(d))).toBeTruthy();
            expect(leapYearDates.every(d => isDateItem(d))).toBeTruthy();
        });

        test("Each object should contain the keys type, name, date, source and data", async () => {
            const requiredKeys = ["type", "name", "date", "source", "data"];
            nonLeapYearDates.every(d => hasKey(d, requiredKeys));
            leapYearDates.every(d => hasKey(d, requiredKeys));
        });

        test("Array should be 365 days long on non-leap years", async () => {
            const grouped: Dictionary<DateItem[]> = groupBy(nonLeapYearDates, item => dayjs.utc(item.date).valueOf());
            expect(Object.keys(grouped)).toHaveLength(365);
        });

        test("Array should be 366 days long on leap years", async () => {
            const grouped: Dictionary<DateItem[]> = groupBy(leapYearDates, item => dayjs.utc(item.date).valueOf());
            expect(Object.keys(grouped)).toHaveLength(366);
        });
    });

    describe("Testing calendar functions", () => {
        describe("When requesting the liturgical year", () => {
            let year: number;
            let start: dayjs.Dayjs;
            let end: dayjs.Dayjs;
            let calendar: DateItem[];

            beforeEach(async () => {
                year = dayjs.utc().year();
                start = Dates.firstSundayOfAdvent(year - 1);
                end = Dates.firstSundayOfAdvent(year).subtract(1, "day");
                calendar = await Calendar.calendarFor({
                    year: year,
                    type: "liturgical",
                });
            });

            test("Should start on the 1st Sunday of Advent and end on Christ the King", () => {
                expect(dayjs.utc(calendar[0].date).isSame(start)).toBeTrue();
                expect(dayjs.utc(calendar[calendar.length - 1].date).isSame(end)).toBeTrue();
            });
        });

        describe("When requesting the calendar year", () => {
            test("Should start on Jan 1 and end on Dec 31", async () => {
                const calendar = await Calendar.calendarFor();
                const [firstDate] = calendar;
                const [lastDate] = calendar.reverse();
                expect(dayjs.utc(firstDate.date).month()).toEqual(0);
                expect(dayjs.utc(firstDate.date).date()).toEqual(1);
                expect(dayjs.utc(lastDate.date).month()).toEqual(11);
                expect(dayjs.utc(lastDate.date).date()).toEqual(31);
            });
        });
    });

    describe("Testing query filters", () => {
        describe("For filtering by day of week", () => {
            test("Results should match the day of week requested", async () => {
                for (let i = 0, il = 7; i < il; i++) {
                    const dates = Calendar.queryFor(await Calendar.calendarFor(), { day: i });
                    dates.forEach(d => expect(dayjs.utc(d.date).day()).toEqual(i));
                }
            });
        });

        describe("For filtering by month of year", () => {
            test("Results should match the month of year requested", async () => {
                for (let i = 0, il = 12; i < il; i++) {
                    const dates = Calendar.queryFor(await Calendar.calendarFor(), { month: i });
                    dates.forEach(d => expect(dayjs.utc(d.date).month()).toEqual(i));
                }
            });
        });

        describe("For filtering by groups", () => {
            test("Should group dates by days in a week", async () => {
                const calendar = await Calendar.calendarFor({
                    query: { group: "days" },
                });
                expect(Object.keys(calendar)).toEqual(["0", "1", "2", "3", "4", "5", "6"]);
            });

            test("Should group dates by months in the year", async () => {
                expect(
                    Object.keys(
                        Calendar.queryFor(await Calendar.calendarFor(), {
                            group: "months",
                        }),
                    ),
                ).toEqual(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]);
            });

            test("Should group days of week by the months they belong to", async () => {
                const dates = Calendar.queryFor(await Calendar.calendarFor(), {
                    group: "daysByMonth",
                });
                Object.values(dates).forEach((monthGroup: Dictionary<DateItem[]>, monthIndex: number) => {
                    Object.values(monthGroup).forEach((dateItems: DateItem[], dayIndex: number) => {
                        dateItems.forEach(dateItem => {
                            expect(dayjs.utc(dateItem.date).day()).toEqual(dayIndex);
                            expect(dayjs.utc(dateItem.date).month()).toEqual(monthIndex);
                        });
                    });
                });
            });

            test("Should group weeks of year by the months they belong to", async () => {
                const calendar = Calendar.queryFor(await Calendar.calendarFor(), {
                    group: "weeksByMonth",
                });

                // First level is months
                Object.keys(calendar).forEach(monthKey => {
                    const monthGroup = calendar[Number(monthKey)];
                    // Second level is weeks
                    Object.keys(monthGroup).forEach(weekKey => {
                        const weekGroup = monthGroup[Number(weekKey)];
                        weekGroup.forEach(dateItem => {
                            expect(dayjs.utc(dateItem.date).month()).toEqual(Number(monthKey));
                            expect(dateItem.data.calendar.week).toEqual(Number(weekKey));
                        });
                    });
                });
            });

            test("Should group dates by their respective liturgical cycles", async () => {
                const calendar = await Calendar.calendarFor({ year: 2015 });
                const dates = Calendar.queryFor(calendar, { group: "cycles" });
                expect(Object.keys(dates)).toEqual(["Year B", "Year C"]);
            });

            test("Should group dates by their celebration types", async () => {
                const typeKeys = Object.keys(Calendar.queryFor(await Calendar.calendarFor(), { group: "types" }));
                expect(typeKeys.every(typeKey => Object.keys(Types).includes(typeKey as TTypes))).toBeTrue();
            });

            test("Should group dates by their liturgical seasons", async () => {
                const liturgicalSeasonGroupings = Calendar.queryFor(await Calendar.calendarFor(), {
                    group: "liturgicalSeasons",
                });
                expect(
                    Object.keys(liturgicalSeasonGroupings).every(liturgicalSeasonKey =>
                        Object.keys(LiturgicalSeasons).includes(liturgicalSeasonKey),
                    ),
                ).toBeTrue();
            });

            test("Should group dates by their psalter weeks", async () => {
                const psaltertWeekKeys = Object.keys(
                    Calendar.queryFor(await Calendar.calendarFor(), { group: "psalterWeeks" }),
                );
                expect(psaltertWeekKeys).toStrictEqual(Object.keys(PsalterWeeks));
            });
        });

        describe("For filtering by titles", () => {
            test("Should filter by title as expected when using queryFor()", async () => {
                Calendar.queryFor(await Calendar.calendarFor(), {
                    title: Titles.FEAST_OF_THE_LORD,
                }).forEach((d: DateItem) =>
                    expect(d.data.meta.titles?.includes(Titles.FEAST_OF_THE_LORD)).toBeTruthy(),
                );
            });
            test("Should filter by title as expected when using calendarFor()", async () => {
                Calendar.queryFor(await Calendar.calendarFor(), {
                    title: Titles.PATRON_OF_EUROPE,
                }).forEach((d: DateItem) => expect(d.data.meta.titles?.includes(Titles.PATRON_OF_EUROPE)).toBeTruthy());
            });
        });

        describe("Testing advanced filters", () => {
            test("The proper color of a Memorial or a Feast is white except for martyrs in which case it is red", async () => {
                const calendar = (await Calendar.calendarFor({ query: { group: "types" } })) as Dictionary<DateItem[]>;
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

            test("The proper color for the Chair of Peter and the Conversion of St. Paul is white, although both St. Peter and St. Paul were martyrs.", async () => {
                const dates = await Calendar.calendarFor();
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
