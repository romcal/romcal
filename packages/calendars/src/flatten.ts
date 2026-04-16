import { CalendarDef } from './calendar-def';

/**
 * Walk a calendar definition's parent chain, returning every distinct
 * definition in the order they should apply: parents first (base),
 * descendants last (refinements). Deduplicated by `id`, so a calendar
 * reached through two different parent paths still applies only once.
 *
 * Pure function — never touches the inputs.
 */
export function flattenCalendarChain<E>(root: CalendarDef<E>): CalendarDef<E>[] {
  const seen = new Set<string>();
  const out: CalendarDef<E>[] = [];
  const walk = (node: CalendarDef<E>): void => {
    for (const parent of node.parents) walk(parent);
    if (seen.has(node.id)) return;
    seen.add(node.id);
    out.push(node);
  };
  walk(root);
  return out;
}
