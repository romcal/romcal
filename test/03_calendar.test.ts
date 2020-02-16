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

describe("Testing calendar generation functions", () => {
    describe("When calling the calendarFor() method without a query", () => {
        const nonLeapYearDates = Calendar.calendarFor(2018);
        const leapYearDates = Calendar.calendarFor(2020);

        it("Should return an array of objects", () => {
            expect(_.every(nonLeapYearDates, _.isObject)).toBeTruthy();
            expect(_.every(leapYearDates, _.isObject)).toBeTruthy();
        });

        it("Each object should contain the keys \"type\", \"name\", \"moment\", \"source\" and \"data\"", () => {
            const requiredKeys = ["type", "name", "moment", "source", "data"];
            _.every(nonLeapYearDates, d => _.has(d, requiredKeys));
            _.every(leapYearDates, d => _.has(d, requiredKeys));
        });

        it("Array should be 365 days long on non-leap years", () => {
            expect(_.size(_.groupBy(nonLeapYearDates, item => item.moment.valueOf()))).toEqual(365);
        });

        it("Array should be 366 days long on leap years", () => {
            expect(_.size(_.groupBy(leapYearDates, item => item.moment.valueOf()))).toEqual(366);
        });
    });

    describe("Testing calendar functions", () => {
        describe("When requesting the liturgical year", () => {
            const year = moment.utc().year(),
                start = Dates.firstSundayOfAdvent(year),
                end = Dates.firstSundayOfAdvent(year + 1).subtract(1, "days"),
                dates = Calendar.calendarFor({
                    year: year,
                    type: "liturgical",
                });

            it("Should start on the 1st Sunday of Advent and end on Christ the King", () => {
                expect(_.head(dates).moment.isSame(start)).toEqual(true);
                expect(_.last(dates).moment.isSame(end)).toEqual(true);
            });
        });

        describe("When requesting the calendar year", () => {
            const dates = Calendar.calendarFor();
            it("Should start on Jan 1 and end on Dec 31", () => {
                expect(_.head(dates).moment.month()).toEqual(0);
                expect(_.head(dates).moment.date()).toEqual(1);
                expect(_.last(dates).moment.month()).toEqual(11);
                expect(_.last(dates).moment.date()).toEqual(31);
            });
        });
    });

    describe("Testing query filters", () => {
        describe("For filtering by day of week", () => {
            it("Results should match the day of week requested", () => {
                for (var i = 0, il = 7; i < il; i++) {
                    _.each(Calendar.calendarFor({ query: { day: i } }), d => expect(d.moment.day()).toEqual(i));
                }
            });
        });

        describe("For filtering by month of year", () => {
            it("Results should match the month of year requested", () => {
                for (var i = 0, il = 12; i < il; i++) {
                    _.each(Calendar.calendarFor({ query: { month: i } }), d => expect(d.moment.month()).toEqual(i));
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
                ).toEqual(["0", "1", "2", "3", "4", "5", "6"]);
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
                ).toEqual(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]);
            });

            it("Should group days of week by the months they belong to", () => {
                _.each(
                    Calendar.calendarFor({
                        query: {
                            group: "daysByMonth",
                        },
                    }),
                    function(dates, k) {
                        _.each(dates, function(day, key) {
                            _.each(day, function(v) {
                                expect(v.moment.day()).toEqual(Number(key));
                                expect(v.moment.month()).toEqual(Number(k));
                            });
                        });
                    },
                );
            });

            it("Should group weeks of year by the months they belong to", () => {
                const calendar = Calendar.calendarFor({
                    query: {
                        group: "weeksByMonth",
                    },
                });
                calendar.forEach((dates, k) => {
                    dates.forEach((group, key) => {
                        group.forEach(v => {
                            expect(v.moment.month()).toEqual(Number(k));
                            expect(v.data.calendar.week).toEqual(Number(key));
                        });
                    });
                });
            });

            it("Should group dates by their respective liturgical cycles", () => {
                expect(
                    _.keys(
                        Calendar.calendarFor({
                            year: 2015,
                            query: { group: "cycles" },
                        }),
                    ),
                ).toEqual(["Year B", "Year C"]);

                expect(_.keys(Calendar.queryFor(Calendar.calendarFor({ year: 2015 }), { group: "cycles" }))).toEqual(["Year B", "Year C"]);
            });

            it("Should group dates by their celebration types", () => {
                expect(
                    _.keys(
                        Calendar.calendarFor({
                            query: { group: "types" },
                        }),
                    ),
                ).to.containDeep(Types);

                expect(_.keys(Calendar.queryFor(Calendar.calendarFor(), { group: "types" }))).to.containDeep(Types);
            });

            it("Should group dates by their liturgical seasons", () => {
                expect(
                    _.keys(
                        Calendar.calendarFor({
                            query: { group: "liturgicalSeasons" },
                        }),
                    ),
                ).to.containDeep(_.values(LiturgicalSeasons));

                expect(_.keys(Calendar.queryFor(Calendar.calendarFor(), { group: "liturgicalSeasons" }))).to.containDeep(_.values(LiturgicalSeasons));
            });

            it("Should group dates by their psalter weeks", () => {
                expect(
                    _.keys(
                        Calendar.calendarFor({
                            query: { group: "psalterWeek" },
                        }),
                    ),
                ).to.containDeep(_.keys(PsalterWeeks));

                expect(_.keys(Calendar.queryFor(Calendar.calendarFor(), { group: "psalterWeek" }))).to.containDeep(_.keys(PsalterWeeks));
            });
        });

        describe("For filtering by titles", () => {
            _.each(Calendar.calendarFor({ query: { title: Titles.FEAST_OF_THE_LORD } }), d =>
                expect(_.includes(d.data.meta.titles, Titles.FEAST_OF_THE_LORD)).toBeTruthy(),
            );
            _.each(Calendar.calendarFor({ query: { title: Titles.PATRON_OF_EUROPE } }), d =>
                expect(_.includes(d.data.meta.titles, Titles.PATRON_OF_EUROPE)).toBeTruthy(),
            );
        });

        describe("Testing advanced filters", () => {
            it("The proper color of a Memorial or a Feast is white except for martyrs in which case it is red", () => {
                const calendar = Calendar.calendarFor({ query: { group: "types" } });
                _.each(_.get(calendar, Types.FEAST), function(d) {
                    if (_.eq(d.key, "theExaltationOfTheHolyCross")) {
                        expect(d.data.meta.liturgicalColor.key).toEqual(LiturgicalColors.RED.key);
                    } else {
                        if (!_.isUndefined(d.data.meta.titles)) {
                            if (_.includes(d.data.meta.titles, Titles.MARTYR)) {
                                expect(d.data.meta.liturgicalColor.key).toEqual(LiturgicalColors.RED.key);
                            } else {
                                expect(d.data.meta.liturgicalColor.key).toEqual(LiturgicalColors.WHITE.key);
                            }
                        } else {
                            expect(d.data.meta.liturgicalColor.key).toEqual(LiturgicalColors.WHITE.key);
                        }
                    }
                });
                _.each(_.get(calendar, Types.MEMORIAL), function(d) {
                    if (!_.isUndefined(d.data.meta.titles)) {
                        if (_.includes(d.data.meta.titles, Titles.MARTYR)) {
                            expect(d.data.meta.liturgicalColor.key).toEqual(LiturgicalColors.RED.key);
                        } else {
                            expect(d.data.meta.liturgicalColor.key).toEqual(LiturgicalColors.WHITE.key);
                        }
                    } else {
                        expect(d.data.meta.liturgicalColor.key).toEqual(LiturgicalColors.WHITE.key);
                    }
                });
            });

            it("The proper color for the Chair of Peter and the Conversion of St. Paul is white, although both St. Peter and St. Paul were martyrs.", () => {
                const calendar = Calendar.calendarFor({ query: { group: "types" } });
                _.each(_.get(calendar, Types.FEAST), function(d) {
                    if (_.eq(d.key, "chairOfSaintPeter") || _.eq(d.key, "conversionOfSaintPaulApostle")) {
                        expect(d.data.meta.liturgicalColor).toEqual(LiturgicalColors.WHITE);
                    }
                });
            });
        });

        describe("Test calendarFor() options", () => {
            describe("Test the \"year\" property", () => {});

            describe("Test the \"christmastideEnds\" property", () => {});

            describe("Test the \"epiphanyOnJan6\" property", () => {});

            describe("Test the \"christmastideIncludesTheSeasonOfEpiphany\" property", () => {});

            describe("Test the \"corpusChristiOnThursday\" property", () => {});

            describe("Test the \"ascensionOnSunday\" property", () => {});

            describe("Test the \"type\" property", () => {});
        });
    });
});
