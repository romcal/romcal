import { BaseRomcalBundle } from '../../src/types/bundle';

export type Fixture = {
  /** Base romcal bundle instance */
  calendar: BaseRomcalBundle;
  /** Localization tests definition */
  tests: {
    /** Liturgical celebration localization key name */
    key: string;
    /** Expected value of a localized liturgical celebration name */
    value: string;
  }[];
}[];
