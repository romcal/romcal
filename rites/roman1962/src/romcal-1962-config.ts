import type { Romcal1962ConfigInput, Romcal1962ConfigOutput } from './romcal-1962-types';
import type { CommemorationCapMode } from './rubrics/commemoration-cap';

const DEFAULT_LOCALES: readonly string[] = ['la'];

export class Romcal1962Config {
  readonly includePropers: boolean;
  readonly propersLocales: string[];
  readonly attachToCommemorations: boolean;
  readonly commemorationLimit: CommemorationCapMode;

  constructor(input: Romcal1962ConfigInput = {}) {
    this.includePropers = input.includePropers ?? false;
    this.propersLocales = [...(input.propersLocales ?? DEFAULT_LOCALES)];
    this.attachToCommemorations = input.attachToCommemorations ?? false;
    this.commemorationLimit = input.commemorationLimit ?? 'all';
  }

  toObject(): Romcal1962ConfigOutput {
    return {
      includePropers: this.includePropers,
      propersLocales: [...this.propersLocales],
      attachToCommemorations: this.attachToCommemorations,
      commemorationLimit: this.commemorationLimit,
    };
  }
}
