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

import 'jest-extended';

import { Dates } from '@romcal/lib/dates';
import { Seasons } from '@romcal/lib/seasons';
import { setLocale } from '@romcal/lib/locales';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import Romcal, { LiturgicalDay } from '@romcal/index';

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
        expect(Dates.sundaysOfLent(i)[0].subtract(4, 'day').isSame(Dates.ashWednesday(i))).toEqual(true);
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
      expect(dates[10].key).toEqual('lent_1_saturday');
    });

    test('The 2nd Sunday of Lent should be in the 2nd week of Lent', async () => {
      expect((await Seasons.lent(2017))[11].key).toEqual('lent_2_sunday');
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
    test('The end of Christmastide is on Baptism of the Lord, so Ordinary time starts the next day', () => {
      for (let i = 1900, il = 2200; i <= il; i++) {
        const dates = Dates.datesOfEarlyOrdinaryTime(i);
        const [firstDayInEarlyOrdinaryTime] = dates;
        const [lastDayInEarlyOrdinaryTime] = dates.reverse();
        expect(firstDayInEarlyOrdinaryTime.subtract(1, 'day').isSame(Dates.baptismOfTheLord(i))).toEqual(true);
        expect(lastDayInEarlyOrdinaryTime.add(1, 'day').isSame(Dates.ashWednesday(i))).toEqual(true);
      }
    });

    test('There are typically 3 to 8 Sundays (and on rare occasions, 9 Sundays) in ordinary Time between the Baptism of the Lord to Ash Wednesday', () => {
      for (let i = 1900, il = 2200; i <= il; i++) {
        const days = Dates.datesOfEarlyOrdinaryTime(i);
        const sundays = Dates.sundaysOfEarlyOrdinaryTime(i);
        expect(sundays.length).toBeOneOf([3, 4, 5, 6, 7, 8, 9]);
        expect(days.reverse()[0].add(1, 'day').isSame(Dates.ashWednesday(i))).toEqual(true);
      }
    });

    test('There are typically 24 to 29 Sundays in Ordinary Time between the Pentecost to the 1st Sunday of Advent', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        const dates = Dates.datesOfLateOrdinaryTime(i);
        const sundays = Dates.sundaysOfLateOrdinaryTime(i);
        const [firstDayInLateOrdinaryTime] = dates;
        const [lastDayInLateOrdinaryTime] = dates.reverse();
        expect(sundays.length).toBeOneOf([23, 24, 25, 26, 27, 28, 29]);
        expect(firstDayInLateOrdinaryTime.subtract(1, 'day').isSame(Dates.pentecostSunday(i))).toEqual(true);
        expect(lastDayInLateOrdinaryTime.add(1, 'day').isSame(Dates.sundaysOfAdvent(i)[0])).toEqual(true);
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
      test('The last day of Christmas is always on Sunday on the feast of the Baptism of the Lord, if following the Ordinary Liturgical Calendar of the Western Roman Rite', () => {
        for (let i = 1900, il = 2100; i <= il; i++) {
          const [lastDayInChristmastide] = Dates.datesOfChristmas(i, false).reverse();
          expect(lastDayInChristmastide.day()).toEqual(0);
        }
      });
    });

    describe('If Epiphany is not celebrated on Jan 6 (i.e. on a Sunday)', () => {
      test('The last day of Christmas is the feast of the Baptism of the Lord', () => {
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
    test('Groups dates within seasons based on identifiers', async () => {
      const calendar = (await Romcal.calendarFor()).groupBy('liturgicalSeasons');
      for (const liturgicalSeason in calendar) {
        if (calendar.hasOwnProperty(liturgicalSeason)) {
          const dates = calendar[liturgicalSeason];
          dates.forEach((date: LiturgicalDay) => expect(date.seasons[0]).toEqual(liturgicalSeason));
        }
      }
    });

    test('The liturgical color for Ordinary Time is green', async () => {
      (await Seasons.earlyOrdinaryTime(2015, false)).forEach((date) => {
        expect(date.liturgicalColors && date.liturgicalColors[0]).toEqual(LiturgicalColors.GREEN);
      });
      (await Seasons.lateOrdinaryTime(2015)).forEach((date) => {
        expect(date.liturgicalColors && date.liturgicalColors[0]).toEqual(LiturgicalColors.GREEN);
      });
    });

    test('The liturgical color for Lent and Advent is purple, except for the 4th Sunday of Lent and 3rd Sunday of Advent, which is rose', async () => {
      const lentDates = await Seasons.lent(2015);
      lentDates.forEach((date) => {
        if (date.key === 'lent_4_sunday') {
          expect(date.liturgicalColors && date.liturgicalColors[0]).toEqual(LiturgicalColors.ROSE);
          expect(date.liturgicalColors && date.liturgicalColors[1]).toEqual(LiturgicalColors.PURPLE);
        } else {
          expect(date.liturgicalColors && date.liturgicalColors[0]).toEqual(LiturgicalColors.PURPLE);
        }
      });

      const adventDates = await Seasons.advent(2015);
      adventDates.forEach((date) => {
        if (date.key === 'advent_3_sunday') {
          expect(date.liturgicalColors && date.liturgicalColors[0]).toEqual(LiturgicalColors.ROSE);
          expect(date.liturgicalColors && date.liturgicalColors[1]).toEqual(LiturgicalColors.PURPLE);
        } else {
          expect(date.liturgicalColors && date.liturgicalColors[0]).toEqual(LiturgicalColors.PURPLE);
        }
      });
    });

    test('The liturgical color for Christmastide and Eastertide is white', async () => {
      (await Seasons.christmastide(2015, false)).forEach((date) => {
        expect(date.liturgicalColors && date.liturgicalColors[0]).toStrictEqual(LiturgicalColors.WHITE);
      });
      (await Seasons.eastertide(2015)).forEach((date) => {
        expect(date.liturgicalColors && date.liturgicalColors[0]).toEqual(LiturgicalColors.WHITE);
      });
    });
  });
});
