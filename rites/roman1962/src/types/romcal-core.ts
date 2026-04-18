import type { i18n } from '@internal/rite-roman1969';

/**
 * Rite-neutral contracts shared by `Romcal` (1969) and `Romcal1962`.
 * Originally lived in `@internal/romcal-core`; the upstream maintainers
 * rejected the shared-package reshape so these moved back into 1962
 * where they're the only remaining consumer. Phase B of the
 * 2026-04-18 pivot folds `Romcal1962` into `Romcal` and deletes these
 * contracts entirely.
 */

/**
 * Rite-neutral root shape every rite-specific config class exposes.
 * Kept intentionally tiny: a locale id and a fully-initialised i18next
 * instance. The rest of the config surface (calendar scope, rubric
 * flags, overlay selection, output options) diverges between rites and
 * lives on the rite-specific subclass/interface.
 */
export interface IRomcalConfigRoot {
  readonly localeId: string;
  readonly i18next: i18n;
}

/**
 * Common structural shape for a resolved liturgical day, shared by
 * every rite. Kept intentionally minimal — just what a consumer
 * needs to display a single celebration without knowing which rite
 * produced it.
 *
 * Rite-specific fields (1969's `id`/`seasons`/`martyrology`;
 * 1962's `key`/`classOf1962`/`rubrics`) are not part of this
 * contract. Narrow to the rite-specific type when you need them.
 */
export interface ILiturgicalDayRoot {
  readonly date: string;
  readonly name: string;
}

/**
 * Common structural shape for a year-agnostic celebration
 * definition. 1969's `LiturgicalDayDef` carries martyrology and
 * date exceptions; 1962's `LiturgicalDayDef1962` carries a fixed
 * `mmdd`. Only the Latin display `name` is universally present.
 */
export interface ILiturgicalDayDefRoot {
  readonly name: string;
}

/**
 * Per-year runtime context shared by every rite. Generic over the
 * rite-specific config type (1969's `RomcalConfig`, 1962's
 * `Romcal1962Config`) so implementations can expose their own
 * config surface while still satisfying the shared contract.
 *
 * @template TConfig - rite-specific config class type
 */
export interface ILiturgicalDayConfigRoot<TConfig> {
  readonly config: TConfig;
  readonly year: number;
}

/**
 * Options for `IRomcal#getOneLiturgicalDay`. Kept identical across
 * rites — both 1969 and 1962 accept `{year?, computeInWholeYear?}`.
 */
export interface GetOneLiturgicalDayOptions {
  year?: number | string;
  computeInWholeYear?: boolean;
}

/**
 * Rite-neutral Romcal API contract. Generic over the rite-specific
 * result types so each rite can return its own enriched shapes
 * while still presenting a uniform method surface to consumers.
 *
 * Current conformers: `Romcal` (1969), `Romcal1962`.
 *
 * @template TDay       - rite-specific LiturgicalDay type
 * @template TCalendar  - rite-specific resolved-year map type
 * @template TDefs      - rite-specific LiturgicalDayDefinitions record
 * @template TDates     - rite-specific per-year date/anchor API
 *                        (1969's `Dates` class; 1962's `YearAnchors`)
 */
export interface IRomcal<TDay, TCalendar, TDefs, TDates> {
  dates(year?: number | string): TDates;
  generateCalendar(year?: number | string): Promise<TCalendar>;
  getAllDefinitions(): Promise<TDefs>;
  getOneLiturgicalDay(id: string, options?: GetOneLiturgicalDayOptions): Promise<TDay | null | undefined>;
}
