import type { GeneralRoman_En } from '@dist/rite-roman1969/bundles/general-roman';
import { LiturgicalDay, Romcal } from '@src/rite-roman1969';

export type Bundle = typeof GeneralRoman_En;

/**
 * Generates the calendar of a year for a localised calendar.
 */
export const generate = async (
  localizedCalendar: Bundle,
  year: number
): Promise<Record<string, LiturgicalDay[]>> =>
  (await new Romcal({ localizedCalendar }).generateCalendar(year)) as Record<string, LiturgicalDay[]>;
