import { CalendarScope, DEFAULT_CALENDAR_CONFIG } from '../constants';
import { RomcalConfig, RomcalConfigInput } from '../types';
import { assertYearIsValid } from './isYearValid.util';

export const sanitizeConfig = (config?: RomcalConfigInput): RomcalConfig => {
  const year = config?.year ?? new Date().getFullYear();
  assertYearIsValid(year);

  const epiphanyOnSunday =
    config?.epiphanyOnSunday ??
    config?.calendar?.config.epiphanyOnSunday ??
    config?.properOfTime?.config.epiphanyOnSunday ??
    DEFAULT_CALENDAR_CONFIG.epiphanyOnSunday;
  const ascensionOnSunday =
    config?.ascensionOnSunday ??
    config?.calendar?.config.ascensionOnSunday ??
    config?.properOfTime?.config.ascensionOnSunday ??
    DEFAULT_CALENDAR_CONFIG.ascensionOnSunday;
  const corpusChristiOnSunday =
    config?.corpusChristiOnSunday ??
    config?.calendar?.config.corpusChristiOnSunday ??
    config?.properOfTime?.config.corpusChristiOnSunday ??
    DEFAULT_CALENDAR_CONFIG.corpusChristiOnSunday;

  return {
    year,
    calendar: config?.calendar,
    properOfTime: config?.properOfTime,
    locale: config?.locale,
    scope: config?.scope ?? CalendarScope.Gregorian,
    epiphanyOnSunday,
    ascensionOnSunday,
    corpusChristiOnSunday,
  };
};
