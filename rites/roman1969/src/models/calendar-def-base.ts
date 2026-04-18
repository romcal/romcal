/**
 * Base shape every rite's per-region/per-country calendar definition
 * extends. Parametrized by the rite's entry type (e.g. a 1962
 * `CalendarOverlayEntry`) so each rite keeps its own vocabulary while
 * sharing the id + parent chain + flattening plumbing.
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
 *
 * 1962 imports this as `CalendarDefBase` and aliases it to
 * `CalendarDef` at the overlay call sites. 1969's own concrete
 * `CalendarDef` (sibling file) does NOT extend this — it keeps the
 * legacy 1969 shape.
 */
export abstract class CalendarDefBase<E> {
  readonly id: string = this.constructor.name
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();

  abstract readonly entries: readonly E[];

  readonly parents: readonly CalendarDefBase<E>[] = [];
}

/**
 * Constructor signature for a `CalendarDefBase<E>` subclass with a
 * zero-arg constructor. Registries hold these so consumers can
 * instantiate on demand without mutating shared state.
 */
export type CalendarDefBaseConstructor<E> = new () => CalendarDefBase<E>;

/**
 * Walk a calendar definition's parent chain, returning every distinct
 * definition in the order they should apply: parents first (base),
 * descendants last (refinements). Deduplicated by `id`, so a calendar
 * reached through two different parent paths still applies only once.
 *
 * Pure function — never touches the inputs.
 */
export function flattenCalendarChain<E>(root: CalendarDefBase<E>): CalendarDefBase<E>[] {
  const seen = new Set<string>();
  const out: CalendarDefBase<E>[] = [];
  const walk = (node: CalendarDefBase<E>): void => {
    for (const parent of node.parents) walk(parent);
    if (seen.has(node.id)) return;
    seen.add(node.id);
    out.push(node);
  };
  walk(root);
  return out;
}
