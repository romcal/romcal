import { Belgium_En } from '@dist/rite-roman1969/bundles/belgium';
import { Romcal } from '@src/rite-roman1969';

describe('Belgium calendar', () => {
  test('uses the Belgian list of holy days of obligation', async () => {
    const calendar = Object.values(await new Romcal({ localizedCalendar: Belgium_En }).generateCalendar(2021)).flat();
    const isHolyDayOfObligation = (id: string) => calendar.find((day) => day.id === id)?.isHolyDayOfObligation;

    const suppressedObligations = [
      'mary_mother_of_god',
      'joseph_spouse_of_mary',
      'peter_and_paul_apostles',
      'immaculate_conception_of_the_blessed_virgin_mary',
    ];
    const belgianObligations = [
      'nativity_of_the_lord',
      'ascension_of_the_lord',
      'assumption_of_the_blessed_virgin_mary',
      'all_saints',
    ];

    expect(suppressedObligations.map(isHolyDayOfObligation)).toEqual([false, false, false, false]);
    expect(belgianObligations.map(isHolyDayOfObligation)).toEqual([true, true, true, true]);
  });
});
