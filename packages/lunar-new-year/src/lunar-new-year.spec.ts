import { LunarNewYearDate, calculateLunarNewYear } from '.';

describe('Lunar New Year calculation', () => {
  // Reference: https://pinyin.info/chinese_new_year/cny2000-2099.html
  describe('calculateLunarNewYear (UTC+8, China/Hong Kong/Taiwan)', () => {
    const expectedDates: Record<string, LunarNewYearDate> = {
      '2000': { year: 2000, month: 2, day: 5 },
      '2001': { year: 2001, month: 1, day: 24 },
      '2002': { year: 2002, month: 2, day: 12 },
      '2003': { year: 2003, month: 2, day: 1 },
      '2004': { year: 2004, month: 1, day: 22 },
      '2005': { year: 2005, month: 2, day: 9 },
      '2006': { year: 2006, month: 1, day: 29 },
      '2007': { year: 2007, month: 2, day: 18 },
      '2008': { year: 2008, month: 2, day: 7 },
      '2009': { year: 2009, month: 1, day: 26 },
      '2010': { year: 2010, month: 2, day: 14 },
      '2011': { year: 2011, month: 2, day: 3 },
      '2012': { year: 2012, month: 1, day: 23 },
      '2013': { year: 2013, month: 2, day: 10 },
      '2014': { year: 2014, month: 1, day: 31 },
      '2015': { year: 2015, month: 2, day: 19 },
      '2016': { year: 2016, month: 2, day: 8 },
      '2017': { year: 2017, month: 1, day: 28 },
      '2018': { year: 2018, month: 2, day: 16 },
      '2019': { year: 2019, month: 2, day: 5 },
      '2020': { year: 2020, month: 1, day: 25 },
      '2021': { year: 2021, month: 2, day: 12 },
      '2022': { year: 2022, month: 2, day: 1 },
      '2023': { year: 2023, month: 1, day: 22 },
      '2024': { year: 2024, month: 2, day: 10 },
      '2025': { year: 2025, month: 1, day: 29 },
      '2026': { year: 2026, month: 2, day: 17 },
      '2027': { year: 2027, month: 2, day: 6 },
      '2028': { year: 2028, month: 1, day: 26 },
      '2029': { year: 2029, month: 2, day: 13 },
      '2030': { year: 2030, month: 2, day: 3 },
      '2031': { year: 2031, month: 1, day: 23 },
      '2032': { year: 2032, month: 2, day: 11 },
      '2033': { year: 2033, month: 1, day: 31 },
      '2034': { year: 2034, month: 2, day: 19 },
      '2035': { year: 2035, month: 2, day: 8 },
      '2036': { year: 2036, month: 1, day: 28 },
      '2037': { year: 2037, month: 2, day: 15 },
      '2038': { year: 2038, month: 2, day: 4 },
      '2039': { year: 2039, month: 1, day: 24 },
      '2040': { year: 2040, month: 2, day: 12 },
      '2041': { year: 2041, month: 2, day: 1 },
      '2042': { year: 2042, month: 1, day: 22 },
      '2043': { year: 2043, month: 2, day: 10 },
      '2044': { year: 2044, month: 1, day: 30 },
      '2045': { year: 2045, month: 2, day: 17 },
      '2046': { year: 2046, month: 2, day: 6 },
      '2047': { year: 2047, month: 1, day: 26 },
      '2048': { year: 2048, month: 2, day: 14 },
      '2049': { year: 2049, month: 2, day: 2 },
      '2050': { year: 2050, month: 1, day: 23 },
      '2051': { year: 2051, month: 2, day: 11 },
      '2052': { year: 2052, month: 2, day: 1 },
      '2053': { year: 2053, month: 2, day: 19 },
      '2054': { year: 2054, month: 2, day: 8 },
      '2055': { year: 2055, month: 1, day: 28 },
      '2056': { year: 2056, month: 2, day: 15 },
      '2057': { year: 2057, month: 2, day: 4 },
      '2058': { year: 2058, month: 1, day: 24 },
      '2059': { year: 2059, month: 2, day: 12 },
      '2060': { year: 2060, month: 2, day: 2 },
      '2061': { year: 2061, month: 1, day: 21 },
      '2062': { year: 2062, month: 2, day: 9 },
      '2063': { year: 2063, month: 1, day: 29 },
      '2064': { year: 2064, month: 2, day: 17 },
      '2065': { year: 2065, month: 2, day: 5 },
      '2066': { year: 2066, month: 1, day: 26 },
      '2067': { year: 2067, month: 2, day: 14 },
      '2068': { year: 2068, month: 2, day: 3 },
      '2069': { year: 2069, month: 1, day: 23 },
      '2070': { year: 2070, month: 2, day: 11 },
      '2071': { year: 2071, month: 1, day: 31 },
      '2072': { year: 2072, month: 2, day: 19 },
      '2073': { year: 2073, month: 2, day: 7 },
      '2074': { year: 2074, month: 1, day: 27 },
      '2075': { year: 2075, month: 2, day: 15 },
      '2076': { year: 2076, month: 2, day: 5 },
      '2077': { year: 2077, month: 1, day: 24 },
      '2078': { year: 2078, month: 2, day: 12 },
      '2079': { year: 2079, month: 2, day: 2 },
      '2080': { year: 2080, month: 1, day: 22 },
      '2081': { year: 2081, month: 2, day: 9 },
      '2082': { year: 2082, month: 1, day: 29 },
      '2083': { year: 2083, month: 2, day: 17 },
      '2084': { year: 2084, month: 2, day: 6 },
      '2085': { year: 2085, month: 1, day: 26 },
      '2086': { year: 2086, month: 2, day: 14 },
      '2087': { year: 2087, month: 2, day: 3 },
      '2088': { year: 2088, month: 1, day: 24 },
      '2089': { year: 2089, month: 2, day: 10 },
      '2090': { year: 2090, month: 1, day: 30 },
      '2091': { year: 2091, month: 2, day: 18 },
      '2092': { year: 2092, month: 2, day: 7 },
      '2093': { year: 2093, month: 1, day: 27 },
      '2094': { year: 2094, month: 2, day: 15 },
      '2095': { year: 2095, month: 2, day: 5 },
      '2096': { year: 2096, month: 1, day: 25 },
      '2097': { year: 2097, month: 2, day: 12 },
      '2098': { year: 2098, month: 2, day: 1 },
      '2099': { year: 2099, month: 1, day: 21 },
    };

    Object.entries(expectedDates).forEach(([year, expected]) => {
      it(`should calculate Lunar New Year date for year ${year}`, () => {
        expect(calculateLunarNewYear(parseInt(year, 10), 8)).toEqual(expected);
      });
    });
  });

  describe('Date range validation', () => {
    it('Lunar New Year always falls between January 21 and February 20', () => {
      for (let year = 2000; year <= 2099; year++) {
        const result = calculateLunarNewYear(year, 8);
        const dayOfYear = result.month === 1 ? result.day : 31 + result.day;
        // Jan 21 = day 21, Feb 20 = day 51
        expect(dayOfYear).toBeGreaterThanOrEqual(21);
        expect(dayOfYear).toBeLessThanOrEqual(51);
      }
    });
  });

  describe('UTC offset variations', () => {
    it('In 2026, all offsets (UTC+7/+8/+9) give the same date', () => {
      const expected = { year: 2026, month: 2, day: 17 };
      expect(calculateLunarNewYear(2026, 7)).toEqual(expected);
      expect(calculateLunarNewYear(2026, 8)).toEqual(expected);
      expect(calculateLunarNewYear(2026, 9)).toEqual(expected);
    });

    it('In 2028, UTC+9 diverges from UTC+7/+8', () => {
      expect(calculateLunarNewYear(2028, 7)).toEqual({ year: 2028, month: 1, day: 26 });
      expect(calculateLunarNewYear(2028, 8)).toEqual({ year: 2028, month: 1, day: 26 });
      expect(calculateLunarNewYear(2028, 9)).toEqual({ year: 2028, month: 1, day: 27 });
    });

    it('In 2030, UTC+7 diverges from UTC+8/+9', () => {
      expect(calculateLunarNewYear(2030, 7)).toEqual({ year: 2030, month: 2, day: 2 });
      expect(calculateLunarNewYear(2030, 8)).toEqual({ year: 2030, month: 2, day: 3 });
      expect(calculateLunarNewYear(2030, 9)).toEqual({ year: 2030, month: 2, day: 3 });
    });
  });
});
