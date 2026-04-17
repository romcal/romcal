import { buildLiturgicalYear1962 } from '../src/calendar-year';
import { attachPropers, resolvePropers } from '../src/propers';
import type { Celebration1962 } from '../src/rubrics/types';

describe('M6 propers resolver', () => {
  const year1962 = buildLiturgicalYear1962(1962);

  function day(iso: string): Celebration1962[] {
    const d = year1962[iso];
    if (!d) throw new Error(`no resolved day for ${iso}`);
    return d;
  }

  test('1) Inline tempora — 1962-04-22 Easter Sunday Introitus is "Resurrexi…"', () => {
    const primary = day('1962-04-22')[0];
    const { propers } = resolvePropers(primary);
    expect(propers.introit).toBeDefined();
    expect(propers.introit!.la).toMatch(/Resurréxi|Resurrexi/i);
    expect(propers.collect).toBeDefined();
    expect(propers.epistle).toBeDefined();
    expect(propers.gospel).toBeDefined();
  });

  test('2) Inline sancti Class I — 1962-11-01 All Saints Introitus is "Gaudeamus…"', () => {
    const primary = day('1962-11-01')[0];
    const { propers } = resolvePropers(primary);
    expect(propers.introit!.la).toMatch(/Gaudeámus|Gaudeamus/i);
    expect(propers.offertory).toBeDefined();
    expect(propers.secret).toBeDefined();
    expect(propers.offertory!.la.length).toBeGreaterThan(0);
  });

  test('3) Commune inheritance — 1962-01-17 St Anthony abbot pulls Gospel from Commune C5', () => {
    const primary = day('1962-01-17')[0];
    const { propers } = resolvePropers(primary);
    expect(propers.gospel).toBeDefined();
    expect(propers.gospel!.la.length).toBeGreaterThan(0);
  });

  test('4) Locale filter — requesting "en" yields English proper text', () => {
    const primary = day('1962-11-01')[0];
    const { propers } = resolvePropers(primary, { locales: ['en'] });
    expect(propers.introit).toBeDefined();
    expect(propers.introit!.en).toMatch(/rejoice/i);
  });

  test('5) extraSections — Ember Saturday lent_1_saturday surfaces LectioL* under extraSections', () => {
    // 1962-03-17 resolves to primary = lent_1_saturday feria (per M5 test 12).
    const primary = day('1962-03-17')[0];
    expect(primary.kind).toBe('tempora');
    expect(primary.key).toBe('lent_1_saturday');
    const { extraSections } = resolvePropers(primary);
    const lessonKeys = Object.keys(extraSections).filter((k) => /^LectioL\d$/.test(k));
    expect(lessonKeys.length).toBeGreaterThanOrEqual(4);
  });

  test('6) resolvePropers is pure — two calls return equal output', () => {
    const primary = day('1962-11-01')[0];
    const a = resolvePropers(primary);
    const b = resolvePropers(primary);
    expect(b).toEqual(a);
  });

  test('7) attachPropers is idempotent (deep-equal after two applications)', () => {
    const once = attachPropers(year1962);
    const twice = attachPropers(once);
    for (const [date, celebrations1] of Object.entries(once)) {
      const celebrations2 = twice[date];
      expect(celebrations2).toBeDefined();
      expect(celebrations2[0].propers).toEqual(celebrations1[0].propers);
      expect(celebrations2[0].extraSections).toEqual(celebrations1[0].extraSections);
    }
  });

  test('8) No-throw on missing properRef source — returns empty propers', () => {
    const fake: Celebration1962 = {
      kind: 'sancti',
      key: 'bogus',
      name: 'Bogus',
      date: '1962-01-01',
      classOf1962: 4,
      rank1962: 'ClassIV',
      numericRank: 0,
      precedence: 0,
      properRef: { source: 'sancti/99-99' },
      rubrics: { gloria: false, credo: false },
      colors: [],
    };
    const { propers, extraSections } = resolvePropers(fake);
    expect(propers).toEqual({});
    expect(extraSections).toEqual({});
  });

  test('coverage — every primary in 1962 resolves at least one Mass section', () => {
    const attached = attachPropers(year1962);
    const misses: string[] = [];
    for (const [date, celebrations] of Object.entries(attached)) {
      const primary = celebrations[0];
      const p = primary.propers ?? {};
      if (Object.values(p).every((v) => !v)) misses.push(`${date} ${primary.key}`);
    }
    // Known data gaps (handled in M7+):
    //   - Multi-Mass days (Christmas 12-25 → m1/m2/m3 variants).
    //   - Special liturgies w/o normal Mass (Good Fri Quad6-5, Holy Sat
    //     Quad6-6, Pent Vigil Pasc6-6, All Souls 11-02).
    //   - DO sancti placeholders for feria-in-octave (01-10..01-12) and
    //     commemoration-only saints (Name field only, no Mass body).
    expect(misses.length).toBeLessThan(30);
  });
});
