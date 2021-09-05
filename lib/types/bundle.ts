import { BundleInputs, ParticularConfig } from './calendar-def';
import { Key } from './common';
import { Locale } from './locale';
import { MartyrologyCatalog } from './martyrology';

export interface BaseRomcalBundle {
  calendarName: Key;
  particularConfig: ParticularConfig;
  inputs: BundleInputs;
  martyrology: MartyrologyCatalog;
  i18n: Locale;
}

export type RomcalBundleObject = BaseRomcalBundle;
