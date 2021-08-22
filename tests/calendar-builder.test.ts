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

import { LiturgicalColors } from '@romcal/constants/colors';
import { isMartyr, Titles } from '@romcal/constants/martyrology-metadata';
import { Ranks } from '@romcal/constants/ranks';
import LiturgicalDay from '@romcal/models/liturgical-day';
import LiturgicalDayDef from '@romcal/models/liturgical-day-def';
import { England_En } from 'bundles/england.en';
import { Germany_En } from 'bundles/germany.en';
import { Hungary_En } from 'bundles/hungary.en';
import { Ireland_En } from 'bundles/ireland.en';
import { Slovakia_Sk } from 'bundles/slovakia.sk';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'jest-extended';
import { CalendarScope, LiturgicalCalendar, Romcal } from '../lib/main';

dayjs.extend(utc);

describe('Testing calendar generation functions', () => {
  test('Each item should have a key', async () => {
    const calendar = await new Romcal().generateCalendar();
    const result = Object.values(calendar)
      .flat()
      .every((value) => Object.prototype.hasOwnProperty.call(value, 'key'));
    expect(result).toBeTruthy();
  });

  describe('When calling the calendarFor() method without a query', () => {
    let nonLeapYearDates: LiturgicalCalendar;
    let leapYearDates: LiturgicalCalendar;

    beforeEach(async () => {
      nonLeapYearDates = await new Romcal().generateCalendar(2018);
      leapYearDates = await new Romcal().generateCalendar(2020);
    });

    test('Each object should contain the required properties', async () => {
      const requiredKeys = [
        'key',
        'date',
        'dateDef',
        'precedence',
        'rank',
        'isHolyDayOfObligation',
        'isOptional',
        'i18nDef',
        'seasons',
        'periods',
        'liturgicalColors',
        'calendar',
        'cycles',
        'fromCalendar',
        'fromExtendedCalendars',
      ];

      const test: boolean = Object.values(nonLeapYearDates)
        .flat()
        .every(
          (d) =>
            requiredKeys.every((k) => Object.prototype.hasOwnProperty.call(d, k)) &&
            d.name !== undefined &&
            d.rankName !== undefined &&
            d.seasonNames !== undefined &&
            d.liturgicalColorNames !== undefined,
        );

      expect(test).toBeTrue();
    });

    test('Array should be 365 days long on non-leap years', async () => {
      expect(Object.keys(nonLeapYearDates)).toHaveLength(365);
    });

    test('Array should be 366 days long on leap years', async () => {
      expect(Object.keys(leapYearDates)).toHaveLength(366);
    });
  });

  describe('Testing calendar functions', () => {
    describe('When requesting the liturgical year', () => {
      let year: number;
      let start: dayjs.Dayjs;
      let end: dayjs.Dayjs;
      let calendar: LiturgicalCalendar;
      let calendarArr: LiturgicalDay[][];

      beforeEach(async () => {
        const romcal = new Romcal({ scope: CalendarScope.Liturgical });
        year = dayjs.utc().year();
        start = romcal.dates(year).firstSundayOfAdvent();
        end = romcal.dates(year).firstSundayOfAdvent(year).subtract(1, 'day');
        calendar = await romcal.generateCalendar(year);
        calendarArr = Object.values(calendar);
      });

      test('Should start on the 1st Sunday of Advent and end on the Saturday after Christ the King', () => {
        expect(dayjs.utc(calendarArr[0][0].date).isSame(start, 'day')).toBeTrue();
        expect(
          dayjs.utc(calendarArr[calendarArr.length - 1][0].date).isSame(end, 'day'),
        ).toBeTrue();
      });
    });

    describe('When requesting the calendar year', () => {
      test('Should start on Jan 1 and end on Dec 31', async () => {
        const calendarArr = Object.values(await new Romcal().generateCalendar());
        const firstDate = calendarArr[0][0];
        const lastDate = calendarArr.reverse()[0][0];
        expect(dayjs.utc(firstDate.date).month()).toEqual(0);
        expect(dayjs.utc(firstDate.date).date()).toEqual(1);
        expect(dayjs.utc(lastDate.date).month()).toEqual(11);
        expect(dayjs.utc(lastDate.date).date()).toEqual(31);
      });
    });
  });

  describe('Testing liturgical colors', () => {
    test('The proper color of a Memorial or a Feast is white except for martyrs in which case it is red, and All Souls which is purple', async () => {
      const defs: LiturgicalDayDef[] = Object.values(await new Romcal().getAllDefinitions()).flat();

      defs
        .filter(
          (d) =>
            d.rank === Ranks.FEAST &&
            !d.titles.includes(Titles.Apostle) &&
            !d.titles.includes(Titles.Evangelist),
        )
        .forEach((d) => {
          if (d.key === 'exaltation_of_the_holy_cross' || d.key === 'mark_evangelist') {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(d.liturgicalColors[0]).toEqual(LiturgicalColors.RED);
          } else if (d.key === 'all_souls') {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(d.liturgicalColors[0]).toEqual(LiturgicalColors.PURPLE);
            // eslint-disable-next-line jest/no-conditional-expect
            expect(d.liturgicalColors[1]).toEqual(LiturgicalColors.BLACK);
          } else if (isMartyr(d.titles)) {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(d.liturgicalColors[0]).toEqual(LiturgicalColors.RED);
          } else {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(d.liturgicalColors[0]).toEqual(LiturgicalColors.WHITE);
          }
        });

      defs
        .filter(
          (d) =>
            d.rank === Ranks.MEMORIAL &&
            !d.titles.includes(Titles.Apostle) &&
            !d.titles.includes(Titles.Evangelist),
        )
        .forEach((d) => {
          if (isMartyr(d.titles)) {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(d.liturgicalColors[0]).toEqual(LiturgicalColors.RED);
          } else {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(d.liturgicalColors[0]).toEqual(LiturgicalColors.WHITE);
          }
        });
    });

    test('The proper color for the Chair of Peter and the Conversion of St. Paul is white, although both St. Peter and St. Paul were martyrs.', async () => {
      const dates = Object.values(await new Romcal().generateCalendar())
        .flat()
        .filter((d) =>
          ['chair_of_saint_peter_the_apostle', 'conversion_of_saint_paul_the_apostle'].includes(
            d.key,
          ),
        );
      expect(dates.length).toBe(2);
      dates.forEach((d) => expect(d.liturgicalColors[0]).toEqual(LiturgicalColors.WHITE));
    });
  });

  describe('Testing calendar cycles', () => {
    let calendar2020: LiturgicalDay[];
    let calendar2021: LiturgicalDay[];
    let calendar2022: LiturgicalDay[];
    let easter2020: LiturgicalDay | undefined;
    let easter2021: LiturgicalDay | undefined;
    let easter2022: LiturgicalDay | undefined;
    let christmas2020: LiturgicalDay | undefined;
    let christmas2021: LiturgicalDay | undefined;
    let christmas2022: LiturgicalDay | undefined;

    beforeEach(async () => {
      calendar2020 = Object.values(await new Romcal().generateCalendar(2020)).flat();
      calendar2021 = Object.values(await new Romcal().generateCalendar(2021)).flat();
      calendar2022 = Object.values(await new Romcal().generateCalendar(2022)).flat();

      easter2020 = calendar2020.find((item) => item.key === 'easter_sunday');
      easter2021 = calendar2021.find((item) => item.key === 'easter_sunday');
      easter2022 = calendar2022.find((item) => item.key === 'easter_sunday');

      christmas2020 = calendar2020.find((item) => item.key === 'christmas');
      christmas2021 = calendar2021.find((item) => item.key === 'christmas');
      christmas2022 = calendar2022.find((item) => item.key === 'christmas');
    });

    test('Should have the right sunday cycle', async () => {
      expect(easter2020?.cycles.sundayCycle).toBe('YEAR_A');
      expect(easter2021?.cycles.sundayCycle).toBe('YEAR_B');
      expect(easter2022?.cycles.sundayCycle).toBe('YEAR_C');

      expect(christmas2020?.cycles.sundayCycle).toBe('YEAR_B');
      expect(christmas2021?.cycles.sundayCycle).toBe('YEAR_C');
      expect(christmas2022?.cycles.sundayCycle).toBe('YEAR_A');
    });

    test('Should have the right weekday cycle', async () => {
      expect(easter2020?.cycles.weekdayCycle).toBe('YEAR_2');
      expect(easter2021?.cycles.weekdayCycle).toBe('YEAR_1');
      expect(easter2022?.cycles.weekdayCycle).toBe('YEAR_2');

      expect(christmas2020?.cycles.weekdayCycle).toBe('YEAR_1');
      expect(christmas2021?.cycles.weekdayCycle).toBe('YEAR_2');
      expect(christmas2022?.cycles.weekdayCycle).toBe('YEAR_1');
    });
  });

  describe('Testing Holy Days of Obligation', () => {
    test('All Saints should be a Holy Day of obligation', async () => {
      const allSaintsInGeneralCalendar: LiturgicalDay = (await new Romcal().getOneLiturgicalDay(
        'all_saints',
      ))!;
      expect(allSaintsInGeneralCalendar.isHolyDayOfObligation).toBeTrue();

      const allSaintsInEnglandCalendar: LiturgicalDay = (await new Romcal({
        localizedCalendar: England_En,
      }).getOneLiturgicalDay('all_saints'))!;
      expect(allSaintsInEnglandCalendar.isHolyDayOfObligation).toBeTrue();
    });

    test('Saint Patrick is a Holy Day of obligation in Ireland', async () => {
      const saintPatrickBishop: LiturgicalDay = (await new Romcal({
        localizedCalendar: Ireland_En,
      }).getOneLiturgicalDay('patrick_of_ireland_bishop'))!;
      expect(saintPatrickBishop.isHolyDayOfObligation).toBeTrue();
    });

    test('Easter Monday, Pentecost Monday and St. Stephen are Holy Days of obligation in Germany and Hungary', async () => {
      const germanyCal = await new Romcal({ localizedCalendar: Germany_En });
      const hungaryCal = await new Romcal({ localizedCalendar: Hungary_En });

      const getDayAfter = async (romcal: Romcal, key: string): Promise<LiturgicalDay> => {
        const date = (await romcal.getOneLiturgicalDay(key))!.date;
        const calendar = await romcal.generateCalendar();
        const dayAfter =
          Object.values(calendar)[Object.keys(calendar).findIndex((k) => k === date) + 1];
        return dayAfter[0];
      };

      expect((await getDayAfter(germanyCal, 'easter_sunday')).isHolyDayOfObligation).toBeTrue();
      expect((await getDayAfter(hungaryCal, 'easter_sunday')).isHolyDayOfObligation).toBeTrue();
      expect((await getDayAfter(germanyCal, 'pentecost_sunday')).isHolyDayOfObligation).toBeTrue();
      expect((await getDayAfter(hungaryCal, 'pentecost_sunday')).isHolyDayOfObligation).toBeTrue();
      expect((await getDayAfter(germanyCal, 'christmas')).isHolyDayOfObligation).toBeTrue();
      expect((await getDayAfter(hungaryCal, 'christmas')).isHolyDayOfObligation).toBeTrue();
    });

    test('All Sundays are Holy Days of obligation', async () => {
      const allSundays = Object.values(await new Romcal().generateCalendar())
        .flat()
        .filter((d) => d.calendar.dayOfWeek === 0);

      expect(allSundays.every((sunday) => sunday.isHolyDayOfObligation)).toBeTrue();
    });
  });

  describe('Testing the "drop" functionality for national calendars', () => {
    let testDates: LiturgicalDay[];

    beforeAll(async () => {
      testDates = Object.values(
        await new Romcal({ localizedCalendar: Slovakia_Sk }).generateCalendar(2020),
      ).flat();
    });

    test('A dropped liturgical day should not be appended in the final calendar', () => {
      const date = testDates.find((d) => {
        return dayjs.utc(d.date).isSame(dayjs.utc('2020-12-4', 'day'));
      });
      expect(date?.key).not.toEqual(
        'cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop',
      );
    });
  });
});
