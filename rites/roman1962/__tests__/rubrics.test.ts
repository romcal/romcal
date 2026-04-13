import { buildLiturgicalYear1962 } from '../src/calendar-year';

describe('M5 rubrics engine — spot-checks from docs/1962/12-m5-rubrics.md', () => {
  const year1962 = buildLiturgicalYear1962(1962);

  function day(iso: string) {
    const d = year1962.get(iso);
    if (!d) throw new Error(`no resolved day for ${iso}`);
    return d;
  }

  test('1) 1962-04-22 Easter Sunday — Pasc0-0 wins, no sancti', () => {
    const d = day('1962-04-22');
    expect(d.primary.kind).toBe('tempora');
    expect(d.primary.key).toBe('Pasc0-0');
    expect(d.primary.classOf1962).toBe(1);
  });

  test('2) 1962-04-15 Palm Sunday — Quad6-0 wins', () => {
    const d = day('1962-04-15');
    expect(d.primary.kind).toBe('tempora');
    expect(d.primary.key).toBe('Quad6-0');
  });

  test('3) 1962-03-19 St Joseph wins over Lent feria', () => {
    const d = day('1962-03-19');
    expect(d.primary.kind).toBe('sancti');
    expect(d.primary.name).toMatch(/Joseph/);
    expect(d.primary.classOf1962).toBe(1);
    expect(d.commemorations.some((c) => c.kind === 'tempora' && c.key.startsWith('Quad2-'))).toBe(true);
  });

  test('4) 1962-03-25 Annunciation transfers away from Lent III Sunday', () => {
    const d = day('1962-03-25');
    expect(d.primary.kind).toBe('tempora');
    expect(d.primary.key).toBe('Quad3-0');
    // Annunciation must reappear later as a transferred primary.
    const transferred = [...year1962.values()].find(
      (x) => x.primary.name.includes('Annuntiatione') && x.transferredFrom === '1962-03-25'
    );
    expect(transferred).toBeDefined();
  });

  test('5) 1968-12-08 Advent II Sunday beats Immaculate Conception (§15a); IC transfers', () => {
    const y1968 = buildLiturgicalYear1962(1968);
    const d = y1968.get('1968-12-08');
    expect(d).toBeDefined();
    expect(d!.primary.kind).toBe('tempora');
    expect(d!.primary.key).toBe('Adv2-0');
    const transferred = [...y1968.values()].find(
      (x) => x.primary.name.includes('Immaculata') && x.transferredFrom === '1968-12-08'
    );
    expect(transferred).toBeDefined();
  });

  test('6) 1962-06-29 Ss. Peter & Paul win over Pent 4 Fri', () => {
    const d = day('1962-06-29');
    expect(d.primary.kind).toBe('sancti');
    expect(d.primary.classOf1962).toBe(1);
    expect(d.primary.name).toMatch(/Petri et Pauli/);
  });

  test('7) 1962-11-01 All Saints wins', () => {
    const d = day('1962-11-01');
    expect(d.primary.kind).toBe('sancti');
    expect(d.primary.classOf1962).toBe(1);
    expect(d.primary.name).toMatch(/Omnium Sanctorum/);
  });

  test('8) 1962-01-01 Circumcision — sancti Class II', () => {
    const d = day('1962-01-01');
    expect(d.primary.kind).toBe('sancti');
    expect(d.primary.classOf1962).toBe(2);
    expect(d.primary.octave).toBeDefined();
  });

  test('9) 1962-06-28 Vigil of Peter & Paul beats Pent Thursday', () => {
    const d = day('1962-06-28');
    expect(d.primary.kind).toBe('sancti');
    expect(d.primary.name).toMatch(/Vigilia/);
    expect(d.primary.classOf1962).toBe(2);
  });

  test('10) 1962-12-25 Christmas', () => {
    const d = day('1962-12-25');
    expect(d.primary.kind).toBe('sancti');
    expect(d.primary.classOf1962).toBe(1);
  });

  test('11) 1962-02-02 Purification beats Septuagesima feria', () => {
    const d = day('1962-02-02');
    expect(d.primary.kind).toBe('sancti');
    expect(d.primary.classOf1962).toBe(2);
  });

  test('12) 1962-03-17 St Patrick loses to privileged Lent feria (Quad1-6)', () => {
    const d = day('1962-03-17');
    expect(d.primary.kind).toBe('tempora');
    expect(d.primary.key).toBe('Quad1-6');
    expect(d.commemorations.some((c) => c.kind === 'sancti' && c.name.includes('Patri'))).toBe(true);
  });

  test('13) transfer round-trip is idempotent', () => {
    const a = buildLiturgicalYear1962(1962);
    const b = buildLiturgicalYear1962(1962);
    expect(a.size).toBe(b.size);
    for (const [date, dayA] of a) {
      const dayB = b.get(date);
      expect(dayB).toBeDefined();
      expect(dayB!.primary.key).toBe(dayA.primary.key);
      expect(dayB!.primary.kind).toBe(dayA.primary.kind);
      expect(dayB!.commemorations.length).toBe(dayA.commemorations.length);
    }
  });

  test('14) every civil date of 1962 resolves', () => {
    expect(year1962.size).toBe(365);
  });

  test('15) 1964-02-29 resolves to a Tempora feria', () => {
    const y1964 = buildLiturgicalYear1962(1964);
    const d = y1964.get('1964-02-29');
    expect(d).toBeDefined();
    expect(d!.primary.kind).toBe('tempora');
  });

  test('16) 1962-11-02 All Souls — Class III sancti', () => {
    const d = day('1962-11-02');
    expect(d.primary.kind).toBe('sancti');
    expect(d.primary.name).toMatch(/Defunctorum/);
  });

  test('17) 1962-09-29 Michaelmas — Class I sancti', () => {
    const d = day('1962-09-29');
    expect(d.primary.kind).toBe('sancti');
    expect(d.primary.classOf1962).toBe(1);
    expect(d.primary.name).toMatch(/Michaelis/i);
  });

  test('18) 1962-12-24 Vigil of Nativity', () => {
    const d = day('1962-12-24');
    expect(d.primary.kind).toBe('sancti');
    expect(d.primary.name).toMatch(/Vigilia Nativitatis/);
  });

  test('19) 1962-01-06 Epiphany', () => {
    const d = day('1962-01-06');
    expect(d.primary.kind).toBe('sancti');
    expect(d.primary.classOf1962).toBe(1);
  });

  test('20) 1962-02-18 Septuagesima Sunday — Tempora Quadp1-0', () => {
    const d = day('1962-02-18');
    expect(d.primary.kind).toBe('tempora');
    expect(d.primary.key).toBe('Quadp1-0');
    expect(d.primary.classOf1962).toBe(2);
  });
});

describe('M5 leap year coverage', () => {
  test('2000 is a leap year and 2000-02-29 resolves', () => {
    const y = buildLiturgicalYear1962(2000);
    expect(y.size).toBe(366);
    expect(y.get('2000-02-29')).toBeDefined();
  });
});
