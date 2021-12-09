import { France_Fr } from 'romcal/dist/bundles/france';
import { UnitedStates_En } from 'romcal/dist/bundles/united-states';
import Romcal from '../lib';

const {
  addDays,
  getWeekNumber,
  rangeContainsDate,
  rangeOfDays,
  startOfWeek,
  getUtcDate,
  getUtcDateFromString,
  isSameDate,
  subtractsDays,
} = Romcal;

describe('Testing specific liturgical date functions', () => {
  describe('In Christian calendars, Sunday is the first day of the week', () => {
    test('The Solemnity of Epiphany is a Sunday when using the calendar of France', async () => {
      const date1 = new Romcal({ localizedCalendar: France_Fr }).dates().epiphany(1969);
      expect(date1.getDay()).toEqual(0);
    });
    test('The Solemnity of Epiphany is a Sunday when using the calendar of UnitedStates', async () => {
      const date2 = new Romcal({ localizedCalendar: UnitedStates_En }).dates().epiphany(1969);
      expect(date2.getDay()).toEqual(0);
    });
  });

  describe('Ash Wednesday occurs on 46 days before Easter Sunday', () => {
    test('In 1969, Ash Wednesday was on February 19', () => {
      const date = new Romcal().dates().ashWednesday(1969);
      expect(date.getMonth()).toEqual(1);
      expect(date.getDate()).toEqual(19);
    });

    test('In 2008, Ash Wednesday was on February 6', () => {
      const date = new Romcal().dates().ashWednesday(2008);
      expect(date.getMonth()).toEqual(1);
      expect(date.getDate()).toEqual(6);
    });

    test('In 2050, Ash Wednesday will be on February 23', () => {
      const date = new Romcal().dates().ashWednesday(2050);
      expect(date.getMonth()).toEqual(1);
      expect(date.getDate()).toEqual(23);
    });

    test('Its earliest occurring date is Feb 4 and latest occurring date is March 17 and its always on Wednesday', () => {
      for (let i = 1800, il = 2015; i <= il; i++) {
        expect(new Romcal().dates().ashWednesday(i).getMonth()).toBeOneOf([1, 2]);
        expect(new Romcal().dates().ashWednesday(i).getDay()).toEqual(3);
      }
    });
  });

  describe('Palm Sunday occurs on the Sunday before Easter Sunday', () => {
    test('In 1969, Palm Sunday was on March 30', () => {
      const date = new Romcal().dates().palmSunday(1969);
      expect(date.getMonth()).toEqual(2);
      expect(date.getDate()).toEqual(30);
    });

    test('In 2008, Palm Sunday was on March 16', () => {
      const date = new Romcal().dates().palmSunday(2008);
      expect(date.getMonth()).toEqual(2);
      expect(date.getDate()).toEqual(16);
    });

    test('In 2050, Palm Sunday will be on April 3', () => {
      const date = new Romcal().dates().palmSunday(2050);
      expect(date.getMonth()).toEqual(3);
      expect(date.getDate()).toEqual(3);
    });

    test('Its earliest occurring date is March 15 and latest occurring date is April 18', () => {
      for (let i = 1850, il = 2015; i <= il; i++) {
        expect(new Romcal().dates().palmSunday(i).getMonth()).toBeOneOf([2, 3]);
      }
    });
  });

  describe('Holy Thursday occurs on the Thursday before Easter Sunday', () => {
    test('In 1969, Holy Thursday was on April 3', () => {
      const date = new Romcal().dates().holyThursday(1969);
      expect(date.getMonth()).toEqual(3);
      expect(date.getDate()).toEqual(3);
    });

    test('In 2008, Holy Thursday was on March 20', () => {
      const date = new Romcal().dates().holyThursday(2008);
      expect(date.getMonth()).toEqual(2);
      expect(date.getDate()).toEqual(20);
    });

    test('In 2050, Holy Thursday will be on April 7', () => {
      const date = new Romcal().dates().holyThursday(2050);
      expect(date.getMonth()).toEqual(3);
      expect(date.getDate()).toEqual(7);
    });
  });

  describe('Good Friday occurs on the Friday before Easter Sunday', () => {
    test('In 1969, Good Friday was on April 4', () => {
      const date = new Romcal().dates().goodFriday(1969);
      expect(date.getMonth()).toEqual(3);
      expect(date.getDate()).toEqual(4);
    });

    test('In 2008, Good Friday was on March 21', () => {
      const date = new Romcal().dates().goodFriday(2008);
      expect(date.getMonth()).toEqual(2);
      expect(date.getDate()).toEqual(21);
    });

    test('In 2050, Good Friday will be on April 8', () => {
      const date = new Romcal().dates().goodFriday(2050);
      expect(date.getMonth()).toEqual(3);
      expect(date.getDate()).toEqual(8);
    });
  });

  describe('Holy Saturday is the day before Easter', () => {
    test('In 1969, Holy Saturday was on April 5', () => {
      const date = new Romcal().dates().holySaturday(1969);
      expect(date.getMonth()).toEqual(3);
      expect(date.getDate()).toEqual(5);
    });

    test('In 2008, Holy Saturday was on March 22', () => {
      const date = new Romcal().dates().holySaturday(2008);
      expect(date.getMonth()).toEqual(2);
      expect(date.getDate()).toEqual(22);
    });

    test('In 2050, Holy Saturday will be on April 9', () => {
      const date = new Romcal().dates().holySaturday(2050);
      expect(date.getMonth()).toEqual(3);
      expect(date.getDate()).toEqual(9);
    });
  });

  describe('Holy Week + Easter Triduum is from Palm Sunday to Holy Saturday', () => {
    test('The first day of Holy Week should start on Palm Sunday', () => {
      for (let i = 1950, il = 2100; i <= il; i++) {
        const [fistDayOfHolyWeek] = new Romcal().dates().allDatesOfHolyWeek(i);
        const palmSunday = new Romcal().dates().palmSunday(i);
        expect(isSameDate(fistDayOfHolyWeek, palmSunday)).toEqual(true);
      }
    });

    test('The last day of Holy Week should be on Holy Saturday', () => {
      for (let i = 1950, il = 2050; i <= il; i++) {
        const [lastDayOfHolyWeek] = new Romcal().dates().allDatesOfHolyWeek(i).reverse();
        const holySaturday = new Romcal().dates().holySaturday(i);
        expect(isSameDate(lastDayOfHolyWeek, holySaturday)).toEqual(true);
      }
    });
  });

  describe('Easter calculation based on an algorithm from The Explanatory Supplement to the Astronomical Almanac', () => {
    test('In 1969, Easter Sunday was on April 6', () => {
      const date = new Romcal().dates().easterSunday(1969);
      expect(date.getMonth()).toEqual(3);
      expect(date.getDate()).toEqual(6);
    });

    test('In 2008, Easter Sunday was on March 23', () => {
      const date = new Romcal().dates().easterSunday(2008);
      expect(date.getMonth()).toEqual(2);
      expect(date.getDate()).toEqual(23);
    });

    test('In 2050, Easter Sunday will be on April 10', () => {
      const date = new Romcal().dates().easterSunday(2050);
      expect(date.getMonth()).toEqual(3);
      expect(date.getDate()).toEqual(10);
    });

    test('Its earliest occurring date is March 22 and latest occurring date is April 25', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        const range = rangeOfDays(getUtcDate(i, 3, 22), getUtcDate(i, 4, 25));
        const easter = new Romcal().dates().easterSunday(i);
        expect(rangeContainsDate(range, easter)).toBeTrue();
      }
    });
  });

  describe('Divine Mercy Sunday (Low Sunday or the Sunday after Easter)', () => {
    test('In 1969, Divine Mercy Sunday was on April 13', () => {
      const date = new Romcal().dates().divineMercySunday(1969);
      expect(date.getMonth()).toEqual(3);
      expect(date.getDate()).toEqual(13);
    });

    test('In 2008, Divine Mercy Sunday was on March 30', () => {
      const date = new Romcal().dates().divineMercySunday(2008);
      expect(date.getMonth()).toEqual(2);
      expect(date.getDate()).toEqual(30);
    });

    test('In 2050, Divine Mercy Sunday will be on April 17', () => {
      const date = new Romcal().dates().divineMercySunday(2050);
      expect(date.getMonth()).toEqual(3);
      expect(date.getDate()).toEqual(17);
    });
  });

  describe('Ascension of our Lord', () => {
    describe('If it is celebrated on Thursday (39 days after Easter)', () => {
      test('In 1969, Ascension was on May 15', () => {
        const date = new Romcal().dates().ascension(1969);
        expect(date.getMonth()).toEqual(4);
        expect(date.getDate()).toEqual(15);
      });

      test('In 2008, Ascension was on May 1', () => {
        const date = new Romcal().dates().ascension(2008);
        expect(date.getMonth()).toEqual(4);
        expect(date.getDate()).toEqual(1);
      });

      test('In 2050, Ascension will be on May 19', () => {
        const date = new Romcal().dates().ascension(2050);
        expect(date.getMonth()).toEqual(4);
        expect(date.getDate()).toEqual(19);
      });

      test('It can occur anytime between April 30 and June 3 (inclusive)', () => {
        for (let i = 1900, il = 2100; i <= il; i++) {
          const range = rangeOfDays(getUtcDate(i, 4, 30), getUtcDate(i, 6, 3));
          const ascension = new Romcal().dates().ascension(i);
          expect(rangeContainsDate(range, ascension)).toBeTrue();
        }
      });
    });

    describe('The Nativity of John the Baptist', () => {
      test('Occurs every year on June 24', () => {
        for (let i = 1900, il = 2100; i <= il; i++) {
          expect(new Romcal().dates().nativityOfJohnTheBaptist(i).getDate()).toEqual(24);
          expect(new Romcal().dates().nativityOfJohnTheBaptist(i).getMonth()).toEqual(5);
        }
      });
    });

    describe('The feast of Peter and Paul, Apostles', () => {
      test('Occurs every year on June 29', () => {
        for (let i = 1900, il = 2100; i <= il; i++) {
          expect(new Romcal().dates().peterAndPaulApostles(i).getDate()).toEqual(29);
          expect(new Romcal().dates().peterAndPaulApostles(i).getMonth()).toEqual(5);
        }
      });
    });

    describe('The feast of the Assumption', () => {
      test('Occurs every year on August 15', () => {
        for (let i = 1900, il = 2100; i <= il; i++) {
          expect(new Romcal().dates().assumption(i).getDate()).toEqual(15);
          expect(new Romcal().dates().assumption(i).getMonth()).toEqual(7);
        }
      });
    });

    describe('The feast of the All Saints', () => {
      test('Occurs every year on November 1', () => {
        for (let i = 1900, il = 2100; i <= il; i++) {
          expect(new Romcal().dates().allSaints(i).getDate()).toEqual(1);
          expect(new Romcal().dates().allSaints(i).getMonth()).toEqual(10);
        }
      });
    });

    describe('If it is celebrated on Sunday (42 days after Easter)', () => {
      test('In 1969, Ascension was on May 18', () => {
        const date = new Romcal().dates().ascension(1969, true);
        expect(date.getMonth()).toEqual(4);
        expect(date.getDate()).toEqual(18);
      });

      test('In 2008, Ascension was on May 4', () => {
        const date = new Romcal().dates().ascension(2008, true);
        expect(date.getMonth()).toEqual(4);
        expect(date.getDate()).toEqual(4);
      });

      test('In 2050, Ascension will be on May 22', () => {
        const date = new Romcal().dates().ascension(2050, true);
        expect(date.getMonth()).toEqual(4);
        expect(date.getDate()).toEqual(22);
      });

      test('It can occur anytime between May 3 and June 6 (inclusive)', () => {
        for (let i = 1900, il = 2100; i <= il; i++) {
          const range = rangeOfDays(getUtcDate(i, 5, 3), getUtcDate(i, 6, 6));
          const ascension = new Romcal().dates().ascension(i, true);
          expect(rangeContainsDate(range, ascension)).toBeTrue();
        }
      });
    });
  });

  describe('Pentecost Sunday occurs 49 days after Easter', () => {
    test('In 1969, Pentecost Sunday was on May 25', () => {
      const date = new Romcal().dates().pentecostSunday(1969);
      expect(date.getMonth()).toEqual(4);
      expect(date.getDate()).toEqual(25);
    });

    test('In 2008, Pentecost Sunday was on May 11', () => {
      const date = new Romcal().dates().pentecostSunday(2008);
      expect(date.getMonth()).toEqual(4);
      expect(date.getDate()).toEqual(11);
    });

    test('In 2050, Pentecost Sunday will be on May 29', () => {
      const date = new Romcal().dates().pentecostSunday(2050);
      expect(date.getMonth()).toEqual(4);
      expect(date.getDate()).toEqual(29);
    });

    test('It can occur anytime between May 10 and June 13 (inclusive)', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        const range = rangeOfDays(getUtcDate(i, 5, 10), getUtcDate(i, 6, 13));
        const pentecostSunday = new Romcal().dates().pentecostSunday(i);
        expect(rangeContainsDate(range, pentecostSunday)).toBeTrue();
      }
    });
  });

  describe('Trinity Sunday occurs 56 days after Easter', () => {
    test('In 1969, Trinity Sunday was on June 1', () => {
      const date = new Romcal().dates().trinitySunday(1969);
      expect(date.getMonth()).toEqual(5);
      expect(date.getDate()).toEqual(1);
    });

    test('In 2008, Trinity Sunday was on May 18', () => {
      const date = new Romcal().dates().trinitySunday(2008);
      expect(date.getMonth()).toEqual(4);
      expect(date.getDate()).toEqual(18);
    });

    test('In 2050, Trinity Sunday will be on June 5', () => {
      const date = new Romcal().dates().trinitySunday(2050);
      expect(date.getMonth()).toEqual(5);
      expect(date.getDate()).toEqual(5);
    });

    test('It can occur anytime between May 17 and June 20 (inclusive)', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        const range = rangeOfDays(getUtcDate(i, 5, 17), getUtcDate(i, 6, 20));
        const trinitySunday = new Romcal().dates().trinitySunday(i);
        expect(rangeContainsDate(range, trinitySunday)).toBeTrue();
      }
    });
  });

  describe('Corpus Christi', () => {
    describe('If it is celebrated on Sunday (63 days after Easter)', () => {
      test('In 1969, Corpus Christi was on June 8', () => {
        const date = new Romcal().dates().corpusChristi(1969);
        expect(date.getMonth()).toEqual(5);
        expect(date.getDate()).toEqual(8);
      });

      test('In 2008, Corpus Christi was on May 25', () => {
        const date = new Romcal().dates().corpusChristi(2008);
        expect(date.getMonth()).toEqual(4);
        expect(date.getDate()).toEqual(25);
      });

      test('In 2050, Corpus Christi will be on June 12', () => {
        const date = new Romcal().dates().corpusChristi(2050);
        expect(date.getMonth()).toEqual(5);
        expect(date.getDate()).toEqual(12);
      });

      test('It can occur anytime between May 24 and June 27 (inclusive)', () => {
        for (let i = 1900, il = 2100; i <= il; i++) {
          const range = rangeOfDays(getUtcDate(i, 5, 24), getUtcDate(i, 6, 27));
          const corpusChristi = new Romcal().dates().corpusChristi(i);
          expect(rangeContainsDate(range, corpusChristi)).toBeTrue();
        }
      });
    });

    describe('If it is celebrated on Thursday (60 days after Easter) [Second argument is false]', () => {
      test('In 1969, Corpus Christi was on June 5', () => {
        const date = new Romcal().dates().corpusChristi(1969, false);
        expect(date.getMonth()).toEqual(5);
        expect(date.getDate()).toEqual(5);
      });

      test('In 2008, Corpus Christi was on May 22', () => {
        const date = new Romcal().dates().corpusChristi(2008, false);
        expect(date.getMonth()).toEqual(4);
        expect(date.getDate()).toEqual(22);
      });

      test('In 2050, Corpus Christi will be on June 9', () => {
        const date = new Romcal().dates().corpusChristi(2050, false);
        expect(date.getMonth()).toEqual(5);
        expect(date.getDate()).toEqual(9);
      });

      test('It can occur anytime between May 21 and June 24 (inclusive)', () => {
        for (let i = 1900, il = 2100; i <= il; i++) {
          const range = rangeOfDays(getUtcDate(i, 5, 21), getUtcDate(i, 6, 24));
          const corpusChristi = new Romcal().dates().corpusChristi(i, false);
          expect(rangeContainsDate(range, corpusChristi)).toBeTrue();
        }
      });
    });
  });

  describe('Sacred Heart of Jesus occurs on 68 days after Easter', () => {
    test('In 1969, Sacred Heart of Jesus was on Thursday, June 13', () => {
      const date = new Romcal().dates().mostSacredHeartOfJesus(1969);
      expect(date.getMonth()).toEqual(5);
      expect(date.getDate()).toEqual(13);
    });

    test('In 2008, Sacred Heart of Jesus was on May 30', () => {
      const date = new Romcal().dates().mostSacredHeartOfJesus(2008);
      expect(date.getMonth()).toEqual(4);
      expect(date.getDate()).toEqual(30);
    });

    test('In 2050, Sacred Heart of Jesus will be on June 17', () => {
      const date = new Romcal().dates().mostSacredHeartOfJesus(2050);
      expect(date.getMonth()).toEqual(5);
      expect(date.getDate()).toEqual(17);
    });

    test('It can occur anytime between May 29 and Jul 2 (inclusive)', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        const range = rangeOfDays(getUtcDate(i, 5, 29), getUtcDate(i, 7, 2));
        const mostSacredHeartOfJesus = new Romcal().dates().mostSacredHeartOfJesus(i);
        expect(rangeContainsDate(range, mostSacredHeartOfJesus)).toBeTrue();
      }
    });
  });

  describe('Immaculate Heart of Mary occurs on 69 days after Easter', () => {
    test('In 1969, Sacred Heart of Jesus was on Thursday, June 14', () => {
      const date = new Romcal().dates().immaculateHeartOfMary(1969);
      expect(date.getMonth()).toEqual(5);
      expect(date.getDate()).toEqual(14);
    });

    test('In 2008, Sacred Heart of Jesus was on May 31', () => {
      const date = new Romcal().dates().immaculateHeartOfMary(2008);
      expect(date.getMonth()).toEqual(4);
      expect(date.getDate()).toEqual(31);
    });

    test('In 2050, Sacred Heart of Jesus will be on June 18', () => {
      const date = new Romcal().dates().immaculateHeartOfMary(2050);
      expect(date.getMonth()).toEqual(5);
      expect(date.getDate()).toEqual(18);
    });

    test('It can occur anytime between May 30 and Jul 3 (inclusive)', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        const range = rangeOfDays(getUtcDate(i, 5, 30), getUtcDate(i, 7, 3));
        const immaculateHeartOfMary = new Romcal().dates().immaculateHeartOfMary(i);
        expect(rangeContainsDate(range, immaculateHeartOfMary)).toBeTrue();
      }
    });

    test('When it occurs on the same day as another memorial, both memorials are output', async () => {
      const romcal = new Romcal();
      const keys = (await romcal.generateCalendar(2015))['2015-06-13'].map((d) => d.key);
      expect(JSON.stringify(keys)).toEqual(JSON.stringify(['immaculate_heart_of_mary', 'anthony_of_padua_priest']));
    });

    test('When it occurs on a weekday, only one item is output for this day', async () => {
      const romcal = new Romcal();
      const keys = (await romcal.generateCalendar(2022))['2022-06-25'].map((d) => d.key);
      expect(JSON.stringify(keys)).toEqual(JSON.stringify(['immaculate_heart_of_mary']));
    });
  });

  describe('Christ the King is always the 34th (and last) Sunday of Ordinary Time and is the week before the First Sunday of Advent', () => {
    test('It can occur anytime between Nov 20 and Nov 26 (inclusive)', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        const range = rangeOfDays(getUtcDate(i, 11, 20), getUtcDate(i, 11, 26));
        const christTheKingSunday = new Romcal().dates().christTheKingSunday(i);
        expect(rangeContainsDate(range, christTheKingSunday)).toBeTrue();
      }
    });
  });

  describe('Christmas day is celebrated on the 25th of December', () => {
    test('Always falls on the 25th of December every year', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        expect(new Romcal().dates().christmas(i).getDate()).toEqual(25);
        expect(new Romcal().dates().christmas(i).getMonth()).toEqual(11);
      }
    });
  });

  describe('Feast of the Holy Family', () => {
    // Christmas in 2011 was on Sunday
    test('occurs on December 30th if Christmas falls on a Sunday', () => {
      const date = new Romcal().dates().holyFamily(2011);
      expect(date.getMonth()).toEqual(11);
      expect(date.getDate()).toEqual(30);
    });

    // Christmas in 2010 was on a Saturday
    test('occurs on the Sunday after Christmas (26th December) if Christmas falls on a Saturday', () => {
      const date = new Romcal().dates().holyFamily(2010);
      expect(date.getMonth()).toEqual(11);
      expect(date.getDate()).toEqual(26);
    });

    // Christmas in 2009 was on a Friday
    test('In 2009, Holy Family occurs on the Sunday after Christmas (27th Dec) when Christmas wes on a Friday', () => {
      const date = new Romcal().dates().holyFamily(2009);
      expect(date.getMonth()).toEqual(11);
      expect(date.getDate()).toEqual(27);
    });

    // Christmas in 2008 was on a Thursday
    test('In 2008, Holy Family occurs on the Sunday after Christmas (28th Dec) when Christmas wes on a Thursday', () => {
      const date = new Romcal().dates().holyFamily(2008);
      expect(date.getMonth()).toEqual(11);
      expect(date.getDate()).toEqual(28);
    });
  });

  describe('Epiphany', () => {
    describe('If Epiphany is always celebrated on Jan 6', () => {
      test('Epiphany in 2001 will be on a Saturday', () => {
        expect(new Romcal().dates().epiphany(2001, false).getDay()).toEqual(6);
      });

      test('Epiphany in 2002 will be on a Sunday', () => {
        expect(new Romcal().dates().epiphany(2002, false).getDay()).toEqual(0);
      });

      test('Epiphany in 2003 will be on a Monday', () => {
        expect(new Romcal().dates().epiphany(2003, false).getDay()).toEqual(1);
      });
    });

    describe('If Epiphany is not celebrated on Jan 6, Epiphany is celebrated on the 1st Sunday after the 1st Saturday in January', () => {
      test('If first day of the year 2011 is a Saturday, Mary Mother of God is on that day and Epiphany is on the next day', () => {
        // If first day of 2011, 2022 was/is a Saturday
        const first = getUtcDate(2011, 1, 1);
        const target = startOfWeek(getUtcDate(2011, 1, 8));
        const date = new Romcal().dates().epiphany(2011);

        expect(first.getDay()).toEqual(6); // First day of the year should be a Saturday
        expect(isSameDate(first, new Romcal().dates().maryMotherOfGod(2011))).toEqual(true); // First day of the year is Mary, Mother of God
        expect(target.getDate()).toEqual(2); // Epiphany should be the 2nd day of the year ( Sunday )
        expect(target.getDay()).toEqual(0); // Epiphany should be a Sunday
        expect(isSameDate(date, target)).toEqual(true);
      });

      test('If first day of the year 2012 is a Sunday, Mary Mother of God is on that Sunday and the Sunday proceeding will be Epiphany', () => {
        // First day of 2012, 2017 was a Sunday
        const first = getUtcDate(2012, 1, 1);
        const target = startOfWeek(getUtcDate(2012, 1, 8));
        const date = new Romcal().dates().epiphany(2012);

        expect(first.getDay()).toEqual(0); // First day of the year should be a Sunday
        expect(isSameDate(first, new Romcal().dates().maryMotherOfGod(2012))).toEqual(true); // First day of the year is Mary, Mother of God
        expect(target.getDate()).toEqual(8); // Epiphany should be the 8th day of the year
        expect(getWeekNumber(target)).toEqual(2); // Epiphany should be the 2nd Sunday day of the year
        expect(target.getDay()).toEqual(0); // Epiphany should be a Sunday
        expect(isSameDate(date, target)).toEqual(true);
      });

      test('If first day of the year 2011 is on a weekday (Sat) (i.e. Mon - Sat), Epiphany will be celebrated on the Sunday proceeding', () => {
        // First day of 2014 was a Wed, First day of 2015 was a Thurs
        const first = getUtcDate(2011, 1, 1);
        const target = getUtcDate(2011, 1, 2);
        const date = new Romcal().dates().epiphany(2011);
        expect(first.getDay()).toBeOneOf([1, 2, 3, 4, 5, 6]); // First day of the year should be a weekday
        expect(target.getDate()).toEqual(2); // Epiphany should be the 4th day of the year
        expect(target.getDay()).toEqual(0); // Epiphany should be a Sunday
        expect(isSameDate(date, target)).toEqual(true);
      });

      test('Its earliest occurring date is Jan 2 and latest occurring date is Jan 8', () => {
        expect(new Romcal().dates().epiphany(1999).getDate()).toBeOneOf([2, 3, 4, 5, 6, 7, 8]);
        expect(new Romcal().dates().epiphany(2000).getDate()).toBeOneOf([2, 3, 4, 5, 6, 7, 8]);
        expect(new Romcal().dates().epiphany(2001).getDate()).toBeOneOf([2, 3, 4, 5, 6, 7, 8]);
        expect(new Romcal().dates().epiphany(2002).getDate()).toBeOneOf([2, 3, 4, 5, 6, 7, 8]);
        expect(new Romcal().dates().epiphany(2003).getDate()).toBeOneOf([2, 3, 4, 5, 6, 7, 8]);
        expect(new Romcal().dates().epiphany(2004).getDate()).toBeOneOf([2, 3, 4, 5, 6, 7, 8]);
        expect(new Romcal().dates().epiphany(2005).getDate()).toBeOneOf([2, 3, 4, 5, 6, 7, 8]);
      });
    });
  });

  describe('The Solemnity of Joseph, Husband of Mary', () => {
    test('Should fall on the 19th of March every year if not on a Sunday of Lent or during Holy Week', async () => {
      for (let i = 1950, il = 2050; i <= il; i++) {
        const romcal = new Romcal();
        const dates = romcal.dates(i);
        const palmSunday = dates.palmSunday();

        const date = getUtcDate(i, 3, 19);
        const josephSpouseOfMary = await romcal.getOneLiturgicalDay('joseph_spouse_of_mary', {
          year: i,
        });
        const computedDate = getUtcDateFromString(josephSpouseOfMary!.date);

        expect(
          // If it falls during Holy Week (or after)
          date.getTime() >= palmSunday.getTime() ||
            // If March 19 is a Sunday
            date.getDay() === 0 ||
            // Otherwise, the computed date must be March 19
            isSameDate(computedDate, date),
        ).toBeTrue();
      }
    });

    test('If it falls on a Sunday of Lent, it should be moved to the following Monday', async () => {
      for (let i = 1950, il = 2050; i <= il; i++) {
        const romcal = new Romcal();
        const dates = romcal.dates(i);
        const palmSunday = dates.palmSunday();

        const date = getUtcDate(i, 3, 19);
        const josephSpouseOfMary = await romcal.getOneLiturgicalDay('joseph_spouse_of_mary', {
          year: i,
        });
        const computedDate = getUtcDateFromString(josephSpouseOfMary!.date);

        expect(
          // If it falls during Holy Week (or after)
          date.getTime() >= palmSunday.getTime() ||
            // If March 19 is a Sunday, the feast is moved to a Monday
            (date.getDay() === 0 && computedDate.getDay() === 1) ||
            // Otherwise, the computed date must be March 19
            isSameDate(computedDate, date),
        ).toBeTrue();
      }
    });

    test('If it falls during Holy Week, it should be moved to the Saturday preceding Palm Sunday', async () => {
      // Year 2006 fulfils this condition
      for (let i = 2006, il = 2006; i <= il; i++) {
        const romcal = new Romcal();
        const dates = romcal.dates(i);
        const palmSunday = dates.palmSunday();

        const date = getUtcDate(i, 3, 19);
        const josephSpouseOfMary = await romcal.getOneLiturgicalDay('joseph_spouse_of_mary', {
          year: i,
        });
        const computedDate = getUtcDateFromString(josephSpouseOfMary!.date);

        expect(
          // If it falls during Holy Week (or after)
          (date.getTime() >= palmSunday.getTime() && isSameDate(computedDate, subtractsDays(palmSunday, 1))) ||
            // If March 19 is a Sunday
            date.getDay() === 0 ||
            // Otherwise, the computed date must be March 19
            isSameDate(computedDate, date),
        ).toBeTrue();
      }
    });
  });

  describe('The Solemnity of the Annunciation', () => {
    test('Should fall on the 25th of March every year if not during a Sunday of Lent, Holy Week or the the Octave of Easter', () => {
      const dates = new Romcal().dates();

      for (let i = 2018, il = 2018; i <= il; i++) {
        const date = getUtcDate(i, 3, 25);
        const sundaysOfLent = dates.allSundaysOfLent(i);
        const isOnASundayOfLent = rangeContainsDate(sundaysOfLent, date);

        // Shouldn't happen within holy week
        const holyWeekDates = dates.allDatesOfHolyWeek(i);
        const [firstDayOfHolyWeek] = holyWeekDates;
        const [lastDayOfHolyWeek] = holyWeekDates.reverse();
        const holyWeekRange = rangeOfDays(firstDayOfHolyWeek, lastDayOfHolyWeek);

        // Shouldn't happen within the octave of easter
        const octaveOfEasterDates = dates.allDatesInOctaveOfEaster(i);
        const [firstDayInOctaveOfEaster] = octaveOfEasterDates;
        const [lastDayInOctaveOfEaster] = octaveOfEasterDates.reverse();
        const octaveRange = rangeOfDays(firstDayInOctaveOfEaster, lastDayInOctaveOfEaster);

        if (!rangeContainsDate(holyWeekRange, date) && !rangeContainsDate(octaveRange, date) && !isOnASundayOfLent) {
          // eslint-disable-next-line jest/no-conditional-expect
          expect(new Romcal().dates().annunciation(i).getDay()).toEqual(25);
        } else {
          // This test case specifically doesnt care about what happens if one or
          // all of the above condition are not met... that is tested in another use case
          // eslint-disable-next-line jest/no-conditional-expect
          expect(true).toBeTrue();
        }
      }
    });

    test('If it occurs during Holy Week, it should be moved to the Monday after Divine Mercy Sunday', () => {
      const dates = new Romcal().dates();

      for (let i = 1950, il = 2050; i <= il; i++) {
        const date = getUtcDate(i, 3, 25);

        // Shouldn't happen within holy week
        const holyWeekDates = dates.allDatesOfHolyWeek(i);
        const [firstDayOfHolyWeek] = holyWeekDates;
        const [lastDayOfHolyWeek] = holyWeekDates.reverse();
        const holyWeekRange = rangeOfDays(firstDayOfHolyWeek, lastDayOfHolyWeek);

        // Shouldn't happen within the octave of easter
        const octaveOfEasterDates = dates.allDatesInOctaveOfEaster(i);
        const [firstDayInOctaveOfEaster] = octaveOfEasterDates;
        const [lastDayInOctaveOfEaster] = octaveOfEasterDates.reverse();
        const octaveRange = rangeOfDays(firstDayInOctaveOfEaster, lastDayInOctaveOfEaster);

        if (rangeContainsDate(holyWeekRange, date) && !rangeContainsDate(octaveRange, date)) {
          // eslint-disable-next-line jest/no-conditional-expect
          expect(
            isSameDate(new Romcal().dates().annunciation(i), addDays(new Romcal().dates().divineMercySunday(i), 1)),
          ).toEqual(true);
        } else {
          // This test case specifically doesnt care about what happens if one or
          // all of the above condition are not met... that is tested in another use case
          // eslint-disable-next-line jest/no-conditional-expect
          expect(true).toBeTrue();
        }
      }
    });

    test('If it occurs during the Octave of Easter, it should be moved to the Saturday preceding Palm Sunday', () => {
      const dates = new Romcal().dates();

      for (let i = 1950, il = 2050; i <= il; i++) {
        const date = getUtcDate(i, 3, 25);

        const holyWeekDates = dates.allDatesOfHolyWeek(i);
        const [firstDayOfHolyWeek] = holyWeekDates;
        const [lastDayOfHolyWeek] = holyWeekDates.reverse();
        const holyWeekRange = rangeOfDays(firstDayOfHolyWeek, lastDayOfHolyWeek);

        const octaveOfEasterDates = dates.allDatesInOctaveOfEaster(i);
        const [firstDayInOctaveOfEaster] = octaveOfEasterDates;
        const [lastDayInOctaveOfEaster] = octaveOfEasterDates.reverse();
        const octaveRange = rangeOfDays(firstDayInOctaveOfEaster, lastDayInOctaveOfEaster);

        if (!rangeContainsDate(holyWeekRange, date) && rangeContainsDate(octaveRange, date)) {
          // Happens in the Octave of Easter, move to one day after Low Sunday
          // eslint-disable-next-line jest/no-conditional-expect
          expect(
            isSameDate(new Romcal().dates().annunciation(i), addDays(new Romcal().dates().divineMercySunday(i), 1)),
          ).toEqual(true);
        } else {
          // This test case specifically doesnt care about what happens if one or
          // all of the above condition are not met... that is tested in another use case
          // eslint-disable-next-line jest/no-conditional-expect
          expect(true).toBeTrue();
        }
      }
    });
  });

  describe('The Baptism of the Lord', () => {
    describe('When Epiphany is celebrated on the 6th of Jan', () => {
      test('The Sunday following Jan 6 is the Baptism of the Lord', () => {
        for (let i = 1900, il = 2100; i <= il; i++) {
          const epiphany = new Romcal().dates().epiphany(i, false);
          expect(
            isSameDate(startOfWeek(addDays(epiphany, 7)), new Romcal().dates().baptismOfTheLord(i, false)),
          ).toEqual(true);
        }
      });
    });

    describe('When Epiphany is not celebrated on Jan. 6 (i.e. celebrated on a Sunday)', () => {
      test('If Epiphany occurs on Sunday Jan. 7 or Sunday Jan. 8, then the Baptism of the Lord is the next day (Monday)', () => {
        for (let i = 1900, il = 2100; i <= il; i++) {
          const epiphany = new Romcal().dates().epiphany(i);
          expect(epiphany.getDay()).toEqual(0);
          if (epiphany.getDate() === 7 || epiphany.getDate() === 8) {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(isSameDate(addDays(epiphany, 1), new Romcal().dates().baptismOfTheLord(i))).toEqual(true);
          }
        }
      });

      test('If Epiphany occurs on a Sunday before Jan. 6, the Sunday following Epiphany is the Baptism of the Lord.', () => {
        for (let i = 1900, il = 2100; i <= il; i++) {
          const epiphany = new Romcal().dates().epiphany(i);
          expect(epiphany.getDay()).toEqual(0);
          if (epiphany.getDate() < 6) {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(isSameDate(startOfWeek(addDays(epiphany, 7)), new Romcal().dates().baptismOfTheLord(i))).toEqual(
              true,
            );
          }
        }
      });

      test('If Epiphany occurs on Sunday Jan. 6, the Baptism of the Lord occurs on the following Sunday', () => {
        for (let i = 1900, il = 2100; i <= il; i++) {
          const epiphany = new Romcal().dates().epiphany(i);
          expect(epiphany.getDay()).toEqual(0);
          if (epiphany.getDate() === 6) {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(isSameDate(startOfWeek(addDays(epiphany, 7)), new Romcal().dates().baptismOfTheLord(i))).toEqual(
              true,
            );
          }
        }
      });
    });
  });

  describe('The Presentation of the Lord', () => {
    test('Should always fall on the 2nd of February', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        expect(new Romcal().dates().presentationOfTheLord(i).getMonth()).toEqual(1);
        expect(new Romcal().dates().presentationOfTheLord(i).getDate()).toEqual(2);
      }
    });
  });

  describe('The Solemnity of the Immaculate Conception', () => {
    test('Should fall on the 8th of December every year if not on a Sunday of Advent', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        const date = getUtcDate(i, 12, 8);
        const sundays = new Romcal().dates().allSundaysOfAdvent(i);

        let onSundayOfAdvent = false;
        sundays.forEach((sunday) => {
          if (isSameDate(date, sunday)) onSundayOfAdvent = true;
        });

        if (!onSundayOfAdvent) {
          // eslint-disable-next-line jest/no-conditional-expect
          expect(date.getDate()).toEqual(new Romcal().dates().immaculateConceptionOfMary(i).getDate());
        }
      }
    });

    test('If it falls on a Sunday of Advent, it should be moved to the following Monday', () => {
      for (let i = 1900, il = 2100; i <= il; i++) {
        const date = getUtcDate(i, 12, 8);
        const sundays = new Romcal().dates().allSundaysOfAdvent(i);

        let onSundayOfAdvent = false;
        sundays.forEach((sunday) => {
          if (isSameDate(date, sunday)) onSundayOfAdvent = true;
        });

        if (onSundayOfAdvent) {
          // eslint-disable-next-line jest/no-conditional-expect
          expect(new Romcal().dates().immaculateConceptionOfMary(i).getDate()).toEqual(9);
        }
      }
    });
  });
});
