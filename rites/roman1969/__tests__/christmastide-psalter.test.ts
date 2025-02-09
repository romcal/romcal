import { LiturgicalCalendar, Romcal } from '@src/rite-roman1969';

import { cache } from './fixtures/lh.kbs.sk.fixture';

describe('Psalter weeks after Christmas', () => {
  let romcal: LiturgicalCalendar;

  beforeAll(async () => {
    romcal = await new Romcal({ scope: 'liturgical' }).generateCalendar(2025);
  }, 1000000);
  test('Psalter weeks after Christmas should match lh.kbs.sk', async () => {
    let results = [];

    // eslint-disable-next-line no-restricted-syntax
    for await (const date of Object.keys(romcal)) {
      const day0 = romcal[date][0];

      const dateParts = date.split('-').map(Number);
      const psalterWeekRomcal = +(/[0-9]+$/.exec(day0.cycles.psalterWeek)?.[0] ?? 0);
      const psalterWeekTemp = cache[`${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`];

      results.push({
        date,
        id: day0.id,
        psalterWeekRomcal,
        psalterWeekTemp,
        result: psalterWeekTemp === psalterWeekRomcal,
      });
    }

    results = results
      .filter(
        (i) =>
          // Results with not matching psalter week numbers
          !i.result &&
          // Exclude results where there is no psalter week on breviar.sk (those should be using Proper, therefore, no psalter week should be actually used)
          i.psalterWeekTemp !== null
      )
      .sort((a, b) => new Date(a.date).valueOf() - new Date(b.date).valueOf());

    expect(results?.length).toEqual(0);
  });
});
