import { createI18n1962, createNameTranslator } from '../src/i18n/init';
import { locales, localeIds } from '../src/locales';
import { loadCommune, loadSancti, loadTempora } from '../src/sanctoral/data';

describe('M8 locale round-trip', () => {
  const sources = [
    ['sancti', loadSancti()],
    ['tempora', loadTempora()],
    ['commune', loadCommune()],
  ] as const;

  test('every locale bundle exports a non-empty names map', () => {
    for (const id of localeIds) {
      const loc = locales[id];
      expect(loc.id).toBe(id);
      expect(Object.keys(loc.names).length).toBeGreaterThan(0);
    }
  });

  test.each(localeIds)('names resolve for every (source, key) in %s (fallback en → la)', (id) => {
    const i18n = createI18n1962(id);
    const t = createNameTranslator(i18n);
    const laNames = locales.la.names;
    const misses: string[] = [];
    for (const [source, map] of sources) {
      for (const key of Object.keys(map)) {
        const latin = laNames[`${source}/${key}`] ?? map[key].officium ?? '';
        if (!latin) continue;
        const name = t(source, key, latin);
        if (typeof name !== 'string' || name.length === 0) misses.push(`${source}/${key}`);
      }
    }
    if (misses.length > 0) {
      throw new Error(`${misses.length} missing names in ${id}: ${misses.slice(0, 10).join(', ')}`);
    }
  });
});
