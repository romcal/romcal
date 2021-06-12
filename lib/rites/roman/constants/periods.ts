export enum LiturgicalPeriods {
  CHRISTMAS_OCTAVE = 'CHRISTMAS_OCTAVE',
  DAYS_BEFORE_EPIPHANY = 'DAYS_BEFORE_EPIPHANY',
  DAYS_AFTER_EPIPHANY = 'DAYS_AFTER_EPIPHANY',
  CHRISTMAS_TO_PRESENTATION_OF_THE_LORD = 'CHRISTMAS_TO_PRESENTATION_OF_THE_LORD',
  PRESENTATION_OF_THE_LORD_TO_HOLY_THURSDAY = 'PRESENTATION_OF_THE_LORD_TO_HOLY_THURSDAY',
  HOLY_WEEK = 'HOLY_WEEK',
  EASTER_OCTAVE = 'EASTER_OCTAVE',
  EARLY_ORDINARY_TIME = 'EARLY_ORDINARY_TIME',
  LATE_ORDINARY_TIME = 'LATE_ORDINARY_TIME',
}

/**
 * A dynamically generated constant consisting of all the enum keys in [[LITURGICAL_PERIODS]]
 */
export const LITURGICAL_PERIODS = Object.keys(LiturgicalPeriods).filter(
  (key) =>
    typeof LiturgicalPeriods[key as keyof typeof LiturgicalPeriods] ===
    'string',
) as Array<keyof typeof LiturgicalPeriods>;

export type RomcalLiturgicalPeriod = typeof LITURGICAL_PERIODS[number];
