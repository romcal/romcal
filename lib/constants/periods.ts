import { ScreamingSnakeCase } from '../types/common';
import { toScreamingSnakeCase } from '../utils/string';

export enum Period {
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
 * A dynamically generated constant consisting of all the enum IDs in [[LITURGICAL_PERIODS]]
 */
export const PERIODS: ScreamingSnakeCase<keyof typeof Period>[] = Object.keys(Period)
  .filter((id) => typeof Period[id as keyof typeof Period] === 'string')
  .map((id) => toScreamingSnakeCase(id)) as ScreamingSnakeCase<keyof typeof Period>[];
