import {
  Calendar,
  LiturgicalCalendar,
  LiturgicalDay,
  LiturgicalDayConfig,
  LiturgicalDayDef,
  RomcalCalendarMetadata,
} from '@internal/rite-roman1969';

import { RomcalConfig1962, type CommemorationCapMode } from './config-1962';
import { PRECEDENCES_1962 } from './constants/precedences-1962';
import { LiturgicalDay1962 } from './liturgical-day';
import type { Kind1962 } from './meta-1962';
import { applyCap, filterCommemorations, isTransferTarget } from './transfer';

// -- Helpers ------------------------------------------------------------------

/**
 * Slot index of a candidate's `precedence1962` in the ordered
 * {@link PRECEDENCES_1962} array. Lower index = higher precedence.
 * Candidates without `precedence1962` (shouldn't happen after B2c+B2d
 * stamping, but defend anyway) land past the last slot so they fall to
 * the bottom of the pool and get culled by the transfer / commemoration
 * passes.
 */
function slotIndex(d: LiturgicalDay1962): number {
  const p = d.precedence1962;
  return p ? PRECEDENCES_1962.indexOf(p) : PRECEDENCES_1962.length;
}

function kindOf(d: LiturgicalDay1962): Kind1962 {
  return d.kind1962 ?? 'sancti';
}

/**
 * Read the `commemorationMode` off the 1962 config if present, else fall
 * back to `'all'`. Factored out of a `#private` method so the TS emit
 * doesn't reach for a tslib private-field helper (the package config
 * doesn't have tslib available at type-check time).
 */
function modeOf(config: unknown): CommemorationCapMode {
  return config instanceof RomcalConfig1962 ? config.commemorationMode : 'all';
}

/**
 * 1962 subclass of `Calendar`. Overrides:
 *
 *   - `createLiturgicalDay` so generated days land as {@link LiturgicalDay1962}.
 *   - `resolveOccurrence` to pick the winner by 1962 rubrics
 *     (CLASS_BASE + fine adjustments + §15 Lord-feast elevation), with
 *     tempora-beats-sancti ties (§96) and alphabetical-by-name fallback.
 *   - `postReduceDay` to populate `commemorations` with the losers that
 *     survive the Class IV ferial filter (§111–113), capped by the
 *     `commemorationMode` setting on {@link RomcalConfig1962}.
 *   - `generateCalendar` to run §50 forward-transfer and §10 vigil
 *     suppression as a year-level post-pass on top of the first-pass
 *     resolution.
 *
 * Overlays arrive in B2d-3.
 */
export class Calendar1962 extends Calendar<LiturgicalDay1962> {
  /**
   * Class I sancti that lost occurrence resolution on their assigned
   * date and are queued for forward-transfer. Populated by
   * `postReduceDay` in date-ascending order (the base engine iterates
   * sorted `datesIndex`), drained by `generateCalendar`.
   *
   * Uses the TS `private` modifier rather than `#`-prefix so the emit
   * doesn't reach for a tslib private-field helper (this package's
   * type-check environment doesn't have tslib available).
   */
  private pendingTransfers: { originalDate: string; feast: LiturgicalDay1962 }[] = [];

  /**
   * Full candidate pool per date, cached from `postReduceDay`. Needed by
   * the §10 vigil-suppression rebuild: when we decide a vigil candidate
   * should be dropped, we re-resolve the day from the original pool
   * minus the vigil instead of trying to invert `commemorations` back
   * into candidates.
   */
  private readonly candidatesByDate: Map<string, LiturgicalDay1962[]> = new Map();

  protected override createLiturgicalDay(
    def: LiturgicalDayDef,
    date: Date,
    ldConfig: LiturgicalDayConfig,
    calendar: RomcalCalendarMetadata,
    baseData: LiturgicalDay1962 | null,
    weekday: LiturgicalDay1962 | null
  ): LiturgicalDay1962 {
    return new LiturgicalDay1962(
      def,
      date,
      ldConfig,
      calendar,
      baseData as LiturgicalDay | null,
      weekday as LiturgicalDay | null
    );
  }

  /**
   * 1962 occurrence resolver. Sorts candidates by precedence slot
   * (ascending `PRECEDENCES_1962.indexOf(precedence1962)` — Rubricae
   * 1960 §91 tabula dierum liturgicorum), breaks ties by kind (§96
   * tempora ante sancti), and finally by alphabetical `name` for
   * determinism. Mutates `candidates` in place so the caller sees
   * `candidates[0] === winner`, as the engine expects.
   */
  protected override resolveOccurrence(candidates: LiturgicalDay1962[], _date: Date): LiturgicalDay1962 {
    if (candidates.length === 0) {
      throw new Error('resolveOccurrence called with empty candidate pool');
    }
    candidates.sort((a, b) => {
      const slot = slotIndex(a) - slotIndex(b);
      if (slot !== 0) return slot;
      const aKind = kindOf(a);
      const bKind = kindOf(b);
      if (aKind !== bKind) return aKind === 'tempora' ? -1 : 1;
      return a.name.localeCompare(b.name);
    });
    return candidates[0];
  }

  /**
   * 1962 post-reduce hook. `candidates` is the full sorted-by
   * `resolveOccurrence` list, with `day === candidates[0]`. Applies
   * §111–113:
   *
   *   - Drop Class IV tempora losers (they are not commemorated).
   *   - Cap the surviving commemorations to `commemorationMode`
   *     (3 for solemn, 1 for private, Infinity for 'all').
   *   - Populate `day.commemorations` with the eligible losers' (id, name).
   *
   * Also stashes the candidate pool for `generateCalendar`'s §10 vigil
   * rebuild pass, and queues any impeded Class I sancti for §50
   * forward-transfer.
   */
  protected override postReduceDay(day: LiturgicalDay1962, candidates: LiturgicalDay1962[]): LiturgicalDay1962 {
    const losers = candidates.slice(1);
    const eligible = filterCommemorations(losers);
    const capped = applyCap(eligible, modeOf(this.config));

    day.commemorations = capped.map((c) => ({ id: c.id, name: c.name }));

    // Stash for potential vigil rebuild. Use `day.date` (ISO YYYY-MM-DD
    // set by the base LiturgicalDay ctor) as the key; the same string
    // keys the `LiturgicalCalendar` the caller produces.
    this.candidatesByDate.set(day.date, [...candidates]);

    // Queue impeded Class I sancti for forward-transfer (§50).
    for (const loser of losers) {
      if (loser.kind1962 === 'sancti' && loser.classOf1962 === 1) {
        this.pendingTransfers.push({ originalDate: day.date, feast: loser });
      }
    }

    return day;
  }

  /**
   * Year-level resolution. Runs the base engine's first pass, then
   * applies Rubricae 1960 §50 forward-transfer and §10 vigil suppression
   * on top. Mirrors the algorithm in legacy
   * `src/calendar-year/build.ts#buildLiturgicalYear1962`, adapted to
   * `LiturgicalDay1962` instances and the OOP side-channel queues.
   */
  override generateCalendar(): LiturgicalCalendar<LiturgicalDay1962> {
    this.pendingTransfers = [];
    this.candidatesByDate.clear();

    const firstPass = super.generateCalendar();

    if (this.pendingTransfers.length === 0) return firstPass;

    // Take a mutable copy. Date keys are ISO so string-sort == date-sort.
    const final: LiturgicalCalendar<LiturgicalDay1962> = { ...firstPass };
    const allDates = Object.keys(final).sort();
    const pending = this.pendingTransfers;
    const mode = modeOf(this.config);

    // §50 forward-transfer. `pending` is in impediment-date order because
    // `postReduceDay` is called during the date-ascending first pass, so
    // earlier impediments claim their landing slot first; later ones skip
    // over anything the earlier one landed on (it's no longer a target).
    //
    // Commemoration model: in the 1962 OOP, commems live on
    // `primary.commemorations` as `{id, name}[]`, not as subsequent LDs
    // in the `LiturgicalCalendar` value array. So we build the transferred
    // feast's commem list from the landing date's cached candidate pool
    // (winner → primary, losers → filtered commems), then splice it onto
    // the transferred LD.
    for (const transfer of pending) {
      const startIdx = allDates.indexOf(transfer.originalDate);
      if (startIdx < 0) continue;
      for (let i = startIdx + 1; i < allDates.length; i += 1) {
        const landingDate = allDates[i];
        const dayList = final[landingDate];
        if (!dayList || dayList.length === 0) continue;
        const currentPrimary = dayList[0];
        if (!isTransferTarget(currentPrimary)) continue;

        const transferred = this.buildTransferred(transfer.feast, landingDate, transfer.originalDate);
        // Rebuild the commem list from the original candidate pool for
        // this date: everyone except the transferred feast itself and
        // except Class IV tempora ferials; cap per config.
        const pool = this.candidatesByDate.get(landingDate) ?? [currentPrimary];
        const displacedLosers = pool.filter((c) => c.id !== transfer.feast.id);
        const commems = applyCap(filterCommemorations(displacedLosers), mode);
        transferred.commemorations = commems.map((c) => ({ id: c.id, name: c.name }));

        // Preserve any optional-memorial tail (1969-engine carve-out for
        // Holy Thursday etc.) that the base `generateCalendar` put at
        // positions [1..] — those are NOT 1962 commemorations and we
        // don't want to drop them. In practice the tail is empty on
        // non-Holy-Thursday dates.
        final[landingDate] = [transferred, ...dayList.slice(1)];
        break;
      }
    }

    // Strip transferred feasts out of their original day's commem list.
    // `primary.commemorations` is the `{id, name}[]` side-channel populated
    // by `postReduceDay`; we match by fingerprint `${originalDate}::${id}`.
    const transferredFingerprints = new Set<string>();
    const transferredNames = new Set<string>();
    for (const dayList of Object.values(final)) {
      const primary = dayList[0];
      if (primary?.isTransferredReplacement && primary.transferredFromDate) {
        transferredFingerprints.add(`${primary.transferredFromDate}::${primary.id}`);
        transferredNames.add(primary.name);
      }
    }
    if (transferredFingerprints.size > 0) {
      for (const [date, dayList] of Object.entries(final)) {
        const primary = dayList[0];
        if (!primary || primary.commemorations.length === 0) continue;
        const filtered = primary.commemorations.filter((c) => !transferredFingerprints.has(`${date}::${c.id}`));
        if (filtered.length !== primary.commemorations.length) {
          primary.commemorations = filtered;
        }
      }
    }

    // §10 vigil suppression. When a feast is transferred, its vigil is
    // omitted. Rebuild any day whose primary or commemoration is a vigil
    // of a transferred feast, from the cached candidate pool minus that
    // vigil.
    //
    // Note: in the 2000-2030 scan, no year organically hits this branch
    // (the feasts that transfer — Annunciation, St Joseph, St Joseph the
    // Worker, Immaculate Conception — have no vigils in the 1960
    // Kalendarium). The code path is preserved for parity with legacy
    // and to guard future overlays (B2d-3) that introduce new vigils.
    if (transferredNames.size > 0) {
      for (const [date, dayList] of Object.entries(final)) {
        const primary = dayList[0];
        if (!primary) continue;
        const candidates = this.candidatesByDate.get(date);
        if (!candidates) continue;

        const primaryHits = !!primary.vigilOf && transferredNames.has(primary.vigilOf);
        const commemHits = candidates.slice(1).some((c) => !!c.vigilOf && transferredNames.has(c.vigilOf));
        if (!primaryHits && !commemHits) continue;

        const remaining = candidates.filter((c) => !c.vigilOf || !transferredNames.has(c.vigilOf));
        if (remaining.length === 0) continue;

        const pool = [...remaining];
        const newWinner = this.resolveOccurrence(pool, new Date(`${date}T00:00:00Z`));
        const newLosers = pool.filter((c) => c !== newWinner);
        const newCommems = applyCap(filterCommemorations(newLosers), mode);
        newWinner.commemorations = newCommems.map((c) => ({ id: c.id, name: c.name }));

        if (primary.isTransferredReplacement && primary.transferredFromDate) {
          // The primary on this date is itself a transferred feast;
          // preserve provenance onto the rebuilt winner.
          newWinner.stampTransfer(primary.transferredFromDate);
        }
        final[date] = [newWinner, ...dayList.slice(1)];
      }
    }

    return final;
  }

  /**
   * Build a fresh `LiturgicalDay1962` for the landing date of a
   * forward-transfer, stamped with transfer provenance.
   *
   * Constructs the new instance via the normal `createLiturgicalDay`
   * factory path (rather than a proto-clone) so the base class's
   * private-field slots get populated — the `name`, `colorNames`, and
   * `seasonNames` getters depend on them. We reuse the feast's original
   * `calendar` metadata (weekOfSeason / dayOfWeek / …): matching legacy,
   * which spreads the whole feast through unchanged except `date`. The
   * dayOfWeek / weekOfSeason will technically reflect the impediment
   * date rather than the landing date, but that mirrors legacy output
   * and preserves parity for B2d-4.
   */
  private buildTransferred(feast: LiturgicalDay1962, landingDate: string, originalDate: string): LiturgicalDay1962 {
    const fresh = this.createLiturgicalDay(
      feast.definition,
      new Date(`${landingDate}T00:00:00Z`),
      this.liturgicalDayConfig,
      feast.calendar,
      null,
      null
    );
    return fresh.stampTransfer(originalDate);
  }
}
