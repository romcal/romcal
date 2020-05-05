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

import dayjs from 'dayjs';

import * as Dates from '@romcal/lib/Dates';
import * as Seasons from '@romcal/lib/Seasons';
import { Dictionary } from '@romcal/utils/type-guards';
import { DateItem } from '@romcal/models/romcal-date-item';
import { setLocale } from '@romcal/lib/Locales';
import { LITURGICAL_COLORS } from '@romcal/constants/liturgical-colors.constant';
import Romcal from '@romcal/index';

describe('Testing date range functions', () => {
  // The locale needs to be set before any tests below can run properly
  beforeAll(async () => {
    await setLocale('en');
  });

  describe('The Season of Advent', () => {
    test('There are always 4 Sundays in advent', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        expect(Dates.sundaysOfAdvent(i).length).toEqual(4);
      }
    });

    test('Depending on the day of Christmas, the 1st Sunday of Advent will be between Nov 27 - Dec 3', () => {
      expect(Dates.sundaysOfAdvent(2005)[0].date()).toEqual(27);
      expect(Dates.sundaysOfAdvent(2000)[0].date()).toEqual(3);
      expect(Dates.sundaysOfAdvent(2001)[0].date()).toEqual(2);
      expect(Dates.sundaysOfAdvent(2002)[0].date()).toEqual(1);
      expect(Dates.sundaysOfAdvent(2003)[0].date()).toEqual(30);
      expect(Dates.sundaysOfAdvent(1998)[0].date()).toEqual(29);
      expect(Dates.sundaysOfAdvent(1999)[0].date()).toEqual(28);
    });

    test('Depending on the day of Christmas, the number of days in Advent varies', () => {
      if (Dates.christmas(2005).day() === 0) {
        expect(Dates.datesOfAdvent(2005).length).toEqual(28);
      }
      if (Dates.christmas(2000).day() === 1) {
        expect(Dates.datesOfAdvent(2000).length).toEqual(22);
      }
      if (Dates.christmas(2001).day() === 2) {
        expect(Dates.datesOfAdvent(2001).length).toEqual(23);
      }
      if (Dates.christmas(2002).day() === 3) {
        expect(Dates.datesOfAdvent(2002).length).toEqual(24);
      }
      if (Dates.christmas(2003).day() === 4) {
        expect(Dates.datesOfAdvent(2003).length).toEqual(25);
      }
      if (Dates.christmas(1998).day() === 5) {
        expect(Dates.datesOfAdvent(1998).length).toEqual(26);
      }
      if (Dates.christmas(1999).day() === 6) {
        expect(Dates.datesOfAdvent(1999).length).toEqual(27);
      }
    });
  });

  describe('The Season of Lent in the Liturgical Calendar', () => {
    test('It is typically 6 weeks long', () => {
      for (let i = 1900, il = 2200; i <= il; i++) {
        expect(Dates.sundaysOfLent(i).length).toEqual(6);
      }
    });

    test('The first Sunday of Lent should be 4 days after Ash Wednesday', () => {
      for (let i = 1900, il = 2200; i <= il; i++) {
        expect(
          Dates.sundaysOfLent(i)[0]
            .subtract(4, 'day')
            .isSame(Dates.ashWednesday(i)),
        ).toEqual(true);
      }
    });

    test('The last Sunday of Lent should be Palm Sunday', () => {
      for (let i = 1900, il = 2200; i <= il; i++) {
        const [lastSundayOfLent] = Dates.sundaysOfLent(i).reverse();
        expect(lastSundayOfLent.isSame(Dates.palmSunday(i))).toEqual(true);
      }
    });

    test('The Saturday in the week after Ash Wednesday should be in the 1st week of Lent', async () => {
      const dates = await Seasons.lent(2017);
      expect(dates[10].key).toEqual('saturdayOfTheFirstWeekOfLent');
    });

    test('The 2nd Sunday of Lent should be in the 2nd week of Lent', async () => {
      expect((await Seasons.lent(2017))[11].key).toEqual('secondSundayOfLent');
    });
  });

  describe('The Octave of Easter', () => {
    test('Should be 8 days long', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        expect(Dates.datesInOctaveOfEaster(i).length).toEqual(8);
      }
    });

    test('The first day of the octave should be on Easter Sunday', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        expect(Dates.datesInOctaveOfEaster(i)[0].isSame(Dates.easter(i))).toEqual(true);
      }
    });

    test('The last day of the octave should be on Divine Mercy Sunday', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        const [lastDayInTheOctaveOfEaster] = Dates.datesInOctaveOfEaster(i).reverse();
        expect(lastDayInTheOctaveOfEaster.isSame(Dates.divineMercySunday(i))).toEqual(true);
      }
    });
  });

  describe('Eastertide', () => {
    test('Should be 50 days long', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        expect(Dates.datesOfEaster(i).length).toEqual(50);
      }
    });

    test('The first Sunday of Easter should start on Easter Sunday', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        const [firstSundayOfEaster] = Dates.sundaysOfEaster(i);
        expect(firstSundayOfEaster.isSame(Dates.easter(i))).toEqual(true);
      }
    });

    test('The last Sunday of Easter should be on Pentecost Sunday', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        const [lastSundayOfEaster] = Dates.sundaysOfEaster(i).reverse();
        expect(lastSundayOfEaster.isSame(Dates.pentecostSunday(i))).toEqual(true);
      }
    });
  });

  describe('Ordinary Time in the Liturgical Calendar', () => {
    test('If the end of Christmastide is on Epiphany, Ordinary time starts the next day', () => {
      for (let i = 1900, il = 2200; i <= il; i++) {
        const dates = Dates.datesOfEarlyOrdinaryTime(i, 't');
        const [firstDayInEarlyOrdinaryTime] = dates;
        const [lastDayInEarlyOrdinaryTime] = dates.reverse();
        expect(firstDayInEarlyOrdinaryTime.subtract(1, 'day').isSame(Dates.epiphany(i))).toEqual(true);
        expect(lastDayInEarlyOrdinaryTime.add(1, 'day').isSame(Dates.ashWednesday(i))).toEqual(true);
      }
    });

    test('If the end of Christmastide is on Baptism of the Lord, Ordinary time starts the next day', () => {
      for (let i = 1900, il = 2200; i <= il; i++) {
        const dates = Dates.datesOfEarlyOrdinaryTime(i, 'o');
        const [firstDayInEarlyOrdinaryTime] = dates;
        const [lastDayInEarlyOrdinaryTime] = dates.reverse();
        expect(firstDayInEarlyOrdinaryTime.subtract(1, 'day').isSame(Dates.baptismOfTheLord(i))).toEqual(true);
        expect(lastDayInEarlyOrdinaryTime.add(1, 'day').isSame(Dates.ashWednesday(i))).toEqual(true);
      }
    });

    test('If the end of Christmastide is on Presentation of the Lord, Ordinary time starts the next day', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        const dates = Dates.datesOfEarlyOrdinaryTime(i, 'e');
        const [firstDayInEarlyOrdinaryTime] = dates;
        const [lastDayInEarlyOrdinaryTime] = dates.reverse();
        expect(firstDayInEarlyOrdinaryTime.subtract(1, 'day').isSame(Dates.presentationOfTheLord(i))).toEqual(true);
        expect(lastDayInEarlyOrdinaryTime.add(1, 'day').isSame(Dates.ashWednesday(i))).toEqual(true);
      }
    });

    test('There are typically 3 to 8 Sundays (and on rare occasions, 9 Sundays) in ordinary Time between the Baptism of the Lord to Ash Wednesday', () => {
      for (let i = 1900, il = 2200; i <= il; i++) {
        const days = Dates.datesOfEarlyOrdinaryTime(i);
        const sundays = Dates.sundaysOfEarlyOrdinaryTime(i);
        expect(sundays.length).toBeOneOf([3, 4, 5, 6, 7, 8, 9]);
        expect(
          days
            .reverse()[0]
            .add(1, 'day')
            .isSame(Dates.ashWednesday(i)),
        ).toEqual(true);
      }
    });

    test('There are typically 24 to 29 Sundays in Ordinary Time between the Pentecost to the 1st Sunday of Advent', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        const dates = Dates.datesOfLaterOrdinaryTime(i);
        const sundays = Dates.sundaysOfLaterOrdinaryTime(i);
        const [firstDayInLaterOrdinaryTime] = dates;
        const [lastDayInLaterOrdinaryTime] = dates.reverse();
        expect(sundays.length).toBeOneOf([23, 24, 25, 26, 27, 28, 29]);
        expect(firstDayInLaterOrdinaryTime.subtract(1, 'day').isSame(Dates.pentecostSunday(i))).toEqual(true);
        expect(lastDayInLaterOrdinaryTime.add(1, 'day').isSame(Dates.sundaysOfAdvent(i)[0])).toEqual(true);
      }
    });
  });

  describe('The Octave of Christmas', () => {
    test('Should be 8 days long from Christmas to the feast of the Holy Family', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        expect(Dates.octaveOfChristmas(i).length).toEqual(8);
      }
    });
  });

  describe('Christmastide', () => {
    describe('If Epiphany is celebrated on Jan 6', () => {
      test('The last day of Christmas is on 6th Jan, if following the Traditional end of the Christmas season', () => {
        for (let i = 1900, il = 2100; i <= il; i++) {
          const [lastDayInChristmastide] = Dates.datesOfChristmas(i, 't', false).reverse();
          const target = dayjs.utc(`${i + 1}-1-6`);
          expect(lastDayInChristmastide.isSame(target)).toEqual(true);
        }
      });

      test('The last day of Christmas is always on Sunday on the feast of the Baptism of the Lord, if following the Ordinary Liturgical Calendar of the Western Roman Rite', () => {
        for (let i = 1900, il = 2100; i <= il; i++) {
          const [lastDayInChristmastide] = Dates.datesOfChristmas(i, 'o', false).reverse();
          expect(lastDayInChristmastide.day()).toEqual(0);
        }
      });
    });

    describe('If Epiphany is not celebrated on Jan 6 (i.e. on a Sunday)', () => {
      test('If following the Traditional end of the Christmas season, the last day of Christmas is on Epiphany', () => {
        for (let i = 1900, il = 2100; i <= il; i++) {
          const [lastDayInChristmastide] = Dates.datesOfChristmas(i, 't').reverse();
          expect(lastDayInChristmastide.isSame(Dates.epiphany(i + 1))).toEqual(true);
        }
      });

      test('If following the Ordinary Liturgical Calendar of the Western Roman Rite, the last day of Christmas is the feast of the Baptism of the Lord', () => {
        for (let i = 1900, il = 2100; i <= il; i++) {
          const [lastDayInChristmastide] = Dates.datesOfChristmas(i, 'o').reverse();
          expect(lastDayInChristmastide.isSame(Dates.baptismOfTheLord(i + 1))).toEqual(true);
        }
      });

      test('If following the Extraordinary Liturgical Calendar of the Western Roman Rite, the last day of Christmas is on the Feast of the Presentation', () => {
        for (let i = 1900, il = 2100; i <= il; i++) {
          const [lastDayInChristmastide] = Dates.datesOfChristmas(i, 'e').reverse();
          expect(lastDayInChristmastide.isSame(Dates.presentationOfTheLord(i + 1))).toEqual(true);
        }
      });

      test('If no rule is specified, the last day of Christmas will default to the Feast of the Baptism', () => {
        for (let i = 1900, il = 2100; i <= il; i++) {
          const [lastDayInChristmastide] = Dates.datesOfChristmas(i).reverse();
          expect(lastDayInChristmastide.isSame(Dates.baptismOfTheLord(i + 1))).toEqual(true);
        }
      });
    });
  });
});

describe('Testing seasons utility functions', () => {
  // The locale needs to be set before any tests below can run properly
  beforeAll(async () => {
    await setLocale('en');
  });

  describe('The liturgical year is divided to a number of seasons', () => {
    let calendar: Dictionary<DateItem[]>;
    beforeAll(async () => {
      calendar = Romcal.queryFor(await Romcal.calendarFor(), { group: 'liturgicalSeasons' });
    });

    test('Groups dates within seasons based on identifiers', () => {
      Object.keys(calendar).forEach(liturgicalSeason => {
        const dates = calendar[liturgicalSeason];
        dates.forEach(date => expect(date.data.season[0].key).toEqual(liturgicalSeason));
      });
    });

    test('The liturgical color for Ordinary Time is green', async () => {
      (await Seasons.earlyOrdinaryTime(2015, 'o', false)).forEach(date => {
        expect(date.data?.meta?.liturgicalColor?.key).toEqual(LITURGICAL_COLORS.GREEN.key);
      });
      (await Seasons.laterOrdinaryTime(2015)).forEach(date => {
        expect(date.data?.meta?.liturgicalColor?.key).toEqual(LITURGICAL_COLORS.GREEN.key);
      });
    });

    test('The liturgical color for Lent and Advent is purple, except for the 4th Sunday of Lent and 3rd Sunday of Advent, which is rose', async () => {
      const lentDates = await Seasons.lent(2015);
      lentDates.forEach(date => {
        if (date.key === 'fourthSundayOfLent') {
          expect(date.data?.meta?.liturgicalColor?.key).toStrictEqual(LITURGICAL_COLORS.ROSE.key);
        } else {
          expect(date.data?.meta?.liturgicalColor?.key).toStrictEqual(LITURGICAL_COLORS.PURPLE.key);
        }
      });

      const adventDates = await Seasons.advent(2015);
      adventDates.forEach(date => {
        if (date.key === 'thirdSundayOfAdvent') {
          expect(date.data?.meta?.liturgicalColor?.key).toEqual(LITURGICAL_COLORS.ROSE.key);
        } else {
          expect(date.data?.meta?.liturgicalColor?.key).toEqual(LITURGICAL_COLORS.PURPLE.key);
        }
      });
    });

    test('The liturgical color for Christmastide and Eastertide is white', async () => {
      (await Seasons.christmastide(2015, 'o', false)).forEach(date => {
        expect(date.data?.meta?.liturgicalColor?.key).toStrictEqual(LITURGICAL_COLORS.WHITE.key);
      });
      (await Seasons.eastertide(2015)).forEach(date => {
        expect(date.data?.meta?.liturgicalColor?.key).toStrictEqual(LITURGICAL_COLORS.WHITE.key);
      });
    });
  });
});
