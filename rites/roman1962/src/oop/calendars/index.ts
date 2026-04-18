import { Europe } from './europe';
import { Switzerland } from './switzerland';
import { Switzerland_Basel } from './switzerland-basel';
import { Switzerland_Chur } from './switzerland-chur';
import { Switzerland_Lausanne_Geneva_Fribourg } from './switzerland-lausanne-geneva-fribourg';
import { Switzerland_Lugano } from './switzerland-lugano';
import { Switzerland_Saint_Maurice_Abbey } from './switzerland-saint-maurice-abbey';
import { Switzerland_Sankt_Gallen } from './switzerland-sankt-gallen';
import { Switzerland_Sion } from './switzerland-sion';

export { Europe } from './europe';
export { Switzerland, buildSwitzerlandInputs } from './switzerland';
export { Switzerland_Basel, buildSwitzerlandBaselInputs } from './switzerland-basel';
export { Switzerland_Chur, buildSwitzerlandChurInputs } from './switzerland-chur';
export {
  Switzerland_Lausanne_Geneva_Fribourg,
  buildSwitzerlandLausanneGenevaFribourgInputs,
} from './switzerland-lausanne-geneva-fribourg';
export { Switzerland_Lugano, buildSwitzerlandLuganoInputs } from './switzerland-lugano';
export {
  Switzerland_Saint_Maurice_Abbey,
  buildSwitzerlandSaintMauriceAbbeyInputs,
} from './switzerland-saint-maurice-abbey';
export { Switzerland_Sankt_Gallen, buildSwitzerlandSanktGallenInputs } from './switzerland-sankt-gallen';
export { Switzerland_Sion, buildSwitzerlandSionInputs } from './switzerland-sion';

export type { OverlayInputEntry } from './overlay-support';
export { buildOverlayInputs, stampOverlayMeta } from './overlay-support';
export { clearOverlayNames, collectOverlayNamesForLocale, getOverlayNames, setOverlayNames } from './overlay-names';

/**
 * Registry of every 1962 particular-calendar overlay shipped with the
 * rite, keyed by PascalCase-with-underscore class name. The key IS the
 * class name (and, via `CalendarDef#calendarName`, maps 1:1 to the
 * slug `switzerland_basel` etc.) so string-based selection via
 * {@link Romcal1962OOP}'s `particularCalendar` option is direct.
 */
export const Overlays1962 = {
  Europe,
  Switzerland,
  Switzerland_Basel,
  Switzerland_Chur,
  Switzerland_Lausanne_Geneva_Fribourg,
  Switzerland_Lugano,
  Switzerland_Sankt_Gallen,
  Switzerland_Sion,
  Switzerland_Saint_Maurice_Abbey,
} as const;

export type Overlay1962Name = keyof typeof Overlays1962;
