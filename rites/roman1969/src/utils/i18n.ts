import i18next, { type i18n, type InitOptions } from 'i18next';

/**
 * Map of namespace → keyed strings (e.g. `{ names: { ... }, colors: { ... } }`).
 * Matches the shape both rites' locale objects already expose.
 */
export type NamespaceBundles = Record<string, Record<string, unknown>>;

/**
 * Create a synchronously-initialised i18next instance. Both rites want
 * `initAsync: false` so resources are available immediately; errors
 * surface via throw (i18next reports them through the init callback,
 * which is easy to forget). Caller owns all other option shape — locale,
 * fallback, namespaces, interpolation.
 */
export function createI18nInstance(options: InitOptions): i18n {
  const instance = i18next.createInstance();
  instance.init({ initAsync: false, ...options }, (err) => {
    if (err) throw err instanceof Error ? err : new Error(String(err));
  });
  return instance;
}

/**
 * Load every namespace in `bundles` under `localeId`. Thin wrapper over
 * i18next's `addResourceBundle` per-namespace call. The last two flags
 * (`deep`, `overwrite`) match i18next's defaults; callers that need
 * merge semantics pass `true, true`.
 */
export function addBundles(
  instance: i18n,
  localeId: string,
  bundles: NamespaceBundles,
  deep = false,
  overwrite = false
): void {
  for (const [namespace, bundle] of Object.entries(bundles)) {
    instance.addResourceBundle(localeId, namespace, bundle, deep, overwrite);
  }
}

export type { i18n, InitOptions, TFunction } from 'i18next';
