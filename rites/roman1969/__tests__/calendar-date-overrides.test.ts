import { CzechRepublic_Cs } from '../dist/bundles/czech-republic';
import { England_En } from '../dist/bundles/england';
import { France_Fr } from '../dist/bundles/france';
import { Germany_En } from '../dist/bundles/germany';
import { Hungary_En } from '../dist/bundles/hungary';
import { Ireland_En } from '../dist/bundles/ireland';
import { Malta_En } from '../dist/bundles/malta';
import { Mexico_Es } from '../dist/bundles/mexico';
import { Slovakia_Sk } from '../dist/bundles/slovakia';
import { Spain_Es } from '../dist/bundles/spain';
import { Wales_En } from '../dist/bundles/wales';
import { LiturgicalDay, Romcal } from '../src';

const { Ranks, Periods, Precedences, getUtcDateFromString } = Romcal;

describe('Testing national calendar overrides', () => {
  describe('An optional celebration is available to be celebrated, in addition to the weekday', () => {
    let franceDates2021: LiturgicalDay[];
    let generalDates2020: LiturgicalDay[];
    let spainDates2020: LiturgicalDay[];

    beforeAll(async () => {
      franceDates2021 = Object.values(await new Romcal({ localizedCalendar: France_Fr }).generateCalendar(2021)).flat();
      generalDates2020 = Object.values(await new Romcal().generateCalendar(2020)).flat();
      spainDates2020 = Object.values(await new Romcal({ localizedCalendar: Spain_Es }).generateCalendar(2020)).flat();
    });

    test('The optional memory of the Most Holy Name of Jesus is available on the 3th of January, in addition to the weekday', () => {
      const dates = generalDates2020.filter((d) => d.date === '2020-01-03');
      expect(dates.length).toEqual(2);
    });
    test('However, if the 3th of January is a Sunday, the Solemnity of Epiphany of the Lord takes the precedence.', () => {
      const dates = franceDates2021.filter((d) => d.date === '2021-01-03');
      expect(dates.length).toEqual(1);
      expect(dates[0].id).toEqual('epiphany_of_the_lord');
    });
    test('The optional memory of Saint Fructuosus is celebrated on the January 20 in Spain, in addition of Saint Fabian & Saint Sebastian from the general calendar', () => {
      const dates = spainDates2020.filter((d) => d.date === '2020-01-20');
      expect(dates.length).toEqual(4);
    });
    test('When optional celebrations are available, the weekday is the first celebration available', () => {
      const [firstDate] = spainDates2020.filter((d) => d.date === '2020-01-20');
      expect(firstDate.rank).toEqual(Ranks.Weekday);
    });
  });

  describe('A feast defined in a national calendar should replace the same feast defined in the general calendar', () => {
    let year: number;
    let generalDates: LiturgicalDay[];
    let spainDates: LiturgicalDay[];

    beforeAll(async () => {
      year = 2008;
      generalDates = Object.values(await new Romcal().generateCalendar(year)).flat();
      spainDates = Object.values(await new Romcal({ localizedCalendar: Spain_Es }).generateCalendar(year)).flat();
    });

    test('The feast of Saint Isidore of Seville is celebrated on April 4 every year', () => {
      const date = generalDates.filter((d) => d.date === `${year}-04-04` && d.id === 'isidore_of_seville_bishop');
      expect(date.length).toEqual(1);
    });
    test('However, in the national calendar of Spain, this same feast is celebrated on the 26th of April every year', () => {
      const date = spainDates.filter((d) => d.date === `${year}-04-26` && d.id === 'isidore_of_seville_bishop');
      expect(date.length).toEqual(1);
    });
    test('Therefore, national calendar of spain should only have one occurrence of this feast on the 26th of April', () => {
      const occurrences = spainDates.filter((d) => d.id === 'isidore_of_seville_bishop');
      expect(occurrences.length).toEqual(1);
    });
  });

  describe('Extend already defined liturgical day definitions on calendars', () => {
    test('Extend an existing liturgical day definition, does not affect date exceptions rules on the base liturgical day definition', async () => {
      const generalDates = Object.values(await new Romcal().generateCalendar(2023)).flat();
      const generalDate = generalDates.find((d) => d.id === 'joseph_spouse_of_mary');

      const skDates = Object.values(await new Romcal({ localizedCalendar: Slovakia_Sk }).generateCalendar(2023)).flat();
      const skDate = skDates.find((d) => d.id === 'joseph_spouse_of_mary');

      expect(generalDate?.date).toEqual(skDate?.date);
      expect(generalDate?.date).toEqual('2023-03-20'); // Date is moved to the day after in 2023, because of a date rule exception.
      expect(generalDate?.isHolyDayOfObligation).toBeTruthy();
      expect(skDate?.isHolyDayOfObligation).toBeFalsy();
      expect(skDate?.dateExceptions.length).toBeGreaterThan(0);
    });
  });

  describe('The Solemnity of Epiphany of the Lord', () => {
    test('Should always be celebrated on January 6 in Slovakia unless explicitly configured otherwise', async () => {
      const slovakiaDates = Object.values(
        await new Romcal({ localizedCalendar: Slovakia_Sk }).generateCalendar()
      ).flat();
      const epiphanySlovakia = slovakiaDates.find((d) => d.id === 'epiphany_of_the_lord');
      // Should always be Jan 6th in Slovakia
      expect(getUtcDateFromString(epiphanySlovakia!.date).getUTCDate()).toEqual(6);
      expect(getUtcDateFromString(epiphanySlovakia!.date).getUTCMonth()).toEqual(0);
    });
    test('Will fall on Sunday as calculated by the Epiphany of the Lord rubric, when `epiphanyOnSunday` is explicitly configured as `true`', async () => {
      const slovakiaDates = Object.values(
        await new Romcal({
          localizedCalendar: Slovakia_Sk,
          epiphanyOnSunday: true,
        }).generateCalendar(2010)
      ).flat();
      const epiphanySlovakia = slovakiaDates.find((d) => d.id === 'epiphany_of_the_lord');
      expect(getUtcDateFromString(epiphanySlovakia!.date).getUTCDay()).toEqual(0);
      expect(getUtcDateFromString(epiphanySlovakia!.date).getUTCMonth()).toEqual(0);
    });
  });

  describe('Testing the Feast of Saints Cyril and Methodius with locale specific settings', () => {
    test('Should fall on February 14, 2017 in the general calendar', async () => {
      const dates = Object.values(await new Romcal().generateCalendar(2017)).flat();
      const date = dates.find((d) => {
        return d.id === 'cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop';
      });
      expect(date?.date).toEqual('2017-02-14');
    });
    test('Should fall on 5th July 2017 in the national calendar of the Czech Republic', async () => {
      const day = await new Romcal({ localizedCalendar: CzechRepublic_Cs }).getOneLiturgicalDay(
        'cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop',
        { year: 2017 }
      );
      expect(day?.date).toEqual('2017-07-05');
    });
    test('Should fall on 5th July 2017 in the national calendar of Slovakia', async () => {
      const day = await new Romcal({ localizedCalendar: Slovakia_Sk }).getOneLiturgicalDay(
        'cyril_constantine_the_philosopher_monk_and_methodius_michael_of_thessaloniki_bishop',
        { year: 2017 }
      );
      expect(day?.date).toEqual('2017-07-05');
    });
  });

  describe('The feast of the Assumption of the Blessed Virgin Mary in England and Wales', () => {
    describe('If the feast of the Assumption of the Blessed Virgin Mary falls on Saturday on Monday', () => {
      test('It is transferred to Sunday', async () => {
        const wales2009Dates = Object.values(
          await new Romcal({ localizedCalendar: Wales_En }).generateCalendar(2009)
        ).flat();

        const england2009Dates = Object.values(
          await new Romcal({ localizedCalendar: England_En }).generateCalendar(2009)
        ).flat();

        const wales2011Dates = Object.values(
          await new Romcal({ localizedCalendar: Wales_En }).generateCalendar(2011)
        ).flat();

        const england2011Dates = Object.values(
          await new Romcal({ localizedCalendar: England_En }).generateCalendar(2011)
        ).flat();

        const lateOrdinaryTimeDates2009: LiturgicalDay[] = Object.values(await new Romcal().generateCalendar(2009))
          .flat()
          .filter((d) => d.periods.includes(Periods.LateOrdinaryTime));
        const lateOrdinaryTimeDates2011: LiturgicalDay[] = Object.values(await new Romcal().generateCalendar(2011))
          .flat()
          .filter((d) => d.periods.includes(Periods.LateOrdinaryTime));

        const twentiethSundayOfOrdinaryTime2009 = lateOrdinaryTimeDates2009.find(
          (d) => d.id === 'ordinary_time_20_sunday'
        );

        const twentiethSundayOfOrdinaryTime2011 = lateOrdinaryTimeDates2011.find(
          (d) => d.id === 'ordinary_time_20_sunday'
        );

        const walesAssumption2009 = wales2009Dates.find((d) => d.id === 'assumption_of_the_blessed_virgin_mary');
        const englandAssumption2009 = england2009Dates.find((d) => d.id === 'assumption_of_the_blessed_virgin_mary');
        const walesAssumption2011 = wales2011Dates.find((d) => d.id === 'assumption_of_the_blessed_virgin_mary');
        const englandAssumption2011 = england2011Dates.find((d) => d.id === 'assumption_of_the_blessed_virgin_mary');

        expect(
          walesAssumption2009 &&
            twentiethSundayOfOrdinaryTime2009 &&
            walesAssumption2009.date === twentiethSundayOfOrdinaryTime2009.date
        ).toBeTruthy();
        expect(
          englandAssumption2009 &&
            twentiethSundayOfOrdinaryTime2009 &&
            englandAssumption2009.date === twentiethSundayOfOrdinaryTime2009.date
        ).toBeTruthy();
        expect(
          walesAssumption2011 &&
            twentiethSundayOfOrdinaryTime2011 &&
            walesAssumption2011.date === twentiethSundayOfOrdinaryTime2011.date
        ).toBeTruthy();
        expect(
          englandAssumption2011 &&
            twentiethSundayOfOrdinaryTime2011 &&
            englandAssumption2011.date === twentiethSundayOfOrdinaryTime2011.date
        ).toBeTruthy();
      });
    });

    describe('If the feast of the Assumption of the Blessed Virgin Mary falls on Sunday', () => {
      test('It replaces the 20th Sunday of OT', async () => {
        const twentiethSundayOfOrdinaryTime: LiturgicalDay = (await new Romcal().generateCalendar(2010))[
          '2010-08-15'
        ][0];

        expect(twentiethSundayOfOrdinaryTime.id).toEqual('assumption_of_the_blessed_virgin_mary');
      });
    });
  });

  describe('The feast of All Saints in England and Wales', () => {
    test('If All Saints is on Saturday, it will be moved to Sunday (the next day)', async () => {
      // In 2008, 1st of November was on a Saturday
      const englandDates = Object.values(
        await new Romcal({ localizedCalendar: England_En }).generateCalendar(2008)
      ).flat();
      const walesDates = Object.values(await new Romcal({ localizedCalendar: Wales_En }).generateCalendar(2008)).flat();
      // So All Saints should be celebrated on Sunday
      const allSaintsEngland = englandDates.find((d) => d.id === 'all_saints');
      const allSaintsWales = walesDates.find((d) => d.id === 'all_saints');
      expect(getUtcDateFromString(allSaintsEngland!.date).getUTCDay()).toEqual(0);
      expect(getUtcDateFromString(allSaintsWales!.date).getUTCDay()).toEqual(0);
    });
  });

  describe('The feast of All Souls in England and Wales', () => {
    test('If All Saints is moved to Sunday, All Souls must be on Monday (the next day)', async () => {
      // In 2008, 1st of November was on a Saturday
      const englandDates = Object.values(
        await new Romcal({ localizedCalendar: England_En }).generateCalendar(2008)
      ).flat();
      const walesDates = Object.values(await new Romcal({ localizedCalendar: Wales_En }).generateCalendar(2008)).flat();
      // So All Saints should be celebrated on Sunday
      // and All Souls will be celebrated on Monday
      const allSaintsEngland = englandDates.find((d) => d.id === 'commemoration_of_all_the_faithful_departed');
      const allSaintsWales = walesDates.find((d) => d.id === 'commemoration_of_all_the_faithful_departed');
      expect(getUtcDateFromString(allSaintsEngland!.date).getUTCDay()).toEqual(1);
      expect(getUtcDateFromString(allSaintsWales!.date).getUTCDay()).toEqual(1);
    });
  });

  describe('Saint Matthias the Apostle', () => {
    test('Feast day falls on the May 14 in the general liturgical calendar', async () => {
      const dates = Object.values(await new Romcal().generateCalendar(2018)).flat();
      const matthiasApostle = dates.find((d) => d.id === 'matthias_apostle');
      expect(matthiasApostle?.date).toEqual('2018-05-14');
    });

    test('Feast day falls on the 24th of February in the national calendar of Germany and Hungary', async () => {
      const germanyDates = Object.values(
        await new Romcal({ localizedCalendar: Germany_En }).generateCalendar(2018)
      ).flat();
      const hungaryDates = Object.values(
        await new Romcal({ localizedCalendar: Hungary_En }).generateCalendar(2018)
      ).flat();

      const matthiasApostleGermany = germanyDates.find((d) => d.id === 'matthias_apostle');
      const matthiasApostleHungary = hungaryDates.find((d) => d.id === 'matthias_apostle');

      expect(matthiasApostleGermany?.date).toEqual('2018-02-24');
      expect(matthiasApostleHungary?.date).toEqual('2018-02-24');
    });

    test('Is a memorial in the German liturgical calendar on AD 2014', async () => {
      const germanyDates = Object.values(
        await new Romcal({ localizedCalendar: Germany_En }).generateCalendar(2014)
      ).flat();
      const matthiasApostleGermany = germanyDates.find((d) => d.id === 'matthias_apostle');
      expect(matthiasApostleGermany?.rank).toEqual(Ranks.Memorial);
    });
  });

  describe('Saint Christopher Magallanes and Companions, Martyrs', () => {
    test('A memorial in Mexico but an optional memorial in the general calendar', async () => {
      const mexicoDates = Object.values(
        await new Romcal({ localizedCalendar: Mexico_Es }).generateCalendar(2019)
      ).flat();
      const dates = Object.values(await new Romcal().generateCalendar(2019)).flat();
      const christopherMagallanesPriestAndCompanionsMartyrs = dates.find(
        (d) => d.id === 'christopher_magallanes_priest_and_companions_martyrs'
      );
      const christopherMagallanesPriestAndCompanionsMartyrsMexico = mexicoDates.find(
        (d) => d.id === 'christopher_magallanes_priest_and_companions_martyrs'
      );
      expect(christopherMagallanesPriestAndCompanionsMartyrs?.precedence).toEqual(Precedences.OptionalMemorial_12);
      expect(christopherMagallanesPriestAndCompanionsMartyrsMexico?.precedence).toEqual(Precedences.ProperMemorial_11b);
    });
  });

  describe('Saint Oliver Plunket', () => {
    test('A memorial in Ireland but an optional memorial in England', async () => {
      const irelandDates = Object.values(
        await new Romcal({ localizedCalendar: Ireland_En }).generateCalendar(2019)
      ).flat();
      const englandDates = Object.values(
        await new Romcal({ localizedCalendar: England_En }).generateCalendar(2019)
      ).flat();
      const oliverPlunketBishopIreland = irelandDates.find((d) => d.id === 'oliver_plunket_bishop');
      const oliverPlunketBishopEngland = englandDates.find((d) => d.id === 'oliver_plunket_bishop');

      expect(oliverPlunketBishopIreland?.precedence).toEqual(Precedences.ProperMemorial_11b);
      expect(oliverPlunketBishopEngland?.precedence).toEqual(Precedences.OptionalMemorial_12);
    });
  });

  describe('Our Lady of Sorrows', () => {
    test('Should be celebrated on the September 15, 2018 as a memorial in the General Calendar', async () => {
      const dates = Object.values(await new Romcal().generateCalendar(2018)).flat();
      const ourLadyOfSorrows = dates.find((d) => d.id === 'our_lady_of_sorrows');
      expect(ourLadyOfSorrows?.rank).toEqual(Ranks.Memorial);
      expect(ourLadyOfSorrows?.date).toEqual('2018-09-15');
    });

    test('Should be celebrated on the 15th of April 2015 as a feast in the national calendar of Malta', async () => {
      const maltaDates = Object.values(await new Romcal({ localizedCalendar: Malta_En }).generateCalendar(2015)).flat();
      const ourLadyOfSorrows = maltaDates.find((d) => d.id === 'our_lady_of_sorrows');
      expect(ourLadyOfSorrows?.rank).toEqual(Ranks.Feast);
      expect(ourLadyOfSorrows?.date).toEqual('2015-04-15');
    });

    test('Should be replaced by the 3rd Sunday of Easter in 2018 in the national calendar of Malta due to precedence', async () => {
      const maltaDates = Object.values(await new Romcal({ localizedCalendar: Malta_En }).generateCalendar(2018)).flat();
      const ourLadyOfSorrows = '2018-04-15';
      const thirdSundayOfEaster = maltaDates.find((d) => d.id === 'easter_time_3_sunday');
      expect(thirdSundayOfEaster!.date).toEqual(ourLadyOfSorrows);
    });

    test('Should be celebrated on the 15th of September 2018 as a solemnity in the national calendar of Slovakia', async () => {
      const slovakiaDates = Object.values(
        await new Romcal({ localizedCalendar: Slovakia_Sk }).generateCalendar(2018)
      ).flat();
      const ourLadyOfSorrowsPatronessOfSlovakia = slovakiaDates.find((d) => d.id === 'our_lady_of_sorrows');
      expect(ourLadyOfSorrowsPatronessOfSlovakia?.precedence).toEqual(Precedences.ProperSolemnity_PrincipalPatron_4a);
      expect(ourLadyOfSorrowsPatronessOfSlovakia?.date === '2018-09-15').toBeTruthy();
    });
  });
});
