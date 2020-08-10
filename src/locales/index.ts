import en from './en';
import enGB from './en-GB';
import enIE from './en-IE';
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
  en: en,
  'en-GB': enGB,
  'en-IE': enIE,
  fr: fr,
  it: it,
  la: la,
  pl: pl,
  'pt-br': ptBr,
  sk: sk,
};

export default locales;
