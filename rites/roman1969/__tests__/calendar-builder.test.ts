import { England_En } from '@dist/rite-roman1969/bundles/england';
import { France_Fr } from '@dist/rite-roman1969/bundles/france';
import { GeneralRoman_En } from '@dist/rite-roman1969/bundles/general-roman';
import { Germany_En } from '@dist/rite-roman1969/bundles/germany';
import { Hungary_En } from '@dist/rite-roman1969/bundles/hungary';
import { Ireland_En } from '@dist/rite-roman1969/bundles/ireland';
import { Slovakia_Sk } from '@dist/rite-roman1969/bundles/slovakia';
import {
  CalendarScope,
  Id,
  LiturgicalCalendar,
  LiturgicalDay,
  LiturgicalDayDef,
  Period,
  Romcal,
  Season,
} from '@src/rite-roman1969';

import { CommonDefinition } from '../src/constants/commons';
import { Precedences } from '../src/constants/precedences';
import { dateDifference } from '../src/utils/dates';

const { Colors, isMartyr, Titles, Ranks, getUtcDate, getUtcDateFromString, isSameDate, subtractsDays } = Romcal;

describe('Testing calendar generation functions', () => {
  test('Each item should have an ID', async () => {
    const calendar = await new Romcal().generateCalendar();
    const result = Object.values(calendar)
      .flat()
      .every((value) => Object.prototype.hasOwnProperty.call(value, 'id'));
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
      const requiredIds = [
        'id',
        'date',
        'dateDef',
        'dateExceptions',
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
        'fromCalendarId',
        'fromExtendedCalendars',
      ];

      const test: boolean = Object.values(nonLeapYearDates)
        .flat()
        .every(
          (d) =>
            requiredIds.every((k) => Object.prototype.hasOwnProperty.call(d, k)) &&
            d.name !== undefined &&
            d.rankName !== undefined &&
            d.seasonNames !== undefined &&
            d.colorNames !== undefined
        );

      expect(test).toBeTruthy();
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
      let calendarArr: LiturgicalDay[][];

      beforeEach(async () => {
        const romcal = new Romcal({ scope: 'liturgical' });
        year = new Date().getUTCFullYear();
        start = romcal.dates(year).firstSundayOfAdvent();
        end = subtractsDays(romcal.dates(year).firstSundayOfAdvent(year), 1);
        calendar = await romcal.generateCalendar(year);
        calendarArr = Object.values(calendar);
      });

      test('Should start on the 1st Sunday of Advent and end on the Saturday after Christ the King', () => {
        expect(isSameDate(getUtcDateFromString(calendarArr[0][0].date), start)).toBeTruthy();
        expect(isSameDate(getUtcDateFromString(calendarArr[calendarArr.length - 1][0].date), end)).toBeTruthy();
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
      const defs: LiturgicalDayDef[] = Object.values(
        (await new Romcal({
          localizedCalendar: GeneralRoman_En,
        }).getAllDefinitions()) as unknown as LiturgicalDayDef[][]
      ).flat();

      defs
        .filter(
          (d) => d.rank === Ranks.Feast && !d.titles.includes(Titles.Apostle) && !d.titles.includes(Titles.Evangelist)
        )
        .forEach((d) => {
          if (d.id === 'exaltation_of_the_holy_cross' || d.id === 'mark_evangelist') {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(d.colors[0]).toEqual(Colors.Red);
          } else if (d.id === 'commemoration_of_all_the_faithful_departed') {
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
            [Ranks.Memorial, Ranks.OptionalMemorial].includes(d.rank) &&
            !d.titles.includes(Titles.Apostle) &&
            !d.titles.includes(Titles.Evangelist)
        )
        .forEach((d) => {
          if (isMartyr(d.titles) || d.id === 'passion_of_saint_john_the_baptist') {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(d.colors[0]).toEqual(Colors.Red);
          } else {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(d.colors[0]).toEqual(Colors.White);
          }
        });
    });

    test('The proper color for the Chair of Peter and the Conversion of St. Paul is white, although both St. Peter and St. Paul were martyrs.', async () => {
      const dates = Object.values(await new Romcal().generateCalendar(2022))
        .flat()
        .filter((d) => ['chair_of_saint_peter_the_apostle', 'conversion_of_saint_paul_the_apostle'].includes(d.id));
      expect(dates.length).toBe(2);
      dates.forEach((d) => expect(d.colors[0]).toEqual(Colors.White));
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

      easter2020 = calendar2020.find((item) => item.id === 'easter_sunday');
      easter2021 = calendar2021.find((item) => item.id === 'easter_sunday');
      easter2022 = calendar2022.find((item) => item.id === 'easter_sunday');

      christmas2020 = calendar2020.find((item) => item.id === 'nativity_of_the_lord');
      christmas2021 = calendar2021.find((item) => item.id === 'nativity_of_the_lord');
      christmas2022 = calendar2022.find((item) => item.id === 'nativity_of_the_lord');
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
    const testCalendarMetadata = async (scope: CalendarScope): Promise<void> => {
      for (let year = 2010; year <= 2050; year += 1) {
        const romcal = new Romcal({ scope });
        const data: LiturgicalDay[] = Object.values(await romcal.generateCalendar(year)).flatMap((d) => d[0]);

        let currentSeason = data[0].seasons;
        let weekOfSeason = scope === 'liturgical' ? 0 : Math.ceil((8 + new Date(data[0].date).getUTCDay()) / 7);
        let dayOfSeason = scope === 'liturgical' ? 0 : 7;
        let dayOfWeek = new Date(data[0].date).getUTCDay();

        let dayOfOrdinaryTime = 0;
        const lastDayOfOT = subtractsDays(
          romcal.dates(scope === 'liturgical' ? year + 1 : year).firstSundayOfAdvent(),
          1
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

        for (let i = 0; i < data.length; i += 1) {
          const day = data[i];
          const date = new Date(day.date);
          const dow = date.getUTCDay();

          // Compute data for current day
          if (!currentSeason.some((s) => day.seasons.includes(s)) || day.id === 'easter_sunday') {
            dayOfSeason = 0;
            weekOfSeason = 0;

            if (day.periods.includes(Period.LateOrdinaryTime) && dayOfSeason === 0) {
              weekOfSeason = 35 - Math.ceil((dateDifference(lastDayOfOT, date) + 1) / 7);
            }
          }
          currentSeason = day.seasons;

          // Days of week
          if (nthDayOfWeekInMonth[dow] === undefined) nthDayOfWeekInMonth[dow] = Math.ceil(date.getUTCDate() / 7) - 1;
          if (date.getUTCDate() === 1) {
            for (let j = 0; j < 7; j += 1) {
              nthDayOfWeekInMonth[j] = 0;
            }
          }
          nthDayOfWeekInMonth[dow] = (nthDayOfWeekInMonth[dow] ?? 0) + 1;
          expect(day.calendar.nthDayOfWeekInMonth).toBe(nthDayOfWeekInMonth[dow]);

          // Day of season
          dayOfSeason += 1;
          if (day.seasons.includes(Season.OrdinaryTime)) {
            dayOfOrdinaryTime += 1;
            dayOfSeason = dayOfOrdinaryTime;
          }
          expect(day.calendar.dayOfSeason).toBe(dayOfSeason);

          // Week of season
          if (dayOfSeason === 1) {
            weekOfSeason = day.seasons.includes(Season.Lent) ? 0 : 1;
          }
          expect(day.calendar.weekOfSeason).toBe(weekOfSeason);

          // Day of week
          expect(dow).toBe(dayOfWeek);
          expect(day.calendar.dayOfWeek).toBe(dayOfWeek);

          // Compute data for next day
          dayOfWeek += 1;
          if (dayOfWeek === 7) {
            dayOfWeek = 0;
            weekOfSeason += 1;
          }
        }
      }
    };

    // eslint-disable-next-line jest/expect-expect
    test('Testing calendar metadata in a gregorian scope, from 2010 to 2050', async () => {
      await testCalendarMetadata('gregorian');
    });

    // eslint-disable-next-line jest/expect-expect
    test('Testing calendar metadata in a liturgical scope, from 2010 to 2050', async () => {
      await testCalendarMetadata('liturgical');
    });
  });

  describe('Testing Commons definition property', () => {
    test('Saints Basil and Gregory Nazianzen have no Commons definition', async () => {
      const allSaintsInGeneralCalendar: LiturgicalDay = (await new Romcal().getOneLiturgicalDay(
        'basil_the_great_and_gregory_nazianzen_bishops'
      ))!;
      expect(allSaintsInGeneralCalendar.commonsDef).toEqual([CommonDefinition.None]);
    });
    test('Hilary of Poitiers has a Commons definition with two items', async () => {
      const allSaintsInGeneralCalendar: LiturgicalDay = (await new Romcal().getOneLiturgicalDay(
        'hilary_of_poitiers_bishop'
      ))!;
      expect(allSaintsInGeneralCalendar.commonsDef).toEqual([
        CommonDefinition.Bishops,
        CommonDefinition.DoctorsOfTheChurch,
      ]);
    });
  });

  describe('Testing Holy Days of Obligation', () => {
    test('All Saints should be a Holy Day of obligation', async () => {
      const allSaintsInGeneralCalendar: LiturgicalDay = (await new Romcal().getOneLiturgicalDay('all_saints'))!;
      expect(allSaintsInGeneralCalendar.isHolyDayOfObligation).toBeTruthy();

      const allSaintsInEnglandCalendar: LiturgicalDay = (await new Romcal({
        localizedCalendar: England_En,
      }).getOneLiturgicalDay('all_saints'))!;
      expect(allSaintsInEnglandCalendar.isHolyDayOfObligation).toBeTruthy();
    });

    test('Saint Patrick is a Holy Day of obligation in Ireland', async () => {
      const saintPatrickBishop: LiturgicalDay = (await new Romcal({
        localizedCalendar: Ireland_En,
      }).getOneLiturgicalDay('patrick_of_ireland_bishop'))!;
      expect(saintPatrickBishop.isHolyDayOfObligation).toBeTruthy();
    });

    test('Easter Monday, Pentecost Monday and St. Stephen are Holy Days of obligation in Germany and Hungary', async () => {
      const germanyCal = await new Romcal({ localizedCalendar: Germany_En });
      const hungaryCal = await new Romcal({ localizedCalendar: Hungary_En });

      const getDayAfter = async (romcal: Romcal, id: Id): Promise<LiturgicalDay> => {
        const { date } = (await romcal.getOneLiturgicalDay(id))!;
        const calendar = await romcal.generateCalendar();
        const dayAfter = Object.values(calendar)[Object.keys(calendar).findIndex((k) => k === date) + 1];
        return dayAfter[0];
      };

      expect((await getDayAfter(germanyCal, 'easter_sunday')).isHolyDayOfObligation).toBeTruthy();
      expect((await getDayAfter(hungaryCal, 'easter_sunday')).isHolyDayOfObligation).toBeTruthy();
      expect((await getDayAfter(germanyCal, 'pentecost_sunday')).isHolyDayOfObligation).toBeTruthy();
      expect((await getDayAfter(hungaryCal, 'pentecost_sunday')).isHolyDayOfObligation).toBeTruthy();
      expect((await getDayAfter(germanyCal, 'nativity_of_the_lord')).isHolyDayOfObligation).toBeTruthy();
      expect((await getDayAfter(hungaryCal, 'nativity_of_the_lord')).isHolyDayOfObligation).toBeTruthy();
    });

    test('All Sundays are Holy Days of obligation', async () => {
      const allSundays = Object.values(await new Romcal().generateCalendar())
        .flat()
        .filter((d) => d.calendar.dayOfWeek === 0);

      expect(allSundays.every((sunday) => sunday.isHolyDayOfObligation)).toBeTruthy();
    });
  });

  describe('Testing the "drop" functionality for national calendars', () => {
    let testDates: LiturgicalDay[];

    beforeAll(async () => {
      testDates = Object.values(await new Romcal({ localizedCalendar: Slovakia_Sk }).generateCalendar(2020)).flat();
    });

    test('A dropped liturgical day should not be appended in the final calendar', () => {
      const date = testDates.find((d) => isSameDate(getUtcDateFromString(d.date), getUtcDate(2020, 12, 4)));
      expect(date?.id).not.toEqual(
        'cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop'
      );
    });
  });

  describe('Testing the Easter Date calculation', () => {
    it('should calculate the Gregorian Easter date for the year 2019', async () => {
      const calendar = Object.values(await new Romcal().generateCalendar(2019)).flat();
      const easter = calendar.find((item) => item.id === 'easter_sunday');
      expect(easter?.date).toEqual('2019-04-21');
    });

    it('should calculate the Julian Easter date for the year 2019', async () => {
      const calendar = Object.values(
        await new Romcal({ easterCalculationType: 'julian' }).generateCalendar(2019)
      ).flat();
      const easter = calendar.find((item) => item.id === 'easter_sunday');
      expect(easter?.date).toEqual('2019-04-28');
    });
  });
});

describe('Testing the alternativeTransferDateDefs property', () => {
  it('should not have a dedication_of_consecrated_churches defined on the General Roman Calendar', async () => {
    const calendar = Object.values(await new Romcal().generateCalendar(2024)).flat();
    const day = calendar.find((item) => item.id === 'dedication_of_consecrated_churches');
    expect(day).toBeUndefined();
  });

  it('should have a dedication_of_consecrated_churches defined on the calendar of France with an alternative transfert date', async () => {
    const calendar = Object.values(await new Romcal({ localizedCalendar: France_Fr }).generateCalendar(2024)).flat();
    const day = calendar.find((item) => item.id === 'dedication_of_consecrated_churches');
    expect(day?.date).toEqual('2024-10-25');
    expect(day?.alternativeTransferDateDefs).toEqual([{ dateDef: { month: 10, lastDayOfWeekInMonth: 0 } }]);
  });

  it('should have a dedication_of_consecrated_churches defined on the calendar of Slovakia with no alternative transfert date', async () => {
    const calendar = Object.values(await new Romcal({ localizedCalendar: Slovakia_Sk }).generateCalendar(2024)).flat();
    const day = calendar.find((item) => item.id === 'dedication_of_consecrated_churches');
    expect(day?.date).toEqual('2024-10-26');
    expect(day?.alternativeTransferDateDefs).toEqual([]);
  });
});

describe('Testing the Elevated Memorial option', () => {
  it('should get two optional memorials on January 20th on the General Roman Calendar', async () => {
    const calendar = Object.values(await new Romcal().generateCalendar(2024)).flat();
    const optionalMemorials = calendar.filter(
      (item) => item.date === '2024-10-16' && item.rank === Ranks.OptionalMemorial
    );

    expect(optionalMemorials.length).toBe(2);
    expect(optionalMemorials[0].id).toBe('hedwig_of_silesia_religious');
    expect(optionalMemorials[1].id).toBe('margaret_mary_alacoque_virgin');
  });

  it('should elevate the memorial of Saint Margaret Mary Alacoque to a General Memorial', async () => {
    const calendar = Object.values(
      await new Romcal({ elevatedMemorialIds: ['margaret_mary_alacoque_virgin'] }).generateCalendar(2024)
    ).flat();
    const optionalMemorials = calendar.filter(
      (item) => item.date === '2024-10-16' && item.rank === Ranks.OptionalMemorial
    );
    const memorials = calendar.filter((item) => item.date === '2024-10-16' && item.rank === Ranks.Memorial);

    expect(optionalMemorials.length).toBe(0);
    expect(memorials.length).toBe(1);
    expect(memorials[0].id).toBe('margaret_mary_alacoque_virgin');
    expect(memorials[0].precedence).toBe(Precedences.GeneralMemorial_10);
  });

  it('should elevate the memorial of Saint Gall to a Proper Memorial', async () => {
    const calendar = Object.values(
      await new Romcal({
        localizedCalendar: Slovakia_Sk,
        elevatedMemorialIds: ['gall_of_switzerland_abbot'],
      }).generateCalendar(2024)
    ).flat();
    const optionalMemorials = calendar.filter(
      (item) => item.date === '2024-10-16' && item.rank === Ranks.OptionalMemorial
    );
    const memorials = calendar.filter((item) => item.date === '2024-10-16' && item.rank === Ranks.Memorial);

    expect(optionalMemorials.length).toBe(0);
    expect(memorials.length).toBe(1);
    expect(memorials[0].id).toBe('gall_of_switzerland_abbot');
    expect(memorials[0].precedence).toBe(Precedences.ProperMemorial_11b);
  });

  it('should keep only the first defined memorial if multiple optional memorials are elevated for the same day', async () => {
    const calendar = Object.values(
      await new Romcal({
        elevatedMemorialIds: ['margaret_mary_alacoque_virgin', 'hedwig_of_silesia_religious'],
      }).generateCalendar(2024)
    ).flat();
    const optionalMemorials = calendar.filter(
      (item) => item.date === '2024-10-16' && item.rank === Ranks.OptionalMemorial
    );
    const memorials = calendar.filter((item) => item.date === '2024-10-16' && item.rank === Ranks.Memorial);

    expect(optionalMemorials.length).toBe(0);
    expect(memorials.length).toBe(1);
    expect(memorials[0].id).toBe('hedwig_of_silesia_religious');
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
