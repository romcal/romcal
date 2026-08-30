import { CalendarDef as GenericCalendarDef } from '@internal/generator';

import { Roman1969Vocabulary } from './vocabulary';

/**
 * The calendar definition base class, pinned to this rite's vocabulary.
 *
 * The calendars in this rite extend this rather than the engine's generic class, so that
 * their definitions are checked against the 1969 precedences and seasons. This is an
 * instantiation expression, so it is the same class at runtime.
 */
export const CalendarDef = GenericCalendarDef<Roman1969Vocabulary>;

export type CalendarDef = GenericCalendarDef<Roman1969Vocabulary>;
