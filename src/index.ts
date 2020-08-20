import '@romcal/utils/string-extentions/string-extentions';
import Romcal from '@romcal/lib/romcal';
import { getLocale, getRankByDayOfWeek, localize, localizeDates, sanitizeLocale, setLocale } from '@romcal/lib/locales';
import { Seasons } from '@romcal/lib/seasons';
import { RomcalCalendar, BaseRomcalCalendar } from '@romcal/models/calendar/calendar.model';
import { Dates } from './lib/dates';
import { RomcalLocale, RomcalLocaleKeys } from '@romcal/models/locale/romcal-locale.type';
import { LiturgicalDay, isRomcalLiturgicalDay } from '@romcal/models/liturgical-day/liturgical-day.model';
import {
  RomcalConfig,
  BaseRomcalConfig,
  BaseRomcalConfigWithoutYear,
  RomcalCalendarScope,
  RomcalConfigInCalendarDef,
} from '@romcal/models/config/config.model';
import { COUNTRIES } from '@romcal/constants/countries/countries.constant';
import { LITURGICAL_COLORS } from '@romcal/constants/liturgical-colors/liturgical-colors.constant';
import {
  CELEBRATIONS_CYCLE,
  SUNDAYS_CYCLE,
  WEEKDAYS_CYCLE,
  PSALTER_WEEKS,
} from '@romcal/constants/cycles/cycles.constant';
import {
  LITURGICAL_PERIODS,
  LITURGICAL_SEASONS,
} from '@romcal/constants/seasons-and-periods/seasons-and-periods.constant';
import { QUERY_TYPES } from '@romcal/constants/query-options/query-types.constant';
import { TITLES } from '@romcal/constants/titles/titles.constant';
import { RANKS } from '@romcal/constants/ranks/ranks.constant';
import {
  RomcalLiturgicalColor,
  RomcalLiturgicalColors,
} from '@romcal/constants/liturgical-colors/liturgical-colors.type';
import { RomcalCountry } from '@romcal/constants/countries/country.type';
import {
  RomcalCyclesMetadata,
  RomcalCelebrationCycle,
  RomcalSundayCycle,
  RomcalWeekdayCycle,
  RomcalPsalterWeek,
} from '@romcal/constants/cycles/cycles.type';
import {
  RomcalLiturgicalSeason,
  RomcalLiturgicalSeasons,
  RomcalLiturgicalPeriod,
  RomcalLiturgicalPeriods,
} from '@romcal/constants/seasons-and-periods/seasons-and-periods.type';
import { RomcalLocaleKey } from '@romcal/models/locale/locale-types.type';
import { RomcalLocalizeParams } from '@romcal/models/locale/localize-params.type';
import { RomcalQuery, RomcalQueryType } from '@romcal/constants/query-options/query-types.type';
import { RomcalTitle, RomcalTitles } from '@romcal/constants/titles/titles.type';
import { RomcalRank, RomcalRanks } from '@romcal/constants/ranks/ranks.type';
import {
  BaseRomcalLiturgicalDay,
  BaseRomcalLiturgicalDayInput,
  RomcalLiturgicalDayExtendedInput,
  RomcalLiturgicalDayArgs,
  RomcalLiturgicalDayInput,
  RomcalLiturgicalDaySources,
  RomcalCalendarMetadata,
  RomcalLiturgicalDayMetadata,
} from '@romcal/models/liturgical-day/liturgical-day.types';
import { logger } from './utils/logger/logger';
import {
  areRomcalLiturgicalDays,
  isISODateString,
  isRomcalConfig,
  isRomcalCountry,
  isRomcalLocale,
  ISO8601DateString,
  Dictionary,
} from '@romcal/utils/type-guards/type-guards';

/**
 * Export the main Romcal module.
 */
export default Romcal;

/**
 * Export for models supporting romcal
 */
export { LiturgicalDay, RomcalCalendar, RomcalConfig };

/**
 * Export for helper methods in [[Dates]]
 */
export { Dates };

/**
 * Export for helper methods in [[Seasons]]
 */
export { Seasons };

/**
 * Export for helper functions in the [[Locales]]
 */
export { getLocale, getRankByDayOfWeek, localize, localizeDates, sanitizeLocale, setLocale };

/**
 * Export for constants supporting romcal
 */
export {
  COUNTRIES,
  CELEBRATIONS_CYCLE,
  SUNDAYS_CYCLE,
  WEEKDAYS_CYCLE,
  PSALTER_WEEKS,
  LITURGICAL_COLORS,
  QUERY_TYPES,
  RANKS,
  LITURGICAL_SEASONS,
  LITURGICAL_PERIODS,
  TITLES,
};

/**
 * Export for types supporting romcal
 */
export {
  // Locales
  RomcalLocale,
  RomcalLocaleKeys,
  RomcalLocaleKey,
  RomcalLocalizeParams,
  // LiturgicalDay
  BaseRomcalLiturgicalDay,
  BaseRomcalLiturgicalDayInput,
  RomcalLiturgicalDayExtendedInput,
  RomcalLiturgicalDayInput,
  RomcalLiturgicalDayArgs,
  RomcalQuery,
  RomcalQueryType,
  // LiturgicalDay metadata
  RomcalRank,
  RomcalRanks,
  ISO8601DateString,
  RomcalLiturgicalColor,
  RomcalLiturgicalColors,
  RomcalLiturgicalSeason,
  RomcalLiturgicalSeasons,
  RomcalLiturgicalPeriod,
  RomcalLiturgicalPeriods,
  RomcalCyclesMetadata,
  RomcalCelebrationCycle,
  RomcalSundayCycle,
  RomcalWeekdayCycle,
  RomcalPsalterWeek,
  RomcalCalendarMetadata,
  RomcalLiturgicalDayMetadata,
  RomcalTitle,
  RomcalTitles,
  RomcalLiturgicalDaySources,
  // Countries
  RomcalCountry,
  // Config
  BaseRomcalConfig,
  BaseRomcalConfigWithoutYear,
  RomcalConfigInCalendarDef,
  RomcalCalendarScope,
  // Calendar
  BaseRomcalCalendar,
  Dictionary,
};

/**
 * Type Guards
 */
export {
  isRomcalLiturgicalDay,
  areRomcalLiturgicalDays,
  isRomcalConfig,
  isISODateString,
  isRomcalCountry,
  isRomcalLocale,
};

/**
 * Miscellaneous exports
 */
export { logger };
