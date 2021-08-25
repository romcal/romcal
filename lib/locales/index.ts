import { Locale } from '../types/locale';
import { locale as cs } from './cs';
import { locale as en } from './en';
import { locale as enGb } from './en-gb';
import { locale as enIe } from './en-ie';
import { locale as es } from './es';
import { locale as fr } from './fr';
import { locale as it } from './it';
import { locale as la } from './la';
import { locale as pl } from './pl';
import { locale as ptBr } from './pt-br';
import { locale as sk } from './sk';

/**
 * An BCP-47 IETF key to value mapping of all supported locale resource files
 * in romcal.
 */
export const locales: Record<Lowercase<string>, Locale> = {
  cs: cs,
  'en-gb': enGb,
  'en-ie': enIe,
  en: en,
  es: es,
  fr: fr,
  it: it,
  la: la,
  pl: pl,
  'pt-br': ptBr,
  sk: sk,
};
