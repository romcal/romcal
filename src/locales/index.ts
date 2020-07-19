import en from './en';
import fr from './fr';
import it from './it';
import la from './la';
import pl from './pl';
import ptBR from './pt-BR';
import sk from './sk';

/**
 * An BCP-47 IETF key to value mapping of all supported locale resource files
 * in romcal.
 */
const locales = {
  en: en,
  fr: fr,
  it: it,
  la: la,
  pl: pl,
  'pt-BR': ptBR,
  sk: sk,
};

export default locales;
