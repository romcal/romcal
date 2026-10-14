import { England_En } from '@dist/rite-roman1969/bundles/england';
import { Philippines_En } from '@dist/rite-roman1969/bundles/philippines';
import { Poland_En } from '@dist/rite-roman1969/bundles/poland';
import { Romcal } from '@src/rite-roman1969';

import { annunciationOfTheLord, checkEveryYear, isoDate, josephSpouseOfMary } from './helpers/calendar';

const { addDays, getUtcDate, subtractsDays } = Romcal;

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

// St Pedro Calungsod (2 April, Philippines): when 2 April is a Sunday of Lent, in Holy Week or in the Octave
// of Easter, the memorial is transferred to the Saturday before Palm Sunday.
describe('The memorial of St Pedro Calungsod in the Philippines (2 April)', () => {
  test('is on 2 April, and on the Saturday before Palm Sunday when 2 April is a Sunday of Lent or from Palm Sunday to Divine Mercy Sunday', async () => {
    const cases = await checkEveryYear(
      Philippines_En,
      'pedro_calungsod_martyr',
      [1950, 2050],
      (year) => {
        const date = getUtcDate(year, 4, 2);
        const dates = new Romcal().dates(year);
        const palmSunday = dates.palmSunday();
        const saturday = isoDate(subtractsDays(palmSunday, 1));
        // The memorial is omitted on the day of St Joseph or of the Annunciation (UNLY no. 60).
        const solemnities = [josephSpouseOfMary(year).date, annunciationOfTheLord(year).date];
        const omittedOn = (on: string, name: string): { date: string | null; case: string } =>
          solemnities.includes(on) ? { date: null, case: 'the day of a solemnity' } : { date: on, case: name };
        if (date.getTime() >= palmSunday.getTime() && date.getTime() <= dates.divineMercySunday().getTime()) {
          return omittedOn(saturday, 'Holy Week or the Octave of Easter');
        }
        if (date.getTime() < palmSunday.getTime() && date.getUTCDay() === 0) {
          return omittedOn(saturday, 'Sunday of Lent');
        }
        return omittedOn(isoDate(date), 'unimpeded');
      },
      { celebrationOfTheDay: false }
    );
    expect(Object.keys(cases).sort()).toEqual([
      'Holy Week or the Octave of Easter',
      'Sunday of Lent',
      'the day of a solemnity',
      'unimpeded',
    ]);
  });
});
