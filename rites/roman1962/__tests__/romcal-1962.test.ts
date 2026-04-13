import { Romcal1962 } from '../src/romcal-1962';

describe('M7 Romcal1962 public API', () => {
  test('1) default config — no propers attached', async () => {
    const r = new Romcal1962();
    expect(r.config).toEqual({
      includePropers: false,
      propersLocales: ['la'],
      attachToCommemorations: false,
      commemorationLimit: 'all',
    });
    const cal = await r.generateCalendar(1962);
    const easter = cal.get('1962-04-22');
    expect(easter).toBeDefined();
    expect(easter!.primary.propers).toBeUndefined();
    expect(easter!.primary.extraSections).toBeUndefined();
  });

  test('2) includePropers attaches Mass texts', async () => {
    const r = new Romcal1962({ includePropers: true });
    const cal = await r.generateCalendar(1962);
    const easter = cal.get('1962-04-22');
    expect(easter!.primary.propers!.introit!.la).toMatch(/Resurréxi|Resurrexi/i);
    const allSaints = cal.get('1962-11-01');
    expect(allSaints!.primary.propers!.introit!.la).toMatch(/Gaudeámus|Gaudeamus/i);
  });

  test('3) propersLocales filter — en returns empty strings', async () => {
    const r = new Romcal1962({ includePropers: true, propersLocales: ['en'] });
    const cal = await r.generateCalendar(1962);
    const day = cal.get('1962-11-01');
    expect(day!.primary.propers!.introit!.en).toBe('');
  });

  test('4) getOneLiturgicalDay matches generateCalendar result', async () => {
    const r = new Romcal1962({ includePropers: true });
    const cal = await r.generateCalendar(1962);
    const fromYear = cal.get('1962-04-22');
    const fromOne = await r.getOneLiturgicalDay('1962-04-22');
    expect(fromOne).toBe(fromYear);
  });

  test('5) generateCalendar caches per year (identity)', async () => {
    const r = new Romcal1962();
    const a = await r.generateCalendar(1962);
    const b = await r.generateCalendar(1962);
    expect(b).toBe(a);
  });

  test('6) attachToCommemorations populates commemoration propers', async () => {
    const r = new Romcal1962({ includePropers: true, attachToCommemorations: true });
    const cal = await r.generateCalendar(1962);
    let withCommem = 0;
    for (const day of cal.values()) {
      for (const c of day.commemorations) {
        if (c.propers && Object.values(c.propers).some((v) => v)) withCommem++;
      }
    }
    expect(withCommem).toBeGreaterThan(0);
  });

  test('7) string year accepted', async () => {
    const r = new Romcal1962();
    const a = await r.generateCalendar('1962');
    const b = await r.generateCalendar(1962);
    expect(a).toBe(b);
  });

  test('8) invalid date rejected', async () => {
    const r = new Romcal1962();
    await expect(r.getOneLiturgicalDay('1962/04/22')).rejects.toThrow(/Invalid ISO date/);
  });

  test('9) invalid year rejected', async () => {
    const r = new Romcal1962();
    await expect(r.generateCalendar('not-a-year')).rejects.toThrow(/Invalid year/);
  });

  test('10) config getter returns a fresh object (no mutation leak)', () => {
    const r = new Romcal1962({ propersLocales: ['la', 'en'] });
    const c = r.config;
    c.propersLocales.push('fr');
    expect(r.config.propersLocales).toEqual(['la', 'en']);
  });
});
