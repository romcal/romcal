import { Switzerland } from './countries/switzerland';
import { SwitzerlandChur } from './countries/switzerland/diocese-of-chur';
import { Europe } from './regions/europe';
import type { CalendarOverlay1962 } from './types';

export { applyOverlay, collectOverlayNames } from './apply';
export type { OverlayApplyResult } from './apply';
export { Europe } from './regions/europe';
export { Switzerland } from './countries/switzerland';
export { SwitzerlandChur } from './countries/switzerland/diocese-of-chur';
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
  'switzerland.chur': SwitzerlandChur,
};
