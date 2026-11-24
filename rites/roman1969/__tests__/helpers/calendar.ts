import type { GeneralRoman_En } from '@dist/rite-roman1969/bundles/general-roman';
import { LiturgicalDay, Romcal } from '@src/rite-roman1969';

export type Bundle = typeof GeneralRoman_En;

const { addDays, getUtcDate, isSameDate, subtractsDays } = Romcal;

type Calendar = Record<string, LiturgicalDay[]>;

// The calendars already generated, by localised calendar and year: the tests only read them.
const generated = new WeakMap<Bundle, Map<number, Promise<Calendar>>>();

/**
 * Generates the calendar of a year for a localised calendar, once per localised calendar and year.
 */
export const generate = (localizedCalendar: Bundle, year: number): Promise<Calendar> => {
  const years = generated.get(localizedCalendar) ?? new Map<number, Promise<Calendar>>();
  generated.set(localizedCalendar, years);
  const calendar = years.get(year) ?? (new Romcal({ localizedCalendar }).generateCalendar(year) as Promise<Calendar>);
  years.set(year, calendar);
  return calendar;
};

/**
 * Formats a date as YYYY-MM-DD.
 */
export const isoDate = (date: Date): string => date.toISOString().slice(0, 10);

/**
 * Returns the dates (YYYY-MM-DD) on which a celebration is found in the calendar of a year, wherever it is.
 */
export const datesOf = async (localizedCalendar: Bundle, year: number, id: string): Promise<string[]> =>
  Object.values(await generate(localizedCalendar, year))
    .flat()
    .filter((d) => d.id === id)
    .map((d) => d.date.slice(0, 10));

/**
 * Returns the ids of the celebrations of a date, the first one being the celebration of the day.
 */
export const idsOn = async (localizedCalendar: Bundle, date: string): Promise<string[]> =>
  ((await generate(localizedCalendar, Number(date.slice(0, 4))))[date] ?? []).map((d) => d.id);

/**
 * The date of St Joseph (19 March) in the General Roman Calendar: on Monday 20 March when 19 March is a Sunday of
 * Lent, and on the Saturday before Palm Sunday when 19 March is in Holy Week.
 */
export const josephSpouseOfMary = (year: number): { date: string; case: string } => {
  const date = getUtcDate(year, 3, 19);
  const palmSunday = new Romcal().dates(year).palmSunday();
  if (date.getTime() >= palmSunday.getTime()) {
    return {
      date: isoDate(subtractsDays(palmSunday, 1)),
      case: isSameDate(date, palmSunday) ? 'Palm Sunday' : 'Holy Week',
    };
  }
  if (date.getUTCDay() === 0) return { date: isoDate(addDays(date, 1)), case: 'Sunday of Lent' };
  return { date: isoDate(date), case: 'unimpeded' };
};

/**
 * The date of the Annunciation (25 March) in the General Roman Calendar: on Monday 26 March when 25 March is a
 * Sunday of Lent, and on the Monday after Divine Mercy Sunday when 25 March is from Palm Sunday to Divine Mercy
 * Sunday.
 */
export const annunciationOfTheLord = (year: number): { date: string; case: string } => {
  const date = getUtcDate(year, 3, 25);
  const dates = new Romcal().dates(year);
  const divineMercySunday = dates.divineMercySunday();
  if (date.getTime() >= dates.palmSunday().getTime() && date.getTime() <= divineMercySunday.getTime()) {
    return { date: isoDate(addDays(divineMercySunday, 1)), case: 'Holy Week or the Octave of Easter' };
  }
  if (date.getUTCDay() === 0) return { date: isoDate(addDays(date, 1)), case: 'Sunday of Lent' };
  return { date: isoDate(date), case: 'unimpeded' };
};

/**
 * Checks, in every year of a range, that a celebration is found once, on the date that `expected` gives for
 * that year (or not at all when that date is `null`), and, when `celebrationOfTheDay` is set, that it is the
 * celebration of that date. Returns how many
 * years each case named by `expected` covered, so that a test can check that every case was met.
 */
export const checkEveryYear = async (
  localizedCalendar: Bundle,
  id: string,
  [from, to]: [number, number],
  expected: (year: number) => { date: string | null; case: string },
  { celebrationOfTheDay }: { celebrationOfTheDay: boolean }
): Promise<Record<string, number>> => {
  const cases: Record<string, number> = {};
  for (let year = from; year <= to; year += 1) {
    const { date, case: name } = expected(year);
    expect({ year, dates: await datesOf(localizedCalendar, year, id) }).toEqual({ year, dates: date ? [date] : [] });
    if (date && celebrationOfTheDay) {
      expect({ year, first: (await idsOn(localizedCalendar, date))[0] }).toEqual({ year, first: id });
    }
    cases[name] = (cases[name] ?? 0) + 1;
  }
  return cases;
};
