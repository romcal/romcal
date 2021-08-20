import { Locale } from '@romcal/types/locale';
import { BundleDefinitions, ParticularConfig } from '@romcal/types/calendar-def';
import { MartyrologyCatalog } from '@romcal/types/martyrology';
import { Key } from '@romcal/types/liturgical-day';

export interface BaseRomcalBundle {
  calendarName: Key;
  particularConfig: ParticularConfig;
  definitions: BundleDefinitions;
  martyrology: MartyrologyCatalog;
  i18n: Locale;
}

export type RomcalBundleObject = BaseRomcalBundle;
