import { LiturgicalDay, LiturgicalDayConfig, LiturgicalDayDef, RomcalCalendarMetadata } from '@internal/rite-roman1969';

import type { Precedence1962 } from './constants/precedences-1962';
import { getMeta1962, type Class1962, type Kind1962 } from './meta-1962';

/**
 * Placeholder shape for an 1962 commemoration. Grown in B2c/B2d.
 */
export type LiturgicalDayCommemoration = {
  id: string;
  name: string;
};

/**
 * Placeholder shape for octave-day provenance. Grown in B2c/B2d.
 */
export type OctaveOf = {
  ofId: string;
  day: number;
};

export type LiturgicalDay1962Extras = {
  commemorations?: readonly LiturgicalDayCommemoration[];
  octaveOf?: OctaveOf;
  vigilOf?: string;
  massReferences?: Record<string, string>;
};

/**
 * 1962-rite subclass of the generic `LiturgicalDay`. B2a ships only the
 * skeleton fields; B2c/B2d will wire real data through `extras`.
 *
 * Note on `rite`: the base declares `readonly rite!: 'roman1969'`. Narrowing
 * to the 1962 literal at the TS level would break `LiturgicalDay1962
 * extends LiturgicalDay` (and `Calendar<LiturgicalDay1962>` by extension),
 * so we override only the runtime value via `Object.defineProperty` in the
 * constructor. The static type remains `'roman1969'`; consumers that need to
 * narrow should use the exported `Rite` union.
 */
export class LiturgicalDay1962 extends LiturgicalDay {
  /**
   * Commemorations attached to this day. Populated by
   * `Calendar1962#postReduceDay` from the occurrence losers; starts
   * empty and is filled in place, so the field is writable (unlike the
   * other extras which arrive via the constructor).
   */
  commemorations: readonly LiturgicalDayCommemoration[];

  readonly octaveOf?: OctaveOf;

  vigilOf?: string;

  readonly massReferences?: Record<string, string>;

  /**
   * True if this instance is the product of forward-transferring an
   * impeded Class I sancti (Rubricae 1960 §50). Populated by
   * {@link LiturgicalDay1962.withTransfer}, never set by the
   * constructor.
   */
  isTransferredReplacement?: boolean;

  /**
   * The original ISO date (`YYYY-MM-DD`) the feast was assigned to in
   * the 1960 Kalendarium, when this instance is a transfer replacement.
   * Populated by {@link LiturgicalDay1962.withTransfer}.
   */
  transferredFromDate?: string;

  /**
   * 1962 class (I-IV). Populated from the metadata side-channel stamped
   * at input-build time (`ProperOfTime1962`/`GeneralRoman1962`). Days
   * with no stamped metadata (e.g. leaked 1969 GeneralRoman IDs on
   * overlapping sancti) fall back to `undefined`, which the scorer
   * treats as Class IV.
   */
  readonly classOf1962?: Class1962;

  readonly kind1962?: Kind1962;

  /**
   * Stable 1962 key used by the precedence scorer (§15 Lord-feast
   * elevation, Triduum/Easter-octave bumps, etc.). For tempora this is
   * the PoT slug; for sancti this is the `fileKey`.
   */
  readonly key1962?: string;

  /**
   * Decimal 1960 rank used as the in-slot tiebreak in
   * `Calendar1962#resolveOccurrence` (after §96 tempora-ante-sancti).
   * Optional because tempora entries don't carry one.
   */
  readonly numericRank1962?: number;

  /**
   * The `Precedence1962` slot this entry maps to under Rubricae 1960 §91.
   * Populated from the meta side-channel; consumed by
   * `Calendar1962#resolveOccurrence` via `PRECEDENCES_1962.indexOf`.
   */
  readonly precedence1962?: Precedence1962;

  constructor(
    def: LiturgicalDayDef,
    date: Date,
    ldConfig: LiturgicalDayConfig,
    calendar: RomcalCalendarMetadata,
    baseData: LiturgicalDay | null,
    weekday: LiturgicalDay | null,
    extras: LiturgicalDay1962Extras = {}
  ) {
    super(def, date, ldConfig, calendar, baseData, weekday);
    // Non-enumerable so snapshots / JSON shape stay matching the 1969 base.
    Object.defineProperty(this, 'rite', {
      value: 'roman1962',
      writable: false,
      enumerable: false,
      configurable: true,
    });
    this.commemorations = extras.commemorations ?? [];
    if (extras.octaveOf) this.octaveOf = extras.octaveOf;
    if (extras.vigilOf) this.vigilOf = extras.vigilOf;
    if (extras.massReferences) this.massReferences = extras.massReferences;

    const meta = getMeta1962(def.id);
    if (meta) {
      this.classOf1962 = meta.classOf1962;
      this.kind1962 = meta.kind1962;
      this.key1962 = meta.key1962;
      this.numericRank1962 = meta.numericRank1962;
      this.precedence1962 = meta.precedence1962;
      // Prefer explicit extras.vigilOf if the caller supplied one; otherwise
      // lift the stamped meta value. (Extras only flow through the OOP
      // constructor in tests today; in production the meta side-channel is
      // the source of truth.)
      if (!this.vigilOf && meta.vigilOf) this.vigilOf = meta.vigilOf;
    }
  }

  /**
   * Stamp transfer provenance on this instance (mutating in place) and
   * return it. Used by `Calendar1962#generateCalendar` after it has
   * constructed a fresh `LiturgicalDay1962` for the landing date via
   * the normal `createLiturgicalDay` factory path.
   *
   * Why not a clone: the 1969 base `LiturgicalDay` ctor sets private
   * fields (`#liturgicalDayDef`, `#liturgicalDayConfig`) that drive the
   * `name`/`colorNames`/`seasonNames` getters. `Object.assign` + proto-
   * clone can't copy these because they're stored in per-class WeakMap
   * slots (esbuild's private-field emit). The caller must therefore
   * build a real instance via the factory, then ask this method to
   * stamp the transfer bits.
   *
   * The narrow `as unknown as { ... }` cast lets us set fields declared
   * `readonly` at the type level (`date` is inherited from the base) on
   * an instance we own; this is the single escape hatch in the OOP
   * transfer pipeline.
   */
  stampTransfer(originalDate: string): LiturgicalDay1962 {
    (this as unknown as { isTransferredReplacement: boolean }).isTransferredReplacement = true;
    (this as unknown as { transferredFromDate: string }).transferredFromDate = originalDate;
    return this;
  }
}
