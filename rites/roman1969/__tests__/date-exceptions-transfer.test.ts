import { England_En } from '@dist/rite-roman1969/bundles/england';
import { Poland_En } from '@dist/rite-roman1969/bundles/poland';
import { Romcal } from '@src/rite-roman1969';

import { checkEveryYear, isoDate } from './helpers/calendar';

const { addDays, getUtcDate } = Romcal;

// The Solemnity of the principal patron of Poland and England falls on 23 April. When it falls between
// Palm Sunday and Divine Mercy Sunday (inclusive) it is transferred to the Monday after Divine Mercy Sunday,
// and on another Sunday of Easter to the following Monday.
describe.each([
  ['Poland', Poland_En, 'adalbert_of_prague_bishop'],
  ['England', England_En, 'george_of_lydda_martyr'],
])('The patron solemnity of %s (23 April)', (_country, bundle, id) => {
  test('is on 23 April, on the Monday after Divine Mercy Sunday from Palm Sunday to Divine Mercy Sunday, and on Monday 24 April on a Sunday of Easter', async () => {
    const cases = await checkEveryYear(
      bundle,
      id,
      [1950, 2050],
      (year) => {
        const date = getUtcDate(year, 4, 23);
        const dates = new Romcal().dates(year);
        const divineMercySunday = dates.divineMercySunday();
        if (date.getTime() >= dates.palmSunday().getTime() && date.getTime() <= divineMercySunday.getTime()) {
          return { date: isoDate(addDays(divineMercySunday, 1)), case: 'Holy Week or the Octave of Easter' };
        }
        if (date.getUTCDay() === 0) return { date: isoDate(addDays(date, 1)), case: 'Sunday of Easter' };
        return { date: isoDate(date), case: 'unimpeded' };
      },
      { celebrationOfTheDay: true }
    );
    expect(Object.keys(cases).sort()).toEqual(['Holy Week or the Octave of Easter', 'Sunday of Easter', 'unimpeded']);
  });
});
