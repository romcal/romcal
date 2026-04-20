import { createI18n1962 } from './i18n/init';
import { Romcal1962 } from './romcal-1962';

describe('1962 station-church surfacing', () => {
  let cal: Awaited<ReturnType<Romcal1962['generateCalendar']>>;

  beforeAll(async () => {
    cal = await new Romcal1962().generateCalendar(2026);
  });

  it('Ash Wednesday (2026-02-18) carries the Santa Sabina station', () => {
    const day = cal['2026-02-18']?.[0];
    expect(day?.stationChurches).toBeDefined();
    expect(day?.stationChurches).toEqual([{ key: 'saint_sabina', name: expect.any(String) }]);
  });

  it('Lent IV Sunday (2026-03-15) carries the Holy Cross in Jerusalem station', () => {
    const day = cal['2026-03-15']?.[0];
    expect(day?.stationChurches?.[0]?.key).toBe('holy_cross_in_jerusalem');
  });

  it('Christmas (2026-12-25) carries 3 stations, one per Mass', () => {
    const day = cal['2026-12-25']?.[0];
    const masses = day?.stationChurches?.map((s) => ({ mass: s.mass, key: s.key }));
    expect(masses).toEqual([
      { mass: 'in_nocte', key: 'santa_maria_maggiore_ad_praesepe' },
      { mass: 'in_aurora', key: 'saint_anastasia' },
      { mass: 'in_die', key: 'santa_maria_maggiore' },
    ]);
  });

  it('a day with no station has stationChurches === undefined', () => {
    const day = cal['2026-07-04']?.[0];
    expect(day?.stationChurches).toBeUndefined();
  });
});

describe('1962 stationChurches i18n bundle', () => {
  it.each([
    ['de', 'St. Sabina'],
    ['en', 'Saint Sabina'],
    ['la', 'Sanctae Sabinae'],
  ])('createI18n1962(%s) resolves stationChurches:saint_sabina → "%s"', (lang, expected) => {
    const i18n = createI18n1962(lang);
    expect(i18n.t('stationChurches:saint_sabina')).toBe(expected);
  });

  it('Latin fallback chain hits stationChurches under an unknown locale', () => {
    const i18n = createI18n1962('fr');
    // No `fr` bundle ships, so the fallback chain (`fr → en → la`) lands on `en`.
    expect(i18n.t('stationChurches:santa_maria_maggiore')).toBe('Santa Maria Maggiore');
  });
});
