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

import dayjs from "dayjs";

import { Dates, Types, Calendar } from "../src";
import { DateItem } from "../src/models/romcal-date-item";

describe("Testing specific feasts and memorials", () => {
    describe("The memorial of the Blessed Virgin Mary, Mother of the Church", () => {
        test("Should be celebrated on the Monday after Pentecost", () => {
            const dates = Calendar.calendarFor(); // Get the calendar for the current year
            const pentecostSunday = Dates.pentecostSunday(dayjs.utc().year());
            const maryMotherOfTheChurch = dates.find(d => d.key === "maryMotherOfTheChurch");
            const dayBeforeMaryMotherOfTheChurch = maryMotherOfTheChurch?.moment.subtract(1, "day");
            expect(maryMotherOfTheChurch?.moment.day()).toEqual(0);
            expect(dayBeforeMaryMotherOfTheChurch?.day()).toEqual(0);
            expect(dayBeforeMaryMotherOfTheChurch?.isSame(pentecostSunday)).toBeTruthy();
        });

        test("Should take precedence in the event of coincidence with another memorial of a saint or blessed", () => {
            // In 2020, monday after Pentecost is June 1
            const juneDates = Calendar.calendarFor({
                year: 2020,
                query: {
                    month: 5,
                },
            }) as DateItem[];
            // according to the general calendar, June 1 is the memorial of saint Justin, Martyr
            const maybeSaintJustinMartyr = juneDates[0];
            expect(maybeSaintJustinMartyr.key).toEqual("maryMotherOfTheChurch");
        });
    });

    describe("The celebration of Saint Mary Magdalene", () => {
        test("Should be ranked as a feast and should be celebrated on the July 22", () => {
            const dates = Calendar.calendarFor(2017);
            const saintMaryMagdalene = dates.find(d => {
                return d.key === "saintMaryMagdalene";
            });
            expect(saintMaryMagdalene?.moment.date()).toEqual(22);
            expect(saintMaryMagdalene?.moment.month()).toEqual(6);
            expect(saintMaryMagdalene?.type).toEqual(Types.FEAST);
        });
    });

    describe("The celebrations of Pope Saint John XXIII and Pope Saint John Paul II", () => {
        test("Should be celebrated as optional memorials", () => {
            const dates = Calendar.calendarFor(2016);
            const popeSaintJohnXXIII = dates.find(d => {
                return d.key === "popeSaintJohnXXIII";
            });
            const popeSaintJohnPaulII = dates.find(d => {
                return d.key === "popeSaintJohnPaulII";
            });
            expect(popeSaintJohnXXIII?.type).toEqual(Types.OPT_MEMORIAL);
            expect(popeSaintJohnPaulII?.type).toEqual(Types.OPT_MEMORIAL);
        });
    });

    describe("The Feast of the Exultation of the Cross", () => {
        test("Is celebrated on the 14th of September", () => {
            const dates = Calendar.calendarFor(2018);
            const theExaltationOfTheHolyCross = dates.find(d => {
                return d.key === "theExaltationOfTheHolyCross";
            });
            expect(theExaltationOfTheHolyCross?.moment.date()).toEqual(14);
            expect(theExaltationOfTheHolyCross?.moment.month()).toEqual(8);
        });
    });
});
