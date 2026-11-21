import { England_En } from '@dist/rite-roman1969/bundles/england';
import { GeneralRoman_En } from '@dist/rite-roman1969/bundles/general-roman';

import { generate, idsOn } from './helpers/calendar';

// A date is resolved again when it receives a transferred day. The days of that date are shared with the previous
// resolution, which marked a memorial under a weekday as optional: that mark must not outlive the resolution.
describe('A date that receives a transferred solemnity', () => {
  test('omits the optional memorial that the weekday had kept before the transfer', async () => {
    // 23 June 2022 is a Thursday of Ordinary Time, where St Etheldreda (England) is an optional memorial. The Nativity
    // of St John the Baptist is anticipated to it, as the Sacred Heart falls on 24 June.
    expect(await idsOn(England_En, '2022-06-23')).toEqual(['nativity_of_john_the_baptist']);
  });

  test('keeps the optional memorial on the weekday that did not receive a transfer', async () => {
    expect(await idsOn(GeneralRoman_En, '2022-06-22')).toEqual([
      'ordinary_time_12_wednesday',
      'paulinus_of_nola_bishop',
      'john_fisher_bishop_and_thomas_more_martyrs',
    ]);
  });

  test('does not leave the optional mark on the memorial in the calendar', async () => {
    const calendar = await generate(England_En, 2022);

    expect(calendar['2022-06-23'].filter((d) => d.isOptional)).toEqual([]);
  });

  test('leaves the days of the neighbouring dates as they are in the General Roman Calendar', async () => {
    expect(await idsOn(GeneralRoman_En, '2022-06-24')).toEqual(['most_sacred_heart_of_jesus']);
    expect(await idsOn(GeneralRoman_En, '2022-06-25')).toEqual(['immaculate_heart_of_mary']);
  });
});
