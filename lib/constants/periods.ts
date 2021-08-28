import { PascalToUpperSnakeCase } from '../types/common';

export enum Periods {
  ChristmasOctave = 'CHRISTMAS_OCTAVE',
  DaysBeforeEpiphany = 'DAYS_BEFORE_EPIPHANY',
  DaysFromEpiphany = 'DAYS_FROM_EPIPHANY',
  ChristmasToPresentationOfTheLord = 'CHRISTMAS_TO_PRESENTATION_OF_THE_LORD',
  PresentationOfTheLordToHolyThursday = 'PRESENTATION_OF_THE_LORD_TO_HOLY_THURSDAY',
  HolyWeek = 'HOLY_WEEK',
  EasterOctave = 'EASTER_OCTAVE',
  EarlyOrdinaryTime = 'EARLY_ORDINARY_TIME',
  LateOrdinaryTime = 'LATE_ORDINARY_TIME',
}

/**
 * A dynamically generated constant consisting of all the enum keys in [[LITURGICAL_PERIODS]]
 */
export const PERIODS = Object.keys(Periods).filter(
  (key) => typeof Periods[key as keyof typeof Periods] === 'string',
) as Array<PascalToUpperSnakeCase<keyof typeof Periods>>;

export type Period = typeof PERIODS[number];
