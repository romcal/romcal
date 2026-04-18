import type { LiturgicalCalendar } from '@internal/rite-roman1969';

import { buildLiturgicalYear1962 } from '../calendar-year';
import {
  Switzerland_Basel as LegacySwitzerlandBasel,
  Switzerland_Lugano as LegacySwitzerlandLugano,
} from '../calendars';
import type { CalendarOverlay1962 } from '../calendars/types';
import type { LiturgicalCalendar1962 } from '../models/liturgical-day';

import type { LiturgicalDay1962OOP } from './liturgical-day';
import { Romcal1962OOP, type Romcal1962OOPConfigInput } from './romcal';

type OopCal = LiturgicalCalendar<LiturgicalDay1962OOP>;

/**
 * Collect transferred-feast fingerprints from a legacy calendar — the set
 * of `${landingDate}::${feastKey}::${originalDate}` tuples. The
 * fingerprint is immune to both slug-convention and class-divergence
 * differences between legacy and OOP, so it's the sharpest invariant we
 * can assert across engines.
 */
function legacyTransferFingerprints(cal: LiturgicalCalendar1962): Set<string> {
  const out = new Set<string>();
  for (const [date, days] of Object.entries(cal)) {
    const primary = days[0];
    if (primary?.isTransferredReplacement && primary.transferredFromDate) {
      out.add(`${date}::${primary.key}::${primary.transferredFromDate}`);
    }
  }
  return out;
}

function oopTransferFingerprints(cal: OopCal): Set<string> {
  const out = new Set<string>();
  for (const [date, days] of Object.entries(cal)) {
    const primary = days[0];
    if (primary?.isTransferredReplacement && primary.transferredFromDate) {
      out.add(`${date}::${primary.id}::${primary.transferredFromDate}`);
    }
  }
  return out;
}

/**
 * Overlay fixtures pair a legacy `CalendarOverlay1962` constructor with
 * the PascalCase-string-selector accepted by
 * {@link Romcal1962OOPConfigInput#particularCalendar}, so a single row
 * drives both engines.
 */
interface OverlayFixture {
  readonly name: string;
  readonly selector: Romcal1962OOPConfigInput['particularCalendar'];
  readonly legacy: new () => CalendarOverlay1962;
  readonly markers: ReadonlyArray<{ mmdd: string; expectedKey: string; note: string }>;
}

const OVERLAY_FIXTURES: readonly OverlayFixture[] = [
  {
    name: 'universal (no overlay)',
    selector: undefined,
    // Universal runs through the same default path as an overlay-less
    // `Romcal1962OOP()`, so the legacy-side fixture is a no-op shim.
    legacy: null as unknown as new () => CalendarOverlay1962,
    markers: [
      { mmdd: '06-29', expectedKey: 'saints_peter_and_paul_apostles', note: 'Class I sancti' },
      { mmdd: '08-15', expectedKey: 'assumption_of_the_blessed_virgin_mary', note: 'Class I sancti' },
      { mmdd: '11-01', expectedKey: 'all_saints', note: 'Class I sancti' },
    ],
  },
  {
    name: 'Switzerland_Lugano',
    selector: 'Switzerland_Lugano',
    legacy: LegacySwitzerlandLugano,
    markers: [
      {
        mmdd: '11-04',
        expectedKey: 'saint_charles_borromeo_bishop_and_confessor',
        note: 'overlay raises universal entry to Class I',
      },
      {
        mmdd: '09-25',
        expectedKey: 'saint_nicholas_of_flue_hermit_patron_of_switzerland',
        note: 'inherited from Switzerland parent',
      },
    ],
  },
  {
    name: 'Switzerland_Basel',
    selector: 'Switzerland_Basel',
    legacy: LegacySwitzerlandBasel,
    markers: [
      {
        mmdd: '09-30',
        expectedKey: 'saints_ursus_and_victor_of_solothurn_martyrs_patrons',
        note: 'Class I diocesan patrons displace universal St Jerome',
      },
      {
        mmdd: '09-25',
        expectedKey: 'saint_nicholas_of_flue_hermit_patron_of_switzerland',
        note: 'inherited from Switzerland parent',
      },
    ],
  },
];

const YEARS = [2024, 2025, 2026] as const;

async function buildOop(selector: Romcal1962OOPConfigInput['particularCalendar'], year: number): Promise<OopCal> {
  const input: Romcal1962OOPConfigInput = selector === undefined ? {} : { particularCalendar: selector };
  return new Romcal1962OOP(input).generateCalendar(year);
}

function buildLegacy(overlay: OverlayFixture['legacy'], year: number): LiturgicalCalendar1962 {
  if (!overlay) return buildLiturgicalYear1962(year);
  return buildLiturgicalYear1962(year, { overlay: new overlay() });
}

describe('1962 OOP ↔ legacy parity (B2d-4)', () => {
  // Date coverage and transfer fingerprints are the two invariants we pin
  // across engines. Primary-key equality on every date is NOT asserted
  // globally — the OOP and legacy Proper-of-Time emit distinct tempora
  // slugs (e.g. `epiphany_1_monday` vs `3rd_day_in_the_octave_of_the_epiphany`),
  // and the OOP precedence scorer intentionally diverges from legacy for a
  // handful of Lord feasts (e.g. Dec 25 surfaces the tempora source in OOP
  // but the sancti in legacy). Those differences are contracted in their
  // respective unit specs; this file verifies the year-level wiring.
  describe.each(OVERLAY_FIXTURES)('$name', (fixture) => {
    describe.each(YEARS)('year %i', (year) => {
      let oop: OopCal;
      let legacy: LiturgicalCalendar1962;

      beforeAll(async () => {
        oop = await buildOop(fixture.selector, year);
        legacy = buildLegacy(fixture.legacy, year);
      });

      it('date coverage matches exactly', () => {
        const oopDates = Object.keys(oop).sort();
        const legacyDates = Object.keys(legacy).sort();
        expect(oopDates).toEqual(legacyDates);
      });

      it('transferred-feast fingerprints match (landing date, key, original date)', () => {
        const oopFp = [...oopTransferFingerprints(oop)].sort();
        const legacyFp = [...legacyTransferFingerprints(legacy)].sort();
        expect(oopFp).toEqual(legacyFp);
      });

      it.each(fixture.markers)('marker $mmdd surfaces $expectedKey ($note)', ({ mmdd, expectedKey }) => {
        const date = `${year}-${mmdd}`;
        const oopPrimary = oop[date]?.[0];
        const legacyPrimary = legacy[date]?.[0];
        expect(oopPrimary?.id).toBe(expectedKey);
        expect(legacyPrimary?.key).toBe(expectedKey);
      });
    });
  });

  describe('Class I sancti primaries surface consistently (universal 2024)', () => {
    let oop: OopCal;
    let legacy: LiturgicalCalendar1962;

    beforeAll(async () => {
      oop = await buildOop(undefined, 2024);
      legacy = buildLegacy(null as unknown as OverlayFixture['legacy'], 2024);
    });

    // Picks a representative Class I sancti per quarter so a regression in
    // sancti wiring would trip here. Dates where the sancti is impeded
    // (transferred) are deliberately excluded — that's covered by the
    // transfer-fingerprint invariant above.
    it.each([
      ['2024-02-02', 'the_purification_of_the_blessed_virgin_mary_candlemas'],
      ['2024-06-29', 'saints_peter_and_paul_apostles'],
      ['2024-08-15', 'assumption_of_the_blessed_virgin_mary'],
      ['2024-11-01', 'all_saints'],
    ])('%s primary is %s in both engines', (date, expectedKey) => {
      expect(oop[date]?.[0]?.id).toBe(expectedKey);
      expect(legacy[date]?.[0]?.key).toBe(expectedKey);
    });
  });
});
