import { England_En } from '@dist/rite-roman1969/bundles/england';
import { Poland_En } from '@dist/rite-roman1969/bundles/poland';
import { Romcal } from '@src/rite-roman1969';

import { datesOf, generate, idsOn, isoDate } from './helpers/calendar';

const { addDays, getUtcDate, Ranks } = Romcal;

// The Solemnity of the principal patron of Poland and England falls on 23 April. When it falls between
// Palm Sunday and Divine Mercy Sunday (inclusive) it is transferred to the Monday after Divine Mercy Sunday,
// and on another Sunday of Easter to the following Monday.
describe.each([
  ['Poland', Poland_En, 'adalbert_of_prague_bishop'],
  ['England', England_En, 'george_of_lydda_martyr'],
])('The patron solemnity of %s (23 April)', (_country, bundle, id) => {
  test('is on 23 April when unimpeded, and on Monday 24 April on a Sunday of Easter', async () => {
    const problems: string[] = [];
    const cases = new Set<string>();
    for (let year = 1950; year <= 2050; year += 1) {
      const date = getUtcDate(year, 4, 23);
      const dates = new Romcal().dates(year);
      // Where it goes in Holy Week and the Octave of Easter is checked below.
      const inHolyWeekOrOctave =
        date.getTime() >= dates.palmSunday().getTime() && date.getTime() <= dates.divineMercySunday().getTime();
      if (inHolyWeekOrOctave) continue;

      const sunday = date.getUTCDay() === 0;
      const expected = isoDate(sunday ? addDays(date, 1) : date);
      cases.add(sunday ? 'Sunday of Easter' : 'unimpeded');
      const found = await datesOf(bundle, year, id);
      if (found.length !== 1 || found[0] !== expected || (await idsOn(bundle, expected))[0] !== id) {
        problems.push(`${year}: ${found.join()} instead of ${expected}`);
      }
    }
    expect(problems).toEqual([]);
    expect([...cases].sort()).toEqual(['Sunday of Easter', 'unimpeded']);
  });

  // The Monday after Divine Mercy Sunday is the first candidate. When it holds a day listed in nos. 1-8 of the table
  // of precedence (a feast, a solemnity), that day rules out the transfer (UNLY no. 60) and the solemnity goes to the
  // next day that is available.
  test('is on the first day from the Monday after Divine Mercy Sunday that holds no feast or solemnity', async () => {
    const problems: string[] = [];
    for (let year = 1950; year <= 2050; year += 1) {
      const dates = new Romcal().dates(year);
      const date = getUtcDate(year, 4, 23);
      const holyWeekOrOctave =
        date.getTime() >= dates.palmSunday().getTime() && date.getTime() <= dates.divineMercySunday().getTime();
      if (!holyWeekOrOctave) continue;

      const calendar = await generate(bundle, year);
      const found = await datesOf(bundle, year, id);
      const first = isoDate(addDays(dates.divineMercySunday(), 1));
      const expected = Object.keys(calendar)
        .filter((d) => d >= first)
        .find((d) => {
          const [celebration] = calendar[d];
          return celebration.id === id || ![Ranks.Feast, Ranks.Solemnity, Ranks.Sunday].includes(celebration.rank);
        });
      if (found.length !== 1 || found[0] !== expected) problems.push(`${year}: ${found.join()} instead of ${expected}`);
    }
    expect(problems).toEqual([]);
  });
});

describe('The patron solemnity of England (23 April) when the Monday after Divine Mercy Sunday is not available', () => {
  test.each([
    // The Liturgy Office: the feast of St Catherine of Siena, patron of Europe, rules out Monday 29 April 2019.
    [2019, '2019-04-29', 'catherine_of_siena_virgin', '2019-04-30'],
    // The 2022 Ordo (p. 2): the feast of St Mark rules out Monday 25 April 2022.
    [2022, '2022-04-25', 'mark_evangelist', '2022-04-26'],
  ])('in %i, St George is not on %s, where %s is kept, but on %s', async (year, monday, kept, expected) => {
    expect(await datesOf(England_En, year, 'george_of_lydda_martyr')).toEqual([expected]);
    expect((await idsOn(England_En, monday))[0]).toBe(kept);
  });
});
