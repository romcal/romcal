import { Rank, Ranks } from '@internal/rite-roman1969';

import { Precedence1962, Precedences1962 } from './precedences-1962';
import { Rank1962 } from './rank-1962';

/**
 * The four classes of liturgical days under Rubricae 1960 (§91).
 * Narrower than the 15-slot `Precedence1962` — many slots share a class,
 * the class is a display/grouping label derived from the precedence.
 */
export const Class1962 = { I: 1, II: 2, III: 3, IV: 4 } as const;
export type Class1962 = (typeof Class1962)[keyof typeof Class1962];

/**
 * Equivalence: every `Precedence1962` maps to exactly one `Class1962`.
 * Mirrors the pattern of `RanksFromPrecedence` in the 1969 rite
 * (`rites/roman1969/src/constants/ranks.ts:84`).
 */
export const Class1962FromPrecedence1962: Record<Precedence1962, Class1962> = {
  [Precedences1962.Triduum_1a]: Class1962.I,
  [Precedences1962.EasterPentecostTrinity_1b]: Class1962.I,
  [Precedences1962.PrivilegedSunday_1c]: Class1962.I,
  [Precedences1962.AshWednesday_1d]: Class1962.I,
  [Precedences1962.HolyWeekFeria_1e]: Class1962.I,
  [Precedences1962.EasterOctaveFeria_1f]: Class1962.I,
  [Precedences1962.PentecostVigil_1g]: Class1962.I,
  [Precedences1962.ClassI_1h]: Class1962.I,
  [Precedences1962.ClassIIFeastOfTheLord_2a]: Class1962.II,
  [Precedences1962.PreLentSunday_2b]: Class1962.II,
  [Precedences1962.ClassIISunday_2c]: Class1962.II,
  [Precedences1962.ClassII_2d]: Class1962.II,
  [Precedences1962.LentFeria_3a]: Class1962.III,
  [Precedences1962.ClassIII_3b]: Class1962.III,
  [Precedences1962.ClassIV_4a]: Class1962.IV,
};

/**
 * Equivalence: every `Precedence1962` maps to a display `Rank1962` label
 * (used by `LocaleRanks` i18n — `rites/roman1962/src/types/locale.ts`).
 *
 * The legacy importer emitted `'Ferial'` for Class IV entries with
 * `numericRank <= 1` (commemorations) and `'ClassIV'` for `numericRank = 2`
 * (simple sancti). With `numericRank` removed from the data model, the
 * display label for the `ClassIV_4a` slot is picked per-entry at render
 * time rather than by slot — consumers that need the finer distinction
 * should inspect `kind1962` + commemoration status on the LD. For now
 * we default the slot label to `'Ferial'`, which renders correctly for
 * commemorations and tempora ferials (the majority); simple-feast
 * Class IV sancti land under this label too (cosmetic only, not used
 * for ordering).
 */
export const Rank1962FromPrecedence1962: Record<Precedence1962, Rank1962> = {
  [Precedences1962.Triduum_1a]: 'ClassI',
  [Precedences1962.EasterPentecostTrinity_1b]: 'ClassI',
  [Precedences1962.PrivilegedSunday_1c]: 'ClassI',
  [Precedences1962.AshWednesday_1d]: 'ClassI',
  [Precedences1962.HolyWeekFeria_1e]: 'ClassI',
  [Precedences1962.EasterOctaveFeria_1f]: 'ClassI',
  [Precedences1962.PentecostVigil_1g]: 'ClassI',
  [Precedences1962.ClassI_1h]: 'ClassI',
  [Precedences1962.ClassIIFeastOfTheLord_2a]: 'ClassII',
  [Precedences1962.PreLentSunday_2b]: 'ClassII',
  [Precedences1962.ClassIISunday_2c]: 'ClassII',
  [Precedences1962.ClassII_2d]: 'ClassII',
  [Precedences1962.LentFeria_3a]: 'ClassIII',
  [Precedences1962.ClassIII_3b]: 'ClassIII',
  [Precedences1962.ClassIV_4a]: 'Ferial',
};

/**
 * Equivalence: every `Precedence1962` maps to a 1969 `Rank` for
 * cross-rite display compatibility (Solemnity / Sunday / Feast /
 * Memorial / OptionalMemorial / Weekday). The `Ranks` enum is a
 * display-facing taxonomy shared across rites; the classification here
 * follows 1969's `RanksFromPrecedence` conventions where analogous slots
 * exist.
 */
export const RanksFromPrecedence1962: Record<Precedence1962, Rank> = {
  [Precedences1962.Triduum_1a]: Ranks.Weekday,
  [Precedences1962.EasterPentecostTrinity_1b]: Ranks.Solemnity,
  [Precedences1962.PrivilegedSunday_1c]: Ranks.Sunday,
  [Precedences1962.AshWednesday_1d]: Ranks.Weekday,
  [Precedences1962.HolyWeekFeria_1e]: Ranks.Weekday,
  [Precedences1962.EasterOctaveFeria_1f]: Ranks.Solemnity,
  [Precedences1962.PentecostVigil_1g]: Ranks.Solemnity,
  [Precedences1962.ClassI_1h]: Ranks.Solemnity,
  [Precedences1962.ClassIIFeastOfTheLord_2a]: Ranks.Feast,
  [Precedences1962.PreLentSunday_2b]: Ranks.Sunday,
  [Precedences1962.ClassIISunday_2c]: Ranks.Sunday,
  [Precedences1962.ClassII_2d]: Ranks.Feast,
  [Precedences1962.LentFeria_3a]: Ranks.Weekday,
  [Precedences1962.ClassIII_3b]: Ranks.Memorial,
  [Precedences1962.ClassIV_4a]: Ranks.Weekday,
};
