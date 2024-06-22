import {
  EasterDate,
  calculateGregorianEasterDate,
  calculateJulianEasterDateToGregorianDate,
  gregorianToJulianDay,
  isLeapGregorianYear,
  julianToGregorian,
  julianToJulianDay,
} from './easter.dates';

describe('Easter calculation', () => {
  describe('calculateGregorianEasterDate', () => {
    // TODO: move this to a fixture after #477 is merged (it introduces fixtures)
    const expectedDates: Record<string, EasterDate> = {
      '2001': { year: 2001, month: 4, day: 15 },
      '2002': { year: 2002, month: 3, day: 31 },
      '2003': { year: 2003, month: 4, day: 20 },
      '2004': { year: 2004, month: 4, day: 11 },
      '2005': { year: 2005, month: 3, day: 27 },
      '2006': { year: 2006, month: 4, day: 16 },
      '2007': { year: 2007, month: 4, day: 8 },
      '2008': { year: 2008, month: 3, day: 23 },
      '2009': { year: 2009, month: 4, day: 12 },
      '2010': { year: 2010, month: 4, day: 4 },
      '2011': { year: 2011, month: 4, day: 24 },
      '2012': { year: 2012, month: 4, day: 8 },
      '2013': { year: 2013, month: 3, day: 31 },
      '2014': { year: 2014, month: 4, day: 20 },
      '2015': { year: 2015, month: 4, day: 5 },
      '2016': { year: 2016, month: 3, day: 27 },
      '2017': { year: 2017, month: 4, day: 16 },
      '2018': { year: 2018, month: 4, day: 1 },
      '2019': { year: 2019, month: 4, day: 21 },
      '2020': { year: 2020, month: 4, day: 12 },
      '2021': { year: 2021, month: 4, day: 4 },
      '2022': { year: 2022, month: 4, day: 17 },
      '2023': { year: 2023, month: 4, day: 9 },
      '2024': { year: 2024, month: 3, day: 31 },
      '2025': { year: 2025, month: 4, day: 20 },
    };

    Object.entries(expectedDates).forEach(([year, expected]) => {
      it(`should calculate Gregorian Easter date for year ${year}`, () => {
        expect(calculateGregorianEasterDate(parseInt(year, 10))).toEqual(expected);
      });
    });
  });

  describe('calculateJulianEasterDateToGregorianDate', () => {
    // TODO: move this to a fixture after #477 is merged (it introduces fixtures)
    const expectedDates: Record<string, EasterDate> = {
      '2001': { year: 2001, month: 4, day: 15 },
      '2002': { year: 2002, month: 5, day: 5 },
      '2003': { year: 2003, month: 4, day: 27 },
      '2004': { year: 2004, month: 4, day: 11 },
      '2005': { year: 2005, month: 5, day: 1 },
      '2006': { year: 2006, month: 4, day: 23 },
      '2007': { year: 2007, month: 4, day: 8 },
      '2008': { year: 2008, month: 4, day: 27 },
      '2009': { year: 2009, month: 4, day: 19 },
      '2010': { year: 2010, month: 4, day: 4 },
      '2011': { year: 2011, month: 4, day: 24 },
      '2012': { year: 2012, month: 4, day: 15 },
      '2013': { year: 2013, month: 5, day: 5 },
      '2014': { year: 2014, month: 4, day: 20 },
      '2015': { year: 2015, month: 4, day: 12 },
      '2016': { year: 2016, month: 5, day: 1 },
      '2017': { year: 2017, month: 4, day: 16 },
      '2018': { year: 2018, month: 4, day: 8 },
      '2019': { year: 2019, month: 4, day: 28 },
      '2020': { year: 2020, month: 4, day: 19 },
      '2021': { year: 2021, month: 5, day: 2 },
      '2022': { year: 2022, month: 4, day: 24 },
      '2023': { year: 2023, month: 4, day: 16 },
      '2024': { year: 2024, month: 5, day: 5 },
      '2025': { year: 2025, month: 4, day: 20 },
    };

    Object.entries(expectedDates).forEach(([year, expected]) => {
      it(`should calculate Julian Easter date for year ${year}`, () => {
        expect(calculateJulianEasterDateToGregorianDate(parseInt(year, 10))).toEqual(expected);
      });
    });

    it('should throw an error for a year before 326 AD', () => {
      expect(() => calculateJulianEasterDateToGregorianDate(200)).toThrow(
        'Easter date calculation within the Julian calendar is not valid for years before 326 AD'
      );
    });
  });

  describe('Calendar utilities', () => {
    describe('Leap Year Tests', () => {
      it('should verify a leap Gregorian year', () => {
        const actual = isLeapGregorianYear(2020);
        expect(actual).toBe(true);
      });

      it('should verify a non-leap Gregorian year', () => {
        const actual = isLeapGregorianYear(2021);
        expect(actual).toBe(false);
      });
    });

    describe('Julian Calendar Conversion Tests', () => {
      it('should convert a non-leap recent date to Julian Day', () => {
        const date = new Date(Date.UTC(2023, 1, 1));
        const actual = julianToJulianDay(date);
        expect(actual).toBe(2459989.5);
      });

      it('should convert a leap recent date to Julian Day', () => {
        const date = new Date(Date.UTC(2020, 6, 1));
        const actual = julianToJulianDay(date);
        expect(actual).toBe(2459044.5);
      });

      it('should convert a recent date from Julian to Gregorian', () => {
        const date = new Date(Date.UTC(2023, 1, 1));
        const actual = julianToGregorian(date);
        expect(actual.toISOString()).toBe('2023-02-14T00:00:00.000Z');
      });
    });

    describe('Gregorian Calendar Conversion Tests', () => {
      it('should convert a non-leap recent date to Julian Day', () => {
        const date = new Date(Date.UTC(2023, 1, 1));
        const actual = gregorianToJulianDay(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate());
        expect(actual).toBe(2459976.5);
      });

      it('should convert a leap recent date to Julian Day', () => {
        const date = new Date(Date.UTC(2020, 6, 1));
        const actual = gregorianToJulianDay(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate());
        expect(actual).toBe(2459031.5);
      });
    });
  });
});
