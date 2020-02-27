import enCA from "./en-CA";
import enUS from "./en-US";
import en from "./en";
import fr from "./fr";
import it from "./it";
import pl from "./pl";
import sk from "./sk";
import { TRomcalLocale } from "src/models/romcal-locale";

const locales: Record<string, TRomcalLocale> = {
    "en-CA": enCA,
    "en-US": enUS,
    en: en,
    fr: fr,
    it: it,
    pl: pl,
    sk: sk,
};

export default locales;
