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

import { Dates, Locales } from "..";
import { rangeOfDays, rangeContainsDate } from "../utils/dates";
import dayjs from "dayjs";

import utc from "dayjs/plugin/utc";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekday from "dayjs/plugin/weekday";

dayjs.extend(utc);
dayjs.extend(weekOfYear);
dayjs.extend(weekday);

describe("Testing specific liturgical date functions", () => {
    describe("In Christian calendars, Sunday is the first day of the week", () => {
        test("The Solemnity of Epiphany is a Sunday", async () => {
            await Locales.setLocale("fr");
            const date1 = Dates.epiphany(1969);
            expect(date1.weekday()).toEqual(0);
            await Locales.setLocale("en");
            const date2 = Dates.epiphany(1969);
            expect(date2.weekday()).toEqual(0);
        });
    });

    describe("Ash Wednesday occurs on 46 days before Easter Sunday", () => {
        test("In 1969, Ash Wednesday was on February 19", () => {
            const date = Dates.ashWednesday(1969);
            expect(date.month()).toEqual(1);
            expect(date.date()).toEqual(19);
        });

        test("In 2008, Ash Wednesday was on February 6", () => {
            const date = Dates.ashWednesday(2008);
            expect(date.month()).toEqual(1);
            expect(date.date()).toEqual(6);
        });

        test("In 2050, Ash Wednesday will be on February 23", () => {
            const date = Dates.ashWednesday(2050);
            expect(date.month()).toEqual(1);
            expect(date.date()).toEqual(23);
        });

        test("Its earliest occuring date is Feb 4 and latest occuring date is March 17 and its always on Wednesday", () => {
            for (let i = 1800, il = 2015; i <= il; i++) {
                expect(Dates.ashWednesday(i).month()).toBeOneOf([1, 2]);
                expect(Dates.ashWednesday(i).day()).toEqual(3);
            }
        });
    });

    describe("Palm Sunday occurs on the Sunday before Easter Sunday", () => {
        test("In 1969, Palm Sunday was on March 30", () => {
            const date = Dates.palmSunday(1969);
            expect(date.month()).toEqual(2);
            expect(date.date()).toEqual(30);
        });

        test("In 2008, Palm Sunday was on March 16", () => {
            const date = Dates.palmSunday(2008);
            expect(date.month()).toEqual(2);
            expect(date.date()).toEqual(16);
        });

        test("In 2050, Palm Sunday will be on April 3", () => {
            const date = Dates.palmSunday(2050);
            expect(date.month()).toEqual(3);
            expect(date.date()).toEqual(3);
        });

        test("Its earliest occuring date is March 15 and latest occuring date is April 18", () => {
            for (let i = 1850, il = 2015; i <= il; i++) {
                expect(Dates.palmSunday(i).month()).toBeOneOf([2, 3]);
            }
        });
    });

    describe("Holy Thursday occurs on the Thursday before Easter Sunday", () => {
        test("In 1969, Holy Thursday was on April 3", () => {
            const date = Dates.holyThursday(1969);
            expect(date.month()).toEqual(3);
            expect(date.date()).toEqual(3);
        });

        test("In 2008, Holy Thursday was on March 20", () => {
            const date = Dates.holyThursday(2008);
            expect(date.month()).toEqual(2);
            expect(date.date()).toEqual(20);
        });

        test("In 2050, Holy Thursday will be on April 7", () => {
            const date = Dates.holyThursday(2050);
            expect(date.month()).toEqual(3);
            expect(date.date()).toEqual(7);
        });
    });

    describe("Good Friday occurs on the Friday before Easter Sunday", () => {
        test("In 1969, Good Friday was on April 4", () => {
            const date = Dates.goodFriday(1969);
            expect(date.month()).toEqual(3);
            expect(date.date()).toEqual(4);
        });

        test("In 2008, Good Friday was on March 21", () => {
            const date = Dates.goodFriday(2008);
            expect(date.month()).toEqual(2);
            expect(date.date()).toEqual(21);
        });

        test("In 2050, Good Friday will be on April 8", () => {
            const date = Dates.goodFriday(2050);
            expect(date.month()).toEqual(3);
            expect(date.date()).toEqual(8);
        });
    });

    describe("Holy Saturday is the day before Easter", () => {
        test("In 1969, Holy Saturday was on April 5", () => {
            const date = Dates.holySaturday(1969);
            expect(date.month()).toEqual(3);
            expect(date.date()).toEqual(5);
        });

        test("In 2008, Holy Saturday was on March 22", () => {
            const date = Dates.holySaturday(2008);
            expect(date.month()).toEqual(2);
            expect(date.date()).toEqual(22);
        });

        test("In 2050, Holy Saturday will be on April 9", () => {
            const date = Dates.holySaturday(2050);
            expect(date.month()).toEqual(3);
            expect(date.date()).toEqual(9);
        });
    });

    describe("Holy Week + Easter Triduum is from Palm Sunday to Holy Saturday", () => {
        test("The first day of Holy Week should start on Palm Sunday", () => {
            for (let i = 1950, il = 2100; i <= il; i++) {
                const [fistDayOfHolyWeek] = Dates.holyWeek(i);
                const palmSunday = Dates.palmSunday(i);
                expect(fistDayOfHolyWeek.isSame(palmSunday)).toEqual(true);
            }
        });

        test("The last day of Holy Week should be on Holy Saturday", () => {
            for (let i = 1950, il = 2050; i <= il; i++) {
                const [lastDayOfHolyWeek] = Dates.holyWeek(i).reverse();
                const holySaturday = Dates.holySaturday(i);
                expect(lastDayOfHolyWeek.isSame(holySaturday)).toEqual(true);
            }
        });
    });

    describe("Easter calculation based on an algorithm from The Explanatory Supplement to the Astronomical Almanac", () => {
        test("In 1969, Easter Sunday was on April 6", () => {
            const date = Dates.easter(1969);
            expect(date.month()).toEqual(3);
            expect(date.date()).toEqual(6);
        });

        test("In 2008, Easter Sunday was on March 23", () => {
            const date = Dates.easter(2008);
            expect(date.month()).toEqual(2);
            expect(date.date()).toEqual(23);
        });

        test("In 2050, Easter Sunday will be on April 10", () => {
            const date = Dates.easter(2050);
            expect(date.month()).toEqual(3);
            expect(date.date()).toEqual(10);
        });

        test("Its earliest occuring date is March 22 and latest occuring date is April 25", () => {
            for (let i = 1900, il = 2100; i <= il; i++) {
                const range = rangeOfDays(dayjs.utc(`${i}-3-22`), dayjs.utc(`${i}-4-25`));
                const easter = Dates.easter(i);
                expect(rangeContainsDate(range, easter)).toBeTrue();
            }
        });
    });

    describe("Divine Mercy Sunday (Low Sunday or the Sunday after Easter)", () => {
        test("In 1969, Divine Mercy Sunday was on April 13", () => {
            const date = Dates.divineMercySunday(1969);
            expect(date.month()).toEqual(3);
            expect(date.date()).toEqual(13);
        });

        test("In 2008, Divine Mercy Sunday was on March 30", () => {
            const date = Dates.divineMercySunday(2008);
            expect(date.month()).toEqual(2);
            expect(date.date()).toEqual(30);
        });

        test("In 2050, Divine Mercy Sunday will be on April 17", () => {
            const date = Dates.divineMercySunday(2050);
            expect(date.month()).toEqual(3);
            expect(date.date()).toEqual(17);
        });
    });

    describe("Ascension of our Lord", () => {
        describe("If it is celebrated on Thursday (39 days after Easter)", () => {
            test("In 1969, Ascension was on May 15", () => {
                const date = Dates.ascension(1969);
                expect(date.month()).toEqual(4);
                expect(date.date()).toEqual(15);
            });

            test("In 2008, Ascension was on May 1", () => {
                const date = Dates.ascension(2008);
                expect(date.month()).toEqual(4);
                expect(date.date()).toEqual(1);
            });

            test("In 2050, Ascension will be on May 19", () => {
                const date = Dates.ascension(2050);
                expect(date.month()).toEqual(4);
                expect(date.date()).toEqual(19);
            });

            test("It can occur anytime between April 30 and June 3 (inclusive)", () => {
                for (let i = 1900, il = 2100; i <= il; i++) {
                    const range = rangeOfDays(dayjs.utc(`${i}-4-30`), dayjs.utc(`${i}-6-3`));
                    const ascension = Dates.ascension(i);
                    expect(rangeContainsDate(range, ascension)).toBeTrue();
                }
            });
        });

        describe("The Nativity of John the Baptist", () => {
            test("Occurs every year on June 24", () => {
                for (let i = 1900, il = 2100; i <= il; i++) {
                    expect(Dates.birthOfJohnTheBaptist(i).date()).toEqual(24);
                    expect(Dates.birthOfJohnTheBaptist(i).month()).toEqual(5);
                }
            });
        });

        describe("The feast of Peter and Paul, Apostles", () => {
            test("Occurs every year on June 29", () => {
                for (let i = 1900, il = 2100; i <= il; i++) {
                    expect(Dates.peterAndPaulApostles(i).date()).toEqual(29);
                    expect(Dates.peterAndPaulApostles(i).month()).toEqual(5);
                }
            });
        });

        describe("The feast of the Assumption", () => {
            test("Occurs every year on August 15", () => {
                for (let i = 1900, il = 2100; i <= il; i++) {
                    expect(Dates.assumption(i).date()).toEqual(15);
                    expect(Dates.assumption(i).month()).toEqual(7);
                }
            });
        });

        describe("The feast of the All Saints", () => {
            test("Occurs every year on November 1", () => {
                for (let i = 1900, il = 2100; i <= il; i++) {
                    expect(Dates.allSaints(i).date()).toEqual(1);
                    expect(Dates.allSaints(i).month()).toEqual(10);
                }
            });
        });

        describe("If it is celebrated on Sunday (42 days after Easter)", () => {
            test("In 1969, Ascension was on May 18", () => {
                const date = Dates.ascension(1969, true);
                expect(date.month()).toEqual(4);
                expect(date.date()).toEqual(18);
            });

            test("In 2008, Ascension was on May 4", () => {
                const date = Dates.ascension(2008, true);
                expect(date.month()).toEqual(4);
                expect(date.date()).toEqual(4);
            });

            test("In 2050, Ascension will be on May 22", () => {
                const date = Dates.ascension(2050, true);
                expect(date.month()).toEqual(4);
                expect(date.date()).toEqual(22);
            });

            test("It can occur anytime between May 3 and June 6 (inclusive)", () => {
                for (let i = 1900, il = 2100; i <= il; i++) {
                    const range = rangeOfDays(dayjs.utc(`${i}-5-3`), dayjs.utc(`${i}-6-6`));
                    const ascension = Dates.ascension(i, true);
                    expect(rangeContainsDate(range, ascension)).toBeTrue();
                }
            });
        });
    });

    describe("Pentecost Sunday occurs 49 days after Easter", () => {
        test("In 1969, Pentecost Sunday was on May 25", () => {
            const date = Dates.pentecostSunday(1969);
            expect(date.month()).toEqual(4);
            expect(date.date()).toEqual(25);
        });

        test("In 2008, Pentecost Sunday was on May 11", () => {
            const date = Dates.pentecostSunday(2008);
            expect(date.month()).toEqual(4);
            expect(date.date()).toEqual(11);
        });

        test("In 2050, Pentecost Sunday will be on May 29", () => {
            const date = Dates.pentecostSunday(2050);
            expect(date.month()).toEqual(4);
            expect(date.date()).toEqual(29);
        });

        test("It can occur anytime between May 10 and June 13 (inclusive)", () => {
            for (let i = 1900, il = 2100; i <= il; i++) {
                const range = rangeOfDays(dayjs.utc(`${i}-5-10`), dayjs.utc(`${i}-6-13`));
                const pentecostSunday = Dates.pentecostSunday(i);
                expect(rangeContainsDate(range, pentecostSunday)).toBeTrue();
            }
        });
    });

    describe("Trinity Sunday occurs 56 days after Easter", () => {
        test("In 1969, Trinity Sunday was on June 1", () => {
            const date = Dates.trinitySunday(1969);
            expect(date.month()).toEqual(5);
            expect(date.date()).toEqual(1);
        });

        test("In 2008, Trinity Sunday was on May 18", () => {
            const date = Dates.trinitySunday(2008);
            expect(date.month()).toEqual(4);
            expect(date.date()).toEqual(18);
        });

        test("In 2050, Trinity Sunday will be on June 5", () => {
            const date = Dates.trinitySunday(2050);
            expect(date.month()).toEqual(5);
            expect(date.date()).toEqual(5);
        });

        test("It can occur anytime between May 17 and June 20 (inclusive)", () => {
            for (let i = 1900, il = 2100; i <= il; i++) {
                const range = rangeOfDays(dayjs.utc(`${i}-5-17`), dayjs.utc(`${i}-6-20`));
                const trinitySunday = Dates.trinitySunday(i);
                expect(rangeContainsDate(range, trinitySunday)).toBeTrue();
            }
        });
    });

    describe("Corpus Christi", () => {
        describe("If it is celebrated on Sunday (63 days after Easter)", () => {
            test("In 1969, Corpus Christi was on June 8", () => {
                const date = Dates.corpusChristi(1969);
                expect(date.month()).toEqual(5);
                expect(date.date()).toEqual(8);
            });

            test("In 2008, Corpus Christi was on May 25", () => {
                const date = Dates.corpusChristi(2008);
                expect(date.month()).toEqual(4);
                expect(date.date()).toEqual(25);
            });

            test("In 2050, Corpus Christi will be on June 12", () => {
                const date = Dates.corpusChristi(2050);
                expect(date.month()).toEqual(5);
                expect(date.date()).toEqual(12);
            });

            test("It can occur anytime between May 24 and June 27 (inclusive)", () => {
                for (let i = 1900, il = 2100; i <= il; i++) {
                    const range = rangeOfDays(dayjs.utc(`${i}-5-24`), dayjs.utc(`${i}-6-27`));
                    const corpusChristi = Dates.corpusChristi(i);
                    expect(rangeContainsDate(range, corpusChristi)).toBeTrue();
                }
            });
        });

        describe("If it is celebrated on Thursday (60 days after Easter)", () => {
            test("In 1969, Corpus Christi was on June 5", () => {
                const date = Dates.corpusChristi(1969, true);
                expect(date.month()).toEqual(5);
                expect(date.date()).toEqual(5);
            });

            test("In 2008, Corpus Christi was on May 22", () => {
                const date = Dates.corpusChristi(2008, true);
                expect(date.month()).toEqual(4);
                expect(date.date()).toEqual(22);
            });

            test("In 2050, Corpus Christi will be on June 9", () => {
                const date = Dates.corpusChristi(2050, true);
                expect(date.month()).toEqual(5);
                expect(date.date()).toEqual(9);
            });

            test("It can occur anytime between May 21 and June 24 (inclusive)", () => {
                for (let i = 1900, il = 2100; i <= il; i++) {
                    const range = rangeOfDays(dayjs.utc(`${i}-5-21`), dayjs.utc(`${i}-6-24`));
                    const corpusChristi = Dates.corpusChristi(i, true);
                    expect(rangeContainsDate(range, corpusChristi)).toBeTrue();
                }
            });
        });
    });

    describe("Sacred Heart of Jesus occurs on 68 days after Easter", () => {
        test("In 1969, Sacred Heart of Jesus was on Thursday, June 13", () => {
            const date = Dates.sacredHeartOfJesus(1969);
            expect(date.month()).toEqual(5);
            expect(date.date()).toEqual(13);
        });

        test("In 2008, Sacred Heart of Jesus was on May 30", () => {
            const date = Dates.sacredHeartOfJesus(2008);
            expect(date.month()).toEqual(4);
            expect(date.date()).toEqual(30);
        });

        test("In 2050, Sacred Heart of Jesus will be on June 17", () => {
            const date = Dates.sacredHeartOfJesus(2050);
            expect(date.month()).toEqual(5);
            expect(date.date()).toEqual(17);
        });

        test("It can occur anytime between May 29 and Jul 2 (inclusive)", () => {
            for (let i = 1900, il = 2100; i <= il; i++) {
                const range = rangeOfDays(dayjs.utc(`${i}-5-29`), dayjs.utc(`${i}-7-2`));
                const sacredHeartOfJesus = Dates.sacredHeartOfJesus(i);
                expect(rangeContainsDate(range, sacredHeartOfJesus)).toBeTrue();
            }
        });
    });

    describe("Immaculate Heart of Mary occurs on 69 days after Easter", () => {
        test("In 1969, Sacred Heart of Jesus was on Thursday, June 14", () => {
            const date = Dates.immaculateHeartOfMary(1969);
            expect(date.month()).toEqual(5);
            expect(date.date()).toEqual(14);
        });

        test("In 2008, Sacred Heart of Jesus was on May 31", () => {
            const date = Dates.immaculateHeartOfMary(2008);
            expect(date.month()).toEqual(4);
            expect(date.date()).toEqual(31);
        });

        test("In 2050, Sacred Heart of Jesus will be on June 18", () => {
            const date = Dates.immaculateHeartOfMary(2050);
            expect(date.month()).toEqual(5);
            expect(date.date()).toEqual(18);
        });

        test("It can occur anytime between May 30 and Jul 3 (inclusive)", () => {
            for (let i = 1900, il = 2100; i <= il; i++) {
                const range = rangeOfDays(dayjs.utc(`${i}-5-30`), dayjs.utc(`${i}-7-3`));
                const immaculateHeartOfMary = Dates.immaculateHeartOfMary(i);
                expect(rangeContainsDate(range, immaculateHeartOfMary)).toBeTrue();
            }
        });
    });

    describe("Christ the King is always the 34th (and last) Sunday of Ordinary Time and is the week before the First Sunday of Advent", () => {
        test("It can occur anytime between Nov 20 and Nov 26 (inclusive)", () => {
            for (let i = 1900, il = 2100; i <= il; i++) {
                const range = rangeOfDays(dayjs.utc(`${i}-11-20`), dayjs.utc(`${i}-11-26`));
                const christTheKing = Dates.christTheKing(i);
                expect(rangeContainsDate(range, christTheKing)).toBeTrue();
            }
        });
    });

    describe("Christmas day is celebrated on the 25th of December", () => {
        test("Always falls on the 25th of December every year", () => {
            for (let i = 1900, il = 2100; i <= il; i++) {
                expect(Dates.christmas(i).date()).toEqual(25);
                expect(Dates.christmas(i).month()).toEqual(11);
            }
        });
    });

    describe("Feast of the Holy Family", () => {
        // Christmas in 2011 was on Sunday
        test("occurs on December 30th if Christmas falls on a Sunday", () => {
            const date = Dates.holyFamily(2011);
            expect(date.month()).toEqual(11);
            expect(date.date()).toEqual(30);
        });

        // Christmas in 2010 was on a Saturday
        test("occurs on the Sunday after Christmas (26th December) if Christmas falls on a Saturday", () => {
            const date = Dates.holyFamily(2010);
            expect(date.month()).toEqual(11);
            expect(date.date()).toEqual(26);
        });

        // Christmas in 2009 was on a Friday
        test("In 2009, Holy Family occurs on the Sunday after Christmas (27th Dec) when Christmas wes on a Friday", () => {
            const date = Dates.holyFamily(2009);
            expect(date.month()).toEqual(11);
            expect(date.date()).toEqual(27);
        });

        // Christmas in 2008 was on a Thursday
        test("In 2008, Holy Family occurs on the Sunday after Christmas (28th Dec) when Christmas wes on a Thursday", () => {
            const date = Dates.holyFamily(2008);
            expect(date.month()).toEqual(11);
            expect(date.date()).toEqual(28);
        });
    });

    describe("Epiphany", () => {
        describe("If Epiphany is always celebrated on Jan 6", () => {
            test("Epiphany in 2001 will be on a Saturday", () => {
                expect(Dates.epiphany(2001, true).day()).toEqual(6);
            });

            test("Epiphany in 2002 will be on a Sunday", () => {
                expect(Dates.epiphany(2002, true).day()).toEqual(0);
            });

            test("Epiphany in 2003 will be on a Monday", () => {
                expect(Dates.epiphany(2003, true).day()).toEqual(1);
            });
        });

        describe("If Epiphany is not celebrated on Jan 6, Epiphany is celebrated on the 1st Sunday after the 1st Saturday in January", () => {
            test("If first day of the year 2011 is a Saturday, Mary Mother of God is on that day and Epiphany is on the next day", () => {
                // If first day of 2011, 2022 was/is a Saturday
                const first = dayjs.utc("2011-1-1");
                const target = dayjs
                    .utc("2011-1-1")
                    .add(1, "week")
                    .startOf("week");
                const date = Dates.epiphany(2011);

                expect(first.day()).toEqual(6); // First day of the year should be a Saturday
                expect(first.isSame(Dates.maryMotherOfGod(2011))).toEqual(true); // First day of the year is Mary, Mother of God
                expect(target.dayOfYear()).toEqual(2); // Epiphany should be the 2nd day of the year ( Sunday )
                expect(target.day()).toEqual(0); // Epiphany should be a Sunday
                expect(date.isSame(target)).toEqual(true);
            });

            test("If first day of the year 2012 is a Sunday, Mary Mother of God is on that Sunday and the Sunday proceeding will be Epiphany", () => {
                // First day of 2012, 2017 was a Sunday
                const first = dayjs.utc("2012-1-1");
                const target = dayjs
                    .utc("2012-1-1")
                    .add(7, "day")
                    .startOf("day");
                const date = Dates.epiphany(2012);

                expect(first.day()).toEqual(0); // First day of the year should be a Sunday
                expect(first.isSame(Dates.maryMotherOfGod(2012))).toEqual(true); // First day of the year is Mary, Mother of God
                expect(target.dayOfYear()).toEqual(8); // Epiphany should be the 8th day of the year
                expect(target.week()).toEqual(2); // Epiphany should be the 2nd Sunday day of the year
                expect(target.day()).toEqual(0); // Epiphany should be a Sunday
                expect(date.isSame(target)).toEqual(true);
            });

            test("If first day of the year 2011 is on a feria (Sat) (i.e. Mon - Sat), Epiphany will be celebrated on the Sunday proceeding", () => {
                // First day of 2014 was a Wed, First day of 2015 was a Thurs
                const first = dayjs.utc("2011-1-1");
                const target = dayjs
                    .utc("2011-1-1")
                    .add(1, "day")
                    .startOf("day");
                const date = Dates.epiphany(2011);
                expect(first.day()).toBeOneOf([1, 2, 3, 4, 5, 6]); // First day of the year should be a feria
                expect(target.dayOfYear()).toEqual(2); // Epiphany should be the 4th day of the year
                expect(target.day()).toEqual(0); // Epiphany should be a Sunday
                expect(date.isSame(target)).toEqual(true);
            });

            test("Its earliest occuring date is Jan 2 and latest occuring date is Jan 8", () => {
                expect(Dates.epiphany(1999).date()).toBeOneOf([2, 3, 4, 5, 6, 7, 8]);
                expect(Dates.epiphany(2000).date()).toBeOneOf([2, 3, 4, 5, 6, 7, 8]);
                expect(Dates.epiphany(2001).date()).toBeOneOf([2, 3, 4, 5, 6, 7, 8]);
                expect(Dates.epiphany(2002).date()).toBeOneOf([2, 3, 4, 5, 6, 7, 8]);
                expect(Dates.epiphany(2003).date()).toBeOneOf([2, 3, 4, 5, 6, 7, 8]);
                expect(Dates.epiphany(2004).date()).toBeOneOf([2, 3, 4, 5, 6, 7, 8]);
                expect(Dates.epiphany(2005).date()).toBeOneOf([2, 3, 4, 5, 6, 7, 8]);
            });
        });
    });

    describe("The Solemnity of Joseph, Husband of Mary", () => {
        test("Should fall on the 19th of March every year if not on a Sunday of Lent or during Holy Week", () => {
            for (let i = 1950, il = 2050; i <= il; i++) {
                const date = dayjs.utc(`${i}-3-19`);
                const sundays = Dates.sundaysOfLent(i);
                const holyWeekRange = Dates.holyWeek(i);
                const [firstDayOfHolyWeek] = holyWeekRange;
                const [lastDayOfHolyWeek] = holyWeekRange.reverse();
                const theRange = rangeOfDays(firstDayOfHolyWeek, lastDayOfHolyWeek);
                const onSundayOfLent = rangeContainsDate(sundays, date);

                if (onSundayOfLent || rangeContainsDate(theRange, date)) {
                    expect(true).toEqual(true);
                } else {
                    expect(date.isSame(Dates.josephHusbandOfMary(i))).toBeTrue();
                }
            }
        });

        test("If it falls on a Sunday of Lent, it should be moved to the following Monday", () => {
            for (let i = 1950, il = 2050; i <= il; i++) {
                const date = dayjs.utc(`${i}-3-19`);
                const [firstDayOfHolyWeek, , lastDayOfHolyWeek] = Dates.holyWeek(i);
                const theRange = rangeOfDays(firstDayOfHolyWeek, lastDayOfHolyWeek);
                const sundays = Dates.sundaysOfLent(i);

                let onSundayOfLent = false;
                sundays.forEach(sunday => {
                    if (date.isSame(sunday)) {
                        onSundayOfLent = true;
                    }
                });

                if (onSundayOfLent && !rangeContainsDate(theRange, date)) {
                    expect(Dates.josephHusbandOfMary(i).day()).toEqual(1);
                }
            }
        });

        test("If it falls during Holy Week, it should be moved to the Saturday preceeding Palm Sunday", () => {
            // Year 2006 fulfils this condition
            for (let i = 2006, il = 2006; i <= il; i++) {
                const date = dayjs.utc(`${i}-3-19`);
                const holyWeekRange = Dates.holyWeek(i);
                const [firstDayOfHolyWeek] = holyWeekRange;
                const [lastDayOfHolyWeek] = holyWeekRange.reverse();
                const sundays = Dates.sundaysOfLent(i);
                const theRange = rangeOfDays(firstDayOfHolyWeek, lastDayOfHolyWeek);
                const onSundayOfLent = rangeContainsDate(sundays, date);

                if (!onSundayOfLent && rangeContainsDate(theRange, date)) {
                    expect(Dates.josephHusbandOfMary(i).isSame(Dates.palmSunday(i).subtract(1, "day"))).toEqual(true);
                } else {
                    expect(Dates.josephHusbandOfMary(i).isSame(date));
                }
            }
        });
    });

    describe("The Solemnity of the Annunciation", () => {
        test("Should fall on the 25th of March every year if not during a Sunday of Lent, Holy Week or the the Octave of Easter", () => {
            for (let i = 2018, il = 2018; i <= il; i++) {
                const date = dayjs.utc(`${i}-3-25`);
                const sundaysOfLent = Dates.sundaysOfLent(i);
                const isOnASundayOfLent = rangeContainsDate(sundaysOfLent, date);

                // Shouldnt happen within holy week
                const holyWeekDates = Dates.holyWeek(i);
                const [firstDayOfHolyWeek] = holyWeekDates;
                const [lastDayOfHolyWeek] = holyWeekDates.reverse();
                const holyWeekRange = rangeOfDays(firstDayOfHolyWeek, lastDayOfHolyWeek);

                // Shouldn't happen within the octave of easter
                const octaveOfEasterDates = Dates.octaveOfEaster(i);
                const [firstDayInOctaveOfEaster] = octaveOfEasterDates;
                const [lastDayInOctaveOfEaster] = octaveOfEasterDates.reverse();
                const octaveRange = rangeOfDays(firstDayInOctaveOfEaster, lastDayInOctaveOfEaster);

                if (
                    !rangeContainsDate(holyWeekRange, date) &&
                    !rangeContainsDate(octaveRange, date) &&
                    !isOnASundayOfLent
                ) {
                    expect(Dates.annunciation(i).day()).toEqual(25);
                } else {
                    // This test case specifically doesnt care about what happens if one or
                    // all of the above condition are not met... that is tested in another use case
                    expect(true).toBeTrue();
                }
            }
        });

        test("If it occurs during Holy Week, it should be moved to the Monday after Divine Mercy Sunday", () => {
            for (let i = 1950, il = 2050; i <= il; i++) {
                const date = dayjs.utc(`${i}-3-25`);

                // Shouldnt happen within holy week
                const holyWeekDates = Dates.holyWeek(i);
                const [firstDayOfHolyWeek] = holyWeekDates;
                const [lastDayOfHolyWeek] = holyWeekDates.reverse();
                const holyWeekRange = rangeOfDays(firstDayOfHolyWeek, lastDayOfHolyWeek);

                // Shouldn't happen within the octave of easter
                const octaveOfEasterDates = Dates.octaveOfEaster(i);
                const [firstDayInOctaveOfEaster] = octaveOfEasterDates;
                const [lastDayInOctaveOfEaster] = octaveOfEasterDates.reverse();
                const octaveRange = rangeOfDays(firstDayInOctaveOfEaster, lastDayInOctaveOfEaster);

                if (rangeContainsDate(holyWeekRange, date) && !rangeContainsDate(octaveRange, date)) {
                    expect(Dates.annunciation(i).isSame(Dates.divineMercySunday(i).add(1, "day"))).toEqual(true);
                } else {
                    // This test case specifically doesnt care about what happens if one or
                    // all of the above condition are not met... that is tested in another use case
                    expect(true).toBeTrue();
                }
            }
        });

        test("If it occurs during the Octave of Easter, it should be moved to the Saturday preceeding Palm Sunday", () => {
            for (let i = 1950, il = 2050; i <= il; i++) {
                const date = dayjs.utc(`${i}-3-25`);

                const holyWeekDates = Dates.holyWeek(i);
                const [firstDayOfHolyWeek] = holyWeekDates;
                const [lastDayOfHolyWeek] = holyWeekDates.reverse();
                const holyWeekRange = rangeOfDays(firstDayOfHolyWeek, lastDayOfHolyWeek);

                const octaveOfEasterDates = Dates.octaveOfEaster(i);
                const [firstDayInOctaveOfEaster] = octaveOfEasterDates;
                const [lastDayInOctaveOfEaster] = octaveOfEasterDates.reverse();
                const octaveRange = rangeOfDays(firstDayInOctaveOfEaster, lastDayInOctaveOfEaster);

                if (!rangeContainsDate(holyWeekRange, date) && rangeContainsDate(octaveRange, date)) {
                    // Happens in the Octave of Easter, move to one day after Low Sunday
                    expect(Dates.annunciation(i).isSame(Dates.divineMercySunday(i).add(1, "day"))).toEqual(true);
                } else {
                    // This test case specifically doesnt care about what happens if one or
                    // all of the above condition are not met... that is tested in another use case
                    expect(true).toBeTrue();
                }
            }
        });
    });

    describe("The Baptism of the Lord", () => {
        describe("When Epiphany is celebrated on the 6th of Jan", () => {
            test("The Sunday following Jan 6 is the Baptism of the Lord", () => {
                for (let i = 1900, il = 2100; i <= il; i++) {
                    const epiphany = Dates.epiphany(i, true);
                    expect(
                        epiphany
                            .add(1, "week")
                            .startOf("week")
                            .isSame(Dates.baptismOfTheLord(i, true)),
                    ).toEqual(true);
                }
            });
        });

        describe("When Epiphany is not celebrated on Jan. 6 (i.e. celebrated on a Sunday)", () => {
            test("If Epiphany occurs on Sunday Jan. 7 or Sunday Jan. 8, then the Baptism of the Lord is the next day (Monday)", () => {
                for (let i = 1900, il = 2100; i <= il; i++) {
                    const epiphany = Dates.epiphany(i);
                    expect(epiphany.day()).toEqual(0);
                    if (epiphany.date() === 7 || epiphany.date() === 8) {
                        expect(epiphany.add(1, "day").isSame(Dates.baptismOfTheLord(i))).toEqual(true);
                    }
                }
            });

            test("If Epiphany occurs on a Sunday before Jan. 6, the Sunday following Epiphany is the Baptism of the Lord.", () => {
                for (let i = 1900, il = 2100; i <= il; i++) {
                    const epiphany = Dates.epiphany(i);
                    expect(epiphany.day()).toEqual(0);
                    if (epiphany.date() < 6) {
                        expect(
                            epiphany
                                .add(1, "week")
                                .startOf("week")
                                .isSame(Dates.baptismOfTheLord(i)),
                        ).toEqual(true);
                    }
                }
            });

            test("If Epiphany occurs on Sunday Jan. 6, the Baptism of the Lord occurs on the following Sunday", () => {
                for (let i = 1900, il = 2100; i <= il; i++) {
                    const epiphany = Dates.epiphany(i);
                    expect(epiphany.day()).toEqual(0);
                    if (epiphany.date() === 6) {
                        expect(
                            epiphany
                                .add(1, "week")
                                .startOf("week")
                                .isSame(Dates.baptismOfTheLord(i)),
                        ).toEqual(true);
                    }
                }
            });
        });
    });

    describe("The Presentation of the Lord", () => {
        test("Should always fall on the 2nd of February", () => {
            for (let i = 1900, il = 2100; i <= il; i++) {
                expect(Dates.presentationOfTheLord(i).month()).toEqual(1);
                expect(Dates.presentationOfTheLord(i).date()).toEqual(2);
            }
        });
    });

    describe("The Solemnity of the Immaculate Conception", () => {
        test("Should fall on the 8th of December every year if not on a Sunday of Advent", () => {
            for (let i = 1900, il = 2100; i <= il; i++) {
                const date = dayjs.utc(`${i}-12-8`);
                const sundays = Dates.sundaysOfAdvent(i);

                let onSundayOfAdvent = false;
                sundays.forEach(sunday => {
                    if (date.isSame(sunday)) {
                        onSundayOfAdvent = true;
                    }
                });

                if (!onSundayOfAdvent) {
                    expect(date.date()).toEqual(Dates.immaculateConception(i).date());
                }
            }
        });

        test("If it falls on a Sunday of Advent, it should be moved to the following Monday", () => {
            for (let i = 1900, il = 2100; i <= il; i++) {
                const date = dayjs.utc(`${i}-12-8`);
                const sundays = Dates.sundaysOfAdvent(i);

                let onSundayOfAdvent = false;
                sundays.forEach(sunday => {
                    if (date.isSame(sunday)) {
                        onSundayOfAdvent = true;
                    }
                });

                if (onSundayOfAdvent) {
                    expect(Dates.immaculateConception(i).date()).toEqual(9);
                }
            }
        });
    });
});
