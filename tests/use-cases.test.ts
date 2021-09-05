import 'jest-extended';
import { slovakia_sk } from 'romcal/dist/bundles/slovakia';
import Romcal from '../lib';

const { Ranks, getUtcDateFromString, isSameDate, subtractsDays } = Romcal;

describe('Testing specific feasts and memorials', () => {
  describe('The memorial of the Blessed Virgin Mary, Mother of the Church', () => {
    test('Should be celebrated on the Monday after Pentecost', async () => {
      const romcal = new Romcal();
      const pentecostSunday = romcal.dates().pentecostSunday();
      const maryMotherOfTheChurch = await romcal.getOneLiturgicalDay('mary_mother_of_the_church', {
        computeInWholeYear: true,
      });
      const dayBeforeMaryMotherOfTheChurch = subtractsDays(
        getUtcDateFromString(maryMotherOfTheChurch!.date),
        1,
      );
      expect(getUtcDateFromString(maryMotherOfTheChurch!.date).getDay()).toEqual(1);
      expect(dayBeforeMaryMotherOfTheChurch.getDay()).toEqual(0);
      expect(isSameDate(dayBeforeMaryMotherOfTheChurch, pentecostSunday)).toBeTruthy();
    });

    test('Should take precedence in the event of coincidence with another memorial of a saint or blessed', async () => {
      // In 2020, monday after Pentecost is June 1
      const juneDates = Object.values(await new Romcal().generateCalendar(2020))
        .flat()
        .filter((d) => new Date(d.date).getUTCMonth() === 5);
      // according to the general calendar, June 1 is the memorial of saint Justin, Martyr
      const maybeSaintJustinMartyr = juneDates[0];
      expect(maybeSaintJustinMartyr.key).toEqual('mary_mother_of_the_church');
    });
  });

  describe('The celebration of Saint Mary Magdalene', () => {
    test('Should be ranked as a feast and should be celebrated on the July 22', async () => {
      const romcal = new Romcal();
      const maryMagdalene = await romcal.getOneLiturgicalDay('mary_magdalene', {
        year: 2017,
        computeInWholeYear: true,
      });

      expect(getUtcDateFromString(maryMagdalene!.date).getDate()).toEqual(22);
      expect(getUtcDateFromString(maryMagdalene!.date).getMonth()).toEqual(6);
      expect(maryMagdalene?.rank).toEqual(Ranks.Feast);
    });
  });

  describe('The celebrations of Pope Saint John XXIII and Pope Saint John Paul II', () => {
    test('Should be celebrated as optional memorials', async () => {
      const romcal = new Romcal();

      const johnXxiiiPope = await romcal.getOneLiturgicalDay('john_xxiii_pope', {
        year: 2016,
        computeInWholeYear: true,
      });

      const johnPaulIiPope = await romcal.getOneLiturgicalDay('john_paul_ii_pope', {
        year: 2016,
        computeInWholeYear: true,
      });

      expect(johnXxiiiPope?.isOptional).toBeTrue();
      expect(johnPaulIiPope?.isOptional).toBeTrue();
    });
  });

  describe('The Feast of the Exultation of the Cross', () => {
    test('Is celebrated on the 14th of September', async () => {
      const exaltationOfTheHolyCross = await new Romcal({
        localizedCalendar: slovakia_sk,
      }).getOneLiturgicalDay('exaltation_of_the_holy_cross', {
        year: 2018,
        computeInWholeYear: true,
      });

      expect(getUtcDateFromString(exaltationOfTheHolyCross!.date).getDate()).toEqual(14);
      expect(getUtcDateFromString(exaltationOfTheHolyCross!.date).getMonth()).toEqual(8);
    });
  });

  describe('The Sunday of the Word of God', () => {
    test('Should be celebrated on the 3rd Sunday of Ordinary Time', async () => {
      const sundayOfTheWordOfGod = await new Romcal({
        localizedCalendar: slovakia_sk,
      }).getOneLiturgicalDay('sunday_of_the_word_of_god', {
        year: 2020,
        computeInWholeYear: true,
      });

      expect(sundayOfTheWordOfGod!.calendar.weekOfSeason).toEqual(3);
    });
  });
});
