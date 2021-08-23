/* eslint-disable @typescript-eslint/no-explicit-any */
/*
    The MIT License (MIT)

    Copyright (c) 2014 Pereira, Julian Matthew

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
*/

import Romcal, { LiturgicalDay, LiturgicalPeriods, Precedences, Ranks } from '@romcal/index';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'jest-extended';
import { CzechRepublic_Cs } from '../tmp/bundles/czech-republic.cs';
import { England_En } from '../tmp/bundles/england.en';
import { Germany_En } from '../tmp/bundles/germany.en';
import { Hungary_En } from '../tmp/bundles/hungary.en';
import { Malta_En } from '../tmp/bundles/malta.en';
import { Mexico_Es } from '../tmp/bundles/mexico.es';
import { Slovakia_Sk } from '../tmp/bundles/slovakia.sk';
import { Spain_Es } from '../tmp/bundles/spain.es';
import { Wales_En } from '../tmp/bundles/wales.en';

dayjs.extend(utc);

describe('Testing national calendar overrides', () => {
  describe('An optional celebration is available to be celebrated, in addition to the weekday', () => {
    let generalDates2020: LiturgicalDay[];
    let generalDates2021: LiturgicalDay[];
    let spainDates2020: LiturgicalDay[];

    beforeAll(async () => {
      generalDates2020 = Object.values(await new Romcal().generateCalendar(2020)).flat();
      generalDates2021 = Object.values(await new Romcal().generateCalendar(2021)).flat();
      spainDates2020 = Object.values(
        await new Romcal({ localizedCalendar: Spain_Es }).generateCalendar(2020),
      ).flat();
    });

    test('The optional memory of the Most Holy Name of Jesus is available on the 3th of January, in addition to the weekday', () => {
      const dates = generalDates2020.filter((d) => {
        return dayjs.utc(d.date).isSame(dayjs.utc('2020-1-3'));
      });
      expect(dates.length).toEqual(2);
    });
    test('However, if the 3th of January is a Sunday, the Solemnity of Epiphany takes the precedence.', () => {
      const dates = generalDates2021.filter((d) => d.date === '2021-01-03');
      expect(dates.length).toEqual(1);
      expect(dates[0].key).toEqual('epiphany');
    });
    test('The optional memory of Saint Fructuosus is celebrated on the January 20 in Spain, in addition of Saint Fabian & Saint Sebastian from the general calendar', () => {
      const dates = spainDates2020.filter((d) => {
        return dayjs.utc(d.date).isSame(dayjs.utc('2020-1-20'));
      });
      expect(dates.length).toEqual(4);
    });
    test('When optional celebrations are available, the weekday is the first celebration available', () => {
      const [firstDate] = spainDates2020.filter((d) => {
        return dayjs.utc(d.date).isSame(dayjs.utc('2020-1-20'));
      });
      expect(firstDate.rank).toEqual(Ranks.WEEKDAY);
    });
  });

  describe('A feast defined in a national calendar should replace the same feast defined in the general calendar', () => {
    let year: number;
    let generalDates: LiturgicalDay[];
    let spainDates: LiturgicalDay[];

    beforeAll(async () => {
      year = 2008;
      generalDates = Object.values(await new Romcal().generateCalendar(year)).flat();
      spainDates = Object.values(
        await new Romcal({ localizedCalendar: Spain_Es }).generateCalendar(year),
      ).flat();
    });

    test('The feast of Saint Isidore of Seville is celebrated on April 4 every year', () => {
      const date = generalDates.filter((d) => {
        return (
          dayjs.utc(d.date).isSame(dayjs.utc(`${year}-4-4`)) &&
          d.key === 'isidore_of_seville_bishop'
        );
      });
      expect(date.length).toEqual(1);
    });
    test('However, in the national calendar of Spain, this same feast is celebrated on the 26th of April every year', () => {
      const date = spainDates.filter((d) => {
        return (
          dayjs.utc(d.date).isSame(dayjs.utc(`${year}-4-26`)) &&
          d.key === 'isidore_of_seville_bishop'
        );
      });
      expect(date.length).toEqual(1);
    });
    test('Therefore, national calendar of spain should only have one occurrence of this feast on the 26th of April', () => {
      const occurrences = spainDates.filter((d) => {
        return d.key === 'isidore_of_seville_bishop';
      });
      expect(occurrences.length).toEqual(1);
    });
  });

  describe('The feast of Epiphany', () => {
    test('Should always be celebrated on January 6 in Slovakia unless explicitly configured otherwise', async () => {
      const slovakiaDates = Object.values(
        await new Romcal({ localizedCalendar: Slovakia_Sk }).generateCalendar(),
      ).flat();
      const epiphanySlovakia = slovakiaDates.find((d) => {
        return d.key === 'epiphany';
      });
      // Should always be Jan 6th in Slovakia
      expect(dayjs.utc(epiphanySlovakia?.date).date()).toEqual(6);
      expect(dayjs.utc(epiphanySlovakia?.date).month()).toEqual(0);
    });
    test('Will fall on Sunday as calculated by the Epiphany rubric, when `epiphanyOnSunday` is explicitly configured as `true`', async () => {
      const slovakiaDates = Object.values(
        await new Romcal({
          localizedCalendar: Slovakia_Sk,
          epiphanyOnSunday: true,
        }).generateCalendar(2010),
      ).flat();
      const epiphanySlovakia = slovakiaDates.find((d) => {
        return d.key === 'epiphany';
      });
      expect(dayjs.utc(epiphanySlovakia?.date).day()).toEqual(0);
      expect(dayjs.utc(epiphanySlovakia?.date).month()).toEqual(0);
    });
  });

  describe('Testing the Feast of Saints Cyril and Methodius with locale specific settings', () => {
    test('Should fall on February 14, 2017 in the general calendar', async () => {
      const dates = Object.values(await new Romcal().generateCalendar(2017)).flat();
      const date = dates.find((d) => {
        return d.key === 'cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop';
      });
      expect(dayjs.utc(date?.date).isSame(dayjs.utc('2017-2-14'))).toBeTruthy();
    });
    test('Should fall on 5th July 2017 in the national calendar of the Czech Republic', async () => {
      const day = await new Romcal({ localizedCalendar: CzechRepublic_Cs }).getOneLiturgicalDay(
        'cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop',
        { year: 2017 },
      );
      expect(dayjs.utc(day?.date).isSame(dayjs.utc('2017-7-5'))).toBeTruthy();
    });
    test('Should fall on 5th July 2017 in the national calendar of Slovakia', async () => {
      const day = await new Romcal({ localizedCalendar: Slovakia_Sk }).getOneLiturgicalDay(
        'cyril_the_philosopher_monk_and_methodius_of_thessaloniki_bishop',
        { year: 2017 },
      );
      expect(dayjs.utc(day?.date).isSame(dayjs.utc('2017-7-5'))).toBeTruthy();
    });
  });

  describe('The feast of the Assumption in England and Wales', () => {
    describe('If the feast of the Assumption falls on Saturday on Monday', () => {
      test('It is transferred to Sunday', async () => {
        const wales2009Dates = Object.values(
          await new Romcal({ localizedCalendar: Wales_En }).generateCalendar(2009),
        ).flat();

        const england2009Dates = Object.values(
          await new Romcal({ localizedCalendar: England_En }).generateCalendar(2009),
        ).flat();

        const wales2011Dates = Object.values(
          await new Romcal({ localizedCalendar: Wales_En }).generateCalendar(2011),
        ).flat();

        const england2011Dates = Object.values(
          await new Romcal({ localizedCalendar: England_En }).generateCalendar(2011),
        ).flat();

        const lateOrdinaryTimeDates2009: LiturgicalDay[] = Object.values(
          await new Romcal().generateCalendar(2009),
        )
          .flat()
          .filter((d) => d.periods.includes(LiturgicalPeriods.LATE_ORDINARY_TIME));
        const lateOrdinaryTimeDates2011: LiturgicalDay[] = Object.values(
          await new Romcal().generateCalendar(2011),
        )
          .flat()
          .filter((d) => d.periods.includes(LiturgicalPeriods.LATE_ORDINARY_TIME));

        const twentiethSundayOfOrdinaryTime2009 = lateOrdinaryTimeDates2009.find((d) => {
          return d.key === 'ordinary_time_20_sunday';
        });

        const twentiethSundayOfOrdinaryTime2011 = lateOrdinaryTimeDates2011.find((d) => {
          return d.key === 'ordinary_time_20_sunday';
        });

        const walesAssumption2009 = wales2009Dates.find((d) => {
          return d.key === 'assumption';
        });

        const englandAssumption2009 = england2009Dates.find((d) => {
          return d.key === 'assumption';
        });

        const walesAssumption2011 = wales2011Dates.find((d) => {
          return d.key === 'assumption';
        });

        const englandAssumption2011 = england2011Dates.find((d) => {
          return d.key === 'assumption';
        });

        expect(
          walesAssumption2009 &&
            twentiethSundayOfOrdinaryTime2009 &&
            walesAssumption2009.date === twentiethSundayOfOrdinaryTime2009.date,
        ).toBeTruthy();
        expect(
          englandAssumption2009 &&
            twentiethSundayOfOrdinaryTime2009 &&
            englandAssumption2009.date === twentiethSundayOfOrdinaryTime2009.date,
        ).toBeTruthy();
        expect(
          walesAssumption2011 &&
            twentiethSundayOfOrdinaryTime2011 &&
            walesAssumption2011.date === twentiethSundayOfOrdinaryTime2011.date,
        ).toBeTruthy();
        expect(
          englandAssumption2011 &&
            twentiethSundayOfOrdinaryTime2011 &&
            englandAssumption2011.date === twentiethSundayOfOrdinaryTime2011.date,
        ).toBeTruthy();
      });
    });

    describe('If the feast of the Assumption falls on Sunday', () => {
      test('It replaces the 20th Sunday of OT', async () => {
        const twentiethSundayOfOrdinaryTime: LiturgicalDay = (
          await new Romcal().generateCalendar(2010)
        )['2010-08-15'][0];

        expect(twentiethSundayOfOrdinaryTime.key).toEqual('assumption');
      });
    });
  });

  describe('The feast of All Saints in England and Wales', () => {
    test('If All Saints is on Saturday, it will be moved to Sunday (the next day)', async () => {
      // In 2008, 1st of November was on a Saturday
      const englandDates = Object.values(
        await new Romcal({ localizedCalendar: England_En }).generateCalendar(2008),
      ).flat();
      const walesDates = Object.values(
        await new Romcal({ localizedCalendar: Wales_En }).generateCalendar(2008),
      ).flat();
      // So All Saints should be celebrated on Sunday
      const allSaintsEngland = englandDates.find((d) => {
        return d.key === 'all_saints';
      });
      const allSaintsWales = walesDates.find((d) => {
        return d.key === 'all_saints';
      });
      expect(dayjs.utc(allSaintsEngland?.date).day()).toEqual(0);
      expect(dayjs.utc(allSaintsWales?.date).day()).toEqual(0);
    });
  });

  describe('The feast of All Souls in England and Wales', () => {
    test('If All Saints is moved to Sunday, All Souls must be on Monday (the next day)', async () => {
      // In 2008, 1st of November was on a Saturday
      const englandDates = Object.values(
        await new Romcal({ localizedCalendar: England_En }).generateCalendar(2008),
      ).flat();
      const walesDates = Object.values(
        await new Romcal({ localizedCalendar: Wales_En }).generateCalendar(2008),
      ).flat();
      // So All Saints should be celebrated on Sunday
      // and All Souls will be celebrated on Monday
      const allSaintsEngland = englandDates.find((d) => {
        return d.key === 'all_souls';
      });
      const allSaintsWales = walesDates.find((d) => {
        return d.key === 'all_souls';
      });
      expect(dayjs.utc(allSaintsEngland?.date).day()).toEqual(1);
      expect(dayjs.utc(allSaintsWales?.date).day()).toEqual(1);
    });
  });

  describe('Saint Matthias the Apostle', () => {
    test('Feast day falls on the May 14 in the general liturgical calendar', async () => {
      const dates = Object.values(await new Romcal().generateCalendar(2018)).flat();
      const matthiasApostle = dates.find((d) => d.key === 'matthias_apostle');
      expect(dayjs.utc(matthiasApostle?.date).isSame(dayjs.utc('2018-5-14'))).toBeTruthy();
    });

    test('Feast day falls on the 24th of February in the national calendar of Germany and Hungary', async () => {
      const germanyDates = Object.values(
        await new Romcal({ localizedCalendar: Germany_En }).generateCalendar(2018),
      ).flat();
      const hungaryDates = Object.values(
        await new Romcal({ localizedCalendar: Hungary_En }).generateCalendar(2018),
      ).flat();

      const matthiasApostleGermany = germanyDates.find((d) => d.key === 'matthias_apostle');
      const matthiasApostleHungary = hungaryDates.find((d) => d.key === 'matthias_apostle');

      expect(dayjs.utc(matthiasApostleGermany?.date).isSame(dayjs.utc('2018-2-24'))).toBeTruthy();
      expect(dayjs.utc(matthiasApostleHungary?.date).isSame(dayjs.utc('2018-2-24'))).toBeTruthy();
    });

    test('Is a memorial in the German liturgical calendar on AD 2014', async () => {
      const germanyDates = Object.values(
        await new Romcal({ localizedCalendar: Germany_En }).generateCalendar(2014),
      ).flat();
      const matthiasApostleGermany = germanyDates.find((d) => d.key === 'matthias_apostle');
      expect(matthiasApostleGermany?.rank).toEqual(Ranks.MEMORIAL);
    });
  });

  describe('Saint Christopher Magallanes and Companions, Martyrs', () => {
    test('A memorial in Mexico but an optional memorial in the general calendar', async () => {
      const mexicoDates = Object.values(
        await new Romcal({ localizedCalendar: Mexico_Es }).generateCalendar(2019),
      ).flat();
      const dates = Object.values(await new Romcal().generateCalendar(2019)).flat();
      const christopherMagallanesPriestAndCompanionsMartyrs = dates.find(
        (d) => d.key === 'christopher_magallanes_priest_and_companions_martyrs',
      );
      const christopherMagallanesPriestAndCompanionsMartyrsMexico = mexicoDates.find(
        (d) => d.key === 'christopher_magallanes_priest_and_companions_martyrs',
      );
      expect(christopherMagallanesPriestAndCompanionsMartyrs?.precedence).toEqual(
        Precedences.OptionalMemorial_12,
      );
      expect(christopherMagallanesPriestAndCompanionsMartyrsMexico?.precedence).toEqual(
        Precedences.ProperMemorial_11b,
      );
    });
  });

  describe('Saint Ladislaus', () => {
    test('A feast in Hungary but an optional memorial in Slovakia', async () => {
      const hungaryDates = Object.values(
        await new Romcal({ localizedCalendar: Hungary_En }).generateCalendar(2018),
      ).flat();
      const slovakiaDates = Object.values(
        await new Romcal({ localizedCalendar: Slovakia_Sk }).generateCalendar(2018),
      ).flat();
      const ladislausIOfHungaryHungary = hungaryDates.find(
        (d) => d.key === 'ladislaus_i_of_hungary',
      );
      const ladislausIOfHungarySlovakia = slovakiaDates.find(
        (d) => d.key === 'ladislaus_i_of_hungary',
      );
      expect(ladislausIOfHungaryHungary?.precedence).toEqual(Precedences.ProperFeast_8f);
      expect(ladislausIOfHungarySlovakia?.precedence).toEqual(Precedences.OptionalMemorial_12);
    });
  });

  describe('Our Lady of Sorrows', () => {
    test('Should be celebrated on the September 15, 2018 as a memorial in the General Calendar', async () => {
      const dates = Object.values(await new Romcal().generateCalendar(2018)).flat();
      const ourLadyOfSorrows = dates.find((d) => {
        return d.key === 'our_lady_of_sorrows';
      });
      expect(ourLadyOfSorrows?.rank).toEqual(Ranks.MEMORIAL);
      expect(dayjs.utc(ourLadyOfSorrows?.date).isSame(dayjs.utc('2018-9-15'))).toBeTruthy();
    });

    test('Should be celebrated on the 15th of April 2015 as a feast in the national calendar of Malta', async () => {
      const maltaDates = Object.values(
        await new Romcal({ localizedCalendar: Malta_En }).generateCalendar(2015),
      ).flat();
      const ourLadyOfSorrows = maltaDates.find((d) => {
        return d.key === 'our_lady_of_sorrows';
      });
      expect(ourLadyOfSorrows?.rank).toEqual(Ranks.FEAST);
      expect(dayjs.utc(ourLadyOfSorrows?.date).isSame(dayjs.utc('2015-4-15'))).toBeTruthy();
    });

    test('Should be replaced by the 3rd Sunday of Easter in 2018 in the national calendar of Malta due to precedence', async () => {
      const maltaDates = Object.values(
        await new Romcal({ localizedCalendar: Malta_En }).generateCalendar(2018),
      ).flat();
      const ourLadyOfSorrows = dayjs.utc('2018-4-15');
      const thirdSundayOfEaster = maltaDates.find((d) => d.key === 'easter_time_3_sunday');
      expect(dayjs.utc(thirdSundayOfEaster!.date).isSame(ourLadyOfSorrows, 'day')).toBeTruthy();
    });

    test('Should be celebrated on the 15th of September 2018 as a solemnity in the national calendar of Slovakia', async () => {
      const slovakiaDates = Object.values(
        await new Romcal({ localizedCalendar: Slovakia_Sk }).generateCalendar(2018),
      ).flat();
      const ourLadyOfSorrowsPatronessOfSlovakia = slovakiaDates.find(
        (d) => d.key === 'our_lady_of_sorrows',
      );
      expect(ourLadyOfSorrowsPatronessOfSlovakia?.precedence).toEqual(
        Precedences.ProperSolemnity_PrincipalPatron_4a,
      );
      expect(ourLadyOfSorrowsPatronessOfSlovakia?.date === '2018-09-15').toBeTruthy();
    });
  });
});
