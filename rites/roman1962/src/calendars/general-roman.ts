import fs from 'node:fs';
import path from 'node:path';

import { CalendarDef, Color, Colors, LiturgicalDayInput, Precedence, Precedences } from '@internal/rite-roman1969';
import type { Inputs, MonthIndex, ParticularConfig, Rank } from '@internal/rite-roman1969';

import type { Class1962 } from '../meta-1962';
import { setMeta1962 } from '../meta-1962';
import { derivePrecedence1962 } from '../precedence-1962-derive';
import { detectVigil } from '../vigil';

// -- JSON shapes (mirrored locally so we don't reach into `src/sanctoral/*`,
// which B2e will delete). -----------------------------------------------------

interface CalendarCommemoration {
  readonly name: string;
  readonly fileKey?: string;
}

interface CalendarEntry {
  readonly fileKey: string;
  readonly name: string;
  readonly class1962: Class1962;
  readonly commemorations?: CalendarCommemoration[];
}

type Calendar1960 = Record<string, CalendarEntry[]>;

interface MassFileEntry {
  readonly colors?: string[];
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

// -- Class + color mapping --------------------------------------------------

/**
 * Lossy `Class1962` → 1969 `Precedence` map. The 1969 engine's occurrence
 * resolver sorts `LiturgicalDayInput.precedence` first; `Calendar1962`
 * then re-resolves via its own `PRECEDENCES_1962`-based comparator
 * (see `calendar.ts#resolveOccurrence`), so this mapping only has to
 * preserve enough ordering that the 1969 pipeline doesn't reject
 * sanctoral entries outright. Also used by overlays
 * (`overlay-support.ts`) so universal and overlay entries land on the
 * same rough scale before the 1962 comparator reorders them.
 */
export const CLASS_1962_TO_PRECEDENCE: Record<Class1962, Precedence> = {
  1: Precedences.ProperSolemnity_PrincipalPatron_4a,
  2: Precedences.GeneralFeast_7,
  3: Precedences.GeneralMemorial_10,
  4: Precedences.OptionalMemorial_12,
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

// -- Inputs construction -----------------------------------------------------

function parseMmdd(mmdd: string): { month: MonthIndex; date: number } {
  const [mm, dd] = mmdd.split('-').map((s) => parseInt(s, 10));
  return { month: mm as MonthIndex, date: dd };
}

/**
 * Build the `Inputs` map for the 1962 sanctoral (+ proper-kalendar items that
 * live alongside the sanctoral in calendar-1960.json). Only the primary entry
 * per date is emitted; commemorations are layered by `postReduceDay`
 * selecting from the winning pool's losers.
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
    const { month, date } = parseMmdd(mmdd);
    const classOf1962 = primary.class1962;

    const input: LiturgicalDayInput = {
      precedence: CLASS_1962_TO_PRECEDENCE[classOf1962],
      dateDef: { month, date },
      colors: resolveColors(mass),
      isHolyDayOfObligation: false,
      isOptional: classOf1962 === 4,
    };

    // Stamp 1962 metadata side-channel so LiturgicalDay1962 surfaces
    // `classOf1962`/`kind1962`/`key1962`/`precedence1962` fields and so
    // the overridden `Calendar1962#resolveOccurrence` can sort by
    // Rubricae 1960 §91 slot.
    const vigilOf = detectVigil(primary.name);
    setMeta1962(primary.fileKey, {
      classOf1962,
      kind1962: 'sancti',
      key1962: primary.fileKey,
      precedence1962: derivePrecedence1962(classOf1962, primary.fileKey, 'sancti'),
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
 * `Calendar1962#postReduceDay` in B2d from the winning pool's losers.
 */
export class GeneralRoman1962 extends CalendarDef {
  particularConfig: ParticularConfig = {};

  inputs: Inputs = buildGeneralRoman1962Inputs();
}
