import { Locale } from '../types/locale';

import { locale as Cs } from './cs';
import { locale as En } from './en';
import { locale as EnGb } from './en-gb';
import { locale as EnIe } from './en-ie';
import { locale as Es } from './es';
import { locale as Fr } from './fr';
import { locale as It } from './it';
import { locale as La } from './la';
import { locale as Pl } from './pl';
import { locale as PtBr } from './pt-br';
import { locale as Sk } from './sk';
import { locale as Ta } from './ta';

/**
 * An BCP-47 IETF tag to value mapping of all supported locale resource files
 * in romcal.
 */
export const locales: Record<string, Locale> = {
  Cs,
  EnGb,
  EnIe,
  En,
  Es,
  Fr,
  It,
  La,
  Pl,
  PtBr,
  Sk,
  Ta,
};
