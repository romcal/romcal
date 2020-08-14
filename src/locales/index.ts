import en from './en';
import fr from './fr';
import it from './it';
import pl from './pl';
import ptBr from './pt-br';
import sk from './sk';

/**
 * An BCP-47 IETF key to value mapping of all supported locale resource files
 * in romcal.
 */
const locales = {
  en: en,
  fr: fr,
  it: it,
  pl: pl,
  'pt-br': ptBr,
  sk: sk,
};

export default locales;
