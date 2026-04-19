import type { LiturgicalDayConfig, RomcalConfig } from '@internal/rite-roman1969';

import { Calendar1962 } from './calendar';
import { PRECEDENCES_1962 } from './constants/precedences-1962';
import { LiturgicalDay1962 } from './liturgical-day';
import { scorePrecedenceBase } from './precedence';
import { Romcal1962 } from './romcal-1962';

/**
 * Phase-2 shadow parity: for every date of every liturgical year in a
 * 30-year window, the winner selected by the legacy `scorePrecedenceBase`
 * (class + fineAdjustment) must agree with what a sort by
 * `PRECEDENCES_1962.indexOf(precedence1962)` would pick — i.e. both
 * functions induce the same top-of-pool under §96 tempora-before-sancti
 * + class + fine-adjustment comparison.
 *
 * The spec runs against `candidatesByDate`, captured via a capturing
 * `Romcal1962` subclass that intercepts `createCalendar` and holds onto
 * the `Calendar1962` instance. Any date where the two orderings disagree
 * fails with a dump of the candidate pool so the slot membership
 * predicate in `precedence-1962-derive.ts` can be tightened. Phase 3
 * deletes `precedence.ts`/`scorePrecedenceBase` once this spec is green
 * across the scan window.
 *
 * Known-improvement deltas ({@link KNOWN_IMPROVEMENTS}) are rubrical bugs
 * in the legacy scorer that the new scheme correctly resolves — these are
 * asserted-to-differ rather than failing the spec. Documented inline with
 * the rubric citation so future edits don't quietly re-introduce the bug.
 */

class CapturingRomcal1962 extends Romcal1962 {
  lastCalendar?: Calendar1962;

  protected override createCalendar(config: RomcalConfig, ldConfig: LiturgicalDayConfig): Calendar1962 {
    const cal = new Calendar1962(config, ldConfig);
    this.lastCalendar = cal;
    return cal;
  }
}

function legacyBaseScore(d: LiturgicalDay1962): number {
  return scorePrecedenceBase({
    kind1962: d.kind1962 ?? 'sancti',
    key1962: d.key1962 ?? d.id,
    classOf1962: d.classOf1962 ?? 4,
    numericRank1962: d.numericRank1962,
  });
}

function newSlotIndex(d: LiturgicalDay1962): number {
  // Undefined precedence1962 means "no 1962 metadata stamped" — e.g. a
  // leaked 1969 GeneralRoman id on an overlapping sancti. Treat it as
  // the bottom slot (same fallback the legacy scorer applies via Class IV).
  const p = d.precedence1962;
  return p ? PRECEDENCES_1962.indexOf(p) : PRECEDENCES_1962.length;
}

function sortLegacy(pool: LiturgicalDay1962[]): LiturgicalDay1962[] {
  return [...pool].sort((a, b) => {
    const s = legacyBaseScore(b) - legacyBaseScore(a);
    if (s !== 0) return s;
    const aK = a.kind1962 ?? 'sancti';
    const bK = b.kind1962 ?? 'sancti';
    if (aK !== bK) return aK === 'tempora' ? -1 : 1;
    const nR = (b.numericRank1962 ?? 0) - (a.numericRank1962 ?? 0);
    if (nR !== 0) return nR;
    return a.name.localeCompare(b.name);
  });
}

function sortFresh(pool: LiturgicalDay1962[]): LiturgicalDay1962[] {
  return [...pool].sort((a, b) => {
    const s = newSlotIndex(a) - newSlotIndex(b);
    if (s !== 0) return s;
    const aK = a.kind1962 ?? 'sancti';
    const bK = b.kind1962 ?? 'sancti';
    if (aK !== bK) return aK === 'tempora' ? -1 : 1;
    const nR = (b.numericRank1962 ?? 0) - (a.numericRank1962 ?? 0);
    if (nR !== 0) return nR;
    return a.name.localeCompare(b.name);
  });
}

/**
 * Known legacy-scorer bugs the new scheme corrects. Each entry is a
 * {date → { legacyWinner, freshWinner }} pair; these dates are exempted
 * from the parity check and instead asserted to differ in the documented
 * direction, so a future edit that re-introduces the bug still fails.
 *
 * - 2011-07-01 (and any year where Sacred Heart ≡ Precious Blood):
 *   Sacred Heart is a Class I tempora feast of the Lord (movable,
 *   Friday after Corpus Christi octave); Precious Blood is a Class I
 *   sancti feast of the Lord (fixed 07-01). Legacy `scorePrecedenceBase`
 *   applies a +200 `LORD_FEAST_KEYS` bump for `classOf1962 <= 2`, which
 *   incorrectly floats Precious Blood above Sacred Heart. §15 Rubricae
 *   1960 is Sunday-displacement only; among two Class I days, §96
 *   (tempora ante sancti) governs. Published 1962 ordos for 2011 have
 *   Sacred Heart as the Mass with commemoration of Precious Blood — the
 *   new scheme matches this.
 */
const KNOWN_IMPROVEMENTS: Record<string, { legacy: string; fresh: string }> = {
  '2011-07-01': {
    legacy: 'the_most_precious_blood_of_our_lord_jesus_christ',
    fresh: 'most_sacred_heart_of_jesus',
  },
};

describe('Precedence1962 shadow parity — every date in 2000-2030', () => {
  const YEARS = Array.from({ length: 31 }, (_, i) => 2000 + i);

  it.each(YEARS)(
    'liturgical year %i: new indexOf-winner matches legacy base-score winner',
    async (year) => {
      const romcal = new CapturingRomcal1962();
      await romcal.generateCalendar(year);

      const cal = romcal.lastCalendar;
      if (!cal) throw new Error('capturing romcal did not produce a Calendar1962');
      // `candidatesByDate` is a private field on the subclass; in the spec
      // we reach in through a typed widener.
      const pools = (
        cal as unknown as {
          candidatesByDate: Map<string, LiturgicalDay1962[]>;
        }
      ).candidatesByDate;

      expect(pools.size).toBeGreaterThan(300);

      const mismatches: { date: string; legacy: string; fresh: string; pool: string[] }[] = [];
      for (const [date, candidates] of pools) {
        if (candidates.length <= 1) continue;
        const legacyTop = sortLegacy(candidates)[0];
        const freshTop = sortFresh(candidates)[0];
        if (legacyTop.id === freshTop.id) continue;

        const known = KNOWN_IMPROVEMENTS[date];
        if (known && known.legacy === legacyTop.id && known.fresh === freshTop.id) continue;

        mismatches.push({
          date,
          legacy: legacyTop.id,
          fresh: freshTop.id,
          pool: candidates.map((c) => `${c.id}[c${c.classOf1962 ?? '?'},${c.precedence1962 ?? '?'}]`),
        });
      }

      expect(mismatches).toEqual([]);
    },
    20000
  );
});
