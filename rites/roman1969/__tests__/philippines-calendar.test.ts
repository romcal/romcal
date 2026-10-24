import { Philippines_En } from '@dist/rite-roman1969/bundles/philippines';
import { Romcal } from '@src/rite-roman1969';

describe('Philippines calendar', () => {
  test('keeps the Epiphany, the Ascension and Corpus Christi on Sunday, and the national feasts of 2026', async () => {
    const calendar = await new Romcal({ localizedCalendar: Philippines_En }).generateCalendar(2026);
    const dateOf = (id: string) =>
      Object.entries(calendar).find(([, days]) => days.some((day) => day.id === id && !day.isOptional))?.[0];

    expect(dateOf('epiphany_of_the_lord')).toBe('2026-01-04');
    expect(dateOf('ascension_of_the_lord')).toBe('2026-05-17');
    expect(dateOf('most_holy_body_and_blood_of_christ')).toBe('2026-06-07');

    expect(dateOf('our_lord_jesus_christ_senor_jesus_nazareno')).toBe('2026-01-09');
    expect(dateOf('our_lord_jesus_christ_the_eternal_high_priest')).toBe('2026-05-28');
    expect(dateOf('lawrence_ruiz_and_companions_martyrs')).toBe('2026-09-28');
    expect(dateOf('pedro_calungsod_martyr')).toBe('2026-10-21');
  });
});
