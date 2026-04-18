import fs from 'node:fs';
import path from 'node:path';

import { CalendarDef, Color, Colors, LiturgicalDayInput, Precedence, Precedences } from '@internal/rite-roman1969';
import type { Inputs, MonthIndex, ParticularConfig, Rank } from '@internal/rite-roman1969';

import { setMeta1962 } from './meta-1962';
import { detectVigil } from './vigil';

// -- JSON shapes (mirrored locally so we don't reach into `src/sanctoral/*`,
// which B2e will delete). -----------------------------------------------------

type Rank1962 = 'ClassI' | 'ClassII' | 'ClassIII' | 'ClassIV' | 'Ferial';

interface CalendarCommemoration {
  readonly name: string;
  readonly numericRank: number;
  readonly fileKey?: string;
}

interface CalendarEntry {
  readonly fileKey: string;
  readonly name: string;
  readonly numericRank: number;
  readonly class1962?: 1 | 2 | 3 | 4;
  readonly rank1962: Rank1962;
  readonly commemorations?: CalendarCommemoration[];
}

type Calendar1960 = Record<string, CalendarEntry[]>;

interface RankInfo {
  readonly numericRank: number;
  readonly class1962?: 1 | 2 | 3 | 4;
  readonly rank1962: Rank1962;
}

interface MassFileEntry {
  readonly colors?: string[];
  readonly rank?: RankInfo;
}

type MassFileMap = Record<string, MassFileEntry>;

// -- Data loading (cached at module scope; same pattern as legacy
// `sanctoral/data.ts`, but scoped to the fields the OOP overlay needs). -------

const DATA_DIR = path.resolve(__dirname, '../../data');

let _calendar: Calendar1960 | undefined;
let _sancti: MassFileMap | undefined;
let _tempora: MassFileMap | undefined;

function loadCalendar(): Calendar1960 {
  if (!_calendar) {
    const raw = fs.readFileSync(path.join(DATA_DIR, 'calendar-1960.json'), 'utf8');
    _calendar = JSON.parse(raw) as Calendar1960;
  }
  return _calendar;
}

function loadSancti(): MassFileMap {
  if (!_sancti) {
    const raw = fs.readFileSync(path.join(DATA_DIR, 'sancti.json'), 'utf8');
    _sancti = JSON.parse(raw) as MassFileMap;
  }
  return _sancti;
}

function loadTempora(): MassFileMap {
  if (!_tempora) {
    const raw = fs.readFileSync(path.join(DATA_DIR, 'tempora.json'), 'utf8');
    _tempora = JSON.parse(raw) as MassFileMap;
  }
  return _tempora;
}

// -- Rank + color mapping ----------------------------------------------------

/**
 * Lossy Rank1962 → 1969 Precedence map. Keeps sanctoral ordering roughly
 * coherent under the 1969 engine's precedence comparator. Full 1962 rank
 * fidelity is layered by B2d via `postReduceDay` + `resolveOccurrence`.
 */
const RANK_1962_TO_PRECEDENCE: Record<Rank1962, Precedence> = {
  ClassI: Precedences.ProperSolemnity_PrincipalPatron_4a,
  ClassII: Precedences.GeneralFeast_7,
  ClassIII: Precedences.GeneralMemorial_10,
  ClassIV: Precedences.OptionalMemorial_12,
  Ferial: Precedences.Weekday_13,
};

/**
 * Map the string colors baked into sancti/tempora JSON (e.g. "Purple",
 * "White") onto the 1969 `Color` enum. Sancti/tempora in this corpus only
 * emit Red/White/Purple/Green, so the fallback path is defensive.
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
      // TODO: if a future 1962 data revision introduces colors outside this
      // set, extend the mapping or emit a warning.
      return undefined;
  }
}

function resolveColors(mass: MassFileEntry | undefined): Color[] {
  const raw = mass?.colors;
  if (!raw || raw.length === 0) return [Colors.White];
  const mapped = raw.map(mapColor).filter((c): c is Color => c !== undefined);
  return mapped.length > 0 ? mapped : [Colors.White];
}

function pickMassFile(fileKey: string, sancti: MassFileMap, tempora: MassFileMap): MassFileEntry | undefined {
  if (fileKey in sancti) return sancti[fileKey];
  if (fileKey in tempora) return tempora[fileKey];
  return undefined;
}

interface AuthoritativeRank {
  readonly rank1962: Rank1962;
  readonly numericRank: number;
  readonly class1962?: 1 | 2 | 3 | 4;
}

/**
 * Mirrors legacy `sanctoral/resolver.ts#pickAuthoritativeRank`: take the max
 * of the calendar's integer rank and the mass file's (1960-era) decimal rank.
 * Empirically matches the 1962 universal calendar on edge cases (All Saints,
 * Vigil of Ss. Peter & Paul, St Patrick). Extended here to also return the
 * authoritative `class1962` + `numericRank` used by the OOP precedence
 * scorer (§15 Lord-feast bumps need `class1962 <= 2`).
 */
function pickAuthoritativeRank(calEntry: CalendarEntry, mass: MassFileEntry | undefined): AuthoritativeRank {
  const massRank = mass?.rank;
  if (massRank && massRank.numericRank > calEntry.numericRank) {
    return {
      rank1962: massRank.rank1962,
      numericRank: massRank.numericRank,
      class1962: massRank.class1962 ?? calEntry.class1962,
    };
  }
  return {
    rank1962: calEntry.rank1962,
    numericRank: calEntry.numericRank,
    class1962: calEntry.class1962,
  };
}

// -- Inputs construction -----------------------------------------------------

function parseMmdd(mmdd: string): { month: MonthIndex; date: number } {
  const [mm, dd] = mmdd.split('-').map((s) => parseInt(s, 10));
  return { month: mm as MonthIndex, date: dd };
}

/**
 * Build the `Inputs` map for the 1962 sanctoral (+ proper-kalendar items that
 * live alongside the sanctoral in calendar-1960.json). Only the primary entry
 * per date is emitted; commemorations are deferred to B2d (`postReduceDay`
 * drains `calEntry.commemorations` onto the winning day).
 *
 * The "01-00" synthetic entry (Most Holy Name of Jesus) is skipped: the
 * movable Sunday is already emitted by `ProperOfTime1962`.
 */
export function buildGeneralRoman1962Inputs(): Inputs {
  const calendar = loadCalendar();
  const sancti = loadSancti();
  const tempora = loadTempora();

  const inputs: Inputs = {};

  for (const [mmdd, entries] of Object.entries(calendar)) {
    if (mmdd === '01-00') continue;
    if (entries.length === 0) continue;

    const primary = entries[0];
    const mass = pickMassFile(primary.fileKey, sancti, tempora);
    const authoritative = pickAuthoritativeRank(primary, mass);
    const { rank1962, numericRank } = authoritative;
    const { month, date } = parseMmdd(mmdd);

    const input: LiturgicalDayInput = {
      precedence: RANK_1962_TO_PRECEDENCE[rank1962],
      dateDef: { month, date },
      colors: resolveColors(mass),
      isHolyDayOfObligation: false,
      isOptional: rank1962 === 'Ferial' || rank1962 === 'ClassIV',
    };

    // Stamp 1962 metadata side-channel so LiturgicalDay1962OOP can surface
    // `classOf1962`/`kind1962`/`key1962` fields and so the overridden
    // `Calendar1962OOP#resolveOccurrence` can score by 1962 rubrics.
    // Ferial entries with no `class1962` default to Class IV.
    const vigilOf = detectVigil(primary.name);
    setMeta1962(primary.fileKey, {
      classOf1962: (authoritative.class1962 ?? 4) as 1 | 2 | 3 | 4,
      kind1962: 'sancti',
      key1962: primary.fileKey,
      numericRank1962: numericRank,
      ...(vigilOf ? { vigilOf } : {}),
    });

    // Jan 1: Circumcision of the Lord is the Christmas octave-day. Tag it
    // with the declarative-octave seam so B2d can reason about it, but keep
    // `days: 0` for now: the engine's `#buildOctaveDefinitions` shifts
    // dateDefs by `addDay`, which `#dateLookup` only honours for
    // DateDefDateFnAddDay — for a `{month,date}` dateDef all N shifted defs
    // would resolve to the source date and double-emit. B2d will expand the
    // Christmas octave itself via PoT-side hooks, not this seam.
    if (mmdd === '01-01') {
      // `Ranks.Feast` (= 'FEAST'). Literal-string form avoids a detour through
      // the static `Romcal.Ranks` re-export.
      input.octave = { rank: 'FEAST' as Rank, days: 0 };
    }

    inputs[primary.fileKey] = input;
  }

  return inputs;
}

/**
 * 1962 sanctoral + proper-kalendar overlay, expressed as a
 * `CalendarDef` subclass so it slots into the 1969 engine's
 * particular-calendar seam (`RomcalConfig` 4th ctor arg).
 *
 * Only primary entries are emitted here. Commemorations are layered by
 * `Calendar1962OOP#postReduceDay` in B2d using the `commemorations`
 * array stashed on each CalendarEntry.
 */
export class GeneralRoman1962 extends CalendarDef {
  particularConfig: ParticularConfig = {};

  inputs: Inputs = buildGeneralRoman1962Inputs();
}
