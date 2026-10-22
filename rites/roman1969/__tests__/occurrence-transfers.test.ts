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
    const joseph = calendar['2021-03-20'][0];
    expect(joseph.id).toBe('joseph_spouse_of_mary');
    expect(joseph.date).toBe('2021-03-20');
    expect(joseph.calendar.dayOfWeek).toBe(6);
  });

  test('a transfer onto an earlier date is rejected', async () => {
    registerRite(riteTransferring('joseph_spouse_of_mary', '2021-03-19', '2021-03-18'));

    await expect(new Romcal().generateCalendar(2021)).rejects.toThrow(
      'Transfers must move forward: "joseph_spouse_of_mary" from 2021-03-19 to 2021-03-18.'
    );
  });
});
