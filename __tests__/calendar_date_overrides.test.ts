/* eslint-disable @typescript-eslint/no-explicit-any */
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

import moment from "moment";
import { Calendar, Seasons, Dates, Types } from "../src";
import { DateItem } from "../src/models/romcal-date-item";
import { dayJsToMomentJs } from "../src/utils/dates";

describe("Testing national calendar overrides", () => {
    describe("An optional celebration is available to be celebrated, in addition to the feria", () => {
        const generalDates2020 = Calendar.calendarFor(2020);
        const generalDates2021 = Calendar.calendarFor(2021);
        const spainDates2020 = Calendar.calendarFor({ year: 2020, country: "spain" });
        it("The optional memory of the Most Holy Name of Jesus is available on the 3th of January, in addition to the feria", () => {
            const dates = generalDates2020.filter(d => {
                return d.moment.isSame(moment.utc({ year: 2020, month: 0, day: 3 }));
            });
            expect(dates.length).toEqual(2);
        });
        it("However, if the 3th of January is a Sunday, the Solemnity of Epiphany takes the precedence.", () => {
            const dates = generalDates2021.filter(d => {
                return d.moment.isSame(moment.utc({ year: 2021, month: 0, day: 3 }));
            });
            expect(dates.length).toEqual(1);
            expect(dates[0].key).toEqual("epiphany");
        });
        it("The optional memory of Saint Fructuosus is celebrated on the January 20 in Spain, in addition of Saint Fabian from the general calendar", () => {
            const dates = spainDates2020.filter(d => {
                return d.moment.isSame(moment.utc({ year: 2020, month: 0, day: 20 }));
            });
            expect(dates.length).toEqual(3);
        });
        it("When optional celebrations are available, the feria is the first celebration available", () => {
            const [firstDate] = spainDates2020.filter(d => {
                return d.moment.isSame(moment.utc({ year: 2020, month: 0, day: 20 }));
            });
            expect(firstDate.type).toEqual(Types.FERIA);
        });
    });

    describe("A feast defined in a national calendar should replace the same feast defined in the general calendar", () => {
        const year = 2008;
        const generalDates = Calendar.calendarFor(year);
        const spainDates = Calendar.calendarFor({ year: year, country: "spain" });
        it("The feast of Saint Isidore of Seville is celebrated on April 4 every year", () => {
            const date = generalDates.filter(d => {
                return d.moment.isSame(moment.utc({ year: year, month: 3, day: 4 })) && d.key === "saintIsidoreOfSevilleBishopAndDoctorOfTheChurch";
            });
            expect(date.length).toEqual(1);
        });
        it("However, in the national calendar of Spain, this same feast is celebrated on the 26th of April every year", () => {
            const date = spainDates.filter(d => {
                return d.moment.isSame(moment.utc({ year: year, month: 3, day: 26 })) && d.key === "saintIsidoreOfSevilleBishopAndDoctorOfTheChurch";
            });
            expect(date.length).toEqual(1);
        });
        it("Therefore, national calendar of spain should only have one occurrence of this feast on the 26th of April", () => {
            const occurrences = spainDates.filter(d => {
                return d.key === "saintIsidoreOfSevilleBishopAndDoctorOfTheChurch";
            });
            expect(occurrences.length).toEqual(1);
        });
    });

    describe("Testing the priority option for celebrations", () => {
        const year = 2020;
        const testDates = Calendar.calendarFor({
            country: "test",
            year,
        });

        it("A celebration with a higher type rank and the same key cannot replace an existing prioritized celebration", () => {
            const dates = testDates.filter(d => {
                return d.key === "ashWednesday";
            });
            expect(dates.length).toEqual(1);
            expect(dates[0].type).toEqual(Types.FERIA);
        });
        it("A new prioritized celebration will replace any existing non-prioritized celebrations", () => {
            const dates = testDates.filter(d => {
                return d.key === "saintLukeTheEvangelist";
            });
            expect(dates.length).toEqual(1);
            expect(dates[0].type).toEqual(Types.COMMEMORATION);
        });
        it("An existing and prioritized celebration can be replaced by a new prioritized celebration having the same key (whatever its type rank)", () => {
            const dates = testDates.filter(d => {
                return d.moment.isSame(dayJsToMomentJs(Dates.pentecostSunday(year).add(1, "day")));
            });
            expect(dates.length).toEqual(1);
            expect(dates[0].key).toEqual("maryMotherOfTheChurch");
            expect(dates[0].type).toEqual(Types.OPT_MEMORIAL);
        });
        it("If multiple prioritized celebrations falls the same day, the one with the highest type rank will be used", () => {
            const dates = testDates.filter(d => {
                return d.moment.isSame(moment.utc({ year: 2020, month: 10, day: 9 }));
            });
            expect(dates.length).toEqual(1);
            expect(dates[0].key).toEqual("dedicationOfTheLateranBasilica");
            expect(dates[0].type).toEqual(Types.FEAST);
        });
        it("If multiple prioritized celebrations with the same rank fall on the same day, the last defined celebration will be used", () => {
            const dates = testDates.filter(d => {
                return d.moment.isSame(moment.utc({ year: 2020, month: 11, day: 25 }));
            });
            expect(dates.length).toEqual(1);
            expect(dates[0].key).toEqual("aSampleCelebration2");
            expect(dates[0].type).toEqual(Types.SOLEMNITY);
        });
    });

    describe("The feast of Epiphany", () => {
        it("Should always be celebrated on January 6 in Slovakia unless explicitly configured otherwise", () => {
            const slovakiaDates: DateItem[] = Calendar.calendarFor({
                country: "slovakia",
            });
            const epiphanySlovakia = slovakiaDates.find(d => {
                return d.key === "epiphany";
            });
            expect(epiphanySlovakia?.moment.date()).toEqual(6);
            expect(epiphanySlovakia?.moment.month()).toEqual(0);
        });
        it("Will fall on Sunday as calculated by the Epiphany rubric, when `epiphanyOnJan6` is explicitly configured as `false`", () => {
            const slovakiaDates = Calendar.calendarFor({ country: "slovakia", epiphanyOnJan6: false, year: 2018 });
            const epiphanySlovakia = slovakiaDates.find(d => {
                return d.key === "epiphany";
            });
            expect(epiphanySlovakia?.moment.day()).toEqual(0);
            expect(epiphanySlovakia?.moment.month()).toEqual(0);
        });
    });

    describe("Testing the Feast of Saints Cyril and Methodius with locale specific settings", () => {
        it("Should fall on February 14, 2017 in the general calendar", () => {
            const dates = Calendar.calendarFor(2017);
            const date = dates.find(d => {
                return d.key === "saintsCyrilMonkAndMethodiusBishop";
            });
            expect(date?.moment.isSame(moment.utc({ year: 2017, month: 1, day: 14 }))).toBeTruthy();
        });
        it("Should fall on 5th July 2017 in the national calendar of the Czech Republic", () => {
            const dates = Calendar.calendarFor({
                country: "czechRepublic",
                year: 2017,
            });
            const date = dates.find(d => {
                return d.key === "saintsCyrilMonkAndMethodiusBishop";
            });
            expect(date?.moment.isSame(moment.utc({ year: 2017, month: 6, day: 5 }))).toBeTruthy();
        });
        it("Should fall on 5th July 2017 in the national calendar of Slovakia", () => {
            const dates = Calendar.calendarFor({
                country: "slovakia",
                year: 2017,
            });
            const date = dates.find(d => {
                return d.key === "saintsCyrilMonkAndMethodiusBishop";
            });
            expect(date?.moment.isSame(moment.utc({ year: 2017, month: 6, day: 5 }))).toBeTruthy();
        });
    });

    describe("The feast of the Assumption in England and Wales", () => {
        describe("If the feast of the Assumption falls on Saturday on Monday", () => {
            it("It is transferred to Sunday", () => {
                const wales2009Dates = Calendar.calendarFor({
                    year: 2009,
                    country: "wales",
                });

                const england2009Dates = Calendar.calendarFor({
                    year: 2009,
                    country: "england",
                });

                const wales2011Dates = Calendar.calendarFor({
                    year: 2011,
                    country: "wales",
                });

                const england2011Dates = Calendar.calendarFor({
                    year: 2011,
                    country: "england",
                });

                const laterOrdinaryTimeDates2009 = Seasons.laterOrdinaryTime(2009);
                const laterOrdinaryTimeDates2011 = Seasons.laterOrdinaryTime(2011);

                const twentiethSundayOfOrdinaryTime2009 = laterOrdinaryTimeDates2009.find(d => {
                    return d.key === "20thSundayOfOrdinaryTime";
                });

                const twentiethSundayOfOrdinaryTime2011 = laterOrdinaryTimeDates2011.find(d => {
                    return d.key === "20thSundayOfOrdinaryTime";
                });

                const walesAssumption2009 = wales2009Dates.find(d => {
                    return d.key === "assumption";
                });

                const englandAssumption2009 = england2009Dates.find(d => {
                    return d.key === "assumption";
                });

                const walesAssumption2011 = wales2011Dates.find(d => {
                    return d.key === "assumption";
                });

                const englandAssumption2011 = england2011Dates.find(d => {
                    return d.key === "assumption";
                });

                expect(walesAssumption2009?.moment.isSame(twentiethSundayOfOrdinaryTime2009?.moment)).toBeTruthy();
                expect(englandAssumption2009?.moment.isSame(twentiethSundayOfOrdinaryTime2009?.moment)).toBeTruthy();
                expect(walesAssumption2011?.moment.isSame(twentiethSundayOfOrdinaryTime2011?.moment)).toBeTruthy();
                expect(englandAssumption2011?.moment.isSame(twentiethSundayOfOrdinaryTime2011?.moment)).toBeTruthy();
            });
        });

        describe("If the feast of the Assumption falls on Sunday", () => {
            it("It replaces the 20th Sunday of OT", () => {
                const walesDates = Calendar.calendarFor({
                    year: 2010,
                    country: "wales",
                });

                const englandDates = Calendar.calendarFor({
                    year: 2010,
                    country: "england",
                });

                const laterOrdinaryTimeDates = Seasons.laterOrdinaryTime(2010);
                const twentiethSundayOfOrdinaryTime = laterOrdinaryTimeDates.find(d => {
                    return d.key === "20thSundayOfOrdinaryTime";
                });

                const walesAssumption = walesDates.find(d => {
                    return d.key === "assumption";
                });

                const englandAssumption = englandDates.find(d => {
                    return d.key === "assumption";
                });

                expect(walesAssumption?.moment.isSame(twentiethSundayOfOrdinaryTime?.moment)).toBeTruthy();
                expect(englandAssumption?.moment.isSame(twentiethSundayOfOrdinaryTime?.moment)).toBeTruthy();
            });
        });
    });

    describe("The feast of All Saints in England and Wales", () => {
        it("If All Saints is on Saturday, it will be moved to Sunday (the next day)", () => {
            // In 2008, 1st of November was on a Saturday
            const englandDates = Calendar.calendarFor({
                country: "england",
                year: 2008,
            });
            const walesDates = Calendar.calendarFor({
                country: "wales",
                year: 2008,
            });
            // So All Saints should be celebrated on Sunday
            const allSaintsEngland = englandDates.find(d => {
                return d.key === "allSaints";
            });
            const allSaintsWales = walesDates.find(d => {
                return d.key === "allSaints";
            });
            expect(allSaintsEngland?.moment.day()).toEqual(0);
            expect(allSaintsWales?.moment.day()).toEqual(0);
        });
    });

    describe("The feast of All Souls in England and Wales", () => {
        it("If All Saints is mpved to Sunday, All Souls must be on Monday (the next day)", () => {
            // In 2008, 1st of November was on a Saturday
            const englandDates = Calendar.calendarFor({
                country: "england",
                year: 2008,
            });
            const walesDates = Calendar.calendarFor({
                country: "wales",
                year: 2008,
            });
            // So All Saints should be celebrated on Sunday
            // and All Souls will be celebrated on Monday
            const allSaintsEngland = englandDates.find(d => {
                return d.key === "allSouls";
            });
            const allSaintsWales = walesDates.find(d => {
                return d.key === "allSouls";
            });
            expect(allSaintsEngland?.moment.day()).toEqual(1);
            expect(allSaintsWales?.moment.day()).toEqual(1);
        });
    });

    describe("Saint Matthias the Apostle", () => {
        it("Feast day falls on the May 14 in the general liturgical calendar", () => {
            const dates = Calendar.calendarFor(2018);
            const saintMatthias = dates.find(d => {
                return d.key === "saintMatthiasTheApostle";
            });
            expect(saintMatthias?.moment.isSame(moment.utc({ year: 2018, month: 4, day: 14 }))).toBeTruthy();
        });
        it("Feast day falls on the 24th of February in the national calendar of Germany and Hungary", () => {
            const germanyDates = Calendar.calendarFor({
                year: 2018,
                country: "germany",
            });
            const hungaryDates = Calendar.calendarFor({
                year: 2018,
                country: "hungary",
            });
            const saintMatthiasGermany = germanyDates.find(d => {
                return d.key === "saintMatthiasTheApostle";
            });
            const saintMatthiasHungary = hungaryDates.find(d => {
                return d.key === "saintMatthiasTheApostle";
            });
            expect(saintMatthiasGermany?.moment.isSame(moment.utc({ year: 2018, month: 1, day: 24 }))).toBeTruthy();
            expect(saintMatthiasHungary?.moment.isSame(moment.utc({ year: 2018, month: 1, day: 24 }))).toBeTruthy();
        });
        it("Is a memorial in the German liturgical calendar on A.D 2014", () => {
            const germanyDates = Calendar.calendarFor({
                year: 2014,
                country: "germany",
            });
            const saintMatthiasGermany = germanyDates.find(d => {
                return d.key === "saintMatthiasTheApostle";
            });
            expect(saintMatthiasGermany?.type).toEqual(Types.MEMORIAL);
        });
    });

    describe("Saint Christopher Magallanes and Companions, Martyrs", () => {
        it("A memorial in Mexico but an optional memorial in the general calendar", () => {
            const mexicoDates = Calendar.calendarFor({
                year: 2019,
                country: "mexico",
            });
            const dates = Calendar.calendarFor(2019);
            const saintChristopherMagallanesAndCompanionsMartyrs = dates.find(d => {
                return d.key === "saintChristopherMagallanesAndCompanionsMartyrs";
            });
            const saintChristopherMagallanesAndCompanionsMartyrsMexico = mexicoDates.find(d => {
                return d.key === "saintChristopherMagallanesAndCompanionsMartyrs";
            });
            expect(saintChristopherMagallanesAndCompanionsMartyrs?.type).toEqual(Types.OPT_MEMORIAL);
            expect(saintChristopherMagallanesAndCompanionsMartyrsMexico?.type).toEqual(Types.MEMORIAL);
        });
    });

    describe("Saint Ladislaus", () => {
        it("A feast in Hungary but an optional memorial in Slovakia", () => {
            const hungaryDates = Calendar.calendarFor({
                year: 2018,
                country: "hungary",
            });
            const slovakiaDates = Calendar.calendarFor({
                year: 2018,
                country: "slovakia",
            });
            const saintLadislausHungary = hungaryDates.find(d => {
                return d.key === "saintLadislaus";
            });
            const saintLadislausSlovakia = slovakiaDates.find(d => {
                return d.key === "saintLadislaus";
            });
            expect(saintLadislausHungary?.type).toEqual(Types.FEAST);
            expect(saintLadislausSlovakia?.type).toEqual(Types.OPT_MEMORIAL);
        });
    });

    describe("Our Lady of Sorrows", () => {
        it("Should be celebrated on the September 15, 2018 as a memorial in the General Calendar", () => {
            const dates = Calendar.calendarFor(2018);
            const ourLadyOfSorrows = dates.find(d => {
                return d.key === "ourLadyOfSorrows";
            });
            expect(ourLadyOfSorrows?.type).toEqual(Types.MEMORIAL);
            expect(ourLadyOfSorrows?.moment.isSame(moment.utc({ year: 2018, month: 8, day: 15 }))).toBeTruthy();
        });

        it("Should be celebrated on the 15th of April 2015 as a feast in the national calendar of Malta", () => {
            const maltaDates = Calendar.calendarFor({
                year: 2015,
                country: "malta",
            });
            const ourLadyOfSorrows = maltaDates.find(d => {
                return d.key === "ourLadyOfSorrows";
            });
            expect(ourLadyOfSorrows?.type).toEqual(Types.FEAST);
            expect(ourLadyOfSorrows?.moment.isSame(moment.utc({ year: 2015, month: 3, day: 15 }))).toBeTruthy();
        });

        it("Should be replaced by the 3rd Sunday of Easter in 2018 in the national calendar of Malta due to rank", () => {
            const maltaDates = Calendar.calendarFor({
                year: 2018,
                country: "malta",
            });
            const ourLadyOfSorrows = moment.utc({ year: 2018, month: 3, day: 15 });
            const thirdSundayOfEaster = maltaDates.find(d => {
                return d.key === "3rdSundayOfEaster";
            });
            expect(ourLadyOfSorrows?.isSame(thirdSundayOfEaster?.moment)).toBeTruthy();
        });

        it("Should be celebrated on the 15th of April 2018 as a solemnity in the national calendar of Slovakia", () => {
            const slovakiaDates = Calendar.calendarFor({
                year: 2018,
                country: "slovakia",
            });
            const ourLadyOfSorrows = slovakiaDates.find(d => {
                return d.key === "ourLadyOfSorrows";
            });
            expect(ourLadyOfSorrows?.type).toEqual(Types.SOLEMNITY);
            expect(ourLadyOfSorrows?.moment.isSame(moment.utc({ year: 2018, month: 8, day: 15 }))).toBeTruthy();
        });
    });
});
