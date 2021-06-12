import cs from './cs';
import enGb from './en-gb';
import enIe from './en-ie';
import en from './en';
import es from './es';
import fr from './fr';
import it from './it';
import la from './la';
import pl from './pl';
import ptBr from './pt-br';
import sk from './sk';

/**
 * An BCP-47 IETF key to value mapping of all supported locale resource files
 * in romcal.
 */
const locales = {
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

export default locales;
