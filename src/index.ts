import { Calendar, Celebrations, Dates, Seasons, Locales } from "./lib";

import { LiturgicalCycles, LiturgicalColors, PsalterWeeks, LiturgicalSeasons, Titles, Types } from "./constants";

import { countryKeys } from "./utils/type-guards";

// Export an array of countries for external use
// Export an array of locales for external use
export { countryKeys as Countries };

// Export all lib functions
export { Calendar, Celebrations, Dates, Seasons, Locales };

// Export all constants
export { LiturgicalCycles, LiturgicalColors, PsalterWeeks, LiturgicalSeasons, Titles, Types };

const { calendarFor, queryFor } = Calendar;

export { calendarFor, queryFor };

// Default entry point is exported as Romcal
export default Calendar;
