import type { Precedence1962 } from './constants/precedences-1962';

export type Kind1962 = 'tempora' | 'sancti';
export type Class1962 = 1 | 2 | 3 | 4;

export interface LiturgicalDay1962Meta {
  readonly classOf1962: Class1962;
  readonly kind1962: Kind1962;
  /**
   * Stable 1962 key for this day: the tempora slug for temporal entries,
   * the sancti `fileKey` for sanctoral entries. Consumed by
   * {@link derivePrecedence1962} when computing the {@link precedence1962}
   * slot.
   */
  readonly key1962: string;
  /**
   * Optional decimal rank from the 1960 Kalendarium. Used by
   * `Calendar1962#resolveOccurrence` as the in-slot tiebreak after §96
   * (tempora ante sancti); flows to 0 cleanly when undefined. Phase C6
   * reassesses whether to keep this now that the JSON data rewrite
   * (Phase C4) no longer needs numericRank for ordering.
   */
  readonly numericRank1962?: number;
  /**
   * The `Precedence1962` slot this entry maps to under Rubricae 1960
   * §91 (see `precedence-1962-derive.ts`). Authoritative ordering field
   * consumed by `Calendar1962#resolveOccurrence` via
   * `PRECEDENCES_1962.indexOf`.
   */
  readonly precedence1962?: Precedence1962;
  /**
   * If this entry is a "Vigilia …" header, the Latin name fragment of
   * the feast it is a vigil OF (as returned by `detectVigil`). Used by
   * `Calendar1962#generateCalendar` to suppress vigils when their
   * parent feast is forward-transferred (Rubricae 1960 §10).
   */
  readonly vigilOf?: string;
}

/**
 * Module-scope metadata side-channel. `Calendar1962#createLiturgicalDay`
 * stays a thin factory; 1962-specific classification is stamped at input
 * build-time and read back here from the `LiturgicalDay1962` constructor.
 */
const META: Map<string, LiturgicalDay1962Meta> = new Map();

export function setMeta1962(id: string, meta: LiturgicalDay1962Meta): void {
  META.set(id, meta);
}

export function getMeta1962(id: string): LiturgicalDay1962Meta | undefined {
  return META.get(id);
}

export function clearMeta1962(): void {
  META.clear();
}
