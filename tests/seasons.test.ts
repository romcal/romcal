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
    FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/

import Romcal, { LiturgicalColors, LiturgicalDay, LiturgicalSeasons, Ranks } from '@romcal/index';
import 'jest-extended';

describe('Testing date range functions', () => {
  describe('The Season of Advent', () => {
    test('There are always 4 Sundays in advent', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        expect(new Romcal().dates(i).allSundaysOfAdvent().length).toEqual(4);
      }
    });

    test('Depending on the day of Christmas, the 1st Sunday of Advent will be between Nov 27 - Dec 3', () => {
      const romcal = new Romcal();
      expect(romcal.dates(2005).allSundaysOfAdvent()[0].date()).toEqual(27);
      expect(romcal.dates(2000).allSundaysOfAdvent()[0].date()).toEqual(3);
      expect(romcal.dates(2001).allSundaysOfAdvent()[0].date()).toEqual(2);
      expect(romcal.dates(2001).allSundaysOfAdvent(2002)[0].date()).toEqual(1);
      expect(romcal.dates(2003).allSundaysOfAdvent()[0].date()).toEqual(30);
      expect(romcal.dates(1998).allSundaysOfAdvent()[0].date()).toEqual(29);
      expect(romcal.dates(1999).allSundaysOfAdvent()[0].date()).toEqual(28);
    });

    test('Depending on the day of Christmas, the number of days in Advent varies', () => {
      const romcal = new Romcal();
      if (romcal.dates().christmas(2005).day() === 0) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(romcal.dates(2005).allDatesOfAdvent().length).toEqual(28);
      }
      if (romcal.dates().christmas(2000).day() === 1) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(romcal.dates(2000).allDatesOfAdvent().length).toEqual(22);
      }
      if (romcal.dates().christmas(2001).day() === 2) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(romcal.dates(2001).allDatesOfAdvent().length).toEqual(23);
      }
      if (romcal.dates().christmas(2002).day() === 3) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(romcal.dates(2002).allDatesOfAdvent().length).toEqual(24);
      }
      if (romcal.dates().christmas(2003).day() === 4) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(romcal.dates(2003).allDatesOfAdvent().length).toEqual(25);
      }
      if (romcal.dates().christmas(1998).day() === 5) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(romcal.dates(1998).allDatesOfAdvent().length).toEqual(26);
      }
      if (romcal.dates().christmas(1999).day() === 6) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(romcal.dates(1999).allDatesOfAdvent().length).toEqual(27);
      }
    });
  });

  describe('The Season of Lent in the Liturgical Calendar', () => {
    test('It is typically 6 weeks long', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2200; i <= il; i++) {
        expect(romcal.dates(i).allSundaysOfLent().length).toEqual(6);
      }
    });

    test('The first Sunday of Lent should be 4 days after Ash Wednesday', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2200; i <= il; i++) {
        const dates = romcal.dates(i);
        expect(dates.allSundaysOfLent()[0].subtract(4, 'day').isSame(dates.ashWednesday())).toEqual(
          true,
        );
      }
    });

    test('The last Sunday of Lent should be Palm Sunday', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2200; i <= il; i++) {
        const dates = romcal.dates(i);
        const [lastSundayOfLent] = dates.allSundaysOfLent().reverse();
        expect(lastSundayOfLent.isSame(dates.palmSunday())).toEqual(true);
      }
    });

    test('The Saturday in the week after Ash Wednesday should be in the 1st week of Lent', async () => {
      const dates = Object.values(await new Romcal().generateCalendar(2017))
        .flatMap((arr) => arr[0])
        .filter((d) => d.seasons.includes(LiturgicalSeasons.LENT));
      expect(dates[10].key).toEqual('lent_1_saturday');
    });

    test('The 2nd Sunday of Lent should be in the 2nd week of Lent', async () => {
      const dates = Object.values(await new Romcal().generateCalendar(2017))
        .flatMap((arr) => arr[0])
        .filter((d) => d.seasons.includes(LiturgicalSeasons.LENT));
      expect(dates[11].key).toEqual('lent_2_sunday');
    });
  });

  describe('The Octave of Easter', () => {
    const romcal = new Romcal();
    test('Should be 8 days long', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        expect(romcal.dates(i).allDatesInOctaveOfEaster().length).toEqual(8);
      }
    });

    test('The first day of the octave should be on Easter Sunday', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2100; i <= il; i++) {
        const dates = romcal.dates(i);
        expect(dates.allDatesInOctaveOfEaster()[0].isSame(dates.easterSunday())).toEqual(true);
      }
    });

    test('The last day of the octave should be on Divine Mercy Sunday', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2100; i <= il; i++) {
        const dates = romcal.dates(i);
        const [lastDayInTheOctaveOfEaster] = dates.allDatesInOctaveOfEaster().reverse();
        expect(lastDayInTheOctaveOfEaster.isSame(dates.divineMercySunday())).toEqual(true);
      }
    });
  });

  describe('Eastertide', () => {
    test('Should be 50 days long', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2100; i <= il; i++) {
        const dates = romcal.dates(i);
        expect(dates.allDatesOfEasterTime().length).toEqual(50);
      }
    });

    test('The first Sunday of Easter should start on Easter Sunday', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2100; i <= il; i++) {
        const dates = romcal.dates(i);
        const [firstSundayOfEaster] = dates.allSundaysOfEaster();
        expect(firstSundayOfEaster.isSame(dates.easterSunday())).toEqual(true);
      }
    });

    test('The last Sunday of Easter should be on Pentecost Sunday', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2100; i <= il; i++) {
        const dates = romcal.dates(i);
        const [lastSundayOfEaster] = dates.allSundaysOfEaster().reverse();
        expect(lastSundayOfEaster.isSame(dates.pentecostSunday())).toEqual(true);
      }
    });
  });

  describe('Ordinary Time in the Liturgical Calendar', () => {
    test('The end of Christmastide is on Baptism of the Lord, so Ordinary time starts the next day', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2200; i <= il; i++) {
        const dates = romcal.dates(i);
        const ordinaryTime = dates.allDatesOfEarlyOrdinaryTime();
        const [firstDayInEarlyOrdinaryTime] = ordinaryTime;
        const [lastDayInEarlyOrdinaryTime] = ordinaryTime.reverse();
        expect(
          firstDayInEarlyOrdinaryTime.subtract(1, 'day').isSame(dates.baptismOfTheLord()),
        ).toEqual(true);
        expect(lastDayInEarlyOrdinaryTime.add(1, 'day').isSame(dates.ashWednesday())).toEqual(true);
      }
    });

    test('There are typically 3 to 8 Sundays (and on rare occasions, 9 Sundays) in ordinary Time between the Baptism of the Lord to Ash Wednesday', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2200; i <= il; i++) {
        const dates = romcal.dates(i);
        const days = dates.allDatesOfEarlyOrdinaryTime();
        const sundays = dates.sundaysOfEarlyOrdinaryTime();
        expect(sundays.length).toBeOneOf([3, 4, 5, 6, 7, 8, 9]);
        expect(days.reverse()[0].add(1, 'day').isSame(dates.ashWednesday())).toEqual(true);
      }
    });

    test('There are typically 24 to 29 Sundays in Ordinary Time between the Pentecost to the 1st Sunday of Advent', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2100; i <= il; i++) {
        const dates = romcal.dates(i);
        const lateOrdinaryTime = dates.allDatesOfLateOrdinaryTime();
        const sundays = dates.allSundaysOfLateOrdinaryTime();
        const [firstDayInLateOrdinaryTime] = lateOrdinaryTime;
        const [lastDayInLateOrdinaryTime] = lateOrdinaryTime.reverse();
        expect(sundays.length).toBeOneOf([23, 24, 25, 26, 27, 28, 29]);
        expect(
          firstDayInLateOrdinaryTime.subtract(1, 'day').isSame(dates.pentecostSunday()),
        ).toEqual(true);
        expect(
          lastDayInLateOrdinaryTime.add(1, 'day').isSame(dates.allSundaysOfAdvent()[0]),
        ).toEqual(true);
      }
    });
  });

  describe('The Octave of Christmas', () => {
    const romcal = new Romcal();
    test('Should be 8 days long from Christmas to the feast of the Holy Family', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        const dates = romcal.dates(i);
        expect(dates.allDatesInOctaveOfChristmas().length).toEqual(8);
      }
    });
  });

  describe('Christmastide', () => {
    describe('If Epiphany is celebrated on Jan 6', () => {
      test('The last day of Christmas is always on Sunday on the feast of the Baptism of the Lord, if following the Ordinary Liturgical Calendar of the Western Roman Rite', () => {
        const romcal = new Romcal({ epiphanyOnSunday: false });
        for (let i = 1900, il = 2100; i <= il; i++) {
          const dates = romcal.dates(i);
          const [lastDayInChristmastide] = dates.allDatesOfChristmasTime().reverse();
          expect(lastDayInChristmastide.day()).toEqual(0);
        }
      });
    });

    describe('If Epiphany is not celebrated on Jan 6 (i.e. on a Sunday)', () => {
      test('The last day of Christmas is the feast of the Baptism of the Lord', () => {
        const romcal = new Romcal();
        for (let i = 1900, il = 2100; i <= il; i++) {
          const dates = romcal.dates(i);
          const [lastDayInChristmastide] = dates.allDatesOfChristmasTime(i).reverse();
          expect(lastDayInChristmastide.isSame(dates.baptismOfTheLord(i + 1))).toEqual(true);
        }
      });
    });
  });
});

describe('Testing seasons utility functions', () => {
  describe('Holy days of obligation', () => {
    test('All Sundays are holy days of obligation', async () => {
      const sundays: LiturgicalDay[] = Object.values(await new Romcal().generateCalendar())
        .flat()
        .filter((item) => item.calendar.dayOfWeek === 0);
      sundays.every((item) => item.isHolyDayOfObligation);
      expect(sundays.every((item) => item.isHolyDayOfObligation)).toBeTrue();
    });
  });

  describe('The liturgical year is divided to a number of seasons', () => {
    test('The liturgical color for Ordinary Time is green', async () => {
      const calendar = Object.values(await new Romcal().generateCalendar(2015)).flat();
      calendar
        .filter(
          (d) =>
            d.seasons.includes(LiturgicalSeasons.ORDINARY_TIME) &&
            (d.rank === Ranks.SUNDAY || d.rank === Ranks.WEEKDAY),
        )
        .forEach((date) => {
          expect(date.liturgicalColors[0]).toEqual(LiturgicalColors.GREEN);
        });
    });

    test('The liturgical color for Lent and Advent is purple, except for the 4th Sunday of Lent and 3rd Sunday of Advent, which is rose', async () => {
      const calendar = Object.values(await new Romcal().generateCalendar(2015)).flat();

      calendar
        .filter(
          (d) =>
            (d.seasons.includes(LiturgicalSeasons.LENT) ||
              d.seasons.includes(LiturgicalSeasons.ADVENT)) &&
            (d.rank === Ranks.SUNDAY || d.rank === Ranks.WEEKDAY) &&
            d.key !== 'palm_sunday',
        )
        .forEach((date) => {
          if (date.key === 'lent_4_sunday' || date.key === 'advent_3_sunday') {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(date.liturgicalColors[0]).toEqual(LiturgicalColors.ROSE);
            // eslint-disable-next-line jest/no-conditional-expect
            expect(date.liturgicalColors[1]).toEqual(LiturgicalColors.PURPLE);
          } else {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(date.liturgicalColors[0]).toEqual(LiturgicalColors.PURPLE);
          }
        });
    });

    test('The liturgical color for Christmastide and Eastertide is white', async () => {
      const calendar = Object.values(await new Romcal().generateCalendar(2015)).flat();

      calendar
        .filter(
          (d) =>
            (d.seasons.includes(LiturgicalSeasons.CHRISTMAS_TIME) ||
              d.seasons.includes(LiturgicalSeasons.EASTER_TIME)) &&
            (d.rank === Ranks.SUNDAY || d.rank === Ranks.WEEKDAY) &&
            d.key !== 'pentecost_sunday',
        )
        .forEach((date) => {
          // eslint-disable-next-line jest/no-conditional-expect
          expect(date.liturgicalColors[0]).toEqual(LiturgicalColors.WHITE);
        });
    });
  });
});
