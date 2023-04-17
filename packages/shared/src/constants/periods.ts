/**
 * Liturgical periods (in addition to the liturgical seasons).
 */
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

export const PERIODS = [
  Period.ChristmasOctave,
  Period.DaysBeforeEpiphany,
  Period.DaysFromEpiphany,
  Period.ChristmasToPresentationOfTheLord,
  Period.PresentationOfTheLordToHolyThursday,
  Period.HolyWeek,
  Period.EasterOctave,
  Period.EarlyOrdinaryTime,
  Period.LateOrdinaryTime,
] as const;
