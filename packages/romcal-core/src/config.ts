import type { i18n } from '@internal/i18n';

/**
 * Rite-neutral root shape every rite-specific config class exposes.
 * Kept intentionally tiny: a locale id and a fully-initialised i18next
 * instance. The rest of the config surface (calendar scope, rubric
 * flags, overlay selection, output options) diverges between rites and
 * lives on the rite-specific subclass/interface.
 */
export interface IRomcalConfigRoot {
  readonly localeId: string;
  readonly i18next: i18n;
}
