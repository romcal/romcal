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
