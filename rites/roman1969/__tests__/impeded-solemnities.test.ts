import { Australia_En } from '@dist/rite-roman1969/bundles/australia';
import { England_En } from '@dist/rite-roman1969/bundles/england';
import { GeneralRoman_En } from '@dist/rite-roman1969/bundles/general-roman';
import { Ireland_En } from '@dist/rite-roman1969/bundles/ireland';
import { Mexico_En } from '@dist/rite-roman1969/bundles/mexico';
import { Poland_En } from '@dist/rite-roman1969/bundles/poland';
import { Romcal } from '@src/rite-roman1969';

import { type Bundle, datesOf, generate, idsOn } from './helpers/calendar';

const { Precedences, Ranks } = Romcal;

/**
 * Create a calendar from an existing one, with additional liturgical days.
 */
const withInputs = (bundle: Bundle, inputs: Record<string, unknown[]>): Bundle =>
  ({ ...bundle, inputs: { ...bundle.inputs, ...inputs } }) as Bundle;

const solemnity = (month: number, date: number, extra: Record<string, unknown> = {}): unknown[] => [
  { dateDef: { month, date }, precedence: Precedences.GeneralSolemnity_3, ...extra },
];

// UNLY #60: a solemnity impeded by a liturgical day that takes precedence over it is transferred
// to the closest day not listed in nos. 1-8 of the table of precedence. Other celebrations are omitted.
describe('Solemnities impeded by a liturgical day that takes precedence over them', () => {
  describe('on a Sunday of Easter Time', () => {
    test.each([
      ['Poland', Poland_En, 'adalbert_of_prague_bishop'],
      ['England', England_En, 'george_of_lydda_martyr'],
    ])('the patron solemnity of %s is transferred to the following Monday', async (_country, bundle, id) => {
      // 23 April 2023 is a Sunday of Easter.
      expect(await datesOf(bundle, 2023, id)).toEqual(['2023-04-24']);
    });
  });

  describe('by another solemnity', () => {
    test('the Nativity of John the Baptist (24 June 2022, the Sacred Heart) is transferred to the closest following day', async () => {
      expect(await datesOf(GeneralRoman_En, 2022, 'most_sacred_heart_of_jesus')).toEqual(['2022-06-24']);
      expect(await datesOf(GeneralRoman_En, 2022, 'nativity_of_john_the_baptist')).toEqual(['2022-06-25']);
    });

    test('the memorial of the day is omitted that year', async () => {
      expect(await idsOn(GeneralRoman_En, '2022-06-25')).toEqual(['nativity_of_john_the_baptist']);
      expect(await datesOf(GeneralRoman_En, 2022, 'immaculate_heart_of_mary')).toEqual([]);
    });
  });

  describe('in all years', () => {
    test.each([
      ['General Roman', GeneralRoman_En, ['joseph_spouse_of_mary']],
      ['Poland', Poland_En, ['our_lady_queen_of_poland']],
      ['England', England_En, ['george_of_lydda_martyr']],
      ['Ireland', Ireland_En, ['patrick_of_ireland_bishop', 'joseph_spouse_of_mary']],
      ['Mexico', Mexico_En, ['our_lady_of_guadalupe']],
      ['Australia', Australia_En, ['patrick_of_ireland_bishop']],
    ])(
      'every solemnity of the %s calendar is the celebration of the day exactly once, from 1990 to 2060',
      async (_name, bundle, controls) => {
        type Inputs = [string, { precedence?: string; isOptional?: boolean }[]][];
        const solemnityIds = (Object.entries(bundle.inputs) as Inputs)
          // Optional solemnities (e.g. the dedication of consecrated churches) are not concerned.
          .filter(([, defs]) => defs.some((d) => String(d.precedence).includes('SOLEMNITY') && !d.isOptional))
          .map(([id]) => id);
        expect(solemnityIds).toEqual(expect.arrayContaining(controls));

        const problems: string[] = [];
        for (let year = 1990; year <= 2060; year += 1) {
          const calendar = Object.entries(await generate(bundle, year));
          for (const id of solemnityIds) {
            const found = calendar.flatMap(([date, days]) =>
              days.flatMap((d, index) => (d.id === id ? [{ date, index, rank: d.rank }] : []))
            );
            if (found.length !== 1 || found[0].rank !== Ranks.Solemnity || found[0].index !== 0) {
              problems.push(`${year} ${id}: ${JSON.stringify(found)}`);
            }
          }
        }
        expect(problems).toEqual([]);
      }
    );
  });

  describe('Holy Week', () => {
    test('a solemnity is transferred to the Monday after Divine Mercy Sunday, the Easter Octave being impeded too', async () => {
      const bundle = withInputs(GeneralRoman_En, { solemnity_a: solemnity(4, 16) });
      expect(await datesOf(bundle, 2025, 'solemnity_a')).toEqual(['2025-04-28']);
    });
  });

  describe('transfers on a custom calendar', () => {
    // Easter 2025 is on 20 April: the Octave of Easter lasts until Divine Mercy Sunday (27 April).
    test('several impeded solemnities are transferred in date order', async () => {
      const bundle = withInputs(GeneralRoman_En, { solemnity_a: solemnity(4, 22), solemnity_b: solemnity(4, 21) });
      expect(await datesOf(bundle, 2025, 'solemnity_b')).toEqual(['2025-04-28']);
      expect(await datesOf(bundle, 2025, 'solemnity_a')).toEqual(['2025-04-29']);
    });

    test('a feast is omitted, not transferred', async () => {
      const bundle = withInputs(GeneralRoman_En, {
        feast_a: [{ dateDef: { month: 4, date: 22 }, precedence: Precedences.GeneralFeast_7 }],
      });
      expect(await datesOf(bundle, 2025, 'feast_a')).toEqual([]);
    });
  });
});
