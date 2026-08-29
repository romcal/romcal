/**
 * Date primitives and liturgical year anchors shared by every Roman Rite calendar.
 *
 * This package is intentionally rite-neutral: it knows how to locate a date in the
 * year, not what that date means. Anything shaped by a particular rite's rubrics
 * (Ordinary Time, the movable-Sunday options for Epiphany and the Baptism of the
 * Lord, the Ascension and Corpus Christi transfers, season boundaries) stays with
 * the rite, which applies it on top of what is computed here.
 *
 * That layering is why the `temporalOverrides` mechanism does not belong here
 * either: a rite computes an anchor, then shifts it if its own configuration says
 * to.
 */

export type { EasterCalculationType } from './anchors';
export {
  allSaints,
  annunciation,
  ashWednesday,
  assumption,
  christmas,
  easterSunday,
  exaltationOfTheHolyCross,
  firstSundayOfAdvent,
  goodFriday,
  holySaturday,
  holyThursday,
  immaculateConceptionOfMary,
  lunarNewYear,
  maryMotherOfGod,
  nativityOfJohnTheBaptist,
  palmSunday,
  pentecostSunday,
  peterAndPaulApostles,
  presentationOfTheLord,
  sundayOnOrAfterLunarNewYear,
  transfiguration,
} from './anchors';
export {
  addDays,
  dateDifference,
  daysInMonth,
  getUtcDate,
  getUtcDateFromString,
  getWeekNumber,
  isSameDate,
  isValidDate,
  rangeContainsDate,
  rangeOfDays,
  startOfWeek,
  subtractsDays,
} from './primitives';
