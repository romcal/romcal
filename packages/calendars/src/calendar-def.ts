/**
 * Base shape every rite's per-region/per-country calendar definition
 * extends. Parametrized by the rite's entry type (e.g. a 1962
 * `CalendarOverlayEntry`, or a 1969 liturgical-day bundle input) so
 * each rite keeps its own vocabulary while sharing the id + parent
 * chain + flattening plumbing.
 *
 * Subclasses declare:
 *   - `entries` — the rite-specific calendar contribution.
 *   - `parents` (optional) — upstream definitions whose entries apply
 *     before this one's, letting diocesan calendars refine national
 *     ones and national calendars refine regional ones.
 *   - `id` (optional) — override only if the class name can't carry
 *     the slug. The default derives `id` from the class name using
 *     the same algorithm the 1969 rite has always used: split on
 *     capital-letter boundaries, join with `_`, lowercase. So
 *     `GeneralRoman` becomes `general_roman`. Existing underscores are
 *     preserved, so diocesan overlays named `Country_Diocese` (e.g.
 *     `France_Angers`, `Switzerland_Basel`) get a double-underscore
 *     country/diocese boundary in the id (`france__angers`,
 *     `switzerland__basel`). Downstream slug helpers map that to the
 *     dotted package form (`france.angers`) when needed.
 */
export abstract class CalendarDef<E> {
  get id(): string {
    return this.constructor.name
      .split(/(?=[A-Z])/)
      .join('_')
      .toLowerCase();
  }

  abstract readonly entries: readonly E[];

  readonly parents: readonly CalendarDef<E>[] = [];
}

/**
 * Constructor signature for a `CalendarDef<E>` subclass with a
 * zero-arg constructor. Registries hold these so consumers can
 * instantiate on demand without mutating shared state.
 */
export type CalendarDefConstructor<E> = new () => CalendarDef<E>;
