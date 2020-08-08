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

import Romcal from '@romcal/index';
import * as Dates from '@romcal/lib/Dates';
import { Dictionary, isNil } from '@romcal/utils/type-guards';
import { RomcalDateItem, isRomcalDateItem } from '@romcal/models/romcal-date-item';
import { hasKey, getValueByKey } from '@romcal/utils/object';
import { PSALTER_WEEKS } from '@romcal/constants/liturgical-cycles.constant';
import { LITURGICAL_SEASONS } from '@romcal/constants/seasons-and-periods.constant';
import { LiturgicalColorsEnum } from '../enums/liturgical-colors.enum';
import { TITLES } from '@romcal/constants/titles.constant';
import { RanksEnum } from '@romcal/enums/ranks.enum';
import { RANKS } from '@romcal/constants/ranks.constant';
import { Types } from '@romcal/types/types.type';

dayjs.extend(utc);

describe('Testing calendar generation functions', () => {
  test('Each item should have a key', async () => {
    const calendar = await Romcal.calendarFor();
    const result = calendar.every((value) => hasKey(value, 'key'));
    expect(result).toBeTruthy();
  });

  describe('When calling the calendarFor() method without a query', () => {
    let nonLeapYearDates: RomcalDateItem[];
    let leapYearDates: RomcalDateItem[];

    beforeEach(async () => {
      nonLeapYearDates = await Romcal.calendarFor(2018);
      leapYearDates = await Romcal.calendarFor(2020);
    });

    test('Should return an array of DateItem objects', async () => {
      expect(nonLeapYearDates.every((d) => isRomcalDateItem(d))).toBeTruthy();
      expect(leapYearDates.every((d) => isRomcalDateItem(d))).toBeTruthy();
    });

    test('Each object should contain the keys type, name, date, source and data', async () => {
      const requiredKeys = ['type', 'name', 'date', 'source', 'data'];
      nonLeapYearDates.every((d) => hasKey(d, requiredKeys));
      leapYearDates.every((d) => hasKey(d, requiredKeys));
    });

    test('Array should be 365 days long on non-leap years', async () => {
      const grouped: Dictionary<RomcalDateItem[]> = _.groupBy(nonLeapYearDates, (item) =>
        dayjs.utc(item.date).valueOf(),
      );
      expect(Object.keys(grouped)).toHaveLength(365);
    });

    test('Array should be 366 days long on leap years', async () => {
      const grouped: Dictionary<RomcalDateItem[]> = _.groupBy(leapYearDates, (item) => dayjs.utc(item.date).valueOf());
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
      let calendar: RomcalDateItem[];

      beforeEach(async () => {
        year = dayjs.utc().year();
        start = Dates.firstSundayOfAdvent(year - 1);
        end = Dates.firstSundayOfAdvent(year).subtract(1, 'day');
        calendar = await Romcal.calendarFor({
          year: year,
          type: 'liturgical',
        });
      });

      test('Should start on the 1st Sunday of Advent and end on Christ the King', () => {
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

  describe('Testing query filters', () => {
    describe('For filtering by day of week', () => {
      test('Results should match the day of week requested', async () => {
        for (let i = 0, il = 7; i < il; i++) {
          const dates = Romcal.queryFor(await Romcal.calendarFor(), { day: i });
          dates.forEach((d) => expect(dayjs.utc(d.date).day()).toEqual(i));
        }
      });
    });

    describe('For filtering by month of year', () => {
      test('Results should match the month of year requested', async () => {
        for (let i = 0, il = 12; i < il; i++) {
          const dates = Romcal.queryFor(await Romcal.calendarFor(), { month: i });
          dates.forEach((d) => expect(dayjs.utc(d.date).month()).toEqual(i));
        }
      });
    });

    describe('For filtering by groups', () => {
      test('Should group dates by days in a week', async () => {
        const calendar = await Romcal.calendarFor({
          query: { group: 'days' },
        });
        expect(Object.keys(calendar)).toEqual(['0', '1', '2', '3', '4', '5', '6']);
      });

      test('Should group dates by months in the year', async () => {
        expect(
          Object.keys(
            Romcal.queryFor(await Romcal.calendarFor(), {
              group: 'months',
            }),
          ),
        ).toEqual(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']);
      });

      test('Should group days of week by the months they belong to', async () => {
        const dates = Romcal.queryFor(await Romcal.calendarFor(), {
          group: 'daysByMonth',
        });
        Object.values(dates).forEach((monthGroup: Dictionary<RomcalDateItem[]>, monthIndex: number) => {
          Object.values(monthGroup).forEach((dateItems: RomcalDateItem[], dayIndex: number) => {
            dateItems.forEach((dateItem) => {
              expect(dayjs.utc(dateItem.date).day()).toEqual(dayIndex);
              expect(dayjs.utc(dateItem.date).month()).toEqual(monthIndex);
            });
          });
        });
      });

      test('Should group weeks of year by the months they belong to', async () => {
        const items = Romcal.queryFor(await Romcal.calendarFor(), {
          group: 'weeksByMonth',
        });

        // First level is months
        Object.keys(items).forEach((monthKey) => {
          const monthGroup = items[Number(monthKey)];
          // Second level is weeks
          Object.keys(monthGroup).forEach((weekKey) => {
            const weekGroup = monthGroup[Number(weekKey)];
            weekGroup.forEach((dateItem) => {
              expect(dayjs.utc(dateItem.date).month()).toEqual(Number(monthKey));
              expect(dateItem.calendar.weekOfGregorianYear).toEqual(Number(weekKey));
            });
          });
        });
      });

      test('Should group dates by their respective liturgical sunday cycles', async () => {
        const calendar = await Romcal.calendarFor({ year: 2015 });
        const items = Romcal.queryFor(calendar, { group: 'sundayCycles' });
        expect(Object.keys(items)).toEqual(['YEAR_B', 'YEAR_C']);
      });

      test('Should group dates by their respective liturgical ferial cycles', async () => {
        const calendar = await Romcal.calendarFor({ year: 2015 });
        const items = Romcal.queryFor(calendar, { group: 'ferialCycles' });
        expect(Object.keys(items)).toEqual(['YEAR_1', 'YEAR_2']);
      });

      test('Should group dates by their celebration ranks', async () => {
        const typeKeys = Object.keys(Romcal.queryFor(await Romcal.calendarFor(), { group: 'ranks' }));
        expect(typeKeys.every((typeKey) => Object.values(RANKS).includes(typeKey as Types))).toBeTrue();
      });

      test('Should group dates by their liturgical seasons', async () => {
        const liturgicalSeasonGroupings = Romcal.queryFor(await Romcal.calendarFor(), {
          group: 'liturgicalSeasons',
        });
        expect(
          Object.keys(liturgicalSeasonGroupings).every((liturgicalSeasonKey) =>
            (LITURGICAL_SEASONS as string[]).includes(liturgicalSeasonKey),
          ),
        ).toBeTrue();
      });

      test('Should group dates by their psalter weeks', async () => {
        const psalterWeekKeys = Object.keys(Romcal.queryFor(await Romcal.calendarFor(), { group: 'psalterWeeks' }));
        expect(psalterWeekKeys.sort()).toStrictEqual(PSALTER_WEEKS);
      });
    });

    describe('For filtering by titles', () => {
      test('Should filter by title as expected when using queryFor()', async () => {
        Romcal.queryFor(await Romcal.calendarFor(), {
          title: TITLES.FEAST_OF_THE_LORD,
        }).forEach((d: RomcalDateItem) => expect(d.metadata.titles?.includes(TITLES.FEAST_OF_THE_LORD)).toBeTruthy());
      });
      test('Should filter by title as expected when using calendarFor()', async () => {
        Romcal.queryFor(await Romcal.calendarFor(), {
          title: TITLES.PATRON_OF_EUROPE,
        }).forEach((d: RomcalDateItem) => expect(d.metadata.titles?.includes(TITLES.PATRON_OF_EUROPE)).toBeTruthy());
      });
    });

    describe('Testing advanced filters', () => {
      test('The proper color of a Memorial or a Feast is white except for martyrs in which case it is red, and All Souls which is purple', async () => {
        const calendar = (await Romcal.calendarFor({ query: { group: 'ranks' } })) as Dictionary<RomcalDateItem[]>;
        _.get(calendar, RanksEnum.FEAST).forEach((d) => {
          if (d.key === 'theExaltationOfTheHolyCross') {
            expect(d.liturgicalColors[0]).toEqual(LiturgicalColorsEnum.RED);
          } else {
            if (d.key === 'allSouls') {
              expect(d.liturgicalColors[0]).toEqual(LiturgicalColorsEnum.PURPLE);
            } else if (!isNil(d.metadata.titles)) {
              if (d.metadata.titles?.includes(TITLES.MARTYR)) {
                expect(d.liturgicalColors[0]).toEqual(LiturgicalColorsEnum.RED);
              } else {
                expect(d.liturgicalColors[0]).toEqual(LiturgicalColorsEnum.WHITE);
              }
            } else {
              expect(d.liturgicalColors[0]).toEqual(LiturgicalColorsEnum.WHITE);
            }
          }
        });
        _.get(calendar, RanksEnum.MEMORIAL).forEach((d) => {
          if (!isNil(d.metadata.titles)) {
            if (d.metadata.titles.includes(TITLES.MARTYR)) {
              expect(d.liturgicalColors[0]).toEqual(LiturgicalColorsEnum.RED);
            } else {
              expect(d.liturgicalColors[0]).toEqual(LiturgicalColorsEnum.WHITE);
            }
          } else {
            expect(d.liturgicalColors[0]).toEqual(LiturgicalColorsEnum.WHITE);
          }
        });
      });

      test('The proper color for the Chair of Peter and the Conversion of St. Paul is white, although both St. Peter and St. Paul were martyrs.', async () => {
        const dates = await Romcal.calendarFor();
        const calendar = Romcal.queryFor(dates, { group: 'ranks' });
        getValueByKey(calendar, RanksEnum.FEAST).forEach((d) => {
          if (d.key === 'chairOfSaintPeter' || d.key === 'conversionOfSaintPaulApostle') {
            expect(d.liturgicalColors[0]).toEqual(LiturgicalColorsEnum.WHITE);
          }
        });
      });
    });
  });

  describe('Testing calendar cycles', () => {
    let calendar2020: RomcalDateItem[];
    let calendar2021: RomcalDateItem[];
    let calendar2022: RomcalDateItem[];
    let easter2020: RomcalDateItem | undefined;
    let easter2021: RomcalDateItem | undefined;
    let easter2022: RomcalDateItem | undefined;
    let christmas2020: RomcalDateItem | undefined;
    let christmas2021: RomcalDateItem | undefined;
    let christmas2022: RomcalDateItem | undefined;

    beforeEach(async () => {
      calendar2020 = await Romcal.calendarFor(2020);
      calendar2021 = await Romcal.calendarFor(2021);
      calendar2022 = await Romcal.calendarFor(2022);

      easter2020 = calendar2020.find((item) => item.key === 'easter');
      easter2021 = calendar2021.find((item) => item.key === 'easter');
      easter2022 = calendar2022.find((item) => item.key === 'easter');

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

    test('Should have the right ferial cycle', async () => {
      expect(easter2020?.cycles.ferialCycle).toBe('YEAR_2');
      expect(easter2021?.cycles.ferialCycle).toBe('YEAR_1');
      expect(easter2022?.cycles.ferialCycle).toBe('YEAR_2');

      expect(christmas2020?.cycles.ferialCycle).toBe('YEAR_1');
      expect(christmas2021?.cycles.ferialCycle).toBe('YEAR_2');
      expect(christmas2022?.cycles.ferialCycle).toBe('YEAR_1');
    });
  });
});
