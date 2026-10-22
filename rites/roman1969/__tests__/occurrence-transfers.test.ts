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
type Day = OccurrenceInput<Roman1969Vocabulary>['days'][number];

/** Days the destination policy receives when `id` is moved from `from` to `to`. */
const daysReceivedOn = async (
  id: string,
  from: string,
  to: string
): Promise<{ calendar: LiturgicalCalendar; days: Day[] }> => {
  const transferring = riteTransferring(id, from, to);
  const resolveOccurrences = transferring.rubrics.resolveOccurrences;
  let days: Day[] = [];

  registerRite({
    ...transferring,
    rubrics: {
      ...transferring.rubrics,
      resolveOccurrences: (input) => {
        if (input.date === to) days = input.days;
        return resolveOccurrences(input);
      },
    },
  });

  const calendar = (await new Romcal().generateCalendar(2021)) as LiturgicalCalendar;
  return { calendar, days };
};

const properOfTimeOn = (days: Day[]): Day => {
  const temporal = days.find((d) => d.cycles.properCycle === Romcal.ProperCycles.ProperOfTime);
  if (!temporal) throw new Error('destination has no Proper of Time day');
  return temporal;
};

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

  test('a transferred Proper of Saints solemnity takes the destination feria', async () => {
    const { calendar, days } = await daysReceivedOn('joseph_spouse_of_mary', '2021-03-19', '2021-03-20');
    const joseph = days.find((d) => d.id === 'joseph_spouse_of_mary');
    const feria = properOfTimeOn(days);

    expect(calendar['2021-03-19'].map((d) => d.id)).not.toContain('joseph_spouse_of_mary');
    expect(joseph?.date).toBe('2021-03-20');
    expect(joseph?.seasons).toEqual(feria.seasons);
    expect(joseph?.periods).toEqual(feria.periods);
    expect(joseph?.calendar).toEqual(feria.calendar);
    expect(joseph?.cycles.sundayCycle).toBe(feria.cycles.sundayCycle);
    expect(joseph?.cycles.weekdayCycle).toBe(feria.cycles.weekdayCycle);
    expect(joseph?.cycles.psalterWeek).toBe(feria.cycles.psalterWeek);
    expect(joseph?.cycles.properCycle).toBe(Romcal.ProperCycles.ProperOfSaints);
    expect(joseph?.colors).toEqual([Romcal.Colors.White]);
    expect(joseph?.isHolyDayOfObligation).toBe(true);
    expect(joseph?.weekday).toBeUndefined();
  });

  test('a memorial transferred onto a privileged weekday drops its colors', async () => {
    const { calendar, days } = await daysReceivedOn('francis_de_sales_bishop', '2021-01-24', '2021-02-18');
    const francis = days.find((d) => d.id === 'francis_de_sales_bishop');
    const feria = properOfTimeOn(days);

    expect(calendar['2021-01-24'].map((d) => d.id)).not.toContain('francis_de_sales_bishop');
    expect(francis?.date).toBe('2021-02-18');
    expect(feria.precedence).toBe(Romcal.Precedences.PrivilegedWeekday_9);
    expect(francis?.seasons).toEqual(feria.seasons);
    expect(francis?.periods).toEqual(feria.periods);
    expect(francis?.calendar).toEqual(feria.calendar);
    expect(francis?.cycles.psalterWeek).toBe(feria.cycles.psalterWeek);
    expect(francis?.cycles.properCycle).toBe(Romcal.ProperCycles.ProperOfSaints);
    expect(francis?.colors).toEqual([]);
    expect(francis?.weekday?.id).toBe(feria.id);
    expect(francis?.weekday?.date).toBe('2021-02-18');
    expect(francis?.isHolyDayOfObligation).toBe(false);
  });

  test('a memorial transferred off a privileged weekday regains its colors', async () => {
    const { calendar, days } = await daysReceivedOn('patrick_of_ireland_bishop', '2021-03-17', '2021-04-05');
    const patrick = days.find((d) => d.id === 'patrick_of_ireland_bishop');
    const feria = properOfTimeOn(days);

    expect(calendar['2021-03-17'].map((d) => d.id)).not.toContain('patrick_of_ireland_bishop');
    expect(patrick?.date).toBe('2021-04-05');
    expect(feria.precedence).not.toBe(Romcal.Precedences.PrivilegedWeekday_9);
    expect(patrick?.seasons).toEqual(feria.seasons);
    expect(patrick?.periods).toEqual(feria.periods);
    expect(patrick?.calendar).toEqual(feria.calendar);
    expect(patrick?.colors).not.toEqual([]);
    expect(patrick?.weekday?.date).toBe('2021-04-05');
  });

  test('a transfer onto an earlier date is rejected', async () => {
    registerRite(riteTransferring('joseph_spouse_of_mary', '2021-03-19', '2021-03-18'));

    await expect(new Romcal().generateCalendar(2021)).rejects.toThrow(
      'Transfers must move forward: "joseph_spouse_of_mary" from 2021-03-19 to 2021-03-18.'
    );
  });
});
