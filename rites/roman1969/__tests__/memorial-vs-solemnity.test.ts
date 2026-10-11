import { GeneralRoman_En } from '@dist/rite-roman1969/bundles/general-roman';
import { LiturgicalDay, Romcal } from '@src/rite-roman1969';

// A memorial never takes precedence over a solemnity (UNLY #59: the memorials are no. 10 to 12,
// the solemnities no. 3 and 4), even a memorial that allows similar rank items.
describe('A memorial and a solemnity occurring on the same day', () => {
  test('Peter and Paul (29 June 2019) is celebrated, the Immaculate Heart of Mary is omitted that year', async () => {
    const calendar = (await new Romcal({ localizedCalendar: GeneralRoman_En }).generateCalendar(2019)) as Record<
      string,
      LiturgicalDay[]
    >;
    expect(calendar['2019-06-29'].map((d) => d.id)).toEqual(['peter_and_paul_apostles']);
    expect(
      Object.values(calendar)
        .flat()
        .some((d) => d.id === 'immaculate_heart_of_mary')
    ).toBe(false);
  });
});
