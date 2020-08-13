import * as Calendars from '@romcal/calendars';

/**
 * A dynamic array that contains a resolved list of country names from the ./calendars directory of the module.
 * The country list can be used by the end user to get a view of what countries are currently supported by `romcal` for
 * calendar generation.
 */
export const COUNTRIES: Array<keyof typeof Calendars> = Object.keys(Calendars) as Array<keyof typeof Calendars>;
