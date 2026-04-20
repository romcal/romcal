import { addBundles, createI18nInstance, LOCALES_1969, type i18n } from '@internal/rite-roman1969';

import { locales as ALL_LOCALES } from '../locales';
import type { Locale1962 } from '../types/locale';

const NAMESPACES = [
  'names',
  'colors',
  'ranks',
  'seasons',
  'months',
  'weekdays',
  'ordinals',
  'stationChurches',
] as const;

/**
 * Per-locale additions on top of the ship-with-the-package locales.
 * Primary use: regional/diocesan overlays injecting their own
 * `sancti/{key}` names without forking the core locale files.
 */
export type ExtraLocaleNames = Record<string, Record<string, string>>;

/**
 * 1962-only nested season keys emitted by the proper-of-time (pre-Lent,
 * passiontide, pentecost octave, time-after-pentecost). Latin only — the
 * i18next fallback chain (requested → en → la) resolves vernacular locales
 * via Latin until rite-specific translations are added upstream.
 */
const SEASONS_1962_EXTRA_LA = {
  septuagesima: {
    sunday: 'Dominica in Septuagesima',
    weekday: '$t(weekdays:{{dow}}, capitalize) post Septuagesimam',
  },
  sexagesima: {
    sunday: 'Dominica in Sexagesima',
    weekday: '$t(weekdays:{{dow}}, capitalize) post Sexagesimam',
  },
  quinquagesima: {
    sunday: 'Dominica in Quinquagesima',
    weekday: '$t(weekdays:{{dow}}, capitalize) post Quinquagesimam',
  },
  passiontide: {
    weekday: '$t(weekdays:{{dow}}, capitalize) in Tempore Passionis',
  },
  pentecost_octave: {
    weekday: '$t(weekdays:{{dow}}, capitalize) infra octavam Pentecostes',
  },
  time_after_pentecost: {
    sunday: 'Dominica $t(ordinals:{{week}}, { "context": "feminine" }) post Pentecosten',
    weekday:
      '$t(weekdays:{{dow}}, capitalize), hebdomada $t(ordinals:{{week}}, { "context": "feminine" }) post Pentecosten',
  },
} as const;

/**
 * Pull 1969 season + ordinal bundles for a given locale id, so the 1962
 * proper-of-time — which emits 1969-shaped `seasons:advent.sunday` /
 * `ordinals:{{week}}` keys — resolves against live data. Falls back to the
 * 1969 `la` locale so unmapped 1962 locales still get Latin templates.
 */
function seasonsFor(localeId: string): Record<string, unknown> {
  const match = Object.values(LOCALES_1969).find((l) => l.id === localeId);
  const base = match?.seasons ?? LOCALES_1969.La.seasons ?? {};
  if (localeId === 'la') {
    return { ...base, ...SEASONS_1962_EXTRA_LA };
  }
  return base;
}

function ordinalsFor(localeId: string): Record<string, string> {
  const match = Object.values(LOCALES_1969).find((l) => l.id === localeId);
  return (match?.ordinals ?? LOCALES_1969.La.ordinals ?? {}) as Record<string, string>;
}

function loadLocale(instance: i18n, locale: Locale1962): void {
  addBundles(
    instance,
    locale.id,
    {
      names: locale.names ?? {},
      seasons: seasonsFor(locale.id) as Record<string, string>,
      ordinals: ordinalsFor(locale.id),
      ...(locale.colors ? { colors: locale.colors } : {}),
      ...(locale.ranks ? { ranks: locale.ranks } : {}),
      ...(locale.months ? { months: locale.months } : {}),
      ...(locale.weekdays ? { weekdays: locale.weekdays } : {}),
      ...(locale.stationChurches ? { stationChurches: locale.stationChurches } : {}),
    },
    true,
    true
  );
}

/**
 * Build an i18next instance preloaded with every 1962 locale bundle. The
 * fallback chain `requested → en → la` mirrors 1969 (English vernacular
 * fallback, Latin floor — every celebration has a Latin name in the `la`
 * locale).
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
