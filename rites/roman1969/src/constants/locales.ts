import { locales } from '../locales';
import { toPackageName } from '../utils/string';

export const LOCALE_VAR_NAMES: string[] = Object.keys(locales);
export const LOCALE_IDS: string[] = LOCALE_VAR_NAMES.map((c) => toPackageName(c));
