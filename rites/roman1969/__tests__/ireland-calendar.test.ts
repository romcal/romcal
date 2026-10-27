import { Ireland_En } from '@dist/rite-roman1969/bundles/ireland';
import { Romcal } from '@src/rite-roman1969';

describe('Ireland calendar', () => {
  test('keeps the Ascension and Corpus Christi on Sunday, and the national celebrations of 2026', async () => {
    const calendar = await new Romcal({ localizedCalendar: Ireland_En }).generateCalendar(2026);
    const find = (id: string) =>
      Object.entries(calendar)
        .map(([date, days]) => ({ date, day: days.find((day) => day.id === id) }))
        .find(({ day }) => day);
    const dateOf = (id: string) => find(id)?.date;

    expect(dateOf('epiphany_of_the_lord')).toBe('2026-01-06');
    expect(dateOf('ascension_of_the_lord')).toBe('2026-05-17');
    expect(dateOf('most_holy_body_and_blood_of_christ')).toBe('2026-06-07');

    expect(find('patrick_of_ireland_bishop')?.day?.rank).toBe('SOLEMNITY');
    expect(find('columba_of_iona_abbot')?.day?.rank).toBe('FEAST');
    expect(find('all_saints_of_ireland')?.day?.rank).toBe('FEAST');
    expect(find('our_lady_of_knock')?.day?.rank).toBe('MEMORIAL');

    expect(dateOf('kevin_of_glendalough_abbot')).toBe('2026-06-03');
    expect(dateOf('charles_lwanga_and_companions_martyrs')).toBe('2026-06-04');
    expect(dateOf('ephrem_the_syrian_deacon')).toBe('2026-06-10');
    expect(dateOf('peter_claver_priest')).toBe('2026-09-10');
    expect(dateOf('martin_de_porres_religious')).toBe('2026-11-05');
    expect(dateOf('clement_i_pope')).toBe('2026-11-25');
  });

  test('keeps Saint Brigid as a feast on 1 February', async () => {
    const calendar = await new Romcal({ localizedCalendar: Ireland_En }).generateCalendar(2027);
    const brigid = calendar['2027-02-01'].find((day) => day.id === 'brigid_of_kildare_virgin');

    expect(brigid?.rank).toBe('FEAST');
    expect(brigid?.name).toBe('Saint Brigid of Kildare, Abbess, Copatroness of Ireland');
  });
});
