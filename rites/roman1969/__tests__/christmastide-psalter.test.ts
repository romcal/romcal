import { CalendarScope, Romcal } from '@src/rite-roman1969';

import { liturgical, gregorian } from './fixtures/lh.kbs.sk.fixture';

const scopes: { fixture: Record<string, number | null>; year: number; scope: CalendarScope }[] = [
  {
    scope: 'liturgical',
    fixture: liturgical,
    year: 2025,
  },
  {
    scope: 'gregorian',
    fixture: gregorian,
    year: 2024,
  },
];

describe('Psalter weeks after Christmas', () => {
  scopes.forEach(({ scope, fixture, year }) => {
    test(`should match lh.kbs.sk (${scope})`, async () => {
      const romcal = await new Romcal({ scope }).generateCalendar(year);

      let results = [];

      for await (const date of Object.keys(romcal)) {
        const day0 = romcal[date][0];

        const dateParts = date.split('-').map(Number);
        const psalterWeekRomcal = +(/[0-9]+$/.exec(day0.cycles.psalterWeek)?.[0] ?? 0);
        const psalterWeekTemp = fixture[`${dateParts[0]}-${dateParts[1]}-${dateParts[2]}`];

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
});
