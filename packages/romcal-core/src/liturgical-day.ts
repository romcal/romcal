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
