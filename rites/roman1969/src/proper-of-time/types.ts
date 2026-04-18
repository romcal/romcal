/**
 * A year's worth of resolved Proper-of-Time entries, keyed by ISO date
 * (`YYYY-MM-DD`). Generic so each rite parametrises with its own entry
 * shape (1962 sancti-aware entries vs 1969 `LiturgicalDayDef`-based
 * entries).
 */
export type ProperOfTimeYear<Entry> = Map<string, Entry>;
