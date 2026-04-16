/**
 * Base shape every rite's per-region/per-country calendar definition
 * extends. Parametrized by the rite's entry type (e.g. a 1962
 * `CalendarOverlayEntry`, or a 1969 liturgical-day bundle input) so
 * each rite keeps its own vocabulary while sharing the id + parent
 * chain + flattening plumbing.
 *
 * Subclasses declare:
 *   • `id` — a stable dotted slug (`switzerland.basel`). Used as
 *     registry key and for parent-chain deduplication.
 *   • `entries` — the rite-specific calendar contribution.
 *   • `parents` (optional) — upstream definitions whose entries apply
 *     before this one's, letting diocesan calendars refine national
 *     ones and national calendars refine regional ones.
 */
export abstract class CalendarDef<E> {
  abstract get id(): string;

  abstract readonly entries: readonly E[];

  readonly parents: readonly CalendarDef<E>[] = [];
}

/**
 * Constructor signature for a `CalendarDef<E>` subclass with a
 * zero-arg constructor. Registries hold these so consumers can
 * instantiate on demand without mutating shared state.
 */
export type CalendarDefConstructor<E> = new () => CalendarDef<E>;
