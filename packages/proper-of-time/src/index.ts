/**
 * Date primitives and liturgical year anchors shared by every Roman Rite calendar.
 *
 * This package is intentionally rite-neutral: it knows how to locate a date in the
 * year, not what that date means. Anything shaped by a particular rite's rubrics
 * (Ordinary Time, the movable-Sunday options for Epiphany and the Baptism of the
 * Lord, season boundaries) stays with the rite.
 *
 * The extraction lands in a follow-up commit. Exports arrive in two groups:
 *
 * - primitives: getUtcDate, addDays, subtractsDays, isSameDate, dateDifference,
 *   startOfWeek, isValidDate, daysInMonth, getWeekNumber, rangeOfDays, rangeContainsDate
 * - year anchors: firstSundayOfAdvent, christmas, easterSunday, ashWednesday,
 *   palmSunday, holyThursday, goodFriday, holySaturday, pentecostSunday, the fixed
 *   solemnities, and lunarNewYear / sundayOnOrAfterLunarNewYear
 *
 * Anchors are exported as pure `(year: number) => Date` functions rather than the
 * instance arrow-properties they are today, so they carry no rite configuration.
 * The rite keeps its `temporalOverrides` layer, which already runs after an anchor
 * is computed rather than inside it.
 */

export {};
