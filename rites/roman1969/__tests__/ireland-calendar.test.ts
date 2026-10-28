import { Ireland_En, Ireland_EnIe } from '@dist/rite-roman1969/bundles/ireland';
import { Romcal } from '@src/rite-roman1969';

const generate = (year: number) => new Romcal({ localizedCalendar: Ireland_En }).generateCalendar(year);

const finder = (calendar: Awaited<ReturnType<typeof generate>>) => (id: string) =>
  Object.entries(calendar)
    .map(([date, days]) => ({ date, day: days.find((day) => day.id === id) }))
    .find(({ day }) => day);

describe('Ireland calendar', () => {
  test('keeps Saint Kevin on 3 June and Saint Charles Lwanga on 4 June', async () => {
    expect(finder(await generate(2026))('kevin_of_glendalough_abbot')?.date).toBe('2026-06-03');
    expect(finder(await generate(2029))('charles_lwanga_and_companions_martyrs')?.date).toBe('2029-06-04');

    // 4 June 2027 is the Most Sacred Heart of Jesus, which impedes Saint Charles Lwanga.
    const find2027 = finder(await generate(2027));
    expect(find2027('kevin_of_glendalough_abbot')?.date).toBe('2027-06-03');
    expect(find2027('most_sacred_heart_of_jesus')?.date).toBe('2027-06-04');
    expect(find2027('charles_lwanga_and_companions_martyrs')).toBeUndefined();
  });

  test('ranks the patrons of Ireland, and omits their feasts when they fall on a Sunday', async () => {
    const find2027 = finder(await generate(2027));
    expect(find2027('brigid_of_kildare_virgin')).toMatchObject({ date: '2027-02-01', day: { rank: 'FEAST' } });
    expect(find2027('patrick_of_ireland_bishop')).toMatchObject({ date: '2027-03-17', day: { rank: 'SOLEMNITY' } });
    expect(find2027('columba_of_iona_abbot')).toMatchObject({ date: '2027-06-09', day: { rank: 'FEAST' } });
    expect(find2027('all_saints_of_ireland')).toMatchObject({ date: '2027-11-06', day: { rank: 'FEAST' } });

    // 1 February 2026 and 9 June 2024 are Sundays in Ordinary Time.
    expect(finder(await generate(2026))('brigid_of_kildare_virgin')).toBeUndefined();
    expect(finder(await generate(2024))('columba_of_iona_abbot')).toBeUndefined();
  });

  test('uses the titles of the National Proper for Ireland in en-ie', async () => {
    const calendar = await new Romcal({ localizedCalendar: Ireland_EnIe }).generateCalendar(2027);
    const nameOf = (id: string) => finder(calendar)(id)?.day?.name;

    expect(nameOf('brigid_of_kildare_virgin')).toBe('Saint Brigid, Abbess, Copatroness of Ireland');
    expect(nameOf('oliver_plunket_bishop')).toBe('Saint Oliver Plunkett, Bishop and Martyr');
    expect(nameOf('virgilius_of_salzburg_bishop')).toBe('Saint Fergal, Bishop and Missionary');
  });
});
