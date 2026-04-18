export type Kind1962 = 'tempora' | 'sancti';
export type Class1962 = 1 | 2 | 3 | 4;

export interface LiturgicalDay1962Meta {
  readonly classOf1962: Class1962;
  readonly kind1962: Kind1962;
  /**
   * The stable 1962 key for this day: the tempora slug for temporal
   * entries, the sancti `fileKey` for sanctoral entries. Used by
   * `scorePrecedence` fine adjustments (e.g. Triduum bump, §15 Lord
   * feast elevation).
   */
  readonly key1962: string;
  /**
   * Optional decimal rank from the 1960 Kalendarium. Used by
   * `scorePrecedence` as a sub-centi tiebreaker (`* 0.01`); flows to 0
   * cleanly when undefined.
   */
  readonly numericRank1962?: number;
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
