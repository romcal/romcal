import i18next, { type i18n, type InitOptions } from 'i18next';

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
