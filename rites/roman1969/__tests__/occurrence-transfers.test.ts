import { OccurrenceInput, OccurrenceOutcome, Rite, registerRite } from '@internal/generator';
import {
  LiturgicalCalendar,
  Period,
  Romcal,
  Roman1969Rite,
  Roman1969Vocabulary,
  Unly1969Rubrics,
} from '@src/rite-roman1969';

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

  test('a transferred Proper of Time celebration is rebuilt onto the destination weekday', async () => {
    const transferring = riteTransferring('most_sacred_heart_of_jesus', '2021-06-11', '2021-06-12');
    const resolveOccurrences = transferring.rubrics.resolveOccurrences;
    let received: OccurrenceInput<Roman1969Vocabulary>['days'][number] | undefined;

    registerRite({
      ...transferring,
      rubrics: {
        ...transferring.rubrics,
        resolveOccurrences: (input) => {
          // 12 June 2021 is the Immaculate Heart, which the 1969 policy keeps and the
          // transferred solemnity does not survive into the output. The fields under
          // test are the ones that policy receives.
          if (input.date === '2021-06-12') {
            received = input.days.find((d) => d.id === 'most_sacred_heart_of_jesus');
          }
          return resolveOccurrences(input);
        },
      },
    });

    const calendar = (await new Romcal().generateCalendar(2021)) as LiturgicalCalendar;

    expect(calendar['2021-06-11'].map((d) => d.id)).not.toContain('most_sacred_heart_of_jesus');
    expect(received?.date).toBe('2021-06-12');
    expect(received?.calendar.dayOfWeek).toBe(6);
    expect(received?.periods).toEqual([Period.LateOrdinaryTime]);
  });

  test('a transferred Proper of Time weekday takes the destination season coordinates', async () => {
    const transferring = riteTransferring('saturday_after_ash_wednesday', '2021-02-20', '2021-02-21');
    const resolveOccurrences = transferring.rubrics.resolveOccurrences;
    let received: OccurrenceInput<Roman1969Vocabulary>['days'][number] | undefined;

    registerRite({
      ...transferring,
      rubrics: {
        ...transferring.rubrics,
        resolveOccurrences: (input) => {
          // The First Sunday of Lent keeps 21 February. The Saturday is appointed to
          // week 0, day 4; the landing date is week 1, day 5, and the psalter follows the week.
          if (input.date === '2021-02-21') {
            received = input.days.find((d) => d.id === 'saturday_after_ash_wednesday');
          }
          return resolveOccurrences(input);
        },
      },
    });

    const calendar = (await new Romcal().generateCalendar(2021)) as LiturgicalCalendar;

    expect(calendar['2021-02-20'].map((d) => d.id)).not.toContain('saturday_after_ash_wednesday');
    expect(received?.date).toBe('2021-02-21');
    expect(received?.calendar.dayOfWeek).toBe(0);
    expect(received?.calendar.dayOfSeason).toBe(5);
    expect(received?.calendar.weekOfSeason).toBe(1);
    expect(received?.cycles.psalterWeek).toBe(Romcal.PsalterWeekCycles.Week1);
  });

  test('a transfer onto an earlier date is rejected', async () => {
    registerRite(riteTransferring('joseph_spouse_of_mary', '2021-03-19', '2021-03-18'));

    await expect(new Romcal().generateCalendar(2021)).rejects.toThrow(
      'Transfers must move forward: "joseph_spouse_of_mary" from 2021-03-19 to 2021-03-18.'
    );
  });
});
