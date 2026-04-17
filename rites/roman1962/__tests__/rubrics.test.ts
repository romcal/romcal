import { buildLiturgicalYear1962 } from '../src/calendar-year';
import type { Celebration1962 } from '../src/models/liturgical-day';

describe('M5 rubrics engine — spot-checks from docs/1962/12-m5-rubrics.md', () => {
  const year1962 = buildLiturgicalYear1962(1962);

  function day(iso: string): Celebration1962[] {
    const d = year1962[iso];
    if (!d) throw new Error(`no resolved day for ${iso}`);
    return d;
  }

  test('1) 1962-04-22 Easter Sunday — easter_sunday wins, no sancti', () => {
    const d = day('1962-04-22');
    expect(d[0].kind).toBe('tempora');
    expect(d[0].key).toBe('easter_sunday');
    expect(d[0].classOf1962).toBe(1);
  });

  test('2) 1962-04-15 Palm Sunday — palm_sunday wins', () => {
    const d = day('1962-04-15');
    expect(d[0].kind).toBe('tempora');
    expect(d[0].key).toBe('palm_sunday');
  });

  test('3) 1962-03-19 St Joseph wins over Lent feria', () => {
    const d = day('1962-03-19');
    expect(d[0].kind).toBe('sancti');
    expect(d[0].name).toMatch(/Joseph/);
    expect(d[0].classOf1962).toBe(1);
    expect(d.slice(1).some((c) => c.kind === 'tempora' && c.key.startsWith('lent_2_'))).toBe(true);
  });

  test('4) 1962-03-25 Annunciation transfers away from Lent III Sunday', () => {
    const d = day('1962-03-25');
    expect(d[0].kind).toBe('tempora');
    expect(d[0].key).toBe('lent_3_sunday');
    // Annunciation must reappear later as a transferred primary.
    const transferred = Object.values(year1962).find(
      (x) => x[0].name.includes('Annuntiatione') && x[0].transferredFromDate === '1962-03-25'
    );
    expect(transferred).toBeDefined();
  });

  test('5) 1968-12-08 Advent II Sunday beats Immaculate Conception (§15a); IC transfers forward', () => {
    const y1968 = buildLiturgicalYear1962(1968);
    const d = y1968['1968-12-08'];
    expect(d).toBeDefined();
    expect(d[0].kind).toBe('tempora');
    expect(d[0].key).toBe('advent_2_sunday');
    const transferred = Object.values(y1968).find(
      (x) => x[0].name.includes('Immaculata') && x[0].transferredFromDate === '1968-12-08'
    );
    expect(transferred).toBeDefined();
    // §50: the landing date must be *after* the impediment date, not
    // an earlier open day. IC 1968 lands on the Monday 12-09 (first
    // transfer target after 12-08).
    expect(transferred![0].date > '1968-12-08').toBe(true);
    expect(transferred![0].date).toBe('1968-12-09');
  });

  test('6) 1962-06-29 Ss. Peter & Paul win over Pent 4 Fri', () => {
    const d = day('1962-06-29');
    expect(d[0].kind).toBe('sancti');
    expect(d[0].classOf1962).toBe(1);
    expect(d[0].name).toMatch(/Petri et Pauli/);
  });

  test('7) 1962-11-01 All Saints wins', () => {
    const d = day('1962-11-01');
    expect(d[0].kind).toBe('sancti');
    expect(d[0].classOf1962).toBe(1);
    expect(d[0].name).toMatch(/Omnium Sanctorum/);
  });

  test('8) 1962-01-01 Circumcision — sancti Class II', () => {
    const d = day('1962-01-01');
    expect(d[0].kind).toBe('sancti');
    expect(d[0].classOf1962).toBe(2);
    expect(d[0].octave).toBeDefined();
  });

  test('9) 1962-06-28 Vigil of Peter & Paul beats Pent Thursday', () => {
    const d = day('1962-06-28');
    expect(d[0].kind).toBe('sancti');
    expect(d[0].name).toMatch(/Vigilia/);
    expect(d[0].classOf1962).toBe(2);
  });

  test('10) 1962-12-25 Christmas', () => {
    const d = day('1962-12-25');
    expect(d[0].kind).toBe('sancti');
    expect(d[0].classOf1962).toBe(1);
  });

  test('11) 1962-02-02 Purification beats Septuagesima feria', () => {
    const d = day('1962-02-02');
    expect(d[0].kind).toBe('sancti');
    expect(d[0].classOf1962).toBe(2);
  });

  test('12) 1962-03-17 St Patrick loses to privileged Lent feria (lent_1_saturday)', () => {
    const d = day('1962-03-17');
    expect(d[0].kind).toBe('tempora');
    expect(d[0].key).toBe('lent_1_saturday');
    expect(d.slice(1).some((c) => c.kind === 'sancti' && c.name.includes('Patri'))).toBe(true);
  });

  test('13) transfer round-trip is idempotent', () => {
    const a = buildLiturgicalYear1962(1962);
    const b = buildLiturgicalYear1962(1962);
    expect(Object.keys(a).length).toBe(Object.keys(b).length);
    for (const [date, dayA] of Object.entries(a)) {
      const dayB = b[date];
      expect(dayB).toBeDefined();
      expect(dayB[0].key).toBe(dayA[0].key);
      expect(dayB[0].kind).toBe(dayA[0].kind);
      expect(dayB.length).toBe(dayA.length);
    }
  });

  test('14) every civil date of 1962 resolves', () => {
    expect(Object.keys(year1962).length).toBe(365);
  });

  test('15) 1964-02-29 resolves to a Tempora feria', () => {
    const y1964 = buildLiturgicalYear1962(1964);
    const d = y1964['1964-02-29'];
    expect(d).toBeDefined();
    expect(d[0].kind).toBe('tempora');
  });

  test('16) 1962-11-02 All Souls — Class III sancti', () => {
    const d = day('1962-11-02');
    expect(d[0].kind).toBe('sancti');
    expect(d[0].name).toMatch(/Defunctorum/);
  });

  test('17) 1962-09-29 Michaelmas — Class I sancti', () => {
    const d = day('1962-09-29');
    expect(d[0].kind).toBe('sancti');
    expect(d[0].classOf1962).toBe(1);
    expect(d[0].name).toMatch(/Michaelis/i);
  });

  test('18) 1962-12-24 Vigil of Nativity', () => {
    const d = day('1962-12-24');
    expect(d[0].kind).toBe('sancti');
    expect(d[0].name).toMatch(/Vigilia Nativitatis/);
  });

  test('19) 1962-01-06 Epiphany', () => {
    const d = day('1962-01-06');
    expect(d[0].kind).toBe('sancti');
    expect(d[0].classOf1962).toBe(1);
  });

  test('20) 1962-02-18 Septuagesima Sunday — Tempora septuagesima_sunday', () => {
    const d = day('1962-02-18');
    expect(d[0].kind).toBe('tempora');
    expect(d[0].key).toBe('septuagesima_sunday');
    expect(d[0].classOf1962).toBe(2);
  });
});

describe('M5 leap year coverage', () => {
  test('2000 is a leap year and 2000-02-29 resolves', () => {
    const y = buildLiturgicalYear1962(2000);
    expect(Object.keys(y).length).toBe(366);
    expect(y['2000-02-29']).toBeDefined();
  });
});
