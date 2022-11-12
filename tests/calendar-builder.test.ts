import { England_En } from 'romcal/dist/bundles/england';
import { GeneralRoman_En } from 'romcal/dist/bundles/general-roman';
import { Germany_En } from 'romcal/dist/bundles/germany';
import { Hungary_En } from 'romcal/dist/bundles/hungary';
import { Ireland_En } from 'romcal/dist/bundles/ireland';
import { Slovakia_Sk } from 'romcal/dist/bundles/slovakia';
import Romcal, { BaseLiturgicalDay, BaseLiturgicalDayDef, CalendarScope, LiturgicalCalendar } from '../lib';
import LiturgicalDay from '../lib/models/liturgical-day';
import { Seasons } from '../lib/constants/seasons';
import { Periods } from '../lib/constants/periods';
import { dateDifference } from '../lib/utils/dates';

const { Colors, isMartyr, Titles, Ranks, getUtcDate, getUtcDateFromString, isSameDate, subtractsDays } = Romcal;

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
        'colors',
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
            d.colorNames !== undefined,
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
      let start: Date;
      let end: Date;
      let calendar: LiturgicalCalendar;
      let calendarArr: BaseLiturgicalDay[][];

      beforeEach(async () => {
        const romcal = new Romcal({ scope: 'liturgical' });
        year = new Date().getUTCFullYear();
        start = romcal.dates(year).firstSundayOfAdvent();
        end = subtractsDays(romcal.dates(year).firstSundayOfAdvent(year), 1);
        calendar = await romcal.generateCalendar(year);
        calendarArr = Object.values(calendar);
      });

      test('Should start on the 1st Sunday of Advent and end on the Saturday after Christ the King', () => {
        expect(isSameDate(getUtcDateFromString(calendarArr[0][0].date), start)).toBeTrue();
        expect(isSameDate(getUtcDateFromString(calendarArr[calendarArr.length - 1][0].date), end)).toBeTrue();
      });
    });

    describe('When requesting the calendar year', () => {
      test('Should start on Jan 1 and end on Dec 31', async () => {
        const calendarArr = Object.values(await new Romcal().generateCalendar());
        const firstDate = calendarArr[0][0];
        const lastDate = calendarArr.reverse()[0][0];
        expect(getUtcDateFromString(firstDate.date).getUTCMonth()).toEqual(0);
        expect(getUtcDateFromString(firstDate.date).getUTCDate()).toEqual(1);
        expect(getUtcDateFromString(lastDate.date).getUTCMonth()).toEqual(11);
        expect(getUtcDateFromString(lastDate.date).getUTCDate()).toEqual(31);
      });
    });
  });

  describe('Testing liturgical colors', () => {
    test('The proper color of a Memorial or a Feast is white except for martyrs in which case it is red, and All Souls which is purple', async () => {
      const defs: BaseLiturgicalDayDef[] = Object.values(
        await new Romcal({ localizedCalendar: GeneralRoman_En }).getAllDefinitions(),
      ).flat();

      defs
        .filter(
          (d) => d.rank === Ranks.Feast && !d.titles.includes(Titles.Apostle) && !d.titles.includes(Titles.Evangelist),
        )
        .forEach((d) => {
          if (d.key === 'exaltation_of_the_holy_cross' || d.key === 'mark_evangelist') {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(d.colors[0]).toEqual(Colors.Red);
          } else if (d.key === 'commemoration_of_all_the_faithful_departed') {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(d.colors[0]).toEqual(Colors.Purple);
            // eslint-disable-next-line jest/no-conditional-expect
            expect(d.colors[1]).toEqual(Colors.Black);
          } else if (isMartyr(d.titles)) {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(d.colors[0]).toEqual(Colors.Red);
          } else {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(d.colors[0]).toEqual(Colors.White);
          }
        });

      defs
        .filter(
          (d) =>
            d.rank === Ranks.Memorial && !d.titles.includes(Titles.Apostle) && !d.titles.includes(Titles.Evangelist),
        )
        .forEach((d) => {
          if (isMartyr(d.titles)) {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(d.colors[0]).toEqual(Colors.Red);
          } else {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(d.colors[0]).toEqual(Colors.White);
          }
        });
    });

    test('The proper color for the Chair of Peter and the Conversion of St. Paul is white, although both St. Peter and St. Paul were martyrs.', async () => {
      const dates = Object.values(await new Romcal().generateCalendar())
        .flat()
        .filter((d) => ['chair_of_saint_peter_the_apostle', 'conversion_of_saint_paul_the_apostle'].includes(d.key));
      expect(dates.length).toBe(2);
      dates.forEach((d) => expect(d.colors[0]).toEqual(Colors.White));
    });
  });

  describe('Testing calendar cycles', () => {
    let calendar2020: BaseLiturgicalDay[];
    let calendar2021: BaseLiturgicalDay[];
    let calendar2022: BaseLiturgicalDay[];
    let easter2020: BaseLiturgicalDay | undefined;
    let easter2021: BaseLiturgicalDay | undefined;
    let easter2022: BaseLiturgicalDay | undefined;
    let christmas2020: BaseLiturgicalDay | undefined;
    let christmas2021: BaseLiturgicalDay | undefined;
    let christmas2022: BaseLiturgicalDay | undefined;

    beforeEach(async () => {
      calendar2020 = Object.values(await new Romcal().generateCalendar(2020)).flat();
      calendar2021 = Object.values(await new Romcal().generateCalendar(2021)).flat();
      calendar2022 = Object.values(await new Romcal().generateCalendar(2022)).flat();

      easter2020 = calendar2020.find((item) => item.key === 'easter_sunday');
      easter2021 = calendar2021.find((item) => item.key === 'easter_sunday');
      easter2022 = calendar2022.find((item) => item.key === 'easter_sunday');

      christmas2020 = calendar2020.find((item) => item.key === 'nativity_of_the_lord');
      christmas2021 = calendar2021.find((item) => item.key === 'nativity_of_the_lord');
      christmas2022 = calendar2022.find((item) => item.key === 'nativity_of_the_lord');
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

  describe('Testing calendar metadata', () => {
    const testCalendarMetadata = async (scope: CalendarScope) => {
      for (let year = 2010; year <= 2050; year++) {
        const romcal = new Romcal({ scope });
        const data: LiturgicalDay[] = Object.values(await romcal.generateCalendar(year)).flatMap((d) => d[0]);

        let currentSeason = data[0].seasons;
        let weekOfSeason = scope === 'liturgical' ? 0 : Math.ceil((8 + new Date(data[0].date).getUTCDay()) / 7);
        let dayOfSeason = scope === 'liturgical' ? 0 : 7;
        let dayOfWeek = new Date(data[0].date).getUTCDay();

        let dayOfOrdinaryTime = 0;
        const lastDayOfOT = subtractsDays(
          romcal.dates(scope === 'liturgical' ? year + 1 : year).firstSundayOfAdvent(),
          1,
        );

        const nthDayOfWeekInMonth: Record<number, number | undefined> = {
          0: undefined,
          1: undefined,
          2: undefined,
          3: undefined,
          4: undefined,
          5: undefined,
          6: undefined,
        };

        for (let i = 0; i < data.length; i++) {
          const day = data[i];
          const date = new Date(day.date);
          const dow = date.getUTCDay();

          // Compute data for current day
          if (!currentSeason.some((s) => day.seasons.includes(s)) || day.key === 'easter_sunday') {
            dayOfSeason = 0;
            weekOfSeason = 0;

            if (day.periods.includes(Periods.LateOrdinaryTime) && dayOfSeason === 0) {
              weekOfSeason = 35 - Math.ceil((dateDifference(lastDayOfOT, date) + 1) / 7);
            }
          }
          currentSeason = day.seasons;

          // Days of week
          if (nthDayOfWeekInMonth[dow] === undefined) nthDayOfWeekInMonth[dow] = Math.ceil(date.getUTCDate() / 7) - 1;
          if (date.getUTCDate() === 1) {
            for (let j = 0; j < 7; j++) {
              nthDayOfWeekInMonth[j] = 0;
            }
          }
          nthDayOfWeekInMonth[dow] = (nthDayOfWeekInMonth[dow] ?? 0) + 1;
          expect(day.calendar.nthDayOfWeekInMonth).toBe(nthDayOfWeekInMonth[dow]);

          // Day of season
          dayOfSeason++;
          if (day.seasons.includes(Seasons.OrdinaryTime)) {
            dayOfOrdinaryTime++;
            dayOfSeason = dayOfOrdinaryTime;
          }
          expect(day.calendar.dayOfSeason).toBe(dayOfSeason);

          // Week of season
          if (dayOfSeason === 1) {
            weekOfSeason = day.seasons.includes(Seasons.Lent) ? 0 : 1;
          }
          expect(day.calendar.weekOfSeason).toBe(weekOfSeason);

          // Day of week
          expect(dow).toBe(dayOfWeek);
          expect(day.calendar.dayOfWeek).toBe(dayOfWeek);

          // Compute data for next day
          dayOfWeek++;
          if (dayOfWeek === 7) {
            dayOfWeek = 0;
            weekOfSeason++;
          }
        }
      }
    };

    test('Testing calendar metadata in a gregorian scope, from 2010 to 2050', async () => {
      await testCalendarMetadata('gregorian');
    });

    test('Testing calendar metadata in a liturgical scope, from 2010 to 2050', async () => {
      await testCalendarMetadata('liturgical');
    });
  });

  describe('Testing Holy Days of Obligation', () => {
    test('All Saints should be a Holy Day of obligation', async () => {
      const allSaintsInGeneralCalendar: BaseLiturgicalDay = (await new Romcal().getOneLiturgicalDay('all_saints'))!;
      expect(allSaintsInGeneralCalendar.isHolyDayOfObligation).toBeTrue();

      const allSaintsInEnglandCalendar: BaseLiturgicalDay = (await new Romcal({
        localizedCalendar: England_En,
      }).getOneLiturgicalDay('all_saints'))!;
      expect(allSaintsInEnglandCalendar.isHolyDayOfObligation).toBeTrue();
    });

    test('Saint Patrick is a Holy Day of obligation in Ireland', async () => {
      const saintPatrickBishop: BaseLiturgicalDay = (await new Romcal({
        localizedCalendar: Ireland_En,
      }).getOneLiturgicalDay('patrick_of_ireland_bishop'))!;
      expect(saintPatrickBishop.isHolyDayOfObligation).toBeTrue();
    });

    test('Easter Monday, Pentecost Monday and St. Stephen are Holy Days of obligation in Germany and Hungary', async () => {
      const germanyCal = await new Romcal({ localizedCalendar: Germany_En });
      const hungaryCal = await new Romcal({ localizedCalendar: Hungary_En });

      const getDayAfter = async (romcal: Romcal, key: string): Promise<BaseLiturgicalDay> => {
        const date = (await romcal.getOneLiturgicalDay(key))!.date;
        const calendar = await romcal.generateCalendar();
        const dayAfter = Object.values(calendar)[Object.keys(calendar).findIndex((k) => k === date) + 1];
        return dayAfter[0];
      };

      expect((await getDayAfter(germanyCal, 'easter_sunday')).isHolyDayOfObligation).toBeTrue();
      expect((await getDayAfter(hungaryCal, 'easter_sunday')).isHolyDayOfObligation).toBeTrue();
      expect((await getDayAfter(germanyCal, 'pentecost_sunday')).isHolyDayOfObligation).toBeTrue();
      expect((await getDayAfter(hungaryCal, 'pentecost_sunday')).isHolyDayOfObligation).toBeTrue();
      expect((await getDayAfter(germanyCal, 'nativity_of_the_lord')).isHolyDayOfObligation).toBeTrue();
      expect((await getDayAfter(hungaryCal, 'nativity_of_the_lord')).isHolyDayOfObligation).toBeTrue();
    });

    test('All Sundays are Holy Days of obligation', async () => {
      const allSundays = Object.values(await new Romcal().generateCalendar())
        .flat()
        .filter((d) => d.calendar.dayOfWeek === 0);

      expect(allSundays.every((sunday) => sunday.isHolyDayOfObligation)).toBeTrue();
    });
  });

  describe('Testing the "drop" functionality for national calendars', () => {
    let testDates: BaseLiturgicalDay[];

    beforeAll(async () => {
      testDates = Object.values(await new Romcal({ localizedCalendar: Slovakia_Sk }).generateCalendar(2020)).flat();
    });

    test('A dropped liturgical day should not be appended in the final calendar', () => {
      const date = testDates.find((d) => isSameDate(getUtcDateFromString(d.date), getUtcDate(2020, 12, 4)));
      expect(date?.key).not.toEqual(
        'cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop',
      );
    });
  });
});

describe('Testing calendar snapshots', () => {
  test('General Roman Calendar in gregorian year', async () => {
    const gregorianCalendar2020 = await new Romcal().generateCalendar(2020);
    const gregorianCalendar2021 = await new Romcal().generateCalendar(2021);
    const gregorianCalendar2022 = await new Romcal().generateCalendar(2022);

    expect(gregorianCalendar2020).toMatchSnapshot();
    expect(gregorianCalendar2021).toMatchSnapshot();
    expect(gregorianCalendar2022).toMatchSnapshot();
  });

  test('General Roman Calendar in liturgical year', async () => {
    const liturgicalCalendar2020 = await new Romcal({ scope: 'liturgical' }).generateCalendar(2020);
    const liturgicalCalendar2021 = await new Romcal({ scope: 'liturgical' }).generateCalendar(2021);
    const liturgicalCalendar2022 = await new Romcal({ scope: 'liturgical' }).generateCalendar(2022);

    expect(liturgicalCalendar2020).toMatchSnapshot();
    expect(liturgicalCalendar2021).toMatchSnapshot();
    expect(liturgicalCalendar2022).toMatchSnapshot();
  });
});
