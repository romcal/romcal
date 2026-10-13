import { OccurrenceInput, OccurrenceOutcome, Rite, registerRite } from '@internal/generator';
import { LiturgicalCalendar, Romcal, Roman1969Rite, Roman1969Vocabulary, Unly1969Rubrics } from '@src/rite-roman1969';

type Policy = (input: OccurrenceInput<Roman1969Vocabulary>) => OccurrenceOutcome<Roman1969Vocabulary>;

/** The 1969 rite, with one celebration moved from `from` to `to` before the 1969 policy runs. */
const riteTransferring = (id: string, from: string, to: string): Rite<Roman1969Vocabulary> => {
  const resolveOccurrences: Policy = (input) => {
    const moved = input.date === from ? input.days.find((d) => d.id === id) : undefined;
    if (!moved) return Unly1969Rubrics.resolveOccurrences(input);

    const { onDate } = Unly1969Rubrics.resolveOccurrences({ ...input, days: input.days.filter((d) => d !== moved) });
    return { onDate, transfers: [{ date: to, day: moved }] };
  };

  return { ...Roman1969Rite, rubrics: { ...Unly1969Rubrics, resolveOccurrences } };
};

describe('Occurrence transfers', () => {
  afterEach(() => {
    registerRite(Roman1969Rite);
  });

  test('a transferred solemnity takes part in the resolution of its destination', async () => {
    registerRite(riteTransferring('joseph_spouse_of_mary', '2021-03-19', '2021-03-20'));

    const calendar = (await new Romcal().generateCalendar(2021)) as LiturgicalCalendar;

    expect(calendar['2021-03-19'].map((d) => d.id)).not.toContain('joseph_spouse_of_mary');
    expect(calendar['2021-03-20'][0].id).toBe('joseph_spouse_of_mary');
  });

  test('a transferred day has the date, and the calendar metadata, of its destination', async () => {
    registerRite(riteTransferring('joseph_spouse_of_mary', '2021-03-19', '2021-03-20'));

    const calendar = (await new Romcal().generateCalendar(2021)) as LiturgicalCalendar;
    const [day] = calendar['2021-03-20'];

    // 19 March 2021 is a Friday, 20 March 2021 a Saturday.
    expect(day.date).toBe('2021-03-20');
    expect(day.calendar.dayOfWeek).toBe(6);
  });

  test('a transfer onto an earlier date is resolved again with the transferred day', async () => {
    registerRite(riteTransferring('joseph_spouse_of_mary', '2021-03-19', '2021-03-18'));

    const calendar = (await new Romcal().generateCalendar(2021)) as LiturgicalCalendar;
    const [day] = calendar['2021-03-18'];

    expect(calendar['2021-03-19'].map((d) => d.id)).not.toContain('joseph_spouse_of_mary');
    expect(day.id).toBe('joseph_spouse_of_mary');
    expect(day.date).toBe('2021-03-18');
    expect(day.calendar.dayOfWeek).toBe(4);
  });

  test('a policy may leave out the transfers when it has none', async () => {
    const resolveOccurrences: Policy = (input) => ({ onDate: Unly1969Rubrics.resolveOccurrences(input).onDate });
    registerRite({ ...Roman1969Rite, rubrics: { ...Unly1969Rubrics, resolveOccurrences } });

    const calendar = (await new Romcal().generateCalendar(2021)) as LiturgicalCalendar;

    expect(calendar['2021-03-19'][0].id).toBe('joseph_spouse_of_mary');
  });

  test('a transfer outside the generated range is dropped', async () => {
    registerRite(riteTransferring('joseph_spouse_of_mary', '2021-03-19', '2025-03-19'));

    const calendar = (await new Romcal().generateCalendar(2021)) as LiturgicalCalendar;

    expect(calendar['2025-03-19']).toBeUndefined();
    expect(
      Object.values(calendar)
        .flat()
        .map((d) => d.id)
    ).not.toContain('joseph_spouse_of_mary');
  });

  test('a date resolved again can transfer a day onto another date already resolved', async () => {
    // The Annunciation is sent back onto St Joseph (Friday 19 March 2021), both resolved already: the 1969
    // policy keeps one of the two solemnities and transfers the other to the following day, resolved again.
    registerRite(riteTransferring('annunciation_of_the_lord', '2021-03-25', '2021-03-19'));

    const calendar = (await new Romcal().generateCalendar(2021)) as LiturgicalCalendar;

    expect(calendar['2021-03-25'].map((d) => d.id)).not.toContain('annunciation_of_the_lord');
    expect([calendar['2021-03-19'][0].id, calendar['2021-03-20'][0].id].sort()).toEqual([
      'annunciation_of_the_lord',
      'joseph_spouse_of_mary',
    ]);
    expect(calendar['2021-03-20'][0].date).toBe('2021-03-20');
  });

  test('a transfer onto the same date is rejected', async () => {
    registerRite(riteTransferring('joseph_spouse_of_mary', '2021-03-19', '2021-03-19'));

    await expect(new Romcal().generateCalendar(2021)).rejects.toThrow(
      'Transfers must move to another date: "joseph_spouse_of_mary" on 2021-03-19.'
    );
  });

  test('a day sent back and forth is rejected', async () => {
    // Sent to the next date, which sends it back, which is resolved again...
    const resolveOccurrences: Policy = (input) => {
      const base = Unly1969Rubrics.resolveOccurrences(input);
      const moved = input.days.find((d) => d.id === 'joseph_spouse_of_mary');
      if (!moved) return base;
      const day = new Date(`${input.date}T00:00:00Z`);
      day.setUTCDate(day.getUTCDate() + (input.date === '2021-03-19' ? 1 : -1));
      const { onDate } = Unly1969Rubrics.resolveOccurrences({ ...input, days: input.days.filter((d) => d !== moved) });
      return { onDate, transfers: [{ date: day.toISOString().substring(0, 10), day: moved }] };
    };
    registerRite({ ...Roman1969Rite, rubrics: { ...Unly1969Rubrics, resolveOccurrences } });

    await expect(new Romcal().generateCalendar(2021)).rejects.toThrow(
      'The transfers of "joseph_spouse_of_mary" do not settle.'
    );
  });
});
