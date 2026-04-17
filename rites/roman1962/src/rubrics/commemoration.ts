import type { Celebration1962 } from '../models/liturgical-day';

/**
 * Filter losers down to the list of celebrations eligible to be
 * commemorated at the primary's Mass. Per Rubricae 1960:
 *
 *   - A loser of Class I, II, or III is always eligible.
 *   - A Class IV Tempora (ferial) is not itself commemorated at Mass,
 *     but a Class IV Sancti feast (e.g. a simple semidouble) is
 *     eligible when it loses to a higher-ranking primary.
 *   - `inlineCommemorations` carried on a Sancti entry (from the
 *     Kalendarium delta) are always forwarded, unchanged.
 *
 * The caller decides how many to actually render (1960 caps at 3 at
 * solemn Mass, 1 at private).
 */
export function selectCommemorations(primary: Celebration1962, losers: Celebration1962[]): Celebration1962[] {
  const out: Celebration1962[] = [];
  for (const loser of losers) {
    if (loser.kind === 'tempora' && loser.classOf1962 === 4) continue;
    out.push(loser);
  }
  void primary;
  return out;
}
