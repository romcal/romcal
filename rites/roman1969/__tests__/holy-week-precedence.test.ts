import { GeneralRoman_En } from '@dist/rite-roman1969/bundles/general-roman';
import { LiturgicalDay, Romcal } from '@src/rite-roman1969';

const { Precedences } = Romcal;

// UNLY #59 2: the weekdays of Holy Week from Monday up to and including Thursday are listed in no. 2
// of the table of liturgical days, so they take precedence over the solemnities (no. 3 and 4).
describe('The weekdays of Holy Week', () => {
  test('have the precedence of the weekdays of Holy Week', async () => {
    const calendar = (await new Romcal({ localizedCalendar: GeneralRoman_En }).generateCalendar(2025)) as Record<
      string,
      LiturgicalDay[]
    >;

    ['2025-04-14', '2025-04-15', '2025-04-16', '2025-04-17'].forEach((date) => {
      expect(calendar[date][0].precedence).toEqual(Precedences.WeekdayOfHolyWeek_2);
    });
  });

  test('are not privileged weekdays, like the other weekdays of Lent', async () => {
    const calendar = (await new Romcal({ localizedCalendar: GeneralRoman_En }).generateCalendar(2025)) as Record<
      string,
      LiturgicalDay[]
    >;

    expect(calendar['2025-04-12'][0].precedence).toEqual(Precedences.PrivilegedWeekday_9);
    expect(calendar['2025-04-13'][0].precedence).toEqual(Precedences.PrivilegedSunday_2);
  });
});
