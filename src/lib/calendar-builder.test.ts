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
import _ from 'lodash';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import Romcal, { RomcalCalendar } from '@romcal/index';
import { Dates } from '@romcal/lib/dates';
import { Dictionary, isNil } from '@romcal/utils/type-guards/type-guards';
import { LiturgicalDay, isRomcalLiturgicalDay } from '@romcal/models/liturgical-day/liturgical-day.model';
import { hasKey } from '@romcal/utils/object/object';
import { PSALTER_WEEKS } from '@romcal/constants/cycles/cycles.constant';
import { LITURGICAL_SEASONS } from '@romcal/constants/seasons-and-periods/seasons-and-periods.constant';
import { LiturgicalColors } from '@romcal/constants/liturgical-colors/liturgical-colors.enum';
import { Titles } from '@romcal/constants/titles/titles.enum';
import { RANKS } from '@romcal/constants/ranks/ranks.constant';
import { RomcalRank } from '@romcal/constants/ranks/ranks.type';
import { Ranks } from '@romcal/constants/ranks/ranks.enum';

dayjs.extend(utc);

describe('Testing calendar generation functions', () => {
  test('Each item should have a key', async () => {
    const calendar = await Romcal.calendarFor();
    const result = calendar.every((value) => hasKey(value, 'key'));
    expect(result).toBeTruthy();
  });

  describe('When calling the calendarFor() method without a query', () => {
    let nonLeapYearDates: LiturgicalDay[];
    let leapYearDates: LiturgicalDay[];

    beforeEach(async () => {
      nonLeapYearDates = await Romcal.calendarFor(2018);
      leapYearDates = await Romcal.calendarFor(2020);
    });

    test('Should return an array of DateItem objects', async () => {
      expect(nonLeapYearDates.every((d) => isRomcalLiturgicalDay(d))).toBeTruthy();
      expect(leapYearDates.every((d) => isRomcalLiturgicalDay(d))).toBeTruthy();
    });

    test('Each object should contain the required properties', async () => {
      const requiredKeys = [
        'key',
        'name',
        'date',
        'rank',
        'rankName',
        'prioritized',
        'liturgicalColors',
        'liturgicalColorNames',
        'seasons',
        'seasonNames',
        'periods',
        'cycles',
        'calendar',
        'fromCalendar',
        'metadata',
      ];
      expect(nonLeapYearDates.every((d) => requiredKeys.every((k) => d.hasOwnProperty(k)))).toBeTrue();
    });

    test('Array should be 365 days long on non-leap years', async () => {
      const grouped: Dictionary<LiturgicalDay[]> = _.groupBy(nonLeapYearDates, (item) =>
        dayjs.utc(item.date).valueOf(),
      );
      expect(Object.keys(grouped)).toHaveLength(365);
    });

    test('Array should be 366 days long on leap years', async () => {
      const grouped: Dictionary<LiturgicalDay[]> = _.groupBy(leapYearDates, (item) => dayjs.utc(item.date).valueOf());
      expect(Object.keys(grouped)).toHaveLength(366);
    });
  });

  describe('Testing calendar options', () => {
    test('Array should be 366 long on leap years', async () => {
      const calendar = await Romcal.calendarFor({ year: 2020 });
      expect(calendar.length).toBe(366);
    });

    test('Array should be more than 366 long, when output for optional memorials and commemorations is enabled', async () => {
      const calendar = await Romcal.calendarFor({ year: 2020, outputOptionalMemorials: true });
      expect(calendar.length).toBeGreaterThan(366);
    });
  });

  describe('Testing calendar functions', () => {
    describe('When requesting the liturgical year', () => {
      let year: number;
      let start: dayjs.Dayjs;
      let end: dayjs.Dayjs;
      let calendar: LiturgicalDay[];

      beforeEach(async () => {
        year = dayjs.utc().year();
        start = Dates.firstSundayOfAdvent(year - 1);
        end = Dates.firstSundayOfAdvent(year).subtract(1, 'day');
        calendar = await Romcal.calendarFor({
          year: year,
          scope: 'liturgical',
        });
      });

      test('Should start on the 1st Sunday of Advent and end on the Saturday after Christ the King', () => {
        expect(dayjs.utc(calendar[0].date).isSame(start)).toBeTrue();
        expect(dayjs.utc(calendar[calendar.length - 1].date).isSame(end)).toBeTrue();
      });
    });

    describe('When requesting the calendar year', () => {
      test('Should start on Jan 1 and end on Dec 31', async () => {
        const calendar = await Romcal.calendarFor();
        const [firstDate] = calendar;
        const [lastDate] = calendar.reverse();
        expect(dayjs.utc(firstDate.date).month()).toEqual(0);
        expect(dayjs.utc(firstDate.date).date()).toEqual(1);
        expect(dayjs.utc(lastDate.date).month()).toEqual(11);
        expect(dayjs.utc(lastDate.date).date()).toEqual(31);
      });
    });
  });

  describe('Testing grouping feature filters', () => {
    test('Should group dates by days in a week', async () => {
      const calendar = (await Romcal.calendarFor()).groupBy('days');
      expect(Object.keys(calendar)).toEqual(['0', '1', '2', '3', '4', '5', '6']);
    });

    test('Should group dates by months in the year', async () => {
      expect(Object.keys((await Romcal.calendarFor()).groupBy('months'))).toEqual([
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
      ]);
    });

    test('Should group days of week by the months they belong to', async () => {
      const dates = (await Romcal.calendarFor()).groupBy('daysByMonth');
      Object.values(dates).forEach((monthGroup: Dictionary<LiturgicalDay[]>, monthIndex: number) => {
        Object.values(monthGroup).forEach((dateItems: LiturgicalDay[], dayIndex: number) => {
          dateItems.forEach((dateItem) => {
            expect(dayjs.utc(dateItem.date).day()).toEqual(dayIndex);
            expect(dayjs.utc(dateItem.date).month()).toEqual(monthIndex);
          });
        });
      });
    });

    test('Should group weeks of year by the months they belong to', async () => {
      const items = (await Romcal.calendarFor()).groupBy('weeksByMonth');

      // First level is months
      Object.keys(items).forEach((monthKey) => {
        const monthGroup = items[Number(monthKey)];
        // Second level is weeks
        Object.keys(monthGroup).forEach((weekKey) => {
          const weekGroup = monthGroup[Number(weekKey)];
          weekGroup.forEach((dateItem: LiturgicalDay) => {
            expect(dayjs.utc(dateItem.date).month()).toEqual(Number(monthKey));
            expect(dateItem.calendar.weekOfGregorianYear).toEqual(Number(weekKey));
          });
        });
      });
    });

    test('Should group dates by their respective liturgical sunday cycles', async () => {
      const calendar = await Romcal.calendarFor({ year: 2015 });
      const items = calendar.groupBy('sundayCycles');
      expect(Object.keys(items)).toEqual(['YEAR_B', 'YEAR_C']);
    });

    test('Should group dates by their respective liturgical weekday cycles', async () => {
      const calendar = await Romcal.calendarFor({ year: 2015 });
      const items = calendar.groupBy('weekdayCycles');
      expect(Object.keys(items)).toEqual(['YEAR_1', 'YEAR_2']);
    });

    test('Should group dates by their liturgical day ranks', async () => {
      const typeKeys = Object.keys((await Romcal.calendarFor()).groupBy('ranks'));
      expect(typeKeys.every((typeKey) => Object.values(RANKS).includes(typeKey as RomcalRank))).toBeTrue();
    });

    test('Should group dates by their liturgical seasons', async () => {
      const liturgicalSeasonGroupings = (await Romcal.calendarFor()).groupBy('liturgicalSeasons');
      expect(
        Object.keys(liturgicalSeasonGroupings).every((liturgicalSeasonKey) =>
          (LITURGICAL_SEASONS as string[]).includes(liturgicalSeasonKey),
        ),
      ).toBeTrue();
    });

    test('Should group dates by their psalter weeks', async () => {
      const psalterWeekKeys = Object.keys((await Romcal.calendarFor()).groupBy('psalterWeeks'));
      expect(psalterWeekKeys.sort()).toStrictEqual(PSALTER_WEEKS);
    });
  });

  describe('Testing liturgical colors', () => {
    test('The proper color of a Memorial or a Feast is white except for martyrs in which case it is red, and All Souls which is purple', async () => {
      const calendar = (await Romcal.calendarFor()).groupBy('ranks');
      _.get(calendar, Ranks.FEAST).forEach((d) => {
        if (d.key === 'exaltation_of_the_holy_cross') {
          expect(d.liturgicalColors[0]).toEqual(LiturgicalColors.RED);
        } else {
          if (d.key === 'all_souls') {
            expect(d.liturgicalColors[0]).toEqual(LiturgicalColors.PURPLE);
          } else if (!isNil(d.metadata.titles)) {
            if (d.metadata.titles?.includes(Titles.MARTYR)) {
              expect(d.liturgicalColors[0]).toEqual(LiturgicalColors.RED);
            } else {
              expect(d.liturgicalColors[0]).toEqual(LiturgicalColors.WHITE);
            }
          } else {
            expect(d.liturgicalColors[0]).toEqual(LiturgicalColors.WHITE);
          }
        }
      });
      _.get(calendar, Ranks.MEMORIAL).forEach((d) => {
        if (!isNil(d.metadata.titles)) {
          if (d.metadata.titles.includes(Titles.MARTYR)) {
            expect(d.liturgicalColors[0]).toEqual(LiturgicalColors.RED);
          } else {
            expect(d.liturgicalColors[0]).toEqual(LiturgicalColors.WHITE);
          }
        } else {
          expect(d.liturgicalColors[0]).toEqual(LiturgicalColors.WHITE);
        }
      });
    });

    test('The proper color for the Chair of Peter and the Conversion of St. Paul is white, although both St. Peter and St. Paul were martyrs.', async () => {
      const dates = (await Romcal.calendarFor()).filter((d) =>
        ['chair_of_saint_peter_the_apostle', 'conversion_of_saint_paul_the_apostle'].includes(d.key),
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
      calendar2020 = await Romcal.calendarFor(2020);
      calendar2021 = await Romcal.calendarFor(2021);
      calendar2022 = await Romcal.calendarFor(2022);

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
      const christmasInGeneralCalendar: LiturgicalDay = (
        await Romcal.calendarFor({ country: 'general' })
      ).getLiturgicalDay('all_saints')[0];
      expect(christmasInGeneralCalendar.isHolyDayOfObligation).toBeTrue();

      const christmasInEnglandCalendar: LiturgicalDay = (
        await Romcal.calendarFor({ country: 'england' })
      ).getLiturgicalDay('all_saints')[0];
      expect(christmasInEnglandCalendar.isHolyDayOfObligation).toBeTrue();
    });

    test('Saint Patrick is a Holy Day of obligation in Ireland', async () => {
      const saintPatrickBishop: LiturgicalDay = (await Romcal.calendarFor({ country: 'ireland' })).getLiturgicalDay(
        'patrick_of_ireland_bishop_patron_of_ireland',
      )[0];
      expect(saintPatrickBishop.isHolyDayOfObligation).toBeTrue();
    });

    test('Easter Monday, Pentecost Monday and St. Stephen are Holy Days of obligation in Germany and Hungary', async () => {
      const germanyCalendar: RomcalCalendar = await Romcal.calendarFor({ country: 'germany' });
      const hungaryCalendar: RomcalCalendar = await Romcal.calendarFor({ country: 'hungary' });
      const getDayAfter = (calendar: RomcalCalendar, key: string): LiturgicalDay =>
        calendar.getLiturgicalDay(dayjs(calendar.getDate(key)).add(1, 'day').toDate())[0];

      expect(getDayAfter(germanyCalendar, 'easter_sunday').isHolyDayOfObligation).toBeTrue();
      expect(getDayAfter(hungaryCalendar, 'easter_sunday').isHolyDayOfObligation).toBeTrue();
      expect(getDayAfter(germanyCalendar, 'pentecost_sunday').isHolyDayOfObligation).toBeTrue();
      expect(getDayAfter(hungaryCalendar, 'pentecost_sunday').isHolyDayOfObligation).toBeTrue();
      expect(getDayAfter(germanyCalendar, 'christmas').isHolyDayOfObligation).toBeTrue();
      expect(getDayAfter(hungaryCalendar, 'christmas').isHolyDayOfObligation).toBeTrue();
    });

    test('All Sundays are Holy Days of obligation', async () => {
      const calendar: RomcalCalendar = await Romcal.calendarFor();
      const result = [
        ...new Set(
          calendar
            .filter((d: LiturgicalDay) => dayjs.utc(d.date).day() === 0)
            .map((d: LiturgicalDay) => d.isHolyDayOfObligation),
        ),
      ];

      expect(result.length === 1 && result[0] === true).toBeTrue();
    });
  });

  describe('Testing the "drop" functionality for national calendars', () => {
    let testDates: LiturgicalDay[];

    beforeAll(async () => {
      testDates = await Romcal.calendarFor({
        country: 'slovakia',
        year: 2020,
      });
    });

    test('A dropped liturgical day should not be appended in the final calendar', () => {
      const date = testDates.find((d) => {
        return dayjs.utc(d.date).isSame(dayjs.utc('2020-12-4'));
      });
      expect(date?.key).not.toEqual('cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop');
    });
  });
});
