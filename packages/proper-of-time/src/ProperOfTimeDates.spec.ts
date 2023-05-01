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
      expect(dates.firstSundayOfAdvent(2020)).toEqual(date('2020-11-29'));
      expect(dates.firstSundayOfAdvent(2021)).toEqual(date('2021-11-28'));
      expect(dates.firstSundayOfAdvent(2022)).toEqual(date('2022-11-27'));
      expect(dates.firstSundayOfAdvent(2023)).toEqual(date('2023-12-3'));
      expect(dates.firstSundayOfAdvent(2024)).toEqual(date('2024-11-31'));
      expect(dates.firstSundayOfAdvent(2025)).toEqual(date('2025-11-30'));
      expect(dates.firstSundayOfAdvent(2026)).toEqual(date('2026-11-29'));
      expect(dates.firstSundayOfAdvent(2027)).toEqual(date('2027-11-28'));
      expect(dates.firstSundayOfAdvent(2028)).toEqual(date('2028-12-3'));
      expect(dates.firstSundayOfAdvent(2029)).toEqual(date('2029-12-2'));
      expect(dates.firstSundayOfAdvent(2030)).toEqual(date('2030-12-1'));
    });
  });

  describe('unprivilegedWeekdayOfAdvent', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return null for invalid dayOfWeek values', () => {
      expect(dates.unprivilegedWeekdayOfAdvent(-1, 1)).toBeNull();
      expect(dates.unprivilegedWeekdayOfAdvent(7, 1)).toBeNull();
    });

    it('should return null for invalid weekOfSeason values', () => {
      expect(dates.unprivilegedWeekdayOfAdvent(1, -1)).toBeNull();
      expect(dates.unprivilegedWeekdayOfAdvent(1, 5)).toBeNull();
    });

    it('should return the correct date for valid inputs', () => {
      expect(dates.unprivilegedWeekdayOfAdvent(1, 1, 2022)).toEqual(date('2022-11-28'));
      expect(dates.unprivilegedWeekdayOfAdvent(2, 2, 2022)).toEqual(date('2022-12-6'));
    });

    it('should handle edge case where date is December 17th or later and not a Sunday', () => {
      expect(dates.unprivilegedWeekdayOfAdvent(6, 3, 2022)).toBeNull();
    });
  });

  describe('privilegedWeekdayOfAdvent', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return null for invalid dayOfMonth values', () => {
      expect(dates.privilegedWeekdayOfAdvent(16)).toBeNull();
      expect(dates.privilegedWeekdayOfAdvent(25)).toBeNull();
    });

    it('should return the correct date for valid inputs', () => {
      expect(dates.privilegedWeekdayOfAdvent(17, 2022)).toEqual(date('2022-12-17'));
      expect(dates.privilegedWeekdayOfAdvent(19, 2023)).toEqual(date('2023-12-19'));
    });

    it('should handle edge case where date is a Sunday', () => {
      expect(dates.privilegedWeekdayOfAdvent(18, 2022)).toBeNull();
    });
  });

  describe('sundayOfAdvent', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return null for invalid weekOfSeason values', () => {
      expect(dates.sundayOfAdvent(0)).toBeNull();
      expect(dates.sundayOfAdvent(5)).toBeNull();
    });

    it('should return the correct date for valid inputs', () => {
      expect(dates.sundayOfAdvent(1, 2022)).toEqual(date('2022-11-27'));
      expect(dates.sundayOfAdvent(2, 2023)).toEqual(date('2023-12-10'));
      expect(dates.sundayOfAdvent(3, 2024)).toEqual(date('2024-12-15'));
      expect(dates.sundayOfAdvent(4, 2025)).toEqual(date('2025-12-21'));
    });
  });

  describe('nativityOfTheLord', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.nativityOfTheLord(2023)).toEqual(date('2023-12-25'));
      expect(dates.nativityOfTheLord(2024)).toEqual(date('2024-12-25'));
    });
  });

  describe('holyFamily', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return December 30th when Christmas is on Sunday', () => {
      expect(dates.holyFamily(2022)).toEqual(date('2022-12-30'));
    });

    it('should return Sunday during Christmas octave when Christmas is not on Sunday', () => {
      expect(dates.holyFamily(2023)).toEqual(date('2023-12-31'));
      expect(dates.holyFamily(2024)).toEqual(date('2024-12-29'));
      expect(dates.holyFamily(2025)).toEqual(date('2025-12-28'));
    });
  });

  describe('weekdayWithinOctaveOfChristmas', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    test('should return null when given day of octave is less than 1', () => {
      expect(dates.weekdayWithinOctaveOfChristmas(0, 2022)).toBeNull();
    });

    test('should return null when given day of octave is greater than 7', () => {
      expect(dates.weekdayWithinOctaveOfChristmas(8, 2022)).toBeNull();
    });

    test('should return correct date for weekday within octave', () => {
      expect(dates.weekdayWithinOctaveOfChristmas(2, 2022)).toEqual(date('2022-12-26'));
      expect(dates.weekdayWithinOctaveOfChristmas(3, 2022)).toEqual(date('2022-12-27'));
      expect(dates.weekdayWithinOctaveOfChristmas(4, 2022)).toEqual(date('2022-12-28'));
      expect(dates.weekdayWithinOctaveOfChristmas(5, 2022)).toEqual(date('2022-12-29'));
      expect(dates.weekdayWithinOctaveOfChristmas(6, 2023)).toEqual(date('2023-12-30'));
      expect(dates.weekdayWithinOctaveOfChristmas(7, 2022)).toEqual(date('2022-12-31'));
    });

    it('should return null for Christmas, which is the 1st day of the octave', () => {
      expect(dates.weekdayWithinOctaveOfChristmas(1, 2022)).toBeNull();
    });

    test('should return null for Holy Family, which the 6th day of the octave in 2022', () => {
      expect(dates.weekdayWithinOctaveOfChristmas(6, 2022)).toBeNull();
    });

    test('should return null for Mary, Mother of God, which the 8th day of the octave', () => {
      expect(dates.weekdayWithinOctaveOfChristmas(8, 2022)).toBeNull();
    });
  });

  describe('maryMotherOfGod', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.maryMotherOfGod(2023)).toEqual(date('2023-01-01'));
      expect(dates.maryMotherOfGod(2024)).toEqual(date('2024-01-01'));
    });
  });

  describe('secondSundayAfterChristmas', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('returns the second Sunday after Christmas for the given year and epiphanyOnSunday set to false', () => {
      expect(dates.secondSundayAfterChristmas(2022, false)).toEqual(date('2022-01-02'));
    });

    it('returns null when Epiphany is always on a Sunday', () => {
      expect(dates.secondSundayAfterChristmas(2023, true)).toBeNull();
    });

    it('returns null when there is no second Sunday after Christmas', () => {
      expect(dates.secondSundayAfterChristmas(2023, false)).toBeNull();
    });
  });

  describe('weekdayBeforeEpiphany', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date if Epiphany is on January 8', () => {
      expect(dates.weekdayBeforeEpiphany(2, 2023, true)).toEqual(date('2023-1-2'));
      expect(dates.weekdayBeforeEpiphany(3, 2023, true)).toEqual(date('2023-1-3'));
      expect(dates.weekdayBeforeEpiphany(4, 2023, true)).toEqual(date('2023-1-4'));
      expect(dates.weekdayBeforeEpiphany(5, 2023, true)).toEqual(date('2023-1-5'));
      expect(dates.weekdayBeforeEpiphany(6, 2023, true)).toEqual(date('2023-1-6'));
      expect(dates.weekdayBeforeEpiphany(7, 2023, true)).toEqual(date('2023-1-7'));
      expect(dates.weekdayBeforeEpiphany(8, 2023, true)).toBeNull();
    });

    it('should return the correct date if Epiphany is on January 6', () => {
      expect(dates.weekdayBeforeEpiphany(2, 2023, false)).toEqual(date('2023-1-2'));
      expect(dates.weekdayBeforeEpiphany(3, 2023, false)).toEqual(date('2023-1-3'));
      expect(dates.weekdayBeforeEpiphany(4, 2023, false)).toEqual(date('2023-1-4'));
      expect(dates.weekdayBeforeEpiphany(5, 2023, false)).toEqual(date('2023-1-5'));
      expect(dates.weekdayBeforeEpiphany(6, 2023, false)).toBeNull();
      expect(dates.weekdayBeforeEpiphany(7, 2023, false)).toBeNull();
      expect(dates.weekdayBeforeEpiphany(8, 2023, false)).toBeNull();
    });

    it('should return null if input is less than 2', () => {
      expect(dates.weekdayBeforeEpiphany(1, 2023, false)).toBeNull();
      expect(dates.weekdayBeforeEpiphany(1, 2023, true)).toBeNull();
    });

    it('should return null if input is greater than 8', () => {
      expect(dates.weekdayBeforeEpiphany(9, 2023, false)).toBeNull();
      expect(dates.weekdayBeforeEpiphany(9, 2023, true)).toBeNull();
    });

    it('should return null if there are no dates between Mary, Mother of God and Epiphany', () => {
      expect(dates.weekdayBeforeEpiphany(2, 2022, true)).toBeNull();
    });
  });

  describe('epiphany', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for Epiphany on Sunday for years 2020-2030', () => {
      expect(dates.epiphany(2020, true)).toEqual(date('2020-1-5'));
      expect(dates.epiphany(2021, true)).toEqual(date('2021-1-3'));
      expect(dates.epiphany(2022, true)).toEqual(date('2022-1-2'));
      expect(dates.epiphany(2023, true)).toEqual(date('2023-1-8'));
      expect(dates.epiphany(2024, true)).toEqual(date('2024-1-7'));
      expect(dates.epiphany(2025, true)).toEqual(date('2025-1-5'));
      expect(dates.epiphany(2026, true)).toEqual(date('2026-1-4'));
      expect(dates.epiphany(2027, true)).toEqual(date('2027-1-3'));
      expect(dates.epiphany(2028, true)).toEqual(date('2028-1-2'));
      expect(dates.epiphany(2029, true)).toEqual(date('2029-1-7'));
      expect(dates.epiphany(2030, true)).toEqual(date('2030-1-6'));
    });

    it('should return the correct date for Epiphany always on January 6', () => {
      expect(dates.epiphany(2023, false)).toEqual(date('2023-1-6'));
      expect(dates.epiphany(2024, false)).toEqual(date('2024-1-6'));
    });
  });

  describe('weekdayAfterEpiphany', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('returns the correct date when Epiphany is on a Sunday', () => {
      // Monday-Saturday after Epiphany
      expect(dates.weekdayAfterEpiphany(1, 2025, true)).toEqual(date('2025-1-6'));
      expect(dates.weekdayAfterEpiphany(2, 2025, true)).toEqual(date('2025-1-7'));
      expect(dates.weekdayAfterEpiphany(3, 2025, true)).toEqual(date('2025-1-8'));
      expect(dates.weekdayAfterEpiphany(4, 2025, true)).toEqual(date('2025-1-9'));
      expect(dates.weekdayAfterEpiphany(5, 2025, true)).toEqual(date('2025-1-10'));
      expect(dates.weekdayAfterEpiphany(6, 2025, true)).toEqual(date('2025-1-11'));
    });

    it('returns the correct date for a given year and day of the week after Epiphany', () => {
      // Monday-Wednesday are not after Epiphany, so it should return null
      expect(dates.weekdayAfterEpiphany(1, 2021, false)).toBeNull();
      expect(dates.weekdayAfterEpiphany(2, 2021, false)).toBeNull();
      expect(dates.weekdayAfterEpiphany(3, 2021, false)).toBeNull();

      // Thursday after Epiphany
      expect(dates.weekdayAfterEpiphany(4, 2021, false)).toEqual(date('2021-1-7'));

      // Friday after Epiphany
      expect(dates.weekdayAfterEpiphany(5, 2021, false)).toEqual(date('2021-1-8'));

      // Saturday after Epiphany
      expect(dates.weekdayAfterEpiphany(6, 2021, false)).toEqual(date('2021-1-9'));
    });

    it('returns null for an invalid day of the week', () => {
      expect(dates.weekdayAfterEpiphany(0)).toBeNull();
      expect(dates.weekdayAfterEpiphany(7)).toBeNull();
      expect(dates.weekdayAfterEpiphany(-1)).toBeNull();
    });

    it('returns null when there are no days between Epiphany and Baptism of the Lord', () => {
      expect(dates.weekdayAfterEpiphany(1, 2023, true)).toBeNull();
      expect(dates.weekdayAfterEpiphany(1, 2024, false)).toBeNull();
    });
  });

  describe('baptismOfTheLord method', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('returns the Sunday after Epiphany when Epiphany is on January 6', () => {
      expect(dates.baptismOfTheLord(2020, false)).toEqual(date('2020-1-12'));
      expect(dates.baptismOfTheLord(2021, false)).toEqual(date('2021-1-10'));
      expect(dates.baptismOfTheLord(2022, false)).toEqual(date('2022-1-9'));
      expect(dates.baptismOfTheLord(2023, false)).toEqual(date('2023-1-8'));
      expect(dates.baptismOfTheLord(2024, false)).toEqual(date('2024-1-7'));
      expect(dates.baptismOfTheLord(2025, false)).toEqual(date('2025-1-12'));
      expect(dates.baptismOfTheLord(2026, false)).toEqual(date('2026-1-11'));
      expect(dates.baptismOfTheLord(2027, false)).toEqual(date('2027-1-10'));
      expect(dates.baptismOfTheLord(2028, false)).toEqual(date('2028-1-9'));
      expect(dates.baptismOfTheLord(2029, false)).toEqual(date('2029-1-7'));
      expect(dates.baptismOfTheLord(2030, false)).toEqual(date('2030-1-13'));
    });

    it('returns the Sunday after Epiphany when Epiphany is on Sunday', () => {
      expect(dates.baptismOfTheLord(2020, true)).toEqual(date('2020-1-12'));
      expect(dates.baptismOfTheLord(2021, true)).toEqual(date('2021-1-10'));
      expect(dates.baptismOfTheLord(2022, true)).toEqual(date('2022-1-9'));
      expect(dates.baptismOfTheLord(2025, true)).toEqual(date('2025-1-12'));
      expect(dates.baptismOfTheLord(2026, true)).toEqual(date('2026-1-11'));
      expect(dates.baptismOfTheLord(2027, true)).toEqual(date('2027-1-10'));
      expect(dates.baptismOfTheLord(2028, true)).toEqual(date('2028-1-9'));
      expect(dates.baptismOfTheLord(2030, true)).toEqual(date('2030-1-13'));
    });

    it('returns the Monday after Epiphany when Epiphany is either Sunday January 7 or 8', () => {
      expect(dates.baptismOfTheLord(2023, true)).toEqual(date('2023-1-9'));
      expect(dates.baptismOfTheLord(2024, true)).toEqual(date('2024-1-8'));
      expect(dates.baptismOfTheLord(2029, true)).toEqual(date('2029-1-8'));
    });
  });

  describe('ashWednesday', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.ashWednesday(2023)).toEqual(date('2023-02-22'));
      expect(dates.ashWednesday(2024)).toEqual(date('2024-02-14'));
    });
  });

  describe('palmSunday', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.palmSunday(2023)).toEqual(date('2023-04-02'));
      expect(dates.palmSunday(2024)).toEqual(date('2024-03-24'));
    });
  });

  describe('holyThursday', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.holyThursday(2023)).toEqual(date('2023-04-06'));
      expect(dates.holyThursday(2024)).toEqual(date('2024-03-28'));
    });
  });

  describe('goodFriday', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.goodFriday(2023)).toEqual(date('2023-04-07'));
      expect(dates.goodFriday(2024)).toEqual(date('2024-03-29'));
    });
  });

  describe('holySaturday', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.holySaturday(2023)).toEqual(date('2023-04-08'));
      expect(dates.holySaturday(2024)).toEqual(date('2024-03-30'));
    });
  });

  describe('easterSunday', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.easterSunday(2020)).toEqual(date('2020-04-12'));
      expect(dates.easterSunday(2021)).toEqual(date('2021-04-04'));
      expect(dates.easterSunday(2022)).toEqual(date('2022-04-17'));
      expect(dates.easterSunday(2023)).toEqual(date('2023-04-09'));
      expect(dates.easterSunday(2024)).toEqual(date('2024-03-31'));
      expect(dates.easterSunday(2025)).toEqual(date('2025-04-20'));
      expect(dates.easterSunday(2026)).toEqual(date('2026-04-05'));
      expect(dates.easterSunday(2027)).toEqual(date('2027-03-28'));
      expect(dates.easterSunday(2028)).toEqual(date('2028-04-16'));
      expect(dates.easterSunday(2029)).toEqual(date('2029-04-01'));
      expect(dates.easterSunday(2030)).toEqual(date('2030-04-21'));
      expect(dates.easterSunday(2031)).toEqual(date('2031-04-13'));
      expect(dates.easterSunday(2032)).toEqual(date('2032-03-28'));
      expect(dates.easterSunday(2033)).toEqual(date('2033-04-17'));
      expect(dates.easterSunday(2034)).toEqual(date('2034-04-09'));
      expect(dates.easterSunday(2035)).toEqual(date('2035-03-25'));
      expect(dates.easterSunday(2036)).toEqual(date('2036-04-13'));
      expect(dates.easterSunday(2037)).toEqual(date('2037-04-05'));
      expect(dates.easterSunday(2038)).toEqual(date('2038-04-25'));
      expect(dates.easterSunday(2039)).toEqual(date('2039-04-10'));
      expect(dates.easterSunday(2040)).toEqual(date('2040-04-01'));
    });
  });

  describe('weekdayOrSundayOfEasterTime', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    test('returns null when weekOfSeason is less than 1 or greater than 7', () => {
      expect(dates.weekdayOrSundayOfEasterTime(0, 0)).toBeNull();
      expect(dates.weekdayOrSundayOfEasterTime(0, 8)).toBeNull();
    });

    test('returns null when dayOfWeek is less than 0 or greater than 6', () => {
      expect(dates.weekdayOrSundayOfEasterTime(-1, 1)).toBeNull();
      expect(dates.weekdayOrSundayOfEasterTime(7, 1)).toBeNull();
    });

    test('returns correct dates in Easter time', () => {
      expect(dates.weekdayOrSundayOfEasterTime(1, 1, 2022)).toEqual(date('2022-04-18'));
      expect(dates.weekdayOrSundayOfEasterTime(3, 2, 2022)).toEqual(date('2022-04-27'));
      expect(dates.weekdayOrSundayOfEasterTime(4, 6, 2022, true)).toEqual(date('2022-05-26'));
      expect(dates.weekdayOrSundayOfEasterTime(0, 7, 2022, false)).toEqual(date('2022-05-29'));
      expect(dates.weekdayOrSundayOfEasterTime(6, 7, 2022)).toEqual(date('2022-06-04'));
    });

    test('returns null for Easter Sunday', () => {
      expect(dates.weekdayOrSundayOfEasterTime(0, 1, 2022)).toBeNull();
    });

    test('returns null for Ascension day', () => {
      expect(dates.weekdayOrSundayOfEasterTime(4, 6, 2022, false)).toBeNull();
      expect(dates.weekdayOrSundayOfEasterTime(0, 7, 2022, true)).toBeNull();
    });
  });

  describe('ascension', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    test('returns correct date for Ascension on Thursday', () => {
      expect(dates.ascension(2023, false)).toEqual(date('2023-05-18'));
      expect(dates.ascension(2024, false)).toEqual(date('2024-05-09'));
    });

    test('returns correct date for Ascension on Sunday', () => {
      expect(dates.ascension(2023, true)).toEqual(date('2023-05-21'));
      expect(dates.ascension(2024, true)).toEqual(date('2024-05-12'));
    });
  });

  describe('pentecostSunday', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.pentecostSunday(2023)).toEqual(date('2023-05-28'));
      expect(dates.pentecostSunday(2024)).toEqual(date('2024-05-19'));
    });
  });

  describe('weekdayOrSundayOfOrdinaryTime', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('returns null when given an invalid day of week, or an invalid week of season', () => {
      expect(dates.weekdayOrSundayOfOrdinaryTime(0, 0, 2023)).toBeNull();
      expect(dates.weekdayOrSundayOfOrdinaryTime(2, 0, 2023)).toBeNull();
      expect(dates.weekdayOrSundayOfOrdinaryTime(-1, 2, 2023)).toBeNull();
      expect(dates.weekdayOrSundayOfOrdinaryTime(8, 2, 2023)).toBeNull();
      expect(dates.weekdayOrSundayOfOrdinaryTime(0, 35, 2023)).toBeNull();
    });

    it('returns null for the first Sunday of Ordinary Time, which does not exist', () => {
      expect(dates.weekdayOrSundayOfOrdinaryTime(0, 1, 2023)).toBeNull();
    });

    it('returns null when date is Trinity Sunday, Corpus Christi, Most Sacred Heart of Jesus, or Christ the King Sunday', () => {
      expect(dates.weekdayOrSundayOfOrdinaryTime(0, 9, 2023)).toBeNull(); // Trinity Sunday
      expect(dates.weekdayOrSundayOfOrdinaryTime(4, 9, 2023, false, false)).toBeNull(); // Corpus Christi (on Thursday)
      expect(dates.weekdayOrSundayOfOrdinaryTime(0, 10, 2023, false, true)).toBeNull(); // Corpus Christi (on Sunday)
      expect(dates.weekdayOrSundayOfOrdinaryTime(5, 10, 2023)).toBeNull(); // Most Sacred Heart of Jesus
      expect(dates.weekdayOrSundayOfOrdinaryTime(0, 34, 2023)).toBeNull(); // Christ the King Sunday
    });

    it('returns a Date when given a valid day of week and week of season', () => {
      expect(dates.weekdayOrSundayOfOrdinaryTime(0, 2, 2023)).toBeInstanceOf(Date);
    });

    it('returns the correct date for the given day of week and week of season', () => {
      expect(dates.weekdayOrSundayOfOrdinaryTime(0, 2, 2023)).toEqual(date('2023-01-15'));
      expect(dates.weekdayOrSundayOfOrdinaryTime(6, 26, 2023)).toEqual(date('2023-10-07'));
    });

    it('return the correct first dates of Ordinary Time when the Baptism of the Lord is on a Sunday', () => {
      expect(dates.weekdayOrSundayOfOrdinaryTime(1, 1, 2023, false)).toEqual(date('2023-01-09'));
      expect(dates.weekdayOrSundayOfOrdinaryTime(2, 1, 2023, false)).toEqual(date('2023-01-10'));
      expect(dates.weekdayOrSundayOfOrdinaryTime(3, 1, 2023, false)).toEqual(date('2023-01-11'));
      expect(dates.weekdayOrSundayOfOrdinaryTime(4, 1, 2023, false)).toEqual(date('2023-01-12'));
      expect(dates.weekdayOrSundayOfOrdinaryTime(5, 1, 2023, false)).toEqual(date('2023-01-13'));
      expect(dates.weekdayOrSundayOfOrdinaryTime(6, 1, 2023, false)).toEqual(date('2023-01-14'));
      expect(dates.weekdayOrSundayOfOrdinaryTime(0, 2, 2023, false)).toEqual(date('2023-01-15'));
      expect(dates.weekdayOrSundayOfOrdinaryTime(1, 2, 2023, false)).toEqual(date('2023-01-16'));
      expect(dates.weekdayOrSundayOfOrdinaryTime(2, 2, 2023, false)).toEqual(date('2023-01-17'));
    });

    it('return the correct first dates of Ordinary Time when the Baptism of the Lord is on a Monday', () => {
      expect(dates.weekdayOrSundayOfOrdinaryTime(1, 1, 2023, true)).toBeNull();
      expect(dates.weekdayOrSundayOfOrdinaryTime(2, 1, 2023, true)).toEqual(date('2023-01-10'));
      expect(dates.weekdayOrSundayOfOrdinaryTime(3, 1, 2023, true)).toEqual(date('2023-01-11'));
      expect(dates.weekdayOrSundayOfOrdinaryTime(4, 1, 2023, true)).toEqual(date('2023-01-12'));
      expect(dates.weekdayOrSundayOfOrdinaryTime(5, 1, 2023, true)).toEqual(date('2023-01-13'));
      expect(dates.weekdayOrSundayOfOrdinaryTime(6, 1, 2023, true)).toEqual(date('2023-01-14'));
      expect(dates.weekdayOrSundayOfOrdinaryTime(0, 2, 2023, true)).toEqual(date('2023-01-15'));
      expect(dates.weekdayOrSundayOfOrdinaryTime(1, 2, 2023, true)).toEqual(date('2023-01-16'));
      expect(dates.weekdayOrSundayOfOrdinaryTime(2, 2, 2023, true)).toEqual(date('2023-01-17'));
    });
  });

  describe('trinitySunday', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.trinitySunday(2023)).toEqual(date('2023-06-04'));
      expect(dates.trinitySunday(2024)).toEqual(date('2024-05-26'));
    });
  });

  describe('corpusChristi', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    test('returns correct date for Corpus Christi on Thursday', () => {
      expect(dates.corpusChristi(2023, false)).toEqual(date('2023-06-08'));
      expect(dates.corpusChristi(2024, false)).toEqual(date('2024-05-30'));
    });

    test('returns correct date for Corpus Christi on Sunday', () => {
      expect(dates.corpusChristi(2023, true)).toEqual(date('2023-06-11'));
      expect(dates.corpusChristi(2024, true)).toEqual(date('2024-06-02'));
    });
  });

  describe('mostSacredHeartOfJesus', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.mostSacredHeartOfJesus(2023)).toEqual(date('2023-06-16'));
      expect(dates.mostSacredHeartOfJesus(2024)).toEqual(date('2024-06-07'));
    });
  });

  describe('christTheKingSunday', () => {
    beforeAll(() => {
      dates = new ProperOfTimeDates();
    });

    it('should return the correct date for a valid year', () => {
      expect(dates.christTheKingSunday(2023)).toEqual(date('2023-11-26'));
      expect(dates.christTheKingSunday(2024)).toEqual(date('2024-11-24'));
    });
  });
});
