/**
 * Unified Divinum-Officium → slug remapper.
 *
 * `remapKey(source, doKey)` returns the readable slug for any tempora/sancti/commune
 * key. Used by the importer emit step and by any build-time tool that rewrites
 * inline `Sancti/…`, `Tempora/…`, `Commune/…` reference tokens.
 *
 * Run-time code consumes only the already-remapped keys from `data/**` and
 * `src/locales/*.ts`; it does not import this file.
 */
import { communeKeyToSlug, COMMUNE_KEY_MAP } from './commune';
import { sanctiKeyToSlug, SANCTI_KEY_MAP } from './sancti';
import { temporaKeyToSlug, TEMPORA_EXPLICIT_MAP } from './tempora';

export type KeySource = 'sancti' | 'tempora' | 'commune';

export function remapKey(source: KeySource, doKey: string): string {
  switch (source) {
    case 'sancti':
      return sanctiKeyToSlug(doKey);
    case 'tempora':
      return temporaKeyToSlug(doKey);
    case 'commune':
      return communeKeyToSlug(doKey);
  }
}

export { communeKeyToSlug, sanctiKeyToSlug, temporaKeyToSlug };
export { COMMUNE_KEY_MAP, SANCTI_KEY_MAP, TEMPORA_EXPLICIT_MAP };
