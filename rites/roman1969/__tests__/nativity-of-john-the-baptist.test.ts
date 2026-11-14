import { France_PerpignanElne_En } from '@dist/rite-roman1969/bundles/france.perpignan-elne';
import { GeneralRoman_En } from '@dist/rite-roman1969/bundles/general-roman';

import { datesOf } from './helpers/calendar';

// When the Sacred Heart of Jesus fell on 24 June 2022, the Congregation for Divine Worship and the Discipline of the
// Sacraments ruled (on the coincidences of the liturgical year 2021-2022, as published by the Italian Episcopal
// Conference: https://liturgico.chiesacattolica.it/calendario-liturgico-2021-2022coincidenze-particolari/) that the
// Sacred Heart is celebrated on 24 June and the Nativity of St John the Baptist on the day before, rather than on the
// day after. Where St John the Baptist is a patron, it is the other way round. The ruling was given for 2022 only;
// the library extrapolates it to the later coincidences (2033 and 2044).
describe('The Nativity of St John the Baptist when the Sacred Heart falls on 24 June', () => {
  test('is celebrated on 23 June, the Sacred Heart on 24 June', async () => {
    expect(await datesOf(GeneralRoman_En, 2022, 'most_sacred_heart_of_jesus')).toEqual(['2022-06-24']);
    expect(await datesOf(GeneralRoman_En, 2022, 'nativity_of_john_the_baptist')).toEqual(['2022-06-23']);
  });

  test.each([2033, 2044])('applies in %i too', async (year) => {
    expect(await datesOf(GeneralRoman_En, year, 'nativity_of_john_the_baptist')).toEqual([`${year}-06-23`]);
  });

  test('leaves the Immaculate Heart of Mary on 25 June', async () => {
    expect(await datesOf(GeneralRoman_En, 2022, 'immaculate_heart_of_mary')).toEqual(['2022-06-25']);
  });

  test('stays on 24 June in the other years', async () => {
    expect(await datesOf(GeneralRoman_En, 2024, 'nativity_of_john_the_baptist')).toEqual(['2024-06-24']);
  });

  test('is celebrated on 24 June where St John the Baptist is the patron, the Sacred Heart on 23 June', async () => {
    expect(await datesOf(France_PerpignanElne_En, 2022, 'nativity_of_john_the_baptist')).toEqual(['2022-06-24']);
    expect(await datesOf(France_PerpignanElne_En, 2022, 'most_sacred_heart_of_jesus')).toEqual(['2022-06-23']);
  });
});
