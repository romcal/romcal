import type { i18n } from 'i18next';

/**
 * Map of namespace → keyed strings (e.g. `{ names: { ... }, colors: { ... } }`).
 * Matches the shape both rites' locale objects already expose.
 */
export type NamespaceBundles = Record<string, Record<string, unknown>>;

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
