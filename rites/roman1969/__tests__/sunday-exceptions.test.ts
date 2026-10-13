import { Australia_En } from '@dist/rite-roman1969/bundles/australia';
import { GeneralRoman_En } from '@dist/rite-roman1969/bundles/general-roman';
import { Ireland_En } from '@dist/rite-roman1969/bundles/ireland';
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

// St Patrick, the principal patron of Ireland, is kept on 17 March on a Sunday of Lent other than Palm Sunday.
// There is no standing indult published: the exception rests on the Irish bishops' statements (2019, 2024), on
// the report of Universalis on their request of 2019 to the Holy See, and on Aleteia (2024).
describe('St Patrick in Ireland (17 March)', () => {
  test.each([
    [2019, 'lent_2_sunday'],
    [2024, 'lent_5_sunday'],
    [2030, 'lent_2_sunday'],
    [2047, 'lent_3_sunday'],
  ])('is kept on 17 March, a Sunday of Lent: %i (%s)', async (year) => {
    const date = `${year}-03-17`;
    expect(await datesOf(Ireland_En, year, 'patrick_of_ireland_bishop')).toEqual([date]);
  });

  test('is not transferred to the following Monday, and the Sunday is not celebrated that day', async () => {
    expect(await idsOn(Ireland_En, '2024-03-18')).not.toContain('patrick_of_ireland_bishop');
    expect(await idsOn(Ireland_En, '2024-03-17')).not.toContain('lent_5_sunday');
  });

  test.each([
    [2025, 'a Monday'],
    [2026, 'a Tuesday'],
    [2027, 'a Wednesday'],
  ])('stays on 17 March in a year when it is not a Sunday: %i (%s)', async (year) => {
    const date = `${year}-03-17`;
    expect(await datesOf(Ireland_En, year, 'patrick_of_ireland_bishop')).toEqual([date]);
  });

  test('is not kept over Palm Sunday (17 March 1940)', async () => {
    expect((await idsOn(Ireland_En, '1940-03-17'))[0]).toBe('palm_sunday_of_the_passion_of_the_lord');
    expect(await datesOf(Ireland_En, 1940, 'patrick_of_ireland_bishop')).not.toContain('1940-03-17');
  });

  test('is a Sunday of Lent in the General Roman Calendar and elsewhere, where the general rule applies', async () => {
    expect((await idsOn(GeneralRoman_En, '2024-03-17'))[0]).toBe('lent_5_sunday');
    // Australia keeps the solemnity of St Patrick, which is transferred to the Monday.
    expect(await datesOf(Australia_En, 2024, 'patrick_of_ireland_bishop')).toEqual(['2024-03-18']);
  });
});
