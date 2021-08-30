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

import 'jest-extended';
import Romcal from '../lib';
import { Ranks } from '../lib/constants/ranks';
import { getUtcDateFromString, isSameDate, subtractsDays } from '../lib/utils/dates';
import { slovakia_sk } from '../tmp/bundles/slovakia/sk';

describe('Testing specific feasts and memorials', () => {
  describe('The memorial of the Blessed Virgin Mary, Mother of the Church', () => {
    test('Should be celebrated on the Monday after Pentecost', async () => {
      const romcal = new Romcal();
      const pentecostSunday = romcal.dates().pentecostSunday();
      const maryMotherOfTheChurch = await romcal.getOneLiturgicalDay('mary_mother_of_the_church', {
        computeInWholeYear: true,
      });
      const dayBeforeMaryMotherOfTheChurch = subtractsDays(
        getUtcDateFromString(maryMotherOfTheChurch!.date),
        1,
      );
      expect(getUtcDateFromString(maryMotherOfTheChurch!.date).getDay()).toEqual(1);
      expect(dayBeforeMaryMotherOfTheChurch.getDay()).toEqual(0);
      expect(isSameDate(dayBeforeMaryMotherOfTheChurch, pentecostSunday)).toBeTruthy();
    });

    test('Should take precedence in the event of coincidence with another memorial of a saint or blessed', async () => {
      // In 2020, monday after Pentecost is June 1
      const juneDates = Object.values(await new Romcal().generateCalendar(2020))
        .flat()
        .filter((d) => new Date(d.date).getUTCMonth() === 5);
      // according to the general calendar, June 1 is the memorial of saint Justin, Martyr
      const maybeSaintJustinMartyr = juneDates[0];
      expect(maybeSaintJustinMartyr.key).toEqual('mary_mother_of_the_church');
    });
  });

  describe('The celebration of Saint Mary Magdalene', () => {
    test('Should be ranked as a feast and should be celebrated on the July 22', async () => {
      const romcal = new Romcal();
      const maryMagdalene = await romcal.getOneLiturgicalDay('mary_magdalene', {
        year: 2017,
        computeInWholeYear: true,
      });

      expect(getUtcDateFromString(maryMagdalene!.date).getDate()).toEqual(22);
      expect(getUtcDateFromString(maryMagdalene!.date).getMonth()).toEqual(6);
      expect(maryMagdalene?.rank).toEqual(Ranks.Feast);
    });
  });

  describe('The celebrations of Pope Saint John XXIII and Pope Saint John Paul II', () => {
    test('Should be celebrated as optional memorials', async () => {
      const romcal = new Romcal();

      const johnXxiiiPope = await romcal.getOneLiturgicalDay('john_xxiii_pope', {
        year: 2016,
        computeInWholeYear: true,
      });

      const johnPaulIiPope = await romcal.getOneLiturgicalDay('john_paul_ii_pope', {
        year: 2016,
        computeInWholeYear: true,
      });

      expect(johnXxiiiPope?.isOptional).toBeTrue();
      expect(johnPaulIiPope?.isOptional).toBeTrue();
    });
  });

  describe('The Feast of the Exultation of the Cross', () => {
    test('Is celebrated on the 14th of September', async () => {
      const exaltationOfTheHolyCross = await new Romcal({
        localizedCalendar: slovakia_sk,
      }).getOneLiturgicalDay('exaltation_of_the_holy_cross', {
        year: 2018,
        computeInWholeYear: true,
      });

      expect(getUtcDateFromString(exaltationOfTheHolyCross!.date).getDate()).toEqual(14);
      expect(getUtcDateFromString(exaltationOfTheHolyCross!.date).getMonth()).toEqual(8);
    });
  });

  describe('The Sunday of the Word of God', () => {
    test('Should be celebrated on the 3rd Sunday of Ordinary Time', async () => {
      const sundayOfTheWordOfGod = await new Romcal({
        localizedCalendar: slovakia_sk,
      }).getOneLiturgicalDay('sunday_of_the_word_of_god', {
        year: 2020,
        computeInWholeYear: true,
      });

      expect(sundayOfTheWordOfGod!.calendar.weekOfSeason).toEqual(3);
    });
  });
});
