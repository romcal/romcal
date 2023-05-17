import { Locale, MartyrologyMap } from '@romcal/shared';

import { BundleInputs, ParticularConfig } from './calendar-def';
import { Id } from './common';

export interface BaseRomcalBundle {
  calendarName: Id;
  particularConfig: ParticularConfig;
  inputs: BundleInputs;
  martyrology: MartyrologyMap;
  i18n: Locale;
}

export type RomcalBundleObject = BaseRomcalBundle;
