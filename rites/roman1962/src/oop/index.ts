export { Calendar1962 } from './calendar';
export {
  Europe,
  Overlays1962,
  Switzerland,
  Switzerland_Basel,
  Switzerland_Chur,
  Switzerland_Lausanne_Geneva_Fribourg,
  Switzerland_Lugano,
  Switzerland_Saint_Maurice_Abbey,
  Switzerland_Sankt_Gallen,
  Switzerland_Sion,
  buildOverlayInputs,
  buildSwitzerlandBaselInputs,
  buildSwitzerlandChurInputs,
  buildSwitzerlandInputs,
  buildSwitzerlandLausanneGenevaFribourgInputs,
  buildSwitzerlandLuganoInputs,
  buildSwitzerlandSaintMauriceAbbeyInputs,
  buildSwitzerlandSanktGallenInputs,
  buildSwitzerlandSionInputs,
  clearOverlayNames,
  collectOverlayNamesForLocale,
  getOverlayNames,
  setOverlayNames,
  stampOverlayMeta,
} from './calendars';
export type { Overlay1962Name, OverlayInputEntry } from './calendars';
export { RomcalConfig1962 } from './config-1962';
export type { CommemorationCapMode, RomcalConfig1962Input } from './config-1962';
export { GeneralRoman1962, buildGeneralRoman1962Inputs } from './general-roman';
export { LiturgicalDay1962 } from './liturgical-day';
export type { LiturgicalDay1962Extras, LiturgicalDayCommemoration, OctaveOf } from './liturgical-day';
export { clearMeta1962, getMeta1962, setMeta1962 } from './meta-1962';
export type { Class1962, Kind1962, LiturgicalDay1962Meta } from './meta-1962';
export { scorePrecedence } from './precedence';
export type { PrecedenceCandidate } from './precedence';
export { ProperOfTime1962 } from './proper-of-time';
export { Romcal1962 } from './romcal';
export type { Romcal1962ConfigInput } from './romcal';
export { classifyTempora } from './tempora-class';
export { applyCap, filterCommemorations, isTransferTarget } from './transfer';
export { detectVigil } from './vigil';
