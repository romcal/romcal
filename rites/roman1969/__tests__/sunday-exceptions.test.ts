import { GeneralRoman_En } from '@dist/rite-roman1969/bundles/general-roman';
import { Mexico_En } from '@dist/rite-roman1969/bundles/mexico';

import { datesOf, idsOn } from './helpers/calendar';

// A solemnity that a calendar keeps on its date over the Sunday that would impede it (UNLY no. 5), by an
// indult of the Holy See.
describe('Our Lady of Guadalupe in Mexico (12 December)', () => {
  // The Congregation for Divine Worship authorised the Mexican Episcopal Conference on 17 January 2013 to keep
  // it on a Sunday of Advent "en todos los años en que acontezca esta coincidencia" (Desde la Fe, 2021).
  test.each([
    [2021, 'the 3rd Sunday of Advent'],
    [2027, 'the 3rd Sunday of Advent'],
    [2032, 'the 3rd Sunday of Advent'],
  ])('is kept on 12 December, a Sunday of Advent: %i (%s)', async (year) => {
    const date = `${year}-12-12`;
    expect(await datesOf(Mexico_En, year, 'our_lady_of_guadalupe')).toEqual([date]);
  });

  test('is not transferred to the following Monday, and the Sunday is not celebrated that day', async () => {
    expect(await idsOn(Mexico_En, '2021-12-13')).not.toContain('our_lady_of_guadalupe');
    expect(await idsOn(Mexico_En, '2021-12-12')).not.toContain('advent_3_sunday');
  });

  test.each([
    [2022, 'a Monday'],
    [2023, 'a Tuesday'],
    [2024, 'a Thursday'],
  ])('stays on 12 December in a year when it is not a Sunday: %i (%s)', async (year) => {
    const date = `${year}-12-12`;
    expect(await datesOf(Mexico_En, year, 'our_lady_of_guadalupe')).toEqual([date]);
  });

  test('does not outrank the Sunday of Advent in the General Roman Calendar', async () => {
    // An optional memorial there: the Sunday is the celebration of the day.
    expect((await idsOn(GeneralRoman_En, '2021-12-12'))[0]).toBe('advent_3_sunday');
  });
});
