import type { CalendarDefConstructor } from '@internal/calendars';

import { Switzerland } from './countries/switzerland';
import { Switzerland_Saint_Maurice_Abbey } from './countries/switzerland/abbey-of-saint-maurice';
import { Switzerland_Basel } from './countries/switzerland/diocese-of-basel';
import { Switzerland_Chur } from './countries/switzerland/diocese-of-chur';
import { Switzerland_Lausanne_Geneva_Fribourg } from './countries/switzerland/diocese-of-lausanne-geneva-fribourg';
import { Switzerland_Lugano } from './countries/switzerland/diocese-of-lugano';
import { Switzerland_Sankt_Gallen } from './countries/switzerland/diocese-of-sankt-gallen';
import { Switzerland_Sion } from './countries/switzerland/diocese-of-sion';
import { Europe } from './regions/europe';
import type { CalendarOverlayEntry } from './types';

export { applyOverlay, collectOverlayNames } from './apply';
export type { OverlayApplyResult } from './apply';
export { Europe } from './regions/europe';
export { Switzerland } from './countries/switzerland';
export { Switzerland_Basel } from './countries/switzerland/diocese-of-basel';
export { Switzerland_Chur } from './countries/switzerland/diocese-of-chur';
export { Switzerland_Lausanne_Geneva_Fribourg } from './countries/switzerland/diocese-of-lausanne-geneva-fribourg';
export { Switzerland_Lugano } from './countries/switzerland/diocese-of-lugano';
export { Switzerland_Saint_Maurice_Abbey } from './countries/switzerland/abbey-of-saint-maurice';
export { Switzerland_Sankt_Gallen } from './countries/switzerland/diocese-of-sankt-gallen';
export { Switzerland_Sion } from './countries/switzerland/diocese-of-sion';
export type { CalendarOverlay1962, CalendarOverlayEntry } from './types';

/**
 * Registry of every regional/diocesan overlay shipped with the 1962
 * rite, keyed by PascalCase class name. Matches the 1969 rite's
 * `calendarDefinitions` shape exactly: the key IS the class name, the
 * value is a constructor. Diocesan classes use the `Country_Diocese`
 * underscore convention (as in 1969's `France_Angers`) so the id the
 * shared `CalendarDef` derives from `constructor.name` carries the
 * country/diocese boundary — downstream slug helpers map that to a
 * dotted bundle name when needed.
 */
export const calendarOverlays: Record<string, CalendarDefConstructor<CalendarOverlayEntry>> = {
  Europe,
  Switzerland,
  Switzerland_Basel,
  Switzerland_Chur,
  Switzerland_Lausanne_Geneva_Fribourg,
  Switzerland_Lugano,
  Switzerland_Saint_Maurice_Abbey,
  Switzerland_Sankt_Gallen,
  Switzerland_Sion,
};
