import { BundleInputs, ParticularConfig } from './calendar-def';
import { Id } from './common';
import { Locale } from './locale';
import { MartyrologyCatalog } from './martyrology';

export interface BaseRomcalBundle {
  calendarName: Id;
  particularConfig: ParticularConfig;
  inputs: BundleInputs;
  martyrology: MartyrologyCatalog;
  i18n: Locale;
}

export type RomcalBundleObject = BaseRomcalBundle;
