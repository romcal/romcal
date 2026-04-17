import { addBundles, createI18nInstance, type i18n } from '@internal/i18n';

import { locales as ALL_LOCALES } from '../locales';
import type { Locale1962 } from '../types/locale';

const NAMESPACES = ['names', 'colors', 'ranks', 'seasons', 'months', 'weekdays'] as const;

/**
 * Per-locale additions on top of the ship-with-the-package locales.
 * Primary use: regional/diocesan overlays injecting their own
 * `sancti/{fileKey}` names without forking the core locale files.
 */
export type ExtraLocaleNames = Record<string, Record<string, string>>;

function loadLocale(instance: i18n, locale: Locale1962): void {
  addBundles(
    instance,
    locale.id,
    {
      names: locale.names ?? {},
      ...(locale.colors ? { colors: locale.colors } : {}),
      ...(locale.ranks ? { ranks: locale.ranks } : {}),
      ...(locale.seasons ? { seasons: locale.seasons } : {}),
      ...(locale.months ? { months: locale.months } : {}),
      ...(locale.weekdays ? { weekdays: locale.weekdays } : {}),
    },
    true,
    true
  );
}

/**
 * Build an i18next instance preloaded with every 1962 locale bundle. The
 * fallback chain `requested → en → la` mirrors 1969 (English vernacular
 * fallback, Latin floor — Latin always exists since the importer pivots
 * `entry.officium` into `la`).
 */
export function createI18n1962(localeId: string, extraNames?: ExtraLocaleNames): i18n {
  const instance = createI18nInstance({
    lng: localeId,
    fallbackLng: localeId === 'la' ? ['la'] : ['en', 'la'],
    ns: [...NAMESPACES],
    defaultNS: 'names',
    interpolation: { escapeValue: false },
  });

  for (const locale of Object.values(ALL_LOCALES)) {
    loadLocale(instance, locale);
  }
  if (extraNames) {
    for (const [lang, names] of Object.entries(extraNames)) {
      instance.addResourceBundle(lang, 'names', names, true, true);
    }
  }
  return instance;
}

export type NameTranslator = (source: string, key: string, fallback: string) => string;

/**
 * Wrap an i18next instance with a small adapter that hides the
 * `'names:source/key'` namespacing convention from the rubrics layer.
 * Falls back to the supplied Latin string when no translation is
 * registered (i18next would otherwise return the key itself).
 */
export function createNameTranslator(instance: i18n): NameTranslator {
  return (source, key, fallback) => instance.t(`${source}/${key}`, { ns: 'names', defaultValue: fallback }) as string;
}
