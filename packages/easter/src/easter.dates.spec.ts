import { gregorianEasterDatesFixture, julianEasterDatesFixture } from './fixtures/easter-dates.fixture';

import {
  calculateGregorianEasterDate,
  calculateJulianEasterDateToGregorianDate,
  gregorianToJulianDay,
  isLeapGregorianYear,
  julianToGregorian,
  julianToJulianDay,
} from '.';

describe('Easter calculation', () => {
  describe('calculateGregorianEasterDate', () => {
    Object.entries(gregorianEasterDatesFixture).forEach(([year, expected]) => {
      it(`should calculate Gregorian Easter date for year ${year}`, () => {
        expect(calculateGregorianEasterDate(parseInt(year, 10))).toEqual(expected);
      });
    });

    it('should fall between March 22 and April 25, from 1900 to 2100', () => {
      Array.from({ length: 201 }, (_, i) => 1900 + i).forEach((year) => {
        const { month, day } = calculateGregorianEasterDate(year);
        const ordinal = month * 100 + day;
        expect(ordinal).toBeGreaterThanOrEqual(322);
        expect(ordinal).toBeLessThanOrEqual(425);
      });
    });
  });

  describe('calculateJulianEasterDateToGregorianDate', () => {
    Object.entries(julianEasterDatesFixture).forEach(([year, expected]) => {
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
