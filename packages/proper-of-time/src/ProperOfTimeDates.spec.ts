import { ProperOfTimeDates } from './ProperOfTimeDates';

/**
 * Convert date string to Date object.
 * @param dateStr Date in the format YYYY-MM-DD
 * @returns
 */
const date = (dateStr: string): Date => {
  const dArr = dateStr.split('-');
  const year = parseInt(dArr[0], 10);
  const month = parseInt(dArr[1], 10) - 1;
  const day = parseInt(dArr[2], 10);
  return new Date(Date.UTC(year, month, day));
};

describe('ProperOfTimeDates', () => {
  let dates: InstanceType<typeof ProperOfTimeDates>;

  beforeAll(() => {
    dates = new ProperOfTimeDates();
  });

  describe('firstSundayOfAdvent', () => {
    it('should return the correct date for the first Sunday of Advent for years 2020-2030', () => {
      expect(dates.firstSundayOfAdvent({ year: 2020 })).toEqual(date('2020-11-29'));
      expect(dates.firstSundayOfAdvent({ year: 2021 })).toEqual(date('2021-11-28'));
      expect(dates.firstSundayOfAdvent({ year: 2022 })).toEqual(date('2022-11-27'));
      expect(dates.firstSundayOfAdvent({ year: 2023 })).toEqual(date('2023-12-3'));
      expect(dates.firstSundayOfAdvent({ year: 2024 })).toEqual(date('2024-11-31'));
      expect(dates.firstSundayOfAdvent({ year: 2025 })).toEqual(date('2025-11-30'));
      expect(dates.firstSundayOfAdvent({ year: 2026 })).toEqual(date('2026-11-29'));
      expect(dates.firstSundayOfAdvent({ year: 2027 })).toEqual(date('2027-11-28'));
      expect(dates.firstSundayOfAdvent({ year: 2028 })).toEqual(date('2028-12-3'));
      expect(dates.firstSundayOfAdvent({ year: 2029 })).toEqual(date('2029-12-2'));
      expect(dates.firstSundayOfAdvent({ year: 2030 })).toEqual(date('2030-12-1'));
    });
  });

  describe('unprivilegedWeekdayOfAdvent', () => {
    let fn: ProperOfTimeDates['unprivilegedWeekdayOfAdvent'];

    beforeAll(() => {
      dates = new ProperOfTimeDates();
      fn = dates.unprivilegedWeekdayOfAdvent;
    });

    it('should return null for invalid dayOfWeek values', () => {
      expect(fn({ dayOfWeek: -1, weekOfSeason: 1 })).toBeNull();
      expect(fn({ dayOfWeek: 7, weekOfSeason: 1 })).toBeNull();
    });

    it('should return null for invalid weekOfSeason values', () => {
      expect(fn({ dayOfWeek: 1, weekOfSeason: -1 })).toBeNull();
      expect(fn({ dayOfWeek: 1, weekOfSeason: 5 })).toBeNull();
    });

    it('should return the correct date for valid inputs', () => {
      expect(fn({ dayOfWeek: 1, weekOfSeason: 1, year: 2022 })).toEqual(date('2022-11-28'));
      expect(fn({ dayOfWeek: 2, weekOfSeason: 2, year: 2022 })).toEqual(date('2022-12-6'));
    });

    it('should handle edge case where date is December 17th or later and not a Sunday', () => {
      expect(fn({ dayOfWeek: 6, weekOfSeason: 3, year: 2022 })).toBeNull();
    });
  });

  describe('privilegedWeekdayOfAdvent', () => {
    let fn: ProperOfTimeDates['privilegedWeekdayOfAdvent'];

    beforeAll(() => {
      dates = new ProperOfTimeDates();
      fn = dates.privilegedWeekdayOfAdvent;
    });

    it('should return null for invalid dayOfMonth values', () => {
      expect(fn({ dayOfMonth: 16 })).toBeNull();
      expect(fn({ dayOfMonth: 25 })).toBeNull();
    });

    it('should return the correct date for valid inputs', () => {
      expect(fn({ dayOfMonth: 17, year: 2022 })).toEqual(date('2022-12-17'));
      expect(fn({ dayOfMonth: 19, year: 2023 })).toEqual(date('2023-12-19'));
    });

    it('should handle edge case where date is a Sunday', () => {
      expect(fn({ dayOfMonth: 18, year: 2022 })).toBeNull();
    });
  });

  describe('sundayOfAdvent', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return null for invalid weekOfSeason values', () => {
      expect(dates.sundayOfAdvent({ weekOfSeason: 0 })).toBeNull();
      expect(dates.sundayOfAdvent({ weekOfSeason: 5 })).toBeNull();
    });

    it('should return the correct date for valid inputs', () => {
      expect(dates.sundayOfAdvent({ weekOfSeason: 1, year: 2022 })).toEqual(date('2022-11-27'));
      expect(dates.sundayOfAdvent({ weekOfSeason: 2, year: 2023 })).toEqual(date('2023-12-10'));
      expect(dates.sundayOfAdvent({ weekOfSeason: 3, year: 2024 })).toEqual(date('2024-12-15'));
      expect(dates.sundayOfAdvent({ weekOfSeason: 4, year: 2025 })).toEqual(date('2025-12-21'));
    });
  });

  describe('nativityOfTheLord', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.nativityOfTheLord({ year: 2023 })).toEqual(date('2023-12-25'));
      expect(dates.nativityOfTheLord({ year: 2024 })).toEqual(date('2024-12-25'));
    });
  });

  describe('holyFamily', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return December 30th when Christmas is on Sunday', () => {
      expect(dates.holyFamily({ year: 2022 })).toEqual(date('2022-12-30'));
    });

    it('should return Sunday during Christmas octave when Christmas is not on Sunday', () => {
      expect(dates.holyFamily({ year: 2023 })).toEqual(date('2023-12-31'));
      expect(dates.holyFamily({ year: 2024 })).toEqual(date('2024-12-29'));
      expect(dates.holyFamily({ year: 2025 })).toEqual(date('2025-12-28'));
    });
  });

  describe('weekdayWithinOctaveOfChristmas', () => {
    let fn: ProperOfTimeDates['weekdayWithinOctaveOfChristmas'];

    beforeAll(() => {
      dates = new ProperOfTimeDates();
      fn = dates.weekdayWithinOctaveOfChristmas;
    });

    test('should return null when given day of octave is less than 1', () => {
      expect(fn({ dayOfOctave: 0, year: 2022 })).toBeNull();
    });

    test('should return null when given day of octave is greater than 7', () => {
      expect(fn({ dayOfOctave: 8, year: 2022 })).toBeNull();
    });

    test('should return correct date for weekday within octave', () => {
      expect(fn({ dayOfOctave: 2, year: 2022 })).toEqual(date('2022-12-26'));
      expect(fn({ dayOfOctave: 3, year: 2022 })).toEqual(date('2022-12-27'));
      expect(fn({ dayOfOctave: 4, year: 2022 })).toEqual(date('2022-12-28'));
      expect(fn({ dayOfOctave: 5, year: 2022 })).toEqual(date('2022-12-29'));
      expect(fn({ dayOfOctave: 6, year: 2023 })).toEqual(date('2023-12-30'));
      expect(fn({ dayOfOctave: 7, year: 2022 })).toEqual(date('2022-12-31'));
    });

    it('should return null for Christmas, which is the 1st day of the octave', () => {
      expect(fn({ dayOfOctave: 1, year: 2022 })).toBeNull();
    });

    test('should return null for Holy Family, which the 6th day of the octave in 2022', () => {
      expect(fn({ dayOfOctave: 6, year: 2022 })).toBeNull();
    });

    test('should return null for Mary, Mother of God, which the 8th day of the octave', () => {
      expect(fn({ dayOfOctave: 8, year: 2022 })).toBeNull();
    });
  });

  describe('maryMotherOfGod', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.maryMotherOfGod({ year: 2023 })).toEqual(date('2023-01-01'));
      expect(dates.maryMotherOfGod({ year: 2024 })).toEqual(date('2024-01-01'));
    });
  });

  describe('secondSundayAfterChristmas', () => {
    let fn: ProperOfTimeDates['secondSundayAfterChristmas'];

    beforeAll(() => {
      dates = new ProperOfTimeDates();
      fn = dates.secondSundayAfterChristmas;
    });

    it('returns the second Sunday after Christmas for the given year and epiphanyOnSunday set to false', () => {
      expect(fn({ year: 2022, epiphanyOnSunday: false })).toEqual(date('2022-01-02'));
    });

    it('returns null when Epiphany is always on a Sunday', () => {
      expect(fn({ year: 2023, epiphanyOnSunday: true })).toBeNull();
    });

    it('returns null when there is no second Sunday after Christmas', () => {
      expect(fn({ year: 2023, epiphanyOnSunday: false })).toBeNull();
    });
  });

  describe('weekdayBeforeEpiphany', () => {
    let fn: ProperOfTimeDates['weekdayBeforeEpiphany'];

    beforeAll(() => {
      dates = new ProperOfTimeDates();
      fn = dates.weekdayBeforeEpiphany;
    });

    it('should return the correct date if Epiphany is on January 8', () => {
      expect(fn({ dayOfMonth: 2, year: 2023, epiphanyOnSunday: true })).toEqual(date('2023-1-2'));
      expect(fn({ dayOfMonth: 3, year: 2023, epiphanyOnSunday: true })).toEqual(date('2023-1-3'));
      expect(fn({ dayOfMonth: 4, year: 2023, epiphanyOnSunday: true })).toEqual(date('2023-1-4'));
      expect(fn({ dayOfMonth: 5, year: 2023, epiphanyOnSunday: true })).toEqual(date('2023-1-5'));
      expect(fn({ dayOfMonth: 6, year: 2023, epiphanyOnSunday: true })).toEqual(date('2023-1-6'));
      expect(fn({ dayOfMonth: 7, year: 2023, epiphanyOnSunday: true })).toEqual(date('2023-1-7'));
      expect(fn({ dayOfMonth: 8, year: 2023, epiphanyOnSunday: true })).toBeNull();
    });

    it('should return the correct date if Epiphany is on January 6', () => {
      expect(fn({ dayOfMonth: 2, year: 2023, epiphanyOnSunday: false })).toEqual(date('2023-1-2'));
      expect(fn({ dayOfMonth: 3, year: 2023, epiphanyOnSunday: false })).toEqual(date('2023-1-3'));
      expect(fn({ dayOfMonth: 4, year: 2023, epiphanyOnSunday: false })).toEqual(date('2023-1-4'));
      expect(fn({ dayOfMonth: 5, year: 2023, epiphanyOnSunday: false })).toEqual(date('2023-1-5'));
      expect(fn({ dayOfMonth: 6, year: 2023, epiphanyOnSunday: false })).toBeNull();
      expect(fn({ dayOfMonth: 7, year: 2023, epiphanyOnSunday: false })).toBeNull();
      expect(fn({ dayOfMonth: 8, year: 2023, epiphanyOnSunday: false })).toBeNull();
    });

    it('should return null if input is less than 2', () => {
      expect(fn({ dayOfMonth: 1, year: 2023, epiphanyOnSunday: false })).toBeNull();
      expect(fn({ dayOfMonth: 1, year: 2023, epiphanyOnSunday: true })).toBeNull();
    });

    it('should return null if input is greater than 8', () => {
      expect(fn({ dayOfMonth: 9, year: 2023, epiphanyOnSunday: false })).toBeNull();
      expect(fn({ dayOfMonth: 9, year: 2023, epiphanyOnSunday: true })).toBeNull();
    });

    it('should return null if there are no dates between Mary, Mother of God and Epiphany', () => {
      expect(fn({ dayOfMonth: 2, year: 2022, epiphanyOnSunday: true })).toBeNull();
    });
  });

  describe('epiphany', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for Epiphany on Sunday for years 2020-2030', () => {
      expect(dates.epiphany({ year: 2020, epiphanyOnSunday: true })).toEqual(date('2020-1-5'));
      expect(dates.epiphany({ year: 2021, epiphanyOnSunday: true })).toEqual(date('2021-1-3'));
      expect(dates.epiphany({ year: 2022, epiphanyOnSunday: true })).toEqual(date('2022-1-2'));
      expect(dates.epiphany({ year: 2023, epiphanyOnSunday: true })).toEqual(date('2023-1-8'));
      expect(dates.epiphany({ year: 2024, epiphanyOnSunday: true })).toEqual(date('2024-1-7'));
      expect(dates.epiphany({ year: 2025, epiphanyOnSunday: true })).toEqual(date('2025-1-5'));
      expect(dates.epiphany({ year: 2026, epiphanyOnSunday: true })).toEqual(date('2026-1-4'));
      expect(dates.epiphany({ year: 2027, epiphanyOnSunday: true })).toEqual(date('2027-1-3'));
      expect(dates.epiphany({ year: 2028, epiphanyOnSunday: true })).toEqual(date('2028-1-2'));
      expect(dates.epiphany({ year: 2029, epiphanyOnSunday: true })).toEqual(date('2029-1-7'));
      expect(dates.epiphany({ year: 2030, epiphanyOnSunday: true })).toEqual(date('2030-1-6'));
    });

    it('should return the correct date for Epiphany always on January 6', () => {
      expect(dates.epiphany({ year: 2023, epiphanyOnSunday: false })).toEqual(date('2023-1-6'));
      expect(dates.epiphany({ year: 2024, epiphanyOnSunday: false })).toEqual(date('2024-1-6'));
    });
  });

  describe('weekdayAfterEpiphany', () => {
    let fn: ProperOfTimeDates['weekdayAfterEpiphany'];

    beforeAll(() => {
      dates = new ProperOfTimeDates();
      fn = dates.weekdayAfterEpiphany;
    });

    it('returns the correct date when Epiphany is on a Sunday', () => {
      // Monday-Saturday after Epiphany
      expect(fn({ dayOfWeek: 1, year: 2025, epiphanyOnSunday: true })).toEqual(date('2025-1-6'));
      expect(fn({ dayOfWeek: 2, year: 2025, epiphanyOnSunday: true })).toEqual(date('2025-1-7'));
      expect(fn({ dayOfWeek: 3, year: 2025, epiphanyOnSunday: true })).toEqual(date('2025-1-8'));
      expect(fn({ dayOfWeek: 4, year: 2025, epiphanyOnSunday: true })).toEqual(date('2025-1-9'));
      expect(fn({ dayOfWeek: 5, year: 2025, epiphanyOnSunday: true })).toEqual(date('2025-1-10'));
      expect(fn({ dayOfWeek: 6, year: 2025, epiphanyOnSunday: true })).toEqual(date('2025-1-11'));
    });

    it('returns the correct date for a given year and day of the week after Epiphany', () => {
      // Monday-Wednesday are not after Epiphany, so it should return null
      expect(fn({ dayOfWeek: 1, year: 2021, epiphanyOnSunday: false })).toBeNull();
      expect(fn({ dayOfWeek: 2, year: 2021, epiphanyOnSunday: false })).toBeNull();
      expect(fn({ dayOfWeek: 3, year: 2021, epiphanyOnSunday: false })).toBeNull();

      // Thursday after Epiphany
      expect(fn({ dayOfWeek: 4, year: 2021, epiphanyOnSunday: false })).toEqual(date('2021-1-7'));

      // Friday after Epiphany
      expect(fn({ dayOfWeek: 5, year: 2021, epiphanyOnSunday: false })).toEqual(date('2021-1-8'));

      // Saturday after Epiphany
      expect(fn({ dayOfWeek: 6, year: 2021, epiphanyOnSunday: false })).toEqual(date('2021-1-9'));
    });

    it('returns null for an invalid day of the week', () => {
      expect(fn({ dayOfWeek: 0 })).toBeNull();
      expect(fn({ dayOfWeek: 7 })).toBeNull();
      expect(fn({ dayOfWeek: -1 })).toBeNull();
    });

    it('returns null when there are no days between Epiphany and Baptism of the Lord', () => {
      expect(fn({ dayOfWeek: 1, year: 2023, epiphanyOnSunday: true })).toBeNull();
      expect(fn({ dayOfWeek: 1, year: 2024, epiphanyOnSunday: false })).toBeNull();
    });
  });

  describe('baptismOfTheLord method', () => {
    let fn: ProperOfTimeDates['baptismOfTheLord'];

    beforeAll(() => {
      dates = new ProperOfTimeDates();
      fn = dates.baptismOfTheLord;
    });

    it('returns the Sunday after Epiphany when Epiphany is on January 6', () => {
      expect(fn({ year: 2020, epiphanyOnSunday: false })).toEqual(date('2020-1-12'));
      expect(fn({ year: 2021, epiphanyOnSunday: false })).toEqual(date('2021-1-10'));
      expect(fn({ year: 2022, epiphanyOnSunday: false })).toEqual(date('2022-1-9'));
      expect(fn({ year: 2023, epiphanyOnSunday: false })).toEqual(date('2023-1-8'));
      expect(fn({ year: 2024, epiphanyOnSunday: false })).toEqual(date('2024-1-7'));
      expect(fn({ year: 2025, epiphanyOnSunday: false })).toEqual(date('2025-1-12'));
      expect(fn({ year: 2026, epiphanyOnSunday: false })).toEqual(date('2026-1-11'));
      expect(fn({ year: 2027, epiphanyOnSunday: false })).toEqual(date('2027-1-10'));
      expect(fn({ year: 2028, epiphanyOnSunday: false })).toEqual(date('2028-1-9'));
      expect(fn({ year: 2029, epiphanyOnSunday: false })).toEqual(date('2029-1-7'));
      expect(fn({ year: 2030, epiphanyOnSunday: false })).toEqual(date('2030-1-13'));
    });

    it('returns the Sunday after Epiphany when Epiphany is on Sunday', () => {
      expect(fn({ year: 2020, epiphanyOnSunday: true })).toEqual(date('2020-1-12'));
      expect(fn({ year: 2021, epiphanyOnSunday: true })).toEqual(date('2021-1-10'));
      expect(fn({ year: 2022, epiphanyOnSunday: true })).toEqual(date('2022-1-9'));
      expect(fn({ year: 2025, epiphanyOnSunday: true })).toEqual(date('2025-1-12'));
      expect(fn({ year: 2026, epiphanyOnSunday: true })).toEqual(date('2026-1-11'));
      expect(fn({ year: 2027, epiphanyOnSunday: true })).toEqual(date('2027-1-10'));
      expect(fn({ year: 2028, epiphanyOnSunday: true })).toEqual(date('2028-1-9'));
      expect(fn({ year: 2030, epiphanyOnSunday: true })).toEqual(date('2030-1-13'));
    });

    it('returns the Monday after Epiphany when Epiphany is either Sunday January 7 or 8', () => {
      expect(fn({ year: 2023, epiphanyOnSunday: true })).toEqual(date('2023-1-9'));
      expect(fn({ year: 2024, epiphanyOnSunday: true })).toEqual(date('2024-1-8'));
      expect(fn({ year: 2029, epiphanyOnSunday: true })).toEqual(date('2029-1-8'));
    });
  });

  describe('ashWednesday', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.ashWednesday({ year: 2023 })).toEqual(date('2023-02-22'));
      expect(dates.ashWednesday({ year: 2024 })).toEqual(date('2024-02-14'));
    });
  });

  describe('palmSunday', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.palmSunday({ year: 2023 })).toEqual(date('2023-04-02'));
      expect(dates.palmSunday({ year: 2024 })).toEqual(date('2024-03-24'));
    });
  });

  describe('holyThursday', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.holyThursday({ year: 2023 })).toEqual(date('2023-04-06'));
      expect(dates.holyThursday({ year: 2024 })).toEqual(date('2024-03-28'));
    });
  });

  describe('goodFriday', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.goodFriday({ year: 2023 })).toEqual(date('2023-04-07'));
      expect(dates.goodFriday({ year: 2024 })).toEqual(date('2024-03-29'));
    });
  });

  describe('holySaturday', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.holySaturday({ year: 2023 })).toEqual(date('2023-04-08'));
      expect(dates.holySaturday({ year: 2024 })).toEqual(date('2024-03-30'));
    });
  });

  describe('easterSunday', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.easterSunday({ year: 2020 })).toEqual(date('2020-04-12'));
      expect(dates.easterSunday({ year: 2021 })).toEqual(date('2021-04-04'));
      expect(dates.easterSunday({ year: 2022 })).toEqual(date('2022-04-17'));
      expect(dates.easterSunday({ year: 2023 })).toEqual(date('2023-04-09'));
      expect(dates.easterSunday({ year: 2024 })).toEqual(date('2024-03-31'));
      expect(dates.easterSunday({ year: 2025 })).toEqual(date('2025-04-20'));
      expect(dates.easterSunday({ year: 2026 })).toEqual(date('2026-04-05'));
      expect(dates.easterSunday({ year: 2027 })).toEqual(date('2027-03-28'));
      expect(dates.easterSunday({ year: 2028 })).toEqual(date('2028-04-16'));
      expect(dates.easterSunday({ year: 2029 })).toEqual(date('2029-04-01'));
      expect(dates.easterSunday({ year: 2030 })).toEqual(date('2030-04-21'));
      expect(dates.easterSunday({ year: 2031 })).toEqual(date('2031-04-13'));
      expect(dates.easterSunday({ year: 2032 })).toEqual(date('2032-03-28'));
      expect(dates.easterSunday({ year: 2033 })).toEqual(date('2033-04-17'));
      expect(dates.easterSunday({ year: 2034 })).toEqual(date('2034-04-09'));
      expect(dates.easterSunday({ year: 2035 })).toEqual(date('2035-03-25'));
      expect(dates.easterSunday({ year: 2036 })).toEqual(date('2036-04-13'));
      expect(dates.easterSunday({ year: 2037 })).toEqual(date('2037-04-05'));
      expect(dates.easterSunday({ year: 2038 })).toEqual(date('2038-04-25'));
      expect(dates.easterSunday({ year: 2039 })).toEqual(date('2039-04-10'));
      expect(dates.easterSunday({ year: 2040 })).toEqual(date('2040-04-01'));
    });
  });

  describe('weekdayOrSundayOfEasterTime', () => {
    let fn: ProperOfTimeDates['weekdayOrSundayOfEasterTime'];

    beforeAll(() => {
      dates = new ProperOfTimeDates();
      fn = dates.weekdayOrSundayOfEasterTime;
    });

    test('returns null when weekOfSeason is less than 1 or greater than 7', () => {
      expect(fn({ dayOfWeek: 0, weekOfSeason: 0 })).toBeNull();
      expect(fn({ dayOfWeek: 0, weekOfSeason: 8 })).toBeNull();
    });

    test('returns null when dayOfWeek is less than 0 or greater than 6', () => {
      expect(fn({ dayOfWeek: -1, weekOfSeason: 1 })).toBeNull();
      expect(fn({ dayOfWeek: 7, weekOfSeason: 1 })).toBeNull();
    });

    test('returns correct dates in Easter time', () => {
      expect(fn({ dayOfWeek: 1, weekOfSeason: 1, year: 2022 })).toEqual(date('2022-04-18'));
      expect(fn({ dayOfWeek: 3, weekOfSeason: 2, year: 2022 })).toEqual(date('2022-04-27'));
      expect(fn({ dayOfWeek: 4, weekOfSeason: 6, year: 2022, ascensionOnSunday: true })).toEqual(
        date('2022-05-26'),
      );
      expect(fn({ dayOfWeek: 0, weekOfSeason: 7, year: 2022, ascensionOnSunday: false })).toEqual(
        date('2022-05-29'),
      );
      expect(fn({ dayOfWeek: 6, weekOfSeason: 7, year: 2022 })).toEqual(date('2022-06-04'));
    });

    test('returns null for Easter Sunday', () => {
      expect(fn({ dayOfWeek: 0, weekOfSeason: 1, year: 2022 })).toBeNull();
    });

    test('returns null for Ascension day', () => {
      expect(
        fn({ dayOfWeek: 4, weekOfSeason: 6, year: 2022, ascensionOnSunday: false }),
      ).toBeNull();
      expect(fn({ dayOfWeek: 0, weekOfSeason: 7, year: 2022, ascensionOnSunday: true })).toBeNull();
    });
  });

  describe('ascension', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    test('returns correct date for Ascension on Thursday', () => {
      expect(dates.ascension({ year: 2023, ascensionOnSunday: false })).toEqual(date('2023-05-18'));
      expect(dates.ascension({ year: 2024, ascensionOnSunday: false })).toEqual(date('2024-05-09'));
    });

    test('returns correct date for Ascension on Sunday', () => {
      expect(dates.ascension({ year: 2023, ascensionOnSunday: true })).toEqual(date('2023-05-21'));
      expect(dates.ascension({ year: 2024, ascensionOnSunday: true })).toEqual(date('2024-05-12'));
    });
  });

  describe('pentecostSunday', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.pentecostSunday({ year: 2023 })).toEqual(date('2023-05-28'));
      expect(dates.pentecostSunday({ year: 2024 })).toEqual(date('2024-05-19'));
    });
  });

  describe('weekdayOrSundayOfOrdinaryTime', () => {
    let fn: ProperOfTimeDates['weekdayOrSundayOfOrdinaryTime'];

    beforeAll(() => {
      dates = new ProperOfTimeDates();
      fn = dates.weekdayOrSundayOfOrdinaryTime;
    });

    it('returns null when given an invalid day of week, or an invalid week of season', () => {
      expect(fn({ dayOfWeek: 0, weekOfSeason: 0, year: 2023 })).toBeNull();
      expect(fn({ dayOfWeek: 2, weekOfSeason: 0, year: 2023 })).toBeNull();
      expect(fn({ dayOfWeek: -1, weekOfSeason: 2, year: 2023 })).toBeNull();
      expect(fn({ dayOfWeek: 8, weekOfSeason: 2, year: 2023 })).toBeNull();
      expect(fn({ dayOfWeek: 0, weekOfSeason: 35, year: 2023 })).toBeNull();
    });

    it('returns null for the first Sunday of Ordinary Time, which does not exist', () => {
      expect(fn({ dayOfWeek: 0, weekOfSeason: 1, year: 2023 })).toBeNull();
    });

    it('returns null when date is Trinity Sunday, Corpus Christi, Most Sacred Heart of Jesus, or Christ the King Sunday', () => {
      expect(fn({ dayOfWeek: 0, weekOfSeason: 9, year: 2023 })).toBeNull(); // Trinity Sunday
      expect(
        fn({
          dayOfWeek: 4,
          weekOfSeason: 9,
          year: 2023,
          epiphanyOnSunday: false,
          corpusChristiOnSunday: false,
        }),
      ).toBeNull(); // Corpus Christi (on Thursday)
      expect(
        fn({
          dayOfWeek: 0,
          weekOfSeason: 10,
          year: 2023,
          epiphanyOnSunday: false,
          corpusChristiOnSunday: true,
        }),
      ).toBeNull(); // Corpus Christi (on Sunday)
      expect(fn({ dayOfWeek: 5, weekOfSeason: 10, year: 2023 })).toBeNull(); // Most Sacred Heart of Jesus
      expect(fn({ dayOfWeek: 0, weekOfSeason: 34, year: 2023 })).toBeNull(); // Christ the King Sunday
    });

    it('returns a Date when given a valid day of week and week of season', () => {
      expect(fn({ dayOfWeek: 0, weekOfSeason: 2, year: 2023 })).toBeInstanceOf(Date);
    });

    it('returns the correct date for the given day of week and week of season', () => {
      expect(fn({ dayOfWeek: 0, weekOfSeason: 2, year: 2023 })).toEqual(date('2023-01-15'));
      expect(fn({ dayOfWeek: 6, weekOfSeason: 26, year: 2023 })).toEqual(date('2023-10-07'));
    });

    it('return the correct first dates of Ordinary Time when the Baptism of the Lord is on a Sunday', () => {
      expect(fn({ dayOfWeek: 1, weekOfSeason: 1, year: 2023, epiphanyOnSunday: false })).toEqual(
        date('2023-01-09'),
      );
      expect(fn({ dayOfWeek: 2, weekOfSeason: 1, year: 2023, epiphanyOnSunday: false })).toEqual(
        date('2023-01-10'),
      );
      expect(fn({ dayOfWeek: 3, weekOfSeason: 1, year: 2023, epiphanyOnSunday: false })).toEqual(
        date('2023-01-11'),
      );
      expect(fn({ dayOfWeek: 4, weekOfSeason: 1, year: 2023, epiphanyOnSunday: false })).toEqual(
        date('2023-01-12'),
      );
      expect(fn({ dayOfWeek: 5, weekOfSeason: 1, year: 2023, epiphanyOnSunday: false })).toEqual(
        date('2023-01-13'),
      );
      expect(fn({ dayOfWeek: 6, weekOfSeason: 1, year: 2023, epiphanyOnSunday: false })).toEqual(
        date('2023-01-14'),
      );
      expect(fn({ dayOfWeek: 0, weekOfSeason: 2, year: 2023, epiphanyOnSunday: false })).toEqual(
        date('2023-01-15'),
      );
      expect(fn({ dayOfWeek: 1, weekOfSeason: 2, year: 2023, epiphanyOnSunday: false })).toEqual(
        date('2023-01-16'),
      );
      expect(fn({ dayOfWeek: 2, weekOfSeason: 2, year: 2023, epiphanyOnSunday: false })).toEqual(
        date('2023-01-17'),
      );
    });

    it('return the correct first dates of Ordinary Time when the Baptism of the Lord is on a Monday', () => {
      expect(fn({ dayOfWeek: 1, weekOfSeason: 1, year: 2023, epiphanyOnSunday: true })).toBeNull();
      expect(fn({ dayOfWeek: 2, weekOfSeason: 1, year: 2023, epiphanyOnSunday: true })).toEqual(
        date('2023-01-10'),
      );
      expect(fn({ dayOfWeek: 3, weekOfSeason: 1, year: 2023, epiphanyOnSunday: true })).toEqual(
        date('2023-01-11'),
      );
      expect(fn({ dayOfWeek: 4, weekOfSeason: 1, year: 2023, epiphanyOnSunday: true })).toEqual(
        date('2023-01-12'),
      );
      expect(fn({ dayOfWeek: 5, weekOfSeason: 1, year: 2023, epiphanyOnSunday: true })).toEqual(
        date('2023-01-13'),
      );
      expect(fn({ dayOfWeek: 6, weekOfSeason: 1, year: 2023, epiphanyOnSunday: true })).toEqual(
        date('2023-01-14'),
      );
      expect(fn({ dayOfWeek: 0, weekOfSeason: 2, year: 2023, epiphanyOnSunday: true })).toEqual(
        date('2023-01-15'),
      );
      expect(fn({ dayOfWeek: 1, weekOfSeason: 2, year: 2023, epiphanyOnSunday: true })).toEqual(
        date('2023-01-16'),
      );
      expect(fn({ dayOfWeek: 2, weekOfSeason: 2, year: 2023, epiphanyOnSunday: true })).toEqual(
        date('2023-01-17'),
      );
    });
  });

  describe('trinitySunday', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.trinitySunday({ year: 2023 })).toEqual(date('2023-06-04'));
      expect(dates.trinitySunday({ year: 2024 })).toEqual(date('2024-05-26'));
    });
  });

  describe('corpusChristi', () => {
    let fn: ProperOfTimeDates['corpusChristi'];

    beforeAll(() => {
      dates = new ProperOfTimeDates();
      fn = dates.corpusChristi;
    });

    test('returns correct date for Corpus Christi on Thursday', () => {
      expect(fn({ year: 2023, corpusChristiOnSunday: false })).toEqual(date('2023-06-08'));
      expect(fn({ year: 2024, corpusChristiOnSunday: false })).toEqual(date('2024-05-30'));
    });

    test('returns correct date for Corpus Christi on Sunday', () => {
      expect(fn({ year: 2023, corpusChristiOnSunday: true })).toEqual(date('2023-06-11'));
      expect(fn({ year: 2024, corpusChristiOnSunday: true })).toEqual(date('2024-06-02'));
    });
  });

  describe('mostSacredHeartOfJesus', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.mostSacredHeartOfJesus({ year: 2023 })).toEqual(date('2023-06-16'));
      expect(dates.mostSacredHeartOfJesus({ year: 2024 })).toEqual(date('2024-06-07'));
    });
  });

  describe('christTheKingSunday', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.christTheKingSunday({ year: 2023 })).toEqual(date('2023-11-26'));
      expect(dates.christTheKingSunday({ year: 2024 })).toEqual(date('2024-11-24'));
    });
  });
});
