/**
 * Day-of-week literal: matches `Date.prototype.getUTCDay()`.
 * Sunday = 0, Saturday = 6.
 */
export type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * A year's worth of resolved Proper-of-Time entries, keyed by ISO date
 * (`YYYY-MM-DD`). Generic so each rite parametrises with its own entry
 * shape (1962 sancti-aware entries vs 1969 `LiturgicalDayDef`-based
 * entries).
 */
export type ProperOfTimeYear<Entry> = Map<string, Entry>;
