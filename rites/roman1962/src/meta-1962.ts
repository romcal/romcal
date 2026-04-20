import type { Precedence1962 } from './constants/precedences-1962';

export type Kind1962 = 'tempora' | 'sancti';
export type Class1962 = 1 | 2 | 3 | 4;

export interface LiturgicalDay1962Meta {
  readonly classOf1962: Class1962;
  readonly kind1962: Kind1962;
  /**
   * Stable 1962 key for this day: the tempora slug for temporal entries,
   * the sancti `key` for sanctoral entries. Consumed by
   * {@link derivePrecedence1962} when computing the {@link precedence1962}
   * slot.
   */
  readonly key1962: string;
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
  /**
   * Roman station-church(es) for this day, looked up at input build-time
   * from `data/stations.json`. Each entry carries an i18n `key` (the
   * station-church slug, e.g. `santa_maria_maggiore`) and an optional
   * `mass` discriminator for days with multiple stations across masses
   * (Christmas: `in_nocte` / `in_aurora` / `in_die`).
   *
   * Surfaced on `LiturgicalDay1962.stationChurches` with the localized
   * `name` resolved from the `stationChurches:<key>` i18n bundle.
   */
  readonly stationChurches?: readonly { readonly mass?: string; readonly key: string }[];
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
