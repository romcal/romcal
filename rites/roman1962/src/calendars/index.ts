import { Switzerland } from './countries/switzerland';
import { SwitzerlandSaintMauriceAbbey } from './countries/switzerland/abbey-of-saint-maurice';
import { SwitzerlandBasel } from './countries/switzerland/diocese-of-basel';
import { SwitzerlandChur } from './countries/switzerland/diocese-of-chur';
import { SwitzerlandLausanneGenevaFribourg } from './countries/switzerland/diocese-of-lausanne-geneva-fribourg';
import { SwitzerlandLugano } from './countries/switzerland/diocese-of-lugano';
import { SwitzerlandSanktGallen } from './countries/switzerland/diocese-of-sankt-gallen';
import { SwitzerlandSion } from './countries/switzerland/diocese-of-sion';
import { Europe } from './regions/europe';
import type { CalendarOverlay1962 } from './types';

export { applyOverlay, collectOverlayNames } from './apply';
export type { OverlayApplyResult } from './apply';
export { Europe } from './regions/europe';
export { Switzerland } from './countries/switzerland';
export { SwitzerlandBasel } from './countries/switzerland/diocese-of-basel';
export { SwitzerlandChur } from './countries/switzerland/diocese-of-chur';
export { SwitzerlandLausanneGenevaFribourg } from './countries/switzerland/diocese-of-lausanne-geneva-fribourg';
export { SwitzerlandLugano } from './countries/switzerland/diocese-of-lugano';
export { SwitzerlandSaintMauriceAbbey } from './countries/switzerland/abbey-of-saint-maurice';
export { SwitzerlandSanktGallen } from './countries/switzerland/diocese-of-sankt-gallen';
export { SwitzerlandSion } from './countries/switzerland/diocese-of-sion';
export type { CalendarOverlay1962, CalendarOverlayEntry } from './types';

/**
 * Registry of every regional/diocesan overlay shipped with the 1962
 * rite. Keys are the stable slugs used for bundle names
 * (`@romcal/calendar1962.{slug}.{locale}` in a future per-calendar
 * bundle pipeline) and for the runtime `calendar` config field.
 */
export const calendarOverlays: Record<string, CalendarOverlay1962> = {
  europe: Europe,
  switzerland: Switzerland,
  'switzerland.basel': SwitzerlandBasel,
  'switzerland.chur': SwitzerlandChur,
  'switzerland.lausanne-geneva-fribourg': SwitzerlandLausanneGenevaFribourg,
  'switzerland.lugano': SwitzerlandLugano,
  'switzerland.saint-maurice': SwitzerlandSaintMauriceAbbey,
  'switzerland.sankt-gallen': SwitzerlandSanktGallen,
  'switzerland.sion': SwitzerlandSion,
};
