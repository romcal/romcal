import { toPackageName } from '@internal/generator';

import { locales } from '../locales';

export const LOCALES = locales;
export const LOCALE_VAR_NAMES: string[] = Object.keys(locales);
export const LOCALE_IDS: string[] = LOCALE_VAR_NAMES.map((c) => toPackageName(c));
