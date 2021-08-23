import { BundleDefinitions, ParticularConfig } from '@romcal/types/calendar-def';
import { Key } from '@romcal/types/common';
import { Locale } from '@romcal/types/locale';
import { MartyrologyCatalog } from '@romcal/types/martyrology';

export interface BaseRomcalBundle {
  calendarName: Key;
  particularConfig: ParticularConfig;
  definitions: BundleDefinitions;
  martyrology: MartyrologyCatalog;
  i18n: Locale;
}

export type RomcalBundleObject = BaseRomcalBundle;
