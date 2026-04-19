import { Romcal1962 } from '../romcal-1962';

import { buildGeneralRoman1962Inputs, GeneralRoman1962 } from './general-roman';

/**
 * All LiturgicalDay ids at a given ISO date (in order), or [] if the date is
 * missing from the calendar.
 */
function idsAt(cal: Record<string, { id: string }[]>, date: string): string[] {
  return (cal[date] ?? []).map((d) => d.id);
}

// Module-level cache of the generated input IDs, used both by the
// "raw inputs" tests and the coverage test below.
const INPUT_IDS: Set<string> = new Set(Object.keys(buildGeneralRoman1962Inputs()));

describe('1962 General Roman sanctoral — raw inputs', () => {
  it('generates 279 primary-entry inputs (280 dates minus "01-00" synthetic)', () => {
    expect(INPUT_IDS.size).toBe(279);
  });

  it('includes expected keys', () => {
    for (const id of [
      'the_circumcision_of_the_lord',
      'saint_patrick_bishop_and_confessor',
      'saints_peter_and_paul_apostles',
      'all_saints',
      'immaculate_conception_of_the_blessed_virgin_mary',
      'assumption_of_the_blessed_virgin_mary',
    ]) {
      expect(INPUT_IDS.has(id)).toBe(true);
    }
  });

  it('skips the "01-00" outlier (Most Holy Name of Jesus — emitted by PoT)', () => {
    expect(INPUT_IDS.has('placeholder_01_00')).toBe(false);
  });

  it('marks Jan 1 with a declarative octave tag (days=0, rank=FEAST)', () => {
    const inputs = buildGeneralRoman1962Inputs();
    const circ = inputs['the_circumcision_of_the_lord'];
    const first = Array.isArray(circ) ? circ[0] : circ;
    expect(first.octave).toBeDefined();
    expect(first.octave?.days).toBe(0);
    expect(first.octave?.rank).toBe('FEAST');
  });

  it('GeneralRoman1962 is a function (CalendarDef subclass)', () => {
    expect(typeof GeneralRoman1962).toBe('function');
  });
});

describe('1962 General Roman sanctoral — liturgical year 2024', () => {
  let cal: Record<string, { id: string }[]>;

  beforeAll(async () => {
    const r = new Romcal1962();
    cal = (await r.generateCalendar(2024)) as unknown as Record<string, { id: string }[]>;
  });

  // These assertions probe dates where the 1962 sanctoral winner either
  // matches a shared key with 1969 GeneralRoman (collision → 1962 inputs
  // win via later-push order) or is the Proper-of-Time entry that
  // lexically contains the saint name. Dates where 1962 sanctoral would be
  // transferred/commemorated (e.g. St Patrick on Passion Sunday, Immaculate
  // Conception on Advent 2 Sunday) are deliberately not asserted here —
  // that fidelity is B2d's job.

  it('2024-01-01 surfaces the Circumcision of the Lord', () => {
    const ids = idsAt(cal, '2024-01-01');
    expect(ids.some((id) => id.includes('circumcision'))).toBe(true);
  });

  it('2024-06-29 surfaces Ss. Peter & Paul', () => {
    const ids = idsAt(cal, '2024-06-29');
    expect(ids.some((id) => id.includes('peter'))).toBe(true);
  });

  it('2024-11-01 surfaces All Saints', () => {
    const ids = idsAt(cal, '2024-11-01');
    expect(ids.some((id) => id.includes('all_saints'))).toBe(true);
  });

  it('2024-08-15 surfaces the Assumption', () => {
    const ids = idsAt(cal, '2024-08-15');
    expect(ids.some((id) => id.includes('assumption'))).toBe(true);
  });

  it('2024-03-19 surfaces St Joseph', () => {
    const ids = idsAt(cal, '2024-03-19');
    expect(ids.some((id) => id.includes('joseph'))).toBe(true);
  });

  it('sanctoral coverage lands on a meaningful number of dates', () => {
    // 279 primary-only sanctoral inputs are generated. Many are eclipsed by
    // PoT (privileged Sundays, Triduum, Christmas octave, Lent/Easter/
    // Pentecost octaves, etc.) or by 1969 GeneralRoman leakage with a
    // higher-precedence ID that happens to share the slot. A loose lower
    // bound proves the wiring is live — B2d + B2e tighten the numbers.
    const sanctoralDates = Object.keys(cal).filter((d) => {
      return (cal[d] ?? []).some((ld) => INPUT_IDS.has(ld.id));
    });
    expect(sanctoralDates.length).toBeGreaterThan(100);
  });
});
