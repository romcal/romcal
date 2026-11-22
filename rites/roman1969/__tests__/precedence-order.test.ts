import { GeneralRoman_En } from '@dist/rite-roman1969/bundles/general-roman';
import { Romcal } from '@src/rite-roman1969';

import { type Bundle, idsOn } from './helpers/calendar';

const { Precedences } = Romcal;

const lordFeast = [{ dateDef: { month: 7, date: 10 }, precedence: Precedences.GeneralLordFeast_5 }];
const properFeast = [
  { allowSimilarRankItems: true, dateDef: { month: 7, date: 10 }, precedence: Precedences.ProperFeast_8f },
];

const withInputs = (inputs: Record<string, unknown[]>): Bundle =>
  ({ ...GeneralRoman_En, inputs: { ...GeneralRoman_En.inputs, ...inputs } }) as Bundle;

// UNLY no. 59: a feast of the Lord (no. 5) outranks an ordinary Sunday (no. 6), which outranks a proper feast (no. 8).
// Allowing similar rank items must not put the proper feast before the feast of the Lord, whatever the order in which
// the two definitions are given.
describe('A proper feast that allows similar rank items, on a Sunday where a feast of the Lord falls', () => {
  test.each([
    ['the feast of the Lord defined first', { lord_feast: lordFeast, proper_feast: properFeast }],
    ['the proper feast defined first', { proper_feast: properFeast, lord_feast: lordFeast }],
  ])('the feast of the Lord is the celebration of 10 July 2022 (%s)', async (_name, inputs) => {
    const [first] = await idsOn(withInputs(inputs), '2022-07-10');

    expect(first).toBe('lord_feast');
  });

  test('the Sunday and the proper feast are omitted, not kept beside it', async () => {
    expect(await idsOn(withInputs({ lord_feast: lordFeast, proper_feast: properFeast }), '2022-07-10')).toEqual([
      'lord_feast',
    ]);
  });
});
