import { Locale, MartyrologyMap } from '@romcal/shared';

import { BaseRomcalBundle } from '../types/bundle';
import { BundleInputs, ParticularConfig } from '../types/calendar-def';
import { Id } from '../types/common';

export class RomcalBundle implements BaseRomcalBundle {
  calendarName: Id;
  particularConfig: ParticularConfig;
  inputs: BundleInputs;
  martyrology: MartyrologyMap;
  i18n: Locale;

  constructor(input: BaseRomcalBundle) {
    this.calendarName = input.calendarName;
    this.particularConfig = input.particularConfig;
    this.inputs = input.inputs;
    this.martyrology = input.martyrology;
    this.i18n = input.i18n;
  }
}
