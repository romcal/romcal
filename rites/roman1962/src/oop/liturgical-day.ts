import { LiturgicalDay, LiturgicalDayConfig, LiturgicalDayDef, RomcalCalendarMetadata } from '@internal/rite-roman1969';

/**
 * Placeholder shape for an 1962 commemoration. Grown in B2c/B2d.
 */
export type LiturgicalDayCommemoration = {
  id: string;
  name: string;
};

/**
 * Placeholder shape for octave-day provenance. Grown in B2c/B2d.
 */
export type OctaveOf = {
  ofId: string;
  day: number;
};

export type LiturgicalDay1962Extras = {
  commemorations?: readonly LiturgicalDayCommemoration[];
  octaveOf?: OctaveOf;
  vigilOf?: string;
  massReferences?: Record<string, string>;
};

/**
 * 1962-rite subclass of the generic `LiturgicalDay`. B2a ships only the
 * skeleton fields; B2c/B2d will wire real data through `extras`.
 *
 * Note on `rite`: the base declares `readonly rite!: 'roman1969'`. Narrowing
 * to the 1962 literal at the TS level would break `LiturgicalDay1962OOP
 * extends LiturgicalDay` (and `Calendar<LiturgicalDay1962OOP>` by extension),
 * so we override only the runtime value via `Object.defineProperty` in the
 * constructor. The static type remains `'roman1969'`; consumers that need to
 * narrow should use the exported `Rite` union.
 */
export class LiturgicalDay1962OOP extends LiturgicalDay {
  readonly commemorations: readonly LiturgicalDayCommemoration[];

  readonly octaveOf?: OctaveOf;

  readonly vigilOf?: string;

  readonly massReferences?: Record<string, string>;

  constructor(
    def: LiturgicalDayDef,
    date: Date,
    ldConfig: LiturgicalDayConfig,
    calendar: RomcalCalendarMetadata,
    baseData: LiturgicalDay | null,
    weekday: LiturgicalDay | null,
    extras: LiturgicalDay1962Extras = {}
  ) {
    super(def, date, ldConfig, calendar, baseData, weekday);
    // Non-enumerable so snapshots / JSON shape stay matching the 1969 base.
    Object.defineProperty(this, 'rite', {
      value: 'roman1962',
      writable: false,
      enumerable: false,
      configurable: true,
    });
    this.commemorations = extras.commemorations ?? [];
    if (extras.octaveOf) this.octaveOf = extras.octaveOf;
    if (extras.vigilOf) this.vigilOf = extras.vigilOf;
    if (extras.massReferences) this.massReferences = extras.massReferences;
  }
}
