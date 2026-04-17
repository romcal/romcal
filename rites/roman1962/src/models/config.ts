import type { i18n } from '@internal/i18n';

import { collectOverlayNames } from '../calendars/apply';
import type { CalendarOverlay1962 } from '../calendars/types';
import { createI18n1962, createNameTranslator, type NameTranslator } from '../i18n/init';
import type { Romcal1962ConfigInput, Romcal1962ConfigOutput } from '../romcal-1962-types';
import type { CommemorationCapMode } from '../rubrics/commemoration-cap';

const DEFAULT_LOCALE_ID = 'la';

export class Romcal1962Config {
  readonly localeId: string;
  readonly includePropers: boolean;
  readonly propersLocales: string[];
  readonly attachToCommemorations: boolean;
  readonly commemorationLimit: CommemorationCapMode;
  readonly calendar?: CalendarOverlay1962;
  readonly i18next: i18n;
  readonly translateName: NameTranslator;

  constructor(input: Romcal1962ConfigInput = {}) {
    this.localeId = input.localeId ?? DEFAULT_LOCALE_ID;
    this.includePropers = input.includePropers ?? false;
    this.propersLocales = [...(input.propersLocales ?? [this.localeId])];
    this.attachToCommemorations = input.attachToCommemorations ?? false;
    this.commemorationLimit = input.commemorationLimit ?? 'all';
    this.calendar = input.calendar ? new input.calendar() : undefined;
    const extraNames = this.calendar ? collectOverlayNames(this.calendar) : undefined;
    this.i18next = createI18n1962(this.localeId, extraNames);
    this.translateName = createNameTranslator(this.i18next);
  }

  toObject(): Romcal1962ConfigOutput {
    return {
      localeId: this.localeId,
      includePropers: this.includePropers,
      propersLocales: [...this.propersLocales],
      attachToCommemorations: this.attachToCommemorations,
      commemorationLimit: this.commemorationLimit,
      ...(this.calendar ? { calendarId: this.calendar.id } : {}),
    };
  }
}
