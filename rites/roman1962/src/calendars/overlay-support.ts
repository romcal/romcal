import { Color, Colors, LiturgicalDayInput, Precedence, Precedences } from '@internal/rite-roman1969';
import type { Inputs, MonthIndex } from '@internal/rite-roman1969';

import { setMeta1962 } from '../meta-1962';
import { detectVigil } from '../vigil';

import { setOverlayNames } from './overlay-names';

type Rank1962 = 'ClassI' | 'ClassII' | 'ClassIII' | 'ClassIV' | 'Ferial';

/**
 * Lossy Rank1962 → 1969 Precedence map. Kept in lockstep with
 * `general-roman.ts#RANK_1962_TO_PRECEDENCE` so universal and overlay
 * entries end up on the same precedence scale before the 1962 scorer
 * ranks them.
 */
const RANK_1962_TO_PRECEDENCE: Record<Rank1962, Precedence> = {
  ClassI: Precedences.ProperSolemnity_PrincipalPatron_4a,
  ClassII: Precedences.GeneralFeast_7,
  ClassIII: Precedences.GeneralMemorial_10,
  ClassIV: Precedences.OptionalMemorial_12,
  Ferial: Precedences.Weekday_13,
};

/**
 * Color string → 1969 `Color` enum. Duplicated (tiny) from
 * `general-roman.ts#mapColor` so overlays don't reach into that module.
 */
function mapColor(value: string): Color | undefined {
  switch (value) {
    case 'Red':
      return Colors.Red;
    case 'White':
      return Colors.White;
    case 'Purple':
      return Colors.Purple;
    case 'Green':
      return Colors.Green;
    case 'Rose':
      return Colors.Rose;
    case 'Black':
      return Colors.Black;
    case 'Gold':
      return Colors.Gold;
    default:
      return undefined;
  }
}

function resolveColors(raw: string[] | undefined): Color[] {
  if (!raw || raw.length === 0) return [Colors.White];
  const mapped = raw.map(mapColor).filter((c): c is Color => c !== undefined);
  return mapped.length > 0 ? mapped : [Colors.White];
}

function parseMmdd(mmdd: string): { month: MonthIndex; date: number } {
  const [mm, dd] = mmdd.split('-').map((s) => parseInt(s, 10));
  return { month: mm as MonthIndex, date: dd };
}

/**
 * Overlay entry shape used by the OOP overlay classes. Mirrors the
 * legacy `CalendarOverlayEntry` but is self-contained to keep the OOP
 * tree independent from the legacy dir tree (which B2e will prune).
 */
export interface OverlayInputEntry {
  readonly mmdd: string;
  readonly fileKey: string;
  readonly name: string;
  readonly class1962: 1 | 2 | 3 | 4;
  readonly rank1962: Rank1962;
  readonly numericRank: number;
  readonly mode?: 'add' | 'raise' | 'replace';
  readonly mass?: {
    readonly colors: string[];
    readonly rubrics?: { gloria?: boolean; credo?: boolean };
  };
  readonly names?: Partial<Record<string, string>>;
}

/**
 * Stamp the 1962 meta + overlay-names side-channels for the given
 * entries. Split out from {@link buildOverlayInputs} because parent-
 * calendar construction order in the 1969 engine means the overlay's
 * inputs field (which calls this) runs BEFORE the parent's class
 * field init (which, for `GeneralRoman1962`, stamps a lower-class
 * meta for the same `fileKey` on `raise` mode). Each overlay's
 * `updateConfig` calls `stampOverlayMeta` again after super to
 * re-assert its own classes over any parent stamp.
 */
export function stampOverlayMeta(entries: readonly OverlayInputEntry[]): void {
  for (const entry of entries) {
    const vigilOf = detectVigil(entry.name);
    setMeta1962(entry.fileKey, {
      classOf1962: entry.class1962,
      kind1962: 'sancti',
      key1962: entry.fileKey,
      numericRank1962: entry.numericRank,
      ...(vigilOf ? { vigilOf } : {}),
    });

    if (entry.names) {
      const filtered: Record<string, string> = {};
      for (const [lang, value] of Object.entries(entry.names)) {
        if (typeof value === 'string') filtered[lang] = value;
      }
      if (Object.keys(filtered).length > 0) {
        setOverlayNames(entry.fileKey, filtered);
      }
    }
  }
}

/**
 * Build an `Inputs` map for a single overlay. Each entry becomes a
 * `LiturgicalDayInput` keyed by its `fileKey`.
 *
 * Mode handling:
 *   - `add`: emits a fresh input; if the fileKey is unique (the usual
 *     case) it stands alone. Overlay-local collisions lose to
 *     last-declared-wins via the engine's previousDef merge.
 *   - `raise`: re-declares an existing id from `GeneralRoman1962` with
 *     a higher precedence. The engine's `LiturgicalDayDef` constructor
 *     merges the new input over the previousDef (same id in
 *     `config.liturgicalDayDef`), so the bumped precedence + class1962
 *     metadata flow through.
 *   - `replace`: unused today in all 9 overlays. Implemented identical
 *     to `raise` (which is sufficient when no colliding-mmdd siblings
 *     exist). A future `replace` with same-date collisions would need
 *     sibling `drop: true` inputs; flagged for B2e if ever needed.
 *
 * Stamps the meta + names side-channels eagerly so any lookups during
 * input consumption see the overlay's class. Overlays re-stamp from
 * their `updateConfig` hook so parent (GeneralRoman1962) stamps don't
 * clobber a `raise`-mode bump.
 */
export function buildOverlayInputs(entries: readonly OverlayInputEntry[]): Inputs {
  const inputs: Inputs = {};

  stampOverlayMeta(entries);

  for (const entry of entries) {
    const { month, date } = parseMmdd(entry.mmdd);
    const colors = resolveColors(entry.mass?.colors);
    const rank1962 = entry.rank1962;

    const input: LiturgicalDayInput = {
      precedence: RANK_1962_TO_PRECEDENCE[rank1962],
      dateDef: { month, date },
      colors,
      isHolyDayOfObligation: false,
      isOptional: rank1962 === 'Ferial' || rank1962 === 'ClassIV',
    };

    inputs[entry.fileKey] = input;
  }

  return inputs;
}
