import { Australia_En } from '@dist/rite-roman1969/bundles/australia';
import { Romcal } from '@src/rite-roman1969';

const generate = (year: number) => new Romcal({ localizedCalendar: Australia_En }).generateCalendar(year);

const finder = (calendar: Awaited<ReturnType<typeof generate>>) => (id: string) =>
  Object.entries(calendar)
    .map(([date, days]) => ({ date, day: days.find((day) => day.id === id) }))
    .find(({ day }) => day);

describe('Australia calendar', () => {
  test('keeps the Epiphany, the Ascension and the Body and Blood of Christ on Sunday', async () => {
    const ids = ['epiphany_of_the_lord', 'ascension_of_the_lord', 'most_holy_body_and_blood_of_christ'];
    const dates = async (year: number) => {
      const find = finder(await generate(year));
      return ids.map((id) => find(id)?.date);
    };

    expect(await dates(2025)).toEqual(['2025-01-05', '2025-06-01', '2025-06-22']);
    expect(await dates(2026)).toEqual(['2026-01-04', '2026-05-17', '2026-06-07']);
    expect(await dates(2027)).toEqual(['2027-01-03', '2027-05-09', '2027-05-30']);
    expect(await dates(2029)).toEqual(['2029-01-07', '2029-05-13', '2029-06-03']);

    // The Epiphany on 7 January 2029 moves the Baptism of the Lord to Monday 8 January.
    expect(finder(await generate(2029))('baptism_of_the_lord')?.date).toBe('2029-01-08');
  });

  test('transfers Our Lady Help of Christians to the Monday when 24 May is a Sunday', async () => {
    expect(finder(await generate(2027))('our_lady_help_of_christians')).toMatchObject({
      date: '2027-05-24',
      day: { rank: 'SOLEMNITY' },
    });

    // 24 May 2026 is Pentecost.
    expect(finder(await generate(2026))('our_lady_help_of_christians')).toMatchObject({
      date: '2026-05-25',
      day: { rank: 'SOLEMNITY' },
    });
  });

  test('keeps Saint Mary of the Cross as a solemnity, even on a Sunday, and Saint Dominic on 3 August', async () => {
    const find2026 = finder(await generate(2026));
    expect(find2026('mary_of_the_cross_mackillop_virgin')).toMatchObject({
      date: '2026-08-08',
      day: { rank: 'SOLEMNITY' },
    });
    expect(find2026('dominic_de_guzman_priest')).toMatchObject({ date: '2026-08-03', day: { rank: 'MEMORIAL' } });

    // 8 August 2027 is a Sunday in Ordinary Time.
    expect(finder(await generate(2027))('mary_of_the_cross_mackillop_virgin')).toMatchObject({
      date: '2027-08-08',
      day: { rank: 'SOLEMNITY' },
    });

    // 3 August 2025 is a Sunday in Ordinary Time.
    expect(finder(await generate(2025))('dominic_de_guzman_priest')).toBeUndefined();
  });

  test('keeps Saints Timothy and Titus on 27 January, and not Our Lord Jesus Christ the Eternal High Priest', async () => {
    const find2026 = finder(await generate(2026));
    expect(find2026('timothy_of_ephesus_and_titus_of_crete_bishops')).toMatchObject({
      date: '2026-01-27',
      day: { rank: 'OPTIONAL_MEMORIAL' },
    });
    expect(find2026('our_lord_jesus_christ_the_eternal_high_priest')).toBeUndefined();
  });
});
