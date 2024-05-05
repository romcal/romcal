import { LiturgicalDay, Romcal } from '../src';

const { Colors, Seasons, Ranks, addDays, isSameDate, subtractsDays } = Romcal;

describe('Testing date range functions', () => {
  describe('The Season of Advent', () => {
    test('There are always 4 Sundays in advent', () => {
      for (let i = 1900, il = 2100; i <= il; i += 1) {
        expect(new Romcal().dates(i).allSundaysOfAdvent().length).toEqual(4);
      }
    });

    test('Depending on the day of Christmas, the 1st Sunday of Advent will be between Nov 27 - Dec 3', () => {
      const romcal = new Romcal();
      expect(romcal.dates(2005).allSundaysOfAdvent()[0].getUTCDate()).toEqual(27);
      expect(romcal.dates(2000).allSundaysOfAdvent()[0].getUTCDate()).toEqual(3);
      expect(romcal.dates(2001).allSundaysOfAdvent()[0].getUTCDate()).toEqual(2);
      expect(romcal.dates(2001).allSundaysOfAdvent(2002)[0].getUTCDate()).toEqual(1);
      expect(romcal.dates(2003).allSundaysOfAdvent()[0].getUTCDate()).toEqual(30);
      expect(romcal.dates(1998).allSundaysOfAdvent()[0].getUTCDate()).toEqual(29);
      expect(romcal.dates(1999).allSundaysOfAdvent()[0].getUTCDate()).toEqual(28);
    });

    test('Depending on the day of Christmas, the number of days in Advent varies', () => {
      const romcal = new Romcal();
      if (romcal.dates().christmas(2005).getUTCDay() === 0) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(romcal.dates(2005).allDatesOfAdvent().length).toEqual(28);
      }
      if (romcal.dates().christmas(2000).getUTCDay() === 1) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(romcal.dates(2000).allDatesOfAdvent().length).toEqual(22);
      }
      if (romcal.dates().christmas(2001).getUTCDay() === 2) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(romcal.dates(2001).allDatesOfAdvent().length).toEqual(23);
      }
      if (romcal.dates().christmas(2002).getUTCDay() === 3) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(romcal.dates(2002).allDatesOfAdvent().length).toEqual(24);
      }
      if (romcal.dates().christmas(2003).getUTCDay() === 4) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(romcal.dates(2003).allDatesOfAdvent().length).toEqual(25);
      }
      if (romcal.dates().christmas(1998).getUTCDay() === 5) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(romcal.dates(1998).allDatesOfAdvent().length).toEqual(26);
      }
      if (romcal.dates().christmas(1999).getUTCDay() === 6) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(romcal.dates(1999).allDatesOfAdvent().length).toEqual(27);
      }
    });
  });

  describe('The Season of Lent in the Liturgical Calendar', () => {
    test('It is typically 6 weeks long', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2200; i <= il; i += 1) {
        expect(romcal.dates(i).allSundaysOfLent().length).toEqual(6);
      }
    });

    test('The first Sunday of Lent should be 4 days after Ash Wednesday', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2200; i <= il; i += 1) {
        const dates = romcal.dates(i);
        expect(isSameDate(subtractsDays(dates.allSundaysOfLent()[0], 4), dates.ashWednesday())).toEqual(true);
      }
    });

    test('The last Sunday of Lent should be Palm Sunday', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2200; i <= il; i += 1) {
        const dates = romcal.dates(i);
        const [lastSundayOfLent] = dates.allSundaysOfLent().reverse();
        expect(isSameDate(lastSundayOfLent, dates.palmSunday())).toEqual(true);
      }
    });

    test('The Saturday in the week after Ash Wednesday should be in the 1st week of Lent', async () => {
      const dates = Object.values(await new Romcal().generateCalendar(2017))
        .flatMap((arr) => arr[0])
        .filter((d) => d.seasons.includes(Seasons.Lent));
      expect(dates[10].id).toEqual('lent_1_saturday');
    });

    test('The 2nd Sunday of Lent should be in the 2nd week of Lent', async () => {
      const dates = Object.values(await new Romcal().generateCalendar(2017))
        .flatMap((arr) => arr[0])
        .filter((d) => d.seasons.includes(Seasons.Lent));
      expect(dates[11].id).toEqual('lent_2_sunday');
    });
  });

  describe('The Octave of Easter', () => {
    test('Should be 8 days long', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2100; i <= il; i += 1) {
        expect(romcal.dates(i).allDatesInOctaveOfEaster().length).toEqual(8);
      }
    });

    test('The first day of the octave should be on Easter Sunday', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2100; i <= il; i += 1) {
        const dates = romcal.dates(i);
        expect(isSameDate(dates.allDatesInOctaveOfEaster()[0], dates.easterSunday())).toEqual(true);
      }
    });

    test('The last day of the octave should be on Divine Mercy Sunday', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2100; i <= il; i += 1) {
        const dates = romcal.dates(i);
        const [lastDayInTheOctaveOfEaster] = dates.allDatesInOctaveOfEaster().reverse();
        expect(isSameDate(lastDayInTheOctaveOfEaster, dates.divineMercySunday())).toEqual(true);
      }
    });
  });

  describe('Eastertide', () => {
    test('Should be 50 days long', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2100; i <= il; i += 1) {
        const dates = romcal.dates(i);
        expect(dates.allDatesOfEasterTime().length).toEqual(50);
      }
    });

    test('The first Sunday of Easter should start on Easter Sunday', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2100; i <= il; i += 1) {
        const dates = romcal.dates(i);
        const [firstSundayOfEaster] = dates.allSundaysOfEaster();
        expect(isSameDate(firstSundayOfEaster, dates.easterSunday())).toEqual(true);
      }
    });

    test('The last Sunday of Easter should be on Pentecost Sunday', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2100; i <= il; i += 1) {
        const dates = romcal.dates(i);
        const [lastSundayOfEaster] = dates.allSundaysOfEaster().reverse();
        expect(isSameDate(lastSundayOfEaster, dates.pentecostSunday())).toEqual(true);
      }
    });
  });

  describe('Ordinary Time in the Liturgical Calendar', () => {
    test('The end of Christmastide is on Baptism of the Lord, so Ordinary time starts the next day', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2200; i <= il; i += 1) {
        const dates = romcal.dates(i);
        const ordinaryTime = dates.allDatesOfEarlyOrdinaryTime();
        const [firstDayInEarlyOrdinaryTime] = ordinaryTime;
        const [lastDayInEarlyOrdinaryTime] = ordinaryTime.reverse();
        expect(isSameDate(subtractsDays(firstDayInEarlyOrdinaryTime, 1), dates.baptismOfTheLord())).toEqual(true);
        expect(isSameDate(addDays(lastDayInEarlyOrdinaryTime, 1), dates.ashWednesday())).toEqual(true);
      }
    });

    test('There are typically 3 to 8 Sundays (and on rare occasions, 9 Sundays) in ordinary Time between the Baptism of the Lord to Ash Wednesday', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2200; i <= il; i += 1) {
        const dates = romcal.dates(i);
        const days = dates.allDatesOfEarlyOrdinaryTime();
        const sundays = dates.sundaysOfEarlyOrdinaryTime();
        expect(sundays.length).toBeOneOf([3, 4, 5, 6, 7, 8, 9]);
        expect(isSameDate(addDays(days.reverse()[0], 1), dates.ashWednesday())).toEqual(true);
      }
    });

    test('There are typically 24 to 29 Sundays in Ordinary Time between the Pentecost to the 1st Sunday of Advent', () => {
      const romcal = new Romcal();
      for (let i = 1900, il = 2100; i <= il; i += 1) {
        const dates = romcal.dates(i);
        const lateOrdinaryTime = dates.allDatesOfLateOrdinaryTime();
        const sundays = dates.allSundaysOfLateOrdinaryTime();
        const [firstDayInLateOrdinaryTime] = lateOrdinaryTime;
        const [lastDayInLateOrdinaryTime] = lateOrdinaryTime.reverse();
        expect(sundays.length).toBeOneOf([23, 24, 25, 26, 27, 28, 29]);
        expect(isSameDate(subtractsDays(firstDayInLateOrdinaryTime, 1), dates.pentecostSunday())).toEqual(true);
        expect(isSameDate(addDays(lastDayInLateOrdinaryTime, 1), dates.allSundaysOfAdvent()[0])).toEqual(true);
      }
    });
  });

  describe('The Octave of Christmas', () => {
    const romcal = new Romcal();
    test('Should be 8 days long from Christmas to the feast of the Holy Family', () => {
      for (let i = 1900, il = 2100; i <= il; i += 1) {
        const dates = romcal.dates(i);
        expect(dates.allDatesInOctaveOfChristmas().length).toEqual(8);
      }
    });
  });

  describe('Christmastide', () => {
    describe('If Epiphany is celebrated on Jan 6', () => {
      test('The last day of Christmas is always on Sunday on the feast of the Baptism of the Lord, if following the Ordinary Liturgical Calendar of the Western Roman Rite', () => {
        const romcal = new Romcal({ epiphanyOnSunday: false });
        for (let i = 1900, il = 2100; i <= il; i += 1) {
          const dates = romcal.dates(i);
          const [lastDayInChristmastide] = dates.allDatesOfChristmasTime().reverse();
          expect(lastDayInChristmastide.getUTCDay()).toEqual(0);
        }
      });
    });

    describe('If Epiphany is not celebrated on Jan 6 (i.e. on a Sunday)', () => {
      test('The last day of Christmas is the feast of the Baptism of the Lord', () => {
        const romcal = new Romcal();
        for (let i = 1900, il = 2100; i <= il; i += 1) {
          const dates = romcal.dates(i);
          const [lastDayInChristmastide] = dates.allDatesOfChristmasTime(i).reverse();
          expect(isSameDate(lastDayInChristmastide, dates.baptismOfTheLord(i + 1))).toEqual(true);
        }
      });
    });

    describe('Check weekdays before and after Epiphany', () => {
      const romcal = new Romcal({ epiphanyOnSunday: true });

      test('In 2021, Epiphany occurs on January 3, so there is 1 weekday before, and 6 weekdays after', () => {
        const datesBefore2021 = romcal.dates(2021).allDatesBeforeEpiphany();
        expect(datesBefore2021.length).toEqual(1);

        const datesAfter2021 = romcal.dates(2021).allDatesAfterEpiphany();
        expect(datesAfter2021.length).toEqual(6);
      });

      test('In 2022, Epiphany occurs on January 2, so there are no weekdays before and only 6 weekdays after', () => {
        const datesBefore2022 = romcal.dates(2022).allDatesBeforeEpiphany();
        expect(datesBefore2022.length).toEqual(0);

        const datesAfter2022 = romcal.dates(2022).allDatesAfterEpiphany();
        expect(datesAfter2022.length).toEqual(6);
      });

      test('In 2023, Epiphany occurs on January 3, and the Baptism of the Lord is on the following day, so there are only 6 weekdays before and no weekdays after', () => {
        const datesBefore2023 = romcal.dates(2023).allDatesBeforeEpiphany();
        expect(datesBefore2023.length).toEqual(6);

        const datesAfter2023 = romcal.dates(2023).allDatesAfterEpiphany();
        expect(datesAfter2023.length).toEqual(0);
      });
    });
  });
});

describe('Testing seasons utility functions', () => {
  describe('Holy days of obligation', () => {
    test('All Sundays are holy days of obligation', async () => {
      const sundays: LiturgicalDay[] = Object.values(await new Romcal().generateCalendar())
        .flat()
        .filter((item) => item.calendar.dayOfWeek === 0);
      sundays.every((item) => item.isHolyDayOfObligation);
      expect(sundays.every((item) => item.isHolyDayOfObligation)).toBeTruthy();
    });
  });

  describe('The liturgical year is divided to a number of seasons', () => {
    test('The liturgical color for Ordinary Time is green', async () => {
      const calendar = Object.values(await new Romcal().generateCalendar(2015)).flat();
      calendar
        .filter(
          (d) => d.seasons.includes(Seasons.OrdinaryTime) && (d.rank === Ranks.Sunday || d.rank === Ranks.Weekday)
        )
        .forEach((date) => {
          expect(date.colors[0]).toEqual(Colors.Green);
        });
    });

    test('The liturgical color for Lent and Advent is purple, except for the 4th Sunday of Lent and 3rd Sunday of Advent, which is rose', async () => {
      const calendar = Object.values(await new Romcal().generateCalendar(2015)).flat();

      calendar
        .filter(
          (d) =>
            (d.seasons.includes(Seasons.Lent) || d.seasons.includes(Seasons.Advent)) &&
            (d.rank === Ranks.Sunday || d.rank === Ranks.Weekday) &&
            d.id !== 'palm_sunday_of_the_passion_of_the_lord'
        )
        .forEach((date) => {
          if (date.id === 'lent_4_sunday' || date.id === 'advent_3_sunday') {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(date.colors[0]).toEqual(Colors.Rose);
            // eslint-disable-next-line jest/no-conditional-expect
            expect(date.colors[1]).toEqual(Colors.Purple);
          } else {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(date.colors[0]).toEqual(Colors.Purple);
          }
        });
    });

    test('The liturgical color for Christmastide and Eastertide is white', async () => {
      const calendar = Object.values(await new Romcal().generateCalendar(2015)).flat();

      calendar
        .filter(
          (d) =>
            (d.seasons.includes(Seasons.ChristmasTime) || d.seasons.includes(Seasons.EasterTime)) &&
            (d.rank === Ranks.Sunday || d.rank === Ranks.Weekday) &&
            d.id !== 'pentecost_sunday'
        )
        .forEach((date) => {
          // eslint-disable-next-line jest/no-conditional-expect
          expect(date.colors[0]).toEqual(Colors.White);
        });
    });
  });
});
