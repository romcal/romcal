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
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { RomcalDateItemModel } from '@romcal/models/romcal-date-item/romcal-date-item.model';
import Romcal from '@romcal/index';
import { Seasons } from '@romcal/lib/Seasons';
import { Dates } from '@romcal/lib/Dates';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';

dayjs.extend(utc);

describe('Testing specific feasts and memorials', () => {
  describe('The memorial of the Blessed Virgin Mary, Mother of the Church', () => {
    test('Should be celebrated on the Monday after Pentecost', async () => {
      const dates = await Romcal.calendarFor(); // Get the calendar for the current year
      const pentecostSunday = Dates.pentecostSunday(dayjs.utc().year());
      const maryMotherOfTheChurch = dates.find((d) => d.key === 'maryMotherOfTheChurch');
      const dayBeforeMaryMotherOfTheChurch = dayjs.utc(maryMotherOfTheChurch?.date).subtract(1, 'day');
      expect(dayjs.utc(maryMotherOfTheChurch?.date).day()).toEqual(1);
      expect(dayBeforeMaryMotherOfTheChurch?.day()).toEqual(0);
      expect(dayBeforeMaryMotherOfTheChurch?.isSame(pentecostSunday)).toBeTruthy();
    });

    test('Should take precedence in the event of coincidence with another memorial of a saint or blessed', async () => {
      // In 2020, monday after Pentecost is June 1
      const juneDates = (await Romcal.calendarFor({
        year: 2020,
        query: {
          month: 5,
        },
      })) as RomcalDateItemModel[];
      // according to the general calendar, June 1 is the memorial of saint Justin, Martyr
      const maybeSaintJustinMartyr = juneDates[0];
      expect(maybeSaintJustinMartyr.key).toEqual('maryMotherOfTheChurch');
    });
  });

  describe('The celebration of Saint Mary Magdalene', () => {
    test('Should be ranked as a feast and should be celebrated on the July 22', async () => {
      const dates = await Romcal.calendarFor(2017);
      const saintMaryMagdalene = dates.find((d) => {
        return d.key === 'saintMaryMagdalene';
      });
      expect(dayjs.utc(saintMaryMagdalene?.date).date()).toEqual(22);
      expect(dayjs.utc(saintMaryMagdalene?.date).month()).toEqual(6);
      expect(saintMaryMagdalene?.rank).toEqual(Ranks.FEAST);
    });
  });

  describe('The celebrations of Pope Saint John XXIII and Pope Saint John Paul II', () => {
    test('Should be celebrated as optional memorials', async () => {
      const dates = await Romcal.calendarFor({ year: 2016, outputOptionalMemorials: true });

      const popeSaintJohnXXIII = dates.find((d) => d.key === 'saintJohnXxiiiPope');
      const popeSaintJohnPaulII = dates.find((d) => d.key === 'saintJohnPaulIiPope');

      expect(popeSaintJohnXXIII?.rank).toEqual(Ranks.OPT_MEMORIAL);
      expect(popeSaintJohnPaulII?.rank).toEqual(Ranks.OPT_MEMORIAL);
    });
  });

  describe('The Feast of the Exultation of the Cross', () => {
    test('Is celebrated on the 14th of September', async () => {
      const dates = await Romcal.calendarFor({
        year: 2018,
        locale: 'sk',
      });
      const theExaltationOfTheHolyCross = dates.find((d) => {
        return d.key === 'theExaltationOfTheHolyCross';
      });
      expect(dayjs.utc(theExaltationOfTheHolyCross?.date).date()).toEqual(14);
      expect(dayjs.utc(theExaltationOfTheHolyCross?.date).month()).toEqual(8);
    });
  });

  describe('The Sunday of the Word of God', () => {
    test('Should be celebrated on the 3rd Sunday of Ordinary Time', async () => {
      const dates = await Romcal.calendarFor(2020);
      const sundayOfTheWordOfGod = dates.find((d) => {
        return d.key === 'sundayOfTheWordOfGod';
      });
      const sundays = await Seasons.earlyOrdinaryTime(2020, false);
      const thirdSundayOfOrdinaryTime = sundays.find((sunday) => sunday.key === 'thirdSundayOfOrdinaryTime');
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      expect(thirdSundayOfOrdinaryTime!.date.isSame(sundayOfTheWordOfGod!.date)).toBeTruthy();
    });
  });
});
